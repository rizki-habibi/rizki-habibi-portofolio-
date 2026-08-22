'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  FiX,
  FiGithub, FiMail, FiPhone, FiLinkedin, FiExternalLink,
  FiZap,
} from 'react-icons/fi'

/* ─────────────────────────────────────────────
   TIPE DATA
───────────────────────────────────────────── */
interface DataPanel {
  num: string
  judul: string
  warnaBg: string
  warnaAksent: string
  zIndex: number
  col: number
  row: number
  konten: React.ReactNode
  cerita: { judul: string; subjudul: string; warna: string; isi: string[] }
}

/* ─────────────────────────────────────────────
   ATOM ANIMASI
───────────────────────────────────────────── */

/** Kursor terminal berkedip */
function KursorBerkedip() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.9, repeat: Infinity }}
      className="inline-block w-[6px] h-[11px] align-middle ml-0.5"
      style={{ background: '#4ade80' }}
    />
  )
}

/** Teks mengetik sendiri (loop) */
function TypingLoop({ teks, warna = '#4ade80' }: { teks: string[]; warna?: string }) {
  const [idx, setIdx] = useState(0)
  const [chars, setChars] = useState(0)
  const [hapus, setHapus] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => {
      if (!hapus) {
        if (chars < teks[idx].length) setChars(c => c + 1)
        else setTimeout(() => setHapus(true), 900)
      } else {
        if (chars > 0) setChars(c => c - 1)
        else { setHapus(false); setIdx(i => (i + 1) % teks.length) }
      }
    }, hapus ? 35 : 70)
    return () => clearTimeout(t)
  }, [chars, hapus, idx, teks])
  return (
    <span style={{ color: warna }} className="font-mono text-[10px]">
      {teks[idx].slice(0, chars)}<KursorBerkedip />
    </span>
  )
}

/** Angka naik dari 0 */
function CountUp({ target, suffix = '', warna }: { target: number; suffix?: string; warna: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let v = 0
    const step = target / 60
    const t = setInterval(() => {
      v += step
      if (v >= target) { setVal(target); clearInterval(t) } else setVal(Math.floor(v))
    }, 25)
    return () => clearInterval(t)
  }, [target])
  return <span style={{ color: warna }} className="font-comic">{val}{suffix}</span>
}

/** Bar skill animasi */
function Bar({ label, pct, warna }: { label: string; pct: number; warna: string }) {
  return (
    <div className="mb-1">
      <div className="flex justify-between">
        <span className="font-bold text-[9px]" style={{ color: warna === '#ffd21c' ? '#0a0a0a' : 'white' }}>{label}</span>
        <span className="font-comic text-[9px]" style={{ color: warna }}>{pct}%</span>
      </div>
      <div className="h-1.5 bg-black/30 rounded-none overflow-hidden">
        <motion.div className="h-full" style={{ background: warna }}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </div>
  )
}

/** Floating partikel bintang */
function FloatStars({ n = 6, warna = '#ffd21c' }: { n?: number; warna?: string }) {
  return (
    <>
      {Array.from({ length: n }).map((_, i) => (
        <motion.div key={i}
          className="absolute text-[10px] select-none pointer-events-none"
          style={{ left: `${10 + i * 14}%`, top: `${15 + (i % 3) * 25}%`, color: warna, zIndex: 3 }}
          animate={{ y: [-4, 4, -4], rotate: [0, 20, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        >
          {['★', '✦', '◆', '●', '▲', '✸'][i % 6]}
        </motion.div>
      ))}
    </>
  )
}

/** Garis speed-lines */
function SpeedLines({ warna = 'rgba(255,255,255,0.18)' }: { warna?: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-[5]"
      style={{ background: `repeating-linear-gradient(115deg,transparent 0,transparent 18px,${warna} 19px,transparent 21px)` }} />
  )
}

/** Efek halftone dot */
function Halftone({ opacity = 0.22 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-[5]"
      style={{
        backgroundImage: `radial-gradient(circle,rgba(255,255,255,${opacity}) 1.5px,transparent 1.5px)`,
        backgroundSize: '9px 9px',
      }} />
  )
}

/* ─────────────────────────────────────────────
   ANIMASI SPRITE / GIF-LIKE — karakter bergerak
───────────────────────────────────────────── */

/** Karakter berlari dari kiri ke kanan */
function KarakterLari({ warna = '#1769ff' }: { warna?: string }) {
  const frames = ['🏃', '🏃‍♂️', '🚶', '🏃']
  const [frame, setFrame] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setFrame(f => (f + 1) % frames.length), 200)
    return () => clearInterval(t)
  }, [frames.length])
  return (
    <motion.div
      className="text-2xl select-none"
      animate={{ x: ['-10%', '105%'] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 0.5 }}
      style={{ display: 'inline-block', color: warna }}
    >
      {frames[frame]}
    </motion.div>
  )
}

