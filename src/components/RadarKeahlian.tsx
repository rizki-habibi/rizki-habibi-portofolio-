'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Skill dalam 6 dimensi untuk radar chart SVG
const dimensi = [
  { label: 'Frontend', nilai: 88 },
  { label: 'Backend', nilai: 90 },
  { label: 'Database', nilai: 82 },
  { label: 'UI/UX', nilai: 75 },
  { label: 'IoT / HW', nilai: 70 },
  { label: 'AI / ML', nilai: 65 },
]

// Kelompok skill untuk tab
const kelompok = [
  {
    nama: 'WEB',
    warna: '#1a5cff',
    bg: '#e8f0ff',
    skills: [
      { nama: 'Laravel', persen: 90, warna: '#FF2D20' },
      { nama: 'Next.js', persen: 75, warna: '#0a0a0a' },
      { nama: 'PHP', persen: 85, warna: '#8b5cf6' },
      { nama: 'Tailwind', persen: 92, warna: '#06B6D4' },
      { nama: 'JavaScript', persen: 80, warna: '#f59e0b' },
      { nama: 'TypeScript', persen: 70, warna: '#3178C6' },
    ],
  },
  {
    nama: 'TOOLS',
    warna: '#22c55e',
    bg: '#f0fdf4',
    skills: [
      { nama: 'Git', persen: 78, warna: '#F05032' },
      { nama: 'VS Code', persen: 95, warna: '#007ACC' },
      { nama: 'Figma', persen: 70, warna: '#F24E1E' },
      { nama: 'MySQL', persen: 82, warna: '#4479A1' },
      { nama: 'Linux', persen: 65, warna: '#FCC624' },
      { nama: 'Laragon', persen: 88, warna: '#22c55e' },
    ],
  },
  {
    nama: 'LAINNYA',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    skills: [
      { nama: 'IoT/Arduino', persen: 70, warna: '#22c55e' },
      { nama: 'AI/ChatGPT', persen: 75, warna: '#8b5cf6' },
      { nama: 'UI Design', persen: 75, warna: '#e63329' },
      { nama: 'Copywriting', persen: 68, warna: '#f59e0b' },
      { nama: 'Presentasi', persen: 80, warna: '#1a5cff' },
      { nama: 'Leadership', persen: 82, warna: '#0a0a0a' },
    ],
  },
]

// ─── Radar Chart SVG ─────────────────────────────
function RadarChart({ data }: { data: typeof dimensi }) {
  const cx = 120, cy = 120, r = 90
  const total = data.length
  const angles = data.map((_, i) => (Math.PI * 2 * i) / total - Math.PI / 2)

  // Titik untuk nilai skill
  const titikNilai = data.map((d, i) => {
    const radius = (d.nilai / 100) * r
    return {
      x: cx + radius * Math.cos(angles[i]),
      y: cy + radius * Math.sin(angles[i]),
    }
  })

  // Garis kisi (web/jaring) — 5 level
  const kisi = [20, 40, 60, 80, 100].map(pct => {
    const rk = (pct / 100) * r
    return data.map((_, i) => ({
      x: cx + rk * Math.cos(angles[i]),
      y: cy + rk * Math.sin(angles[i]),
    }))
  })

  const toPath = (pts: { x: number; y: number }[]) =>
    pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ') + ' Z'

  return (
    <svg viewBox="0 0 240 240" className="w-full max-w-[240px] mx-auto">
      {/* Kisi jaring */}
      {kisi.map((pts, ki) => (
        <path key={ki} d={toPath(pts)}
          fill="none" stroke="#0a0a0a" strokeWidth="0.8" strokeOpacity={0.12 + ki * 0.04} />
      ))}

      {/* Garis sumbu */}
      {data.map((_, i) => (
        <line key={i}
          x1={cx} y1={cy}
          x2={cx + r * Math.cos(angles[i])}
          y2={cy + r * Math.sin(angles[i])}
          stroke="#0a0a0a" strokeWidth="0.8" strokeOpacity={0.15} />
      ))}

      {/* Area skill — fill */}
      <motion.path
        d={toPath(titikNilai)}
        fill="#1a5cff"
        fillOpacity={0.18}
        stroke="#1a5cff"
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Titik sudut */}
      {titikNilai.map((pt, i) => (
        <motion.circle key={i}
          cx={pt.x} cy={pt.y} r={4}
          fill="#ffd700" stroke="#0a0a0a" strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 0.8 + i * 0.1, type: 'spring', stiffness: 200 }}
        />
      ))}

      {/* Label dimensi */}
      {data.map((d, i) => {
        const lx = cx + (r + 18) * Math.cos(angles[i])
        const ly = cy + (r + 18) * Math.sin(angles[i])
        return (
          <text key={i} x={lx} y={ly}
            textAnchor="middle" dominantBaseline="middle"
            fontSize="9" fontFamily="'Bangers', sans-serif"
            letterSpacing="0.05em"
            fill="#0a0a0a" fillOpacity={0.7}>
            {d.label}
          </text>
        )
      })}
    </svg>
  )
}

