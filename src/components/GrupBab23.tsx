'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
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

function HitungNaik({ target, sufiks = '', warna = '#ffd700' }: { target: number; sufiks?: string; warna?: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let v = 0; const step = Math.max(1, target / 80)
    const t = setInterval(() => { v += step; if (v >= target) { setVal(target); clearInterval(t) } else setVal(Math.floor(v)) }, 18)
    return () => clearInterval(t)
  }, [target])
  return <span style={{ color: warna }} className="font-comic">{val.toLocaleString()}{sufiks}</span>
}

/* --- Ch189: REKAP 200 INOVASI — STATISTIK & VISUALISASI --- */
function Ch189() {
  const kategori = [
    { nama: 'Edukasi Digital',        jumlah: 25, warna: '#1a5cff', icon: '🎓', pct: 12.5 },
    { nama: 'Platform & Produk',      jumlah: 25, warna: '#22c55e', icon: '🚀', pct: 12.5 },
    { nama: 'IoT & Smart Tech',       jumlah: 25, warna: '#0891b2', icon: '🔌', pct: 12.5 },
    { nama: 'AI & Machine Learning',  jumlah: 25, warna: '#8b5cf6', icon: '🤖', pct: 12.5 },
    { nama: 'FinTech & Ekonomi',      jumlah: 25, warna: '#f59e0b', icon: '💸', pct: 12.5 },
    { nama: 'Kesehatan & Lingkungan', jumlah: 25, warna: '#e63329', icon: '🌿', pct: 12.5 },
    { nama: 'Developer Tools',        jumlah: 25, warna: '#1a5cff', icon: '🔧', pct: 12.5 },
    { nama: 'Kreatif & Seni',         jumlah: 25, warna: '#f43f5e', icon: '🎨', pct: 12.5 },
  ]
  const statusData = [
    { status: 'AKTIF', jumlah: 28, warna: '#22c55e', desc: 'Sudah berjalan atau dalam pengembangan aktif' },
    { status: 'PROTOTYPE', jumlah: 35, warna: '#f59e0b', desc: 'Prototipe sudah dibuat, sedang diuji' },
    { status: 'RISET', jumlah: 65, warna: '#1a5cff', desc: 'Dalam tahap riset dan validasi konsep' },
    { status: 'KONSEP', jumlah: 52, warna: '#8b5cf6', desc: 'Ide terstruktur, belum mulai eksekusi' },
    { status: 'ROADMAP', jumlah: 14, warna: '#0891b2', desc: 'Sudah masuk roadmap resmi produk' },
    { status: 'MIMPI', jumlah: 6,  warna: '#e63329', desc: 'Visi jangka panjang yang ambisius' },
  ]
  return (
    <PanelBab id="ch189" num="189" judul="REKAP 200 INOVASI — PETA & STATISTIK" warna="#ffd700" bg="#fffbeb" gelap>
      <div className="speech-bubble inline-block text-sm mb-8 text-[#0a0a0a]">
        📊 200 inovasi, 8 kategori, satu visi — menjadi developer yang meninggalkan dampak nyata untuk Indonesia!
      </div>

      {/* Counter besar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Total Inovasi', val: 200, suf: '', w: '#ffd700', icon: '💡' },
          { label: 'Kategori Bidang', val: 8, suf: '', w: '#4ade80', icon: '📂' },
          { label: 'Status Aktif', val: 28, suf: '+', w: '#38bdf8', icon: '⚡' },
          { label: 'Bisa Dimulai Hari Ini', val: 42, suf: '%', w: '#f87171', icon: '🎯' },
        ].map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            className="text-center p-4"
            style={{ border: `3px solid ${s.w}`, boxShadow: `4px 4px 0 ${s.w}`, background: '#111' }}>
            <motion.div className="text-2xl mb-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}>
              {s.icon}
            </motion.div>
            <div className="font-comic text-3xl"><HitungNaik target={s.val} sufiks={s.suf} warna={s.w} /></div>
            <div className="text-xs text-white/40 font-bold mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Breakdown kategori */}
      <div className="mb-8">
        <div className="font-comic text-xl text-yellow-400 mb-4">📂 BREAKDOWN PER KATEGORI</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {kategori.map((k, i) => (
            <motion.div key={k.nama}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07, type: 'spring' }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-3"
              style={{ border: `2px solid ${k.warna}55`, background: `${k.warna}15` }}>
              <span className="text-2xl">{k.icon}</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-comic text-xs" style={{ color: k.warna }}>{k.nama}</span>
                  <span className="font-bold text-xs text-white/60">{k.jumlah} inovasi</span>
                </div>
                <div className="h-2 bg-white/10 overflow-hidden">
                  <motion.div className="h-full"
                    style={{ background: k.warna }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${k.pct * 8}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: i * 0.08 }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Status distribution */}
      <div>
        <div className="font-comic text-xl text-yellow-400 mb-4">🚦 DISTRIBUSI STATUS INOVASI</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {statusData.map((s, i) => (
            <motion.div key={s.status}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, type: 'spring' }}
              viewport={{ once: true }}
              className="p-3 text-center"
              style={{ border: `2px solid ${s.warna}`, background: `${s.warna}18` }}>
              <div className="font-bold text-xs px-2 py-0.5 mb-2 inline-block text-white"
                style={{ background: s.warna }}>{s.status}</div>
              <div className="font-comic text-3xl" style={{ color: s.warna }}>
                <HitungNaik target={s.jumlah} warna={s.warna} />
              </div>
              <p className="text-[9px] text-white/40 font-bold mt-1 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* --- Ch190: DAMPAK YANG DIHARAPKAN --- */
function Ch190() {
  const dampak = [
    { area: 'Pendidikan', target: '100.000 siswa belajar coding gratis via platform edukasi yang dibangun', icon: '🎓', warna: '#1a5cff', tahun: '2028' },
    { area: 'UMKM', target: '10.000 UMKM bertransformasi digital dengan tools yang terjangkau dan mudah digunakan', icon: '🏪', warna: '#22c55e', tahun: '2027' },
    { area: 'Petani', target: '5.000 petani terbantu dengan IoT, AI, dan platform agritech yang real-bisa-diakses', icon: '🌾', warna: '#f59e0b', tahun: '2027' },
    { area: 'Developer', target: '1.000 developer lokal Indonesia naik level berkat tools, komunitas, dan mentoring', icon: '💻', warna: '#8b5cf6', tahun: '2026' },
    { area: 'Kesehatan', target: '50 puskesmas di daerah terpencil terdigitalisasi dengan sistem rekam medis dan telemedicine', icon: '🏥', warna: '#e63329', tahun: '2028' },
    { area: 'Lingkungan', target: '1 juta ton sampah berhasil didaur ulang lewat platform bank sampah digital yang dibangun', icon: '♻️', warna: '#0891b2', tahun: '2030' },
    { area: 'Budaya', target: '10.000 artefak dan 500 lagu daerah terdigitalisasi dan tersimpan permanen untuk generasi mendatang', icon: '🎭', warna: '#f43f5e', tahun: '2029' },
    { area: 'Ekonomi Daerah', target: 'Rp 50 miliar ekonomi digital tercipta di kota-kota kecil lewat ekosistem yang dibangun', icon: '💰', warna: '#ffd700', tahun: '2030' },
  ]
  return (
    <PanelBab id="ch190" num="190" judul="DAMPAK YANG DIHARAPKAN — BILA SEMUA TERWUJUD" warna="#ffd700" bg="#fffbeb">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🌟 Bukan soal berapa banyak inovasi yang dibuat — tapi berapa banyak hidup yang berubah karenanya!
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {dampak.map((d, i) => (
          <motion.div key={d.area}
            initial={{ opacity: 0, rotate: i % 2 === 0 ? -1 : 1, y: 20 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            style={{ border: `3px solid ${d.warna}`, boxShadow: `5px 5px 0 ${d.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="px-4 py-2 flex items-center justify-between"
              style={{ background: d.warna, borderBottom: '2px solid #0a0a0a' }}>
              <div className="flex items-center gap-2">
                <motion.span className="text-xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}>
                  {d.icon}
                </motion.span>
                <span className="font-comic text-sm text-white">{d.area}</span>
              </div>
              <span className="font-bold text-[9px] bg-white/30 text-white px-2 py-0.5">Target {d.tahun}</span>
            </div>
            <p className="p-3 text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{d.target}</p>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel p-5 text-center">
        <div className="font-comic text-2xl text-[#0a0a0a] mb-3">💬 SATU KALIMAT YANG MERANGKUM SEMUANYA</div>
        <motion.p className="text-lg font-bold text-[#0a0a0a]/80 italic leading-relaxed max-w-2xl mx-auto"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}>
          &ldquo;Membangun 200 inovasi bukan berarti selesai 200 — tapi berarti ada 200 peluang untuk membuat satu orang tersenyum, satu masalah terpecahkan, satu komunitas yang lebih baik.&rdquo;
        </motion.p>
        <div className="font-comic text-sm text-[#1a5cff] mt-3">-- Rizki Habibi, Jember 2026</div>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup23() {
  return (
    <>
      <div className="comic-divider" />
      <Ch189 />
      <div className="comic-divider" />
      <Ch190 />
    </>
  )
}
