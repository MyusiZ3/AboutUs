<template>
  <div id="app-root">
    <!-- Background Editorial Botanical Accents -->
    <div class="bg-accent-decor bg-decor-left" aria-hidden="true">
      <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 380 C 60 300, 110 220, 70 140 C 50 100, 30 60, 10 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M70 140 C 105 115, 135 125, 140 150 C 115 170, 85 160, 70 140 Z" fill="currentColor"/>
        <path d="M85 190 C 125 175, 150 190, 155 215 C 125 230, 95 215, 85 190 Z" fill="currentColor"/>
        <path d="M58 250 C 25 235, 10 250, 15 275 C 40 280, 60 265, 58 250 Z" fill="currentColor"/>
        <path d="M35 80 C 65 60, 85 70, 88 90 C 68 105, 48 95, 35 80 Z" fill="currentColor"/>
        <circle cx="10" cy="20" r="6" fill="currentColor"/>
      </svg>
    </div>

    <div class="bg-accent-decor bg-decor-right" aria-hidden="true">
      <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M160 380 C 140 300, 90 220, 130 140 C 150 100, 170 60, 190 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M130 140 C 95 115, 65 125, 60 150 C 85 170, 115 160, 130 140 Z" fill="currentColor"/>
        <path d="M115 190 C 75 175, 50 190, 45 215 C 75 230, 105 215, 115 190 Z" fill="currentColor"/>
        <path d="M142 250 C 175 235, 190 250, 185 275 C 160 280, 140 265, 142 250 Z" fill="currentColor"/>
        <path d="M165 80 C 135 60, 115 70, 112 90 C 132 105, 152 95, 165 80 Z" fill="currentColor"/>
        <circle cx="190" cy="20" r="6" fill="currentColor"/>
      </svg>
    </div>

    <!-- Header -->
    <HeaderNav 
      :isPlaying="isPlaying"
      :savedCount="savedCards.length"
      @reset-to-home="resetToHome"
      @open-rules="isRulesOpen = true"
      @open-saved="isSavedOpen = true"
    />

    <!-- Main View Switcher -->
    <main class="app-main">
      <!-- SETUP VIEW -->
      <GameSetup 
        v-if="!isPlaying"
        @start-game="handleStartGame"
      />

      <!-- GAMEPLAY VIEW (Zero-Scroll Dual Panel Layout) -->
      <div v-else class="gameplay-viewport container-wide">
        <!-- Compact Top Turn Bar for Mobile Only -->
        <div class="mobile-turn-bar font-sans">
          <div class="mobile-turn-row">
            <span class="mobile-turn-label font-sans">Giliran Berbicara</span>
            <span class="mobile-turn-player font-editorial">{{ players[currentPlayerIndex] }}</span>
          </div>
          <div class="mobile-progress-bar-wrap">
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
            </div>
            <span class="mobile-progress-text">{{ history.length }} / {{ deck.length }} Terjawab</span>
          </div>
        </div>

        <div class="gameplay-split-grid">
          
          <!-- LEFT COLUMN: 3D Interactive Question Card -->
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

          <!-- RIGHT COLUMN: Unified Control & Turn Dashboard -->
          <div class="gameplay-right-col">
            <div class="dashboard-panel control-dashboard">
              <!-- Top: Turn & Players Status (Desktop Only) -->
              <div class="dashboard-top desktop-turn-info">
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
              </div>

              <!-- Middle: Deck Progress Bar (Desktop Only) -->
              <div class="progress-box font-sans desktop-turn-info">
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
                </div>
                <span class="progress-label">{{ history.length }} / {{ deck.length }} Terjawab</span>
              </div>

              <div class="dashboard-divider"></div>

              <!-- Bottom: Actions -->
              <div class="dashboard-actions">
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
      </div>
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="container-wide footer-content font-sans">
        <p class="footer-copy">&copy; Arch | Tentang Kita, 2026</p>
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

    <SessionSummaryModal
      :isOpen="isSummaryOpen"
      :players="players"
      :history="history"
      :savedCardsCount="savedCards.length"
      @close="isSummaryOpen = false"
      @reset-game="resetToHome"
    />

    <EditionDrawer
      :isOpen="isEditionDrawerOpen"
      :currentEdition="selectedEdition"
      @close="isEditionDrawerOpen = false"
      @change-edition="handleChangeEdition"
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
import SessionSummaryModal from './components/SessionSummaryModal.vue';
import EditionDrawer from './components/EditionDrawer.vue';

