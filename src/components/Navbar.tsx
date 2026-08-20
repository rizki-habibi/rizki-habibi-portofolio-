'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiMenu, FiX, FiBookOpen, FiSearch, FiMusic, FiList, FiChevronDown, FiMoon, FiSun, FiCommand } from 'react-icons/fi'
import StoryBook from '@/components/StoryBook'

const navLinks = [
  { name: 'BERANDA', href: '#home' },
  { name: 'TENTANG', href: '#cerita' },
  { name: 'KEAHLIAN', href: '#skills' },
  { name: 'PROYEK', href: '#projects' },
  { name: 'PERJALANAN', href: '#timeline' },
  { name: 'KONTAK', href: '#contact' },
]

// Semua chapter untuk dropdown navigasi
const semuaChapter = [
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
  { num: '16', judul: 'Website Desa Digital', href: '#ch16', warna: '#22c55e' },
  { num: '17', judul: 'QRIS Donasi', href: '#ch17', warna: '#1a5cff' },
  { num: '18', judul: 'Website Global Map', href: '#ch18', warna: '#0891b2' },
  { num: '19', judul: 'Karir & Profesional', href: '#ch19', warna: '#f59e0b' },
  { num: '20', judul: 'Website Komersial', href: '#ch20', warna: '#8b5cf6' },
  { num: '21', judul: 'Sistem Pemerintah', href: '#ch21', warna: '#e63329' },
  { num: '22', judul: 'Platform Edukasi', href: '#ch22', warna: '#8b5cf6' },
  { num: '23', judul: 'Membangun Startup', href: '#ch23', warna: '#f59e0b' },
  { num: '24', judul: 'Teknologi Sosial', href: '#ch24', warna: '#22c55e' },
  { num: '25', judul: 'Kolaborasi Lintas Bidang', href: '#ch25', warna: '#1a5cff' },
  { num: '26', judul: 'AI Journey', href: '#ch26', warna: '#8b5cf6' },
  { num: '27', judul: 'Tech Stack Masa Depan', href: '#ch27', warna: '#0891b2' },
  { num: '28', judul: 'Open Source', href: '#ch28', warna: '#22c55e' },
  { num: '29', judul: 'Cyber Security', href: '#ch29', warna: '#e63329' },
  { num: '30', judul: 'Cloud & DevOps', href: '#ch30', warna: '#1a5cff' },
  { num: '62', judul: 'Game Life: Pokemon GO', href: '#ch62', warna: '#22c55e' },
  { num: '63', judul: 'Dunia Kartu: Yugioh', href: '#ch63', warna: '#f59e0b' },
  { num: '64', judul: 'Strategi & Taktik', href: '#ch64', warna: '#e63329' },
  { num: '65', judul: 'Kingdom Builder', href: '#ch65', warna: '#8b5cf6' },
  { num: '66', judul: 'Dragon & Petualangan', href: '#ch66', warna: '#e63329' },
  { num: '70', judul: 'Inovasi Tanpa Batas', href: '#ch70', warna: '#1a5cff' },
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
  const [musicAktif, setMusicAktif] = useState(false)
  const [laguIdx, setLaguIdx] = useState(0)
  const [cariChapter, setCariChapter] = useState('')
  const dropRef = useRef<HTMLDivElement>(null)

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white border-b-4 border-[#0a0a0a] shadow-[0_4px_0_#0a0a0a]'
            : 'bg-white/95 border-b-2 border-[#0a0a0a]/30'
        }`}
        style={{ background: darkMode ? '#111' : undefined }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex items-center h-14 gap-2">

            {/* ── LOGO ── */}
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

            {/* ── DESKTOP NAV ── */}
            <div className="hidden lg:flex items-center gap-1.5 flex-1 justify-center">
              {/* Nav links utama */}
              <div className="flex items-center border-2 border-[#0a0a0a]" style={{ boxShadow: '2px 2px 0 #0a0a0a' }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ backgroundColor: '#ffd700', y: -2 }}
                    transition={{ duration: 0.1 }}
                    className={`font-comic text-[11px] px-3 py-2 text-[#0a0a0a] hover:text-[#0a0a0a] transition-colors whitespace-nowrap ${
                      i < navLinks.length - 1 ? 'border-r-2 border-[#0a0a0a]' : ''
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ── AKSI KANAN ── */}
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
                            <motion.a
                              key={ch.num}
                              href={ch.href}
                              onClick={() => { setChapterDropOpen(false); setCariChapter('') }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.02 }}
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
                            </motion.a>
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

        {/* ── MOBILE MENU ── */}
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
                {navLinks.map(link => (
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
                </div>

                {/* Chapter navigation mobile */}
                <div style={{ border: '2px solid #0a0a0a', background: 'white' }}>
                  <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-[#0a0a0a]">
                    <FiList className="w-3.5 h-3.5 text-[#1a5cff]" />
                    <span className="font-comic text-xs text-[#0a0a0a]">NAVIGASI CHAPTER</span>
                  </div>
                  <div style={{ maxHeight: 200, overflowY: 'auto' }}>
                    {semuaChapter.slice(0, 20).map(ch => (
                      <a
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
                      </a>
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Story Book Popup */}
      <AnimatePresence>
        {storyOpen && <StoryBook onTutup={() => setStoryOpen(false)} />}
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
