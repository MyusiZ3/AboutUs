<template>
  <div v-if="isOpen" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <span class="badge-clean">Panduan Bermain</span>
          <h2 class="modal-title font-editorial">Cara Bermain Tentang Kita</h2>
        </div>
        <button class="btn btn-ghost btn-icon-only" @click="$emit('close')">✕</button>
      </div>

      <div class="rules-content">
        <div class="rule-item">
          <span class="rule-number">01</span>
          <div>
            <h4 class="rule-heading">Hormati Giliran & Dengarkan Penuh</h4>
            <p class="rule-body">Setiap pemain bergiliran menarik kartu. Saat seseorang menjawab, berikan perhatian penuh tanpa memotong atau menghakimi.</p>
          </div>
        </div>

        <div class="rule-item">
          <span class="rule-number">02</span>
          <div>
            <h4 class="rule-heading">Jujur & Tampakkan Kerentanan</h4>
            <p class="rule-body">Permainan ini bukan untuk mencari siapa yang paling benar, melainkan membuka ruang percakapan yang tulus dan bermakna.</p>
          </div>
        </div>

        <div class="rule-item">
          <span class="rule-number">03</span>
          <div>
            <h4 class="rule-heading">Hak Memilih atau Melewati</h4>
            <p class="rule-body">Jika kartu terasa terlalu sensitif, pemain berhak meminta kartu pengganti ("Ganti Kartu") tanpa tekanan.</p>
          </div>
        </div>

        <div class="rule-item">
          <span class="rule-number">04</span>
          <div>
            <h4 class="rule-heading">Simpan Pertanyaan Favorit</h4>
            <p class="rule-body">Gunakan tombol "Simpan Pertanyaan" untuk mengabadikan topik-topik yang ingin kamu diskusikan lagi di lain kesempatan.</p>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-primary" style="width:100%" @click="$emit('close')">
          Saya Mengerti, Ayo Bermain
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean
});

defineEmits(['close']);
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
  margin-top: 0.3rem;
}

.rules-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.rule-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.rule-number {
  font-family: monospace;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-light);
  background: var(--bg-main);
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
}

.rule-heading {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.2rem;
}

.rule-body {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.45;
}
</style>
