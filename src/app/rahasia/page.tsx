'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'
import { FiArrowLeft, FiTerminal, FiLock, FiUnlock, FiStar, FiZap, FiCode } from 'react-icons/fi'
import Link from 'next/link'

// ─── Easter Egg Facts ─────────────────────────────
const faktaRahasia = [
  { id: '01', emoji: '🌙', teks: 'Jam produktif terbaik: 11 malam – 3 pagi. Dunia sunyi, kode mengalir.' },
  { id: '02', emoji: '☕', teks: 'Minum kopi hitam tanpa gula — setiap sesi debugging berat selalu ditemani kopi.' },
  { id: '03', emoji: '🐛', teks: 'Bug terpanjang yang pernah di-debug: 12 jam hanya karena 1 titik koma yang hilang.' },
  { id: '04', emoji: '🎮', teks: 'Di balik semua kode serius, masih suka main game strategi untuk melatih logika.' },
  { id: '05', emoji: '💡', teks: 'Proyek pertama: website HTML + CSS di Notepad tanpa VS Code, tanpa framework.' },
  { id: '06', emoji: '🚀', teks: 'Sudah menulis lebih dari 10.000 baris kode Laravel — dan masih terus bertambah.' },
  { id: '07', emoji: '📚', teks: 'Membaca dokumentasi resmi adalah hobi tersembunyi. Serius.' },
  { id: '08', emoji: '🎵', teks: 'Playlist lofi hip-hop sudah diputar ratusan jam selama coding marathon.' },
  { id: '09', emoji: '🌐', teks: 'KVT.kom bukan cuma proyek — ini adalah mimpi besar yang dibangun satu commit demi satu commit.' },
  { id: '10', emoji: '🏆', teks: 'Kamu sudah menemukan halaman ini. Achievement unlocked: Penjelajah Rahasia!' },
]

// ─── Matrix Rain Canvas ───────────────────────────
function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]//\\;:=RIZKI'
    const fs = 13
    const cols = Math.floor(canvas.width / fs)
    const drops: number[] = Array(cols).fill(1)

    const tick = () => {
      ctx.fillStyle = 'rgba(10,10,10,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)]
        const bright = 100 + Math.floor(Math.random() * 155)
        ctx.fillStyle = `rgba(0,${bright},50,${0.4 + Math.random() * 0.5})`
        ctx.font = `${fs}px monospace`
        ctx.fillText(ch, i * fs, drops[i] * fs)
        if (drops[i] * fs > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    const id = setInterval(tick, 38)
    return () => { clearInterval(id); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none opacity-60" />
}

// ─── Partikel Bintang ─────────────────────────────
const bintangList = Array.from({ length: 20 }, (_, i) => ({
  x: `${(i * 37 + 11) % 95}%`,
  y: `${(i * 53 + 7) % 90}%`,
  delay: (i * 0.3) % 3,
  size: 10 + (i % 4) * 4,
}))

// ─── Typing Effect Hook ───────────────────────────
function useTyping(teks: string, speed = 30) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    setIdx(0)
  }, [teks])
  useEffect(() => {
    if (idx >= teks.length) return
    const t = setTimeout(() => setIdx(i => i + 1), speed)
    return () => clearTimeout(t)
  }, [idx, teks, speed])
  return teks.slice(0, idx)
}

// ─── Komponen Kartu Fakta ─────────────────────────
function KartuFakta({ fakta, terbuka, onClick }: {
  fakta: typeof faktaRahasia[0]
  terbuka: boolean
  onClick: () => void
}) {
  const teks = useTyping(terbuka ? fakta.teks : '', 25)

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: 4 }}
      className="w-full text-left p-4 transition-all group relative overflow-hidden"
      style={{
        background: terbuka ? 'rgba(0,180,80,0.08)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${terbuka ? 'rgba(0,220,80,0.4)' : 'rgba(0,180,80,0.15)'}`,
        borderLeft: `3px solid ${terbuka ? '#00dc50' : 'rgba(0,180,80,0.3)'}`,
      }}
    >
      <div className="flex items-start gap-3">
        <span className="text-green-500/40 font-mono text-xs mt-0.5 shrink-0">[{fakta.id}]</span>
        <div className="flex-1 min-w-0">
          {terbuka ? (
            <div className="flex items-start gap-2">
              <span className="text-lg shrink-0">{fakta.emoji}</span>
              <p className="text-green-300/90 text-sm leading-relaxed font-mono">
                {teks}<span className="animate-pulse">_</span>
              </p>
            </div>
          ) : (
            <p className="text-green-500/30 text-sm font-mono flex items-center gap-2">
              <FiLock className="w-3 h-3 shrink-0" />
              <span>[ TERENKRIPSI — klik untuk membuka ]</span>
            </p>
          )}
        </div>
        {terbuka && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="shrink-0 mt-0.5"
          >
            <FiUnlock className="w-3 h-3 text-green-400" />
          </motion.div>
        )}
      </div>
    </motion.button>
  )
}

