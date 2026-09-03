export const EDITIONS = {
  pasangan: {
    id: 'pasangan',
    title: {
      id: 'Edisi Pasangan',
      en: 'Couples Edition',
      jp: 'カップルエディション'
    },
    subtitle: {
      id: 'Mengenal Lebih Dalam Karakter, Harapan, dan Perasaan Pasangan',
      en: 'Understand Personality, Hopes, and Feelings Deeper',
      jp: 'パートナーの性格、希望、感情をより深く理解する'
    },
    description: {
      id: 'Dirancang untuk mempererat hubungan asmara melalui ruang diskusi yang jujur dan hangat.',
      en: 'Designed to strengthen romantic bonds through honest and warm discussion.',
      jp: '率直で温かい対話を通じて恋愛関係を深めるためにデザインされています。'
    },
    themeColor: '#E8AEB7', // Soft Dusty Rose
    accentColor: '#D4A373',
    cardBg: '#FFF5F6',
    borderStyle: 'border-rose',
    iconName: 'Heart'
  },
  teman: {
    id: 'teman',
    title: {
      id: 'Edisi Sahabat & Teman',
      en: 'Friends & Besties Edition',
      jp: '親友・友達エディション'
    },
    subtitle: {
      id: 'Nostalgia, Perspektif Jujur, dan Apresiasi Hubungan Pertemanan',
      en: 'Nostalgia, Honest Perspectives, and Friendships Appreciation',
      jp: 'ノスタルジー、本音の視点、そして友情への感謝'
    },
    description: {
      id: 'Pertanyaan eksploratif untuk merayakan kenangan manis dan dinamika persahabatan.',
      en: 'Exploratory questions to celebrate sweet memories and friendship dynamics.',
      jp: '素敵な思い出と友情のダイナミクスを祝う探求的な質問。'
    },
    themeColor: '#CCD5AE', // Soft Sage Green
    accentColor: '#E9EDC9',
    cardBg: '#F8FAF2',
    borderStyle: 'border-sage',
    iconName: 'Users'
  },
  pernikahan: {
    id: 'pernikahan',
    title: {
      id: 'Edisi Pernikahan & Masa Depan',
      en: 'Marriage & Future Edition',
      jp: '結婚・未来エディション'
    },
    subtitle: {
      id: 'Visi Bersama, Pengelolaan Konflik, Komitmen, dan Realita',
      en: 'Shared Vision, Conflict Management, Commitment, and Reality',
      jp: '共有ビジョン、葛藤の管理、コミットメント、リアリティ'
    },
    description: {
      id: 'Topik esensial tentang prinsip hidup, ekspektasi keluarga, serta rencana jangka panjang.',
      en: 'Essential topics about life principles, family expectations, and long-term plans.',
      jp: '人生の原則、家族の期待、長期計画についての必須トピック。'
    },
    themeColor: '#D4A373', // Soft Terracotta / Sand
    accentColor: '#FAEDCD',
    cardBg: '#FFFDF9',
    borderStyle: 'border-sand',
    iconName: 'Compass'
  },
  refleksi: {
    id: 'refleksi',
    title: {
      id: 'Edisi Refleksi & Diri Sendiri',
      en: 'Self-Reflection Edition',
      jp: '自己内省エディション'
    },
    subtitle: {
      id: 'Eksplorasi Kebatinan, Kerentanan, Nilai Hidup, dan Pendewasaan',
      en: 'Inner Exploration, Vulnerability, Life Values, and Growth',
      jp: '内面の探求、弱さ、人生観、段々の成長'
    },
    description: {
      id: 'Pertanyaan penuh makna untuk memahami pemikiran paling pribadi tentang hidup.',
      en: 'Meaningful questions to understand your most personal thoughts on life.',
      jp: '人生に関する最も個人的な思考を理解するための意味深い質問。'
    },
    themeColor: '#B8C0E0', // Soft Lavender Slate
    accentColor: '#D8B4E2',
    cardBg: '#F9F8FC',
    borderStyle: 'border-lavender',
    iconName: 'Sparkles'
  },
  keluarga: {
    id: 'keluarga',
    title: {
      id: 'Edisi Keluarga & Nostalgia',
      en: 'Family & Heritage Edition',
      jp: '家族・ノスタルジーエディション'
    },
    subtitle: {
      id: 'Akar Masa Kecil, Hubungan Orang Tua, dan Harapan Antar Generasi',
      en: 'Childhood Roots, Parental Bonds, and Intergenerational Hopes',
      jp: '幼少期のルーツ、親との絆、世代間の希望'
    },
    description: {
      id: 'Menelusuri sejarah keluarga, nilai-nilai yang diturunkan, dan momen yang membentuk diri.',
      en: 'Tracing family history, passed-down values, and moments that shaped you.',
      jp: '家族の歴史、引き継がれた価値観、あなたを形作った瞬間をたどる。'
    },
    themeColor: '#D6CCC2', // Soft Warm Grey / Taupe
    accentColor: '#F5EBE0',
    cardBg: '#FAF8F5',
    borderStyle: 'border-warm',
    iconName: 'Home'
  }
};

