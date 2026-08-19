'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Playlist lofi imajiner — murni dekoratif
const playlist = [
  { judul: 'Midnight Coding', artis: 'Lofi Beats', durasi: '3:42' },
  { judul: 'Coffee & Code', artis: 'ChillHop Radio', durasi: '4:15' },
  { judul: 'Late Night Flow', artis: 'Study Beats', durasi: '3:58' },
  { judul: 'Debug Session', artis: 'Lo-Fi Coder', durasi: '5:02' },
  { judul: 'Rainy Window', artis: 'Ambient Works', durasi: '4:33' },
  { judul: 'Stack Overflow', artis: 'Beats by Dev', durasi: '3:27' },
  { judul: 'Commit & Chill', artis: 'Git Flow Music', durasi: '4:48' },
]

// Batang equalizer animasi
function Equalizer() {
  return (
    <div className="flex items-end gap-[2px] h-4">
      {[0.4, 0.8, 0.5, 1, 0.6, 0.9, 0.3].map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-t"
          style={{ background: '#ffd700' }}
          animate={{ height: [`${h * 16}px`, `${(1 - h) * 16 + 2}px`, `${h * 16}px`] }}
          transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.07 }}
        />
      ))}
    </div>
  )
}

export default function ComicNowPlaying() {
  const [laguIdx, setLaguIdx] = useState(0)
  const [tampil, setTampil] = useState(false)
  const [minimized, setMinimized] = useState(false)

  // Muncul setelah 5 detik
  useEffect(() => {
    const t = setTimeout(() => setTampil(true), 5000)
    return () => clearTimeout(t)
  }, [])

  // Ganti lagu setiap 30 detik
  useEffect(() => {
    const t = setInterval(() => {
      setLaguIdx(i => (i + 1) % playlist.length)
    }, 30000)
    return () => clearInterval(t)
  }, [])

  const lagu = playlist[laguIdx]

  return (
    <AnimatePresence>
      {tampil && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          className="fixed bottom-24 right-4 z-40"
        >
          {minimized ? (
            // Mode minimized — hanya tombol
            <motion.button
              onClick={() => setMinimized(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10"
              style={{ background: '#0a0a0a', border: '2px solid #ffd700', boxShadow: '3px 3px 0 #ffd700' }}
              title="Now Playing"
            >
              <Equalizer />
            </motion.button>
          ) : (
            // Mode penuh
            <div
              className="relative overflow-hidden"
              style={{
                background: '#0a0a0a',
                border: '3px solid #ffd700',
                boxShadow: '6px 6px 0 #ffd700',
                width: 220,
              }}
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-3 py-2"
                style={{ borderBottom: '2px solid #ffd700' }}>
                <div className="flex items-center gap-2">
                  <Equalizer />
                  <span className="font-comic text-yellow-400 text-[10px] tracking-widest">NOW PLAYING</span>
                </div>
                <button
                  onClick={() => setMinimized(true)}
                  className="text-white/40 hover:text-white transition-colors text-xs leading-none"
                  title="Minimalkan"
                >
                  ─
                </button>
              </div>

              {/* Info lagu */}
              <div className="px-3 py-3">
                {/* Judul dengan animasi marquee jika panjang */}
                <div className="overflow-hidden mb-0.5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={laguIdx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="font-comic text-white text-xs truncate"
                    >
                      {lagu.judul}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="text-white/40 text-[10px] font-bold mb-2">{lagu.artis}</div>

                {/* Progress bar simulasi */}
                <div className="h-1 bg-white/10 overflow-hidden mb-1">
                  <motion.div
                    className="h-full"
                    style={{ background: '#ffd700' }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
                    key={laguIdx}
                  />
                </div>

                <div className="flex justify-between text-[9px] text-white/30 font-mono">
                  <span>0:00</span>
                  <span>{lagu.durasi}</span>
                </div>

                {/* Kontrol prev/next */}
                <div className="flex items-center justify-center gap-4 mt-2">
                  <button
                    onClick={() => setLaguIdx(i => (i - 1 + playlist.length) % playlist.length)}
                    className="text-white/40 hover:text-yellow-400 transition-colors text-base leading-none"
                    title="Sebelumnya"
                  >
                    ⏮
                  </button>
                  <div className="w-8 h-8 flex items-center justify-center"
                    style={{ border: '2px solid #ffd700', background: 'rgba(255,215,0,0.1)' }}>
                    <span className="text-yellow-400 text-base leading-none">▶</span>
                  </div>
                  <button
                    onClick={() => setLaguIdx(i => (i + 1) % playlist.length)}
                    className="text-white/40 hover:text-yellow-400 transition-colors text-base leading-none"
                    title="Berikutnya"
                  >
                    ⏭
                  </button>
                </div>
              </div>

              {/* Label dekoratif */}
              <div className="px-3 pb-2">
                <div className="text-[9px] text-white/20 font-mono text-center tracking-widest">
                  🎵 LOFI • RIZKI CODES TO THIS
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
