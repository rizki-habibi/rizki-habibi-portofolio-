'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiArrowDown } from 'react-icons/fi'

const teksRotasi = ['Web Developer', 'Laravel Engineer', 'Next.js Creator', 'UI/UX Explorer', 'BNSP Certified', 'IoT Innovator']

function TeksAnimasi() {
  const [indeksTeks, setIndeksTeks] = useState(0)
  const [indeksKarakter, setIndeksKarakter] = useState(0)
  const [sedangHapus, setSedangHapus] = useState(false)
  useEffect(() => {
    const teksSaatIni = teksRotasi[indeksTeks]
    const pewaktu = setTimeout(() => {
      if (!sedangHapus) {
        if (indeksKarakter < teksSaatIni.length) setIndeksKarakter(c => c + 1)
        else setTimeout(() => setSedangHapus(true), 1500)
      } else {
        if (indeksKarakter > 0) setIndeksKarakter(c => c - 1)
        else { setSedangHapus(false); setIndeksTeks(i => (i + 1) % teksRotasi.length) }
      }
    }, sedangHapus ? 40 : 80)
    return () => clearTimeout(pewaktu)
  }, [indeksKarakter, sedangHapus, indeksTeks])
  return (
    <span className="text-comic-blue">
      {teksRotasi[indeksTeks].slice(0, indeksKarakter)}
      <span className="typing-cursor">|</span>
    </span>
  )
}

const daftarBintang = [
  { top: '8%', left: '4%', size: 28, delay: 0 },
  { top: '22%', left: '91%', size: 22, delay: 0.3 },
  { top: '60%', left: '2%', size: 20, delay: 0.6 },
  { top: '78%', left: '87%', size: 24, delay: 0.9 },
  { top: '42%', left: '95%', size: 16, delay: 1.2 },
  { top: '88%', left: '40%', size: 18, delay: 0.5 },
  { top: '15%', left: '55%', size: 14, delay: 0.8 },
  { top: '50%', left: '48%', size: 12, delay: 1.4 },
]

