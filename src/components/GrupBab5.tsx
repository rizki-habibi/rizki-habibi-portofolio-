'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import HeaderBab from '@/components/HeaderBab'

function ambilNomor(chNum: string): string {
  const m = chNum.match(/\d+/)
  return m ? m[0] : chNum
}

function PanelBab({ id, chNum, judul, warna, latarBelakang, gelap, children }: {
  id: string; chNum: string; judul: string; warna: string; latarBelakang: string; gelap?: boolean; children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden" style={{ background: gelap ? '#0a0a0a' : latarBelakang }}>
      {gelap ? <div className="halftone-yellow" /> : <div className="halftone-bg" />}
      <div className="max-w-6xl mx-auto relative z-10">
        <HeaderBab nomor={ambilNomor(chNum)} judul={judul} warna={gelap ? '#ffd700' : warna} gelap={gelap} />
        {children}
      </div>
    </section>
  )
}

function Box({ icon, title, text, color, bg, wide }: { icon: string; title: string; text: string; color: string; bg: string; wide?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, rotate: Math.random() > 0.5 ? -2 : 2 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      viewport={{ once: false, amount: 0.1 }}
      whileHover={{ y: -5, scale: 1.03 }}
      className={`overflow-hidden ${wide ? 'col-span-2' : ''}`}
      style={{ border: `3px solid ${color}`, boxShadow: `5px 5px 0 ${color}`, background: bg }}
    >
      <div className="p-4">
        <div className="text-3xl mb-2">{icon}</div>
        <div className="font-comic text-sm mb-1" style={{ color }}>{title}</div>
        <div className="text-xs text-comic-black font-bold leading-relaxed">{text}</div>
      </div>
      <div className="h-1.5" style={{ background: color }} />
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════
   CHAPTER 56 — WARISAN DIGITAL
═══════════════════════════════════════════════ */
function Ch56() {
  const legacies = [
    { title: 'KVT.kom', desc: 'Platform kampus digital Vtuber pertama yang membuka akses pendidikan kreatif untuk semua.', icon: '🌐', color: '#8b5cf6', year: '2026+' },
    { title: 'QRIS Donasi', desc: 'Sistem donasi transparan berbasis QRIS yang langsung menyentuh penerima tanpa potongan besar.', icon: '💳', color: '#1a5cff', year: '2027' },
    { title: 'Website Desa Digital', desc: 'Template open source gratis untuk 75.000+ desa Indonesia agar punya kehadiran digital layak.', icon: '🏘️', color: '#22c55e', year: '2027+' },
    { title: 'Global Map Platform', desc: 'Peta interaktif yang menghubungkan data sosial-ekonomi wilayah untuk pengambilan keputusan.', icon: '🗺️', color: '#0891b2', year: '2028' },
    { title: 'Open Source Library', desc: 'Kumpulan komponen dan starter kit Laravel/Next.js yang bisa digunakan komunitas developer Indonesia.', icon: '📦', color: '#f59e0b', year: 'Ongoing' },
    { title: 'KVT Institute S1-S3', desc: 'Lembaga pendidikan digital formal dengan domain kvt1.kom, kvt2.kom, kvt3.kom untuk gelar S.KVT, M.KVT, Dr.KVT.', icon: '🎓', color: '#e63329', year: '2030+' },
  ]
  return (
    <PanelBab id="ch56" chNum="CHAPTER 56" judul="WARISAN DIGITAL UNTUK GENERASI MENDATANG" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="speech-bubble inline-block text-sm mb-6">
            🏛️ Bukan soal seberapa lama kita hidup — tapi apa yang kita tinggalkan!
          </div>
          <div className="space-y-4">
            {legacies.map((l, i) => (
              <motion.div key={l.title}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }} viewport={{ once: false }}
                whileHover={{ x: 6 }}
                className="overflow-hidden" style={{ border: `3px solid ${l.color}`, boxShadow: `5px 5px 0 ${l.color}`, background: 'white' }}
              >
                <div className="flex items-center justify-between px-4 py-2" style={{ background: l.color, borderBottom: '2px solid #0a0a0a' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-white">{l.icon}</span>
                    <span className="font-comic text-white text-sm">{l.title}</span>
                  </div>
                  <span className="font-comic text-[10px] bg-white text-comic-black px-2 py-0.5">{l.year}</span>
                </div>
                <div className="p-3">
                  <p className="text-xs text-comic-black/70 leading-relaxed">{l.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="comic-panel-dark p-8 mb-6">
            <div className="font-comic text-2xl text-comic-yellow text-center mb-6">🌟 DEFINISI WARISAN SAYA</div>
            <div className="space-y-4">
              {[
                { q: 'Bukan berapa banyak uang yang dikumpulkan...', a: 'Tapi berapa banyak orang yang terbantu.', icon: '💰' },
                { q: 'Bukan berapa banyak penghargaan yang diraih...', a: 'Tapi berapa banyak orang yang terinspirasi.', icon: '🏆' },
                { q: 'Bukan seberapa terkenal namamu...', a: 'Tapi seberapa besar dampak yang kamu tinggalkan.', icon: '🌟' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white/10 border border-white/20">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-xs text-white/50 font-bold italic">{item.q}</div>
                      <div className="text-sm text-comic-yellow font-bold mt-1">{item.a}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="p-6 text-center"
            style={{ border: '3px solid #8b5cf6', boxShadow: '5px 5px 0 #8b5cf6', background: 'white' }}
          >
            <div className="font-comic text-xl text-comic-black mb-3">📊 IMPACT TARGET 2030</div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '1M+', label: 'Orang Terbantu', color: '#8b5cf6' },
                { num: '10K+', label: 'Desa Digital', color: '#22c55e' },
                { num: '100K+', label: 'Kreator KVT', color: '#1a5cff' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-comic text-3xl" style={{ color: s.color }}>{s.num}</div>
                  <div className="text-[10px] font-bold text-comic-black/60 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

/* ═══════════════════════════════════════════════
   CHAPTER 57 — INOVASI TANPA HENTI
═══════════════════════════════════════════════ */
function Ch57() {
  const innovations = [
    { title: 'QRIS Multi-Tujuan', desc: 'Satu QR code yang bisa diarahkan ke berbagai tujuan donasi tergantung waktu atau event.', icon: '🎯', color: '#1a5cff', status: 'IDEASI' },
    { title: 'AI Matching Donasi', desc: 'Sistem AI yang mencocokkan donor dengan penerima yang paling sesuai profil kebutuhannya.', icon: '🤖', color: '#8b5cf6', status: 'KONSEP' },
    { title: 'Blockchain Transparansi', desc: 'Setiap transaksi donasi tercatat di blockchain sehingga tidak bisa dipalsukan.', icon: '⛓️', color: '#22c55e', status: 'RISET' },
    { title: 'IoT Desa Monitor', desc: 'Jaringan sensor di desa yang memantau kondisi jalan, air bersih, dan sinyal internet.', icon: '📡', color: '#f59e0b', status: 'PROTOTYPE' },
    { title: 'AR Village Tour', desc: 'Tur virtual desa berbasis Augmented Reality untuk promosi wisata dan investasi lokal.', icon: '🥽', color: '#e63329', status: 'IDEASI' },
    { title: 'Micro-Learning Mobile', desc: 'App belajar coding 5 menit sehari — untuk pelajar yang sibuk tapi ingin terus berkembang.', icon: '📱', color: '#0891b2', status: 'PLANNING' },
  ]
  return (
    <PanelBab id="ch57" chNum="CHAPTER 57" judul="INOVASI TANPA HENTI — THE NEXT BIG THINGS" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {innovations.map((inv, i) => (
          <motion.div key={inv.title}
            initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08, type: 'spring' }}
            viewport={{ once: false, amount: 0.15 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="overflow-hidden bg-white"
            style={{ border: `3px solid ${inv.color}`, boxShadow: `5px 5px 0 ${inv.color}` }}
          >
            <div className="flex items-center justify-between px-4 py-2" style={{ background: inv.color, borderBottom: '2px solid #0a0a0a' }}>
              <span className="font-comic text-white text-sm">{inv.title}</span>
              <span className="font-comic text-[9px] bg-white px-2 py-0.5" style={{ color: inv.color }}>{inv.status}</span>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-3 text-center">{inv.icon}</div>
              <p className="text-xs text-comic-black/70 leading-relaxed text-center">{inv.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-dark p-8 text-center">
        <div className="font-comic text-2xl text-comic-yellow mb-4">💡 FILOSOFI INOVASI</div>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            { principle: 'Start Small', desc: 'Mulai dengan MVP yang bisa diuji — jangan tunggu sempurna untuk launch.', icon: '🌱' },
            { principle: 'Fail Fast', desc: 'Kegagalan cepat lebih baik dari keberhasilan lambat — learn and pivot.', icon: '⚡' },
            { principle: 'Think Big', desc: 'Solusi lokal harus dirancang agar bisa menjadi solusi global.', icon: '🌍' },
          ].map((p, i) => (
            <div key={p.principle} className="text-center">
              <div className="text-4xl mb-2">{p.icon}</div>
              <div className="font-comic text-lg text-comic-yellow">{p.principle}</div>
              <div className="text-xs text-white/60 mt-1 leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* ═══════════════════════════════════════════════
   CHAPTER 58 — SEMUA KARAKTER BERKUMPUL
═══════════════════════════════════════════════ */
function Ch58() {
  return (
    <PanelBab id="ch58" chNum="CHAPTER 58" judul="SEMUA KARAKTER BERKUMPUL" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="speech-bubble inline-block text-sm mb-6">
            🎭 Setiap karakter dalam cerita ini mewakili satu aspek perjalanan saya!
          </div>
          <div className="space-y-4">
            {[
              { char: 'The Developer', img: '/foto/komik-profil.png', role: 'Membangun solusi dari nol dengan kode dan kreativitas.', color: '#1a5cff' },
              { char: 'The Veteran', img: '/foto/komik-veteran.png', role: 'Pengalaman yang terus diasah, tidak pernah berhenti belajar.', color: '#f59e0b' },
              { char: 'The Creator', img: '/foto/karakter.png', role: 'Menuangkan ide ke dalam karya visual dan digital yang bermakna.', color: '#22c55e' },
            ].map((c, i) => (
              <motion.div key={c.char}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12 }} viewport={{ once: false }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 bg-white"
                style={{ border: `3px solid ${c.color}`, boxShadow: `5px 5px 0 ${c.color}` }}
              >
                <div className="relative w-16 h-20 flex-shrink-0 overflow-hidden"
                  style={{ border: `3px solid ${c.color}`, boxShadow: `3px 3px 0 #0a0a0a` }}>
                  <Image src={c.img} alt={c.char} fill className="object-cover object-top" />
                </div>
                <div>
                  <div className="font-comic text-base" style={{ color: c.color }}>{c.char}</div>
                  <div className="text-xs text-comic-black/70 leading-snug mt-1">{c.role}</div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }} viewport={{ once: false }}
              className="flex items-center gap-4 p-4 bg-white"
              style={{ border: '3px solid #e63329', boxShadow: '5px 5px 0 #e63329' }}
            >
              <div className="relative w-16 h-20 flex-shrink-0 overflow-hidden"
                style={{ border: '3px solid #e63329', boxShadow: '3px 3px 0 #0a0a0a', background: '#e8f0ff' }}>
                <Image src="/foto/kuro.png" alt="Kuro Mascot" fill className="object-cover" />
              </div>
              <div>
                <div className="font-comic text-base" style={{ color: '#e63329' }}>Kuro — The Mascot</div>
                <div className="text-xs text-comic-black/70 leading-snug mt-1">Spirit animal yang setia menemani setiap proses coding dan inovasi.</div>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <div className="comic-panel-dark p-6 mb-6">
            <div className="font-comic text-2xl text-comic-yellow text-center mb-6">🎬 THE TEAM BEHIND KVT</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { role: 'Founder & CEO', name: 'Rizki Habibi', icon: '👑', color: '#ffd700' },
                { role: 'Lead Developer', name: 'Rizki Habibi', icon: '💻', color: '#1a5cff' },
                { role: 'UI/UX Designer', name: 'Rizki Habibi', icon: '🎨', color: '#e63329' },
                { role: 'Content Creator', name: 'Rizki Habibi', icon: '📱', color: '#22c55e' },
                { role: 'IoT Engineer', name: 'Rizki Habibi', icon: '🔧', color: '#f59e0b' },
                { role: 'Community Lead', name: 'Rizki Habibi', icon: '🤝', color: '#8b5cf6' },
              ].map((t, i) => (
                <div key={t.role} className="p-3 bg-white/10 border border-white/20 text-center">
                  <div className="text-2xl mb-1">{t.icon}</div>
                  <div className="font-comic text-[10px]" style={{ color: t.color }}>{t.role}</div>
                  <div className="text-[10px] text-white/60 font-bold">{t.name}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <div className="font-comic text-sm text-white/50">*(Sedang mencari co-founder yang satu visi! 😄)*</div>
            </div>
          </div>
          <div className="p-5 text-center" style={{ border: '3px solid #f59e0b', boxShadow: '5px 5px 0 #f59e0b', background: '#fffbeb' }}>
            <div className="font-comic text-xl text-comic-black mb-3">✉️ BERGABUNG?</div>
            <p className="text-sm text-comic-black/70 leading-relaxed">
              Jika kamu memiliki passion di bidang teknologi, desain, atau konten kreatif dan ingin berkontribusi
              pada ekosistem KVT — pintu selalu terbuka!
            </p>
            <a href="mailto:rizkihabibi2432@gmail.com" className="btn-comic-blue inline-block mt-3 text-sm">HUBUNGI SAYA</a>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

/* ═══════════════════════════════════════════════
   CHAPTER 59 — PESAN UNTUK DEVELOPER MUDA
═══════════════════════════════════════════════ */
function Ch59() {
  return (
    <PanelBab id="ch59" chNum="CHAPTER 59" judul="PESAN UNTUK DEVELOPER MUDA INDONESIA" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="speech-bubble inline-block text-sm mb-6">
            💌 Untuk kamu yang baru memulai — ini dari saya yang pernah di posisimu!
          </div>
          <div className="space-y-4">
            {[
              { no: '01', msg: 'Mulai dari yang kamu tahu hari ini', detail: 'Jangan tunggu "siap" — siap itu datang seiring proses, bukan sebelumnya.', color: '#22c55e' },
              { no: '02', msg: 'Google dan dokumentasi adalah guru terbaik', detail: 'Tidak ada yang tahu segalanya. Yang membedakan developer baik adalah kemampuan mencari solusi.', color: '#1a5cff' },
              { no: '03', msg: 'Build proyek nyata dari awal', detail: 'Tutorial itu penting, tapi proyek nyata mengajarkan hal yang tutorial tidak bisa.', color: '#f59e0b' },
              { no: '04', msg: 'Bergabung ke komunitas developer', detail: 'Sendirian kamu bisa maju. Bersama komunitas, kamu bisa terbang.', color: '#8b5cf6' },
              { no: '05', msg: 'Jangan takut salah dan tanya', detail: 'Bertanya adalah tanda kecerdasan, bukan kelemahan.', color: '#e63329' },
              { no: '06', msg: 'Konsistensi lebih penting dari bakat', detail: '30 menit coding setiap hari mengalahkan 8 jam coding seminggu sekali.', color: '#0891b2' },
            ].map((m, i) => (
              <motion.div key={m.no}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.09 }} viewport={{ once: false }}
                className="flex gap-4 items-start p-4 bg-white"
                style={{ border: `3px solid ${m.color}`, boxShadow: `4px 4px 0 ${m.color}` }}
              >
                <div className="font-comic text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center text-white"
                  style={{ background: m.color, border: '2px solid #0a0a0a' }}>
                  {m.no}
                </div>
                <div>
                  <div className="font-bold text-sm text-comic-black">{m.msg}</div>
                  <div className="text-xs text-comic-black/60 mt-0.5 leading-relaxed">{m.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="comic-panel-dark p-6 mb-6">
            <div className="font-comic text-2xl text-comic-yellow text-center mb-4">🚀 RESOURCES GRATIS UNTUK BELAJAR</div>
            <div className="space-y-2">
              {[
                { name: 'Digital Talent Scholarship', url: 'digitalent.kominfo.go.id', icon: '🎓', color: '#1a5cff' },
                { name: 'Codedex.io', url: 'codedex.io', icon: '🎮', color: '#22c55e' },
                { name: 'FreeCodeCamp', url: 'freecodecamp.org', icon: '💻', color: '#0a0a0a' },
                { name: 'The Odin Project', url: 'theodinproject.com', icon: '⚔️', color: '#e63329' },
                { name: 'Laravel Docs', url: 'laravel.com/docs', icon: '🔴', color: '#FF2D20' },
                { name: 'Next.js Learn', url: 'nextjs.org/learn', icon: '▲', color: '#0a0a0a' },
                { name: 'YouTube', url: 'Banyak channel bagus!', icon: '▶️', color: '#e63329' },
                { name: 'GitHub', url: 'Baca kode orang lain!', icon: '🐙', color: '#0a0a0a' },
              ].map((r, i) => (
                <div key={r.name} className="flex items-center gap-3 p-2 bg-white/10 border border-white/20">
                  <span className="text-lg">{r.icon}</span>
                  <div>
                    <div className="font-bold text-xs text-white">{r.name}</div>
                    <div className="text-[10px] text-white/40">{r.url}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 text-center" style={{ border: '3px solid #22c55e', boxShadow: '5px 5px 0 #22c55e', background: 'white' }}>
            <div className="font-comic text-xl text-comic-black mb-2">🌱 KVT COMMUNITY</div>
            <p className="text-xs text-comic-black/70">
              Bergabung ke komunitas KVT untuk belajar bersama, berbagi proyek, dan tumbuh bersama!
            </p>
            <div className="mt-3">
              <span className="font-comic text-sm text-comic-blue">kvt.kom (Coming Soon)</span>
            </div>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

/* ═══════════════════════════════════════════════
   CHAPTER 60 — INDONESIA DIGITAL FUTURE
═══════════════════════════════════════════════ */
function Ch60() {
  return (
    <PanelBab id="ch60" chNum="CHAPTER 60" judul="INDONESIA DIGITAL FUTURE" warna="#e63329" latarBelakang="#fef2f2" gelap>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
            <div className="p-6 mb-6" style={{ border: '3px solid #ffd700', boxShadow: '6px 6px 0 #ffd700', background: 'white' }}>
              <div className="font-comic text-2xl text-comic-black mb-4">🇮🇩 VISI INDONESIA DIGITAL 2045</div>
              <p className="text-sm text-comic-black leading-relaxed mb-4">
                Indonesia menuju 100 tahun kemerdekaan pada 2045 dengan target menjadi salah satu ekonomi digital
                terbesar di dunia. Sebagai developer muda Indonesia, saya ingin menjadi bagian aktif dari perjalanan itu.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: '$360 Miliar', label: 'Target Ekonomi Digital 2030', color: '#1a5cff' },
                  { stat: '212 Juta', label: 'Pengguna Internet Indonesia', color: '#22c55e' },
                  { stat: '65 Juta', label: 'UMKM Perlu Digitalisasi', color: '#f59e0b' },
                  { stat: '#1', label: 'Target Startup Ekosistem ASEAN', color: '#e63329' },
                ].map(s => (
                  <div key={s.label} className="p-3 text-center" style={{ border: `2px solid ${s.color}`, background: `${s.color}15` }}>
                    <div className="font-comic text-xl" style={{ color: s.color }}>{s.stat}</div>
                    <div className="text-[9px] font-bold text-comic-black/60 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5" style={{ border: '3px solid #ffd700', boxShadow: '5px 5px 0 #ffd700', background: '#fffbeb' }}>
              <div className="font-comic text-lg text-comic-black mb-3">🎯 KONTRIBUSI SAYA</div>
              {[
                'Membangun SDM digital berkualitas melalui KVT.kom',
                'Digitalisasi 100+ desa dengan website gratis berkualitas',
                'Sistem donasi transparan untuk jutaan penerima manfaat',
                'Open source tools yang mempercepat developer Indonesia',
                'Komunitas kreator digital yang produktif dan berdampak',
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-bold text-comic-black py-1 border-b border-comic-black/10">
                  <span className="text-comic-blue flex-shrink-0">🇮🇩</span>{c}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div>
          <div className="comic-panel-dark p-6 mb-4" style={{ border: '3px solid #ffd700', boxShadow: '6px 6px 0 #ffd700' }}>
            <div className="font-comic text-xl text-comic-yellow text-center mb-4">🚀 GENERASI BUILDER INDONESIA</div>
            <div className="space-y-3">
              {[
                { profile: 'Builder', desc: 'Membangun produk nyata yang digunakan jutaan orang', icon: '🏗️', color: '#1a5cff' },
                { profile: 'Educator', desc: 'Berbagi ilmu dan mencetak developer generasi berikutnya', icon: '🎓', color: '#22c55e' },
                { profile: 'Innovator', desc: 'Menciptakan solusi baru untuk masalah lokal yang unik', icon: '💡', color: '#f59e0b' },
                { profile: 'Community Leader', desc: 'Memimpin komunitas teknologi yang inklusif dan berdampak', icon: '👥', color: '#e63329' },
              ].map((g, i) => (
                <div key={g.profile} className="flex gap-3 p-3 bg-white/10 border border-white/20">
                  <span className="text-2xl">{g.icon}</span>
                  <div>
                    <div className="font-comic text-sm" style={{ color: g.color }}>{g.profile}</div>
                    <div className="text-xs text-white/60">{g.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, rotate: -2, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            viewport={{ once: false }}
            className="p-6 text-center"
            style={{ border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd700', background: 'white' }}
          >
            <div className="text-5xl mb-3">🇮🇩</div>
            <div className="font-comic text-2xl text-comic-black mb-2">BANGGA BUATAN INDONESIA</div>
            <p className="text-sm text-comic-black/70">
              Semua yang saya bangun — dari KVT.kom hingga alat monitoring IoT — adalah kontribusi nyata
              untuk Indonesia yang lebih maju secara digital.
            </p>
          </motion.div>
        </div>
      </div>
    </PanelBab>
  )
}

/* ═══════════════════════════════════════════════
   CHAPTER 61 — THE PENULTIMATE CHAPTER
═══════════════════════════════════════════════ */
function Ch61() {
  return (
    <PanelBab id="ch61" chNum="CHAPTER 61 — THE PENULTIMATE CHAPTER" judul="SATU LANGKAH SEBELUM FINAL" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="max-w-4xl mx-auto">
        {/* Big dramatic panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-10"
        >
          <div className="p-10 text-center" style={{ border: '5px solid #ffd700', boxShadow: '10px 10px 0 #ffd700', background: 'white' }}>
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
              <div className="font-comic text-7xl md:text-8xl text-comic-blue mb-4" style={{ textShadow: '4px 4px 0 #0a0a0a' }}>
                61
              </div>
            </motion.div>
            <div className="font-comic text-2xl text-comic-black mb-4">CHAPTER YANG TELAH DILALUI</div>
            <p className="text-base text-comic-black/70 leading-relaxed max-w-2xl mx-auto mb-6">
              Dari Chapter 00 — The Origin, hingga Chapter 61 ini — ini adalah perjalanan luar biasa seorang developer
              muda dari Jember yang bermimpi membangun ekosistem digital Indonesia yang inklusif dan berdampak.
            </p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { num: '75+', label: 'Sertifikat', icon: '🏅', color: '#f59e0b' },
                { num: '5+', label: 'Proyek Nyata', icon: '💻', color: '#1a5cff' },
                { num: '3+', label: 'Inovasi Unik', icon: '🔧', color: '#22c55e' },
                { num: '∞', label: 'Semangat', icon: '🚀', color: '#e63329' },
              ].map(s => (
                <div key={s.label} className="text-center p-3" style={{ border: `3px solid ${s.color}`, background: `${s.color}15` }}>
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="font-comic text-2xl" style={{ color: s.color }}>{s.num}</div>
                  <div className="text-[10px] font-bold text-comic-black/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Panel grid refleksi akhir */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            { icon: '🎓', title: 'Ilmu yang Diraih', text: '61 chapter ini mewakili ribuan jam belajar, coding, trial & error yang membentuk siapa saya.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '❤️', title: 'Passion yang Terjaga', text: 'Dari hari pertama coding sampai hari ini — api semangat tidak pernah padam, malah semakin besar.', color: '#e63329', bg: '#fef2f2' },
            { icon: '🌟', title: 'Visi yang Semakin Jelas', text: 'KVT.kom, QRIS Donasi, Website Desa — bukan sekadar ide, ini adalah blueprint masa depan yang nyata.', color: '#f59e0b', bg: '#fffbeb' },
          ].map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              viewport={{ once: false }}
              whileHover={{ y: -6 }}
              className="overflow-hidden" style={{ border: `3px solid ${p.color}`, boxShadow: `5px 5px 0 ${p.color}`, background: p.bg }}
            >
              <div className="p-5 text-center">
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="font-comic text-lg mb-2" style={{ color: p.color }}>{p.title}</div>
                <div className="text-xs text-comic-black/70 leading-relaxed">{p.text}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Veteran + teaser Final */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="relative overflow-hidden"
                style={{ width: 180, height: 230, border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd700', background: '#fffbeb' }}>
                <Image src="/foto/komik-veteran.png" alt="Veteran" fill className="object-cover object-top" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 font-comic text-sm text-comic-black flex items-center justify-center"
                style={{
                  width: 70, height: 70, background: '#ffd700', border: '3px solid #0a0a0a',
                  boxShadow: '3px 3px 0 #0a0a0a',
                  clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'
                }}>
                EPIC!
              </motion.div>
              <div className="speech-bubble mt-4 text-xs text-center text-comic-black">
                &ldquo;Satu chapter lagi...<br />dan cerita terbaik dimulai!&rdquo;
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="p-8" style={{ border: '4px solid #ffd700', boxShadow: '8px 8px 0 rgba(255,215,0,0.5)', background: 'white' }}>
              <div className="font-comic text-3xl text-comic-black mb-4">⏭️ SELANJUTNYA...</div>
              <div className="space-y-3 mb-6">
                {[
                  { hint: 'Final chapter yang epic...', icon: '🎭' },
                  { hint: 'Cerita yang belum selesai...', icon: '📖' },
                  { hint: 'Undangan untuk bergabung...', icon: '✉️' },
                  { hint: 'Dan sebuah janji...', icon: '🤝' },
                ].map((h, i) => (
                  <div key={h.hint} className="flex items-center gap-3 p-2 border-b border-comic-black/10">
                    <span className="text-xl">{h.icon}</span>
                    <span className="font-bold text-sm text-comic-black/70 italic">{h.hint}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="font-comic text-2xl text-comic-blue"
                >
                  ↓ GULIR KE BAWAH ↓
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PanelBab>
  )
}

/* ═══════════════════════════════════════════════
   FINAL CHAPTER — THE GRAND FINALE
═══════════════════════════════════════════════ */
function FinalChapter() {
  return (
    <section id="final-chapter" className="py-24 px-4 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="halftone-yellow" />
      {/* Speed lines dramatik */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ background: 'repeating-conic-gradient(from 0deg at 50% 50%,#ffd700 0deg,transparent 1deg,transparent 4deg)' }} />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Label */}
        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 150 }} viewport={{ once: false }}
          className="chapter-label mb-6 inline-block text-lg tracking-widest"
          style={{ color: '#ffd700', borderColor: '#ffd700', padding: '8px 24px' }}>
          ✦ FINAL CHAPTER ✦
        </motion.div>

        {/* Grand title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false }}
          className="font-comic text-white mb-6 leading-none"
          style={{ fontSize: 'clamp(3rem,10vw,7rem)', textShadow: '5px 5px 0 #ffd700' }}
        >
          THE STORY<br />
          <span style={{ color: '#ffd700', WebkitTextStroke: '2px #ffd700' }}>NEVER ENDS</span>
        </motion.h1>

        {/* Speech bubble besar */}
        <motion.div initial={{ opacity: 0, scale: 0, rotate: -5 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.35, type: 'spring', stiffness: 150 }} viewport={{ once: false }}
          className="inline-block mb-10">
          <div className="font-bold text-comic-black text-sm px-8 py-4"
            style={{ background: 'white', border: '4px solid #ffd700', boxShadow: '6px 6px 0 #ffd700', borderRadius: 20, maxWidth: 500 }}>
            &ldquo;Ini bukan akhir dari cerita — ini adalah undangan untuk kamu bergabung dan menulis chapter berikutnya bersama saya.&rdquo;
          </div>
        </motion.div>

        {/* 3 panel komik sejajar */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {[
            { title: 'THE DEVELOPER', img: '/foto/komik-profil.png', quote: 'Kode adalah bahasa saya berbicara kepada dunia.', color: '#1a5cff' },
            { title: 'THE VETERAN', img: '/foto/komik-veteran.png', quote: 'Pengalaman adalah guru terbaik yang tidak perlu membayar SPP.', color: '#ffd700' },
            { title: 'THE CREATOR', img: '/foto/karakter.png', quote: 'Setiap piksel dan setiap baris memiliki ceritanya sendiri.', color: '#22c55e' },
          ].map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 50, rotate: i === 1 ? 0 : i === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
              viewport={{ once: false }}
              whileHover={{ y: -10, rotate: i === 1 ? 0 : i === 0 ? -2 : 2 }}
              className="overflow-hidden"
              style={{ border: `4px solid ${p.color}`, boxShadow: `8px 8px 0 ${p.color}`, background: 'white' }}
            >
              <div className="py-2 font-comic text-sm text-white text-center" style={{ background: p.color, borderBottom: '3px solid #0a0a0a' }}>
                {p.title}
              </div>
              <div className="relative h-48 overflow-hidden" style={{ background: '#e8f0ff' }}>
                <Image src={p.img} alt={p.title} fill className="object-cover object-top" />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold italic text-comic-black/70 text-center leading-relaxed">&ldquo;{p.quote}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pesan penutup besar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -1 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
          viewport={{ once: false, amount: 0.3 }}
          className="p-10 mb-10"
          style={{ border: '5px solid #ffd700', boxShadow: '10px 10px 0 rgba(255,215,0,0.3)', background: 'white' }}
        >
          <div className="font-comic text-5xl text-comic-black/10 select-none leading-none mb-0">&ldquo;</div>
          <p className="font-bold text-lg md:text-xl text-comic-black leading-relaxed mb-6 max-w-3xl mx-auto">
            Terima kasih sudah membaca 61 chapter cerita saya. Ini bukan sekadar portofolio —
            ini adalah <span className="text-comic-blue">bukti bahwa mimpi yang dikerjakan</span> bisa menjadi kenyataan,
            satu baris kode, satu proyek, dan satu hari pada satu waktu.
            <br /><br />
            Jika kamu adalah developer muda yang baru mulai — mulailah hari ini.
            Jika kamu adalah klien yang mencari partner — mari berkolaborasi.
            Jika kamu adalah siapapun yang membutuhkan sistem digital — saya siap membantu.
            <br /><br />
            <span className="text-comic-blue">Cerita terbaik selalu ditulis bersama.</span>
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-16 h-20 overflow-hidden" style={{ border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #1a5cff' }}>
              <Image src="/foto/komik-profil.png" alt="Rizki" fill className="object-cover object-top" />
            </div>
            <div className="text-left">
              <div className="font-comic text-xl text-comic-black">Rizki Habibi</div>
              <div className="text-xs font-bold text-comic-black/50">Web Developer • Innovator • Founder KVT.kom</div>
              <div className="text-xs font-bold text-comic-blue mt-0.5">Jember, 2026</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a href="#contact" className="btn-comic text-lg px-8 py-4">MULAI BERKOLABORASI →</a>
          <a href="https://github.com/rizki-habibi" target="_blank" rel="noopener noreferrer" className="btn-comic-blue text-lg px-8 py-4">LIHAT GITHUB</a>
          <a href="#home" className="btn-comic-outline text-lg px-8 py-4">BACA DARI AWAL ↑</a>
        </motion.div>

        {/* NEXT CHAPTER teaser */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="font-comic text-4xl md:text-5xl text-comic-black px-10 py-5 inline-block"
            style={{ background: '#ffd700', border: '4px solid #ffd700', boxShadow: '8px 8px 0 rgba(255,215,0,0.4)', transform: 'rotate(-1deg)' }}>
            NEXT CHAPTER: YOUR STORY →
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ChaptersGroup5() {
  return (
    <>
      <div className="comic-divider" /><Ch56 />
      <div className="comic-divider" /><Ch57 />
      <div className="comic-divider" /><Ch58 />
      <div className="comic-divider" /><Ch59 />
      <div className="comic-divider" /><Ch60 />
      <div className="comic-divider" /><Ch61 />
      <div className="comic-divider" /><FinalChapter />
    </>
  )
}
