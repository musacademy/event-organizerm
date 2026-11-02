export interface PortfolioItem {
  title: string;
  slug: string;
  category: string;
  date: string;
  location: string;
  city: 'malang' | 'kediri' | 'batu' | 'lainnya';
  description: string;
  featuredImage: string;
  gallery: string[];
  servicesProvided: string[];
  client: string;
  attendees: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface PortfolioFaq {
  question: string;
  answer: string;
}

export const portfolioFaqs: PortfolioFaq[] = [
  {
    question: 'Apakah Aethel melayani acara privat dengan perjanjian kerahasiaan (NDA)?',
    answer: 'Ya, untuk acara korporat berskala internal, peluncuran produk rahasia, maupun pesta keluarga eksklusif, kami siap menandatangani Non-Disclosure Agreement (NDA) dan tidak mempublikasikan dokumentasi ke publik tanpa persetujuan tertulis.'
  },
  {
    question: 'Bisakah konsep visual dan tema acara dirancang secara custom?',
    answer: 'Tentu. Setiap proyek kami dirancang dari nol sesuai identitas brand atau preferensi personal klien. Kami memadukan moodboard visual 3D, pemilihan material dekorasi, serta tata cahaya untuk mewujudkan tema yang unik.'
  },
  {
    question: 'Apakah paket dokumentasi (foto, video cinematic, drone) sudah termasuk dalam layanan EO?',
    answer: 'Kami menyediakan opsi paket all-in-one yang mencakup fotografer profesional, video aftermovie cinematic beresolusi 4K, pilot drone tersertifikasi, hingga tim live streaming multi-kamera.'
  },
  {
    question: 'Berapa kapasitas tamu terbesar yang pernah ditangani tim Aethel?',
    answer: 'Kami telah berpengalaman mengelola acara berskala intimate (50-100 orang), corporate gathering 500+ peserta, hingga festival musik kampus dan konser publik dengan audiens lebih dari 3.000 pengunjung.'
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    title: 'East Java Corporate Innovation Forum 2024',
    slug: 'east-java-corporate-innovation-forum',
    category: 'Corporate Event',
    date: '18 September 2024',
    location: 'Grand Mercure Malang Mirama, Kota Malang',
    city: 'malang',
    description: 'Konferensi inovasi bisnis tahunan yang dihadiri lebih dari 350 delegasi korporasi se-Jawa Timur. Menghadirkan panggung minimalis modern beraksen sage green, sistem LED modular p3.9, dan tata suara speech-clarity.',
    featuredImage: '/images/corporate-malang.webp',
    gallery: ['/images/corporate-malang.webp', '/images/hero-stage.webp', '/images/stage-concert.webp'],
    servicesProvided: ['Konseptor & Stage Design', 'Penyediaan Sound & Multi-LED Screen', 'Manajemen Registrasi Digital', 'Live Broadcast Streaming', 'Tim Hospitality & LO VIP'],
    client: 'PT Nusadana Korpora',
    attendees: '380 Peserta',
    testimonial: {
      quote: 'Eksekusi panggung dan rundown sangat presisi. Seluruh VIP tamu korporasi memberikan feedback yang sangat positif.',
      author: 'Bambang Sudiro',
      role: 'VP Corporate Affairs PT Nusadana'
    }
  },
  {
    title: 'The Botanical Glasshouse Wedding: Arya & Nabila',
    slug: 'botanical-glasshouse-wedding-arya-nabila',
    category: 'Wedding Organizer',
    date: '12 Oktober 2024',
    location: 'Batu Retreat Garden, Kota Wisata Batu (Malang Raya)',
    city: 'malang',
    description: 'Pernikahan berkonsep intimate botanical di area perbukitan sejuk Batu. Menggabungkan instalasi bunga eucalyptus lokal Malang, pencahayaan fairy lights hangat, dan tata katering fine dining outdoor.',
    featuredImage: '/images/wedding-reception.webp',
    gallery: ['/images/wedding-reception.webp', '/images/floral-decor.webp', '/images/hero-stage.webp'],
    servicesProvided: ['Full Wedding Planner & Organizer', 'Dekorasi Florist Botanical', 'Vendor & Venue Management', 'Technical Crew & Timekeeper', 'Sound Akustik Outdoor'],
    client: 'Arya & dr. Nabila',
    attendees: '180 Undangan Intimate',
    testimonial: {
      quote: 'Hari paling bahagia kami ditangani dengan luar biasa tenang dan tertata oleh tim Aethel. Kami bisa menikmati setiap detik tanpa rasa khawatir.',
      author: 'Arya & dr. Nabila',
      role: 'Mempelai Pengantin'
    }
  },
  {
    title: 'Annual Leadership Retreat & Gathering 2024',
    slug: 'annual-leadership-retreat-gathering-batu',
    category: 'Gathering Perusahaan',
    date: '24 Agustus 2024',
    location: 'Kusuma Agrowisata Resort, Kota Batu (Malang Raya)',
    city: 'malang',
    description: 'Program gathering tahunan karyawan dan jajaran manajemen dengan kombinasi games kepemimpinan outdoor, gala dinner barbeque, dan live band acoustic.',
    featuredImage: '/images/gathering-batu.webp',
    gallery: ['/images/gathering-batu.webp', '/images/stage-concert.webp', '/images/floral-decor.webp'],
    servicesProvided: ['Penyusunan Games & Outbound Fasilitator', 'Stage Outdoor & Lighting', 'Akomodasi & Transportasi Shuttle', 'Dokumentasi Drone & Video Highlight'],
    client: 'PT Citra Sejahtera Logistik',
    attendees: '220 Karyawan',
    testimonial: {
      quote: 'Manajemen acara 300 peserta di alam terbuka berjalan sangat mulus. Tim Aethel sigap mengatasi perubahan cuaca di Batu dengan contingency plan yang siap.',
      author: 'Nilo Jiti Kusuma',
      role: 'HR & GA Manager PT Citra Sejahtera'
    }
  },
  {
    title: 'Kediri Business Excellence Awards & Gala Dinner',
    slug: 'kediri-business-excellence-awards',
    category: 'Corporate Event',
    date: '05 Juli 2024',
    location: 'Grand Surya Hotel, Kota Kediri',
    city: 'kediri',
    description: 'Malam penganugerahan bagi pelaku usaha industri dan UMKM terkemuka di Kediri. Acara bernuansa mewah dengan banquet table setting elegan, awarding show, dan orkestra kamar.',
    featuredImage: '/images/kediri-gala.webp',
    gallery: ['/images/kediri-gala.webp', '/images/hero-stage.webp', '/images/corporate-malang.webp'],
    servicesProvided: ['Event Production & Concept', 'Lighting Show & Panggung Megah', 'Protokoler Pejabat & VIP', 'Piala & Plakat Desain Custom', 'Press Conference'],
    client: 'Asosiasi Industri Kediri Bersatu',
    attendees: '320 Tamu Undangan',
    testimonial: {
      quote: 'Standar penyelenggaraan setara acara nasional di Jakarta. Kediri bangga memiliki mitra event organizer sekaliber Aethel.',
      author: 'Drs. H. Hendra Wicaksono',
      role: 'Ketua Panitia Pengarah'
    }
  },
  {
    title: 'Soundwave Indie Youth Festival Kediri',
    slug: 'soundwave-indie-youth-festival-kediri',
    category: 'Concert & Festival',
    date: '17 Mei 2024',
    location: 'Taman Tirtayasa Outdoor Stage, Kota Kediri',
    city: 'kediri',
    description: 'Festival musik pemuda menghadirkan 8 band lokal Jawa Timur dan guest star nasional. Mengutamakan kenyamanan sirkulasi penonton, tata lampu panggung spektakuler, dan bazaar tenant kreatif.',
    featuredImage: '/images/stage-concert.webp',
    gallery: ['/images/stage-concert.webp', '/images/hero-stage.webp', '/images/gathering-batu.webp'],
    servicesProvided: ['Rigging Stage 12x10m & FOH', 'Line Array Sound 30.000 Watt', 'Perizinan Keramaian & Medis', 'Manajemen Ticketing & Gate Scanner'],
    client: 'Komunitas Kreatif Kediri',
    attendees: '2.500 Penonton',
    testimonial: {
      quote: 'Sistem crowd control dan sound engineering-nya luar biasa jernih. Festival berjalan aman, tertib, dan pecah!',
      author: 'Rifki Fahreza',
      role: 'Project Leader Komunitas'
    }
  },
  {
    title: 'Eksibisi Seni & Florist Modern Malang Creative Hub',
    slug: 'eksibisi-seni-florist-malang',
    category: 'Exhibition & Private Event',
    date: '10 Februari 2024',
    location: 'Malang Creative Center (MCC), Kota Malang',
    city: 'malang',
    description: 'Pameran instalasi flora kontemporer dan ruang interaktif berkonsep zen interior. Menampilkan 15 instalasi botanik dan workshop merangkai bunga estetis.',
    featuredImage: '/images/floral-decor.webp',
    gallery: ['/images/floral-decor.webp', '/images/hero-stage.webp', '/images/wedding-reception.webp'],
    servicesProvided: ['Layout Ruang Pameran & Partisi', 'Pencahayaan Galeri Terarah', 'Buku Katalog & Merchandise', 'Manajemen Kunjungan Berjadwal'],
    client: 'Ikatan Perangkai Bunga Malang Raya',
    attendees: '1.200 Pengunjung',
    testimonial: {
      quote: 'Pameran tersaji dengan estetika yang sangat matang dan tenang. Pengunjung sangat mengapresiasi kerapian instalasinya.',
      author: 'Clara S. Melati',
      role: 'Kurator Pameran'
    }
  }
];
