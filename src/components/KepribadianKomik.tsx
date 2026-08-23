'use client'

import { motion } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

// Kemampuan unik & minat luas
const kemampuanUnik = [
  {
    icon: '💬',
    judul: 'Komunikasi yang Tepat Sasaran',
    desc: 'Bisa menyampaikan hal penting dengan cara yang mudah dimengerti — baik ke orang teknis maupun non-teknis. Lebih suka to the point, tapi tetap ramah dan hangat.',
    warna: '#1a5cff',
    bg: '#e8f0ff',
    tag: 'KOMUNIKASI',
  },
  {
    icon: '🔮',
    judul: 'Membaca & Memprediksi Pola',
    desc: 'Punya kebiasaan mengamati tren, menganalisis situasi, dan membayangkan kemungkinan yang belum terjadi. Sering terbukti tepat — terutama soal teknologi dan dinamika sosial digital.',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    tag: 'ANALISIS TREN',
  },
  {
    icon: '🛡️',
    judul: 'Tangguh di Bawah Tekanan',
    desc: 'Dalam kondisi krisis, deadline, atau situasi sulit sekalipun — fokus justru muncul. Bukan tipe yang mundur duluan. Fisik terlatih, bisa berjalan 20 km tanpa henti, dan terbiasa hadir di situasi yang tidak terduga.',
    warna: '#e63329',
    bg: '#fef2f2',
    tag: 'KETANGGUHAN',
  },
  {
    icon: '🥋',
    judul: 'Bela Diri & Kesadaran Fisik',
    desc: 'Memiliki dasar bela diri dan stamina fisik yang terus dijaga. Bukan untuk pamer — tapi sebagai bentuk disiplin diri, kesiapan menghadapi kondisi apapun, dan keyakinan bahwa tubuh yang sehat adalah pondasi produktivitas.',
    warna: '#0891b2',
    bg: '#ecfeff',
    tag: 'FISIK & DISIPLIN',
  },
  {
    icon: '⚖️',
    judul: 'Prinsip Keadilan Berbasis Bukti',
    desc: 'Keadilan tidak dinilai dari status atau jabatan — tapi dari kenyataan dan bukti yang ada. Tidak mudah dimanipulasi, tidak diam ketika ada yang salah, dan selalu berdiri di sisi fakta meski tidak populer.',
    warna: '#0a0a0a',
    bg: '#f5f5f0',
    tag: 'INTEGRITAS',
  },
  {
    icon: '🔍',
    judul: 'Minat Hukum & Regulasi Digital',
    desc: 'Memahami konsep HAKI, privasi data, lisensi open source, dan regulasi teknologi. Penting untuk developer yang membangun produk yang benar-benar bertanggung jawab.',
    warna: '#22c55e',
    bg: '#f0fdf4',
    tag: 'HUKUM DIGITAL',
  },
  {
    icon: '🧠',
    judul: 'Filsafat — Cara Berpikir Lain',
    desc: 'Suka berpikir dari sudut pandang yang tidak biasa. Filsafat mengajarkan cara mempertanyakan hal yang dianggap sudah pasti — berguna banget saat merancang sistem atau debat ide.',
    warna: '#0891b2',
    bg: '#ecfeff',
    tag: 'FILSAFAT',
  },
  {
    icon: '🌌',
    judul: 'Astronomi & Kosmologi',
    desc: 'Tertarik pada skala besar alam semesta — dari teori relativitas, lubang hitam, sampai kemungkinan kehidupan di luar bumi. Hobi ini melatih cara berpikir tentang "apa yang mungkin ada di luar yang kita tahu".',
    warna: '#1a5cff',
    bg: '#e8f0ff',
    tag: 'ASTRONOMI',
  },
]

