'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

const testimoni = [
  {
    id: 1,
    nama: 'Dr. Ahmad Fauzi',
    jabatan: 'Dosen Pembimbing Skripsi',
    institusi: 'ITSM Jember',
    foto: '👨‍🏫',
    teks: 'Rizki adalah mahasiswa yang sangat aktif dan inovatif. Kemampuannya membangun sistem dari nol dengan pendekatan problem-solving yang matang sangat luar biasa untuk mahasiswa seusianya.',
    bintang: 5,
    warna: '#1a5cff',
    bg: '#e8f0ff',
    tahun: '2026',
  },
  {
    id: 2,
    nama: 'Budi Santoso',
    jabatan: 'Project Manager',
    institusi: 'Klien Sistem K-Amu',
    foto: '💼',
    teks: 'Sistem yang dibangun Rizki sangat membantu operasional sekolah kami. Responsive terhadap feedback, cepat dalam revisi, dan hasil akhirnya melebihi ekspektasi.',
    bintang: 5,
    warna: '#22c55e',
    bg: '#f0fdf4',
    tahun: '2024',
  },
  {
    id: 3,
    nama: 'Siti Rahmawati',
    jabatan: 'Kepala Bagian IT',
    institusi: 'Pengguna Sistem KVT',
    foto: '👩‍💻',
    teks: 'Integrasi data yang dibuat Rizki benar-benar menyelesaikan masalah yang sudah lama kami hadapi. Antarmukanya intuitif dan performanya sangat baik.',
    bintang: 5,
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    tahun: '2024',
  },
  {
    id: 4,
    nama: 'Reza Firmansyah',
    jabatan: 'Senior Developer',
    institusi: 'Mentor Komunitas',
    foto: '🧑‍💻',
    teks: 'Kemampuan belajar mandiri Rizki sangat mengagumkan. Dalam waktu singkat ia bisa menguasai teknologi baru dan langsung mengaplikasikannya di proyek nyata.',
    bintang: 5,
    warna: '#f59e0b',
    bg: '#fffbeb',
    tahun: '2025',
  },
  {
    id: 5,
    nama: 'Anita Dewi',
    jabatan: 'Koordinator Program',
    institusi: 'Digital Talent Scholarship',
    foto: '🎓',
    teks: 'Salah satu peserta paling aktif dan berdedikasi. Menyelesaikan 75+ modul pelatihan dengan nilai excellent dan selalu berbagi ilmu ke peserta lain.',
    bintang: 5,
    warna: '#e63329',
    bg: '#fef2f2',
    tahun: '2025',
  },
  {
    id: 6,
    nama: 'Tim BNSP',
    jabatan: 'Asesor Kompetensi',
    institusi: 'LSP Teknologi Digital',
    foto: '🏆',
    teks: 'Hasil uji kompetensi Rizki sangat memuaskan. Mendemonstrasikan keahlian teknis yang solid dan kemampuan problem-solving yang sesuai standar industri nasional.',
    bintang: 5,
    warna: '#0891b2',
    bg: '#ecfeff',
    tahun: '2025',
  },
]

function BintangRating({ jumlah, warna }: { jumlah: number; warna: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.06, type: 'spring', stiffness: 200 }}
          viewport={{ once: false }}
          className="text-sm sm:text-base"
          style={{ color: i < jumlah ? warna : '#d1d5db' }}
        >
          ★
        </motion.span>
      ))}
    </div>
  )
}

export default function TestimonialsComic() {
  const [aktif, setAktif] = useState(0)

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden" style={{ background: '#f0f0eb' }}>
      <div className="halftone-bg" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <HeaderBab nomor="◆" judul="KATA MEREKA" warna="#22c55e" subtitle="💬 Cerita nyata dari yang sudah merasakannya!" />

        {/* Grid testimoni */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {testimoni.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40, rotate: i % 3 === 0 ? -2 : i % 3 === 1 ? 0 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setAktif(i)}
              className="cursor-pointer relative overflow-hidden"
              style={{
                border: `3px solid ${t.warna}`,
                boxShadow: aktif === i ? `6px 6px 0 ${t.warna}` : `4px 4px 0 ${t.warna}`,
                background: aktif === i ? t.bg : 'white',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Warna strip atas */}
              <div className="h-1.5 w-full" style={{ background: t.warna }} />

              {/* Konten */}
              <div className="p-3 sm:p-4">
                {/* Avatar + info */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                    style={{ background: t.bg, border: `2px solid ${t.warna}`, boxShadow: `2px 2px 0 ${t.warna}` }}
                  >
                    {t.foto}
                  </div>
                  <div className="min-w-0">
                    <div className="font-comic text-sm text-comic-black leading-tight">{t.nama}</div>
                    <div className="text-[10px] font-bold truncate" style={{ color: t.warna }}>{t.jabatan}</div>
                    <div className="text-[9px] font-bold text-comic-black/40 truncate">{t.institusi}</div>
                  </div>
                  <div className="ml-auto font-bold text-[10px] text-comic-black/40 flex-shrink-0">{t.tahun}</div>
                </div>

                {/* Bintang */}
                <BintangRating jumlah={t.bintang} warna={t.warna} />

                {/* Kutipan */}
                <div
                  className="mt-3 p-2 sm:p-3 relative"
                  style={{ background: t.bg, border: `2px solid ${t.warna}20` }}
                >
                  <span className="text-3xl sm:text-4xl font-serif leading-none absolute -top-1 left-2 opacity-20" style={{ color: t.warna }}>&ldquo;</span>
                  <p className="text-[11px] sm:text-xs text-comic-black leading-relaxed pt-2 font-bold">
                    {t.teks}
                  </p>
                </div>

                {/* Indikator aktif */}
                {aktif === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center font-comic text-[9px] text-white"
                    style={{ background: t.warna, border: '1px solid #0a0a0a' }}
                  >
                    ✓
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Panel highlight — testimoni aktif diperbesar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={aktif}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 150 }}
            className="comic-panel-dark p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-3xl sm:text-4xl flex-shrink-0 self-center sm:self-auto"
                style={{ background: testimoni[aktif].bg, border: `3px solid ${testimoni[aktif].warna}`, boxShadow: `4px 4px 0 ${testimoni[aktif].warna}` }}
              >
                {testimoni[aktif].foto}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-comic text-xl sm:text-2xl text-white mb-1">{testimoni[aktif].nama}</div>
                <div className="font-bold text-xs sm:text-sm mb-3" style={{ color: testimoni[aktif].warna }}>
                  {testimoni[aktif].jabatan} · {testimoni[aktif].institusi}
                </div>
                <BintangRating jumlah={testimoni[aktif].bintang} warna={testimoni[aktif].warna} />
                <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed font-bold italic">
                  &ldquo;{testimoni[aktif].teks}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigasi dot */}
        <div className="flex justify-center gap-2 mt-6">
          {testimoni.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => setAktif(i)}
              whileHover={{ scale: 1.3 }}
              className="w-3 h-3 transition-all"
              style={{
                background: aktif === i ? testimoni[aktif].warna : '#ccc',
                border: '2px solid #0a0a0a',
                boxShadow: aktif === i ? `2px 2px 0 #0a0a0a` : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
