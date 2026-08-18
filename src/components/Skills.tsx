'use client'

import { motion } from 'framer-motion'
import { SiLaravel, SiPhp, SiNextdotjs, SiTailwindcss, SiMysql, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiGit, SiBootstrap, SiFigma, SiLinux } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const skills = [
  { name: 'Laravel', icon: SiLaravel, level: 90, color: '#FF2D20', label: 'MASTER' },
  { name: 'PHP', icon: SiPhp, level: 85, color: '#777BB4', label: 'EXPERT' },
  { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26', label: 'MASTER' },
  { name: 'CSS3', icon: SiCss3, level: 90, color: '#1572B6', label: 'MASTER' },
  { name: 'JavaScript', icon: SiJavascript, level: 80, color: '#F7DF1E', label: 'EXPERT' },
  { name: 'TypeScript', icon: SiTypescript, level: 70, color: '#3178C6', label: 'SKILLED' },
  { name: 'Next.js', icon: SiNextdotjs, level: 75, color: '#000000', label: 'SKILLED' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4', label: 'MASTER' },
  { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1', label: 'EXPERT' },
  { name: 'Bootstrap', icon: SiBootstrap, level: 85, color: '#7952B3', label: 'EXPERT' },
  { name: 'Git', icon: SiGit, level: 75, color: '#F05032', label: 'SKILLED' },
  { name: 'Figma', icon: SiFigma, level: 70, color: '#F24E1E', label: 'SKILLED' },
  { name: 'VS Code', icon: VscCode, level: 95, color: '#007ACC', label: 'MASTER' },
  { name: 'Linux', icon: SiLinux, level: 65, color: '#FCC624', label: 'SKILLED' },
]

const softSkills = [
  { emoji: '🧩', name: 'Problem Solving', level: 88, desc: 'Analisis & solusi tepat' },
  { emoji: '👥', name: 'Leadership', level: 85, desc: 'Memimpin tim dengan baik' },
  { emoji: '💬', name: 'Communication', level: 82, desc: 'Komunikasi efektif' },
  { emoji: '🤝', name: 'Team Work', level: 90, desc: 'Kolaborasi solid' },
  { emoji: '⏰', name: 'Time Management', level: 78, desc: 'Tepat waktu & terorganisir' },
  { emoji: '🎯', name: 'Critical Thinking', level: 80, desc: 'Berpikir kritis & logis' },
]

const labelColors: Record<string, string> = {
  MASTER: '#ffd700',
  EXPERT: '#1a5cff',
  SKILLED: '#0a0a0a',
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative" style={{ background: '#f0f0eb' }}>
      <div className="max-w-6xl mx-auto">

        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <div className="chapter-label mb-3">CHAPTER 02</div>
          <h2 className="section-title">MY POWERS</h2>
          <div className="speech-bubble inline-block text-sm mt-4">
            ⚡ Setiap skill adalah kekuatan unik yang saya kuasai!
          </div>
        </motion.div>

        {/* Tech Skills — Ability Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mb-14">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ y: -6, rotate: -1 }}
              className="skill-card bg-white p-3 flex flex-col items-center gap-2 cursor-default"
            >
              {/* Level badge */}
              <div
                className="w-full text-center font-comic text-[9px] py-0.5 mb-1 text-white"
                style={{ background: labelColors[skill.label] || '#0a0a0a', color: skill.label === 'MASTER' ? '#0a0a0a' : 'white' }}
              >
                {skill.label}
              </div>

              {/* Icon */}
              <skill.icon
                className="w-8 h-8 md:w-10 md:h-10"
                style={{ color: skill.color === '#000000' ? '#0a0a0a' : skill.color }}
              />

              {/* Name */}
              <span className="font-bold text-[11px] text-comic-black text-center leading-tight">
                {skill.name}
              </span>

              {/* Progress bar comic style */}
              <div className="comic-progress w-full">
                <motion.div
                  className="comic-progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.04, ease: 'easeOut' }}
                  viewport={{ once: false }}
                  style={{
                    background: `repeating-linear-gradient(-45deg, ${skill.color} 0px, ${skill.color} 6px, ${skill.color}99 6px, ${skill.color}99 12px)`,
                  }}
                />
              </div>
              <span className="font-comic text-[10px] text-comic-black/60">{skill.level}%</span>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="comic-panel-dark p-8"
        >
          <div className="text-center mb-8">
            <h3 className="font-comic text-2xl text-white tracking-wide">SOFT SKILLS — CHARACTER STATS</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: false }}
                className="bg-white/10 border border-white/20 p-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{skill.emoji}</span>
                  <div>
                    <div className="font-bold text-white text-sm">{skill.name}</div>
                    <div className="text-white/50 text-xs">{skill.desc}</div>
                  </div>
                  <div className="ml-auto font-comic text-comic-yellow text-lg">{skill.level}</div>
                </div>
                <div className="comic-progress">
                  <motion.div
                    className="comic-progress-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                    viewport={{ once: false }}
                    style={{
                      background: 'repeating-linear-gradient(-45deg, #ffd700 0px, #ffd700 6px, #e6b800 6px, #e6b800 12px)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BNSP Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-10 comic-panel-yellow p-6 text-center"
        >
          <div className="font-comic text-2xl text-comic-black mb-2">🏆 SERTIFIKASI PROFESIONAL</div>
          <div className="inline-block px-6 py-3 bg-comic-yellow font-comic text-xl text-comic-black mb-2"
            style={{ border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a' }}
          >
            BNSP — JUNIOR WEB DEVELOPER
          </div>
          <p className="text-sm font-bold text-comic-black/70">
            Lembaga Sertifikasi Profesi Teknologi Digital • Yogyakarta, 2025
          </p>
          <p className="text-xs text-comic-black/50 mt-1">No. 62090 2513 3 0156814 2025</p>
        </motion.div>
      </div>
    </section>
  )
}
