'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiMenu, FiX, FiBookOpen, FiSearch, FiMusic, FiList, FiChevronDown, FiMoon, FiSun, FiCommand, FiMail } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'
import BukuCerita from '@/components/BukuCerita'
import { useLang, namaLang, type Lang } from '@/context/LangContext'

// Nav links diambil dari context lang — lihat fungsi getNavLinks() di dalam komponen
const NAV_HREFS = ['#home', '#cerita', '#skills', '#projects', '#timeline', '#contact']

// Semua chapter untuk dropdown navigasi (00 - 120)
const semuaChapter = [
  // — CHAPTER UTAMA 00-15 --
  { num: '00', judul: 'The Origin', href: '#home', warna: '#1a5cff' },
  { num: '01', judul: 'Origin Story', href: '#cerita', warna: '#22c55e' },
  { num: '02', judul: 'My Powers', href: '#skills', warna: '#1a5cff' },
  { num: '03', judul: 'The Missions', href: '#projects', warna: '#e63329' },
  { num: '04', judul: 'My Journey', href: '#timeline', warna: '#ffd700' },
  { num: '05', judul: 'Power Cards', href: '#certificates', warna: '#f59e0b' },
  { num: '06', judul: 'The Big Dream', href: '#visi-kvt', warna: '#8b5cf6' },
  { num: '07', judul: 'Rekayasa & Inovasi', href: '#inovasi', warna: '#22c55e' },
  { num: '08', judul: 'By The Numbers', href: '#stats', warna: '#ffd700' },
  { num: '09', judul: 'My Arsenal', href: '#tools', warna: '#f59e0b' },
  { num: '10', judul: 'Achievement Unlocked', href: '#achievements', warna: '#ffd700' },
  { num: '11', judul: 'Words of Power', href: '#quotes', warna: '#ffd700' },
  { num: '12', judul: 'Training Arc', href: '#education', warna: '#1a5cff' },
  { num: '13', judul: 'Off-Duty Life', href: '#hobbies', warna: '#22c55e' },
  { num: '14', judul: 'Network & Community', href: '#komunitas', warna: '#8b5cf6' },
  { num: '15', judul: 'What Comes Next', href: '#epilog', warna: '#e63329' },
  // — GROUP 1: 16-25 --
  { num: '16', judul: 'Website Desa Digital', href: '/chapter/16', warna: '#22c55e' },
  { num: '17', judul: 'QRIS Donasi', href: '/chapter/17', warna: '#1a5cff' },
  { num: '18', judul: 'Website Global Map', href: '/chapter/18', warna: '#0891b2' },
  { num: '19', judul: 'Karir & Profesional', href: '/chapter/19', warna: '#f59e0b' },
  { num: '20', judul: 'Website Komersial', href: '/chapter/20', warna: '#8b5cf6' },
  { num: '21', judul: 'Sistem Pemerintah', href: '/chapter/21', warna: '#e63329' },
  { num: '22', judul: 'Platform Edukasi', href: '/chapter/22', warna: '#8b5cf6' },
  { num: '23', judul: 'Membangun Startup', href: '/chapter/23', warna: '#f59e0b' },
  { num: '24', judul: 'Teknologi Sosial', href: '/chapter/24', warna: '#22c55e' },
  { num: '25', judul: 'Kolaborasi Lintas Bidang', href: '/chapter/25', warna: '#1a5cff' },
  // — GROUP 2: 26-35 --
  { num: '26', judul: 'AI Journey', href: '/chapter/26', warna: '#8b5cf6' },
  { num: '27', judul: 'Tech Stack Masa Depan', href: '/chapter/27', warna: '#0891b2' },
  { num: '28', judul: 'Open Source', href: '/chapter/28', warna: '#22c55e' },
  { num: '29', judul: 'Cyber Security', href: '/chapter/29', warna: '#e63329' },
  { num: '30', judul: 'Cloud & DevOps', href: '/chapter/30', warna: '#1a5cff' },
  { num: '31', judul: 'Database Mastery', href: '/chapter/31', warna: '#4479A1' },
  { num: '32', judul: 'UI/UX Design Deep', href: '/chapter/32', warna: '#e1306c' },
  { num: '33', judul: 'AI Deep Dive', href: '/chapter/33', warna: '#10a37f' },
  { num: '34', judul: 'IoT Advanced', href: '/chapter/34', warna: '#f59e0b' },
  { num: '35', judul: 'Digital Marketing', href: '/chapter/35', warna: '#8b5cf6' },
  // — GROUP 3: 36-45 --
  { num: '36', judul: 'Kesehatan Digital', href: '/chapter/36', warna: '#22c55e' },
  { num: '37', judul: 'Lingkungan Hidup', href: '/chapter/37', warna: '#0891b2' },
  { num: '38', judul: 'Dampak Sosial', href: '/chapter/38', warna: '#1a5cff' },
  { num: '39', judul: 'Growth Mindset', href: '/chapter/39', warna: '#f59e0b' },
  { num: '40', judul: 'Leadership', href: '/chapter/40', warna: '#e63329' },
  { num: '41', judul: 'Problem Solving', href: '/chapter/41', warna: '#8b5cf6' },
  { num: '42', judul: 'Soft Skills', href: '/chapter/42', warna: '#22c55e' },
  { num: '43', judul: 'Logika & Algoritma', href: '/chapter/43', warna: '#1a5cff' },
  { num: '44', judul: 'Kreativitas', href: '/chapter/44', warna: '#f59e0b' },
  { num: '45', judul: 'Dream Big', href: '/chapter/45', warna: '#ffd700' },
  // — GROUP 4: 46-55 --
  { num: '46', judul: 'Motivasi & Semangat', href: '/chapter/46', warna: '#e63329' },
  { num: '47', judul: 'Belajar dari Kegagalan', href: '/chapter/47', warna: '#8b5cf6' },
  { num: '48', judul: 'Global Perspective', href: '/chapter/48', warna: '#0891b2' },
  { num: '49', judul: 'Future Technology', href: '/chapter/49', warna: '#1a5cff' },
  { num: '50', judul: 'Milestone 50', href: '/chapter/50', warna: '#ffd700' },
  { num: '51', judul: 'Rasa Syukur', href: '/chapter/51', warna: '#22c55e' },
  { num: '52', judul: 'UMKM Digital', href: '/chapter/52', warna: '#f59e0b' },
  { num: '53', judul: 'Smart City', href: '/chapter/53', warna: '#0891b2' },
  { num: '54', judul: 'Keluarga & Prioritas', href: '/chapter/54', warna: '#e63329' },
  { num: '55', judul: 'Identitas Developer', href: '/chapter/55', warna: '#8b5cf6' },
  // — GROUP 5: 56-61 + FINAL --
  { num: '56', judul: 'Warisan Digital', href: '/chapter/56', warna: '#1a5cff' },
  { num: '57', judul: 'Jejak Kode', href: '/chapter/57', warna: '#22c55e' },
  { num: '58', judul: 'Komunitas Masa Depan', href: '/chapter/58', warna: '#8b5cf6' },
  { num: '59', judul: 'Indonesia 2030', href: '/chapter/59', warna: '#e63329' },
  { num: '60', judul: 'Developer Ideal', href: '/chapter/60', warna: '#f59e0b' },
  { num: '61', judul: 'The Final Arc', href: '/chapter/61', warna: '#ffd700' },
  // — GROUP 6: 62-70 GAME --
  { num: '62', judul: 'Game Life: Pokemon GO', href: '/chapter/62', warna: '#22c55e' },
  { num: '63', judul: 'Dunia Kartu: Yugioh', href: '/chapter/63', warna: '#f59e0b' },
  { num: '64', judul: 'Strategi & Taktik', href: '/chapter/64', warna: '#e63329' },
  { num: '65', judul: 'Kingdom Builder', href: '/chapter/65', warna: '#8b5cf6' },
  { num: '66', judul: 'Dragon & Petualangan', href: '/chapter/66', warna: '#e63329' },
  { num: '67', judul: 'Minecraft & Creative', href: '/chapter/67', warna: '#22c55e' },
  { num: '68', judul: 'Offline Adventures', href: '/chapter/68', warna: '#8b5cf6' },
  { num: '69', judul: 'Game = Sekolah Coding', href: '/chapter/69', warna: '#1a5cff' },
  { num: '70', judul: 'Game Wishlist & Impian', href: '/chapter/70', warna: '#f59e0b' },
  // — GROUP 7: 71-80 INOVASI --
  { num: '71', judul: 'Developer Sehat', href: '/chapter/71', warna: '#22c55e' },
  { num: '72', judul: 'Coding with Music', href: '/chapter/72', warna: '#1a5cff' },
  { num: '73', judul: 'Perpustakaan Digital', href: '/chapter/73', warna: '#f59e0b' },
  { num: '74', judul: 'Kreativitas & Desain', href: '/chapter/74', warna: '#8b5cf6' },
  { num: '75', judul: 'Komunitas & Mentor', href: '/chapter/75', warna: '#22c55e' },
  { num: '76', judul: 'Impian Besar 2030', href: '/chapter/76', warna: '#ffd700' },
  { num: '77', judul: 'Surat Developer Muda', href: '/chapter/77', warna: '#1a5cff' },
  { num: '78', judul: 'IoT Inovasi Lanjutan', href: '/chapter/78', warna: '#22c55e' },
  { num: '79', judul: 'Masa Depan Web', href: '/chapter/79', warna: '#8b5cf6' },
  { num: '80', judul: 'Terima Kasih!', href: '/chapter/80', warna: '#ffd700' },
  // — GROUP 8: 81-90 AKADEMIK --
  { num: '81', judul: 'Skripsi Fighter', href: '/chapter/81', warna: '#e63329' },
  { num: '82', judul: 'Gelar.id Platform', href: '/chapter/82', warna: '#8b5cf6' },
  { num: '83', judul: 'Visi Pendidikan Digital', href: '/chapter/83', warna: '#1a5cff' },
  { num: '84', judul: 'Penelitian & Jurnal', href: '/chapter/84', warna: '#0891b2' },
  { num: '85', judul: 'Keuangan Mahasiswa', href: '/chapter/85', warna: '#22c55e' },
  { num: '86', judul: 'Workflow Developer', href: '/chapter/86', warna: '#f59e0b' },
  { num: '87', judul: 'Organisasi & Pengalaman', href: '/chapter/87', warna: '#8b5cf6' },
  { num: '88', judul: 'Awal Mula Coding', href: '/chapter/88', warna: '#e63329' },
  { num: '89', judul: 'Mentor & Inspirasi', href: '/chapter/89', warna: '#1a5cff' },
  { num: '90', judul: 'Keluarga & Dukungan', href: '/chapter/90', warna: '#ffd700' },
  // — GROUP 9: 91-100 KEHIDUPAN --
  { num: '91', judul: 'Kehidupan Kampus', href: '/chapter/91', warna: '#22c55e' },
  { num: '92', judul: 'Jember & Kota Perjalanan', href: '/chapter/92', warna: '#22c55e' },
  { num: '93', judul: 'Budaya Digital Gen Z', href: '/chapter/93', warna: '#1a5cff' },
  { num: '94', judul: 'Burnout & Bangkit', href: '/chapter/94', warna: '#e63329' },
  { num: '95', judul: 'Kuliner Mahasiswa', href: '/chapter/95', warna: '#f59e0b' },
  { num: '96', judul: 'Personal Branding', href: '/chapter/96', warna: '#0a66c2' },
  { num: '97', judul: 'Film & Series Favorit', href: '/chapter/97', warna: '#8b5cf6' },
  { num: '98', judul: 'Anime & Inspirasi', href: '/chapter/98', warna: '#e63329' },
  { num: '99', judul: 'Lessons Hard Learned', href: '/chapter/99', warna: '#e63329' },
  { num: '100', judul: '🎉 Milestone 100!', href: '/chapter/100', warna: '#ffd700' },
  // — GROUP 10: 101-110 TEKNOLOGI --
  { num: '101', judul: 'AI Tools Developer', href: '/chapter/101', warna: '#10a37f' },
  { num: '102', judul: 'Machine Learning', href: '/chapter/102', warna: '#8b5cf6' },
  { num: '103', judul: 'Cloud Computing', href: '/chapter/103', warna: '#0891b2' },
  { num: '104', judul: 'Cyber Security', href: '/chapter/104', warna: '#e63329' },
  { num: '105', judul: 'Database Mastery', href: '/chapter/105', warna: '#4479A1' },
  { num: '106', judul: 'Clean Code', href: '/chapter/106', warna: '#22c55e' },
  { num: '107', judul: 'API Design', href: '/chapter/107', warna: '#f59e0b' },
  { num: '108', judul: 'Open Source', href: '/chapter/108', warna: '#22c55e' },
  { num: '109', judul: 'UI/UX Desain', href: '/chapter/109', warna: '#e1306c' },
  { num: '110', judul: 'Web3 & Blockchain', href: '/chapter/110', warna: '#f59e0b' },
  // — GROUP 11: 111-120 WARISAN & FINAL --
  { num: '111', judul: 'Warisan Digital', href: '/chapter/111', warna: '#8b5cf6' },
  { num: '112', judul: 'Sosial & Dampak', href: '/chapter/112', warna: '#22c55e' },
  { num: '113', judul: 'Nilai & Prinsip Hidup', href: '/chapter/113', warna: '#1a5cff' },
  { num: '114', judul: 'Surat untuk Mereka', href: '/chapter/114', warna: '#8b5cf6' },
  { num: '115', judul: 'Bucket List Developer', href: '/chapter/115', warna: '#f59e0b' },
  { num: '116', judul: 'Refleksi Perjalanan', href: '/chapter/116', warna: '#0891b2' },
  { num: '117', judul: 'Indonesia Digital', href: '/chapter/117', warna: '#e63329' },
  { num: '118', judul: 'Roadmap 2026-2030', href: '/chapter/118', warna: '#1a5cff' },
  { num: '119', judul: 'Epilog Agung', href: '/chapter/119', warna: '#ffd700' },
  { num: '120', judul: '🎌 BERSAMBUNG...', href: '/chapter/120', warna: '#ffd700' },
  // — GROUP 12: 121-130 INOVASI TEKNOLOGI --
  { num: '121', judul: 'Smart Home', href: '/chapter/121', warna: '#0891b2' },
  { num: '122', judul: 'Robotik & Arduino', href: '/chapter/122', warna: '#1a5cff' },
  { num: '123', judul: 'AR & VR', href: '/chapter/123', warna: '#8b5cf6' },
  { num: '124', judul: 'Quantum Computing', href: '/chapter/124', warna: '#e63329' },
  { num: '125', judul: 'Kendaraan Otonom', href: '/chapter/125', warna: '#0891b2' },
  { num: '126', judul: 'Bioinformatika', href: '/chapter/126', warna: '#22c55e' },
  { num: '127', judul: 'Energi Terbarukan', href: '/chapter/127', warna: '#22c55e' },
  { num: '128', judul: 'Fintech Inovatif', href: '/chapter/128', warna: '#1a5cff' },
  { num: '129', judul: 'Space Tech', href: '/chapter/129', warna: '#8b5cf6' },
  { num: '130', judul: 'Neurotech & BCI', href: '/chapter/130', warna: '#e63329' },
  // — GROUP 13: 131-140 WIRAUSAHA & SOSIAL --
  { num: '131', judul: 'Wirausaha Sosial', href: '/chapter/131', warna: '#22c55e' },
  { num: '132', judul: 'Kolaborasi Global', href: '/chapter/132', warna: '#0891b2' },
  { num: '133', judul: 'Teknologi & Lingkungan', href: '/chapter/133', warna: '#22c55e' },
  { num: '134', judul: 'Healthtech Inovatif', href: '/chapter/134', warna: '#e63329' },
  { num: '135', judul: 'Agritech', href: '/chapter/135', warna: '#22c55e' },
  { num: '136', judul: 'Edtech Inovatif', href: '/chapter/136', warna: '#8b5cf6' },
  { num: '137', judul: 'Ekonomi Kreatif', href: '/chapter/137', warna: '#f59e0b' },
  { num: '138', judul: 'Smart City', href: '/chapter/138', warna: '#1a5cff' },
  { num: '139', judul: 'Supply Chain Tech', href: '/chapter/139', warna: '#f59e0b' },
  { num: '140', judul: 'Mental Health Tech', href: '/chapter/140', warna: '#8b5cf6' },
  // — GROUP 14: 141-150 SENI & KREATOR --
  { num: '141', judul: 'Seni Digital', href: '/chapter/141', warna: '#8b5cf6' },
  { num: '142', judul: 'Musik & Teknologi', href: '/chapter/142', warna: '#1a5cff' },
  { num: '143', judul: 'Content Creator Tech', href: '/chapter/143', warna: '#e63329' },
  { num: '144', judul: 'Sosmed & Algoritma', href: '/chapter/144', warna: '#0a66c2' },
  { num: '145', judul: 'Podcast & Audio', href: '/chapter/145', warna: '#f59e0b' },
  { num: '146', judul: 'Fashion Tech', href: '/chapter/146', warna: '#e1306c' },
  { num: '147', judul: 'Sport Tech', href: '/chapter/147', warna: '#22c55e' },
  { num: '148', judul: 'Kuliner Tech', href: '/chapter/148', warna: '#f59e0b' },
  { num: '149', judul: 'Transportasi Digital', href: '/chapter/149', warna: '#0891b2' },
  { num: '150', judul: 'Masa Depan Pekerjaan', href: '/chapter/150', warna: '#ffd700' },
  // — GROUP 15: 151-160 KEPEMIMPINAN & FILOSOFI --
  { num: '151', judul: 'Kepemimpinan Tech', href: '/chapter/151', warna: '#1a5cff' },
  { num: '152', judul: 'Generasi Bangsa', href: '/chapter/152', warna: '#e63329' },
  { num: '153', judul: 'Filosofi Developer', href: '/chapter/153', warna: '#8b5cf6' },
  { num: '154', judul: 'Diversity & Inclusion', href: '/chapter/154', warna: '#e1306c' },
  { num: '155', judul: 'Digital Citizenship', href: '/chapter/155', warna: '#1a5cff' },
  { num: '156', judul: 'Inovasi Lokal', href: '/chapter/156', warna: '#e63329' },
  { num: '157', judul: 'Generasi Alpha & AI', href: '/chapter/157', warna: '#f59e0b' },
  { num: '158', judul: 'Teknologi & Spiritualitas', href: '/chapter/158', warna: '#22c55e' },
  { num: '159', judul: 'Kearifan Lokal Digital', href: '/chapter/159', warna: '#8b5cf6' },
  { num: '160', judul: 'Sejarah Computing', href: '/chapter/160', warna: '#1a5cff' },
  // — GROUP 16: 161-170 GRAND FINALE --
  { num: '161', judul: '100 Hari Produktif', href: '/chapter/161', warna: '#1a5cff' },
  { num: '162', judul: 'Proyek Impian 2027', href: '/chapter/162', warna: '#8b5cf6' },
  { num: '163', judul: 'Satu Tahun Gelar.id', href: '/chapter/163', warna: '#22c55e' },
  { num: '164', judul: 'Pesan Generasi Berikut', href: '/chapter/164', warna: '#ffd700' },
  { num: '165', judul: 'Syukur & Gratitude', href: '/chapter/165', warna: '#f59e0b' },
  { num: '166', judul: '8 Pelajaran Terbesar', href: '/chapter/166', warna: '#e63329' },
  { num: '167', judul: 'Salam dari Jember', href: '/chapter/167', warna: '#22c55e' },
  { num: '168', judul: 'Kata-Kata Pamungkas', href: '/chapter/168', warna: '#ffd700' },
  { num: '169', judul: 'Apresiasi Mendalam', href: '/chapter/169', warna: '#f59e0b' },
  { num: '170', judul: '🎭 THE GRAND FINALE', href: '/chapter/170', warna: '#ffd700' },
  // — SPECIAL --
  { num: '★', judul: 'Level Progress Skills', href: '#progress-skills', warna: '#8b5cf6' },
  { num: '◆', judul: 'Testimoni', href: '#testimonials', warna: '#22c55e' },
  { num: 'CV', judul: 'Curriculum Vitae', href: '#cv', warna: '#1a5cff' },
  { num: '?', judul: 'FAQ', href: '#faq', warna: '#f59e0b' },
  { num: '✉', judul: 'Kontak', href: '#contact', warna: '#22c55e' },
]

