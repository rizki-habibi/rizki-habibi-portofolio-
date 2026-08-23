'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

const faqData = [
  {
    id: 1,
    pertanyaan: 'Layanan apa saja yang kamu tawarkan?',
    jawaban: 'Saya menerima jasa pembuatan website (company profile, e-commerce, sistem informasi), pengembangan REST API, konsultasi sistem, dan maintenance. Stack utama: Laravel, Next.js, PHP, MySQL, Tailwind CSS.',
    icon: '🛠️',
    warna: '#1a5cff',
    bg: '#e8f0ff',
    kategori: 'LAYANAN',
  },
  {
    id: 2,
    pertanyaan: 'Berapa lama waktu pengerjaan proyek?',
    jawaban: 'Tergantung kompleksitas proyek. Landing page sederhana: 3-5 hari. Sistem informasi lengkap: 2-4 minggu. REST API + dokumentasi: 1-2 minggu. Setiap proyek didiskusikan terlebih dahulu untuk estimasi yang akurat.',
    icon: '⏱️',
    warna: '#f59e0b',
    bg: '#fffbeb',
    kategori: 'PROYEK',
  },
  {
    id: 3,
    pertanyaan: 'Apakah kamu tersedia untuk kerja freelance/part-time?',
    jawaban: 'Ya! Saya terbuka untuk proyek freelance, part-time remote, maupun kolaborasi. Saat ini sedang menyelesaikan skripsi namun tetap aktif menerima proyek. Hubungi saya via WhatsApp atau email untuk diskusi lebih lanjut.',
    icon: '💼',
    warna: '#22c55e',
    bg: '#f0fdf4',
    kategori: 'KOLABORASI',
  },
  {
    id: 4,
    pertanyaan: 'Teknologi apa yang paling kamu kuasai?',
    jawaban: 'Terkuat di ekosistem PHP/Laravel untuk backend, dan Next.js/React untuk frontend. Database utama MySQL. Untuk UI menggunakan Tailwind CSS. Juga berpengalaman dengan IoT (ESP32, Arduino) dan memiliki dasar AI/ML.',
    icon: '⚡',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    kategori: 'SKILL',
  },
  {
    id: 5,
    pertanyaan: 'Apa itu Gelar.id yang sering disebut?',
    jawaban: 'Gelar.id (Kampus Virtual Tuber) adalah platform edukasi digital yang sedang saya bangun — menggabungkan konsep Vtuber dengan sistem pembelajaran online. Targetnya menjadi ekosistem kampus digital pertama di Indonesia dengan sertifikasi berbasis kompetensi.',
    icon: '🌐',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    kategori: 'KVT',
  },
  {
    id: 6,
    pertanyaan: 'Bagaimana cara menghubungi kamu untuk proyek?',
    jawaban: 'Cara tercepat: WhatsApp ke +62 882-009-725-053. Bisa juga via email rizkihub7@gmail.com. Biasanya saya merespon dalam 1-3 jam di hari kerja. Untuk proyek, kita mulai dengan konsultasi singkat gratis untuk memahami kebutuhan.',
    icon: '📞',
    warna: '#e63329',
    bg: '#fef2f2',
    kategori: 'KONTAK',
  },
  {
    id: 7,
    pertanyaan: 'Apakah kamu punya sertifikasi resmi?',
    jawaban: 'Ya! Saya memiliki sertifikasi BNSP (Badan Nasional Sertifikasi Profesi) sebagai Junior Web Developer dari LSP Teknologi Digital Yogyakarta tahun 2025. Selain itu, lebih dari 75 sertifikat pelatihan dari Digital Talent Scholarship Kominfo.',
    icon: '🏆',
    warna: '#f59e0b',
    bg: '#fffbeb',
    kategori: 'SERTIFIKASI',
  },
  {
    id: 8,
    pertanyaan: 'Apakah kode/proyek yang dibuat akan diberikan source code-nya?',
    jawaban: 'Ya, untuk proyek custom client akan mendapatkan full source code beserta dokumentasi dasar. Saya juga menyediakan sesi handover untuk memastikan Anda bisa mengelola sistem setelah selesai.',
    icon: '💻',
    warna: '#0891b2',
    bg: '#ecfeff',
    kategori: 'PROYEK',
  },
  {
    id: 9,
    pertanyaan: 'Ada jasa gratis apa saja yang kamu tawarkan?',
    jawaban: 'Saya membuka 3 jasa gratis: (1) Curhat & Konsultasi — chat bebas topik via WA/Discord/Telegram. (2) Website Gratis untuk Vtuber & Instansi Berdampak — personal Vtuber, komunitas, LSM, atau sekolah bisa dapat website gratis termasuk subdomain gelar.id. (3) Kerjasama Antar Komunitas — kolaborasi event, proyek digital, atau diskusi grup bersama. Syaratnya cuma satu: bagikan portofolio ini ke minimal 3 teman!',
    icon: '🎁',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    kategori: 'LAYANAN',
  },
  {
    id: 10,
    pertanyaan: 'Aku Vtuber, bisa dapat website gratis?',
    jawaban: 'Bisa banget! Saya terbuka untuk membantu Vtuber (baik yang sudah debut maupun yang mau debut) memiliki website personal — portfolio, bio, sosial media link, jadwal stream, dan galeri. Desain bisa disesuaikan dengan karakter Vtubermu. Bisa juga dapat subdomain gelar.id secara gratis. Syaratnya: bagikan portofolio ini ke teman-temanmu, lalu hubungi saya.',
    icon: '🎭',
    warna: '#e1306c',
    bg: '#fff0f5',
    kategori: 'LAYANAN',
  },
  {
    id: 11,
    pertanyaan: 'Di mana saya bisa lihat semua link / kontak Rizki?',
    jawaban: 'Semua link lengkap ada di berbagi-tautan-rizki.vercel.app — mirip seperti Linktree. Di sana ada GitHub, Instagram, LinkedIn, WhatsApp, Email, dan link-link lainnya dalam satu halaman yang rapi.',
    icon: '🔗',
    warna: '#f59e0b',
    bg: '#fffbeb',
    kategori: 'KONTAK',
  },
]

