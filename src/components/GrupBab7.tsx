'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

function PanelBab({ id, chNum, judul, warna, latarBelakang, gelap, children }: {
  id: string; chNum: string; judul: string; warna: string; latarBelakang: string; gelap?: boolean; children: React.ReactNode
}) {
  const angka = (chNum.match(/\d+/) || [chNum])[0]
  return (
    <section id={id} className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden" style={{ background: gelap ? '#0a0a0a' : latarBelakang }}>
      {gelap ? <div className="halftone-yellow" /> : <div className="halftone-bg" />}
      <div className="max-w-6xl mx-auto relative z-10">
        <HeaderBab nomor={angka} judul={judul} warna={gelap ? '#ffd700' : warna} gelap={gelap} />
        {children}
      </div>
    </section>
  )
}

// ─── CHAPTER 71: KESEHATAN DIGITAL ───────────────────────────────────────────
function Ch71() {
  const tips = [
    { icon: '👀', judul: '20-20-20 Rule', teks: 'Setiap 20 menit, lihat benda 20 kaki jauhnya selama 20 detik. Coding marathon butuh jeda mata!', warna: '#22c55e' },
    { icon: '💪', judul: 'Stretching Rutin', teks: 'Tangan dan pergelangan sering pegal? 5 menit stretching per jam mencegah cedera jangka panjang.', warna: '#1a5cff' },
    { icon: '🧘', judul: 'Focus Mode', teks: 'Pomodoro Technique: 25 menit fokus, 5 menit istirahat. Produktivitas naik, stress turun.', warna: '#8b5cf6' },
    { icon: '💧', judul: 'Hidrasi', teks: 'Minum air yang cukup! Dehidrasi = fokus turun. Botol air di meja adalah setup wajib developer.', warna: '#0891b2' },
    { icon: '🌙', judul: 'Sleep > Grind', teks: 'Tidur cukup = otak bersih. Satu jam tidur lebih baik dari dua jam coding sambil mengantuk.', warna: '#f59e0b' },
    { icon: '🏃', judul: 'Move It!', teks: 'Berdiri dan jalan setiap jam. Duduk terlalu lama = bahaya kesehatan. Pokemon GO membantu!', warna: '#e63329' },
  ]
  return (
    <PanelBab id="ch71" chNum="CHAPTER 71" judul="DEVELOPER SEHAT — BODY & MIND" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">
        💚 Kode terbaik lahir dari developer yang sehat jasmani dan rohani!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tips.map((t, i) => (
          <motion.div key={t.judul}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-4"
            style={{ border: `3px solid ${t.warna}`, boxShadow: `4px 4px 0 ${t.warna}`, background: 'white' }}>
            <div className="text-3xl mb-2">{t.icon}</div>
            <div className="font-comic text-base text-[#0a0a0a] mb-1" style={{ color: t.warna }}>{t.judul}</div>
            <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{t.teks}</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// ─── CHAPTER 72: MUSIK & CODING ──────────────────────────────────────────────
function Ch72() {
  const daftarGenre = [
    { nama: 'Lofi Hip-Hop', emoji: '🎵', deskripsi: 'Ritme pelan + noise putih = zona fokus sempurna untuk coding panjang', power: 95, warna: '#1a5cff' },
    { nama: 'Instrumental Jazz', emoji: '🎷', deskripsi: 'Kompleksitas jazz melatih otak multi-task. Cocok untuk arsitektur sistem', power: 88, warna: '#8b5cf6' },
    { nama: 'Game OST', emoji: '🎮', deskripsi: 'Soundtrack game dirancang untuk fokus panjang — Circle of Life, Zelda Theme', power: 92, warna: '#22c55e' },
    { nama: 'Anime OST', emoji: '🎌', deskripsi: 'Attack on Titan, One Piece, Naruto — boost semangat untuk debug maraton!', power: 90, warna: '#e63329' },
    { nama: 'Classical Piano', emoji: '🎹', deskripsi: 'Mozart, Chopin, Beethoven — coding dengan klasik terasa seperti membuat karya seni', power: 85, warna: '#f59e0b' },
  ]
  return (
    <PanelBab id="ch72" chNum="CHAPTER 72" judul="CODING WITH MUSIC — SOUNDTRACK HIDUP" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="speech-bubble-right inline-block text-sm mb-4 text-[#0a0a0a]">
            🎵 Musik yang tepat = productivity multiplier x3!
          </div>
          <div className="space-y-3">
            {daftarGenre.map((genre, i) => (
              <motion.div key={genre.nama}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-3"
                style={{ border: `2px solid ${genre.warna}`, boxShadow: `3px 3px 0 ${genre.warna}`, background: 'white' }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xl">{genre.emoji}</span>
                  <span className="font-comic text-sm text-[#0a0a0a]">{genre.nama}</span>
                  <span className="ml-auto font-comic text-sm" style={{ color: genre.warna }}>{genre.power}%</span>
                </div>
                <div className="h-2.5" style={{ border: '1.5px solid #0a0a0a', background: '#f0f0eb' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${genre.power}%` }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      height: '100%',
                      background: `repeating-linear-gradient(-45deg,${genre.warna} 0,${genre.warna} 5px,${genre.warna}88 5px,${genre.warna}88 10px)`,
                    }}
                  />
                </div>
                <p className="text-[10px] text-[#0a0a0a]/60 font-bold mt-1">{genre.deskripsi}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="comic-panel-dark p-6">
          <div className="font-comic text-xl text-white mb-4">🎧 SETUP MUSIK IDEAL</div>
          <div className="space-y-4">
            {[
              { label: 'Headphone', val: 'Over-ear dengan noise cancelling', icon: '🎧' },
              { label: 'Platform', val: 'Spotify + YouTube Music', icon: '📱' },
              { label: 'Playlist Favorit', val: '"Lofi Rizki" + "Anime OST Mix"', icon: '🎵' },
              { label: 'Volume Ideal', val: '40-60% — cukup fokus, tidak merusak telinga', icon: '🔊' },
              { label: 'Waktu Terbaik', val: 'Malam hari: 10pm - 2am coding session', icon: '🌙' },
            ].map(s => (
              <div key={s.label} className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{s.icon}</span>
                <div>
                  <div className="font-comic text-[10px] text-yellow-400">{s.label.toUpperCase()}</div>
                  <div className="text-xs text-white/70 font-bold">{s.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// ─── CHAPTER 73: BACAAN & RISET ───────────────────────────────────────────────
function Ch73() {
  const daftarBacaan = [
    { kategori: 'Teknologi', items: ['Clean Code — Robert Martin', 'The Pragmatic Programmer', 'You Don\'t Know JS', 'Laravel Documentation'], warna: '#1a5cff', icon: '💻' },
    { kategori: 'Bisnis & Startup', items: ['Zero to One — Peter Thiel', 'The Lean Startup', 'Atomic Habits', 'Deep Work'], warna: '#22c55e', icon: '🚀' },
    { kategori: 'Artikel & Blog', items: ['Dev.to Daily', 'CSS-Tricks', 'Smashing Magazine', 'Laracasts'], warna: '#f59e0b', icon: '📰' },
    { kategori: 'YouTube Channel', items: ['Traversy Media', 'Fireship', 'The Coding Train', 'Laracasts YouTube'], warna: '#e63329', icon: '▶️' },
  ]
  return (
    <PanelBab id="ch73" chNum="CHAPTER 73" judul="PERPUSTAKAAN DIGITAL — SUMBER ILMU" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">
        📚 Belajar tidak pernah berhenti — setiap hari adalah chapter baru!
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {daftarBacaan.map((buku, i) => (
          <motion.div key={buku.kategori}
            initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            style={{ border: `3px solid ${buku.warna}`, boxShadow: `5px 5px 0 ${buku.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: buku.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-xl">{buku.icon}</span>
              <span className="font-comic text-sm text-white">{buku.kategori}</span>
            </div>
            <div className="p-4 space-y-2">
              {buku.items.map(item => (
                <div key={item} className="flex items-center gap-2 text-xs font-bold text-[#0a0a0a]">
                  <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: buku.warna }} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// ─── CHAPTER 74: KREATIVITAS & DESAIN ────────────────────────────────────────
function Ch74() {
  const karya = [
    { tipe: 'Desain Logo', tool: 'Canva + CorelDraw', hasil: '20+ logo untuk komunitas dan event', icon: '🎨', warna: '#8b5cf6' },
    { tipe: 'Poster & Banner', tool: 'Canva + Affinity', hasil: '50+ poster event dan promosi digital', icon: '🖼️', warna: '#1a5cff' },
    { tipe: 'Edit Video', tool: 'CapCut + Vegas Pro', hasil: 'Video dokumentasi dan konten digital', icon: '🎬', warna: '#e63329' },
    { tipe: 'UI/UX Design', tool: 'Figma + Draw.io', hasil: 'Wireframe dan prototype aplikasi web', icon: '📐', warna: '#22c55e' },
    { tipe: 'Konten Sosial Media', tool: 'Canva + Photoshop', hasil: 'Template feed Instagram dan LinkedIn', icon: '📱', warna: '#f59e0b' },
    { tipe: 'Ilustrasi Digital', tool: 'Medibang + Canva', hasil: 'Karakter mascot dan sticker komunitas', icon: '✏️', warna: '#0891b2' },
  ]
  return (
    <PanelBab id="ch74" chNum="CHAPTER 74" judul="KREATIVITAS — SISI LAIN SANG DEVELOPER" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🎨 Developer yang bisa desain = unicorn yang dicari semua startup!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {karya.map((k, i) => (
          <motion.div key={k.tipe}
            initial={{ opacity: 0, y: 25, rotate: i % 3 === 0 ? -2 : i % 3 === 1 ? 0 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.07, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
            className="p-4"
            style={{ border: `3px solid ${k.warna}`, boxShadow: `4px 4px 0 ${k.warna}`, background: 'white' }}>
            <div className="text-3xl mb-2">{k.icon}</div>
            <div className="font-comic text-base mb-0.5" style={{ color: k.warna }}>{k.tipe}</div>
            <div className="text-[10px] font-bold text-[#0a0a0a]/50 mb-2">🛠️ {k.tool}</div>
            <div className="text-xs font-bold text-[#0a0a0a]/70">{k.hasil}</div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// ─── CHAPTER 75: KOMUNITAS & MENTOR ──────────────────────────────────────────
function Ch75() {
  const peran = [
    { peran: 'Member Aktif', komunitas: 'Discord Developer Indonesia', kontribusi: 'Bantu jawab pertanyaan Laravel & PHP', icon: '💬', warna: '#1a5cff' },
    { peran: 'Content Sharer', komunitas: 'Facebook Group Web Dev ID', kontribusi: 'Bagikan tutorial dan tips coding gratis', icon: '📢', warna: '#22c55e' },
    { peran: 'Peer Mentor', komunitas: 'Teman Sesama Mahasiswa', kontribusi: 'Bantu teman belajar framework & debugging', icon: '🎓', warna: '#8b5cf6' },
    { peran: 'Open Source Contributor', komunitas: 'GitHub Community', kontribusi: 'Kontribusi kecil ke beberapa project', icon: '🐙', warna: '#0a0a0a' },
  ]
  return (
    <PanelBab id="ch75" chNum="CHAPTER 75" judul="KOMUNITAS — KEKUATAN BERSAMA" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">
            👥 Komunitas yang baik bisa membawa kamu 10x lebih jauh!
          </div>
          <div className="space-y-3">
            {peran.map((p, i) => (
              <motion.div key={p.peran}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="flex gap-3 p-3"
                style={{ border: `3px solid ${p.warna}`, boxShadow: `4px 4px 0 ${p.warna}`, background: 'white' }}>
                <div className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: p.warna, border: '2px solid #0a0a0a' }}>
                  {p.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-comic text-sm text-[#0a0a0a]">{p.peran}</div>
                  <div className="text-[10px] font-bold text-[#0a0a0a]/50">{p.komunitas}</div>
                  <div className="text-xs font-bold text-[#0a0a0a]/70 mt-0.5">{p.kontribusi}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="comic-panel-dark p-6">
          <div className="font-comic text-xl text-white mb-4">🌟 NILAI KOMUNITAS</div>
          <div className="space-y-4">
            {[
              { val: 'BERBAGI', desc: 'Ilmu yang dibagikan justru makin berkembang, bukan berkurang', icon: '🎁', warna: '#22c55e' },
              { val: 'BELAJAR', desc: 'Dari pertanyaan orang lain, kamu sering menemukan solusi baru', icon: '📚', warna: '#1a5cff' },
              { val: 'BERTUMBUH', desc: 'Komunitas yang baik mendorong satu sama lain naik level', icon: '📈', warna: '#f59e0b' },
              { val: 'BERKOLABORASI', desc: 'Dua kepala lebih baik — apalagi ratusan developer bersatu', icon: '🤝', warna: '#8b5cf6' },
            ].map(v => (
              <div key={v.val} className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: v.warna, border: '2px solid #0a0a0a' }}>{v.icon}</div>
                <div>
                  <div className="font-comic text-sm" style={{ color: v.warna }}>{v.val}</div>
                  <div className="text-xs text-white/60 font-bold">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// ─── CHAPTER 76: IMPIAN BESAR ─────────────────────────────────────────────────
function Ch76() {
  const milestones = [
    { tahun: '2026', target: 'Lulus Skripsi + Launch KVT.kom Beta', status: 'IN PROGRESS', warna: '#1a5cff', icon: '🎓' },
    { tahun: '2027', target: 'KVT.kom 1000+ Pengguna Aktif', status: 'TARGET', warna: '#22c55e', icon: '🚀' },
    { tahun: '2027', target: 'Bangun tim kecil 5-10 orang', status: 'TARGET', warna: '#8b5cf6', icon: '👥' },
    { tahun: '2028', target: 'KVT.kom resmi sebagai startup', status: 'VISION', warna: '#f59e0b', icon: '🏢' },
    { tahun: '2028', target: 'Publish jurnal/penelitian AI & Web', status: 'VISION', warna: '#e63329', icon: '📄' },
    { tahun: '2030', target: 'KVT.kom jangkau 10 kota di Indonesia', status: 'DREAM', warna: '#0891b2', icon: '🌏' },
  ]
  return (
    <PanelBab id="ch76" chNum="CHAPTER 76" judul="IMPIAN BESAR — BEYOND THE HORIZON" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        🌟 Mimpi besar dimulai dari langkah kecil yang konsisten setiap hari!
      </div>
      <div className="relative">
        {/* Garis vertikal */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5"
          style={{ background: 'repeating-linear-gradient(180deg,#ffd700 0,#ffd700 6px,transparent 6px,transparent 12px)' }} />
        <div className="space-y-4 pl-16 sm:pl-20">
          {milestones.map((m, i) => (
            <motion.div key={`${m.tahun}-${m.target}`}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              viewport={{ once: true }}
              className="relative">
              {/* Ikon di garis */}
              <div className="absolute -left-12 sm:-left-14 top-2 w-9 h-9 flex items-center justify-center text-lg"
                style={{ background: m.warna, border: '3px solid #ffd700', boxShadow: '2px 2px 0 #ffd700' }}>
                {m.icon}
              </div>
              <div className="p-3 sm:p-4"
                style={{ border: `2px solid ${m.warna}`, boxShadow: `4px 4px 0 ${m.warna}`, background: '#111' }}>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-comic text-sm" style={{ color: m.warna }}>{m.tahun}</span>
                  <span className="font-comic text-[9px] text-[#0a0a0a] px-2 py-0.5"
                    style={{ background: m.warna, border: '1px solid #0a0a0a' }}>{m.status}</span>
                </div>
                <p className="text-sm text-white/80 font-bold leading-snug">{m.target}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// ─── CHAPTER 77: PESAN UNTUK DEVELOPER MUDA ──────────────────────────────────
function Ch77() {
  const pesan = [
    { no: '01', pesan: 'Mulai dari yang kamu tahu sekarang, bukan dari yang sempurna besok.', icon: '🚀', warna: '#1a5cff' },
    { no: '02', pesan: 'Google dan Stack Overflow bukan curang — itu alat profesional.', icon: '🔍', warna: '#22c55e' },
    { no: '03', pesan: 'Sertifikat bagus, tapi portfolio nyata lebih bicara banyak.', icon: '💼', warna: '#f59e0b' },
    { no: '04', pesan: 'Belajar dari error lebih berharga dari tutorial yang berjalan mulus.', icon: '🐛', warna: '#e63329' },
    { no: '05', pesan: 'Komunitas developer itu ramah — jangan takut bertanya!', icon: '🤝', warna: '#8b5cf6' },
    { no: '06', pesan: 'Tidak perlu hafal semua syntax — pahami logikanya.', icon: '🧠', warna: '#0891b2' },
  ]
  return (
    <PanelBab id="ch77" chNum="CHAPTER 77" judul="SURAT UNTUK DEVELOPER MUDA" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ✉️ Dari saya yang pernah ada di posisi itu — pesan ini untuk kamu!
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {pesan.map((p, i) => (
          <motion.div key={p.no}
            initial={{ opacity: 0, rotate: i % 2 === 0 ? -3 : 3, y: 20 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 150 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, rotate: i % 2 === 0 ? -1 : 1 }}
            style={{ border: `3px solid ${p.warna}`, boxShadow: `5px 5px 0 ${p.warna}`, background: 'white', padding: 16 }}>
            <div className="flex items-start gap-3">
              <div className="font-comic text-2xl flex-shrink-0" style={{ color: p.warna }}>{p.no}</div>
              <div>
                <div className="text-xl mb-1">{p.icon}</div>
                <p className="text-sm font-bold text-[#0a0a0a]/80 leading-relaxed italic">&ldquo;{p.pesan}&rdquo;</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        viewport={{ once: true }}
        className="p-6 text-center"
        style={{ background: '#ffd700', border: '4px solid #0a0a0a', boxShadow: '7px 7px 0 #0a0a0a', borderRadius: 16 }}>
        <div className="font-comic text-2xl text-[#0a0a0a] mb-2">💌 DARI RIZKI HABIBI</div>
        <p className="text-sm font-bold text-[#0a0a0a]/80 max-w-lg mx-auto">
          Kamu tidak harus sempurna untuk mulai. Tapi kamu harus mulai untuk jadi sempurna.
          Setiap developer hebat pernah bingung dengan &ldquo;Hello World&rdquo;. Teruslah coding! 🚀
        </p>
      </motion.div>
    </PanelBab>
  )
}

// ─── CHAPTER 78: INOVASI IOT LANJUTAN ────────────────────────────────────────
function Ch78() {
  const proyek = [
    { nama: 'Smart Pot', deskripsi: 'Pot tanaman otomatis dengan sensor kelembaban tanah, penyiram otomatis berbasis ESP32, dan notifikasi ke HP.', komponen: ['ESP32', 'Soil Sensor', 'Water Pump', 'Relay'], warna: '#22c55e', icon: '🌱' },
    { nama: 'Air Quality Monitor', deskripsi: 'Monitoring kualitas udara ruangan dengan sensor MQ-135, tampil di dashboard web real-time.', komponen: ['ESP8266', 'MQ-135', 'OLED Display', 'Firebase'], warna: '#0891b2', icon: '💨' },
    { nama: 'Smart Door Lock', deskripsi: 'Kunci pintu berbasis RFID + keypad dengan log akses dan remote unlock via WiFi.', komponen: ['ESP32', 'RFID RC522', 'Servo Motor', 'Keypad'], warna: '#8b5cf6', icon: '🔐' },
    { nama: 'Energy Monitor', deskripsi: 'Monitor konsumsi listrik rumah real-time, alert jika melebihi batas, integrasi dengan dashboard web.', komponen: ['Arduino', 'ACS712', 'LCD', 'Node.js API'], warna: '#f59e0b', icon: '⚡' },
  ]
  return (
    <PanelBab id="ch78" chNum="CHAPTER 78" judul="IOT INOVASI — DARI BARANG BEKAS JADI KARYA" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">
        🔧 Komponen bekas + kreativitas = inovasi nyata yang bermanfaat!
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {proyek.map((p, i) => (
          <motion.div key={p.nama}
            initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            style={{ border: `3px solid ${p.warna}`, boxShadow: `5px 5px 0 ${p.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: p.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-xl">{p.icon}</span>
              <span className="font-comic text-sm text-white">{p.nama}</span>
            </div>
            <div className="p-4">
              <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed mb-3">{p.deskripsi}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.komponen.map(k => (
                  <span key={k} className="font-bold text-[9px] px-2 py-0.5 text-white"
                    style={{ background: p.warna, border: `1px solid ${p.warna}` }}>{k}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// ─── CHAPTER 79: MASA DEPAN AI & WEB ─────────────────────────────────────────
function Ch79() {
  const tren = [
    { nama: 'AI-Powered Development', deskripsi: 'GitHub Copilot, ChatGPT Code — AI sebagai pair programmer yang selalu siap membantu.', status: 'SEKARANG', warna: '#8b5cf6', icon: '🤖' },
    { nama: 'Edge Computing', deskripsi: 'Proses data lebih dekat ke pengguna — latensi ultra-rendah untuk aplikasi real-time.', status: 'BERKEMBANG', warna: '#1a5cff', icon: '⚡' },
    { nama: 'Web3 & Blockchain', deskripsi: 'Desentralisasi data dan aset digital — masa depan kepemilikan dan transaksi online.', status: 'EKSPLORASI', warna: '#f59e0b', icon: '🔗' },
    { nama: 'PWA & Offline-First', deskripsi: 'Website yang berfungsi seperti app native, bahkan tanpa internet. Masa depan web mobile.', status: 'ADOPSI', warna: '#22c55e', icon: '📱' },
    { nama: 'Green Computing', deskripsi: 'Optimasi konsumsi energi server dan kode — developer bertanggung jawab pada lingkungan.', status: 'PENTING', warna: '#0891b2', icon: '🌱' },
    { nama: 'AR/VR Web', deskripsi: 'WebXR dan spatial computing — internet yang bisa kamu masuki secara fisik. KVT.kom mungkin di sini?', status: 'MASA DEPAN', warna: '#e63329', icon: '🥽' },
  ]
  return (
    <PanelBab id="ch79" chNum="CHAPTER 79" judul="MASA DEPAN WEB — TREN TEKNOLOGI" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🚀 Developer yang tidak update tren = kode yang tidak di-update!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tren.map((t, i) => (
          <motion.div key={t.nama}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            style={{ border: `3px solid ${t.warna}`, boxShadow: `4px 4px 0 ${t.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="h-1.5" style={{ background: t.warna }} />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{t.icon}</span>
                <span className="font-comic text-[8px] text-white px-2 py-0.5"
                  style={{ background: t.warna, border: `1px solid ${t.warna}` }}>{t.status}</span>
              </div>
              <div className="font-comic text-sm text-[#0a0a0a] mb-1" style={{ color: t.warna }}>{t.nama}</div>
              <p className="text-[10px] font-bold text-[#0a0a0a]/70 leading-relaxed">{t.deskripsi}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// ─── CHAPTER 80: THANK YOU ────────────────────────────────────────────────────
function Ch80() {
  return (
    <PanelBab id="ch80" chNum="CHAPTER 80" judul="TERIMA KASIH TELAH MEMBACA!" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 150 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-6xl sm:text-8xl mb-4">🙏</div>
          <div className="font-comic text-4xl sm:text-5xl text-white mb-2">
            TERIMA KASIH!
          </div>
          <div className="font-comic text-yellow-400 text-xl">SUDAH MEMBACA SAMPAI AKHIR</div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { angka: '80+', label: 'Chapter Dibaca', icon: '📖', warna: '#ffd700' },
            { angka: '∞', label: 'Semangat Tersisa', icon: '🚀', warna: '#22c55e' },
            { angka: '1', label: 'Developer Unik', icon: '⭐', warna: '#1a5cff' },
          ].map(s => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring' }}
              viewport={{ once: true }}
              className="text-center p-4"
              style={{ border: `3px solid ${s.warna}`, boxShadow: `4px 4px 0 ${s.warna}`, background: '#111' }}>
              <div className="text-3xl mb-1">{s.icon}</div>
              <div className="font-comic text-3xl" style={{ color: s.warna }}>{s.angka}</div>
              <div className="text-xs text-white/50 font-bold">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="p-6"
          style={{ border: '3px solid #ffd700', boxShadow: '5px 5px 0 #ffd700', background: '#111' }}>
          <p className="text-sm text-white/80 font-bold leading-relaxed">
            Portfolio ini masih terus berkembang — sama seperti saya yang terus belajar.
            Setiap chapter baru adalah bukti bahwa <span className="text-yellow-400">perjalanan tidak pernah berhenti.</span>
            <br /><br />
            Jika kamu sampai di sini, berarti kamu luar biasa sabar 😄
            <br />
            <span className="text-yellow-400">Mari buat chapter berikutnya bersama!</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <a href="#contact" className="btn-comic inline-flex items-center gap-2 text-base sm:text-lg">
            💬 HUBUNGI SAYA →
          </a>
        </motion.div>
      </div>
    </PanelBab>
  )
}

// ─── EXPORT UTAMA ─────────────────────────────────────────────────────────────
export default function ChaptersGroup7() {
  return (
    <>
      <div className="comic-divider" />
      <Ch71 />
      <div className="comic-divider" />
      <Ch72 />
      <div className="comic-divider" />
      <Ch73 />
      <div className="comic-divider" />
      <Ch74 />
      <div className="comic-divider" />
      <Ch75 />
      <div className="comic-divider" />
      <Ch76 />
      <div className="comic-divider" />
      <Ch77 />
      <div className="comic-divider" />
      <Ch78 />
      <div className="comic-divider" />
      <Ch79 />
      <div className="comic-divider" />
      <Ch80 />
    </>
  )
}
