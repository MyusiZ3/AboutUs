<template>
  <div class="setup-wrapper container-wide">
    <div class="setup-header">
      <h1 class="setup-title font-editorial">{{ t('setupTitle') }}</h1>
      <p class="setup-desc">
        {{ t('setupDesc') }}
      </p>
    </div>

    <div class="setup-card">
      <!-- Section 1: Player Setup -->
      <div class="setup-section">
        <div class="section-label-group">
          <span class="section-num">01</span>
          <h2 class="section-title">{{ t('playersTitle') }}</h2>
        </div>

        <div class="player-count-picker">
          <label class="input-label">{{ t('playerCountLabel') }}</label>
          <div class="count-buttons">
            <button 
              v-for="count in [2, 3, 4, 5, 6]" 
              :key="count"
              class="count-btn"
              :class="{ active: playerCount === count }"
              @click="setPlayerCount(count)"
            >
              {{ count }} {{ t('playerSuffix') }}
            </button>
          </div>
        </div>

        <div class="player-names-grid">
          <div v-for="(name, idx) in playerNames" :key="idx" class="name-field">
            <label class="field-label">{{ t('playerPrefix') }} {{ idx + 1 }}</label>
            <input 
              type="text" 
              v-model="playerNames[idx]" 
              :placeholder="`${t('playerPrefix')} ${idx + 1}`"
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
          <h2 class="section-title">{{ t('editionTitle') }}</h2>
        </div>

        <div class="editions-grid">
          <!-- All Editions Combined Option -->
          <div 
            class="edition-card combined-card"
            :class="{ active: selectedEditionId === 'all' }"
            @click="selectEdition('all')"
          >
            <div class="edition-card-header">
              <span class="edition-count-badge">{{ getCardCounts('all').all }} {{ t('cardsUnit') }}</span>
              <span class="check-mark" v-if="selectedEditionId === 'all'">✓</span>
            </div>
            <h3 class="edition-card-title font-editorial">{{ t('combinedTitle') }}</h3>
            <p class="edition-card-desc">{{ t('combinedDesc') }}</p>
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
              <span class="edition-count-badge">{{ getCardCounts(key).all }} {{ t('cardsUnit') }}</span>
              <span class="check-mark" v-if="selectedEditionId === key">✓</span>
            </div>
            <h3 class="edition-card-title font-editorial">{{ getLocalizedField(ed.title) }}</h3>
            <p class="edition-card-desc">{{ getLocalizedField(ed.subtitle) }}</p>
          </div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Section 3: Level / Depth Filter -->
      <div class="setup-section">
        <div class="section-label-group">
          <span class="section-num">03</span>
          <h2 class="section-title">{{ t('depthTitle') }}</h2>
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
          <span>{{ t('startGame') }}</span>
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
import { t, getLocalizedField, currentLang } from '../utils/i18n.js';

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
  const lang = currentLang.value;

  if (lang === 'en') {
    return [
      { value: 0, label: `All Levels (${counts.all} Cards)`, desc: 'Full range of questions from casual icebreakers to deep reflections' },
      { value: 1, label: `Level 1: Light & Nostalgic (${counts.lvl1} Cards)`, desc: 'Great for warm icebreakers and fond shared memories' },
      { value: 2, label: `Level 2: Deep & Perspective (${counts.lvl2} Cards)`, desc: 'Explore life values, personal expectations, and mindsets' },
      { value: 3, label: `Level 3: Intense & Reflective (${counts.lvl3} Cards)`, desc: 'Honest topics on vulnerability, commitment, and deep trust' }
    ];
  }

  if (lang === 'jp') {
    return [
      { value: 0, label: `すべてのレベル (全${counts.all}枚)`, desc: '日常会話から深い対話まで完全なバリエーション' },
      { value: 1, label: `レベル1：ライト＆ノスタルジー (${counts.lvl1}枚)`, desc: '会話のきっかけや楽しい思い出の共有に最適' },
      { value: 2, label: `レベル2：ディープ＆視点 (${counts.lvl2}枚)`, desc: '人生観、期待、ものの見方について深く語り合う' },
      { value: 3, label: `レベル3：シリアス＆内省 (${counts.lvl3}枚)`, desc: '弱さの開示、約束、信頼に関する本音のテーマ' }
    ];
  }

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
  const prefix = t('playerPrefix');
  const newNames = [];
  for (let i = 0; i < count; i++) {
    newNames.push(playerNames.value[i] || `${prefix} ${i + 1}`);
  }
  playerNames.value = newNames;
}

