'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiBookOpen } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'
import Image from 'next/image'

// --- Data Halaman Buku -----------------------------------------
const halaman = [
  {
    id: 0,
    tipe: 'cover',
    judul: 'THE STORY OF\nRIZKI HABIBI',
    subjudul: 'A Web Developer\'s Journey',
    warna: '#1a5cff',
    bg: '#e8f0ff',
    bgGradient: 'linear-gradient(135deg, #1a5cff 0%, #0a0a0a 100%)',
    emoji: '📖',
    isi: '',
    panels: [],
  },
  {
    id: 1,
    tipe: 'chapter',
    label: 'CHAPTER 01',
    judul: 'AWAL MULA',
    subjudul: 'Dari Notepad ke VS Code',
    warna: '#ffd700',
    bg: '#fffbeb',
    emoji: '💻',
    isi: 'Segalanya dimulai dari rasa penasaran -- membuka Notepad dan mengetik <html> pertama kali. Tidak ada tutorial, tidak ada mentor. Hanya coba-coba dan rasa ingin tahu.',
    panels: [
      { icon: '📝', teks: 'Menulis HTML pertama di Notepad tanpa framework apapun', warna: '#ffd700', bg: '#fffbeb' },
      { icon: '🤯', teks: 'Pertama kali browser menampilkan halaman yang dibuat sendiri -- rasanya luar biasa!', warna: '#1a5cff', bg: '#e8f0ff' },
      { icon: '🚀', teks: 'Dari situ, tidak ada jalan kembali. Coding menjadi passion nyata.', warna: '#22c55e', bg: '#f0fdf4' },
    ],
    quote: '"Setiap programmer hebat pernah bingung melihat error pertama mereka."',
  },
  {
    id: 2,
    tipe: 'chapter',
    label: 'CHAPTER 02',
    judul: 'MASUK KULIAH',
    subjudul: 'Institut Teknologi dan Sains Mandala',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    emoji: '🎓',
    isi: 'Melanjutkan ke perguruan tinggi bukan sekadar mencari ijazah. Di sini saya menemukan fondasi ilmu yang sesungguhnya -- algoritma, database, sistem jaringan, dan cara berpikir sebagai engineer.',
    panels: [
      { icon: '🏫', teks: 'S1 Sistem & Teknologi Informasi -- fondasi ilmu yang sesungguhnya', warna: '#8b5cf6', bg: '#f5f0ff' },
      { icon: '🧩', teks: 'Belajar algoritma, struktur data, dan cara berpikir seperti engineer sejati', warna: '#e63329', bg: '#fef2f2' },
      { icon: '👥', teks: 'Bergabung komunitas, ikut seminar, dan mulai membangun jaringan profesional', warna: '#f59e0b', bg: '#fffbeb' },
    ],
    quote: '"Kuliah adalah lab eksperimen -- tempat ide gila menjadi kenyataan."',
  },
  {
    id: 3,
    tipe: 'chapter',
    label: 'CHAPTER 03',
    judul: 'MENGUASAI LARAVEL',
    subjudul: 'Framework Pilihan Utama',
    warna: '#FF2D20',
    bg: '#fff5f5',
    emoji: '⚡',
    isi: 'Laravel bukan hanya framework -- ini adalah cara berpikir dalam membangun aplikasi web yang bersih, terstruktur, dan scalable. Saya jatuh cinta pada elegannya.',
    panels: [
      { icon: '🔥', teks: 'Menguasai Laravel hingga level 90% -- MVC, Eloquent, Artisan, Queue', warna: '#FF2D20', bg: '#fff5f5' },
      { icon: '🗄️', teks: 'MySQL, migrasi database, relasi tabel yang kompleks jadi mudah dikelola', warna: '#4479A1', bg: '#eff6ff' },
      { icon: '🎨', teks: 'Tailwind CSS + Blade -- membangun UI yang cantik dan responsif', warna: '#06B6D4', bg: '#ecfeff' },
    ],
    quote: '"Clean code bukan tentang kesempurnaan -- tentang keterbacaan dan niat."',
  },
  {
    id: 4,
    tipe: 'chapter',
    label: 'CHAPTER 04',
    judul: 'INOVASI IoT',
    subjudul: 'Dari Software ke Hardware',
    warna: '#22c55e',
    bg: '#f0fdf4',
    emoji: '🔧',
    isi: 'Coding saja tidak cukup. Saya mulai merakit sensor, mengintegrasikan hardware dengan software -- monitoring lingkungan dari bahan bekas yang hasilnya nyata.',
    panels: [
      { icon: '🌡️', teks: 'Alat monitoring suhu & kelembaban dari komponen bekas -- IoT nyata bukan teori', warna: '#22c55e', bg: '#f0fdf4' },
      { icon: '📡', teks: 'Integrasi ESP32, sensor DHT, dan dashboard web real-time berbasis Laravel', warna: '#0ea5e9', bg: '#f0f9ff' },
      { icon: '♻️', teks: 'Inovasi dari keterbatasan -- membuktikan bahwa solusi tidak butuh modal besar', warna: '#f59e0b', bg: '#fffbeb' },
    ],
    quote: '"Inovasi sejati lahir dari keberanian berpikir berbeda dengan sumber daya minimal."',
  },
  {
    id: 5,
    tipe: 'chapter',
    label: 'CHAPTER 05',
    judul: 'SERTIFIKASI BNSP',
    subjudul: 'Kompetensi yang Diakui Nasional',
    warna: '#f59e0b',
    bg: '#fffbeb',
    emoji: '🏆',
    isi: 'Setelah latihan keras dan belajar intensif, akhirnya mendapatkan sertifikasi BNSP Junior Web Developer -- bukti kompetensi yang diakui secara nasional.',
    panels: [
      { icon: '📜', teks: 'Sertifikasi BNSP Junior Web Developer -- kompetensi diakui secara nasional', warna: '#f59e0b', bg: '#fffbeb' },
      { icon: '📚', teks: '75+ sertifikat digital dari berbagai platform: Kominfo, Dicoding, dan lainnya', warna: '#8b5cf6', bg: '#f5f0ff' },
      { icon: '🎯', teks: 'Setiap sertifikat adalah bukti nyata komitmen belajar tanpa henti', warna: '#1a5cff', bg: '#e8f0ff' },
    ],
    quote: '"Belajar tidak pernah berhenti -- setiap hari ada hal baru yang menunggu."',
  },
  {
    id: 6,
    tipe: 'chapter',
    label: 'CHAPTER 06',
    judul: 'PROYEK KVT.KOM',
    subjudul: 'Mimpi Besar yang Sedang Dibangun',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    emoji: '🌐',
    isi: 'KVT.kom -- Kampus Virtual Teknologi. Ekosistem digital pertama yang memadukan pendidikan, komunitas kreator, dan platform ekonomi kreatif dalam satu platform.',
    panels: [
      { icon: '🏛️', teks: 'Kampus Virtual Teknologi -- ekosistem pendidikan & kreator digital pertama', warna: '#8b5cf6', bg: '#f5f0ff' },
      { icon: '💰', teks: 'Membuka lapangan kerja digital bagi puluhan kreator dan developer Indonesia', warna: '#22c55e', bg: '#f0fdf4' },
      { icon: '🚀', teks: 'Saat ini dalam pengembangan aktif -- setiap commit adalah langkah menuju mimpi', warna: '#1a5cff', bg: '#e8f0ff' },
    ],
    quote: '"Satu website bisa mengubah hidup banyak orang -- asal dibangun dengan niat yang benar."',
  },
  {
    id: 7,
    tipe: 'chapter',
    label: 'CHAPTER 07',
    judul: 'NEXT.JS & MODERN STACK',
    subjudul: 'Naik Level ke Full Stack Modern',
    warna: '#0a0a0a',
    bg: '#f5f5f0',
    emoji: '⚛️',
    isi: 'Laravel tidak cukup -- saya melompat ke ekosistem modern. Next.js, TypeScript, Tailwind, Framer Motion. Portofolio ini adalah bukti nyata dari stack tersebut.',
    panels: [
      { icon: '⚛️', teks: 'Next.js 14 + TypeScript -- SSR, SSG, App Router yang powerful', warna: '#0a0a0a', bg: '#f5f5f0' },
      { icon: '✨', teks: 'Framer Motion -- animasi yang membuat website hidup dan berkarakter', warna: '#e63329', bg: '#fef2f2' },
      { icon: '🎨', teks: 'Design system komik yang konsisten -- setiap piksel dirancang dengan tujuan', warna: '#ffd700', bg: '#fffbeb' },
    ],
    quote: '"Website terbaik adalah yang membuat pengunjung tersenyum dan betah berlama-lama."',
  },
  {
    id: 8,
    tipe: 'penutup',
    label: 'TO BE CONTINUED...',
    judul: 'CERITA BELUM\nBERAKHIR',
    subjudul: 'Setiap hari adalah chapter baru',
    warna: '#1a5cff',
    bg: '#e8f0ff',
    emoji: '🌟',
    isi: 'Ini baru permulaan. Masih banyak chapter yang belum ditulis -- skripsi, wisuda, karir impian, dan proyek-proyek besar yang sedang direncanakan.',
    panels: [
      { icon: '📝', teks: 'Skripsi yang sedang dikerjakan -- penelitian IoT untuk masa depan', warna: '#1a5cff', bg: '#e8f0ff' },
      { icon: '💼', teks: 'Karir sebagai Full Stack Developer & Tech Entrepreneur yang terus dikejar', warna: '#22c55e', bg: '#f0fdf4' },
      { icon: '🌍', teks: 'Dampak nyata bagi masyarakat melalui teknologi -- itu tujuan utamanya', warna: '#ffd700', bg: '#fffbeb' },
    ],
    quote: '"The best is yet to come. Teruslah menulis ceritamu sendiri."',
  },
]

