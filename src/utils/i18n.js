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
    brandSub: 'Percakapan Bermakna',
    soundOn: 'Suara Aktif',
    soundOff: 'Suara Mati',
    savedCards: 'Kartu Tersimpan',
    guide: 'Panduan Bermain',
    exitToHome: 'Keluar ke Beranda',
    
    // GameSetup
    setupTitle: 'Bicara Jujur, Mengenal Lebih Dalam',
    setupDesc: 'Ruang diskusi hangat tanpa penghakiman. Tentukan jumlah pemain, pilih edisi pertanyaan, dan nikmati momen perbincangan yang berkesan.',
    playersTitle: 'Pemain & Giliran',
    playerCountLabel: 'Jumlah Pemain',
    playerSuffix: 'Orang',
    playerPrefix: 'Pemain',
    editionTitle: 'Pilih Edisi Kartu',
    combinedTitle: 'Campur Semua Edisi',
    combinedDesc: 'Pertanyaan acak dari edisi Pasangan, Sahabat, Pernikahan, Refleksi, dan Keluarga.',
    cardsCountBadge: 'Kartu Total',
    cardsUnit: 'Kartu',
    depthTitle: 'Tingkat Kedalaman Pertanyaan',
    startGame: 'Mulai Permainan',
    
    // Gameplay
    turnLabel: 'Giliran Berbicara',
    cardsAnswered: 'Terjawab',
    nextTurn: 'Lanjut Giliran Pemain',
    changeCard: 'Ganti Kartu',
    changeEdition: 'Ganti Edisi',
    savedCount: 'Tersimpan',
    finishSession: 'Selesai Sesi',
    copyright: '© Arch | Tentang Kita, 2026',
    
    // CardDisplay
    tapToReveal: 'Ketuk untuk Membuka Pertanyaan',
    saveQuestion: 'Simpan Pertanyaan',
    saved: 'Tersimpan',
    
    // Modals
    rulesTitle: 'Panduan & Etika Percakapan',
    savedTitle: 'Koleksi Kartu Tersimpan',
    savedEmpty: 'Belum ada pertanyaan yang disimpan. Klik tombol simpan pada kartu saat bermain.',
    summaryTitle: 'Terima Kasih Atas Percakapan yang Hangat',
    summarySubtitle: 'Setiap jawaban dan kisah yang terbagi hari ini mendekatkan hubungan kalian satu sama lain.',
    totalCardsDrawn: 'Kartu Dijawab',
    totalSaved: 'Kartu Tersimpan',
    playAgain: 'Mulai Sesi Baru',
    continuePlaying: 'Lanjutkan Bermain',
    answeredHistory: 'Daftar Pertanyaan Terjawab'
  },
  en: {
    brandSub: 'Meaningful Conversations',
    soundOn: 'Sound On',
    soundOff: 'Sound Off',
    savedCards: 'Saved Cards',
    guide: 'Game Guide',
    exitToHome: 'Exit to Home',
    
    // GameSetup
    setupTitle: 'Talk Honestly, Connect Deeper',
    setupDesc: 'A warm, judgment-free space. Select player count, pick card editions, and enjoy memorable conversations.',
    playersTitle: 'Players & Turns',
    playerCountLabel: 'Number of Players',
    playerSuffix: 'Players',
    playerPrefix: 'Player',
    editionTitle: 'Select Card Edition',
    combinedTitle: 'Mix All Editions',
    combinedDesc: 'Random questions from Couples, Friends, Marriage, Self-Reflection, and Family editions.',
    cardsCountBadge: 'Cards Total',
    cardsUnit: 'Cards',
    depthTitle: 'Question Depth Level',
    startGame: 'Start Game',
    
    // Gameplay
    turnLabel: 'Speaking Turn',
    cardsAnswered: 'Answered',
    nextTurn: 'Next Player Turn',
    changeCard: 'Change Card',
    changeEdition: 'Change Edition',
    savedCount: 'Saved',
    finishSession: 'Finish Session',
    copyright: '© Arch | Tentang Kita, 2026',
    
    // CardDisplay
    tapToReveal: 'Tap to Reveal Question',
    saveQuestion: 'Save Question',
    saved: 'Saved',
    
    // Modals
    rulesTitle: 'Conversation Etiquette & Rules',
    savedTitle: 'Saved Questions Collection',
    savedEmpty: 'No saved questions yet. Click the bookmark icon on any card during the game.',
    summaryTitle: 'Thank You for a Warm Conversation',
    summarySubtitle: 'Every answer and story shared today brings you closer together.',
    totalCardsDrawn: 'Cards Answered',
    totalSaved: 'Saved Cards',
    playAgain: 'Start New Session',
    continuePlaying: 'Continue Playing',
    answeredHistory: 'Answered Questions History'
  },
  jp: {
    brandSub: '心に残る対話カード',
    soundOn: '効果音 ON',
    soundOff: '効果音 OFF',
    savedCards: '保存したカード',
    guide: 'プレイガイド',
    exitToHome: 'ホームに戻る',
    
    // GameSetup
    setupTitle: '本音で話し、深く知り合う',
    setupDesc: '否定のない温かい対話空間。人数を決め、エディションを選び、かけがえのない時間を過ごしましょう。',
    playersTitle: 'プレイヤーと順番',
    playerCountLabel: 'プレイヤー人数',
    playerSuffix: '人',
    playerPrefix: 'プレイヤー',
    editionTitle: 'エディション選択',
    combinedTitle: '全エディションミックス',
    combinedDesc: 'カップル、親友、結婚、自己対話、家族エディションからのランダムな質問。',
    cardsCountBadge: '全カード',
    cardsUnit: '枚',
    depthTitle: '質問の深さレベル',
    startGame: 'ゲームスタート',
    
    // Gameplay
    turnLabel: '発言の順番',
    cardsAnswered: '回答済み',
    nextTurn: '次のプレイヤーへ',
    changeCard: 'カードを変更',
    changeEdition: 'エディション変更',
    savedCount: '保存済み',
    finishSession: 'セッション終了',
    copyright: '© Arch | Tentang Kita, 2026',
    
    // CardDisplay
    tapToReveal: 'タップして質問を開く',
    saveQuestion: '質問を保存',
    saved: '保存済み',
    
    // Modals
    rulesTitle: '対話のマナーとルール',
    savedTitle: '保存した質問コレクション',
    savedEmpty: '保存された質問はまだありません。ゲーム中にブックマークアイコンをタップして保存できます。',
    summaryTitle: '温かい対話をありがとうございました',
    summarySubtitle: '今日共有されたすべての回答とストーリーが、お互いの絆を深めました。',
    totalCardsDrawn: '回答カード数',
    totalSaved: '保存カード数',
    playAgain: '新しいセッション',
    continuePlaying: 'プレイを続ける',
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

export function getLocalizedField(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  const lang = currentLang.value;
  return field[lang] || field.id || field.en || field.jp || '';
}
