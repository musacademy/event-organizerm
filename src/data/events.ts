export interface TicketTier {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  quotaStatus: 'Tersedia' | 'Slot Terbatas' | 'Habis';
  benefits: string[];
}

export interface GuestStar {
  name: string;
  role: string;
  image?: string;
}

export interface RundownItem {
  time: string;
  activity: string;
  note?: string;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  category: 'Konser Musik' | 'Running & Sport' | 'Festival & Karnaval' | 'Expo & Pameran';
  categorySlug: 'konser' | 'running' | 'festival' | 'expo';
  city: 'malang' | 'kediri' | 'batu';
  cityName: string;
  location: string;
  venueName: string;
  date: string;
  time: string;
  priceStart: number;
  priceDisplay: string;
  status: 'Pendaftaran Dibuka' | 'Early Bird Aktif' | 'Slot Terbatas' | 'Segera Hadir';
  quota: string;
  featuredImage: string;
  gallery: string[];
  shortDesc: string;
  description: string;
  highlights: string[];
  facilities: string[];
  terms: string[];
  ticketTiers: TicketTier[];
  guestStars?: GuestStar[];
  rundown: RundownItem[];
  organizer: string;
  contactPerson: string;
}

export interface EventFaq {
  question: string;
  answer: string;
}

export const eventFaqs: EventFaq[] = [
  {
    question: 'Bagaimana prosedur pendaftaran event di Halo Malang?',
    answer: 'Pilih event yang diinginkan, klik "Daftar Event Sekarang", lengkapi formulir peserta (nama, kontak, pilihan kategori tiket), lalu Anda akan menerima ringkasan pendaftaran dan instruksi konfirmasi instan melalui WhatsApp Customer Support Halo Malang.'
  },
  {
    question: 'Kapan e-ticket atau bukti kepesertaan dikirimkan?',
    answer: 'Setelah konfirmasi pendaftaran dan verifikasi pembayaran/data, e-ticket resmi dengan kode QR unik akan dikirimkan langsung ke nomor WhatsApp dan alamat email yang Anda daftarkan dalam waktu maksimal 1x24 jam.'
  },
  {
    question: 'Apakah bisa mendaftarkan beberapa tiket/peserta sekaligus dalam satu pesanan?',
    answer: 'Ya, Anda dapat memilih jumlah tiket hingga 10 tiket per transaksi. Untuk pendaftaran komunitas rombongan (di atas 10 orang), Anda dapat langsung menghubungi Helpdesk kami untuk mendapatkan penawaran grup khusus.'
  },
  {
    question: 'Apakah tiket yang sudah dibeli dapat dipindahtangankan atau di-refund?',
    answer: 'Tiket dapat dialihkan kepemilikannya paling lambat 7 hari sebelum hari H dengan konfirmasi ke admin tanpa biaya tambahan. Kebijakan pengembalian dana (refund) mengikuti ketentuan masing-masing promotor dan penyelenggara.'
  }
];