function selectEdition(key) {
  playButtonClickSound();
  selectedEditionId.value = key;
}

function handleStart() {
  playButtonClickSound();
  const prefix = t('playerPrefix');
  emit('start-game', {
    playerNames: playerNames.value.map((n, idx) => n.trim() || `${prefix} ${idx + 1}`),
    editionId: selectedEditionId.value,
    level: selectedLevel.value
  });
}
</script>

<style scoped>
.setup-wrapper {
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.setup-header {
  text-align: center;
  max-width: 620px;
  margin: 0 auto 2.5rem auto;
}

.setup-title {
  font-size: 2.3rem;
  color: var(--text-main);
  margin-bottom: 0.75rem;
  line-height: 1.25;
}

.setup-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.setup-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-sm);
}

.setup-section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.section-label-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-num {
  font-family: monospace;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-light);
  background: var(--bg-main);
  padding: 0.25rem 0.55rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
}

.input-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  display: block;
  margin-bottom: 0.5rem;
}

.count-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.count-btn {
  padding: 0.6rem 1.1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
  background: var(--bg-main);
  color: var(--text-main);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.count-btn:hover {
  border-color: var(--text-main);
}

.count-btn.active {
  background: var(--text-main);
  color: var(--bg-surface);
  border-color: var(--text-main);
}

.player-names-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.field-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  display: block;
  margin-bottom: 0.35rem;
}

.name-input {
  width: 100%;
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-medium);
  background: var(--bg-surface);
  font-size: 0.9rem;
  color: var(--text-main);
  transition: var(--transition-smooth);
}

.name-input:focus {
  outline: none;
  border-color: var(--text-main);
}

.section-divider {
  height: 1px;
  background-color: var(--border-light);
  margin: 2.25rem 0;
}

.editions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.edition-card {
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-md);
  padding: 1.4rem;
  background-color: var(--bg-surface);
  cursor: pointer;
  transition: var(--transition-smooth);
  position: relative;
  display: flex;
  flex-direction: column;
}

.edition-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  border-color: var(--text-main);
}

.edition-card.active {
  border-color: var(--text-main);
  background-color: var(--card-bg, #FFFDF9);
  box-shadow: 0 0 0 1px var(--text-main);
}

.edition-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.edition-count-badge {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  background: rgba(45, 42, 38, 0.05);
  padding: 0.2rem 0.55rem;
  border-radius: var(--radius-full);
}

.check-mark {
  color: var(--text-main);
  font-weight: 700;
  font-size: 1rem;
}

.edition-card-title {
  font-size: 1.35rem;
  color: var(--text-main);
  margin-bottom: 0.4rem;
}

.edition-card-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.45;
}

.combined-card {
  background-color: #FAF6F0;
}

.level-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

@media (max-width: 640px) {
  .level-options {
    grid-template-columns: 1fr;
  }
}

.level-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-medium);
  background: var(--bg-surface);
  cursor: pointer;
  transition: var(--transition-smooth);
}

.level-card:hover {
  border-color: var(--text-main);
}

.level-card.active {
  border-color: var(--text-main);
  background: var(--bg-main);
}

.level-radio {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--border-medium);
  margin-top: 0.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.level-card.active .level-radio {
  border-color: var(--text-main);
}

.radio-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--text-main);
}

.level-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.level-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
}

.level-desc {
  font-size: 0.83rem;
  color: var(--text-muted);
}

.setup-actions {
  margin-top: 2.5rem;
  display: flex;
  justify-content: flex-end;
}

.btn-start {
  padding: 0.9rem 2.2rem;
  font-size: 1rem;
  border-radius: var(--radius-full);
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

@media (max-width: 768px) {
  .setup-card {
    padding: 1.5rem;
  }

  .setup-title {
    font-size: 1.8rem;
  }

  .btn-start {
    width: 100%;
    justify-content: center;
  }
}
</style>
