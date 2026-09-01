<template>
  <div v-if="isOpen" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-card modal-wide">
      <div class="modal-header">
        <div>
          <h2 class="modal-title font-editorial">Kartu Pertanyaan Tersimpan</h2>
          <p class="modal-sub">Pertanyaan yang kamu tandai untuk diskusi lebih lanjut atau refleksi pribadi.</p>
        </div>
        <button class="btn btn-ghost btn-icon-only" @click="$emit('close')">✕</button>
      </div>

      <div v-if="savedCards.length === 0" class="empty-state">
        <p class="empty-text">Belum ada kartu yang disimpan.</p>
        <p class="empty-sub">Ketuk ikon "Simpan Pertanyaan" saat kartu terbuka untuk memasukkannya ke sini.</p>
      </div>

      <div v-else class="saved-cards-grid">
        <div 
          v-for="card in savedCards" 
          :key="card.id" 
          class="saved-item-card"
        >
          <div class="saved-item-header">
            <span class="saved-edition-tag">{{ getEditionTitle(card.edition) }}</span>
            <button class="btn-remove-saved" @click="$emit('remove-saved', card.id)" title="Hapus dari simpanan">✕</button>
          </div>
          <p class="saved-question font-editorial">"{{ card.question }}"</p>
          <div class="saved-item-footer">
            <span class="saved-category">{{ card.category || 'Refleksi' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EDITIONS } from '../data/questions.js';

const props = defineProps({
  isOpen: Boolean,
  savedCards: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['close', 'remove-saved']);

function getEditionTitle(editionKey) {
  return EDITIONS[editionKey]?.title || 'Tentang Kita';
}
</script>

<style scoped>
.modal-wide {
  max-width: 680px;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.modal-title {
  font-size: 1.6rem;
  color: var(--text-main);
  margin-top: 0.3rem;
}

.modal-sub {
  font-size: 0.88rem;
  color: var(--text-muted);
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
}

.empty-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-main);
}

.empty-sub {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.3rem;
}

.saved-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  max-height: 480px;
  overflow-y: auto;
  padding-right: 0.25rem;
}

.saved-item-card {
  background: var(--bg-main);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.85rem;
}

.saved-item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.saved-edition-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
}

.btn-remove-saved {
  background: none;
  border: none;
  color: var(--text-light);
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}

.btn-remove-saved:hover {
  color: var(--text-main);
  background: rgba(0,0,0,0.05);
}

.saved-question {
  font-size: 1.05rem;
  line-height: 1.45;
  color: var(--text-main);
}

.saved-item-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px dashed var(--border-light);
  padding-top: 0.6rem;
}

.saved-category {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
}
</style>
