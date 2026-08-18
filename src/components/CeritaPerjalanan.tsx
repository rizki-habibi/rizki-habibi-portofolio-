'use client'

import { motion } from 'framer-motion'

const panels = [
  {
    num: '01',
    judul: 'MENGAPA KULIAH?',
    emoji: '🤔',
    color: '#1a5cff',
    bg: '#e8f0ff',
    isi: [
      'Bukan sekadar mencari ijazah — saya kuliah karena ingin memahami fondasi teknologi secara mendalam.',
      'Di Institut Teknologi dan Sains Mandala, saya menemukan bahwa ilmu Sistem & Teknologi Informasi adalah kunci untuk membangun solusi nyata yang berdampak.',
      'Kuliah bagi saya adalah laboratorium eksperimen: tempat mengasah logika, mencoba ide gila, dan bertemu orang-orang yang berpikiran sama.',
    ],
    quote: '"Gelar bukan tujuan akhir. Ilmu dan karya adalah buktinya."',
  },
  {
    num: '02',
    judul: 'MENCIPTAKAN LAPANGAN KERJA DIGITAL',
    emoji: '💼',
    color: '#22c55e',
    bg: '#f0fdf4',
    isi: [
      'Saya percaya bahwa generasi muda Indonesia tidak harus selalu melamar kerja — kita bisa menciptakan pekerjaan sendiri secara digital.',
      'Melalui proyek-proyek web, sistem IoT, dan platform KVT.kom yang sedang saya bangun, saya ingin membuka peluang kerja bagi kreator, developer, dan pengajar digital.',
      'Target saya: setelah lulus, platform KVT bisa menjadi ekosistem yang menghasilkan lapangan kerja bagi puluhan hingga ratusan orang berbasis digital.',
    ],
    quote: '"Satu website bisa mengubah hidup banyak orang — asal dibangun dengan niat yang benar."',
  },
  {
    num: '03',
    judul: 'MEMBANGUN KOMUNITAS DIGITAL',
    emoji: '🌐',
    color: '#f59e0b',
    bg: '#fffbeb',
    isi: [
      'Ekosistem digital tidak bisa berdiri sendiri — butuh komunitas yang saling mendukung, berbagi, dan bertumbuh bersama.',
      'Saya aktif mengikuti seminar, webinar, dan pelatihan bukan hanya untuk diri sendiri, tapi untuk menyerap pengetahuan yang bisa saya bagikan ke komunitas.',
      'KVT bukan sekadar website — ini adalah komunitas kreator digital yang akan saya bangun step by step, mulai dari sesama mahasiswa hingga profesional muda Indonesia.',
    ],
    quote: '"Komunitas yang kuat adalah fondasi dari ekosistem digital yang berkelanjutan."',
  },
  {
    num: '04',
    judul: 'INOVASI DARI KETERBATASAN',
    emoji: '🔧',
    color: '#e63329',
    bg: '#fef2f2',
    isi: [
      'Saya tumbuh memahami bahwa keterbatasan bukan hambatan — justru keterbatasan melahirkan kreativitas.',
      'Kemampuan merakit alat monitoring dari bahan bekas bukan sekadar hobi — itu bukti bahwa inovasi bisa lahir dari mana saja, termasuk dari limbah yang dianggap tidak berguna.',
      'Prinsip ini yang saya bawa ke dunia digital: membangun solusi impactful dengan sumber daya minimal, tapi dampak maksimal.',
    ],
    quote: '"Inovasi sejati lahir bukan dari kemewahan, tapi dari keberanian berpikir berbeda."',
  },
]

const milestones = [
  { tahun: '2023', label: 'Mulai Kuliah STI', icon: '🎓', color: '#1a5cff' },
  { tahun: '2024', label: 'Bangun Proyek Nyata', icon: '💻', color: '#22c55e' },
  { tahun: '2025', label: 'Sertifikasi BNSP + 75 Sertifikat', icon: '🏆', color: '#f59e0b' },
  { tahun: '2026', label: 'Skripsi + Kembangkan KVT.kom', icon: '🚀', color: '#e63329' },
  { tahun: 'FUTURE', label: 'Publish KVT & Buka Lapangan Kerja', icon: '🌟', color: '#8b5cf6' },
]

