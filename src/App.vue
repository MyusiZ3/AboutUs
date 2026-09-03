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
            <span class="mobile-turn-label font-sans">{{ t('turnLabel') }}</span>
            <span class="mobile-turn-player font-editorial">{{ formatPlayerName(players[currentPlayerIndex]) }}</span>
          </div>
          <div class="mobile-progress-bar-wrap">
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
            </div>
            <span class="mobile-progress-text">{{ history.length }} / {{ deck.length }} {{ t('cardsAnswered') }}</span>
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
                  <span class="panel-subtitle font-sans">{{ t('turnLabel') }}</span>
                  <h2 class="panel-player-name font-editorial">{{ formatPlayerName(players[currentPlayerIndex]) }}</h2>
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
                    <span class="chip-player-name">{{ formatPlayerName(player) }}</span>
                  </div>
                </div>
              </div>

              <!-- Middle: Deck Progress Bar (Desktop Only) -->
              <div class="progress-box font-sans desktop-turn-info">
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
                </div>
                <span class="progress-label">{{ history.length }} / {{ deck.length }} {{ t('cardsAnswered') }}</span>
              </div>

              <div class="dashboard-divider"></div>

              <!-- Bottom: Actions -->
              <div class="dashboard-actions">
                <button 
                  class="btn btn-primary btn-next-turn-large"
                  @click="nextTurn"
                >
                  <span>{{ t('nextTurn') }}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <div class="quick-action-grid font-sans">
                  <button class="btn btn-secondary" @click="skipCard" title="Tarik kartu lain tanpa ganti giliran">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="13 17 18 12 13 7"></polyline>
                      <polyline points="6 17 11 12 6 7"></polyline>
                    </svg>
                    <span>{{ t('changeCard') }}</span>
                  </button>

                  <button class="btn btn-secondary" @click="isEditionDrawerOpen = true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                    <span>{{ t('changeEdition') }}</span>
                  </button>

                  <button class="btn btn-secondary" @click="isSavedOpen = true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>{{ t('savedCount') }} ({{ savedCards.length }})</span>
                  </button>

                  <button class="btn btn-ghost btn-finish-session" @click="isSummaryOpen = true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>{{ t('finishSession') }}</span>
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
        <p class="footer-copy">{{ t('copyright') }}</p>
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
      :savedCount="savedCards.length"
      @close="isSummaryOpen = false"
      @continue-playing="isSummaryOpen = false"
      @new-game="resetToHome"
    />

    <EditionDrawer
      :isOpen="isEditionDrawerOpen"
      :currentEditionId="selectedEdition"
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

import { QUESTIONS } from './data/questions.js';
import { playCardFlipSound, playButtonClickSound } from './utils/audio.js';
import { t, formatPlayerName } from './utils/i18n.js';

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
  if (!deck.value.length) return 0;
  return Math.round((history.value.length / deck.value.length) * 100);
});

// Fisher-Yates shuffle helper
function shuffleArray(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function handleStartGame(setupData) {
  players.value = setupData.playerNames;
  selectedEdition.value = setupData.editionId;
  selectedLevel.value = setupData.level;

  const rawDeck = getFilteredQuestions(selectedEdition.value, selectedLevel.value);
  deck.value = shuffleArray(rawDeck);
  
  currentCardIndex.value = 0;
  currentPlayerIndex.value = 0;
  isFlipped.value = false;
  history.value = [];
  isPlaying.value = true;
}

function nextTurn() {
  playButtonClickSound();

  // Record current card to history if not recorded yet
  if (currentCard.value) {
    const alreadyRecorded = history.value.some(h => h.card.id === currentCard.value.id);
    if (!alreadyRecorded) {
      history.value.push({
        player: players.value[currentPlayerIndex.value],
        card: currentCard.value
      });
    }
  }

  // Advance player index
  currentPlayerIndex.value = (currentPlayerIndex.value + 1) % players.value.length;

  // Advance card index
  if (currentCardIndex.value < deck.value.length - 1) {
    currentCardIndex.value++;
    isFlipped.value = false;
  } else {
    // Reached end of deck -> show summary
    isSummaryOpen.value = true;
  }
}

function skipCard() {
  playButtonClickSound();
  if (currentCardIndex.value < deck.value.length - 1) {
    currentCardIndex.value++;
    isFlipped.value = false;
  }
}

function handleChangeEdition(newEditionId) {
  selectedEdition.value = newEditionId;
  const rawDeck = getFilteredQuestions(newEditionId, selectedLevel.value);
  deck.value = shuffleArray(rawDeck);
  currentCardIndex.value = 0;
  isFlipped.value = false;
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
}

function removeSavedCard(cardId) {
  savedCards.value = savedCards.value.filter(c => c.id !== cardId);
}

function resetToHome() {
  playButtonClickSound();
  isPlaying.value = false;
  isSummaryOpen.value = false;
}
</script>

<style scoped>
#app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--bg-main);
  overflow-x: hidden;
}

