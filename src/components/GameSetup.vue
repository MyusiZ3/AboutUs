<template>
  <div class="setup-wrapper container-wide">
    <div class="setup-header">
      <h1 class="setup-title font-editorial">Bicara Jujur, Mengenal Lebih Dalam</h1>
      <p class="setup-desc">
        Ruang diskusi hangat tanpa penghakiman. Tentukan jumlah pemain, pilih edisi pertanyaan, dan nikmati momen perbincangan yang berkesan.
      </p>
    </div>

    <div class="setup-card">
      <!-- Section 1: Player Setup -->
      <div class="setup-section">
        <div class="section-label-group">
          <span class="section-num">01</span>
          <h2 class="section-title">Pemain & Giliran</h2>
        </div>

        <div class="player-count-picker">
          <label class="input-label">Jumlah Pemain</label>
          <div class="count-buttons">
            <button 
              v-for="count in [2, 3, 4, 5, 6]" 
              :key="count"
              class="count-btn"
              :class="{ active: playerCount === count }"
              @click="setPlayerCount(count)"
            >
              {{ count }} Orang
            </button>
          </div>
        </div>

        <div class="player-names-grid">
          <div v-for="(name, idx) in playerNames" :key="idx" class="name-field">
            <label class="field-label">Pemain {{ idx + 1 }}</label>
            <input 
              type="text" 
              v-model="playerNames[idx]" 
              :placeholder="`Nama Pemain ${idx + 1}`"
              class="name-input"
            />
          </div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Section 2: Edition Selection -->
      <div class="setup-section">
        <div class="section-label-group">
          <span class="section-num">02</span>
          <h2 class="section-title">Pilih Edisi Kartu</h2>
        </div>

        <div class="editions-grid">
          <!-- All Editions Combined Option -->
          <div 
            class="edition-card combined-card"
            :class="{ active: selectedEditionId === 'all' }"
            @click="selectEdition('all')"
          >
            <div class="edition-card-header">
              <span class="edition-count-badge">250 Kartu Total</span>
              <span class="check-mark" v-if="selectedEditionId === 'all'">✓</span>
            </div>
            <h3 class="edition-card-title font-editorial">Campur Semua Edisi</h3>
            <p class="edition-card-desc">Pertanyaan acak dari edisi Pasangan, Sahabat, Pernikahan, Refleksi, dan Keluarga.</p>
          </div>

          <!-- Individual Editions -->
          <div 
            v-for="(ed, key) in editions" 
            :key="key"
            class="edition-card"
            :class="{ active: selectedEditionId === key }"
            :style="{ '--card-accent': ed.themeColor, '--card-bg': ed.cardBg }"
            @click="selectEdition(key)"
          >
            <div class="edition-card-header">
              <span class="edition-count-badge">50 Kartu</span>
              <span class="check-mark" v-if="selectedEditionId === key">✓</span>
            </div>
            <h3 class="edition-card-title font-editorial">{{ ed.title }}</h3>
            <p class="edition-card-desc">{{ ed.subtitle }}</p>
          </div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Section 3: Level / Depth Filter -->
      <div class="setup-section">
        <div class="section-label-group">
          <span class="section-num">03</span>
          <h2 class="section-title">Tingkat Kedalaman Pertanyaan</h2>
        </div>

        <div class="level-options">
          <div 
            v-for="lvl in computedLevelOptions" 
            :key="lvl.value"
            class="level-card"
            :class="{ active: selectedLevel === lvl.value }"
            @click="selectedLevel = lvl.value"
          >
            <div class="level-radio">
              <span class="radio-dot" v-if="selectedLevel === lvl.value"></span>
            </div>
            <div class="level-info">
              <span class="level-title">{{ lvl.label }}</span>
              <span class="level-desc">{{ lvl.desc }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="setup-actions">
        <button class="btn btn-primary btn-start" @click="handleStart">
          <span>Mulai Permainan</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { EDITIONS, QUESTIONS } from '../data/questions.js';
import { playButtonClickSound } from '../utils/audio.js';

const emit = defineEmits(['start-game']);

const editions = EDITIONS;
const playerCount = ref(2);
const playerNames = ref(['Pemain 1', 'Pemain 2']);
const selectedEditionId = ref('pasangan');
const selectedLevel = ref(0); // 0 = Semua Tingkat

function getCardCounts(editionId) {
  let list = QUESTIONS;
  if (editionId !== 'all') {
    list = list.filter(q => q.edition === editionId);
  }
  return {
    all: list.length,
    lvl1: list.filter(q => q.level === 1).length,
    lvl2: list.filter(q => q.level === 2).length,
    lvl3: list.filter(q => q.level === 3).length
  };
}

const computedLevelOptions = computed(() => {
  const counts = getCardCounts(selectedEditionId.value);
  return [
    { value: 0, label: `Semua Tingkat (${counts.all} Kartu Lengkap)`, desc: 'Variasi lengkap dari pertanyaan santai hingga mendalam' },
    { value: 1, label: `Tingkat 1: Ringan & Nostalgia (${counts.lvl1} Kartu)`, desc: 'Cocok untuk pembuka percakapan dan kenangan manis' },
    { value: 2, label: `Tingkat 2: Mendalam & Perspektif (${counts.lvl2} Kartu)`, desc: 'Membahas nilai hidup, ekspektasi, dan cara pandang' },
    { value: 3, label: `Tingkat 3: Serius & Reflektif (${counts.lvl3} Kartu)`, desc: 'Topik jujur mengenai kerentanan, komitmen, dan rasa percaya' }
  ];
});

function setPlayerCount(count) {
  playButtonClickSound();
  playerCount.value = count;
  const newNames = [];
  for (let i = 0; i < count; i++) {
    newNames.push(playerNames.value[i] || `Pemain ${i + 1}`);
  }
  playerNames.value = newNames;
}

function selectEdition(key) {
  playButtonClickSound();
  selectedEditionId.value = key;
}

function handleStart() {
  playButtonClickSound();
  const cleanedNames = playerNames.value.map((n, i) => n.trim() || `Pemain ${i + 1}`);
  emit('start-game', {
    players: cleanedNames,
    editionId: selectedEditionId.value,
    levelFilter: selectedLevel.value
  });
}
</script>

<style scoped>
.setup-wrapper {
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.setup-header {
  text-align: center;
  margin-bottom: 2rem;
}

.setup-title {
  font-size: 2.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-main);
  line-height: 1.15;
}

.setup-desc {
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 680px;
  margin: 0 auto;
}

.setup-card {
  background-color: var(--bg-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-medium);
  padding: 2.5rem 2.75rem;
  box-shadow: var(--shadow-soft);
}

.setup-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.section-label-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-num {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-light);
  font-family: monospace;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-main);
}

