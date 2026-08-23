'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

// --- HELPER: panel wrapper --------------------------------------------------
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

// --- HELPER: slide komik (horizontal scroll) --------------------------------
function SlideKomik({ slides }: {
  slides: { icon: string; judul: string; teks: string; warna: string; bg: string; badge?: string }[]
}) {
  const [aktif, setAktif] = useState(0)

  return (
    <div>
      {/* Panel slide besar */}
      <div className="relative overflow-hidden mb-4"
        style={{ border: '3px solid #0a0a0a', boxShadow: '6px 6px 0 #0a0a0a', minHeight: 200 }}>

        <AnimatePresence mode="wait">
          <motion.div
            key={aktif}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ duration: 0.35, type: 'spring', stiffness: 180 }}
            className="relative p-6 sm:p-8"
            style={{ background: slides[aktif].bg }}
          >
            {/* Badge */}
            {slides[aktif].badge && (
              <div className="absolute top-3 right-3 font-comic text-[10px] text-white px-2 py-0.5"
                style={{ background: slides[aktif].warna, border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}>
                {slides[aktif].badge}
              </div>
            )}

            {/* Nomor slide */}
            <div className="font-comic text-[10px] tracking-widest mb-3 opacity-40"
              style={{ color: slides[aktif].warna }}>
              {String(aktif + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <motion.div
                key={`icon-${aktif}`}
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 220, delay: 0.1 }}
                className="text-5xl sm:text-6xl flex-shrink-0"
              >
                {slides[aktif].icon}
              </motion.div>
              <div>
                <h3 className="font-comic text-xl sm:text-2xl text-[#0a0a0a] mb-2 leading-tight">
                  {slides[aktif].judul}
                </h3>
                <p className="text-sm text-[#0a0a0a]/70 font-bold leading-relaxed">
                  {slides[aktif].teks}
                </p>
              </div>
            </div>

            {/* Speed lines dekoratif */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{ background: 'repeating-conic-gradient(from 0deg at 100% 50%,#0a0a0a 0deg,transparent 1deg,transparent 5deg)' }} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail panel strip */}
      <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
        {slides.map((s, i) => (
          <motion.button
            key={i}
            onClick={() => setAktif(i)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 transition-all"
            style={{
              background: aktif === i ? s.warna : 'white',
              border: `2px solid ${s.warna}`,
              boxShadow: aktif === i ? `3px 3px 0 #0a0a0a` : `2px 2px 0 ${s.warna}55`,
              minWidth: 64,
            }}
          >
            <span className="text-xl">{s.icon}</span>
            <span className="font-comic text-[8px] leading-tight text-center"
              style={{ color: aktif === i ? 'white' : '#0a0a0a' }}>
              {s.judul.split(' ').slice(0, 2).join(' ')}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

// --- CHAPTER 62: POKEMON GO -------------------------------------------------
function Ch62() {
  const slides = [
    { icon: '🎮', judul: 'Awal Petualangan', teks: 'Pertama kali install Pokemon GO — langsung ketagihan jalan-jalan sambil nangkep Pikachu di sekitar kampus. GPS tracker terbaik untuk pemalas bergerak!', warna: '#22c55e', bg: '#f0fdf4', badge: 'CHAPTER START' },
    { icon: '🗺️', judul: 'Eksplorasi Kota', teks: 'Jalan-jalan ke tempat baru hanya demi PokeStop. Tanpa sadar udah keliling 5 km. Pokemon GO versi gym = jalan kaki gratis!', warna: '#1a5cff', bg: '#e8f0ff' },
    { icon: '⚔️', judul: 'Gym Battle', teks: 'Perang antar tim di Gym — Team Mystic, Valor, Instinct. Pernah kalah berkali-kali di satu gym, tapi tidak menyerah sampai menang!', warna: '#e63329', bg: '#fef2f2', badge: '⚔️ BATTLE' },
    { icon: '🥚', judul: 'Telur & Buddy', teks: 'Menetas telur 10 km dengan jalan kaki sungguhan. Buddy system bikin makin sayang sama Pokemon favorit. Effort nyata untuk hadiah digital!', warna: '#f59e0b', bg: '#fffbeb' },
    { icon: '🌟', judul: 'Pelajaran dari Game', teks: 'Pokemon GO mengajarkan: jangan hanya duduk diam, jelajahi dunia! Sama seperti coding — kamu harus keluar dari comfort zone untuk berkembang.', warna: '#8b5cf6', bg: '#f5f0ff', badge: 'MORAL CERITA' },
  ]
  return (
    <PanelBab id="ch62" chNum="CHAPTER 62" judul="GAME LIFE: POKEMON GO!" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">
            🎮 &quot;Gotta Catch &apos;Em All!&quot; — prinsip hidup sesungguhnya!
          </div>
          <SlideKomik slides={slides} />
        </div>
        <div className="space-y-4">
          <div className="comic-panel p-5">
            <div className="font-comic text-lg text-[#0a0a0a] mb-3">📊 STATISTIK PETUALANGAN</div>
            {[
              { label: 'Total Jarak Berjalan', val: '500+ KM', warna: '#22c55e' },
              { label: 'Pokemon Tertangkap', val: '800+', warna: '#f59e0b' },
              { label: 'Level Trainer', val: '35+', warna: '#1a5cff' },
              { label: 'Gym Pernah Dikuasai', val: '50+', warna: '#e63329' },
            ].map(s => (
              <div key={s.label} className="flex items-center justify-between py-1.5 border-b border-[#0a0a0a]/10 last:border-0">
                <span className="text-xs font-bold text-[#0a0a0a]/70">{s.label}</span>
                <span className="font-comic text-sm" style={{ color: s.warna }}>{s.val}</span>
              </div>
            ))}
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-base text-[#0a0a0a] mb-2">🎯 POKEMON FAVORIT</div>
            <div className="flex flex-wrap gap-2">
              {['Pikachu ⚡', 'Gengar 👻', 'Dragonite 🐲', 'Mewtwo 🔮', 'Lucario ⚡', 'Charizard 🔥'].map(p => (
                <span key={p} className="font-bold text-xs px-2 py-1 bg-white text-[#0a0a0a]"
                  style={{ border: '2px solid #22c55e', boxShadow: '2px 2px 0 #22c55e' }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 63: YUGIOH -----------------------------------------------------
function Ch63() {
  const kartu = [
    { nama: 'Dark Magician', type: 'SPELLCASTER', atk: '2500', def: '2100', warna: '#8b5cf6', icon: '🔮' },
    { nama: 'Blue-Eyes White Dragon', type: 'DRAGON', atk: '3000', def: '2500', warna: '#1a5cff', icon: '🐲' },
    { nama: 'Exodia The Forbidden One', type: 'SPECIAL', atk: '∞', def: '∞', warna: '#ffd700', icon: '💀' },
    { nama: 'Red-Eyes Black Dragon', type: 'DRAGON', atk: '2400', def: '2000', warna: '#e63329', icon: '🔥' },
    { nama: 'Cyber Dragon', type: 'MACHINE', atk: '2100', def: '1600', warna: '#0891b2', icon: '🤖' },
    { nama: 'Kuriboh', type: 'FIEND', atk: '300', def: '200', warna: '#f59e0b', icon: '🎲' },
  ]
  return (
    <PanelBab id="ch63" chNum="CHAPTER 63" judul="DUEL MONSTERS: YUGIOH!" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="speech-bubble-right inline-block text-sm mb-4 text-[#0a0a0a]">
            🃏 &quot;Aku percaya pada kartu-kartuku!&quot;
          </div>
          <div className="comic-panel-dark p-5 mb-4">
            <div className="font-comic text-xl text-white mb-3">⚔️ CERITA DUEL</div>
            <p className="text-sm text-white/80 font-bold leading-relaxed mb-3">
              Yugioh bukan sekadar game kartu — ini adalah simulasi strategi tingkat tinggi.
              Setiap duel mengajarkan: <span className="text-yellow-400">baca situasi, rencanakan beberapa langkah ke depan, dan jangan panik saat terdesak.</span>
            </p>
            <p className="text-sm text-white/60 font-bold leading-relaxed">
              Prinsip yang sama berlaku di coding: selalu ada solusi, kamu hanya perlu kartu yang tepat di waktu yang tepat.
            </p>
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-base text-[#0a0a0a] mb-2">🎯 DECK FAVORIT</div>
            <div className="flex flex-wrap gap-1.5">
              {['Dragon Deck', 'Spellcaster', 'Dark Magician', 'Exodia OTK', 'Blue-Eyes Alt.'].map(d => (
                <span key={d} className="font-bold text-[10px] px-2 py-1 text-[#0a0a0a] bg-white"
                  style={{ border: '2px solid #f59e0b', boxShadow: '2px 2px 0 #f59e0b' }}>{d}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Kartu-kartu */}
        <div>
          <div className="font-comic text-sm text-yellow-400 mb-3 text-center">⭐ MONSTER LEGENDARIS</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {kartu.map((k, i) => (
              <motion.div key={k.nama}
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, rotateZ: 2 }}
                className="relative overflow-hidden cursor-default"
                style={{ border: `3px solid ${k.warna}`, boxShadow: `4px 4px 0 ${k.warna}`, background: '#111', minHeight: 110 }}>
                <div className="h-1" style={{ background: k.warna }} />
                <div className="p-2 text-center">
                  <div className="text-2xl mb-1">{k.icon}</div>
                  <div className="font-comic text-[9px] leading-tight" style={{ color: k.warna }}>{k.nama}</div>
                  <div className="text-[8px] font-bold text-white/40 mt-0.5">{k.type}</div>
                  <div className="flex justify-between mt-2 text-[9px] font-bold">
                    <span style={{ color: '#22c55e' }}>ATK/{k.atk}</span>
                    <span style={{ color: '#1a5cff' }}>DEF/{k.def}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 64: GAME TAKTIK & STRATEGI -------------------------------------
function Ch64() {
  const games = [
    { nama: 'Clash of Clans', icon: '🏰', deskripsi: 'Bangun desa, latih pasukan, serang! Base farming level max.', tag: 'STRATEGI', warna: '#f59e0b' },
    { nama: 'Clash Royale', icon: '👑', deskripsi: 'Battle real-time 1v1 dengan kartu. Timing adalah segalanya.', tag: 'TAKTIK', warna: '#8b5cf6' },
    { nama: 'Rise of Kingdoms', icon: '⚔️', deskripsi: 'Strategi global, alliance, dan perebutan kota raya.', tag: 'STRATEGI', warna: '#e63329' },
    { nama: 'Mobile Legends', icon: '🗡️', deskripsi: 'MOBA taktis — teamwork, rotasi, dan shot-calling.', tag: 'MOBA', warna: '#1a5cff' },
    { nama: 'Chess Online', icon: '♟️', deskripsi: 'Catur digital — melatih berpikir beberapa langkah ke depan.', tag: 'LOGIKA', warna: '#0a0a0a' },
    { nama: 'Tower Defense', icon: '🗼', deskripsi: 'Pertahanan menara — penempatan optimal untuk hasil maksimal.', tag: 'DEFENSE', warna: '#22c55e' },
  ]
  return (
    <PanelBab id="ch64" chNum="CHAPTER 64" judul="MASTER STRATEGI & TAKTIK" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-6">
        ♟️ Game taktik = simulasi problem solving dunia nyata!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((g, i) => (
          <motion.div key={g.nama}
            initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
            className="relative overflow-hidden"
            style={{ border: `3px solid ${g.warna}`, boxShadow: `5px 5px 0 ${g.warna}`, background: 'white' }}>
            <div className="flex items-center gap-2 px-3 py-2"
              style={{ background: g.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-xl">{g.icon}</span>
              <span className="font-comic text-sm text-white">{g.nama}</span>
              <span className="ml-auto font-comic text-[9px] bg-white text-[#0a0a0a] px-1.5 py-0.5">{g.tag}</span>
            </div>
            <div className="p-3">
              <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{g.deskripsi}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 comic-panel-blue p-5">
        <div className="font-comic text-lg text-[#0a0a0a] mb-2">🧠 PELAJARAN DARI GAME TAKTIK</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            '🎯 Berpikir 3 langkah ke depan sebelum bertindak',
            '🤝 Teamwork lebih kuat dari pemain solo terbaik',
            '📊 Analisis data musuh sebelum menyerang',
            '🔄 Adaptasi strategi saat kondisi berubah',
          ].map(p => (
            <div key={p} className="flex items-start gap-2 text-xs font-bold text-[#0a0a0a]">
              <span className="flex-shrink-0">{p.split(' ')[0]}</span>
              <span>{p.split(' ').slice(1).join(' ')}</span>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 65: GAME KERAJAAN ------------------------------------------------
function Ch65() {
  const kerajaan = [
    { nama: 'Clash of Clans Village', level: 'TH 14', icon: '🏰', populasi: '∞', pasukan: 'Dragon + Witch + Bowler', warna: '#f59e0b' },
    { nama: 'Rise of Kingdoms City', level: 'Lv 25', icon: '🌆', populasi: '2.5M', pasukan: 'Cavalry + Archer + Infantry', warna: '#e63329' },
    { nama: 'Dream Kingdom', level: 'In Progress', icon: '👑', populasi: 'TBD', pasukan: 'Developer Army', warna: '#8b5cf6' },
  ]
  const slides = [
    { icon: '🏰', judul: 'Membangun Kerajaan Digital', teks: 'Game kerajaan mengajarkan manajemen sumber daya: kayak startup — mulai dari nol, upgrade bertahap, dan expand perlahan tapi pasti.', warna: '#f59e0b', bg: '#fffbeb', badge: 'STRATEGI' },
    { icon: '⚔️', judul: 'Perang & Aliansi', teks: 'Bergabung alliance yang kuat = networking. Serangan bersama = kolaborasi tim. Musuh terkuat justru jadi pelajaran terbaik.', warna: '#e63329', bg: '#fef2f2' },
    { icon: '🌱', judul: 'Farming & Resource', teks: 'Sabar farming resources sebelum serang = coding: setup environment & refactor dulu sebelum develop fitur baru. Prosesnya penting!', warna: '#22c55e', bg: '#f0fdf4', badge: '💡 INSIGHT' },
    { icon: '🎖️', judul: 'Jadi Pemimpin', teks: 'Jadi leader alliance: koordinasi 50+ member, strategi war, dan buat keputusan cepat. Sama persis dengan jadi tech lead di tim nyata.', warna: '#8b5cf6', bg: '#f5f0ff' },
  ]
  return (
    <PanelBab id="ch65" chNum="CHAPTER 65" judul="KINGDOM BUILDER — RAJA VIRTUAL" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="grid lg:grid-cols-2 gap-8">
        <SlideKomik slides={slides} />
        <div className="space-y-4">
          <div className="font-comic text-lg text-[#0a0a0a] mb-3">🏆 KERAJAAN-KERAJAANKU</div>
          {kerajaan.map((k, i) => (
            <motion.div key={k.nama}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="overflow-hidden"
              style={{ border: `3px solid ${k.warna}`, boxShadow: `4px 4px 0 ${k.warna}`, background: 'white' }}>
              <div className="flex items-center gap-2 px-4 py-2" style={{ background: k.warna, borderBottom: '2px solid #0a0a0a' }}>
                <span className="text-xl">{k.icon}</span>
                <span className="font-comic text-sm text-white">{k.nama}</span>
                <span className="ml-auto font-comic text-[9px] bg-white text-[#0a0a0a] px-2 py-0.5">{k.level}</span>
              </div>
              <div className="p-3 text-xs font-bold text-[#0a0a0a]/70">
                <div>👥 Populasi: <span style={{ color: k.warna }}>{k.populasi}</span></div>
                <div className="mt-1">⚔️ Pasukan: {k.pasukan}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 66: DRAGON & PETUALANGAN ----------------------------------------
function Ch66() {
  const petualangan = [
    { genre: 'Dragon Games', icon: '🐲', games: ['Dragon City', 'Dragonvale', 'Dragon Ball Z Dokkan', 'Dragon Nest'], warna: '#e63329', bg: '#fef2f2' },
    { genre: 'RPG Petualangan', icon: '⚔️', games: ['Genshin Impact', 'Honkai Star Rail', 'AFK Arena', 'Epic Seven'], warna: '#8b5cf6', bg: '#f5f0ff' },
    { genre: 'Open World', icon: '🗺️', games: ['Minecraft', 'Roblox', 'Terraria', 'Stardew Valley'], warna: '#22c55e', bg: '#f0fdf4' },
    { genre: 'Online Multiplayer', icon: '🌐', games: ['Among Us', 'Fall Guys', 'Stumble Guys', 'Garena Free Fire'], warna: '#1a5cff', bg: '#e8f0ff' },
  ]
  return (
    <PanelBab id="ch66" chNum="CHAPTER 66" judul="DRAGON QUEST & PETUALANGAN EPIK" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-6">
        🐲 Di dunia game, saya adalah petualang yang tidak pernah berhenti menjelajah!
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {petualangan.map((p, i) => (
          <motion.div key={p.genre}
            initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="overflow-hidden"
            style={{ border: `3px solid ${p.warna}`, boxShadow: `5px 5px 0 ${p.warna}`, background: p.bg }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: p.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-xl">{p.icon}</span>
              <span className="font-comic text-sm text-white">{p.genre}</span>
            </div>
            <div className="p-3 flex flex-wrap gap-1.5">
              {p.games.map(g => (
                <span key={g} className="font-bold text-[10px] px-2 py-0.5 bg-white text-[#0a0a0a]"
                  style={{ border: `2px solid ${p.warna}`, boxShadow: `1px 1px 0 ${p.warna}` }}>{g}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-dark p-6">
        <div className="font-comic text-xl text-white mb-3">🎮 FILOSOFI GAMER</div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: '🐲', teks: 'Dragon mati 100x = belajar 100 cara yang salah. Sama seperti debug code.' },
            { icon: '🗺️', teks: 'Dunia open world = internet. Jelajahi sendiri, temukan Easter egg tersembunyi!' },
            { icon: '⚡', teks: 'Level up butuh grind. Tidak ada shortcut — baik di game maupun di kehidupan nyata.' },
          ].map(f => (
            <div key={f.icon} className="text-center p-3 bg-white/10 border border-white/20">
              <div className="text-3xl mb-2">{f.icon}</div>
              <p className="text-xs text-white/70 font-bold leading-relaxed">{f.teks}</p>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 67: MINECRAFT & CREATIVE ----------------------------------------
function Ch67() {
  const builds = [
    { nama: 'Rumah Modern', material: 'Quartz + Glass', waktu: '3 Jam', icon: '🏠', warna: '#0891b2' },
    { nama: 'Istana Megah', material: 'Stone Brick + Marble', waktu: '2 Hari', icon: '🏰', warna: '#8b5cf6' },
    { nama: 'Kota Mini', material: 'Mixed Materials', waktu: '1 Minggu', icon: '🌆', warna: '#22c55e' },
    { nama: 'Redstone Computer', material: 'Redstone + Comparator', waktu: '1 Bulan', icon: '💻', warna: '#e63329' },
  ]
  return (
    <PanelBab id="ch67" chNum="CHAPTER 67" judul="MINECRAFT: DUNIA TANPA BATAS" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">
            🧱 Minecraft adalah coding pertama saya — membangun dunia piksel per piksel!
          </div>
          <div className="comic-panel-blue p-5 mb-4">
            <div className="font-comic text-lg text-[#0a0a0a] mb-2">🎯 KENAPA MINECRAFT?</div>
            <p className="text-sm text-[#0a0a0a]/80 font-bold leading-relaxed">
              Minecraft mengajarkan <span className="text-[#1a5cff]">computational thinking</span> jauh sebelum saya kenal coding.
              Redstone circuits = logika Boolean. Building = arsitektur sistem. Survival = manajemen resource.
            </p>
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-base text-[#0a0a0a] mb-2">🏗️ KREASI TERBAIK</div>
            <div className="space-y-2">
              {builds.map((b, i) => (
                <motion.div key={b.nama}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3">
                  <span className="text-xl flex-shrink-0">{b.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs text-[#0a0a0a]">{b.nama}</div>
                    <div className="text-[10px] text-[#0a0a0a]/50">{b.material}</div>
                  </div>
                  <span className="font-comic text-[10px] flex-shrink-0" style={{ color: b.warna }}>{b.waktu}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="comic-panel-dark p-5">
          <div className="font-comic text-xl text-white mb-4">🧠 REDSTONE LOGIC</div>
          <p className="text-sm text-white/70 font-bold leading-relaxed mb-4">
            Redstone di Minecraft adalah gerbang logika pertama saya: AND, OR, NOT gates — semua bisa dibuat dari batu merah!
            Ini yang membuat saya tertarik pada logika komputasi.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { gate: 'AND Gate', emoji: '⚡', teks: 'Dua input aktif = output aktif' },
              { gate: 'OR Gate', emoji: '🔀', teks: 'Salah satu aktif = output aktif' },
              { gate: 'NOT Gate', emoji: '🔄', teks: 'Input aktif = output mati' },
              { gate: 'XOR Gate', emoji: '🎯', teks: 'Hanya satu aktif = output aktif' },
            ].map(g => (
              <div key={g.gate} className="bg-white/10 border border-white/20 p-2">
                <div className="font-comic text-[10px] text-yellow-400">{g.emoji} {g.gate}</div>
                <div className="text-[9px] text-white/50 font-bold mt-0.5">{g.teks}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 68: OFFLINE GAMES ------------------------------------------------
function Ch68() {
  const slides = [
    { icon: '🎴', judul: 'Kartu Fisik', teks: 'Main kartu fisik Yugioh bareng teman — lebih seru dari digital. Shuffle deck, tahan nafas, taruh kartu di meja... momen epik yang tidak bisa diganti.', warna: '#f59e0b', bg: '#fffbeb', badge: 'NOSTALGIA' },
    { icon: '🎲', judul: 'Board Game', teks: 'Monopoly, Catur, Ular Tangga — board game klasik yang mengajarkan strategi jangka panjang dan kesabaran menunggu giliran.', warna: '#22c55e', bg: '#f0fdf4' },
    { icon: '🕹️', judul: 'Console Classic', teks: 'GBA, PSP, PS2 — generasi emas gaming. Harvest Moon, Naruto, DBZ... nostalgia yang membentuk karakter dan kecintaan pada cerita.', warna: '#8b5cf6', bg: '#f5f0ff', badge: 'LEGEND' },
    { icon: '📱', judul: 'Indie Mobile', teks: 'Alto\'s Odyssey, Monument Valley, Mini Metro — game indie yang fokus pada experience dan cerita, bukan grafis semata.', warna: '#0891b2', bg: '#ecfeff' },
  ]
  return (
    <PanelBab id="ch68" chNum="CHAPTER 68" judul="OFFLINE ADVENTURES — DUNIA TANPA INTERNET" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">
            🕹️ Offline gaming = fokus penuh tanpa distraksi. Pure gaming experience!
          </div>
          <SlideKomik slides={slides} />
        </div>
        <div className="comic-panel p-5">
          <div className="font-comic text-lg text-[#0a0a0a] mb-4">🏆 HALL OF FAME</div>
          <div className="space-y-3">
            {[
              { game: 'Harvest Moon', platform: 'GBA', kenangan: 'Tanam padi, jaga ternak — simfoni kehidupan sederhana', warna: '#22c55e' },
              { game: 'Naruto Ultimate Ninja', platform: 'PS2', kenangan: 'Semua jutsu dihapalkan. Rasengan = serangan andalan!', warna: '#f59e0b' },
              { game: 'Yu-Gi-Oh! Forbidden Memories', platform: 'PS1', kenangan: 'Grind kartu ratusan jam. Dedikasi yang tidak masuk akal tapi seru!', warna: '#8b5cf6' },
              { game: 'Dino Crisis', platform: 'PS1', kenangan: 'Horror pertama — lampu padam, bunyi dinosaurus... trauma baik!', warna: '#e63329' },
            ].map((h, i) => (
              <motion.div key={h.game}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 p-3"
                style={{ border: `2px solid ${h.warna}`, boxShadow: `3px 3px 0 ${h.warna}`, background: 'white' }}>
                <div className="font-comic text-lg flex-shrink-0" style={{ color: h.warna }}>{i + 1}</div>
                <div className="min-w-0">
                  <div className="font-bold text-sm text-[#0a0a0a]">{h.game} <span className="font-comic text-[10px] opacity-50">({h.platform})</span></div>
                  <div className="text-[10px] text-[#0a0a0a]/60 font-bold mt-0.5">{h.kenangan}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 69: GAME & CODING CONNECTION ------------------------------------
function Ch69() {
  const koneksi = [
    { game: 'Problem Solving dalam Game', koding: 'Problem Solving dalam Coding', icon: '🧩', warna: '#1a5cff' },
    { game: 'Farming resources perlahan', koding: 'Belajar skill bertahap', icon: '🌱', warna: '#22c55e' },
    { game: 'Debug kenapa karakter stuck', koding: 'Debug kenapa kode error', icon: '🔍', warna: '#f59e0b' },
    { game: 'Baca dokumentasi game wiki', koding: 'Baca dokumentasi library', icon: '📖', warna: '#8b5cf6' },
    { game: 'Optimize build karakter', koding: 'Optimize performa kode', icon: '⚡', warna: '#e63329' },
    { game: 'Alliance & multiplayer', koding: 'Teamwork & kolaborasi', icon: '🤝', warna: '#0891b2' },
  ]
  return (
    <PanelBab id="ch69" chNum="CHAPTER 69" judul="GAME = SEKOLAH CODING PERTAMAKU" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6">
        💡 Semua skill gaming ternyata melatih mindset developer!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {koneksi.map((k, i) => (
          <motion.div key={k.icon}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5, rotate: 1 }}
            className="p-4 relative overflow-hidden"
            style={{ border: `3px solid ${k.warna}`, boxShadow: `4px 4px 0 ${k.warna}`, background: 'white' }}>
            <div className="text-3xl mb-2">{k.icon}</div>
            <div className="font-bold text-xs text-[#0a0a0a]/50 mb-1">GAME:</div>
            <div className="font-bold text-xs text-[#0a0a0a] mb-2">{k.game}</div>
            <div className="h-px my-2" style={{ background: k.warna }} />
            <div className="font-bold text-xs text-[#0a0a0a]/50 mb-1">CODING:</div>
            <div className="font-bold text-xs" style={{ color: k.warna }}>{k.koding}</div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-dark p-6 text-center">
        <div className="font-comic text-2xl text-white mb-2">
          🎮 + 💻 = <span className="text-yellow-400">DEVELOPER TERBAIK</span>
        </div>
        <p className="text-sm text-white/70 font-bold max-w-xl mx-auto">
          Gamer yang jadi developer punya keunggulan unik: <span className="text-yellow-400">tidak takut gagal</span>, terbiasa mencoba ulang,
          dan selalu ingin <span className="text-yellow-400">naik level</span>. Setiap error adalah boss battle yang harus dikalahkan!
        </p>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 70: GAME WISHLIST & MASA DEPAN ----------------------------------
function Ch70() {
  const wishlist = [
    { nama: 'Elden Ring', icon: '⚔️', alasan: 'Open world dengan lore terdalam — tantangan boss yang bikin frustasi sekaligus puas', warna: '#f59e0b', status: 'WISHLIST' },
    { nama: 'Baldur\'s Gate 3', icon: '🎲', alasan: 'RPG terbaik dekade ini — pilihan moral yang benar-benar berpengaruh', warna: '#8b5cf6', status: 'WISHLIST' },
    { nama: 'Hollow Knight: Silksong', icon: '🦋', alasan: 'Sequel yang paling dinantikan — Metroidvania masterclass', warna: '#1a5cff', status: 'SOON™' },
    { nama: 'Pokemon Z-A', icon: '⚡', alasan: 'Kembali ke Lumiose City — nostalgia X/Y dalam grafis modern!', warna: '#22c55e', status: 'ANNOUNCED' },
    { nama: 'My Own Game', icon: '🎮', alasan: 'Suatu hari: buat game sendiri dengan engine pilihan. Developer yang juga game creator!', warna: '#e63329', status: 'DREAM' },
  ]
  return (
    <PanelBab id="ch70" chNum="CHAPTER 70" judul="WISHLIST & IMPIAN GAMER" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">
        🌟 Game impian yang belum sempat dimainkan — tapi masuk daftar wajib!
      </div>
      <div className="space-y-3">
        {wishlist.map((w, i) => (
          <motion.div key={w.nama}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 150 }}
            viewport={{ once: true }}
            whileHover={{ x: 6 }}
            className="flex items-center gap-4 p-4"
            style={{ border: `3px solid ${w.warna}`, boxShadow: `5px 5px 0 ${w.warna}`, background: 'white' }}>
            <span className="text-3xl flex-shrink-0">{w.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="font-comic text-lg text-[#0a0a0a] leading-tight">{w.nama}</div>
              <div className="text-xs font-bold text-[#0a0a0a]/60 mt-0.5 leading-relaxed">{w.alasan}</div>
            </div>
            <div className="font-comic text-[10px] text-white px-2 py-1 flex-shrink-0"
              style={{ background: w.warna, border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}>
              {w.status}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, rotate: -3 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
        viewport={{ once: true }}
        className="mt-8 p-6 text-center"
        style={{ background: 'white', border: '4px solid #0a0a0a', boxShadow: '7px 7px 0 #f59e0b' }}>
        <div className="font-comic text-2xl text-[#0a0a0a] mb-2">🎮 DEVELOPER + GAMER = SAYA</div>
        <p className="text-sm font-bold text-[#0a0a0a]/70">
          Game bukan sekadar hiburan — ini adalah <span className="text-[#f59e0b]">sumber inspirasi</span>,
          <span className="text-[#1a5cff]"> latihan logika</span>, dan <span className="text-[#22c55e]">pengisi semangat</span>
          saat coding terasa berat. Play hard, code harder! 🚀
        </p>
      </motion.div>
    </PanelBab>
  )
}

// --- EXPORT UTAMA ------------------------------------------------------------
export default function ChaptersGroup6() {
  return (
    <>
      <div className="comic-divider" />
      <Ch62 />
      <div className="comic-divider" />
      <Ch63 />
      <div className="comic-divider" />
      <Ch64 />
      <div className="comic-divider" />
      <Ch65 />
      <div className="comic-divider" />
      <Ch66 />
      <div className="comic-divider" />
      <Ch67 />
      <div className="comic-divider" />
      <Ch68 />
      <div className="comic-divider" />
      <Ch69 />
      <div className="comic-divider" />
      <Ch70 />
    </>
  )
}
