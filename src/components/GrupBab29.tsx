'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
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

function PartikelMelayang({ warna = '#ffd700' }: { warna?: string }) {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div key={i}
          className="absolute text-sm select-none pointer-events-none"
          style={{ left: `${8 + i * 16}%`, top: `${15 + (i % 3) * 25}%`, color: warna, zIndex: 2 }}
          animate={{ y: [-5, 5, -5], rotate: [0, 20, -20, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.25 }}>
          {['⭐', '✦', '◆', '⚡', '▲', '✸'][i]}
        </motion.div>
      ))}
    </>
  )
}

/* Ch291 -- WEB3 DAN MASA DEPAN INTERNET */
function Ch291() {
  const konsep = [
    { konsep: 'Blockchain', apa: 'Database yang tersebar di ribuan node, tidak ada satu pihak yang kontrol', untuk: 'Transparansi, immutability, trustless transaction', icon: '⛓️', warna: '#f59e0b' },
    { konsep: 'Smart Contract', apa: 'Kode yang berjalan otomatis saat kondisi terpenuhi, tanpa intermediary', untuk: 'DeFi, NFT, DAO, automated agreement', icon: '📋', warna: '#8b5cf6' },
    { konsep: 'DeFi', apa: 'Decentralized Finance -- layanan keuangan tanpa bank tradisional', untuk: 'Lending, swap, yield farming, derivatives', icon: '💱', warna: '#22c55e' },
    { konsep: 'NFT', apa: 'Non-Fungible Token -- bukti kepemilikan digital yang unik dan verifiable', untuk: 'Digital art, gaming items, real estate tokenization', icon: '🖼️', warna: '#1a5cff' },
    { konsep: 'DAO', apa: 'Decentralized Autonomous Organization -- organisasi yang dikelola via vote token', untuk: 'Protocol governance, komunitas berbasis kepemilikan', icon: '🏛️', warna: '#e63329' },
    { konsep: 'Layer 2', apa: 'Chain yang beroperasi di atas blockchain utama untuk skalabilitas dan biaya murah', untuk: 'Arbitrum, Optimism, Polygon -- Ethereum lebih murah', icon: '⚡', warna: '#0891b2' },
  ]
  return (
    <PanelBab id="ch291" num="291" judul="WEB3 -- MEMAHAMI INTERNET GENERASI BERIKUTNYA" warna="#f59e0b" bg="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">
        🌐 Web1 = baca. Web2 = baca+tulis. Web3 = baca+tulis+<strong>miliki</strong>. Paradigma shift terbesar dalam sejarah internet!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {konsep.map((k, i) => (
          <motion.div key={k.konsep}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${k.warna}`, boxShadow: `4px 4px 0 ${k.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="px-4 py-2 flex items-center gap-2" style={{ background: k.warna }}>
              <span className="text-xl">{k.icon}</span>
              <span className="font-comic text-sm text-white">{k.konsep}</span>
            </div>
            <div className="p-3 space-y-2">
              <p className="text-[9px] font-bold text-[#0a0a0a]/70 leading-relaxed">{k.apa}</p>
              <div className="font-bold text-[8px] text-[#0a0a0a]/40">DIGUNAKAN UNTUK:</div>
              <p className="text-[9px] font-bold leading-relaxed" style={{ color: k.warna }}>{k.untuk}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel p-5">
        <div className="font-comic text-lg text-[#0a0a0a] mb-3">⚖️ WEB3: HYPE vs REALITA</div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <div className="font-bold text-xs text-[#22c55e] mb-2">POTENSI NYATA</div>
            {['Sistem keuangan inklusif untuk 1.4B unbanked', 'Kepemilikan digital yang sesungguhnya', 'Transparansi supply chain yang tidak bisa dimanipulasi', 'Royalti kreator yang otomatis dan fair'].map((p, i) => (
              <div key={i} className="flex gap-2 items-start mb-1">
                <span className="text-green-500 flex-shrink-0 text-xs">✓</span>
                <p className="text-xs font-bold text-[#0a0a0a]/65">{p}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="font-bold text-xs text-[#e63329] mb-2">TANTANGAN SEKARANG</div>
            {['UX yang masih sangat teknis dan kompleks', 'Skalabilitas dan biaya gas yang tidak konsisten', 'Regulasi yang masih abu-abu di Indonesia', 'Banyak scam dan rug pull yang merugikan'].map((t, i) => (
              <div key={i} className="flex gap-2 items-start mb-1">
                <span className="text-red-400 flex-shrink-0 text-xs">⚠</span>
                <p className="text-xs font-bold text-[#0a0a0a]/65">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

/* Ch292 -- AUGMENTED REALITY & VIRTUAL REALITY */
function Ch292() {
  const aplikasi = [
    { bidang: 'Pendidikan AR', deskripsi: 'Siswa melihat sel darah merah dalam 3D di atas buku pelajaran. Atau belajar sejarah dengan VR tour ke candi Borobudur di era kejayaannya.', icon: '🎓', warna: '#1a5cff' },
    { bidang: 'Kesehatan VR', deskripsi: 'Dokter latihan operasi di simulasi VR sebelum prosedur nyata. Pasien dengan fobia bisa terapi eksposur dalam lingkungan aman yang terkontrol.', icon: '🏥', warna: '#e63329' },
    { bidang: 'Retail AR', deskripsi: 'Lihat bagaimana sofa akan terlihat di ruang tamumu sebelum beli. IKEA, Amazon sudah terapkan ini -- konversi naik 40%.', icon: '🛋️', warna: '#22c55e' },
    { bidang: 'Training Industri', deskripsi: 'Teknisi bisa latihan perbaiki mesin pabrik dalam VR tanpa risiko kerusakan nyata. Boeing hemat $2M setahun dari training VR vs konvensional.', icon: '🔧', warna: '#8b5cf6' },
    { bidang: 'Real Estate Virtual', deskripsi: 'Virtual property tour -- beli rumah setelah jalan-jalan VR tanpa harus ke lokasi. Sangat relevan untuk pembelian cross-kota.', icon: '🏠', warna: '#f59e0b' },
    { bidang: 'Social VR', deskripsi: 'Meeting dalam virtual office, konser virtual, atau sekadar nongkrong dengan teman yang jauh. Meta Horizon Worlds adalah versi awalnya.', icon: '👥', warna: '#0891b2' },
  ]
  return (
    <PanelBab id="ch292" num="292" judul="AR & VR -- MENGABURKAN BATAS REALITA DAN DIGITAL" warna="#8b5cf6" bg="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🥽 AR/VR bukan hanya gaming. Ini adalah antarmuka komputasi generasi berikutnya -- sama seperti touchscreen menggantikan keyboard fisik!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {aplikasi.map((a, i) => (
          <motion.div key={a.bidang}
            initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.07, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-4"
            style={{ border: `3px solid ${a.warna}`, boxShadow: `4px 4px 0 ${a.warna}`, background: 'white' }}>
            <motion.div className="text-3xl mb-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}>
              {a.icon}
            </motion.div>
            <div className="font-comic text-sm mb-1" style={{ color: a.warna }}>{a.bidang}</div>
            <p className="text-[9px] font-bold text-[#0a0a0a]/65 leading-relaxed">{a.deskripsi}</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

/* Ch293 -- QUANTUM COMPUTING */
function Ch293() {
  const [qubit, setQubit] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setQubit(q => (q + 1) % 100), 60)
    return () => clearInterval(t)
  }, [])
  return (
    <PanelBab id="ch293" num="293" judul="QUANTUM COMPUTING -- KOMPUTASI MELAMPAUI BATAS FISIKA" warna="#0891b2" bg="#ecfeff" gelap>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        ⚛️ Quantum computing bukan hanya komputer yang lebih cepat -- ini adalah paradigma komputasi yang sama sekali berbeda secara fundamental!
      </div>
      {/* Animasi qubit */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative w-32 h-32">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-blue-400"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="font-comic text-2xl text-cyan-400">{qubit}</div>
              <div className="font-mono text-[8px] text-white/40">qubits</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="font-comic text-lg text-cyan-400 mb-3">🔬 PERBEDAAN KLASIK vs KUANTUM</div>
          {[
            { label: 'Bit klasik', nilai: '0 ATAU 1', warna: '#6b7280' },
            { label: 'Qubit kuantum', nilai: '0 DAN 1 sekaligus (superposisi)', warna: '#22d3ee' },
            { label: 'Komputasi klasik', nilai: 'Coba solusi satu per satu', warna: '#6b7280' },
            { label: 'Komputasi kuantum', nilai: 'Eksplorasi semua solusi paralel', warna: '#22d3ee' },
          ].map((r, i) => (
            <div key={r.label} className="flex justify-between items-center p-2"
              style={{ border: `1px solid ${r.warna}40`, background: `${r.warna}10` }}>
              <span className="font-bold text-xs text-white/60">{r.label}</span>
              <span className="font-comic text-xs" style={{ color: r.warna }}>{r.nilai}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="font-comic text-lg text-cyan-400 mb-3">🚀 APLIKASI MASA DEPAN</div>
          <div className="space-y-2">
            {[
              { app: 'Drug Discovery', detail: 'Simulasi molekul obat yang tidak mungkin di komputer klasik', icon: '💊' },
              { app: 'Kriptografi Baru', detail: 'Quantum akan memecahkan enkripsi saat ini -- dan menciptakan yang baru', icon: '🔐' },
              { app: 'Optimasi Logistik', detail: 'Route planning untuk jutaan variabel secara simultan', icon: '📦' },
              { app: 'Climate Modeling', detail: 'Simulasi iklim yang jauh lebih presisi untuk prediksi cuaca', icon: '🌡️' },
              { app: 'Financial Modeling', detail: 'Portfolio optimization dengan ribuan variabel real-time', icon: '📈' },
            ].map((a, i) => (
              <motion.div key={a.app}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex gap-2 items-start p-2"
                style={{ border: '1px solid #22d3ee30', background: '#22d3ee10' }}>
                <span className="text-lg flex-shrink-0">{a.icon}</span>
                <div>
                  <div className="font-comic text-xs text-cyan-400">{a.app}</div>
                  <p className="text-[9px] text-white/55 font-bold">{a.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

/* Ch294 -- ARTIFICIAL GENERAL INTELLIGENCE */
function Ch294() {
  const level = [
    { level: 'ANI', nama: 'Artificial Narrow Intelligence', status: 'SEKARANG', deskripsi: 'AI yang ahli dalam satu tugas spesifik: Chess AI, voice assistant, recommendation engine, image classifier. Sudah melampaui manusia di bidangnya.', warna: '#22c55e', icon: '🤖' },
    { level: 'AGI', nama: 'Artificial General Intelligence', status: 'MENUJU KE SANA', deskripsi: 'AI dengan kemampuan kognitif setara manusia di semua bidang. Bisa belajar hal baru seperti manusia tanpa diprogram ulang. GPT-4 adalah glimpse awal.', warna: '#f59e0b', icon: '🧠' },
    { level: 'ASI', nama: 'Artificial Super Intelligence', status: 'MASA DEPAN', deskripsi: 'AI yang melampaui kapasitas kognitif manusia di segala bidang. Skenario ini adalah topik paling kontroversial di antara researcher AI dunia.', warna: '#e63329', icon: '⚡' },
  ]
  return (
    <PanelBab id="ch294" num="294" judul="AGI -- TITIK SINGULARITAS YANG SEMAKIN DEKAT" warna="#f59e0b" bg="#fffbeb">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🤖 AGI bukan lagi fiksi ilmiah -- ini adalah pertanyaan kapan, bukan apakah. Dan developer hari ini yang membangun fondasinya!
      </div>
      <div className="space-y-6 mb-8">
        {level.map((l, i) => (
          <motion.div key={l.level}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            style={{ border: `3px solid ${l.warna}`, boxShadow: `5px 5px 0 ${l.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center justify-between px-4 py-2" style={{ background: l.warna }}>
              <div className="flex items-center gap-3">
                <motion.span className="text-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}>
                  {l.icon}
                </motion.span>
                <div>
                  <div className="font-comic text-sm text-white">{l.level}</div>
                  <div className="font-bold text-[9px] text-white/70">{l.nama}</div>
                </div>
              </div>
              <span className="font-bold text-[9px] bg-white/30 text-white px-2 py-0.5">{l.status}</span>
            </div>
            <p className="p-4 text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{l.deskripsi}</p>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel p-5">
        <div className="font-comic text-lg text-[#0a0a0a] mb-3">💭 PERTANYAAN YANG HARUS DIPIKIRKAN DEVELOPER</div>
        <div className="space-y-2">
          {[
            'Skill apa yang aman dari otomasi AI dalam 10-20 tahun ke depan?',
            'Bagaimana memastikan AI yang dibangun tidak memperparah ketimpangan?',
            'Siapa yang bertanggung jawab saat AGI membuat keputusan yang salah?',
            'Bagaimana menjaga human agency di dunia yang semakin AI-driven?',
          ].map((q, i) => (
            <motion.div key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-2 p-2"
              style={{ background: '#f5f0ff', border: '1px solid #8b5cf650' }}>
              <span className="text-[#8b5cf6] flex-shrink-0">?</span>
              <p className="text-xs font-bold text-[#0a0a0a]/70 italic">{q}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* Ch295-300: Prediksi Teknologi 2030 */
function Ch295to300() {
  const prediksi = [
    { tahun: '2026', prediksi: 'AI coding assistant yang bisa generate production-ready app dari deskripsi natural language', probabilitas: 85, icon: '🤖', warna: '#22c55e' },
    { tahun: '2027', prediksi: 'AR glasses mainstream -- menggantikan sebagian fungsi smartphone dalam aktivitas sehari-hari', probabilitas: 40, icon: '🥽', warna: '#1a5cff' },
    { tahun: '2027', prediksi: 'Mobil otonom level 4 tersedia secara komersial di kota-kota besar Asia Tenggara', probabilitas: 50, icon: '🚗', warna: '#8b5cf6' },
    { tahun: '2028', prediksi: 'Quantum computer pertama yang bisa memecahkan RSA-2048 encryption dalam hitungan jam', probabilitas: 30, icon: '⚛️', warna: '#f59e0b' },
    { tahun: '2029', prediksi: 'Brain-computer interface non-invasive yang cukup akurat untuk menggantikan keyboard', probabilitas: 20, icon: '🧠', warna: '#e63329' },
    { tahun: '2030', prediksi: 'AGI pertama yang bisa belajar dan generalize seperti manusia dewasa diumumkan ke publik', probabilitas: 35, icon: '⚡', warna: '#0891b2' },
    { tahun: '2030', prediksi: 'Platform pendidikan AI yang personal memungkinkan setara dengan private tutor untuk semua orang', probabilitas: 75, icon: '🎓', warna: '#22c55e' },
    { tahun: '2030', prediksi: 'Lebih dari 50% kode production ditulis atau di-assist oleh AI, bukan manusia', probabilitas: 80, icon: '💻', warna: '#1a5cff' },
    { tahun: '2030', prediksi: 'Smart city penuh di 5+ kota Indonesia dengan layanan digital terintegrasi citizen-first', probabilitas: 60, icon: '🏙️', warna: '#8b5cf6' },
    { tahun: '2030', prediksi: 'Teknologi fusion energy komersial pertama mulai beroperasi -- menggantikan batubara secara global', probabilitas: 25, icon: '☀️', warna: '#f59e0b' },
  ]
  return (
    <PanelBab id="ch295" num="295-300" judul="10 PREDIKSI TEKNOLOGI 2026-2030" warna="#0891b2" bg="#ecfeff" gelap>
      <div className="speech-bubble inline-block text-sm mb-8 text-[#0a0a0a]">
        🔮 Prediksi ini berdasarkan tren penelitian, investasi, dan pola adopsi teknologi. Probabilitas adalah estimasi subjektif -- masa depan selalu lebih aneh dari yang diprediksi!
      </div>
      <div className="space-y-4">
        {prediksi.map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, type: 'spring' }}
            viewport={{ once: true }}
            className="flex gap-3 items-center"
            style={{ border: `2px solid ${p.warna}30`, background: `${p.warna}10`, padding: '12px' }}>
            <motion.span className="text-2xl flex-shrink-0"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}>
              {p.icon}
            </motion.span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-[9px] text-white px-1.5 py-0.5" style={{ background: p.warna }}>{p.tahun}</span>
                <p className="text-xs font-bold text-white/75 leading-relaxed">{p.prediksi}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-white/10 overflow-hidden">
                  <motion.div className="h-full" style={{ background: p.warna }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.probabilitas}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: i * 0.06 + 0.3 }} />
                </div>
                <span className="font-mono text-[9px] flex-shrink-0" style={{ color: p.warna }}>{p.probabilitas}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup29() {
  return (
    <>
      <div className="comic-divider" />
      <Ch291 />
      <div className="comic-divider" />
      <Ch292 />
      <div className="comic-divider" />
      <Ch293 />
      <div className="comic-divider" />
      <Ch294 />
      <div className="comic-divider" />
      <Ch295to300 />
    </>
  )
}
