<template>
  <header class="nav-header">
    <div class="container-wide nav-content">
      <!-- Left: Logo & Brand -->
      <div class="brand-group" @click="$emit('reset-to-home')">
        <div class="brand-mark font-editorial">TK</div>
        <div class="brand-text">
          <span class="brand-name font-editorial">Tentang Kita</span>
          <span class="brand-sub">Conversation Card Game</span>
        </div>
      </div>

      <!-- Right: Action Icons -->
      <div class="nav-actions">
        <!-- Sound Toggle -->
        <button 
          class="btn btn-secondary btn-icon-only nav-btn" 
          @click="toggleAudio"
          :title="soundOn ? 'Matikan Suara' : 'Aktifkan Suara'"
          aria-label="Toggle Sound"
        >
          <svg v-if="soundOn" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        </button>

        <!-- Saved Questions Count / Modal Trigger -->
        <button 
          v-if="isPlaying"
          class="btn btn-secondary nav-btn" 
          @click="$emit('open-saved')"
          title="Kartu Tersimpan"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span class="saved-count">{{ savedCount }}</span>
        </button>

        <!-- Rules / Info Modal -->
        <button class="btn btn-secondary btn-icon-only nav-btn" @click="$emit('open-rules')" title="Panduan Bermain">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>

        <!-- Reset Button -->
        <button v-if="isPlaying" class="btn btn-ghost btn-icon-only nav-btn" @click="$emit('reset-to-home')" title="Keluar / Reset Game">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { toggleSound, isSoundEnabled, playButtonClickSound } from '../utils/audio.js';

const props = defineProps({
  isPlaying: Boolean,
  savedCount: Number
});

const emit = defineEmits(['reset-to-home', 'open-rules', 'open-saved']);

const soundOn = ref(isSoundEnabled());

function toggleAudio() {
  soundOn.value = toggleSound();
  if (soundOn.value) {
    playButtonClickSound();
  }
}
</script>

<style scoped>
.nav-header {
  border-bottom: 1px solid var(--border-light);
  background-color: rgba(250, 247, 242, 0.85);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 0.85rem 0;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: var(--text-main);
  color: var(--bg-main);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.1;
  color: var(--text-main);
}

.brand-sub {
  font-size: 0.68rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.saved-count {
  font-size: 0.82rem;
  font-weight: 700;
  background-color: var(--text-main);
  color: var(--bg-main);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 640px) {
  .brand-sub {
    display: none;
  }
}
</style>