// Kekurangan — jujur & santai
const kekurangan = [
  {
    icon: '😶',
    judul: 'Mood-driven',
    desc: 'Gampang nggak mood kalau kondisi sekitar nggak kondusif atau kerja dipaksakan tanpa makna. Solusinya simpel: komunikasi dulu, kasih ruang gerak, beres.',
    warna: '#f59e0b',
  },
  {
    icon: '🚫',
    judul: 'Anti-ribet',
    desc: 'Kalau ada cara lebih simpel, saya akan pilih itu. Nggak suka prosedur berlebihan yang ujung-ujungnya buang waktu. Lebih suka langsung ke inti masalah.',
    warna: '#e63329',
  },
  {
    icon: '🤫',
    judul: 'Perlu Ruang Pribadi di Momen Tertentu',
    desc: 'Ada kalanya butuh jarak dari keramaian untuk mikir jernih atau recharge. Bukan berarti menghilang — tapi kalau ganggu di saat yang salah, bisa kurang responsif.',
    warna: '#8b5cf6',
  },
]

export default function KepribadianKomik() {
  return (
    <section
      id="kepribadian"
      className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden"
      style={{ background: '#fafaf7' }}
    >
      <div className="halftone-bg" />
      <div className="max-w-5xl mx-auto relative z-10">

        <HeaderBab
          nomor="SAYA"
          judul="LEBIH DARI SEKADAR DEVELOPER"
          warna="#8b5cf6"
          subtitle="Kemampuan, minat, dan sisi manusiawi yang membentuk siapa saya"
        />

        {/* Speech bubble intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="speech-bubble inline-block text-sm max-w-xl">
            🙋 Saya bukan robot. Ini versi jujur tentang kelebihan dan kekurangan saya — biar kita bisa kerja sama dengan ekspektasi yang realistis.
          </div>
        </motion.div>

        {/* Kemampuan unik */}
        <div className="mb-12">
          <div className="font-comic text-xl text-[#0a0a0a] mb-5 flex items-center gap-2">
            <span>⚡</span> KEMAMPUAN & MINAT YANG MENONJOL
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kemampuanUnik.map((item, i) => (
              <motion.div
                key={item.judul}
                initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: i * 0.07, type: 'spring', stiffness: 130 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -5 }}
                className="overflow-hidden"
                style={{
                  border: `3px solid ${item.warna}`,
                  boxShadow: `4px 4px 0 ${item.warna}`,
                  background: item.bg,
                }}
              >
                {/* Strip atas */}
                <div
                  className="px-3 py-1.5 flex items-center justify-between"
                  style={{ background: item.warna, borderBottom: `2px solid #0a0a0a` }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-comic text-[9px] text-white tracking-widest">{item.tag}</span>
                </div>
                <div className="p-4">
                  <div className="font-comic text-sm mb-2" style={{ color: item.warna }}>
                    {item.judul}
                  </div>
                  <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kekurangan — dark panel, jujur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="comic-panel-dark p-6 sm:p-8"
        >
          <div className="font-comic text-xl text-white mb-2 flex items-center gap-2">
            <span>🪞</span> KEKURANGAN — JUJUR AJA
          </div>
          <p className="text-white/40 text-sm font-bold mb-6">
            Saya percaya transparansi lebih baik daripada pura-pura sempurna. Ini bukan kelemahan fatal, tapi hal yang perlu kamu tahu supaya kolaborasi kita nyaman.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {kekurangan.map((item, i) => (
              <motion.div
                key={item.judul}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-4 relative"
                style={{
                  border: `2px solid ${item.warna}44`,
                  background: `${item.warna}0d`,
                }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-comic text-sm mb-1.5" style={{ color: item.warna }}>
                  {item.judul}
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Cara terbaik bekerja sama */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 p-4 border-t border-white/10"
          >
            <div className="font-comic text-base text-[#ffd700] mb-3 flex items-center gap-2">
              💡 CARA TERBAIK BEKERJA SAMA DENGAN SAYA
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { icon: '🗣️', teks: 'Komunikasi langsung — jangan kasih sinyal diam atau basa-basi terlalu panjang' },
                { icon: '😌', teks: 'Santai aja dulu — nggak perlu formal kalau itu malah bikin kaku dan lambat' },
                { icon: '📋', teks: 'Jelasin apa yang kamu mau dari awal — biar saya bisa langsung eksekusi dengan benar' },
                { icon: '⏳', teks: 'Kalau butuh waktu, bilang aja — saya menghargai kejujuran lebih dari kepura-puraan' },
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-white/70 text-xs font-bold">
                  <span className="text-base flex-shrink-0">{tip.icon}</span>
                  <span>{tip.teks}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
