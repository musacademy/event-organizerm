export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  category: 'corporate' | 'wedding' | 'gathering' | 'seminar' | 'festival' | 'private' | 'custom';
  description: string;
  image: string;
  startingPrice: string;
  locations: string[];
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'corporate-event',
    title: 'Corporate Event & Awarding Night',
    tag: 'Corporate',
    category: 'corporate',
    description: 'Penyelenggaraan gala dinner, annual meeting, product launching, dan malam apresiasi perusahaan dengan standar profesional.',
    image: '/images/corporate-malang.jpg',
    startingPrice: 'Mulai Rp 18.000.000',
    locations: ['Malang', 'Kediri', 'Jawa Timur'],
    features: ['Stage & LED screen custom', 'Rundown & time management ketat', 'Master of Ceremony & talent curation', 'Audio-visual high quality']
  },
  {
    id: 'wedding-organizer',
    title: 'Intimate & Luxury Wedding Organizer',
    tag: 'Wedding',
    category: 'wedding',
    description: 'Mewujudkan pernikahan impian dengan konsep elegan, manajemen vendor terpadu, serta pendampingan keluarga yang penuh kehangatan.',
    image: '/images/wedding-reception.jpg',
    startingPrice: 'Mulai Rp 22.000.000',
    locations: ['Malang', 'Kediri', 'Kota Batu'],
    features: ['Konsep dekorasi bunga botanical', 'Pendampingan akad & resepsi penuh', 'Koordinasi katering & fotografer', 'Technical meeting vendor & keluarga']
  },
  {
    id: 'company-gathering',
    title: 'Gathering Perusahaan & Outbound Retreat',
    tag: 'Gathering',
    category: 'gathering',
    description: 'Program team building seru dan retreat alam terbuka di kawasan Batu Malang dan Kediri untuk mempererat sinergi tim kerja.',
    image: '/images/gathering-batu.jpg',
    startingPrice: 'Mulai Rp 15.000.000',
    locations: ['Batu Malang', 'Kediri', 'Malang Raya'],
    features: ['Fasilitator outbound tersertifikasi', 'Games fun & leadership simulation', 'Sound system & entertainment outdoor', 'Akomodasi & logistik terkelola']
  },
  {
    id: 'seminar-conference',
    title: 'Seminar, Workshop & Conference',
    tag: 'Seminar',
    category: 'seminar',
    description: 'Manajemen seminar nasional, simposium akademis, dan conference profesional dengan alur registrasi digital dan fasilitas modern.',
    image: '/images/hero-stage.jpg',
    startingPrice: 'Mulai Rp 12.000.000',
    locations: ['Malang', 'Kediri'],
    features: ['Sistem registrasi & barcode check-in', 'Live streaming multi-camera hybrid', 'Kit seminar & sertifikat', 'Manajemen narasumber & moderator']
  },
  {
    id: 'concert-festival',
    title: 'Concert, Music Festival & Show Production',
    tag: 'Festival',
    category: 'festival',
    description: 'Produksi pertunjukan panggung spektakuler lengkap dengan lighting truss, sound system line-array, perizinan, dan ticketing.',
    image: '/images/stage-concert.jpg',
    startingPrice: 'Mulai Rp 35.000.000',
    locations: ['Malang', 'Kediri'],
    features: ['Rigging & lighting truss profesional', 'Perizinan keamanan & aparat setempat', 'Manajemen flow penonton & medis', 'Tata panggung akustik premium']
  },
  {
    id: 'private-event',
    title: 'Private Event, Birthday & Graduation',
    tag: 'Private Event',
    category: 'private',
    description: 'Perayaan ulang tahun eksklusif, syukuran kelulusan, dan momen personal berharga dengan sentuhan dekorasi berkelas.',
    image: '/images/floral-decor.jpg',
    startingPrice: 'Mulai Rp 8.500.000',
    locations: ['Malang', 'Kediri', 'Batu'],
    features: ['Custom table styling & flowers', 'Dokumentasi foto & cinematic reel', 'Kue & katering pilihan', 'Musik akustik pengiring']
  }
];