import { QUESTIONS, EDITIONS } from './data/questions.js';
import { playCardFlipSound, playButtonClickSound } from './utils/audio.js';

function getFilteredQuestions(editionId, levelFilter) {
  let list = QUESTIONS;
  if (editionId !== 'all') {
    list = list.filter(q => q.edition === editionId);
  }
  if (levelFilter && levelFilter > 0) {
    list = list.filter(q => q.level === levelFilter);
  }
  return list;
}

// Game state
const isPlaying = ref(false);
const players = ref(['Pemain 1', 'Pemain 2']);
const currentPlayerIndex = ref(0);
const selectedEdition = ref('pasangan');
const selectedLevel = ref(0);

// Deck state
const deck = ref([]);
const currentCardIndex = ref(0);
const isFlipped = ref(false);
const history = ref([]); // Cards played in this session
const savedCards = ref([]); // Saved questions for later

// Modals / Drawers
const isRulesOpen = ref(false);
const isSavedOpen = ref(false);
const isSummaryOpen = ref(false);
const isEditionDrawerOpen = ref(false);

const currentCard = computed(() => {
  return deck.value[currentCardIndex.value] || null;
});

const progressPercent = computed(() => {
  if (deck.value.length === 0) return 0;
  return Math.round((history.value.length / deck.value.length) * 100);
});

onMounted(() => {
  // Load saved cards from localStorage if available
  const stored = localStorage.getItem('tentang_kita_saved_cards');
  if (stored) {
    try {
      savedCards.value = JSON.parse(stored);
    } catch (e) {
      savedCards.value = [];
    }
  }
});

function handleStartGame(setupData) {
  players.value = setupData.players;
  selectedEdition.value = setupData.editionId;
  selectedLevel.value = setupData.levelFilter;
  
  // Build and shuffle deck
  let filtered = getFilteredQuestions(selectedEdition.value, selectedLevel.value);
  deck.value = shuffleArray([...filtered]);
  
  currentCardIndex.value = 0;
  currentPlayerIndex.value = 0;
  isFlipped.value = false;
  history.value = [];
  isPlaying.value = true;
}

function nextTurn() {
  playCardFlipSound();
  
  // Record history
  if (currentCard.value && !history.value.find(h => h.id === currentCard.value.id)) {
    history.value.push(currentCard.value);
  }

  // Advance player turn
  currentPlayerIndex.value = (currentPlayerIndex.value + 1) % players.value.length;
  
  // Advance card index
  if (currentCardIndex.value < deck.value.length - 1) {
    currentCardIndex.value++;
  } else {
    // Re-shuffle deck if finished
    deck.value = shuffleArray([...deck.value]);
    currentCardIndex.value = 0;
  }
  
  isFlipped.value = false;
}

function skipCard() {
  playButtonClickSound();
  if (currentCardIndex.value < deck.value.length - 1) {
    currentCardIndex.value++;
  } else {
    deck.value = shuffleArray([...deck.value]);
    currentCardIndex.value = 0;
  }
  isFlipped.value = false;
}

function handleChangeEdition(editionId) {
  selectedEdition.value = editionId;
  let filtered = getFilteredQuestions(editionId, selectedLevel.value);
  deck.value = shuffleArray([...filtered]);
  currentCardIndex.value = 0;
  isFlipped.value = false;
  isEditionDrawerOpen.value = false;
}

function toggleSaveCard() {
  playButtonClickSound();
  if (!currentCard.value) return;
  const idx = savedCards.value.findIndex(c => c.id === currentCard.value.id);
  if (idx >= 0) {
    savedCards.value.splice(idx, 1);
  } else {
    savedCards.value.push(currentCard.value);
  }
  localStorage.setItem('tentang_kita_saved_cards', JSON.stringify(savedCards.value));
}

