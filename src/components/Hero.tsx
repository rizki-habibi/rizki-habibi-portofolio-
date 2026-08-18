'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiArrowDown } from 'react-icons/fi'

const typingTexts = ['Web Developer', 'Laravel Engineer', 'Next.js Creator', 'UI/UX Explorer', 'BNSP Certified']

function TypingText() {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  useEffect(() => {
    const cur = typingTexts[textIndex]
    const t = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < cur.length) setCharIndex(c => c + 1)
        else setTimeout(() => setIsDeleting(true), 1500)
      } else {
        if (charIndex > 0) setCharIndex(c => c - 1)
        else { setIsDeleting(false); setTextIndex(i => (i + 1) % typingTexts.length) }
      }
    }, isDeleting ? 40 : 80)
    return () => clearTimeout(t)
  }, [charIndex, isDeleting, textIndex])
  return <span className="text-comic-blue">{typingTexts[textIndex].slice(0, charIndex)}<span className="typing-cursor">|</span></span>
}

const stars = [
  { top: '12%', left: '5%', size: 24, delay: 0 },
  { top: '25%', left: '92%', size: 20, delay: 0.3 },
  { top: '65%', left: '3%', size: 18, delay: 0.6 },
  { top: '80%', left: '88%', size: 22, delay: 0.9 },
  { top: '45%', left: '96%', size: 16, delay: 1.2 },
  { top: '10%', left: '60%', size: 14, delay: 0.4 },
]