const kategoriList = ['SEMUA', 'LAYANAN', 'PROYEK', 'SKILL', 'KOLABORASI', 'KVT', 'KONTAK', 'SERTIFIKASI']

export default function FaqComic() {
  const [terbuka, setTerbuka] = useState<number | null>(1)
  const [filterKat, setFilterKat] = useState('SEMUA')

  const faqTersaring = filterKat === 'SEMUA'
    ? faqData
    : faqData.filter(f => f.kategori === filterKat)

  return (
    <section id="faq" className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <HeaderBab nomor="FAQ" judul="FAQ — PERTANYAAN UMUM" warna="#f59e0b" subtitle="🤔 Semua pertanyaan umum terjawab di sini!" />

        {/* Filter kategori */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8"
        >
          {kategoriList.map((kat) => (
            <button
              key={kat}
              onClick={() => setFilterKat(kat)}
              className="font-comic text-[9px] sm:text-[10px] px-2.5 sm:px-3 py-1.5 transition-all"
              style={{
                background: filterKat === kat ? '#0a0a0a' : 'white',
                color: filterKat === kat ? '#ffd700' : '#0a0a0a',
                border: '2px solid #0a0a0a',
                boxShadow: filterKat === kat ? '3px 3px 0 #ffd700' : '2px 2px 0 #0a0a0a',
              }}
            >
              {kat}
            </button>
          ))}
        </motion.div>

        {/* Accordion FAQ */}
        <div className="space-y-3 sm:space-y-4">
          {faqTersaring.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.1 }}
              className="overflow-hidden"
              style={{
                border: `3px solid ${terbuka === faq.id ? faq.warna : '#0a0a0a'}`,
                boxShadow: terbuka === faq.id ? `5px 5px 0 ${faq.warna}` : '4px 4px 0 #0a0a0a',
                background: 'white',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
            >
              {/* Header pertanyaan */}
              <button
                onClick={() => setTerbuka(terbuka === faq.id ? null : faq.id)}
                className="w-full flex items-center gap-3 p-3 sm:p-4 text-left group"
                style={{ background: terbuka === faq.id ? faq.bg : 'white', transition: 'background 0.2s' }}
              >
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl flex-shrink-0"
                  style={{ background: terbuka === faq.id ? faq.warna : '#f0f0eb', border: '2px solid #0a0a0a' }}
                >
                  {faq.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold tracking-widest mb-0.5 opacity-50" style={{ color: faq.warna }}>
                    {faq.kategori}
                  </div>
                  <p className="font-bold text-xs sm:text-sm text-comic-black leading-snug">{faq.pertanyaan}</p>
                </div>
                <motion.div
                  animate={{ rotate: terbuka === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 flex items-center justify-center font-comic text-base flex-shrink-0"
                  style={{
                    background: terbuka === faq.id ? faq.warna : '#0a0a0a',
                    color: 'white',
                    border: '2px solid #0a0a0a',
                  }}
                >
                  +
                </motion.div>
              </button>

              {/* Jawaban */}
              <AnimatePresence>
                {terbuka === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="px-3 sm:px-4 pb-4 pt-2"
                      style={{ background: faq.bg, borderTop: `2px solid ${faq.warna}30` }}
                    >
                      <div
                        className="p-3 sm:p-4 relative"
                        style={{ background: 'white', border: `2px solid ${faq.warna}`, boxShadow: `3px 3px 0 ${faq.warna}` }}
                      >
                        <div
                          className="absolute -top-2 left-4 font-comic text-[9px] text-white px-2 py-0.5"
                          style={{ background: faq.warna, border: `1px solid ${faq.warna}` }}
                        >
                          JAWABAN
                        </div>
                        <p className="text-xs sm:text-sm text-comic-black leading-relaxed font-medium mt-1">{faq.jawaban}</p>
                      </div>

                      {/* CTA kecil untuk FAQ kontak */}
                      {faq.kategori === 'KONTAK' && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          <a
                            href="https://wa.me/62882009725053"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-comic text-[10px] sm:text-xs py-1.5 px-3 sm:px-4"
                          >
                            💬 WHATSAPP SEKARANG
                          </a>
                          <a
                            href="mailto:rizkihub7@gmail.com"
                            className="btn-comic-outline text-[10px] sm:text-xs py-1.5 px-3 sm:px-4"
                          >
                            ✉️ KIRIM EMAIL
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 comic-panel-yellow p-4 sm:p-6 text-center"
        >
          <div className="font-comic text-lg sm:text-xl text-comic-black mb-2">
            ❓ Pertanyaanmu belum terjawab?
          </div>
          <p className="text-xs sm:text-sm text-comic-black/70 mb-4 font-bold">
            Langsung hubungi saya — saya akan dengan senang hati membantu!
          </p>
          <a
            href="#contact"
            className="btn-comic-blue inline-flex items-center gap-2 text-sm sm:text-base"
          >
            📬 HUBUNGI SAYA
          </a>
        </motion.div>
      </div>
    </section>
  )
}
