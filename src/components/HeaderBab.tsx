'use client'

import { motion } from 'framer-motion'

interface ChapterHeaderProps {
  nomor: string
  judul: string
  warna?: string
  gelap?: boolean   // background gelap → teks putih
  dark?: boolean    // alias lama (tetap didukung)
  subtitle?: string
}

export default function ChapterHeader({
  nomor,
  judul,
  warna = '#1a5cff',
  gelap,
  dark,
  subtitle,
}: ChapterHeaderProps) {
  const gelapAktif = gelap ?? dark ?? false
  const judulWarna = gelapAktif ? '#ffffff' : '#0a0a0a'
  const subWarna = gelapAktif ? 'rgba(255,255,255,0.6)' : 'rgba(10,10,10,0.55)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.25 }}
      className="text-center mb-10 sm:mb-14"
    >
      {/* Baris kotak nomor + label */}
      <div className="inline-flex items-stretch mb-4" style={{ boxShadow: `4px 4px 0 ${warna}` }}>
        {/* Kotak nomor hitam */}
        <div
          className="font-comic flex items-center justify-center px-3 sm:px-4 py-1.5"
          style={{
            background: '#0a0a0a',
            color: '#ffd700',
            border: '3px solid #0a0a0a',
            minWidth: 48,
            fontSize: '1rem',
            letterSpacing: '0.05em',
          }}
        >
          {isNaN(Number(nomor)) ? nomor : nomor.padStart(2, '0')}
        </div>

        {/* Label CHAPTER XX */}
        <div
          className="font-comic flex items-center px-3 sm:px-5 py-1.5"
          style={{
            background: warna,
            color: 'white',
            border: `3px solid #0a0a0a`,
            borderLeft: 'none',
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
          }}
        >
          CHAPTER {isNaN(Number(nomor)) ? nomor : nomor.padStart(2, '0')}
        </div>
      </div>

      {/* Judul besar */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.45 }}
        viewport={{ once: true }}
        className="section-title"
        style={{ color: judulWarna, WebkitTextStroke: gelapAktif ? '1px rgba(255,255,255,0.3)' : undefined }}
      >
        {judul}
      </motion.h2>

      {/* Garis dekoratif */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-2 mx-auto"
        style={{
          height: 3,
          width: 60,
          background: `repeating-linear-gradient(90deg, ${warna} 0, ${warna} 8px, transparent 8px, transparent 14px)`,
          transformOrigin: 'left',
        }}
      />

      {/* Subtitle opsional */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          className="font-bold text-xs sm:text-sm mt-3"
          style={{ color: subWarna }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
