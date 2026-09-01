<template>
  <header class="nav-header">
    <div class="container-wide nav-content">
      <!-- Left: Clean Editorial Logotype -->
      <div class="brand-group" @click="$emit('reset-to-home')" title="Kembali ke Beranda">
        <span class="brand-name font-editorial">Tentang Kita<span class="brand-dot">.</span></span>
        <span class="brand-divider">/</span>
        <span class="brand-sub font-sans">Conversation Cards</span>
      </div>

      <!-- Right: Desktop Action Icons -->
      <div class="nav-actions desktop-nav-actions">
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

      <!-- Right: Mobile Menu Toggle Button -->
      <div class="mobile-nav-toggle">
        <button 
          class="btn btn-secondary btn-icon-only" 
          @click="isMobileMenuOpen = true"
          aria-label="Buka Menu Navigasi"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Side Panel Drawer -->
    <Teleport to="body">
      <div v-if="isMobileMenuOpen" class="mobile-nav-backdrop" @click="isMobileMenuOpen = false">
        <div class="mobile-nav-panel" @click.stop>
          <div class="mobile-panel-header">
            <span class="mobile-panel-title font-editorial">Menu Navigasi</span>
            <button class="btn btn-ghost btn-icon-only" @click="isMobileMenuOpen = false" aria-label="Tutup Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="mobile-panel-body font-sans">
            <!-- Audio Toggle item -->
            <button class="mobile-menu-item" @click="toggleAudio">
              <div class="menu-item-left">
                <svg v-if="soundOn" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
                <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
                <span>Efek Suara</span>
              </div>
              <span class="mobile-item-badge">{{ soundOn ? 'Aktif' : 'Mati' }}</span>
            </button>

            <!-- Saved cards item -->
            <button 
              v-if="isPlaying" 
              class="mobile-menu-item" 
              @click="isMobileMenuOpen = false; $emit('open-saved');"
            >
              <div class="menu-item-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Kartu Tersimpan</span>
              </div>
              <span class="mobile-item-badge active">{{ savedCount }}</span>
            </button>

            <!-- Rules item -->
            <button 
              class="mobile-menu-item" 
              @click="isMobileMenuOpen = false; $emit('open-rules');"
            >
              <div class="menu-item-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>Panduan Bermain</span>
              </div>
            </button>

            <!-- Return home item -->
            <button 
              v-if="isPlaying" 
              class="mobile-menu-item text-danger" 
              @click="isMobileMenuOpen = false; $emit('reset-to-home');"
            >
              <div class="menu-item-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span>Keluar ke Beranda</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Teleport>
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
const isMobileMenuOpen = ref(false);

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
  padding: 0.95rem 0;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Pure Editorial Logotype Styling */
.brand-group {
  display: inline-flex;
  align-items: baseline;
  gap: 0.6rem;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.2s ease;
}

.brand-group:hover {
  opacity: 0.8;
}

.brand-name {
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-main);
  line-height: 1;
}

.brand-dot {
  color: #D4A373;
  font-weight: 700;
}

.brand-divider {
  font-size: 0.9rem;
  color: var(--border-medium);
  font-weight: 300;
}

.brand-sub {
  font-size: 0.72rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
}

.desktop-nav-actions {
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

.mobile-nav-toggle {
  display: none;
}

/* Mobile Side Panel Overlay */
.mobile-nav-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(45, 42, 38, 0.4);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  animation: fadeIn 0.2s ease-out;
}

.mobile-nav-panel {
  width: 280px;
  height: 100%;
  background-color: var(--bg-surface);
  box-shadow: -4px 0 24px rgba(45, 42, 38, 0.15);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  animation: slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-light);
}

.mobile-panel-title {
  font-size: 1.25rem;
  color: var(--text-main);
}

.mobile-panel-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.25rem;
}

.mobile-menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
  background: var(--bg-main);
  color: var(--text-main);
  font-size: 0.92rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.mobile-menu-item:hover {
  border-color: var(--text-main);
}

.mobile-menu-item.text-danger {
  color: #C85A5A;
}

.menu-item-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mobile-item-badge {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full);
  background: var(--border-light);
  color: var(--text-muted);
  font-weight: 600;
}

.mobile-item-badge.active {
  background: var(--text-main);
  color: var(--bg-main);
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 640px) {
  .brand-sub, .brand-divider {
    display: none;
  }

  .desktop-nav-actions {
    display: none;
  }

  .mobile-nav-toggle {
    display: block;
  }
}
</style>
