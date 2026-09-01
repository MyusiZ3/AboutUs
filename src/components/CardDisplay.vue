<template>
  <div class="card-display-wrapper">
    <div class="card-perspective-container">
      <div 
        class="card-3d" 
        :class="{ 'is-flipped': isFlipped }"
        @click="handleCardClick"
      >
        <!-- FRONT FACE (Cover) -->
        <div 
          class="card-face card-face-front" 
          :style="{ 
            backgroundColor: editionData.cardBg || '#FFF5F6',
            borderColor: editionData.themeColor || '#E8AEB7' 
          }"
        >
          <div class="card-texture-overlay"></div>
          <div class="card-inner-border" :style="{ borderColor: editionData.themeColor + '40' }"></div>

          <!-- Top Brand Header -->
          <div class="card-front-top">
            <span class="front-deck-brand font-editorial">Tentang Kita<span class="brand-dot">.</span></span>
            <span class="front-deck-badge font-sans">{{ getLocalizedEditionBadge() }}</span>
          </div>

          <!-- Center Content -->
          <div class="card-front-center">
            <h2 class="card-front-title font-editorial" :style="{ color: editionData.themeColor ? editionData.themeColor : 'inherit' }">
              {{ getLocalizedField(editionData.title) }}
            </h2>
            <p class="card-front-sub font-sans">{{ getLocalizedField(editionData.subtitle) }}</p>
          </div>

          <!-- Bottom Action Hint -->
          <div class="card-front-bottom">
            <div class="tap-hint-text font-sans">
              <span>{{ t('tapToReveal') }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <span class="card-index-indicator font-sans" v-if="totalCards">
              {{ getCardIndexText() }}
            </span>
          </div>
        </div>

        <!-- BACK FACE (Question Content) -->
        <div 
          class="card-face card-face-back"
          :style="{ 
            backgroundColor: '#FFFFFF',
            borderColor: editionData.themeColor || '#2D2A26'
          }"
        >
          <div class="card-texture-overlay"></div>
          <div class="card-inner-border"></div>

          <!-- Back Top Bar -->
          <div class="card-back-top">
            <div class="tags-group">
              <span class="edition-tag font-sans">
                {{ getLocalizedField(editionData.title) }}
              </span>
              <span class="tag-separator" v-if="card.category">•</span>
              <span class="category-tag font-sans" v-if="card.category">
                {{ getLocalizedField(card.category) }}
              </span>
            </div>
            <span class="level-indicator font-sans" :class="`level-${card.level}`">
              {{ getLevelText(card.level) }}
            </span>
          </div>

          <!-- Question Content Center -->
          <div class="card-back-center">
            <p class="question-text font-editorial">
              "{{ getLocalizedField(card.question) }}"
            </p>
          </div>

          <!-- Back Bottom Bar -->
          <div class="card-back-bottom" @click.stop>
            <button 
              class="btn-save-card" 
              :class="{ 'is-saved': isSaved }"
              @click="toggleSave"
              :title="t('saveQuestion')"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" :fill="isSaved ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>{{ isSaved ? t('saved') : t('saveQuestion') }}</span>
            </button>

            <button class="btn-flip-back" @click="$emit('toggle-flip')" title="Tutup Kartu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
              </svg>
              <span>Balik</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { EDITIONS } from '../data/questions.js';
import { playCardFlipSound, playButtonClickSound } from '../utils/audio.js';
import { t, getLocalizedField, currentLang } from '../utils/i18n.js';

