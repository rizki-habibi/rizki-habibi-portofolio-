'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Tanggal lahir Rizki Habibi
const TGL_LAHIR = new Date('2003-10-24T00:00:00')

interface UnitWaktu {
  nilai: number
  label: string
  maks: number
  warna: string
  bg: string
}

function hitungUmur() {
  const sekarang = new Date()
  const selisihMs = sekarang.getTime() - TGL_LAHIR.getTime()

  const detik = Math.floor(selisihMs / 1000)
  const menit = Math.floor(detik / 60)
  const jam = Math.floor(menit / 60)
  const hari = Math.floor(jam / 24)
  const minggu = Math.floor(hari / 7)
  const bulan = Math.floor(hari / 30.44)
  const tahun = Math.floor(hari / 365.25)

  const sisaBulan = Math.floor((hari % 365.25) / 30.44)
  const sisaHari = Math.floor(hari % 30.44)
  const sisaJam = jam % 24
  const sisaMenit = menit % 60
  const sisaDetik = detik % 60

  return { tahun, bulan: sisaBulan, hari: sisaHari, jam: sisaJam, menit: sisaMenit, detik: sisaDetik, totalHari: hari, totalDetik: detik }
}

function DigitFlip({ nilai, label, warna, bg }: { nilai: number; label: string; warna: string; bg: string }) {
  const [prev, setPrev] = useState(nilai)
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    if (nilai !== prev) {
      setFlip(true)
      setTimeout(() => { setPrev(nilai); setFlip(false) }, 150)
    }
  }, [nilai, prev])

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="relative overflow-hidden flex items-center justify-center font-comic"
        style={{
          width: 64,
          height: 64,
          background: bg,
          border: `3px solid ${warna}`,
          boxShadow: `4px 4px 0 ${warna}`,
          fontSize: '1.75rem',
          color: warna,
          transition: 'transform 0.15s',
          transform: flip ? 'scaleY(0.5)' : 'scaleY(1)',
        }}
      >
        {String(nilai).padStart(2, '0')}
      </div>
      <span className="font-bold text-[10px] tracking-widest uppercase text-[#0a0a0a]/50">{label}</span>
    </div>
  )
}

export default function AgeCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [umur, setUmur] = useState(hitungUmur)
  const [aktif, setAktif] = useState(false)

  // Mulai hitung detik saat section terlihat
  useEffect(() => {
    if (inView) setAktif(true)
  }, [inView])

  useEffect(() => {
    if (!aktif) return
    const id = setInterval(() => setUmur(hitungUmur()), 1000)
    return () => clearInterval(id)
  }, [aktif])

  const unitUtama = [
    { nilai: umur.tahun, label: 'TAHUN', warna: '#1a5cff', bg: '#e8f0ff', maks: 100 },
    { nilai: umur.bulan, label: 'BULAN', warna: '#8b5cf6', bg: '#f5f0ff', maks: 12 },
    { nilai: umur.hari, label: 'HARI', warna: '#f59e0b', bg: '#fffbeb', maks: 31 },
    { nilai: umur.jam, label: 'JAM', warna: '#e63329', bg: '#fef2f2', maks: 24 },
    { nilai: umur.menit, label: 'MENIT', warna: '#22c55e', bg: '#f0fdf4', maks: 60 },
    { nilai: umur.detik, label: 'DETIK', warna: '#ffd700', bg: '#fffbeb', maks: 60 },
  ]

  return (
    <section id="age-counter" ref={ref} className="py-16 px-4 relative overflow-hidden" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="chapter-label mb-3 inline-block">REAL-TIME</div>
          <h2 className="section-title">UMUR SAYA SEKARANG</h2>
          <div className="speech-bubble inline-block text-sm mt-3">
            ⏱️ Dihitung langsung sejak lahir — 24 Oktober 2003!
          </div>
        </motion.div>

        {/* Digit flip counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
        >
          {unitUtama.map((u) => (
            <DigitFlip key={u.label} {...u} />
          ))}
        </motion.div>

        {/* Statistik menarik */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        >
          {[
            { label: 'Hari Hidup', nilai: umur.totalHari.toLocaleString('id-ID'), ikon: '📅', warna: '#1a5cff', bg: '#e8f0ff' },
            { label: 'Detik Berlalu', nilai: umur.totalDetik.toLocaleString('id-ID'), ikon: '⚡', warna: '#e63329', bg: '#fef2f2' },
            { label: 'Generasi', nilai: 'Gen Z', ikon: '🌐', warna: '#8b5cf6', bg: '#f5f0ff' },
            { label: 'Zodiak', nilai: 'Scorpio ♏', ikon: '🦂', warna: '#0a0a0a', bg: '#f5f5f0' },
            { label: 'Tahun Mulai Coding', nilai: '2020', ikon: '💻', warna: '#22c55e', bg: '#f0fdf4' },
            { label: 'Tahun Lulus Target', nilai: '2027', ikon: '🎓', warna: '#f59e0b', bg: '#fffbeb' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="p-3 text-center"
              style={{ background: item.bg, border: `2px solid ${item.warna}`, boxShadow: `3px 3px 0 ${item.warna}` }}
            >
              <div className="text-xl mb-1">{item.ikon}</div>
              <div className="font-comic text-sm font-bold" style={{ color: item.warna }}>{item.nilai}</div>
              <div className="text-[10px] font-bold text-[#0a0a0a]/50 uppercase tracking-wider mt-0.5">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <div className="thought-bubble inline-block text-sm text-[#0a0a0a]">
            🚀 Setiap detik adalah kesempatan untuk tumbuh dan berkarya!
          </div>
        </motion.div>
      </div>
    </section>
  )
}