// --- Efek komiK -----------------------------------
const efekKomik = ['ZAP!', 'POW!', 'WOW!', 'NICE!', 'FLIP!', 'EPIC!']

// --- Komponen Panel Mini --------------------------
function PanelMini({ icon, teks, warna, bg, delay }: { icon: string; teks: string; warna: string; bg: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 140 }}
      className="flex items-start gap-3 p-3"
      style={{ border: `2px solid ${warna}`, background: bg, boxShadow: `3px 3px 0 ${warna}` }}
    >
      <span className="text-xl shrink-0">{icon}</span>
      <p className="text-xs font-bold text-[#0a0a0a] leading-relaxed">{teks}</p>
    </motion.div>
  )
}

// --- Halaman Cover --------------------------------
function HalamanCover({ data }: { data: typeof halaman[0] }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-6 relative overflow-hidden"
      style={{ background: data.bgGradient ?? data.bg }}>
      {/* Halftone dekoratif */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      {/* Bintang pojok */}
      {[{ t: '8%', l: '6%' }, { t: '12%', r: '8%' }, { b: '15%', l: '10%' }, { b: '10%', r: '6%' }].map((pos, i) => (
        <motion.div key={i} className="absolute w-8 h-8"
          style={{ top: pos.t, left: pos.l, bottom: (pos as any).b, right: (pos as any).r }}
          animate={{ rotate: 360, scale: [1, 1.3, 1] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'linear' }}>
          <svg viewBox="0 0 24 24" fill="#ffd700" stroke="#0a0a0a" strokeWidth="1.5">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
        </motion.div>
      ))}

      {/* Label */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="font-comic text-[10px] tracking-[0.3em] text-white/60 border border-white/30 px-4 py-1 mb-6 uppercase">
        INTERACTIVE STORY BOOK
      </motion.div>

      {/* Foto profil */}
      <motion.div initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        className="relative mb-6"
        style={{ width: 100, height: 100, border: '4px solid #ffd700', boxShadow: '6px 6px 0 #ffd700', background: '#e8f0ff', overflow: 'hidden' }}>
        <Image src="/foto/komik-profil.png" alt="Rizki Habibi" fill className="object-cover object-top" />
      </motion.div>

      {/* Judul */}
      <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
        className="font-comic text-3xl sm:text-4xl text-white leading-tight mb-3"
        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', textShadow: '4px 4px 0 rgba(0,0,0,0.3)' }}>
        {data.judul.split('\n').map((l, i) => <span key={i} className="block">{l}</span>)}
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="font-comic text-white/70 text-sm mb-8 tracking-wide">
        {data.subjudul}
      </motion.p>

      {/* Badge */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="font-comic text-sm text-[#0a0a0a] px-6 py-3 flex items-center gap-2"
        style={{ background: '#ffd700', border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a' }}>
        <FiBookOpen className="w-4 h-4" />
        8 CHAPTER MENUNGGU →
      </motion.div>

      {/* Total halaman */}
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="absolute bottom-4 font-comic text-[10px] text-white/40 tracking-widest">
        {halaman.length} HALAMAN  KLIK PANAH UNTUK MULAI
      </motion.p>
    </div>
  )
}

// --- Halaman Chapter -----------------------------
function HalamanChapter({ data, arah }: { data: typeof halaman[0]; arah: number }) {
  return (
    <div className="h-full overflow-y-auto p-5 sm:p-6" style={{ background: data.bg }}>
      {/* Halftone */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #0a0a0a 1px, transparent 1px)', backgroundSize: '12px 12px' }} />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Chapter label */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 }}
          className="font-comic text-[10px] tracking-[0.25em] px-3 py-1 inline-block mb-3"
          style={{ color: data.warna, border: `2px solid ${data.warna}` }}>
          {data.label}
        </motion.div>

        {/* Judul */}
        <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
          className="font-comic text-2xl sm:text-3xl leading-tight mb-1"
          style={{ color: data.warna, textShadow: `3px 3px 0 ${data.warna}33`, WebkitTextStroke: '1px #0a0a0a' }}>
          {data.judul}
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
          className="font-comic text-xs text-[#0a0a0a]/50 tracking-wide mb-4 uppercase">
          {data.subjudul}
        </motion.p>

        {/* Garis pemisah */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.18 }}
          className="h-1 mb-4 origin-left" style={{ background: data.warna }} />

        {/* Emoji besar + teks isi */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex items-start gap-4 p-4 mb-5"
          style={{ background: '#fff', border: '2px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a' }}>
          <span className="text-4xl shrink-0">{data.emoji}</span>
          <p className="text-sm text-[#0a0a0a] font-medium leading-relaxed">{data.isi}</p>
        </motion.div>

        {/* Panel-panel mini */}
        <div className="space-y-2 mb-5">
          {data.panels.map((p, i) => (
            <PanelMini key={i} {...p} delay={0.28 + i * 0.1} />
          ))}
        </div>

        {/* Quote */}
        {data.quote && (
          <motion.div initial={{ opacity: 0, rotate: -1 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.55 }}
            className="p-4 mt-2"
            style={{ background: data.warna + '22', border: `2px solid ${data.warna}`, boxShadow: `4px 4px 0 ${data.warna}44` }}>
            <p className="font-comic text-sm text-[#0a0a0a] italic leading-relaxed">{data.quote}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

// --- Halaman Penutup ------------------------------
function HalamanPenutup({ data }: { data: typeof halaman[0] }) {
  return (
    <div className="h-full overflow-y-auto p-5 sm:p-6 relative" style={{ background: '#0a0a0a' }}>
      {/* Stars background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: `${(i * 37 + 11) % 95}%`, top: `${(i * 53 + 7) % 90}%` }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2, delay: (i * 0.2) % 3, repeat: Infinity }} />
        ))}
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Label */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="font-comic text-[10px] tracking-[0.3em] text-white/40 border border-white/20 px-4 py-1 inline-block mb-4">
          {data.label}
        </motion.div>

        {/* Judul */}
        <motion.h2 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, type: 'spring' }}
          className="font-comic text-3xl sm:text-4xl leading-tight mb-2"
          style={{ color: '#ffd700', WebkitTextStroke: '1px rgba(255,215,0,0.5)' }}>
          {data.judul.split('\n').map((l, i) => <span key={i} className="block">{l}</span>)}
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="font-comic text-white/50 text-sm mb-6 tracking-wide">{data.subjudul}
        </motion.p>

        {/* Isi */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="p-4 mb-5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-white/70 text-sm leading-relaxed">{data.isi}</p>
        </motion.div>

        {/* Panels */}
        <div className="space-y-2 mb-6">
          {data.panels.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 p-3"
              style={{ border: `1px solid ${p.warna}60`, background: p.warna + '10' }}>
              <span className="text-lg shrink-0">{p.icon}</span>
              <p className="text-xs text-white/70 leading-relaxed">{p.teks}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="p-4 text-center mb-6"
          style={{ border: '1px solid rgba(255,215,0,0.3)', background: 'rgba(255,215,0,0.05)' }}>
          <p className="font-comic text-sm text-yellow-300/80 italic">{data.quote}</p>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="text-center space-y-3">
          <div className="font-comic text-white/30 text-xs tracking-widest mb-3">-- BACA LEBIH LENGKAP DI --</div>
          <a href="#about" className="inline-block font-comic text-sm text-[#0a0a0a] px-6 py-3"
            style={{ background: '#ffd700', border: '3px solid #ffd700', boxShadow: '4px 4px 0 rgba(255,215,0,0.4)' }}>
            📖 BACA FULL PORTOFOLIO
          </a>
        </motion.div>
      </div>
    </div>
  )
}

// --- Komponen Utama -------------------------------
export default function StoryBook({ onTutup }: { onTutup: () => void }) {
  const [idx, setIdx] = useState(0)
  const [arah, setArah] = useState(1) // 1 = maju, -1 = mundur
  const [efek, setEfek] = useState('')
  const [efekKey, setEfekKey] = useState(0)
  const [animasi, setAnimasi] = useState(false)

  const total = halaman.length

  const pindah = useCallback((langkah: number) => {
    if (animasi) return
    const target = idx + langkah
    if (target < 0 || target >= total) return

    setAnimasi(true)
    setArah(langkah)

    // Efek komik acak
    if (Math.random() > 0.5) {
      const fx = efekKomik[Math.floor(Math.random() * efekKomik.length)]
      setEfek(fx); setEfekKey(k => k + 1)
      setTimeout(() => setEfek(''), 700)
    }

    setTimeout(() => {
      setIdx(target)
      setAnimasi(false)
    }, 320)
  }, [idx, total, animasi])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') pindah(1)
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') pindah(-1)
      if (e.key === 'Escape') onTutup()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pindah, onTutup])

  const hal = halaman[idx]
  const progress = (idx / (total - 1)) * 100

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(10,10,10,0.88)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onTutup() }}
    >
      {/* Efek komik melayang */}
      <AnimatePresence>
        {efek && (
          <motion.div key={efekKey}
            initial={{ scale: 0, rotate: -20, opacity: 1 }}
            animate={{ scale: 1.4, rotate: 15, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.35, type: 'spring', stiffness: 300 }}
            className="fixed top-1/4 right-1/4 z-[210] font-comic text-2xl text-[#0a0a0a] flex items-center justify-center pointer-events-none"
            style={{
              background: '#ffd700', border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a',
              width: 80, height: 80, borderRadius: '50% 0 50% 0',
            }}>
            {efek}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buku */}
      <motion.div
        initial={{ scale: 0.85, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 40 }}
        transition={{ type: 'spring', stiffness: 100, damping: 18 }}
        className="relative w-full max-w-lg"
        style={{ height: 'min(85vh, 620px)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Shadow buku */}
        <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#0a0a0a] -z-10" />

        {/* Container buku */}
        <div className="relative w-full h-full flex flex-col overflow-hidden"
          style={{ border: '4px solid #0a0a0a', background: '#fafaf7' }}>

          {/* Header bar */}
          <div className="flex items-center justify-between px-4 py-2.5 shrink-0"
            style={{ background: '#0a0a0a', borderBottom: '3px solid #0a0a0a' }}>
            {/* Judul header */}
            <div className="flex items-center gap-2">
              <FiBookOpen className="w-4 h-4 text-yellow-400" />
              <span className="font-comic text-yellow-400 text-xs tracking-widest">STORY BOOK</span>
            </div>

            {/* Indikator halaman */}
            <span className="font-comic text-white/40 text-[10px]">
              {idx + 1} / {total}
            </span>

            {/* Tombol tutup */}
            <motion.button onClick={onTutup} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center"
              style={{ border: '2px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)' }}
              aria-label="Tutup">
              <FiX className="w-4 h-4 text-white/70" />
            </motion.button>
          </div>

          {/* Progress bar */}
          <div className="h-1 shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <motion.div className="h-full" style={{ background: hal.warna ?? '#ffd700' }}
              animate={{ width: `${progress}%` }} transition={{ type: 'spring', stiffness: 60 }} />
          </div>

          {/* Konten halaman */}
          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={idx}
                initial={{ x: arah * 60, opacity: 0, scale: 0.96 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: arah * -60, opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0">
                {hal.tipe === 'cover' && <HalamanCover data={hal} />}
                {hal.tipe === 'chapter' && <HalamanChapter data={hal} arah={arah} />}
                {hal.tipe === 'penutup' && <HalamanPenutup data={hal} />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer navigasi */}
          <div className="shrink-0 flex items-center justify-between px-4 py-3"
            style={{ borderTop: '3px solid #0a0a0a', background: '#fafaf7' }}>

            {/* Tombol sebelumnya */}
            <motion.button onClick={() => pindah(-1)} disabled={idx === 0}
              whileHover={idx > 0 ? { scale: 1.05, x: -2 } : {}}
              whileTap={idx > 0 ? { scale: 0.95 } : {}}
              className="flex items-center gap-1.5 font-comic text-xs px-4 py-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ border: '2px solid #0a0a0a', boxShadow: idx > 0 ? '3px 3px 0 #0a0a0a' : 'none', background: '#fff' }}>
              <FiChevronLeft className="w-4 h-4" />
              SEBELUM
            </motion.button>

            {/* Titik indikator halaman */}
            <div className="flex items-center gap-1">
              {halaman.map((_, i) => (
                <motion.button key={i} onClick={() => { setArah(i > idx ? 1 : -1); setTimeout(() => setIdx(i), 10) }}
                  className="rounded-full transition-all"
                  animate={{ width: i === idx ? 16 : 6, height: 6, background: i === idx ? (hal.warna ?? '#ffd700') : '#0a0a0a30' }}
                  aria-label={`Halaman ${i + 1}`} />
              ))}
            </div>

            {/* Tombol berikutnya */}
            <motion.button onClick={() => pindah(1)} disabled={idx === total - 1}
              whileHover={idx < total - 1 ? { scale: 1.05, x: 2 } : {}}
              whileTap={idx < total - 1 ? { scale: 0.95 } : {}}
              className="flex items-center gap-1.5 font-comic text-xs px-4 py-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                border: '2px solid #0a0a0a',
                boxShadow: idx < total - 1 ? '3px 3px 0 #0a0a0a' : 'none',
                background: idx < total - 1 ? (hal.warna ?? '#ffd700') : '#fff',
                color: '#0a0a0a',
              }}>
              LANJUT
              <FiChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Petunjuk keyboard -- hanya desktop */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-white/25 text-[10px] tracking-widest">
        ← → untuk navigasi  ESC untuk tutup
      </motion.div>
    </motion.div>
  )
}

// --- Tombol Pembuka (diekspos untuk dipakai di tempat lain) ----
export function TombolStoryBook() {
  const [buka, setBuka] = useState(false)

  return (
    <>
      <motion.button
        onClick={() => setBuka(true)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 font-comic text-xs px-4 py-2 text-[#0a0a0a]"
        style={{ background: '#ffd700', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
      >
        <FiBookOpen className="w-3.5 h-3.5" />
        MY STORY
      </motion.button>

      <AnimatePresence>
        {buka && <StoryBook onTutup={() => setBuka(false)} />}
      </AnimatePresence>
    </>
  )
}
