<template>
  <div v-if="isOpen" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-card modal-summary">
      <div class="summary-header">
        <span class="badge-clean">Sesi Selesai</span>
        <h2 class="summary-title font-editorial">Terima Kasih Atas Percakapan yang Hangat</h2>
        <p class="summary-sub">
          Setiap jawaban dan kisah yang terbagi hari ini mendekatkan hubungan kalian satu sama lain.
        </p>
      </div>

      <div class="stats-overview">
        <div class="stat-box">
          <span class="stat-value font-editorial">{{ history.length }}</span>
          <span class="stat-label">Kartu Dijawab</span>
        </div>
        <div class="stat-box">
          <span class="stat-value font-editorial">{{ players.length }}</span>
          <span class="stat-label">Pemain Ikut Serta</span>
        </div>
        <div class="stat-box">
          <span class="stat-value font-editorial">{{ savedCount }}</span>
          <span class="stat-label">Kartu Tersimpan</span>
        </div>
      </div>

      <div class="history-section" v-if="history.length > 0">
        <h3 class="history-title font-editorial">Daftar Pertanyaan Terjawab</h3>
        <div class="history-list">
          <div v-for="(item, idx) in history" :key="idx" class="history-item">
            <span class="history-player">{{ item.player }}:</span>
            <span class="history-question font-editorial">"{{ item.card.question }}"</span>
          </div>
        </div>
      </div>

      <div class="summary-actions">
        <button class="btn btn-secondary" @click="$emit('continue-playing')">
          <span>Lanjutkan Bermain</span>
        </button>

        <button class="btn btn-primary" @click="$emit('new-game')">
          <span>Mulai Sesi Baru</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import confetti from 'canvas-confetti';

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

watch(() => props.isOpen, (val) => {
  if (val) {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E8AEB7', '#CCD5AE', '#D4A373', '#B8C0E0']
      });
    } catch (e) {}
  }
});
</script>

<style scoped>
.modal-summary {
  max-width: 620px;
}

.summary-header {
  text-align: center;
  margin-bottom: 2rem;
}

.summary-title {
  font-size: 2.1rem;
  color: var(--text-main);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.summary-sub {
  font-size: 0.95rem;
  color: var(--text-muted);
  max-width: 480px;
  margin: 0 auto;
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
  padding: 1.25rem 0.5rem;
  text-align: center;
}

.stat-value {
  font-size: 2.2rem;
  color: var(--text-main);
  display: block;
  line-height: 1;
  margin-bottom: 0.3rem;
}

.stat-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 600;
}

.history-section {
  margin-bottom: 2rem;
}

.history-title {
  font-size: 1.2rem;
  color: var(--text-main);
  margin-bottom: 0.85rem;
}

.history-list {
  max-height: 220px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding-right: 0.25rem;
}

.history-item {
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  background: var(--bg-main);
  border: 1px solid var(--border-light);
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.history-player {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
}

.history-question {
  color: var(--text-main);
}

.summary-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (max-width: 520px) {
  .stats-overview {
    grid-template-columns: 1fr;
  }
  .summary-actions {
    flex-direction: column;
  }
}
</style>
