'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiX, FiArrowRight, FiArrowLeft } from 'react-icons/fi'

// ============================================================
// DATA CHAPTER — setiap panel punya cerita popup
// ============================================================
const dataPanel = [
  {
    num: '01',
    judul: 'PROFILE',
    warnaBg: '#1769ff',
    warnaAksent: '#ffd21c',
    clipPath: 'polygon(0 0, 100% 0, 93% 100%, 0 94%)',
    efek: 'speed-lines',
    zIndex: 5,
    col: 7,
    row: 4,
    cerita: {
      judul: 'Chapter 01 — The Origin',
      isi: [
        '🎓 Mahasiswa Sistem & Teknologi Informasi di Institut Teknologi dan Sains Mandala, Jember.',
        '💻 Passion di web programming, inovasi IoT, dan membangun ekosistem digital Indonesia.',
        '🏆 Telah mengantongi 75+ sertifikat dari berbagai platform pembelajaran nasional & internasional.',
        '🚀 Sedang mengembangkan KVT.kom — platform edukasi digital berbasis vtuber pertama di Indonesia.',
      ],
      warna: '#1769ff',
    },
  },
  {
    num: '02',
    judul: 'KEAHLIAN',
    warnaBg: '#ffd21c',
    warnaAksent: '#0a0a0a',
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 92%)',
    efek: 'halftone',
    zIndex: 6,
    col: 5,
    row: 3,
    cerita: {
      judul: 'Chapter 02 — My Powers',
      isi: [
        '⚡ Laravel, PHP, MySQL — backend stack utama untuk membangun sistem robust.',
        '🎨 Next.js, React, Tailwind CSS — frontend modern dengan performa tinggi.',
        '🔧 IoT & Arduino — inovasi hardware-software untuk solusi nyata.',
        '🤖 AI/ML — eksplorasi kecerdasan buatan untuk produk masa depan.',
      ],
      warna: '#f59e0b',
    },
  },
  {
    num: '03',
    judul: 'PROYEK',
    warnaBg: '#ef3123',
    warnaAksent: '#fafaf7',
    clipPath: 'polygon(0 8%, 100% 0, 91% 100%, 0 92%)',
    efek: 'action-lines',
    zIndex: 10,
    col: 3,
    row: 3,
    cerita: {
      judul: 'Chapter 03 — The Missions',
      isi: [
        '🌐 Sistem Integrasi KVT.kom — platform kampus digital vtuber pertama Indonesia.',
        '🏫 Sistem K-AMU berbasis Laravel — manajemen kampus all-in-one.',
        '🗺️ Website Global Map — peta interaktif data komunitas digital.',
        '📱 5+ proyek aktif dengan tech stack modern dan deployment production.',
      ],
      warna: '#ef3123',
    },
  },
  {
    num: '04',
    judul: 'DESAIN',
    warnaBg: '#8d55e8',
    warnaAksent: '#ffd21c',
    clipPath: 'polygon(8% 0, 100% 8%, 92% 100%, 0 91%)',
    efek: 'halftone',
    zIndex: 9,
    col: 4,
    row: 3,
    cerita: {
      judul: 'Chapter 04 — Visual Craft',
      isi: [
        '🎨 UI/UX Design dengan Figma — wireframe hingga prototype interaktif.',
        '📐 Comic-style portfolio design — desain unik yang memadukan manga & web modern.',
        '✏️ Ilustrasi karakter digital & branding visual untuk KVT.kom.',
        '🖌️ Tailwind CSS expert — membangun antarmuka responsif & aksesibel.',
      ],
      warna: '#8d55e8',
    },
  },
  {
    num: '05',
    judul: 'DEVELOPMENT',
    warnaBg: '#0a0a0a',
    warnaAksent: '#ffd21c',
    clipPath: 'polygon(0 0, 100% 0, 72% 100%, 0 100%)',
    efek: 'speed-lines',
    zIndex: 11,
    col: 5,
    row: 3,
    cerita: {
      judul: 'Chapter 05 — Code Arsenal',
      isi: [
        '🔥 Full-stack development dengan Laravel + Next.js sebagai stack andalan.',
        '🗄️ Database: MySQL, PostgreSQL, Redis — query optimization & indexing.',
        '☁️ Deployment: Vercel, cPanel, VPS — CI/CD pipeline sederhana & efektif.',
        '🛡️ BNSP Certified — kompetensi teknis diakui secara nasional.',
      ],
      warna: '#0a0a0a',
    },
  },
  {
    num: '06',
    judul: 'SKILL',
    warnaBg: '#ffd21c',
    warnaAksent: '#0a0a0a',
    clipPath: 'polygon(0 0, 94% 0, 100% 90%, 5% 100%)',
    efek: 'none',
    zIndex: 12,
    col: 4,
    row: 3,
    cerita: {
      judul: 'Chapter 06 — Skill Tree',
      isi: [
        '📊 Laravel: 90% — sistem enterprise & API backend produksi.',
        '⚡ Next.js / React: 85% — SSR, SSG, dan App Router.',
        '🎯 MySQL / DB Design: 80% — normalisasi & optimasi query.',
        '🔌 IoT / Arduino: 75% — sensor integration & smart device.',
      ],
      warna: '#f59e0b',
    },
  },
  {
    num: '07',
    judul: 'EXPERIENCE',
    warnaBg: '#1769ff',
    warnaAksent: '#ffd21c',
    clipPath: 'polygon(0 0, 100% 8%, 97% 100%, 5% 91%)',
    efek: 'speed-lines',
    zIndex: 13,
    col: 8,
    row: 3,
    cerita: {
      judul: 'Chapter 07 — The Journey',
      isi: [
        '📅 3+ tahun perjalanan dari ngoding pertama hingga proyek production.',
        '🏫 Asisten Lab Komputer — membantu mahasiswa belajar pemrograman dasar.',
        '🌱 Komunitas developer Jember — aktif berbagi ilmu & kolaborasi proyek.',
        '🎓 Penelitian skripsi fokus KVT.kom — menggabungkan riset akademik & produk nyata.',
      ],
      warna: '#1769ff',
    },
  },
  {
    num: '08',
    judul: 'KONTAK',
    warnaBg: '#ef3123',
    warnaAksent: '#fafaf7',
    clipPath: 'polygon(6% 0, 100% 0, 100% 92%, 0 100%)',
    efek: 'action-lines',
    zIndex: 14,
    col: 4,
    row: 4,
    cerita: {
      judul: 'Chapter 08 — Let\'s Connect!',
      isi: [
        '📧 rizkihabibi2432@gmail.com — respons dalam 24 jam.',
        '📱 WhatsApp: +62 882-009-725-053 — untuk diskusi cepat.',
        '💼 LinkedIn: /in/rizki-habibi — portofolio profesional lengkap.',
        '🐙 GitHub: /rizki-habibi — kode & kontribusi open source.',
      ],
      warna: '#ef3123',
    },
  },
]

