<template>
  <div class="turn-bar-container container-narrow">
    <div class="turn-bar">
      <!-- Player Queue / Avatars -->
      <div class="players-chips font-sans">
        <div 
          v-for="(player, idx) in players" 
          :key="idx"
          class="player-chip"
          :class="{ active: currentPlayerIndex === idx }"
        >
          <span class="chip-dot"></span>
          <span class="chip-name">{{ player }}</span>
        </div>
      </div>

      <!-- Current Turn Highlight -->
      <div class="current-turn-banner">
        <span class="turn-label font-sans">{{ t('turnLabel') }}</span>
        <h3 class="turn-player-name font-editorial">{{ currentPlayerName }}</h3>
      </div>

      <!-- Progress Ticker -->
      <div class="deck-progress font-sans">
        <div class="progress-track">
          <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
        </div>
        <span class="progress-text">{{ answeredCount }} / {{ totalCount }} {{ t('cardsAnswered') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { t } from '../utils/i18n.js';

const props = defineProps({
  players: {
    type: Array,
    required: true
  },
  currentPlayerIndex: {
    type: Number,
    default: 0
  },
  answeredCount: {
    type: Number,
    default: 0
  },
  totalCount: {
    type: Number,
    default: 1
  }
});

const currentPlayerName = computed(() => {
  return props.players[props.currentPlayerIndex] || `${t('playerPrefix')} 1`;
});

const progressPercent = computed(() => {
  if (!props.totalCount) return 0;
  return Math.min(100, Math.round((props.answeredCount / props.totalCount) * 100));
});
</script>

<style scoped>
.turn-bar-container {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.turn-bar {
  background-color: var(--bg-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-medium);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  box-shadow: var(--shadow-soft);
}

.players-chips {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.player-chip {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
  background: var(--bg-main);
  color: var(--text-muted);
  border: 1px solid var(--border-light);
  transition: var(--transition-smooth);
}

.player-chip.active {
  background: var(--text-main);
  color: var(--bg-main);
  border-color: var(--text-main);
}

.chip-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.current-turn-banner {
  text-align: center;
}

.turn-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  font-weight: 600;
  display: block;
}

.turn-player-name {
  font-size: 1.35rem;
  color: var(--text-main);
  line-height: 1.1;
}

.deck-progress {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
  min-width: 120px;
}

.progress-track {
  width: 100px;
  height: 6px;
  border-radius: 3px;
  background: var(--bg-accent-soft);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--text-main);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .turn-bar {
    flex-direction: column;
    text-align: center;
    gap: 0.85rem;
  }
  .deck-progress {
    align-items: center;
  }
}
</style>
