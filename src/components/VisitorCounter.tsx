'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiEye, FiClock, FiUsers, FiHeart, FiTrendingUp } from 'react-icons/fi'

const counters = [
  { icon: FiEye, label: 'Page Views', end: 2847, suffix: '', warna: '#1a5cff', bg: '#e8f0ff' },
  { icon: FiUsers, label: 'Unique Visitors', end: 1293, suffix: '', warna: '#22c55e', bg: '#f0fdf4' },
  { icon: FiClock, label: 'Avg. Time', end: 45, suffix: 's', warna: '#f59e0b', bg: '#fffbeb' },
  { icon: FiHeart, label: 'Likes', end: 89, suffix: '', warna: '#e63329', bg: '#fef2f2' },
  { icon: FiTrendingUp, label: 'GitHub Stars', end: 12, suffix: '', warna: '#8b5cf6', bg: '#f5f0ff' },
]

function AnimatedNumber({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const inc = end / (2000 / 16)
    const timer = setInterval(() => {
      start += inc
      if (start >= end) { setValue(end); clearInterval(timer) }
      else setValue(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])
  return <span>{value.toLocaleString('id-ID')}{suffix}</span>
}

export default function VisitorCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="py-16 px-4 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Halftone dekoratif */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }} />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="font-comic text-[10px] tracking-[0.3em] text-white/40 border border-white/20 px-4 py-1 inline-block mb-3">
            STATISTIK PORTOFOLIO
          </div>
          <h2 className="font-comic text-3xl md:text-4xl text-white leading-tight"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            BY THE NUMBERS
          </h2>
          <div className="mt-3 font-comic text-white/40 text-xs tracking-widest">
            — DATA SEJAK PORTOFOLIO DILUNCURKAN —
          </div>
        </motion.div>

        {/* Grid counter */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 140 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="flex flex-col items-center p-4 text-center"
              style={{ background: c.bg, border: `3px solid ${c.warna}`, boxShadow: `4px 4px 0 ${c.warna}` }}
            >
              <c.icon className="w-5 h-5 mb-2" style={{ color: c.warna }} />
              <div className="font-comic text-2xl font-bold leading-none mb-1" style={{ color: c.warna }}>
                <AnimatedNumber end={c.end} suffix={c.suffix} inView={inView} />
              </div>
              <div className="font-bold text-[10px] tracking-wider text-[#0a0a0a]/60 uppercase">{c.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Quote bawah */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 font-comic text-white/25 text-xs tracking-widest"
        >
          ✦ TERIMA KASIH SUDAH MENGUNJUNGI PORTOFOLIO INI ✦
        </motion.div>
      </div>
    </section>
  )
}
