'use client'

import { motion } from 'framer-motion'
import { FiMail, FiSend } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

// ─── Data tujuan ──────────────────────────────────────────────────────
const tujuanKerja = [
  {
    icon: '💻',
    judul: 'Full Stack Web Developer',
    detail: 'Laravel + Next.js + MySQL. Bisa handle frontend sampai backend sendiri. Sudah berpengalaman membangun sistem nyata yang dipakai institusi.',
    prioritas: 'UTAMA',
    warna: '#1a5cff',
    bg: '#e8f0ff',
  },
  {
    icon: '🌐',
    judul: 'Remote / Hybrid',
    detail: 'Lebih produktif di lingkungan yang fleksibel. Bisa kerja dari mana saja — Jember, Jakarta, atau bahkan luar negeri. Komunikasi async OK.',
    prioritas: 'PREFERENSI',
    warna: '#22c55e',
    bg: '#f0fdf4',
  },
  {
    icon: '🚀',
    judul: 'Startup / Perusahaan Berdampak',
    detail: 'Lebih tertarik dengan company yang punya misi jelas daripada korporat besar tanpa arah. Berdampak nyata > gaji besar tanpa makna.',
    prioritas: 'NILAI',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
  },
  {
    icon: '📚',
    judul: 'Freelance & Part-time',
    detail: 'Terbuka untuk project-based sambil mengembangkan Gelar.id. Flexible hour, bayaran fair, dan scope yang jelas dari awal.',
    prioritas: 'TERBUKA',
    warna: '#f59e0b',
    bg: '#fffbeb',
  },
]

const tujuanKuliah = [
  {
    icon: '🎓',
    judul: 'S2 / Magister — Prioritas',
    detail: 'Bidang: Sistem Informasi, Teknologi Digital, Computer Science, atau yang relevan. Gelar M.Kom, M.T.I, atau setara. Target 2027–2028.',
    tipe: 'DALAM NEGERI',
    warna: '#1a5cff',
    bg: '#e8f0ff',
  },
  {
    icon: '✈️',
    judul: 'Luar Negeri — Juga Terbuka',
    detail: 'Malaysia, Singapura, Jepang, atau negara mana saja. Tidak mempermasalahkan bahasa selama ada support adaptasi. Siap relokasi.',
    tipe: 'LUAR NEGERI',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
  },
  {
    icon: '📋',
    judul: 'D1 / Diploma Singkat',
    detail: 'Kalau programnya focused dan berdampak nyata, D1 pun tidak masalah. Yang penting gelar resmi dan prosesnya tidak bertele-tele.',
    tipe: 'FLEKSIBEL',
    warna: '#22c55e',
    bg: '#f0fdf4',
  },
  {
    icon: '⚡',
    judul: 'Proses Cepat < 1 Bulan',
    detail: 'Tidak punya waktu untuk proses panjang yang tidak jelas ujungnya. Kalau memang ada beasiswa atau sponsorship, langsung ke intinya.',
    tipe: 'SYARAT PENTING',
    warna: '#e63329',
    bg: '#fef2f2',
  },
]

const syarat = [
  { icon: '💰', teks: 'Biaya ditanggung penuh (atau sebagian besar)' },
  { icon: '📍', teks: 'Remote atau hybrid — tidak harus pindah kota untuk kerja' },
  { icon: '⏰', teks: 'Proses pendaftaran/seleksi < 1 bulan' },
  { icon: '📜', teks: 'Gelar resmi yang diakui secara nasional atau internasional' },
  { icon: '🤝', teks: 'Tidak ada ikatan dinas yang tidak masuk akal' },
  { icon: '🎯', teks: 'Relevan dengan background web dev, sistem informasi, atau tech' },
]

