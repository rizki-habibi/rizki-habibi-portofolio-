'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiSearch, FiHome, FiFolder, FiAward, FiFileText, FiMail,
  FiDownload, FiGithub, FiArrowUp, FiBookOpen, FiCode, FiUser, FiUsers,
  FiBook, FiZap, FiStar, FiTrendingUp, FiHeart, FiGlobe,
  FiCpu, FiLayers, FiTarget, FiCompass,
} from 'react-icons/fi'

// â”€â”€â”€ Tipe data perintah â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

// â”€â”€â”€ Semua chapter sebagai perintah pencarian â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const daftarChapter: Perintah[] = [
  // GrupBab 1 â€” Ch16-25
  { id: 'ch16', label: 'Ch.16 Website Desa Digital', desc: 'Platform digitalisasi 75.000+ desa Indonesia', icon: FiGlobe, action: '#ch16', type: 'navigate', kategori: 'chapter', tag: ['desa', 'digital', 'website'] },
  { id: 'ch17', label: 'Ch.17 QRIS Donasi', desc: 'Sistem donasi transparan berbasis QRIS', icon: FiHeart, action: '#ch17', type: 'navigate', kategori: 'chapter', tag: ['donasi', 'qris', 'sosial'] },
  { id: 'ch18', label: 'Ch.18 Website Global Map', desc: 'Peta interaktif data sosial-ekonomi Indonesia', icon: FiCompass, action: '#ch18', type: 'navigate', kategori: 'chapter', tag: ['peta', 'map', 'data'] },
  { id: 'ch19', label: 'Ch.19 Karir & Profesional', desc: 'Roadmap karir developer 2023â€“2028', icon: FiTrendingUp, action: '#ch19', type: 'navigate', kategori: 'chapter', tag: ['karir', 'kerja', 'profesional'] },
  { id: 'ch20', label: 'Ch.20 Website Komersial', desc: 'Layanan web development komersial', icon: FiFolder, action: '#ch20', type: 'navigate', kategori: 'chapter', tag: ['bisnis', 'komersial', 'web'] },
  { id: 'ch21', label: 'Ch.21 Sistem Informasi Pemerintah', desc: 'SPBE dan digitalisasi layanan publik', icon: FiLayers, action: '#ch21', type: 'navigate', kategori: 'chapter', tag: ['pemerintah', 'spbe', 'publik'] },
  { id: 'ch22', label: 'Ch.22 Platform Edukasi Digital', desc: 'Visi edukasi teknologi untuk semua', icon: FiBook, action: '#ch22', type: 'navigate', kategori: 'chapter', tag: ['edukasi', 'belajar', 'digital'] },
  { id: 'ch23', label: 'Ch.23 Membangun Startup', desc: 'Perjalanan membangun startup dari nol', icon: FiZap, action: '#ch23', type: 'navigate', kategori: 'chapter', tag: ['startup', 'bisnis', 'founder'] },
  { id: 'ch24', label: 'Ch.24 Teknologi untuk Keadilan Sosial', desc: 'Tech sebagai alat pemerataan', icon: FiStar, action: '#ch24', type: 'navigate', kategori: 'chapter', tag: ['sosial', 'dampak', 'keadilan'] },
  { id: 'ch25', label: 'Ch.25 Kolaborasi Lintas Bidang', desc: 'Developer + pemerintah + UMKM', icon: FiUsers, action: '#ch25', type: 'navigate', kategori: 'chapter', tag: ['kolaborasi', 'umkm', 'lintas'] },
  // GrupBab 2 â€” Ch26-35
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
  // GrupBab 3-5 â€” Ch36-61
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
  { id: 'ch50', label: 'Ch.50 Milestone 50 Chapter', desc: 'Refleksi perjalanan 50 chapter pertama', icon: FiBook, action: '#ch50', type: 'navigate', kategori: 'chapter', tag: ['milestone', 'refleksi'] },
  { id: 'ch55', label: 'Ch.55 Siapa Rizki Habibi?', desc: 'Identitas dan refleksi diri mendalam', icon: FiUser, action: '#ch55', type: 'navigate', kategori: 'chapter', tag: ['identitas', 'profil', 'rizki'] },
  { id: 'ch60', label: 'Ch.60 Indonesia Digital Future', desc: 'Visi Indonesia di era digital', icon: FiGlobe, action: '#ch60', type: 'navigate', kategori: 'chapter', tag: ['indonesia', 'digital', 'masa depan'] },
  // GrupBab 6-9 â€” Ch62-100
  { id: 'ch62', label: 'Ch.62 Game Life: Pokemon GO', desc: 'AR gaming dan dampak teknologi', icon: FiZap, action: '#ch62', type: 'navigate', kategori: 'chapter', tag: ['game', 'pokemon', 'ar'] },
  { id: 'ch69', label: 'Ch.69 Game = Coding Pertamaku', desc: 'Game sebagai gateway ke programming', icon: FiCode, action: '#ch69', type: 'navigate', kategori: 'chapter', tag: ['game', 'coding', 'belajar'] },
  { id: 'ch71', label: 'Ch.71 Developer Sehat', desc: 'Kesehatan fisik dan mental developer', icon: FiHeart, action: '#ch71', type: 'navigate', kategori: 'chapter', tag: ['kesehatan', 'mental', 'fisik'] },
  { id: 'ch75', label: 'Ch.75 Komunitas', desc: 'Power of developer community', icon: FiUsers, action: '#ch75', type: 'navigate', kategori: 'chapter', tag: ['komunitas', 'bersama', 'networking'] },
  { id: 'ch81', label: 'Ch.81 Skripsi Fighter', desc: 'Perjuangan menyelesaikan tugas akhir', icon: FiBook, action: '#ch81', type: 'navigate', kategori: 'chapter', tag: ['skripsi', 'kampus', 'akademik'] },
  { id: 'ch82', label: 'Ch.82 KVT.kom Platform', desc: 'Sistem informasi kampus digital', icon: FiGlobe, action: '#ch82', type: 'navigate', kategori: 'chapter', tag: ['kvtkom', 'kampus', 'platform'] },
  { id: 'ch88', label: 'Ch.88 Asal Mula Coding', desc: 'Kisah pertama kali belajar coding', icon: FiCode, action: '#ch88', type: 'navigate', kategori: 'chapter', tag: ['asal', 'coding', 'pertama kali'] },
  { id: 'ch94', label: 'Ch.94 Burnout & Bangkit', desc: 'Mengatasi kelelahan mental developer', icon: FiHeart, action: '#ch94', type: 'navigate', kategori: 'chapter', tag: ['burnout', 'bangkit', 'mental'] },
  { id: 'ch100', label: 'Ch.100 Milestone 100 Chapter!', desc: 'Merayakan 100 chapter dengan refleksi', icon: FiStar, action: '#ch100', type: 'navigate', kategori: 'chapter', tag: ['100', 'milestone', 'spesial'] },
  // GrupBab 10-17 â€” Ch101-180
  { id: 'ch101', label: 'Ch.101 AI Tools Modern', desc: 'ChatGPT, Copilot, Midjourney dalam workflow', icon: FiCpu, action: '#ch101', type: 'navigate', kategori: 'chapter', tag: ['ai', 'chatgpt', 'copilot'] },
  { id: 'ch104', label: 'Ch.104 Cyber Security', desc: 'OWASP Top 10 dan keamanan aplikasi', icon: FiTarget, action: '#ch104', type: 'navigate', kategori: 'chapter', tag: ['security', 'owasp', 'keamanan'] },
  { id: 'ch106', label: 'Ch.106 Clean Code', desc: 'Prinsip SOLID, DRY, kode yang bisa dibaca', icon: FiCode, action: '#ch106', type: 'navigate', kategori: 'chapter', tag: ['clean code', 'solid', 'dry'] },
  { id: 'ch107', label: 'Ch.107 API Design', desc: 'REST, GraphQL, WebSocket best practices', icon: FiLayers, action: '#ch107', type: 'navigate', kategori: 'chapter', tag: ['api', 'rest', 'graphql'] },
  { id: 'ch110', label: 'Ch.110 Web3 & Blockchain', desc: 'Smart contract, DeFi, NFT, DAO', icon: FiGlobe, action: '#ch110', type: 'navigate', kategori: 'chapter', tag: ['web3', 'blockchain', 'defi', 'nft'] },
  { id: 'ch118', label: 'Ch.118 Roadmap 2026â€“2030', desc: 'Peta jalan besar menuju masa depan', icon: FiCompass, action: '#ch118', type: 'navigate', kategori: 'chapter', tag: ['roadmap', '2030', 'rencana'] },
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
  // GrupBab 18-25 â€” 200 Inovasi
  { id: 'ch181', label: 'Ch.181 Inovasi: Edukasi Digital', desc: '200 Inovasi #001â€“025: AI Tutor, Gamifikasi', icon: FiBook, action: '#ch181', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'edukasi', 'ai tutor'] },
  { id: 'ch182', label: 'Ch.182 Inovasi: Platform & Produk', desc: '200 Inovasi #026â€“050: Website Desa SaaS', icon: FiFolder, action: '#ch182', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'platform', 'saas'] },
  { id: 'ch183', label: 'Ch.183 Inovasi: IoT & Smart Tech', desc: '200 Inovasi #051â€“075: Smart Kandang, Sensor', icon: FiZap, action: '#ch183', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'iot', 'smart'] },
  { id: 'ch184', label: 'Ch.184 Inovasi: AI & Machine Learning', desc: '200 Inovasi #076â€“100: Deteksi Penyakit AI', icon: FiCpu, action: '#ch184', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'ai', 'ml'] },
  { id: 'ch185', label: 'Ch.185 Inovasi: FinTech', desc: '200 Inovasi #101â€“125: Dompet Digital', icon: FiTrendingUp, action: '#ch185', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'fintech', 'keuangan'] },
  { id: 'ch186', label: 'Ch.186 Inovasi: Kesehatan & Lingkungan', desc: '200 Inovasi #126â€“150: Rekam Medis Digital', icon: FiHeart, action: '#ch186', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'kesehatan', 'lingkungan'] },
  { id: 'ch187', label: 'Ch.187 Inovasi: Developer Tools', desc: '200 Inovasi #151â€“175: Deploy Platform', icon: FiCode, action: '#ch187', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'tools', 'devtools'] },
  { id: 'ch188', label: 'Ch.188 Inovasi: Kreatif & Seni', desc: '200 Inovasi #176â€“200: Platform Komik', icon: FiStar, action: '#ch188', type: 'navigate', kategori: 'chapter', tag: ['inovasi', 'kreatif', 'seni'] },
  { id: 'ch189', label: 'Ch.189 Rekap 200 Inovasi', desc: 'Statistik, breakdown kategori, status', icon: FiTrendingUp, action: '#ch189', type: 'navigate', kategori: 'chapter', tag: ['rekap', 'statistik', '200 inovasi'] },
  { id: 'ch195', label: 'Ch.195 Grand Finale 200 Inovasi', desc: 'Surat untuk diri sendiri', icon: FiStar, action: '#ch195', type: 'navigate', kategori: 'chapter', tag: ['finale', '200 inovasi', 'grand'] },
  // GrupBab 26-30 â€” Ch261-310
  { id: 'ch261', label: 'Ch.261 Rutinitas Pagi Developer', desc: 'Formula produktivitas dari pukul 05:30', icon: FiTarget, action: '#ch261', type: 'navigate', kategori: 'chapter', tag: ['rutinitas', 'produktivitas', 'pagi'] },
  { id: 'ch262', label: 'Ch.262 Setup Workstation', desc: 'Investasi untuk produktivitas jangka panjang', icon: FiCode, action: '#ch262', type: 'navigate', kategori: 'chapter', tag: ['workstation', 'setup', 'produktivitas'] },
  { id: 'ch263', label: 'Ch.263 Manajemen Energi', desc: 'Lebih penting dari manajemen waktu', icon: FiZap, action: '#ch263', type: 'navigate', kategori: 'chapter', tag: ['energi', 'manajemen', 'waktu'] },
  { id: 'ch264', label: 'Ch.264 Burnout Developer', desc: 'Kenali tanda-tanda dan cara pulih', icon: FiHeart, action: '#ch264', type: 'navigate', kategori: 'chapter', tag: ['burnout', 'kesehatan', 'mental'] },
  { id: 'ch265', label: 'Ch.265 Deep Work & Fokus', desc: 'Pomodoro, time blocking, monk mode', icon: FiTarget, action: '#ch265', type: 'navigate', kategori: 'chapter', tag: ['deep work', 'fokus', 'pomodoro'] },
  { id: 'ch271', label: 'Ch.271 Cara Kontribusi Open Source', desc: '7 langkah dari fork sampai merged PR', icon: FiGithub, action: '#ch271', type: 'navigate', kategori: 'chapter', tag: ['open source', 'github', 'kontribusi'] },
  { id: 'ch272', label: 'Ch.272 Komunitas Developer Indonesia', desc: 'Peta ekosistem komunitas tech Indonesia', icon: FiUsers, action: '#ch272', type: 'navigate', kategori: 'chapter', tag: ['komunitas', 'indonesia', 'ekosistem'] },
  { id: 'ch273', label: 'Ch.273 Networking Autentik', desc: 'Bukan sekadar mengumpulkan kontak', icon: FiHeart, action: '#ch273', type: 'navigate', kategori: 'chapter', tag: ['networking', 'koneksi', 'autentik'] },
  { id: 'ch274', label: 'Ch.274 Menulis sebagai Developer', desc: 'Blog, newsletter, thread â€” amplifier karir', icon: FiBook, action: '#ch274', type: 'navigate', kategori: 'chapter', tag: ['menulis', 'blog', 'konten'] },
  { id: 'ch281', label: 'Ch.281 Anatomi Startup', desc: 'Pre-seed sampai IPO', icon: FiTrendingUp, action: '#ch281', type: 'navigate', kategori: 'chapter', tag: ['startup', 'founder', 'ipo'] },
  { id: 'ch282', label: 'Ch.282 Tech Stack Startup', desc: 'Pilih stack yang tepat per fase', icon: FiCode, action: '#ch282', type: 'navigate', kategori: 'chapter', tag: ['startup', 'stack', 'arsitektur'] },
  { id: 'ch283', label: 'Ch.283 Kesalahan Fatal Founder Teknis', desc: '8 jebakan dan cara menghindarinya', icon: FiTarget, action: '#ch283', type: 'navigate', kategori: 'chapter', tag: ['startup', 'founder', 'kesalahan'] },
  { id: 'ch284', label: 'Ch.284 Ekosistem Startup Indonesia', desc: 'VC, akselerator, program pemerintah', icon: FiGlobe, action: '#ch284', type: 'navigate', kategori: 'chapter', tag: ['startup', 'vc', 'ekosistem'] },
  { id: 'ch291', label: 'Ch.291 Web3 â€” Internet Berikutnya', desc: 'Blockchain, DeFi, DAO, smart contract', icon: FiGlobe, action: '#ch291', type: 'navigate', kategori: 'chapter', tag: ['web3', 'blockchain', 'defi'] },
  { id: 'ch292', label: 'Ch.292 AR & VR', desc: 'Mengaburkan batas realita dan digital', icon: FiStar, action: '#ch292', type: 'navigate', kategori: 'chapter', tag: ['ar', 'vr', 'augmented reality'] },
  { id: 'ch293', label: 'Ch.293 Quantum Computing', desc: 'Qubit, superposisi, aplikasi masa depan', icon: FiCpu, action: '#ch293', type: 'navigate', kategori: 'chapter', tag: ['quantum', 'komputasi', 'fisika'] },
  { id: 'ch294', label: 'Ch.294 AGI â€” Titik Singularitas', desc: 'ANI vs AGI vs ASI, pertanyaan etis', icon: FiCpu, action: '#ch294', type: 'navigate', kategori: 'chapter', tag: ['agi', 'ai', 'singularitas'] },
  { id: 'ch295', label: 'Ch.295â€“300 Prediksi Teknologi 2030', desc: '10 prediksi dengan probabilitas', icon: FiCompass, action: '#ch295', type: 'navigate', kategori: 'chapter', tag: ['prediksi', '2030', 'masa depan'] },
  { id: 'ch301', label: 'Ch.301 Personal Branding Developer', desc: 'GitHub, blog, LinkedIn, open source', icon: FiUser, action: '#ch301', type: 'navigate', kategori: 'chapter', tag: ['branding', 'personal', 'karir'] },
  { id: 'ch302', label: 'Ch.302 Wawancara Kerja', desc: 'HR Screen, Technical, Culture Fit', icon: FiFolder, action: '#ch302', type: 'navigate', kategori: 'chapter', tag: ['interview', 'kerja', 'wawancara'] },
  { id: 'ch303', label: 'Ch.303 Negosiasi Gaji', desc: 'Riset pasar dan script negosiasi', icon: FiTrendingUp, action: '#ch303', type: 'navigate', kategori: 'chapter', tag: ['gaji', 'negosiasi', 'salary'] },
  { id: 'ch304', label: 'Ch.304 Freelance Developer', desc: 'Dari sampingan ke full agency', icon: FiZap, action: '#ch304', type: 'navigate', kategori: 'chapter', tag: ['freelance', 'agency', 'sampingan'] },
  { id: 'ch305', label: 'Ch.305 Sertifikasi yang Worth It', desc: 'BNSP, AWS, Laravel, DTS', icon: FiAward, action: '#ch305', type: 'navigate', kategori: 'chapter', tag: ['sertifikasi', 'bnsp', 'aws', 'laravel'] },
  { id: 'ch306', label: 'Ch.306â€“310 Impian Besar & Salam Penutup', desc: '10 impian + penutup chapter 310', icon: FiStar, action: '#ch306', type: 'navigate', kategori: 'chapter', tag: ['impian', 'penutup', '310'] },
]

