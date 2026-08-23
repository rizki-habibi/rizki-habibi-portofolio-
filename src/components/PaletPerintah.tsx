'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiSearch, FiHome, FiFolder, FiAward, FiFileText, FiMail,
  FiDownload, FiGithub, FiArrowUp, FiBookOpen, FiCode, FiUser, FiUsers,
  FiBook, FiZap, FiStar, FiTrendingUp, FiHeart, FiGlobe,
  FiCpu, FiLayers, FiTarget, FiCompass,
} from 'react-icons/fi'

// --- Tipe data perintah -------------------------------------
interface Perintah {
  id: string
  label: string
  desc: string
  icon: React.ElementType
  action: string
  type: 'navigate' | 'link' | 'download' | 'action'
  kategori: 'navigasi' | 'chapter' | 'aksi'
  tag?: string[]
}

// --- Semua chapter sebagai perintah pencarian ---------------
const daftarChapter: Perintah[] = [
  // GrupBab 1 " Ch16-25
  { id: 'ch16', label: 'Ch.16 Website Desa Digital', desc: 'Platform digitalisasi 75.000+ desa Indonesia', icon: FiGlobe, action: '#ch16', type: 'navigate', kategori: 'chapter', tag: ['desa', 'digital', 'website'] },
  { id: 'ch17', label: 'Ch.17 QRIS Donasi', desc: 'Sistem donasi transparan berbasis QRIS', icon: FiHeart, action: '#ch17', type: 'navigate', kategori: 'chapter', tag: ['donasi', 'qris', 'sosial'] },
  { id: 'ch18', label: 'Ch.18 Website Global Map', desc: 'Peta interaktif data sosial-ekonomi Indonesia', icon: FiCompass, action: '#ch18', type: 'navigate', kategori: 'chapter', tag: ['peta', 'map', 'data'] },
  { id: 'ch19', label: 'Ch.19 Karir & Profesional', desc: 'Roadmap karir developer 2023"2028', icon: FiTrendingUp, action: '#ch19', type: 'navigate', kategori: 'chapter', tag: ['karir', 'kerja', 'profesional'] },
  { id: 'ch20', label: 'Ch.20 Website Komersial', desc: 'Layanan web development komersial', icon: FiFolder, action: '#ch20', type: 'navigate', kategori: 'chapter', tag: ['bisnis', 'komersial', 'web'] },
  { id: 'ch21', label: 'Ch.21 Sistem Informasi Pemerintah', desc: 'SPBE dan digitalisasi layanan publik', icon: FiLayers, action: '#ch21', type: 'navigate', kategori: 'chapter', tag: ['pemerintah', 'spbe', 'publik'] },
  { id: 'ch22', label: 'Ch.22 Platform Edukasi Digital', desc: 'Visi edukasi teknologi untuk semua', icon: FiBook, action: '#ch22', type: 'navigate', kategori: 'chapter', tag: ['edukasi', 'belajar', 'digital'] },
  { id: 'ch23', label: 'Ch.23 Membangun Startup', desc: 'Perjalanan membangun startup dari nol', icon: FiZap, action: '#ch23', type: 'navigate', kategori: 'chapter', tag: ['startup', 'bisnis', 'founder'] },
  { id: 'ch24', label: 'Ch.24 Teknologi untuk Keadilan Sosial', desc: 'Tech sebagai alat pemerataan', icon: FiStar, action: '#ch24', type: 'navigate', kategori: 'chapter', tag: ['sosial', 'dampak', 'keadilan'] },
  { id: 'ch25', label: 'Ch.25 Kolaborasi Lintas Bidang', desc: 'Developer + pemerintah + UMKM', icon: FiUsers, action: '#ch25', type: 'navigate', kategori: 'chapter', tag: ['kolaborasi', 'umkm', 'lintas'] },
  // GrupBab 2 " Ch26-35
  { id: 'ch26', label: 'Ch.26 AI Journey', desc: 'Perjalanan belajar Artificial Intelligence', icon: FiCpu, action: '#ch26', type: 'navigate', kategori: 'chapter', tag: ['ai', 'machine learning', 'journey'] },
  { id: 'ch27', label: 'Ch.27 Tech Stack Deep Dive', desc: 'Laravel, Next.js, MySQL mendalam', icon: FiCode, action: '#ch27', type: 'navigate', kategori: 'chapter', tag: ['laravel', 'nextjs', 'stack'] },
  { id: 'ch28', label: 'Ch.28 Open Source & Kontribusi', desc: 'Cara berkontribusi ke open source', icon: FiGithub, action: '#ch28', type: 'navigate', kategori: 'chapter', tag: ['open source', 'github', 'kontribusi'] },
  { id: 'ch29', label: 'Ch.29 Keamanan Siber', desc: 'Cybersecurity dan ethical hacking', icon: FiTarget, action: '#ch29', type: 'navigate', kategori: 'chapter', tag: ['keamanan', 'hacking', 'security'] },
  { id: 'ch30', label: 'Ch.30 Cloud Computing & DevOps', desc: 'AWS, Docker, CI/CD pipeline', icon: FiGlobe, action: '#ch30', type: 'navigate', kategori: 'chapter', tag: ['cloud', 'devops', 'aws', 'docker'] },
  { id: 'ch31', label: 'Ch.31 Database & Data Engineering', desc: 'SQL, NoSQL, data pipeline', icon: FiLayers, action: '#ch31', type: 'navigate', kategori: 'chapter', tag: ['database', 'sql', 'data'] },
  { id: 'ch32', label: 'Ch.32 UI/UX Design Thinking', desc: 'Prinsip desain untuk developer', icon: FiStar, action: '#ch32', type: 'navigate', kategori: 'chapter', tag: ['uiux', 'desain', 'design'] },
  { id: 'ch33', label: 'Ch.33 Artificial Intelligence', desc: 'ML, NLP, Computer Vision', icon: FiCpu, action: '#ch33', type: 'navigate', kategori: 'chapter', tag: ['ai', 'ml', 'nlp'] },
  { id: 'ch34', label: 'Ch.34 Internet of Things', desc: 'Proyek IoT dengan Arduino & sensor', icon: FiZap, action: '#ch34', type: 'navigate', kategori: 'chapter', tag: ['iot', 'arduino', 'sensor'] },
  { id: 'ch35', label: 'Ch.35 Digital Marketing & Branding', desc: 'Strategi digital untuk developer', icon: FiTrendingUp, action: '#ch35', type: 'navigate', kategori: 'chapter', tag: ['marketing', 'branding', 'digital'] },
  // GrupBab 3-5 " Ch36-61
  { id: 'ch36', label: 'Ch.36 Kesehatan Digital', desc: 'Teknologi di bidang kesehatan', icon: FiHeart, action: '#ch36', type: 'navigate', kategori: 'chapter', tag: ['kesehatan', 'health', 'digital'] },
  { id: 'ch37', label: 'Ch.37 Teknologi untuk Lingkungan', desc: 'GreenTech dan sustainability', icon: FiGlobe, action: '#ch37', type: 'navigate', kategori: 'chapter', tag: ['lingkungan', 'green', 'sustainability'] },
  { id: 'ch38', label: 'Ch.38 Dampak Sosial Teknologi', desc: 'Tech for good', icon: FiStar, action: '#ch38', type: 'navigate', kategori: 'chapter', tag: ['sosial', 'dampak', 'tech'] },
  { id: 'ch39', label: 'Ch.39 Personal Growth', desc: 'Bertumbuh setiap hari sebagai developer', icon: FiTrendingUp, action: '#ch39', type: 'navigate', kategori: 'chapter', tag: ['growth', 'berkembang', 'personal'] },
  { id: 'ch40', label: 'Ch.40 Leadership & Team', desc: 'Memimpin tim teknis', icon: FiCompass, action: '#ch40', type: 'navigate', kategori: 'chapter', tag: ['leadership', 'tim', 'manajemen'] },
  { id: 'ch41', label: 'Ch.41 Problem Solving Mindset', desc: 'Framework berpikir untuk developer', icon: FiTarget, action: '#ch41', type: 'navigate', kategori: 'chapter', tag: ['problem solving', 'mindset', 'logika'] },
  { id: 'ch42', label: 'Ch.42 Soft Skills', desc: 'Komunikasi, empati, kolaborasi', icon: FiHeart, action: '#ch42', type: 'navigate', kategori: 'chapter', tag: ['soft skills', 'komunikasi', 'empati'] },
  { id: 'ch43', label: 'Ch.43 Computational Thinking', desc: 'Dasar berpikir algoritmik', icon: FiCpu, action: '#ch43', type: 'navigate', kategori: 'chapter', tag: ['logika', 'algoritma', 'computational'] },
  { id: 'ch44', label: 'Ch.44 Kreativitas Tanpa Batas', desc: 'Sisi artistik seorang developer', icon: FiStar, action: '#ch44', type: 'navigate', kategori: 'chapter', tag: ['kreativitas', 'seni', 'artistik'] },
  { id: 'ch45', label: 'Ch.45 Dream Big', desc: 'Visi jangka panjang developer', icon: FiCompass, action: '#ch45', type: 'navigate', kategori: 'chapter', tag: ['mimpi', 'visi', 'masa depan'] },
  // tambahan ch46-ch180
  { id: 'ch46', label: 'Ch.46 Motivasi Harian', desc: 'Quotes dan sumber energi harian developer', icon: FiZap, action: '#ch46', type: 'navigate', kategori: 'chapter', tag: ['motivasi', 'semangat'] },
  { id: 'ch47', label: 'Ch.47 Belajar dari Kegagalan', desc: '5 kegagalan nyata dan pelajarannya', icon: FiTarget, action: '#ch47', type: 'navigate', kategori: 'chapter', tag: ['kegagalan', 'belajar'] },
  { id: 'ch48', label: 'Ch.48 Kolaborasi Global - Ekspansi', desc: 'Rencana ekspansi proyek ke ASEAN dan dunia', icon: FiGlobe, action: '#ch48', type: 'navigate', kategori: 'chapter', tag: ['global', 'ekspansi'] },
  { id: 'ch49', label: 'Ch.49 Masa Depan Teknologi', desc: 'Web3, edge computing, AR, quantum, AI agent', icon: FiCompass, action: '#ch49', type: 'navigate', kategori: 'chapter', tag: ['masa depan', 'quantum'] },
  { id: 'ch51', label: 'Ch.51 Rasa Syukur - Terima Kasih', desc: 'Apresiasi ke keluarga, dosen, komunitas, pengguna', icon: FiHeart, action: '#ch51', type: 'navigate', kategori: 'chapter', tag: ['syukur', 'keluarga'] },
  { id: 'ch52', label: 'Ch.52 UMKM Goes Digital', desc: '65 juta UMKM Indonesia butuh transformasi digital', icon: FiTrendingUp, action: '#ch52', type: 'navigate', kategori: 'chapter', tag: ['umkm', 'digital'] },
  { id: 'ch53', label: 'Ch.53 Smart City - Kontribusi Jember', desc: 'Kontribusi Rizki untuk Smart City Jember', icon: FiGlobe, action: '#ch53', type: 'navigate', kategori: 'chapter', tag: ['smart city', 'jember'] },
  { id: 'ch54', label: 'Ch.54 Keluarga - Fondasi Segalanya', desc: 'Keluarga sebagai motivasi utama berkarya', icon: FiHeart, action: '#ch54', type: 'navigate', kategori: 'chapter', tag: ['keluarga', 'fondasi'] },
  { id: 'ch56', label: 'Ch.56 Warisan Digital', desc: 'Apa yang ditinggalkan untuk generasi mendatang', icon: FiStar, action: '#ch56', type: 'navigate', kategori: 'chapter', tag: ['warisan', 'generasi'] },
  { id: 'ch57', label: 'Ch.57 Inovasi Tanpa Henti', desc: 'The next big things yang ingin dibangun', icon: FiZap, action: '#ch57', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'next big thing'] },
  { id: 'ch59', label: 'Ch.59 Pesan untuk Developer Muda', desc: 'Surat terbuka untuk junior developer Indonesia', icon: FiBook, action: '#ch59', type: 'navigate', kategori: 'chapter', tag: ['developer muda', 'junior'] },
  { id: 'ch61', label: 'Ch.61 The Penultimate Chapter', desc: 'Satu langkah sebelum final arc pertama', icon: FiCompass, action: '#ch61', type: 'navigate', kategori: 'chapter', tag: ['finale', 'penultimate'] },
  { id: 'ch63', label: 'Ch.63 Duel Monsters Yugioh', desc: 'Strategi berpikir dari game kartu Yugioh', icon: FiStar, action: '#ch63', type: 'navigate', kategori: 'chapter', tag: ['game', 'yugioh'] },
  { id: 'ch64', label: 'Ch.64 Master Strategi dan Taktik', desc: 'Game strategi sebagai pelatihan logika', icon: FiTarget, action: '#ch64', type: 'navigate', kategori: 'chapter', tag: ['strategi', 'game'] },
  { id: 'ch65', label: 'Ch.65 Kingdom Builder', desc: 'City-building dan pelajaran kepemimpinan', icon: FiCompass, action: '#ch65', type: 'navigate', kategori: 'chapter', tag: ['game', 'kepemimpinan'] },
  { id: 'ch66', label: 'Ch.66 Dragon Quest Petualangan Epik', desc: 'RPG dan perjalanan hero kehidupan nyata', icon: FiStar, action: '#ch66', type: 'navigate', kategori: 'chapter', tag: ['game', 'rpg'] },
  { id: 'ch67', label: 'Ch.67 Minecraft Dunia Tanpa Batas', desc: 'Kreativitas tanpa batas dari game sandbox', icon: FiZap, action: '#ch67', type: 'navigate', kategori: 'chapter', tag: ['game', 'minecraft'] },
  { id: 'ch70', label: 'Ch.70 Wishlist dan Impian Gamer', desc: 'Daftar keinginan dan impian sebagai gamer', icon: FiStar, action: '#ch70', type: 'navigate', kategori: 'chapter', tag: ['game', 'wishlist'] },
  { id: 'ch72', label: 'Ch.72 Coding with Music', desc: 'Musik sebagai soundtrack produktivitas coding', icon: FiStar, action: '#ch72', type: 'navigate', kategori: 'chapter', tag: ['musik', 'coding'] },
  { id: 'ch73', label: 'Ch.73 Perpustakaan Digital', desc: 'Sumber ilmu dan referensi favorit developer', icon: FiBook, action: '#ch73', type: 'navigate', kategori: 'chapter', tag: ['belajar', 'referensi'] },
  { id: 'ch74', label: 'Ch.74 Kreativitas Sisi Lain Developer', desc: 'Seni, musik, kreativitas di balik kode', icon: FiStar, action: '#ch74', type: 'navigate', kategori: 'chapter', tag: ['kreativitas', 'hobi'] },
  { id: 'ch76', label: 'Ch.76 Impian Besar Beyond the Horizon', desc: 'Mimpi yang melampaui batas yang ada', icon: FiCompass, action: '#ch76', type: 'navigate', kategori: 'chapter', tag: ['impian', 'horizon'] },
  { id: 'ch77', label: 'Ch.77 Surat untuk Developer Muda', desc: 'Pesan dari developer yang pernah jadi pemula', icon: FiBook, action: '#ch77', type: 'navigate', kategori: 'chapter', tag: ['surat', 'pesan'] },
  { id: 'ch78', label: 'Ch.78 IoT dari Barang Bekas', desc: 'Inovasi IoT dengan budget minimal', icon: FiZap, action: '#ch78', type: 'navigate', kategori: 'chapter', tag: ['iot', 'daur ulang'] },
  { id: 'ch80', label: 'Ch.80 Terima Kasih Telah Membaca', desc: 'Apresiasi untuk pembaca setia portfolio', icon: FiHeart, action: '#ch80', type: 'navigate', kategori: 'chapter', tag: ['terima kasih', 'pembaca'] },
  { id: 'ch83', label: 'Ch.83 Visi Pendidikan Digital', desc: 'Platform edukasi untuk semua lapisan masyarakat', icon: FiBook, action: '#ch83', type: 'navigate', kategori: 'chapter', tag: ['pendidikan', 'visi'] },
  { id: 'ch84', label: 'Ch.84 Penelitian dan Akademik', desc: 'Paper, jurnal, riset yang relevan industri', icon: FiBook, action: '#ch84', type: 'navigate', kategori: 'chapter', tag: ['penelitian', 'jurnal'] },
  { id: 'ch85', label: 'Ch.85 Keuangan Mahasiswa', desc: 'Manajemen keuangan cerdas untuk mahasiswa', icon: FiTrendingUp, action: '#ch85', type: 'navigate', kategori: 'chapter', tag: ['keuangan', 'mahasiswa'] },
  { id: 'ch86', label: 'Ch.86 Workflow Developer', desc: 'Tools, shortcut, dan kebiasaan produktif', icon: FiCode, action: '#ch86', type: 'navigate', kategori: 'chapter', tag: ['workflow', 'tools'] },
  { id: 'ch87', label: 'Ch.87 Organisasi dan Pengalaman', desc: 'Kegiatan ekskul dan organisasi kampus', icon: FiUsers, action: '#ch87', type: 'navigate', kategori: 'chapter', tag: ['organisasi', 'ekskul'] },
  { id: 'ch89', label: 'Ch.89 Mentor dan Inspirasi', desc: 'Taylor Otwell, Linus Torvalds, Vercel Team', icon: FiStar, action: '#ch89', type: 'navigate', kategori: 'chapter', tag: ['mentor', 'inspirasi'] },
  { id: 'ch90', label: 'Ch.90 Keluarga - Kekuatan di Balik Semua', desc: 'Dukungan keluarga dalam perjalanan berkarya', icon: FiHeart, action: '#ch90', type: 'navigate', kategori: 'chapter', tag: ['keluarga', 'dukungan'] },
  { id: 'ch91', label: 'Ch.91 Kehidupan Kampus', desc: 'Antara tugas kuliah dan mimpi startup', icon: FiBook, action: '#ch91', type: 'navigate', kategori: 'chapter', tag: ['kampus', 'kuliah'] },
  { id: 'ch92', label: 'Ch.92 Jember dan Kota Perjalanan', desc: 'Cerita tentang Jember dan kota-kota dalam perjalanan', icon: FiGlobe, action: '#ch92', type: 'navigate', kategori: 'chapter', tag: ['jember', 'kota'] },
  { id: 'ch93', label: 'Ch.93 Budaya Digital Gen Z Developer', desc: 'Cara kerja dan berkarya developer Gen Z', icon: FiCode, action: '#ch93', type: 'navigate', kategori: 'chapter', tag: ['gen z', 'budaya'] },
  { id: 'ch95', label: 'Ch.95 Kuliner dan Cerita Makan', desc: 'Sisi manusiawi: makanan favorit mahasiswa', icon: FiStar, action: '#ch95', type: 'navigate', kategori: 'chapter', tag: ['kuliner', 'kehidupan'] },
  { id: 'ch96', label: 'Ch.96 Jejak Digital Personal Branding', desc: 'Membangun reputasi online sejak dini', icon: FiUser, action: '#ch96', type: 'navigate', kategori: 'chapter', tag: ['branding', 'reputasi'] },
  { id: 'ch97', label: 'Ch.97 Film dan Series Favorit', desc: 'Film dan serial yang menginspirasi developer', icon: FiStar, action: '#ch97', type: 'navigate', kategori: 'chapter', tag: ['film', 'inspirasi'] },
  { id: 'ch98', label: 'Ch.98 Anime dan Inspirasi Developer', desc: 'Naruto, Haikyuu, SAO dan pelajaran hidupnya', icon: FiStar, action: '#ch98', type: 'navigate', kategori: 'chapter', tag: ['anime', 'naruto'] },
  { id: 'ch99', label: 'Ch.99 Kegagalan yang Mengajarkan', desc: 'Lessons hard learned dari proyek yang gagal', icon: FiTarget, action: '#ch99', type: 'navigate', kategori: 'chapter', tag: ['gagal', 'pelajaran'] },
  { id: 'ch102', label: 'Ch.102 Machine Learning', desc: 'Supervised, unsupervised, reinforcement learning', icon: FiCpu, action: '#ch102', type: 'navigate', kategori: 'chapter', tag: ['ml', 'machine learning'] },
  { id: 'ch103', label: 'Ch.103 Cloud Computing', desc: 'AWS, GCP, Azure pilih yang tepat', icon: FiGlobe, action: '#ch103', type: 'navigate', kategori: 'chapter', tag: ['cloud', 'aws'] },
  { id: 'ch105', label: 'Ch.105 Database Mastery', desc: 'Desain, optimasi, dan scaling database', icon: FiLayers, action: '#ch105', type: 'navigate', kategori: 'chapter', tag: ['database', 'optimasi'] },
  { id: 'ch108', label: 'Ch.108 Open Source Kode untuk Dunia', desc: 'Membangun dan memelihara proyek open source', icon: FiGithub, action: '#ch108', type: 'navigate', kategori: 'chapter', tag: ['open source', 'github'] },
  { id: 'ch109', label: 'Ch.109 UI/UX Desain yang Manusiawi', desc: 'Aksesibilitas, UX research, design system', icon: FiStar, action: '#ch109', type: 'navigate', kategori: 'chapter', tag: ['uiux', 'aksesibilitas'] },
  { id: 'ch111', label: 'Ch.111 Warisan Digital - Legacy', desc: 'Dampak jangka panjang dari karya digital', icon: FiStar, action: '#ch111', type: 'navigate', kategori: 'chapter', tag: ['warisan', 'legacy'] },
  { id: 'ch112', label: 'Ch.112 Dampak Nyata Teknologi', desc: 'Mengukur dampak sosial dari teknologi', icon: FiHeart, action: '#ch112', type: 'navigate', kategori: 'chapter', tag: ['dampak', 'sosial'] },
  { id: 'ch113', label: 'Ch.113 Nilai dan Prinsip Hidup', desc: 'Etika, integritas, dan nilai dalam berkarya', icon: FiCompass, action: '#ch113', type: 'navigate', kategori: 'chapter', tag: ['nilai', 'etika'] },
  { id: 'ch114', label: 'Ch.114 Surat Pesan untuk Mereka', desc: 'Surat terbuka ke berbagai pihak', icon: FiBook, action: '#ch114', type: 'navigate', kategori: 'chapter', tag: ['surat', 'pesan'] },
  { id: 'ch115', label: 'Ch.115 Mimpi yang Belum Terwujud', desc: 'Bucket list developer impian masa depan', icon: FiStar, action: '#ch115', type: 'navigate', kategori: 'chapter', tag: ['mimpi', 'bucket list'] },
  { id: 'ch116', label: 'Ch.116 Refleksi Cermin Perjalanan', desc: 'Melihat kembali seluruh perjalanan hidup', icon: FiCompass, action: '#ch116', type: 'navigate', kategori: 'chapter', tag: ['refleksi', 'perjalanan'] },
  { id: 'ch117', label: 'Ch.117 Indonesia Digital Peran Kita', desc: 'Kontribusi developer untuk kemajuan Indonesia', icon: FiGlobe, action: '#ch117', type: 'navigate', kategori: 'chapter', tag: ['indonesia', 'kontribusi'] },
  { id: 'ch119', label: 'Ch.119 Epilog Agung', desc: 'Sebelum chapter terakhir arc pertama', icon: FiBook, action: '#ch119', type: 'navigate', kategori: 'chapter', tag: ['epilog', 'akhir arc'] },
  { id: 'ch120', label: 'Ch.120 Bersambung...', desc: 'The end is the beginning arc baru dimulai', icon: FiZap, action: '#ch120', type: 'navigate', kategori: 'chapter', tag: ['bersambung', 'arc baru'] },
  { id: 'ch122', label: 'Ch.122 Robotik Arduino DIY', desc: 'Robot DIY dari bahan bekas dengan Arduino', icon: FiZap, action: '#ch122', type: 'navigate', kategori: 'chapter', tag: ['robotik', 'arduino', 'diy'] },
  { id: 'ch123', label: 'Ch.123 AR dan VR Dunia Diperluas', desc: 'WebAR, WebXR, AR edukasi, VR gaming', icon: FiStar, action: '#ch123', type: 'navigate', kategori: 'chapter', tag: ['ar', 'vr'] },
  { id: 'ch125', label: 'Ch.125 Kendaraan Otonom', desc: 'Self-driving car dan tantangan di Indonesia', icon: FiCompass, action: '#ch125', type: 'navigate', kategori: 'chapter', tag: ['self driving', 'kendaraan'] },
  { id: 'ch126', label: 'Ch.126 Bioinformatika', desc: 'Genome sequencing, AlphaFold, drug discovery AI', icon: FiCpu, action: '#ch126', type: 'navigate', kategori: 'chapter', tag: ['bioinformatika', 'genome'] },
  { id: 'ch127', label: 'Ch.127 Energi Hijau Green Coding', desc: 'Solar grid cerdas, green coding, sustainability', icon: FiGlobe, action: '#ch127', type: 'navigate', kategori: 'chapter', tag: ['energi hijau', 'solar'] },
  { id: 'ch129', label: 'Ch.129 Space Tech', desc: 'Satellite software, earth observation, LAPAN Indonesia', icon: FiStar, action: '#ch129', type: 'navigate', kategori: 'chapter', tag: ['space', 'satellite', 'lapan'] },
  { id: 'ch130', label: 'Ch.130 Neurotech Interface Otak', desc: 'BCI, paralysis recovery, etika neural interface', icon: FiCpu, action: '#ch130', type: 'navigate', kategori: 'chapter', tag: ['neurotech', 'bci'] },
  { id: 'ch132', label: 'Ch.132 Kolaborasi Global Remote Work', desc: 'Panduan praktis bekerja lintas negara remote', icon: FiGlobe, action: '#ch132', type: 'navigate', kategori: 'chapter', tag: ['remote work', 'global'] },
  { id: 'ch133', label: 'Ch.133 Teknologi dan Lingkungan', desc: 'Ocean monitoring, deforestation alert, hutan Indonesia', icon: FiGlobe, action: '#ch133', type: 'navigate', kategori: 'chapter', tag: ['lingkungan', 'deforestasi'] },
  { id: 'ch134', label: 'Ch.134 Healthtech Inovasi Kesehatan', desc: 'Telemedicine, AI diagnosis, wearable health', icon: FiHeart, action: '#ch134', type: 'navigate', kategori: 'chapter', tag: ['healthtech', 'kesehatan'] },
  { id: 'ch136', label: 'Ch.136 Edtech Inovatif', desc: 'Adaptive learning, gamified learning, VR learning', icon: FiBook, action: '#ch136', type: 'navigate', kategori: 'chapter', tag: ['edtech', 'adaptive'] },
  { id: 'ch137', label: 'Ch.137 Ekonomi Kreatif Digital', desc: 'NFT, content creator, game dev indie, UI/UX freelance', icon: FiStar, action: '#ch137', type: 'navigate', kategori: 'chapter', tag: ['kreatif', 'nft'] },
  { id: 'ch138', label: 'Ch.138 Smart City Komprehensif 2030', desc: 'Smart traffic, waste, parkir, city dashboard Jember 2030', icon: FiGlobe, action: '#ch138', type: 'navigate', kategori: 'chapter', tag: ['smart city', 'jember 2030'] },
  { id: 'ch139', label: 'Ch.139 Supply Chain Tech', desc: 'Blockchain provenance, digital twin, pangan Indonesia', icon: FiLayers, action: '#ch139', type: 'navigate', kategori: 'chapter', tag: ['supply chain', 'blockchain'] },
  { id: 'ch141', label: 'Ch.141 Seni Digital', desc: 'Generative art, pixel art, AI art, interactive installation', icon: FiStar, action: '#ch141', type: 'navigate', kategori: 'chapter', tag: ['seni digital', 'generative'] },
  { id: 'ch142', label: 'Ch.142 Musik dan Teknologi', desc: 'DAW, AI music generation, voice cloning, live coding music', icon: FiStar, action: '#ch142', type: 'navigate', kategori: 'chapter', tag: ['musik', 'ai music'] },
  { id: 'ch143', label: 'Ch.143 Content Creator Tech', desc: 'Canva, CapCut, OBS, Descript, Buffer tools kreator', icon: FiCode, action: '#ch143', type: 'navigate', kategori: 'chapter', tag: ['content creator', 'tools'] },
  { id: 'ch144', label: 'Ch.144 Algoritma Sosial Media', desc: 'TikTok, LinkedIn, Instagram, YouTube, Twitter algorithm', icon: FiTrendingUp, action: '#ch144', type: 'navigate', kategori: 'chapter', tag: ['sosial media', 'algoritma'] },
  { id: 'ch145', label: 'Ch.145 Podcast dan Audio', desc: 'Setup minimal podcast, AI transcript, analytics', icon: FiStar, action: '#ch145', type: 'navigate', kategori: 'chapter', tag: ['podcast', 'audio'] },
  { id: 'ch146', label: 'Ch.146 Fashion Tech', desc: 'AR try-on, AI stylist, sustainable fashion blockchain', icon: FiStar, action: '#ch146', type: 'navigate', kategori: 'chapter', tag: ['fashion', 'ar'] },
  { id: 'ch147', label: 'Ch.147 Sport Tech', desc: 'Football analytics, e-sports Indonesia, VAR, pose AI', icon: FiTarget, action: '#ch147', type: 'navigate', kategori: 'chapter', tag: ['sport', 'esports'] },
  { id: 'ch148', label: 'Ch.148 Kuliner Tech', desc: 'Food delivery ML, kitchen robot, food waste AI', icon: FiStar, action: '#ch148', type: 'navigate', kategori: 'chapter', tag: ['kuliner', 'food delivery'] },
  { id: 'ch149', label: 'Ch.149 Transportasi Digital', desc: 'Ride-hailing AI, EV charging, predictive maintenance', icon: FiCompass, action: '#ch149', type: 'navigate', kategori: 'chapter', tag: ['transportasi', 'ev'] },
  { id: 'ch151', label: 'Ch.151 Kepemimpinan Tech', desc: 'Tech Lead, Engineering Manager, CTO journey', icon: FiCompass, action: '#ch151', type: 'navigate', kategori: 'chapter', tag: ['kepemimpinan', 'cto'] },
  { id: 'ch152', label: 'Ch.152 Generasi Bangsa Digital', desc: 'Literasi digital 90 juta anak muda Indonesia', icon: FiUsers, action: '#ch152', type: 'navigate', kategori: 'chapter', tag: ['generasi', 'digital'] },
  { id: 'ch153', label: 'Ch.153 Filosofi Developer', desc: 'Stoicism, Kaizen, Wabi-Sabi, Growth Mindset untuk dev', icon: FiCompass, action: '#ch153', type: 'navigate', kategori: 'chapter', tag: ['filosofi', 'stoicism'] },
  { id: 'ch154', label: 'Ch.154 Diversity Tech untuk Semua', desc: 'Women in tech, aksesibilitas WCAG, neurodiversity', icon: FiUsers, action: '#ch154', type: 'navigate', kategori: 'chapter', tag: ['diversity', 'aksesibilitas'] },
  { id: 'ch155', label: 'Ch.155 Digital Citizenship', desc: 'Privasi online, verifikasi informasi, digital footprint', icon: FiGlobe, action: '#ch155', type: 'navigate', kategori: 'chapter', tag: ['digital citizenship', 'privasi'] },
  { id: 'ch156', label: 'Ch.156 Inovasi Lokal Indonesia', desc: '6 masalah Indonesia yang butuh solusi tech lokal', icon: FiGlobe, action: '#ch156', type: 'navigate', kategori: 'chapter', tag: ['lokal', 'indonesia'] },
  { id: 'ch157', label: 'Ch.157 Generasi Alpha Era AI', desc: 'Gen Alpha sebagai AI native, kurikulum era AI', icon: FiCpu, action: '#ch157', type: 'navigate', kategori: 'chapter', tag: ['generasi alpha', 'ai native'] },
  { id: 'ch158', label: 'Ch.158 Teknologi dan Spiritualitas', desc: 'Quran digital, AR Qibla, halal tech, etika Islam AI', icon: FiCompass, action: '#ch158', type: 'navigate', kategori: 'chapter', tag: ['spiritual', 'islam', 'halal tech'] },
  { id: 'ch159', label: 'Ch.159 Kearifan Lokal Digital', desc: 'Wayang NFT, aksara daerah digital, musik tradisional AI', icon: FiStar, action: '#ch159', type: 'navigate', kategori: 'chapter', tag: ['kearifan lokal', 'budaya'] },
  { id: 'ch160', label: 'Ch.160 Sejarah Computing', desc: 'Turing 1936 sampai GPT hingga Gelar.id 2026', icon: FiBook, action: '#ch160', type: 'navigate', kategori: 'chapter', tag: ['sejarah', 'computing', 'turing'] },
  { id: 'ch163', label: 'Ch.163 Satu Tahun Gelar.id', desc: 'Target: 5000 user, 20 kursus, 200 alumni dapat kerja', icon: FiTrendingUp, action: '#ch163', type: 'navigate', kategori: 'chapter', tag: ['kvtkom', '1 tahun', 'target'] },
  { id: 'ch164', label: 'Ch.164 Pesan Generasi Berikutnya', desc: 'Surat untuk developer 2030, akademisi, pembuat kebijakan', icon: FiBook, action: '#ch164', type: 'navigate', kategori: 'chapter', tag: ['generasi', 'pesan', '2030'] },
  { id: 'ch165', label: 'Ch.165 Syukur atas Pengalaman', desc: 'Syukur atas internet gratis, komunitas OSS, setiap error', icon: FiHeart, action: '#ch165', type: 'navigate', kategori: 'chapter', tag: ['syukur', 'gratitude', 'pengalaman'] },
  { id: 'ch166', label: 'Ch.166 8 Pelajaran Terbesar Hidup', desc: 'Konsistensi, proyek nyata, komunitas, done > perfect', icon: FiCompass, action: '#ch166', type: 'navigate', kategori: 'chapter', tag: ['pelajaran', 'wisdom'] },
  { id: 'ch167', label: 'Ch.167 Salam dari Jember', desc: 'Jember: tembakau, kampus, kuliner, potensi digital muda', icon: FiGlobe, action: '#ch167', type: 'navigate', kategori: 'chapter', tag: ['jember', 'bangga'] },
  { id: 'ch168', label: 'Ch.168 Kata-Kata Pamungkas', desc: '5 kutipan yang menemani perjalanan developer', icon: FiBook, action: '#ch168', type: 'navigate', kategori: 'chapter', tag: ['kutipan', 'quotes'] },
  { id: 'ch169', label: 'Ch.169 Apresiasi Terima Kasih Tulus', desc: 'Apresiasi ke orang tua, dosen, komunitas, pembaca', icon: FiHeart, action: '#ch169', type: 'navigate', kategori: 'chapter', tag: ['apresiasi', 'terima kasih'] },
  { id: 'ch172', label: 'Ch.172 Micro-Interactions Demo', desc: 'Demo live: like button, copy button, progress bar', icon: FiZap, action: '#ch172', type: 'navigate', kategori: 'chapter', tag: ['micro interaction', 'ux'] },
  { id: 'ch173', label: 'Ch.173 Dark Mode dan Tema', desc: 'Toggle dark/light mode, sistem warna, WCAG', icon: FiStar, action: '#ch173', type: 'navigate', kategori: 'chapter', tag: ['dark mode', 'tema', 'warna'] },
  { id: 'ch175', label: 'Ch.175 API dan Integrasi Tab Demo', desc: 'REST, GraphQL, WebSocket, Webhook dengan tab interaktif', icon: FiLayers, action: '#ch175', type: 'navigate', kategori: 'chapter', tag: ['api', 'integrasi', 'rest'] },
  { id: 'ch176', label: 'Ch.176 8 Tips Developer Produktif', desc: 'Deep work, rubber duck debugging, commit kecil', icon: FiTarget, action: '#ch176', type: 'navigate', kategori: 'chapter', tag: ['tips', 'produktif'] },
  { id: 'ch177', label: 'Ch.177 Database Fondasi Teknis', desc: 'SQL vs NoSQL perbandingan, tips optimasi query', icon: FiLayers, action: '#ch177', type: 'navigate', kategori: 'chapter', tag: ['database', 'sql', 'nosql'] },
  { id: 'ch179', label: 'Ch.179 Karir Developer Roadmap Expert', desc: 'Junior ke Mid ke Senior ke Staff+ tiap level skill', icon: FiTrendingUp, action: '#ch179', type: 'navigate', kategori: 'chapter', tag: ['karir', 'roadmap', 'level'] },
  { id: 'ch180', label: 'Ch.180 Bersambung Masih Banyak Cerita', desc: 'Penutup arc 1-180 dengan counter animasi dan CTA', icon: FiBook, action: '#ch180', type: 'navigate', kategori: 'chapter', tag: ['bersambung', 'penutup'] },
  // GrupBab4 — Ch46-55
  { id: 'ch46', label: 'Ch.46 Motivasi Harian', desc: 'Quotes dan sumber energi harian developer', icon: FiZap, action: '#ch46', type: 'navigate', kategori: 'chapter', tag: ['motivasi', 'quotes', 'semangat'] },
  { id: 'ch47', label: 'Ch.47 Belajar dari Kegagalan', desc: '5 kegagalan nyata dan pelajarannya', icon: FiTarget, action: '#ch47', type: 'navigate', kategori: 'chapter', tag: ['kegagalan', 'belajar', 'bangkit'] },
  { id: 'ch48', label: 'Ch.48 Kolaborasi Global — Ekspansi Proyek', desc: 'Rencana ekspansi proyek ke ASEAN dan dunia', icon: FiGlobe, action: '#ch48', type: 'navigate', kategori: 'chapter', tag: ['global', 'ekspansi', 'asean'] },
  { id: 'ch49', label: 'Ch.49 Masa Depan Teknologi', desc: 'Web3, edge computing, AR, quantum, AI agent', icon: FiCompass, action: '#ch49', type: 'navigate', kategori: 'chapter', tag: ['masa depan', 'web3', 'quantum'] },
  { id: 'ch51', label: 'Ch.51 Rasa Syukur — Terima Kasih', desc: 'Apresiasi ke keluarga, dosen, komunitas, pengguna', icon: FiHeart, action: '#ch51', type: 'navigate', kategori: 'chapter', tag: ['syukur', 'terima kasih', 'keluarga'] },
  { id: 'ch52', label: 'Ch.52 UMKM Goes Digital', desc: '65 juta UMKM Indonesia butuh transformasi digital', icon: FiTrendingUp, action: '#ch52', type: 'navigate', kategori: 'chapter', tag: ['umkm', 'digital', 'bisnis'] },
  { id: 'ch53', label: 'Ch.53 Smart City — Kontribusi Jember', desc: 'Kontribusi Rizki untuk Smart City Jember', icon: FiGlobe, action: '#ch53', type: 'navigate', kategori: 'chapter', tag: ['smart city', 'jember', 'kontribusi'] },
  { id: 'ch54', label: 'Ch.54 Keluarga — Fondasi Segalanya', desc: 'Keluarga sebagai motivasi utama berkarya', icon: FiHeart, action: '#ch54', type: 'navigate', kategori: 'chapter', tag: ['keluarga', 'motivasi', 'fondasi'] },
  // GrupBab5-9 — Ch56-100
  { id: 'ch56', label: 'Ch.56 Warisan Digital', desc: 'Apa yang ditinggalkan untuk generasi mendatang', icon: FiStar, action: '#ch56', type: 'navigate', kategori: 'chapter', tag: ['warisan', 'generasi', 'digital'] },
  { id: 'ch57', label: 'Ch.57 Inovasi Tanpa Henti', desc: 'The next big things yang ingin dibangun', icon: FiZap, action: '#ch57', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'next big thing'] },
  { id: 'ch59', label: 'Ch.59 Pesan untuk Developer Muda', desc: 'Surat terbuka untuk junior developer Indonesia', icon: FiBook, action: '#ch59', type: 'navigate', kategori: 'chapter', tag: ['developer muda', 'pesan', 'junior'] },
  { id: 'ch61', label: 'Ch.61 The Penultimate Chapter', desc: 'Satu langkah sebelum final arc pertama', icon: FiCompass, action: '#ch61', type: 'navigate', kategori: 'chapter', tag: ['penultimate', 'menuju', 'finale'] },
  { id: 'ch63', label: 'Ch.63 Duel Monsters: Yugioh!', desc: 'Strategi berpikir dari game kartu Yugioh', icon: FiStar, action: '#ch63', type: 'navigate', kategori: 'chapter', tag: ['game', 'yugioh', 'strategi'] },
  { id: 'ch64', label: 'Ch.64 Master Strategi dan Taktik', desc: 'Game strategi sebagai pelatihan logika', icon: FiTarget, action: '#ch64', type: 'navigate', kategori: 'chapter', tag: ['strategi', 'taktik', 'game'] },
  { id: 'ch65', label: 'Ch.65 Kingdom Builder', desc: 'City-building dan pelajaran kepemimpinan', icon: FiCompass, action: '#ch65', type: 'navigate', kategori: 'chapter', tag: ['game', 'kingdom', 'kepemimpinan'] },
  { id: 'ch66', label: 'Ch.66 Dragon Quest dan Petualangan Epik', desc: 'RPG dan perjalanan hero kehidupan nyata', icon: FiStar, action: '#ch66', type: 'navigate', kategori: 'chapter', tag: ['game', 'rpg', 'petualangan'] },
  { id: 'ch67', label: 'Ch.67 Minecraft: Dunia Tanpa Batas', desc: 'Kreativitas tanpa batas dari game sandbox', icon: FiZap, action: '#ch67', type: 'navigate', kategori: 'chapter', tag: ['game', 'minecraft', 'kreativitas'] },
  { id: 'ch70', label: 'Ch.70 Wishlist dan Impian Gamer', desc: 'Daftar keinginan dan impian sebagai gamer', icon: FiStar, action: '#ch70', type: 'navigate', kategori: 'chapter', tag: ['game', 'wishlist', 'impian'] },
  { id: 'ch72', label: 'Ch.72 Coding with Music', desc: 'Musik sebagai soundtrack produktivitas coding', icon: FiStar, action: '#ch72', type: 'navigate', kategori: 'chapter', tag: ['musik', 'produktivitas', 'coding'] },
  { id: 'ch73', label: 'Ch.73 Perpustakaan Digital', desc: 'Sumber ilmu dan referensi favorit developer', icon: FiBook, action: '#ch73', type: 'navigate', kategori: 'chapter', tag: ['belajar', 'buku', 'referensi'] },
  { id: 'ch74', label: 'Ch.74 Kreativitas — Sisi Lain Developer', desc: 'Seni, musik, kreativitas di balik kode', icon: FiStar, action: '#ch74', type: 'navigate', kategori: 'chapter', tag: ['kreativitas', 'seni', 'hobi'] },
  { id: 'ch76', label: 'Ch.76 Impian Besar — Beyond the Horizon', desc: 'Mimpi yang melampaui batas yang ada', icon: FiCompass, action: '#ch76', type: 'navigate', kategori: 'chapter', tag: ['impian', 'mimpi', 'horizon'] },
  { id: 'ch77', label: 'Ch.77 Surat untuk Developer Muda', desc: 'Pesan dari developer yang pernah jadi pemula', icon: FiBook, action: '#ch77', type: 'navigate', kategori: 'chapter', tag: ['surat', 'developer muda', 'pesan'] },
  { id: 'ch78', label: 'Ch.78 IoT dari Barang Bekas', desc: 'Inovasi IoT dengan budget minimal', icon: FiZap, action: '#ch78', type: 'navigate', kategori: 'chapter', tag: ['iot', 'daur ulang', 'inovasi'] },
  { id: 'ch80', label: 'Ch.80 Terima Kasih Telah Membaca!', desc: 'Apresiasi untuk pembaca setia portfolio', icon: FiHeart, action: '#ch80', type: 'navigate', kategori: 'chapter', tag: ['terima kasih', 'pembaca'] },
  { id: 'ch83', label: 'Ch.83 Visi Pendidikan Digital Indonesia', desc: 'Platform edukasi untuk semua lapisan masyarakat', icon: FiBook, action: '#ch83', type: 'navigate', kategori: 'chapter', tag: ['pendidikan', 'digital', 'visi'] },
  { id: 'ch84', label: 'Ch.84 Penelitian dan Dunia Akademik', desc: 'Paper, jurnal, riset yang relevan industri', icon: FiBook, action: '#ch84', type: 'navigate', kategori: 'chapter', tag: ['penelitian', 'akademik', 'jurnal'] },
  { id: 'ch85', label: 'Ch.85 Keuangan Mahasiswa', desc: 'Manajemen keuangan cerdas untuk mahasiswa', icon: FiTrendingUp, action: '#ch85', type: 'navigate', kategori: 'chapter', tag: ['keuangan', 'mahasiswa', 'hemat'] },
  { id: 'ch86', label: 'Ch.86 Workflow Developer', desc: 'Tools, shortcut, dan kebiasaan produktif', icon: FiCode, action: '#ch86', type: 'navigate', kategori: 'chapter', tag: ['workflow', 'produktivitas', 'tools'] },
  { id: 'ch87', label: 'Ch.87 Organisasi dan Pengalaman Nyata', desc: 'Kegiatan ekskul dan organisasi kampus', icon: FiUsers, action: '#ch87', type: 'navigate', kategori: 'chapter', tag: ['organisasi', 'ekskul', 'pengalaman'] },
  { id: 'ch89', label: 'Ch.89 Mentor dan Inspirasi', desc: 'Taylor Otwell, Linus Torvalds, Vercel Team', icon: FiStar, action: '#ch89', type: 'navigate', kategori: 'chapter', tag: ['mentor', 'inspirasi', 'laravel'] },
  { id: 'ch90', label: 'Ch.90 Keluarga — Kekuatan di Balik Semua', desc: 'Dukungan keluarga dalam perjalanan berkarya', icon: FiHeart, action: '#ch90', type: 'navigate', kategori: 'chapter', tag: ['keluarga', 'dukungan', 'kekuatan'] },
  { id: 'ch91', label: 'Ch.91 Kehidupan Kampus', desc: 'Antara tugas kuliah dan mimpi startup', icon: FiBook, action: '#ch91', type: 'navigate', kategori: 'chapter', tag: ['kampus', 'kuliah', 'kehidupan'] },
  { id: 'ch92', label: 'Ch.92 Jember dan Kota Perjalanan', desc: 'Cerita tentang Jember dan kota dalam perjalanan', icon: FiGlobe, action: '#ch92', type: 'navigate', kategori: 'chapter', tag: ['jember', 'kota', 'perjalanan'] },
  { id: 'ch93', label: 'Ch.93 Budaya Digital Gen Z Developer', desc: 'Cara kerja dan berkarya developer Gen Z', icon: FiCode, action: '#ch93', type: 'navigate', kategori: 'chapter', tag: ['gen z', 'budaya', 'digital'] },
  { id: 'ch95', label: 'Ch.95 Kuliner dan Cerita Makan', desc: 'Sisi manusiawi: makanan favorit mahasiswa', icon: FiStar, action: '#ch95', type: 'navigate', kategori: 'chapter', tag: ['kuliner', 'makan', 'kehidupan'] },
  { id: 'ch96', label: 'Ch.96 Jejak Digital — Personal Branding', desc: 'Membangun reputasi online sejak dini', icon: FiUser, action: '#ch96', type: 'navigate', kategori: 'chapter', tag: ['branding', 'personal', 'reputasi'] },
  { id: 'ch97', label: 'Ch.97 Film dan Series Favorit Developer', desc: 'Film dan serial yang menginspirasi developer', icon: FiStar, action: '#ch97', type: 'navigate', kategori: 'chapter', tag: ['film', 'series', 'inspirasi'] },
  { id: 'ch98', label: 'Ch.98 Anime dan Inspirasi Developer', desc: 'Naruto, Haikyuu, SAO dan pelajaran hidupnya', icon: FiStar, action: '#ch98', type: 'navigate', kategori: 'chapter', tag: ['anime', 'naruto', 'inspirasi'] },
  { id: 'ch99', label: 'Ch.99 Kegagalan yang Mengajarkan', desc: 'Lessons hard learned dari proyek yang gagal', icon: FiTarget, action: '#ch99', type: 'navigate', kategori: 'chapter', tag: ['gagal', 'pelajaran', 'lessons learned'] },
  // GrupBab10-11 — Ch102-120
  { id: 'ch102', label: 'Ch.102 Machine Learning', desc: 'Supervised, unsupervised, reinforcement learning', icon: FiCpu, action: '#ch102', type: 'navigate', kategori: 'chapter', tag: ['ml', 'machine learning', 'data'] },
  { id: 'ch103', label: 'Ch.103 Cloud Computing', desc: 'AWS, GCP, Azure — pilih yang tepat', icon: FiGlobe, action: '#ch103', type: 'navigate', kategori: 'chapter', tag: ['cloud', 'aws', 'gcp'] },
  { id: 'ch105', label: 'Ch.105 Database Mastery', desc: 'Desain, optimasi, dan scaling database', icon: FiLayers, action: '#ch105', type: 'navigate', kategori: 'chapter', tag: ['database', 'mysql', 'optimasi'] },
  { id: 'ch108', label: 'Ch.108 Open Source — Kode untuk Dunia', desc: 'Membangun dan memelihara proyek open source', icon: FiGithub, action: '#ch108', type: 'navigate', kategori: 'chapter', tag: ['open source', 'github', 'kontribusi'] },
  { id: 'ch109', label: 'Ch.109 UI/UX — Desain yang Manusiawi', desc: 'Aksesibilitas, UX research, design system', icon: FiStar, action: '#ch109', type: 'navigate', kategori: 'chapter', tag: ['uiux', 'desain', 'aksesibilitas'] },
  { id: 'ch111', label: 'Ch.111 Warisan Digital — Apa yang Kutinggalkan', desc: 'Dampak jangka panjang dari karya digital', icon: FiStar, action: '#ch111', type: 'navigate', kategori: 'chapter', tag: ['warisan', 'dampak', 'legacy'] },
  { id: 'ch112', label: 'Ch.112 Sosial dan Dampak Nyata Teknologi', desc: 'Mengukur dampak sosial dari teknologi', icon: FiHeart, action: '#ch112', type: 'navigate', kategori: 'chapter', tag: ['sosial', 'dampak', 'teknologi'] },
  { id: 'ch113', label: 'Ch.113 Nilai dan Prinsip Hidup Developer', desc: 'Etika, integritas, dan nilai dalam berkarya', icon: FiCompass, action: '#ch113', type: 'navigate', kategori: 'chapter', tag: ['nilai', 'etika', 'prinsip'] },
  { id: 'ch114', label: 'Ch.114 Surat — Pesan untuk Mereka', desc: 'Surat terbuka ke berbagai pihak', icon: FiBook, action: '#ch114', type: 'navigate', kategori: 'chapter', tag: ['surat', 'pesan', 'terbuka'] },
  { id: 'ch115', label: 'Ch.115 Mimpi yang Belum Terwujud', desc: 'Bucket list developer — impian masa depan', icon: FiStar, action: '#ch115', type: 'navigate', kategori: 'chapter', tag: ['mimpi', 'bucket list', 'impian'] },
  { id: 'ch116', label: 'Ch.116 Refleksi — Cermin Perjalanan Ini', desc: 'Melihat kembali seluruh perjalanan hidup', icon: FiCompass, action: '#ch116', type: 'navigate', kategori: 'chapter', tag: ['refleksi', 'perjalanan', 'introspeksi'] },
  { id: 'ch117', label: 'Ch.117 Indonesia Digital — Peran Kita', desc: 'Kontribusi developer untuk kemajuan Indonesia', icon: FiGlobe, action: '#ch117', type: 'navigate', kategori: 'chapter', tag: ['indonesia', 'kontribusi', 'developer'] },
  { id: 'ch119', label: 'Ch.119 Epilog Agung', desc: 'Sebelum chapter terakhir arc pertama', icon: FiBook, action: '#ch119', type: 'navigate', kategori: 'chapter', tag: ['epilog', 'akhir arc', 'finale'] },
  { id: 'ch120', label: 'Ch.120 Bersambung...', desc: 'The end is the beginning — arc baru dimulai', icon: FiZap, action: '#ch120', type: 'navigate', kategori: 'chapter', tag: ['bersambung', 'arc baru', 'kelanjutan'] },
  // GrupBab12-17 tambahan
  { id: 'ch122', label: 'Ch.122 Robotik — Membuat yang Tidak Mungkin', desc: 'Robot DIY dari bahan bekas dengan Arduino', icon: FiZap, action: '#ch122', type: 'navigate', kategori: 'chapter', tag: ['robotik', 'arduino', 'diy'] },
  { id: 'ch123', label: 'Ch.123 AR dan VR — Dunia yang Diperluas', desc: 'WebAR, WebXR, AR edukasi, VR gaming', icon: FiStar, action: '#ch123', type: 'navigate', kategori: 'chapter', tag: ['ar', 'vr', 'augmented reality'] },
  { id: 'ch125', label: 'Ch.125 Kendaraan Otonom', desc: 'Self-driving car dan tantangan di Indonesia', icon: FiCompass, action: '#ch125', type: 'navigate', kategori: 'chapter', tag: ['self driving', 'kendaraan', 'ai'] },
  { id: 'ch126', label: 'Ch.126 Bioinformatika', desc: 'Genome sequencing, AlphaFold, drug discovery AI', icon: FiCpu, action: '#ch126', type: 'navigate', kategori: 'chapter', tag: ['bioinformatika', 'genome', 'dna'] },
  { id: 'ch127', label: 'Ch.127 Energi Hijau dan Green Coding', desc: 'Solar grid cerdas, green coding, sustainability', icon: FiGlobe, action: '#ch127', type: 'navigate', kategori: 'chapter', tag: ['energi hijau', 'solar', 'sustainability'] },
  { id: 'ch129', label: 'Ch.129 Space Tech', desc: 'Satellite software, earth observation, LAPAN', icon: FiStar, action: '#ch129', type: 'navigate', kategori: 'chapter', tag: ['space', 'satellite', 'lapan'] },
  { id: 'ch130', label: 'Ch.130 Neurotech — Interface Otak Komputer', desc: 'BCI, paralysis recovery, etika neural interface', icon: FiCpu, action: '#ch130', type: 'navigate', kategori: 'chapter', tag: ['neurotech', 'bci', 'otak'] },
  { id: 'ch132', label: 'Ch.132 Kolaborasi Global — Remote Work', desc: 'Panduan praktis bekerja lintas negara secara remote', icon: FiGlobe, action: '#ch132', type: 'navigate', kategori: 'chapter', tag: ['remote work', 'global', 'async'] },
  { id: 'ch133', label: 'Ch.133 Teknologi dan Lingkungan', desc: 'Ocean monitoring, deforestation alert, hutan RI', icon: FiGlobe, action: '#ch133', type: 'navigate', kategori: 'chapter', tag: ['lingkungan', 'ocean', 'deforestasi'] },
  { id: 'ch134', label: 'Ch.134 Healthtech — Inovasi Kesehatan', desc: 'Telemedicine, AI diagnosis, wearable health', icon: FiHeart, action: '#ch134', type: 'navigate', kategori: 'chapter', tag: ['healthtech', 'kesehatan', 'ai'] },
  { id: 'ch136', label: 'Ch.136 Edtech Inovatif', desc: 'Adaptive learning, gamified, VR learning', icon: FiBook, action: '#ch136', type: 'navigate', kategori: 'chapter', tag: ['edtech', 'adaptive', 'gamified'] },
  { id: 'ch137', label: 'Ch.137 Ekonomi Kreatif', desc: 'NFT, content creator, game dev, UI/UX freelance', icon: FiStar, action: '#ch137', type: 'navigate', kategori: 'chapter', tag: ['kreatif', 'nft', 'content creator'] },
  { id: 'ch138', label: 'Ch.138 Smart City Komprehensif', desc: 'Smart traffic, waste, parkir, city dashboard Jember 2030', icon: FiGlobe, action: '#ch138', type: 'navigate', kategori: 'chapter', tag: ['smart city', 'traffic', 'dashboard'] },
  { id: 'ch139', label: 'Ch.139 Supply Chain Tech', desc: 'Blockchain provenance, digital twin factory, pangan RI', icon: FiLayers, action: '#ch139', type: 'navigate', kategori: 'chapter', tag: ['supply chain', 'blockchain', 'logistik'] },
  { id: 'ch141', label: 'Ch.141 Seni Digital', desc: 'Generative art, pixel art, AI art, interactive installation', icon: FiStar, action: '#ch141', type: 'navigate', kategori: 'chapter', tag: ['seni digital', 'generative', 'pixel art'] },
  { id: 'ch142', label: 'Ch.142 Musik dan Teknologi', desc: 'DAW, AI music generation, voice cloning, live coding', icon: FiStar, action: '#ch142', type: 'navigate', kategori: 'chapter', tag: ['musik', 'daw', 'ai music'] },
  { id: 'ch143', label: 'Ch.143 Content Creator Tech', desc: 'Canva, CapCut, OBS, Descript, Buffer — tools kreator', icon: FiCode, action: '#ch143', type: 'navigate', kategori: 'chapter', tag: ['content creator', 'tools', 'monetisasi'] },
  { id: 'ch144', label: 'Ch.144 Algoritma Sosial Media', desc: 'TikTok, LinkedIn, Instagram, YouTube, Twitter algorithm', icon: FiTrendingUp, action: '#ch144', type: 'navigate', kategori: 'chapter', tag: ['sosial media', 'algoritma', 'tiktok'] },
  { id: 'ch145', label: 'Ch.145 Podcast dan Audio', desc: 'Setup minimal, AI transcript, analytics Spotify', icon: FiStar, action: '#ch145', type: 'navigate', kategori: 'chapter', tag: ['podcast', 'audio', 'spotify'] },
  { id: 'ch146', label: 'Ch.146 Fashion Tech', desc: 'AR try-on, AI stylist, sustainable fashion tech', icon: FiStar, action: '#ch146', type: 'navigate', kategori: 'chapter', tag: ['fashion', 'ar', 'sustainable'] },
  { id: 'ch147', label: 'Ch.147 Sport Tech', desc: 'Football analytics, e-sports Indonesia, VAR, pose estimation', icon: FiTarget, action: '#ch147', type: 'navigate', kategori: 'chapter', tag: ['sport', 'esports', 'analytics'] },
  { id: 'ch148', label: 'Ch.148 Kuliner Tech', desc: 'Food delivery ML, kitchen robot, food waste AI', icon: FiStar, action: '#ch148', type: 'navigate', kategori: 'chapter', tag: ['kuliner', 'food delivery', 'ai'] },
  { id: 'ch149', label: 'Ch.149 Transportasi Digital', desc: 'Ride-hailing AI, EV charging network, predictive maintenance', icon: FiCompass, action: '#ch149', type: 'navigate', kategori: 'chapter', tag: ['transportasi', 'gojek', 'ev'] },
  { id: 'ch151', label: 'Ch.151 Kepemimpinan Tech', desc: 'Tech Lead, Engineering Manager, CTO journey', icon: FiCompass, action: '#ch151', type: 'navigate', kategori: 'chapter', tag: ['kepemimpinan', 'tech lead', 'cto'] },
  { id: 'ch152', label: 'Ch.152 Generasi Bangsa', desc: 'Literasi digital 90 juta anak muda, gap gender di tech', icon: FiUsers, action: '#ch152', type: 'navigate', kategori: 'chapter', tag: ['generasi', 'digital', 'indonesia'] },
  { id: 'ch153', label: 'Ch.153 Filosofi Developer', desc: 'Stoicism, Kaizen, First Principles, Wabi-Sabi, Ubuntu', icon: FiCompass, action: '#ch153', type: 'navigate', kategori: 'chapter', tag: ['filosofi', 'stoicism', 'kaizen'] },
  { id: 'ch154', label: 'Ch.154 Diversity — Tech untuk Semua', desc: 'Women in tech, aksesibilitas WCAG, neurodiversity', icon: FiUsers, action: '#ch154', type: 'navigate', kategori: 'chapter', tag: ['diversity', 'aksesibilitas', 'inklusif'] },
  { id: 'ch155', label: 'Ch.155 Digital Citizenship', desc: 'Privasi online, verifikasi informasi, digital footprint', icon: FiGlobe, action: '#ch155', type: 'navigate', kategori: 'chapter', tag: ['digital citizenship', 'privasi', 'etika'] },
  { id: 'ch156', label: 'Ch.156 Inovasi Lokal Indonesia', desc: '6 masalah Indonesia yang butuh solusi tech lokal', icon: FiGlobe, action: '#ch156', type: 'navigate', kategori: 'chapter', tag: ['lokal', 'indonesia', 'solusi'] },
  { id: 'ch157', label: 'Ch.157 Generasi Alpha di Era AI', desc: 'Gen Alpha sebagai AI native, kurikulum baru era AI', icon: FiCpu, action: '#ch157', type: 'navigate', kategori: 'chapter', tag: ['generasi alpha', 'ai native', 'anak'] },
  { id: 'ch158', label: 'Ch.158 Teknologi dan Spiritualitas', desc: 'Quran digital, AR Qibla, halal tech, etika Islam dan AI', icon: FiCompass, action: '#ch158', type: 'navigate', kategori: 'chapter', tag: ['spiritual', 'islam', 'halal tech'] },
  { id: 'ch159', label: 'Ch.159 Kearifan Lokal Digital', desc: 'Wayang NFT, aksara daerah digital, musik tradisional AI', icon: FiStar, action: '#ch159', type: 'navigate', kategori: 'chapter', tag: ['kearifan lokal', 'budaya', 'digitalisasi'] },
  { id: 'ch160', label: 'Ch.160 Sejarah Computing', desc: 'Turing 1936, ARPANET, WWW, Laravel, GPT hingga Gelar.id', icon: FiBook, action: '#ch160', type: 'navigate', kategori: 'chapter', tag: ['sejarah', 'computing', 'turing'] },
  { id: 'ch163', label: 'Ch.163 Satu Tahun Gelar.id', desc: 'Target: 5000 user, 20 kursus, 200 alumni dapat kerja', icon: FiTrendingUp, action: '#ch163', type: 'navigate', kategori: 'chapter', tag: ['kvtkom', '1 tahun', 'target'] },
  { id: 'ch164', label: 'Ch.164 Pesan untuk Generasi Berikutnya', desc: 'Surat untuk developer 2030, akademisi, pembuat kebijakan', icon: FiBook, action: '#ch164', type: 'navigate', kategori: 'chapter', tag: ['generasi', 'pesan', '2030'] },
  { id: 'ch165', label: 'Ch.165 Syukur — Bersyukur atas Pengalaman', desc: 'Syukur atas internet gratis, komunitas OSS, setiap error', icon: FiHeart, action: '#ch165', type: 'navigate', kategori: 'chapter', tag: ['syukur', 'gratitude', 'pengalaman'] },
  { id: 'ch166', label: 'Ch.166 8 Pelajaran Terbesar Hidup', desc: 'Konsistensi, proyek nyata, komunitas, done lebih baik dari perfect', icon: FiCompass, action: '#ch166', type: 'navigate', kategori: 'chapter', tag: ['pelajaran', 'wisdom', 'hidup'] },
  { id: 'ch167', label: 'Ch.167 Salam dari Jember', desc: 'Jember: tembakau, kampus, kuliner, potensi digital muda', icon: FiGlobe, action: '#ch167', type: 'navigate', kategori: 'chapter', tag: ['jember', 'bangga', 'kota'] },
  { id: 'ch168', label: 'Ch.168 Kata-Kata Pamungkas', desc: '5 kutipan yang menemani perjalanan developer', icon: FiBook, action: '#ch168', type: 'navigate', kategori: 'chapter', tag: ['kutipan', 'quotes', 'pamungkas'] },
  { id: 'ch169', label: 'Ch.169 Apresiasi — Terima Kasih Tulus', desc: 'Apresiasi ke orang tua, dosen, komunitas, pembaca', icon: FiHeart, action: '#ch169', type: 'navigate', kategori: 'chapter', tag: ['apresiasi', 'terima kasih', 'tulus'] },
  { id: 'ch172', label: 'Ch.172 Micro-Interactions', desc: 'Demo live: like button, copy button, progress bar animasi', icon: FiZap, action: '#ch172', type: 'navigate', kategori: 'chapter', tag: ['micro interaction', 'ux', 'animasi'] },
  { id: 'ch173', label: 'Ch.173 Dark Mode dan Tema', desc: 'Toggle dark/light mode, sistem warna, WCAG', icon: FiStar, action: '#ch173', type: 'navigate', kategori: 'chapter', tag: ['dark mode', 'tema', 'warna'] },
  { id: 'ch175', label: 'Ch.175 API dan Integrasi', desc: 'REST, GraphQL, WebSocket, Webhook dengan tab demo', icon: FiLayers, action: '#ch175', type: 'navigate', kategori: 'chapter', tag: ['api', 'integrasi', 'rest'] },
  { id: 'ch176', label: 'Ch.176 8 Tips Developer Produktif', desc: 'Deep work, rubber duck debugging, commit kecil, dokumentasi', icon: FiTarget, action: '#ch176', type: 'navigate', kategori: 'chapter', tag: ['tips', 'produktif', 'deep work'] },
  { id: 'ch177', label: 'Ch.177 Database — Fondasi Teknis Mendalam', desc: 'SQL vs NoSQL perbandingan, tips optimasi query, migration', icon: FiLayers, action: '#ch177', type: 'navigate', kategori: 'chapter', tag: ['database', 'sql', 'nosql'] },
  { id: 'ch179', label: 'Ch.179 Karir Developer — Roadmap Expert', desc: 'Junior ke Mid ke Senior ke Staff+ dengan skill tiap level', icon: FiTrendingUp, action: '#ch179', type: 'navigate', kategori: 'chapter', tag: ['karir', 'roadmap', 'level'] },
  { id: 'ch180', label: 'Ch.180 Bersambung — Masih Banyak Cerita', desc: 'Penutup arc 1-180 dengan counter animasi dan CTA', icon: FiBook, action: '#ch180', type: 'navigate', kategori: 'chapter', tag: ['bersambung', 'penutup', 'kelanjutan'] },
  { id: 'ch50', label: 'Ch.50 Milestone 50 Chapter', desc: 'Refleksi perjalanan 50 chapter pertama', icon: FiBook, action: '#ch50', type: 'navigate', kategori: 'chapter', tag: ['milestone', 'refleksi'] },
  { id: 'ch55', label: 'Ch.55 Siapa Rizki Habibi?', desc: 'Identitas dan refleksi diri mendalam', icon: FiUser, action: '#ch55', type: 'navigate', kategori: 'chapter', tag: ['identitas', 'profil', 'rizki'] },
  { id: 'ch60', label: 'Ch.60 Indonesia Digital Future', desc: 'Visi Indonesia di era digital', icon: FiGlobe, action: '#ch60', type: 'navigate', kategori: 'chapter', tag: ['indonesia', 'digital', 'masa depan'] },
  // GrupBab 6-9 " Ch62-100
  { id: 'ch62', label: 'Ch.62 Game Life: Pokemon GO', desc: 'AR gaming dan dampak teknologi', icon: FiZap, action: '#ch62', type: 'navigate', kategori: 'chapter', tag: ['game', 'pokemon', 'ar'] },
  { id: 'ch69', label: 'Ch.69 Game = Coding Pertamaku', desc: 'Game sebagai gateway ke programming', icon: FiCode, action: '#ch69', type: 'navigate', kategori: 'chapter', tag: ['game', 'coding', 'belajar'] },
  { id: 'ch71', label: 'Ch.71 Developer Sehat', desc: 'Kesehatan fisik dan mental developer', icon: FiHeart, action: '#ch71', type: 'navigate', kategori: 'chapter', tag: ['kesehatan', 'mental', 'fisik'] },
  { id: 'ch75', label: 'Ch.75 Komunitas', desc: 'Power of developer community', icon: FiUsers, action: '#ch75', type: 'navigate', kategori: 'chapter', tag: ['komunitas', 'bersama', 'networking'] },
  { id: 'ch81', label: 'Ch.81 Skripsi Fighter', desc: 'Perjuangan menyelesaikan tugas akhir', icon: FiBook, action: '#ch81', type: 'navigate', kategori: 'chapter', tag: ['skripsi', 'kampus', 'akademik'] },
  { id: 'ch82', label: 'Ch.82 Gelar.id Platform', desc: 'Sistem informasi kampus digital', icon: FiGlobe, action: '#ch82', type: 'navigate', kategori: 'chapter', tag: ['kvtkom', 'kampus', 'platform'] },
  { id: 'ch88', label: 'Ch.88 Asal Mula Coding', desc: 'Kisah pertama kali belajar coding', icon: FiCode, action: '#ch88', type: 'navigate', kategori: 'chapter', tag: ['asal', 'coding', 'pertama kali'] },
  { id: 'ch94', label: 'Ch.94 Burnout & Bangkit', desc: 'Mengatasi kelelahan mental developer', icon: FiHeart, action: '#ch94', type: 'navigate', kategori: 'chapter', tag: ['burnout', 'bangkit', 'mental'] },
  { id: 'ch100', label: 'Ch.100 Milestone 100 Chapter!', desc: 'Merayakan 100 chapter dengan refleksi', icon: FiStar, action: '#ch100', type: 'navigate', kategori: 'chapter', tag: ['100', 'milestone', 'spesial'] },
  // GrupBab 10-17 " Ch101-180
  { id: 'ch101', label: 'Ch.101 AI Tools Modern', desc: 'ChatGPT, Copilot, Midjourney dalam workflow', icon: FiCpu, action: '#ch101', type: 'navigate', kategori: 'chapter', tag: ['ai', 'chatgpt', 'copilot'] },
  { id: 'ch104', label: 'Ch.104 Cyber Security', desc: 'OWASP Top 10 dan keamanan aplikasi', icon: FiTarget, action: '#ch104', type: 'navigate', kategori: 'chapter', tag: ['security', 'owasp', 'keamanan'] },
  { id: 'ch106', label: 'Ch.106 Clean Code', desc: 'Prinsip SOLID, DRY, kode yang bisa dibaca', icon: FiCode, action: '#ch106', type: 'navigate', kategori: 'chapter', tag: ['clean code', 'solid', 'dry'] },
  { id: 'ch107', label: 'Ch.107 API Design', desc: 'REST, GraphQL, WebSocket best practices', icon: FiLayers, action: '#ch107', type: 'navigate', kategori: 'chapter', tag: ['api', 'rest', 'graphql'] },
  { id: 'ch110', label: 'Ch.110 Web3 & Blockchain', desc: 'Smart contract, DeFi, NFT, DAO', icon: FiGlobe, action: '#ch110', type: 'navigate', kategori: 'chapter', tag: ['web3', 'blockchain', 'defi', 'nft'] },
  { id: 'ch118', label: 'Ch.118 Roadmap 2026"2030', desc: 'Peta jalan besar menuju masa depan', icon: FiCompass, action: '#ch118', type: 'navigate', kategori: 'chapter', tag: ['roadmap', '2030', 'rencana'] },
  { id: 'ch121', label: 'Ch.121 Smart Home', desc: 'Otomasi rumah dengan IoT', icon: FiZap, action: '#ch121', type: 'navigate', kategori: 'chapter', tag: ['smart home', 'iot', 'otomasi'] },
  { id: 'ch124', label: 'Ch.124 Quantum Computing', desc: 'Batas komputasi baru', icon: FiCpu, action: '#ch124', type: 'navigate', kategori: 'chapter', tag: ['quantum', 'komputasi', 'fisika'] },
  { id: 'ch128', label: 'Ch.128 Fintech', desc: 'Revolusi keuangan digital', icon: FiTrendingUp, action: '#ch128', type: 'navigate', kategori: 'chapter', tag: ['fintech', 'keuangan', 'digital'] },
  { id: 'ch131', label: 'Ch.131 Wirausaha Sosial', desc: 'Bisnis yang berdampak positif', icon: FiHeart, action: '#ch131', type: 'navigate', kategori: 'chapter', tag: ['sosial', 'wirausaha', 'bisnis'] },
  { id: 'ch135', label: 'Ch.135 Agritech', desc: 'Revolusi pertanian digital', icon: FiGlobe, action: '#ch135', type: 'navigate', kategori: 'chapter', tag: ['agritech', 'pertanian', 'digital'] },
  { id: 'ch140', label: 'Ch.140 Mental Health Tech', desc: 'Teknologi untuk kesehatan jiwa', icon: FiHeart, action: '#ch140', type: 'navigate', kategori: 'chapter', tag: ['mental health', 'kesehatan', 'jiwa'] },
  { id: 'ch150', label: 'Ch.150 Masa Depan Pekerjaan', desc: 'Pekerjaan 2030 di era AI', icon: FiTrendingUp, action: '#ch150', type: 'navigate', kategori: 'chapter', tag: ['kerja', 'masa depan', '2030'] },
  { id: 'ch161', label: 'Ch.161 100 Hari Produktif', desc: 'Challenge produktivitas 100 hari', icon: FiTarget, action: '#ch161', type: 'navigate', kategori: 'chapter', tag: ['produktivitas', '100 hari', 'challenge'] },
  { id: 'ch162', label: 'Ch.162 Proyek Impian 2027', desc: 'Visi proyek yang menanti', icon: FiStar, action: '#ch162', type: 'navigate', kategori: 'chapter', tag: ['impian', '2027', 'visi'] },
  { id: 'ch170', label: 'Ch.170 The Grand Finale', desc: 'Sampai berjumpa lagi!', icon: FiBook, action: '#ch170', type: 'navigate', kategori: 'chapter', tag: ['finale', 'penutup', 'akhir'] },
  { id: 'ch171', label: 'Ch.171 Animasi Web', desc: 'Teknik animasi dan Framer Motion', icon: FiZap, action: '#ch171', type: 'navigate', kategori: 'chapter', tag: ['animasi', 'framer motion', 'css'] },
  { id: 'ch174', label: 'Ch.174 Performa Web', desc: 'Core Web Vitals, optimasi Next.js', icon: FiTrendingUp, action: '#ch174', type: 'navigate', kategori: 'chapter', tag: ['performa', 'core web vitals', 'optimasi'] },
  { id: 'ch178', label: 'Ch.178 Keamanan Aplikasi Web', desc: 'SQL injection, XSS, CSRF dan pencegahan', icon: FiTarget, action: '#ch178', type: 'navigate', kategori: 'chapter', tag: ['keamanan', 'xss', 'sql injection'] },
  // GrupBab 18-25 " 200 Inovasi
  { id: 'ch181', label: 'Ch.181 Inovasi: Edukasi Digital', desc: '200 Inovasi #001"025: AI Tutor, Gamifikasi', icon: FiBook, action: '#ch181', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'edukasi', 'ai tutor'] },
  { id: 'ch182', label: 'Ch.182 Inovasi: Platform & Produk', desc: '200 Inovasi #026"050: Website Desa SaaS', icon: FiFolder, action: '#ch182', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'platform', 'saas'] },
  { id: 'ch183', label: 'Ch.183 Inovasi: IoT & Smart Tech', desc: '200 Inovasi #051"075: Smart Kandang, Sensor', icon: FiZap, action: '#ch183', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'iot', 'smart'] },
  { id: 'ch184', label: 'Ch.184 Inovasi: AI & Machine Learning', desc: '200 Inovasi #076"100: Deteksi Penyakit AI', icon: FiCpu, action: '#ch184', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'ai', 'ml'] },
  { id: 'ch185', label: 'Ch.185 Inovasi: FinTech', desc: '200 Inovasi #101"125: Dompet Digital', icon: FiTrendingUp, action: '#ch185', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'fintech', 'keuangan'] },
  { id: 'ch186', label: 'Ch.186 Inovasi: Kesehatan & Lingkungan', desc: '200 Inovasi #126"150: Rekam Medis Digital', icon: FiHeart, action: '#ch186', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'kesehatan', 'lingkungan'] },
  { id: 'ch187', label: 'Ch.187 Inovasi: Developer Tools', desc: '200 Inovasi #151"175: Deploy Platform', icon: FiCode, action: '#ch187', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'tools', 'devtools'] },
  { id: 'ch188', label: 'Ch.188 Inovasi: Kreatif & Seni', desc: '200 Inovasi #176"200: Platform Komik', icon: FiStar, action: '#ch188', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'kreatif', 'seni'] },
  { id: 'ch189', label: 'Ch.189 Rekap 200 Inovasi', desc: 'Statistik, breakdown kategori, status', icon: FiTrendingUp, action: '#ch189', type: 'navigate', kategori: 'chapter', tag: ['rekap', 'statistik', '200 inovasi'] },
  { id: 'ch195', label: 'Ch.195 Grand Finale 200 Inovasi', desc: 'Surat untuk diri sendiri', icon: FiStar, action: '#ch195', type: 'navigate', kategori: 'chapter', tag: ['finale', '200 inovasi', 'grand'] },
  // GrupBab 26-30 " Ch261-310
  { id: 'ch261', label: 'Ch.261 Rutinitas Pagi Developer', desc: 'Formula produktivitas dari pukul 05:30', icon: FiTarget, action: '#ch261', type: 'navigate', kategori: 'chapter', tag: ['rutinitas', 'produktivitas', 'pagi'] },
  { id: 'ch262', label: 'Ch.262 Setup Workstation', desc: 'Investasi untuk produktivitas jangka panjang', icon: FiCode, action: '#ch262', type: 'navigate', kategori: 'chapter', tag: ['workstation', 'setup', 'produktivitas'] },
  { id: 'ch263', label: 'Ch.263 Manajemen Energi', desc: 'Lebih penting dari manajemen waktu', icon: FiZap, action: '#ch263', type: 'navigate', kategori: 'chapter', tag: ['energi', 'manajemen', 'waktu'] },
  { id: 'ch264', label: 'Ch.264 Burnout Developer', desc: 'Kenali tanda-tanda dan cara pulih', icon: FiHeart, action: '#ch264', type: 'navigate', kategori: 'chapter', tag: ['burnout', 'kesehatan', 'mental'] },
  { id: 'ch265', label: 'Ch.265 Deep Work & Fokus', desc: 'Pomodoro, time blocking, monk mode', icon: FiTarget, action: '#ch265', type: 'navigate', kategori: 'chapter', tag: ['deep work', 'fokus', 'pomodoro'] },
  { id: 'ch271', label: 'Ch.271 Cara Kontribusi Open Source', desc: '7 langkah dari fork sampai merged PR', icon: FiGithub, action: '#ch271', type: 'navigate', kategori: 'chapter', tag: ['open source', 'github', 'kontribusi'] },
  { id: 'ch272', label: 'Ch.272 Komunitas Developer Indonesia', desc: 'Peta ekosistem komunitas tech Indonesia', icon: FiUsers, action: '#ch272', type: 'navigate', kategori: 'chapter', tag: ['komunitas', 'indonesia', 'ekosistem'] },
  { id: 'ch273', label: 'Ch.273 Networking Autentik', desc: 'Bukan sekadar mengumpulkan kontak', icon: FiHeart, action: '#ch273', type: 'navigate', kategori: 'chapter', tag: ['networking', 'koneksi', 'autentik'] },
  { id: 'ch274', label: 'Ch.274 Menulis sebagai Developer', desc: 'Blog, newsletter, thread " amplifier karir', icon: FiBook, action: '#ch274', type: 'navigate', kategori: 'chapter', tag: ['menulis', 'blog', 'konten'] },
  { id: 'ch281', label: 'Ch.281 Anatomi Startup', desc: 'Pre-seed sampai IPO', icon: FiTrendingUp, action: '#ch281', type: 'navigate', kategori: 'chapter', tag: ['startup', 'founder', 'ipo'] },
  { id: 'ch282', label: 'Ch.282 Tech Stack Startup', desc: 'Pilih stack yang tepat per fase', icon: FiCode, action: '#ch282', type: 'navigate', kategori: 'chapter', tag: ['startup', 'stack', 'arsitektur'] },
  { id: 'ch283', label: 'Ch.283 Kesalahan Fatal Founder Teknis', desc: '8 jebakan dan cara menghindarinya', icon: FiTarget, action: '#ch283', type: 'navigate', kategori: 'chapter', tag: ['startup', 'founder', 'kesalahan'] },
  { id: 'ch284', label: 'Ch.284 Ekosistem Startup Indonesia', desc: 'VC, akselerator, program pemerintah', icon: FiGlobe, action: '#ch284', type: 'navigate', kategori: 'chapter', tag: ['startup', 'vc', 'ekosistem'] },
  { id: 'ch291', label: 'Ch.291 Web3 " Internet Berikutnya', desc: 'Blockchain, DeFi, DAO, smart contract', icon: FiGlobe, action: '#ch291', type: 'navigate', kategori: 'chapter', tag: ['web3', 'blockchain', 'defi'] },
  { id: 'ch292', label: 'Ch.292 AR & VR', desc: 'Mengaburkan batas realita dan digital', icon: FiStar, action: '#ch292', type: 'navigate', kategori: 'chapter', tag: ['ar', 'vr', 'augmented reality'] },
  { id: 'ch293', label: 'Ch.293 Quantum Computing', desc: 'Qubit, superposisi, aplikasi masa depan', icon: FiCpu, action: '#ch293', type: 'navigate', kategori: 'chapter', tag: ['quantum', 'komputasi', 'fisika'] },
  { id: 'ch294', label: 'Ch.294 AGI " Titik Singularitas', desc: 'ANI vs AGI vs ASI, pertanyaan etis', icon: FiCpu, action: '#ch294', type: 'navigate', kategori: 'chapter', tag: ['agi', 'ai', 'singularitas'] },
  { id: 'ch295', label: 'Ch.295"300 Prediksi Teknologi 2030', desc: '10 prediksi dengan probabilitas', icon: FiCompass, action: '#ch295', type: 'navigate', kategori: 'chapter', tag: ['prediksi', '2030', 'masa depan'] },
  { id: 'ch301', label: 'Ch.301 Personal Branding Developer', desc: 'GitHub, blog, LinkedIn, open source', icon: FiUser, action: '#ch301', type: 'navigate', kategori: 'chapter', tag: ['branding', 'personal', 'karir'] },
  { id: 'ch302', label: 'Ch.302 Wawancara Kerja', desc: 'HR Screen, Technical, Culture Fit', icon: FiFolder, action: '#ch302', type: 'navigate', kategori: 'chapter', tag: ['interview', 'kerja', 'wawancara'] },
  { id: 'ch303', label: 'Ch.303 Negosiasi Gaji', desc: 'Riset pasar dan script negosiasi', icon: FiTrendingUp, action: '#ch303', type: 'navigate', kategori: 'chapter', tag: ['gaji', 'negosiasi', 'salary'] },
  { id: 'ch304', label: 'Ch.304 Freelance Developer', desc: 'Dari sampingan ke full agency', icon: FiZap, action: '#ch304', type: 'navigate', kategori: 'chapter', tag: ['freelance', 'agency', 'sampingan'] },
  { id: 'ch305', label: 'Ch.305 Sertifikasi yang Worth It', desc: 'BNSP, AWS, Laravel, DTS', icon: FiAward, action: '#ch305', type: 'navigate', kategori: 'chapter', tag: ['sertifikasi', 'bnsp', 'aws', 'laravel'] },
  { id: 'ch306', label: 'Ch.306"310 Impian Besar & Salam Penutup', desc: '10 impian + penutup chapter 310', icon: FiStar, action: '#ch306', type: 'navigate', kategori: 'chapter', tag: ['impian', 'penutup', '310'] },
]

