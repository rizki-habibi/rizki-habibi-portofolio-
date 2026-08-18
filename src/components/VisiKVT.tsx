'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGlobe, FiAward, FiUsers, FiTv } from 'react-icons/fi'

// Domain & gelar sistem KVT
const domainKVT = [
  {
    domain: 'kvt.kom',
    level: 'Portal Utama',
    desc: 'Domain induk ekosistem KVT — pusat seluruh platform digital KVT.',
    color: '#1a5cff',
    bg: '#e8f0ff',
    icon: '🌐',
    status: 'Belum Dipublish',
  },
  {
    domain: 'kvt1.kom',
    level: 'S1 — Sarjana KVT',
    desc: 'Program Studi S1 Teknologi & Inovasi Digital KVT. Gelar: S.KVT (Sarjana KVT).',
    color: '#22c55e',
    bg: '#f0fdf4',
    icon: '🎓',
    status: 'Belum Dipublish',
    gelar: 'S.KVT',
  },
  {
    domain: 'kvt2.kom',
    level: 'S2 — Magister KVT',
    desc: 'Program Magister bidang Teknologi Digital & Inovasi KVT. Gelar: M.KVT (Magister KVT).',
    color: '#f59e0b',
    bg: '#fffbeb',
    icon: '📚',
    status: 'Belum Dipublish',
    gelar: 'M.KVT',
  },
  {
    domain: 'kvt3.kom',
    level: 'S3 — Doktor KVT',
    desc: 'Program Doktoral riset & pengembangan teknologi KVT. Gelar: Dr.KVT (Doktor KVT).',
    color: '#e63329',
    bg: '#fef2f2',
    icon: '🔬',
    status: 'Belum Dipublish',
    gelar: 'Dr.KVT',
  },
]

const mandalaGelar = [
  {
    kode: 'S1',
    nama: 'Pengembang Web Pratama',
    gelar: 'S.KVT',
    penuh: 'Sarjana Kreator & Visi Teknologi',
    icon: '💻',
    color: '#1a5cff',
  },
  {
    kode: 'S2',
    nama: 'Inovator Teknologi Digital',
    gelar: 'M.KVT',
    penuh: 'Magister Kreator & Visi Teknologi',
    icon: '🚀',
    color: '#f59e0b',
  },
  {
    kode: 'S3',
    nama: 'Peneliti & Pemikir Digital',
    gelar: 'Dr.KVT',
    penuh: 'Doktor Kreator & Visi Teknologi',
    icon: '🌟',
    color: '#e63329',
  },
]

