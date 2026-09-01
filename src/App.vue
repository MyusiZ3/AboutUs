<template>
  <div id="app" class="app-layout" :class="{ 'no-scroll-gameplay': gameState === 'playing' }">
    <!-- Navbar Navigation -->
    <HeaderNav 
      :isPlaying="gameState === 'playing'"
      :selectedEditionId="selectedEditionId"
      :savedCount="savedCards.length"
      @reset-to-home="resetToHome"
      @open-rules="isRulesOpen = true"
      @open-saved="isSavedOpen = true"
      @change-edition="changeEditionMidGame"
    />

    <!-- Main Content Body -->
    <main class="main-content">
      <!-- SETUP STATE -->
      <GameSetup 
        v-if="gameState === 'setup'"
        @start-game="startGame"
      />

      <!-- PLAYING STATE (Split Screen Viewport - No Scroll) -->
      <div v-else-if="gameState === 'playing'" class="gameplay-viewport">
        <div class="container-wide gameplay-split-grid">
          
          <!-- LEFT COLUMN: Interactive 3D Card -->
          <div class="gameplay-left-col">
            <CardDisplay 
              v-if="currentCard"
              :card="currentCard"
              :isFlipped="isFlipped"
              :currentCardIndex="currentCardIndex"
              :totalCards="deck.length"
              :isSaved="isCardSaved(currentCard.id)"
              @toggle-flip="isFlipped = !isFlipped"
              @toggle-save="toggleSaveCard"
            />
          </div>

          <!-- RIGHT COLUMN: Dashboard & Controls -->
          <div class="gameplay-right-col">
            
            <!-- Turn & Players Status Panel -->
            <div class="dashboard-panel turn-panel">
              <div class="panel-header">
                <span class="panel-subtitle font-sans">Giliran Berbicara</span>
                <h2 class="panel-player-name font-editorial">{{ players[currentPlayerIndex] }}</h2>
              </div>

              <!-- Players list -->
              <div class="players-chips-list font-sans">
                <div 
                  v-for="(player, idx) in players" 
                  :key="idx"
                  class="player-chip-item"
                  :class="{ active: currentPlayerIndex === idx }"
                >
                  <span class="chip-status-dot"></span>
                  <span class="chip-player-name">{{ player }}</span>
                </div>
              </div>

              <!-- Deck Progress -->
              <div class="progress-box font-sans">
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
                </div>
                <span class="progress-label">{{ history.length }} / {{ deck.length }} Terjawab</span>
              </div>
            </div>

            <!-- Action Controls Panel -->
            <div class="dashboard-panel actions-panel">
              <button 
                class="btn btn-primary btn-next-turn-large"
                @click="nextTurn"
              >
                <span>Lanjut Giliran Pemain</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              <div class="quick-action-grid">
                <button class="btn btn-secondary" @click="skipCard" title="Tarik kartu lain tanpa ganti giliran">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="13 17 18 12 13 7"></polyline>
                    <polyline points="6 17 11 12 6 7"></polyline>
                  </svg>
                  <span>Ganti Kartu</span>
                </button>

                <button class="btn btn-secondary" @click="isEditionDrawerOpen = true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  <span>Ganti Edisi</span>
                </button>

                <button class="btn btn-secondary" @click="isSavedOpen = true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Tersimpan ({{ savedCards.length }})</span>
                </button>

                <button class="btn btn-ghost btn-finish-session" @click="isSummaryOpen = true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Selesai Sesi</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="container-wide footer-content font-sans">
        <p class="footer-copy">Tentang Kita &copy; 2026. Permainan Kartu Percakapan & Deep Talk.</p>
      </div>
    </footer>

    <!-- MODALS & DRAWERS -->
    <RulesModal 
      :isOpen="isRulesOpen"
      @close="isRulesOpen = false"
    />

    <SavedCardsModal 
      :isOpen="isSavedOpen"
      :savedCards="savedCards"
      @close="isSavedOpen = false"
      @remove-saved="removeSavedCard"
    />

    <EditionDrawer 
      :isOpen="isEditionDrawerOpen"
      :currentEditionId="selectedEditionId"
      @close="isEditionDrawerOpen = false"
      @change-edition="changeEditionMidGame"
    />

    <SessionSummaryModal 
      :isOpen="isSummaryOpen"
      :history="history"
      :players="players"
      :savedCount="savedCards.length"
      @close="isSummaryOpen = false"
      @continue-playing="isSummaryOpen = false"
      @new-game="resetToHome"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import HeaderNav from './components/HeaderNav.vue';