function BintangDekoratif({ top, left, size, delay }: { top: string; left: string; size: number; delay: number }) {
  return (
    <motion.div
      style={{ position: 'absolute', top, left, width: size, height: size, pointerEvents: 'none', zIndex: 1 }}
      animate={{ scale: [1, 1.5, 1], rotate: [0, 20, -20, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, delay }}>
      <svg viewBox="0 0 24 24" fill="#ffd700" stroke="#0a0a0a" strokeWidth="1.5">
        <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
      </svg>
    </motion.div>
  )
}

const efekKomik = ['ZAP!', 'POW!', 'WOW!', 'NICE!', 'COOL!', 'EPIC!']

const statistikMini = [
  { icon: '🏆', label: 'BNSP', sub: 'Certified', color: '#f59e0b' },
  { icon: '🌐', label: 'KVT.kom', sub: 'In Progress', color: '#8b5cf6' },
  { icon: '♻️', label: 'IoT', sub: 'Inovator', color: '#22c55e' },
]

const chipTeknologi = ['Laravel', 'Next.js', 'PHP', 'MySQL', 'Tailwind', 'IoT', 'AI/ML']

const pencapaianCepat = [
  { emoji: '🏅', text: '75+ Sertifikat' },
  { emoji: '💻', text: '5+ Proyek' },
  { emoji: '🎓', text: '3+ Tahun' },
  { emoji: '🔧', text: 'Inovator IoT' },
]

export default function Hero() {
  const [tampilKomik, setTampilKomik] = useState(true)
  const [tampilEfek, setTampilEfek] = useState('')
  const [kunciEfek, setKunciEfek] = useState(0)

  const tanganiToggle = () => {
    const efek = efekKomik[Math.floor(Math.random() * efekKomik.length)]
    setTampilEfek(efek)
    setKunciEfek(k => k + 1)
    setTampilKomik(v => !v)
    setTimeout(() => setTampilEfek(''), 900)
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-16 flex flex-col w-full" style={{ background: '#fafaf7', maxWidth: '100vw' }}>
      <div className="halftone-bg" />
      <div className="absolute left-0 top-0 w-1/3 h-full pointer-events-none opacity-[0.04]"
        style={{ background: 'repeating-conic-gradient(from 0deg at 0% 50%,#0a0a0a 0deg,transparent 1deg,transparent 5deg)' }} />
      <div className="absolute right-0 top-0 w-1/4 h-full pointer-events-none opacity-[0.03]"
        style={{ background: 'repeating-conic-gradient(from 180deg at 100% 50%,#1a5cff 0deg,transparent 1deg,transparent 6deg)' }} />

      <div className="hidden sm:block">
        {daftarBintang.map((b, i) => <BintangDekoratif key={i} {...b} />)}
      </div>
      <div className="comic-divider" />

      <div className="flex-1 flex items-center px-3 sm:px-4 max-w-7xl mx-auto w-full py-6 sm:py-8 relative z-10 overflow-x-hidden">
        <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 w-full items-start overflow-x-hidden">

          {/* ===== KIRI ===== */}
          <div className="lg:col-span-3 order-2 lg:order-1 space-y-3 sm:space-y-4 w-full min-w-0">

            <motion.div initial={{ opacity: 0, scale: 0, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }} className="speech-bubble text-xs sm:text-sm inline-block max-w-full">
              🙌 Selamat datang di cerita perjalanan saya!
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <div className="font-comic text-4xl sm:text-5xl md:text-6xl leading-none mb-1" style={{ color: '#0a0a0a', WebkitTextStroke: '2px #0a0a0a' }}>HALO!</div>
              <div className="font-comic leading-none">
                <span className="block text-4xl sm:text-5xl md:text-7xl" style={{ color: '#0a0a0a' }}>SAYA</span>
                <span className="block text-4xl sm:text-5xl md:text-7xl" style={{ color: '#1a5cff', WebkitTextStroke: '2px #0a0a0a', textShadow: '4px 4px 0 #0a0a0a' }}>RIZKI HABIBI</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="comic-panel inline-block px-3 sm:px-4 py-2 max-w-full">
              <p className="font-comic text-[10px] sm:text-xs md:text-sm text-comic-black tracking-wide leading-relaxed">
                PENGEMBANG WEB • KREATOR • PEMECAH MASALAH • INOVATOR
              </p>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="font-bold text-base sm:text-lg text-comic-black">
              <TeksAnimasi />
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="comic-panel-blue p-3 sm:p-4 w-full max-w-lg">
              <p className="text-comic-black text-xs sm:text-sm leading-relaxed font-medium">
                Mahasiswa <strong>Sistem &amp; Teknologi Informasi</strong> di Institut Teknologi dan Sains Mandala.
                Passion di web programming, inovasi IoT, dan membangun ekosistem digital.
                Sedang menjalani penelitian skripsi sambil mengembangkan platform <strong>KVT.kom</strong>.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
              className="comic-panel-yellow p-3 w-full max-w-lg">
              <p className="font-comic text-xs sm:text-sm text-comic-black italic">
                &ldquo;Setiap baris kode adalah langkah menuju solusi.&rdquo;
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 }} className="flex flex-wrap gap-1.5 sm:gap-2">
              {chipTeknologi.map((chip, i) => (
                <motion.span key={chip} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55 + i * 0.06 }}
                  whileHover={{ y: -3, scale: 1.08 }}
                  className="font-bold text-[10px] sm:text-xs px-2 sm:px-3 py-1 text-comic-black bg-white"
                  style={{ border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}>
                  {chip}
                </motion.span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.54 }} className="flex flex-col xs:flex-row flex-wrap gap-1.5 sm:gap-3 text-[10px] sm:text-xs font-bold text-comic-black">
              <a href="tel:+62882009725053" className="flex items-center gap-1 hover:text-comic-blue transition-colors">📞 +62 882-009-725-053</a>
              <span className="text-comic-black/30 hidden xs:block">|</span>
              <a href="mailto:rizkihabibi2432@gmail.com" className="flex items-center gap-1 hover:text-comic-blue transition-colors truncate-responsive">✉️ rizkihabibi2432@gmail.com</a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }} className="flex flex-wrap gap-1.5 sm:gap-2">
              {pencapaianCepat.map((pencapaian, i) => (
                <motion.div key={pencapaian.text} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.07 }}
                  whileHover={{ y: -2 }} className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-white font-bold text-[10px] sm:text-xs text-comic-black"
                  style={{ border: '2px solid #1a5cff', boxShadow: '2px 2px 0 #1a5cff' }}>
                  <span>{pencapaian.emoji}</span><span>{pencapaian.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-2 sm:gap-3">
              <a href="#projects" className="btn-comic-blue text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6">MULAI MEMBACA →</a>
              <a href="#projects" className="btn-comic-outline text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6">LIHAT PROYEK</a>
              <a href="#cv" className="btn-comic text-xs sm:text-sm py-2 px-3 sm:px-5">📄 CV</a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="flex flex-wrap gap-2 sm:gap-3 mt-1">
              {[
                { icon: '📁', angka: '5+', label: 'PROYEK' },
                { icon: '</>', angka: '10+', label: 'TEKNOLOGI' },
                { icon: '📅', angka: '3+', label: 'TAHUN' },
                { icon: '🏆', angka: '75+', label: 'SERTIFIKAT' },
                { icon: '🚀', angka: '100%', label: 'SEMANGAT' },
              ].map((statistik, i) => (
                <motion.div key={statistik.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + i * 0.07 }}
                  className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white"
                  style={{ border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}>
                  <span className="text-sm sm:text-base">{statistik.icon}</span>
                  <div>
                    <div className="font-comic text-base sm:text-xl leading-none text-comic-blue">{statistik.angka}</div>
                    <div className="text-[8px] sm:text-[9px] font-bold text-comic-black/60 tracking-wider">{statistik.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.75 }}
              className="inline-flex items-center gap-2 sm:gap-3 p-2 sm:p-3 max-w-full sm:max-w-sm"
              style={{ background: '#f5f0ff', border: '2px solid #8b5cf6', boxShadow: '4px 4px 0 #8b5cf6' }}>
              <span className="text-xl sm:text-2xl flex-shrink-0">🌐</span>
              <div className="min-w-0">
                <div className="font-comic text-xs sm:text-sm text-comic-black">KVT.KOM — <span style={{ color: '#8b5cf6' }}>IN PROGRESS</span></div>
                <div className="text-[9px] sm:text-[10px] font-bold text-comic-black/50">Kampus Digital Vtuber Pertama</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.78 }} className="flex flex-wrap gap-2">
              {[
                { label: 'GitHub', href: 'https://github.com/rizki-habibi', color: '#0a0a0a', bg: '#f0f0eb' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/rizki-habibi', color: '#0a66c2', bg: '#e8f2ff' },
                { label: 'WhatsApp', href: 'https://wa.me/62882009725053', color: '#25d366', bg: '#f0fff4' },
              ].map(sosial => (
                <a key={sosial.label} href={sosial.href} target="_blank" rel="noopener noreferrer"
                  className="font-bold text-[10px] sm:text-xs px-2 sm:px-3 py-1.5"
                  style={{ background: sosial.bg, border: `2px solid ${sosial.color}`, boxShadow: `2px 2px 0 ${sosial.color}`, color: sosial.color }}>
                  {sosial.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ===== KANAN ===== */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col items-center gap-2 sm:gap-3 w-full overflow-hidden">

            <motion.div initial={{ opacity: 0, scale: 0, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 180 }} className="speech-bubble-right text-[10px] sm:text-xs self-end mr-2 sm:mr-4 hidden sm:inline-block">
              💻 Kode adalah senjata,<br />logika adalah kekuatan!
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -20, rotate: -5 }} animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="self-end relative overflow-hidden hidden sm:block"
              style={{ width: 80, height: 100, border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #f59e0b', background: '#fffbeb' }}>
              <Image src="/foto/komik-veteran.png" alt="Veteran" fill className="object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 py-0.5 text-center font-comic text-[8px] text-white"
                style={{ background: '#f59e0b', borderTop: '2px solid #0a0a0a' }}>VETERAN</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.85, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.6, type: 'spring' }} className="relative" whileHover={{ rotate: -1, scale: 1.02 }}>

              <AnimatePresence>
                {tampilEfek && (
                  <motion.div key={kunciEfek}
                    initial={{ scale: 0, rotate: -20, opacity: 1 }} animate={{ scale: 1.3, rotate: 10, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
                    className="absolute -top-8 sm:-top-10 -right-8 sm:-right-10 z-20 font-comic text-base sm:text-xl text-comic-black flex items-center justify-center"
                    style={{
                      background: '#ffd700', border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a',
                      width: 60, height: 60, clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'
                    }}>
                    {tampilEfek}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative overflow-hidden"
                style={{ width: 'min(220px, 65vw)', height: 'min(290px, 85vw)', border: '4px solid #0a0a0a', boxShadow: '8px 8px 0 #0a0a0a', background: '#e8f0ff' }}>
                <AnimatePresence mode="wait">
                  {tampilKomik ? (
                    <motion.div key="komik" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                      <Image src="/foto/komik-profil.png" alt="Rizki Komik" fill className="object-cover object-top" priority />
                      <div className="absolute top-2 left-2 font-comic text-[9px] sm:text-[10px] text-white px-1.5 sm:px-2 py-0.5" style={{ background: '#1a5cff', border: '2px solid #0a0a0a' }}>🎨 KOMIK</div>
                    </motion.div>
                  ) : (
                    <motion.div key="asli" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                      <Image src="/foto/profil.jpeg" alt="Rizki Habibi" fill className="object-cover object-top" priority />
                      <div className="absolute top-2 left-2 font-comic text-[9px] sm:text-[10px] text-white px-1.5 sm:px-2 py-0.5" style={{ background: '#e63329', border: '2px solid #0a0a0a' }}>📷 ASLI</div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom,transparent 60%,rgba(26,92,255,0.15) 100%)' }} />
              </div>

              <motion.button onClick={tanganiToggle} whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.92 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-comic text-[10px] sm:text-xs text-comic-black px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap z-10"
                style={{ background: '#ffd700', border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a' }}>
                {tampilKomik ? '📷 FOTO ASLI' : '🎨 VERSI KOMIK'}
              </motion.button>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
                className="absolute -bottom-14 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 sm:py-1.5 font-comic text-comic-black text-[10px] sm:text-xs whitespace-nowrap"
                style={{ background: '#22c55e', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}>
                ✅ AVAILABLE FOR WORK
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0, rotate: 15 }} animate={{ opacity: 1, scale: 1, rotate: 12 }} transition={{ delay: 1, type: 'spring' }}
                className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center font-comic text-[9px] sm:text-xs text-center text-comic-black leading-tight"
                style={{ background: '#ffd700', border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a', clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }}>
                LET&apos;S<br />BUILD!
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="flex gap-1.5 sm:gap-2 mt-14 sm:mt-16">
              {statistikMini.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center p-1.5 sm:p-2 bg-white text-center"
                  style={{ border: `2px solid ${stat.color}`, boxShadow: `2px 2px 0 ${stat.color}`, minWidth: 58 }}>
                  <span className="text-lg sm:text-xl mb-0.5">{stat.icon}</span>
                  <div className="font-comic text-[9px] sm:text-[10px] font-bold text-comic-black" style={{ color: stat.color }}>{stat.label}</div>
                  <div className="text-[8px] sm:text-[9px] text-comic-black/50 font-bold">{stat.sub}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="thought-bubble text-[10px] sm:text-xs text-center self-start ml-2">
              📖 Siap melihat cerita<br />selengkapnya?
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 5 }}
              transition={{ delay: 1.4, type: 'spring', stiffness: 150 }}
              className="self-end relative overflow-hidden hidden sm:block"
              style={{ width: 60, height: 70, border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #1a5cff', background: '#e8f0ff' }}>
              <Image src="/foto/kuro.png" alt="Kuro Mascot" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="comic-divider" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex flex-col items-center py-4 gap-1 relative z-10">
        <span className="font-comic text-xs text-comic-black/50 tracking-widest">GULIR KE BAWAH</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
          <FiArrowDown className="w-5 h-5 text-comic-black/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
