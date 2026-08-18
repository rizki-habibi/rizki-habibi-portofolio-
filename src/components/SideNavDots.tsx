'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', label: 'Beranda' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'projects', label: 'Proyek' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'inovasi', label: 'Inovasi' },
  { id: 'certificates', label: 'Sertifikat' },
  { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Kontak' },
]

export default function SideNavDots() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3">
      {sections.map((section) => (
        <motion.a
          key={section.id}
          href={`#${section.id}`}
          whileHover={{ scale: 1.2 }}
          className="group flex items-center gap-2"
        >
          <span className="text-[10px] text-soft-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {section.label}
          </span>
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === section.id
                ? 'bg-navy-400 w-6 rounded-full shadow-md shadow-navy-400/50'
                : 'bg-charcoal-600 hover:bg-soft-gray-400'
              }`}
          />
        </motion.a>
      ))}
    </div>
  )
}
