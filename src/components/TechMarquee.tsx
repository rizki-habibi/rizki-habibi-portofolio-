'use client'

import { motion } from 'framer-motion'
import { SiLaravel, SiPhp, SiNextdotjs, SiTailwindcss, SiMysql, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiGit, SiBootstrap, SiFigma, SiLinux, SiPython, SiReact, SiNodedotjs } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

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

export default function TechMarquee() {
  return (
    <section className="py-10 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-charcoal-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-charcoal-950 to-transparent z-10 pointer-events-none" />

      {/* Row 1 - left to right */}
      <motion.div
        className="flex gap-6 mb-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubledItems.map((tech, i) => (
          <div
            key={`row1-${i}`}
            className="flex items-center gap-2 px-4 py-2.5 bg-charcoal-900/60 border border-charcoal-800 rounded-xl whitespace-nowrap flex-shrink-0 hover:border-navy-500/30 transition-colors"
          >
            <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
            <span className="text-sm text-soft-gray-300">{tech.name}</span>
          </div>
        ))}
      </motion.div>

      {/* Row 2 - right to left */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {doubledItems.reverse().map((tech, i) => (
          <div
            key={`row2-${i}`}
            className="flex items-center gap-2 px-4 py-2.5 bg-charcoal-900/60 border border-charcoal-800 rounded-xl whitespace-nowrap flex-shrink-0 hover:border-navy-500/30 transition-colors"
          >
            <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
            <span className="text-sm text-soft-gray-300">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