function removeSavedCard(cardId) {
  playButtonClickSound();
  savedCards.value = savedCards.value.filter(c => c.id !== cardId);
  localStorage.setItem('tentang_kita_saved_cards', JSON.stringify(savedCards.value));
}

function isCardSaved(cardId) {
  return savedCards.value.some(c => c.id === cardId);
}

function resetToHome() {
  playButtonClickSound();
  isPlaying.value = false;
}

// Utility Fisher-Yates shuffle
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
</script>

<style scoped>
#app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Gameplay Viewport Split Layout */
.gameplay-viewport {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  min-height: calc(100vh - 120px);
  width: 100%;
}

.gameplay-split-grid {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
}

.gameplay-left-col {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gameplay-right-col {
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
}

/* Single Control Dashboard Panel */
.control-dashboard {
  background-color: var(--bg-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-medium);
  padding: 1.6rem 1.6rem;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  min-height: 480px;
  height: auto;
  justify-content: space-between;
  box-sizing: border-box;
}

.dashboard-top {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.panel-header {
  border-bottom: 1px solid var(--border-light);
  padding-bottom: 0.65rem;
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
  padding: 0.35rem 0.8rem;
  border-radius: var(--radius-full);
  font-size: 0.82rem;
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

.dashboard-divider {
  height: 1px;
  background-color: var(--border-light);
}

.dashboard-actions {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.btn-next-turn-large {
  width: 100%;
  padding: 0.85rem 1.25rem;
  font-size: 0.98rem;
  box-shadow: 0 8px 24px -6px rgba(45, 42, 38, 0.25);
}

.quick-action-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.65rem;
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
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* Mobile Turn Bar */
.mobile-turn-bar {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 310px;
  margin: 0 auto 0.75rem auto;
  padding: 0.75rem 1rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-soft);
  box-sizing: border-box;
}

.mobile-turn-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.mobile-turn-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.mobile-turn-player {
  font-size: 1.15rem;
  color: var(--text-main);
  font-weight: 600;
}

.mobile-progress-bar-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mobile-progress-text {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-muted);
  white-space: nowrap;
}

/* Background Editorial Botanical Accents */
.bg-accent-decor {
  position: fixed;
  pointer-events: none;
  z-index: 0;
  color: var(--text-main);
  opacity: 0.065;
  transition: opacity 0.5s ease;
}

.bg-decor-left {
  top: 15%;
  left: -25px;
  width: 220px;
  height: 440px;
  transform: rotate(-10deg);
}

.bg-decor-right {
  bottom: 8%;
  right: -25px;
  width: 240px;
  height: 480px;
  transform: rotate(8deg);
}

@media (max-width: 1200px) {
  .bg-accent-decor {
    opacity: 0.045;
  }
}

@media (max-width: 900px) {
  .bg-accent-decor {
    display: none;
  }

  .mobile-turn-bar {
    display: flex;
    width: 100%;
    max-width: 320px;
    box-sizing: border-box;
  }

  .desktop-turn-info {
    display: none !important;
  }

  .dashboard-divider {
    display: none !important;
  }

  .gameplay-viewport {
    height: auto !important;
    min-height: auto !important;
    padding: 0.5rem 0 1.5rem 0 !important;
    width: 100% !important;
    overflow-x: hidden !important;
  }

  .gameplay-split-grid {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: flex-start !important;
    width: 100% !important;
    max-width: 100% !important;
    gap: 0.75rem !important;
    grid-template-columns: none !important;
  }

  .gameplay-left-col {
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .gameplay-right-col {
    width: 100% !important;
    max-width: 310px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  .control-dashboard {
    width: 100% !important;
    max-width: 100% !important;
    min-height: auto !important;
    height: auto !important;
    padding: 0 !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    gap: 0.65rem !important;
  }

  .btn-next-turn-large {
    width: 100% !important;
    padding: 0.85rem 1.25rem !important;
    font-size: 0.95rem !important;
  }

  .quick-action-grid {
    width: 100% !important;
    gap: 0.45rem !important;
  }

  .quick-action-grid .btn {
    padding: 0.55rem 0.5rem !important;
    font-size: 0.78rem !important;
    white-space: nowrap !important;
    gap: 0.35rem !important;
  }
}
</style>
