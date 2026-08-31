<template>
  <div class="controls-wrapper container-narrow">
    <div class="controls-grid">
      <!-- Main Action: Next Turn / Answered -->
      <button 
        class="btn btn-primary btn-next-turn"
        @click="handleNextTurn"
      >
        <span>Lanjut Giliran Pemain</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <!-- Secondary Controls -->
      <div class="secondary-actions">
        <button 
          class="btn btn-secondary"
          @click="handleSkip"
          title="Tarik kartu lain tanpa mengubah giliran"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="13 17 18 12 13 7"></polyline>
            <polyline points="6 17 11 12 6 7"></polyline>
          </svg>
          <span>Ganti Kartu</span>
        </button>

        <button 
          class="btn btn-secondary"
          @click="$emit('open-edition-drawer')"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>Pilih Edisi</span>
        </button>

        <button 
          class="btn btn-ghost"
          @click="$emit('finish-session')"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>Selesai Sesi</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { playButtonClickSound } from '../utils/audio.js';

const emit = defineEmits(['next-turn', 'skip-card', 'open-edition-drawer', 'finish-session']);

function handleNextTurn() {
  playButtonClickSound();
  emit('next-turn');
}

function handleSkip() {
  playButtonClickSound();
  emit('skip-card');
}
</script>

<style scoped>
.controls-wrapper {
  margin-top: 1.5rem;
  margin-bottom: 3rem;
}

.controls-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.btn-next-turn {
  width: 100%;
  max-width: 380px;
  padding: 1rem 2rem;
  font-size: 1.05rem;
  box-shadow: 0 8px 24px -6px rgba(45, 42, 38, 0.25);
}

.secondary-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 480px) {
  .secondary-actions {
    width: 100%;
  }
  .secondary-actions .btn {
    flex: 1 1 auto;
    font-size: 0.85rem;
    padding: 0.65rem 1rem;
  }
}
</style>
