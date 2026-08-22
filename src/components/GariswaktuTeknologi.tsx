'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const perjalanan = [
  {
    tahun: '2020',
    judul: 'Mulai Coding',
    teks: 'HTML & CSS pertama kali di Notepad. Website statis sederhana tanpa framework.',
    badge: 'HTML · CSS',
    warna: '#e63329',
    bg: '#fef2f2',
    emoji: '🌱',
    sisi: 'kiri',
  },
  {
    tahun: '2021',
    judul: 'Masuk JavaScript',
    teks: 'Belajar JavaScript vanilla, DOM manipulation, dan logika pemrograman dasar.',
    badge: 'JavaScript · DOM',
    warna: '#f59e0b',
    bg: '#fffbeb',
    emoji: '⚡',
    sisi: 'kanan',
  },
  {
    tahun: '2021',
    judul: 'PHP & MySQL',
    teks: 'Backend pertama dengan PHP murni + MySQL. CRUD manual tanpa ORM.',
    badge: 'PHP · MySQL',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    emoji: '🗄️',
    sisi: 'kiri',
  },
  {
    tahun: '2022',
    judul: 'Laravel Framework',
    teks: 'Beralih ke Laravel — MVC, Eloquent ORM, Blade, Artisan. Game changer.',
    badge: 'Laravel · Blade',
    warna: '#FF2D20',
    bg: '#fff5f5',
    emoji: '🔥',
    sisi: 'kanan',
  },
  {
    tahun: '2022',
    judul: 'Bootstrap → Tailwind',
    teks: 'Migrasi dari Bootstrap ke Tailwind CSS. Utility-first yang jauh lebih fleksibel.',
    badge: 'Tailwind CSS',
    warna: '#06B6D4',
    bg: '#ecfeff',
    emoji: '🎨',
    sisi: 'kiri',
  },
  {
    tahun: '2023',
    judul: 'IoT & Arduino',
    teks: 'Eksperimen ESP32, sensor DHT, dan integrasi hardware-software untuk proyek monitoring.',
    badge: 'ESP32 · IoT',
    warna: '#22c55e',
    bg: '#f0fdf4',
    emoji: '🔧',
    sisi: 'kanan',
  },
  {
    tahun: '2023',
    judul: 'Sertifikasi BNSP',
    teks: 'Lulus uji kompetensi Junior Web Developer BNSP — pengakuan kompetensi nasional.',
    badge: 'BNSP Certified',
    warna: '#f59e0b',
    bg: '#fffbeb',
    emoji: '🏆',
    sisi: 'kiri',
  },
  {
    tahun: '2024',
    judul: 'React & Next.js',
    teks: 'Beralih ke ekosistem modern: React, TypeScript, Next.js App Router, Framer Motion.',
    badge: 'Next.js · TypeScript',
    warna: '#0a0a0a',
    bg: '#f5f5f0',
    emoji: '⚛️',
    sisi: 'kanan',
  },
  {
    tahun: '2024',
    judul: 'AI & Prompt Engineering',
    teks: 'Eksplorasi ChatGPT, Gemini, Azure OpenAI. 8+ sertifikat di bidang AI dan ML.',
    badge: 'AI · ML · LLM',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    emoji: '🤖',
    sisi: 'kiri',
  },
  {
    tahun: '2025',
    judul: 'KVT.kom — Dimulai',
    teks: 'Mulai membangun ekosistem Kampus Virtual Teknologi. Satu commit demi satu commit.',
    badge: 'KVT · Full Stack',
    warna: '#1a5cff',
    bg: '#e8f0ff',
    emoji: '🚀',
    sisi: 'kanan',
  },
  {
    tahun: '2026',
    judul: 'Portofolio Komik',
    teks: 'Portofolio bergaya komik dengan 60+ chapter, 100 fitur interaktif, dan Framer Motion.',
    badge: 'Next.js · Framer',
    warna: '#ffd700',
    bg: '#fffbeb',
    emoji: '🦸',
    sisi: 'kiri',
  },
]

function KartuTimeline({ item, index }: { item: typeof perjalanan[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const kiri = item.sisi === 'kiri'

  return (
    <div ref={ref} className={`relative flex items-start gap-4 ${kiri ? 'flex-row' : 'flex-row-reverse'} md:gap-8`}>

      {/* Kartu konten */}
      <motion.div
        initial={{ opacity: 0, x: kiri ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: kiri ? -40 : 40 }}
        transition={{ duration: 0.45, delay: 0.05, type: 'spring', stiffness: 130 }}
        whileHover={{ y: -4, scale: 1.02 }}
        className="flex-1 p-4"
        style={{
          background: item.bg,
          border: `3px solid ${item.warna}`,
          boxShadow: `5px 5px 0 ${item.warna}`,
          maxWidth: 'calc(50% - 2.5rem)',
        }}
      >
        {/* Tahun */}
        <div
          className="font-comic text-[10px] tracking-[0.25em] px-2 py-0.5 inline-block mb-2"
          style={{ background: item.warna, color: '#fff' }}
        >
          {item.tahun}
        </div>

        {/* Emoji + Judul */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{item.emoji}</span>
          <h3 className="font-comic text-base font-bold text-[#0a0a0a] leading-tight">{item.judul}</h3>
        </div>

        {/* Teks */}
        <p className="text-xs text-[#0a0a0a]/70 leading-relaxed mb-2">{item.teks}</p>

        {/* Badge tech */}
        <span
          className="font-bold text-[10px] tracking-widest px-2 py-0.5"
          style={{ background: item.warna + '22', border: `1.5px solid ${item.warna}`, color: item.warna }}
        >
          {item.badge}
        </span>
      </motion.div>

      {/* Titik tengah (garis vertikal) */}
      <div className="flex flex-col items-center shrink-0 mt-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
          className="w-5 h-5 flex items-center justify-center font-bold text-[10px] z-10"
          style={{ background: item.warna, border: '3px solid #0a0a0a', boxShadow: `2px 2px 0 ${item.warna}66`, color: '#fff' }}
        >
          {index + 1}
        </motion.div>
      </div>

      {/* Spacer sisi kosong (hanya desktop) */}
      <div className="hidden md:block flex-1" style={{ maxWidth: 'calc(50% - 2.5rem)' }} />
    </div>
  )
}

export default function TechTimeline() {
  return (
    <section id="tech-timeline" className="py-20 px-4 relative overflow-hidden" style={{ background: '#f0f0eb' }}>
      <div className="halftone-bg" />
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <div className="chapter-label mb-3">TECH JOURNEY</div>
          <h2 className="section-title">PERJALANAN TEKNOLOGI</h2>
          <div className="speech-bubble inline-block text-sm mt-4">
            🕰️ Dari Notepad ke Next.js — 6 tahun perjalanan yang tidak pernah berhenti!
          </div>
        </motion.div>

        {/* Garis vertikal tengah */}
        <div className="relative">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #1a5cff, #ffd700, #e63329, #22c55e, #8b5cf6)', opacity: 0.4 }}
          />

          {/* Kartu-kartu */}
          <div className="space-y-6">
            {perjalanan.map((item, i) => (
              <KartuTimeline key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Footer quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <div
            className="inline-block font-comic text-base px-8 py-4"
            style={{ background: '#ffd700', border: '4px solid #0a0a0a', boxShadow: '6px 6px 0 #0a0a0a', transform: 'rotate(-1deg)' }}
          >
            🚀 PERJALANAN MASIH TERUS BERLANJUT...
          </div>
        </motion.div>
      </div>
    </section>
  )
}
