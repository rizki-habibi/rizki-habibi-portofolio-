'use client'

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

// -- Ch131: WIRAUSAHA SOSIAL ---------------------------------------------------
function Ch131() {
  const model = [
    { nama: 'Social Enterprise', desc: 'Bisnis yang mengutamakan dampak sosial tapi tetap profitable -- tidak sekadar charity', icon: '🌱', warna: '#22c55e' },
    { nama: 'B-Corp Certified', desc: 'Perusahaan yang tersertifikasi memenuhi standar sosial dan lingkungan yang ketat secara hukum', icon: '⭐', warna: '#1a5cff' },
    { nama: 'Impact Investing', desc: 'Investasi yang mengukur return keuangan sekaligus dampak sosial -- ESG investing sedang booming!', icon: '📈', warna: '#f59e0b' },
    { nama: 'Cooperative Digital', desc: 'Koperasi berbasis teknologi -- anggota adalah pemilik dan pengguna sekaligus. Lebih demokratis!', icon: '🤝', warna: '#8b5cf6' },
  ]
  return (
    <PanelBab id="ch131" num="131" judul="WIRAUSAHA SOSIAL -- BISNIS YANG BERDAMPAK" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">💡 Profit dan dampak positif bukan musuh -- keduanya bisa hidup berdampingan!</div>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {model.map((m, i) => (
          <motion.div key={m.nama}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${m.warna}`, boxShadow: `5px 5px 0 ${m.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: m.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-xl">{m.icon}</span>
              <span className="font-comic text-sm text-white">{m.nama}</span>
            </div>
            <p className="p-3 text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-yellow p-5">
        <div className="font-comic text-lg text-[#0a0a0a] mb-2">🚀 KVT.KOM SEBAGAI SOCIAL ENTERPRISE</div>
        <p className="text-sm font-bold text-[#0a0a0a]/70 leading-relaxed">
          KVT.kom dirancang sebagai social enterprise: freemium untuk akses luas, premium untuk keberlanjutan,
          dan beasiswa untuk yang benar-benar tidak mampu. Sukses diukur bukan hanya dari revenue,
          tapi dari berapa banyak developer yang berhasil dapat pekerjaan layak.
        </p>
      </div>
    </PanelBab>
  )
}

// -- Ch132: KOLABORASI GLOBAL --------------------------------------------------
function Ch132() {
  return (
    <PanelBab id="ch132" num="132" judul="KOLABORASI GLOBAL -- DUNIA TANPA BATAS" warna="#0891b2" latarBelakang="#ecfeff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🌍 Developer terbaik Indonesia bisa kerja untuk perusahaan San Francisco sambil tinggal di Jember!
      </div>
      <GridTiga items={[
        { icon: '💻', judul: 'Remote Work Culture', teks: 'Post-pandemi: remote work bukan bonus lagi, ini standar. Skill komunikasi async jadi krusial!', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🌐', judul: 'Open Source Global', teks: 'Kontribusi ke proyek global dari kamar kos Jember -- kode kamu dipakai jutaan developer dunia', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🌍', judul: 'Cross-Cultural Teams', teks: 'Kerja dengan developer Jepang, Amerika, India -- belajar culture berbeda sambil build produk bersama', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '💬', judul: 'Async Communication', teks: 'Timezone berbeda = standup meeting via teks, dokumentasi lengkap, dan tools seperti Notion/Linear', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '💰', judul: 'Global Salary', teks: 'Developer Indonesia remote untuk perusahaan US bisa dapat gaji 3-5x lebih tinggi dari pasar lokal', warna: '#e63329', bg: '#fef2f2' },
        { icon: '📚', judul: 'English is Key', teks: 'Bahasa Inggris bukan halangan -- ini investasi. Mulai dari GitHub commit message yang baik!', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
    </PanelBab>
  )
}

// -- Ch133: LINGKUNGAN & TECH --------------------------------------------------
function Ch133() {
  return (
    <PanelBab id="ch133" num="133" judul="TEKNOLOGI & LINGKUNGAN -- KODE UNTUK BUMI" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">🌍 Bumi hanya ada satu -- developer punya tanggung jawab untuk menjaganya lewat teknologi!</div>
      <GridTiga items={[
        { icon: '🌊', judul: 'Ocean Monitoring', teks: 'Sensor IoT bawah laut memantau suhu, salinitas, dan biodiversitas laut secara real-time', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '🌲', judul: 'Deforestation Alert', teks: 'Satellite imagery + AI mendeteksi penebangan hutan ilegal dan mengirim alert ke pihak berwenang', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🦋', judul: 'Biodiversity Tracking', teks: 'Computer vision mengidentifikasi spesies dari foto dan membuat database biodiversitas global otomatis', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '♻️', judul: 'Circular Economy', teks: 'Platform digital untuk waste exchange -- sisa produksi satu perusahaan jadi bahan baku perusahaan lain', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🌡️', judul: 'Climate Modeling', teks: 'Supercomputer + ML untuk model iklim yang akurasi lebih tinggi dan prediksi lebih jauh ke depan', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🌴', judul: 'Hutan Indonesia', teks: 'Hutan hujan Indonesia adalah paru-paru dunia -- developer lokal bisa bantu monitor dan melindunginya!', warna: '#22c55e', bg: '#f0fdf4' },
      ]} />
    </PanelBab>
  )
}

// -- Ch134: KESEHATAN INOVATIF -------------------------------------------------
function Ch134() {
  return (
    <PanelBab id="ch134" num="134" judul="HEALTHTECH -- INOVASI KESEHATAN DIGITAL" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🏥 Teknologi yang paling berdampak adalah yang menyelamatkan nyawa manusia!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <GridTiga items={[
          { icon: '📡', judul: 'Telemedicine', teks: 'Konsultasi dokter via video call dari rumah. Di Indonesia sangat krusial untuk daerah terpencil', warna: '#e63329', bg: '#fef2f2' },
          { icon: '🤖', judul: 'AI Diagnosis', teks: 'ML deteksi kanker dari X-ray dan MRI lebih akurat dari radiolog senior. Early detection = lives saved', warna: '#1a5cff', bg: '#e8f0ff' },
          { icon: '💊', judul: 'Smart Medication', teks: 'Reminder minum obat berbasis IoT + AI compliance tracking. Sangat penting untuk pasien kronis', warna: '#22c55e', bg: '#f0fdf4' },
          { icon: '⌚', judul: 'Wearable Health', teks: 'Smartwatch monitor detak jantung, oksigen darah, dan pola tidur -- deteksi dini masalah kesehatan', warna: '#8b5cf6', bg: '#f5f0ff' },
          { icon: '🧬', judul: 'Precision Medicine', teks: 'Pengobatan yang dipersonalisasi berdasar profil genetik individu -- satu ukuran tidak cocok untuk semua', warna: '#f59e0b', bg: '#fffbeb' },
          { icon: '🧠', judul: 'Mental Health App', teks: 'CBT digital, mood tracking, dan komunitas support. Kesehatan mental sama pentingnya dengan fisik!', warna: '#0891b2', bg: '#ecfeff' },
        ]} />
        <div className="comic-panel-dark p-5">
          <div className="font-comic text-xl text-white mb-3">❤️ HEALTHTECH INDONESIA</div>
          <p className="text-sm text-white/70 font-bold leading-relaxed mb-3">
            Indonesia punya 17.000+ pulau, 270 juta jiwa, tapi dokter per kapita masih sangat rendah.
            Healthtech lokal bisa menutup gap akses layanan kesehatan ini.
          </p>
          <div className="space-y-2">
            {[
              { startup: 'Halodoc', fokus: 'Telemedicine & apotek online nasional' },
              { startup: 'Alodokter', fokus: 'Konsultasi dokter & booking rumah sakit' },
              { startup: 'Good Doctor', fokus: 'Layanan kesehatan berbasis AI' },
              { startup: 'KVT Health (Visi)', fokus: 'Kesehatan digital komunitas developer' },
            ].map(s => (
              <div key={s.startup} className="p-2 bg-white/10 border border-white/20">
                <div className="font-comic text-xs text-yellow-400">{s.startup}</div>
                <p className="text-[10px] text-white/60 font-bold">{s.fokus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// -- Ch135: AGRITECH -----------------------------------------------------------
function Ch135() {
  return (
    <PanelBab id="ch135" num="135" judul="AGRITECH -- REVOLUSI PERTANIAN DIGITAL" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">🌾 Indonesia negara agraris terbesar -- tapi petaninya masih banyak yang manual. Ini peluang!</div>
      <GridTiga items={[
        { icon: '🌾', judul: 'Precision Farming', teks: 'Sensor tanah + drone + AI menentukan kapan dan di mana harus menyiram, pupuk, dan panen', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🚁', judul: 'Agricultural Drones', teks: 'Drone semprot pestisida 50x lebih efisien dari manual, kurangi paparan kimia ke petani', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🏪', judul: 'Farmer Marketplace', teks: 'Platform langsung petani ke konsumen tanpa tengkulak. Petani dapat harga lebih baik, konsumen lebih murah', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🔬', judul: 'Soil Analytics', teks: 'Lab analisis tanah digital berbasis AI yang murah dan cepat -- gantikan lab konvensional yang mahal', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '⛅', judul: 'Micro Weather', teks: 'Stasiun cuaca IoT murah per desa yang berikan prakiraan hyper-lokal untuk keputusan pertanian', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '💧', judul: 'Smart Irrigation', teks: 'Sistem irigasi otomatis berbasis sensor dan data cuaca -- hemat air 60% dari irigasi manual tradisional', warna: '#22c55e', bg: '#f0fdf4' },
      ]} />
    </PanelBab>
  )
}

// -- Ch136: EDTECH INOVATIF ----------------------------------------------------
function Ch136() {
  return (
    <PanelBab id="ch136" num="136" judul="EDTECH INOVATIF -- MASA DEPAN BELAJAR" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🎓 Pendidikan terbaik adalah yang menyesuaikan diri dengan pelajar, bukan sebaliknya!
      </div>
      <GridTiga items={[
        { icon: '🎯', judul: 'Adaptive Learning', teks: 'AI menganalisis pola belajar dan menyesuaikan materi, kecepatan, dan metode untuk setiap pelajar', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🎮', judul: 'Gamified Learning', teks: 'Pelajaran dalam format game -- XP, level up, badge, dan leaderboard. Belajar jadi menyenangkan!', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🥽', judul: 'Immersive VR Learning', teks: 'Belajar sejarah dengan VR ke era Majapahit, atau praktik operasi bedah di simulasi VR medis', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '👥', judul: 'Peer Learning Network', teks: 'Platform kolaborasi antar pelajar global -- proyek bersama, code review, dan mentoring peer-to-peer', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '📊', judul: 'Learning Analytics', teks: 'Dashboard guru dan orang tua untuk track progress real-time, identifikasi kesulitan sebelum terlambat', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🏅', judul: 'Micro-credentials', teks: 'Sertifikasi modular untuk skill spesifik -- tidak perlu 4 tahun kuliah untuk jadi ahli di satu bidang', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
    </PanelBab>
  )
}

// -- Ch137: CREATIVE ECONOMY ---------------------------------------------------
function Ch137() {
  return (
    <PanelBab id="ch137" num="137" judul="EKONOMI KREATIF -- KARYA DIGITAL BERNILAI" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">🎨 Kreativitas + teknologi = sumber penghasilan tak terbatas di era digital!</div>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {[
          { kategori: 'Digital Art & NFT', deskripsi: 'Karya digital yang kepemilikannya terverifikasi blockchain. Seniman bisa jual langsung ke kolektor global', icon: '🖼️', tools: ['Procreate', 'Photoshop', 'OpenSea'], warna: '#8b5cf6' },
          { kategori: 'Content Creator', deskripsi: 'YouTube, TikTok, Podcast -- konten orisinal menghasilkan pendapatan passive dari iklan dan sponsorship', icon: '📱', tools: ['CapCut', 'OBS Studio', 'Canva'], warna: '#e63329' },
          { kategori: 'Game Development', deskripsi: 'Indie game developer bisa rilis global via Steam, App Store, Play Store. Satu game sukses = financial freedom', icon: '🕹️', tools: ['Unity', 'Godot', 'Unreal Engine'], warna: '#1a5cff' },
          { kategori: 'UI/UX Freelance', deskripsi: 'Designer yang bisa koding = unicorn yang dicari startup. Rate premium untuk hybrid skill ini', icon: '🎨', tools: ['Figma', 'Framer', 'Webflow'], warna: '#22c55e' },
        ].map((k, i) => (
          <motion.div key={k.kategori}
            initial={{ opacity: 0, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${k.warna}`, boxShadow: `5px 5px 0 ${k.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: k.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-xl">{k.icon}</span>
              <span className="font-comic text-sm text-white">{k.kategori}</span>
            </div>
            <div className="p-3">
              <p className="text-xs font-bold text-[#0a0a0a]/70 mb-2">{k.deskripsi}</p>
              <div className="flex flex-wrap gap-1.5">
                {k.tools.map(t => <span key={t} className="font-bold text-[9px] px-1.5 py-0.5 text-white" style={{ background: k.warna }}>{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch138: SMART CITY ---------------------------------------------------------
function Ch138() {
  return (
    <PanelBab id="ch138" num="138" judul="SMART CITY -- KOTA YANG CERDAS" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🏙️ Kota cerdas bukan tentang gadget -- ini tentang data dan keputusan yang lebih baik untuk warga!
      </div>
      <GridTiga items={[
        { icon: '🚦', judul: 'Smart Traffic', teks: 'AI mengoptimalkan lampu merah berdasar kepadatan real-time. Kurangi kemacetan 30% tanpa bangun jalan baru!', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🗑️', judul: 'Smart Waste', teks: 'Sensor di tong sampah yang alert saat penuh -- truk sampah hanya datang jika diperlukan, hemat BBM', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '💡', judul: 'Smart Street Light', teks: 'Lampu jalan yang terang saat ada kendaraan/orang, redup saat sepi. Hemat listrik kota 60%!', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🅿️', judul: 'Smart Parking', teks: 'Sensor parkir + app -- lihat slot kosong sebelum masuk. Kurangi 30% kemacetan yang disebabkan cari parkir', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '💧', judul: 'Smart Water Grid', teks: 'Deteksi kebocoran pipa secara real-time, monitoring kualitas air, dan manajemen distribusi otomatis', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '🖥️', judul: 'City Dashboard', teks: 'Command center walikota dengan semua data kota real-time -- dari kriminalitas sampai kualitas udara', warna: '#1a5cff', bg: '#e8f0ff' },
      ]} />
      <div className="mt-6 comic-panel-yellow p-4 text-center">
        <div className="font-comic text-base text-[#0a0a0a] mb-2">🏙️ SMART CITY JEMBER 2030?</div>
        <p className="text-sm font-bold text-[#0a0a0a]/70">
          Jember punya potensi smart city yang belum digarap. Developer lokal punya keunggulan
          konteks dan jaringan untuk membangun solusi yang benar-benar sesuai kebutuhan kota sendiri!
        </p>
      </div>
    </PanelBab>
  )
}

// -- Ch139: SUPPLY CHAIN TECH --------------------------------------------------
function Ch139() {
  return (
    <PanelBab id="ch139" num="139" judul="SUPPLY CHAIN TECH -- RANTAI PASOK DIGITAL" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">📦 COVID mengajarkan: supply chain yang rapuh = ekonomi lumpuh. Digitalisasi adalah solusinya!</div>
      <GridTiga items={[
        { icon: '📍', judul: 'Real-time Tracking', teks: 'GPS + IoT melacak setiap paket dari pabrik ke tangan konsumen. Transparency penuh rantai pasok', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '⛓️', judul: 'Blockchain Provenance', teks: 'Verifikasi keaslian produk dari sumber sampai konsumen. Sangat penting untuk produk premium dan obat-obatan', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '📈', judul: 'Demand Forecasting', teks: 'ML memprediksi demand produk jauh ke depan -- kurangi overstock dan stockout secara signifikan', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🏭', judul: 'Digital Twin Factory', teks: 'Model virtual pabrik yang real-time sync dengan kondisi fisik -- simulasi optimasi sebelum implementasi', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🚢', judul: 'Port Automation', teks: 'Crane otomatis, AGV di pelabuhan, dan sistem manajemen kontainer yang AI-driven', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🌾', judul: 'Pangan Indonesia', teks: 'Supply chain pangan yang transparan = harga stabil, petani untung, konsumen tidak dirugikan', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
    </PanelBab>
  )
}

// -- Ch140: MENTAL HEALTH TECH -------------------------------------------------
function Ch140() {
  return (
    <PanelBab id="ch140" num="140" judul="MENTAL HEALTH TECH -- KESEHATAN JIWA DIGITAL" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🧘 Burnout developer adalah epidemi sunyi. Teknologi bisa jadi bagian dari solusinya!
      </div>
      <GridTiga items={[
        { icon: '🧠', judul: 'CBT Digital', teks: 'Cognitive Behavioral Therapy via app -- exercise terstruktur untuk reframe pikiran negatif, tersedia 24/7', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '😊', judul: 'Mood Tracker AI', teks: 'AI menganalisis pola mood harian dan memberikan insight tentang pemicu stres personal', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🎵', judul: 'Sound Therapy', teks: 'Generative music yang adaptif berdasar biometrik -- binaural beats, nature sounds, dan frekuensi healing', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🤝', judul: 'Peer Support Network', teks: 'Komunitas online anonim untuk saling support. Rasa senasib dari sesama lebih powerful dari terapi formal', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '😴', judul: 'Sleep Tech', teks: 'Monitor kualitas tidur via wearable + AI rekomendasi untuk optimasi jadwal, cahaya, dan suhu kamar', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🌸', judul: 'Mindfulness App', teks: 'Meditasi terpandu, breathing exercises, dan latihan mindfulness yang terbukti reduce anxiety 40%', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
      <div className="mt-6 comic-panel-dark p-4 text-center">
        <div className="font-comic text-lg text-white mb-2">⚠️ PESAN PENTING</div>
        <p className="text-sm font-bold text-white/70 max-w-2xl mx-auto">
          Teknologi hanya alat bantu -- bukan pengganti profesional kesehatan mental. Jika kamu atau orang
          yang kamu kenal butuh bantuan, jangan ragu hubungi profesional atau Into The Light Indonesia: 119 ext 8.
        </p>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup13() {
  return (
    <>
      <div className="comic-divider" />
      <Ch131 /><div className="comic-divider" />
      <Ch132 /><div className="comic-divider" />
      <Ch133 /><div className="comic-divider" />
      <Ch134 /><div className="comic-divider" />
      <Ch135 /><div className="comic-divider" />
      <Ch136 /><div className="comic-divider" />
      <Ch137 /><div className="comic-divider" />
      <Ch138 /><div className="comic-divider" />
      <Ch139 /><div className="comic-divider" />
      <Ch140 />
    </>
  )
}