const props = defineProps({
  card: {
    type: Object,
    required: true
  },
  isFlipped: {
    type: Boolean,
    default: false
  },
  currentCardIndex: {
    type: Number,
    default: 0
  },
  totalCards: {
    type: Number,
    default: 0
  },
  isSaved: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['toggle-flip', 'toggle-save']);

const editionData = computed(() => {
  if (!props.card) return {};
  return EDITIONS[props.card.edition] || {
    title: 'Tentang Kita',
    subtitle: 'Edsi Spesial',
    themeColor: '#D4A373',
    cardBg: '#FFFDF9'
  };
});

function getLocalizedEditionBadge() {
  const lang = currentLang.value;
  if (lang === 'en') return 'Card Edition';
  if (lang === 'jp') return 'カードエディション';
  return 'Edisi Kartu';
}

function getCardIndexText() {
  const lang = currentLang.value;
  if (lang === 'en') return `Card ${props.currentCardIndex + 1} of ${props.totalCards}`;
  if (lang === 'jp') return `全${props.totalCards}枚中 ${props.currentCardIndex + 1}枚目`;
  return `Kartu ${props.currentCardIndex + 1} dari ${props.totalCards}`;
}

function getLevelText(level) {
  const lang = currentLang.value;
  if (lang === 'en') {
    switch (level) {
      case 1: return 'Level 1 • Light';
      case 2: return 'Level 2 • Deep';
      case 3: return 'Level 3 • Intense';
      default: return 'Level 1';
    }
  }
  if (lang === 'jp') {
    switch (level) {
      case 1: return 'レベル1 • ライト';
      case 2: return 'レベル2 • ディープ';
      case 3: return 'レベル3 • シリアス';
      default: return 'レベル1';
    }
  }
  switch (level) {
    case 1: return 'Tingkat 1 • Ringan';
    case 2: return 'Tingkat 2 • Mendalam';
    case 3: return 'Tingkat 3 • Serius';
    default: return 'Tingkat 1';
  }
}

function handleCardClick() {
  playCardFlipSound();
  emit('toggle-flip');
}

function toggleSave() {
  playButtonClickSound();
  emit('toggle-save', props.card);
}
</script>

<style scoped>
.card-display-wrapper {
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  user-select: none;
}

.card-perspective-container {
  perspective: 1200px;
  width: 100%;
  /* 3:4 Slim Portrait Playing Card Ratio */
  aspect-ratio: 3 / 4.2;
}

.card-3d {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
}

.card-3d.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-medium);
  box-shadow: 0 12px 32px rgba(45, 42, 38, 0.08);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.2rem 1.8rem;
  overflow: hidden;
}

.card-texture-overlay {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(45, 42, 38, 0.03) 1px, transparent 1px);
  background-size: 16px 16px;
  pointer-events: none;
}

.card-inner-border {
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(45, 42, 38, 0.08);
  border-radius: calc(var(--radius-lg) - 6px);
  pointer-events: none;
}

/* Front Face */
.card-face-front {
  text-align: center;
}

.card-front-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 2;
}

.front-deck-brand {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-main);
}

.front-deck-badge {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  font-weight: 600;
}

.card-front-center {
  margin: auto 0;
  position: relative;
  z-index: 2;
}

.card-front-title {
  font-size: 2.6rem;
  line-height: 1.15;
  margin-bottom: 0.75rem;
}

.card-front-sub {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
  max-width: 280px;
  margin: 0 auto;
}

.card-front-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;
}

.tap-hint-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  opacity: 0.8;
  animation: pulseHint 2s infinite ease-in-out;
}

.card-index-indicator {
  font-size: 0.72rem;
  color: var(--text-light);
}

/* Back Face */
.card-face-back {
  transform: rotateY(180deg);
}

.card-back-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.tags-group {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
}

.tag-separator {
  color: var(--border-medium);
}

.level-indicator {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full);
  background: var(--bg-main);
  color: var(--text-muted);
  border: 1px solid var(--border-light);
}

.level-indicator.level-2 {
  background: rgba(212, 163, 115, 0.15);
  color: #B5793E;
  border-color: rgba(212, 163, 115, 0.3);
}

.level-indicator.level-3 {
  background: rgba(200, 90, 90, 0.12);
  color: #C85A5A;
  border-color: rgba(200, 90, 90, 0.25);
}

.card-back-center {
  margin: auto 0;
  position: relative;
  z-index: 2;
  text-align: center;
}

.question-text {
  font-size: 1.55rem;
  line-height: 1.45;
  color: var(--text-main);
}

.card-back-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.btn-save-card, .btn-flip-back {
  background: transparent;
  border: none;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  border-radius: var(--radius-sm);
  transition: var(--transition-smooth);
}

.btn-save-card:hover, .btn-flip-back:hover {
  background: var(--bg-main);
  color: var(--text-main);
}

.btn-save-card.is-saved {
  color: var(--text-main);
}

@keyframes pulseHint {
  0%, 100% { opacity: 0.6; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-2px); }
}

@media (max-width: 640px) {
  .card-face {
    padding: 1.6rem 1.3rem;
  }

  .card-front-title {
    font-size: 2.1rem;
  }

  .question-text {
    font-size: 1.3rem;
  }
}
</style>
