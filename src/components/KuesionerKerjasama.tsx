'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiX, FiSend, FiCheckCircle, FiUsers, FiMail, FiBriefcase, FiMessageSquare } from 'react-icons/fi'

// ============================================================
// TIPE DATA
// ============================================================
interface DataKuesioner {
  nama: string
  email: string
  instansi: string
  jenisKerjasama: string
  pesan: string
  ketertarikan: string[]
}

const pilihanKerjasama = [
  'Freelance Project',
  'Magang / Internship',
  'Kolaborasi Riset',
  'Pengembangan Produk',
  'Konsultasi Teknis',
  'Kemitraan Bisnis',
  'Event / Workshop',
  'Lainnya',
]

const pilihanKetertarikan = [
  { label: 'Web Development', emoji: '💻' },
  { label: 'UI/UX Design', emoji: '🎨' },
  { label: 'IoT & Hardware', emoji: '🔌' },
  { label: 'AI / Machine Learning', emoji: '🤖' },
  { label: 'KVT.kom Platform', emoji: '🌐' },
  { label: 'Penelitian / Skripsi', emoji: '📚' },
  { label: 'Mobile Development', emoji: '📱' },
  { label: 'Cloud & DevOps', emoji: '☁️' },
]

// ============================================================
// TOMBOL PEMICU — tombol mengambang
// ============================================================
function TombolKuesioner({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 left-4 z-40 flex items-center gap-2 font-comic text-xs px-4 py-3"
      style={{
        background: '#8d55e8',
        border: '3px solid #0a0a0a',
        boxShadow: '5px 5px 0 #0a0a0a',
        color: 'white',
      }}
      title="Tertarik kerjasama?"
    >
      <FiUsers className="w-4 h-4" />
      <span className="hidden sm:block">KERJASAMA?</span>
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-2 h-2 rounded-full bg-yellow-400"
      />
    </motion.button>
  )
}

