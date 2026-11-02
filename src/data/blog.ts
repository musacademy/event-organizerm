export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  cityTag?: 'Malang' | 'Kediri' | 'Umum';
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Panduan Memilih Event Organizer di Malang untuk Perusahaan',
    slug: 'panduan-memilih-event-organizer-di-malang',
    excerpt: 'Menyelenggarakan acara kantor di Malang dan Batu membutuhkan EO yang memahami medan logistik lokal, legalitas izin, dan jaringan venue.',
    date: '15 Oktober 2024',
    readTime: '5 min baca',
    author: 'Tim Perencana Halo Malang',
    category: 'Corporate & Tips',
    cityTag: 'Malang',
    image: '/images/corporate-malang.webp',
    content: [
      'Malang Raya—mencakup Kota Malang, Kabupaten Malang, dan Kota Wisata Batu—telah menjadi salah satu destinasi terfavorit di Jawa Timur untuk corporate retreat, seminar ilmiah, hingga awarding night tahunan. Suasana kota yang asri dan sejuk menjadi daya tarik utama.',
      'Namun, merencanakan acara korporat berskala puluhan hingga ratusan peserta memiliki tantangan logistik tersendiri. Memilih mitra Event Organizer (EO) yang tepat adalah faktor penentu antara acara yang meninggalkan kesan mendalam atau sekadar formalitas yang melelahkan.',
      'Pertama, pastikan EO memiliki legalitas bisnis yang jelas dan portofolio nyata di Malang Raya. Tanyakan dokumentasi acara serupa dan referensi klien korporasi terdahulu.',
      'Kedua, perhatikan pemahaman EO terhadap karakteristik venue di Malang dan Batu. Akses jalan bus besar, ketersediaan daya listrik cadangan (genset), serta izin keramaian dari instansi terkait memerlukan koordinasi yang matang.',
      'Ketiga, pilihlah EO yang menerapkan transparansi anggaran sejak awal. Mintalah proposal itemized breakdown sehingga Anda mengetahui alokasi biaya untuk panggung, sound system, konsumsi, dan honorarium pendukung tanpa adanya hidden cost di akhir acara.'
    ]
  },
  {
    title: 'Tips Merencanakan Gathering Perusahaan di Kediri & Rekomendasi Konsep',
    slug: 'tips-merencanakan-gathering-perusahaan-di-kediri',
    excerpt: 'Kediri memiliki potensi luar biasa untuk corporate gathering dengan akses transportasi yang kian terbuka dan pilihan venue ballroom hingga resort.',
    date: '02 Oktober 2024',
    readTime: '6 min baca',
    author: 'Tim Kreatif Halo Malang',
    category: 'Gathering & Outbound',
    cityTag: 'Kediri',
    image: '/images/gathering-batu.webp',
    content: [
      'Pertumbuhan ekonomi dan industri di wilayah Kediri, Jawa Timur, mendorong meningkatnya kebutuhan perusahaan akan kegiatan team building dan gathering yang profesional. Dengan beroperasinya Bandara Dhoho Kediri, mobilitas tim luar kota semakin efisien.',
      'Untuk merancang gathering yang berkesan di Kediri, tentukan terlebih dahulu sasaran utama kegiatan: apakah berfokus pada refreshing santai, pelatihan kepemimpinan, atau perayaan pencapaian target bisnis tahunan.',
      'Pemilihan konsep acara harus diselaraskan dengan demografi karyawan. Konsep thematic gala dinner di ballroom hotel Grand Surya atau Insumo Palace cocok untuk perayaan formal. Sementara kegiatan outbound semi-outdoor dapat memanfaatkan kawasan rekreasi dan resort di sekitar lereng Gunung Klotok atau Besuki.',
      'Tim event organizer bertindak sebagai motor penggerak yang mengatur alur rundown dinamis: mulai dari sesi ice-breaking, game simulasi komunikasi, hiburan musik live, hingga penyerahan penghargaan karyawan terbaik.'
    ]
  },
  {
    title: 'Hal yang Perlu Dipersiapkan Sebelum Mengadakan Seminar di Malang',
    slug: 'hal-yang-perlu-dipersiapkan-sebelum-mengadakan-seminar-di-malang',
    excerpt: 'Sebagai kota pendidikan terkemuka, Malang menjadi tuan rumah puluhan konferensi setiap bulannya. Simak persiapan penting berikut ini.',
    date: '19 September 2024',
    readTime: '4 min baca',
    author: 'Divisi Acara Edukasi',
    category: 'Seminar & Conference',
    cityTag: 'Malang',
    image: '/images/hero-stage.webp',
    content: [
      'Menjadi rumah bagi puluhan perguruan tinggi ternama seperti Universitas Brawijaya, Universitas Negeri Malang, dan UIN Maulana Malik Ibrahim, Malang rutin menjadi tuan rumah seminar nasional dan simposium internasional.',
      'Persiapan utama meliputi kepastian tanggal narasumber utama (keynote speakers) dan reservasi auditorium atau ballroom hotel setidaknya 2-3 bulan sebelum hari-H.',
      'Sistem registrasi digital dengan barcode check-in kini menjadi standar wajib untuk meminimalkan antrean panjang di lobby acara. Selain itu, pastikan fasilitas streaming hybrid beroperasi stabil jika Anda membuka kuota peserta daring.',
      'Kolaborasi dengan tim audio visual yang kompeten memastikan materi presentasi tampil tajam pada layar LED serta suara pembicara terdengar jernih di setiap sudut ruangan.'
    ]
  },
  {
    title: 'Panduan Menyusun Anggaran Acara Event Organizer Tanpa Overbudget',
    slug: 'panduan-menyusun-anggaran-acara-tanpa-overbudget',
    excerpt: 'Strategi praktis membagi pos biaya acara pernikahan, konser, maupun seminar agar tepat guna dan transparan.',
    date: '28 Agustus 2024',
    readTime: '5 min baca',
    author: 'Konsultan Anggaran Halo Malang',
    category: 'Manajemen Anggaran',
    cityTag: 'Umum',
    image: '/images/wedding-reception.webp',
    content: [
      'Menyusun anggaran acara adalah pondasi utama keberhasilan setiap kegiatan. Kesalahan umum panitia adalah mengalokasikan persentase dana terlalu besar di elemen dekorasi, namun kekurangan alokasi untuk sound system, genset, atau konsumsi tamu.',
      'Formula ideal alokasi anggaran acara: Venue & Katering (40-45%), Produksi Panggung & Audio Visual (25-30%), Jasa Manajemen EO & Tim Pelaksana (10-15%), Dokumentasi & Publikasi (5-8%), serta Dana Tak Terduga / Contingency (5-10%).',
      'Dana darurat wajib disiapkan untuk mengantisipasi kebutuhan mendadak seperti perpanjangan sewa genset akibat rundown molor atau kebutuhan tenda darurat saat hujan.',
      'Konsultasikan rancangan anggaran dengan event organizer sejak sesi kickoff meeting. EO berpengalaman dapat memberikan rekomendasi vendor lokal dengan harga rekanan yang jauh lebih hemat dibanding pemesanan mandiri.'
    ]
  },
  {
    title: 'Cara Memilih Venue untuk Acara di Malang dan Kota Batu',
    slug: 'cara-memilih-venue-acara-di-malang-dan-batu',
    excerpt: 'Perbandingan tipe venue ballroom indoor modern di Kota Malang versus konsep villa resort perbukitan di Kota Batu.',
    date: '11 Agustus 2024',
    readTime: '6 min baca',
    author: 'Tim Riset Lapangan Halo Malang',
    category: 'Venue & Lokasi',
    cityTag: 'Malang',
    image: '/images/floral-decor.webp',
    content: [
      'Ketika merencanakan acara di Malang Raya, pertanyaan pertama yang kerap muncul adalah: sebaiknya memilih venue di pusat Kota Malang atau di Kota Wisata Batu?',
      'Jika acara Anda adalah seminar korporasi berdurasi satu hari dengan mayoritas peserta luar kota yang tiba via Stasiun Malang Kotabaru atau Bandara Abdulrachman Saleh, pusat Kota Malang (seperti kawasan Ijen, Klojen, atau Blimbing) adalah pilihan paling praktis.',
      'Sebaliknya, untuk acara gathering perusahaan 2-3 hari atau intimate wedding dengan panorama alam pegunungan, kawasan Batu menawarkan udara sejuk, fasilitas villa terpadu, dan latar belakang Gunung Panderman yang memukau.',
      'Faktor penting yang perlu diverifikasi pada venue perbukitan adalah lebar akses jalan untuk armada bus pariwisata serta ketersediaan area parkir yang memadai.'
    ]
  },
  {
    title: 'Panduan Mengelola Acara Komunitas & Festival Kreatif di Kediri',
    slug: 'panduan-mengelola-acara-komunitas-di-kediri',
    excerpt: 'Langkah strategis perizinan, crowd control, dan penataan tenant kuliner pada festival terbuka di Kediri.',
    date: '20 Juli 2024',
    readTime: '5 min baca',
    author: 'Tim Produksi Festival',
    category: 'Festival & Komunitas',
    cityTag: 'Kediri',
    image: '/images/stage-concert.webp',
    content: [
      'Geliat komunitas kreatif di Kediri semakin berkembang pesat, mulai dari pameran otomotif, festival musik indie, hingga expo UMKM lokal di sekitar ikon Monumen Simpang Lima Gumul (SLG).',
      'Kunci utama festival outdoor yang aman adalah manajemen crowd flow. Pisahkan pintu masuk penonton, jalur khusus logistik vendor, dan akses darurat ambulans medis.',
      'Pengurusan izin keramaian dari Polres Kediri dan koordinasi dengan satpol PP setempat sebaiknya dirampungkan paling lambat H-14 acara untuk menghindari kendala perizinan di menit-menit akhir.',
      'Gunakan sistem barcode scanner pada gate masuk untuk mempercepat verifikasi tiket dan mencegah penumpukan massa di area registrasi.'
    ]
  }
];
