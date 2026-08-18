'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FiAward, FiCode, FiFolder, FiCpu, FiShield, FiStar } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        ease: 'easeOut',
        onUpdate: (v) => setCount(Math.round(v)),
      })
      return () => controls.stop()
    } else {
      setCount(0)
    }
  }, [isInView, target, duration])

  return <span ref={ref}>{count}</span>
}

const stats = [
  {
    icon: FiAward,
    value: 75,
    suffix: '+',
    label: 'Sertifikat & Seminar',
    description: 'Pelatihan, Kursus & Kegiatan',
    color: 'from-amber-400 to-orange-500',
    iconColor: 'text-amber-400',
    bgGlow: 'bg-amber-500/20',
  },
  {
    icon: FiFolder,
    value: 4,
    suffix: '+',
    label: 'Proyek',
    description: 'Aplikasi & Sistem',
    color: 'from-blue-400 to-cyan-500',
    iconColor: 'text-blue-400',
    bgGlow: 'bg-blue-500/20',
  },
  {
    icon: FiCode,
    value: 7,
    suffix: '+',
    label: 'Tech Stack',
    description: 'Bahasa & Framework',
    color: 'from-green-400 to-emerald-500',
    iconColor: 'text-green-400',
    bgGlow: 'bg-green-500/20',
  },
  {
    icon: FiShield,
    value: 1,
    suffix: '',
    label: 'Sertifikasi BNSP',
    description: 'Profesional Terakreditasi',
    color: 'from-purple-400 to-pink-500',
    iconColor: 'text-purple-400',
    bgGlow: 'bg-purple-500/20',
  },
]

const skillCategories = [
  { name: 'AI & Data', count: 10, icon: FiCpu, color: 'from-purple-500 to-blue-500' },
  { name: 'Cyber Security', count: 11, icon: FiShield, color: 'from-red-500 to-orange-500' },
  { name: 'Web Development', count: 1, icon: FiCode, color: 'from-green-500 to-teal-500' },
  { name: 'Digital Marketing', count: 11, icon: FiStar, color: 'from-pink-500 to-rose-500' },
]

export default function StatsCounter() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Bg effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-navy-950/30 to-charcoal-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">Perjalanan Saya</h2>
          <p className="text-soft-gray-400 max-w-lg mx-auto">
            Ringkasan pencapaian dan keahlian yang terus berkembang.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="relative group"
            >
              {/* Glow */}
              <div className={`absolute inset-0 ${stat.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative bg-charcoal-900/80 backdrop-blur-sm border border-charcoal-700/50 group-hover:border-amber-500/30 rounded-2xl p-5 md:p-6 text-center transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter target={stat.value} />
                  <span className="text-xl">{stat.suffix}</span>
                </div>
                <div className="text-sm font-semibold text-white mb-0.5">{stat.label}</div>
                <div className="text-xs text-soft-gray-500">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <HiSparkles className="w-5 h-5 text-amber-400" />
            Distribusi Keahlian Sertifikat
          </h3>
          <div className="space-y-4">
            {skillCategories.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: false }}
                className="flex items-center gap-4"
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0`}>
                  <skill.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-soft-gray-300">{skill.name}</span>
                    <span className="text-soft-gray-400">{skill.count} sertifikat</span>
                  </div>
                  <div className="h-2 bg-charcoal-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.count / 11) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                      viewport={{ once: false }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
