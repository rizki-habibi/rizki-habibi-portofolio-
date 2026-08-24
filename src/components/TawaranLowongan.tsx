'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiMail, FiCheck } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

export default function TawaranLowongan() {
  const [kirim, setKirim] = useState(false)
  const [form, setForm] = useState({ nama: '', institusi: '', tawaran: '', kontak: '' })
  const [tipe, setTipe] = useState<'kuliah' | 'kerja' | 'kolaborasi'>('kuliah')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Kirim via WhatsApp
    const pesan = `Halo Rizki! Saya ${form.nama} dari ${form.institusi}.\n\nTawaran: ${tipe.toUpperCase()}\nDetail: ${form.tawaran}\nKontak: ${form.kontak}`
    window.open(`https://wa.me/62882009725053?text=${encodeURIComponent(pesan)}`, '_blank')
    setKirim(true)
    setTimeout(() => setKirim(false), 5000)
  }

  return (
    <section id="tawaran-lowongan" className="py-16 px-3 sm:px-4 relative overflow-hidden" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block font-bold text-[10px] tracking-[0.3em] px-4 py-1 mb-4"
            style={{ background: '#1a5cff', color: 'white', border: '2px solid #0a0a0a' }}>
            KHUSUS UNTUK RIZKI HABIBI
          </div>
          <h2 className="font-comic text-3xl sm:text-4xl text-[#0a0a0a] mb-3" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}>
            📩 KIRIM TAWARAN
          </h2>
          <p className="text-[#0a0a0a]/60 text-sm font-bold max-w-xl mx-auto leading-relaxed">
            Punya tawaran kuliah gratis, kerja, atau kolaborasi yang serius? Saya buka untuk itu — tapi tolong langsung ke pointnya, bukan basa-basi.
          </p>
        </motion.div>

        {/* Syarat & Kriteria */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8 grid sm:grid-cols-3 gap-4"
        >
          {[
            {
              icon: '🎓',
              judul: 'Kuliah Gratis / Beasiswa',
              syarat: ['Gelar D1, S2, atau S3', 'Dalam atau luar negeri OK', 'Proses singkat < 1 bulan', 'Tidak harus yang terbaik — yang tepat'],
              warna: '#1a5cff',
              bg: '#e8f0ff',
            },
            {
              icon: '💼',
              judul: 'Tawaran Kerja',
              syarat: ['Full-stack / Tech role', 'Remote atau hybrid OK', 'Kompensasi fair & transparan', 'Perusahaan yang berdampak nyata'],
              warna: '#22c55e',
              bg: '#f0fdf4',
            },
            {
              icon: '🤝',
              judul: 'Kolaborasi & Mitra',
              syarat: ['Proyek yang jelas & bermakna', 'Saling menguntungkan', 'Terbuka untuk equity/bagi hasil', 'Komitmen jangka panjang'],
              warna: '#8b5cf6',
              bg: '#f5f0ff',
            },
          ].map((item) => (
            <motion.div
              key={item.judul}
              whileHover={{ y: -4 }}
              className="p-4"
              style={{ border: `3px solid ${item.warna}`, boxShadow: `4px 4px 0 ${item.warna}`, background: item.bg }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-comic text-sm mb-3" style={{ color: item.warna }}>{item.judul}</div>
              <ul className="space-y-1">
                {item.syarat.map(s => (
                  <li key={s} className="flex items-start gap-1.5 text-[11px] font-bold text-[#0a0a0a]/70">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: item.warna }} />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {!kirim ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4 p-6 sm:p-8"
                style={{ border: '3px solid #1a5cff', background: 'white', boxShadow: '6px 6px 0 #1a5cff' }}
              >
                <div className="font-comic text-lg text-[#1a5cff] mb-4">📋 FORM TAWARAN</div>

                {/* Tipe tawaran */}
                <div>
                  <label className="font-comic text-xs text-[#0a0a0a]/50 mb-2 block tracking-widest">JENIS TAWARAN</label>
                  <div className="flex gap-2 flex-wrap">
                    {(['kuliah', 'kerja', 'kolaborasi'] as const).map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTipe(t)}
                        className="font-comic text-xs px-3 py-2 capitalize transition-all"
                        style={{
                          background: tipe === t ? '#1a5cff' : 'transparent',
                          color: tipe === t ? 'white' : '#0a0a0a',
                          border: `2px solid ${tipe === t ? '#1a5cff' : '#ddd'}`,
                        }}
                      >
                        {t === 'kuliah' ? '🎓' : t === 'kerja' ? '💼' : '🤝'} {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nama */}
                <div>
                  <label className="font-comic text-xs text-[#0a0a0a]/50 mb-1.5 block tracking-widest">NAMA KAMU / LEMBAGA <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={form.nama}
                    onChange={e => setForm(f => ({ ...f, nama: e.target.value }))}
                    placeholder="Nama lengkap atau nama institusi..."
                    className="w-full font-bold text-sm text-[#0a0a0a] outline-none py-2.5 px-3"
                    style={{ border: '2px solid #ddd', background: '#fafaf7' }}
                  />
                </div>

                {/* Institusi */}
                <div>
                  <label className="font-comic text-xs text-[#0a0a0a]/50 mb-1.5 block tracking-widest">INSTITUSI / PERUSAHAAN / KAMPUS</label>
                  <input
                    type="text"
                    value={form.institusi}
                    onChange={e => setForm(f => ({ ...f, institusi: e.target.value }))}
                    placeholder="Nama kampus, perusahaan, atau komunitas..."
                    className="w-full font-bold text-sm text-[#0a0a0a] outline-none py-2.5 px-3"
                    style={{ border: '2px solid #ddd', background: '#fafaf7' }}
                  />
                </div>

                {/* Detail tawaran */}
                <div>
                  <label className="font-comic text-xs text-[#0a0a0a]/50 mb-1.5 block tracking-widest">DETAIL TAWARAN <span className="text-red-500">*</span></label>
                  <textarea
                    required
                    rows={4}
                    value={form.tawaran}
                    onChange={e => setForm(f => ({ ...f, tawaran: e.target.value }))}
                    placeholder="Jelaskan tawaran dengan jelas — apa, kapan, syarat, dan apa yang didapat..."
                    className="w-full font-bold text-sm text-[#0a0a0a] outline-none py-2.5 px-3 resize-none"
                    style={{ border: '2px solid #ddd', background: '#fafaf7' }}
                  />
                </div>

                {/* Kontak */}
                <div>
                  <label className="font-comic text-xs text-[#0a0a0a]/50 mb-1.5 block tracking-widest">KONTAK KAMU <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={form.kontak}
                    onChange={e => setForm(f => ({ ...f, kontak: e.target.value }))}
                    placeholder="WhatsApp, email, atau link LinkedIn..."
                    className="w-full font-bold text-sm text-[#0a0a0a] outline-none py-2.5 px-3"
                    style={{ border: '2px solid #ddd', background: '#fafaf7' }}
                  />
                </div>

                <div className="flex gap-3 flex-wrap pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 font-comic text-sm px-6 py-3 text-white"
                    style={{ background: '#25d366', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
                  >
                    <SiWhatsapp className="w-4 h-4" /> KIRIM VIA WHATSAPP
                  </motion.button>
                  <a
                    href={`mailto:rizkihub7@gmail.com?subject=Tawaran ${tipe} dari ${form.nama || '...'}&body=${encodeURIComponent(`Nama: ${form.nama}\nInstitusi: ${form.institusi}\nTawaran: ${form.tawaran}\nKontak: ${form.kontak}`)}`}
                    className="flex items-center gap-2 font-comic text-sm px-6 py-3 text-white"
                    style={{ background: '#1a5cff', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
                  >
                    <FiMail className="w-4 h-4" /> KIRIM VIA EMAIL
                  </a>
                </div>

                <p className="text-[#0a0a0a]/30 text-[10px] font-bold">
                  * Form ini akan membuka WA atau email dengan data yang sudah diisi otomatis. Tidak ada data yang tersimpan di server.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
                style={{ border: '3px solid #22c55e', background: '#f0fdf4', boxShadow: '6px 6px 0 #22c55e' }}
              >
                <FiCheck className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                <div className="font-comic text-xl text-[#22c55e] mb-2">Tawaran Terkirim!</div>
                <p className="text-[#0a0a0a]/60 text-sm font-bold">
                  WhatsApp sudah terbuka dengan pesan yang sudah diisi. Kirim pesannya ya!
                  <br />Saya akan merespons dalam 1x24 jam.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Note penting */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 p-4 text-sm font-bold text-[#0a0a0a]/60"
          style={{ border: '2px solid #f59e0b', background: '#fffbeb' }}
        >
          <span className="text-[#f59e0b] font-comic">⚠️ CATATAN PENTING:</span>{' '}
          Saya menolak tawaran yang tidak jelas, meminta sesuatu tanpa timbal balik yang adil, atau yang terasa seperti eksploitasi berkedok &ldquo;kesempatan&rdquo;. Respek adalah syarat utama.
        </motion.div>
      </div>
    </section>
  )
}
