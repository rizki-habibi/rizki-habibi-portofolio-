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

/* Ch281 — ANATOMI STARTUP INDONESIA */
function Ch281() {
  const fase = [
    { fase: 'Pre-seed', deskripsi: 'Ide masih di kepala atau paper. Validasi problem, cari co-founder, bangun MVP dalam 30-90 hari.', modal: 'Bootstrap atau FFF (Friends, Family, Fools)', penting: 'Validasi, bukan build!', warna: '#22c55e', icon: '🌱' },
    { fase: 'Seed', deskripsi: 'MVP ada, beberapa pengguna awal, traction mulai kelihatan. Cari seed investor untuk grow lebih cepat.', modal: 'Angel investor, pre-seed VC, Rp 500JT-5M', penting: 'Product-market fit', warna: '#1a5cff', icon: '🌿' },
    { fase: 'Series A', deskripsi: 'Revenue ada, model bisnis terbukti, team solid. Scale dengan investor institusional.', modal: 'VC regional, $1M-10M', penting: 'Unit economics sehat', warna: '#8b5cf6', icon: '🌳' },
    { fase: 'Series B+', deskripsi: 'Market leader atau challenger di vertikal tertentu. Ekspansi ke kota/negara baru.', modal: '$10M+, SoftBank, Sequoia regional', penting: 'Dominant market position', warna: '#f59e0b', icon: '🏢' },
    { fase: 'Exit/IPO', deskripsi: 'Akuisisi oleh player besar atau IPO di bursa. Fase yang paling dituju — tapi bukan satu-satunya definisi sukses.', modal: 'Pasar modal atau M&A', penting: 'Nilai yang diciptakan', warna: '#e63329', icon: '🚀' },
  ]
  return (
    <PanelBab id="ch281" num="281" judul="ANATOMI STARTUP — DARI IDE KE UNICORN" warna="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">
        🦄 Indonesia sudah punya 10+ unicorn. Semuanya dimulai dari garasi, kos-kosan, atau kedai kopi dengan satu laptop dan satu masalah yang ingin dipecahkan!
      </div>
      <div className="space-y-4 mb-8">
        {fase.map((f, i) => (
          <motion.div key={f.fase}
            initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            style={{ border: `3px solid ${f.warna}`, boxShadow: `5px 5px 0 ${f.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-3 px-4 py-2" style={{ background: f.warna }}>
              <span className="text-2xl">{f.icon}</span>
              <span className="font-comic text-sm text-white">{f.fase}</span>
              <span className="ml-auto font-bold text-[9px] bg-white/30 text-white px-2 py-0.5">{f.penting}</span>
            </div>
            <div className="p-3 grid sm:grid-cols-2 gap-3">
              <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{f.deskripsi}</p>
              <div>
                <div className="font-bold text-[9px] text-[#0a0a0a]/40 mb-1">SUMBER MODAL TIPIKAL:</div>
                <p className="text-[9px] font-bold text-[#0a0a0a]/60">{f.modal}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

/* Ch282 — TECH STACK UNTUK STARTUP */
function Ch282() {
  const [tab, setTab] = useState(0)
  const stacks = [
    {
      nama: 'Lean Stack', cocok: 'MVP & Pre-seed', icon: '⚡',
      frontend: 'Next.js + Tailwind', backend: 'Laravel API / Node.js', db: 'MySQL / SQLite', infra: 'Vercel + Shared Hosting',
      biaya: 'Rp 0-500rb/bulan', alasan: 'Cepat build, mudah deploy, biaya minimal. Fokus pada validasi, bukan optimasi.',
    },
    {
      nama: 'Growth Stack', cocok: 'Seed-Series A', icon: '🚀',
      frontend: 'Next.js + React Native', backend: 'Laravel + Microservice', db: 'MySQL + Redis', infra: 'DigitalOcean / Railway',
      biaya: 'Rp 500rb-5jt/bulan', alasan: 'Mulai pisahkan concern, mobile-ready, cache untuk performa. Masih manageable.',
    },
    {
      nama: 'Scale Stack', cocok: 'Series A+', icon: '🏢',
      frontend: 'Next.js + React Native', backend: 'Microservices + Kubernetes', db: 'PostgreSQL + MongoDB + Redis', infra: 'AWS / GCP',
      biaya: 'Rp 5jt+/bulan', alasan: 'Auto-scaling, redundancy, monitoring enterprise. Untuk ribuan concurrent users.',
    },
  ]
  return (
    <PanelBab id="ch282" num="282" judul="TECH STACK STARTUP — PILIH YANG TEPAT PER FASE" warna="#1a5cff" bg="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🔧 Stack yang bagus bukan yang paling canggih — tapi yang paling sesuai dengan fase dan tim yang ada sekarang!
      </div>
      <div className="flex gap-2 mb-6">
        {stacks.map((s, i) => (
          <motion.button key={s.nama}
            className="flex-1 px-3 py-2 font-comic text-xs flex flex-col items-center gap-1"
            style={{
              background: tab === i ? '#1a5cff' : 'white',
              color: tab === i ? 'white' : '#0a0a0a80',
              border: `3px solid ${tab === i ? '#0a0a0a' : '#1a5cff50'}`,
              boxShadow: tab === i ? '3px 3px 0 #0a0a0a' : 'none',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTab(i)}>
            <span className="text-lg">{s.icon}</span>
            <span>{s.nama}</span>
          </motion.button>
        ))}
      </div>
      <motion.div key={tab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring' }}
        className="grid sm:grid-cols-2 gap-4">
        <div className="p-4" style={{ border: '3px solid #1a5cff', boxShadow: '5px 5px 0 #1a5cff', background: 'white' }}>
          <div className="font-comic text-base text-[#1a5cff] mb-3">{stacks[tab].icon} {stacks[tab].nama}</div>
          <div className="font-bold text-[9px] text-[#0a0a0a]/40 mb-1">COCOK UNTUK: {stacks[tab].cocok}</div>
          <div className="space-y-2 mt-3">
            {[
              { label: 'Frontend', val: stacks[tab].frontend },
              { label: 'Backend', val: stacks[tab].backend },
              { label: 'Database', val: stacks[tab].db },
              { label: 'Infrastruktur', val: stacks[tab].infra },
              { label: 'Biaya', val: stacks[tab].biaya },
            ].map(row => (
              <div key={row.label} className="flex justify-between text-xs">
                <span className="font-bold text-[#0a0a0a]/40">{row.label}</span>
                <span className="font-comic text-[#1a5cff]">{row.val}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 comic-panel-dark">
          <div className="font-comic text-base text-yellow-400 mb-3">💡 KENAPA STACK INI</div>
          <p className="text-sm text-white/70 font-bold leading-relaxed">{stacks[tab].alasan}</p>
        </div>
      </motion.div>
    </PanelBab>
  )
}

/* Ch283 — KESALAHAN UMUM FOUNDER TEKNIS */
function Ch283() {
  const kesalahan = [
    { no: 1, kesalahan: 'Over-engineering dari hari pertama', solusi: 'Build untuk 100 user, bukan 1 juta user. Premature optimization adalah akar dari segala kejahatan.', icon: '⚙️', warna: '#e63329' },
    { no: 2, kesalahan: 'Tidak mau pakai no-code untuk validate', solusi: 'Webflow, Notion, Typeform bisa validate ide dalam 1 hari. Hemat 3 bulan development untuk ide yang salah.', icon: '🚫', warna: '#8b5cf6' },
    { no: 3, kesalahan: 'Coding sendirian tanpa user feedback', solusi: 'Tunjukkan ke 10 orang nyata sebelum selesai. Feedback lebih awal = pivot yang lebih murah.', icon: '🙈', warna: '#1a5cff' },
    { no: 4, kesalahan: 'Fokus pada fitur, bukan masalah', solusi: 'Tanya "masalah apa yang ini selesaikan?" sebelum setiap sprint. Fitur tanpa problem = dead feature.', icon: '🎯', warna: '#f59e0b' },
    { no: 5, kesalahan: 'Tidak punya co-founder atau advisor', solusi: 'Solo founder bisa berhasil, tapi 2-3 orang dengan skill komplementer secara statistik lebih sukses.', icon: '🤝', warna: '#22c55e' },
    { no: 6, kesalahan: 'Runway habis sebelum product-market fit', solusi: 'Hitung burn rate dan runway setiap bulan. Kalau runway < 6 bulan, mode survival: potong semua yang tidak penting.', icon: '💸', warna: '#e63329' },
    { no: 7, kesalahan: 'Tidak tracking metrics yang benar', solusi: 'Definisikan North Star Metric dari hari pertama. Satu angka yang merepresentasikan value untuk user.', icon: '📊', warna: '#0891b2' },
    { no: 8, kesalahan: 'Underpricing karena takut ditolak', solusi: 'Charge lebih dari yang kamu kira pantas. User yang mau bayar mahal adalah user yang paling serius.', icon: '💰', warna: '#f59e0b' },
  ]
  return (
    <PanelBab id="ch283" num="283" judul="8 KESALAHAN FATAL FOUNDER TEKNIS — DAN CARA HINDARINYA" warna="#e63329" bg="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-6">
        ⚠️ Kesalahan ini sudah dibayar mahal oleh ribuan founder sebelummu. Belajar dari mereka jauh lebih murah dari mengulang sendiri!
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {kesalahan.map((k, i) => (
          <motion.div key={k.no}
            initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.07, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            style={{ border: `3px solid ${k.warna}`, boxShadow: `4px 4px 0 ${k.warna}`, background: 'white' }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: k.warna }}>
              <span className="text-xl">{k.icon}</span>
              <span className="font-comic text-xs text-white">#{k.no} {k.kesalahan}</span>
            </div>
            <div className="p-3">
              <div className="font-bold text-[9px] text-[#0a0a0a]/40 mb-1">SOLUSINYA:</div>
              <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{k.solusi}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

/* Ch284 — EKOSISTEM STARTUP INDONESIA */
function Ch284() {
  return (
    <PanelBab id="ch284" num="284" judul="EKOSISTEM STARTUP INDONESIA — PETA LENGKAP" warna="#8b5cf6" bg="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🗺️ Indonesia bukan hanya Jakarta. Ekosistem startup tumbuh di 10+ kota — termasuk Jember dan kota-kota tier 2 lainnya!
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {[
          { kategori: 'Akselerator & Inkubator', items: ['Y Combinator (global, open untuk RI)', 'Plug and Play Indonesia', 'GDP Venture', 'Indigo Telkom', 'KIBAR Kreativa', 'Founders Institute Jakarta'], warna: '#8b5cf6', icon: '🚀' },
          { kategori: 'Venture Capital Lokal', items: ['East Ventures (paling aktif)', 'AC Ventures', 'MDI Ventures', 'Vertex Ventures SEA', 'Iterative (YC backed)', 'Monk\'s Hill Ventures'], warna: '#1a5cff', icon: '💰' },
          { kategori: 'Program Pemerintah', items: ['Startup Studio Indonesia (Kominfo)', 'BPIFAS Program', 'INAICTA Competition', 'Digital Talent Scholarship', 'Gerakan Nasional 1000 Startup', 'DELOS Aquaculture Support'], warna: '#22c55e', icon: '🏛️' },
        ].map((k, i) => (
          <motion.div key={k.kategori}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            style={{ border: `3px solid ${k.warna}`, boxShadow: `5px 5px 0 ${k.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="px-4 py-3 flex items-center gap-2" style={{ background: k.warna }}>
              <span className="text-2xl">{k.icon}</span>
              <span className="font-comic text-sm text-white">{k.kategori}</span>
            </div>
            <div className="p-4 space-y-2">
              {k.items.map((item, j) => (
                <motion.div key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: j * 0.05 }}
                  viewport={{ once: true }}
                  className="flex gap-2 items-center">
                  <span style={{ color: k.warna }}>▶</span>
                  <span className="text-xs font-bold text-[#0a0a0a]/70">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

/* Ch285-290: Revenue Model Starter */
function Ch285to290() {
  const model = [
    { nama: 'SaaS Subscription', contoh: 'KVT.kom Premium Plan', biaya: 'Rp 99K-499K/bulan', kelebihan: 'Recurring revenue, predictable, scalable', icon: '♻️', warna: '#1a5cff' },
    { nama: 'Marketplace Fee', contoh: 'Komisi transaksi platform', biaya: '5-20% per transaksi', kelebihan: 'Revenue sesuai volume, align dengan user success', icon: '🏪', warna: '#22c55e' },
    { nama: 'Freemium', contoh: 'Free basic, premium features', biaya: 'Free + Rp X/bulan upgrade', kelebihan: 'Mudah acquire user, konversi dari value terasa', icon: '🎁', warna: '#8b5cf6' },
    { nama: 'B2B Enterprise', contoh: 'Sistem untuk institusi/perusahaan', biaya: 'Rp 5-50JT/tahun per klien', kelebihan: 'Kontrak panjang, high LTV, referral dari jaringan', icon: '🏢', warna: '#f59e0b' },
    { nama: 'Usage-based', contoh: 'Bayar per API call/per user', biaya: 'Proporsional dengan pemakaian', kelebihan: 'Barrier masuk rendah, grow seiring user growth', icon: '📊', warna: '#e63329' },
    { nama: 'White Label', contoh: 'Jual produk untuk di-rebrand', biaya: 'Rp 10-100JT lisensi', kelebihan: 'No marketing cost, partner jadi sales force', icon: '🏷️', warna: '#0891b2' },
    { nama: 'Training & Consulting', contoh: 'Bootcamp, workshop, konsultasi', biaya: 'Rp 500K-10JT per person/project', kelebihan: 'High margin, build authority, gerbang ke produk', icon: '🎓', warna: '#22c55e' },
    { nama: 'Advertising', contoh: 'Iklan di platform dengan traffic tinggi', biaya: 'CPM atau CPC based', kelebihan: 'Passive, scalable — tapi butuh traffic besar dulu', icon: '📢', warna: '#8b5cf6' },
    { nama: 'Data & Analytics', contoh: 'Jual insight aggregate ke partner', biaya: 'Rp 10-50JT per report/API', kelebihan: 'High margin, leverage dari data yang sudah ada', icon: '📈', warna: '#f59e0b' },
    { nama: 'Hybrid Model', contoh: 'KVT.kom: Freemium + B2B + Training', biaya: 'Multiple stream', kelebihan: 'Resilient, diversified, adaptif ke market condition', icon: '⚡', warna: '#e63329' },
  ]
  return (
    <PanelBab id="ch285" num="285-290" judul="10 MODEL REVENUE STARTUP — MANA YANG COCOK?" warna="#f59e0b" bg="#fffbeb" gelap>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        💰 Revenue model yang salah bisa membunuh startup yang produknya bagus. Pilih yang align dengan value yang kamu deliver!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {model.map((m, i) => (
          <motion.div key={m.nama}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            style={{ border: `3px solid ${m.warna}`, boxShadow: `4px 4px 0 ${m.warna}`, background: '#111', overflow: 'hidden' }}>
            <div className="px-3 py-2" style={{ background: m.warna }}>
              <div className="flex items-center gap-1">
                <span className="text-lg">{m.icon}</span>
                <span className="font-comic text-[10px] text-white leading-tight">{m.nama}</span>
              </div>
            </div>
            <div className="p-3">
              <div className="text-[8px] text-white/40 font-bold mb-1">{m.contoh}</div>
              <div className="font-mono text-[8px] mb-1" style={{ color: m.warna }}>{m.biaya}</div>
              <p className="text-[8px] text-white/60 font-bold leading-relaxed">{m.kelebihan}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup28() {
  return (
    <>
      <div className="comic-divider" />
      <Ch281 />
      <div className="comic-divider" />
      <Ch282 />
      <div className="comic-divider" />
      <Ch283 />
      <div className="comic-divider" />
      <Ch284 />
      <div className="comic-divider" />
      <Ch285to290 />
    </>
  )
}
