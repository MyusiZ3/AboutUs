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
          <div class="card-back-top font-sans">
            <div class="tags-group">
              <span class="edition-tag">
                {{ getShortEditionTitle() }}
              </span>
              <span class="tag-slash" v-if="card.category">/</span>
              <span class="category-tag" v-if="card.category">
                {{ getLocalizedCategory(card.category) }}
              </span>
            </div>
            <span class="level-indicator" :class="`level-${card.level}`">
              {{ getLevelText(card.level) }}
            </span>
          </div>

          <!-- Question Content Center -->
          <div class="card-back-center">
            <p class="question-text font-editorial">
              "{{ getLocalizedQuestion(card.question) }}"
            </p>
          </div>

          <!-- Back Bottom Bar -->
          <div class="card-back-bottom" @click.stop>
            <button 
              class="btn-save-card font-sans" 
              :class="{ 'is-saved': isSaved }"
              @click="toggleSave"
              :title="t('saveQuestion')"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" :fill="isSaved ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>{{ isSaved ? t('saved') : t('saveQuestion') }}</span>
            </button>

            <button class="btn-flip-back font-sans" @click="$emit('toggle-flip')" :title="t('closeCard')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
              </svg>
              <span>{{ t('flipCard') }}</span>
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
import { t, getLocalizedField, getLocalizedCategory, currentLang } from '../utils/i18n.js';

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
  const edKey = props.card.edition || 'pasangan';
  return EDITIONS[edKey] || EDITIONS.pasangan;
});

function handleCardClick() {
  playCardFlipSound();
  emit('toggle-flip');
}

function toggleSave() {
  playButtonClickSound();
  emit('toggle-save', props.card);
}

function getLocalizedEditionBadge() {
  const lang = currentLang.value;
  if (lang === 'en') return 'CARD EDITION';
  if (lang === 'jp') return 'カードエディション';
  return 'EDISI KARTU';
}

function getShortEditionTitle() {
  const edKey = props.card.edition || 'pasangan';
  const shortMap = {
    pasangan: { id: 'Pasangan', en: 'Couples', jp: 'カップル' },
    sahabat: { id: 'Sahabat', en: 'Friends', jp: '親友' },
    pernikahan: { id: 'Pernikahan', en: 'Marriage', jp: '結婚' },
    refleksi: { id: 'Refleksi', en: 'Self-Reflection', jp: '自己内省' },
    keluarga: { id: 'Keluarga', en: 'Family', jp: '家族' }
  };
  const found = shortMap[edKey];
  if (found) return getLocalizedField(found);
  return getLocalizedField(editionData.value.title);
}

function getCardIndexText() {
  const curr = props.currentCardIndex + 1;
  const tot = props.totalCards;
  return `${curr} / ${tot}`;
}

function getLevelText(level) {
  const lang = currentLang.value;
  if (level === 1) {
    if (lang === 'en') return 'Level 1 • Light';
    if (lang === 'jp') return 'レベル 1 • ライト';
    return 'Level 1 • Ringan';
  }
  if (level === 2) {
    if (lang === 'en') return 'Level 2 • Deep';
    if (lang === 'jp') return 'レベル 2 • ディープ';
    return 'Level 2 • Mendalam';
  }
  if (level === 3) {
    if (lang === 'en') return 'Level 3 • Reflective';
    if (lang === 'jp') return 'レベル 3 • 内省';
    return 'Level 3 • Reflektif';
  }
  return `Level ${level}`;
}

function getLocalizedQuestion(qField) {
  if (!qField) return '';
  if (typeof qField === 'object') {
    return getLocalizedField(qField);
  }
  return qField;
}
</script>

<style scoped>
.card-display-wrapper {
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  perspective: 1200px;
}

.card-perspective-container {
  width: 100%;
  aspect-ratio: 5 / 7;
  position: relative;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-lg);
  border: 1.5px solid var(--border-medium);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.75rem;
  box-shadow: 0 16px 40px -10px rgba(45, 42, 38, 0.15);
  overflow: hidden;
}

.card-face-front {
  z-index: 2;
}

.card-face-back {
  transform: rotateY(180deg);
  z-index: 1;
}

.card-texture-overlay {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 0);
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

.card-front-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.front-deck-brand {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-main);
}

.brand-dot {
  color: var(--accent-warm, #D4A373);
}

.front-deck-badge {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  text-transform: uppercase;
}

.card-front-center {
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 1rem 0.5rem;
}

.card-front-title {
  font-size: 2.2rem;
  line-height: 1.15;
  margin-bottom: 0.85rem;
}

.card-front-sub {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.45;
  max-width: 280px;
  margin: 0 auto;
}

.card-front-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  position: relative;
  z-index: 2;
  width: 100%;
}

.tap-hint-text {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}

.card-index-indicator {
  font-size: 0.75rem;
  color: var(--text-light);
  white-space: nowrap;
  flex-shrink: 0;
}

.card-back-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  position: relative;
  z-index: 2;
  width: 100%;
}

.tags-group {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
}

.edition-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
}

.tag-slash {
  color: var(--border-medium);
  font-size: 0.75rem;
  font-weight: 400;
}

.category-tag {
  font-size: 0.72rem;
  color: var(--text-main);
  background: var(--bg-surface);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
  font-weight: 500;
}

.level-indicator {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: var(--radius-full);
  background: var(--bg-main);
  border: 1px solid var(--border-light);
  color: var(--text-muted);
  white-space: nowrap;
  flex-shrink: 0;
}

.card-back-center {
  position: relative;
  z-index: 2;
  margin: auto 0;
  text-align: center;
  padding: 1rem 0.5rem;
}

.question-text {
  font-size: 1.45rem;
  line-height: 1.45;
  color: var(--text-main);
  font-weight: 400;
}

.card-back-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.btn-save-card, .btn-flip-back {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.35rem 0.65rem;
  border-radius: var(--radius-sm);
  transition: var(--transition-smooth);
}

.btn-save-card:hover, .btn-flip-back:hover {
  color: var(--text-main);
  background: rgba(0, 0, 0, 0.04);
}

.btn-save-card.is-saved {
  color: var(--accent-warm, #D4A373);
}

@media (max-width: 480px) {
  .card-face {
    padding: 1.25rem;
  }
  .card-front-title {
    font-size: 1.8rem;
  }
  .question-text {
    font-size: 1.2rem;
    line-height: 1.4;
  }
}
</style>
