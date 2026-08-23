'use client'

import { motion } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

const badges = [
  {
    id: 1,
    title: 'BNSP CERTIFIED',
    sub: 'Junior Web Developer',
    icon: '🏆',
    color: '#f59e0b',
    bg: '#fffbeb',
    rarity: 'LEGENDARY',
    year: '2025',
    desc: 'Sertifikasi kompetensi nasional dari Badan Nasional Sertifikasi Profesi.',
  },
  {
    id: 2,
    title: '75+ CERTIFICATES',
    sub: 'Digital Talent Scholarship',
    icon: '🏅',
    color: '#1a5cff',
    bg: '#e8f0ff',
    rarity: 'EPIC',
    year: '2025',
    desc: 'Menyelesaikan 75+ pelatihan resmi di bidang AI, Web, Cyber Security, Cloud & Marketing.',
  },
  {
    id: 3,
    title: 'FULL STACK BUILDER',
    sub: 'Laravel + Next.js',
    icon: '💻',
    color: '#22c55e',
    bg: '#f0fdf4',
    rarity: 'RARE',
    year: '2024',
    desc: 'Membangun aplikasi full stack dari frontend hingga backend secara mandiri.',
  },
  {
    id: 4,
    title: 'IOT INNOVATOR',
    sub: 'Alat Monitoring Daur Ulang',
    icon: '🔧',
    color: '#e63329',
    bg: '#fef2f2',
    rarity: 'RARE',
    year: '2025',
    desc: 'Merancang alat monitoring fungsional dari komponen bekas dengan ESP32.',
  },
  {
    id: 5,
    title: 'KVT FOUNDER',
    sub: 'gelar.id — In Progress',
    icon: '🌐',
    color: '#8b5cf6',
    bg: '#f5f0ff',
    rarity: 'EPIC',
    year: '2026',
    desc: 'Membangun ekosistem kampus digital Vtuber dan platform Gelar.id secara mandiri.',
  },
  {
    id: 6,
    title: 'COMMUNITY BUILDER',
    sub: 'Digital Community',
    icon: '👥',
    color: '#0891b2',
    bg: '#ecfeff',
    rarity: 'RARE',
    year: '2025',
    desc: 'Aktif membangun komunitas digital dan berbagi ilmu ke sesama developer muda.',
  },
  {
    id: 7,
    title: 'SKRIPSI FIGHTER',
    sub: 'Penelitian Aktif',
    icon: '📝',
    color: '#be185d',
    bg: '#fdf2f8',
    rarity: 'COMMON',
    year: '2026',
    desc: 'Menjalankan penelitian skripsi sambil terus produktif membangun proyek nyata.',
  },
  {
    id: 8,
    title: 'SELF-TAUGHT PRO',
    sub: 'Otodidak Digital',
    icon: '📚',
    color: '#b45309',
    bg: '#fef3c7',
    rarity: 'EPIC',
    year: '2023-2026',
    desc: 'Menguasai 14+ teknologi secara mandiri melalui praktik, YouTube, dan dokumentasi resmi.',
  },
]

const rarityColor: Record<string, { bg: string; text: string; label: string }> = {
  LEGENDARY: { bg: '#ffd700', text: '#0a0a0a', label: '⭐ LEGENDARY' },
  EPIC: { bg: '#8b5cf6', text: 'white', label: '💜 EPIC' },
  RARE: { bg: '#1a5cff', text: 'white', label: '💙 RARE' },
  COMMON: { bg: '#22c55e', text: 'white', label: '💚 COMMON' },
}

// Milestone list
const milestones = [
  { year: '2023', event: 'Mulai kuliah STI & belajar Laravel', icon: '🎓' },
  { year: '2024', event: 'Bangun Sistem KVT & K-Amu All in One', icon: '⚙️' },
  { year: '2025', event: 'Sertifikasi BNSP + 75 sertifikat digital', icon: '🏆' },
  { year: '2025', event: 'Inovasi alat monitoring IoT daur ulang', icon: '🔧' },
  { year: '2026', event: 'Penelitian Skripsi + Kembangkan Gelar.id', icon: '🚀' },
  { year: 'SOON', event: 'Publish Gelar.id & Buka Lapangan Kerja', icon: '🌟' },
]

export default function AchievementsComic() {
  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <HeaderBab nomor="10" judul="ACHIEVEMENT UNLOCKED" warna="#ffd700" subtitle="🎖️ Setiap pencapaian adalah unlock baru!" />

        {/* Badge grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {badges.map((badge, i) => {
            const rar = rarityColor[badge.rarity]
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 40, scale: 0.85, rotate: i % 3 === 0 ? -2 : i % 3 === 1 ? 0 : 2 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07, type: 'spring', stiffness: 120 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -8, scale: 1.03, rotate: i % 2 === 0 ? -1 : 1 }}
                className="relative overflow-hidden cursor-default"
                style={{ border: `3px solid ${badge.color}`, boxShadow: `5px 5px 0 ${badge.color}`, background: badge.bg }}
              >
                {/* Rarity strip */}
                <div className="flex items-center justify-between px-3 py-1.5" style={{ background: rar.bg, borderBottom: `2px solid #0a0a0a` }}>
                  <span className="font-comic text-[10px]" style={{ color: rar.text }}>{rar.label}</span>
                  <span className="font-bold text-[10px] text-comic-black/50">{badge.year}</span>
                </div>

                <div className="p-4 text-center">
                  {/* Icon */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                    className="text-4xl mb-3"
                  >
                    {badge.icon}
                  </motion.div>

                  {/* Title */}
                  <div className="font-comic text-sm text-comic-black leading-tight mb-1" style={{ color: badge.color }}>
                    {badge.title}
                  </div>
                  <div className="font-bold text-[11px] text-comic-black/60 mb-2">{badge.sub}</div>
                  <div className="text-[11px] text-comic-black/70 leading-snug">{badge.desc}</div>
                </div>

                {/* Corner glow */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full opacity-20 pointer-events-none"
                  style={{ background: badge.color }} />
              </motion.div>
            )
          })}
        </div>

        {/* Milestone timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="comic-panel-dark p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="font-comic text-2xl text-white text-center mb-8"
          >
            🗺️ PETA PERJALANAN
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-3 p-4 bg-white/10 border border-white/20"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: '#ffd700', border: '2px solid #ffd700' }}
                >
                  {m.icon}
                </div>
                <div>
                  <div className="font-comic text-comic-yellow text-sm">{m.year}</div>
                  <div className="text-white/80 text-xs font-bold leading-snug">{m.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-12"
        >
          <div
            className="inline-block max-w-2xl px-8 py-5"
            style={{ background: 'white', border: '4px solid #0a0a0a', boxShadow: '7px 7px 0 #0a0a0a', borderRadius: 24 }}
          >
            <p className="font-bold text-base text-comic-black leading-relaxed">
              🎯 Setiap achievement bukan tentang prestasi semata --
              tapi tentang <span className="text-comic-blue font-black">siapa saya setelah melewatinya.</span>
            </p>
            <p className="text-xs text-comic-black/40 mt-2 font-bold">-- Rizki Habibi, 2026</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
