'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX, FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi'
import HeaderBab from '@/components/HeaderBab'

const daftarProyek = [
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
    kategori: 'Web',
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
    kategori: 'Web',
    problem: 'Sekolah membutuhkan sistem terpadu untuk mengelola akademik, kehadiran, dan administrasi.',
    solution: 'Membangun platform all-in-one dengan Livewire untuk interaksi real-time tanpa reload.',
    result: 'Memudahkan guru dan admin dalam mengelola data sekolah secara efisien.',
  },
  {
    id: 3,
    num: '03',
    title: 'Alat Monitoring IoT',
    tagline: 'Inovasi sensor dari bahan daur ulang',
    description: 'Merancang alat monitoring fungsional dari komponen bekas -- mengintegrasikan sensor dengan microcontroller ESP32 dan dashboard web real-time.',
    image: null,
    tech: ['IoT', 'ESP32', 'Arduino', 'Sensor', 'Web Dashboard'],
    github: '#',
    demo: '#',
    year: '2025',
    color: '#f59e0b',
    bgColor: '#fffbeb',
    badge: '🔧 INOVASI',
    kategori: 'IoT',
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
    kategori: 'Web',
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
    kategori: 'API',
    problem: 'Aplikasi mobile membutuhkan backend API yang andal dan terdokumentasi.',
    solution: 'Membangun REST API dengan JWT authentication dan dokumentasi Swagger interaktif.',
    result: 'API siap digunakan oleh multiple client (web dan mobile) dengan dokumentasi lengkap.',
  },
]

const kategoriList = ['SEMUA', 'Web', 'IoT', 'API']

