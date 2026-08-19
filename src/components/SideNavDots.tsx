'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Daftar section utama yang punya ID di halaman (terurut sesuai chapter)
const sections = [
  { id: 'home', label: 'Ch.00 · Origin' },
  { id: 'cerita', label: 'Ch.01 · Story' },
  { id: 'skills', label: 'Ch.02 · Powers' },
  { id: 'projects', label: 'Ch.03 · Missions' },
  { id: 'timeline', label: 'Ch.04 · Journey' },
  { id: 'certificates', label: 'Ch.05 · Cards' },
  { id: 'visi-kvt', label: 'Ch.06 · KVT Dream' },
  { id: 'inovasi', label: 'Ch.07 · Innovation' },
  { id: 'stats', label: 'Ch.08 · Stats' },
  { id: 'tools', label: 'Ch.09 · Arsenal' },
  { id: 'achievements', label: 'Ch.10 · Awards' },
  { id: 'quotes', label: 'Ch.11 · Quotes' },
  { id: 'education', label: 'Ch.12 · Training' },
  { id: 'hobbies', label: 'Ch.13 · Off-Duty' },
  { id: 'komunitas', label: 'Ch.14 · Network' },
  { id: 'epilog', label: 'Ch.15 · Epilog' },
  { id: 'ch16', label: 'Ch.16 · Desa Digital' },
  { id: 'ch20', label: 'Ch.20 · Komersial' },
  { id: 'ch26', label: 'Ch.26 · AI Journey' },
  { id: 'ch34', label: 'Ch.34 · IoT' },
  { id: 'ch36', label: 'Ch.36 · Kesehatan' },
  { id: 'ch46', label: 'Ch.46 · Motivasi' },
  { id: 'ch50', label: 'Ch.50 · Milestone' },
  { id: 'ch56', label: 'Ch.56 · Warisan' },
  { id: 'age-counter', label: '⏱ Age Counter' },
  { id: 'cv', label: '👤 Profile' },
  { id: 'contact', label: '✉ Contact' },
]

// Warna dot per grup chapter
function dotColor(id: string, active: boolean): string {
  if (!active) return '#0a0a0a'
  if (id === 'home') return '#1a5cff'
  const num = parseInt(id.replace('ch', '')) || 0
  if (num >= 56) return '#ffd700'
  if (num >= 46) return '#8b5cf6'
  if (num >= 36) return '#22c55e'
  if (num >= 26) return '#e63329'
  if (num >= 16) return '#f59e0b'
  // chapter 01-15 berdasarkan id string
  const idx = sections.findIndex(s => s.id === id)
  const warna = ['#1a5cff', '#FF2D20', '#22c55e', '#8b5cf6', '#f59e0b', '#e63329', '#06B6D4', '#ffd700', '#1a5cff', '#FF2D20', '#22c55e', '#8b5cf6', '#f59e0b', '#e63329', '#06B6D4']
  return warna[idx % warna.length] ?? '#1a5cff'
}

export default function SideNavDots() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.25, rootMargin: '-10% 0px -60% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    // Posisi: kanan, tengah vertikal, tidak menumpuk dengan CommandPalette (bottom-6) dan NowPlaying (bottom-24)
    // Beri margin kanan cukup agar tidak tabrakan dengan ScrollBar browser
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-[5px]">
      {sections.map(section => {
        const isActive = active === section.id
        const warna = dotColor(section.id, isActive)
        return (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            whileHover={{ scale: 1.2 }}
            className="group flex items-center gap-2"
            title={section.label}
          >
            {/* Label tooltip — muncul saat hover */}
            <span
              className="font-comic text-[9px] opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap px-2 py-0.5 pointer-events-none"
              style={{
                background: isActive ? warna : '#fff',
                color: isActive ? '#fff' : '#0a0a0a',
                border: `1.5px solid ${warna}`,
                boxShadow: `2px 2px 0 ${warna}`,
                transform: 'translateX(-4px)',
              }}
            >
              {section.label}
            </span>

            {/* Dot */}
            <motion.div
              animate={{
                width: isActive ? 20 : 6,
                height: 6,
                background: warna,
                boxShadow: isActive ? `2px 2px 0 ${warna}66` : 'none',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              style={{ border: `1.5px solid ${isActive ? warna : '#0a0a0a30'}`, flexShrink: 0 }}
            />
          </motion.a>
        )
      })}
    </div>
  )
}