// â”€â”€â”€ Perintah navigasi & aksi utama â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const perintahUtama: Perintah[] = [
  { id: 'home', label: 'Beranda', desc: 'Hero Section â€” The Origin', icon: FiHome, action: '#home', type: 'navigate', kategori: 'navigasi' },
  { id: 'about', label: 'Tentang Saya', desc: 'Chapter 01 â€” My Story', icon: FiUser, action: '#cerita', type: 'navigate', kategori: 'navigasi' },
  { id: 'skills', label: 'Keahlian / Skills', desc: 'Chapter 02 â€” My Powers', icon: FiCode, action: '#skills', type: 'navigate', kategori: 'navigasi' },
  { id: 'projects', label: 'Proyek / Missions', desc: 'Chapter 03 â€” The Missions', icon: FiFolder, action: '#projects', type: 'navigate', kategori: 'navigasi' },
  { id: 'certificates', label: 'Sertifikat', desc: 'Chapter 05 â€” Power Cards', icon: FiAward, action: '#certificates', type: 'navigate', kategori: 'navigasi' },
  { id: 'akademik', label: 'Rekap Akademik', desc: 'Semester 1â€“7 + Skripsi', icon: FiBook, action: '#akademik', type: 'navigate', kategori: 'navigasi' },
  { id: 'karir', label: 'Info Karir & Lowongan', desc: '15 Lowongan Kerja Relevan', icon: FiTrendingUp, action: '#info-karir', type: 'navigate', kategori: 'navigasi' },
  { id: 'cv', label: 'Curriculum Vitae', desc: 'CV Lengkap Rizki Habibi', icon: FiFileText, action: '#cv', type: 'navigate', kategori: 'navigasi' },
  { id: 'contact', label: 'Kontak / Hubungi', desc: 'Kirim pesan atau kolaborasi', icon: FiMail, action: '#contact', type: 'navigate', kategori: 'navigasi' },
  { id: 'download-cv', label: 'Download CV', desc: 'Unduh file PDF CV lengkap', icon: FiDownload, action: '/cv/CV_Rizki_Habibi.pdf', type: 'download', kategori: 'aksi' },
  { id: 'github', label: 'GitHub Profile', desc: 'github.com/kikiproject', icon: FiGithub, action: 'https://github.com/kikiproject', type: 'link', kategori: 'aksi' },
  { id: 'top', label: 'Kembali ke Atas', desc: 'Scroll to top', icon: FiArrowUp, action: 'scroll-top', type: 'action', kategori: 'aksi' },
]

// â”€â”€â”€ Gabungkan semua perintah â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const semuaPerintah: Perintah[] = [...perintahUtama, ...daftarChapter]

// â”€â”€â”€ Warna per kategori â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 font-comic text-[#0a0a0a] text-xs px-3 py-2"
        style={{ background: '#fff', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
        title="Command Palette â€” Cari Chapter (Ctrl+K)">
        <span className="font-bold">âŒ˜</span>
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
                    Tidak ditemukan â€” coba kata kunci lain
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
                          {idxAktif === i && <span className="font-comic text-[9px] text-[#0a0a0a]/50">â†µ</span>}
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
                  <span>â†‘â†“ pilih</span><span>â†µ buka</span><span>ESC tutup</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

