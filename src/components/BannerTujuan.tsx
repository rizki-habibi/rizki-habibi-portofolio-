'use client'

import { motion } from 'framer-motion'
import { SiWhatsapp } from 'react-icons/si'

export default function BannerTujuan() {
  const pesan = 'Halo Rizki! Saya ingin menawarkan [kerja remote/beasiswa kuliah] untuk kamu.'

  return (
    <section
      id="tujuan-karir"
      className="relative overflow-hidden py-10 sm:py-12 px-4"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a0a2e 100%)' }}
    >
      {/* Bintang dekoratif */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            width: (i % 3) + 1,
            height: (i % 3) + 1,
            left: `${(i * 41 + 7) % 97}%`,
            top: `${(i * 29 + 5) % 88}%`,
            opacity: 0.15 + (i % 4) * 0.08,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span
            className="inline-block font-bold text-[10px] tracking-[0.3em] px-4 py-1.5 mb-2"
            style={{ background: '#ffd700', color: '#0a0a0a', border: '2px solid #0a0a0a' }}
          >
            OPEN TO OPPORTUNITY
          </span>
        </motion.div>

        {/* Judul utama */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-comic text-center text-3xl sm:text-4xl text-white mb-2"
          style={{ textShadow: '3px 3px 0 #ffd700' }}
        >
          DICARI: KERJA REMOTE & KULIAH GRATIS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-white/50 text-sm font-bold mb-8 max-w-lg mx-auto"
        >
          Full Stack Developer (Laravel + Next.js) — terbuka untuk remote job, beasiswa S2/D1 dalam & luar negeri, atau kolaborasi serius.
        </motion.p>

        {/* 4 kartu info ringkas */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          {[
            { icon: '💻', label: 'Full Stack Dev', sub: 'Laravel · Next.js · MySQL', warna: '#1a5cff' },
            { icon: '🌐', label: 'Remote / Hybrid', sub: 'Bisa dari mana saja', warna: '#22c55e' },
            { icon: '🎓', label: 'Kuliah Gratis', sub: 'S2 · D1 · DN/LN', warna: '#8b5cf6' },
            { icon: '⚡', label: 'Proses Cepat', sub: 'Respon < 24 jam', warna: '#ffd700' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.06, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex flex-col items-center text-center p-3 sm:p-4"
              style={{
                background: item.warna + '15',
                border: `2px solid ${item.warna}55`,
                boxShadow: `3px 3px 0 ${item.warna}33`,
              }}
            >
              <span className="text-2xl sm:text-3xl mb-1.5">{item.icon}</span>
              <div className="font-comic text-xs sm:text-sm" style={{ color: item.warna }}>{item.label}</div>
              <div className="text-[9px] sm:text-[10px] text-white/40 font-bold mt-0.5">{item.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tombol aksi */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href={`https://wa.me/62882009725053?text=${encodeURIComponent(pesan)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 font-comic text-sm sm:text-base px-6 py-3 text-white w-full sm:w-auto justify-center"
            style={{ background: '#25d366', border: '3px solid #0a0a0a', boxShadow: '5px 5px 0 #0a0a0a' }}
          >
            <SiWhatsapp className="w-4 h-4" />
            TAWARKAN KE SAYA
          </motion.a>

          <motion.a
            href="#tujuan-detail"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 font-comic text-xs sm:text-sm px-5 py-3 text-white/70 w-full sm:w-auto justify-center"
            style={{ border: '2px solid rgba(255,255,255,0.2)' }}
            onClick={e => {
              e.preventDefault()
              document.getElementById('tujuan-detail')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            📋 Lihat Detail Lengkap ↓
          </motion.a>
        </motion.div>

        {/* Note kecil */}
        <p className="text-center text-white/20 text-[10px] font-bold mt-4 tracking-widest">
          ✦ HANYA UNTUK TAWARAN SERIUS · BUKAN UNTUK SPAM ✦
        </p>
      </div>
    </section>
  )
}
