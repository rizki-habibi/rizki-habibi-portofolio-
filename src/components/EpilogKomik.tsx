'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import HeaderBab from '@/components/HeaderBab'

const nextChapters = [
  { icon: '📝', title: 'Selesaikan Skripsi', desc: 'Penelitian akademik yang sedang berjalan — fondasi ilmiah untuk proyek nyata.', color: '#1a5cff', status: 'IN PROGRESS' },
  { icon: '🌐', title: 'Publish KVT.kom', desc: 'Platform kampus digital Vtuber pertama di Indonesia — saat ini dalam pengembangan.', color: '#8b5cf6', status: 'COMING SOON' },
  { icon: '💼', title: 'Berkarir Profesional', desc: 'Masuk dunia kerja sebagai Web Developer atau System Analyst full-time.', color: '#22c55e', status: 'PLANNED' },
  { icon: '🏫', title: 'Bangun Ekosistem KVT', desc: 'Mengembangkan KVT.kom menjadi ekosistem pendidikan digital yang membuka lapangan kerja.', color: '#f59e0b', status: 'VISION' },
  { icon: '👥', title: 'Perluas Komunitas', desc: 'Membangun komunitas kreator digital Indonesia yang solid dan berdampak luas.', color: '#e63329', status: 'VISION' },
  { icon: '🎓', title: 'S2 → S3 KVT', desc: 'Mengembangkan sistem pendidikan KVT dari gelar S1 hingga S3 dengan domain kvt1-3.kom.', color: '#0891b2', status: 'FUTURE' },
]

const statusColor: Record<string, string> = {
  'IN PROGRESS': '#22c55e',
  'COMING SOON': '#8b5cf6',
  'PLANNED': '#1a5cff',
  'VISION': '#f59e0b',
  'FUTURE': '#e63329',
}

export default function EpilogComic() {
  return (
    <section id="epilog" className="py-20 px-4 relative overflow-hidden" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <HeaderBab nomor="15" judul="WHAT COMES NEXT?" warna="#e63329" subtitle="🚀 Cerita belum berakhir — ini baru awal!" />

        {/* Next chapters */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {nextChapters.map((nc, i) => (
            <motion.div
              key={nc.title}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08, type: 'spring' }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              className="relative overflow-hidden"
              style={{ border: `3px solid ${nc.color}`, boxShadow: `5px 5px 0 ${nc.color}`, background: 'white' }}
            >
              {/* Status badge */}
              <div className="absolute top-3 right-3">
                <span className="font-comic text-[9px] text-white px-2 py-0.5"
                  style={{ background: statusColor[nc.status] || nc.color, border: '1px solid #0a0a0a' }}>
                  {nc.status}
                </span>
              </div>

              <div className="p-5">
                <span className="text-4xl block mb-3">{nc.icon}</span>
                <div className="font-comic text-lg mb-2" style={{ color: nc.color }}>{nc.title}</div>
                <p className="text-xs text-comic-black/70 leading-relaxed">{nc.desc}</p>
              </div>
              <div className="h-2" style={{ background: nc.color }} />
            </motion.div>
          ))}
        </div>

        {/* Timeline masa depan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          className="comic-panel-dark p-8 mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: false }}
            className="font-comic text-2xl text-white text-center mb-8"
          >
            📅 ROADMAP 2026–FUTURE
          </motion.div>
          <div className="space-y-4">
            {[
              { period: '2026 — Semester Akhir', events: ['Sidang Skripsi', 'Lulus S1 STI', 'Kembangkan KVT.kom'], color: '#1a5cff' },
              { period: '2026–2027 — Karir Awal', events: ['Web Developer Profesional', 'Rilis KVT.kom Beta', 'Bangun Tim KVT'], color: '#22c55e' },
              { period: '2027–2028 — Level Up', events: ['KVT.kom Live dengan user aktif', 'Buka program S1 KVT', 'Lapangan Kerja Digital'], color: '#f59e0b' },
              { period: '2028+ — The Big Dream', events: ['S2 dan S3 KVT online', 'Komunitas 1000+ kreator', 'Ekosistem digital mandiri'], color: '#e63329' },
            ].map((row, i) => (
              <motion.div
                key={row.period}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
                viewport={{ once: false }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 font-comic text-xs px-3 py-2 text-comic-black whitespace-nowrap"
                  style={{ background: row.color, border: '2px solid #ffd700' }}>
                  {row.period}
                </div>
                <div className="flex flex-wrap gap-2">
                  {row.events.map(ev => (
                    <span key={ev} className="font-bold text-xs text-white px-3 py-1 bg-white/10 border border-white/20">{ev}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Veteran + Quote penutup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-6 items-center"
        >
          {/* Foto komik profil */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex justify-center"
          >
            <div className="relative overflow-hidden"
              style={{ width: 140, height: 180, border: '4px solid #0a0a0a', boxShadow: '6px 6px 0 #1a5cff', background: '#e8f0ff' }}>
              <Image src="/foto/komik-profil.png" alt="Rizki Komik" fill className="object-cover object-top" />
            </div>
          </motion.div>

          {/* Quote besar */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="p-8 relative"
              style={{ border: '4px solid #0a0a0a', background: 'white', boxShadow: '8px 8px 0 #0a0a0a', borderRadius: 24 }}
            >
              <div className="font-comic text-5xl text-comic-black/10 select-none -mb-6">&ldquo;</div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: false }}
                className="font-bold text-lg text-comic-black leading-relaxed mb-4 relative z-10"
              >
                Cerita ini belum selesai — dan justru itulah yang membuat setiap harinya{' '}
                <span className="text-comic-blue">layak untuk dijalani.</span>{' '}
                Selama masih ada masalah yang bisa dipecahkan, selama itu pula ada alasan untuk terus berkarya.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: false }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 font-comic text-sm text-white flex items-center justify-center"
                  style={{ background: '#1a5cff', border: '3px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}>RH</div>
                <div>
                  <div className="font-comic text-base text-comic-black">Rizki Habibi</div>
                  <div className="text-xs text-comic-black/50 font-bold">Web Developer • Inovator • Founder KVT.kom</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* "TO BE CONTINUED" besar */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mt-16"
        >
          <div
            className="inline-block font-comic text-4xl md:text-5xl text-comic-black px-10 py-5"
            style={{
              background: '#ffd700',
              border: '4px solid #0a0a0a',
              boxShadow: '8px 8px 0 #0a0a0a',
              transform: 'rotate(-1deg)',
            }}
          >
            NEXT CHAPTER: REAL LIFE →
          </div>
        </motion.div>
      </div>
    </section>
  )
}