export default function CeritaPerjalanan() {
  return (
    <section id="cerita" className="py-20 px-4 relative overflow-hidden" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <div className="chapter-label mb-3">CHAPTER 07 — MY STORY</div>
          <h2 className="section-title">ORIGIN STORY</h2>
          <div className="speech-bubble-right inline-block text-sm mt-4">
            📖 Ini bukan sekadar CV — ini cerita nyata di balik perjalanan saya.
          </div>
        </motion.div>

        {/* Story panels grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.num}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              className="overflow-hidden"
              style={{
                border: `3px solid ${panel.color}`,
                boxShadow: `6px 6px 0 ${panel.color}`,
                background: 'white',
              }}
            >
              {/* Panel header */}
              <div
                className="flex items-center gap-3 px-5 py-3"
                style={{ background: panel.color, borderBottom: '3px solid #0a0a0a' }}
              >
                <span className="text-2xl">{panel.emoji}</span>
                <div>
                  <div className="font-comic text-white text-xs opacity-70">PANEL #{panel.num}</div>
                  <div className="font-comic text-white text-lg leading-tight">{panel.judul}</div>
                </div>
              </div>

              <div className="p-5" style={{ background: panel.bg }}>
                {/* Isi cerita */}
                <div className="space-y-3 mb-4">
                  {panel.isi.map((kalimat, j) => (
                    <motion.p
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + j * 0.07 }}
                      viewport={{ once: false }}
                      className="text-sm text-comic-black leading-relaxed"
                    >
                      {kalimat}
                    </motion.p>
                  ))}
                </div>

                {/* Quote */}
                <div
                  className="p-3 mt-2"
                  style={{ background: 'white', border: `2px solid ${panel.color}`, boxShadow: `3px 3px 0 ${panel.color}` }}
                >
                  <p className="text-xs font-bold italic text-comic-black" style={{ color: panel.color }}>
                    {panel.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestone timeline horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="comic-panel-dark p-8"
        >
          <div className="font-comic text-2xl text-white text-center mb-8">
            ⏳ TIMELINE PERJALANAN SAYA
          </div>
          <div className="relative">
            {/* Garis horizontal */}
            <div
              className="absolute top-8 left-0 right-0 h-1 hidden md:block"
              style={{ background: 'repeating-linear-gradient(90deg,#ffd700 0px,#ffd700 20px,transparent 20px,transparent 30px)' }}
            />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.tahun}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
                  viewport={{ once: false }}
                  className="flex flex-col items-center text-center gap-2"
                >
                  {/* Dot */}
                  <div
                    className="w-16 h-16 flex items-center justify-center text-2xl relative z-10"
                    style={{ background: m.color, border: '3px solid #ffd700', boxShadow: `0 0 0 4px #0a0a0a` }}
                  >
                    {m.icon}
                  </div>
                  <div className="font-comic text-comic-yellow text-sm">{m.tahun}</div>
                  <div className="text-white/70 text-[11px] font-bold leading-tight">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final speech bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mt-12"
        >
          <div
            className="inline-block max-w-2xl px-8 py-5 relative"
            style={{
              background: 'white',
              border: '4px solid #0a0a0a',
              boxShadow: '7px 7px 0 #0a0a0a',
              borderRadius: 24,
            }}
          >
            <p className="font-bold text-base text-comic-black leading-relaxed">
              🎯 Saya kuliah bukan untuk menjadi karyawan terbaik —
              saya kuliah untuk menjadi <span className="text-comic-blue font-black">pencipta ekosistem digital</span> yang
              bisa <span className="text-comic-blue font-black">membuka peluang bagi orang lain.</span>
            </p>
            <p className="text-xs text-comic-black/50 mt-2 font-bold">— Rizki Habibi, 2026</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
