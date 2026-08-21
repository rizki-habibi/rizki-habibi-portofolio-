'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

/* ─── Tipe data ─── */
interface MataKuliah {
  kode: string
  nama: string
  sks: number
  nilai: number | null
  huruf: string | null
}
interface Semester {
  nomor: number
  kode: string
  label: string
  ips: number | null
  sks: number
  warna: string
  mataKuliah: MataKuliah[]
}

/* ─── Data lengkap Semester 1–7 + Skripsi ─── */
const dataSemester: Semester[] = [
  {
    nomor: 1, kode: '20231', label: 'Semester 1', ips: 3.75, sks: 20,
    warna: '#1a5cff',
    mataKuliah: [
      { kode: '23STKU1133', nama: 'Algoritma dan Pemrograman', sks: 3, nilai: 4.00, huruf: 'A' },
      { kode: '23STKN1112', nama: 'Bahasa Indonesia', sks: 2, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKU1123', nama: 'Bahasa Inggris', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKT1163', nama: 'Matematika Diskrit', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKU1143', nama: 'Pengantar Manajemen', sks: 3, nilai: 3.25, huruf: 'B+' },
      { kode: '23STKT1173', nama: 'Pengantar Sistem dan Teknologi Informasi', sks: 3, nilai: 4.00, huruf: 'A' },
      { kode: '23STKU1153', nama: 'Teori Ekonomi', sks: 3, nilai: 3.75, huruf: 'A-' },
    ],
  },
  {
    nomor: 2, kode: '20232', label: 'Semester 2', ips: 3.74, sks: 20,
    warna: '#22c55e',
    mataKuliah: [
      { kode: '23STKU2223', nama: 'Algoritma dan Pemrograman II', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKT2243', nama: 'Arsitektur Komputer', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKT2253', nama: 'Basis Data', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKT2263', nama: 'Jaringan Komputer Dasar', sks: 3, nilai: 3.25, huruf: 'B+' },
      { kode: '23STKN2212', nama: 'Kewarganegaraan', sks: 2, nilai: 4.00, huruf: 'A' },
      { kode: '23STKT2282', nama: 'Layanan Sistem dan Teknologi Informasi', sks: 2, nilai: 4.00, huruf: 'A' },
      { kode: '23STKU2231', nama: 'Pendidikan Karakter', sks: 1, nilai: 4.00, huruf: 'A' },
      { kode: '23STKS2283', nama: 'Statistik dan Probabilitas', sks: 3, nilai: 3.75, huruf: 'A-' },
    ],
  },
  {
    nomor: 3, kode: '20241', label: 'Semester 3', ips: 3.93, sks: 23,
    warna: '#8b5cf6',
    mataKuliah: [
      { kode: '23STKS1353', nama: 'Analisis dan Design SI', sks: 3, nilai: 4.00, huruf: 'A' },
      { kode: '23STKS1363', nama: 'Dasar Keamanan TI', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS1373', nama: 'Object Oriented Design', sks: 3, nilai: 4.00, huruf: 'A' },
      { kode: '23STKN1312', nama: 'Pancasila', sks: 2, nilai: 4.00, huruf: 'A' },
      { kode: '23STKS1333', nama: 'Pemrograman Basis Data', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS1343', nama: 'Sistem Operasi', sks: 3, nilai: 4.00, huruf: 'A' },
      { kode: '23STKS1573', nama: 'Supply Chain Management', sks: 3, nilai: 4.00, huruf: 'A' },
      { kode: '23STKS1323', nama: 'Web Programming', sks: 3, nilai: 4.00, huruf: 'A' },
    ],
  },
  {
    nomor: 4, kode: '20242', label: 'Semester 4', ips: 3.80, sks: 23,
    warna: '#f59e0b',
    mataKuliah: [
      { kode: '21STKP2673', nama: 'Analisis Keuangan', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS2473', nama: 'Bisnis Digital', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS2433', nama: 'Data Mining', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS2463', nama: 'Interaksi Manusia dan Komputer', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS2443', nama: 'Kriptografi', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS2453', nama: 'Manajemen Proyek STI', sks: 3, nilai: 4.00, huruf: 'A' },
      { kode: '23STKN2412', nama: 'Pendidikan Agama', sks: 2, nilai: 4.00, huruf: 'A' },
      { kode: '23STKS2423', nama: 'Web Framework Programming', sks: 3, nilai: 3.75, huruf: 'A-' },
    ],
  },
  {
    nomor: 5, kode: '20251', label: 'Semester 5', ips: 3.76, sks: 24,
    warna: '#e63329',
    mataKuliah: [
      { kode: '23STKS1543', nama: 'Analisis Bisnis IT', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS1563', nama: 'Digital Project Inovation', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS1583', nama: 'Embed System', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKF1522', nama: 'Etika Profesi', sks: 2, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKU1511', nama: 'Kuliah Kerja Lapang (KKL)', sks: 1, nilai: 4.00, huruf: 'A' },
      { kode: '23STKP1773', nama: 'Mobile Programming', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS1553', nama: 'Quality Control & Quality Assurance', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS1733', nama: 'Tata Kelola STI', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKF1533', nama: 'Technopreneurship', sks: 3, nilai: 3.75, huruf: 'A-' },
    ],
  },
  {
    nomor: 6, kode: '20252', label: 'Semester 6', ips: 3.87, sks: 17,
    warna: '#0891b2',
    mataKuliah: [
      { kode: '23STKS2643', nama: 'Audit SI', sks: 3, nilai: 4.00, huruf: 'A' },
      { kode: '23STKS2653', nama: 'Customer Relationship Management', sks: 3, nilai: 4.00, huruf: 'A' },
      { kode: '23STKS2663', nama: 'Manajemen Risiko', sks: 3, nilai: 4.00, huruf: 'A' },
      { kode: '23STKU2613', nama: 'Metodologi Penelitian', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS2622', nama: 'Praktek Kerja Lapang (PKL)', sks: 2, nilai: 3.25, huruf: 'B+' },
      { kode: '23STKS2633', nama: 'Sistem Pengambilan Keputusan', sks: 3, nilai: 4.00, huruf: 'A' },
    ],
  },
  {
    nomor: 7, kode: '20261', label: 'Semester 7', ips: null, sks: 21,
    warna: '#ffd700',
    mataKuliah: [
      { kode: '23STKS1723', nama: 'Analisis Big Data', sks: 3, nilai: null, huruf: null },
      { kode: '23STKP1763', nama: 'Artificial Intelligence', sks: 3, nilai: null, huruf: null },
      { kode: '23STKS1753', nama: 'Enterprise Architecture', sks: 3, nilai: null, huruf: null },
      { kode: '23STKU1713', nama: 'Kuliah Kerja Nyata (KKN)', sks: 3, nilai: null, huruf: null },
      { kode: '23STKP1773', nama: 'Mobile Programming', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKS1743', nama: 'Riset Operasi', sks: 3, nilai: null, huruf: null },
      { kode: '23STKS1733', nama: 'Tata Kelola STI', sks: 3, nilai: 3.75, huruf: 'A-' },
      { kode: '23STKU2816', nama: '🎓 Skripsi (Sistem Kepegawaian Laravel)', sks: 6, nilai: null, huruf: null },
    ],
  },
]

const warnaNilai: Record<string, string> = {
  'A': '#22c55e', 'A-': '#4ade80', 'B+': '#f59e0b',
  'B': '#fb923c', 'B-': '#f97316', 'C': '#e63329',
}

/* ─── Baris mata kuliah ─── */
function BarisMK({ mk, i }: { mk: MataKuliah; i: number }) {
  const wHuruf = mk.huruf ? (warnaNilai[mk.huruf] ?? '#6b7280') : '#6b7280'
  return (
    <motion.tr
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.04, type: 'spring', stiffness: 200 }}
      viewport={{ once: false, amount: 0.1 }}
      className="border-b border-black/10 hover:bg-black/5 transition-colors">
      <td className="py-1.5 px-2 font-mono text-[8px] text-[#0a0a0a]/40">{mk.kode}</td>
      <td className="py-1.5 px-2 text-xs font-bold text-[#0a0a0a]/80">{mk.nama}</td>
      <td className="py-1.5 px-2 text-center text-xs font-bold text-[#0a0a0a]/60">{mk.sks}</td>
      <td className="py-1.5 px-2 text-center">
        {mk.nilai !== null ? (
          <span className="font-comic text-sm" style={{ color: wHuruf }}>{mk.nilai.toFixed(2)}</span>
        ) : (
          <span className="text-xs text-[#0a0a0a]/30 font-bold">—</span>
        )}
      </td>
      <td className="py-1.5 px-2 text-center">
        {mk.huruf ? (
          <span className="font-comic text-xs px-1.5 py-0.5 font-bold" style={{ background: wHuruf + '20', color: wHuruf, border: `1px solid ${wHuruf}50` }}>
            {mk.huruf}
          </span>
        ) : (
          <span className="text-xs text-[#0a0a0a]/20 font-bold">—</span>
        )}
      </td>
    </motion.tr>
  )
}

/* ─── Panel satu semester ─── */
function PanelSemester({ sem, aktif, onToggle }: { sem: Semester; aktif: boolean; onToggle: () => void }) {
  const badgeIPS = sem.ips !== null ? sem.ips.toFixed(2) : 'Proses'
  const ipsBg = sem.ips === null ? '#6b7280'
    : sem.ips >= 3.9 ? '#22c55e'
    : sem.ips >= 3.75 ? '#4ade80'
    : sem.ips >= 3.5 ? '#f59e0b' : '#e63329'
  const jumlahA = sem.mataKuliah.filter(m => m.huruf === 'A').length
  const selesai = sem.mataKuliah.filter(m => m.nilai !== null).length

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 150, delay: sem.nomor * 0.05 }}
      viewport={{ once: false, amount: 0.1 }}>
      {/* Header semester */}
      <motion.button
        className="w-full text-left overflow-hidden mb-1"
        style={{ border: `3px solid ${sem.warna}`, boxShadow: aktif ? `5px 5px 0 ${sem.warna}` : `3px 3px 0 ${sem.warna}44`, background: 'white' }}
        whileTap={{ scale: 0.99 }}
        onClick={onToggle}>
        <div className="flex items-center justify-between px-4 py-3"
          style={{ background: sem.warna }}>
          <div className="flex items-center gap-3">
            <span className="font-comic text-white text-base">{sem.label}</span>
            <span className="font-mono text-white/70 text-[10px]">{sem.kode}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[9px] text-white px-2 py-0.5" style={{ background: 'rgba(0,0,0,0.2)' }}>{sem.sks} SKS</span>
            <span className="font-comic text-sm text-white px-2 py-0.5 font-bold" style={{ background: ipsBg }}>IPS {badgeIPS}</span>
            <motion.span className="text-white text-sm" animate={{ rotate: aktif ? 180 : 0 }} transition={{ type: 'spring' }}>▼</motion.span>
          </div>
        </div>
        {/* Ringkasan mini */}
        <div className="flex gap-4 px-4 py-1.5 text-[9px] font-bold text-[#0a0a0a]/50">
          <span>📚 {sem.mataKuliah.length} mata kuliah</span>
          <span>✅ {selesai} selesai</span>
          {jumlahA > 0 && <span style={{ color: '#22c55e' }}>🏆 {jumlahA}× nilai A</span>}
          {sem.nomor === 7 && <span style={{ color: '#ffd700' }}>🎓 Termasuk Skripsi</span>}
        </div>
      </motion.button>

      {/* Tabel mata kuliah (collapsible) */}
      <AnimatePresence>
        {aktif && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}>
            <div className="mb-4" style={{ border: `2px solid ${sem.warna}40`, borderTop: 'none' }}>
              <table className="w-full text-left">
                <thead>
                  <tr style={{ background: sem.warna + '15', borderBottom: `2px solid ${sem.warna}30` }}>
                    <th className="py-1.5 px-2 text-[8px] font-bold text-[#0a0a0a]/40 uppercase tracking-wide">Kode</th>
                    <th className="py-1.5 px-2 text-[8px] font-bold text-[#0a0a0a]/40 uppercase tracking-wide">Mata Kuliah</th>
                    <th className="py-1.5 px-2 text-center text-[8px] font-bold text-[#0a0a0a]/40 uppercase tracking-wide">SKS</th>
                    <th className="py-1.5 px-2 text-center text-[8px] font-bold text-[#0a0a0a]/40 uppercase tracking-wide">Nilai</th>
                    <th className="py-1.5 px-2 text-center text-[8px] font-bold text-[#0a0a0a]/40 uppercase tracking-wide">Huruf</th>
                  </tr>
                </thead>
                <tbody>
                  {sem.mataKuliah.map((mk, i) => <BarisMK key={mk.kode} mk={mk} i={i} />)}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─── Komponen utama ─── */
export default function AkademikKomik() {
  const [aktif, setAktif] = useState<number | null>(null)
  const toggle = (n: number) => setAktif(p => p === n ? null : n)

  const ipk = 3.81
  const totalSks = 127 // 20+20+23+23+24+17 = 127 (tanpa s7 aktif + skripsi)
  const totalSelesai = dataSemester.slice(0, 6).reduce((acc, s) => acc + s.sks, 0)

  return (
    <section id="akademik" className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden"
      style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 150 }}
          viewport={{ once: false }}>
          <div className="font-comic text-4xl sm:text-5xl text-[#0a0a0a] mb-2"
            style={{ WebkitTextStroke: '2px #0a0a0a' }}>
            📚 REKAP AKADEMIK
          </div>
          <div className="speech-bubble inline-block text-sm">
            S1 Sistem & Teknologi Informasi — STIKI Malang / ITSM Jember
          </div>
        </motion.div>

        {/* Kartu ringkasan IPK */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'IPK Sementara', val: ipk.toFixed(2), icon: '🏆', w: '#22c55e' },
            { label: 'SKS Selesai', val: `${totalSelesai}`, icon: '📗', w: '#1a5cff' },
            { label: 'Semester Aktif', val: '7', icon: '📅', w: '#8b5cf6' },
            { label: 'Status Skripsi', val: 'Aktif', icon: '🎓', w: '#ffd700' },
          ].map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
              viewport={{ once: false }}
              whileHover={{ y: -4 }}
              className="text-center p-4"
              style={{ border: `3px solid ${s.w}`, boxShadow: `4px 4px 0 ${s.w}`, background: 'white' }}>
              <motion.div className="text-3xl mb-1"
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}>
                {s.icon}
              </motion.div>
              <div className="font-comic text-2xl" style={{ color: s.w }}>{s.val}</div>
              <div className="text-[9px] font-bold text-[#0a0a0a]/50">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Grafik IPS per semester */}
        <motion.div className="mb-8 p-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 130 }}
          viewport={{ once: false }}
          style={{ border: '3px solid #0a0a0a', boxShadow: '5px 5px 0 #0a0a0a', background: 'white' }}>
          <div className="font-comic text-base text-[#0a0a0a] mb-4">📈 GRAFIK IPS PER SEMESTER</div>
          <div className="flex items-end gap-2 h-24">
            {dataSemester.map((s, i) => {
              const tinggi = s.ips !== null ? ((s.ips - 3.0) / 1.0) * 100 : 20
              return (
                <div key={s.nomor} className="flex-1 flex flex-col items-center gap-1">
                  <motion.div
                    className="w-full relative group"
                    style={{ background: s.warna, height: `${tinggi}%`, minHeight: 8 }}
                    initial={{ scaleY: 0, originY: 1 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: false }}>
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 font-comic text-[9px] whitespace-nowrap" style={{ color: s.warna }}>
                      {s.ips?.toFixed(2) ?? '—'}
                    </div>
                  </motion.div>
                  <div className="font-bold text-[8px] text-[#0a0a0a]/50">S{s.nomor}</div>
                </div>
              )
            })}
          </div>
          <div className="mt-2 text-[9px] font-bold text-[#0a0a0a]/40 text-center">
            IPK Kumulatif: <span className="text-[#22c55e] font-comic text-sm">3.81</span> / 4.00 — Sangat Memuaskan ⭐
          </div>
        </motion.div>

        {/* Skripsi highlight */}
        <motion.div className="mb-6 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 130 }}
          viewport={{ once: false }}
          style={{ border: '4px solid #ffd700', boxShadow: '6px 6px 0 #ffd700', background: '#0a0a0a' }}>
          <div className="px-4 py-2 flex items-center gap-2" style={{ background: '#ffd700', borderBottom: '2px solid #0a0a0a' }}>
            <span className="text-2xl">🎓</span>
            <span className="font-comic text-base text-[#0a0a0a]">SKRIPSI — TUGAS AKHIR S1</span>
            <span className="ml-auto font-bold text-[9px] bg-black/20 text-[#0a0a0a] px-2 py-0.5">6 SKS</span>
          </div>
          <div className="p-5 grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              {[
                { label: 'Judul', val: 'Sistem Informasi Kepegawaian Berbasis Web dengan Metode Hybrid', icon: '📝' },
                { label: 'Framework', val: 'Laravel (PHP) + MySQL + Bootstrap / Tailwind CSS', icon: '⚡' },
                { label: 'Metode', val: 'Hybrid Method — kombinasi waterfall + agile iteratif', icon: '🔄' },
                { label: 'Status', val: 'Aktif dikerjakan — Semester 7 (2026)', icon: '🟡' },
              ].map((item, i) => (
                <motion.div key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, type: 'spring' }}
                  viewport={{ once: false }}
                  className="flex gap-2 items-start">
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-bold text-[9px] text-yellow-400/70 uppercase tracking-wide">{item.label}</div>
                    <div className="text-xs text-white/75 font-bold leading-relaxed">{item.val}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-4" style={{ background: '#111', border: '2px solid #ffd70040' }}>
              <div className="font-comic text-sm text-yellow-400 mb-2">💡 TENTANG SISTEM INI</div>
              <p className="text-xs text-white/65 font-bold leading-relaxed">
                Sistem Informasi Kepegawaian yang mengelola data pegawai secara digital:
                absensi, penggajian, penilaian kinerja, dan laporan manajemen.
                Menggunakan <span className="text-yellow-400">metode hybrid</span> yang menggabungkan
                waterfall untuk planning dan agile untuk iterasi pengembangan fitur.
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {['Laravel 10', 'MySQL', 'REST API', 'CRUD', 'Role-based Auth', 'PDF Export'].map(t => (
                  <span key={t} className="font-bold text-[8px] px-1.5 py-0.5 text-[#0a0a0a]"
                    style={{ background: '#ffd700' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Daftar semester collapsible */}
        <div className="font-comic text-lg text-[#0a0a0a] mb-3">
          📋 DETAIL NILAI PER SEMESTER <span className="text-xs font-bold text-[#0a0a0a]/40">(klik untuk expand)</span>
        </div>
        <div className="space-y-2">
          {dataSemester.map(s => (
            <PanelSemester key={s.nomor} sem={s} aktif={aktif === s.nomor} onToggle={() => toggle(s.nomor)} />
          ))}
        </div>

        {/* Saran & insight */}
        <motion.div className="mt-8 p-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 130 }}
          viewport={{ once: false }}
          style={{ border: '3px solid #1a5cff', boxShadow: '5px 5px 0 #1a5cff', background: 'white' }}>
          <div className="font-comic text-base text-[#1a5cff] mb-3">💡 INSIGHT & SARAN AKADEMIK</div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                judul: '🏆 Kekuatan Akademik',
                poin: ['IPK 3.81 — konsisten di atas 3.75 setiap semester', 'Semester 3 terbaik: IPS 3.93 (7 dari 8 mata kuliah nilai A)', 'Tidak ada nilai di bawah B+ dalam 6 semester', 'Penguasaan teknis kuat: Web, DB, OOP, Keamanan TI'],
                w: '#22c55e',
              },
              {
                judul: '🎯 Mata Kuliah Relevan untuk Karir',
                poin: ['Web Framework Programming → Laravel & Next.js di industri', 'Data Mining & AI → sangat diminati perusahaan tech', 'Manajemen Proyek STI → project management skill', 'Sistem Pengambilan Keputusan → data-driven decision'],
                w: '#1a5cff',
              },
              {
                judul: '⚡ Saran untuk Skripsi',
                poin: ['Dokumentasikan setiap sprint/iterasi hybrid method dengan baik', 'Buat demo video fitur untuk presentasi sidang yang impresif', 'Deploy ke server nyata — nilai tambah besar di mata penguji', 'Link GitHub skripsi ke portfolio sebagai bukti kompetensi'],
                w: '#8b5cf6',
              },
              {
                judul: '🚀 Setelah Wisuda',
                poin: ['IPK 3.81 cukup kuat untuk melamar fresh grad posisi junior-mid', 'Kombinasikan dengan BNSP + 75 sertifikat = profil yang sangat kompetitif', 'Pertimbangkan S2 tech/bisnis jika ingin masuk academia atau research', 'Atau langsung bangun KVT.kom dan jadikan sebagai "perusahaan pertama"'],
                w: '#f59e0b',
              },
            ].map((item, i) => (
              <motion.div key={item.judul}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, type: 'spring' }}
                viewport={{ once: false }}>
                <div className="font-comic text-sm mb-2" style={{ color: item.w }}>{item.judul}</div>
                {item.poin.map((p, j) => (
                  <div key={j} className="flex gap-2 mb-1">
                    <span style={{ color: item.w }} className="flex-shrink-0 text-xs">▶</span>
                    <p className="text-[10px] font-bold text-[#0a0a0a]/65 leading-relaxed">{p}</p>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
