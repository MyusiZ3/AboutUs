import { ref } from 'vue';

export const LANGUAGES = [
  { code: 'id', label: 'ID', flag: '🇮🇩', name: 'Indonesia' },
  { code: 'en', label: 'EN', flag: '🇬🇧', name: 'English' },
  { code: 'jp', label: 'JP', flag: '🇯🇵', name: '日本語' }
];

const savedLang = typeof localStorage !== 'undefined' ? localStorage.getItem('aboutus_lang') : 'id';
export const currentLang = ref(savedLang && ['id', 'en', 'jp'].includes(savedLang) ? savedLang : 'id');

export function setLanguage(langCode) {
  if (['id', 'en', 'jp'].includes(langCode)) {
    currentLang.value = langCode;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('aboutus_lang', langCode);
    }
  }
}

export const translations = {
  id: {
    brandSub: 'Obrolan dari Hati',
    soundOn: 'Suara Aktif',
    soundOff: 'Suara Mati',
    savedCards: 'Kartu Tersimpan',
    guide: 'Cara Bermain',
    exitToHome: 'Kembali ke Beranda',
    
    // GameSetup
    setupTitle: 'Ngobrol Santai, Kenal Lebih Dekat',
    setupDesc: 'Ruang nyaman untuk saling cerita tanpa canggung. Pilih berapa orang yang main, pilih topik favoritmu, lalu nikmati obrolan serunya.',
    playersTitle: 'Pemain',
    playerCountLabel: 'Berapa Orang yang Main?',
    playerSuffix: 'Orang',
    playerPrefix: 'Pemain',
    editionTitle: 'Pilih Topik Kartu',
    combinedTitle: 'Campur Semua Topik',
    combinedDesc: 'Pertanyaan acak seru dari topik Pasangan, Sahabat, Pernikahan, Refleksi, dan Keluarga.',
    cardsCountBadge: 'Kartu Total',
    cardsUnit: 'Kartu',
    depthTitle: 'Pilih Level Obrolan',
    startGame: 'Yuk, Mulai Obrolan',
    
    // Gameplay
    turnLabel: 'Giliran Bicara',
    cardsAnswered: 'Terjawab',
    nextTurn: 'Lanjut Giliran',
    changeCard: 'Ganti Kartu',
    changeEdition: 'Ganti Topik',
    savedCount: 'Tersimpan',
    finishSession: 'Selesai Obrolan',
    copyright: '© 2026 Arch • Tentang Kita. Hak Cipta Dilindungi.',
    
    // CardDisplay
    tapToReveal: 'Buka Pertanyaan',
    saveQuestion: 'Simpan Pertanyaan',
    saved: 'Tersimpan',
    flipCard: 'Balik',
    closeCard: 'Tutup Kartu',
    
    // Modals
    rulesTitle: 'Cara Main & Etika Ngobrol',
    savedTitle: 'Koleksi Kartu Tersimpan',
    savedEmpty: 'Belum ada pertanyaan yang disimpan. Klik ikon simpan pada kartu saat ngobrol.',
    summaryTitle: 'Terima Kasih Buat Obrolan Hangatnya!',
    summarySubtitle: 'Setiap cerita dan jawaban yang kalian bagi hari ini bikin hubungan makin dekat.',
    totalCardsDrawn: 'Kartu Dijawab',
    totalSaved: 'Kartu Tersimpan',
    playAgain: 'Mulai Obrolan Baru',
    continuePlaying: 'Lanjut Ngobrol',
    answeredHistory: 'Riwayat Pertanyaan Terjawab'
  },
  en: {
    brandSub: 'Meaningful Conversations',
    soundOn: 'Sound On',
    soundOff: 'Sound Off',
    savedCards: 'Saved Cards',
    guide: 'Game Guide',
    exitToHome: 'Back to Home',
    
    // GameSetup
    setupTitle: 'Talk Freely, Connect Deeper',
    setupDesc: 'A cozy space to share stories without judgment. Pick player count, choose a topic, and enjoy the conversation.',
    playersTitle: 'Players',
    playerCountLabel: 'How Many Players?',
    playerSuffix: 'Players',
    playerPrefix: 'Player',
    editionTitle: 'Choose Card Topic',
    combinedTitle: 'Mix All Topics',
    combinedDesc: 'Random questions mixed from Couples, Friends, Marriage, Reflection, and Family.',
    cardsCountBadge: 'Total Cards',
    cardsUnit: 'Cards',
    depthTitle: 'Choose Conversation Depth',
    startGame: 'Let\'s Start Chatting',
    
    // Gameplay
    turnLabel: 'Speaking Turn',
    cardsAnswered: 'Answered',
    nextTurn: 'Next Turn',
    changeCard: 'Change Card',
    changeEdition: 'Change Topic',
    savedCount: 'Saved',
    finishSession: 'End Session',
    copyright: '© 2026 Arch • Tentang Kita. All rights reserved.',
    
    // CardDisplay
    tapToReveal: 'Reveal Question',
    saveQuestion: 'Save Question',
    saved: 'Saved',
    flipCard: 'Flip',
    closeCard: 'Close Card',
    
    // Modals
    rulesTitle: 'How to Play & Etiquette',
    savedTitle: 'Saved Questions Collection',
    savedEmpty: 'No saved questions yet. Click the save icon on any card during your chat.',
    summaryTitle: 'Thank You for a Wonderful Chat!',
    summarySubtitle: 'Every story shared today brings you closer together.',
    totalCardsDrawn: 'Cards Answered',
    totalSaved: 'Saved Cards',
    playAgain: 'Start New Chat',
    continuePlaying: 'Keep Chatting',
    answeredHistory: 'Answered Questions History'
  },
  jp: {
    brandSub: '心に残る対話カード',
    soundOn: '効果音 ON',
    soundOff: '効果音 OFF',
    savedCards: '保存したカード',
    guide: '遊び方ガイド',
    exitToHome: 'ホームに戻る',
    
    // GameSetup
    setupTitle: '本音で話し、もっと仲良くなる',
    setupDesc: '気兼ねなく気持ちを分かち合える空間。人数とテーマを選んで、楽しく対話を始めましょう。',
    playersTitle: 'プレイヤー',
    playerCountLabel: '何人で遊ぶ？',
    playerSuffix: '人',
    playerPrefix: 'プレイヤー',
    editionTitle: 'テーマを選択',
    combinedTitle: '全テーマミックス',
    combinedDesc: 'カップル、親友、結婚、自己対話、家族エディションのランダムな質問。',
    cardsCountBadge: '全カード',
    cardsUnit: '枚',
    depthTitle: '会話の深さを選ぶ',
    startGame: '対話を始める',
    
    // Gameplay
    turnLabel: '話す順番',
    cardsAnswered: '回答済み',
    nextTurn: '次のターンへ',
    changeCard: 'カード変更',
    changeEdition: 'テーマ変更',
    savedCount: '保存済み',
    finishSession: '対話を終了',
    copyright: '© 2026 Arch • Tentang Kita. All rights reserved.',
    
    // CardDisplay
    tapToReveal: '質問を開く',
    saveQuestion: '質問を保存',
    saved: '保存済み',
    flipCard: '裏返す',
    closeCard: 'カードを閉じる',
    
    // Modals
    rulesTitle: '遊び方とマナー',
    savedTitle: '保存した質問コレクション',
    savedEmpty: '保存された質問はまだありません。対話中にブックマークをタップして保存できます。',
    summaryTitle: '素敵な対話をありがとうございました！',
    summarySubtitle: '今日分かち合ったストーリーが、お互いの距離をぐっと縮めました。',
    totalCardsDrawn: '回答カード数',
    totalSaved: '保存カード数',
    playAgain: '新しい対話を始める',
    continuePlaying: '対話を続ける',
    answeredHistory: '回答済み質問の履歴'
  }
};

