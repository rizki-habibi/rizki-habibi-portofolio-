'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import HeaderBab from '@/components/HeaderBab'

const quotes = [
  {
    text: 'Setiap baris kode adalah langkah menuju solusi yang belum pernah ada sebelumnya.',
    author: 'Rizki Habibi',
    context: 'Tentang Coding',
    color: '#1a5cff',
    bg: '#e8f0ff',
    icon: '💻',
  },
  {
    text: 'Keterbatasan bukan hambatan — justru keterbatasan melahirkan kreativitas terbesar.',
    author: 'Rizki Habibi',
    context: 'Tentang Inovasi',
    color: '#22c55e',
    bg: '#f0fdf4',
    icon: '🔧',
  },
  {
    text: 'Saya tidak hanya ingin lulus — saya ingin menciptakan tempat belajar yang belum pernah ada di Indonesia.',
    author: 'Rizki Habibi',
    context: 'Tentang Gelar.id',
    color: '#8b5cf6',
    bg: '#f5f0ff',
    icon: '🌐',
  },
  {
    text: 'Komunitas yang kuat adalah fondasi dari ekosistem digital yang berkelanjutan.',
    author: 'Rizki Habibi',
    context: 'Tentang Komunitas',
    color: '#f59e0b',
    bg: '#fffbeb',
    icon: '👥',
  },
  {
    text: 'Gelar bukan tujuan akhir. Ilmu dan karya adalah buktinya.',
    author: 'Rizki Habibi',
    context: 'Tentang Pendidikan',
    color: '#e63329',
    bg: '#fef2f2',
    icon: '🎓',
  },
  {
    text: 'Satu website bisa mengubah hidup banyak orang — asal dibangun dengan niat yang benar.',
    author: 'Rizki Habibi',
    context: 'Tentang Dampak',
    color: '#0891b2',
    bg: '#ecfeff',
    icon: '🚀',
  },
]

const filosopi = [
  { label: 'BELAJAR', desc: 'Otodidak setiap hari, tidak menunggu sempurna', icon: '📚', color: '#1a5cff' },
  { label: 'BERKARYA', desc: 'Bangun nyata, bukan sekadar rencana', icon: '🛠️', color: '#22c55e' },
  { label: 'BERBAGI', desc: 'Ilmu bertumbuh ketika dibagikan', icon: '🤝', color: '#f59e0b' },
  { label: 'BERDAMPAK', desc: 'Setiap proyek harus punya makna', icon: '💡', color: '#e63329' },
]

export default function QuoteComic() {
  return (
    <section id="quotes" className="py-20 px-4 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="halftone-yellow" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <HeaderBab nomor="11" judul="WORDS OF POWER" warna="#ffd700" gelap={true} />

        {/* Quote cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              className="relative overflow-hidden"
              style={{ border: `3px solid ${q.color}`, boxShadow: `5px 5px 0 ${q.color}`, background: q.bg }}
            >
              {/* Context label */}
              <div className="px-4 py-2 flex items-center gap-2" style={{ background: q.color, borderBottom: '2px solid #0a0a0a' }}>
                <span className="text-lg">{q.icon}</span>
                <span className="font-comic text-white text-xs tracking-wider">{q.context}</span>
              </div>
              <div className="p-5">
                {/* Opening quote mark */}
                <div className="font-comic text-6xl leading-none text-comic-black/10 select-none -mb-4">&ldquo;</div>
                <p className="text-sm font-bold text-comic-black leading-relaxed italic mb-4 relative z-10">
                  {q.text}
                </p>
                <div className="flex items-center gap-2 pt-3" style={{ borderTop: `2px solid ${q.color}` }}>
                  <div className="w-6 h-6 flex items-center justify-center text-xs font-comic text-white" style={{ background: q.color }}>RH</div>
                  <span className="font-comic text-xs" style={{ color: q.color }}>-- {q.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filosofi 4 pilar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="font-comic text-2xl text-white text-center mb-6"
          >
            🧭 4 PILAR FILOSOFI HIDUP
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filosopi.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 150 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06, rotate: -2 }}
                className="text-center p-5 relative overflow-hidden"
                style={{ border: `3px solid ${f.color}`, boxShadow: `5px 5px 0 ${f.color}`, background: 'white' }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="text-4xl mb-3"
                >
                  {f.icon}
                </motion.div>
                <div className="font-comic text-xl mb-2" style={{ color: f.color }}>{f.label}</div>
                <div className="text-xs font-bold text-comic-black/60 leading-snug">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Veteran karakter panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-8 p-8"
          style={{ border: '3px solid #ffd700', background: 'white', boxShadow: '6px 6px 0 #ffd700' }}
        >
          <div className="relative flex-shrink-0 overflow-hidden"
            style={{ width: 160, height: 200, border: '4px solid #0a0a0a', boxShadow: '6px 6px 0 #ffd700' }}>
            <Image src="/foto/komik-veteran.png" alt="Komik Veteran" fill className="object-cover object-top" />
            <div className="absolute bottom-0 left-0 right-0 text-center font-comic text-xs text-comic-black py-1"
              style={{ background: '#ffd700', borderTop: '2px solid #0a0a0a' }}>
              THE VETERAN
            </div>
          </div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              className="font-comic text-2xl text-comic-black mb-4"
            >
              💭 PESAN VETERAN
            </motion.div>
            <div className="speech-bubble inline-block text-sm mb-4 text-comic-black">
              &ldquo;Pengalaman bukan tentang lamanya waktu — tapi seberapa dalam kamu menyelami setiap prosesnya.&rdquo;
            </div>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm text-comic-black/70 leading-relaxed font-bold"
            >
              Karakter veteran ini melambangkan semangat untuk terus belajar dan berkembang, tidak peduli seberapa jauh perjalanan yang sudah ditempuh. Setiap tantangan adalah pelajaran baru.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
