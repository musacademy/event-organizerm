export interface LayananFaq {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  icon: string;
}

export interface VenueHighlight {
  region: string;
  venues: string[];
  badge: string;
}

export const unifiedFaqs: LayananFaq[] = [
  {
    question: 'Bagaimana Halo Malang menghandle acara di Malang dan Kediri dalam 1 proyek?',
    answer: 'Kami mengoperasikan dua hub resmi: Kantor Utama di Malang (Kawasan Ijen) dan Hub Operasional di Kediri (Kawasan Dhoho). Dengan sistem manajemen terpusat, tim produksi, show management, dan gudang peralatan kami siap beroperasi di kedua wilayah tanpa kendala koordinasi atau biaya mobilisasi luar kota yang membebani klien.'
  },
  {
    question: 'Apakah ada perbedaan kualitas layanan antara acara di Malang dan di Kediri?',
    answer: 'Sama sekali tidak ada perbedaan. Seluruh acara di Malang Raya maupun Kediri ditangani dengan SOP kualitas yang sama: rancangan 3D layout presisi, tim show director berpengalaman, sound system berstandar profesional, dan pendampingan LO dedicated sepanjang acara.'
  },
  {
    question: 'Bisakah Halo Malang mengelola acara multi-kota atau roadshow di Jawa Timur?',
    answer: 'Tentu bisa. Karena memiliki basis operasional kuat di Malang dan Kediri, kami sangat ideal untuk menangani rangkaian roadshow korporasi, aktivasi brand, atau pameran yang berpindah antara Malang, Batu, Kediri, Blitar, hingga Jombang dengan satu kontrak kerja sama yang efisien.'
  },
  {
    question: 'Venue mana saja yang menjadi rekanan resmi Halo Malang di Malang dan Kediri?',
    answer: 'Di Malang Raya: Grand Mercure Mirama, Hotel Savana, The Singhasari Resort Batu, Kusuma Agrowisata, dan Malang Creative Center. Di Kediri: Grand Surya Hotel, Insumo Kediri Convention Centre, Lotus Garden Hotel, serta area publik seperti Simpang Lima Gumul (SLG).'
  },
  {
    question: 'Berapa lama persiapan ideal dan berapa batas minimal kapasitas peserta?',
    answer: 'Kami melayani acara mulai dari intimate gathering (30–50 pax) hingga festival ribuan penonton. Waktu persiapan ideal adalah 3–6 minggu untuk acara corporate/wedding, dan 2–3 bulan untuk festival musik atau expo besar.'
  }
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Corporate Gathering & Employee Outbound',
    description: 'Program keakraban perusahaan, outbound games di Batu, hingga gala dinner mewah di Malang dan Kediri.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Seminar, Conference & Awarding Night',
    description: 'Manajemen simposium akademis dan malam apresiasi korporat dengan registrasi digital barcode & LED screen 4K.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Wedding Organizer & Resepsi Intimate',
    description: 'Pernikahan elegan bernuansa botanical-sage di villa pegunungan Batu atau grand luxury ballroom di Kediri.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    title: 'Festival Musik, Konser & Expo Publik',
    description: 'Produksi panggung rigging truss kokoh, tata cahaya moving beam, tata suara line-array, dan perizinan crowd control.',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
  },
  {
    title: 'Brand Activation & Product Launching',
    description: 'Instalasi pameran interaktif di mall, peluncuran produk inovatif, dan publikasi media terarah di Jawa Timur.',
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
  },
  {
    title: 'Custom Event & Private Celebration',
    description: 'Pesta ulang tahun tematik, anniversary perusahaan, reuni akbar, dan wisuda dengan sentuhan personal unik.',
    icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h10z'
  }
];

export const venueHighlights: VenueHighlight[] = [
  {
    region: 'Malang & Kota Batu',
    venues: ['Grand Mercure Malang Mirama', 'Hotel Savana & Convention', 'The Singhasari Resort Batu', 'Kusuma Agrowisata Resort', 'Malang Creative Center (MCC)'],
    badge: 'Hub Utama'
  },
  {
    region: 'Kediri & Sekitarnya',
    venues: ['Grand Surya Hotel Kediri', 'Insumo Kediri Convention Centre (IKCC)', 'Lotus Garden Hotel', 'Simpang Lima Gumul (SLG)', 'Area Komersial Dhoho'],
    badge: 'Hub Operasional'
  }
];
