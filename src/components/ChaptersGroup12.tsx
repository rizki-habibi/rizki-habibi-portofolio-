'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChapterHeader from '@/components/ChapterHeader'

function CP({ id, num, title, color, bg, dark, children }: {
  id: string; num: string; title: string; color: string; bg: string; dark?: boolean; children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden" style={{ background: dark ? '#0a0a0a' : bg }}>
      {dark ? <div className="halftone-yellow" /> : <div className="halftone-bg" />}
      <div className="max-w-6xl mx-auto relative z-10">
        <ChapterHeader nomor={num} judul={title} warna={dark ? '#ffd700' : color} dark={dark} />
        {children}
      </div>
    </section>
  )
}

function Grid({ items, cols = 3 }: {
  items: { icon: string; judul: string; teks: string; warna: string; bg: string; badge?: string }[]
  cols?: 2 | 3 | 4
}) {
  const cls = cols === 2 ? 'grid sm:grid-cols-2 gap-4' : cols === 4 ? 'grid sm:grid-cols-2 lg:grid-cols-4 gap-3' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4'
  return (
    <div className={cls}>
      {items.map((it, i) => (
        <motion.div key={it.judul}
          initial={{ opacity: 0, y: 22, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: i * 0.07, type: 'spring', stiffness: 140 }}
          viewport={{ once: false, amount: 0.1 }}
          whileHover={{ y: -5 }}
          className="p-4 relative overflow-hidden"
          style={{ border: `3px solid ${it.warna}`, boxShadow: `4px 4px 0 ${it.warna}`, background: it.bg }}>
          {it.badge && (
            <div className="absolute top-2 right-2 font-comic text-[9px] text-white px-1.5 py-0.5"
              style={{ background: it.warna, border: '1px solid #0a0a0a' }}>{it.badge}</div>
          )}
          <div className="text-3xl mb-2">{it.icon}</div>
          <div className="font-comic text-sm mb-1" style={{ color: it.warna }}>{it.judul}</div>
          <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{it.teks}</p>
        </motion.div>
      ))}
    </div>
  )
}