// --- Perintah navigasi & aksi utama ---------------------------
const perintahUtama: Perintah[] = [
  { id: 'home', label: 'Beranda', desc: 'Hero Section " The Origin', icon: FiHome, action: '#home', type: 'navigate', kategori: 'navigasi' },
  { id: 'about', label: 'Tentang Saya', desc: 'Chapter 01 " My Story', icon: FiUser, action: '#cerita', type: 'navigate', kategori: 'navigasi' },
  { id: 'skills', label: 'Keahlian / Skills', desc: 'Chapter 02 " My Powers', icon: FiCode, action: '#skills', type: 'navigate', kategori: 'navigasi' },
  { id: 'projects', label: 'Proyek / Missions', desc: 'Chapter 03 " The Missions', icon: FiFolder, action: '#projects', type: 'navigate', kategori: 'navigasi' },
  { id: 'certificates', label: 'Sertifikat', desc: 'Chapter 05 " Power Cards', icon: FiAward, action: '#certificates', type: 'navigate', kategori: 'navigasi' },
  { id: 'akademik', label: 'Rekap Akademik', desc: 'Semester 1"7 + Skripsi', icon: FiBook, action: '#akademik', type: 'navigate', kategori: 'navigasi' },
  { id: 'karir', label: 'Info Karir & Lowongan', desc: '15 Lowongan Kerja Relevan', icon: FiTrendingUp, action: '#info-karir', type: 'navigate', kategori: 'navigasi' },
  { id: 'cv', label: 'Curriculum Vitae', desc: 'CV Lengkap Rizki Habibi', icon: FiFileText, action: '#cv', type: 'navigate', kategori: 'navigasi' },
  { id: 'contact', label: 'Kontak / Hubungi', desc: 'Kirim pesan atau kolaborasi', icon: FiMail, action: '#contact', type: 'navigate', kategori: 'navigasi' },
  { id: 'download-cv', label: 'Download CV', desc: 'Unduh file PDF CV lengkap', icon: FiDownload, action: '/cv/CV_Rizki_Habibi.pdf', type: 'download', kategori: 'aksi' },
  { id: 'github', label: 'GitHub Profile', desc: 'github.com/kikiproject', icon: FiGithub, action: 'https://github.com/kikiproject', type: 'link', kategori: 'aksi' },
  { id: 'top', label: 'Kembali ke Atas', desc: 'Scroll to top', icon: FiArrowUp, action: 'scroll-top', type: 'action', kategori: 'aksi' },
]

