<template>
  <div v-if="isOpen" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-card font-sans">
      <div class="modal-header">
        <div>
          <h2 class="modal-title font-editorial">{{ getRulesTitle() }}</h2>
        </div>
        <button class="btn btn-ghost btn-icon-only" @click="$emit('close')">✕</button>
      </div>

      <div class="rules-content">
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
  if (lang === 'en') return 'How to Play & Etiquette';
  if (lang === 'jp') return 'Tentang Kita の遊び方';
  return 'Cara Main & Etika Ngobrol';
}

function getUnderstandText() {
  const lang = currentLang.value;
  if (lang === 'en') return 'Got It, Let\'s Play!';
  if (lang === 'jp') return 'OK、ゲームを始める';
  return 'Mengerti, Yuk Mulai!';
}

const rulesList = computed(() => {
  const lang = currentLang.value;

  if (lang === 'en') {
    return [
      { title: 'Take Turns & Listen Well', desc: 'Each player draws a card in turn. When your friend is sharing, listen warmly without interrupting.' },
      { title: 'Be Honest & Be Yourself', desc: 'It\'s not about who\'s right or wrong—it\'s a cozy space to share stories and connect.' },
      { title: 'Feel Free to Switch Cards', desc: 'If a question feels uncomfortable or too private right now, feel free to click "Change Card".' },
      { title: 'Save Favorite Topics', desc: 'Click the bookmark icon on any card if you want to save a great question for later.' }
    ];
  }

  if (lang === 'jp') {
    return [
      { title: '順番を守り、じっくり聴く', desc: '交代でカードを引きます。相手が話している時は、途中で口を挟まず優しく耳を傾けましょう。' },
      { title: '素直に、自分らしく語る', desc: '正解を競うゲームではありません。本音で話し、お互いを深め合うための時間です。' },
      { title: 'カードは自由にチェンジ', desc: '答えるのが難しそうなら、無理せず「カード変更」を押して新しい質問に交代できます。' },
      { title: 'お気に入りのテーマを保存', desc: '後でもう一度語り合いたい質問は、保存ボタンで簡単にブックマークできます。' }
    ];
  }

  return [
    { title: 'Gantian & Dengerin Sampai Tuntas', desc: 'Masing-masing pemain dapat giliran ambil kartu. Saat temanmu lagi cerita, dengerin baik-baik tanpa memotong ya.' },
    { title: 'Tampil Jujur & Apa Adanya', desc: 'Ini bukan soal siapa yang paling benar, tapi tentang membuka ruang obrolan hangat dan makin saling paham.' },
    { title: 'Bebas Ganti Kartu Kapan Saja', desc: 'Kalau ada pertanyaan yang rasanya belum nyaman dijawab, santai aja—kamu bebas klik "Ganti Kartu".' },
    { title: 'Simpan Pertanyaan Favorit', desc: 'Klik ikon "Simpan" di kartu kalau kamu mau simpan pertanyaan menarik buat dibahas lagi nanti.' }
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
  align-items: flex-start;
  gap: 1rem;
}

.rule-number {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-light);
  background: var(--bg-main);
  border: 1px solid var(--border-light);
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.rule-heading {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.rule-body {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}
</style>
