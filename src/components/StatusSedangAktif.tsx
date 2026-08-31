'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Data status yang bisa diubah kapanpun ──────────────────────────────────
const STATUS = {
  online: true,          // false = tampil "Away"
  mood: '🎯 Deep focus',
  proyekAktif: 'Camora AI — Virtual Character',
  aktivitas: 'Nulis kode & dengerin Hindia',
  tersediaUntuk: ['Freelance', 'Kolaborasi', 'Diskusi proyek'],
  responTime: '< 24 jam',
}

const AKTIVITAS_ROTASI = [
  '⌨️ Nulis kode & dengerin Hindia',
  '🔮 Mengembangkan Camora AI',
  '📖 Baca dokumentasi Next.js',
  '🎨 Desain karakter virtual baru',
  '☕ Kopi + debugging session',
  '🌙 Coding tengah malam',
  '🎵 Playlist Hindia on repeat',
  '🧠 Mikirin solusi masalah teknis',
]

function PulsingDot({ online }: { online: boolean }) {
  return (
    <span className="relative flex h-2.5 w-2.5">
      {online && (
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: '#22c55e' }}
        />
      )}
      <span
        className="relative inline-flex rounded-full h-2.5 w-2.5"
        style={{ background: online ? '#22c55e' : '#f59e0b' }}
      />
    </span>
  )
}

export default function StatusSedangAktif() {
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)
  const [waktu, setWaktu] = useState('')
  const [aktivitasIdx, setAktivitasIdx] = useState(0)
  const [hovered, setHovered] = useState(false)

  // Muncul setelah 5 detik
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 5000)
    return () => clearTimeout(t)
  }, [])

  // Update waktu setiap detik
  useEffect(() => {
    function tick() {
      const now = new Date()
      setWaktu(
        now.toLocaleTimeString('id-ID', {
          timeZone: 'Asia/Makassar',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' WITA'
      )
    }
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])

  // Rotasi aktivitas setiap 8 detik
  useEffect(() => {
    const t = setInterval(() => {
      setAktivitasIdx(i => (i + 1) % AKTIVITAS_ROTASI.length)
    }, 8000)
    return () => clearInterval(t)
  }, [])

  if (!visible) return null

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 22 }}
      className="fixed bottom-20 right-2 z-40 hidden lg:block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          background: '#0a0a0a',
          border: '2px solid #0a0a0a',
          boxShadow: expanded
            ? '4px 4px 0 #22c55e'
            : hovered
            ? '4px 4px 0 #ffd700'
            : '2px 2px 0 #333',
          width: expanded ? 240 : 'auto',
          maxWidth: 240,
          transition: 'box-shadow 0.2s, width 0.25s ease',
          overflow: 'hidden',
        }}
      >
        {/* Header — selalu tampil */}
        <button
          onClick={() => setExpanded(v => !v)}
          className="flex items-center gap-2 px-3 py-2 w-full hover:bg-white/5 transition-colors"
          style={{ outline: 'none', border: 'none', background: 'none', cursor: 'pointer' }}
          aria-label="Toggle status"
        >
          <PulsingDot online={STATUS.online} />
          <AnimatePresence mode="wait">
            <motion.span
              key={expanded ? 'tutup' : 'buka'}
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ duration: 0.15 }}
              className="font-comic text-[9px] tracking-widest whitespace-nowrap"
              style={{ color: STATUS.online ? '#22c55e' : '#f59e0b' }}
            >
              {STATUS.online ? 'ONLINE' : 'AWAY'}
            </motion.span>
          </AnimatePresence>
          {expanded && (
            <span className="ml-auto text-white/30 text-[10px]">✕</span>
          )}
        </button>

        {/* Body — saat expanded */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{ borderTop: '1px solid #1a1a1a', padding: '10px 12px' }}
                className="flex flex-col gap-3"
              >
                {/* Avatar + nama */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 font-comic text-sm"
                    style={{
                      background: '#1a5cff',
                      border: '2px solid #0a0a0a',
                      boxShadow: '2px 2px 0 #0a0a0a',
                      color: '#fff',
                    }}
                  >
                    RH
                  </div>
                  <div>
                    <div className="font-comic text-[11px] text-white leading-tight">Rizki Habibi</div>
                    <div className="text-[9px] text-white/40 font-bold">Web Dev · AI Creator</div>
                  </div>
                </div>

                {/* Mood */}
                <div
                  className="px-2 py-1.5 text-[10px] font-bold text-white/70"
                  style={{ background: '#111', borderLeft: '2px solid #ffd700' }}
                >
                  {STATUS.mood}
                </div>

                {/* Aktivitas rotasi */}
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] text-white/30 font-bold tracking-widest uppercase">
                    Aktivitas
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={aktivitasIdx}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="text-[10px] font-bold text-white/60"
                    >
                      {AKTIVITAS_ROTASI[aktivitasIdx]}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Proyek aktif */}
                <div
                  className="p-2"
                  style={{ background: '#1a5cff11', border: '1px solid #1a5cff33' }}
                >
                  <div className="text-[8px] text-white/30 font-bold tracking-widest uppercase mb-1">
                    🚀 Proyek Aktif
                  </div>
                  <div className="text-[10px] font-comic text-[#60a5fa] leading-tight">
                    {STATUS.proyekAktif}
                  </div>
                </div>

                {/* Tersedia untuk */}
                <div>
                  <div className="text-[8px] text-white/30 font-bold tracking-widest uppercase mb-1.5">
                    ✅ Tersedia untuk
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {STATUS.tersediaUntuk.map(item => (
                      <span
                        key={item}
                        className="text-[8px] font-bold px-1.5 py-0.5"
                        style={{
                          background: '#22c55e18',
                          border: '1px solid #22c55e44',
                          color: '#4ade80',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Waktu lokal + respon */}
                <div
                  className="flex items-center justify-between pt-2"
                  style={{ borderTop: '1px solid #1a1a1a' }}
                >
                  <div className="flex flex-col">
                    <span className="text-[8px] text-white/20 font-bold">Waktu lokal</span>
                    <span className="font-comic text-[10px] text-white/50">{waktu}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] text-white/20 font-bold">Respon</span>
                    <span className="font-comic text-[10px] text-[#ffd700]">{STATUS.responTime}</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#kontak"
                  onClick={() => setExpanded(false)}
                  className="w-full text-center font-comic text-[10px] py-1.5 transition-transform hover:-translate-y-0.5"
                  style={{
                    background: '#ffd700',
                    color: '#0a0a0a',
                    border: '2px solid #0a0a0a',
                    boxShadow: '2px 2px 0 #0a0a0a',
                    display: 'block',
                  }}
                >
                  💬 Hubungi Sekarang
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