export default function TujuanKarir() {
  const pesanWA = `Halo Rizki! Saya ingin menawarkan kesempatan [kerja/kuliah] untuk kamu.\n\nDetail:\n- Nama: ...\n- Institusi/Perusahaan: ...\n- Tawaran: ...\n- Kontak lanjut: ...`

  return (
    <section id="tujuan-detail" className="py-16 px-3 sm:px-4 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Halftone */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle,#fff 1.5px,transparent 1.5px)', backgroundSize: '14px 14px' }} />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-block font-bold text-[10px] tracking-[0.3em] px-4 py-1 mb-4"
            style={{ background: '#ffd700', color: '#0a0a0a', border: '2px solid #0a0a0a' }}>
            TERBUKA UNTUK TAWARAN SERIUS
          </div>
          <h2 className="font-comic text-4xl sm:text-5xl text-white mb-3"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            🎯 TUJUAN & KEINGINAN
          </h2>
          <p className="text-white/50 text-sm font-bold max-w-xl mx-auto leading-relaxed">
            Ini bukan wishlist kosong — ini target konkret yang sedang saya kejar.
            Kalau kamu punya tawaran yang cocok, langsung hubungi saja.
          </p>
        </motion.div>

        {/* Syarat umum */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mb-10 p-5"
          style={{ border: '2px solid #ffd70055', background: 'rgba(255,215,0,0.05)' }}
        >
          <div className="font-comic text-[#ffd700] text-sm mb-4 flex items-center gap-2">
            ✅ SYARAT UMUM YANG SAYA CARI
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {syarat.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-2 text-xs font-bold text-white/70"
              >
                <span className="text-base flex-shrink-0">{s.icon}</span>
                <span className="leading-relaxed">{s.teks}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">

          {/* ── KERJA ── */}
          <div>
            <div className="font-comic text-white text-lg mb-4 flex items-center gap-2">
              <span>💼</span> TUJUAN KERJA
            </div>
            <div className="space-y-3">
              {tujuanKerja.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.07, type: 'spring', stiffness: 140 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-3 p-4"
                  style={{ border: `2px solid ${item.warna}44`, background: item.warna + '0d' }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-comic text-sm" style={{ color: item.warna }}>{item.judul}</span>
                      <span className="font-bold text-[9px] px-1.5 py-0.5"
                        style={{ background: item.warna + '22', color: item.warna, border: `1px solid ${item.warna}44` }}>
                        {item.prioritas}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 font-bold leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── KULIAH ── */}
          <div>
            <div className="font-comic text-white text-lg mb-4 flex items-center gap-2">
              <span>🎓</span> TUJUAN KULIAH GRATIS
            </div>
            <div className="space-y-3">
              {tujuanKuliah.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.07, type: 'spring', stiffness: 140 }}
                  whileHover={{ x: -4 }}
                  className="flex gap-3 p-4"
                  style={{ border: `2px solid ${item.warna}44`, background: item.warna + '0d' }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-comic text-sm" style={{ color: item.warna }}>{item.judul}</span>
                      <span className="font-bold text-[9px] px-1.5 py-0.5"
                        style={{ background: item.warna + '22', color: item.warna, border: `1px solid ${item.warna}44` }}>
                        {item.tipe}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 font-bold leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-6 sm:p-8 text-center"
          style={{ border: '3px solid #ffd700', background: 'rgba(255,215,0,0.06)', boxShadow: '6px 6px 0 #ffd700' }}
        >
          <div className="font-comic text-[#ffd700] text-xl mb-2">📩 PUNYA TAWARAN?</div>
          <p className="text-white/60 text-sm font-bold mb-5 max-w-md mx-auto leading-relaxed">
            Kalau kamu mewakili kampus, perusahaan, atau program beasiswa — dan tawaran kamu sesuai kriteria di atas — jangan ragu hubungi langsung. Saya respon serius.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.a
              href={`https://wa.me/62882009725053?text=${encodeURIComponent(pesanWA)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 font-comic text-sm px-6 py-3 text-white"
              style={{ background: '#25d366', border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a' }}
            >
              <SiWhatsapp className="w-4 h-4" />
              Hubungi via WA
            </motion.a>
            <motion.a
              href="mailto:rizkihub7@gmail.com?subject=Tawaran Kerja/Kuliah untuk Rizki&body=Halo Rizki,%0A%0ASaya ingin menawarkan:%0A%0ANama: %0AInstitusi: %0ADetail Tawaran: %0AKontak: "
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 font-comic text-sm px-6 py-3 text-white"
              style={{ background: '#1a5cff', border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a' }}
            >
              <FiMail className="w-4 h-4" />
              Kirim Email
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/rizki-habibi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 font-comic text-sm px-6 py-3 text-white"
              style={{ background: '#0a66c2', border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a' }}
            >
              <FiSend className="w-4 h-4" />
              LinkedIn
            </motion.a>
          </div>
          <p className="text-white/20 text-[10px] font-bold mt-4 tracking-widest">
            ✦ RESPON DALAM 1×24 JAM · TIDAK MERESPONS TAWARAN YANG TIDAK JELAS ✦
          </p>
        </motion.div>
      </div>
    </section>
  )
}