// ── Ch121: SMART HOME ─────────────────────────────────────────────────────────
function Ch121() {
  return (
    <CP id="ch121" num="121" title="SMART HOME — RUMAH MASA DEPAN" color="#0891b2" bg="#ecfeff">
      <div className="speech-bubble inline-block text-sm mb-6">🏠 Rumah yang &ldquo;hidup&rdquo; dan merespons kebutuhan penghuninya!</div>
      <Grid items={[
        { icon: '💡', judul: 'Smart Lighting', teks: 'Lampu otomatis menyala/mati berdasarkan sensor gerak dan jadwal. Hemat listrik 40%!', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🌡️', judul: 'Climate Control', teks: 'AC dan kipas otomatis menyesuaikan suhu ideal berdasarkan data sensor dan preferensi penghuni', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '🔐', judul: 'Smart Security', teks: 'CCTV AI, kunci pintu digital, dan notifikasi real-time ke HP saat ada aktivitas mencurigakan', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🌱', judul: 'Smart Garden', teks: 'Penyiraman tanaman otomatis berdasarkan sensor kelembaban tanah. Cocok untuk yang sering lupa!', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '⚡', judul: 'Energy Monitor', teks: 'Dashboard real-time konsumsi listrik per perangkat. Identifikasi pemborosan dan hemat tagihan!', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🗣️', judul: 'Voice Assistant', teks: 'Kontrol semua perangkat dengan suara. Berbasis open-source agar privasi tetap terjaga', warna: '#1a5cff', bg: '#e8f0ff' },
      ]} />
      <div className="mt-6 comic-panel-dark p-5">
        <div className="font-comic text-xl text-white mb-3">🔧 STACK TEKNOLOGI SMART HOME DIY</div>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { layer: 'Hardware', tech: 'ESP32 + Raspberry Pi Zero W', icon: '🔌' },
            { layer: 'Middleware', tech: 'MQTT Broker + Node-RED', icon: '📡' },
            { layer: 'Dashboard', tech: 'Home Assistant (Open Source)', icon: '📊' },
          ].map(t => (
            <div key={t.layer} className="text-center p-3 bg-white/10 border border-white/20">
              <div className="text-2xl mb-1">{t.icon}</div>
              <div className="font-comic text-xs text-yellow-400">{t.layer}</div>
              <div className="text-[10px] text-white/60 font-bold">{t.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </CP>
  )
}

// ── Ch122: ROBOTIK & ARDUINO ──────────────────────────────────────────────────
function Ch122() {
  const proyek = [
    { nama: 'Line Following Robot', desc: 'Robot mengikuti garis hitam di lantai menggunakan sensor IR. Proyek belajar PID controller dasar', icon: '🤖', warna: '#1a5cff' },
    { nama: 'Arm Robot 3-DOF', desc: 'Lengan robot 3 derajat kebebasan dari bahan bekas servo motor dan kardus tebal', icon: '🦾', warna: '#22c55e' },
    { nama: 'Autonomous Car Mini', desc: 'Mobil RC yang bisa menghindari rintangan otomatis dengan sensor ultrasonik HC-SR04', icon: '🚗', warna: '#f59e0b' },
    { nama: 'Drone DIY Frame', desc: 'Merakit frame drone dari pipa PVC, motor brushless, dan ESC bekas. Belajar aerodinamika!', icon: '🚁', warna: '#e63329' },
  ]
  return (
    <CP id="ch122" num="122" title="ROBOTIK — MEMBUAT YANG TIDAK MUNGKIN" color="#1a5cff" bg="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🤖 Robot dari bahan bekas dengan kode sederhana — inovasi tidak butuh anggaran besar!
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {proyek.map((p, i) => (
          <motion.div key={p.nama}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${p.warna}`, boxShadow: `5px 5px 0 ${p.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: p.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-xl">{p.icon}</span>
              <span className="font-comic text-sm text-white">{p.nama}</span>
            </div>
            <p className="p-3 text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <Grid items={[
        { icon: '🛠️', judul: 'Arduino Uno/Nano', teks: 'Mikrokontroler entry-level terbaik untuk belajar robotik. Library lengkap, komunitas besar', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '⚡', judul: 'Motor Driver L298N', teks: 'Kontrol 2 motor DC sekaligus. Komponen murah yang jadi fondasi banyak robot sederhana', warna: '#e63329', bg: '#fef2f2' },
        { icon: '📡', judul: 'HC-SR04 Ultrasonic', teks: 'Sensor jarak murah meriah. Akurasi cukup untuk obstacle avoidance robot pemula', warna: '#22c55e', bg: '#f0fdf4' },
      ]} />
    </CP>
  )
}

// ── Ch123: AR & VR ────────────────────────────────────────────────────────────
function Ch123() {
  return (
    <CP id="ch123" num="123" title="AR & VR — DUNIA YANG DIPERLUAS" color="#8b5cf6" bg="#f5f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">🥽 Batas antara dunia nyata dan digital makin tipis — dan itu menarik!</div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Grid items={[
          { icon: '📱', judul: 'WebAR', teks: 'Augmented Reality langsung di browser tanpa install app. Pakai A-Frame.js atau AR.js', warna: '#8b5cf6', bg: '#f5f0ff' },
          { icon: '🥽', judul: 'WebVR/WebXR', teks: 'Virtual Reality di browser dengan Three.js dan WebGL. Tidak perlu headset mahal untuk mulai belajar!', warna: '#1a5cff', bg: '#e8f0ff' },
          { icon: '🏫', judul: 'AR Edukasi', teks: 'Buku teks dengan AR overlay — bayangkan buku sains yang menampilkan 3D model molekul!', warna: '#22c55e', bg: '#f0fdf4', badge: 'KVT.KOM' },
          { icon: '🛍️', judul: 'AR Commerce', teks: 'Coba produk sebelum beli — furniture di ruanganmu, kacamata di wajahmu, semua via kamera HP', warna: '#f59e0b', bg: '#fffbeb' },
          { icon: '🏗️', judul: 'AR Konstruksi', teks: 'Overlay blueprint di lokasi konstruksi nyata. Arsitek dan developer bisa kolaborasi real-time', warna: '#e63329', bg: '#fef2f2' },
          { icon: '🎮', judul: 'VR Gaming', teks: 'Game VR lokal Indonesia masih sangat jarang — peluang besar untuk developer yang berani masuk duluan', warna: '#0891b2', bg: '#ecfeff' },
        ]} />
        <div className="comic-panel-dark p-6">
          <div className="font-comic text-xl text-white mb-4">🚀 VISI AR DI KVT.KOM</div>
          <p className="text-sm text-white/70 font-bold leading-relaxed mb-4">
            Bayangkan belajar coding di KVT.kom di mana kamu bisa melihat visualisasi 3D dari
            algoritma, data structure, dan flow chart langsung di depanmu dengan AR.
          </p>
          <div className="space-y-3">
            {[
              { fitur: 'AR Code Visualizer', desc: 'Lihat alur eksekusi kode dalam 3D ruang nyata' },
              { fitur: 'Virtual Lab', desc: 'Eksperimen hardware IoT di lab virtual sebelum beli komponen nyata' },
              { fitur: 'Holographic Mentor', desc: 'Mentor hadir secara holografik di ruanganmu — future of remote learning!' },
            ].map(f => (
              <div key={f.fitur} className="p-2 bg-white/10 border border-white/20">
                <div className="font-comic text-xs text-yellow-400">{f.fitur}</div>
                <p className="text-[10px] text-white/60 font-bold">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CP>
  )
}

// ── Ch124: QUANTUM COMPUTING ──────────────────────────────────────────────────
function Ch124() {
  return (
    <CP id="ch124" num="124" title="QUANTUM COMPUTING — BATAS KOMPUTASI BARU" color="#e63329" bg="#fef2f2">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ⚛️ Komputer klasik: bit 0 atau 1. Komputer kuantum: qubit bisa 0, 1, atau keduanya sekaligus!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          {[
            { konsep: 'Superposisi', desc: 'Qubit bisa berada di state 0 dan 1 secara bersamaan — seperti koin yang berputar, belum jatuh ke sisi manapun', icon: '🌀', warna: '#8b5cf6' },
            { konsep: 'Entanglement', desc: 'Dua qubit yang saling terhubung — ubah satu, yang lain langsung terpengaruh meski terpisah jarak tak terbatas', icon: '🔗', warna: '#1a5cff' },
            { konsep: 'Quantum Speedup', desc: 'Algoritma Shor bisa memfaktorkan bilangan besar dalam menit — yang butuh ribuan tahun untuk komputer klasik', icon: '⚡', warna: '#e63329' },
            { konsep: 'Quantum Cryptography', desc: 'Enkripsi berbasis hukum fisika kuantum yang secara teoritis tidak bisa dibobol oleh siapapun', icon: '🔐', warna: '#22c55e' },
          ].map((k, i) => (
            <motion.div key={k.konsep}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className="flex gap-3 p-3"
              style={{ border: `2px solid ${k.warna}`, boxShadow: `3px 3px 0 ${k.warna}`, background: 'white' }}>
              <div className="w-9 h-9 flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: k.warna, border: '1.5px solid #0a0a0a' }}>{k.icon}</div>
              <div>
                <div className="font-comic text-sm" style={{ color: k.warna }}>{k.konsep}</div>
                <p className="text-xs font-bold text-[#0a0a0a]/60 leading-snug">{k.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="comic-panel-dark p-5">
          <div className="font-comic text-xl text-white mb-3">🌐 DAMPAK KE DEVELOPER</div>
          <div className="space-y-3">
            {[
              { dampak: 'Post-Quantum Cryptography', ket: 'Semua enkripsi RSA/ECC yang ada sekarang bisa dibobol komputer kuantum — migrasi ke PQC sudah dimulai', warna: '#e63329' },
              { dampak: 'Drug Discovery', ket: 'Simulasi molekul kuantum untuk temukan obat baru jauh lebih cepat dari superkomputer terbaik', warna: '#22c55e' },
              { dampak: 'ML Optimization', ket: 'Quantum machine learning bisa mempercepat training model AI yang sekarang butuh minggu', warna: '#1a5cff' },
              { dampak: 'Quantum Internet', ket: 'Jaringan kuantum dengan keamanan absolut — tidak ada eavesdropping yang mungkin secara fisika', warna: '#8b5cf6' },
            ].map(d => (
              <div key={d.dampak} className="p-2 bg-white/10 border border-white/20">
                <div className="font-comic text-xs" style={{ color: d.warna }}>{d.dampak}</div>
                <p className="text-[10px] text-white/60 font-bold leading-snug">{d.ket}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CP>
  )
}

// ── Ch125: AUTONOMOUS VEHICLES ────────────────────────────────────────────────
function Ch125() {
  return (
    <CP id="ch125" num="125" title="KENDARAAN OTONOM — MASA DEPAN TRANSPORTASI" color="#0891b2" bg="#ecfeff">
      <div className="speech-bubble inline-block text-sm mb-6">🚗 Mobil tanpa pengemudi bukan fiksi sains lagi — ini sedang dibangun sekarang!</div>
      <Grid items={[
        { icon: '👁️', judul: 'Computer Vision', teks: 'Kamera + AI mengenali rambu, pejalan kaki, dan kendaraan lain secara real-time dengan akurasi >99%', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '📡', judul: 'LiDAR Mapping', teks: 'Sensor laser membuat peta 3D lingkungan sekitar dengan presisi milimeter untuk navigasi aman', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🧠', judul: 'Decision AI', teks: 'Neural network memproses semua input sensor dan mengambil keputusan mengemudi dalam milisekon', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🛰️', judul: 'V2X Communication', teks: 'Kendaraan berkomunikasi dengan kendaraan lain dan infrastruktur jalan untuk koordinasi lalu lintas', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🔐', judul: 'Cybersecurity', teks: 'Kendaraan terhubung = target hacker. Keamanan siber jadi komponen kritis, bukan opsional', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🇮🇩', judul: 'Konteks Indonesia', teks: 'Kondisi jalan Indonesia unik — butuh AI yang ditraining dengan data lokal: becak, ojek, pasar tumpah!', warna: '#0891b2', bg: '#ecfeff', badge: 'LOKAL' },
      ]} />
    </CP>
  )
}

// ── Ch126: BIOINFORMATIKA ─────────────────────────────────────────────────────
function Ch126() {
  return (
    <CP id="ch126" num="126" title="BIOINFORMATIKA — KODE DNA KEHIDUPAN" color="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🧬 DNA adalah kode biner tertua di alam — dan programmer bisa membantu menguraikannya!
      </div>
      <Grid items={[
        { icon: '🧬', judul: 'Genome Sequencing', teks: 'Algoritma untuk mengurai urutan DNA manusia — 3 miliar pasang basa yang berisi rahasia kehidupan', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '💊', judul: 'Drug Discovery AI', teks: 'ML memprediksi interaksi molekul obat dengan protein target tubuh — mempercepat penemuan obat 10x', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🔬', judul: 'Protein Folding', teks: 'AlphaFold DeepMind memecahkan masalah 50 tahun dalam biologi — protein structure prediction', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🦠', judul: 'Epidemiology Modeling', teks: 'Model matematika dan simulasi penyebaran penyakit — sangat kritis di era post-pandemi', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🌾', judul: 'Agritech Genomics', teks: 'Modifikasi genetik tanaman untuk tahan hama, kekeringan, dan hasil panen lebih tinggi', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🤝', judul: 'Peluang Developer', teks: 'Indonesia butuh developer bioinformatika lokal untuk penelitian tropis dan penyakit endemik nasional', warna: '#0891b2', bg: '#ecfeff', badge: 'PELUANG' },
      ]} />
    </CP>
  )
}

// ── Ch127: ENERGI TERBARUKAN & TECH ───────────────────────────────────────────
function Ch127() {
  return (
    <CP id="ch127" num="127" title="ENERGI HIJAU — TEKNOLOGI RAMAH BUMI" color="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">☀️ Developer bisa berkontribusi pada masa depan energi bersih lewat software!</div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Grid items={[
          { icon: '☀️', judul: 'Solar Smart Grid', teks: 'Software manajemen panel surya yang memprediksi produksi dan distribusi energi secara optimal', warna: '#f59e0b', bg: '#fffbeb' },
          { icon: '🌊', judul: 'Hydro Monitoring', teks: 'IoT monitoring bendungan dan PLTA kecil untuk maksimalkan efisiensi produksi listrik', warna: '#0891b2', bg: '#ecfeff' },
          { icon: '🔋', judul: 'Battery Management', teks: 'BMS cerdas yang memaksimalkan umur baterai mobil listrik dan penyimpanan energi surya', warna: '#22c55e', bg: '#f0fdf4' },
          { icon: '📊', judul: 'Carbon Footprint', teks: 'Platform kalkulasi dan tracking emisi karbon untuk perusahaan dan individu — compliance ESG', warna: '#1a5cff', bg: '#e8f0ff' },
        ]} />
        <div className="comic-panel-dark p-5">
          <div className="font-comic text-xl text-white mb-3">🌍 DEVELOPER & PERUBAHAN IKLIM</div>
          <p className="text-sm text-white/70 font-bold leading-relaxed mb-4">
            Setiap server yang menjalankan kode kita mengonsumsi listrik. Developer punya tanggung jawab
            untuk menulis <span className="text-yellow-400">efficient code</span> dan memilih
            <span className="text-yellow-400"> green hosting</span>.
          </p>
          <div className="space-y-2">
            {[
              'Pilih cloud provider yang pakai 100% renewable energy',
              'Optimasi query database → kurangi CPU cycle → hemat energi',
              'Lazy loading dan code splitting → kurangi data transfer',
              'Dark mode default → OLED display hemat 30% baterai',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-white/60 font-bold">
                <span className="text-green-400 flex-shrink-0">🌱</span> {tip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </CP>
  )
}

// ── Ch128: FINTECH INOVATIF ───────────────────────────────────────────────────
function Ch128() {
  const inovasi = [
    { nama: 'Buy Now Pay Later', tech: 'AI Credit Scoring', dampak: 'Akses kredit untuk yang unbankable', icon: '💳', warna: '#1a5cff' },
    { nama: 'P2P Lending', tech: 'Risk Algorithm', dampak: 'Modal UMKM tanpa bank konvensional', icon: '🤝', warna: '#22c55e' },
    { nama: 'Robo-Advisor', tech: 'ML Portfolio', dampak: 'Investasi otomatis terjangkau semua orang', icon: '🤖', warna: '#8b5cf6' },
    { nama: 'InsurTech', tech: 'IoT + Telematics', dampak: 'Premi asuransi dinamis berdasar perilaku', icon: '🛡️', warna: '#f59e0b' },
    { nama: 'Remittance Digital', tech: 'Blockchain/Stablecoin', dampak: 'Kirim uang ke luar negeri tanpa biaya besar', icon: '🌐', warna: '#0891b2' },
    { nama: 'QRIS Ecosystem', tech: 'Open Banking API', dampak: 'Satu QR untuk semua pembayaran Indonesia', icon: '📱', warna: '#e63329', },
  ]
  return (
    <CP id="ch128" num="128" title="FINTECH — REVOLUSI KEUANGAN DIGITAL" color="#1a5cff" bg="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        💰 Fintech bukan sekadar bayar-bayar — ini demokratisasi akses keuangan untuk semua!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {inovasi.map((inn, i) => (
          <motion.div key={inn.nama}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${inn.warna}`, boxShadow: `4px 4px 0 ${inn.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-3 py-2" style={{ background: inn.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-lg">{inn.icon}</span>
              <span className="font-comic text-xs text-white">{inn.nama}</span>
            </div>
            <div className="p-3">
              <div className="text-[10px] font-bold text-[#0a0a0a]/40 mb-0.5">TEKNOLOGI</div>
              <div className="font-bold text-xs text-[#0a0a0a] mb-1">{inn.tech}</div>
              <div className="text-[10px] font-bold mb-0.5" style={{ color: inn.warna }}>DAMPAK</div>
              <div className="text-xs font-bold text-[#0a0a0a]/60">{inn.dampak}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </CP>
  )
}

// ── Ch129: SPACE TECH ─────────────────────────────────────────────────────────
function Ch129() {
  return (
    <CP id="ch129" num="129" title="SPACE TECH — KODE YANG MENJANGKAU LUAR ANGKASA" color="#8b5cf6" bg="#f5f0ff" dark>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        🚀 Kode yang kamu tulis hari ini mungkin mengendalikan satelit besok!
      </div>
      <Grid items={[
        { icon: '🛰️', judul: 'Satellite Software', teks: 'Ribuan satelit LEO (SpaceX Starlink, dll) semuanya dikendalikan oleh software — buka internet ke pelosok bumi', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🌍', judul: 'Earth Observation', teks: 'Satellite imagery untuk monitor deforestasi, bencana alam, dan perubahan cuaca dari luar angkasa', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '📡', judul: 'GPS & Navigation', teks: 'Semua aplikasi maps bergantung pada GPS — infrastruktur luar angkasa yang sudah jadi utilitas sehari-hari', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🔭', judul: 'Space Telescope AI', teks: 'AI menganalisis terabytes data teleskop James Webb untuk temukan exoplanet dan galaksi baru', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🏗️', judul: 'Space Station Software', teks: 'ISS menjalankan software campuran Linux dan Windows. NASA open-source banyak software mereka!', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '🇮🇩', judul: 'LAPAN Indonesia', teks: 'Indonesia punya LAPAN dengan satelit LAPAN-A2/A3. Developer lokal bisa berkontribusi di sini!', warna: '#e63329', bg: '#fef2f2', badge: 'LOKAL' },
      ]} />
    </CP>
  )
}

// ── Ch130: NEUROTECH & BCI ────────────────────────────────────────────────────
function Ch130() {
  return (
    <CP id="ch130" num="130" title="NEUROTECH — INTERFACE OTAK KOMPUTER" color="#e63329" bg="#fef2f2">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🧠 BCI (Brain-Computer Interface) bukan fiksi ilmiah — Neuralink sudah di manusia sungguhan!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          {[
            { app: 'Paralysis Recovery', desc: 'BCI memungkinkan penderita lumpuh menggerakkan anggota tubuh prostetik hanya dengan pikiran', icon: '🦾', warna: '#22c55e' },
            { app: 'Communication Aid', desc: 'ALS patients dan locked-in syndrome bisa berkomunikasi via sinyal otak yang diterjemahkan ke teks', icon: '💬', warna: '#1a5cff' },
            { app: 'Neural Gaming', desc: 'Game yang dikontrol langsung oleh pikiran — tanpa controller, tanpa keyboard, pure thought control', icon: '🎮', warna: '#8b5cf6' },
            { app: 'Memory Enhancement', desc: 'Hippocampal prosthesis yang memperkuat memori jangka pendek — awal dari memory upload?', icon: '🧬', warna: '#f59e0b' },
            { app: 'Emotion Detection', desc: 'EEG ringan yang bisa mendeteksi stress, focus, dan mood untuk personalisasi pengalaman digital', icon: '😊', warna: '#e63329' },
          ].map((a, i) => (
            <motion.div key={a.app}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.09 }}
              viewport={{ once: false }}
              className="flex gap-3 p-3"
              style={{ border: `2px solid ${a.warna}`, boxShadow: `3px 3px 0 ${a.warna}`, background: 'white' }}>
              <span className="text-2xl flex-shrink-0">{a.icon}</span>
              <div>
                <div className="font-comic text-sm" style={{ color: a.warna }}>{a.app}</div>
                <p className="text-xs font-bold text-[#0a0a0a]/60 leading-snug">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="comic-panel-dark p-5">
          <div className="font-comic text-xl text-white mb-3">⚖️ ETIKA NEUROTECH</div>
          <p className="text-sm text-white/70 font-bold leading-relaxed mb-4">
            Dengan kekuatan besar datang tanggung jawab besar. Akses ke data otak manusia membutuhkan
            regulasi dan etika yang sangat ketat.
          </p>
          <div className="space-y-2">
            {[
              { isu: 'Mental Privacy', desc: 'Siapa yang punya hak atas data pikiran kita?' },
              { isu: 'Cognitive Liberty', desc: 'Hak untuk tidak dimodifikasi tanpa persetujuan' },
              { isu: 'Digital Divide', desc: 'BCI mahal = kesenjangan kognitif antar kelas sosial' },
              { isu: 'Security', desc: 'BCI yang bisa di-hack = akses langsung ke pikiran manusia' },
            ].map(e => (
              <div key={e.isu} className="p-2 bg-white/10 border border-white/20">
                <div className="font-comic text-xs text-red-400">{e.isu}</div>
                <p className="text-[10px] text-white/60 font-bold">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CP>
  )
}

export default function ChaptersGroup12() {
  return (
    <>
      <div className="comic-divider" />
      <Ch121 /><div className="comic-divider" />
      <Ch122 /><div className="comic-divider" />
      <Ch123 /><div className="comic-divider" />
      <Ch124 /><div className="comic-divider" />
      <Ch125 /><div className="comic-divider" />
      <Ch126 /><div className="comic-divider" />
      <Ch127 /><div className="comic-divider" />
      <Ch128 /><div className="comic-divider" />
      <Ch129 /><div className="comic-divider" />
      <Ch130 />
    </>
  )
}
