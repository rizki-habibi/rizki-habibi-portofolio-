'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', label: 'Ch.00 Origin' },
  { id: 'cerita', label: 'Ch.01 Story' },
  { id: 'skills', label: 'Ch.02 Powers' },
  { id: 'projects', label: 'Ch.03 Missions' },
  { id: 'timeline', label: 'Ch.04 Journey' },
  { id: 'certificates', label: 'Ch.05 Cards' },
  { id: 'visi-kvt', label: 'Ch.06 KVT' },
  { id: 'inovasi', label: 'Ch.07 Inovasi' },
  { id: 'stats', label: 'Ch.08 Stats' },
  { id: 'tools', label: 'Ch.09 Arsenal' },
  { id: 'achievements', label: 'Ch.10 Awards' },
  { id: 'quotes', label: 'Ch.11 Quotes' },
  { id: 'education', label: 'Ch.12 Training' },
  { id: 'hobbies', label: 'Ch.13 Life' },
  { id: 'komunitas', label: 'Ch.14 Network' },
  { id: 'epilog', label: 'Ch.15 Epilog' },
  { id: 'cv', label: 'Profile' },
  { id: 'contact', label: 'Final Chapter' },
]

export default function SideNavDots() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.3 }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-1.5">
      {sections.map(section => (
        <motion.a
          key={section.id}
          href={`#${section.id}`}
          whileHover={{ scale: 1.15 }}
          className="group flex items-center gap-2"
          title={section.label}
        >
          <span
            className="text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap px-1.5 py-0.5 bg-white text-comic-black"
            style={{ border: '1px solid #0a0a0a', boxShadow: '1px 1px 0 #0a0a0a' }}
          >
            {section.label}
          </span>
          <div
            className="transition-all duration-300 flex-shrink-0"
            style={{
              width: active === section.id ? 18 : 7,
              height: 7,
              background: active === section.id ? '#1a5cff' : '#0a0a0a',
              border: '1.5px solid #0a0a0a',
              boxShadow: active === section.id ? '2px 2px 0 rgba(26,92,255,0.4)' : 'none',
            }}
          />
        </motion.a>
      ))}
    </div>
  )
}
