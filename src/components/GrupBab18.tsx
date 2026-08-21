'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import HeaderBab from '@/components/HeaderBab'

/* ─── Wrapper panel ─── */
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

/* ─── Kartu inovasi ─── */
function KartuInovasi({ no, judul, tag, deskripsi, status, warna, icon }: {
  no: number; judul: string; tag: string; deskripsi: string; status: string; warna: string; icon: string
}) {
  const [buka, setBuka] = useState(false)
  const statusWarna: Record<string, string> = {
    'KONSEP': '#8b5cf6', 'RISET': '#1a5cff', 'PROTOTYPE': '#f59e0b',
    'AKTIF': '#22c55e', 'ROADMAP': '#0891b2', 'MIMPI': '#e63329',
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (no % 10) * 0.04, type: 'spring' }}
      viewport={{ once: false, amount: 0.1 }}
      whileHover={{ y: -4 }}
      onClick={() => setBuka(!buka)}
      className="cursor-pointer p-4"
      style={{ border: `3px solid ${warna}`, boxShadow: `4px 4px 0 ${warna}`, background: 'white' }}>
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="flex items-center gap-2">
          <motion.span className="text-xl" animate={{ rotate: buka ? 15 : 0 }} transition={{ type: 'spring' }}>{icon}</motion.span>
          <span className="font-comic text-sm" style={{ color: warna }}>#{String(no).padStart(3,'0')} {judul}</span>
        </div>
        <span className="font-bold text-[8px] px-1.5 py-0.5 text-white flex-shrink-0"
          style={{ background: statusWarna[status] ?? warna }}>{status}</span>
      </div>
      <span className="font-mono text-[8px] px-1.5 py-0.5 mr-1"
        style={{ background: `${warna}18`, color: warna, border: `1px solid ${warna}40` }}>{tag}</span>
      <motion.div
        initial={false}
        animate={{ height: buka ? 'auto' : 0, opacity: buka ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflow: 'hidden' }}>
        <p className="text-xs font-bold text-[#0a0a0a]/65 leading-relaxed mt-2">{deskripsi}</p>
      </motion.div>
      <p className="text-[9px] text-[#0a0a0a]/30 mt-1 font-bold">{buka ? '▲ tutup' : '▼ baca selengkapnya'}</p>
    </motion.div>
  )
}

