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

function HitungNaik({ target, sufiks = '', warna = '#ffd700' }: { target: number; sufiks?: string; warna?: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let v = 0; const step = Math.max(1, target / 80)
    const t = setInterval(() => { v += step; if (v >= target) { setVal(target); clearInterval(t) } else setVal(Math.floor(v)) }, 18)
    return () => clearInterval(t)
  }, [target])
  return <span style={{ color: warna }} className="font-comic">{val.toLocaleString()}{sufiks}</span>
}

/* --- Ch193: FILOSOFI INOVASI RIZKI HABIBI --- */
function Ch193() {
  const prinsip = [
    {
      no: '01', judul: 'Inovasi untuk yang Sering Dilupakan',
      isi: 'Saya tidak tertarik membangun alat untuk Silicon Valley. Saya tertarik membangun untuk petani Jember yang kehilangan panen karena tidak ada sistem peringatan dini. Untuk ibu desa yang harus antre 3 jam untuk surat pengantar. Untuk anak pintar dari daerah terpencil yang tidak punya akses belajar coding.',
      warna: '#1a5cff', icon: '🌍',
    },
    {
      no: '02', judul: 'Teknologi Harus Merendah',
      isi: 'Inovasi terbaik adalah yang orang tidak sadar sedang pakai teknologi. Petani yang menggunakan sensor irigasi tidak peduli dengan MQTT protocol. Dia hanya ingin sawahnya tidak kekurangan air. Teknologi yang baik menghilangkan kompleksitas, bukan menambah.',
      warna: '#22c55e', icon: '🌾',
    },
    {
      no: '03', judul: 'Mulai Kecil, Dampak Nyata',
      isi: 'Satu RT yang terbantu lebih berharga dari demo yang impressive tapi tidak ada yang pakai. MVP bukan versi jelek dari produk — ini adalah cara tercepat menemukan apa yang benar-benar dibutuhkan. Ship, learn, iterate. Terus.',
      warna: '#f59e0b', icon: '⚡',
    },
    {
      no: '04', judul: 'Open Source sebagai Warisan',
      isi: 'Setiap baris kode yang saya tulis untuk kepentingan publik — toolkit NLP, library UI, atau framework desa — harus menjadi commons yang bisa digunakan siapapun setelah saya tidak ada. Kode yang baik adalah surat cinta untuk developer masa depan.',
      warna: '#8b5cf6', icon: '🔓',
    },
    {
      no: '05', judul: 'Ekosistem, Bukan Produk Tunggal',
      isi: '200 inovasi ini bukan 200 produk terpisah. Ini adalah 200 komponen dari satu ekosistem yang saling terhubung. Ketika petani pakai agritech, datanya masuk ke platform AI. Ketika UMKM digital, datanya masuk ke analitik ekonomi. Ekosistem lebih kuat dari produk manapun.',
      warna: '#e63329', icon: '🕸️',
    },
    {
      no: '06', judul: 'Keberlanjutan adalah Strategi',
      isi: 'Inovasi gratis tidak sustainable. Model bisnis yang jelas — freemium, subsidi silang, B2G, atau hybrid — adalah bagian dari desain produk sejak awal, bukan afterthought. Karena inovasi yang mati tidak berdampak apa-apa.',
      warna: '#0891b2', icon: '♻️',
    },
  ]
  return (
    <PanelBab id="ch193" num="193" judul="FILOSOFI INOVASI — MENGAPA 200 & KENAPA INI PENTING" warna="#ffd700" bg="#fffbeb" gelap>
      <div className="speech-bubble inline-block text-sm mb-8 text-[#0a0a0a]">
        💭 Di balik setiap angka dan deskripsi inovasi, ada filosofi yang mendasari semuanya. Ini bukan sekedar daftar ide.
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {prinsip.map((p, i) => (
          <motion.div key={p.no}
            initial={{ opacity: 0, y: 25, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${p.warna}`, boxShadow: `5px 5px 0 ${p.warna}`, background: '#111' }}>
            <div className="px-4 py-2 flex items-center gap-2" style={{ background: p.warna }}>
              <motion.span className="text-xl"
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}>
                {p.icon}
              </motion.span>
              <span className="font-comic text-[10px] text-white">{p.no} — {p.judul}</span>
            </div>
            <p className="p-4 text-xs text-white/70 font-bold leading-relaxed">{p.isi}</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

/* --- Ch194: TANTANGAN & CARA MENGATASINYA --- */
function Ch194() {
  const tantangan = [
    {
      masalah: 'Resource terbatas — satu developer, satu laptop',
      solusi: 'Prioritas keras: 1 inovasi pada satu waktu. Open source untuk cari kontributor. Partner untuk bagi beban.',
      warna: '#e63329', icon: '⚡',
    },
    {
      masalah: 'Pasar yang belum siap atau belum terdigitalisasi',
      solusi: 'Masuk lewat edukasi dulu. Bantu mereka pahami masalahnya sebelum jual solusinya. Trust dulu, revenue kemudian.',
      warna: '#f59e0b', icon: '🌱',
    },
    {
      masalah: 'Koneksi internet tidak merata di Indonesia',
      solusi: 'Design offline-first dari awal. Progressive Web App dengan service worker. Sync saat ada koneksi.',
      warna: '#1a5cff', icon: '📡',
    },
    {
      masalah: 'Kurangnya kepercayaan pada teknologi baru',
      solusi: 'Social proof lokal lebih kuat dari feature list. Satu kisah sukses dari desa tetangga lebih meyakinkan dari 100 testimoni online.',
      warna: '#22c55e', icon: '🤝',
    },
    {
      masalah: 'Regulasi yang belum jelas untuk inovasi baru',
      solusi: 'Engage regulator sejak awal. Jadi partner, bukan menghindari. Sandbox regulasi ada untuk dimanfaatkan.',
      warna: '#8b5cf6', icon: '⚖️',
    },
    {
      masalah: 'Burnout dari ambisi terlalu besar',
      solusi: 'Milestone kecil, perayaan kecil. Satu feature selesai = achievement. Komunitas untuk berbagi beban dan semangat.',
      warna: '#0891b2', icon: '🧘',
    },
  ]
  return (
    <PanelBab id="ch194" num="194" judul="TANTANGAN NYATA & CARA MENGATASINYA" warna="#e63329" bg="#fef2f2">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🔥 Tidak ada inovasi tanpa rintangan. Yang membedakan adalah apakah kamu punya rencana untuk melewatinya!
      </div>
      <div className="space-y-4">
        {tantangan.map((t, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.09, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="grid sm:grid-cols-2 gap-0"
            style={{ border: `3px solid ${t.warna}`, boxShadow: `4px 4px 0 ${t.warna}`, overflow: 'hidden' }}>
            <div className="p-4 flex gap-3" style={{ background: `${t.warna}15`, borderRight: `2px solid ${t.warna}40` }}>
              <motion.span className="text-xl flex-shrink-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}>
                {t.icon}
              </motion.span>
              <div>
                <div className="font-bold text-[9px] uppercase text-[#0a0a0a]/40 mb-1 tracking-wide">TANTANGAN</div>
                <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{t.masalah}</p>
              </div>
            </div>
            <div className="p-4" style={{ background: 'white' }}>
              <div className="font-bold text-[9px] uppercase mb-1 tracking-wide" style={{ color: t.warna }}>SOLUSI</div>
              <p className="text-xs font-bold text-[#0a0a0a]/65 leading-relaxed">{t.solusi}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

/* --- Ch195: GRAND FINALE — 200 INOVASI, SATU DEVELOPER, SATU JEMBER --- */
function Ch195() {
  const [angka, setAngka] = useState(0)
  const [teksIdx, setTeksIdx] = useState(0)
  const teksInspirasi = [
    '200 inovasi dimulai dari 1 baris kode...',
    'Dan 1 baris kode dimulai dari 1 keberanian...',
    'Keberanian untuk bilang: "ini bisa lebih baik"',
    'Keberanian untuk memulai meski belum siap',
    'Keberanian untuk gagal dan coba lagi',
    'Dari Jember, untuk Indonesia 🇮🇩',
    'Dari sekarang, untuk masa depan ✨',
  ]
  useEffect(() => {
    const t1 = setInterval(() => setAngka(n => (n + 3) % 9999), 50)
    const t2 = setInterval(() => setTeksIdx(i => (i + 1) % teksInspirasi.length), 2800)
    return () => { clearInterval(t1); clearInterval(t2) }
  }, [teksInspirasi.length])

  return (
    <PanelBab id="ch195" num="195" judul="GRAND FINALE — 200 INOVASI, 1 DEVELOPER, 1 VISI" warna="#ffd700" bg="#fffbeb" gelap>
      <div className="max-w-3xl mx-auto text-center">
        {/* Animasi angka gila */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}>
          <motion.div
            className="font-mono text-7xl sm:text-9xl text-yellow-400 mb-2 tabular-nums"
            style={{ textShadow: '5px 5px 0 rgba(255,215,0,0.3)' }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 0.3, repeat: Infinity }}>
            {String(angka).padStart(4, '0')}
          </motion.div>
          <div className="font-comic text-sm text-white/30">baris kode yang ingin ditulis...</div>
        </motion.div>

        {/* Teks inspirasi berganti */}
        <div className="h-16 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={teksIdx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="font-comic text-xl sm:text-2xl text-yellow-300 text-center leading-relaxed">
              {teksInspirasi[teksIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Stats final */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { n: 200, s: '', l: 'Inovasi', w: '#ffd700', i: '💡' },
            { n: 260, s: '+', l: 'Chapter', w: '#4ade80', i: '📖' },
            { n: 2026, s: '', l: 'Tahun Dimulai', w: '#38bdf8', i: '📅' },
            { n: 1, s: '', l: 'Visi', w: '#f87171', i: '🎯' },
          ].map((s, i) => (
            <motion.div key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              viewport={{ once: true }}
              className="p-3 text-center"
              style={{ border: `3px solid ${s.w}`, boxShadow: `4px 4px 0 ${s.w}`, background: '#111' }}>
              <motion.div className="text-xl mb-1"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}>
                {s.i}
              </motion.div>
              <div className="font-comic text-2xl"><HitungNaik target={s.n} sufiks={s.s} warna={s.w} /></div>
              <div className="text-[9px] text-white/40 font-bold mt-0.5">{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Pesan terakhir */}
        <motion.div
          className="p-6 mb-8"
          style={{ border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd70055', background: '#111', borderRadius: 16 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}>
          <div className="font-comic text-2xl text-yellow-400 mb-4">💌 SURAT UNTUK DIRI SENDIRI</div>
          <p className="text-sm font-bold text-white/75 leading-loose text-left">
            Rizki,<br /><br />
            Kamu sudah menuliskan 200 inovasi. Itu bukan angka kecil. Itu adalah 200 masalah yang kamu percaya bisa diselesaikan.
            200 alasan untuk terus bangun setiap pagi dan buka laptop.<br /><br />
            Tidak semua akan terwujud persis seperti yang ditulis. Beberapa akan lebih besar. Beberapa akan berubah bentuk.
            Beberapa mungkin tidak pernah jadi. Dan itu <span className="text-yellow-400">normal</span>.<br /><br />
            Yang penting: kamu sudah mulai memikirkannya. Kamu sudah berani bermimpi dengan spesifik.
            Dan dari 200 ini, cukup satu yang benar-benar mengubah satu hidup orang lain — itu sudah cukup.<br /><br />
            <span className="text-yellow-400">Sekarang tutup dokumen ini dan pergi code sesuatu.</span>
          </p>
          <div className="font-comic text-sm text-yellow-400 text-right mt-4">-- Dirimu, dari masa depan</div>
        </motion.div>

        {/* CTA */}
        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="p-4 text-center"
            style={{ border: '3px solid #22c55e', boxShadow: '4px 4px 0 #22c55e', background: '#111' }}>
            <div className="font-comic text-sm text-green-400 mb-2">🤝 KOLABORASI</div>
            <p className="text-[9px] text-white/50 font-bold mb-3 leading-relaxed">Punya skill yang relevan? Mari bangun bersama!</p>
            <a href="#contact" className="btn-comic text-xs">HUBUNGI →</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="p-4 text-center"
            style={{ border: '3px solid #1a5cff', boxShadow: '4px 4px 0 #1a5cff', background: '#111' }}>
            <div className="font-comic text-sm text-blue-400 mb-2">📄 CV LENGKAP</div>
            <p className="text-[9px] text-white/50 font-bold mb-3 leading-relaxed">Semua pengalaman dan skill yang mendukung inovasi ini</p>
            <a href="#cv" className="btn-comic-blue text-xs">LIHAT CV →</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }} className="p-4 text-center"
            style={{ border: '3px solid #ffd700', boxShadow: '4px 4px 0 #ffd700', background: '#111' }}>
            <div className="font-comic text-sm text-yellow-400 mb-2">🌐 KVT.KOM</div>
            <p className="text-[9px] text-white/50 font-bold mb-3 leading-relaxed">Platform tempat semua inovasi ini dibangun</p>
            <a href="#ch200" className="btn-comic text-xs">LIHAT →</a>
          </motion.div>
        </div>

        {/* Signature akhir */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}>
          <motion.div
            className="font-comic text-3xl text-yellow-400 mb-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}>
            ⚡ 200 DONE. 201 COMING SOON ⚡
          </motion.div>
          <div className="font-comic text-xs text-white/20 tracking-widest">
            — RIZKI HABIBI  JEMBER  2026  CHAPTER 260 REACHED --
          </div>
          <div className="font-comic text-[10px] text-white/15 mt-1">
            Built with ❤️  Next.js  Tailwind CSS  Framer Motion  200 Inovasi untuk Indonesia
          </div>
        </motion.div>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup25() {
  return (
    <>
      <div className="comic-divider" />
      <Ch193 />
      <div className="comic-divider" />
      <Ch194 />
      <div className="comic-divider" />
      <Ch195 />
    </>
  )
}
