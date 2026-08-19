'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ChapterHeader from '@/components/ChapterHeader'

const hobbies = [
  {
    name: 'CODING OTODIDAK',
    desc: 'Belajar framework baru dan eksplorasi teknologi terbaru secara mandiri hampir setiap hari.',
    icon: '💻', color: '#1a5cff', bg: '#e8f0ff', power: 95,
  },
  {
    name: 'REKAYASA HARDWARE',
    desc: 'Merakit alat dari komponen bekas, bermain dengan Arduino dan ESP32 untuk proyek IoT.',
    icon: '🔧', color: '#22c55e', bg: '#f0fdf4', power: 80,
  },
  {
    name: 'DESAIN GRAFIS',
    desc: 'Membuat desain di Canva, Figma, CorelDraw. Suka bikin banner, poster, dan konten visual.',
    icon: '🎨', color: '#e63329', bg: '#fef2f2', power: 75,
  },
  {
    name: 'EDITING VIDEO',
    desc: 'Edit video menggunakan CapCut dan Vegas Pro untuk konten digital dan presentasi.',
    icon: '🎬', color: '#8b5cf6', bg: '#f5f0ff', power: 70,
  },
  {
    name: 'BACA & RISET',
    desc: 'Membaca jurnal, artikel teknologi, dan dokumentasi resmi framework terbaru.',
    icon: '📚', color: '#f59e0b', bg: '#fffbeb', power: 85,
  },
  {
    name: 'KOMUNITAS DIGITAL',
    desc: 'Aktif di forum developer, diskusi teknologi, dan membangun jaringan sesama kreator digital.',
    icon: '🌐', color: '#0891b2', bg: '#ecfeff', power: 78,
  },
]

const personality = [
  { trait: 'INQUISITIVE', desc: 'Selalu penasaran dan suka eksplorasi hal baru', icon: '🔍' },
  { trait: 'RESILIENT', desc: 'Pantang menyerah saat menghadapi bug atau masalah', icon: '💪' },
  { trait: 'CREATIVE', desc: 'Berpikir out-of-the-box dalam solusi teknis', icon: '✨' },
  { trait: 'COLLABORATIVE', desc: 'Suka kerja tim dan berbagi ilmu', icon: '🤝' },
]

export default function HobbiesComic() {
  return (
    <section id="hobbies" className="py-20 px-4 relative" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <ChapterHeader nomor="13" judul="OFF-DUTY LIFE" warna="#22c55e" subtitle="🎮 Di luar kode, kehidupan tetap penuh warna!" />

        {/* Hobi grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {hobbies.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 40, scale: 0.9, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              className="overflow-hidden"
              style={{ border: `3px solid ${h.color}`, boxShadow: `5px 5px 0 ${h.color}`, background: 'white' }}
            >
              <div className="px-4 py-2 flex items-center gap-2" style={{ background: h.color, borderBottom: '2px solid #0a0a0a' }}>
                <span className="text-xl">{h.icon}</span>
                <span className="font-comic text-white text-sm tracking-wide">{h.name}</span>
              </div>
              <div className="p-4" style={{ background: h.bg }}>
                <p className="text-xs text-comic-black leading-relaxed mb-3">{h.desc}</p>
                {/* Power level */}
                <div className="flex items-center gap-2">
                  <span className="font-comic text-xs" style={{ color: h.color }}>POWER</span>
                  <div className="flex-1 comic-progress">
                    <motion.div
                      className="comic-progress-bar h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${h.power}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.05 }}
                      viewport={{ once: false }}
                      style={{ background: `repeating-linear-gradient(-45deg,${h.color} 0px,${h.color} 5px,${h.color}99 5px,${h.color}99 10px)` }}
                    />
                  </div>
                  <span className="font-comic text-xs" style={{ color: h.color }}>{h.power}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Karakter + Personality */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          {/* Karakter panel */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="relative overflow-hidden"
              style={{ width: 220, height: 280, border: '4px solid #0a0a0a', boxShadow: '8px 8px 0 #0a0a0a', background: '#e8f0ff' }}>
              <Image src="/foto/karakter.png" alt="Karakter Rizki" fill className="object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 py-2 text-center font-comic text-sm text-white"
                style={{ background: '#1a5cff', borderTop: '3px solid #0a0a0a' }}>
                RIZKI&apos;S CHARACTER
              </div>
            </div>
            <div className="speech-bubble mt-6 text-sm text-comic-black text-center">
              🎯 &ldquo;Hobi adalah cara saya<br />mengisi ulang energi!&rdquo;
            </div>
          </motion.div>

          {/* Personality traits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-4"
          >
            <div className="font-comic text-2xl text-comic-black mb-4">🧠 CHARACTER TRAITS</div>
            {personality.map((p, i) => (
              <motion.div
                key={p.trait}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 p-4 bg-white"
                style={{ border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a' }}
              >
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <div>
                  <div className="font-comic text-base text-comic-blue">{p.trait}</div>
                  <div className="text-xs text-comic-black/70 font-bold">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="comic-panel-yellow p-6"
        >
          <div className="font-comic text-xl text-comic-black text-center mb-4">⚡ FUN FACTS</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              '🌙 Produktif paling tinggi saat malam hari',
              '☕ Bisa coding berjam-jam tanpa bosan',
              '🎵 Suka dengerin lo-fi saat coding',
              '📱 Pernah coding pakai HP dengan Acode',
              '♻️ Bisa ubah barang bekas jadi alat berguna',
              '🤖 Suka eksperimen dengan AI tools baru',
            ].map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: false }}
                className="flex items-start gap-2 text-xs font-bold text-comic-black p-2 bg-white"
                style={{ border: '2px solid #f59e0b' }}
              >
                {fact}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
