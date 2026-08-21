'use client'

import { motion } from 'framer-motion'
import { FiTool, FiCpu, FiWifi, FiBox, FiArrowRight } from 'react-icons/fi'
import HeaderBab from '@/components/HeaderBab'

const inovasiItems = [
  {
    id: 1,
    emoji: '🔧',
    judul: 'Alat Monitoring Berbahan Daur Ulang',
    deskripsi: 'Merancang dan membangun alat monitoring fungsional dari komponen bekas — mengubah bahan tidak terpakai menjadi perangkat berguna dengan sentuhan teknologi.',
    detail: [
      'Merakit sirkuit monitoring dari komponen elektronik bekas',
      'Membuat casing alat dari bahan limbah yang dimodifikasi',
      'Mengintegrasikan sensor ke sistem berbasis microcontroller',
      'Uji coba dan kalibrasi alat hingga siap pakai',
    ],
    color: '#22c55e',
    bg: '#f0fdf4',
    icon: FiTool,
  },
  {
    id: 2,
    emoji: '🌡️',
    judul: 'Sistem Monitoring Sensor IoT',
    deskripsi: 'Membuat sistem monitoring berbasis IoT untuk memantau parameter lingkungan (suhu, kelembaban) secara real-time dengan komponen hemat biaya.',
    detail: [
      'Pemrograman microcontroller (Arduino/ESP8266/ESP32)',
      'Integrasi sensor DHT, ultrasonic, IR, dan lainnya',
      'Dashboard monitoring berbasis web secara real-time',
      'Notifikasi otomatis bila parameter melewati batas',
    ],
    color: '#1a5cff',
    bg: '#e8f0ff',
    icon: FiCpu,
  },
  {
    id: 3,
    emoji: '♻️',
    judul: 'Transformasi Bahan Baku → Alat Guna',
    deskripsi: 'Keahlian unik mengidentifikasi potensi bahan tidak terpakai, lalu merekayasa ulang menjadi alat dengan fungsi nyata dan nilai guna tinggi.',
    detail: [
      'Analisis kelayakan material bekas untuk dijadikan alat',
      'Desain prototipe dengan prinsip engineering sederhana',
      'Pengujian fungsionalitas dan keamanan alat',
      'Dokumentasi proses pembuatan dan spesifikasi teknis',
    ],
    color: '#f59e0b',
    bg: '#fffbeb',
    icon: FiBox,
  },
  {
    id: 4,
    emoji: '🌐',
    judul: 'Integrasi Perangkat Fisik + Software',
    deskripsi: 'Menggabungkan dunia hardware dengan software — membangun solusi end-to-end dari sensor fisik hingga visualisasi data di web.',
    detail: [
      'Komunikasi serial/wireless antara hardware dan server',
      'API backend untuk menerima dan menyimpan data sensor',
      'Frontend dashboard interaktif untuk visualisasi data',
      'Laporan otomatis berbasis data historis sensor',
    ],
    color: '#8b5cf6',
    bg: '#f5f0ff',
    icon: FiWifi,
  },
]

const keunggulan = [
  '⚡ Berpikir lintas disiplin: software + hardware',
  '🔬 Rekayasa ulang bahan tidak terpakai',
  '💡 Inovatif dalam keterbatasan sumber daya',
  '📡 Pengalaman IoT & monitoring real-time',
  '🛠️ Hands-on dari prototyping hingga produk jadi',
  '📊 Visualisasi data sensor ke dashboard web',
]

export default function Innovation() {
  return (
    <section id="inovasi" className="py-20 px-4 relative overflow-hidden" style={{ background: '#f0f0eb' }}>
      <div className="halftone-blue" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Chapter Header */}
        <HeaderBab nomor="07" judul="REKAYASA &amp; INOVASI" warna="#22c55e" subtitle="♻️ Inovasi dari keterbatasan, solusi dari kreativitas" />

        {/* Keunggulan pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {keunggulan.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 bg-white font-bold text-sm text-comic-black cursor-default"
              style={{ border: '2px solid #22c55e', boxShadow: '3px 3px 0 #22c55e' }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* Inovasi grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {inovasiItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
              className="overflow-hidden"
              style={{
                border: `3px solid ${item.color}`,
                boxShadow: `5px 5px 0 ${item.color}`,
                background: 'white',
              }}
            >
              {/* Top bar */}
              <div className="px-5 py-3 flex items-center gap-3" style={{ background: item.color, borderBottom: '3px solid #0a0a0a' }}>
                <item.icon className="w-5 h-5 text-white" />
                <span className="font-comic text-white text-lg">{item.judul}</span>
              </div>

              <div className="p-5" style={{ background: item.bg }}>
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                  <motion.p
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    viewport={{ once: false }}
                    className="text-sm text-comic-black leading-relaxed"
                  >
                    {item.deskripsi}
                  </motion.p>
                </div>

                <ul className="space-y-2 pl-2" style={{ borderLeft: `3px solid ${item.color}` }}>
                  {item.detail.map((d, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.07 }}
                      viewport={{ once: false }}
                      className="flex items-start gap-2 text-xs font-bold text-comic-black/70"
                    >
                      <FiArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                      {d}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="comic-panel-dark p-8 md:p-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: false }}
            className="text-4xl mb-4"
          >
            ♻️
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: false }}
            className="font-bold text-white text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-4"
          >
            &quot;Inovasi sejati bukan hanya soal menulis kode — tapi tentang{' '}
            <span className="text-comic-yellow">melihat potensi di balik bahan yang dianggap tidak berguna</span>{' '}
            dan mengubahnya menjadi solusi nyata yang berdampak.&quot;
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
            className="text-white/50 text-sm font-bold"
          >
            — Rizki Habibi, Web Developer &amp; Innovator
          </motion.p>
          <div className="flex justify-center gap-8 mt-6">
            {[
              { num: '3+', label: 'Alat Dibuat', color: '#22c55e' },
              { num: 'IoT', label: 'Integrasi', color: '#1a5cff' },
              { num: '♻️', label: 'Daur Ulang', color: '#f59e0b' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.07, type: 'spring', stiffness: 150 }}
                viewport={{ once: false }}
                className="flex flex-col items-center gap-1"
              >
                <span className="font-comic text-2xl" style={{ color: s.color }}>{s.num}</span>
                <span className="text-xs text-white/40 font-bold uppercase tracking-wide">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
