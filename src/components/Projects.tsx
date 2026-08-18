'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX, FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    num: '01',
    title: 'Sistem Integrasi KVT',
    tagline: 'Manajemen data terpadu yang komprehensif',
    description: 'Sistem integrasi untuk manajemen KVT yang komprehensif dengan fitur lengkap untuk pengelolaan data dan pelaporan real-time.',
    image: '/project/sistem integrasi KVT.png',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'PHP'],
    github: '#',
    demo: '#',
    year: '2024',
    color: '#1a5cff',
    bgColor: '#e8f0ff',
    problem: 'Pengelolaan data KVT masih manual dan tidak terintegrasi sehingga rawan error.',
    solution: 'Membangun sistem integrasi berbasis web dengan Laravel yang menyatukan semua data dalam satu platform.',
    result: 'Proses pengelolaan data 3x lebih cepat dengan akurasi data yang meningkat.',
  },
  {
    id: 2,
    num: '02',
    title: 'Sistem K-Amu All in One',
    tagline: 'Sistem informasi sekolah berbasis Laravel',
    description: 'Aplikasi sistem sekolah all-in-one untuk manajemen akademik, kehadiran, dan administrasi dengan UI modern.',
    image: '/project/sistem k-amu berbasi laravel all in one .png',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'Livewire'],
    github: '#',
    demo: '#',
    year: '2024',
    color: '#22c55e',
    bgColor: '#f0fdf4',
    problem: 'Sekolah membutuhkan sistem terpadu untuk mengelola akademik, kehadiran, dan administrasi.',
    solution: 'Membangun platform all-in-one dengan Livewire untuk interaksi real-time tanpa reload.',
    result: 'Memudahkan guru dan admin dalam mengelola data sekolah secara efisien.',
  },
  {
    id: 3,
    num: '03',
    title: 'Alat Monitoring IoT',
    tagline: 'Inovasi sensor dari bahan daur ulang',
    description: 'Merancang alat monitoring fungsional dari komponen bekas — mengintegrasikan sensor dengan microcontroller ESP32 dan dashboard web real-time.',
    image: null,
    tech: ['IoT', 'ESP32', 'Arduino', 'Sensor', 'Web Dashboard'],
    github: '#',
    demo: '#',
    year: '2025',
    color: '#f59e0b',
    bgColor: '#fffbeb',
    badge: '🔧 INOVASI',
    problem: 'Kebutuhan alat monitoring dengan budget terbatas menggunakan komponen bekas.',
    solution: 'Merakit sensor dan microcontroller ESP32 dari komponen daur ulang dengan firmware custom.',
    result: 'Alat monitoring berfungsi penuh dengan biaya 80% lebih hemat dari produk komersial.',
  },
  {
    id: 4,
    num: '04',
    title: 'Laravel Inventory System',
    tagline: 'Manajemen stok barang lengkap',
    description: 'Sistem manajemen inventaris dengan fitur CRUD lengkap, laporan stok, dan tracking barang masuk/keluar.',
    image: null,
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
    github: '#',
    demo: '#',
    year: '2023',
    color: '#e63329',
    bgColor: '#fef2f2',
    problem: 'Pencatatan stok barang masih menggunakan spreadsheet yang tidak efisien.',
    solution: 'Sistem web dengan fitur CRUD, laporan otomatis, dan visualisasi data menggunakan Chart.js.',
    result: 'Proses pencatatan lebih akurat dan laporan stok dapat dihasilkan otomatis.',
  },
  {
    id: 5,
    num: '05',
    title: 'REST API Service',
    tagline: 'API backbone untuk berbagai aplikasi',
    description: 'RESTful API service dengan authentication JWT, rate limiting, dan dokumentasi Swagger lengkap.',
    image: null,
    tech: ['Laravel', 'API', 'JWT', 'Swagger'],
    github: '#',
    demo: '#',
    year: '2023',
    color: '#8b5cf6',
    bgColor: '#f5f3ff',
    problem: 'Aplikasi mobile membutuhkan backend API yang andal dan terdokumentasi.',
    solution: 'Membangun REST API dengan JWT authentication dan dokumentasi Swagger interaktif.',
    result: 'API siap digunakan oleh multiple client (web dan mobile) dengan dokumentasi lengkap.',
  },
]

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-20 px-4 relative" style={{ background: '#fafaf7' }}>
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
          <div className="chapter-label mb-3">CHAPTER 03</div>
          <h2 className="section-title">THE MISSIONS</h2>
          <div className="speech-bubble-right inline-block text-sm mt-4">
            🎯 Setiap proyek adalah misi yang harus diselesaikan!
          </div>
        </motion.div>

        {/* Comic panels grid — asymmetric */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1, transition: { duration: 0.2 } }}
              onClick={() => setSelected(project)}
              className="comic-panel cursor-pointer overflow-hidden group"
            >
              {/* Top bar dengan nomor proyek */}
              <div
                className="flex items-center justify-between px-4 py-2 border-b-3 border-comic-black"
                style={{ background: project.color, borderBottom: '3px solid #0a0a0a' }}
              >
                <span className="font-comic text-white text-xl tracking-widest">PROJECT #{project.num}</span>
                {(project as any).badge && (
                  <span className="font-comic text-xs bg-comic-yellow text-comic-black px-2 py-0.5 border border-comic-black">
                    {(project as any).badge}
                  </span>
                )}
                <span className="font-bold text-white/80 text-xs">{project.year}</span>
              </div>

              {/* Image */}
              <div className="relative h-44 overflow-hidden" style={{ background: project.bgColor }}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <div className="halftone-blue" />
                    <FiFolder className="w-14 h-14 relative z-10" style={{ color: project.color }} />
                    <span className="font-comic text-sm relative z-10" style={{ color: project.color }}>
                      {project.tech[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 bg-white">
                <h3 className="font-comic text-xl text-comic-black mb-1 group-hover:text-comic-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-bold text-comic-black/50 mb-2 uppercase tracking-wide">{project.tagline}</p>
                <p className="text-sm text-comic-black/70 mb-4 leading-relaxed line-clamp-2">{project.description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-bold text-[10px] px-2 py-0.5 uppercase tracking-wide"
                      style={{ background: project.bgColor, border: `2px solid ${project.color}`, color: project.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelected(project) }}
                    className="btn-comic text-xs py-2 px-4"
                    style={{ fontSize: '0.75rem' }}
                  >
                    VIEW CASE
                  </button>
                  <a
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    className="btn-comic-outline text-xs py-2 px-4"
                    style={{ fontSize: '0.75rem' }}
                  >
                    OPEN PROJECT →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/rizki-habibi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-comic-blue inline-flex items-center gap-2"
          >
            <FiGithub className="w-5 h-5" />
            LIHAT LEBIH BANYAK DI GITHUB
          </a>
        </motion.div>
      </div>

      {/* Modal detail proyek */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -3, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotate: 3, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto comic-panel"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div
                className="flex items-center justify-between px-6 py-3 border-b-3 border-comic-black"
                style={{ background: selected.color, borderBottom: '3px solid #0a0a0a' }}
              >
                <span className="font-comic text-white text-xl">PROJECT #{selected.num} — CASE FILE</span>
                <button
                  onClick={() => setSelected(null)}
                  className="text-white hover:text-comic-yellow transition-colors p-1"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Modal image */}
              <div className="relative h-52 border-b-3 border-comic-black" style={{ borderBottom: '3px solid #0a0a0a', background: selected.bgColor }}>
                {selected.image ? (
                  <Image src={selected.image} alt={selected.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FiFolder className="w-20 h-20" style={{ color: selected.color }} />
                  </div>
                )}
              </div>

              {/* Modal content */}
              <div className="p-6 space-y-4">
                <h2 className="font-comic text-3xl text-comic-black">{selected.title}</h2>
                <p className="text-sm text-comic-black/70 leading-relaxed">{selected.description}</p>

                {[
                  { label: '❓ PROBLEM', text: selected.problem, bg: '#fef2f2', border: '#e63329' },
                  { label: '💡 SOLUTION', text: selected.solution, bg: '#f0fdf4', border: '#22c55e' },
                  { label: '🏆 RESULT', text: selected.result, bg: '#fffbeb', border: '#f59e0b' },
                ].map((item) => (
                  <div key={item.label} className="p-4 border-2" style={{ background: item.bg, borderColor: item.border, boxShadow: `3px 3px 0 ${item.border}` }}>
                    <div className="font-comic text-sm mb-1" style={{ color: item.border }}>{item.label}</div>
                    <p className="text-sm text-comic-black">{item.text}</p>
                  </div>
                ))}

                <div>
                  <div className="font-comic text-sm mb-2 text-comic-black">🛠️ TEKNOLOGI</div>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span key={t} className="font-bold text-xs px-3 py-1 border-2"
                        style={{ background: selected.bgColor, borderColor: selected.color, color: selected.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a href={selected.demo} className="btn-comic text-sm py-2 px-5">
                    OPEN PROJECT →
                  </a>
                  <a href={selected.github} className="btn-comic-outline text-sm py-2 px-5 flex items-center gap-2">
                    <FiGithub className="w-4 h-4" /> GITHUB
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