// ============================================================
// KOMPONEN POPUP CERITA CHAPTER
// ============================================================
function PopupCerita({
  panel,
  onTutup,
  onPrev,
  onNext,
  totalPanel,
  indeks,
}: {
  panel: typeof dataPanel[0]
  onTutup: () => void
  onPrev: () => void
  onNext: () => void
  totalPanel: number
  indeks: number
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onTutup}
    >
      {/* Overlay halftone */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(10,10,10,0.85)',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '12px 12px',
        }}
      />

      <motion.div
        className="panel-komik-popup relative z-10 w-full max-w-lg"
        style={{
          background: '#fafaf7',
          border: '5px solid #0a0a0a',
          boxShadow: '10px 10px 0 #0a0a0a',
        }}
        onClick={e => e.stopPropagation()}
        initial={{ scale: 0.7, rotate: -4, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.7, rotate: 4, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      >
        {/* Header panel */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ background: panel.warnaBg, borderBottom: '4px solid #0a0a0a' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="font-comic text-sm px-3 py-1 text-white"
              style={{ background: 'rgba(0,0,0,0.3)', border: '2px solid rgba(255,255,255,0.4)' }}
            >
              CH.{panel.num}
            </div>
            <span className="font-comic text-white text-base tracking-wider drop-shadow">
              {panel.cerita.judul}
            </span>
          </div>
          <motion.button
            onClick={onTutup}
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-8 h-8"
            style={{ background: '#0a0a0a', border: '2px solid rgba(255,255,255,0.4)' }}
          >
            <FiX className="w-4 h-4 text-white" />
          </motion.button>
        </div>

        {/* Speed lines dekoratif */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(115deg, transparent 0, transparent 18px, #0a0a0a 19px, transparent 21px)',
          }}
        />

        {/* Isi cerita */}
        <div className="p-6 relative z-10 space-y-3">
          {panel.cerita.isi.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08, type: 'spring', stiffness: 200 }}
              className="flex items-start gap-3 p-3"
              style={{
                background: 'white',
                border: `2px solid ${panel.cerita.warna}`,
                boxShadow: `3px 3px 0 ${panel.cerita.warna}`,
              }}
            >
              <p className="font-medium text-sm text-[#0a0a0a] leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Speech bubble bawah */}
        <div className="px-6 pb-4">
          <div
            className="speech-bubble text-xs font-bold text-[#0a0a0a] inline-block"
            style={{ background: '#fff8cc', borderColor: '#f59e0b', boxShadow: '3px 3px 0 #f59e0b' }}
          >
            Klik panel lain untuk baca chapter berikutnya! 📖
          </div>
        </div>

        {/* Navigasi prev/next */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderTop: '3px solid #0a0a0a', background: '#f0f0eb' }}
        >
          <motion.button
            onClick={onPrev}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1.5 font-comic text-xs px-3 py-2"
            style={{ border: '2px solid #0a0a0a', background: 'white', boxShadow: '2px 2px 0 #0a0a0a' }}
          >
            <FiArrowLeft className="w-3.5 h-3.5" /> PREV
          </motion.button>

          {/* Indikator posisi */}
          <div className="flex gap-1.5">
            {dataPanel.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{
                  background: i === indeks ? panel.warnaBg : '#0a0a0a',
                  border: '1px solid #0a0a0a',
                  opacity: i === indeks ? 1 : 0.3,
                }}
              />
            ))}
          </div>

          <motion.button
            onClick={onNext}
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1.5 font-comic text-xs px-3 py-2"
            style={{ border: '2px solid #0a0a0a', background: panel.warnaBg, boxShadow: '2px 2px 0 #0a0a0a', color: 'white' }}
          >
            NEXT <FiArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ============================================================