export const QUESTIONS = [
  // ==========================================
  // EDISI PASANGAN (45 KARTU)
  // ==========================================
  {
    id: 'pas-01',
    edition: 'pasangan',
    level: 1,
    category: 'Awal Pertemuan',
    question: 'Apa kesan pertamamu saat pertama kali kita bertemu, dan kapan tepatnya kamu menyadari ada ketertarikan padaku?'
  },
  {
    id: 'pas-02',
    edition: 'pasangan',
    level: 1,
    category: 'Bahasa Cinta',
    question: 'Tindakan kecil apa yang sering aku lakukan yang membuatmu merasa sangat dicintai tanpa perlu aku mengatakannya?'
  },
  {
    id: 'pas-03',
    edition: 'pasangan',
    level: 1,
    category: 'Kebiasaan',
    question: 'Kebiasaan lucuku apa yang awal mulanya membuatmu heran, namun sekarang justru terasa menggemaskan bagimu?'
  },
  {
    id: 'pas-04',
    edition: 'pasangan',
    level: 1,
    category: 'Apresiasi',
    question: 'Hal apa dari dalam diriku yang paling sering kamu banggakan ketika kamu menceritakan tentangku kepada orang lain?'
  },
  {
    id: 'pas-05',
    edition: 'pasangan',
    level: 1,
    category: 'Kenyamanan',
    question: 'Di momen seperti apa kamu merasa paling menjadi dirimu sendiri saat berada di sampingku?'
  },
  {
    id: 'pas-06',
    edition: 'pasangan',
    level: 2,
    category: 'Komunikasi',
    question: 'Apakah ada hal yang ingin kamu sampaikan padaku akhir-akhir ini, namun kamu masih ragu atau mencari momen yang tepat?'
  },
  {
    id: 'pas-07',
    edition: 'pasangan',
    level: 2,
    category: 'Kepercayaan',
    question: 'Seberapa jauh kamu merasa aku mendengarkan dan memahami keluh kesahmu saat kamu sedang menghadapi hari yang berat?'
  },
  {
    id: 'pas-08',
    edition: 'pasangan',
    level: 2,
    category: 'Konflik',
    question: 'Saat kita berbeda pendapat, gaya penyelesaian seperti apa yang menurutmu paling membuatmu merasa dihargai?'
  },
  {
    id: 'pas-09',
    edition: 'pasangan',
    level: 2,
    category: 'Ruang Pribadi',
    question: 'Bagaimana pandanganmu mengenai batasan antara waktu luang pribadi dan waktu kebersamaan dalam hubungan kita?'
  },
  {
    id: 'pas-10',
    edition: 'pasangan',
    level: 2,
    category: 'Dukungan',
    question: 'Ketika kamu sedang merasa tidak percaya diri, bantuan konkret apa yang paling kamu harapkan dari hadirku?'
  },
  {
    id: 'pas-11',
    edition: 'pasangan',
    level: 2,
    category: 'Intimasi',
    question: 'Menurutmu, apa arti kedekatan emosional bagi hubungan kita dan bagaimana cara terbaik untuk terus menjaganya?'
  },
  {
    id: 'pas-12',
    edition: 'pasangan',
    level: 2,
    category: 'Impian Bersama',
    question: 'Pengalaman baru apa yang sangat ingin kamu coba bersamaku dalam kurun waktu satu tahun ke depan?'
  },
  {
    id: 'pas-13',
    edition: 'pasangan',
    level: 2,
    category: 'Kenangan',
    question: 'Momen mana dalam hubungan kita yang menurutmu menjadi titik balik pendewasaan kita berdua?'
  },
  {
    id: 'pas-14',
    edition: 'pasangan',
    level: 2,
    category: 'Pola Komunikasi',
    question: 'Apakah ada kata-kata atau perbuatanku di masa lalu yang tanpa kusadari pernah melukai perasaanmu dan perlu kita bahas?'
  },
  {
    id: 'pas-15',
    edition: 'pasangan',
    level: 2,
    category: 'Ekspektasi',
    question: 'Sejauh mana ekspektasimu terhadap hubungan ini sudah terpenuhi, dan area mana yang masih bisa kita perbaiki bersama?'
  },
  {
    id: 'pas-16',
    edition: 'pasangan',
    level: 3,
    category: 'Kerentanan',
    question: 'Apa ketakutan terbesar yang menyangkut hubungan kita yang jarang atau tidak pernah kamu ungkapkan sebelumnya?'
  },
  {
    id: 'pas-17',
    edition: 'pasangan',
    level: 3,
    category: 'Komitmen',
    question: 'Hal mendasar apa yang menjadi fondasi utamamu untuk tetap memilih bertahan di sampingku dalam kondisi terpuruk sekalipun?'
  },
  {
    id: 'pas-18',
    edition: 'pasangan',
    level: 3,
    category: 'Penerimaan',
    question: 'Kekurangan atau sisi kelam dari dirimu yang mana yang membutuhkan kepastian bahwa aku akan tetap menerimanya?'
  },
  {
    id: 'pas-19',
    edition: 'pasangan',
    level: 3,
    category: 'Masa Depan',
    question: 'Bagaimana bayanganmu tentang keseharian kehidupan kita dalam 5 hingga 10 tahun mendatang?'
  },
  {
    id: 'pas-20',
    edition: 'pasangan',
    level: 3,
    category: 'Tumbuh Bersama',
    question: 'Perubahan positif apa dari karaktermu yang kamu rasakan semenjak kita menjalani hubungan ini?'
  },
  {
    id: 'pas-21',
    edition: 'pasangan',
    level: 1,
    category: 'Apresiasi',
    question: 'Kapan terakhir kali kamu merasa sangat bangga menjadi pasanganku?'
  },
  {
    id: 'pas-22',
    edition: 'pasangan',
    level: 1,
    category: 'Kenyamanan',
    question: 'Apa hal sederhana di akhir pekan yang paling membuatmu merasa rileks saat kita lakukan berdua?'
  },
  {
    id: 'pas-23',
    edition: 'pasangan',
    level: 1,
    category: 'Keunikan',
    question: 'Menurutmu, apa kemiripan dan perbedaan paling mencolok dalam cara kita memandang kehidupan?'
  },
  {
    id: 'pas-24',
    edition: 'pasangan',
    level: 1,
    category: 'Komunikasi',
    question: 'Apakah kamu merasa lebih mudah mengungkapkan kasih sayang lewat perkataan, tulisan, atau tindakan nyata?'
  },
  {
    id: 'pas-25',
    edition: 'pasangan',
    level: 1,
    category: 'Nostalgia',
    question: 'Foto atau foto kenangan kita berdua mana yang paling memiliki tempat spesial di hatimu dan mengapa?'
  },
  {
    id: 'pas-26',
    edition: 'pasangan',
    level: 2,
    category: 'Perhatian',
    question: 'Apakah ada kebutuhan emosionalmu saat ini yang merasa belum sepenuhnya tersentuh olehku?'
  },
  {
    id: 'pas-27',
    edition: 'pasangan',
    level: 2,
    category: 'Dukungan Karir',
    question: 'Bagaimana aku bisa menjadi pendukung yang lebih baik bagi karir dan cita-cita pribadimu?'
  },
  {
    id: 'pas-28',
    edition: 'pasangan',
    level: 2,
    category: 'Kecemburuan',
    question: 'Sikap atau situasi seperti apa yang paling rentan menimbulkan rasa cemburu atau tidak aman dalam dirimu?'
  },
  {
    id: 'pas-29',
    edition: 'pasangan',
    level: 2,
    category: 'Beban Emosi',
    question: 'Saat kamu sedang lelah mental, apakah kamu lebih butuh solusiku atau sekadar pelukan dan telinga yang mendengarkan?'
  },
  {
    id: 'pas-30',
    edition: 'pasangan',
    level: 2,
    category: 'Pengampunan',
    question: 'Kesalahan kecil apa dari kita yang mengajarkanmu pelajaran paling berharga tentang memaafkan?'
  },
  {
    id: 'pas-31',
    edition: 'pasangan',
    level: 3,
    category: 'Pertumbuhan',
    question: 'Jika kamu bisa mengubah satu pola interaksi dalam hubungan kita agar menjadi lebih sehat, apa yang akan kamu ubah?'
  },
  {
    id: 'pas-32',
    edition: 'pasangan',
    level: 3,
    category: 'Makna Kasih',
    question: 'Apakah kamu merasa dicintai sesuai dengan cara yang paling ingin kamu rasakan?'
  },
  {
    id: 'pas-33',
    edition: 'pasangan',
    level: 3,
    category: 'Kepercayaan Utama',
    question: 'Rahasia atau pikiran ter dalam seperti apa yang baru berani kamu bagikan setelah mengenalku?'
  },
  {
    id: 'pas-34',
    edition: 'pasangan',
    level: 3,
    category: 'Kerapuhan',
    question: 'Kapan momen di mana kamu merasa paling rentan di hadapanku dan bagaimana responsku saat itu?'
  },
  {
    id: 'pas-35',
    edition: 'pasangan',
    level: 3,
    category: 'Komitmen',
    question: 'Pengorbanan apa yang pernah kamu lakukan demi menjaga keharmonisan hubungan kita yang mungkin belum kusebutkan?'
  },
  {
    id: 'pas-36',
    edition: 'pasangan',
    level: 1,
    category: 'Bercanda',
    question: 'Hal konyol apa yang pernah kita lewati bersama yang selalu membuatmu tertawa setiap kali mengingatnya?'
  },
  {
    id: 'pas-37',
    edition: 'pasangan',
    level: 1,
    category: 'Kehadiran',
    question: 'Lagu atau musik apa yang paling mengingatkanmu pada awal perjalanan kasih kita?'
  },
  {
    id: 'pas-38',
    edition: 'pasangan',
    level: 2,
    category: 'Keseimbangan',
    question: 'Bagaimana pendapatmu tentang cara kita membagi waktu antara teman, pekerjaan, dan waktu khusus berdua?'
  },
  {
    id: 'pas-39',
    edition: 'pasangan',
    level: 2,
    category: 'Empati',
    question: 'Apa satu hal tentang masa lalumu yang membuatmu membentuk cara mencintai yang kamu miliki sekarang?'
  },
  {
    id: 'pas-40',
    edition: 'pasangan',
    level: 2,
    category: 'Kebersamaan',
    question: 'Apa tradisi kecil yang ingin kamu buat bersama agar hubungan kita selalu terasa hangat?'
  },
  {
    id: 'pas-41',
    edition: 'pasangan',
    level: 3,
    category: 'Kesetiaan',
    question: 'Menurutmu, apa batas paling jujur dalam definisi kesetiaan dan kejujuran bagi kita?'
  },
  {
    id: 'pas-42',
    edition: 'pasangan',
    level: 3,
    category: 'Saling Menjaga',
    question: 'Saat kamu mengalami fase tersulit dalam hidupmu, bantuan emosional apa yang paling menyelamatkanmu?'
  },
  {
    id: 'pas-43',
    edition: 'pasangan',
    level: 1,
    category: 'Pujian',
    question: 'Apa pujian terindah dari diriku yang paling membekas di benak dan hatimu hingga hari ini?'
  },
  {
    id: 'pas-44',
    edition: 'pasangan',
    level: 2,
    category: 'Penghargaan',
    question: 'Apa sifatku yang paling membantumu belajar menjadi pribadi yang lebih sabar dan dewasa?'
  },
  {
    id: 'pas-45',
    edition: 'pasangan',
    level: 3,
    category: 'Harapan Utama',
    question: 'Apa pesan penting yang ingin kamu titipkan padaku untuk diingat jika suatu saat hubungan kita diterpa badai besar?'
  },
  {
    id: 'pas-46',
    edition: 'pasangan',
    level: 1,
    category: 'Kencan Spesial',
    question: 'Tempat kencan mana yang paling membuatmu merasa hangat dan ingin kita kunjungi kembali berdua?'
  },
  {
    id: 'pas-47',
    edition: 'pasangan',
    level: 2,
    category: 'Perhatian Kecil',
    question: 'Bentuk perhatian sederhana dariku apa yang selalu berhasil membuatmu tersenyum bahkan di hari yang lelah?'
  },
  {
    id: 'pas-48',
    edition: 'pasangan',
    level: 2,
    category: 'Saling Membantu',
    question: 'Jika aku bisa membantu meringankan satu beban pikiranmu minggu ini, bantuan apa yang paling kamu butuhkan?'
  },
  {
    id: 'pas-49',
    edition: 'pasangan',
    level: 3,
    category: 'Visi Bersama',
    question: 'Impian besar apa tentang perjalanan hubungan kita yang paling tidak sabar ingin kamu rayakan di masa depan?'
  },
  {
    id: 'pas-50',
    edition: 'pasangan',
    level: 3,
    category: 'Rasa Percaya',
    question: 'Hal apa dari karakterku yang membuatmu merasa sangat aman dan yakin menyerahkan hatimu?'
  },

  // ==========================================
  // EDISI SAHABAT & TEMAN (45 KARTU)
  // ==========================================
  {
    id: 'tem-01',
    edition: 'teman',
    level: 1,
    category: 'Kesan Pertama',
    question: 'Ingatkah kamu kapan dan di mana pertama kali kita saling sapa? Apa kesan awalmu tentangku waktu itu?'
  },
  {
    id: 'tem-02',
    edition: 'teman',
    level: 1,
    category: 'Nostalgia',
    question: 'Kejadian konyol atau memalukan apa di masa lalu yang kalau diingat lagi sekarang malah bikin kita tertawa terbahak-bahak?'
  },
  {
    id: 'tem-03',
    edition: 'teman',
    level: 1,
    category: 'Karakter Unik',
    question: 'Apa kebiasaan unik atau gaya bicaraku yang menurutmu sangat khas dan langsung mengingatkanmu padaku?'
  },
  {
    id: 'tem-04',
    edition: 'teman',
    level: 1,
    category: 'Tempat Favorit',
    question: 'Tempat nongkrong atau momen sederhana mana yang menurutmu paling ikonik dalam perjalanan persahabatan kita?'
  },
  {
    id: 'tem-05',
    edition: 'teman',
    level: 1,
    category: 'Pujian Sahabat',
    question: 'Keahlian atau bakat rahasia dari diriku apa yang menurutmu layak mendapatkan apresiasi lebih tinggi?'
  },
  {
    id: 'tem-06',
    edition: 'teman',
    level: 2,
    category: 'Kejujuran',
    question: 'Apakah ada nasihat dariku di masa lalu yang awalnya sulit kamu terima, tapi belakangan terbukti benar?'
  },
  {
    id: 'tem-07',
    edition: 'teman',
    level: 2,
    category: 'Dinamika',
    question: 'Bagaimana pertemanan kita berubah seiring bertambahnya usia dan kesibukan masing-masing?'
  },
  {
    id: 'tem-08',
    edition: 'teman',
    level: 2,
    category: 'Dukungan',
    question: 'Momen saat kamu sedang terpuruk kapan di mana kehadiran pertemanan kita terasa sangat berarti bagimu?'
  },
  {
    id: 'tem-09',
    edition: 'teman',
    level: 2,
    category: 'Perspektif',
    question: 'Dalam hal apa kita memiliki pandangan hidup yang paling bertolak belakang, namun kita tetap bisa saling menghormati?'
  },
  {
    id: 'tem-10',
    edition: 'teman',
    level: 2,
    category: 'Kesalahpahaman',
    question: 'Pernahkah ada kesalahpahaman di antara kita yang sebenarnya belum pernah benar-benar diungkapkan secara tuntas?'
  },
  {
    id: 'tem-11',
    edition: 'teman',
    level: 2,
    category: 'Saling Jaga',
    question: 'Sikap positif apa dariku yang menurutmu memberikan pengaruh baik dalam caramu menjalani hidup?'
  },
  {
    id: 'tem-12',
    edition: 'teman',
    level: 2,
    category: 'Impian',
    question: 'Pencapaian pribadi atau impian besar apa darimu saat ini yang paling ingin kamu lihat terwujud?'
  },
  {
    id: 'tem-13',
    edition: 'teman',
    level: 2,
    category: 'Batas Pertemanan',
    question: 'Menurut pandanganmu, apa syarat utama agar pertemanan bisa bertahan awet hingga puluhan tahun?'
  },
  {
    id: 'tem-14',
    edition: 'teman',
    level: 2,
    category: 'Rasa Syukur',
    question: 'Hal spesifik apa yang paling kamu syukuri dari memiliki pertemanan seperti yang kita jalani saat ini?'
  },
  {
    id: 'tem-15',
    edition: 'teman',
    level: 2,
    category: 'Kebiasaan Pendengar',
    question: 'Apakah kamu merasa bebas bercerita tentang apa saja denganku tanpa takut dihakimi?'
  },
  {
    id: 'tem-16',
    edition: 'teman',
    level: 3,
    category: 'Kerentanan',
    question: 'Ceritakan satu ketakutan terbesarmu dalam fase hidup saat ini yang belum banyak orang lain ketahui.'
  },
  {
    id: 'tem-17',
    edition: 'teman',
    level: 3,
    category: 'Perubahan Diri',
    question: 'Perubahan terbesar apa dari kepribadianku yang paling terasa olehmu dari dulu hingga sekarang?'
  },
  {
    id: 'tem-18',
    edition: 'teman',
    level: 3,
    category: 'Kesepian',
    question: 'Di momen seperti apa kamu pernah merasa sangat sendirian, dan apa yang bisa aku lakukan jika situasi itu terulang?'
  },
  {
    id: 'tem-19',
    edition: 'teman',
    level: 3,
    category: 'Pelajaran Hidup',
    question: 'Ujian hidup tersulit apa yang pernah kamu lewati dan bagaimana hal itu mengubah caramu melihat dunia?'
  },
  {
    id: 'tem-20',
    edition: 'teman',
    level: 3,
    category: 'Harapan Masa Depan',
    question: 'Saat kita nanti sama-sama tua dan memiliki kehidupan masing-masing, tradisi apa yang ingin tetap kita jaga?'
  },
  {
    id: 'tem-21',
    edition: 'teman',
    level: 1,
    category: 'Karakter',
    question: 'Jika pertemanan kita diibaratkan sebagai judul film atau lagu, judul apa yang paling cocok?'
  },
  {
    id: 'tem-22',
    edition: 'teman',
    level: 1,
    category: 'Nostalgia',
    question: 'Apa momen perjalanan atau acara bersama yang paling tidak bisa kamu lupakan?'
  },
  {
    id: 'tem-23',
    edition: 'teman',
    level: 1,
    category: 'Kebiasaan',
    question: 'Siapa di antara kita yang lebih sering datang terlambat atau lupa rencana saat janji ketemuan?'
  },
  {
    id: 'tem-24',
    edition: 'teman',
    level: 1,
    category: 'Bercanda',
    question: 'Inside joke atau lelucon internal apa di antara kita yang orang luar tidak akan pernah paham?'
  },
  {
    id: 'tem-25',
    edition: 'teman',
    level: 1,
    category: 'Peran',
    question: 'Dalam kelompok pertemanan, menurutmu kamu memegang peran sebagai penengah, pembuat wacana, atau si perencana?'
  },
  {
    id: 'tem-26',
    edition: 'teman',
    level: 2,
    category: 'Penilaian Jujur',
    question: 'Apa kritikan membangun yang ingin kamu sampaikan padaku demi kebaikanku sendiri?'
  },
  {
    id: 'tem-27',
    edition: 'teman',
    level: 2,
    category: 'Kenyamanan',
    question: 'Kapan kamu menyadari bahwa pertemanan kita bukan lagi sekadar kenalan biasa, melainkan sahabat sejati?'
  },
  {
    id: 'tem-28',
    edition: 'teman',
    level: 2,
    category: 'Emosi',
    question: 'Bagaimana caramu biasanya meluapkan emosi saat sedang berada di puncak stres?'
  },
  {
    id: 'tem-29',
    edition: 'teman',
    level: 2,
    category: 'Nilai Hidup',
    question: 'Prinsip moral atau etika apa yang paling kamu pegang teguh dalam memilih lingkar pertemanan?'
  },
  {
    id: 'tem-30',
    edition: 'teman',
    level: 2,
    category: 'Apresiasi',
    question: 'Pertolongan kecil dariku apa yang mungkin sudah kukupakan, namun tetap membekas dalam ingatanmu?'
  },
  {
    id: 'tem-31',
    edition: 'teman',
    level: 3,
    category: 'Empati',
    question: 'Apakah ada keputusan besar dalam hidupku di masa lalu yang sebenarnya membuatmu cemas atau khawatir?'
  },
  {
    id: 'tem-32',
    edition: 'teman',
    level: 3,
    category: 'Pendewasaan',
    question: 'Apa pelajaran terbesar tentang persahabatan yang kamu dapatkan setelah pernah kehilangan atau merenggang dengan teman lain?'
  },
  {
    id: 'tem-33',
    edition: 'teman',
    level: 3,
    category: 'Pemberdayaan',
    question: 'Sifat mana dalam diriku yang menurutmu bisa dikembangkan lagi agar aku mencapai potensi maksimal?'
  },
  {
    id: 'tem-34',
    edition: 'teman',
    level: 3,
    category: 'Keberanian',
    question: 'Pernahkah kamu merasa cemburu atau minder dengan pencapaian teman di lingkaranmu, dan bagaimana caramu menyikapinya?'
  },
  {
    id: 'tem-35',
    edition: 'teman',
    level: 3,
    category: 'Kepercayaan',
    question: 'Seberapa yakin kamu bahwa kamu bisa mengandalkan diriku saat kamu benar-benar dalam keadaan darurat?'
  },
  {
    id: 'tem-36',
    edition: 'teman',
    level: 1,
    category: 'Gaya Hidup',
    question: 'Jika kita punya budget tak terbatas untuk liburan bersama selama seminggu, destinasi mana yang akan kamu pilih?'
  },
  {
    id: 'tem-37',
    edition: 'teman',
    level: 1,
    category: 'Kesenangan',
    question: 'Makanan atau minuman apa yang paling identik dengan momen saat kita nongkrong berdua?'
  },
  {
    id: 'tem-38',
    edition: 'teman',
    level: 2,
    category: 'Keseimbangan',
    question: 'Bagaimana caramu menjaga komunikasi di tengah kesibukan kerja dan kehidupan masing-masing?'
  },
  {
    id: 'tem-39',
    edition: 'teman',
    level: 2,
    category: 'Pendengar',
    question: 'Seberapa baik aku menjadi pendengar bagimu menurut skala 1 sampai 10?'
  },
  {
    id: 'tem-40',
    edition: 'teman',
    level: 2,
    category: 'Karakteristik',
    question: 'Satu kata apa yang paling tepat menggambarkan kepribadianku di matamu?'
  },
  {
    id: 'tem-41',
    edition: 'teman',
    level: 3,
    category: 'Penerimaan',
    question: 'Sisi unik diri kamu apa yang tidak semua orang bisa terima, tapi bisa dipahami dengan baik dalam pertemanan kita?'
  },
  {
    id: 'tem-42',
    edition: 'teman',
    level: 3,
    category: 'Refleksi',
    question: 'Apakah ada hal yang ingin kamu katakan kepada dirimu sendiri di masa lalu saat pertama kali memulai persahabatan ini?'
  },
  {
    id: 'tem-43',
    edition: 'teman',
    level: 1,
    category: 'Kegiatan',
    question: 'Hobi atau kegiatan baru apa yang ingin kamu coba ajak aku lakukan bersama?'
  },
  {
    id: 'tem-44',
    edition: 'teman',
    level: 2,
    category: 'Kehangatan',
    question: 'Apa momen di mana kamu merasa paling disayangi dan dihargai sebagai seorang sahabat?'
  },
  {
    id: 'tem-45',
    edition: 'teman',
    level: 3,
    category: 'Doa & Harapan',
    question: 'Apa harapan paling tulus yang selalu kamu aminkan untuk kehidupan dan kebahagiaanku?'
  },
  {
    id: 'tem-46',
    edition: 'teman',
    level: 1,
    category: 'Momen Kejutan',
    question: 'Momen perayaan atau kejutan bersama teman-teman mana yang paling berkesan dalam hidupmu?'
  },
  {
    id: 'tem-47',
    edition: 'teman',
    level: 2,
    category: 'Tradisi Bicara',
    question: 'Kebiasaan sederhana dalam pertemanan kita mana yang paling kamu harapkan tidak pernah pudar seiring usia?'
  },
  {
    id: 'tem-48',
    edition: 'teman',
    level: 2,
    category: 'Ruang Aman',
    question: 'Dalam hal apa kamu merasa persahabatan ini menjadi tempat perlindungan yang paling nyaman bagimu?'
  },
  {
    id: 'tem-49',
    edition: 'teman',
    level: 3,
    category: 'Pendewasaan Bersama',
    question: 'Bagaimana kita saling membantu belajar menjadi manusia yang lebih bijaksana seiring berjalannya waktu?'
  },
  {
    id: 'tem-50',
    edition: 'teman',
    level: 3,
    category: 'Ketulusan Hati',
    question: 'Apa doa atau harapan paling mendalam yang selalu kamu simpan diam-diam untuk keberhasilan sahabatmu?'
  },

  // ==========================================
  // EDISI PERNIKAHAN & MASA DEPAN (45 KARTU)
  // ==========================================
  {
    id: 'nik-01',
    edition: 'pernikahan',
    level: 1,
    category: 'Visi Rumah',
    question: 'Bagaimana gambaran rumah impian idealmu dari segi suasana, tata ruang, dan kebiasaan sehari-hari di dalamnya?'
  },
  {
    id: 'nik-02',
    edition: 'pernikahan',
    level: 1,
    category: 'Rutinitas Pagi',
    question: 'Seperti apa rutinitas pagi ideal yang ingin kita bangun bersama setelah hidup dalam satu atap?'
  },
  {
    id: 'nik-03',
    edition: 'pernikahan',
    level: 1,
    category: 'Waktu Berkualitas',
    question: 'Di tengah rutinitas pernikahan nantinya, cara sederhana apa yang paling efektif untuk menjaga kencan berkala kita?'
  },
  {
    id: 'nik-04',
    edition: 'pernikahan',
    level: 1,
    category: 'Gaya Hidup',
    question: 'Bagaimana caramu memandang prinsip hidup hemat versus menikmati hasil kerja keras dalam rumah tangga?'
  },
  {
    id: 'nik-05',
    edition: 'pernikahan',
    level: 1,
    category: 'Tradisi Keluarga',
    question: 'Tradisi keluarga masa kecilmu mana yang ingin kamu teruskan ke dalam rumah tangga kita kelak?'
  },
  {
    id: 'nik-06',
    edition: 'pernikahan',
    level: 2,
    category: 'Finansial',
    question: 'Bagaimana sistem pengelolaan keuangan dan transparansi anggaran rumah tangga yang menurutmu paling adil dan nyaman?'
  },
  {
    id: 'nik-07',
    edition: 'pernikahan',
    level: 2,
    category: 'Pembagian Peran',
    question: 'Bagaimana pandanganmu mengenai pembagian tugas domestik dan pekerjaan rumah sehari-hari?'
  },
  {
    id: 'nik-08',
    edition: 'pernikahan',
    level: 2,
    category: 'Hubungan Mertua',
    question: 'Bagaimana kita menyikapi batasan serta keterlibatan keluarga besar atau mertua dalam pengambilan keputusan rumah tangga?'
  },
  {
    id: 'nik-09',
    edition: 'pernikahan',
    level: 2,
    category: 'Parenting',
    question: 'Nilai-nilai utama apa yang paling ingin kamu tanamkan kepada anak-anak kita jika kelak kita dikaruniai keturunan?'
  },
  {
    id: 'nik-10',
    edition: 'pernikahan',
    level: 2,
    category: 'Penyelesaian Konflik',
    question: 'Aturan main seperti apa yang ingin kita sepakati saat terjadi pertengkaran agar tidak berlarut-larut atau melukai?'
  },
  {
    id: 'nik-11',
    edition: 'pernikahan',
    level: 2,
    category: 'Pengembangan Karir',
    question: 'Bagaimana kita menyikapi jika salah satu dari kita mendapatkan peluang karir besar namun mengharuskan pindah kota?'
  },
  {
    id: 'nik-12',
    edition: 'pernikahan',
    level: 2,
    category: 'Spiritualitas',
    question: 'Seberapa penting peran nilai spiritual dan agama dalam memandu arah dan prinsip rumah tangga kita?'
  },
  {
    id: 'nik-13',
    edition: 'pernikahan',
    level: 2,
    category: 'Kebutuhan Me Time',
    question: 'Bagaimana cara kita memastikan bahwa masing-masing tetap memiliki ruang untuk tumbuh secara individu?'
  },
  {
    id: 'nik-14',
    edition: 'pernikahan',
    level: 2,
    category: 'Pola Komunikasi',
    question: 'Saat salah satu dari kita sedang sangat lelah secara emosional, kode atau penanda apa yang paling efektif disampaikan?'
  },
  {
    id: 'nik-15',
    edition: 'pernikahan',
    level: 2,
    category: 'Manajemen Stres',
    question: 'Bagaimana rencana kita untuk menghadapi tekanan finansial atau krisis tak terduga dalam kehidupan pernikahan?'
  },
  {
    id: 'nik-16',
    edition: 'pernikahan',
    level: 3,
    category: 'Komitmen Seumur Hidup',
    question: 'Apa arti kata komitmen pernikahan bagimu ketika masa-masa romantis sudah berganti menjadi rutinitas harian?'
  },
  {
    id: 'nik-17',
    edition: 'pernikahan',
    level: 3,
    category: 'Ketakutan Pernikahan',
    question: 'Khawatir atau keraguan terbesar apa tentang kehidupan pernikahan yang paling sering terlintas di pikiranmu?'
  },
  {
    id: 'nik-18',
    edition: 'pernikahan',
    level: 3,
    category: 'Kesehatan Mental & Fisik',
    question: 'Jika salah satu dari kita mengalami sakit kronis atau masalah kesehatan mental, bagaimana janji kita untuk saling menopang?'
  },
  {
    id: 'nik-19',
    edition: 'pernikahan',
    level: 3,
    category: 'Prinsip Keterbukaan',
    question: 'Apakah ada hal finansial, trauma masa lalu, atau rahasia penting yang merasa harus dituntaskan sebelum melangkah ke jenjang pernikahan?'
  },
  {
    id: 'nik-20',
    edition: 'pernikahan',
    level: 3,
    category: 'Keintiman Jangka Panjang',
    question: 'Bagaimana usaha dan komitmen kita untuk terus memelihara rasa cinta dan kehangatan romansa hingga usia senja?'
  },
  {
    id: 'nik-21',
    edition: 'pernikahan',
    level: 1,
    category: 'Gaya Belanja',
    question: 'Apa pengeluaran pribadi yang menurutmu wajar dialokasikan tanpa perlu persetujuan ketat dari pasangan?'
  },
  {
    id: 'nik-22',
    edition: 'pernikahan',
    level: 1,
    category: 'Liburan Rumah Tangga',
    question: 'Seberapa sering kamu mendambakan waktu liburan berdua saja tanpa membawa pekerjaan atau urusan lain?'
  },
  {
    id: 'nik-23',
    edition: 'pernikahan',
    level: 1,
    category: 'Estetika Rumah',
    question: 'Siapa yang lebih dominan menentukan tata letak dan dekorasi interior rumah kita nantinya?'
  },
  {
    id: 'nik-24',
    edition: 'pernikahan',
    level: 1,
    category: 'Sosialisasi',
    question: 'Bagaimana aturan mengenai menerima tamu atau teman yang ingin menginap di rumah kita?'
  },
  {
    id: 'nik-25',
    edition: 'pernikahan',
    level: 1,
    category: 'Apresiasi Pasangan',
    question: 'Ucapan atau bentuk penghargaan seperti apa yang paling membuatmu merasa menjadi pasangan yang berhasil?'
  },
  {
    id: 'nik-26',
    edition: 'pernikahan',
    level: 2,
    category: 'Ekspektasi Gender',
    question: 'Apakah masih ada prasangka atau persepsi tradisional tentang peran suami/istri yang perlu kita diskusikan?'
  },
  {
    id: 'nik-27',
    edition: 'pernikahan',
    level: 2,
    category: 'Parenting style',
    question: 'Jika cara mendidik anak kita berbeda dengan pola didik orang tua kita dulu, bagaimana kita bersikap tegas?'
  },
  {
    id: 'nik-28',
    edition: 'pernikahan',
    level: 2,
    category: 'Investasi Masa Depan',
    question: 'Apa prioritas finansial utama kita dalam 3 tahun pertama: dana darurat, rumah, investasi, atau pendidikan?'
  },
  {
    id: 'nik-29',
    edition: 'pernikahan',
    level: 2,
    category: 'Batas Media Sosial',
    question: 'Seberapa jauh keterbukaan dan batasan privasi kehidupan rumah tangga yang boleh dibagikan ke media sosial?'
  },
  {
    id: 'nik-30',
    edition: 'pernikahan',
    level: 2,
    category: 'Momen Sepi',
    question: 'Bagaimana kita menangani fase jenuh yang mungkin hadir di beberapa tahun usia pernikahan?'
  },
  {
    id: 'nik-31',
    edition: 'pernikahan',
    level: 3,
    category: 'Kesetiaan',
    question: 'Menurutmu, apa tindakan pencegahan terbaik agar rumah tangga kita terhindar dari godaan pihak ketiga?'
  },
  {
    id: 'nik-32',
    edition: 'pernikahan',
    level: 3,
    category: 'Penerimaan Keluarga',
    question: 'Apakah kamu sudah merasa benar-benar diterima oleh keluarga besarku, dan sebaliknya?'
  },
  {
    id: 'nik-33',
    edition: 'pernikahan',
    level: 3,
    category: 'Impian Bersama',
    question: 'Legacy atau warisan kebaikan apa yang paling ingin kita tinggalkan bersama di dunia ini?'
  },
  {
    id: 'nik-34',
    edition: 'pernikahan',
    level: 3,
    category: 'Toleransi Perbedaan',
    question: 'Jika salah satu dari kita mengalami perubahan prinsip atau pola pikir yang drastis, bagaimana cara kita menyesuaikan diri?'
  },
  {
    id: 'nik-35',
    edition: 'pernikahan',
    level: 3,
    category: 'Puncak Kebahagiaan',
    question: 'Indikator utama apa yang membuatmu bisa berkata: "Rumah tangga kita sungguh membahagiakan"?'
  },
  {
    id: 'nik-36',
    edition: 'pernikahan',
    level: 1,
    category: 'Akhir Pekan',
    question: 'Kegiatan hari Minggu yang paling kamu bayangkan membuat suasana rumah menjadi tenang dan hangat?'
  },
  {
    id: 'nik-37',
    edition: 'pernikahan',
    level: 1,
    category: 'Kebiasaan Makan',
    question: 'Apakah kita lebih sering masak bersama di rumah atau mengeksplor kuliner di luar?'
  },
  {
    id: 'nik-38',
    edition: 'pernikahan',
    level: 2,
    category: 'Asuransi & Proteksi',
    question: 'Bagaimana sudut pandangmu tentang pentingnya perlindungan asuransi dan dana darurat keluarga?'
  },
  {
    id: 'nik-39',
    edition: 'pernikahan',
    level: 2,
    category: 'Komunikasi Pasca Pertengkaran',
    question: 'Berapa lama waktu cooling down yang kamu butuhkan sebelum siap bicara dingin kembali pasca perbedaan pendapat?'
  },
  {
    id: 'nik-40',
    edition: 'pernikahan',
    level: 2,
    category: 'Saling Menghargai',
    question: 'Tindakan seperti apa dari pasangan yang bisa meruntuhkan rasa percaya diri dalam konteks rumah tangga?'
  },
  {
    id: 'nik-41',
    edition: 'pernikahan',
    level: 3,
    category: 'Kematangan Mental',
    question: 'Kedewasaan seperti apa yang menurutmu masih harus terus kita latih bersama saat ini?'
  },
  {
    id: 'nik-42',
    edition: 'pernikahan',
    level: 3,
    category: 'Empati Suami Istri',
    question: 'Bagaimana cara kita saling mendukung saat salah satu merasa kehilangan arah atau tujuan hidup?'
  },
  {
    id: 'nik-43',
    edition: 'pernikahan',
    level: 1,
    category: 'Kenyamanan',
    question: 'Baju atau suasana seperti apa yang membuat rumah terasa paling hangat bagimu?'
  },
  {
    id: 'nik-44',
    edition: 'pernikahan',
    level: 2,
    category: 'Kebersamaan Hari Tua',
    question: 'Di kota atau suasana seperti apa kamu ingin kita menghabiskan hari tua nanti bersama?'
  },
  {
    id: 'nik-45',
    edition: 'pernikahan',
    level: 3,
    category: 'Ikrar Kesetiaan',
    question: 'Satu janji tulus apa yang ingin kamu gaungkan dan pertahankan untuk pasanganmu selamanya?'
  },
  {
    id: 'nik-46',
    edition: 'pernikahan',
    level: 1,
    category: 'Kenyamanan Rumah',
    question: 'Suasana malam hari seperti apa di rumah yang paling kamu bayangkan membuat pikiran menjadi tenang?'
  },
  {
    id: 'nik-47',
    edition: 'pernikahan',
    level: 2,
    category: 'Tujuan Finansial',
    question: 'Prinsip atau tujuan keuangan utama apa yang ingin kita raih bersama dalam 5 tahun pertama pernikahan?'
  },
  {
    id: 'nik-48',
    edition: 'pernikahan',
    level: 2,
    category: 'Komunikasi Saat Lelah',
    question: 'Bagaimana cara terbaik agar kita tetap saling mendengarkan saat sama-sama lelah sepulang bekerja?'
  },
  {
    id: 'nik-49',
    edition: 'pernikahan',
    level: 3,
    category: 'Kompas Rumah Tangga',
    question: 'Nilai atau prinsip utama apa yang akan menjadi kompas rumah tangga kita di kala ada ujian berat?'
  },
  {
    id: 'nik-50',
    edition: 'pernikahan',
    level: 3,
    category: 'Kisah Masa Depan',
    question: 'Kisah manis seperti apa tentang perjalanan cinta kita yang paling ingin kamu ceritakan kepada anak cucu kelak?'
  },

  // ==========================================
  // EDISI REFLEKSI & DIRI SENDIRI (45 KARTU)
  // ==========================================
  {
    id: 'ref-01',
    edition: 'refleksi',
    level: 1,
    category: 'Rasa Syukur',
    question: 'Hal kecil apa hari ini atau minggu ini yang membuatmu mengelus dada dan merasa sangat bersyukur?'
  },
  {
    id: 'ref-02',
    edition: 'refleksi',
    level: 1,
    category: 'Energi Diri',
    question: 'Kegiatan atau suasana seperti apa yang paling cepat memulihkan energimu ketika kamu merasa kelelahan emosional?'
  },
  {
    id: 'ref-03',
    edition: 'refleksi',
    level: 1,
    category: 'Pencapaian',
    question: 'Pencapaian diri apa yang mungkin terlihat sepele bagi orang lain, namun terasa sangat berarti bagi perjalananmu?'
  },
  {
    id: 'ref-04',
    edition: 'refleksi',
    level: 1,
    category: 'Ruang Aman',
    question: 'Di mana tempat atau dalam kondisi seperti apa kamu merasa paling aman untuk mengekspresikan emosimu?'
  },
  {
    id: 'ref-05',
    edition: 'refleksi',
    level: 1,
    category: 'Kesenangan Sederhana',
    question: 'Apa kebiasaan baik baru yang berhasil kamu bangun baru-baru ini dan berdampak positif pada suasana hatimu?'
  },
  {
    id: 'ref-06',
    edition: 'refleksi',
    level: 2,
    category: 'Pola Pikir',
    question: 'Keyakinan atau pola pikir apa yang dulu sangat kamu pegang, namun sekarang sudah kamu lepaskan karena pendewasaan?'
  },
  {
    id: 'ref-07',
    edition: 'refleksi',
    level: 2,
    category: 'Penyesalan',
    question: 'Jika kamu bisa kembali ke kurun waktu 5 tahun lalu, pesan atau nasihat singkat apa yang ingin kamu bisikkan pada dirimu sendiri?'
  },
  {
    id: 'ref-08',
    edition: 'refleksi',
    level: 2,
    category: 'Beban Emosional',
    question: 'Ekspektasi dari siapa yang paling sering terasa memberatkan pundakmu saat ini?'
  },
  {
    id: 'ref-09',
    edition: 'refleksi',
    level: 2,
    category: 'Batasan Diri',
    question: 'Seberapa berani kamu berkata "tidak" pada hal-hal yang sebenarnya menguras kedamaian pikiranmu?'
  },
  {
    id: 'ref-10',
    edition: 'refleksi',
    level: 2,
    category: 'Penerimaan Diri',
    question: 'Kekurangan fisik atau sifat dalam dirimu yang mana yang saat ini sedang dalam proses belajar kamu cintai?'
  },
  {
    id: 'ref-11',
    edition: 'refleksi',
    level: 2,
    category: 'Impian Terpendam',
    question: 'Cita-cita atau keinginan masa kecil apa yang tanpa sadar masih sering mengetuk pintu hatimu?'
  },
  {
    id: 'ref-12',
    edition: 'refleksi',
    level: 2,
    category: 'Kejujuran pada Diri',
    question: 'Kebohongan kecil apa yang paling sering kamu katakan pada dirimu sendiri hanya untuk menenangkan pikiran?'
  },
  {
    id: 'ref-13',
    edition: 'refleksi',
    level: 2,
    category: 'Kekecewaan',
    question: 'Bagaimana caramu biasanya berdamai dengan kekecewaan ketika hasil yang didapat tidak sesuai usaha gigihmu?'
  },
  {
    id: 'ref-14',
    edition: 'refleksi',
    level: 2,
    category: 'Pengaruh Lingkungan',
    question: 'Apakah orang-orang di sekitarmu saat ini mendorongmu menjadi versi terbaikmu atau justru sebaliknya?'
  },
  {
    id: 'ref-15',
    edition: 'refleksi',
    level: 2,
    category: 'Kedamaian Jiwa',
    question: 'Definisi sukses yang hakiki menurut versi pribadimu saat ini, lepas dari standar penilaian masyarakat?'
  },
  {
    id: 'ref-16',
    edition: 'refleksi',
    level: 3,
    category: 'Kerentanan',
    question: 'Luka masa lalu apa yang dampaknya masih kadang terasa memengaruhi cara berinteraksimu hingga hari ini?'
  },
  {
    id: 'ref-17',
    edition: 'refleksi',
    level: 3,
    category: 'Ketakutan Terbesar',
    question: 'Apa ketakutan terbesar mengenai masa depan yang paling sering membuatmu terjaga di hening malam?'
  },
  {
    id: 'ref-18',
    edition: 'refleksi',
    level: 3,
    category: 'Menaafkan Diri',
    question: 'Kesalahan masa lalu apa dari dirimu sendiri yang sampai saat ini masih paling sulit kamu maafkan?'
  },
  {
    id: 'ref-19',
    edition: 'refleksi',
    level: 3,
    category: 'Kehilangan',
    question: 'Pengalaman kehilangan terbesar apa yang pernah kamu lewati dan bagaimana hal itu mengubah sudut pandangmu tentang kehidupan?'
  },
  {
    id: 'ref-20',
    edition: 'refleksi',
    level: 3,
    category: 'Makna Keberadaan',
    question: 'Jika besok adalah hari terakhirmu di dunia, apakah kamu sudah merasa menjalani hidup dengan jujur dan berani?'
  },
  {
    id: 'ref-21',
    edition: 'refleksi',
    level: 1,
    category: 'Inspirasi',
    question: 'Siapa sosok tokoh atau orang di sekitar yang paling menginspirasimu dalam hal keteguhan mental?'
  },
  {
    id: 'ref-22',
    edition: 'refleksi',
    level: 1,
    category: 'Aktivitas Penyembuhan',
    question: 'Buku, film, atau karya seni apa yang paling menyentuh dan mengubah sudut pandangmu?'
  },
  {
    id: 'ref-23',
    edition: 'refleksi',
    level: 1,
    category: 'Kenyamanan',
    question: 'Suara alami atau lagu apa yang paling ampuh meredakan rasa cemas dalam pikiranmu?'
  },
  {
    id: 'ref-24',
    edition: 'refleksi',
    level: 1,
    category: 'Penghargaan Diri',
    question: 'Kapan terakhir kali kamu memberikan hadiah atau pujian tulus pada dirimu sendiri?'
  },
  {
    id: 'ref-25',
    edition: 'refleksi',
    level: 1,
    category: 'Ruang Kreatif',
    question: 'Saluran ekspresi kreatif apa yang paling membuat hatimu gembira saat melakukannya?'
  },
  {
    id: 'ref-26',
    edition: 'refleksi',
    level: 2,
    category: 'Perbandingan Diri',
    question: 'Momen kapan kamu paling rentan terjebak dalam kebiasaan membandingkan diri dengan orang lain?'
  },
  {
    id: 'ref-27',
    edition: 'refleksi',
    level: 2,
    category: 'Keberanian',
    question: 'Keputusan tersulit apa yang pernah kamu ambil yang membutuhkan keberanian ekstra dari dalam dirimu?'
  },
  {
    id: 'ref-28',
    edition: 'refleksi',
    level: 2,
    category: 'Empati',
    question: 'Bagaimana caramu bersikap lembut pada diri sendiri saat sedang mengalami kegagalan?'
  },
  {
    id: 'ref-29',
    edition: 'refleksi',
    level: 2,
    category: 'Pola Reaksi',
    question: 'Sifat buruk apa yang paling kamu waspadai muncul ketika kamu sedang diselimuti rasa cemas atau marah?'
  },
  {
    id: 'ref-30',
    edition: 'refleksi',
    level: 2,
    category: 'Tujuan Hidup',
    question: 'Apa kompas moral utama yang menjadi panduanmu dalam mengambil setiap keputusan penting?'
  },
  {
    id: 'ref-31',
    edition: 'refleksi',
    level: 3,
    category: 'Pengampunan',
    question: 'Apakah ada orang yang pernah sangat menyakitimu yang kini sudah berhasil kamu maafkan sepenuhnya?'
  },
  {
    id: 'ref-32',
    edition: 'refleksi',
    level: 3,
    category: 'Identitas Sejati',
    question: 'Topeng atau peran sosial apa yang paling lelah kamu kenakan di hadapan publik?'
  },
  {
    id: 'ref-33',
    edition: 'refleksi',
    level: 3,
    category: 'Keseimbangan Hidup',
    question: 'Apakah kamu saat ini lebih banyak hidup untuk memenuhi ekspektasi orang lain atau kebahagiaanmu sendiri?'
  },
  {
    id: 'ref-34',
    edition: 'refleksi',
    level: 3,
    category: 'Kerentanan Emosi',
    question: 'Kapan terakhir kali kamu menangis haru atau lega, dan apa yang mencetuskan perasaan itu?'
  },
  {
    id: 'ref-35',
    edition: 'refleksi',
    level: 3,
    category: 'Transformasi',
    question: 'Pelajaran berharga apa dari kesedihan paling dalam yang pernah membuatmu tumbuh menjadi pribadi yang lebih tangguh?'
  },
  {
    id: 'ref-36',
    edition: 'refleksi',
    level: 1,
    category: 'Kesenangan',
    question: 'Aroma atau wewangian apa yang selalu berhasil membawamu pada kenangan damai?'
  },
  {
    id: 'ref-37',
    edition: 'refleksi',
    level: 1,
    category: 'Refleksi Singkat',
    question: 'Satu kata yang ingin kamu dedikasikan sebagai tema utama perjalanan hidupmu tahun ini?'
  },
  {
    id: 'ref-38',
    edition: 'refleksi',
    level: 2,
    category: 'Kesehatan Diri',
    question: 'Seberapa baik kamu mendengarkan sinyal kelelahan dari tubuh dan pikiranmu?'
  },
  {
    id: 'ref-39',
    edition: 'refleksi',
    level: 2,
    category: 'Penaung Hati',
    question: 'Siapa orang yang paling kamu percayai untuk menjadi tempatmu menumpahkan air mata tanpa keraguan?'
  },
  {
    id: 'ref-40',
    edition: 'refleksi',
    level: 2,
    category: 'Disiplin',
    question: 'Area hidup mana yang menurutmu saat ini membutuhkan disiplin dan keteguhan komitmen ekstra?'
  },
  {
    id: 'ref-41',
    edition: 'refleksi',
    level: 3,
    category: 'Kedalaman Jiwa',
    question: 'Apa pertanyaan tentang hidup yang sampai hari ini masih terus kamu cari jawabannya?'
  },
  {
    id: 'ref-42',
    edition: 'refleksi',
    level: 3,
    category: 'Ketulusan',
    question: 'Apakah kamu sudah merasa cukup baik dan adil terhadap dirimu sendiri selama ini?'
  },
  {
    id: 'ref-43',
    edition: 'refleksi',
    level: 1,
    category: 'Apriresiasi',
    question: 'Pujian apa yang paling membuat matamu berbinar karena diucapkan dari ketulusan?'
  },
  {
    id: 'ref-44',
    edition: 'refleksi',
    level: 2,
    category: 'Harapan Pribadi',
    question: 'Kualitas karakter apa yang paling ingin kamu perkuat dalam dirimu dalam 2 tahun ke depan?'
  },
  {
    id: 'ref-45',
    edition: 'refleksi',
    level: 3,
    category: 'Pesan Perdamaian',
    question: 'Tuliskan kalimat penutup sebagai janji untuk selalu menyayangi dirimu sendiri di segala keadaan.'
  },
  {
    id: 'ref-46',
    edition: 'refleksi',
    level: 1,
    category: 'KeheninganJiwa',
    question: 'Momen keheningan seperti apa yang paling membuat jiwamu merasa tenang dan damai dari hiruk pikuk?'
  },
  {
    id: 'ref-47',
    edition: 'refleksi',
    level: 2,
    category: 'Keberanian',
    question: 'Pelajaran terpenting apa tentang keberanian yang kamu dapatkan dari kegagalan di masa lalu?'
  },
  {
    id: 'ref-48',
    edition: 'refleksi',
    level: 2,
    category: 'PenerimaanDiri',
    question: 'Bagaimana caramu mengingatkan diri sendiri bahwa kamu sudah berjuang dengan sangat baik hingga hari ini?'
  },
  {
    id: 'ref-49',
    edition: 'refleksi',
    level: 3,
    category: 'PertumbuhanJiwa',
    question: 'Bagian mana dari dirimu yang merasa paling bersyukur atas proses pendewasaan yang telah kamu lewati?'
  },
  {
    id: 'ref-50',
    edition: 'refleksi',
    level: 3,
    category: 'Jejak Hidup',
    question: 'Jejak kebaikan seperti apa yang paling ingin kamu tinggalkan bagi orang-orang tersayang di sekitarmu?'
  },

  // ==========================================
  // EDISI KELUARGA & NOSTALGIA (45 KARTU)
  // ==========================================
  {
    id: 'kel-01',
    edition: 'keluarga',
    level: 1,
    category: 'Masa Kecil',
    question: 'Mainan atau permainan tradisional masa kecil apa yang paling sering membuatmu lupa waktu bersama saudara atau teman?'
  },
  {
    id: 'kel-02',
    edition: 'keluarga',
    level: 1,
    category: 'Masakan Ibu / Rumah',
    question: 'Masakan khas rumah atau buatan orang tua mana yang aromanya selalu membawamu pada rindu suasana rumah?'
  },
  {
    id: 'kel-03',
    edition: 'keluarga',
    level: 1,
    category: 'Acara Keluarga',
    question: 'Momen kumpul keluarga atau perayaan hari raya mana yang paling membekas indah dalam ingatanmu?'
  },
  {
    id: 'kel-04',
    edition: 'keluarga',
    level: 1,
    category: 'Nasihat Orang Tua',
    question: 'Pesan atau wejangan sederhana dari orang tua yang hingga kini masih sering terdengar di telingamu?'
  },
  {
    id: 'kel-05',
    edition: 'keluarga',
    level: 1,
    category: 'Cerita Masa Lalu',
    question: 'Cerita lucu atau dongeng sebelum tidur apa yang dulu paling sering diceritakan di rumahmu?'
  },
  {
    id: 'kel-06',
    edition: 'keluarga',
    level: 2,
    category: 'Hubungan Ayah/Ibu',
    question: 'Dalam hal apa kamu merasa sifat atau karaktermu paling mirip dengan ayah, dan dalam hal apa mirip dengan ibu?'
  },
  {
    id: 'kel-07',
    edition: 'keluarga',
    level: 2,
    category: 'Komunikasi Keluarga',
    question: 'Seberapa terbuka gaya komunikasi dalam keluargamu saat membahas topik emosional atau masalah hidup?'
  },
  {
    id: 'kel-08',
    edition: 'keluarga',
    level: 2,
    category: 'Dinamika Saudara',
    question: 'Jika kamu memiliki saudara, bagaimana dinamika hubungan kalian tumbuh dari masa kecil hingga dewasa saat ini?'
  },
  {
    id: 'kel-09',
    edition: 'keluarga',
    level: 2,
    category: 'Pengorbanan',
    question: 'Pengorbanan orang tua mana yang baru benar-benar kamu pahami nilainya setelah kamu tumbuh dewasa?'
  },
  {
    id: 'kel-10',
    edition: 'keluarga',
    level: 2,
    category: 'Pelajaran Rumah',
    question: 'Nilai морал atau prinsip kejujuran apa yang paling ditekankan dalam pola asuh keluargamu?'
  },
  {
    id: 'kel-11',
    edition: 'keluarga',
    level: 2,
    category: 'Kenangan Masa Sekolah',
    question: 'Bagaimana peran dan dukungan orang tua saat kamu mengalami fase sulit di masa sekolah atau kuliah?'
  },
  {
    id: 'kel-12',
    edition: 'keluarga',
    level: 2,
    category: 'Ekspektasi Keluarga',
    question: 'Pernahkah kamu merasa terbebani oleh ekspektasi atau impian orang tua yang dititipkan padamu?'
  },
  {
    id: 'kel-13',
    edition: 'keluarga',
    level: 2,
    category: 'Kebiasaan Unik',
    question: 'Kebiasaan unik keluarga yang baru kamu sadari "aneh" atau unik setelah kamu berinteraksi dengan keluarga orang lain?'
  },
  {
    id: 'kel-14',
    edition: 'keluarga',
    level: 2,
    category: 'Rasa Sayang',
    question: 'Bagaimana cara anggota keluargamu mengekspresikan kasih sayang? Apakah lewat kata-kata, tindakan, atau makanan?'
  },
  {
    id: 'kel-15',
    edition: 'keluarga',
    level: 2,
    category: 'Perubahan Rumah',
    question: 'Perubahan terbesar apa di rumah masa kecilmu yang paling membuatmu merasa waktu berlalu sangat cepat?'
  },
  {
    id: 'kel-16',
    edition: 'keluarga',
    level: 3,
    category: 'Luka Pengasuhan',
    question: 'Pola asuh atau kejadian di masa kecil mana yang membuatmu bertekad untuk tidak mengulangnya di masa depan?'
  },
  {
    id: 'kel-17',
    edition: 'keluarga',
    level: 3,
    category: 'Ungkapan Rindu',
    question: 'Jika ada satu hal yang ingin kamu sampaikan kepada orang tua atau anggota keluarga yang mungkin jarang terucap, apa itu?'
  },
  {
    id: 'kel-18',
    edition: 'keluarga',
    level: 3,
    category: 'Penerimaan',
    question: 'Seberapa jauh kamu sudah berdamai dengan kekurangan atau dinamika ketidaksempurnaan dalam keluargamu?'
  },
  {
    id: 'kel-19',
    edition: 'keluarga',
    level: 3,
    category: 'Penantian',
    question: 'Apa harapan terbesarmu untuk kesehatan, kedamaian, dan kebahagiaan orang tuamu di sisa usianya?'
  },
  {
    id: 'kel-20',
    edition: 'keluarga',
    level: 3,
    category: 'Warisan Nilai',
    question: 'Warisan kebaikan atau reputasi keluarga apa yang paling ingin kamu jaga dengan penuh rasa hormat?'
  },
  {
    id: 'kel-21',
    edition: 'keluarga',
    level: 1,
    category: 'Foto Kenangan',
    question: 'Foto album masa kecil mana yang menurutmu paling lucu atau menyimpan cerita paling menarik?'
  },
  {
    id: 'kel-22',
    edition: 'keluarga',
    level: 1,
    category: 'Panggilan Sayang',
    question: 'Nama panggilan masa kecil dari keluarga yang sampai sekarang masih kadang dipakai?'
  },
  {
    id: 'kel-23',
    edition: 'keluarga',
    level: 1,
    category: 'Karakter Lucu',
    question: 'Siapa anggota keluarga besar yang paling humoris dan selalu mencairkan suasana saat kumpul?'
  },
  {
    id: 'kel-24',
    edition: 'keluarga',
    level: 1,
    category: 'Perjalanan',
    question: 'Liburan keluarga masa kecil mana yang paling berkesan meskipun sederhana?'
  },
  {
    id: 'kel-25',
    edition: 'keluarga',
    level: 1,
    category: 'Sudut Rumah',
    question: 'Sudut atau ruangan favoritmu di rumah masa kecil dan aktivitas apa yang paling sering dilakukan di sana?'
  },
  {
    id: 'kel-26',
    edition: 'keluarga',
    level: 2,
    category: 'Pendengar',
    question: 'Kepada siapa di antara anggota keluarga kamu paling sering bercerita saat menghadapi masalah sekolah atau asmara dulu?'
  },
  {
    id: 'kel-27',
    edition: 'keluarga',
    level: 2,
    category: 'Perjuangan',
    question: 'Cerita perjuangan hidup orang tua atau kakek-nenekmu mana yang selalu membuatmu kagum?'
  },
  {
    id: 'kel-28',
    edition: 'keluarga',
    level: 2,
    category: 'Kedewasaan',
    question: 'Di momen usia berapa kamu mulai memandang orang tuamu bukan lagi sebagai sosok tanpa cela, melainkan manusia biasa?'
  },
  {
    id: 'kel-29',
    edition: 'keluarga',
    level: 2,
    category: 'Kerukunan',
    question: 'Bagaimana caramu menjaga kerukunan dengan saudara di saat ada perbedaan pendapat mengenai urusan keluarga?'
  },
  {
    id: 'kel-30',
    edition: 'keluarga',
    level: 2,
    category: 'Apresiasi',
    question: 'Hal apa yang baru kamu sadari sangat berharga dari keluargamu setelah kamu mulai hidup mandiri?'
  },
  {
    id: 'kel-31',
    edition: 'keluarga',
    level: 3,
    category: 'Pengampunan',
    question: 'Apakah ada luka dari keputusan orang tua di masa lalu yang membutuhkan proses waktu panjang untuk dimaafkan?'
  },
  {
    id: 'kel-32',
    edition: 'keluarga',
    level: 3,
    category: 'Doa Ibu/Ayah',
    question: 'Doa atau ucapan orang tua mana yang kamu rasakan menjadi tameng atau pembuka jalan keberhasilanmu hari ini?'
  },
  {
    id: 'kel-33',
    edition: 'keluarga',
    level: 3,
    category: 'Peran Anak',
    question: 'Sebagai anak, apakah kamu merasa sudah cukup memberikan perhatian dan waktu terbaikmu untuk mereka?'
  },
  {
    id: 'kel-34',
    edition: 'keluarga',
    level: 3,
    category: 'Kehilangan',
    question: 'Sosok dalam keluarga yang sudah mendahului kita yang paling ingin kamu peluk dan ajak bicara jika ada kesempatan?'
  },
  {
    id: 'kel-35',
    edition: 'keluarga',
    level: 3,
    category: 'Impian Keluarga',
    question: 'Impian sederhana apa milik orang tuamu yang sangat ingin kamu wujudkan pakai hasil keringatmu sendiri?'
  },
  {
    id: 'kel-36',
    edition: 'keluarga',
    level: 1,
    category: 'Lagu Rumah',
    question: 'Musik atau lagu yang sering diputar di rumah saat kamu masih kecil?'
  },
  {
    id: 'kel-37',
    edition: 'keluarga',
    level: 1,
    category: 'Kebiasaan Malam',
    question: 'Suasana malam hari di rumah masa kecil yang paling kamu rindukan saat ini?'
  },
  {
    id: 'kel-38',
    edition: 'keluarga',
    level: 2,
    category: 'Nilai Kerja Keras',
    question: 'Bagaimana orang tuamu mengajarkan nilai arti uang dan kerja keras sejak kamu kecil?'
  },
  {
    id: 'kel-39',
    edition: 'keluarga',
    level: 2,
    category: 'Dukungan Moral',
    question: 'Momen kapan orang tuamu menunjukkan dukungan paling mengharukan saat kamu sedang gagal?'
  },
  {
    id: 'kel-40',
    edition: 'keluarga',
    level: 2,
    category: 'Kehangatan',
    question: 'Sikap kecil anggota keluarga mana yang selalu berhasil membuatmu merasa pulang ke rumah yang aman?'
  },
  {
    id: 'kel-41',
    edition: 'keluarga',
    level: 3,
    category: 'Pengabdian',
    question: 'Bentuk kebahagiaan apa yang paling ingin kamu persembahkan untuk orang tuamu saat ini?'
  },
  {
    id: 'kel-42',
    edition: 'keluarga',
    level: 3,
    category: 'Pelajaran Cinta',
    question: 'Apa pelajaran tentang cinta dan komitmen yang kamu petik dari perjalanan hidup orang tuamu?'
  },
  {
    id: 'kel-43',
    edition: 'keluarga',
    level: 1,
    category: 'Kenangan Manis',
    question: 'Oleh-oleh atau hadiah sederhana apa dari orang tua saat pulang kerja yang dulu paling kamu nantikan?'
  },
  {
    id: 'kel-44',
    edition: 'keluarga',
    level: 2,
    category: 'Rasa Syukur',
    question: 'Apa satu kelebihan utama dari keluargamu yang membuatmu merasa sangat beruntung dilahirkan di sana?'
  },
  {
    id: 'kel-45',
    edition: 'keluarga',
    level: 3,
    category: 'Pesan Keabadian',
    question: 'Pesan kasih apa yang ingin kamu tinggalkan untuk generasi keluargamu di masa mendatang?'
  },
  {
    id: 'kel-46',
    edition: 'keluarga',
    level: 1,
    category: 'Makan Bersama',
    question: 'Kebiasaan makan bersama di meja makan rumah mana yang paling kamu rindukan?'
  },
  {
    id: 'kel-47',
    edition: 'keluarga',
    level: 2,
    category: 'Pelajaran Sederhana',
    question: 'Pelajaran sederhana dari rumah masa kecilmu mana yang paling membentuk prinsip hidupmu hingga kini?'
  },
  {
    id: 'kel-48',
    edition: 'keluarga',
    level: 2,
    category: 'Suasana Hangat',
    question: 'Momen kehangatan keluarga seperti apa yang paling ingin kamu ciptakan kembali di masa mendatang?'
  },
  {
    id: 'kel-49',
    edition: 'keluarga',
    level: 3,
    category: 'Terima Kasih Tulus',
    question: 'Ucapan terima kasih tulus seperti apa yang ingin kamu sampaikan kepada orang tua atau keluargamu?'
  },
  {
    id: 'kel-50',
    edition: 'keluarga',
    level: 3,
    category: 'Prinsip Kehormatan',
    question: 'Prinsip utama keluarga mana yang paling kamu banggakan dan ingin kamu jaga selamanya?'
  }
];
