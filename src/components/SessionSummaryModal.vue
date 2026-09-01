<template>
  <div v-if="isOpen" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-card modal-summary">
      <div class="summary-header">
        <h2 class="summary-title font-editorial">{{ t('summaryTitle') }}</h2>
        <p class="summary-sub">
          {{ t('summarySubtitle') }}
        </p>
      </div>

      <div class="stats-overview">
        <div class="stat-box">
          <span class="stat-value font-editorial">{{ history.length }}</span>
          <span class="stat-label">{{ t('totalCardsDrawn') }}</span>
        </div>
        <div class="stat-box">
          <span class="stat-value font-editorial">{{ players.length }}</span>
          <span class="stat-label">{{ t('playersTitle') }}</span>
        </div>
        <div class="stat-box">
          <span class="stat-value font-editorial">{{ savedCount }}</span>
          <span class="stat-label">{{ t('totalSaved') }}</span>
        </div>
      </div>

      <div class="history-section" v-if="history.length > 0">
        <h3 class="history-title font-editorial">{{ getHistoryTitle() }}</h3>
        <div class="history-list font-sans">
          <div v-for="(item, idx) in history" :key="idx" class="history-item">
            <span class="history-player">{{ item.player }}:</span>
            <span class="history-question font-editorial">"{{ getLocalizedField(item.card.question) }}"</span>
          </div>
        </div>
      </div>

      <div class="summary-actions font-sans">
        <button class="btn btn-secondary" @click="$emit('continue-playing')">
          <span>{{ getContinueText() }}</span>
        </button>

        <button class="btn btn-primary" @click="$emit('new-game')">
          <span>{{ t('playAgain') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import confetti from 'canvas-confetti';
import { t, getLocalizedField, currentLang } from '../utils/i18n.js';

const props = defineProps({
  isOpen: Boolean,
  history: {
    type: Array,
    default: () => []
  },
  players: {
    type: Array,
    default: () => []
  },
  savedCount: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['close', 'continue-playing', 'new-game']);

function getHistoryTitle() {
  const lang = currentLang.value;
  if (lang === 'en') return 'Answered Questions History';
  if (lang === 'jp') return '回答済み質問の履歴';
  return 'Daftar Pertanyaan Terjawab';
}

function getContinueText() {
  const lang = currentLang.value;
  if (lang === 'en') return 'Continue Playing';
  if (lang === 'jp') return 'プレイを続ける';
  return 'Lanjutkan Bermain';
}

function triggerConfetti() {
  confetti({
    particleCount: 60,
    spread: 70,
    origin: { y: 0.6 }
  });
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    triggerConfetti();
  }
});
</script>

<style scoped>
.modal-summary {
  max-width: 580px;
}

.summary-header {
  text-align: center;
  margin-bottom: 2rem;
}

.summary-title {
  font-size: 1.8rem;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.summary-sub {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.stats-overview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-box {
  background: var(--bg-main);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.25rem 0.8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.history-section {
  margin-bottom: 2rem;
}

.history-title {
  font-size: 1.15rem;
  color: var(--text-main);
  margin-bottom: 0.85rem;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-height: 220px;
  overflow-y: auto;
  padding-right: 0.3rem;
}

.history-item {
  display: flex;
  gap: 0.5rem;
  font-size: 0.88rem;
  background: var(--bg-main);
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
}

.history-player {
  font-weight: 700;
  color: var(--text-main);
  white-space: nowrap;
}

.history-question {
  color: var(--text-muted);
  font-style: italic;
}

.summary-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.summary-actions button {
  flex: 1;
}

@media (max-width: 640px) {
  .stats-overview {
    grid-template-columns: 1fr;
  }
}
</style>
