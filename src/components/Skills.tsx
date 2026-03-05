'use client'

import { motion } from 'framer-motion'
import { SiLaravel, SiPhp, SiNextdotjs, SiTailwindcss, SiMysql, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiGit, SiBootstrap, SiFigma, SiLinux, SiPython } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { HiSparkles } from 'react-icons/hi'

const skills = [
  { name: 'Laravel', icon: SiLaravel, level: 90, color: '#FF2D20' },
  { name: 'PHP', icon: SiPhp, level: 85, color: '#777BB4' },
  { name: 'Next.js', icon: SiNextdotjs, level: 75, color: '#ffffff' },
  { name: 'JavaScript', icon: SiJavascript, level: 80, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, level: 70, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
  { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1' },
  { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, level: 90, color: '#1572B6' },
  { name: 'Bootstrap', icon: SiBootstrap, level: 85, color: '#7952B3' },
  { name: 'Git', icon: SiGit, level: 75, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, level: 70, color: '#F24E1E' },
  { name: 'VS Code', icon: VscCode, level: 95, color: '#007ACC' },
  { name: 'Linux', icon: SiLinux, level: 65, color: '#FCC624' },
  { name: 'Python', icon: SiPython, level: 60, color: '#3776AB' },
]

const softSkills = [
  { name: 'Problem Solving', emoji: '🧩', level: 88 },
  { name: 'Leadership', emoji: '👥', level: 85 },
  { name: 'Communication', emoji: '💬', level: 82 },
  { name: 'Team Work', emoji: '🤝', level: 90 },
  { name: 'Time Management', emoji: '⏰', level: 78 },
  { name: 'Critical Thinking', emoji: '🎯', level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">Keahlian & Teknologi</h2>
          <p className="text-soft-gray-400 max-w-lg mx-auto">
            Tech stack dan kemampuan yang saya kuasai dari berbagai proyek dan pelatihan.
          </p>
        </motion.div>

        {/* Tech Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 md:gap-5 mb-16">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
            >
              <div className="relative bg-charcoal-900/80 backdrop-blur-sm border border-charcoal-700/50 group-hover:border-navy-500/50 rounded-2xl p-4 text-center transition-all duration-300">
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: `${skill.color}15` }}
                />

                {/* Icon */}
                <div className="relative mb-3 flex justify-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon
                      className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300"
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                </div>

                {/* Name */}
                <div className="text-xs md:text-sm font-medium text-soft-gray-300 mb-2">{skill.name}</div>

                {/* Level bar */}
                <div className="h-1.5 bg-charcoal-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                    viewport={{ once: false }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <div className="text-[10px] text-soft-gray-500 mt-1">{skill.level}%</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <HiSparkles className="w-5 h-5 text-amber-400" />
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.03 }}
                className="bg-charcoal-800/50 rounded-xl p-4 border border-charcoal-700/50 hover:border-navy-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{skill.emoji}</span>
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                </div>
                <div className="h-2 bg-charcoal-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    viewport={{ once: false }}
                    className="h-full rounded-full bg-gradient-to-r from-navy-500 to-purple-500"
                  />
                </div>
                <div className="text-[11px] text-soft-gray-500 mt-1 text-right">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