// ─── Bar Skill ────────────────────────────────────
function BarSkill({ nama, persen, warna, delay }: { nama: string; persen: number; warna: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-2">
      <div className="flex justify-between items-center mb-1">
        <span className="font-bold text-xs text-[#0a0a0a]">{nama}</span>
        <span className="font-comic text-xs font-bold" style={{ color: warna }}>{persen}%</span>
      </div>
      <div className="h-3 relative overflow-hidden" style={{ background: '#e8e8e4', border: '1.5px solid #0a0a0a' }}>
        <motion.div
          className="absolute inset-y-0 left-0"
          style={{ background: warna }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${persen}%` } : { width: 0 }}
          transition={{ duration: 0.7, delay, ease: 'easeOut' }}
        />
        {/* Stripe diagonal */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.6) 3px, rgba(255,255,255,0.6) 5px)',
          }} />
      </div>
    </div>
  )
}

// ─── Komponen Utama ───────────────────────────────
export default function SkillRadar() {
  const [aktifTab, setAktifTab] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const tab = kelompok[aktifTab]

  return (
    <section id="skill-radar" ref={ref} className="py-20 px-4 relative overflow-hidden" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <div className="chapter-label mb-3">SKILL ANALYSIS</div>
          <h2 className="section-title">SKILL RADAR CHART</h2>
          <div className="speech-bubble inline-block text-sm mt-4">
            📊 Visualisasi kemampuan dalam 6 dimensi utama!
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Kiri — Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="p-6"
            style={{ background: '#fff', border: '3px solid #0a0a0a', boxShadow: '6px 6px 0 #0a0a0a' }}
          >
            <div className="font-comic text-center text-sm text-[#0a0a0a]/50 mb-4 tracking-widest">6-DIMENSI KEMAMPUAN</div>
            {inView && <RadarChart data={dimensi} />}

            {/* Legenda */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {dimensi.map((d, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#1a5cff' }} />
                  <span className="text-[10px] font-bold text-[#0a0a0a]/60">{d.label}: <span className="text-[#1a5cff]">{d.nilai}%</span></span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kanan — Bar chart per kategori */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {/* Tab pemilih kategori */}
            <div className="flex gap-2 mb-5">
              {kelompok.map((k, i) => (
                <button
                  key={k.nama}
                  onClick={() => setAktifTab(i)}
                  className="font-comic text-xs px-3 py-1.5 transition-all"
                  style={{
                    background: aktifTab === i ? k.warna : '#fff',
                    color: aktifTab === i ? '#fff' : '#0a0a0a',
                    border: `2px solid ${k.warna}`,
                    boxShadow: aktifTab === i ? `3px 3px 0 ${k.warna}` : 'none',
                  }}
                >
                  {k.nama}
                </button>
              ))}
            </div>

            {/* Bar skills */}
            <motion.div
              key={aktifTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="p-5"
              style={{ background: tab.bg, border: `3px solid ${tab.warna}`, boxShadow: `5px 5px 0 ${tab.warna}` }}
            >
              <div className="font-comic text-sm mb-4" style={{ color: tab.warna }}>
                {tab.nama} SKILLS
              </div>
              {tab.skills.map((s, i) => (
                <BarSkill key={s.nama} {...s} delay={i * 0.07} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
