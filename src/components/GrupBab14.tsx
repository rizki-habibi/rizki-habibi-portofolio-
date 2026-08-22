'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

function PanelBab({ id, num, judul, warna, latarBelakang, gelap, children }: {
  id: string; num: string; judul: string; warna: string; latarBelakang: string; gelap?: boolean; children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden" style={{ background: gelap ? '#0a0a0a' : latarBelakang }}>
      {gelap ? <div className="halftone-yellow" /> : <div className="halftone-bg" />}
      <div className="max-w-6xl mx-auto relative z-10">
        <HeaderBab nomor={num} judul={judul} warna={gelap ? '#ffd700' : warna} gelap={gelap} />
        {children}
      </div>
    </section>
  )
}

function GridTiga({ items }: { items: { icon: string; judul: string; teks: string; warna: string; bg: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((butir, i) => (
        <motion.div key={butir.judul}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, type: 'spring' }}
          viewport={{ once: true, amount: 0.1 }}
          whileHover={{ y: -5 }}
          className="p-4"
          style={{ border: `3px solid ${butir.warna}`, boxShadow: `4px 4px 0 ${butir.warna}`, background: butir.bg }}>
          <div className="text-3xl mb-2">{butir.icon}</div>
          <div className="font-comic text-sm mb-1" style={{ color: butir.warna }}>{butir.judul}</div>
          <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{butir.teks}</p>
        </motion.div>
      ))}
    </div>
  )
}