function Star({ top, left, size, delay }: { top: string; left: string; size: number; delay: number }) {
  return (
    <motion.div style={{ position: 'absolute', top, left, width: size, height: size, pointerEvents: 'none', zIndex: 1 }}
      animate={{ scale: [1, 1.4, 1], rotate: [0, 20, -20, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, delay, ease: 'easeInOut' }}>
      <svg viewBox="0 0 24 24" fill="#ffd700" stroke="#0a0a0a" strokeWidth="1.5">
        <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
      </svg>
    </motion.div>
  )
}

// Efek komik: ZAP / POW / BOOM muncul saat klik toggle
const comicEffects = ['ZAP!', 'POW!', 'WOW!', 'NICE!', 'COOL!']

export default function Hero() {
  const [isKomik, setIsKomik] = useState(true)
  const [showEffect, setShowEffect] = useState('')
  const [effectKey, setEffectKey] = useState(0)

  const handleToggle = () => {
    const effect = comicEffects[Math.floor(Math.random() * comicEffects.length)]
    setShowEffect(effect)
    setEffectKey(k => k + 1)
    setIsKomik(v => !v)
    setTimeout(() => setShowEffect(''), 800)
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-16 flex flex-col" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      {/* Speed lines kiri */}
      <div className="absolute left-0 top-0 w-1/3 h-full pointer-events-none opacity-[0.04]"
        style={{ background: 'repeating-conic-gradient(from 0deg at 0% 50%,#0a0a0a 0deg,transparent 1deg,transparent 5deg)' }} />

      {stars.map((s, i) => <Star key={i} {...s} />)}
      <div className="comic-divider" />

      <div className="flex-1 flex items-center px-4 max-w-7xl mx-auto w-full py-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-6 w-full items-center">

          {/* KIRI */}
          <div className="lg:col-span-3 order-2 lg:order-1 space-y-5">
            <motion.div initial={{ opacity: 0, scale: 0, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }} className="speech-bubble text-sm inline-block">
              🙌 Selamat datang di cerita perjalanan saya!
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <div className="font-comic text-5xl md:text-6xl leading-none mb-1" style={{ color: '#0a0a0a', WebkitTextStroke: '2px #0a0a0a' }}>HALO!</div>
              <div className="font-comic leading-none">
                <span className="block text-5xl md:text-7xl" style={{ color: '#0a0a0a' }}>SAYA</span>
                <span className="block text-5xl md:text-7xl" style={{ color: '#1a5cff', WebkitTextStroke: '2px #0a0a0a', textShadow: '4px 4px 0 #0a0a0a' }}>RIZKI HABIBI</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="comic-panel inline-block px-4 py-2">
              <p className="font-comic text-base md:text-lg text-comic-black tracking-wide">PENGEMBANG WEB • KREATOR • PEMECAH MASALAH</p>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="font-bold text-lg text-comic-black">
              <TypingText />
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="comic-panel-blue p-4 max-w-lg">
              <p className="text-comic-black text-sm leading-relaxed font-medium">
                Mahasiswa Program Studi <strong>Sistem &amp; Teknologi Informasi</strong> di Institut Teknologi dan Sains Mandala.
                Memiliki minat di web programming, analisis sistem, dan inovasi teknologi. Saat ini sedang menjalani penelitian skripsi.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-3 text-xs font-bold text-comic-black">
              <a href="tel:+62882009725053" className="flex items-center gap-1 hover:text-comic-blue transition-colors">📞 +62 882-009-725-053</a>
              <span className="text-comic-black/30">|</span>
              <a href="mailto:rizkihabibi2432@gmail.com" className="flex items-center gap-1 hover:text-comic-blue transition-colors">✉️ rizkihabibi2432@gmail.com</a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-comic-blue">MULAI MEMBACA →</a>
              <a href="#projects" className="btn-comic-outline">LIHAT PROYEK</a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="flex flex-wrap gap-3 mt-2">
              {[
                { icon: '📁', num: '5+', label: 'PROYEK SELESAI' },
                { icon: '</>', num: '10+', label: 'TEKNOLOGI' },
                { icon: '📅', num: '3+', label: 'TAHUN CODING' },
                { icon: '🚀', num: '100%', label: 'SEMANGAT' },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className="flex items-center gap-2 px-3 py-2 bg-white"
                  style={{ border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}>
                  <span className="text-base">{stat.icon}</span>
                  <div>
                    <div className="font-comic text-xl leading-none text-comic-blue">{stat.num}</div>
                    <div className="text-[9px] font-bold text-comic-black/60 tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* KANAN — Foto dengan toggle komik/asli */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col items-center gap-4">

            {/* Speech bubble kanan */}
            <motion.div initial={{ opacity: 0, scale: 0, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 180 }} className="speech-bubble-right text-xs self-end mr-4">
              💻 Kode adalah senjata,<br />logika adalah kekuatan!
            </motion.div>

            {/* Frame foto */}
            <motion.div initial={{ opacity: 0, scale: 0.85, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.6, type: 'spring' }} className="relative" whileHover={{ rotate: -1, scale: 1.02 }}>

              {/* Comic effect pop */}
              <AnimatePresence>
                {showEffect && (
                  <motion.div key={effectKey}
                    initial={{ scale: 0, rotate: -20, opacity: 1 }}
                    animate={{ scale: 1.3, rotate: 10, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
                    className="absolute -top-8 -right-8 z-20 font-comic text-2xl text-comic-black px-3 py-1"
                    style={{
                      background: '#ffd700',
                      border: '3px solid #0a0a0a',
                      boxShadow: '4px 4px 0 #0a0a0a',
                      clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: 80, height: 80,
                    }}>
                    {showEffect}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Panel foto */}
              <div className="relative overflow-hidden" style={{ width: 280, height: 360, border: '4px solid #0a0a0a', boxShadow: '8px 8px 0 #0a0a0a', background: '#e8f0ff' }}>
                <AnimatePresence mode="wait">
                  {isKomik ? (
                    <motion.div key="komik" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                      <Image src="/foto/komik-profil.png" alt="Rizki Habibi Komik" fill className="object-cover object-top" priority />
                      {/* Label KOMIK */}
                      <div className="absolute top-2 left-2 font-comic text-[10px] text-white px-2 py-0.5" style={{ background: '#1a5cff', border: '2px solid #0a0a0a' }}>
                        🎨 KOMIK
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="asli" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                      <Image src="/foto/profil.jpeg" alt="Rizki Habibi" fill className="object-cover object-top" priority />
                      {/* Label ASLI */}
                      <div className="absolute top-2 left-2 font-comic text-[10px] text-white px-2 py-0.5" style={{ background: '#e63329', border: '2px solid #0a0a0a' }}>
                        📷 ASLI
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Overlay gradient */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(26,92,255,0.15) 100%)' }} />
              </div>

              {/* TOMBOL TOGGLE */}
              <motion.button
                onClick={handleToggle}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-comic text-xs text-comic-black px-4 py-2 flex items-center gap-2 whitespace-nowrap z-10"
                style={{ background: '#ffd700', border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a' }}
              >
                {isKomik ? '📷 LIHAT FOTO ASLI' : '🎨 LIHAT VERSI KOMIK'}
              </motion.button>

              {/* AVAILABLE badge */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
                className="absolute -bottom-14 left-1/2 -translate-x-1/2 px-4 py-1.5 font-comic text-comic-black text-xs whitespace-nowrap"
                style={{ background: '#22c55e', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}>
                ✅ AVAILABLE FOR WORK
              </motion.div>

              {/* Bintang burst pojok kanan */}
              <motion.div initial={{ opacity: 0, scale: 0, rotate: 15 }} animate={{ opacity: 1, scale: 1, rotate: 12 }}
                transition={{ delay: 1, type: 'spring' }}
                className="absolute -top-4 -right-4 w-16 h-16 flex items-center justify-center font-comic text-xs text-center text-comic-black leading-tight"
                style={{ background: '#ffd700', border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a', clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }}>
                LET&apos;S<br />BUILD!
              </motion.div>
            </motion.div>

            {/* Thought bubble bawah */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
              className="thought-bubble text-xs text-center mt-16 self-start ml-4">
              📖 Siap melihat cerita<br />selengkapnya?
            </motion.div>
          </div>
        </div>
      </div>

      <div className="comic-divider" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="flex flex-col items-center py-4 gap-1 relative z-10">
        <span className="font-comic text-xs text-comic-black/50 tracking-widest">GULIR KE BAWAH</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
          <FiArrowDown className="w-5 h-5 text-comic-black/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
