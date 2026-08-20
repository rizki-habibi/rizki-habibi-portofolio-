'use client'

import { motion } from 'framer-motion'
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

function GridTiga({ items }: { items: { icon: string; title: string; text: string; color: string; bg: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((p, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0.85, rotate: i % 2 === 0 ? -2 : 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.08, type: 'spring', stiffness: 120 }}
          viewport={{ once: false, amount: 0.1 }}
          whileHover={{ y: -5, rotate: i % 2 === 0 ? -1 : 1 }}
          className="overflow-hidden" style={{ border: `3px solid ${p.color}`, boxShadow: `4px 4px 0 ${p.color}`, background: p.bg }}>
          <div className="p-4 text-center">
            <div className="text-3xl mb-2">{p.icon}</div>
            <div className="font-comic text-sm mb-1" style={{ color: p.color }}>{p.title}</div>
            <div className="text-[11px] text-comic-black font-bold leading-relaxed">{p.text}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function StoryPanel({ panels }: { panels: { title: string; text: string; icon: string; color: string; wide?: boolean }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {panels.map((p, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, y: 20, rotate: i % 3 === 0 ? -2 : i % 3 === 2 ? 2 : 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: i * 0.07 }} viewport={{ once: false, amount: 0.1 }}
          whileHover={{ scale: 1.04, zIndex: 10 }}
          className={`p-4 bg-white relative overflow-hidden ${p.wide ? 'md:col-span-2' : ''}`}
          style={{ border: `3px solid ${p.color}`, boxShadow: `4px 4px 0 ${p.color}` }}>
          <div className="text-3xl mb-2">{p.icon}</div>
          <div className="font-comic text-sm mb-1" style={{ color: p.color }}>{p.title}</div>
          <div className="text-xs text-comic-black leading-relaxed">{p.text}</div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full opacity-15" style={{ background: p.color }} />
        </motion.div>
      ))}
    </div>
  )
}

// Ch36 — Kesehatan Digital
function Ch36() {
  return (
    <PanelBab id="ch36" chNum="CHAPTER 36" judul="KESEHATAN DIGITAL" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">⚕️ Teknologi untuk hidup yang lebih sehat!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🏥 POTENSI TEKNOLOGI KESEHATAN</div>
            <p className="text-sm text-comic-black leading-relaxed mb-3">
              Bidang kesehatan adalah salah satu area yang paling diuntungkan dari digitalisasi. Sistem informasi
              rumah sakit, telemedicine, dan monitoring pasien jarak jauh adalah kebutuhan nyata yang butuh developer andal.
            </p>
            <StoryPanel panels={[
              { icon: '📱', title: 'Telemedicine', text: 'Konsultasi dokter jarak jauh via aplikasi web.', color: '#22c55e' },
              { icon: '🏥', title: 'SIMRS', text: 'Sistem Informasi Manajemen Rumah Sakit terintegrasi.', color: '#1a5cff' },
              { icon: '💊', title: 'e-Resep', text: 'Resep digital yang terhubung langsung ke apotek.', color: '#f59e0b' },
              { icon: '📊', title: 'Health Analytics', text: 'Dashboard analitik data kesehatan populasi.', color: '#e63329' },
            ]} />
          </div>
        </div>
        <div>
          <div className="comic-panel-dark p-6">
            <div className="font-comic text-xl text-white mb-4">💡 POTENSI INOVASI KE DEPAN</div>
            <div className="space-y-3">
              {[
                { idea: 'IoT Monitoring Pasien', desc: 'Sensor yang mengirim data vital pasien ke dokter secara real-time.', icon: '📡' },
                { idea: 'AI Diagnosa Awal', desc: 'Sistem yang membantu dokter dengan rekomendasi diagnosa berbasis data.', icon: '🤖' },
                { idea: 'Platform Posyandu Digital', desc: 'Sistem pencatatan dan pemantauan kesehatan balita berbasis web.', icon: '👶' },
                { idea: 'QRIS Donasi Darah', desc: 'Platform menghubungkan donor darah dengan yang membutuhkan.', icon: '🩸' },
              ].map((s, i) => (
                <div key={s.idea} className="flex gap-3 p-3 bg-white/10 border border-white/20">
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <div className="font-bold text-xs text-comic-yellow">{s.idea}</div>
                    <div className="text-[11px] text-white/60">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch37 — Lingkungan Hidup
function Ch37() {
  return (
    <PanelBab id="ch37" chNum="CHAPTER 37" judul="TEKNOLOGI UNTUK LINGKUNGAN" warna="#16a34a" latarBelakang="#f0fdf4">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🌍 Bumi kita, tanggung jawab kita!</div>
          <StoryPanel panels={[
            { icon: '🌱', title: 'Green IoT', text: 'Sensor lingkungan monitoring kualitas udara, suhu, dan polutan.', color: '#16a34a', wide: true },
            { icon: '♻️', title: 'Waste Management', text: 'Sistem tracking sampah dan jadwal pengambutan berbasis web.', color: '#22c55e' },
            { icon: '💧', title: 'Water Quality', text: 'Monitor kualitas air sungai dengan sensor IoT.', color: '#0891b2' },
            { icon: '🌞', title: 'Solar Monitoring', text: 'Dashboard monitoring energi panel surya.', color: '#f59e0b' },
            { icon: '🌳', title: 'Tree Planting Map', text: 'Peta digital tracking pohon yang ditanam komunitas.', color: '#16a34a', wide: true },
          ]} />
        </div>
        <div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🎯 FILOSOFI TECH FOR EARTH</div>
            <p className="text-sm text-comic-black leading-relaxed">
              Inovasi terbaik bukan yang paling canggih, tapi yang paling berkelanjutan. Setiap proyek yang saya bangun
              harus mempertimbangkan dampak lingkungan — mulai dari efisiensi server, hingga mendorong gaya hidup berkelanjutan.
            </p>
          </div>
          <GridTiga items={[
            { icon: '🔋', title: 'Efisiensi Energi', text: 'Kode yang efisien = server yang hemat energi.', color: '#16a34a', bg: '#f0fdf4' },
            { icon: '📊', title: 'Carbon Tracking', text: 'Platform tracking jejak karbon personal.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '🌊', title: 'Bencana Alam', text: 'Sistem early warning banjir berbasis sensor IoT.', color: '#0891b2', bg: '#ecfeff' },
            { icon: '🏭', title: 'Smart Factory', text: 'Monitoring polusi industri secara real-time.', color: '#f59e0b', bg: '#fffbeb' },
          ]} />
        </div>
      </div>
    </PanelBab>
  )
}

// Ch38 — Dampak Sosial
function Ch38() {
  return (
    <PanelBab id="ch38" chNum="CHAPTER 38" judul="DAMPAK SOSIAL TEKNOLOGI" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🌟 Teknologi yang tidak berdampak sosial, percuma!</div>
          <div className="space-y-4">
            {[
              { area: 'Pemberdayaan UMKM', impact: '30% UMKM bisa naik kelas dengan kehadiran digital yang tepat', icon: '🏪', color: '#1a5cff' },
              { area: 'Akses Pendidikan', impact: 'Platform edukasi digital menjangkau daerah terpencil tanpa infrastruktur mahal', icon: '📚', color: '#22c55e' },
              { area: 'Transparansi Dana Publik', impact: 'Website desa dengan laporan anggaran transparan meningkatkan kepercayaan warga', icon: '💰', color: '#f59e0b' },
              { area: 'Bantuan Sosial', impact: 'QRIS donasi memotong rantai distribusi bantuan agar tepat sasaran', icon: '🤲', color: '#e63329' },
              { area: 'Lapangan Kerja Digital', impact: 'KVT.kom menciptakan ekosistem pekerjaan baru di sektor digital kreatif', icon: '💼', color: '#8b5cf6' },
            ].map((s, i) => (
              <motion.div key={s.area} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: false }}
                className="p-4 bg-white" style={{ border: `3px solid ${s.color}`, boxShadow: `4px 4px 0 ${s.color}` }}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <div className="font-bold text-sm text-comic-black">{s.area}</div>
                    <div className="text-xs text-comic-black/60 mt-0.5">{s.impact}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="comic-panel-dark p-6 mb-4">
            <div className="font-comic text-xl text-white mb-4">📈 METRIK DAMPAK YANG DIUKUR</div>
            {[
              { metric: 'Pengguna Aktif', target: '10.000+', color: '#1a5cff' },
              { metric: 'Desa Terdigitalisasi', target: '100+', color: '#22c55e' },
              { metric: 'Donasi Tersalurkan', target: 'Rp 1M+', color: '#f59e0b' },
              { metric: 'Lapangan Kerja', target: '100+', color: '#e63329' },
            ].map((m, i) => (
              <div key={m.metric} className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-xs text-white/70 font-bold">{m.metric}</span>
                <span className="font-comic text-base" style={{ color: m.color }}>{m.target}</span>
              </div>
            ))}
          </div>
          <GridTiga items={[
            { icon: '📊', title: 'Data-Driven', text: 'Keputusan berbasis data nyata, bukan asumsi.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🔄', title: 'Iterasi Cepat', text: 'Feedback dari pengguna nyata mempercepat perbaikan.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '🤝', title: 'Partnership', text: 'Kolaborasi dengan NGO, pemerintah, dan komunitas.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '📣', title: 'Advocacy', text: 'Mendorong kebijakan yang mendukung digitalisasi inklusif.', color: '#e63329', bg: '#fef2f2' },
          ]} />
        </div>
      </div>
    </PanelBab>
  )
}

// Ch39 — Personal Growth
function Ch39() {
  return (
    <PanelBab id="ch39" chNum="CHAPTER 39" judul="PERSONAL GROWTH — BERTUMBUH SETIAP HARI" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🌱 Versi terbaik diri sendiri dimulai dari hari ini!</div>
          <div className="space-y-3">
            {[
              { habit: 'Baca 1 artikel teknologi', freq: 'Setiap hari', icon: '📰', color: '#f59e0b' },
              { habit: 'Coding minimal 30 menit', freq: 'Setiap hari', icon: '💻', color: '#1a5cff' },
              { habit: 'Pelajari 1 konsep baru', freq: 'Seminggu', icon: '🧠', color: '#22c55e' },
              { habit: 'Review kode lama', freq: 'Dua minggu sekali', icon: '🔍', color: '#e63329' },
              { habit: 'Networking digital', freq: 'Sebulan sekali', icon: '🤝', color: '#8b5cf6' },
              { habit: 'Dokumentasi proyek', freq: 'Per proyek', icon: '📝', color: '#0891b2' },
            ].map((h, i) => (
              <motion.div key={h.habit} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: false }}
                className="flex items-center gap-3 p-3 bg-white" style={{ border: `2px solid ${h.color}`, boxShadow: `3px 3px 0 ${h.color}` }}>
                <span className="text-xl flex-shrink-0">{h.icon}</span>
                <div className="flex-1">
                  <div className="font-bold text-xs text-comic-black">{h.habit}</div>
                </div>
                <span className="font-comic text-[10px] text-white px-2 py-0.5" style={{ background: h.color }}>{h.freq}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <StoryPanel panels={[
            { icon: '📚', title: 'Mindset Bertumbuh', text: 'Gagal bukan akhir — itu feedback dari alam semesta untuk mencoba lagi.', color: '#f59e0b', wide: true },
            { icon: '🎯', title: 'Focus & Deep Work', text: 'Satu tugas selesai sempurna lebih baik dari sepuluh setengah jalan.', color: '#1a5cff' },
            { icon: '🌅', title: 'Konsistensi', text: 'Bukan tentang motivasi, tapi tentang disiplin harian.', color: '#22c55e' },
            { icon: '🤲', title: 'Humble & Grateful', text: 'Selalu bersyukur atas setiap pencapaian kecil.', color: '#e63329' },
            { icon: '🔄', title: 'Feedback Loop', text: 'Minta feedback, dengarkan, dan implementasikan.', color: '#8b5cf6', wide: true },
          ]} />
        </div>
      </div>
    </PanelBab>
  )
}

// Ch40 — Leadership
function Ch40() {
  return (
    <PanelBab id="ch40" chNum="CHAPTER 40" judul="LEADERSHIP & TEAM MANAGEMENT" warna="#e63329" latarBelakang="#fef2f2">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">👑 Pemimpin terbaik adalah yang paling banyak belajar!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🎯 GAYA KEPEMIMPINAN SAYA</div>
            <p className="text-sm text-comic-black leading-relaxed mb-3">
              Saya percaya pada kepemimpinan yang <strong>servant first</strong> — memimpin dengan membantu tim berkembang,
              bukan hanya mendelegasikan tugas. Setiap anggota tim adalah aset yang harus diasah.
            </p>
            <div className="space-y-2">
              {[
                'Mendengarkan aktif sebelum memberi keputusan',
                'Mendorong setiap anggota untuk berpendapat',
                'Mengakui kesalahan dan belajar dari kegagalan',
                'Berbagi kredit kemenangan ke seluruh tim',
                'Memberikan feedback yang konstruktif dan langsung',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-bold text-comic-black">
                  <span className="text-comic-blue flex-shrink-0">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <GridTiga items={[
            { icon: '📋', title: 'Project Planning', text: 'Memecah proyek besar menjadi tugas kecil yang terukur dan terkelola.', color: '#e63329', bg: '#fef2f2' },
            { icon: '🔄', title: 'Agile Mindset', text: 'Iterasi cepat, respons terhadap perubahan, dan delivery terus-menerus.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '💬', title: 'Clear Communication', text: 'Komunikasi teknis yang jelas ke semua stakeholder.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '🌟', title: 'Motivate Team', text: 'Menjaga semangat tim tetap tinggi di tengah tekanan deadline.', color: '#f59e0b', bg: '#fffbeb' },
          ]} />
          <div className="comic-panel-dark p-4 mt-4 text-center">
            <div className="font-comic text-xl text-comic-yellow mb-2">&ldquo;A leader is one who knows the way, goes the way, and shows the way.&rdquo;</div>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch41 — Problem Solving
function Ch41() {
  return (
    <PanelBab id="ch41" chNum="CHAPTER 41" judul="PROBLEM SOLVING MINDSET" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🧩 Setiap masalah adalah puzzle yang menunggu dipecahkan!</div>
          <div className="space-y-3">
            {[
              { step: '01. DEFINE', desc: 'Pahami masalah dengan benar — masalah yang salah didefinisikan akan menghasilkan solusi yang salah.', icon: '🎯', color: '#8b5cf6' },
              { step: '02. ANALYZE', desc: 'Pecah masalah menjadi bagian-bagian kecil yang bisa diselesaikan satu per satu.', icon: '🔍', color: '#1a5cff' },
              { step: '03. BRAINSTORM', desc: 'Generate semua kemungkinan solusi tanpa menghakimi — kuantitas dulu, kualitas kemudian.', icon: '💡', color: '#22c55e' },
              { step: '04. PROTOTYPE', desc: 'Buat solusi minimum yang bisa diuji — jangan tunggu sempurna.', icon: '🔧', color: '#f59e0b' },
              { step: '05. TEST', desc: 'Uji solusi dengan kasus nyata dan edge cases yang mungkin terjadi.', icon: '🧪', color: '#e63329' },
              { step: '06. ITERATE', desc: 'Perbaiki berdasarkan hasil uji — terus berulang sampai masalah benar-benar selesai.', icon: '🔄', color: '#0891b2' },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: false }}
                className="flex gap-3 p-3 bg-white" style={{ border: `2px solid ${s.color}`, boxShadow: `3px 3px 0 ${s.color}` }}>
                <div className="font-comic text-sm flex-shrink-0 w-20" style={{ color: s.color }}>{s.step}</div>
                <div className="text-xs text-comic-black leading-relaxed">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <StoryPanel panels={[
            { icon: '🧠', title: 'First Principles', text: 'Selalu tanya "Mengapa?" sampai menemukan akar masalah yang sesungguhnya.', color: '#8b5cf6', wide: true },
            { icon: '📊', title: 'Data-Driven', text: 'Keputusan berdasarkan data dan fakta, bukan asumsi.', color: '#1a5cff' },
            { icon: '🎭', title: 'Creative Thinking', text: 'Solusi terbaik kadang datang dari analogi dan perspektif yang tidak terduga.', color: '#22c55e' },
            { icon: '⏱️', title: 'Time-boxing', text: 'Tetapkan batas waktu untuk mencegah overthinking.', color: '#f59e0b' },
            { icon: '🔄', title: 'Rubber Ducking', text: 'Jelaskan masalah ke orang lain (atau bebek karet) — sering menemukan solusi sendiri!', color: '#e63329', wide: true },
          ]} />
        </div>
      </div>
    </PanelBab>
  )
}

// Ch42 — Soft Skills
function Ch42() {
  return (
    <PanelBab id="ch42" chNum="CHAPTER 42" judul="SOFT SKILLS — KEKUATAN TERSEMBUNYI" warna="#0891b2" latarBelakang="#ecfeff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🌟 Hard skill mengantarkanmu ke pintu, soft skill membukanya!</div>
          <GridTiga items={[
            { icon: '🗣️', title: 'Public Speaking', text: 'Presentasi teknis kepada klien, dosen, dan komunitas tanpa rasa takut.', color: '#0891b2', bg: '#ecfeff' },
            { icon: '✍️', title: 'Technical Writing', text: 'Dokumentasi yang jelas, dokumentasi yang menyelamatkan tim di masa depan.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🎭', title: 'Empathy', text: 'Memahami kebutuhan pengguna dan rekan kerja dari sudut pandang mereka.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '⚡', title: 'Adaptability', text: 'Teknologi berubah cepat — kemampuan beradaptasi lebih berharga dari hafalan.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '🎯', title: 'Time Management', text: 'Prioritaskan yang penting, delegasikan yang bisa didelegasikan.', color: '#e63329', bg: '#fef2f2' },
            { icon: '🤝', title: 'Negotiation', text: 'Menegosiasikan scope proyek, deadline, dan ekspektasi dengan klien.', color: '#8b5cf6', bg: '#f5f0ff' },
            { icon: '🔥', title: 'Passion', text: 'Semangat yang tulus terasa oleh siapapun yang bekerja bersamamu.', color: '#0891b2', bg: '#ecfeff' },
            { icon: '🧘', title: 'Stress Management', text: 'Tetap tenang dan produktif di bawah tekanan deadline.', color: '#16a34a', bg: '#f0fdf4' },
          ]} />
        </div>
        <div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">📊 SERTIFIKAT SOFT SKILLS</div>
            <div className="space-y-1">
              {[
                'Seni Public Speaking Untuk Pemimpin Muda',
                'Komunikasi Krisis Untuk ASN',
                'Komunikasi Strategis Untuk ASN',
                'Menjadi Pengguna Media Sosial yang Bijak',
                'Digital Wellness — Keseimbangan Hidup Digital',
                'Mindset Digital — Growth Mindset',
                'Character Building Tangkal Judi Online',
                'What is Business Pitching',
                'Pengantar Mindset Digital',
              ].map((c, i) => (
                <div key={c} className="flex items-start gap-2 text-xs font-bold text-comic-black py-1 border-b border-comic-black/10">
                  <span className="text-comic-blue flex-shrink-0">✓</span>{c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch43 — Matematika & Logika
function Ch43() {
  return (
    <PanelBab id="ch43" chNum="CHAPTER 43" judul="LOGIKA & COMPUTATIONAL THINKING" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🧮 Coding adalah matematika yang bisa bicara!</div>
          <StoryPanel panels={[
            { icon: '🔢', title: 'Algoritma', text: 'Memahami dan mengimplementasikan algoritma sorting, searching, dan graph.', color: '#f59e0b', wide: true },
            { icon: '📐', title: 'Data Structure', text: 'Array, linked list, tree, hash map — memilih struktur data yang tepat.', color: '#1a5cff' },
            { icon: '🔄', title: 'Rekursi', text: 'Memecahkan masalah kompleks dengan pendekatan rekursif yang elegan.', color: '#22c55e' },
            { icon: '🎯', title: 'Big O Notation', text: 'Menganalisis efisiensi kode agar performa tetap baik di skala besar.', color: '#e63329' },
            { icon: '🧩', title: 'Design Patterns', text: 'MVC, Singleton, Observer — pola solusi untuk masalah yang berulang.', color: '#8b5cf6', wide: true },
          ]} />
        </div>
        <div>
          <div className="comic-panel-dark p-6">
            <div className="font-comic text-xl text-white mb-4">🎓 COMPUTATIONAL THINKING</div>
            {[
              { skill: 'Dekomposisi', desc: 'Memecah masalah besar menjadi bagian kecil yang bisa diselesaikan', icon: '✂️' },
              { skill: 'Pengenalan Pola', desc: 'Menemukan kesamaan dan pola dalam masalah yang berbeda', icon: '🔍' },
              { skill: 'Abstraksi', desc: 'Fokus pada informasi penting, abaikan detail yang tidak relevan', icon: '🎭' },
              { skill: 'Algoritma', desc: 'Membuat langkah-langkah solusi yang sistematis dan berulang', icon: '📋' },
            ].map((s, i) => (
              <div key={s.skill} className="flex gap-3 p-3 mb-2 bg-white/10 border border-white/20">
                <span className="text-xl">{s.icon}</span>
                <div>
                  <div className="font-bold text-xs text-comic-yellow">{s.skill}</div>
                  <div className="text-[11px] text-white/60">{s.desc}</div>
                </div>
              </div>
            ))}
            <div className="mt-4 text-center">
              <div className="font-comic text-sm text-white/50">Sertifikat Computational Thinking (SD, SMP, SMA) — DTS 2025</div>
            </div>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch44 — Creativity
function Ch44() {
  return (
    <PanelBab id="ch44" chNum="CHAPTER 44" judul="KREATIVITAS TANPA BATAS" warna="#ec4899" latarBelakang="#fdf2f8">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🎨 Kreativitas adalah otot — semakin dilatih semakin kuat!</div>
          <div className="space-y-3">
            {[
              { area: 'Desain Grafis', tools: ['Canva', 'CorelDraw', 'Affinity'], icon: '🎨', color: '#ec4899' },
              { area: 'Video Editing', tools: ['CapCut', 'Vegas Pro', 'Premier Pro'], icon: '🎬', color: '#8b5cf6' },
              { area: 'Web Design', tools: ['Figma', 'Tailwind', 'CSS Animation'], icon: '💻', color: '#1a5cff' },
              { area: 'Content Creation', tools: ['Copywriting', 'Storytelling', 'Visual'], icon: '✍️', color: '#22c55e' },
              { area: 'Karakter Komik', tools: ['AI Art Tools', 'Character Design'], icon: '🎭', color: '#f59e0b' },
            ].map((a, i) => (
              <motion.div key={a.area} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: false }}
                className="p-3 bg-white" style={{ border: `2px solid ${a.color}`, boxShadow: `3px 3px 0 ${a.color}` }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{a.icon}</span>
                  <span className="font-bold text-sm text-comic-black">{a.area}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {a.tools.map(t => <span key={t} className="text-[10px] font-bold px-2 py-0.5 text-white" style={{ background: a.color }}>{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <StoryPanel panels={[
            { icon: '🌈', title: 'Color Psychology', text: 'Warna memengaruhi emosi dan keputusan pengguna secara langsung.', color: '#ec4899', wide: true },
            { icon: '📖', title: 'Storytelling', text: 'Setiap produk adalah sebuah cerita yang harus memikat dari awal.', color: '#8b5cf6' },
            { icon: '🎵', title: 'Ritme Desain', text: 'Pengulangan, variasi, dan emphasis menciptakan desain yang bernyawa.', color: '#1a5cff' },
            { icon: '💡', title: 'Ide Tanpa Batas', text: 'Tidak ada ide yang terlalu gila — hanya ide yang belum dieksekusi.', color: '#22c55e' },
            { icon: '🔄', title: 'Remix Culture', text: 'Kreativitas adalah tentang menggabungkan hal-hal yang sudah ada dengan cara baru.', color: '#f59e0b', wide: true },
          ]} />
        </div>
      </div>
    </PanelBab>
  )
}

// Ch45 — Mimpi dan Visi
function Ch45() {
  return (
    <PanelBab id="ch45" chNum="CHAPTER 45" judul="DREAM BIG — VISI JANGKA PANJANG" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🌟 Bermimpilah sebesar langit, lalu bangun tangganya satu per satu!</div>
          <div className="space-y-4">
            {[
              { dream: '5 Tahun', vision: 'KVT.kom aktif dengan 10.000+ pengguna dan 50+ kreator digital.', icon: '🚀', color: '#8b5cf6' },
              { dream: '10 Tahun', vision: 'QRIS Donasi menjangkau 1 juta penerima manfaat di seluruh Indonesia.', icon: '🌟', color: '#1a5cff' },
              { dream: '15 Tahun', vision: 'Website Desa Digital aktif di 10.000+ desa Indonesia.', icon: '🌍', color: '#22c55e' },
              { dream: '20 Tahun', vision: 'KVT Institute menjadi lembaga pendidikan digital yang diakui secara nasional.', icon: '🎓', color: '#f59e0b' },
            ].map((d, i) => (
              <motion.div key={d.dream} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: false }}
                className="flex gap-4 items-start p-4 bg-white" style={{ border: `3px solid ${d.color}`, boxShadow: `4px 4px 0 ${d.color}` }}>
                <div className="flex-shrink-0 font-comic text-lg w-20 text-center px-2 py-1 text-white" style={{ background: d.color }}>{d.dream}</div>
                <div>
                  <div className="text-2xl mb-1">{d.icon}</div>
                  <div className="text-sm font-bold text-comic-black leading-snug">{d.vision}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="comic-panel-dark p-6 mb-4">
            <div className="font-comic text-2xl text-comic-yellow text-center mb-4">💭 VISI TERBESAR</div>
            <div className="text-center space-y-4">
              <div className="text-5xl">🌏</div>
              <p className="font-bold text-white leading-relaxed">
                Membangun ekosistem digital Indonesia yang inklusif — di mana setiap warga negara, dari desa terpencil
                hingga kota besar, memiliki akses yang sama terhadap pendidikan, ekonomi, dan layanan digital berkualitas.
              </p>
              <div className="font-comic text-comic-yellow text-sm">— Rizki Habibi, 2026</div>
            </div>
          </div>
          <GridTiga items={[
            { icon: '🌱', title: 'Sustainable', text: 'Setiap proyek dibangun untuk bertahan 10+ tahun.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '🤝', title: 'Inclusive', text: 'Tidak ada yang ditinggalkan di era digital.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '📈', title: 'Scalable', text: 'Dirancang untuk tumbuh dari 100 ke 1 juta pengguna.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '❤️', title: 'Heart-Driven', text: 'Teknologi yang dibangun dengan hati untuk hati.', color: '#e63329', bg: '#fef2f2' },
          ]} />
        </div>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup3() {
  return (
    <>
      <div className="comic-divider" /><Ch36 />
      <div className="comic-divider" /><Ch37 />
      <div className="comic-divider" /><Ch38 />
      <div className="comic-divider" /><Ch39 />
      <div className="comic-divider" /><Ch40 />
      <div className="comic-divider" /><Ch41 />
      <div className="comic-divider" /><Ch42 />
      <div className="comic-divider" /><Ch43 />
      <div className="comic-divider" /><Ch44 />
      <div className="comic-divider" /><Ch45 />
    </>
  )
}
