'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Setiap section mendapat nomor urut 1, 2, 3, ...
const sections = [
  { id: 'home',        label: 'Beranda',         emoji: '🏠' },
  { id: 'cerita',      label: 'Cerita Saya',      emoji: '📖' },
  { id: 'skills',      label: 'Keahlian',         emoji: '⚡' },
  { id: 'progress-skills', label: 'Progress',    emoji: '📊' },
  { id: 'projects',    label: 'Proyek',           emoji: '🎯' },
  { id: 'timeline',    label: 'Perjalanan',       emoji: '🗺️' },
  { id: 'certificates',label: 'Sertifikat',       emoji: '🏅' },
  { id: 'visi-kvt',    label: 'Visi KVT',         emoji: '🌐' },
  { id: 'inovasi',     label: 'Inovasi',          emoji: '🔧' },
  { id: 'stats',       label: 'Statistik',        emoji: '📈' },
  { id: 'tools',       label: 'Tools',            emoji: '🛠️' },
  { id: 'achievements',label: 'Pencapaian',       emoji: '🏆' },
  { id: 'testimonials',label: 'Testimoni',        emoji: '💬' },
  { id: 'quotes',      label: 'Kata-kata',        emoji: '✨' },
  { id: 'education',   label: 'Pendidikan',       emoji: '🎓' },
  { id: 'hobbies',     label: 'Hobi',             emoji: '🎮' },
  { id: 'komunitas',   label: 'Komunitas',        emoji: '👥' },
  { id: 'epilog',      label: 'Epilog',           emoji: '🚀' },
  { id: 'cv',          label: 'CV',               emoji: '📄' },
  { id: 'faq',         label: 'FAQ',              emoji: '❓' },
  { id: 'contact',     label: 'Kontak',           emoji: '✉️' },
]

// Warna aksen per nomor
const warnaAksen = [
  '#1a5cff','#FF2D20','#22c55e','#8b5cf6','#f59e0b',
  '#e63329','#06B6D4','#ffd700','#1a5cff','#FF2D20',
  '#22c55e','#8b5cf6','#f59e0b','#e63329','#06B6D4',
  '#ffd700','#1a5cff','#FF2D20','#22c55e','#8b5cf6','#f59e0b',
]

export default function SideNavDots() {
  const [active, setActive] = useState('home')
  const [hoverId, setHoverId] = useState<string | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.2, rootMargin: '-10% 0px -55% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div
      className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-[3px]"
      style={{ maxHeight: '90vh', overflowY: 'auto', scrollbarWidth: 'none' }}
    >
      {sections.map((sec, idx) => {
        const isActive = active === sec.id
        const isHover = hoverId === sec.id
        const aksen = warnaAksen[idx % warnaAksen.length]
        const nomor = String(idx + 1).padStart(2, '0')

        return (
          <div
            key={sec.id}
            className="flex items-center justify-end gap-1.5 relative"
            onMouseEnter={() => setHoverId(sec.id)}
            onMouseLeave={() => setHoverId(null)}
          >
            {/* Label tooltip — muncul saat hover dari kanan */}
            <AnimatePresence>
              {isHover && (
                <motion.a
                  href={`#${sec.id}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-1.5 px-2 py-1 whitespace-nowrap no-underline"
                  style={{
                    background: isActive ? aksen : '#0a0a0a',
                    border: `2px solid ${isActive ? aksen : '#0a0a0a'}`,
                    boxShadow: `3px 3px 0 ${aksen}`,
                  }}
                >
                  <span className="text-[10px]">{sec.emoji}</span>
                  <span
                    className="font-comic text-[9px] tracking-wider"
                    style={{ color: 'white' }}
                  >
                    {sec.label.toUpperCase()}
                  </span>
                </motion.a>
              )}
            </AnimatePresence>

            {/* Kotak bernomor utama */}
            <motion.a
              href={`#${sec.id}`}
              animate={{
                background: isActive ? aksen : '#0a0a0a',
                scale: isActive ? 1.15 : isHover ? 1.08 : 1,
              }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="flex items-center justify-center font-comic cursor-pointer no-underline"
              style={{
                width: isActive ? 28 : 20,
                height: isActive ? 28 : 20,
                border: `2px solid ${isActive ? aksen : '#0a0a0a'}`,
                boxShadow: isActive
                  ? `3px 3px 0 ${aksen}66`
                  : isHover
                  ? `2px 2px 0 ${aksen}`
                  : '2px 2px 0 #0a0a0a44',
                fontSize: isActive ? '9px' : '8px',
                color: 'white',
                flexShrink: 0,
                transition: 'width 0.2s, height 0.2s',
              }}
              title={sec.label}
            >
              {nomor}
            </motion.a>
          </div>
        )
      })}

      {/* Garis dekoratif bawah */}
      <div
        className="w-0.5 mt-1 mx-auto"
        style={{
          height: 24,
          background: 'repeating-linear-gradient(180deg,#0a0a0a 0,#0a0a0a 4px,transparent 4px,transparent 8px)',
          opacity: 0.3,
        }}
      />
    </div>
  )
}
