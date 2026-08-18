'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { num: 75,   suffix: '+', label: 'SERTIFIKAT',       desc: 'Pelatihan & Seminar',       icon: '🏅', color: '#f59e0b', bg: '#fffbeb' },
  { num: 5,    suffix: '+', label: 'PROYEK',            desc: 'Sistem & Aplikasi Web',     icon: '💻', color: '#1a5cff', bg: '#e8f0ff' },
  { num: 14,   suffix: '+', label: 'TEKNOLOGI',         desc: 'Languages & Frameworks',    icon: '⚙️', color: '#22c55e', bg: '#f0fdf4' },
  { num: 3,    suffix: '+', label: 'TAHUN CODING',      desc: 'Pengalaman Aktif',          icon: '📅', color: '#e63329', bg: '#fef2f2' },
  { num: 1,    suffix: '',  label: 'SERTIFIKASI BNSP',  desc: 'Junior Web Developer',      icon: '🏆', color: '#8b5cf6', bg: '#f5f0ff' },
  { num: 100,  suffix: '%', label: 'SEMANGAT',          desc: 'Tanpa Batas!',              icon: '🚀', color: '#0a0a0a', bg: '#ffd700' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: false, margin: '-50px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (inView) motionVal.set(target)
    else motionVal.set(0)
  }, [inView, target, motionVal])

  useEffect(() => {
    const unsub = spring.on('change', v => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix
    })
    return unsub
  }, [spring, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function StatsComic() {
  return (
    <section id="stats" className="py-20 px-4 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="halftone-yellow" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <div className="chapter-label mb-3 inline-block" style={{ color: '#ffd700', borderColor: '#ffd700' }}>
            CHAPTER 08
          </div>
          <h2 className="section-title-white">BY THE NUMBERS</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            viewport={{ once: false }}
            className="speech-bubble inline-block text-sm mt-4 text-comic-black"
          >
            📊 Angka-angka yang berbicara sendiri!
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.85, rotate: i % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, type: 'spring', stiffness: 120 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -2 : 2, scale: 1.04 }}
              className="relative overflow-hidden cursor-default"
              style={{ border: `4px solid ${stat.color}`, boxShadow: `6px 6px 0 ${stat.color}`, background: stat.bg }}
            >
              {/* Top bar */}
              <div className="h-2" style={{ background: stat.color }} />

              <div className="p-5 text-center">
                {/* Emoji icon */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  className="text-4xl mb-3"
                >
                  {stat.icon}
                </motion.div>

                {/* Number */}
                <div className="font-comic text-5xl md:text-6xl leading-none mb-2" style={{ color: stat.color }}>
                  <CountUp target={stat.num} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="font-comic text-sm text-comic-black tracking-wide">{stat.label}</div>
                <div className="text-[11px] font-bold text-comic-black/50 mt-1">{stat.desc}</div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8" style={{
                background: stat.color,
                clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                opacity: 0.3,
              }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false }}
          className="text-center mt-12"
        >
          <div
            className="inline-block font-comic text-lg text-comic-black px-8 py-4"
            style={{ background: '#ffd700', border: '3px solid #ffd700', boxShadow: '5px 5px 0 rgba(255,215,0,0.3)', transform: 'rotate(-1deg)' }}
          >
            🎯 Setiap angka adalah bukti kerja keras nyata!
          </div>
        </motion.div>
      </div>
    </section>
  )
}
