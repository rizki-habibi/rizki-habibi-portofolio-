'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { daftarChapter, semuaKategori } from '@/data/daftarChapter'

export default function ChapterBrowser() {
  const [cari, setCari] = useState('')
  const [kategoriAktif, setKategoriAktif] = useState('Semua')
  const [halaman, setHalaman] = useState(1)
  const perHalaman = 24

  const hasil = useMemo(() => {
    return daftarChapter.filter(c => {
      const cocokKategori = kategoriAktif === 'Semua' || c.kategori === kategoriAktif
      const cocokCari =
        cari === '' ||
        c.judul.toLowerCase().includes(cari.toLowerCase()) ||
        c.subjudul.toLowerCase().includes(cari.toLowerCase()) ||
        c.nomor.toString().includes(cari) ||
        c.kategori.toLowerCase().includes(cari.toLowerCase())
      return cocokKategori && cocokCari
    })
  }, [cari, kategoriAktif])

  const totalHalaman = Math.ceil(hasil.length / perHalaman)
  const tampil = hasil.slice((halaman - 1) * perHalaman, halaman * perHalaman)

  const handleCari = (val: string) => {
    setCari(val)
    setHalaman(1)
  }

  const handleKategori = (k: string) => {
    setKategoriAktif(k)
    setHalaman(1)
  }

  return (
    <section id="chapter-browser" className="py-16 px-3 sm:px-4 relative" style={{ background: '#0a0a0a' }}>
      {/* Halftone dekoratif */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle,#fff 1.5px,transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="font-comic text-[10px] tracking-[0.3em] text-white/30 border border-white/10 px-4 py-1 inline-block mb-3">
            PERJALANAN SAYA
          </div>
          <h2
            className="font-comic text-4xl sm:text-5xl text-white mb-3"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
          >
            📖 CHAPTER BROWSER
          </h2>
          <p className="text-white/40 text-sm font-bold">
            {daftarChapter.length} chapter cerita perjalanan — klik untuk baca
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-5"
        >
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ background: '#111', border: '2px solid #333', boxShadow: '3px 3px 0 #ffd700' }}
          >
            <span className="text-white/40 text-lg flex-shrink-0">🔍</span>
            <input
              type="text"
              value={cari}
              onChange={e => handleCari(e.target.value)}
              placeholder="Cari chapter, topik, atau nomor..."
              className="flex-1 bg-transparent font-bold text-sm text-white placeholder-white/20 outline-none"
            />
            {cari && (
              <button
                onClick={() => handleCari('')}
                className="text-white/40 hover:text-white transition-colors text-xs font-bold px-2"
              >
                ✕
              </button>
            )}
            {cari && (
              <span className="text-yellow-400 text-[10px] font-bold flex-shrink-0">
                {hasil.length} hasil
              </span>
            )}
          </div>
        </motion.div>

        {/* Filter kategori */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-1.5 mb-6"
        >
          {['Semua', ...semuaKategori].map(k => (
            <button
              key={k}
              onClick={() => handleKategori(k)}
              className="font-bold text-[10px] px-2.5 py-1 transition-all"
              style={{
                background: kategoriAktif === k ? '#ffd700' : 'rgba(255,255,255,0.05)',
                color: kategoriAktif === k ? '#0a0a0a' : 'rgba(255,255,255,0.5)',
                border: `1px solid ${kategoriAktif === k ? '#ffd700' : 'rgba(255,255,255,0.1)'}`,
              }}
            >
              {k}
            </button>
          ))}
        </motion.div>

        {/* Grid chapter */}
        {tampil.length === 0 ? (
          <div className="text-center py-16 text-white/30 font-bold">
            Tidak ada chapter yang cocok dengan &ldquo;{cari}&rdquo;
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-6">
            {tampil.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
              >
                <Link
                  href={`/chapter/${c.slug}`}
                  className="flex flex-col gap-1.5 p-3 group transition-all block"
                  style={{
                    background: '#111',
                    border: `2px solid ${c.warna}33`,
                    boxShadow: `2px 2px 0 ${c.warna}33`,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.border = `2px solid ${c.warna}`
                    el.style.boxShadow = `3px 3px 0 ${c.warna}`
                    el.style.background = `${c.warna}15`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.border = `2px solid ${c.warna}33`
                    el.style.boxShadow = `2px 2px 0 ${c.warna}33`
                    el.style.background = '#111'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-comic text-[9px] px-1"
                      style={{ background: c.warna, color: '#0a0a0a' }}
                    >
                      {c.nomor}
                    </span>
                    <span className="text-sm">{c.emoji}</span>
                  </div>
                  <div
                    className="font-comic text-[10px] leading-tight line-clamp-2"
                    style={{ color: c.warna }}
                  >
                    {c.judul}
                  </div>
                  <div className="text-[9px] text-white/30 font-bold line-clamp-2 leading-tight">
                    {c.subjudul}
                  </div>
                  <div
                    className="text-[8px] font-bold mt-auto pt-1"
                    style={{ color: `${c.warna}88`, borderTop: `1px solid ${c.warna}22` }}
                  >
                    {c.kategori}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Paginasi */}
        {totalHalaman > 1 && (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => setHalaman(h => Math.max(1, h - 1))}
              disabled={halaman === 1}
              className="font-comic text-xs px-3 py-1.5 disabled:opacity-30 transition-all"
              style={{ background: '#222', border: '2px solid #444', color: '#fff', boxShadow: halaman > 1 ? '2px 2px 0 #ffd700' : 'none' }}
            >
              ← Prev
            </button>

            {Array.from({ length: totalHalaman }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalHalaman || Math.abs(p - halaman) <= 2)
              .reduce<(number | '...')[]>((acc, p, idx, arr) => {
                if (idx > 0 && typeof arr[idx - 1] === 'number' && (p as number) - (arr[idx - 1] as number) > 1) {
                  acc.push('...')
                }
                acc.push(p)
                return acc
              }, [])
              .map((p, i) =>
                p === '...' ? (
                  <span key={`dots-${i}`} className="text-white/30 font-bold px-1">...</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setHalaman(p as number)}
                    className="font-comic text-xs w-8 h-8 transition-all"
                    style={{
                      background: halaman === p ? '#ffd700' : '#222',
                      border: `2px solid ${halaman === p ? '#ffd700' : '#444'}`,
                      color: halaman === p ? '#0a0a0a' : '#fff',
                      boxShadow: halaman === p ? '2px 2px 0 #0a0a0a' : 'none',
                    }}
                  >
                    {p}
                  </button>
                )
              )}

            <button
              onClick={() => setHalaman(h => Math.min(totalHalaman, h + 1))}
              disabled={halaman === totalHalaman}
              className="font-comic text-xs px-3 py-1.5 disabled:opacity-30 transition-all"
              style={{ background: '#222', border: '2px solid #444', color: '#fff', boxShadow: halaman < totalHalaman ? '2px 2px 0 #ffd700' : 'none' }}
            >
              Next →
            </button>
          </div>
        )}

        {/* Info halaman */}
        {totalHalaman > 1 && (
          <p className="text-center text-white/20 text-[10px] font-bold mt-3">
            Halaman {halaman} dari {totalHalaman} — menampilkan {tampil.length} dari {hasil.length} chapter
          </p>
        )}
      </div>
    </section>
  )
}