// ============================================================
// FORM KUESIONER
// ============================================================
export default function KuesionerKerjasama() {
  const [terbuka, setTerbuka] = useState(false)
  const [terkirim, setTerkirim] = useState(false)
  const [langkah, setLangkah] = useState(1) // 1=info, 2=bidang, 3=pesan
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<DataKuesioner>({
    nama: '',
    email: '',
    instansi: '',
    jenisKerjasama: '',
    pesan: '',
    ketertarikan: [],
  })

  const ubahForm = (key: keyof DataKuesioner, nilai: string) => {
    setForm(f => ({ ...f, [key]: nilai }))
  }

  const toggleKetertarikan = (label: string) => {
    setForm(f => ({
      ...f,
      ketertarikan: f.ketertarikan.includes(label)
        ? f.ketertarikan.filter(k => k !== label)
        : [...f.ketertarikan, label],
    }))
  }

  const kirimForm = async () => {
    setLoading(true)
    // Simpan ke localStorage sebagai fallback (tanpa backend)
    try {
      const riwayat = JSON.parse(localStorage.getItem('kuesioner_kerjasama') || '[]')
      riwayat.push({ ...form, waktu: new Date().toISOString() })
      localStorage.setItem('kuesioner_kerjasama', JSON.stringify(riwayat))
    } catch (_) { /* abaikan jika localStorage tidak tersedia */ }

    // Simulasi pengiriman (bisa diganti dengan fetch ke API)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setTerkirim(true)
  }

  const reset = () => {
    setTerkirim(false)
    setLangkah(1)
    setForm({ nama: '', email: '', instansi: '', jenisKerjasama: '', pesan: '', ketertarikan: [] })
    setTerbuka(false)
  }

  const langkahValid = () => {
    if (langkah === 1) return form.nama.trim() !== '' && form.email.trim() !== ''
    if (langkah === 2) return form.ketertarikan.length > 0 && form.jenisKerjasama !== ''
    return form.pesan.trim().length >= 10
  }

  return (
    <>
      <TombolKuesioner onClick={() => setTerbuka(true)} />

      <AnimatePresence>
        {terbuka && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setTerbuka(false)}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'rgba(10,10,10,0.88)',
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />

            <motion.div
              className="relative z-10 w-full max-w-md"
              style={{
                background: '#fafaf7',
                border: '5px solid #0a0a0a',
                boxShadow: '10px 10px 0 #8d55e8',
              }}
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.75, rotate: -3, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.75, rotate: 3, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ background: '#8d55e8', borderBottom: '4px solid #0a0a0a' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center" style={{ background: '#ffd700', border: '2px solid #0a0a0a' }}>
                    <FiUsers className="w-4 h-4 text-[#0a0a0a]" />
                  </div>
                  <div>
                    <div className="font-comic text-white text-sm">FORMULIR KERJASAMA</div>
                    <div className="text-[10px] text-white/60 font-bold">Langkah {langkah} dari 3</div>
                  </div>
                </div>
                <motion.button
                  onClick={() => setTerbuka(false)}
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  className="w-8 h-8 flex items-center justify-center"
                  style={{ background: '#0a0a0a', border: '2px solid rgba(255,255,255,0.3)' }}
                >
                  <FiX className="w-4 h-4 text-white" />
                </motion.button>
              </div>

              {/* Progress bar langkah */}
              <div className="flex" style={{ borderBottom: '3px solid #0a0a0a' }}>
                {[1, 2, 3].map(l => (
                  <div
                    key={l}
                    className="flex-1 h-1.5 transition-all duration-500"
                    style={{ background: l <= langkah ? '#8d55e8' : '#e5e7eb' }}
                  />
                ))}
              </div>

              {/* Konten */}
              <div className="p-5 overflow-y-auto" style={{ maxHeight: '60vh' }}>
                {!terkirim ? (
                  <AnimatePresence mode="wait">
                    {/* ── LANGKAH 1: INFO DIRI ── */}
                    {langkah === 1 && (
                      <motion.div
                        key="langkah1"
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -40, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <div className="speech-bubble text-xs mb-4">
                          👋 Halo! Ceritakan sedikit tentang dirimu dulu ya~
                        </div>
                        <BidangInput
                          icon={<FiUsers className="w-4 h-4" />}
                          label="Nama Lengkap *"
                          placeholder="contoh: Budi Santoso"
                          nilai={form.nama}
                          onChange={v => ubahForm('nama', v)}
                        />
                        <BidangInput
                          icon={<FiMail className="w-4 h-4" />}
                          label="Email *"
                          placeholder="contoh: budi@email.com"
                          nilai={form.email}
                          type="email"
                          onChange={v => ubahForm('email', v)}
                        />
                        <BidangInput
                          icon={<FiBriefcase className="w-4 h-4" />}
                          label="Instansi / Perusahaan"
                          placeholder="contoh: PT. Digital Nusantara"
                          nilai={form.instansi}
                          onChange={v => ubahForm('instansi', v)}
                        />
                      </motion.div>
                    )}

                    {/* ── LANGKAH 2: BIDANG KERJASAMA ── */}
                    {langkah === 2 && (
                      <motion.div
                        key="langkah2"
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -40, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <div className="speech-bubble text-xs mb-4">
                          🤝 Kerjasama seperti apa yang kamu bayangkan?
                        </div>

                        {/* Pilih bidang ketertarikan */}
                        <div>
                          <label className="font-bold text-xs text-[#0a0a0a]/70 uppercase tracking-wider block mb-2">
                            Bidang Ketertarikan *
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {pilihanKetertarikan.map(({ label, emoji }) => {
                              const aktif = form.ketertarikan.includes(label)
                              return (
                                <motion.button
                                  key={label}
                                  type="button"
                                  onClick={() => toggleKetertarikan(label)}
                                  whileHover={{ y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="flex items-center gap-2 px-3 py-2 text-left font-bold text-xs transition-all"
                                  style={{
                                    background: aktif ? '#8d55e8' : 'white',
                                    color: aktif ? 'white' : '#0a0a0a',
                                    border: `2px solid ${aktif ? '#8d55e8' : '#0a0a0a'}`,
                                    boxShadow: aktif ? '2px 2px 0 #5b21b6' : '2px 2px 0 #0a0a0a',
                                  }}
                                >
                                  <span>{emoji}</span>
                                  <span className="truncate">{label}</span>
                                </motion.button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Pilih jenis kerjasama */}
                        <div>
                          <label className="font-bold text-xs text-[#0a0a0a]/70 uppercase tracking-wider block mb-2">
                            Jenis Kerjasama *
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {pilihanKerjasama.map(jenis => {
                              const aktif = form.jenisKerjasama === jenis
                              return (
                                <motion.button
                                  key={jenis}
                                  type="button"
                                  onClick={() => ubahForm('jenisKerjasama', jenis)}
                                  whileHover={{ y: -1 }}
                                  className="font-bold text-[11px] px-3 py-1.5 transition-all"
                                  style={{
                                    background: aktif ? '#ffd700' : 'white',
                                    color: '#0a0a0a',
                                    border: `2px solid ${aktif ? '#f59e0b' : '#0a0a0a'}`,
                                    boxShadow: aktif ? '2px 2px 0 #f59e0b' : '2px 2px 0 #0a0a0a',
                                  }}
                                >
                                  {jenis}
                                </motion.button>
                              )
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* ── LANGKAH 3: PESAN ── */}
                    {langkah === 3 && (
                      <motion.div
                        key="langkah3"
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -40, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <div className="speech-bubble text-xs mb-4">
                          📝 Ceritakan lebih detail ide atau proyekmu!
                        </div>
                        <div>
                          <label className="font-bold text-xs text-[#0a0a0a]/70 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                            <FiMessageSquare className="w-3.5 h-3.5" />
                            Pesan / Deskripsi Proyek *
                          </label>
                          <textarea
                            value={form.pesan}
                            onChange={e => ubahForm('pesan', e.target.value)}
                            rows={5}
                            placeholder="Ceritakan lebih lanjut tentang ide kerjasama, timeline, atau hal lain yang ingin disampaikan..."
                            className="w-full p-3 font-medium text-sm text-[#0a0a0a] resize-none outline-none"
                            style={{
                              background: 'white',
                              border: '2px solid #0a0a0a',
                              boxShadow: '3px 3px 0 #0a0a0a',
                            }}
                          />
                          <p className="text-[10px] text-[#0a0a0a]/40 font-bold mt-1">
                            {form.pesan.length} karakter (minimal 10)
                          </p>
                        </div>

                        {/* Ringkasan */}
                        <div className="p-3 text-xs space-y-1" style={{ background: '#f0f0eb', border: '2px solid #0a0a0a' }}>
                          <div className="font-comic text-[10px] text-[#0a0a0a]/50 mb-2 tracking-wider">RINGKASAN KUESIONER</div>
                          <div className="font-bold text-[#0a0a0a]">👤 {form.nama} — {form.email}</div>
                          {form.instansi && <div className="text-[#0a0a0a]/60">🏢 {form.instansi}</div>}
                          <div className="text-[#8d55e8] font-bold">🤝 {form.jenisKerjasama}</div>
                          {form.ketertarikan.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {form.ketertarikan.map(k => (
                                <span key={k} className="px-1.5 py-0.5 text-[9px] font-bold text-white" style={{ background: '#8d55e8' }}>
                                  {k}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ) : (
                  // ── SUKSES ──
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8 space-y-4"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <FiCheckCircle className="w-16 h-16 mx-auto text-[#22c55e]" />
                    </motion.div>
                    <div className="font-comic text-xl text-[#0a0a0a]">TERKIRIM! 🎉</div>
                    <p className="text-sm font-medium text-[#0a0a0a]/70 leading-relaxed">
                      Terima kasih, <strong>{form.nama}</strong>!<br />
                      Saya akan menghubungi kamu di <strong>{form.email}</strong> dalam 1–2 hari kerja.
                    </p>
                    <div
                      className="speech-bubble text-xs inline-block"
                      style={{ background: '#f0fdf4', borderColor: '#22c55e', boxShadow: '3px 3px 0 #22c55e' }}
                    >
                      💪 Siap berkolaborasi bareng!
                    </div>
                    <motion.button
                      onClick={reset}
                      whileHover={{ y: -2 }}
                      className="block mx-auto font-comic text-xs px-6 py-2 mt-2"
                      style={{ background: '#8d55e8', color: 'white', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
                    >
                      TUTUP
                    </motion.button>
                  </motion.div>
                )}
              </div>

              {/* Footer tombol navigasi */}
              {!terkirim && (
                <div
                  className="flex items-center justify-between px-5 py-3"
                  style={{ borderTop: '3px solid #0a0a0a', background: '#f0f0eb' }}
                >
                  {langkah > 1 ? (
                    <motion.button
                      onClick={() => setLangkah(l => l - 1)}
                      whileHover={{ x: -2 }}
                      className="font-comic text-xs px-4 py-2"
                      style={{ border: '2px solid #0a0a0a', background: 'white', boxShadow: '2px 2px 0 #0a0a0a' }}
                    >
                      ← KEMBALI
                    </motion.button>
                  ) : (
                    <div />
                  )}

                  {langkah < 3 ? (
                    <motion.button
                      onClick={() => langkahValid() && setLangkah(l => l + 1)}
                      whileHover={langkahValid() ? { x: 2 } : {}}
                      className="font-comic text-xs px-5 py-2"
                      style={{
                        background: langkahValid() ? '#8d55e8' : '#ccc',
                        color: 'white',
                        border: '2px solid #0a0a0a',
                        boxShadow: langkahValid() ? '3px 3px 0 #0a0a0a' : 'none',
                        cursor: langkahValid() ? 'pointer' : 'not-allowed',
                      }}
                    >
                      LANJUT →
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={() => langkahValid() && kirimForm()}
                      whileHover={langkahValid() ? { y: -2, scale: 1.04 } : {}}
                      whileTap={langkahValid() ? { scale: 0.95 } : {}}
                      className="font-comic text-xs px-5 py-2 flex items-center gap-2"
                      style={{
                        background: langkahValid() ? '#22c55e' : '#ccc',
                        color: 'white',
                        border: '2px solid #0a0a0a',
                        boxShadow: langkahValid() ? '3px 3px 0 #0a0a0a' : 'none',
                        cursor: langkahValid() ? 'pointer' : 'not-allowed',
                      }}
                    >
                      {loading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <FiSend className="w-3.5 h-3.5" />
                      )}
                      {loading ? 'MENGIRIM...' : 'KIRIM SEKARANG'}
                    </motion.button>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ── Helper komponen input ──
function BidangInput({
  icon,
  label,
  placeholder,
  nilai,
  type = 'text',
  onChange,
}: {
  icon: React.ReactNode
  label: string
  placeholder: string
  nilai: string
  type?: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <label className="font-bold text-xs text-[#0a0a0a]/70 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
        {icon}{label}
      </label>
      <input
        type={type}
        value={nilai}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 font-medium text-sm text-[#0a0a0a] outline-none"
        style={{
          background: 'white',
          border: '2px solid #0a0a0a',
          boxShadow: '3px 3px 0 #0a0a0a',
        }}
      />
    </div>
  )
}
