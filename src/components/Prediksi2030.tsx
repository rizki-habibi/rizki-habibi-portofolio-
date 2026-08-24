'use client'

import { motion } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

const prediksi = [
  {
    tahun: '2026', icon: '🎓',
    judul: 'Gelar & Gelar.id Launch',
    detail: 'Wisuda S.Kom + Gelar.id v1.0 publik. Platform pendidikan berbasis Vtuber mulai beroperasi dengan 100+ pengguna beta.',
    status: 'SEDANG BERJALAN',
    warna: '#22c55e',
  },
  {
    tahun: '2027', icon: '🚀',
    judul: 'Gelar.id 1.000 Pengguna',
    detail: 'Pertumbuhan organik dari komunitas developer dan Vtuber Indonesia. Tim pertama terbentuk, revenue pertama masuk.',
    status: 'TARGET',
    warna: '#1a5cff',
  },
  {
    tahun: '2027', icon: '🤖',
    judul: 'AI Alliance Prototype',
    detail: 'VTA, VTI, VTU, VTE, VTO — 5 karakter AI terintegrasi di WA, Telegram, Discord. Komunitas mulai berinteraksi dengan AI.',
    status: 'RENCANA',
    warna: '#8b5cf6',
  },
  {
    tahun: '2028', icon: '💰',
    judul: 'Pendanaan & Ekspansi',
    detail: 'Target seed funding untuk Gelar.id. Ekspansi ke 5 kota: Jember, Surabaya, Malang, Yogyakarta, Jakarta.',
    status: 'VISI',
    warna: '#f59e0b',
  },
  {
    tahun: '2029', icon: '📱',
    judul: 'Platform Konten AI Live',
    detail: 'Sistem recycle content otomatis ke YouTube, Instagram, TikTok. AI content manager yang benar-benar bekerja sendiri.',
    status: 'VISI',
    warna: '#e63329',
  },
  {
    tahun: '2030', icon: '🌟',
    judul: 'Gelar.id 100.000 Pengguna',
    detail: 'Ekosistem pendidikan digital Indonesia terbesar. Series A funding. Mulai ekspansi ASEAN dengan fokus Malaysia dan Singapura.',
    status: 'MIMPI BESAR',
    warna: '#ffd700',
  },
]

const tren2030 = [
  { label: 'AI Everywhere', detail: 'AI bukan tool lagi — jadi partner kerja setiap developer. Yang tidak adaptasi akan tertinggal.', icon: '🤖', warna: '#8b5cf6' },
  { label: 'Web3 & Blockchain', detail: 'Sertifikat digital berbasis blockchain jadi standar. NFT kompetensi yang tidak bisa dipalsukan.', icon: '🔗', warna: '#f59e0b' },
  { label: 'Remote First', detail: '80% pekerjaan tech jadi fully remote. Developer Indonesia bisa kerja untuk perusahaan global.', icon: '🌍', warna: '#22c55e' },
  { label: 'Vtuber Economy', detail: 'Virtual influencer dan educator Vtuber jadi industri multi-miliar. Gelar.id ada di sini sejak awal.', icon: '🎭', warna: '#e63329' },
]

export default function Prediksi2030() {
  return (
    <section id="prediksi-2030" className="py-16 px-3 sm:px-4 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle,#fff 1.5px,transparent 1.5px)', backgroundSize: '14px 14px' }} />
      <div className="max-w-5xl mx-auto relative z-10">
        <HeaderBab nomor="2030" judul="PREDIKSI MASA DEPAN" warna="#ffd700" gelap subtitle="Analisis tren teknologi & roadmap personal menuju 2030" />

        {/* Timeline prediksi */}
        <div className="mb-12">
          <div className="font-comic text-white text-lg mb-6 flex items-center gap-2">
            <span>🗓️</span> TIMELINE PERSONAL 2026-2030
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: 'repeating-linear-gradient(to bottom, #ffd700 0, #ffd700 8px, transparent 8px, transparent 16px)' }} />
            <div className="space-y-5 pl-16">
              {prediksi.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-11 top-3 flex items-center justify-center w-8 h-8 text-xl"
                    style={{ background: p.warna, borderRadius: '50%', border: '3px solid #0a0a0a' }}>
                    {p.icon}
                  </div>

                  <div className="p-4" style={{ border: `2px solid ${p.warna}`, background: `${p.warna}0d` }}>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="font-comic text-xs px-2 py-0.5 text-[#0a0a0a]" style={{ background: p.warna }}>{p.tahun}</span>
                      <span className="font-comic text-sm text-white">{p.judul}</span>
                      <span className="ml-auto text-[9px] font-bold px-2 py-0.5"
                        style={{ background: p.status === 'SEDANG BERJALAN' ? '#22c55e22' : '#ffffff11', color: p.warna, border: `1px solid ${p.warna}44` }}>
                        {p.status}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 font-bold leading-relaxed">{p.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tren 2030 */}
        <div>
          <div className="font-comic text-white text-lg mb-6 flex items-center gap-2">
            <span>🔮</span> TREN TEKNOLOGI 2030 YANG SAYA PANTAU
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {tren2030.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="p-4 flex gap-3"
                style={{ border: `2px solid ${t.warna}44`, background: `${t.warna}0d` }}
              >
                <span className="text-3xl flex-shrink-0">{t.icon}</span>
                <div>
                  <div className="font-comic text-sm mb-1" style={{ color: t.warna }}>{t.label}</div>
                  <p className="text-xs text-white/60 font-bold leading-relaxed">{t.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 p-6 text-center"
          style={{ border: '2px solid #ffd70044', background: '#ffd70008' }}
        >
          <p className="font-comic text-lg text-[#ffd700] italic">
            &ldquo;Prediksi terbaik adalah yang kamu buat menjadi kenyataan sendiri.&rdquo;
          </p>
          <p className="text-white/30 text-xs mt-2">— Rizki Habibi, 2026</p>
        </motion.div>
      </div>
    </section>
  )
}