.section-divider {
  height: 1px;
  background-color: var(--border-light);
  margin: 2rem 0;
}

/* Player Count */
.input-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.count-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.count-btn {
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-medium);
  background: var(--bg-main);
  color: var(--text-main);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.count-btn:hover {
  border-color: var(--text-main);
}

.count-btn.active {
  background: var(--text-main);
  color: var(--bg-main);
  border-color: var(--text-main);
}

.player-names-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 0.35rem;
}

.field-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.name-input {
  width: 100%;
  padding: 0.7rem 0.95rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-medium);
  background: var(--bg-main);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--text-main);
  outline: none;
  transition: var(--transition-smooth);
}

.name-input:focus {
  border-color: var(--text-main);
  background: var(--bg-surface);
  box-shadow: 0 0 0 3px rgba(45, 42, 38, 0.08);
}

/* Editions Grid - Balanced 3 Columns on Desktop */
.editions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
}

.edition-card {
  border-radius: var(--radius-md);
  border: 1.5px solid var(--border-light);
  background-color: var(--card-bg, var(--bg-main));
  padding: 1.25rem;
  cursor: pointer;
  transition: var(--transition-smooth);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 130px;
}

.edition-card:hover {
  transform: translateY(-2px);
  border-color: var(--card-accent, var(--text-main));
}

.edition-card.active {
  border-color: var(--card-accent, var(--text-main));
  box-shadow: 0 6px 18px -4px rgba(0,0,0,0.08);
  border-width: 2px;
}

.combined-card {
  --card-accent: var(--text-main);
  --card-bg: #F5EBE0;
}

.edition-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;
}

.edition-count-badge {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
}

.check-mark {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--text-main);
  color: var(--bg-main);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  font-weight: 700;
}

.edition-card-title {
  font-size: 1.15rem;
  color: var(--text-main);
  margin-bottom: 0.35rem;
  line-height: 1.2;
}

.edition-card-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.4;
}

/* Level Options - 2 Columns on Desktop */
.level-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.level-card {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
  background: var(--bg-main);
  cursor: pointer;
  transition: var(--transition-smooth);
}

.level-card:hover {
  border-color: var(--border-medium);
}

.level-card.active {
  border-color: var(--text-main);
  background: var(--bg-surface);
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}

.level-radio {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--border-medium);
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.level-card.active .level-radio {
  border-color: var(--text-main);
}

.radio-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--text-main);
}

.level-title {
  display: block;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.2rem;
}

.level-desc {
  display: block;
  font-size: 0.78rem;
  color: var(--text-muted);
  line-height: 1.35;
}

.setup-actions {
  margin-top: 2.25rem;
  display: flex;
  justify-content: center;
}

.btn-start {
  width: 100%;
  max-width: 340px;
  padding: 1.05rem 2rem;
  font-size: 1.05rem;
}

/* Responsive Media Queries */
@media (max-width: 920px) {
  .setup-card {
    padding: 1.75rem;
  }
  .editions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .player-names-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .level-options {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .setup-card {
    padding: 1.25rem;
  }
  .setup-title {
    font-size: 1.85rem;
  }
  .editions-grid {
    grid-template-columns: 1fr;
  }
  .player-names-grid {
    grid-template-columns: 1fr;
  }
}
</style>
