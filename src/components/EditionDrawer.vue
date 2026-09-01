<template>
  <div v-if="isOpen" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <h2 class="modal-title font-editorial">{{ getDrawerTitle() }}</h2>
          <p class="modal-sub">{{ getDrawerSub() }}</p>
        </div>
        <button class="btn btn-ghost btn-icon-only" @click="$emit('close')">✕</button>
      </div>

      <div class="editions-list font-sans">
        <!-- All Combined -->
        <div 
          class="drawer-edition-item"
          :class="{ active: currentEditionId === 'all' }"
          @click="selectEdition('all')"
        >
          <div class="item-info">
            <span class="item-title font-editorial">{{ t('combinedTitle') }}</span>
            <span class="item-count">250 {{ t('cardsUnit') }}</span>
          </div>
          <span class="check-icon" v-if="currentEditionId === 'all'">✓</span>
        </div>

        <!-- Individual -->
        <div 
          v-for="(ed, key) in editions" 
          :key="key"
          class="drawer-edition-item"
          :class="{ active: currentEditionId === key }"
          :style="{ '--accent-color': ed.themeColor }"
          @click="selectEdition(key)"
        >
          <div class="item-info">
            <span class="item-title font-editorial">{{ getLocalizedField(ed.title) }}</span>
            <span class="item-count">{{ getLocalizedField(ed.subtitle) }}</span>
          </div>
          <span class="check-icon" v-if="currentEditionId === key">✓</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EDITIONS } from '../data/questions.js';
import { playButtonClickSound } from '../utils/audio.js';
import { t, getLocalizedField, currentLang } from '../utils/i18n.js';

const props = defineProps({
  isOpen: Boolean,
  currentEditionId: String
});

const emit = defineEmits(['close', 'change-edition']);

const editions = EDITIONS;

function getDrawerTitle() {
  const lang = currentLang.value;
  if (lang === 'en') return 'Change Card Edition';
  if (lang === 'jp') return 'カードエディションを変更';
  return 'Ganti Edisi Kartu';
}

function getDrawerSub() {
  const lang = currentLang.value;
  if (lang === 'en') return 'Select an edition without resetting current player progress.';
  if (lang === 'jp') return '現在のプレイヤーの進行状況をリセットせずにエディションを選択します。';
  return 'Pilih edisi yang ingin dimainkan tanpa meriset progres pemain saat ini.';
}

function selectEdition(key) {
  playButtonClickSound();
  emit('change-edition', key);
  emit('close');
}
</script>

<style scoped>
.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.modal-title {
  font-size: 1.6rem;
  color: var(--text-main);
}

.modal-sub {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
}

.editions-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.drawer-edition-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
  background: var(--bg-main);
  cursor: pointer;
  transition: var(--transition-smooth);
}

.drawer-edition-item:hover {
  border-color: var(--text-main);
  transform: translateX(2px);
}

.drawer-edition-item.active {
  border-color: var(--accent-color, var(--text-main));
  background: var(--bg-surface);
  box-shadow: 0 4px 14px rgba(0,0,0,0.05);
}

.item-info {
  display: flex;
  flex-direction: column;
}

.item-title {
  font-size: 1.15rem;
  color: var(--text-main);
}

.item-count {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.check-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--text-main);
  color: var(--bg-main);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
}
</style>
