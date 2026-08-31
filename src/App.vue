<template>
  <div id="app" class="app-layout">
    <!-- Navbar Navigation -->
    <HeaderNav 
      :isPlaying="gameState === 'playing'"
      :activeEdition="activeEditionData"
      :savedCount="savedCards.length"
      @reset-to-home="resetToHome"
      @open-rules="isRulesOpen = true"
      @open-saved="isSavedOpen = true"
    />

    <!-- Main Content Body -->
    <main class="main-content">
      <!-- SETUP STATE -->
      <GameSetup 
        v-if="gameState === 'setup'"
        @start-game="startGame"
      />

      <!-- PLAYING STATE -->
      <div v-else-if="gameState === 'playing'" class="gameplay-area">
        <!-- Turn Indicator Bar -->
        <TurnIndicator 
          :players="players"
          :currentPlayerIndex="currentPlayerIndex"
          :answeredCount="history.length"
          :totalCount="deck.length"
        />

        <!-- Active Interactive Card -->
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

        <!-- Game Control Action Buttons -->
        <GameControls 
          @next-turn="nextTurn"
          @skip-card="skipCard"
          @open-edition-drawer="isEditionDrawerOpen = true"
          @finish-session="isSummaryOpen = true"
        />
      </div>
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="container-wide footer-content font-sans">
        <p class="footer-copy">Tentang Kita &copy; 2026. Permainan Kartu Percakapan & Deep Talk.</p>
        <p class="footer-tagline">Didesain dengan estetika soft pastel untuk momen perbincangan yang tulus.</p>
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
import TurnIndicator from './components/TurnIndicator.vue';
import GameControls from './components/GameControls.vue';
import RulesModal from './components/RulesModal.vue';
import SavedCardsModal from './components/SavedCardsModal.vue';
import EditionDrawer from './components/EditionDrawer.vue';
import SessionSummaryModal from './components/SessionSummaryModal.vue';

import { QUESTIONS, EDITIONS } from './data/questions.js';
import { playShuffleSound } from './utils/audio.js';

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

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.gameplay-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.app-footer {
  border-top: 1px solid var(--border-light);
  padding: 1.75rem 0;
  background: rgba(250, 247, 242, 0.5);
  margin-top: auto;
}

.footer-content {
  text-align: center;
}

.footer-copy {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
}

.footer-tagline {
  font-size: 0.78rem;
  color: var(--text-light);
  margin-top: 0.2rem;
}
</style>