export function t(key) {
  const lang = currentLang.value;
  if (translations[lang] && translations[lang][key] !== undefined) {
    return translations[lang][key];
  }
  return translations.id[key] || key;
}

export function formatPlayerName(name) {
  if (!name) return '';
  const match = name.match(/^Pemain\s+(\d+)$/i);
  if (match) {
    const num = match[1];
    const prefix = t('playerPrefix');
    return `${prefix} ${num}`;
  }
  return name;
}

const categoryTranslations = {
  'Awal Pertemuan': { id: 'Awal Pertemuan', en: 'First Meeting', jp: '出会い' },
  'Bahasa Cinta': { id: 'Bahasa Cinta', en: 'Love Languages', jp: '愛の言語' },
  'Kebiasaan': { id: 'Kebiasaan', en: 'Habits & Quirks', jp: '習慣と癖' },
  'Apresiasi': { id: 'Apresiasi', en: 'Appreciation', jp: '感謝' },
  'Kenyamanan': { id: 'Kenyamanan', en: 'Comfort', jp: '居心地の良さ' },
  'Komunikasi': { id: 'Komunikasi', en: 'Communication', jp: 'コミュニケーション' },
  'Kepercayaan': { id: 'Kepercayaan', en: 'Trust & Honesty', jp: '信頼と誠実さ' },
  'Konflik': { id: 'Konflik', en: 'Conflict Resolution', jp: '葛藤の解決' },
  'Masa Depan': { id: 'Masa Depan', en: 'Future Plans', jp: '未来の計画' },
  'Intimasi': { id: 'Intimasi', en: 'Intimacy', jp: '親密さ' },
  'Impian Bersama': { id: 'Impian Bersama', en: 'Shared Dreams', jp: '共にある夢' },
  'Visi Pernikahan': { id: 'Visi Pernikahan', en: 'Marriage Vision', jp: '結婚のビジョン' },
  'Pengelolaan Keuangan': { id: 'Pengelolaan Keuangan', en: 'Financial Management', jp: '金銭管理' },
  'Hubungan Keluarga': { id: 'Hubungan Keluarga', en: 'Family Relations', jp: '家族関係' },
  'Pendewasaan Diri': { id: 'Pendewasaan Diri', en: 'Personal Growth', jp: '自己成長' },
  'Nostalgia Masa Kecil': { id: 'Nostalgia Masa Kecil', en: 'Childhood Memories', jp: '子供時代の思い出' },
  'Refleksi Diri': { id: 'Refleksi Diri', en: 'Self Reflection', jp: '自己内省' },
  'Ekspektasi': { id: 'Ekspektasi', en: 'Expectations', jp: '期待と価値観' },
  'Persahabatan': { id: 'Persahabatan', en: 'Friendship', jp: '友情' }
};

export function getLocalizedCategory(cat) {
  if (!cat) return '';
  if (typeof cat === 'object') return getLocalizedField(cat);
  const found = categoryTranslations[cat];
  if (found) {
    return getLocalizedField(found);
  }
  return cat;
}

export function getLocalizedField(field) {
  if (!field) return '';
  if (typeof field === 'object') {
    const lang = currentLang.value;
    return field[lang] || field.id || field.en || field.jp || '';
  }
  return field;
}
