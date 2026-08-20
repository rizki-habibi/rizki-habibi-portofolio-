'use client'

import { motion } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

const trainings = [
  {
    level: 'SD', name: 'SDN Sumbersari 3 Jember', year: '2008–2014',
    desc: 'Fondasi dasar belajar dan rasa ingin tahu yang tinggi mulai terbentuk.',
    icon: '📖', color: '#f59e0b', bg: '#fffbeb', badge: 'ORIGIN',
  },
  {
    level: 'SMP', name: 'SMP Al-Baitul Amien', year: '2014–2017',
    desc: 'Mulai mengenal komputer dan internet. Rasa penasaran dengan teknologi semakin kuat.',
    icon: '💡', color: '#22c55e', bg: '#f0fdf4', badge: 'AWAKENING',
  },
  {
    level: 'SMA', name: 'SMA Negeri 2 Jember', year: '2017–2020',
    desc: 'Mengenal pemrograman pertama kali. Mulai otodidak belajar HTML dan CSS dari YouTube.',
    icon: '⚡', color: '#1a5cff', bg: '#e8f0ff', badge: 'TRAINING',
  },
  {
    level: 'S1', name: 'Institut Teknologi dan Sains Mandala', year: '2023–Sekarang',
    desc: 'Program Studi Sistem & Teknologi Informasi. Membangun proyek nyata, mengikuti 75+ pelatihan, sertifikasi BNSP, dan penelitian skripsi.',
    icon: '🚀', color: '#8b5cf6', bg: '#f5f0ff', badge: 'MASTERY ARC',
  },
]

const onlineCourses = [
  { name: 'Digital Talent Scholarship', count: '75+ Course', provider: 'Kominfo', color: '#1a5cff' },
  { name: 'Microsoft Azure AI', count: '3 Module', provider: 'Microsoft Learn', color: '#0078d4' },
  { name: 'Ethical Hacking Basics', count: '1 Course', provider: 'DTS', color: '#e63329' },
  { name: 'Cloud Computing', count: '2 Course', provider: 'DTS', color: '#0891b2' },
  { name: 'IoT & Microcontroller', count: 'Otodidak', provider: 'YouTube + Docs', color: '#22c55e' },
  { name: 'UI/UX Design', count: 'Otodidak', provider: 'Figma + YouTube', color: '#f59e0b' },
]

const certHighlights = [
  { title: 'BNSP Junior Web Developer', org: 'LSP Teknologi Digital', year: '2025', star: true },
  { title: 'AI Engineer For Milenial', org: 'Digital Talent Scholarship', year: '2025', star: false },
  { title: 'Ethical Hacker For Dummies', org: 'Digital Talent Scholarship', year: '2025', star: false },
  { title: 'Azure OpenAI Prompt Engineering', org: 'Microsoft Learn', year: '2025', star: false },
  { title: 'Junior Web Developer', org: 'Digital Talent Scholarship', year: '2025', star: false },
  { title: 'Introduction to Cloud Computing', org: 'Digital Talent Scholarship', year: '2025', star: false },
]

export default function EducationComic() {
  return (
    <section id="education" className="py-20 px-4 relative" style={{ background: '#f0f0eb' }}>
      <div className="halftone-blue" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <HeaderBab nomor="12" judul="TRAINING ARC" warna="#1a5cff" subtitle="🎓 Setiap ilmu adalah senjata yang tak bisa dicuri" />

        {/* Pendidikan formal — comic panels vertikal */}
        <div className="relative mb-16">
          {/* Garis vertikal */}
          <div className="absolute left-6 top-0 bottom-0 w-1 hidden md:block"
            style={{ background: 'repeating-linear-gradient(180deg,#0a0a0a 0px,#0a0a0a 12px,transparent 12px,transparent 20px)' }} />

          <div className="space-y-6 md:pl-16">
            {trainings.map((t, i) => (
              <motion.div
                key={t.level}
                initial={{ opacity: 0, x: -50, rotate: -1 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ x: 6 }}
                className="relative overflow-hidden"
                style={{ border: `3px solid ${t.color}`, boxShadow: `5px 5px 0 ${t.color}`, background: t.bg }}
              >
                {/* Dot di garis */}
                <div className="absolute -left-[52px] top-6 w-8 h-8 font-comic text-sm text-white flex items-center justify-center hidden md:flex"
                  style={{ background: t.color, border: '3px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}>
                  {i + 1}
                </div>

                <div className="flex items-start gap-4 p-5">
                  <span className="text-4xl flex-shrink-0">{t.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-comic text-2xl" style={{ color: t.color }}>{t.level}</span>
                      <span className="font-comic text-xs text-white px-2 py-0.5" style={{ background: t.color }}>{t.badge}</span>
                      <span className="font-bold text-xs text-comic-black/50">{t.year}</span>
                    </div>
                    <div className="font-bold text-sm text-comic-black mb-2">{t.name}</div>
                    <div className="text-xs text-comic-black/70 leading-relaxed">{t.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Online Courses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-10"
        >
          <div className="font-comic text-2xl text-comic-black text-center mb-6">🌐 ONLINE COURSES</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {onlineCourses.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: false }}
                whileHover={{ y: -4 }}
                className="p-4 bg-white"
                style={{ border: `3px solid ${c.color}`, boxShadow: `4px 4px 0 ${c.color}` }}
              >
                <div className="font-comic text-sm mb-1" style={{ color: c.color }}>{c.name}</div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-comic-black/60">{c.provider}</span>
                  <span className="font-comic text-xs text-white px-2 py-0.5" style={{ background: c.color }}>{c.count}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          className="comic-panel-dark p-8"
        >
          <div className="font-comic text-2xl text-white text-center mb-6">🏅 SERTIFIKAT UNGGULAN</div>
          <div className="grid sm:grid-cols-2 gap-3">
            {certHighlights.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: false }}
                className="flex items-start gap-3 p-3 bg-white/10 border border-white/20"
              >
                <span className="text-xl flex-shrink-0">{c.star ? '⭐' : '🏅'}</span>
                <div>
                  <div className={`font-bold text-sm ${c.star ? 'text-comic-yellow' : 'text-white'}`}>{c.title}</div>
                  <div className="text-white/50 text-xs">{c.org} • {c.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
