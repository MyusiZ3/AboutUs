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
  const match = name.match(/^(Pemain|Player|プレイヤー)\s+(\d+)$/i);
  if (match) {
    const num = match[2];
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
  'Ruang Pribadi': { id: 'Ruang Pribadi', en: 'Personal Space', jp: '個人の時間' },
  'Dukungan': { id: 'Dukungan', en: 'Support', jp: 'サポート' },
  'Intimasi': { id: 'Intimasi', en: 'Intimacy', jp: '親密さ' },
  'Impian Bersama': { id: 'Impian Bersama', en: 'Shared Dreams', jp: '共にある夢' },
  'Kenangan': { id: 'Kenangan', en: 'Memories', jp: '思い出' },
  'Pola Komunikasi': { id: 'Pola Komunikasi', en: 'Communication Patterns', jp: '対話のパターン' },
  'Ekspektasi': { id: 'Ekspektasi', en: 'Expectations', jp: '期待と価値観' },
  'Kerentanan': { id: 'Kerentanan', en: 'Vulnerability', jp: '素直な気持ち' },
  'Komitmen': { id: 'Komitmen', en: 'Commitment', jp: 'コミットメント' },
  'Penerimaan': { id: 'Penerimaan', en: 'Acceptance', jp: '受け入れ' },
  'Masa Depan': { id: 'Masa Depan', en: 'Future Plans', jp: '未来の計画' },
  'Tumbuh Bersama': { id: 'Tumbuh Bersama', en: 'Growing Together', jp: '共に成長' },
  'Keunikan': { id: 'Keunikan', en: 'Uniqueness', jp: 'ユニークさ' },
  'Nostalgia': { id: 'Nostalgia', en: 'Nostalgia', jp: 'ノスタルジー' },
  'Perhatian': { id: 'Perhatian', en: 'Care & Attention', jp: '思いやり' },
  'Dukungan Karir': { id: 'Dukungan Karir', en: 'Career Support', jp: 'キャリア支援' },
  'Kecemburuan': { id: 'Kecemburuan', en: 'Jealousy', jp: '嫉妬と本音' },
  'Beban Emosi': { id: 'Beban Emosi', en: 'Emotional Weight', jp: '心の負担' },
  'Pengampunan': { id: 'Pengampunan', en: 'Forgiveness', jp: '許し' },
  'Pertumbuhan': { id: 'Pertumbuhan', en: 'Growth', jp: '成長' },
  'Makna Kasih': { id: 'Makna Kasih', en: 'Meaning of Love', jp: '愛の意味' },
  'Kepercayaan Utama': { id: 'Kepercayaan Utama', en: 'Core Trust', jp: '根本的な信頼' },
  'Kerapuhan': { id: 'Kerapuhan', en: 'Vulnerability', jp: '脆さと弱さ' },
  'Bercanda': { id: 'Bercanda', en: 'Humor & Fun', jp: 'ユーモア' },
  'Kehadiran': { id: 'Kehadiran', en: 'Presence', jp: '存在感' },
  'Keseimbangan': { id: 'Keseimbangan', en: 'Balance', jp: 'バランス' },
  'Empati': { id: 'Empati', en: 'Empathy', jp: '共感' },
  'Kebersamaan': { id: 'Kebersamaan', en: 'Togetherness', jp: '共に過ごす時間' },
  'Kesetiaan': { id: 'Kesetiaan', en: 'Loyalty', jp: '忠実さ' },
  'Saling Menjaga': { id: 'Saling Menjaga', en: 'Mutual Care', jp: 'お互いを守る' },
  'Pujian': { id: 'Pujian', en: 'Compliments', jp: '褒め言葉' },
  'Penghargaan': { id: 'Penghargaan', en: 'Appreciation', jp: '感謝と敬意' },
  'Harapan Utama': { id: 'Harapan Utama', en: 'Main Hopes', jp: '主な希望' },
  'Kencan Spesial': { id: 'Kencan Spesial', en: 'Special Dates', jp: '特別なデート' },
  'Perhatian Kecil': { id: 'Perhatian Kecil', en: 'Small Gestures', jp: '小さな思いやり' },
  'Saling Membantu': { id: 'Saling Membantu', en: 'Helping Each Other', jp: '助け合い' },
  'Visi Bersama': { id: 'Visi Bersama', en: 'Shared Vision', jp: '共通のビジョン' },
  'Rasa Percaya': { id: 'Rasa Percaya', en: 'Sense of Trust', jp: '信頼感' },
  'Kesan Pertama': { id: 'Kesan Pertama', en: 'First Impression', jp: '第一印象' },
  'Karakter Unik': { id: 'Karakter Unik', en: 'Unique Character', jp: 'ユニークな性格' },
  'Tempat Favorit': { id: 'Tempat Favorit', en: 'Favorite Spots', jp: 'お気に入りの場所' },
  'Pujian Sahabat': { id: 'Pujian Sahabat', en: 'Friend\'s Praise', jp: '親友からの称賛' },
  'Kejujuran': { id: 'Kejujuran', en: 'Honesty', jp: '誠実さ' },
  'Dinamika': { id: 'Dinamika', en: 'Dynamics', jp: 'ダイナミクス' },
  'Perspektif': { id: 'Perspektif', en: 'Perspective', jp: '視点と価値観' },
  'Kesalahpahaman': { id: 'Kesalahpahaman', en: 'Misunderstandings', jp: '誤解の解消' },
  'Saling Jaga': { id: 'Saling Jaga', en: 'Caring for Each Other', jp: '見守り合い' },
  'Impian': { id: 'Impian', en: 'Dreams', jp: '夢' },
  'Batas Pertemanan': { id: 'Batas Pertemanan', en: 'Friendship Boundaries', jp: '友情の境界線' },
  'Rasa Syukur': { id: 'Rasa Syukur', en: 'Gratitude', jp: '感謝の気持ち' },
  'Kebiasaan Pendengar': { id: 'Kebiasaan Pendengar', en: 'Listening Habits', jp: '傾聴の習慣' },
  'Perubahan Diri': { id: 'Perubahan Diri', en: 'Personal Shift', jp: '自己の変化' },
  'Kesepian': { id: 'Kesepian', en: 'Loneliness', jp: '孤独感' },
  'Pelajaran Hidup': { id: 'Pelajaran Hidup', en: 'Life Lessons', jp: '人生の教訓' },
  'Harapan Masa Depan': { id: 'Harapan Masa Depan', en: 'Future Hopes', jp: '未来への願い' },
  'Karakter': { id: 'Karakter', en: 'Character', jp: '人柄' },
  'Peran': { id: 'Peran', en: 'Role', jp: '役割' },
  'Penilaian Jujur': { id: 'Penilaian Jujur', en: 'Honest Feedback', jp: '率直な評価' },
  'Emosi': { id: 'Emosi', en: 'Emotions', jp: '感情' },
  'Nilai Hidup': { id: 'Nilai Hidup', en: 'Life Values', jp: '人生観' },
  'Pendewasaan': { id: 'Pendewasaan', en: 'Maturity', jp: '成熟' },
  'Finansial': { id: 'Finansial', en: 'Finances', jp: '金銭面' },
  'Pembagian Peran': { id: 'Pembagian Peran', en: 'Role Division', jp: '役割分担' },
  'Hubungan Mertua': { id: 'Hubungan Mertua', en: 'In-Laws', jp: '義理の家族' },
  'Parenting': { id: 'Parenting', en: 'Parenting', jp: '子育て' },
  'Visi Pernikahan': { id: 'Visi Pernikahan', en: 'Marriage Vision', jp: '結婚のビジョン' },
  'Pengelolaan Keuangan': { id: 'Pengelolaan Keuangan', en: 'Financial Management', jp: '資産管理' },
  'Hubungan Keluarga': { id: 'Hubungan Keluarga', en: 'Family Relations', jp: '家族関係' },
  'Refleksi Diri': { id: 'Refleksi Diri', en: 'Self Reflection', jp: '自己省察' },
  'Nilai Kerja Keras': { id: 'Nilai Kerja Keras', en: 'Work Ethic', jp: '勤勉さの価値' },
  'Dukungan Moral': { id: 'Dukungan Moral', en: 'Moral Support', jp: '精神的支え' },
  'Pengabdian': { id: 'Pengabdian', en: 'Devotion', jp: '献身' },
  'Pelajaran Cinta': { id: 'Pelajaran Cinta', en: 'Lessons of Love', jp: '愛の学び' },
  'Kenangan Manis': { id: 'Kenangan Manis', en: 'Sweet Memories', jp: '甘い思い出' },
  'Pesan Keabadian': { id: 'Pesan Keabadian', en: 'Eternal Message', jp: '永遠のメッセージ' },
  'Makan Bersama': { id: 'Makan Bersama', en: 'Meals Together', jp: '共に囲む食卓' },
  'Pelajaran Sederhana': { id: 'Pelajaran Sederhana', en: 'Simple Lessons', jp: '素朴な教訓' },
  'Suasana Hangat': { id: 'Suasana Hangat', en: 'Warm Atmosphere', jp: '温かい空気感' },
  'Terima Kasih Tulus': { id: 'Terima Kasih Tulus', en: 'Heartfelt Thanks', jp: '心からの感謝' },
  'Prinsip Kehormatan': { id: 'Prinsip Kehormatan', en: 'Principles of Honor', jp: '誇りの原則' }
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

import { QUESTION_TRANSLATIONS } from './questionTranslations.js';

export function getLocalizedQuestion(cardOrQuestion) {
  if (!cardOrQuestion) return '';
  const lang = currentLang.value;

  // 1. If passed full card object
  if (typeof cardOrQuestion === 'object') {
    const card = cardOrQuestion;
    if (card.question && typeof card.question === 'object') {
      return card.question[lang] || card.question.id || card.question.en || card.question.jp || '';
    }
    if (card.id && QUESTION_TRANSLATIONS[card.id] && QUESTION_TRANSLATIONS[card.id][lang]) {
      return QUESTION_TRANSLATIONS[card.id][lang];
    }
    if (typeof card.question === 'string') {
      return card.question;
    }
  }

  // 2. If passed string directly
  if (typeof cardOrQuestion === 'string') {
    return cardOrQuestion;
  }

  return '';
}