export default function VisiKVT() {
  return (
    <section id="visi-kvt" className="py-20 px-4 relative overflow-hidden" style={{ background: '#f0f0eb' }}>
      <div className="halftone-blue" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <div className="chapter-label mb-3">CHAPTER 06 — VISI MASA DEPAN</div>
          <h2 className="section-title">THE BIG DREAM</h2>
          <div className="speech-bubble inline-block text-sm mt-4">
            🏫 Saya punya visi untuk menciptakan ekosistem pendidikan digital sendiri!
          </div>
        </motion.div>

        {/* Panel utama: Kampus Vtuber */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-12 comic-panel overflow-hidden"
        >
          {/* Header panel */}
          <div className="px-6 py-3 flex items-center gap-3" style={{ background: '#1a5cff', borderBottom: '3px solid #0a0a0a' }}>
            <FiTv className="w-5 h-5 text-white" />
            <span className="font-comic text-xl text-white tracking-wide">KAMPUS KULIAH VTUBER — ORIGIN STORY</span>
          </div>

          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 items-start">
            {/* Narasi utama */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: false }}
                className="speech-bubble text-sm inline-block mb-2"
              >
                💡 &quot;Ketika lulus nanti, saya sudah punya gambaran...&quot;
              </motion.div>

              <p className="text-sm text-comic-black leading-relaxed font-medium">
                Saya bermimpi untuk membangun <strong>kampus digital pertama berbasis Vtuber</strong> di Indonesia —
                sebuah platform pendidikan yang menggabungkan teknologi virtual, konten kreatif, dan komunitas digital
                dalam satu ekosistem pembelajaran yang menarik dan inovatif.
              </p>

              <div className="comic-panel-blue p-4 space-y-2">
                <div className="font-comic text-comic-blue text-lg mb-2">🎯 KONSEP UTAMA</div>
                {[
                  '🎓 Program studi berbasis Vtuber & teknologi virtual',
                  '💻 Kurikulum web development + creative digital',
                  '🌐 Kampus 100% online dengan identitas virtual',
                  '🤝 Komunitas kreator digital yang solid',
                  '🚀 Inkubator startup & lapangan kerja digital',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    viewport={{ once: false }}
                    className="text-xs font-bold text-comic-black flex items-start gap-2"
                  >
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <div
                className="p-3 font-bold text-xs text-comic-black"
                style={{ background: '#fff8cc', border: '2px solid #f59e0b', boxShadow: '3px 3px 0 #f59e0b' }}
              >
                📌 Status: Website sudah ada di <strong>kvt.kom</strong> — belum dipublish, sedang dalam pengembangan
              </div>
            </div>

            {/* Domain cards */}
            <div className="space-y-3">
              <div className="font-comic text-lg text-comic-black mb-4">🌐 EKOSISTEM DOMAIN KVT</div>
              {domainKVT.map((d, i) => (
                <motion.div
                  key={d.domain}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  viewport={{ once: false }}
                  whileHover={{ x: -4 }}
                  className="flex items-center gap-3 p-3 relative overflow-hidden"
                  style={{ background: d.bg, border: `3px solid ${d.color}`, boxShadow: `4px 4px 0 ${d.color}` }}
                >
                  <span className="text-2xl flex-shrink-0">{d.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-comic text-base" style={{ color: d.color }}>{d.domain}</span>
                      {d.gelar && (
                        <span
                          className="font-comic text-[10px] px-2 py-0.5 text-white"
                          style={{ background: d.color, border: `1px solid ${d.color}` }}
                        >
                          {d.gelar}
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-xs text-comic-black">{d.level}</div>
                    <div className="text-[11px] text-comic-black/60 leading-tight mt-0.5">{d.desc}</div>
                  </div>
                  <div
                    className="flex-shrink-0 text-[9px] font-bold px-2 py-1 text-white"
                    style={{ background: d.color }}
                  >
                    {d.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sistem Gelar Mandala */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-12"
        >
          <div className="text-center mb-6">
            <div className="font-comic text-2xl text-comic-black">🎓 SISTEM GELAR — MANDALA INSTITUTE × KVT</div>
            <p className="text-xs text-comic-black/60 font-bold mt-1">
              Gelar ID unik yang saya ciptakan sendiri sebagai identitas pendidikan digital
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {mandalaGelar.map((g, i) => (
              <motion.div
                key={g.kode}
                initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                className="comic-panel overflow-hidden text-center"
              >
                {/* Top strip */}
                <div className="py-2 font-comic text-white text-2xl" style={{ background: g.color, borderBottom: '3px solid #0a0a0a' }}>
                  {g.kode}
                </div>
                <div className="p-5">
                  <div className="text-3xl mb-3">{g.icon}</div>
                  {/* Gelar badge */}
                  <div
                    className="inline-block font-comic text-3xl mb-2 px-4 py-2 text-white"
                    style={{ background: g.color, border: `3px solid #0a0a0a`, boxShadow: `4px 4px 0 #0a0a0a` }}
                  >
                    {g.gelar}
                  </div>
                  <div className="font-bold text-xs text-comic-black mb-1">{g.nama}</div>
                  <div className="text-[11px] text-comic-black/50 italic">{g.penuh}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="comic-panel-dark p-8 text-center"
        >
          <div className="font-comic text-4xl text-comic-yellow mb-4">🚀</div>
          <blockquote className="font-comic text-white text-xl md:text-2xl leading-snug mb-4" style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}>
            &quot;Saya tidak hanya ingin lulus — saya ingin menciptakan tempat belajar yang
            <span className="text-comic-yellow"> belum pernah ada sebelumnya</span> di Indonesia.&quot;
          </blockquote>
          <p className="text-white/50 font-bold text-sm">— Rizki Habibi, Pendiri KVT.kom (In Progress)</p>
        </motion.div>
      </div>
    </section>
  )
}