/** Animasi sprite teks berkedip seperti GIF */
function GifTeks({ teks, warna = '#ffd21c' }: { teks: string; warna?: string }) {
  return (
    <motion.div
      className="font-comic text-xs tracking-widest"
      style={{ color: warna }}
      animate={{ opacity: [1, 0.3, 1], scale: [1, 1.05, 1] }}
      transition={{ duration: 0.8, repeat: Infinity }}
    >
      {teks}
    </motion.div>
  )
}

/** Panel animasi: karakter coding (sprite frames) */
function SpriteCoding() {
  const ekspresi = ['😤', '🤔', '😅', '😎', '🤯', '🎉']
  const kode = ['Writing code...', 'Fixing bugs... 🐛', 'Deploying... 🚀', 'It works! ✅', 'New feature! ⚡']
  const [ekIdx, setEkIdx] = useState(0)
  const [kodeIdx, setKodeIdx] = useState(0)
  useEffect(() => {
    const t1 = setInterval(() => setEkIdx(i => (i + 1) % ekspresi.length), 600)
    const t2 = setInterval(() => setKodeIdx(i => (i + 1) % kode.length), 1800)
    return () => { clearInterval(t1); clearInterval(t2) }
  }, [ekspresi.length, kode.length])
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 p-3">
      <motion.div
        key={ekIdx}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="text-5xl"
      >
        {ekspresi[ekIdx]}
      </motion.div>
      <motion.div
        key={kodeIdx}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        className="font-mono text-[9px] text-green-400 text-center"
      >
        {kode[kodeIdx]}
      </motion.div>
      <div className="w-full">
        <motion.div
          className="h-1 bg-green-400"
          animate={{ width: ['0%', '100%', '0%'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}

/** Animasi hujan kode (matrix effect) */
function HujanKode({ warna = '#4ade80' }: { warna?: string }) {
  const kolom = ['01', '10', '11', '00', '01', '10', '11']
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {kolom.map((k, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-[8px] flex flex-col gap-0.5"
          style={{ left: `${5 + i * 14}%`, color: warna, opacity: 0.6 }}
          animate={{ y: ['-100%', '110%'] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'linear', delay: i * 0.4 }}
        >
          {Array.from({ length: 8 }).map((_, j) => (
            <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

/** Animasi loading bar berulang */
function AnimasiLoading({ label, warna = '#1769ff' }: { label: string; warna?: string }) {
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-0.5">
        <span className="font-bold text-[8px] text-white/80">{label}</span>
        <GifTeks teks="LOADING" warna={warna} />
      </div>
      <div className="h-2 bg-white/10 overflow-hidden relative">
        <motion.div
          className="absolute inset-y-0 left-0"
          style={{ background: `linear-gradient(90deg, transparent, ${warna}, transparent)`, width: '40%' }}
          animate={{ x: ['-100%', '300%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}

/** Efek kilat / flash */
function Kilat({ warna = '#ffd21c' }: { warna?: string }) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-10"
      style={{ background: warna }}
      animate={{ opacity: [0, 0.15, 0, 0.08, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
    />
  )
}

/** Partikel meledak dari tengah */
function PartikelLedak({ warna = '#e63329' }: { warna?: string }) {
  const partikel = Array.from({ length: 8 }, (_, i) => ({
    angle: (i / 8) * 360,
    dist: 30 + Math.random() * 20,
  }))
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[6]">
      {partikel.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5"
          style={{ background: warna, borderRadius: i % 2 === 0 ? '50%' : 2 }}
          animate={{
            x: [0, Math.cos((p.angle * Math.PI) / 180) * p.dist, 0],
            y: [0, Math.sin((p.angle * Math.PI) / 180) * p.dist, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.1, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────
   KONTEN PANEL UTAMA
───────────────────────────────────────────── */

/* Panel 01 — HERO PROFILE dengan sprite animasi */
const KontenP01 = () => (
  <div className="absolute inset-0 flex overflow-hidden" style={{ background: '#1769ff' }}>
    <Kilat warna="#ffd21c" />
    <div className="relative w-[42%] h-full flex-shrink-0">
      <Image src="/foto/komik-profil.png" alt="Rizki" fill className="object-cover object-top" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,transparent 50%,#1769ff)' }} />
    </div>
    <div className="flex-1 flex flex-col justify-center px-3 z-10 relative">
      <FloatStars n={5} warna="#ffd21c" />
      <motion.div className="font-comic text-yellow-300 text-[8px] tracking-widest mb-1"
        animate={{ opacity: [0.6, 1, 0.6], x: [-1, 1, -1] }}
        transition={{ duration: 1.8, repeat: Infinity }}>
        ★ THE HERO ★
      </motion.div>
      <motion.div className="font-comic text-white leading-none mb-1"
        style={{ fontSize: 22, textShadow: '3px 3px 0 #0a0a0a', WebkitTextStroke: '1px #0a0a0a' }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}>
        RIZKI<br />HABIBI
      </motion.div>
      <div className="text-white/70 text-[7px] font-bold mb-1.5 leading-tight">
        Full-Stack Dev · IoT · AI/ML<br />
        <span className="text-yellow-300">BNSP Certified ✓</span>
      </div>
      <div className="flex flex-wrap gap-1 mb-1.5">
        {['Laravel', 'Next.js', 'IoT', 'AI'].map((t, i) => (
          <motion.span key={t}
            className="font-bold text-[7px] px-1.5 py-0.5 bg-yellow-300 text-black"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}>
            {t}
          </motion.span>
        ))}
      </div>
      <motion.div className="flex items-center gap-1"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}>
        <motion.div className="w-2 h-2 rounded-full bg-green-400"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1, repeat: Infinity }} />
        <span className="text-green-300 text-[7px] font-bold">AVAILABLE FOR WORK</span>
      </motion.div>
    </div>
  </div>
)

/* Panel 02 — POWER LEVELS dengan animasi loading */
const KontenP02 = () => (
  <div className="absolute inset-0 p-3 flex flex-col justify-center" style={{ background: '#0d1117' }}>
    <HujanKode warna="#22c55e" />
    <div className="relative z-10">
      <div className="font-comic text-white text-[10px] mb-2 flex items-center gap-1">
        <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>⚡</motion.span>
        POWER LEVELS
      </div>
      <Bar label="Laravel / PHP" pct={90} warna="#ef3123" />
      <Bar label="Next.js / React" pct={85} warna="#4ade80" />
      <Bar label="MySQL / DB" pct={80} warna="#a78bfa" />
      <Bar label="Tailwind CSS" pct={88} warna="#38bdf8" />
      <Bar label="IoT / Arduino" pct={75} warna="#fbbf24" />
      <AnimasiLoading label="Loading new skills..." warna="#4ade80" />
    </div>
  </div>
)

/* Panel 03 — PROJECT SHOWCASE */
const KontenP03 = () => (
  <div className="absolute inset-0">
    <Image src="/project/sistem integrasi KVT.png" alt="KVT" fill className="object-cover" />
    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(239,49,35,0.96) 35%,rgba(239,49,35,0.15))' }} />
    <SpeedLines />
    <PartikelLedak warna="#ffd21c" />
    <div className="absolute bottom-6 left-3 right-3 z-10">
      <motion.div className="font-comic text-yellow-300 text-[9px] mb-0.5"
        animate={{ x: [-2, 2, -2] }} transition={{ duration: 1, repeat: Infinity }}>
        🚀 FEATURED PROJECT
      </motion.div>
      <div className="font-comic text-white text-[11px] leading-tight">SISTEM INTEGRASI<br />KVT.KOM</div>
      <div className="flex gap-1 mt-1">
        {['Laravel', 'Vue.js', 'MySQL'].map(t => (
          <motion.span key={t}
            className="font-bold text-[7px] px-1.5 py-0.5 text-white"
            style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)' }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() }}>
            {t}
          </motion.span>
        ))}
      </div>
    </div>
  </div>
)

/* Panel 04 — TERMINAL DEV dengan sprite coding */
const KontenP04 = () => (
  <div className="absolute inset-0 p-2 flex flex-col" style={{ background: '#0d1117' }}>
    <div className="flex gap-1 mb-1 items-center">
      <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
      <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
      <div className="w-2 h-2 rounded-full bg-[#28c840]" />
      <span className="text-[#8b949e] text-[7px] font-mono ml-1">rizki@portfolio ~</span>
    </div>
    <div className="flex-1 flex gap-2">
      <div className="flex-1 font-mono text-[8px] leading-relaxed">
        <div><span className="text-[#79c0ff]">const</span> <span className="text-[#ffa657]">dev</span> = {`{`}</div>
        <div className="pl-2"><span className="text-[#7ee787]">nama</span>: <span className="text-[#a5d6ff]">&quot;Rizki Habibi&quot;</span>,</div>
        <div className="pl-2"><span className="text-[#7ee787]">role</span>: <span className="text-[#a5d6ff]">&quot;Full-Stack Dev&quot;</span>,</div>
        <div className="pl-2"><span className="text-[#7ee787]">passion</span>: <span className="text-[#ffa657]">&infin;</span></div>
        <div>{`}`}</div>
        <div className="mt-1 text-[#8b949e]">$ <TypingLoop teks={['git push origin main', 'npm run build', 'vercel --prod', 'php artisan serve', 'python train.py']} warna="#4ade80" /></div>
      </div>
      <div className="w-14 flex-shrink-0 border border-[#30363d] relative overflow-hidden">
        <SpriteCoding />
      </div>
    </div>
  </div>
)

/* Panel 05 — KONTAK / SOSIAL dengan animasi bounce */
const KontenP05 = () => (
  <div className="absolute inset-0 flex flex-col justify-center p-3 gap-1.5" style={{ background: '#ffd21c' }}>
    <FloatStars n={4} warna="#0a0a0a" />
    <div className="font-comic text-[#0a0a0a] text-[11px] mb-1 relative z-10">📡 CONNECT WITH ME</div>
    {[
      { icon: <FiGithub />, label: 'github.com/rizkihabibi', warna: '#0a0a0a', bg: 'white' },
      { icon: <FiLinkedin />, label: 'linkedin/rizki-habibi', warna: 'white', bg: '#0077b5' },
      { icon: <FiMail />, label: 'rizkihub7@gmail.com', warna: 'white', bg: '#e63329' },
      { icon: <FiPhone />, label: '+62 xxx-xxxx-xxxx', warna: 'white', bg: '#22c55e' },
    ].map((item, i) => (
      <motion.div key={i}
        className="flex items-center gap-1.5 px-2 py-1 text-[8px] font-bold relative z-10"
        style={{ background: item.bg, color: item.warna, border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
        animate={{ x: [0, 2, 0] }}
        transition={{ duration: 1.5 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
        whileHover={{ scale: 1.04 }}>
        {item.icon}
        <span>{item.label}</span>
      </motion.div>
    ))}
  </div>
)

/* Panel 06 — STATISTIK animasi countup */
const KontenP06 = () => (
  <div className="absolute inset-0 p-3 flex flex-col justify-center" style={{ background: '#8d55e8' }}>
    <PartikelLedak warna="#ffd21c" />
    <div className="font-comic text-white text-[10px] mb-2 relative z-10">📊 MY STATS</div>
    <div className="grid grid-cols-2 gap-1.5 relative z-10">
      {[
        { label: 'Projects', val: 15, suf: '+', w: '#ffd21c' },
        { label: 'Sertifikat', val: 75, suf: '+', w: '#4ade80' },
        { label: 'Commits', val: 500, suf: '+', w: '#38bdf8' },
        { label: 'Teh Manis', val: 999, suf: '☕', w: '#fb923c' },
      ].map(s => (
        <motion.div key={s.label}
          className="text-center p-1.5"
          style={{ border: `2px solid ${s.w}`, background: 'rgba(255,255,255,0.07)' }}
          animate={{ borderColor: [s.w, 'white', s.w] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <div className="font-comic text-lg"><CountUp target={s.val} suffix={s.suf} warna={s.w} /></div>
          <div className="text-white/60 text-[7px] font-bold">{s.label}</div>
        </motion.div>
      ))}
    </div>
    <div className="mt-2 relative z-10 overflow-hidden h-5">
      <KarakterLari warna="#ffd21c" />
    </div>
  </div>
)

/* Panel 07 — TOOLS ANIMASI */
const KontenP07 = () => {
  const alat = ['⚡ VS Code', '🐘 PHP', '🎨 Figma', '🐳 Docker', '☁️ AWS', '🔧 Git']
  const [aktif, setAktif] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setAktif(i => (i + 1) % alat.length), 900)
    return () => clearInterval(t)
  }, [alat.length])
  return (
    <div className="absolute inset-0 p-3 flex flex-col justify-center" style={{ background: '#0a0a0a' }}>
      <div className="font-comic text-yellow-300 text-[10px] mb-2">🔧 MY TOOLS</div>
      <div className="grid grid-cols-2 gap-1">
        {alat.map((a, i) => (
          <motion.div key={a}
            className="font-bold text-[8px] px-1.5 py-1 text-center"
            style={{
              border: `2px solid ${aktif === i ? '#ffd21c' : '#333'}`,
              background: aktif === i ? '#ffd21c22' : 'transparent',
              color: aktif === i ? '#ffd21c' : '#555',
            }}
            animate={{ scale: aktif === i ? 1.06 : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}>
            {a}
          </motion.div>
        ))}
      </div>
      <div className="mt-2 overflow-hidden h-5">
        <KarakterLari warna="#ffd21c" />
      </div>
    </div>
  )
}

/* Panel 08 — KUTIPAN ANIMASI */
const KontenP08 = () => {
  const quotes = [
    '"Code is poetry"',
    '"Build things that matter"',
    '"Never stop learning"',
    '"Ship early, iterate fast"',
  ]
  const [qi, setQi] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setQi(i => (i + 1) % quotes.length), 2500)
    return () => clearInterval(t)
  }, [quotes.length])
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4" style={{ background: '#e63329' }}>
      <FloatStars n={6} warna="#ffd21c" />
      <AnimatePresence mode="wait">
        <motion.div
          key={qi}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="font-comic text-white text-center text-[11px] leading-relaxed relative z-10"
          style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}>
          {quotes[qi]}
        </motion.div>
      </AnimatePresence>
      <motion.div className="mt-3 font-bold text-[8px] text-yellow-200 relative z-10"
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
        — Rizki Habibi
      </motion.div>
    </div>
  )
}

/* Panel 09 — TIMELINE MINI animasi */
const KontenP09 = () => (
  <div className="absolute inset-0 p-3 flex flex-col justify-center" style={{ background: '#fff8e7' }}>
    <div className="font-comic text-[#0a0a0a] text-[10px] mb-2">📅 PERJALANAN</div>
    <div className="relative">
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-yellow-400" />
      {[
        { thn: '2020', ev: 'Mulai Coding', w: '#1769ff' },
        { thn: '2022', ev: 'BNSP Sertifikasi', w: '#22c55e' },
        { thn: '2023', ev: 'Laravel Expert', w: '#e63329' },
        { thn: '2024', ev: 'Next.js + AI', w: '#8d55e8' },
        { thn: '2026', ev: 'KVT.kom Launch', w: '#ffd21c' },
      ].map((item, i) => (
        <motion.div key={item.thn}
          className="flex items-center gap-2 mb-1.5 pl-5 relative"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12, type: 'spring' }}
          viewport={{ once: true }}>
          <motion.div
            className="absolute left-2 w-2.5 h-2.5 rounded-full"
            style={{ background: item.w, border: '2px solid #0a0a0a' }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} />
          <span className="font-comic text-[8px]" style={{ color: item.w }}>{item.thn}</span>
          <span className="font-bold text-[8px] text-[#0a0a0a]/70">{item.ev}</span>
        </motion.div>
      ))}
    </div>
  </div>
)

/* Panel 10 — KARAKTER ANIMASI FULL SPRITE GIF */
const KontenP10 = () => {
  const aksi = [
    { emoji: '💻', teks: 'CODING...', sub: 'Laravel · Next.js' },
    { emoji: '🚀', teks: 'DEPLOYING!', sub: 'Vercel · VPS' },
    { emoji: '🐛', teks: 'DEBUGGING...', sub: 'Stack trace...' },
    { emoji: '☕', teks: 'RECHARGING', sub: 'Teh manis panas' },
    { emoji: '🎉', teks: 'SHIPPED IT!', sub: 'v2.0 is live!' },
    { emoji: '📚', teks: 'LEARNING', sub: 'AI · IoT · Cloud' },
  ]
  const [aksiIdx, setAksiIdx] = useState(0)
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const t1 = setInterval(() => setAksiIdx(i => (i + 1) % aksi.length), 2200)
    const t2 = setInterval(() => setTick(t => t + 1), 150)
    return () => { clearInterval(t1); clearInterval(t2) }
  }, [aksi.length])
  const dotAnim = '.'.repeat((tick % 4))
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1769ff 0%, #8d55e8 100%)' }}>
      <HujanKode warna="rgba(255,255,255,0.12)" />
      <Kilat warna="#ffd21c" />
      <AnimatePresence mode="wait">
        <motion.div
          key={aksiIdx}
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 30, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 250 }}
          className="relative z-10 flex flex-col items-center gap-1">
          <motion.div
            className="text-5xl"
            animate={{ y: [0, -6, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}>
            {aksi[aksiIdx].emoji}
          </motion.div>
          <div className="font-comic text-white text-[11px]"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}>
            {aksi[aksiIdx].teks}{dotAnim}
          </div>
          <div className="font-mono text-[8px] text-white/60">{aksi[aksiIdx].sub}</div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-3 left-0 right-0 overflow-hidden h-6">
        <KarakterLari warna="#ffd21c" />
      </div>
    </div>
  )
}

/* Panel 11 — SKILL BADGE ANIMASI */
const KontenP11 = () => {
  const badge = [
    { nm: 'PHP', lv: 'MASTER', w: '#8892BF' },
    { nm: 'JS', lv: 'EXPERT', w: '#F0DB4F' },
    { nm: 'SQL', lv: 'EXPERT', w: '#00758F' },
    { nm: 'IoT', lv: 'ADV', w: '#22c55e' },
    { nm: 'AI', lv: 'LEARN', w: '#e63329' },
    { nm: 'GIT', lv: 'PRO', w: '#f05033' },
  ]
  return (
    <div className="absolute inset-0 p-3 flex flex-col justify-center" style={{ background: '#0f0f0f' }}>
      <div className="font-comic text-yellow-300 text-[10px] mb-2">🎖️ SKILL BADGES</div>
      <div className="grid grid-cols-3 gap-1.5">
        {badge.map((b, i) => (
          <motion.div key={b.nm}
            className="flex flex-col items-center p-1.5"
            style={{ border: `2px solid ${b.w}`, background: `${b.w}18` }}
            animate={{ boxShadow: [`0 0 0 ${b.w}44`, `0 0 8px ${b.w}88`, `0 0 0 ${b.w}44`] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            whileHover={{ scale: 1.1 }}>
            <div className="font-comic text-[11px]" style={{ color: b.w }}>{b.nm}</div>
            <div className="text-[6px] font-bold text-white/40">{b.lv}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* Panel 12 — PROYEK GRID animasi */
const KontenP12 = () => (
  <div className="absolute inset-0 p-3 flex flex-col justify-center" style={{ background: '#fff0f0' }}>
    <div className="font-comic text-[#0a0a0a] text-[10px] mb-2">🏗️ PROYEK UTAMA</div>
    <div className="space-y-1.5">
      {[
        { nm: 'KVT.kom Platform', tech: 'Laravel + Vue', w: '#e63329' },
        { nm: 'Sistem K-AMU', tech: 'Laravel All-in-One', w: '#1769ff' },
        { nm: 'IoT Monitoring', tech: 'Arduino + MQTT', w: '#22c55e' },
        { nm: 'Portfolio Web', tech: 'Next.js + AI', w: '#8d55e8' },
      ].map((p, i) => (
        <motion.div key={p.nm}
          className="flex items-center justify-between p-1.5"
          style={{ border: `2px solid ${p.w}`, boxShadow: `2px 2px 0 ${p.w}`, background: 'white' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, type: 'spring' }}
          viewport={{ once: true }}
          whileHover={{ x: 3 }}>
          <div>
            <div className="font-comic text-[9px]" style={{ color: p.w }}>{p.nm}</div>
            <div className="font-mono text-[7px] text-[#0a0a0a]/50">{p.tech}</div>
          </div>
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}>
            <FiExternalLink className="w-3 h-3" style={{ color: p.w }} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
)

/* ─────────────────────────────────────────────
   ARRAY DATA PANEL
───────────────────────────────────────────── */
const dataPanels: DataPanel[] = [
  {
    num: '01', judul: 'THE HERO', warnaBg: '#1769ff', warnaAksent: '#ffd21c', zIndex: 6, col: 2, row: 2,
    konten: <KontenP01 />,
    cerita: { judul: 'RIZKI HABIBI', subjudul: 'Full-Stack Developer', warna: '#1769ff', isi: ['BNSP Certified', 'Laravel · Next.js · IoT · AI/ML', 'Based in Jember, Indonesia', 'Available for Work 🟢'] },
  },
  {
    num: '02', judul: 'POWER LEVELS', warnaBg: '#0d1117', warnaAksent: '#22c55e', zIndex: 5, col: 1, row: 2,
    konten: <KontenP02 />,
    cerita: { judul: 'SKILL SET', subjudul: 'Power Levels', warna: '#22c55e', isi: ['Laravel/PHP: 90%', 'Next.js/React: 85%', 'MySQL: 80%', 'IoT/Arduino: 75%'] },
  },
  {
    num: '03', judul: 'FEATURED PROJECT', warnaBg: '#ef3123', warnaAksent: '#ffd21c', zIndex: 4, col: 1, row: 2,
    konten: <KontenP03 />,
    cerita: { judul: 'SISTEM INTEGRASI KVT', subjudul: 'Featured Project', warna: '#ef3123', isi: ['Platform edukasi teknologi', 'Laravel + Vue.js + MySQL', 'Real-time dashboard', 'Multi-role system'] },
  },
  {
    num: '04', judul: 'TERMINAL DEV', warnaBg: '#0d1117', warnaAksent: '#4ade80', zIndex: 3, col: 2, row: 1,
    konten: <KontenP04 />,
    cerita: { judul: 'DEV ENVIRONMENT', subjudul: 'Terminal Life', warna: '#4ade80', isi: ['git push origin main', 'php artisan serve', 'npm run build', 'Shipped! 🚀'] },
  },
  {
    num: '05', judul: 'CONNECT', warnaBg: '#ffd21c', warnaAksent: '#0a0a0a', zIndex: 3, col: 1, row: 1,
    konten: <KontenP05 />,
    cerita: { judul: 'SOSIAL & KONTAK', subjudul: 'Let\'s Connect', warna: '#0a0a0a', isi: ['GitHub: rizkihabibi', 'LinkedIn: rizki-habibi', 'Email: ready', 'Open to collab 🤝'] },
  },
  {
    num: '06', judul: 'STATS', warnaBg: '#8d55e8', warnaAksent: '#ffd21c', zIndex: 4, col: 1, row: 2,
    konten: <KontenP06 />,
    cerita: { judul: 'BY THE NUMBERS', subjudul: 'My Stats', warna: '#8d55e8', isi: ['15+ Projects', '75+ Sertifikat', '500+ Commits', 'Powered by ☕'] },
  },
  {
    num: '07', judul: 'TOOLS', warnaBg: '#0a0a0a', warnaAksent: '#ffd21c', zIndex: 3, col: 1, row: 1,
    konten: <KontenP07 />,
    cerita: { judul: 'MY ARSENAL', subjudul: 'Tools of Trade', warna: '#ffd21c', isi: ['VS Code + Extensions', 'Docker + Git', 'Figma + Postman', 'AWS + Vercel'] },
  },
  {
    num: '08', judul: 'QUOTES', warnaBg: '#e63329', warnaAksent: '#ffd21c', zIndex: 3, col: 1, row: 2,
    konten: <KontenP08 />,
    cerita: { judul: 'WORDS OF POWER', subjudul: 'Dev Quotes', warna: '#e63329', isi: ['"Code is poetry"', '"Build things that matter"', '"Never stop learning"', '"Ship early, iterate fast"'] },
  },
  {
    num: '09', judul: 'TIMELINE', warnaBg: '#fff8e7', warnaAksent: '#ffd21c', zIndex: 3, col: 1, row: 2,
    konten: <KontenP09 />,
    cerita: { judul: 'PERJALANAN', subjudul: 'Timeline', warna: '#f59e0b', isi: ['2020: Mulai Coding', '2022: BNSP Sertifikasi', '2023: Laravel Expert', '2026: KVT.kom Launch'] },
  },
  {
    num: '10', judul: 'HERO MODE', warnaBg: '#1769ff', warnaAksent: '#ffd21c', zIndex: 5, col: 2, row: 2,
    konten: <KontenP10 />,
    cerita: { judul: 'RIZKI IN ACTION', subjudul: 'Developer Mode', warna: '#1769ff', isi: ['Coding 💻', 'Deploying 🚀', 'Debugging 🐛', 'Shipping it! 🎉'] },
  },
  {
    num: '11', judul: 'BADGES', warnaBg: '#0f0f0f', warnaAksent: '#ffd21c', zIndex: 3, col: 1, row: 1,
    konten: <KontenP11 />,
    cerita: { judul: 'SKILL BADGES', subjudul: 'Certified Skills', warna: '#ffd21c', isi: ['PHP: Master', 'JS: Expert', 'SQL: Expert', 'IoT: Advanced'] },
  },
  {
    num: '12', judul: 'PROJECTS', warnaBg: '#fff0f0', warnaAksent: '#e63329', zIndex: 3, col: 1, row: 2,
    konten: <KontenP12 />,
    cerita: { judul: 'PORTOFOLIO PROYEK', subjudul: 'What I Built', warna: '#e63329', isi: ['KVT.kom Platform', 'Sistem K-AMU', 'IoT Monitoring', 'This Portfolio!'] },
  },
]

/* ─────────────────────────────────────────────
   MODAL CERITA
───────────────────────────────────────────── */
function ModalCerita({ panel, tutup }: { panel: DataPanel; tutup: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') tutup() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [tutup])
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.85)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={tutup}>
        <motion.div
          className="relative w-full max-w-md"
          style={{ border: `4px solid ${panel.warnaAksent}`, boxShadow: `8px 8px 0 ${panel.warnaAksent}`, background: '#0a0a0a' }}
          initial={{ scale: 0.7, rotate: -4, y: 60 }}
          animate={{ scale: 1, rotate: 0, y: 0 }}
          exit={{ scale: 0.7, rotate: 4, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={e => e.stopPropagation()}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2"
            style={{ background: panel.warnaAksent, borderBottom: `3px solid ${panel.warnaAksent}` }}>
            <div className="flex items-center gap-2">
              <span className="font-comic text-2xl text-black">#{panel.num}</span>
              <span className="font-comic text-sm text-black">{panel.judul}</span>
            </div>
            <button onClick={tutup} className="p-1 hover:scale-125 transition-transform" aria-label="Tutup">
              <FiX className="w-5 h-5 text-black" />
            </button>
          </div>
          {/* Konten cerita */}
          <div className="p-5">
            <motion.div
              className="font-comic text-2xl mb-1"
              style={{ color: panel.warnaAksent }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2, repeat: Infinity }}>
              {panel.cerita.judul}
            </motion.div>
            <div className="font-bold text-sm text-white/50 mb-3">{panel.cerita.subjudul}</div>
            <div className="space-y-2">
              {panel.cerita.isi.map((baris, i) => (
                <motion.div key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, type: 'spring' }}>
                  <motion.span style={{ color: panel.warnaAksent }}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}>▶</motion.span>
                  <span className="text-sm font-bold text-white/80">{baris}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Footer navigasi */}
          <div className="flex gap-2 px-4 pb-4">
            <motion.button onClick={tutup}
              className="flex-1 py-2 font-comic text-sm text-black"
              style={{ background: panel.warnaAksent, border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
              whileHover={{ y: -2 }}
              whileTap={{ y: 2 }}>
              CLOSE ✕
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────────
   KOMPONEN PANEL TUNGGAL
───────────────────────────────────────────── */
function PanelTunggal({ panel, onKlik }: { panel: DataPanel; onKlik: () => void }) {
  const [hover, setHover] = useState(false)
  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer group select-none"
      style={{
        gridColumn: `span ${panel.col}`,
        gridRow: `span ${panel.row}`,
        zIndex: hover ? 10 : panel.zIndex,
        border: '3px solid #0a0a0a',
        boxShadow: hover ? `6px 6px 0 ${panel.warnaAksent}` : '4px 4px 0 #0a0a0a',
        minHeight: panel.row === 2 ? 220 : 110,
        background: panel.warnaBg,
        transition: 'box-shadow 0.15s ease',
      }}
      initial={{ opacity: 0, y: 30, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: 'spring', stiffness: 180, delay: 0.05 }}
      whileHover={{ scale: 1.015, rotate: 0.3 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onClick={onKlik}>
      {/* Konten */}
      {panel.konten}
      {/* Nomor panel */}
      <div className="absolute top-1 left-1 z-20 font-comic text-[8px] px-1"
        style={{ background: panel.warnaAksent, color: '#0a0a0a', lineHeight: 1.4 }}>
        {panel.num}
      </div>
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        style={{ background: `${panel.warnaAksent}dd` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.2 }}>
        <div className="text-center">
          <motion.div className="font-comic text-[#0a0a0a] text-[11px] mb-1"
            animate={hover ? { scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 0.7, repeat: Infinity }}>
            {panel.judul}
          </motion.div>
          <div className="font-bold text-[8px] text-[#0a0a0a]/60">TAP TO READ ▶</div>
        </div>
      </motion.div>
      {/* Sound effect */}
      <AnimatePresence>
        {hover && (
          <motion.div
            className="absolute top-2 right-2 z-30 font-comic text-[9px]"
            style={{ color: panel.warnaAksent === '#ffd21c' ? '#0a0a0a' : panel.warnaAksent }}
            initial={{ opacity: 0, scale: 0, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}>
            {['POW!', 'ZAP!', 'BAM!', 'WOW!', 'ZOOM!'][parseInt(panel.num) % 5]}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   KOMPONEN UTAMA EXPORT
───────────────────────────────────────────── */
export default function PanelKomik() {
  const [panelAktif, setPanelAktif] = useState<DataPanel | null>(null)

  return (
    <section id="panel-komik" className="py-16 px-3 sm:px-4 relative overflow-hidden"
      style={{ background: '#fafaf7' }}>
      <div className="halftone-bg absolute inset-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8">
          <div className="font-comic text-4xl sm:text-5xl text-[#0a0a0a] mb-2"
            style={{ WebkitTextStroke: '2px #0a0a0a' }}>
            COMIC GALLERY
          </div>
          <div className="speech-bubble inline-block text-sm">
            Klik panel untuk baca cerita! Semua panel punya animasi hidup 🎬
          </div>
          <div className="mt-3 overflow-hidden h-7 relative">
            <KarakterLari warna="#1769ff" />
          </div>
        </motion.div>

        {/* Grid komik */}
        <div className="grid grid-cols-3 gap-1 sm:gap-1.5"
          style={{ gridAutoRows: '110px' }}>
          {dataPanels.map(p => (
            <PanelTunggal key={p.num} panel={p} onKlik={() => setPanelAktif(p)} />
          ))}
        </div>

        {/* Label bawah */}
        <motion.div
          className="mt-4 text-center font-comic text-[10px] text-[#0a0a0a]/40 tracking-widest"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}>
          ★ RIZKI HABIBI KOMIK PORTFOLIO · TAP ANY PANEL · {dataPanels.length} PANELS ★
        </motion.div>
      </div>

      {/* Modal */}
      {panelAktif && <ModalCerita panel={panelAktif} tutup={() => setPanelAktif(null)} />}
    </section>
  )
}
