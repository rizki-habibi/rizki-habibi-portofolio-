'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import HeaderBab from '@/components/HeaderBab'

function PanelBab({ id, num, judul, warna, bg, gelap = false, children }: {
  id: string; num: string; judul: string; warna: string; bg: string; gelap?: boolean; children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden"
      style={{ background: gelap ? '#0a0a0a' : bg }}>
      {gelap ? <div className="halftone-yellow" /> : <div className="halftone-bg" />}
      <div className="max-w-6xl mx-auto relative z-10">
        <HeaderBab nomor={num} judul={judul} warna={gelap ? '#ffd700' : warna} gelap={gelap} />
        {children}
      </div>
    </section>
  )
}

/* ─── Ch191: ROADMAP EKSEKUSI — KAPAN & BAGAIMANA ─── */
function Ch191() {
  const fase = [
    {
      fase: 'FASE 1', label: '2026 Q3-Q4', warna: '#22c55e', icon: '🌱',
      fokus: 'Foundation & Quick Wins',
      inovasi: ['#200 KVT.kom platform launch', '#10 Coding competition platform', '#31 Aplikasi laporan warga', '#60 Sistem presensi IoT sekolah', '#80 AI deteksi hoaks lokal'],
      prinsip: 'Pilih inovasi yang bisa jalan dalam 1-3 bulan dengan resource yang ada. Validasi asumsi sejak awal.',
    },
    {
      fase: 'FASE 2', label: '2027 Q1-Q2', warna: '#1a5cff', icon: '⚡',
      fokus: 'Scale & Expand',
      inovasi: ['#1 KVT.kom AI Tutor launch', '#26 Website Desa SaaS beta', '#51 Smart kandang ternak pilot', '#101 Dompet digital warung beta', '#130 Sistem rujukan pasien digital'],
      prinsip: 'Iterasi cepat dari feedback Fase 1. Mulai bangun tim dan komunitas. Cari partner strategis.',
    },
    {
      fase: 'FASE 3', label: '2027 Q3-Q4', warna: '#8b5cf6', icon: '🚀',
      fokus: 'Impact & Revenue',
      inovasi: ['#76 Deteksi penyakit tanaman AI', '#28 Platform donasi transparan', '#103 Pinjaman mikro berbasis data', '#151 Deploy platform Indonesia', '#176 Platform komik digital'],
      prinsip: 'Model bisnis yang sustainable. Dampak terukur. Revenue untuk mendanai inovasi berikutnya.',
    },
    {
      fase: 'FASE 4', label: '2028-2030', warna: '#ffd700', icon: '🌟',
      fokus: 'Legacy & Ecosystem',
      inovasi: ['#167 Edge function platform lokal', '#191 Virtual Museum Nusantara', '#144 Voluntary carbon market', '#110 Crowdinvesting properti daerah', '#200+ inovasi baru yang belum terbayangkan'],
      prinsip: 'Bangun ekosistem, bukan hanya produk. Dokumentasi, open source, dan bagi ilmu ke generasi berikutnya.',
    },
  ]

  return (
    <PanelBab id="ch191" num="191" judul="ROADMAP EKSEKUSI — KAPAN & BAGAIMANA MULAI" warna="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">
        🗺️ 200 inovasi tidak dibangun sekaligus. Ini adalah roadmap realistis dalam 4 fase selama 4 tahun ke depan!
      </div>
      <div className="relative">
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-500 via-purple-500 to-yellow-400" />
        <div className="space-y-6">
          {fase.map((f, i) => (
            <motion.div key={f.fase}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, type: 'spring' }}
              viewport={{ once: false }}
              className="flex gap-4 pl-14 sm:pl-16 relative">
              <motion.div
                className="absolute left-3 sm:left-5 top-4 w-7 h-7 flex items-center justify-center text-base"
                style={{ background: f.warna, border: '3px solid #0a0a0a', zIndex: 2 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}>
                {f.icon}
              </motion.div>
              <div className="flex-1 p-4" style={{ border: `3px solid ${f.warna}`, boxShadow: `5px 5px 0 ${f.warna}`, background: 'white' }}>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-comic text-lg" style={{ color: f.warna }}>{f.fase}</span>
                  <span className="font-bold text-[9px] text-white px-2 py-0.5" style={{ background: f.warna }}>{f.label}</span>
                  <span className="font-bold text-xs text-[#0a0a0a]/60">{f.fokus}</span>
                </div>
                <div className="mb-2">
                  <div className="font-bold text-[9px] text-[#0a0a0a]/40 mb-1 uppercase tracking-wide">Inovasi Prioritas:</div>
                  <div className="flex flex-wrap gap-1">
                    {f.inovasi.map(iv => (
                      <span key={iv} className="font-mono text-[8px] px-1.5 py-0.5"
                        style={{ background: `${f.warna}18`, color: f.warna, border: `1px solid ${f.warna}40` }}>
                        {iv}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] font-bold text-[#0a0a0a]/50 italic">&ldquo;{f.prinsip}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* ─── Ch192: KOLABORASI YANG DIBUTUHKAN ─── */
function Ch192() {
  const [aktif, setAktif] = useState<number | null>(null)
  const kolaborator = [
    {
      tipe: 'Co-Founder Teknis', icon: '👨‍💻', warna: '#1a5cff',
      kriteria: 'Full-stack developer atau engineer dengan pengalaman 3+ tahun, passion untuk dampak sosial, dan mau kerja lean startup',
      kontribusi: 'Bantu build MVP lebih cepat, bagi tanggung jawab teknis, dan jadi sparring partner dalam keputusan arsitektur',
    },
    {
      tipe: 'Business Developer', icon: '📊', warna: '#22c55e',
      kriteria: 'Paham ekosistem startup Indonesia, punya jaringan ke UMKM/pemerintah daerah, dan bisa buka pintu ke pasar',
      kontribusi: 'Validasi bisnis, cari customer pertama, kelola partnership, dan bantu pitch ke investor',
    },
    {
      tipe: 'Mentor Senior Dev', icon: '🧙‍♂️', warna: '#8b5cf6',
      kriteria: 'Senior developer atau tech lead dengan 8+ tahun pengalaman, terutama di scaling produk dan arsitektur sistem',
      kontribusi: 'Code review, arsitektur advice, koneksi ke network developer senior, dan guidance hindari jebakan umum',
    },
    {
      tipe: 'Investor / Sponsor', icon: '💰', warna: '#f59e0b',
      kriteria: 'Angel investor atau perusahaan yang align dengan visi teknologi untuk dampak sosial Indonesia',
      kontribusi: 'Modal untuk hire developer pertama, server cost, dan operasional. Tidak hanya uang — network dan credibility',
    },
    {
      tipe: 'Partner Pemerintah', icon: '🏛️', warna: '#e63329',
      kriteria: 'Dinas atau OPD di level kabupaten/kota yang mau pilot project digitalisasi layanan publik bersama',
      kontribusi: 'Akses data, legitimasi, dan pengguna nyata dari hari pertama. Validasi produk di kondisi dunia nyata',
    },
    {
      tipe: 'Komunitas Developer', icon: '🌐', warna: '#0891b2',
      kriteria: 'Komunitas developer aktif di Indonesia yang mau ikut kontribusi ke proyek open source dalam ekosistem ini',
      kontribusi: 'Kontribusi kode, testing, feedback, dan spread the word ke developer lain yang satu visi',
    },
  ]
  return (
    <PanelBab id="ch192" num="192" judul="SIAPA YANG DIAJAK BERKOLABORASI?" warna="#1a5cff" bg="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🤝 200 inovasi tidak bisa dibangun sendirian. Ini adalah undangan terbuka untuk siapa pun yang mau ikut!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {kolaborator.map((k, i) => (
          <motion.div key={k.tipe}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            viewport={{ once: false }}
            onClick={() => setAktif(aktif === i ? null : i)}
            className="cursor-pointer"
            style={{ border: `3px solid ${k.warna}`, boxShadow: `4px 4px 0 ${k.warna}`, background: aktif === i ? k.warna : 'white', overflow: 'hidden' }}>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <motion.span className="text-2xl"
                  animate={{ rotate: aktif === i ? 15 : 0 }}
                  transition={{ type: 'spring' }}>{k.icon}</motion.span>
                <span className="font-comic text-sm" style={{ color: aktif === i ? 'white' : k.warna }}>{k.tipe}</span>
              </div>
              <motion.div initial={false} animate={{ height: aktif === i ? 'auto' : 0, opacity: aktif === i ? 1 : 0 }}
                transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                <div className="mb-2">
                  <div className="font-bold text-[9px] text-white/70 uppercase mb-1">Kriteria:</div>
                  <p className="text-xs text-white/85 font-bold leading-relaxed">{k.kriteria}</p>
                </div>
                <div>
                  <div className="font-bold text-[9px] text-white/70 uppercase mb-1">Kontribusi:</div>
                  <p className="text-xs text-white/85 font-bold leading-relaxed">{k.kontribusi}</p>
                </div>
              </motion.div>
              {aktif !== i && <p className="text-[9px] font-bold mt-1" style={{ color: `${k.warna}80` }}>▼ klik untuk detail</p>}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="mt-8 p-5 text-center comic-panel">
        <div className="font-comic text-xl text-[#0a0a0a] mb-2">📩 TERTARIK BERKOLABORASI?</div>
        <p className="text-sm font-bold text-[#0a0a0a]/70 mb-4">Reach out lewat channel yang tersedia. Semua jenis kolaborasi disambut — dari feedback sederhana sampai co-found penuh!</p>
        <a href="#contact" className="btn-comic">HUBUNGI SEKARANG →</a>
      </motion.div>
    </PanelBab>
  )
}

export default function ChaptersGroup24() {
  return (
    <>
      <div className="comic-divider" />
      <Ch191 />
      <div className="comic-divider" />
      <Ch192 />
    </>
  )
}