// Playlist lofi
const playlist = [
  { judul: 'Midnight Coding', artis: 'Lofi Beats' },
  { judul: 'Coffee & Code', artis: 'ChillHop Radio' },
  { judul: 'Late Night Flow', artis: 'Study Beats' },
  { judul: 'Debug Session', artis: 'Lo-Fi Coder' },
  { judul: 'Rainy Window', artis: 'Ambient Works' },
  { judul: 'Stack Overflow', artis: 'Beats by Dev' },
  { judul: 'Commit & Chill', artis: 'Git Flow Music' },
]

function EqualizerMini({ aktif }: { aktif: boolean }) {
  return (
    <div className="flex items-end gap-[2px] h-3">
      {[0.4, 0.8, 0.5, 1, 0.6].map((h, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-t"
          style={{ background: aktif ? '#ffd700' : '#666' }}
          animate={aktif ? { height: [`${h * 12}px`, `${(1 - h) * 10 + 2}px`, `${h * 12}px`] } : { height: '3px' }}
          transition={{ duration: 0.4 + i * 0.1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.07 }}
        />
      ))}
    </div>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [storyOpen, setStoryOpen] = useState(false)
  const [chapterDropOpen, setChapterDropOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [langDropOpen, setLangDropOpen] = useState(false)
  const { lang, setLang, t } = useLang()
  const [musicAktif, setMusicAktif] = useState(false)
  const [laguIdx, setLaguIdx] = useState(0)
  const [cariChapter, setCariChapter] = useState('')
  const dropRef = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  // Dark mode persistence
  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved === 'true') {
      setDarkMode(true)
      document.documentElement.classList.add('dark-mode')
      document.body.classList.add('dark-mode')
    }
    // Bahasa persistence
    const savedLang = localStorage.getItem('lang') as Lang | null
    if (savedLang) { /* handled by context */ }
  }, [])

  // Tutup dropdown saat klik luar
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setChapterDropOpen(false)
        setCariChapter('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Ganti lagu otomatis
  useEffect(() => {
    if (!musicAktif) return
    const t = setInterval(() => setLaguIdx(i => (i + 1) % playlist.length), 30000)
    return () => clearInterval(t)
  }, [musicAktif])

  // Buka command palette
  const bukaCommandPalette = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true }))
  }

  const toggleDark = () => {
    const next = !darkMode
    setDarkMode(next)
    localStorage.setItem('darkMode', String(next))
    if (next) {
      document.documentElement.classList.add('dark-mode')
      document.body.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
      document.body.classList.remove('dark-mode')
    }
  }

  const toggleLang = () => setLangDropOpen(v => !v)

  // Nav links dari terjemahan
  const tautanNav = [
    { name: t.beranda.toUpperCase(), href: '#home' },
    { name: t.tentang.toUpperCase(), href: '#cerita' },
    { name: t.keahlian.toUpperCase(), href: '#skills' },
    { name: t.proyek.toUpperCase(), href: '#projects' },
    { name: t.perjalanan.toUpperCase(), href: '#timeline' },
    { name: t.kontak.toUpperCase(), href: '#contact' },
  ]

  const chapterTersaring = semuaChapter.filter(c =>
    cariChapter === '' ||
    c.judul.toLowerCase().includes(cariChapter.toLowerCase()) ||
    c.num.includes(cariChapter)
  )

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 120 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white border-b-4 border-[#0a0a0a] shadow-[0_4px_0_#0a0a0a]'
          : 'bg-white/95 border-b-2 border-[#0a0a0a]/30'
          }`}
        style={{ background: darkMode ? '#111' : undefined }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex items-center h-14 gap-2">

            {/* — LOGO — */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <div
                className="w-9 h-9 flex items-center justify-center font-comic text-white text-sm"
                style={{ background: '#1a5cff', border: '3px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
              >
                RH
              </div>
              <div className="hidden sm:block">
                <span className="font-comic text-[#0a0a0a] text-base tracking-wide" style={{ color: darkMode ? '#fafaf7' : undefined }}>RIZKI</span>
                <span className="font-comic text-[#1a5cff] text-base tracking-wide ml-1">HABIBI</span>
                <div className="text-[8px] font-bold text-[#0a0a0a]/40 tracking-widest uppercase -mt-0.5">PORTOFOLIO</div>
              </div>
            </motion.a>

            {/* — DESKTOP NAV — */}
            <div className="hidden lg:flex items-center gap-1.5 flex-1 justify-center">
              {/* Nav links utama */}
              <div className="flex items-center border-2 border-[#0a0a0a]" style={{ boxShadow: '2px 2px 0 #0a0a0a' }}>
                {tautanNav.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ backgroundColor: '#ffd700', y: -2 }}
                    transition={{ duration: 0.1 }}
                    className={`font-comic text-[11px] px-3 py-2 text-[#0a0a0a] hover:text-[#0a0a0a] transition-colors whitespace-nowrap ${i < tautanNav.length - 1 ? 'border-r-2 border-[#0a0a0a]' : ''
                      }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* — AKSI KANAN — */}
            <div className="flex items-center gap-1.5 ml-auto">

              {/* 1. CHAPTER DROPDOWN */}
              <div ref={dropRef} className="relative hidden md:block">
                <motion.button
                  onClick={() => { setChapterDropOpen(v => !v); setCariChapter('') }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 font-comic text-[11px] px-3 py-2 text-[#0a0a0a]"
                  style={{ background: '#e8f0ff', border: '2px solid #1a5cff', boxShadow: '2px 2px 0 #1a5cff' }}
                >
                  <FiList className="w-3.5 h-3.5 text-[#1a5cff]" />
                  CHAPTER
                  <motion.span animate={{ rotate: chapterDropOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FiChevronDown className="w-3 h-3 text-[#1a5cff]" />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {chapterDropOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scaleY: 0.8 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -8, scaleY: 0.8 }}
                      transition={{ duration: 0.2, type: 'spring', stiffness: 200 }}
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        right: 0,
                        width: 280,
                        background: '#fafaf7',
                        border: '3px solid #0a0a0a',
                        boxShadow: '5px 5px 0 #0a0a0a',
                        zIndex: 100,
                        transformOrigin: 'top right',
                      }}
                    >
                      {/* Search dalam dropdown */}
                      <div className="p-2 border-b-2 border-[#0a0a0a]">
                        <div className="flex items-center gap-2" style={{ border: '2px solid #0a0a0a', padding: '6px 10px', background: 'white' }}>
                          <FiSearch className="w-3.5 h-3.5 text-[#0a0a0a]/40 flex-shrink-0" />
                          <input
                            type="text"
                            placeholder="Cari chapter..."
                            value={cariChapter}
                            onChange={e => setCariChapter(e.target.value)}
                            className="w-full text-xs font-bold text-[#0a0a0a] outline-none bg-transparent placeholder:text-[#0a0a0a]/30"
                            autoFocus
                          />
                        </div>
                      </div>

                      {/* List chapter */}
                      <div style={{ maxHeight: 320, overflowY: 'auto' }}>
                        {chapterTersaring.length === 0 ? (
                          <div className="p-4 text-center font-bold text-xs text-[#0a0a0a]/40">
                            Chapter tidak ditemukan 🔍
                          </div>
                        ) : (
                          chapterTersaring.map((ch, i) => (
                            <Link
                              key={ch.num}
                              href={ch.href}
                              onClick={() => { setChapterDropOpen(false); setCariChapter('') }}
                              className="flex items-center gap-2.5 px-3 py-2 hover:bg-[#ffd700] transition-colors border-b border-[#0a0a0a]/10 group"
                              style={{ textDecoration: 'none' }}
                            >
                              {/* Kotak nomor */}
                              <div
                                className="w-7 h-7 flex items-center justify-center font-comic text-[9px] text-white flex-shrink-0"
                                style={{ background: ch.warna, border: '1.5px solid #0a0a0a', boxShadow: '1px 1px 0 #0a0a0a' }}
                              >
                                {ch.num}
                              </div>
                              <span className="font-bold text-[11px] text-[#0a0a0a] group-hover:text-[#0a0a0a] truncate">{ch.judul}</span>
                              <span className="ml-auto text-[#0a0a0a]/20 group-hover:text-[#0a0a0a]/40 text-xs">→</span>
                            </Link>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. MY STORY */}
              <motion.button
                onClick={() => setStoryOpen(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-1.5 font-comic text-[11px] px-3 py-2 text-[#0a0a0a]"
                style={{ background: '#ffd700', border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
              >
                <FiBookOpen className="w-3.5 h-3.5" />
                STORY
              </motion.button>

              {/* 3. MUSIK toggle */}
              <motion.button
                onClick={() => setMusicAktif(v => !v)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-1.5 px-2 py-2"
                style={{
                  background: musicAktif ? '#0a0a0a' : '#f0f0eb',
                  border: `2px solid #0a0a0a`,
                  boxShadow: '2px 2px 0 #0a0a0a',
                }}
                title={musicAktif ? `♫ ${playlist[laguIdx].judul}` : 'Nyalakan musik'}
              >
                <EqualizerMini aktif={musicAktif} />
                {musicAktif && (
                  <span className="font-bold text-[9px] text-yellow-400 hidden xl:block max-w-[80px] truncate ml-1">
                    {playlist[laguIdx].judul}
                  </span>
                )}
              </motion.button>

              {/* 4. CTRL+K — Pencarian */}
              <motion.button
                onClick={bukaCommandPalette}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-1 px-2 py-2"
                style={{ background: '#f0f0eb', border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
                title="Command Palette (Ctrl+K)"
              >
                <FiSearch className="w-3.5 h-3.5 text-[#0a0a0a]" />
                <kbd className="font-mono text-[9px] text-[#0a0a0a]/50 hidden lg:block">⌘K</kbd>
              </motion.button>

              {/* TOGGLE BAHASA — Dropdown semua bahasa */}
              <div ref={langRef} className="relative hidden md:block">
                <motion.button
                  onClick={toggleLang}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-2 py-2 font-comic text-xs"
                  style={{
                    background: lang !== 'id' ? '#1a5cff' : '#f0f0eb',
                    color: lang !== 'id' ? 'white' : '#0a0a0a',
                    border: '2px solid #0a0a0a',
                    boxShadow: '2px 2px 0 #0a0a0a',
                    minWidth: 44,
                  }}
                  title="Ganti Bahasa"
                >
                  {namaLang[lang]}
                </motion.button>
                <AnimatePresence>
                  {langDropOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scaleY: 0.8 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -6, scaleY: 0.8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-1 z-50"
                      style={{ background: '#fafaf7', border: '2px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a', minWidth: 100 }}
                    >
                      {(Object.keys(namaLang) as Lang[]).map(l => (
                        <button
                          key={l}
                          onClick={() => { setLang(l); setLangDropOpen(false) }}
                          className="w-full font-comic text-xs px-3 py-2 text-left hover:bg-[#ffd700] transition-colors"
                          style={{ fontWeight: l === lang ? 700 : 400, background: l === lang ? '#ffd70033' : 'transparent' }}
                        >
                          {namaLang[l]}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 5. DARK MODE */}
              <motion.button
                onClick={toggleDark}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95, rotate: 20 }}
                className="flex items-center justify-center w-9 h-9"
                style={{
                  background: darkMode ? '#ffd700' : '#0a0a0a',
                  border: '2px solid #0a0a0a',
                  boxShadow: '2px 2px 0 #0a0a0a',
                }}
                title={darkMode ? 'Mode Terang' : 'Mode Gelap'}
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <FiSun className="w-4 h-4 text-[#0a0a0a]" />
                    </motion.span>
                  ) : (
                    <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <FiMoon className="w-4 h-4 text-white" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* 6. GITHUB */}
              <motion.a
                href="https://github.com/rizki-habibi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center justify-center w-9 h-9"
                style={{ background: '#0a0a0a', border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
                title="GitHub"
              >
                <FiGithub className="w-4 h-4 text-white" />
              </motion.a>

              {/* 7. Tombol Game dihapus */}

              {/* 7. HAMBURGER mobile */}
              <motion.button
                onClick={() => setIsMobileOpen(v => !v)}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden flex items-center justify-center w-9 h-9"
                style={{ border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a', background: isMobileOpen ? '#0a0a0a' : 'white' }}
              >
                <AnimatePresence mode="wait">
                  {isMobileOpen ? (
                    <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                      <FiX className="w-5 h-5 text-white" />
                    </motion.span>
                  ) : (
                    <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                      <FiMenu className="w-5 h-5 text-[#0a0a0a]" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* — MOBILE MENU — */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t-2 border-[#0a0a0a] overflow-hidden"
              style={{ background: '#fafaf7' }}
            >
              <div className="px-4 py-3 space-y-1.5">
                {/* Nav links */}
                {tautanNav.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-between py-2 px-3 font-comic text-[#0a0a0a] border border-[#0a0a0a]/20 hover:bg-[#ffd700] transition-colors"
                  >
                    {link.name}
                    <span className="text-[#0a0a0a]/30 text-xs">→</span>
                  </a>
                ))}

                {/* Baris 2 — aksi */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => { setIsMobileOpen(false); setStoryOpen(true) }}
                    className="flex items-center justify-center gap-1.5 py-2 font-comic text-xs text-[#0a0a0a]"
                    style={{ background: '#ffd700', border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
                  >
                    <FiBookOpen className="w-3.5 h-3.5" /> MY STORY
                  </button>
                  <button
                    onClick={() => { setIsMobileOpen(false); bukaCommandPalette() }}
                    className="flex items-center justify-center gap-1.5 py-2 font-comic text-xs text-[#0a0a0a]"
                    style={{ background: '#e8f0ff', border: '2px solid #1a5cff', boxShadow: '2px 2px 0 #1a5cff' }}
                  >
                    <FiSearch className="w-3.5 h-3.5 text-[#1a5cff]" /> CARI
                  </button>
                  <button
                    onClick={() => setMusicAktif(v => !v)}
                    className="flex items-center justify-center gap-1.5 py-2 font-comic text-xs"
                    style={{
                      background: musicAktif ? '#0a0a0a' : '#f0f0eb',
                      color: musicAktif ? '#ffd700' : '#0a0a0a',
                      border: '2px solid #0a0a0a',
                      boxShadow: '2px 2px 0 #0a0a0a',
                    }}
                  >
                    <FiMusic className="w-3.5 h-3.5" /> {musicAktif ? 'MUSIK ON' : 'MUSIK'}
                  </button>
                  <button
                    onClick={toggleDark}
                    className="flex items-center justify-center gap-1.5 py-2 font-comic text-xs"
                    style={{
                      background: darkMode ? '#ffd700' : '#0a0a0a',
                      color: darkMode ? '#0a0a0a' : 'white',
                      border: '2px solid #0a0a0a',
                      boxShadow: '2px 2px 0 #0a0a0a',
                    }}
                  >
                    {darkMode ? <FiSun className="w-3.5 h-3.5" /> : <FiMoon className="w-3.5 h-3.5" />}
                    {darkMode ? 'TERANG' : 'GELAP'}
                  </button>
                  {/* Toggle bahasa di mobile — semua bahasa */}
                  <div className="col-span-2 grid grid-cols-5 gap-1">
                    {(Object.keys(namaLang) as Lang[]).map(l => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setIsMobileOpen(false) }}
                        className="font-comic text-[10px] py-2 text-center"
                        style={{
                          background: l === lang ? '#1a5cff' : '#f0f0eb',
                          color: l === lang ? 'white' : '#0a0a0a',
                          border: `2px solid ${l === lang ? '#1a5cff' : '#0a0a0a'}`,
                          fontWeight: l === lang ? 700 : 400,
                        }}
                      >
                        {namaLang[l]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chapter navigation mobile */}
                <div style={{ border: '2px solid #0a0a0a', background: 'white' }}>
                  <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-[#0a0a0a]">
                    <FiList className="w-3.5 h-3.5 text-[#1a5cff]" />
                    <span className="font-comic text-xs text-[#0a0a0a]">NAVIGASI CHAPTER</span>
                  </div>
                  <div style={{ maxHeight: 200, overflowY: 'auto' }}>
                    {semuaChapter.slice(0, 20).map(ch => (
                      <Link
                        key={ch.num}
                        href={ch.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#ffd700] transition-colors border-b border-[#0a0a0a]/10"
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="w-6 h-6 flex items-center justify-center font-comic text-[8px] text-white flex-shrink-0"
                          style={{ background: ch.warna, border: '1px solid #0a0a0a' }}>
                          {ch.num}
                        </div>
                        <span className="font-bold text-[11px] text-[#0a0a0a] truncate">{ch.judul}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <a
                  href="https://github.com/rizki-habibi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-3 font-bold text-sm bg-[#0a0a0a] text-white"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>@rizki-habibi</span>
                </a>

                {/* Sosial media di mobile menu */}
                <div className="grid grid-cols-4 gap-1 pt-1">
                  {[
                    { Icon: SiInstagram, href: 'https://instagram.com/rizkihabibi', label: 'Instagram', bg: '#e1306c' },
                    { Icon: SiLinkedin, href: 'https://linkedin.com/in/rizki-habibi', label: 'LinkedIn', bg: '#0a66c2' },
                    { Icon: SiWhatsapp, href: 'https://wa.me/62882009725053', label: 'WhatsApp', bg: '#25d366' },
                    { Icon: FiMail, href: 'mailto:rizkihub7@gmail.com', label: 'Email', bg: '#1a5cff' },
                  ].map(({ Icon, href, label, bg }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileOpen(false)}
                      title={label}
                      className="flex items-center justify-center py-2.5 text-white"
                      style={{ background: bg, border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Story Book Popup */}
      <AnimatePresence>
        {storyOpen && <BukuCerita onTutup={() => setStoryOpen(false)} />}
      </AnimatePresence>

      {/* Widget musik mini (muncul saat musik aktif) */}
      <AnimatePresence>
        {musicAktif && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-14 right-0 z-40"
            style={{
              background: '#0a0a0a',
              borderLeft: '3px solid #ffd700',
              borderBottom: '3px solid #ffd700',
              padding: '6px 14px',
              boxShadow: '-3px 3px 0 #ffd700',
            }}
          >
            <div className="flex items-center gap-2">
              <EqualizerMini aktif={true} />
              <div>
                <div className="font-comic text-[10px] text-yellow-400 leading-none">{playlist[laguIdx].judul}</div>
                <div className="text-[9px] text-white/40 font-bold">{playlist[laguIdx].artis}</div>
              </div>
              <div className="flex gap-1 ml-2">
                <button onClick={() => setLaguIdx(i => (i - 1 + playlist.length) % playlist.length)}
                  className="text-white/40 hover:text-yellow-400 text-xs">⏮</button>
                <button onClick={() => setLaguIdx(i => (i + 1) % playlist.length)}
                  className="text-white/40 hover:text-yellow-400 text-xs">⏭</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
