'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { SiLaravel, SiPhp, SiNextdotjs, SiTailwindcss, SiMysql, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiGit, SiBootstrap, SiFigma, SiLinux, SiPython, SiReact, SiNodedotjs } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

// Pause marquee saat tab di-background — hemat GPU/RAM
function usePausedWhenHidden() {
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    const handler = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', handler)
    return () => document.removeEventListener('visibilitychange', handler)
  }, [])
  return paused
}

const techItems = [
  { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
  { icon: SiPhp, name: 'PHP', color: '#777BB4' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
  { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
  { icon: VscCode, name: 'VS Code', color: '#007ACC' },
  { icon: SiLinux, name: 'Linux', color: '#FCC624' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
]

// Duplicate for seamless loop
const doubledItems = [...techItems, ...techItems]
const doubledItemsRev = [...techItems].reverse().concat([...techItems].reverse())

export default function TechMarquee() {
  const paused = usePausedWhenHidden()
  return (
    <section className="py-6 sm:py-10 overflow-hidden relative" style={{ background: '#0a0a0a' }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />

      {/* Row 1 - left to right */}
      <motion.div
        className="flex gap-3 sm:gap-6 mb-3 sm:mb-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {doubledItems.map((tech, i) => (
          <div
            key={`row1-${i}`}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 whitespace-nowrap flex-shrink-0 transition-colors"
            style={{ background: '#1a1a1a', border: '2px solid #333', boxShadow: '2px 2px 0 #000' }}
          >
            <tech.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: tech.color }} />
            <span className="text-xs sm:text-sm font-bold text-white/70">{tech.name}</span>
          </div>
        ))}
      </motion.div>

      {/* Row 2 - right to left */}
      <motion.div
        className="flex gap-3 sm:gap-6"
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {doubledItemsRev.map((tech, i) => (
          <div
            key={`row2-${i}`}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 whitespace-nowrap flex-shrink-0 transition-colors"
            style={{ background: '#1a1a1a', border: '2px solid #333', boxShadow: '2px 2px 0 #000' }}
          >
            <tech.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: tech.color }} />
            <span className="text-xs sm:text-sm font-bold text-white/70">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