export const upcomingEventsData: EventItem[] = [
  {
    id: 'evt-01',
    title: 'Malang Jazz & Indie Sunset Fest 2026',
    slug: 'malang-jazz-indie-sunset-fest',
    category: 'Konser Musik',
    categorySlug: 'konser',
    city: 'malang',
    cityName: 'Kota Malang',
    location: 'Taman Krida Budaya Jawa Timur, Jl. Soekarno Hatta No. 7, Kota Malang',
    venueName: 'Amfiteater Terbuka Taman Krida Budaya',
    date: '18 April 2026',
    time: '15:00 - 23:00 WIB',
    priceStart: 125000,
    priceDisplay: 'Mulai Rp 125.000',
    status: 'Early Bird Aktif',
    quota: '2.500 Tiket',
    featuredImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: 'Festival musik jazz dan indie spektakuler bernuansa senja di Malang dengan 10+ lineup artis nasional, creative food market, dan audio visual immersive.',
    description: 'Malang Jazz & Indie Sunset Fest 2026 adalah perayaan harmoni musik jazz modern dan aliran indie pop favorit anak muda. Digelar di panggung terbuka Taman Krida Budaya dengan lanskap pepohonan rindang dan tata cahaya senja magis. Diinisiasi oleh Halo Malang untuk memanjakan telinga para penikmat musik berkualitas se-Jawa Timur.',
    highlights: [
      'Lineup 10+ Musisi Nasional & Indie Pop Malang Ternama',
      'Sound System Concert-Grade Clair Brothers 35.000 Watt',
      'Pasar Kreatif, Food Truck Zone & Coffee Corner Malang',
      'Zona Photobooth Interaktif 360 Video Booth',
      'Akses Mudah di Kawasan Pusat Kota & Suhat Malang'
    ],
    facilities: [
      'Gelang RFID Access Pass & Peta Venue',
      'Free Merchandise Official Stiker Pack',
      'Akses Food & Beverage Area',
      'Area Sholat Bersih & Toilet Nyaman',
      'Pos Medis Siaga & Ambulans Lengkap'
    ],
    terms: [
      'Pengunjung wajib menunjukkan e-ticket ber-QR Code untuk ditukar gelang di ticket booth.',
      'Dilarang membawa senjata tajam, obat-obatan terlarang, kembang api, atau botol kaca ke dalam area.',
      'Anak usia di bawah 6 tahun tidak disarankan memasuki area festival tanpa pendampingan intensif.',
      'Tiket yang sudah dibeli bersifat non-refundable kecuali terjadi pembatalan sepihak oleh penyelenggara.'
    ],
    ticketTiers: [
      {
        id: 't-early-01',
        name: 'Presale Early Bird (Festival)',
        price: 125000,
        priceDisplay: 'Rp 125.000',
        quotaStatus: 'Slot Terbatas',
        benefits: ['Akses Panggung Festival', 'Gelang Khusus Presale', 'Voucher Belanja F&B Rp 15.000']
      },
      {
        id: 't-reg-01',
        name: 'Regular General Admission (GA)',
        price: 185000,
        priceDisplay: 'Rp 185.000',
        quotaStatus: 'Tersedia',
        benefits: ['Akses Panggung Festival', 'Gelang Masuk Reguler', 'Akses Semua Area Tenant Kreatif']
      },
      {
        id: 't-vip-01',
        name: 'VIP Sunset Lounge + Merchandise',
        price: 350000,
        priceDisplay: 'Rp 350.000',
        quotaStatus: 'Tersedia',
        benefits: [
          'Tribun Khusus VIP Elevated View',
          'Fast Track Antrean Khusus',
          'Official T-Shirt & Lanyard Eksklusif',
          'Free Flow Mineral Water & Snack Box',
          'Meet & Greet Sesi Khusus dengan Artis'
        ]
      }
    ],
    guestStars: [
      { name: 'Fourtwnty', role: 'Main Headliner (Indie Folk)' },
      { name: 'Coldiac', role: 'Headliner (Indie Pop Malang)' },
      { name: 'Sal Priadi', role: 'Special Guest Appearance' },
      { name: 'Teras Kopi Project', role: 'Local Jazz Ensemble' }
    ],
    rundown: [
      { time: '14:30 WIB', activity: 'Open Gate & Penukaran Tiket Fisik' },
      { time: '15:30 WIB', activity: 'Opening Act: Local Indie Malang Collective' },
      { time: '17:15 WIB', activity: 'Golden Hour Sunset Session bersama Teras Kopi Project' },
      { time: '18:15 WIB', activity: 'Break Maghrib & Networking Food Market' },
      { time: '19:00 WIB', activity: 'Special Performance: Coldiac' },
      { time: '20:30 WIB', activity: 'Main Headliner Performance: Fourtwnty' },
      { time: '22:15 WIB', activity: 'All Stars Jam Session & Closing Fireworks' }
    ],
    organizer: 'Halo Malang Kreasi Promotor',
    contactPerson: '+62 889-8964-3555 (Tiket & Sponsorship)'
  },
  {
    id: 'evt-02',
    title: 'Malang Heritage 10K & Fun Run 2026',
    slug: 'malang-heritage-10k-fun-run',
    category: 'Running & Sport',
    categorySlug: 'running',
    city: 'malang',
    cityName: 'Kota Malang',
    location: 'Start & Finish: Depan Balai Kota Malang & Kawasan Cagar Budaya Ijen Boulevard',
    venueName: 'Taman Tugu & Koridor Heritage Ijen Malang',
    date: '10 Mei 2026',
    time: '05:30 - 10:00 WIB',
    priceStart: 175000,
    priceDisplay: 'Mulai Rp 175.000',
    status: 'Pendaftaran Dibuka',
    quota: '1.500 Pelari',
    featuredImage: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: 'Lari pagi melintasi rute bersejarah terindah di Kota Malang dengan udara sejuk, jersey dry-fit premium, timing chip resmi, dan medali logam cor mewah.',
    description: 'Malang Heritage 10K & Fun Run 2026 mengajak pegiat lari, komunitas, keluarga, dan pelari profesional menikmati pesona arsitektur cagar budaya kolonial di Kota Malang. Menempuh jalur legendaris Kayutangan Heritage, Jl. Besar Ijen, Semeru, hingga kembali ke Balai Kota Malang dengan sterilisasi jalur dan pengawalan kepolisian.',
    highlights: [
      'Rute Jalur Hijau Ijen & Kayutangan Heritage Tertutup Bebas Polusi',
      'Jersey Dry-Fit High Ventilation Ergonomis',
      'Medali Logam Cor Finisher Berdesain Khusus Tugu Malang',
      'Sistem Catat Waktu RFID Timing Chip Resmi untuk Kategori 10K',
      'Water Station & Buah Segar Setiap 2.5 KM',
      'Pacer Profesional Terakreditasi PASI Jawa Timur'
    ],
    facilities: [
      'Official Event Running Jersey',
      'Medali Finisher Logam Cor (Bagi yang menyelesaikan lomba)',
      'Nomor Dada (BIB) + Timing Chip RFID (10K)',
      'Refreshment Lengkap: Isotonik, Air Mineral, Pisang & Roti',
      'Tenda Penitipan Barang Aman (Baggage Drop)',
      'Asuransi Perlindungan Kecelakaan Peserta'
    ],
    terms: [
      'Peserta dinyatakan sehat jasmani dan rohani untuk mengikuti jarak yang dipilih.',
      'BIB number wajib dipasang di dada bagian depan dan tidak dapat dialihkan tanpa konfirmasi.',
      'Cut-Off Time (COT): 5K = 75 Menit, 10K = 120 Menit.',
      'Pengambilan Race Pack (RPC) bertempat di Malang pada 8-9 Mei 2026.'
    ],
    ticketTiers: [
      {
        id: 't-run-5k',
        name: '5K Fun Run (Individu & Keluarga)',
        price: 175000,
        priceDisplay: 'Rp 175.000',
        quotaStatus: 'Tersedia',
        benefits: ['BIB Fun Run', 'Official Running Jersey', 'Medali Finisher', 'Goodie Bag Sponsor', 'Refreshment Finish']
      },
      {
        id: 't-run-10k',
        name: '10K Race Competition (Timing Chip)',
        price: 250000,
        priceDisplay: 'Rp 250.000',
        quotaStatus: 'Slot Terbatas',
        benefits: [
          'BIB + RFID Timing Chip Akurat',
          'Official Running Jersey Premium',
          'Medali Finisher Logam Ukir 10K',
          'E-Sertifikat Catatan Waktu Resmi',
          'Kesempatan Podium Juara Hadiah Puluhan Juta'
        ]
      },
      {
        id: 't-run-master',
        name: '10K Master (Usia 45+ Tahun)',
        price: 250000,
        priceDisplay: 'Rp 250.000',
        quotaStatus: 'Tersedia',
        benefits: [
          'BIB + RFID Timing Chip Kategori Master',
          'Official Running Jersey Premium',
          'Medali Finisher Logam Ukir 10K',
          'Podium Khusus Kategori Master',
          'Medical Checkup Gratis Sebelum Start'
        ]
      }
    ],
    guestStars: [
      { name: 'Triyaningsih', role: 'Duta Atlet Lari Nasional' },
      { name: 'Malang Runners Community', role: 'Official Route Pacer' }
    ],
    rundown: [
      { time: '05:00 WIB', activity: 'Registrasi Ulang & Drop Penitipan Barang' },
      { time: '05:25 WIB', activity: 'Sesi Dynamic Warm-up & Doa Bersama' },
      { time: '05:45 WIB', activity: 'Flag-off Start Kategori 10K Race' },
      { time: '06:05 WIB', activity: 'Flag-off Start Kategori 5K Fun Run' },
      { time: '07:30 WIB', activity: 'Cooling Down Session & Live Entertainment' },
      { time: '08:30 WIB', activity: 'Podium Awarding Juara 10K & Doorprize Utama' },
      { time: '09:30 WIB', activity: 'Penutupan Acara & Expo Kuliner Pagi' }
    ],
    organizer: 'Halo Malang Sport Management x PASI',
    contactPerson: '+62 889-8964-3555 (Race Central)'
  },
  {
    id: 'evt-03',
    title: 'Kediri Soundwave Live Music Festival 2026',
    slug: 'kediri-soundwave-live-music-festival',
    category: 'Konser Musik',
    categorySlug: 'konser',
    city: 'kediri',
    cityName: 'Kota Kediri',
    location: 'Area Parkir Megah Monumen Simpang Lima Gumul (SLG), Kediri',
    venueName: 'Kawasan Terbuka Simpang Lima Gumul',
    date: '30 Mei 2026',
    time: '16:00 - 23:30 WIB',
    priceStart: 95000,
    priceDisplay: 'Mulai Rp 95.000',
    status: 'Early Bird Aktif',
    quota: '4.000 Penonton',
    featuredImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: 'Panggung musik akbar berlatar belakang monumen termegah di Kediri, menghadirkan musisi pop rock teratas Indonesia, tata cahaya laser, dan pesta kembang api.',
    description: 'Kediri Soundwave Live Festival 2026 merupakan panggung musik tahunan terbesar di Kediri Raya. Berlokasi di kawasan ikonik Simpang Lima Gumul yang luas dan megah, festival ini memadukan energi musik anak muda dengan sajian visual panggung setinggi 16 meter, sound system line-array berdaya tinggi, serta puluhan stan kuliner khas Kediri.',
    highlights: [
      'Panggung Megah Raksasa Menghadap Monumen Megah SLG Kediri',
      'Lighting Show Spektakuler dengan Laser Beam 40 Watt & LED Wall P2.9',
      'Deretan Guest Star Pop & Rock Terkemuka Tanah Air',
      'Zona Kuliner UMKM Khas Kediri & Modern Street Food',
      'Area Parkir Sangat Luas & Pengamanan Terpadu'
    ],
    facilities: [
      'Wristband Festival Hologram',
      'Akses F&B Bazaar Corner',
      'Mushola & Fasilitas Air Wudhu Portabel',
      'Toilet Portabel Terpisah Bersih',
      'Tim Medis Siaga & First Aid Lounge'
    ],
    terms: [
      'Tiket berlaku untuk 1 orang per hari.',
      'Wajib membawa identitas diri asli (KTP/Pelajar/SIM) saat penukaran tiket.',
      'Dilarang membawa rokok elektrik atau korek ke area barisan depan panggung.',
      'Penyelenggara berhak menolak masuk pengunjung yang terindikasi membahayakan ketertiban.'
    ],
    ticketTiers: [
      {
        id: 't-kediri-eb',
        name: 'Presale Pelajar & Mahasiswa',
        price: 95000,
        priceDisplay: 'Rp 95.000',
        quotaStatus: 'Slot Terbatas',
        benefits: ['Akses General Area Festival', 'Gelang Presale', 'Wajib Menunjukkan Kartu Pelajar Aktif']
      },
      {
        id: 't-kediri-reg',
        name: 'General Admission (Reguler)',
        price: 140000,
        priceDisplay: 'Rp 140.000',
        quotaStatus: 'Tersedia',
        benefits: ['Akses Penuh Area Festival', 'Gelang Masuk Reguler', 'Akses Stan Kuliner & Tenant']
      },
      {
        id: 't-kediri-vip',
        name: 'VIP Front Stage + Exclusive Pass',
        price: 275000,
        priceDisplay: 'Rp 275.000',
        quotaStatus: 'Tersedia',
        benefits: [
          'Barisan Depan Panggung (Front Row Experience)',
          'Antrean Gate Masuk VIP Khusus',
          'Exclusive Merchandise Pack Soundwave',
          'Voucher Minuman & Snack Gratis'
        ]
      }
    ],
    guestStars: [
      { name: 'Sheila on 7 Experience', role: 'Tribute Headliner' },
      { name: 'Juicy Luicy', role: 'Pop Romantic Guest' },
      { name: 'The Changcuters', role: 'High Energy Rock Performer' }
    ],
    rundown: [
      { time: '15:00 WIB', activity: 'Buka Gate & Penukaran Wristband' },
      { time: '16:30 WIB', activity: 'Aksi Band Indie Jawa Timur' },
      { time: '17:45 WIB', activity: 'Istirahat Sholat Maghrib & Bazar Kuliner' },
      { time: '18:45 WIB', activity: 'Sesi Romantis: Juicy Luicy' },
      { time: '20:30 WIB', activity: 'Aksi Enerjik: The Changcuters' },
      { time: '22:00 WIB', activity: 'Grand Finale & Laser Light Odyssey' }
    ],
    organizer: 'Halo Malang Kediri Chapter Promotor',
    contactPerson: '+62 889-8964-3555 (Ticketing Kediri)'
  },
  {
    id: 'evt-04',
    title: 'Batu Night Trail Run & Lantern Walk 2026',
    slug: 'batu-night-trail-run-lantern-walk',
    category: 'Running & Sport',
    categorySlug: 'running',
    city: 'batu',
    cityName: 'Kota Wisata Batu',
    location: 'Kawasan Lereng Gunung Panderman & Agrowisata Apel, Kota Batu',
    venueName: 'Pusat Agrowisata & Camping Ground Kusuma Batu',
    date: '20 Juni 2026',
    time: '18:30 - 22:30 WIB',
    priceStart: 190000,
    priceDisplay: 'Mulai Rp 190.000',
    status: 'Pendaftaran Dibuka',
    quota: '800 Peserta',
    featuredImage: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: 'Pengalaman berlari di malam hari berhawa sejuk pegunungan Kota Batu yang dipandu ribuan lampion artistik, glow-in-the-dark markers, dan pesta api unggun.',
    description: 'Batu Night Trail Run & Lantern Walk memadukan tantangan trail run ringan di rute pegunungan asri dengan suasana malam hari Kota Batu yang magis. Peserta akan dibekali headlamp dan glow sticks, melintasi kebun apel, perbukitan pinus, dan disambut pesta api unggun serta jagung bakar hangat di garis finish.',
    highlights: [
      'Sensasi Lari Trail Malam Hari dengan Panorama Lampu Kota Batu (Citylights)',
      'Jalur Dipasangi Ribuan Lampion Artistik & Penanda Reflektif Aman',
      'Paket Headlamp + Glow Sticks Keren Sudah Termasuk',
      'Pesta Api Unggun & BBQ Barbeque Hangat Pasca Finish',
      'Kategori Santai Lantern Walk Cocok untuk Pasangan & Keluarga'
    ],
    facilities: [
      'Jersey Night Trail Edisi Spesial Glow in the Dark',
      'Headlamp LED Terang & Baterai',
      'Medali Kayu Ukir & Logam Finisher',
      'Wedang Jahe Hangat, Jagung Manis Bakar & Makanan Pasca Lari',
      'Pengawalan Tim SAR & Marshal Setiap 500 Meter'
    ],
    terms: [
      'Peserta wajib mengenakan headlamp menyala selama di lintasan trail.',
      'Dilarang membuang sampah sembarangan di area cagar alam (prinsip Leave No Trace).',
      'Wajib membawa botol air minum pribadi (water bottle hydration vest/handheld).'
    ],
    ticketTiers: [
      {
        id: 't-batu-walk',
        name: '5K Family & Couple Lantern Walk',
        price: 190000,
        priceDisplay: 'Rp 190.000',
        quotaStatus: 'Tersedia',
        benefits: ['Lampion Tangan LED', 'Jersey Event', 'Medali Finisher Unik', 'Kupon Jagung Bakar & Minuman Jahe']
      },
      {
        id: 't-batu-trail',
        name: '12K Night Mountain Trail Run',
        price: 270000,
        priceDisplay: 'Rp 270.000',
        quotaStatus: 'Slot Terbatas',
        benefits: [
          'BIB + RFID Chip',
          'Headlamp LED Khusus Trail',
          'Jersey Dry-fit Reflective',
          'Medali Finisher Logam Ukir',
          'Asuransi Outdoor & Safety Marshall'
        ]
      }
    ],
    rundown: [
      { time: '17:30 WIB', activity: 'Kedatangan Peserta & Pengecekan Perlengkapan Headlamp' },
      { time: '18:15 WIB', activity: 'Penyalaan Serentak Lampion & Briefing Jalur Trail' },
      { time: '18:30 WIB', activity: 'Start Kategori 12K Mountain Trail' },
      { time: '18:45 WIB', activity: 'Start Kategori 5K Family Lantern Walk' },
      { time: '20:30 WIB', activity: 'Penyambutan di Finish Line dengan Api Unggun & Musik Akustik' },
      { time: '22:00 WIB', activity: 'Penyerahan Medali & Penutupan' }
    ],
    organizer: 'Halo Malang Adventure Division x Komunitas Trail Batu',
    contactPerson: '+62 889-8964-3555 (Race Director Batu)'
  },
  {
    id: 'evt-05',
    title: 'Kediri Coffee & Foodies Carnival 2026',
    slug: 'kediri-coffee-foodies-carnival',
    category: 'Festival & Karnaval',
    categorySlug: 'festival',
    city: 'kediri',
    cityName: 'Kota Kediri',
    location: 'Gedung Olahraga (GOR) Jayabaya, Jl. Mojoroto, Kota Kediri',
    venueName: 'Kawasan Terbuka & Hall GOR Jayabaya',
    date: '4 - 5 Juli 2026',
    time: '10:00 - 22:00 WIB',
    priceStart: 0,
    priceDisplay: 'Gratis (Registrasi Wajib)',
    status: 'Pendaftaran Dibuka',
    quota: '5.000 Pengunjung',
    featuredImage: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: 'Pesta akbar pecinta kopi dan kuliner Jawa Timur! 60+ booth roastery ternama, kompetisi latte art, demo masak chef nasional, dan konser akustik.',
    description: 'Kediri Coffee & Foodies Carnival 2026 mempertemukan para pegiat kopi lereng Gunung Wilis dan Kelud dengan barista dan roastery terkemuka nusantara. Acara berlangsung selama dua hari penuh, diisi kompetisi seduh kopi bergengsi, pameran dessert kekinian, kelas kreasi kopi gratis, dan panggung musik jazz akustik.',
    highlights: [
      'Eksibisi 60+ Kedai Kopi & UMKM Kuliner Pilihan se-Jawa Timur',
      'Kompetisi Kediri Latte Art Championship Berhadiah Total Rp 30 Juta',
      'Workshop Seduh Manual & Cupping Kopi Bersama Q-Grader Nasional',
      'Free Coffee Tasting di Jam-Jam Tertentu',
      'Panggung Live Cooking Demo & Hiburan Musik Akustik Santai'
    ],
    facilities: [
      'E-Badge Visitor Pass Digital',
      'Katalog Pameran & Kupon Diskon Tenant',
      'Akses Free Wi-Fi Area Pameran',
      'Area Meja Santap Duduk Bersih & Luas'
    ],
    terms: [
      'Pengunjung wajib mendaftar secara online untuk mendapatkan e-pass barcode.',
      'Satu registrasi berlaku untuk 2 hari penyelenggaraan carnival.',
      'Tersedia transaksi pembayaran digital (QRIS) di seluruh stan pameran.'
    ],
    ticketTiers: [
      {
        id: 't-coffee-free',
        name: 'Free General Visitor Pass',
        price: 0,
        priceDisplay: 'Gratis (Rp 0)',
        quotaStatus: 'Tersedia',
        benefits: ['Akses Masuk Selama 2 Hari', 'E-Badge Masuk Resmi', 'Menyaksikan Seluruh Kompetisi & Panggung']
      },
      {
        id: 't-coffee-vip',
        name: 'Coffee Enthusiast Pack + Cup Keramik Eksklusif',
        price: 65000,
        priceDisplay: 'Rp 65.000',
        quotaStatus: 'Tersedia',
        benefits: [
          'Official Handcrafted Ceramic Tasting Cup',
          'Tote Bag Kanvas Karnaval Eksklusif',
          'Voucher 5 Kupon Kopi Gratis di Booth Pilihan',
          'Akses Kursi Depan Panggung Latte Art'
        ]
      }
    ],
    guestStars: [
      { name: 'Mikael Jasin', role: 'World Barista Champion (Guest Speaker)' },
      { name: 'Nadhif Basalamah', role: 'Acoustic Guest Star' }
    ],
    rundown: [
      { time: '10:00 WIB', activity: 'Open Gate Exhibition & Bazaar Kuliner' },
      { time: '11:00 WIB', activity: 'Sesi Cupping Kopi Eksperimental Lereng Wilis' },
      { time: '13:30 WIB', activity: 'Babak Penyisihan Kediri Latte Art Battle' },
      { time: '16:00 WIB', activity: 'Workshop "Membangun Bisnis Coffee Shop 2026"' },
      { time: '19:00 WIB', activity: 'Babak Final & Pengumuman Juara Kompetisi' },
      { time: '20:15 WIB', activity: 'Special Acoustic Performance bersama Nadhif Basalamah' }
    ],
    organizer: 'Halo Malang Event Organizer x Komunitas Kopi Kediri',
    contactPerson: '+62 889-8964-3555 (Kemitraan Tenant & Booth)'
  },
  {
    id: 'evt-06',
    title: 'East Java Wedding & Bridal Showcase 2026',
    slug: 'east-java-wedding-bridal-showcase',
    category: 'Expo & Pameran',
    categorySlug: 'expo',
    city: 'malang',
    cityName: 'Kota Malang',
    location: 'Grand Ballroom Ijen Suites Resort & Convention, Kota Malang',
    venueName: 'Grand Ballroom Ijen Suites Malang',
    date: '25 - 26 Juli 2026',
    time: '10:00 - 21:00 WIB',
    priceStart: 0,
    priceDisplay: 'Gratis (Registrasi Pengunjung)',
    status: 'Segera Hadir',
    quota: '2.000 Calon Pengantin',
    featuredImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
      '/images/floral-decor.webp'
    ],
    shortDesc: 'Pameran pernikahan terlengkap di Malang dan Kediri. 70+ vendor dekorasi, MUA, gaun pengantin, dokumentasi foto/video, katering, dan cashback jutaan rupiah.',
    description: 'East Java Wedding & Bridal Showcase 2026 adalah destinasi impian bagi setiap pasangan calon pengantin yang merencanakan pernikahan sakral nan berkesan di Malang, Batu, dan Kediri. Mengusung konsep pameran modern dengan display dekorasi tematik nyata, fashion show busana pengantin tradisional dan internasional, serta sesi konsultasi rancangan anggaran gratis.',
    highlights: [
      '70+ Vendor Wedding Terkurasi (Venue, Dekor, MUA, Katering, Foto)',
      'Display Dekorasi Real-Size: Konsep Modern Glasshouse & Adat Jawa Modern',
      'Parade Fashion Show Gaun Pengantin & Kebaya Nusantara 2026',
      'Konsultasi Perencanaan Anggaran & Rundown Gratis bersama Tim Halo Malang',
      'Doorprize Utama: Paket Honeymoon Bali & Logam Mulia Emas Antam'
    ],
    facilities: [
      'Free E-Invitation untuk 2 Orang (Calon Pengantin)',
      'Buku Panduan Pernikahan "Wedding Planner Guidebook"',
      'Voucher Diskon Vendor Total Puluhan Juta Rupiah',
      'Free Welcome Drink & Food Tasting Katering Pilihan'
    ],
    terms: [
      'Registrasi berlaku untuk 1 pasangan (2 orang).',
      'Tiket gratis dengan melakukan pendaftaran nama calon mempelai di formulir resmi.',
      'Doorprize akan diundi pada hari penutupan pameran (26 Juli 2026).'
    ],
    ticketTiers: [
      {
        id: 't-wed-free',
        name: 'Free Couple Pass (Registrasi Online)',
        price: 0,
        priceDisplay: 'Gratis (Rp 0)',
        quotaStatus: 'Tersedia',
        benefits: [
          'Akses Masuk untuk 2 Orang selama 2 Hari',
          'Akses Menghadiri Seluruh Sesi Fashion Show',
          'Free Food Tasting Katering Pilihan',
          'Nomor Undian Doorprize Honeymoon'
        ]
      },
      {
        id: 't-wed-vip',
        name: 'VIP Bride-to-Be Goodie Bag & Vendor Cashback Book',
        price: 50000,
        priceDisplay: 'Rp 50.000',
        quotaStatus: 'Slot Terbatas',
        benefits: [
          'Buku Wedding Planner Binder Eksklusif Halo Malang',
          'Voucher Cashback Vendor Tunai Total Rp 5.000.000',
          'Front Row Seat Fashion Show Pengantin',
          'Sesi Konsultasi Private 1-on-1 dengan Senior Wedding Director'
        ]
      }
    ],
    guestStars: [
      { name: 'Anindita & Friends', role: 'Wedding Orchestral Band' },
      { name: 'Bennu Sorumba Official MUA Showcase', role: 'Masterclass Makeup' }
    ],
    rundown: [
      { time: '10:00 WIB', activity: 'Opening Showcase & Vendor Booth Walkthrough' },
      { time: '13:00 WIB', activity: 'Sesi Food Tasting Katering Terbaik Malang' },
      { time: '15:30 WIB', activity: 'Bridal Fashion Show: Modern & Traditional Kebaya' },
      { time: '17:00 WIB', activity: 'Talkshow: "Menyusun Anggaran Pernikahan Anti-Stress"' },
      { time: '19:30 WIB', activity: 'Wedding Symphony Acoustic Showcase' },
      { time: '20:30 WIB', activity: 'Pengundian Doorprize Harian & Special Promo Deals' }
    ],
    organizer: 'Halo Malang Wedding & Event Specialist',
    contactPerson: '+62 889-8964-3555 (Wedding Division)'
  }
];
