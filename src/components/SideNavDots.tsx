'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', label: 'Beranda' },
  { id: 'cerita', label: 'Story' },
  { id: 'skills', label: 'Powers' },
  { id: 'projects', label: 'Missions' },
  { id: 'timeline', label: 'Journey' },
  { id: 'certificates', label: 'Cards' },
  { id: 'visi-kvt', label: 'KVT' },
  { id: 'inovasi', label: 'Inovasi' },
  { id: 'stats', label: 'Stats' },
  { id: 'tools', label: 'Arsenal' },
  { id: 'achievements', label: 'Awards' },
  { id: 'cv', label: 'Profile' },
  { id: 'contact', label: 'Contact' },
]

export default function SideNavDots() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.3 }
    )
    sections.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-2">
      {sections.map(section => (
        <motion.a
          key={section.id}
          href={`#${section.id}`}
          whileHover={{ scale: 1.15 }}
          className="group flex items-center gap-2"
          title={section.label}
        >
          <span className="text-[9px] font-bold text-comic-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap px-1.5 py-0.5 bg-white"
            style={{ border: '1px solid #0a0a0a', boxShadow: '1px 1px 0 #0a0a0a' }}>
            {section.label}
          </span>
          <div
            className="transition-all duration-300"
            style={{
              width: active === section.id ? 20 : 8,
              height: 8,
              background: active === section.id ? '#1a5cff' : '#0a0a0a',
              border: '1.5px solid #0a0a0a',
              boxShadow: active === section.id ? '2px 2px 0 #1a5cff40' : 'none',
            }}
          />
        </motion.a>
      ))}
    </div>
  )
}