/* ─── Ch181: INOVASI EDUKASI (1-25) ─── */
function Ch181() {
  const inovasi = [
    { no:1,  judul:'KVT.kom AI Tutor',       tag:'EdTech · AI',      status:'AKTIF',    warna:'#1a5cff', icon:'🤖', deskripsi:'AI tutor personal yang bisa menjawab pertanyaan coding kapan saja, adaptif terhadap level pemahaman siswa, dan memberikan feedback real-time saat latihan kode.' },
    { no:2,  judul:'Kelas Coding Offline-First', tag:'EdTech · PWA', status:'PROTOTYPE', warna:'#22c55e', icon:'📡', deskripsi:'Platform belajar coding yang bisa diakses tanpa internet sepenuhnya. Materi ter-cache di device, progress sync saat koneksi tersedia. Untuk daerah 3T.' },
    { no:3,  judul:'Gamifikasi Belajar Coding', tag:'EdTech · Game',  status:'RISET',    warna:'#f59e0b', icon:'🎮', deskripsi:'Sistem XP, level, badge, dan leaderboard untuk belajar coding. Setiap modul selesai = item unlock. Quest harian yang memaksa konsistensi belajar.' },
    { no:4,  judul:'Peer Code Review Platform',tag:'EdTech · Social', status:'KONSEP',   warna:'#8b5cf6', icon:'👥', deskripsi:'Siswa saling review kode satu sama lain dengan panduan terstruktur. Membangun kemampuan critical thinking dan komunikasi teknis sejak dini.' },
    { no:5,  judul:'Visualisasi Algoritma 3D', tag:'EdTech · Visualisasi', status:'RISET', warna:'#e63329', icon:'🧊', deskripsi:'Render algoritma sorting, searching, dan struktur data dalam 3D interaktif menggunakan WebGL. Siswa bisa rotate, zoom, dan step-by-step eksekusi.' },
    { no:6,  judul:'Kurikulum Adaptif AI',    tag:'EdTech · AI',      status:'KONSEP',   warna:'#0891b2', icon:'🎯', deskripsi:'Kurikulum yang menyesuaikan urutan materi berdasarkan pola kesalahan siswa. Jika sering salah di array, sistem otomatis memperpanjang modul terkait.' },
    { no:7,  judul:'Coding Bareng Mentor Live',tag:'EdTech · Live',   status:'ROADMAP',  warna:'#22c55e', icon:'🎙️', deskripsi:'Sesi live coding 1-on-1 dengan mentor via video call terintegrasi dengan shared editor. Mentor bisa nulis langsung di kode siswa real-time.' },
    { no:8,  judul:'Sertifikat NFT Belajar',  tag:'EdTech · Web3',    status:'KONSEP',   warna:'#8b5cf6', icon:'🏆', deskripsi:'Sertifikat kelulusan kursus diterbitkan sebagai NFT on-chain yang bisa diverifikasi employer langsung, tidak bisa dipalsukan.' },
    { no:9,  judul:'Microlearning 5 Menit',   tag:'EdTech · Mobile',  status:'PROTOTYPE',warna:'#f59e0b', icon:'⏱️', deskripsi:'Modul pelajaran max 5 menit yang dioptimalkan untuk dikonsumsi di perjalanan. Format: video pendek + mini quiz + satu contoh kode nyata.' },
    { no:10, judul:'Coding Competition Platform',tag:'EdTech · Kompetisi', status:'AKTIF', warna:'#1a5cff', icon:'🏅', deskripsi:'Platform kompetisi coding lokal Indonesia dengan sistem bracket otomatis, live leaderboard, dan integrasi judge online untuk scoring otomatis.' },
    { no:11, judul:'Kelas Bahasa Pemrograman Daerah', tag:'EdTech · Lokal', status:'MIMPI', warna:'#e63329', icon:'🌴', deskripsi:'Materi coding yang seluruhnya menggunakan contoh kontekstual lokal: kode untuk menghitung panen sawah, sistem absensi masjid, atau manajemen warung.' },
    { no:12, judul:'AI Koreksi Skripsi Kode', tag:'EdTech · Riset',   status:'RISET',    warna:'#0891b2', icon:'📝', deskripsi:'AI yang menganalisis kode skripsi mahasiswa, mendeteksi anti-pattern, memberikan saran refactoring, dan menghasilkan laporan kualitas kode otomatis.' },
    { no:13, judul:'Hackathon Virtual Mingguan',tag:'EdTech · Event',  status:'ROADMAP',  warna:'#22c55e', icon:'⚡', deskripsi:'Hackathon 24 jam setiap minggu dengan tema berbeda. Hadiah berupa credit belajar, mentoring gratis, dan kesempatan present ke perusahaan sponsor.' },
    { no:14, judul:'Portfolio Generator AI',  tag:'EdTech · AI',      status:'KONSEP',   warna:'#8b5cf6', icon:'✨', deskripsi:'AI yang menganalisis semua proyek dan skill siswa, lalu otomatis generate portfolio website personal yang menarik dan ATS-friendly.' },
    { no:15, judul:'Blind Code Review',       tag:'EdTech · Fairness',status:'KONSEP',   warna:'#f59e0b', icon:'👁️', deskripsi:'Sistem review kode anonim di mana reviewer tidak tahu siapa penulisnya. Menghilangkan bias dan membangun evaluasi murni berbasis kualitas kode.' },
    { no:16, judul:'Coding untuk SD-SMA',     tag:'EdTech · K12',     status:'AKTIF',    warna:'#1a5cff', icon:'🎒', deskripsi:'Kurikulum bertahap: Scratch untuk SD, Python visual untuk SMP, web dev untuk SMA. Semua dengan konteks pembelajaran yang menyenangkan dan relevan.' },
    { no:17, judul:'Bootcamp Intensif 3 Bulan',tag:'EdTech · Bootcamp',status:'ROADMAP', warna:'#e63329', icon:'🔥', deskripsi:'Program intensif full-stack dengan jaminan magang. Kurikulum berbasis project nyata dari perusahaan partner. Bayar setelah dapat kerja model ISA.' },
    { no:18, judul:'Forum Tanya Jawab Terstruktur',tag:'EdTech · Community',status:'AKTIF',warna:'#0891b2',icon:'💬',deskripsi:'Forum Q&A khusus coding dengan fitur: tag pertanyaan, search pintar, upvote jawaban, dan sistem reputasi untuk memotivasi anggota aktif membantu.' },
    { no:19, judul:'Simulator Debugging Interaktif',tag:'EdTech · Tools',status:'PROTOTYPE',warna:'#22c55e',icon:'🐛',deskripsi:'Latihan debugging kode yang sengaja diisi bug. Siswa harus menemukan dan perbaiki bug dalam waktu terbatas. Score berdasarkan kecepatan dan ketepatan.' },
    { no:20, judul:'Mentor Matching Algorithm',tag:'EdTech · Matching',status:'RISET',   warna:'#8b5cf6', icon:'🧩', deskripsi:'Algoritma yang mencocokkan siswa dengan mentor berdasarkan: tujuan karir, stack teknologi, ketersediaan waktu, gaya belajar, dan kepribadian.' },
    { no:21, judul:'Code Debt Tracker',       tag:'EdTech · Quality', status:'KONSEP',   warna:'#f59e0b', icon:'📊', deskripsi:'Visualisasi teknikal debt dari proyek siswa dari waktu ke waktu. Membantu memahami konsekuensi jangka panjang dari shortcuts dalam coding.' },
    { no:22, judul:'Live Pair Programming',   tag:'EdTech · Kolaborasi',status:'ROADMAP',warna:'#1a5cff', icon:'👨‍💻', deskripsi:'Fitur pair programming real-time di mana dua siswa bisa coding bareng dari device berbeda dengan cursor bersama, voice chat, dan session recording.' },
    { no:23, judul:'English for Developers',  tag:'EdTech · Bahasa',  status:'KONSEP',   warna:'#e63329', icon:'🌍', deskripsi:'Kursus bahasa Inggris teknis khusus developer: cara baca dokumentasi, nulis issue di GitHub, presentasi teknis, dan wawancara kerja.' },
    { no:24, judul:'Open Source Contribution Guide',tag:'EdTech · OSS',status:'AKTIF',  warna:'#0891b2', icon:'🔓', deskripsi:'Panduan step-by-step berkontribusi ke open source: dari fork, branch, PR, sampai review. Dengan daftar repo ramah beginner yang dikurasi tiap bulan.' },
    { no:25, judul:'Tech Talk Recording Library',tag:'EdTech · Konten',status:'ROADMAP', warna:'#22c55e', icon:'🎬', deskripsi:'Library rekaman tech talk dari developer Indonesia. Topik dari: best practices, cerita gagal, insight industri, sampai review teknologi terbaru.' },
  ]
  return (
    <PanelBab id="ch181" num="181" judul="200 INOVASI — BAB 1: REVOLUSI EDUKASI DIGITAL" warna="#1a5cff" bg="#e8f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">
        💡 25 inovasi di bidang edukasi teknologi yang sedang atau akan dibangun. Klik setiap kartu untuk baca detail!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {inovasi.map(item => <KartuInovasi key={item.no} {...item} />)}
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup18() {
  return (
    <>
      <div className="comic-divider" />
      <Ch181 />
    </>
  )
}
