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

          <!-- Top emblem -->
          <div class="card-front-top">
            <div class="edition-emblem" :style="{ backgroundColor: editionData.themeColor + '25', color: editionData.themeColor }">
              <span class="emblem-text font-editorial">TK</span>
            </div>
            <span class="front-deck-badge font-sans">Edisi Kartu</span>
          </div>

          <!-- Center Content -->
          <div class="card-front-center">
            <h2 class="card-front-title font-editorial" :style="{ color: editionData.themeColor ? editionData.themeColor : 'inherit' }">
              {{ editionData.title }}
            </h2>
            <p class="card-front-sub font-sans">{{ editionData.subtitle }}</p>
          </div>

          <!-- Bottom Action Hint -->
          <div class="card-front-bottom">
            <div class="tap-hint-text font-sans">
              <span>Ketuk untuk Membuka</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <span class="card-index-indicator font-sans" v-if="totalCards">
              Kartu {{ currentCardIndex + 1 }} dari {{ totalCards }}
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
                {{ editionData.title }}
              </span>
              <span class="tag-separator" v-if="card.category">•</span>
              <span class="category-tag font-sans" v-if="card.category">
                {{ card.category }}
              </span>
            </div>
            <span class="level-indicator font-sans" :class="`level-${card.level}`">
              {{ getLevelText(card.level) }}
            </span>
          </div>

          <!-- Question Content Center -->
          <div class="card-back-center">
            <p class="question-text font-editorial">
              "{{ card.question }}"
            </p>
          </div>

          <!-- Back Bottom Bar -->
          <div class="card-back-bottom" @click.stop>
            <button 
              class="btn-save-card" 
              :class="{ 'is-saved': isSaved }"
              @click="toggleSave"
              title="Simpan Kartu Ini"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" :fill="isSaved ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>{{ isSaved ? 'Tersimpan' : 'Simpan Pertanyaan' }}</span>
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
  if (!props.card || !props.card.edition) {
    return EDITIONS.pasangan;
  }
  return EDITIONS[props.card.edition] || EDITIONS.pasangan;
});

function handleCardClick() {
  playCardFlipSound();
  emit('toggle-flip');
}

function toggleSave() {
  playButtonClickSound();
  emit('toggle-save', props.card);
}

function getLevelText(level) {
  if (level === 1) return 'Ringan';
  if (level === 2) return 'Mendalam';
  if (level === 3) return 'Serius';
  return 'Reflektif';
}
</script>

<style scoped>
.card-display-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.card-front-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}

.edition-emblem {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
}

.front-deck-badge {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.card-front-center {
  text-align: center;
  z-index: 2;
  padding: 0 1rem;
}

.card-front-title {
  font-size: 2.2rem;
  line-height: 1.15;
  margin-bottom: 0.75rem;
  color: var(--text-main);
}

.card-front-sub {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.45;
  max-width: 280px;
  margin: 0 auto;
}

.card-front-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
}

.tap-hint-text {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: 0.02em;
}

.card-index-indicator {
  font-size: 0.78rem;
  color: var(--text-light);
  font-weight: 600;
}

/* Card Back Styles - Clean Editorial Tags */
.card-back-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}

.tags-group {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.edition-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-main);
  border-left: 2px solid var(--text-main);
  padding-left: 0.4rem;
}

.tag-separator {
  font-size: 0.7rem;
  color: var(--text-light);
}

.category-tag {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
}

.level-indicator {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.level-1 { color: #4A7A49; }
.level-2 { color: #A66E38; }
.level-3 { color: #7A3F6D; }

.card-back-center {
  z-index: 2;
  padding: 1.5rem 0.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.question-text {
  font-size: 1.5rem;
  line-height: 1.45;
  color: var(--text-main);
  font-weight: 500;
  word-break: break-word;
}

@media (max-width: 480px) {
  .question-text {
    font-size: 1.25rem;
  }
}

.card-back-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  border-top: 1px solid var(--border-light);
  padding-top: 0.9rem;
}

.btn-save-card {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  border-radius: var(--radius-sm);
  transition: var(--transition-smooth);
}

.btn-save-card:hover {
  color: var(--text-main);
  background: var(--bg-main);
}

.btn-save-card.is-saved {
  color: #D4A373;
}

.btn-flip-back {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  border-radius: var(--radius-sm);
  transition: var(--transition-smooth);
}

.btn-flip-back:hover {
  color: var(--text-main);
  background: var(--bg-main);
}
</style>