import GameSetup from './components/GameSetup.vue';
import CardDisplay from './components/CardDisplay.vue';
import RulesModal from './components/RulesModal.vue';
import SavedCardsModal from './components/SavedCardsModal.vue';
import EditionDrawer from './components/EditionDrawer.vue';
import SessionSummaryModal from './components/SessionSummaryModal.vue';

import { QUESTIONS, EDITIONS } from './data/questions.js';
import { playShuffleSound, playButtonClickSound } from './utils/audio.js';

// Application State
const gameState = ref('setup'); // 'setup' | 'playing'
const players = ref(['Pemain 1', 'Pemain 2']);
const currentPlayerIndex = ref(0);
const selectedEditionId = ref('pasangan');
const levelFilter = ref(0);

const deck = ref([]);
const currentCardIndex = ref(0);
const isFlipped = ref(false);
const history = ref([]);
const savedCards = ref([]);

// Modals State
const isRulesOpen = ref(false);
const isSavedOpen = ref(false);
const isEditionDrawerOpen = ref(false);
const isSummaryOpen = ref(false);

// Saved Cards LocalStorage Sync
onMounted(() => {
  try {
    const localSaved = localStorage.getItem('tk_saved_cards');
    if (localSaved) {
      savedCards.value = JSON.parse(localSaved);
    }
  } catch (e) {}
});

function saveToLocalStorage() {
  try {
    localStorage.setItem('tk_saved_cards', JSON.stringify(savedCards.value));
  } catch (e) {}
}

const currentCard = computed(() => {
  return deck.value[currentCardIndex.value] || null;
});

const progressPercent = computed(() => {
  if (!deck.value.length) return 0;
  return Math.min(100, Math.round((history.value.length / deck.value.length) * 100));
});

const activeEditionData = computed(() => {
  if (selectedEditionId.value === 'all') {
    return {
      id: 'all',
      title: 'Campur Semua Edisi',
      themeColor: '#D4A373',
      cardBg: '#FFFDF9'
    };
  }
  return EDITIONS[selectedEditionId.value] || EDITIONS.pasangan;
});