export default function Projects() {
  const [dipilih, setDipilih] = useState<typeof daftarProyek[0] | null>(null)
  const [aktifKategori, setAktifKategori] = useState('SEMUA')

  const proyekTersaring = aktifKategori === 'SEMUA'
    ? daftarProyek
    : daftarProyek.filter(p => p.kategori === aktifKategori)

  return (
    <section id="projects" className="py-16 sm:py-20 px-3 sm:px-4 relative" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Chapter Header */}
        <HeaderBab nomor="03" judul="THE MISSIONS" warna="#1a5cff" subtitle="🎯 Setiap proyek adalah misi yang harus diselesaikan!" />

        {/* Filter kategori */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
        >
          {kategoriList.map((kat) => (
            <motion.button
              key={kat}
              onClick={() => setAktifKategori(kat)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="font-comic text-xs sm:text-sm px-4 sm:px-5 py-2 transition-all"
              style={{
                background: aktifKategori === kat ? '#1a5cff' : 'white',
                color: aktifKategori === kat ? 'white' : '#0a0a0a',
                border: '3px solid #0a0a0a',
                boxShadow: aktifKategori === kat ? '4px 4px 0 #0a0a0a' : '3px 3px 0 #0a0a0a',
              }}
            >
              {kat}
            </motion.button>
          ))}
        </motion.div>

        {/* Comic panels grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={aktifKategori}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {proyekTersaring.map((proyek, indeks) => (
              <motion.div
                key={proyek.id}
                initial={{ opacity: 0, y: 40, rotate: indeks % 2 === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: indeks * 0.08 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -8, rotate: indeks % 2 === 0 ? -1 : 1, transition: { duration: 0.2 } }}
                onClick={() => setDipilih(proyek)}
                className="comic-panel cursor-pointer overflow-hidden group"
              >
                <div
                  className="flex items-center justify-between px-3 sm:px-4 py-2 border-b-3 border-comic-black"
                  style={{ background: proyek.color, borderBottom: '3px solid #0a0a0a' }}
                >
                  <span className="font-comic text-white text-base sm:text-xl tracking-widest">PROJECT #{proyek.num}</span>
                  {(proyek as any).badge && (
                    <span className="font-comic text-[10px] sm:text-xs bg-comic-yellow text-comic-black px-1.5 sm:px-2 py-0.5 border border-comic-black">
                      {(proyek as any).badge}
                    </span>
                  )}
                  <span className="font-bold text-white/80 text-xs">{proyek.year}</span>
                </div>
                <div className="relative h-36 sm:h-44 overflow-hidden" style={{ background: proyek.bgColor }}>
                  {proyek.image ? (
                    <Image
                      src={proyek.image}
                      alt={proyek.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <div className="halftone-blue" />
                      <FiFolder className="w-12 h-12 sm:w-14 sm:h-14 relative z-10" style={{ color: proyek.color }} />
                      <span className="font-comic text-xs sm:text-sm relative z-10" style={{ color: proyek.color }}>
                        {proyek.tech[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-3 sm:p-4 bg-white">
                  <h3 className="font-comic text-lg sm:text-xl text-comic-black mb-1 group-hover:text-comic-blue transition-colors">
                    {proyek.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-bold text-comic-black/50 mb-2 uppercase tracking-wide">{proyek.tagline}</p>
                  <p className="text-xs sm:text-sm text-comic-black/70 mb-3 sm:mb-4 leading-relaxed line-clamp-2">{proyek.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {proyek.tech.map((teknologi) => (
                      <span
                        key={teknologi}
                        className="font-bold text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 uppercase tracking-wide"
                        style={{ background: proyek.bgColor, border: `2px solid ${proyek.color}`, color: proyek.color }}
                      >
                        {teknologi}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); setDipilih(proyek) }}
                      className="btn-comic py-1.5 sm:py-2 px-3 sm:px-4"
                      style={{ fontSize: '0.7rem' }}
                    >
                      VIEW CASE
                    </button>
                    <a
                      href={proyek.demo}
                      onClick={(e) => e.stopPropagation()}
                      className="btn-comic-outline py-1.5 sm:py-2 px-3 sm:px-4"
                      style={{ fontSize: '0.7rem' }}
                    >
                      OPEN →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10"
        >
          <a
            href="https://github.com/rizki-habibi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-comic-blue inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
            LIHAT LEBIH BANYAK DI GITHUB
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {dipilih && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
            style={{ background: 'rgba(0,0,0,0.85)' }}
            onClick={() => setDipilih(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -3, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotate: 3, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto comic-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="flex items-center justify-between px-4 sm:px-6 py-3 border-b-3 border-comic-black sticky top-0 z-10"
                style={{ background: dipilih.color, borderBottom: '3px solid #0a0a0a' }}
              >
                <span className="font-comic text-white text-base sm:text-xl">PROJECT #{dipilih.num} -- CASE FILE</span>
                <button onClick={() => setDipilih(null)} className="text-white hover:text-comic-yellow transition-colors p-1">
                  <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="relative h-40 sm:h-52 border-b-3 border-comic-black" style={{ borderBottom: '3px solid #0a0a0a', background: dipilih.bgColor }}>
                {dipilih.image ? (
                  <Image src={dipilih.image} alt={dipilih.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FiFolder className="w-16 h-16 sm:w-20 sm:h-20" style={{ color: dipilih.color }} />
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                <h2 className="font-comic text-2xl sm:text-3xl text-comic-black">{dipilih.title}</h2>
                <p className="text-xs sm:text-sm text-comic-black/70 leading-relaxed">{dipilih.description}</p>
                {[
                  { label: '❓ PROBLEM', text: dipilih.problem, bg: '#fef2f2', border: '#e63329' },
                  { label: '💡 SOLUTION', text: dipilih.solution, bg: '#f0fdf4', border: '#22c55e' },
                  { label: '🏆 RESULT', text: dipilih.result, bg: '#fffbeb', border: '#f59e0b' },
                ].map((butir) => (
                  <div key={butir.label} className="p-3 sm:p-4 border-2" style={{ background: butir.bg, borderColor: butir.border, boxShadow: `3px 3px 0 ${butir.border}` }}>
                    <div className="font-comic text-xs sm:text-sm mb-1" style={{ color: butir.border }}>{butir.label}</div>
                    <p className="text-xs sm:text-sm text-comic-black">{butir.text}</p>
                  </div>
                ))}
                <div>
                  <div className="font-comic text-sm mb-2 text-comic-black">🛠️ TEKNOLOGI</div>
                  <div className="flex flex-wrap gap-2">
                    {dipilih.tech.map((teknologi) => (
                      <span key={teknologi} className="font-bold text-xs px-2 sm:px-3 py-1 border-2"
                        style={{ background: dipilih.bgColor, borderColor: dipilih.color, color: dipilih.color }}>
                        {teknologi}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={dipilih.demo} className="btn-comic text-xs sm:text-sm py-2 px-4 sm:px-5">OPEN PROJECT →</a>
                  <a href={dipilih.github} className="btn-comic-outline text-xs sm:text-sm py-2 px-4 sm:px-5 flex items-center gap-2">
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