// EFEK PANEL
// ============================================================
function EfekPanel({ tipe }: { tipe: string }) {
  if (tipe === 'speed-lines') {
    return (
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'repeating-linear-gradient(115deg, transparent 0, transparent 18px, rgba(255,255,255,0.18) 19px, transparent 21px)',
        }}
      />
    )
  }
  if (tipe === 'halftone') {
    return (
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1.5px, transparent 1.5px)',
          backgroundSize: '9px 9px',
        }}
      />
    )
  }
  if (tipe === 'action-lines') {
    return (
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'linear-gradient(135deg, transparent 47%, rgba(255,255,255,0.22) 48%, transparent 49%)',
        }}
      />
    )
  }
  return null
}

// ============================================================
// KOMPONEN UTAMA — PANEL KOMIK
// ============================================================
export default function PanelKomik() {
  const [panelAktif, setPanelAktif] = useState<number | null>(null)

  const bukaPanel = (indeks: number) => setPanelAktif(indeks)
  const tutupPanel = () => setPanelAktif(null)
  const prevPanel = () => setPanelAktif(i => i === null ? 0 : (i - 1 + dataPanel.length) % dataPanel.length)
  const nextPanel = () => setPanelAktif(i => i === null ? 0 : (i + 1) % dataPanel.length)

  return (
    <section id="panel-komik" className="py-16 px-4 relative" style={{ background: '#f4f1e8' }}>

      {/* Background dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#b8b8b8 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />

      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-8 relative z-10 text-center"
      >
        <div className="chapter-label mb-3">
          <span className="chapter-label-num">★</span>
          <span className="chapter-label-text">KOMIK PANELS</span>
        </div>
        <h2 className="section-title">GALLERY OF CHAPTERS</h2>
        <p className="font-bold text-sm text-[#0a0a0a]/60 mt-2">
          Klik setiap panel untuk membaca cerita chapter-nya 👆
        </p>
      </motion.div>

      {/* Grid komik — menyatu seperti halaman komik */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="relative z-10 max-w-5xl mx-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: '110px',
          gap: 0,
          background: '#0a0a0a',
          border: '6px solid #0a0a0a',
          overflow: 'hidden',
        }}
      >
        {dataPanel.map((panel, i) => (
          <motion.article
            key={panel.num}
            onClick={() => bukaPanel(i)}
            whileHover={{ zIndex: 50, filter: 'brightness(1.12)' }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden cursor-pointer group"
            style={{
              gridColumn: `span ${panel.col}`,
              gridRow: `span ${panel.row}`,
              background: panel.warnaBg,
              clipPath: panel.clipPath,
              zIndex: panel.zIndex,
            }}
          >
            {/* Efek komik */}
            <EfekPanel tipe={panel.efek} />

            {/* Halftone overlay selalu ada */}
            <div
              className="absolute inset-0 pointer-events-none z-[4]"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.20) 1px, transparent 1px)',
                backgroundSize: '8px 8px',
              }}
            />

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 z-[8] flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{ background: 'rgba(0,0,0,0.35)' }}
            >
              <div
                className="font-comic text-white text-sm px-4 py-2"
                style={{
                  background: panel.warnaBg,
                  border: '3px solid white',
                  boxShadow: '4px 4px 0 rgba(0,0,0,0.5)',
                  transform: 'rotate(-3deg)',
                }}
              >
                BACA CERITA →
              </div>
            </motion.div>

            {/* Label chapter */}
            <div
              className="absolute left-4 bottom-4 z-[10] font-comic text-[11px] sm:text-xs px-3 py-1.5"
              style={{
                background: 'white',
                color: '#0a0a0a',
                border: '3px solid #0a0a0a',
                boxShadow: '3px 3px 0 #0a0a0a',
                transform: 'rotate(-2deg)',
              }}
            >
              CH.{panel.num} — {panel.judul}
            </div>

            {/* Nomor besar di pojok */}
            <div
              className="absolute top-3 right-3 z-[9] font-comic text-2xl sm:text-4xl font-black opacity-20 select-none"
              style={{ color: panel.warnaAksent, lineHeight: 1 }}
            >
              {panel.num}
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Hint di bawah */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center font-bold text-xs text-[#0a0a0a]/40 mt-4 relative z-10 tracking-widest"
      >
        ✦ {dataPanel.length} CHAPTER TERSEDIA — KLIK UNTUK BACA ✦
      </motion.p>

      {/* Popup cerita */}
      <AnimatePresence>
        {panelAktif !== null && (
          <PopupCerita
            panel={dataPanel[panelAktif]}
            indeks={panelAktif}
            totalPanel={dataPanel.length}
            onTutup={tutupPanel}
            onPrev={prevPanel}
            onNext={nextPanel}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
