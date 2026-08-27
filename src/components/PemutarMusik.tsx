'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Playlist Hindia — YouTube embed ID
const tracklist = [
  {
    judul: 'Rumah ke Rumah',
    artis: 'Hindia',
    ytId: 'kJwUHH9WVMM',
    durasi: '4:12',
  },
  {
    judul: 'Evaluasi',
    artis: 'Hindia',
    ytId: 'GCMeJbNBZf4',
    durasi: '4:41',
  },
  {
    judul: 'Secukupnya',
    artis: 'Hindia',
    ytId: 'W9M_mMJMiws',
    durasi: '3:58',
  },
  {
    judul: 'Membasuh',
    artis: 'Hindia feat. Rara Sekar',
    ytId: 'OZJYf_6Y7wQ',
    durasi: '4:04',
  },
  {
    judul: 'Kita ke Sana',
    artis: 'Hindia',
    ytId: '9p0Z6VBpwcg',
    durasi: '3:30',
  },
]

function Bar({ aktif }: { aktif: boolean }) {
  return (
    <div className="flex items-end gap-[1.5px] h-3">
      {[0.5, 1, 0.6, 0.8, 0.4].map((h, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-t"
          style={{ background: aktif ? '#ffd700' : '#555' }}
          animate={
            aktif
              ? { height: [`${h * 12}px`, `${(1 - h) * 9 + 2}px`, `${h * 12}px`] }
              : { height: '2px' }
          }
          transition={
            aktif
              ? { duration: 0.45 + i * 0.08, repeat: Infinity, ease: 'easeInOut', delay: i * 0.06 }
              : { duration: 0.2 }
          }
        />
      ))}
    </div>
  )
}

export default function PemutarMusik() {
  const [expanded, setExpanded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [trackIdx, setTrackIdx] = useState(0)
  const [visible, setVisible] = useState(false)
  const [showEmbed, setShowEmbed] = useState(false)
  const playerRef = useRef<HTMLIFrameElement>(null)

  // Tampil setelah 4 detik
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4000)
    return () => clearTimeout(t)
  }, [])

  // Saat play ditekan — tampilkan embed
  function handlePlay() {
    setPlaying(true)
    setShowEmbed(true)
  }

  function handlePause() {
    setPlaying(false)
    setShowEmbed(false)
  }

  function handleTrackChange(idx: number) {
    setTrackIdx(idx)
    setShowEmbed(false)
    setPlaying(false)
    // delay sebentar baru load embed baru
    setTimeout(() => {
      if (playing) setShowEmbed(true)
    }, 100)
  }

  function handleNext() {
    const next = (trackIdx + 1) % tracklist.length
    setTrackIdx(next)
    setShowEmbed(false)
    setPlaying(false)
    setTimeout(() => { setPlaying(true); setShowEmbed(true) }, 150)
  }

  function handlePrev() {
    const prev = (trackIdx - 1 + tracklist.length) % tracklist.length
    setTrackIdx(prev)
    setShowEmbed(false)
    setPlaying(false)
    setTimeout(() => { setPlaying(true); setShowEmbed(true) }, 150)
  }

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
          width: expanded ? 220 : 40,
          transition: 'width 0.25s ease, box-shadow 0.2s',
          overflow: 'hidden',
        }}
      >
        {/* Header — selalu tampil */}
        <button
          onClick={() => setExpanded(v => !v)}
          className="flex items-center gap-2 w-full px-2 py-2 hover:bg-white/5 transition-colors"
          style={{ cursor: 'pointer', outline: 'none', border: 'none', background: 'none' }}
          aria-label={expanded ? 'Tutup pemutar musik' : 'Buka pemutar musik'}
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

        {/* Body */}
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

                {/* Label Hindia */}
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-[8px] font-comic text-white/30 tracking-widest uppercase">
                    🎵 Hindia Playlist
                  </span>
                </div>

                {/* Info lagu */}
                <div className="mb-2">
                  <div className="font-comic text-[10px] text-yellow-400 leading-tight truncate">
                    {track.judul}
                  </div>
                  <div className="text-[9px] text-white/40 font-bold truncate">
                    {track.artis}
                  </div>
                </div>

                {/* YouTube iframe tersembunyi — audio player */}
                {showEmbed && (
                  <iframe
                    ref={playerRef}
                    key={`${track.ytId}-${trackIdx}`}
                    src={`https://www.youtube.com/embed/${track.ytId}?autoplay=1&controls=0&modestbranding=1&rel=0`}
                    allow="autoplay; encrypted-media"
                    title={track.judul}
                    style={{
                      width: '100%',
                      height: 60,
                      border: 'none',
                      borderRadius: 2,
                      marginBottom: 6,
                    }}
                  />
                )}

                {/* Kontrol */}
                <div className="flex items-center justify-between mb-2">
                  <button
                    onClick={handlePrev}
                    className="text-white/40 hover:text-yellow-400 text-xs transition-colors"
                    aria-label="Lagu sebelumnya"
                  >
                    ⏮
                  </button>

                  <motion.button
                    onClick={playing ? handlePause : handlePlay}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 h-6 flex items-center justify-center"
                    style={{
                      background: '#ffd700',
                      border: '1.5px solid #0a0a0a',
                      boxShadow: '1px 1px 0 #0a0a0a',
                    }}
                    aria-label={playing ? 'Pause' : 'Play'}
                  >
                    <span className="text-[#0a0a0a] text-[10px]">{playing ? '⏸' : '▶'}</span>
                  </motion.button>

                  <button
                    onClick={handleNext}
                    className="text-white/40 hover:text-yellow-400 text-xs transition-colors"
                    aria-label="Lagu berikutnya"
                  >
                    ⏭
                  </button>
                </div>

                {/* Tracklist mini */}
                <div style={{ borderTop: '1px solid #222', paddingTop: 6 }}>
                  {tracklist.map((t, i) => (
                    <button
                      key={t.ytId}
                      onClick={() => handleTrackChange(i)}
                      className="w-full flex items-center gap-1.5 py-0.5 hover:bg-white/5 text-left transition-colors"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: i === trackIdx ? '#ffd700' : '#333' }}
                      />
                      <span
                        className={`text-[9px] font-bold truncate ${i === trackIdx ? 'text-yellow-400' : 'text-white/40'
                          }`}
                      >
                        {t.judul}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Credit */}
                <div className="mt-3 pt-2 border-t border-white/5">
                  <span className="text-[8px] text-white/20 font-bold">via YouTube • Hindia</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
