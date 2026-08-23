'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiSend, FiCheck, FiAward, FiUser, FiGlobe, FiHeart } from 'react-icons/fi'

// ─── Konfigurasi EmailJS ────────────────────────────────────────────────
// Isi dengan data dari dashboard emailjs.com kamu
// Service ID: buat service "Gmail" di EmailJS → hubungkan ke rizkihub7@gmail.com
// Template ID: buat template dengan variabel {{nama}}, {{instansi}}, {{kategori}}, {{harapan}}, {{nomor}}, {{tanggal}}
// Public Key: ada di Account > API Keys di EmailJS
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? 'YOUR_PUBLIC_KEY'

// ─── Helper: buat nomor unik ────────────────────────────────────────────
function buatNomor(): string {
  const tgl = new Date()
  const tahun = tgl.getFullYear()
  const bulan = String(tgl.getMonth() + 1).padStart(2, '0')
  const hari  = String(tgl.getDate()).padStart(2, '0')
  const acak  = Math.random().toString(36).substring(2, 7).toUpperCase()
  return `SERT-${tahun}${bulan}${hari}-${acak}`
}

// ─── Canvas: render sertifikat ──────────────────────────────────────────
function renderSertifikat(
  canvas: HTMLCanvasElement,
  data: { nama: string; instansi: string; kategori: string; harapan: string; nomor: string; tanggal: string }
) {
  const W = 1200, H = 850
  canvas.width  = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!

  // Background putih
  ctx.fillStyle = '#fafaf7'
  ctx.fillRect(0, 0, W, H)

  // Border komik
  ctx.strokeStyle = '#0a0a0a'
  ctx.lineWidth = 8
  ctx.strokeRect(16, 16, W - 32, H - 32)
  ctx.strokeStyle = '#ffd700'
  ctx.lineWidth = 4
  ctx.strokeRect(26, 26, W - 52, H - 52)

  // Header strip biru
  ctx.fillStyle = '#1a5cff'
  ctx.fillRect(16, 16, W - 32, 120)

  // Teks header
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 36px Arial'
  ctx.textAlign = 'center'
  ctx.fillText('SERTIFIKAT DIGITAL PORTOFOLIO', W / 2, 70)
  ctx.font = '18px Arial'
  ctx.fillStyle = 'rgba(255,255,255,0.8)'
  ctx.fillText('rizki-habibi-portofolio.vercel.app', W / 2, 105)

  // Badan sertifikat
  ctx.fillStyle = '#0a0a0a'
  ctx.font = '20px Arial'
  ctx.textAlign = 'center'
  ctx.fillText('Dengan bangga menyatakan bahwa', W / 2, 200)

  // Nama penerima
  ctx.font = 'bold 54px Arial'
  ctx.fillStyle = '#1a5cff'
  ctx.fillText(data.nama || 'Nama Penerima', W / 2, 275)

  // Garis dekoratif
  ctx.fillStyle = '#ffd700'
  ctx.fillRect(W / 2 - 220, 290, 440, 5)

  // Instansi
  ctx.font = '22px Arial'
  ctx.fillStyle = '#0a0a0a'
  ctx.fillText(`dari ${data.instansi || 'Instansi / Umum'}`, W / 2, 340)

  // Kategori badge
  ctx.fillStyle = '#1a5cff'
  ctx.fillRect(W / 2 - 140, 360, 280, 44)
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 18px Arial'
  ctx.fillText(data.kategori.toUpperCase(), W / 2, 388)

  // Deskripsi utama
  ctx.font = '19px Arial'
  ctx.fillStyle = '#0a0a0a'
  ctx.fillText('telah mengunjungi dan membaca portofolio digital', W / 2, 450)
  ctx.font = 'bold 19px Arial'
  ctx.fillStyle = '#1a5cff'
  ctx.fillText('Rizki Habibi — Pengembang Web & Inovator Digital', W / 2, 480)
  ctx.font = '17px Arial'
  ctx.fillStyle = '#0a0a0a'
  ctx.fillText('dan mengalami dampak virtualisasi & digitalisasi melalui portofolio interaktif ini.', W / 2, 515)

  // Harapan (jika ada)
  if (data.harapan) {
    ctx.font = 'italic 16px Arial'
    ctx.fillStyle = '#555'
    const maxLen = 80
    const harapanTeks = data.harapan.length > maxLen ? data.harapan.slice(0, maxLen) + '...' : data.harapan
    ctx.fillText(`"${harapanTeks}"`, W / 2, 555)
  }

  // Garis bawah
  ctx.fillStyle = '#0a0a0a'
  ctx.fillRect(80, 585, W - 160, 2)

  // Tanggal & Nomor
  ctx.font = '16px Arial'
  ctx.textAlign = 'left'
  ctx.fillStyle = '#0a0a0a'
  ctx.fillText(`Tanggal: ${data.tanggal}`, 100, 620)
  ctx.fillText(`No. Sertifikat: ${data.nomor}`, 100, 645)

  // QR Code placeholder (teks URL)
  ctx.strokeStyle = '#0a0a0a'
  ctx.lineWidth = 2
  ctx.strokeRect(W - 220, 580, 130, 130)
  ctx.font = '11px Arial'
  ctx.textAlign = 'center'
  ctx.fillStyle = '#0a0a0a'
  ctx.fillText('SCAN', W - 155, 635)
  ctx.fillText('rizki-habibi-', W - 155, 655)
  ctx.fillText('portofolio', W - 155, 673)
  ctx.fillText('.vercel.app', W - 155, 691)

  // Tanda tangan
  ctx.textAlign = 'left'
  ctx.font = 'bold 18px Arial'
  ctx.fillStyle = '#1a5cff'
  ctx.fillText('Rizki Habibi', 100, 720)
  ctx.font = '14px Arial'
  ctx.fillStyle = '#555'
  ctx.fillText('Web Developer & Innovator — Jember, Indonesia', 100, 742)
  ctx.fillText('rizkihub7@gmail.com  |  rizki-habibi-portofolio.vercel.app', 100, 762)

  // TTE indicator
  ctx.fillStyle = '#22c55e'
  ctx.fillRect(100, 775, 180, 28)
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 12px Arial'
  ctx.textAlign = 'center'
  ctx.fillText('✓ TANDA TANGAN ELEKTRONIK', 190, 794)
}

