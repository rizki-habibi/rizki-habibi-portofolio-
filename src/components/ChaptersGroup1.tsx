'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Reusable comic panel wrapper
function ComicPanel({ id, chNum, title, color, bgColor, children }: {
  id: string; chNum: string; title: string; color: string; bgColor: string; children: React.ReactNode
}) {
  return (
    <section id={id} className="py-20 px-4 relative overflow-hidden" style={{ background: bgColor }}>
      <div className="halftone-bg" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: false, amount: 0.25 }}
          className="text-center mb-12">
          <div className="chapter-label mb-3 inline-block" style={{ color, borderColor: color }}>{chNum}</div>
          <h2 className="section-title" style={{ color: '#0a0a0a' }}>{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}

// Kotak panel komik (grid selang-seling seperti halaman komik)
function ComicGrid({ panels }: { panels: { text: string; icon: string; title: string; color: string; bg: string; size?: 'sm' | 'lg' }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
      {panels.map((p, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0.85, rotate: i % 3 === 0 ? -2 : i % 3 === 1 ? 0 : 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.07, type: 'spring', stiffness: 120 }}
          viewport={{ once: false, amount: 0.1 }}
          whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? -1 : 1, zIndex: 10 }}
          className={`relative overflow-hidden ${p.size === 'lg' ? 'md:col-span-2' : ''}`}
          style={{ border: `3px solid ${p.color}`, boxShadow: `5px 5px 0 ${p.color}`, background: p.bg, minHeight: 120 }}>
          <div className="h-1.5" style={{ background: p.color }} />
          <div className="p-4">
            <div className="text-3xl mb-2">{p.icon}</div>
            <div className="font-comic text-sm mb-1" style={{ color: p.color }}>{p.title}</div>
            <div className="text-xs text-comic-black font-bold leading-relaxed">{p.text}</div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 opacity-20 rounded-full" style={{ background: p.color }} />
        </motion.div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   CHAPTER 16 — PROYEK WEBSITE DESA
═══════════════════════════════════════════════════ */
function Ch16() {
  return (
    <ComicPanel id="ch16" chNum="CHAPTER 16" title="WEBSITE DESA DIGITAL" color="#22c55e" bgColor="#f0fdf4">
      <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
        <div>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false }}>
            <div className="speech-bubble inline-block text-sm mb-4">🏘️ Membangun jembatan digital untuk desa!</div>
            <div className="comic-panel-blue p-5 mb-4">
              <div className="font-comic text-xl text-comic-black mb-3">🌾 MISI: DIGITALISASI DESA</div>
              <p className="text-sm text-comic-black leading-relaxed mb-3">
                Indonesia memiliki <strong>75.000+ desa</strong> yang sebagian besar belum memiliki kehadiran digital yang layak.
                Saya melihat ini bukan sebagai masalah, tapi sebagai peluang besar yang menunggu untuk dipecahkan.
              </p>
              <p className="text-sm text-comic-black leading-relaxed">
                Website desa bukan sekadar halaman profil — ini adalah pintu gerbang ekonomi, transparansi pemerintahan,
                dan pemberdayaan masyarakat berbasis teknologi.
              </p>
            </div>
            <div className="comic-panel-yellow p-4">
              <div className="font-comic text-base text-comic-black mb-2">📋 FITUR UTAMA WEBSITE DESA</div>
              <div className="grid grid-cols-2 gap-2">
                {['📊 Data Kependudukan', '💰 Transparansi Anggaran', '🗺️ Peta Wilayah Digital', '📢 Pengumuman Resmi',
                  '🤝 UMKM Lokal', '📸 Galeri Kegiatan', '📝 Layanan Administrasi', '🌐 Potensi Wisata'].map((f, i) => (
                  <div key={i} className="text-xs font-bold text-comic-black p-2 bg-white" style={{ border: '1px solid #22c55e' }}>{f}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <ComicGrid panels={[
            { icon: '🏛️', title: 'Profil Desa', text: 'Sejarah, visi misi, dan struktur pemerintahan desa yang transparan.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '💼', title: 'UMKM Desa', text: 'Platform marketplace sederhana untuk produk unggulan warga desa.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🗺️', title: 'Peta Interaktif', text: 'Visualisasi data spasial wilayah desa berbasis web.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '📱', title: 'Mobile Friendly', text: 'Diakses dari HP biasa, tidak butuh smartphone mahal.', color: '#e63329', bg: '#fef2f2' },
          ]} />
          <div className="comic-panel p-4 text-center">
            <div className="font-comic text-2xl text-comic-black mb-2">🎯 TARGET 2027</div>
            <div className="font-comic text-4xl text-comic-blue">100+</div>
            <div className="text-xs font-bold text-comic-black/60">Website Desa Aktif</div>
          </div>
        </div>
      </div>
    </ComicPanel>
  )
}

/* ═══════════════════════════════════════════════════
   CHAPTER 17 — QRIS BERBASIS DONASI
═══════════════════════════════════════════════════ */
function Ch17() {
  const stepsQris = [
    { step: '01', title: 'Scan QRIS', desc: 'Pengguna scan kode QR yang tertera di platform donasi.', icon: '📱', color: '#1a5cff' },
    { step: '02', title: 'Pilih Nominal', desc: 'Nominal donasi bisa dipilih atau diisi manual sesuai kemampuan.', icon: '💰', color: '#22c55e' },
    { step: '03', title: 'Verifikasi Tujuan', desc: 'Sistem menampilkan profil penerima bantuan secara transparan.', icon: '✅', color: '#f59e0b' },
    { step: '04', title: 'Transfer Langsung', desc: 'Dana langsung masuk ke rekening penerima tanpa potongan besar.', icon: '🚀', color: '#e63329' },
    { step: '05', title: 'Laporan Transparan', desc: 'Donatur bisa melihat penggunaan dana secara real-time.', icon: '📊', color: '#8b5cf6' },
    { step: '06', title: 'Dampak Terukur', desc: 'Sistem tracking impact untuk setiap donasi yang masuk.', icon: '🌱', color: '#0891b2' },
  ]
  return (
    <ComicPanel id="ch17" chNum="CHAPTER 17" title="QRIS DONASI UNTUK SEMUA" color="#1a5cff" bgColor="#e8f0ff">
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2">
          <div className="speech-bubble-right inline-block text-sm mb-6">💳 Inovasi utama selanjutnya — donasi semudah bayar kopi!</div>
          <div className="comic-panel-dark p-6 mb-6">
            <div className="font-comic text-2xl text-white mb-3">🎯 MASALAH YANG DIPECAHKAN</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { prob: 'Donasi konvensional ribet & tidak transparan', icon: '❌' },
                { prob: 'Banyak yang butuh bantuan tapi susah diakses', icon: '😢' },
                { prob: 'Biaya administrasi memotong banyak dana', icon: '💸' },
                { prob: 'Tidak ada tracking penggunaan dana', icon: '🔍' },
              ].map((p, i) => (
                <div key={i} className="flex gap-2 items-start p-3 bg-white/10 border border-white/20">
                  <span className="text-xl flex-shrink-0">{p.icon}</span>
                  <span className="text-xs text-white font-bold">{p.prob}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {stepsQris.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: false }}
                whileHover={{ y: -4 }}
                className="p-3 bg-white text-center"
                style={{ border: `3px solid ${s.color}`, boxShadow: `4px 4px 0 ${s.color}` }}>
                <div className="font-comic text-2xl" style={{ color: s.color }}>{s.step}</div>
                <div className="text-xl my-1">{s.icon}</div>
                <div className="font-comic text-xs text-comic-black">{s.title}</div>
                <div className="text-[10px] text-comic-black/60 mt-1 leading-tight">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black text-center mb-4">📊 TARGET PENERIMA</div>
            {[
              { label: 'Anak Yatim & Dhuafa', icon: '👶', color: '#1a5cff', pct: 90 },
              { label: 'Penyandang Disabilitas', icon: '♿', color: '#22c55e', pct: 85 },
              { label: 'Lansia Tidak Mampu', icon: '👴', color: '#f59e0b', pct: 80 },
              { label: 'Bencana Alam', icon: '🌊', color: '#e63329', pct: 95 },
              { label: 'Pendidikan Anak', icon: '📚', color: '#8b5cf6', pct: 88 },
            ].map((t, i) => (
              <div key={t.label} className="mb-3">
                <div className="flex justify-between text-xs font-bold text-comic-black mb-1">
                  <span>{t.icon} {t.label}</span><span style={{ color: t.color }}>{t.pct}%</span>
                </div>
                <div className="comic-progress">
                  <motion.div className="comic-progress-bar h-full"
                    initial={{ width: 0 }} whileInView={{ width: `${t.pct}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }} viewport={{ once: false }}
                    style={{ background: `repeating-linear-gradient(-45deg,${t.color} 0px,${t.color} 5px,${t.color}88 5px,${t.color}88 10px)` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="comic-panel-yellow p-4 text-center">
            <div className="font-comic text-base text-comic-black">💡 STATUS PROYEK</div>
            <div className="font-comic text-2xl text-comic-blue mt-1">IN DEVELOPMENT</div>
            <div className="text-xs font-bold text-comic-black/60 mt-1">Target Launch: 2027</div>
          </div>
        </div>
      </div>
    </ComicPanel>
  )
}

/* ═══════════════════════════════════════════════════
   CHAPTER 18 — WEBSITE GLOBAL MAP
═══════════════════════════════════════════════════ */
function Ch18() {
  return (
    <ComicPanel id="ch18" chNum="CHAPTER 18" title="WEBSITE GLOBAL MAP" color="#0891b2" bgColor="#ecfeff">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false }}>
          <div className="speech-bubble inline-block text-sm mb-4">🌏 Peta digital yang menghubungkan semua!</div>
          <p className="text-sm text-comic-black font-bold leading-relaxed mb-4">
            Website Global Map adalah platform peta interaktif yang menghubungkan informasi geografis dengan data sosial-ekonomi,
            memungkinkan siapa saja melihat distribusi sumber daya, kebutuhan, dan potensi suatu wilayah secara real-time.
          </p>
          <ComicGrid panels={[
            { icon: '🗺️', title: 'Peta Interaktif', text: 'Visualisasi data geospasial berbasis web dengan layer yang bisa dikustomisasi pengguna.', color: '#0891b2', bg: '#ecfeff' },
            { icon: '📡', title: 'Data Real-time', text: 'Update otomatis dari sensor IoT, laporan warga, dan sumber data resmi.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🤝', title: 'Kolaborasi Desa', text: 'Setiap desa bisa kontribusi data ke peta global.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '📊', title: 'Analitik Wilayah', text: 'Dashboard statistik per wilayah untuk pengambilan keputusan berbasis data.', color: '#8b5cf6', bg: '#f5f0ff' },
          ]} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false }}>
          <div className="comic-panel-dark p-6 mb-4">
            <div className="font-comic text-xl text-white mb-4">🌐 USE CASES</div>
            <div className="space-y-3">
              {[
                { case: 'Pemantauan bencana alam real-time', icon: '⚠️', color: '#e63329' },
                { case: 'Mapping UMKM dan potensi ekonomi desa', icon: '💼', color: '#22c55e' },
                { case: 'Tracking distribusi bantuan sosial', icon: '🤲', color: '#1a5cff' },
                { case: 'Peta infrastruktur dan kebutuhan daerah', icon: '🏗️', color: '#f59e0b' },
                { case: 'Visualisasi data kependudukan', icon: '👥', color: '#8b5cf6' },
                { case: 'Monitoring lingkungan hidup', icon: '🌱', color: '#0891b2' },
              ].map((u, i) => (
                <motion.div key={u.case} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: false }}
                  className="flex items-center gap-3 p-2 bg-white/10 border border-white/20">
                  <span className="text-xl">{u.icon}</span>
                  <span className="text-xs text-white font-bold">{u.case}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="comic-panel-yellow p-4 text-center">
            <div className="font-comic text-base text-comic-black">🔧 TECH STACK</div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {['Next.js', 'Leaflet.js', 'Laravel API', 'PostgreSQL', 'IoT Sensor'].map(t => (
                <span key={t} className="font-bold text-xs px-2 py-1 text-comic-black bg-white" style={{ border: '2px solid #0891b2' }}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </ComicPanel>
  )
}

/* ═══════════════════════════════════════════════════
   CHAPTER 19 — KARIR & PENGEMBANGAN PROFESIONAL
═══════════════════════════════════════════════════ */
function Ch19() {
  const careerPaths = [
    { role: 'Junior Web Developer', period: '2023–2024', status: 'DONE', color: '#22c55e', skills: ['Laravel', 'PHP', 'MySQL', 'HTML/CSS'] },
    { role: 'Full Stack Developer', period: '2024–2025', status: 'DONE', color: '#1a5cff', skills: ['Next.js', 'REST API', 'Tailwind', 'TypeScript'] },
    { role: 'Senior Web Developer', period: '2026–2027', status: 'TARGET', color: '#f59e0b', skills: ['System Design', 'Team Lead', 'Architecture'] },
    { role: 'Tech Lead / CTO', period: '2027–2028', status: 'VISION', color: '#e63329', skills: ['KVT.kom', 'Product Management', 'Scaling'] },
  ]
  return (
    <ComicPanel id="ch19" chNum="CHAPTER 19" title="KARIR & PROFESIONAL" color="#f59e0b" bgColor="#fffbeb">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="speech-bubble inline-block text-sm mb-6">💼 Perjalanan karir bukan sprint — ini marathon!</div>
          <div className="space-y-4">
            {careerPaths.map((c, i) => (
              <motion.div key={c.role} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: false }}
                className="relative overflow-hidden" style={{ border: `3px solid ${c.color}`, boxShadow: `5px 5px 0 ${c.color}`, background: 'white' }}>
                <div className="flex items-center justify-between px-4 py-2" style={{ background: c.color, borderBottom: '2px solid #0a0a0a' }}>
                  <span className="font-comic text-white text-sm">{c.role}</span>
                  <span className="font-comic text-[10px] bg-white text-comic-black px-2 py-0.5">{c.status}</span>
                </div>
                <div className="p-3">
                  <div className="font-bold text-xs text-comic-black/50 mb-2">{c.period}</div>
                  <div className="flex flex-wrap gap-1">
                    {c.skills.map(s => <span key={s} className="text-[10px] font-bold px-2 py-0.5 text-comic-black" style={{ background: `${c.color}20`, border: `1px solid ${c.color}` }}>{s}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <ComicGrid panels={[
            { icon: '🎯', title: 'Spesialisasi', text: 'Web Development dengan fokus pada sistem informasi yang berdampak sosial nyata.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '📈', title: 'Nilai Pasar', text: 'Developer dengan sertifikasi BNSP dan pengalaman nyata lebih diminati industri.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🌟', title: 'Personal Brand', text: 'Membangun reputasi sebagai developer yang inovatif dan memiliki visi sosial.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '🤝', title: 'Networking', text: 'Aktif membangun koneksi dengan profesional di bidang teknologi dan bisnis digital.', color: '#8b5cf6', bg: '#f5f0ff' },
          ]} />
          <div className="comic-panel p-4 text-center">
            <div className="font-comic text-lg text-comic-black">🏆 NILAI YANG SAYA BAWA</div>
            <p className="text-xs text-comic-black/70 mt-2 leading-relaxed">
              Saya bukan hanya coder — saya adalah problem solver yang memahami konteks sosial,
              dapat berkomunikasi dengan client, dan berorientasi pada dampak jangka panjang.
            </p>
          </div>
        </div>
      </div>
    </ComicPanel>
  )
}

/* ═══════════════════════════════════════════════════
   CHAPTER 20 — PENGEMBANGAN WEBSITE KOMERSIAL
═══════════════════════════════════════════════════ */
function Ch20() {
  return (
    <ComicPanel id="ch20" chNum="CHAPTER 20" title="WEBSITE KOMERSIAL & BISNIS" color="#8b5cf6" bgColor="#f5f0ff">
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {[
          { cat: 'Company Profile', icon: '🏢', items: ['Landing page modern', 'About & Tim', 'Portfolio/Produk', 'Kontak & CTA', 'SEO Optimized'], color: '#8b5cf6' },
          { cat: 'E-Commerce', icon: '🛒', items: ['Katalog produk', 'Keranjang & checkout', 'Payment gateway', 'Dashboard admin', 'Manajemen stok'], color: '#1a5cff' },
          { cat: 'Sistem Informasi', icon: '⚙️', items: ['CRUD lengkap', 'Role management', 'Laporan otomatis', 'Dashboard analitik', 'API integration'], color: '#22c55e' },
        ].map((cat, i) => (
          <motion.div key={cat.cat} initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: false }}
            className="overflow-hidden" style={{ border: `3px solid ${cat.color}`, boxShadow: `5px 5px 0 ${cat.color}`, background: 'white' }}>
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: cat.color, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-2xl">{cat.icon}</span>
              <span className="font-comic text-white text-base">{cat.cat}</span>
            </div>
            <div className="p-4">
              {cat.items.map((item, j) => (
                <motion.div key={item} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 + j * 0.06 }} viewport={{ once: false }}
                  className="flex items-center gap-2 py-1.5 border-b border-comic-black/10 last:border-0">
                  <div className="w-2 h-2 flex-shrink-0" style={{ background: cat.color }} />
                  <span className="text-xs font-bold text-comic-black">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-dark p-6 text-center">
        <div className="font-comic text-2xl text-comic-yellow mb-3">💰 LAYANAN YANG TERSEDIA</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { svc: 'Pembuatan Website', icon: '🌐', price: 'Custom' },
            { svc: 'Maintenance & Update', icon: '🔧', price: 'Bulanan' },
            { svc: 'Konsultasi Sistem', icon: '💡', price: 'Per Sesi' },
            { svc: 'Training User', icon: '🎓', price: 'Per Paket' },
          ].map((s, i) => (
            <div key={s.svc} className="p-3 bg-white/10 border border-white/20 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="font-bold text-xs text-white">{s.svc}</div>
              <div className="font-comic text-xs text-comic-yellow">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </ComicPanel>
  )
}

/* ═══════════════════════════════════════════════════
   CHAPTER 21 — SISTEM INFORMASI PEMERINTAHAN
═══════════════════════════════════════════════════ */
function Ch21() {
  return (
    <ComicPanel id="ch21" chNum="CHAPTER 21" title="SISTEM INFORMASI PEMERINTAH" color="#e63329" bgColor="#fef2f2">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🏛️ Teknologi untuk pelayanan publik yang lebih baik!</div>
          <div className="space-y-4">
            {[
              { sys: 'SPBE (Sistem Pemerintah Berbasis Elektronik)', desc: 'Platform terpadu untuk layanan administrasi digital pemerintahan daerah.', icon: '🖥️', color: '#e63329' },
              { sys: 'Sistem Kepegawaian Digital', desc: 'Manajemen data ASN, absensi, dan penggajian berbasis web.', icon: '👔', color: '#1a5cff' },
              { sys: 'E-Musyawarah Desa', desc: 'Platform rapat dan pengambilan keputusan desa secara digital.', icon: '🤝', color: '#22c55e' },
              { sys: 'Sistem Pengaduan Warga', desc: 'Kanal resmi pengaduan dan aspirasi warga berbasis web dan WhatsApp.', icon: '📢', color: '#f59e0b' },
            ].map((s, i) => (
              <motion.div key={s.sys} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: false }}
                whileHover={{ x: 5 }}
                className="overflow-hidden" style={{ border: `3px solid ${s.color}`, boxShadow: `4px 4px 0 ${s.color}`, background: 'white' }}>
                <div className="flex gap-3 p-4">
                  <span className="text-3xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <div className="font-bold text-sm text-comic-black">{s.sys}</div>
                    <div className="text-xs text-comic-black/60 mt-1">{s.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <ComicGrid panels={[
            { icon: '⚡', title: 'Efisiensi 10x', text: 'Proses administrasi yang butuh hari bisa selesai dalam menit dengan sistem digital.', color: '#e63329', bg: '#fef2f2', size: 'lg' },
            { icon: '🔒', title: 'Keamanan Data', text: 'Enkripsi dan backup otomatis data warga.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '📊', title: 'Dashboard Real-time', text: 'Monitoring layanan publik secara langsung.', color: '#22c55e', bg: '#f0fdf4' },
          ]} />
          <div className="comic-panel-yellow p-4 mt-4">
            <div className="font-comic text-base text-comic-black text-center mb-2">🎯 DAMPAK NYATA</div>
            <p className="text-xs text-comic-black leading-relaxed text-center">
              Sistem informasi pemerintahan yang baik = pelayanan lebih cepat + korupsi lebih sulit + kepercayaan warga meningkat.
            </p>
          </div>
        </div>
      </div>
    </ComicPanel>
  )
}

/* ═══════════════════════════════════════════════════
   CHAPTER 22 — PLATFORM EDUKASI DIGITAL
═══════════════════════════════════════════════════ */
function Ch22() {
  return (
    <ComicPanel id="ch22" chNum="CHAPTER 22" title="PLATFORM EDUKASI DIGITAL" color="#8b5cf6" bgColor="#f5f0ff">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">📚 Belajar tanpa batas, dari mana saja!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🎓 VISI KVT.KOM SEBAGAI EDUKASI</div>
            <p className="text-sm text-comic-black leading-relaxed">
              Platform edukasi yang tidak hanya mengajarkan teori, tapi memfasilitasi praktik nyata,
              kolaborasi antar-siswa, dan mentoring dari praktisi aktif di industri.
            </p>
          </div>
          <ComicGrid panels={[
            { icon: '🎬', title: 'Video Learning', text: 'Materi pembelajaran video berkualitas dengan subtitle dan catatan.', color: '#8b5cf6', bg: '#f5f0ff' },
            { icon: '💻', title: 'Live Coding', text: 'Sesi coding langsung bersama mentor yang bisa diikuti secara interaktif.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🏆', title: 'Sertifikat Digital', text: 'Sertifikasi kompetensi yang diakui industri dengan verifikasi blockchain.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '🤝', title: 'Proyek Kolaborasi', text: 'Belajar dengan mengerjakan proyek nyata bersama rekan satu kelas.', color: '#22c55e', bg: '#f0fdf4' },
          ]} />
        </div>
        <div>
          <div className="comic-panel-dark p-6">
            <div className="font-comic text-xl text-white mb-4">📊 KURIKULUM KVT.KOM</div>
            {[
              { level: 'Pemula', topics: ['HTML/CSS Dasar', 'Git & GitHub', 'Desain UI Dasar'], color: '#22c55e' },
              { level: 'Menengah', topics: ['PHP & Laravel', 'JavaScript', 'Database MySQL'], color: '#1a5cff' },
              { level: 'Mahir', topics: ['Next.js & React', 'REST API', 'DevOps Dasar'], color: '#f59e0b' },
              { level: 'Expert', topics: ['System Design', 'IoT Integration', 'AI/ML Basic'], color: '#e63329' },
            ].map((l, i) => (
              <div key={l.level} className="mb-4">
                <div className="font-comic text-sm mb-2" style={{ color: l.color }}>LEVEL {i + 1}: {l.level.toUpperCase()}</div>
                <div className="flex flex-wrap gap-1">
                  {l.topics.map(t => <span key={t} className="text-[10px] font-bold px-2 py-1 text-white" style={{ background: l.color }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ComicPanel>
  )
}

/* ═══════════════════════════════════════════════════
   CHAPTER 23 — STARTUP DIGITAL INDONESIA
═══════════════════════════════════════════════════ */
function Ch23() {
  return (
    <ComicPanel id="ch23" chNum="CHAPTER 23" title="MEMBANGUN STARTUP DIGITAL" color="#f59e0b" bgColor="#fffbeb">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🚀 Dari mimpi mahasiswa ke startup nyata!</div>
          <div className="space-y-4">
            {[
              { phase: 'IDEATION', year: '2024', desc: 'Identifikasi masalah nyata di masyarakat dan brainstorm solusi teknologi.', icon: '💡', color: '#f59e0b', done: true },
              { phase: 'PROTOTYPING', year: '2025', desc: 'Bangun MVP (Minimum Viable Product) dan validasi dengan calon pengguna.', icon: '🔧', color: '#1a5cff', done: true },
              { phase: 'LAUNCHING', year: '2026', desc: 'Rilis produk pertama: KVT.kom dan sistem QRIS donasi.', icon: '🚀', color: '#22c55e', done: false },
              { phase: 'SCALING', year: '2027', desc: 'Ekspansi ke lebih banyak kota dan tambah fitur berdasarkan feedback.', icon: '📈', color: '#e63329', done: false },
            ].map((p, i) => (
              <motion.div key={p.phase} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: false }}
                className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-comic text-white text-sm"
                  style={{ background: p.done ? p.color : '#ccc', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}>
                  {p.done ? '✓' : p.icon}
                </div>
                <div>
                  <div className="font-comic text-base" style={{ color: p.done ? p.color : '#999' }}>{p.phase}</div>
                  <div className="font-bold text-xs text-comic-black/50">{p.year}</div>
                  <div className="text-xs text-comic-black/70 leading-snug">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <ComicGrid panels={[
            { icon: '🎯', title: 'Problem-First', text: 'Selalu mulai dari masalah nyata, bukan teknologi yang keren.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '💰', title: 'Bootstrap First', text: 'Bangun dengan sumber daya minimal sebelum cari investasi.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '👥', title: 'User-Centric', text: 'Pengguna adalah raja — setiap fitur harus meningkatkan hidup mereka.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🔄', title: 'Iterate Fast', text: 'Bangun, ukur, pelajari, ulangi — sampai dapat product-market fit.', color: '#e63329', bg: '#fef2f2' },
          ]} />
        </div>
      </div>
    </ComicPanel>
  )
}

/* ═══════════════════════════════════════════════════
   CHAPTER 24 — TEKNOLOGI UNTUK KEADILAN SOSIAL
═══════════════════════════════════════════════════ */
function Ch24() {
  return (
    <ComicPanel id="ch24" chNum="CHAPTER 24" title="TEKNOLOGI UNTUK KEADILAN SOSIAL" color="#e63329" bgColor="#fef2f2">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">⚖️ Teknologi harus merangkul semua kalangan!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-xl text-comic-black mb-3">🌍 DIGITAL DIVIDE — MASALAH NYATA</div>
            <p className="text-sm text-comic-black leading-relaxed mb-4">
              Masih ada kesenjangan besar antara mereka yang melek teknologi dan yang tidak.
              Tugas kita sebagai developer adalah mempersempit gap ini — bukan memperlebarnya.
            </p>
            {[
              { stat: '73 Juta', label: 'Orang Indonesia belum akses internet layak', icon: '📡' },
              { stat: '30%', label: 'UMKM belum punya kehadiran digital', icon: '🏪' },
              { stat: '40%', label: 'Desa belum punya website resmi', icon: '🏘️' },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-4 p-3 mb-2 bg-white" style={{ border: '2px solid #e63329' }}>
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <div className="font-comic text-xl text-comic-blue">{s.stat}</div>
                  <div className="text-xs font-bold text-comic-black/60">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <ComicGrid panels={[
            { icon: '♿', title: 'Aksesibilitas', text: 'Website yang bisa digunakan oleh semua orang, termasuk penyandang disabilitas.', color: '#e63329', bg: '#fef2f2' },
            { icon: '📱', title: 'Mobile-First', text: 'Desain untuk HP low-end karena mayoritas pengguna Indonesia akses lewat HP.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '💸', title: 'Harga Terjangkau', text: 'Layanan teknologi yang bisa diakses UMKM dan desa dengan budget minimal.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '🔤', title: 'Bahasa Lokal', text: 'Interface dalam bahasa Indonesia dan bahasa daerah untuk kemudahan penggunaan.', color: '#f59e0b', bg: '#fffbeb' },
          ]} />
          <div className="comic-panel-dark p-4 mt-4 text-center">
            <div className="font-comic text-xl text-comic-yellow">&ldquo;Teknologi terbaik adalah yang tidak terasa seperti teknologi.&rdquo;</div>
          </div>
        </div>
      </div>
    </ComicPanel>
  )
}

/* ═══════════════════════════════════════════════════
   CHAPTER 25 — KOLABORASI LINTAS BIDANG
═══════════════════════════════════════════════════ */
function Ch25() {
  return (
    <ComicPanel id="ch25" chNum="CHAPTER 25" title="KOLABORASI LINTAS BIDANG" color="#0891b2" bgColor="#ecfeff">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🤝 Developer terbaik adalah yang bisa bicara dengan siapapun!</div>
          <div className="space-y-3">
            {[
              { field: 'Developer + Desainer', result: 'Produk yang fungsional sekaligus indah', icon: '🎨' },
              { field: 'Developer + Pemerintah', result: 'Sistem administrasi yang efisien dan transparan', icon: '🏛️' },
              { field: 'Developer + UMKM', result: 'Bisnis lokal yang bisa bersaing di era digital', icon: '🏪' },
              { field: 'Developer + Akademisi', result: 'Penelitian yang bisa diimplementasikan ke produk nyata', icon: '🔬' },
              { field: 'Developer + NGO', result: 'Dampak sosial yang terukur dan scalable', icon: '🌱' },
              { field: 'Developer + Komunitas', result: 'Teknologi yang benar-benar dibutuhkan dan diadopsi', icon: '👥' },
            ].map((c, i) => (
              <motion.div key={c.field} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: false }}
                className="flex gap-3 p-3 bg-white" style={{ border: '2px solid #0891b2', boxShadow: '3px 3px 0 #0891b2' }}>
                <span className="text-2xl flex-shrink-0">{c.icon}</span>
                <div>
                  <div className="font-bold text-xs text-comic-blue">{c.field}</div>
                  <div className="text-xs text-comic-black/60">→ {c.result}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <ComicGrid panels={[
            { icon: '🌐', title: 'Open Minded', text: 'Setiap bidang punya masalah unik yang butuh solusi unik juga.', color: '#0891b2', bg: '#ecfeff' },
            { icon: '💬', title: 'Komunikasi', text: 'Kemampuan menjelaskan hal teknis ke orang non-teknis adalah superpower.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🔗', title: 'Bridge Builder', text: 'Developer sebagai jembatan antara kebutuhan bisnis dan solusi teknis.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '💡', title: 'Creative Problem', text: 'Solusi terbaik sering lahir dari pertemuan perspektif yang berbeda.', color: '#f59e0b', bg: '#fffbeb' },
          ]} />
          <div className="comic-panel-yellow p-4 mt-4 text-center">
            <div className="font-comic text-base text-comic-black">🎯 KOLABORASI AKTIF SAAT INI</div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {['Kampus ITSM', 'Digital Creator', 'Gov. Project', 'KVT Community'].map(c => (
                <span key={c} className="font-bold text-xs px-3 py-1.5 text-comic-black bg-white" style={{ border: '2px solid #0891b2' }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ComicPanel>
  )
}

export default function ChaptersGroup1() {
  return (
    <>
      <div className="comic-divider" /><Ch16 />
      <div className="comic-divider" /><Ch17 />
      <div className="comic-divider" /><Ch18 />
      <div className="comic-divider" /><Ch19 />
      <div className="comic-divider" /><Ch20 />
      <div className="comic-divider" /><Ch21 />
      <div className="comic-divider" /><Ch22 />
      <div className="comic-divider" /><Ch23 />
      <div className="comic-divider" /><Ch24 />
      <div className="comic-divider" /><Ch25 />
    </>
  )
}
