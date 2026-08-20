'use client'

import { motion } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

const arcs = [
  {
    year: '2023',
    arcTitle: 'THE BEGINNING',
    arcSub: 'Awal perjalanan',
    color: '#1a5cff',
    bgColor: '#e8f0ff',
    events: [
      {
        icon: '🎓',
        title: 'Masuk Program Studi STI',
        desc: 'Memulai perjalanan di Institut Teknologi dan Sains Mandala, jurusan Sistem dan Teknologi Informasi.',
        type: 'education',
      },
      {
        icon: '💻',
        title: 'Proyek Laravel Pertama',
        desc: 'Membangun sistem inventaris dan RESTful API sebagai proyek web pertama.',
        type: 'project',
      },
    ],
  },
  {
    year: '2024',
    arcTitle: 'LEVEL UP',
    arcSub: 'Naik level',
    color: '#22c55e',
    bgColor: '#f0fdf4',
    events: [
      {
        icon: '⚙️',
        title: 'Sistem Integrasi KVT',
        desc: 'Mengerjakan sistem integrasi manajemen KVT yang komprehensif sebagai anggota tim developer.',
        type: 'project',
      },
      {
        icon: '🏫',
        title: 'Sistem K-Amu All in One',
        desc: 'Membangun sistem informasi sekolah berbasis Laravel dengan fitur lengkap dan Livewire.',
        type: 'project',
      },
    ],
  },
  {
    year: '2025',
    arcTitle: 'NEW CHALLENGE',
    arcSub: 'Tantangan baru',
    color: '#f59e0b',
    bgColor: '#fffbeb',
    events: [
      {
        icon: '🏆',
        title: 'Sertifikasi BNSP',
        desc: 'Lulus uji kompetensi nasional Junior Web Developer dari BNSP melalui LSP Teknologi Digital, Yogyakarta. No. 62090 2513 3 0156814 2025.',
        type: 'certification',
      },
      {
        icon: '🎓',
        title: '75+ Sertifikat & Seminar',
        desc: 'Aktif mengikuti pelatihan Digital Talent Scholarship, Microsoft Azure, seminar nasional, workshop, dan berbagai kegiatan pengembangan diri.',
        type: 'achievement',
      },
      {
        icon: '🔧',
        title: 'Inovasi Alat Monitoring IoT',
        desc: 'Merancang alat monitoring fungsional dari bahan daur ulang — mengintegrasikan sensor ESP32 dengan dashboard web real-time.',
        type: 'project',
      },
    ],
  },
  {
    year: '2026',
    arcTitle: 'CURRENT ARC',
    arcSub: 'Arc saat ini',
    color: '#e63329',
    bgColor: '#fef2f2',
    events: [
      {
        icon: '📝',
        title: 'Penelitian Skripsi',
        desc: 'Menjalankan penelitian skripsi di bidang teknologi informasi sambil terus mengembangkan skill web development.',
        type: 'education',
      },
      {
        icon: '🚀',
        title: 'Siap Memasuki Dunia Profesional',
        desc: 'Mempersiapkan diri untuk berkarir sebagai Web Developer profesional dengan portofolio dan sertifikasi yang kuat.',
        type: 'achievement',
      },
    ],
  },
]

const typeColor: Record<string, string> = {
  education: '#1a5cff',
  project: '#22c55e',
  certification: '#f59e0b',
  achievement: '#e63329',
}

export default function ExperienceTimeline() {
  return (
    <section id="timeline" className="py-20 px-4 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Halftone kuning di atas background gelap */}
      <div className="halftone-yellow" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Chapter Header */}
        <HeaderBab nomor="04" judul="MY JOURNEY" warna="#ffd700" gelap={true} />

        {/* Timeline arcs */}
        <div className="relative">
          {/* Garis vertikal tengah */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block"
            style={{ background: 'repeating-linear-gradient(180deg, #ffd700 0px, #ffd700 20px, transparent 20px, transparent 30px)' }}
          />

          <div className="space-y-16">
            {arcs.map((arc, arcIndex) => (
              <motion.div
                key={arc.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: arcIndex * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                {/* Year badge di tengah */}
                <div className="relative flex justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="relative z-10 px-8 py-3 font-comic text-2xl text-white"
                    style={{
                      background: arc.color,
                      border: '3px solid #ffd700',
                      boxShadow: '5px 5px 0 #ffd700',
                    }}
                  >
                    {arc.year} — {arc.arcTitle}
                    <div className="text-xs font-bold text-white/60 uppercase tracking-widest mt-0.5 text-center">
                      {arc.arcSub}
                    </div>
                  </motion.div>
                </div>

                {/* Events panel grid */}
                <div className={`grid gap-4 ${arc.events.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-lg mx-auto'}`}>
                  {arc.events.map((event, eventIndex) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, x: eventIndex % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + eventIndex * 0.1 }}
                      viewport={{ once: false }}
                      whileHover={{ y: -4, rotate: eventIndex % 2 === 0 ? -1 : 1 }}
                      className="relative bg-white overflow-hidden"
                      style={{
                        border: `3px solid ${arc.color}`,
                        boxShadow: `5px 5px 0 ${arc.color}`,
                      }}
                    >
                      {/* Top strip warna */}
                      <div className="h-2" style={{ background: arc.color }} />

                      {/* Type indicator */}
                      <div
                        className="absolute top-4 right-4 w-3 h-3 rounded-full border-2 border-white"
                        style={{ background: typeColor[event.type] || arc.color }}
                      />

                      <div className="p-5">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl flex-shrink-0 mt-0.5">{event.icon}</span>
                          <div>
                            <h4
                              className="font-comic text-lg leading-tight mb-2"
                              style={{ color: arc.color }}
                            >
                              {event.title}
                            </h4>
                            <p className="text-sm text-comic-black/70 leading-relaxed">
                              {event.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* "To be continued..." di bawah */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mt-16"
        >
          <div
            className="inline-block px-8 py-4 font-comic text-2xl text-comic-black"
            style={{
              background: '#ffd700',
              border: '3px solid #ffd700',
              boxShadow: '6px 6px 0 rgba(255,215,0,0.4)',
              transform: 'rotate(-1deg)',
            }}
          >
            TO BE CONTINUED... →
          </div>
        </motion.div>
      </div>
    </section>
  )
}
