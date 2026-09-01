<template>
  <div v-if="isOpen" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <h2 class="modal-title font-editorial">{{ getRulesTitle() }}</h2>
        </div>
        <button class="btn btn-ghost btn-icon-only" @click="$emit('close')">✕</button>
      </div>

      <div class="rules-content font-sans">
        <div class="rule-item" v-for="(rule, idx) in rulesList" :key="idx">
          <span class="rule-number">0{{ idx + 1 }}</span>
          <div>
            <h4 class="rule-heading">{{ rule.title }}</h4>
            <p class="rule-body">{{ rule.desc }}</p>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-primary" style="width:100%" @click="$emit('close')">
          {{ getUnderstandText() }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { currentLang } from '../utils/i18n.js';

defineProps({
  isOpen: Boolean
});

defineEmits(['close']);

function getRulesTitle() {
  const lang = currentLang.value;
  if (lang === 'en') return 'How to Play Tentang Kita';
  if (lang === 'jp') return 'Tentang Kita の遊び方';
  return 'Cara Bermain Tentang Kita';
}

function getUnderstandText() {
  const lang = currentLang.value;
  if (lang === 'en') return 'I Understand, Let\'s Play';
  if (lang === 'jp') return '理解しました、ゲームを始める';
  return 'Saya Mengerti, Ayo Bermain';
}

const rulesList = computed(() => {
  const lang = currentLang.value;

  if (lang === 'en') {
    return [
      { title: 'Respect Turns & Listen Actively', desc: 'Players take turns drawing cards. When someone answers, give full attention without interrupting or judging.' },
      { title: 'Be Honest & Embrace Vulnerability', desc: 'This game isn\'t about who is right, but about opening space for genuine and meaningful conversation.' },
      { title: 'Right to Swap or Pass', desc: 'If a question feels too sensitive, players are free to draw a replacement card ("Change Card") without pressure.' },
      { title: 'Save Favorite Questions', desc: 'Use the "Save Question" button to bookmark topics you\'d love to revisit later.' }
    ];
  }

  if (lang === 'jp') {
    return [
      { title: '順番を守り、真剣に聴く', desc: '交代でカードを引きます。相手が答えている時は、途中で口を挟んだり批判したりせず耳を傾けましょう。' },
      { title: '素直に、本音で話す', desc: '正解を競うゲームではありません。心を開き、深い対話を楽しむための時間です。' },
      { title: 'カードのスキップ権', desc: '答えるのが難しすぎると感じた場合は、プレッシャーなく「カード変更」を選択できます。' },
      { title: 'お気に入りの質問を保存', desc: '「質問を保存」ボタンを使って、後でまた話し合いたいテーマを記録できます。' }
    ];
  }

  return [
    { title: 'Hormati Giliran & Dengarkan Penuh', desc: 'Setiap pemain bergiliran menarik kartu. Saat seseorang menjawab, berikan perhatian penuh tanpa memotong atau menghakimi.' },
    { title: 'Jujur & Tampakkan Kerentanan', desc: 'Permainan ini bukan untuk mencari siapa yang paling benar, melainkan membuka ruang percakapan yang tulus dan bermakna.' },
    { title: 'Hak Memilih atau Melewati', desc: 'Jika kartu terasa terlalu sensitif, pemain berhak meminta kartu pengganti ("Ganti Kartu") tanpa tekanan.' },
    { title: 'Simpan Pertanyaan Favorit', desc: 'Gunakan tombol "Simpan Pertanyaan" untuk mengabadikan topik-topik yang ingin kamu diskusikan lagi di lain kesempatan.' }
  ];
});
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