// Fisher-Yates Shuffle
function shuffleDeck(cards) {
  const array = [...cards];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function filterAndPrepareDeck(editionId, level) {
  let list = QUESTIONS;
  if (editionId !== 'all') {
    list = list.filter(q => q.edition === editionId);
  }
  if (level !== 0) {
    list = list.filter(q => q.level === level);
  }
  return shuffleDeck(list);
}

function startGame(config) {
  players.value = config.players;
  selectedEditionId.value = config.editionId;
  levelFilter.value = config.levelFilter;

  deck.value = filterAndPrepareDeck(config.editionId, config.levelFilter);
  currentCardIndex.value = 0;
  currentPlayerIndex.value = 0;
  isFlipped.value = false;
  history.value = [];
  gameState.value = 'playing';

  playShuffleSound();
}

function nextTurn() {
  playButtonClickSound();
  if (currentCard.value) {
    history.value.push({
      player: players.value[currentPlayerIndex.value],
      card: currentCard.value
    });
  }

  isFlipped.value = false;

  // Advance player turn
  currentPlayerIndex.value = (currentPlayerIndex.value + 1) % players.value.length;

  // Advance card index
  if (currentCardIndex.value + 1 < deck.value.length) {
    currentCardIndex.value++;
  } else {
    // Deck finished, auto open summary
    isSummaryOpen.value = true;
  }
}

function skipCard() {
  playButtonClickSound();
  isFlipped.value = false;
  if (currentCardIndex.value + 1 < deck.value.length) {
    currentCardIndex.value++;
  } else {
    // Reshuffle if reached the end
    deck.value = shuffleDeck(deck.value);
    currentCardIndex.value = 0;
  }
}

function changeEditionMidGame(newEditionId) {
  selectedEditionId.value = newEditionId;
  deck.value = filterAndPrepareDeck(newEditionId, levelFilter.value);
  currentCardIndex.value = 0;
  isFlipped.value = false;
  playShuffleSound();
}

function isCardSaved(cardId) {
  return savedCards.value.some(c => c.id === cardId);
}

function toggleSaveCard(card) {
  const index = savedCards.value.findIndex(c => c.id === card.id);
  if (index >= 0) {
    savedCards.value.splice(index, 1);
  } else {
    savedCards.value.push(card);
  }
  saveToLocalStorage();
}

function removeSavedCard(cardId) {
  savedCards.value = savedCards.value.filter(c => c.id !== cardId);
  saveToLocalStorage();
}

function resetToHome() {
  gameState.value = 'setup';
  isSummaryOpen.value = false;
}
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.no-scroll-gameplay {
  height: 100vh;
  overflow: hidden;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Gameplay Viewport Split Layout */
.gameplay-viewport {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  height: calc(100vh - 110px);
}

.gameplay-split-grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 2.5rem;
  align-items: center;
  width: 100%;
  height: 100%;
}

.gameplay-left-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gameplay-right-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: center;
  max-width: 480px;
}

/* Dashboard Panels */
.dashboard-panel {
  background-color: var(--bg-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-medium);
  padding: 1.5rem 1.75rem;
  box-shadow: var(--shadow-soft);
}

.turn-panel {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.panel-header {
  border-bottom: 1px solid var(--border-light);
  padding-bottom: 0.75rem;
}

.panel-subtitle {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  font-weight: 700;
  display: block;
  margin-bottom: 0.2rem;
}

.panel-player-name {
  font-size: 2.2rem;
  color: var(--text-main);
  line-height: 1.1;
}

/* Players chips list */
.players-chips-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.player-chip-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  background: var(--bg-main);
  color: var(--text-muted);
  border: 1px solid var(--border-light);
  transition: var(--transition-smooth);
}

.player-chip-item.active {
  background: var(--text-main);
  color: var(--bg-main);
  border-color: var(--text-main);
}

.chip-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

/* Progress Box */
.progress-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--bg-main);
  padding: 0.65rem 1rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
}

.progress-bar-bg {
  flex-grow: 1;
  height: 6px;
  border-radius: 3px;
  background: var(--bg-accent-soft);
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: var(--text-main);
  transition: width 0.35s ease;
}

.progress-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-muted);
  white-space: nowrap;
}

/* Actions Panel */
.actions-panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn-next-turn-large {
  width: 100%;
  padding: 1.1rem 1.5rem;
  font-size: 1.05rem;
  box-shadow: 0 8px 24px -6px rgba(45, 42, 38, 0.25);
}

.quick-action-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.btn-finish-session {
  grid-column: span 2;
}

/* Footer Styling */
.app-footer {
  border-top: 1px solid var(--border-light);
  padding: 0.75rem 0;
  background: rgba(250, 247, 242, 0.6);
  margin-top: auto;
}

.footer-content {
  text-align: center;
}

.footer-copy {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .no-scroll-gameplay {
    height: auto;
    overflow: auto;
  }
  .gameplay-viewport {
    height: auto;
    padding: 1.5rem 0;
  }
  .gameplay-split-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .gameplay-right-col {
    max-width: 100%;
  }
}
</style>