// --- Gabungkan semua perintah ----------------------------------
const semuaPerintah: Perintah[] = [...perintahUtama, ...daftarChapter]

// --- Warna per kategori ----------------------------------------
const warnaKategori: Record<string, string> = {
  navigasi: '#1a5cff',
  chapter: '#8b5cf6',
  aksi: '#22c55e',
}

export default function PaletPerintah() {
  const [terbuka, setTerbuka] = useState(false)
  const [cari, setCari] = useState('')
  const [idxAktif, setIdxAktif] = useState(0)

  // Hasil filter
  const hasilFilter = useMemo(() => {
    if (!cari.trim()) return semuaPerintah.slice(0, 12)
    const q = cari.toLowerCase()
    return semuaPerintah.filter(p =>
      p.label.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      (p.tag ?? []).some(t => t.toLowerCase().includes(q))
    ).slice(0, 20)
  }, [cari])

  // Jalankan perintah
  const jalankan = useCallback((p: Perintah) => {
    setTerbuka(false); setCari(''); setIdxAktif(0)
    switch (p.type) {
      case 'navigate': {
        const el = document.querySelector(p.action)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      }
      case 'download': {
        const a = document.createElement('a'); a.href = p.action; a.download = ''; a.click()
        break
      }
      case 'link':
        window.open(p.action, '_blank', 'noopener,noreferrer')
        break
      case 'action':
        if (p.action === 'scroll-top') window.scrollTo({ top: 0, behavior: 'smooth' })
        break
    }
  }, [])

  // Keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault(); setTerbuka(p => !p); setCari(''); setIdxAktif(0)
      }
      if (!terbuka) return
      if (e.key === 'Escape') { setTerbuka(false); setCari('') }
      if (e.key === 'ArrowDown') { e.preventDefault(); setIdxAktif(p => (p + 1) % hasilFilter.length) }
      if (e.key === 'ArrowUp') { e.preventDefault(); setIdxAktif(p => (p - 1 + hasilFilter.length) % hasilFilter.length) }
      if (e.key === 'Enter' && hasilFilter[idxAktif]) jalankan(hasilFilter[idxAktif])
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [terbuka, hasilFilter, idxAktif, jalankan])

  useEffect(() => { setIdxAktif(0) }, [cari])

  return (
    <>
      {/* Tombol trigger */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() => { setTerbuka(true); setCari('') }}
        className="fixed bottom-4 right-4 z-40 hidden items-center gap-2 font-comic text-[#0a0a0a] text-xs px-3 py-2"
        style={{ background: '#fff', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
        title="Command Palette — Cari Chapter (Ctrl+K)">
        <span className="font-bold">⌘</span>
        <span className="hidden sm:inline">Ctrl + K</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {terbuka && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center pt-[12vh] px-4"
            style={{ background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(4px)' }}
            onClick={() => { setTerbuka(false); setCari('') }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -20 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="w-full max-w-xl overflow-hidden"
              style={{ background: '#fafaf7', border: '3px solid #0a0a0a', boxShadow: '8px 8px 0 #0a0a0a' }}
              onClick={e => e.stopPropagation()}>

              {/* Header pencarian */}
              <div className="flex items-center gap-3 px-4 py-3"
                style={{ background: '#0a0a0a', borderBottom: '2px solid #ffd700' }}>
                <FiSearch className="w-4 h-4 text-yellow-400 shrink-0" />
                <input
                  type="text"
                  value={cari}
                  onChange={e => setCari(e.target.value)}
                  placeholder={`Cari chapter, halaman, atau aksi... (${semuaPerintah.length} tersedia)`}
                  autoFocus
                  className="flex-1 bg-transparent text-white placeholder-white/30 text-sm outline-none font-comic"
                />
                <kbd className="hidden sm:flex items-center px-2 py-0.5 font-comic text-[10px] text-white/40"
                  style={{ border: '1px solid rgba(255,255,255,0.2)' }}>ESC</kbd>
              </div>

              {/* Hasil */}
              <div className="max-h-80 overflow-y-auto">
                {hasilFilter.length === 0 ? (
                  <div className="px-4 py-10 text-center font-comic text-sm text-[#0a0a0a]/40">
                    Tidak ditemukan " coba kata kunci lain
                  </div>
                ) : (
                  hasilFilter.map((p, i) => {
                    const warna = warnaKategori[p.kategori] ?? '#0a0a0a'
                    return (
                      <button key={p.id}
                        onClick={() => jalankan(p)}
                        onMouseEnter={() => setIdxAktif(i)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-left"
                        style={{
                          background: idxAktif === i ? '#ffd700' : 'transparent',
                          borderBottom: '1px solid rgba(10,10,10,0.07)',
                        }}>
                        <div className="w-7 h-7 flex items-center justify-center shrink-0"
                          style={{ background: idxAktif === i ? '#0a0a0a' : warna + '18', border: `2px solid ${idxAktif === i ? '#0a0a0a' : warna + '40'}` }}>
                          <p.icon className="w-3.5 h-3.5" style={{ color: idxAktif === i ? warna : warna }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-comic text-xs font-bold truncate text-[#0a0a0a]">{p.label}</div>
                          <div className="text-[9px] font-bold truncate text-[#0a0a0a]/40">{p.desc}</div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <span className="font-bold text-[7px] px-1 py-0.5 text-white"
                            style={{ background: warna + '99' }}>{p.kategori}</span>
                          {idxAktif === i && <span className="font-comic text-[9px] text-[#0a0a0a]/50"></span>}
                        </div>
                      </button>
                    )
                  })
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2"
                style={{ borderTop: '2px solid #0a0a0a', background: '#f0f0eb' }}>
                <span className="font-comic text-[9px] text-[#0a0a0a]/50">
                  {cari ? `${hasilFilter.length} hasil` : `${semuaPerintah.length} perintah tersedia`}
                </span>
                <div className="flex gap-3 font-comic text-[9px] text-[#0a0a0a]/40">
                  <span>'" pilih</span><span> buka</span><span>ESC tutup</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