// ─── Komponen utama ─────────────────────────────────────────────────────
export default function SertifikatDigital() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [step, setStep] = useState<'form' | 'preview' | 'done'>('form')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    nama: '',
    instansi: '',
    kategori: 'masyarakat',
    harapan: '',
  })

  const [nomor, setNomor] = useState('')
  const [tanggal, setTanggal] = useState('')

  // Generate sertifikat di canvas saat preview
  useEffect(() => {
    if (step === 'preview' && canvasRef.current) {
      renderSertifikat(canvasRef.current, { ...form, nomor, tanggal })
    }
  }, [step, form, nomor, tanggal])

  const handleGenerate = () => {
    if (!form.nama.trim()) { setError('Nama tidak boleh kosong'); return }
    setError('')
    const n = buatNomor()
    const t = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    setNomor(n)
    setTanggal(t)
    setStep('preview')
  }

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    link.download = `sertifikat-${form.nama.replace(/\s+/g, '-').toLowerCase()}-${nomor}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const handleKirimEmail = async () => {
    setLoading(true)
    setError('')
    try {
      // Import EmailJS hanya di client
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nama:      form.nama,
          instansi:  form.instansi || '-',
          kategori:  form.kategori,
          harapan:   form.harapan || '-',
          nomor,
          tanggal,
          to_email:  'rizkihub7@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      )
      setStep('done')
    } catch (err) {
      console.error(err)
      setError('Gagal kirim ke Gmail. Sertifikat tetap bisa diunduh.')
    } finally {
      setLoading(false)
    }
  }

  const kategoriOptions = [
    { value: 'kampus',    label: '🏫 Kampus / Akademik' },
    { value: 'instansi',  label: '🏢 Instansi / Organisasi' },
    { value: 'masyarakat',label: '👥 Masyarakat / Umum' },
    { value: 'vtuber',    label: '🎭 Vtuber / Komunitas Digital' },
    { value: 'lainnya',   label: '🌐 Lainnya' },
  ]

  return (
    <section id="sertifikat-digital" className="py-16 px-3 sm:px-4 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle,#fff 1.5px,transparent 1.5px)', backgroundSize: '14px 14px' }} />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 font-bold text-[10px] tracking-[0.3em] px-4 py-1 mb-4"
            style={{ background: '#ffd700', color: '#0a0a0a', border: '2px solid #0a0a0a' }}>
            <FiAward className="w-3 h-3" /> SERTIFIKAT DIGITAL GRATIS
          </div>
          <h2 className="font-comic text-3xl sm:text-4xl text-white mb-3" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            🏆 AMBIL SERTIFIKATMU
          </h2>
          <p className="text-white/50 text-sm font-bold max-w-lg mx-auto leading-relaxed">
            Sudah baca portofolio ini sampai sini? Keren. Ambil sertifikat digital sebagai kenang-kenangan — gratis, langsung jadi, bisa diunduh.
          </p>
        </motion.div>

        {/* Step: Form */}
        <AnimatePresence mode="wait">
          {step === 'form' && (
            <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div className="space-y-4 p-6 sm:p-8" style={{ border: '3px solid #ffd700', background: '#111', boxShadow: '6px 6px 0 #ffd700' }}>

                {/* Nama */}
                <div>
                  <label className="flex items-center gap-2 font-comic text-xs text-white/60 mb-1.5 tracking-widest">
                    <FiUser className="w-3 h-3" /> NAMA LENGKAP <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.nama}
                    onChange={e => setForm(f => ({ ...f, nama: e.target.value }))}
                    placeholder="Tulis nama kamu..."
                    className="w-full bg-transparent font-bold text-sm text-white outline-none py-2.5 px-3"
                    style={{ border: '2px solid #333', caretColor: '#ffd700' }}
                  />
                </div>

                {/* Instansi */}
                <div>
                  <label className="flex items-center gap-2 font-comic text-xs text-white/60 mb-1.5 tracking-widest">
                    <FiGlobe className="w-3 h-3" /> ASAL (opsional)
                  </label>
                  <input
                    type="text"
                    value={form.instansi}
                    onChange={e => setForm(f => ({ ...f, instansi: e.target.value }))}
                    placeholder="Nama kampus, instansi, atau kota..."
                    className="w-full bg-transparent font-bold text-sm text-white outline-none py-2.5 px-3"
                    style={{ border: '2px solid #333', caretColor: '#ffd700' }}
                  />
                </div>

                {/* Kategori */}
                <div>
                  <label className="font-comic text-xs text-white/60 mb-1.5 tracking-widest block">KATEGORI</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {kategoriOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setForm(f => ({ ...f, kategori: opt.value }))}
                        className="py-2 px-3 font-bold text-xs text-left transition-all"
                        style={{
                          background: form.kategori === opt.value ? '#ffd700' : 'transparent',
                          color:      form.kategori === opt.value ? '#0a0a0a' : 'rgba(255,255,255,0.5)',
                          border:     `2px solid ${form.kategori === opt.value ? '#ffd700' : '#333'}`,
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Harapan */}
                <div>
                  <label className="flex items-center gap-2 font-comic text-xs text-white/60 mb-1.5 tracking-widest">
                    <FiHeart className="w-3 h-3" /> HARAPAN KE DEPAN (opsional)
                  </label>
                  <textarea
                    value={form.harapan}
                    onChange={e => setForm(f => ({ ...f, harapan: e.target.value }))}
                    placeholder="Apa yang kamu harapkan setelah melihat portofolio ini?"
                    rows={3}
                    className="w-full bg-transparent font-bold text-sm text-white outline-none py-2.5 px-3 resize-none"
                    style={{ border: '2px solid #333', caretColor: '#ffd700' }}
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-xs font-bold">{error}</p>
                )}

                <motion.button
                  onClick={handleGenerate}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full font-comic text-sm py-3 text-[#0a0a0a] flex items-center justify-center gap-2"
                  style={{ background: '#ffd700', border: '2px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a' }}
                >
                  <FiAward className="w-4 h-4" />
                  BUAT SERTIFIKAT
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step: Preview */}
          {step === 'preview' && (
            <motion.div key="preview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div className="mb-4 p-4 text-center" style={{ border: '2px solid #22c55e', background: '#022c1d' }}>
                <p className="text-[#22c55e] font-comic text-sm">✓ Sertifikat siap! Nomor: <strong>{nomor}</strong></p>
              </div>

              {/* Canvas render */}
              <div className="overflow-auto mb-4" style={{ border: '3px solid #333' }}>
                <canvas
                  ref={canvasRef}
                  className="block"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  className="font-comic text-sm py-3 text-[#0a0a0a] flex items-center justify-center gap-2"
                  style={{ background: '#ffd700', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
                >
                  <FiDownload className="w-4 h-4" /> UNDUH PNG
                </motion.button>

                <motion.button
                  onClick={handleKirimEmail}
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }} whileTap={{ scale: 0.97 }}
                  className="font-comic text-sm py-3 text-white flex items-center justify-center gap-2 disabled:opacity-60"
                  style={{ background: '#1a5cff', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
                >
                  {loading
                    ? <><span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> Mengirim...</>
                    : <><FiSend className="w-4 h-4" /> KIRIM KE GMAIL RIZKI</>
                  }
                </motion.button>
              </div>

              {error && <p className="text-red-400 text-xs font-bold mt-3 text-center">{error}</p>}

              <button
                onClick={() => setStep('form')}
                className="w-full mt-3 font-bold text-xs text-white/30 hover:text-white/60 transition-colors py-2"
              >
                ← Buat ulang dengan nama berbeda
              </button>
            </motion.div>
          )}

          {/* Step: Done */}
          {step === 'done' && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center"
              style={{ border: '3px solid #22c55e', background: '#022c1d', boxShadow: '6px 6px 0 #22c55e' }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl mb-4"
              >🎉</motion.div>
              <div className="font-comic text-2xl text-[#22c55e] mb-2 flex items-center justify-center gap-2">
                <FiCheck className="w-6 h-6" /> BERHASIL!
              </div>
              <p className="text-white/70 text-sm font-bold mb-2">
                Sertifikatmu sudah terkirim ke Gmail Rizki.
              </p>
              <p className="text-white/40 text-xs mb-6">
                No. Sertifikat: <span className="text-[#22c55e]">{nomor}</span> — {tanggal}
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="font-comic text-sm px-5 py-2.5 text-[#0a0a0a] flex items-center gap-2"
                  style={{ background: '#ffd700', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
                >
                  <FiDownload className="w-4 h-4" /> Unduh Sertifikat
                </motion.button>
                <button
                  onClick={() => { setStep('form'); setForm({ nama: '', instansi: '', kategori: 'masyarakat', harapan: '' }) }}
                  className="font-comic text-xs px-4 py-2.5 text-white/50 hover:text-white transition-colors"
                  style={{ border: '2px solid #333' }}
                >
                  Buat untuk orang lain
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info kecil */}
        <p className="text-center text-white/20 text-[10px] font-bold mt-6 tracking-widest">
          ✦ SERTIFIKAT DIKIRIM KE rizkihub7@gmail.com SEBAGAI DATA TAMU ✦
        </p>
      </div>
    </section>
  )
}