// ─── ASCII Art ────────────────────────────────────
const asciiArt = `
 ██████╗  ██╗  ██╗
 ██╔══██╗ ██║  ██║
 ██████╔╝ ███████║
 ██╔══██╗ ██╔══██║
 ██║  ██║ ██║  ██║
 ╚═╝  ╚═╝ ╚═╝  ╚═╝
  RIZKI  HABIBI
  SECRET ARCHIVE
`.trim()

// ─── Halaman Utama ────────────────────────────────
export default function HalamanRahasia() {
  const [terbuka, setTerbuka] = useState<number[]>([])
  const [tampilSemua, setTampilSemua] = useState(false)
  const [ketik, setKetik] = useState('')
  const [fase, setFase] = useState<'loading' | 'unlock' | 'inside'>('loading')
  const [progress, setProgress] = useState(0)
  const kodeBenar = 'rizki'

  // Fase loading awal
  useEffect(() => {
    let p = 0
    const id = setInterval(() => {
      p += Math.random() * 15
      if (p >= 100) { p = 100; clearInterval(id); setTimeout(() => setFase('unlock'), 400) }
      setProgress(Math.min(Math.floor(p), 100))
    }, 80)
    return () => clearInterval(id)
  }, [])

  const bukaTerbuka = (i: number) => {
    setTerbuka(prev => prev.includes(i) ? prev : [...prev, i])
  }

  const handleKode = (e: React.FormEvent) => {
    e.preventDefault()
    if (ketik.toLowerCase() === kodeBenar) {
      setFase('inside')
    } else {
      const el = document.getElementById('input-kode')
      if (el) { el.classList.add('shake'); setTimeout(() => el.classList.remove('shake'), 400) }
      setKetik('')
    }
  }

  // ─── Fase Loading ──────────────────────────────
  if (fase === 'loading') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 overflow-hidden">
        <MatrixRain />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center max-w-md w-full"
        >
          <pre className="text-green-500/60 text-[7px] sm:text-[9px] font-mono leading-tight mb-8 overflow-hidden">
            {asciiArt}
          </pre>
          <div className="font-mono text-green-400/70 text-xs mb-3">
            MENGAKSES ARSIP RAHASIA...
          </div>
          <div className="w-full h-1.5 bg-green-900/30 rounded overflow-hidden mb-2">
            <motion.div
              className="h-full bg-green-500"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="font-mono text-green-500/50 text-xs">{progress}%</div>
        </motion.div>
      </div>
    )
  }

  // ─── Fase Unlock (password) ────────────────────
  if (fase === 'unlock') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 overflow-hidden">
        <MatrixRain />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-sm"
        >
          <div
            className="p-8"
            style={{
              background: 'rgba(10,10,10,0.95)',
              border: '1px solid rgba(0,200,70,0.3)',
              boxShadow: '0 0 40px rgba(0,200,70,0.08)',
            }}
          >
            {/* Icon lock */}
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="flex justify-center mb-6"
            >
              <div className="w-14 h-14 flex items-center justify-center"
                style={{ border: '2px solid rgba(0,200,70,0.4)', background: 'rgba(0,200,70,0.05)' }}>
                <FiLock className="w-6 h-6 text-green-400" />
              </div>
            </motion.div>

            <h1 className="font-mono text-green-400 text-center text-sm font-bold mb-1">
              AKSES TERBATAS
            </h1>
            <p className="font-mono text-green-500/40 text-xs text-center mb-6">
              Masukkan kode akses untuk melanjutkan
            </p>

            <form onSubmit={handleKode} className="space-y-4">
              <input
                id="input-kode"
                type="password"
                value={ketik}
                onChange={e => setKetik(e.target.value)}
                placeholder="_ _ _ _ _"
                autoFocus
                className="w-full bg-transparent font-mono text-green-300 text-center text-lg tracking-[0.4em] placeholder-green-900/50 outline-none py-3 px-4"
                style={{ border: '1px solid rgba(0,200,70,0.3)', caretColor: '#00dc50' }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full font-mono text-sm py-3 text-[#0a0a0a] font-bold transition-all"
                style={{ background: '#00dc50' }}
              >
                BUKA AKSES →
              </motion.button>
            </form>

            <p className="font-mono text-green-900/60 text-[10px] text-center mt-6">
              Petunjuk: nama depan sang developer dalam huruf kecil
            </p>
          </div>
        </motion.div>

        <style jsx global>{`
          .shake { animation: shake 0.35s ease; }
          @keyframes shake {
            0%,100% { transform: translateX(0) }
            20% { transform: translateX(-8px) }
            40% { transform: translateX(8px) }
            60% { transform: translateX(-5px) }
            80% { transform: translateX(5px) }
          }
        `}</style>
      </div>
    )
  }

  // ─── Fase Inside (isi halaman rahasia) ──────────
  const semuaTerbuka = terbuka.length === faktaRahasia.length

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <MatrixRain />

      {/* Partikel bintang dekoratif */}
      {bintangList.map((b, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[1]"
          style={{ left: b.x, top: b.y, width: b.size, height: b.size }}
          animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, delay: b.delay, repeat: Infinity }}
        >
          <svg viewBox="0 0 24 24" fill="rgba(0,200,70,0.3)">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
        </motion.div>
      ))}

      {/* Konten utama */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">

        {/* Tombol kembali */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-green-500/50 hover:text-green-400 transition-colors mb-10 group">
            <FiArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            KEMBALI KE PORTOFOLIO
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiTerminal className="w-5 h-5 text-green-400" />
            <div className="font-mono text-green-400 text-xs tracking-widest">ARSIP RAHASIA — RIZKI HABIBI</div>
          </div>

          <pre className="text-green-500/40 text-[8px] sm:text-[9px] font-mono leading-tight mb-4 overflow-x-hidden">
            {asciiArt}
          </pre>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-green-300/70 text-sm leading-relaxed"
          >
            Selamat, kamu berhasil masuk ke arsip tersembunyi saya.
            Di sini ada hal-hal kecil yang tidak ditulis di portofolio utama.
            Klik setiap kartu untuk membuka isinya.
          </motion.p>
        </motion.div>

        {/* Progress bar rahasia */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6 p-4"
          style={{ border: '1px solid rgba(0,200,70,0.15)', background: 'rgba(0,200,70,0.03)' }}
        >
          <div className="flex items-center justify-between font-mono text-xs mb-2">
            <span className="text-green-500/50">PROGRES DEKRIPSI</span>
            <span className="text-green-400">{terbuka.length}/{faktaRahasia.length}</span>
          </div>
          <div className="h-1 bg-green-900/30 overflow-hidden">
            <motion.div
              className="h-full bg-green-500"
              animate={{ width: `${(terbuka.length / faktaRahasia.length) * 100}%` }}
              transition={{ type: 'spring', stiffness: 60 }}
            />
          </div>
          {semuaTerbuka && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-green-400 text-xs mt-2 text-center"
            >
              🎉 SEMUA RAHASIA TERBUKA — ACHIEVEMENT UNLOCKED!
            </motion.div>
          )}
        </motion.div>

        {/* Daftar fakta */}
        <div className="space-y-2 mb-10">
          {faktaRahasia.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
            >
              <KartuFakta
                fakta={f}
                terbuka={terbuka.includes(i)}
                onClick={() => bukaTerbuka(i)}
              />
            </motion.div>
          ))}
        </div>

        {/* Tombol buka semua */}
        {!semuaTerbuka && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-8"
          >
            <motion.button
              onClick={() => setTerbuka(faktaRahasia.map((_, i) => i))}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-mono text-xs px-6 py-3 text-[#0a0a0a] font-bold"
              style={{ background: '#00dc50' }}
            >
              BUKA SEMUA SEKARANG
            </motion.button>
          </motion.div>
        )}

        {/* Easter egg final — muncul kalau semua terbuka */}
        <AnimatePresence>
          {semuaTerbuka && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 80 }}
              className="p-6 text-center mb-10"
              style={{
                border: '1px solid rgba(0,220,80,0.4)',
                background: 'rgba(0,220,80,0.05)',
                boxShadow: '0 0 30px rgba(0,220,80,0.1)',
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
              >
                <FiStar className="w-8 h-8 text-green-400" />
              </motion.div>
              <h2 className="font-mono text-green-400 font-bold text-base mb-2">
                EXPLORER 100% COMPLETE
              </h2>
              <p className="font-mono text-green-500/60 text-xs leading-relaxed">
                Terima kasih sudah benar-benar menggali portofolio ini sampai ke lapisan terdalam.
                Kalau kamu serius sampai di sini, kita mungkin akan cocok bekerja sama. 🚀
              </p>
              <div className="mt-4 pt-4 border-t border-green-500/10">
                <a
                  href="mailto:rizkihabibi2432@gmail.com"
                  className="font-mono text-xs text-green-400 hover:text-green-300 transition-colors"
                >
                  📧 rizkihabibi2432@gmail.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer mini */}
        <div className="border-t border-green-900/30 pt-6 flex items-center justify-between">
          <span className="font-mono text-green-900/50 text-[10px]">© 2026 RIZKI HABIBI</span>
          <div className="flex items-center gap-1.5">
            <FiCode className="w-3 h-3 text-green-900/40" />
            <span className="font-mono text-green-900/40 text-[10px]">SECRET ARCHIVE v1.0</span>
          </div>
        </div>
      </div>
    </div>
  )
}
