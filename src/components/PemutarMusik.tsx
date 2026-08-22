'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Widget "Now Playing" mini -- expandable, pojok kiri bawah
// Hanya dekoratif (simulasi, tidak memutar audio sungguhan)

const tracklist = [
  { judul: 'Midnight Coding', artis: 'Lofi Beats', durasi: '3:42' },
  { judul: 'Coffee & Code', artis: 'ChillHop Radio', durasi: '4:15' },
  { judul: 'Debug Session', artis: 'Lo-Fi Coder', durasi: '2:58' },
  { judul: 'Stack Overflow', artis: 'Beats by Dev', durasi: '3:21' },
  { judul: 'Commit & Chill', artis: 'Git Flow Music', durasi: '4:07' },
]

function Bar({ aktif }: { aktif: boolean }) {
  return (
    <div className="flex items-end gap-[1.5px] h-3">
      {[0.5, 1, 0.6, 0.8, 0.4].map((h, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-t"
          style={{ background: aktif ? '#ffd700' : '#555' }}
          animate={aktif
            ? { height: [`${h * 12}px`, `${(1 - h) * 9 + 2}px`, `${h * 12}px`] }
            : { height: '2px' }}
          transition={aktif
            ? { duration: 0.45 + i * 0.08, repeat: Infinity, ease: 'easeInOut', delay: i * 0.06 }
            : { duration: 0.2 }}
        />
      ))}
    </div>
  )
}

export default function ComicNowPlaying() {
  const [expanded, setExpanded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [trackIdx, setTrackIdx] = useState(0)
  const [progress, setProgress] = useState(18)
  const [visible, setVisible] = useState(false)

  // Tampil setelah 4 detik
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4000)
    return () => clearTimeout(t)
  }, [])

  // Simulasi progress
  useEffect(() => {
    if (!playing) return
    const t = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { setTrackIdx(i => (i + 1) % tracklist.length); return 0 }
        return p + 0.4
      })
    }, 300)
    return () => clearInterval(t)
  }, [playing])

  const track = tracklist[trackIdx]

  if (!visible) return null

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 22 }}
      className="fixed bottom-20 left-2 z-40 hidden lg:block"
    >
      <div
        style={{
          background: '#0a0a0a',
          border: '2px solid #0a0a0a',
          boxShadow: expanded ? '4px 4px 0 #ffd700' : '2px 2px 0 #333',
          width: expanded ? 210 : 40,
          transition: 'width 0.25s ease, box-shadow 0.2s',
          overflow: 'hidden',
        }}
      >
        {/* Header -- selalu tampil */}
        <button
          onClick={() => setExpanded(v => !v)}
          className="flex items-center gap-2 w-full px-2 py-2 hover:bg-white/5 transition-colors"
          style={{ cursor: 'pointer', outline: 'none', border: 'none', background: 'none' }}
        >
          <Bar aktif={playing} />
          <AnimatePresence>
            {expanded && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-comic text-[9px] text-yellow-400 tracking-widest whitespace-nowrap"
              >
                NOW PLAYING
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* Body -- hanya saat expanded */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ borderTop: '1px solid #222', padding: '8px 10px' }}>
                {/* Info lagu */}
                <div className="mb-2">
                  <div className="font-comic text-[10px] text-yellow-400 leading-tight truncate">{track.judul}</div>
                  <div className="text-[9px] text-white/40 font-bold truncate">{track.artis}</div>
                </div>

                {/* Progress bar */}
                <div className="mb-2" style={{ height: 3, background: '#333', borderRadius: 2 }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${progress}%`,
                      background: '#ffd700',
                      borderRadius: 2,
                      transition: 'width 0.3s linear',
                    }}
                  />
                </div>

                {/* Kontrol */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setTrackIdx(i => (i - 1 + tracklist.length) % tracklist.length)}
                    className="text-white/40 hover:text-yellow-400 text-xs"
                  >⏮</button>

                  <motion.button
                    onClick={() => setPlaying(v => !v)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 h-6 flex items-center justify-center"
                    style={{ background: '#ffd700', border: '1.5px solid #0a0a0a', boxShadow: '1px 1px 0 #0a0a0a' }}
                  >
                    <span className="text-[#0a0a0a] text-[10px]">{playing ? '⏸' : '▶'}</span>
                  </motion.button>

                  <button
                    onClick={() => { setTrackIdx(i => (i + 1) % tracklist.length); setProgress(0) }}
                    className="text-white/40 hover:text-yellow-400 text-xs"
                  >⏭</button>
                </div>

                {/* Tracklist mini */}
                <div style={{ marginTop: 8, borderTop: '1px solid #222', paddingTop: 6 }}>
                  {tracklist.map((t, i) => (
                    <button
                      key={t.judul}
                      onClick={() => { setTrackIdx(i); setProgress(0) }}
                      className="w-full flex items-center gap-1.5 py-0.5 hover:bg-white/5 text-left transition-colors"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: i === trackIdx ? '#ffd700' : '#333' }}
                      />
                      <span className={`text-[9px] font-bold truncate ${i === trackIdx ? 'text-yellow-400' : 'text-white/40'}`}>
                        {t.judul}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