.bg-accent-decor {
  position: fixed;
  top: 10%;
  width: 220px;
  height: 440px;
  pointer-events: none;
  z-index: 0;
  color: #D4A373;
  opacity: 0.18;
}

.bg-decor-left {
  left: 0;
}

.bg-decor-right {
  right: 0;
}

.app-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.gameplay-viewport {
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mobile-turn-bar {
  display: none;
  background: var(--bg-surface);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-md);
  padding: 0.85rem 1rem;
  margin-bottom: 1.25rem;
  box-shadow: var(--shadow-sm);
}

.mobile-turn-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}

.mobile-turn-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  font-weight: 700;
}

.mobile-turn-player {
  font-size: 1.2rem;
  color: var(--text-main);
  font-weight: 600;
}

.mobile-progress-bar-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mobile-progress-text {
  font-size: 0.75rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.gameplay-split-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.gameplay-left-col {
  display: flex;
  justify-content: center;
}

.gameplay-right-col {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.dashboard-panel {
  background: var(--bg-surface);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.panel-header {
  margin-bottom: 1.25rem;
}

.panel-subtitle {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  font-weight: 700;
  display: block;
  margin-bottom: 0.25rem;
}

.panel-player-name {
  font-size: 2.2rem;
  color: var(--text-main);
  line-height: 1.15;
}

.players-chips-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.player-chip-item {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-full);
  background: var(--bg-main);
  border: 1px solid var(--border-light);
  font-size: 0.82rem;
  color: var(--text-muted);
  transition: var(--transition-smooth);
}

.player-chip-item.active {
  background: var(--text-main);
  color: var(--bg-surface);
  border-color: var(--text-main);
  font-weight: 600;
}

.chip-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-light);
}

.player-chip-item.active .chip-status-dot {
  background: #D4A373;
}

.progress-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.progress-bar-bg {
  height: 6px;
  width: 100%;
  background: var(--bg-main);
  border-radius: var(--radius-full);
  overflow: hidden;
  border: 1px solid var(--border-light);
}

.progress-bar-fill {
  height: 100%;
  background: var(--text-main);
  border-radius: var(--radius-full);
  transition: width 0.3s ease;
}

.progress-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-align: right;
}

.dashboard-divider {
  height: 1px;
  background: var(--border-light);
  margin: 1.5rem 0;
}

.dashboard-actions {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.btn-next-turn-large {
  width: 100%;
  padding: 0.95rem 1.5rem;
  font-size: 1rem;
  justify-content: center;
  border-radius: var(--radius-full);
}

.quick-action-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
}

.quick-action-grid button {
  font-size: 0.82rem;
  padding: 0.65rem 0.75rem;
  white-space: nowrap;
}

.btn-finish-session {
  color: #C85A5A;
}

.app-footer {
  border-top: 1px solid var(--border-light);
  padding: 1.25rem 0;
  margin-top: auto;
}

.footer-content {
  text-align: center;
}

.footer-copy {
  font-size: 0.78rem;
  color: var(--text-light);
}

@media (max-width: 860px) {
  .gameplay-split-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mobile-turn-bar {
    display: block;
  }

  .desktop-turn-info {
    display: none;
  }

  .dashboard-panel {
    padding: 1.25rem;
  }

  .dashboard-divider {
    margin: 0.5rem 0 1rem 0;
  }
}
</style>