// -- Ch141: SENI DIGITAL -------------------------------------------------------
function Ch141() {
  const karya = [
    { jenis: 'Generative Art', desc: 'Karya seni yang dibuat dengan algoritma -- setiap run menghasilkan output unik yang tidak pernah sama persis', tech: 'p5.js, Processing, TouchDesigner', icon: '🎨', warna: '#8b5cf6' },
    { jenis: 'Pixel Art', desc: 'Seni piksel yang lahir dari keterbatasan hardware lawas -- kini jadi estetika nostalgia yang sangat populer', tech: 'Aseprite, Pixaki, GraphicsGale', icon: '🖼️', warna: '#1a5cff' },
    { jenis: 'AI Art', desc: 'Midjourney, DALL-E, Stable Diffusion -- AI sebagai alat kreatif baru. Kontroversial tapi powerful!', tech: 'Midjourney, ComfyUI, Automatic1111', icon: '🤖', warna: '#e63329' },
    { jenis: 'Interactive Installation', desc: 'Seni yang merespons gerakan pengunjung menggunakan sensor, kamera, dan proyektor interaktif', tech: 'openFrameworks, Arduino, Max/MSP', icon: '✨', warna: '#22c55e' },
  ]
  return (
    <PanelBab id="ch141" num="141" judul="SENI DIGITAL -- KREATIVITAS TANPA BATAS" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">🎨 Code bukan hanya alat -- code bisa jadi medium ekspresi artistik yang paling unik!</div>
      <div className="space-y-4 mb-6">
        {karya.map((k, i) => (
          <motion.div key={k.jenis}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            style={{ border: `3px solid ${k.warna}`, boxShadow: `4px 4px 0 ${k.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: k.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-xl">{k.icon}</span>
              <span className="font-comic text-sm text-white">{k.jenis}</span>
            </div>
            <div className="p-3 grid sm:grid-cols-2 gap-2">
              <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{k.desc}</p>
              <div>
                <div className="text-[10px] font-bold text-[#0a0a0a]/40 mb-1">TOOLS</div>
                <div className="flex flex-wrap gap-1">
                  {k.tech.split(', ').map(t => (
                    <span key={t} className="font-bold text-[9px] px-1.5 py-0.5 text-white" style={{ background: k.warna }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch142: MUSIK & TEKNOLOGI --------------------------------------------------
function Ch142() {
  return (
    <PanelBab id="ch142" num="142" judul="MUSIK & TEKNOLOGI -- HARMONI DIGITAL" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🎵 Dari DAW sampai AI composer -- teknologi merevolusi cara musik dibuat dan dinikmati!
      </div>
      <GridTiga items={[
        { icon: '🎹', judul: 'DAW & Music Production', teks: 'FL Studio, Ableton, Logic Pro -- producer musik profesional bisa kerja dari kamar kos dengan laptop biasa', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🤖', judul: 'AI Music Generation', teks: 'Suno AI, Udio -- generate lagu lengkap dari teks deskripsi dalam hitungan detik. Era baru musik!', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🎧', judul: 'Spatial Audio', teks: 'Dolby Atmos dan Apple Spatial Audio -- musik yang terasa 3D. Developer bisa build pengalaman audio imersif', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🎙️', judul: 'Voice Cloning', teks: 'Eleven Labs dan ElevenVoices -- replikasi suara dengan AI. Disruptif untuk dubbing dan aksesibilitas', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🎵', judul: 'Music Recommendation', teks: 'Spotify Discover Weekly adalah salah satu ML sistem terbaik di dunia -- collaborative filtering yang genius', warna: '#e63329', bg: '#fef2f2' },
        { icon: '💻', judul: 'Live Coding Music', teks: 'SuperCollider, TidalCycles -- programmer membuat musik secara live dengan kode di depan penonton!', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
    </PanelBab>
  )
}

// -- Ch143: CONTENT CREATOR TECH ----------------------------------------------
function Ch143() {
  const stack = [
    { alat: 'Canva Pro', fungsi: 'Design thumbnail, grafis sosmed, dan presentasi cepat tanpa skill design profesional', icon: '🎨', warna: '#00C4CC' },
    { alat: 'CapCut', fungsi: 'Edit video cepat di HP maupun PC. Auto-caption, AI features, template viral', icon: '📱', warna: '#0a0a0a' },
    { alat: 'Notion', fungsi: 'Content calendar, research database, script writing, dan idea dump semua dalam satu tempat', icon: '📝', warna: '#1a1a1a' },
    { alat: 'OBS Studio', fungsi: 'Live streaming dan screen recording gratis. Standard industry untuk YouTuber dan streamer', icon: '🎬', warna: '#e63329' },
    { alat: 'Descript', fungsi: 'Edit video dengan mengedit teks transkrip -- revolusi editing podcast dan video interview', icon: '✂️', warna: '#8b5cf6' },
    { alat: 'Buffer/Later', fungsi: 'Jadwal posting otomatis ke semua platform sosmed dari satu dashboard. Konsistensi tanpa ribet!', icon: '📅', warna: '#1a5cff' },
  ]
  return (
    <PanelBab id="ch143" num="143" judul="CONTENT CREATOR TECH -- SENJATA KREATOR" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-6">💡 Developer yang jadi content creator punya superpower: bisa build tool sendiri yang orang lain harus bayar!</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {stack.map((s, i) => (
          <motion.div key={s.alat}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.07, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="p-3"
            style={{ border: `2px solid ${s.warna}`, boxShadow: `3px 3px 0 ${s.warna}`, background: 'white' }}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xl">{s.icon}</span>
              <span className="font-comic text-xs" style={{ color: s.warna }}>{s.alat}</span>
            </div>
            <p className="text-[10px] font-bold text-[#0a0a0a]/60 leading-snug">{s.fungsi}</p>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-dark p-5">
        <div className="font-comic text-xl text-white mb-3">💰 MONETISASI KONTEN TECH</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { cara: 'YouTube AdSense', detail: 'Passive income dari tutorial coding. 1000 views = sekitar Rp 30-50K' },
            { cara: 'Sponsorship', detail: 'Tool/platform tech sponsor konten developer. Rate premium untuk niche audience' },
            { cara: 'Digital Products', detail: 'Jual template, boilerplate code, course. Buat sekali, jual berkali-kali!' },
            { cara: 'Newsletter Tech', detail: 'Newsletter coding tips berbayar. Substack dengan 1000 subscriber = income signifikan' },
          ].map(m => (
            <div key={m.cara} className="p-3 bg-white/10 border border-white/20">
              <div className="font-comic text-xs text-yellow-400">{m.cara}</div>
              <p className="text-[10px] text-white/60 font-bold">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// -- Ch144: SOSIAL MEDIA & ALGORITMA ------------------------------------------
function Ch144() {
  return (
    <PanelBab id="ch144" num="144" judul="SOSIAL MEDIA -- MEMAHAMI ALGORITMANYA" warna="#0a66c2" latarBelakang="#e8f2ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        📊 Semua platform sosmed punya algoritma -- developer yang paham kode, bisa paham algoritmanya!
      </div>
      <GridTiga items={[
        { icon: '🎵', judul: 'TikTok Algorithm', teks: 'Engagement rate pertama 30 menit menentukan distribusi. Rewatch, share, dan completion rate > like', warna: '#0a0a0a', bg: '#f0f0eb' },
        { icon: '💼', judul: 'LinkedIn Algorithm', teks: 'Konten yang "dwell time"-nya tinggi diboost. Post panjang dengan insight asli > post pendek promosi', warna: '#0a66c2', bg: '#e8f2ff' },
        { icon: '📸', judul: 'Instagram Algorithm', teks: 'Close relationship + interest signal dominan. Stories dan Reel diboost lebih dari feed post biasa', warna: '#e1306c', bg: '#fff0f5' },
        { icon: '📺', judul: 'YouTube Algorithm', teks: 'Click-through rate + Watch time adalah raja. Thumbnail dan judul menarik, konten berkualitas adalah wajib', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🐦', judul: 'Twitter/X Algorithm', teks: 'Engagement cepat di jam pertama + bookmark dan reply lebih powerful dari like untuk distribusi', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🔍', judul: 'SEO = Social SEO', teks: 'Keyword di caption, hashtag relevan, dan alt text gambar membantu discoverability di semua platform', warna: '#22c55e', bg: '#f0fdf4' },
      ]} />
    </PanelBab>
  )
}

// -- Ch145: PODCAST & AUDIO TECH -----------------------------------------------
function Ch145() {
  return (
    <PanelBab id="ch145" num="145" judul="PODCAST & AUDIO -- KONTEN YANG DIDENGAR" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">🎙️ Podcast tech Indonesia sedang booming -- dan developer punya perspektif unik yang dibutuhkan pendengar!</div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="comic-panel p-4">
            <div className="font-comic text-base text-[#0a0a0a] mb-3">🎙️ SETUP PODCAST MINIMAL</div>
            {[
              { item: 'Mikrofon USB', rekomendasi: 'Blue Snowball iCE atau Rode NT-USB Mini', harga: 'Rp 400K-2JT' },
              { item: 'DAW (Digital Audio Workstation)', rekomendasi: 'Audacity (free) atau GarageBand (Mac)', harga: 'Gratis!' },
              { item: 'Hosting Platform', rekomendasi: 'Anchor (gratis), Buzzsprout, atau Spotify for Podcasters', harga: 'Gratis-berbayar' },
              { item: 'Editing AI', rekomendasi: 'Descript atau Adobe Podcast untuk remove filler words otomatis', harga: 'Free tier tersedia' },
            ].map(s => (
              <div key={s.item} className="flex items-start gap-2 mb-2.5">
                <div className="w-2 h-2 flex-shrink-0 mt-1.5 rounded-full" style={{ background: '#f59e0b' }} />
                <div>
                  <div className="font-bold text-xs text-[#0a0a0a]">{s.item}</div>
                  <div className="text-[10px] text-[#0a0a0a]/60 font-bold">{s.rekomendasi}</div>
                  <div className="font-comic text-[9px]" style={{ color: '#f59e0b' }}>{s.harga}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <GridTiga items={[
          { icon: '💡', judul: 'Tech Podcast Ideas', teks: '"Ngoding Santai" -- cerita developer Indonesia. Perspektif lokal yang unik dan segar!', warna: '#f59e0b', bg: '#fffbeb' },
          { icon: '🤖', judul: 'AI Transcript', teks: 'Whisper (OpenAI) auto-transcribe podcast jadi teks -- buat blog post gratis dari setiap episode!', warna: '#1a5cff', bg: '#e8f0ff' },
          { icon: '📊', judul: 'Analytics', teks: 'Spotify for Podcasters kasih data listeners, drop-off rate, dan geography -- optimize konten berbasis data', warna: '#22c55e', bg: '#f0fdf4' },
        ]} />
      </div>
    </PanelBab>
  )
}

// -- Ch146: FASHION TECH -------------------------------------------------------
function Ch146() {
  return (
    <PanelBab id="ch146" num="146" judul="FASHION TECH -- INDUSTRI YANG BERTRANSFORMASI" warna="#e1306c" latarBelakang="#fff0f5">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        👗 Fashion dan teknologi bertemu -- dari virtual try-on sampai sustainable fashion!
      </div>
      <GridTiga items={[
        { icon: '🥽', judul: 'Virtual Try-On', teks: 'AR yang memungkinkan coba baju, sepatu, atau aksesoris secara virtual via kamera HP sebelum beli', warna: '#e1306c', bg: '#fff0f5' },
        { icon: '🤖', judul: 'AI Stylist', teks: 'Personal stylist AI yang merekomendasikan outfit berdasar cuaca, agenda, dan preferensi gaya pribadi', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '♻️', judul: 'Sustainable Fashion', teks: 'Platform resale fashion (Carousell, ThriftedID) yang diperkuat AI untuk valuation dan authenticity check', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '⛓️', judul: 'Supply Chain Fashion', teks: 'Blockchain untuk transparansi dari bahan baku ke tangan konsumen -- counter greenwashing brand besar', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '📏', judul: 'Custom Sizing AI', teks: 'Scan tubuh dengan HP → dapat rekomendasi ukuran yang akurat → kurangi return rate 80%', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🎨', judul: 'AI Design', teks: 'AI generates fashion design berdasar tren, preferensi konsumen, dan sustainable materials yang tersedia', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
    </PanelBab>
  )
}

// -- Ch147: OLAHRAGA & SPORT TECH ---------------------------------------------
function Ch147() {
  return (
    <PanelBab id="ch147" num="147" judul="SPORT TECH -- TEKNOLOGI DI DUNIA OLAHRAGA" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">⚡ Data dan AI sudah mengubah cara tim olahraga berlatih, bermain, dan menang!</div>
      <GridTiga items={[
        { icon: '⚽', judul: 'Football Analytics', teks: 'GPS tracker setiap pemain, heatmap posisi, dan expected goals (xG) model -- Moneyball era sudah di sepak bola', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🏃', judul: 'Biomechanics AI', teks: 'Computer vision menganalisis gerakan atlet dan mengidentifikasi inefficiency atau risiko cedera', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🎮', judul: 'E-Sports Platform', teks: 'E-Sports Indonesia sedang booming. Platform turnamen, broadcasting, dan monetisasi perlu developer lokal!', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '⚖️', judul: 'Referee AI', teks: 'VAR di sepak bola adalah awal. AI hakim bulu tangkis, tinju, dan senam sudah dalam pengembangan', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '💪', judul: 'Personal Trainer AI', teks: 'Camera pose estimation + AI memberikan real-time feedback form latihan -- personal trainer digital gratis', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🏆', judul: 'Fantasy Sports', teks: 'Platform fantasy football, basketball, dll. -- gabungkan data analytics, gamification, dan komunitas', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
    </PanelBab>
  )
}

// -- Ch148: KULINER TECH -------------------------------------------------------
function Ch148() {
  return (
    <PanelBab id="ch148" num="148" judul="KULINER TECH -- INOVASI DI INDUSTRI MAKANAN" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🍜 Kuliner Indonesia = kekayaan terbesar yang belum sepenuhnya terdigitalisasi!
      </div>
      <GridTiga items={[
        { icon: '🛵', judul: 'Food Delivery Tech', teks: 'GoFood, GrabFood pakai ML untuk routing optimal, demand forecasting, dan surge pricing yang fair', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🤖', judul: 'Kitchen Automation', teks: 'Robot sous chef yang presisi untuk restoran cepat saji -- konsistensi rasa dan efisiensi biaya produksi', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🌱', judul: 'Food Waste AI', teks: 'Prediksi demand makanan restoran untuk minimalisir pembuangan bahan baku. Problem besar di Indonesia!', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🔬', judul: 'Food Safety Sensor', teks: 'Sensor IoT yang deteksi kontaminasi bakteri dalam makanan sebelum dipasarkan -- save nyawa!', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🌿', judul: 'Plant-Based Tech', teks: 'Food science + ML untuk ciptakan produk plant-based yang rasanya mirip daging tapi lebih sustainable', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '📊', judul: 'Menu Analytics', teks: 'Data analitik menu restoran: item mana paling profitable, paling disukai, dan paling sering dikembalikan', warna: '#f59e0b', bg: '#fffbeb' },
      ]} />
    </PanelBab>
  )
}

// -- Ch149: TRANSPORTASI & LOGISTIK --------------------------------------------
function Ch149() {
  return (
    <PanelBab id="ch149" num="149" judul="TRANSPORTASI -- MOBILITAS MASA DEPAN" warna="#0891b2" latarBelakang="#ecfeff">
      <div className="speech-bubble inline-block text-sm mb-6">🚀 Dari ojek online sampai kereta cepat -- transportasi Indonesia sedang berevolusi cepat!</div>
      <GridTiga items={[
        { icon: '🚗', judul: 'Ride-Hailing AI', teks: 'Gojek/Grab pakai ML untuk matching driver-rider optimal, ETA prediction, dan dynamic pricing', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🚌', judul: 'Public Transport App', teks: 'Real-time bus tracking, jadwal KRL, dan integrasi multi-moda -- TransJakarta sudah mulai, butuh lebih!', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '📦', judul: 'Last-Mile Delivery', teks: 'Rute optimal untuk kurir dengan 50+ paket -- routing algorithm yang efisien menghemat waktu dan BBM', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '⚡', judul: 'EV Charging Network', teks: 'App cari SPKLU terdekat, booking slot, dan bayar terintegrasi -- infrastruktur EV Indonesia butuh developer!', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🚢', judul: 'Maritime Tech', teks: 'Indonesia negara kepulauan -- sistem navigasi kapal cerdas dan port management digital sangat krusial', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '✈️', judul: 'Aviation Analytics', teks: 'Predictive maintenance pesawat berbasis sensor dan ML -- cegah kerusakan sebelum terjadi mid-flight', warna: '#e63329', bg: '#fef2f2' },
      ]} />
    </PanelBab>
  )
}

// -- Ch150: MASA DEPAN PEKERJAAN -----------------------------------------------
function Ch150() {
  return (
    <PanelBab id="ch150" num="150" judul="MASA DEPAN PEKERJAAN -- PEKERJAAN 2030" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        🔮 Banyak pekerjaan 2030 belum ada namanya sekarang -- developer adalah profesi paling tahan masa depan!
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { pekerjaan: 'AI Trainer & Prompt Engineer', desc: 'Melatih dan mengoptimalkan model AI untuk use case spesifik. Skill baru yang sangat dicari saat ini', warna: '#8b5cf6', ada: true },
          { pekerjaan: 'Metaverse Developer', desc: 'Builder dunia virtual 3D yang bisa dikunjungi, bekerja, dan bertransaksi di dalamnya', warna: '#1a5cff', ada: false },
          { pekerjaan: 'Quantum Programmer', desc: 'Developer yang bisa menulis algoritma untuk quantum computer -- sangat langka, sangat mahal!', warna: '#e63329', ada: false },
          { pekerjaan: 'Neuro Interface Developer', desc: 'Membangun software untuk BCI -- antarmuka antara otak manusia dan komputer', warna: '#22c55e', ada: false },
          { pekerjaan: 'Space Software Engineer', desc: 'Developer untuk sistem navigasi, life support, dan komunikasi misi luar angkasa komersial', warna: '#f59e0b', ada: false },
          { pekerjaan: 'Digital Ethics Officer', desc: 'Memastikan produk digital adil, transparan, dan tidak merugikan kelompok yang rentan', warna: '#0891b2', ada: true },
        ].map((p, i) => (
          <motion.div key={p.pekerjaan}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="flex gap-3 p-3"
            style={{ border: `2px solid ${p.warna}`, boxShadow: `3px 3px 0 ${p.warna}`, background: '#111' }}>
            <div className="w-8 h-8 flex items-center justify-center font-comic text-xs text-white flex-shrink-0"
              style={{ background: p.warna }}>
              {p.ada ? '✅' : '🔮'}
            </div>
            <div>
              <div className="font-comic text-xs" style={{ color: p.warna }}>{p.pekerjaan}</div>
              <p className="text-[10px] text-white/60 font-bold leading-snug mt-0.5">{p.desc}</p>
              <div className="font-comic text-[8px] mt-1" style={{ color: p.ada ? '#22c55e' : '#ffd700' }}>
                {p.ada ? 'SUDAH ADA SEKARANG' : 'AKAN ADA 2030+'}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="p-5 text-center"
        style={{ border: '3px solid #ffd700', boxShadow: '5px 5px 0 #ffd700', background: '#111', borderRadius: 12 }}>
        <div className="font-comic text-xl text-yellow-400 mb-2">🚀 SATU SKILL YANG PASTI RELEVAN</div>
        <p className="text-sm font-bold text-white/70">
          Di tengah semua perubahan ini, satu skill yang tidak akan pernah usang:
          <span className="text-yellow-400"> kemampuan belajar hal baru dengan cepat.</span>
          Developer yang bisa adaptasi adalah developer yang tidak perlu khawatir dengan masa depan.
        </p>
      </motion.div>
    </PanelBab>
  )
}

export default function ChaptersGroup14() {
  return (
    <>
      <div className="comic-divider" />
      <Ch141 /><div className="comic-divider" />
      <Ch142 /><div className="comic-divider" />
      <Ch143 /><div className="comic-divider" />
      <Ch144 /><div className="comic-divider" />
      <Ch145 /><div className="comic-divider" />
      <Ch146 /><div className="comic-divider" />
      <Ch147 /><div className="comic-divider" />
      <Ch148 /><div className="comic-divider" />
      <Ch149 /><div className="comic-divider" />
      <Ch150 />
    </>
  )
}
