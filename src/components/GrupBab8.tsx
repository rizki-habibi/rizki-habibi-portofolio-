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

function PanelGrid({ items, cols = 3 }: { items: { icon: string; judul: string; teks: string; warna: string; bg: string }[]; cols?: number }) {
  const kelasGrid = cols === 2 ? 'grid sm:grid-cols-2 gap-4' : cols === 4 ? 'grid sm:grid-cols-2 lg:grid-cols-4 gap-4' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4'
  return (
    <div className={kelasGrid}>
      {items.map((butir, i) => (
        <motion.div key={butir.judul}
          initial={{ opacity: 0, y: 25, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: i * 0.07, type: 'spring', stiffness: 140 }}
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{ y: -5, rotate: i % 2 === 0 ? -1 : 1 }}
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

// --- CHAPTER 81: SKRIPSI FIGHTER ---------------------------------------------
function Ch81() {
  const tahapan = [
    { stage: 'Proposal', status: '✅ DONE', icon: '📝', desc: 'Judul skripsi disetujui. Tema: Sistem Informasi berbasis AI untuk optimasi data KVT', warna: '#22c55e' },
    { stage: 'BAB I-III', status: '✅ DONE', icon: '📚', desc: 'Pendahuluan, Kajian Pustaka, dan Metodologi Penelitian selesai dikerjakan', warna: '#1a5cff' },
    { stage: 'BAB IV-V', status: '🔥 IN PROGRESS', icon: '⚙️', desc: 'Implementasi sistem dan analisis hasil pengujian -- coding sambil nulis!', warna: '#f59e0b' },
    { stage: 'Sidang', status: '⏳ SOON', icon: '🎯', desc: 'Target: Sidang skripsi sebelum akhir 2026. Bismillah semua lancar!', warna: '#8b5cf6' },
    { stage: 'Wisuda', status: '🌟 DREAM', icon: '🎓', desc: 'S.Kom. -- Sarjana Komputer. Keluarga bangga, orang tua tersenyum!', warna: '#ffd700' },
  ]
  return (
    <PanelBab id="ch81" chNum="CHAPTER 81" judul="SKRIPSI FIGHTER -- PERTARUNGAN TERAKHIR" warna="#e63329" latarBelakang="#fef2f2">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-5">
            📝 &ldquo;Skripsi bukan musuh -- dia adalah boss final yang wajib dikalahkan!&rdquo;
          </div>
          <div className="space-y-3">
            {tahapan.map((tahap, i) => (
              <motion.div key={tahap.stage}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 p-3"
                style={{ border: `3px solid ${tahap.warna}`, boxShadow: `4px 4px 0 ${tahap.warna}`, background: 'white' }}>
                <div className="w-10 h-10 flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: tahap.warna, border: '2px solid #0a0a0a' }}>{tahap.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-comic text-sm text-[#0a0a0a]">{tahap.stage}</span>
                    <span className="font-comic text-[9px] text-white px-1.5 py-0.5"
                      style={{ background: tahap.warna }}>{tahap.status}</span>
                  </div>
                  <p className="text-[11px] font-bold text-[#0a0a0a]/60 mt-0.5 leading-snug">{tahap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="comic-panel-dark p-5">
            <div className="font-comic text-xl text-white mb-3">🧠 TOPIK PENELITIAN</div>
            <div className="space-y-3">
              {[
                { label: 'Judul', val: 'Sistem Informasi Akademik Berbasis Web dengan Integrasi AI untuk Optimasi Manajemen Data', warna: '#ffd700' },
                { label: 'Bidang', val: 'Sistem & Teknologi Informasi', warna: '#1a5cff' },
                { label: 'Metode', val: 'Waterfall + Agile Hybrid', warna: '#22c55e' },
                { label: 'Tools', val: 'Laravel, Next.js, MySQL, Python (ML)', warna: '#f59e0b' },
              ].map(item => (
                <div key={item.label}>
                  <div className="font-comic text-[9px] tracking-widest mb-0.5" style={{ color: item.warna }}>{item.label.toUpperCase()}</div>
                  <div className="text-xs font-bold text-white/80">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-base text-[#0a0a0a] mb-2">💪 MOTIVASI SKRIPSI</div>
            <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">
              &ldquo;Setiap developer yang diingat bukan karena gelarnya, tapi karena dampak karyanya. Skripsi ini adalah fondasi -- bukan puncak -- dari perjalanan panjang yang baru dimulai.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 82: KVT.KOM PLATFORM DETAIL -------------------------------------
function Ch82() {
  const fitur = [
    { icon: '🎓', judul: 'Sistem Kurikulum', teks: 'Kurikulum terstruktur dari Pemula hingga Expert dengan jalur belajar yang dipersonalisasi AI', warna: '#1a5cff', bg: '#e8f0ff' },
    { icon: '🎬', judul: 'Live Session', teks: 'Kelas langsung dengan mentor aktif industri, sesi Q&A real-time, dan rekaman otomatis', warna: '#e63329', bg: '#fef2f2' },
    { icon: '🏆', judul: 'Sertifikasi Digital', teks: 'Sertifikat terverifikasi blockchain yang diakui industri -- bukan sekadar PDF biasa', warna: '#ffd700', bg: '#fffbeb' },
    { icon: '🤝', judul: 'Komunitas Aktif', teks: 'Forum diskusi, peer review kode, hackathon bulanan, dan job board khusus alumni KVT', warna: '#22c55e', bg: '#f0fdf4' },
    { icon: '🤖', judul: 'AI Tutor', teks: 'Asisten AI yang membantu belajar 24/7 -- review kode otomatis, hint, dan penjelasan konsep', warna: '#8b5cf6', bg: '#f5f0ff' },
    { icon: '💼', judul: 'Career Portal', teks: 'Portal karir khusus: job matching, portfolio showcase, dan koneksi langsung ke perusahaan mitra', warna: '#0891b2', bg: '#ecfeff' },
  ]
  return (
    <PanelBab id="ch82" chNum="CHAPTER 82" judul="KVT.KOM -- PLATFORM KAMPUS DIGITAL" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🌐 KVT.kom: bukan sekadar platform belajar -- ini ekosistem developer masa depan!
      </div>
      <PanelGrid items={fitur} />
      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        {[
          { label: 'Target Pengguna 2027', val: '10.000+', icon: '👥', warna: '#8b5cf6' },
          { label: 'Kota Target', val: '10 Kota', icon: '🌆', warna: '#1a5cff' },
          { label: 'Mitra Industri', val: '50+ Perusahaan', icon: '🏢', warna: '#22c55e' },
        ].map(s => (
          <div key={s.label} className="text-center p-4"
            style={{ border: `3px solid ${s.warna}`, boxShadow: `4px 4px 0 ${s.warna}`, background: 'white' }}>
            <div className="text-3xl mb-1">{s.icon}</div>
            <div className="font-comic text-2xl" style={{ color: s.warna }}>{s.val}</div>
            <div className="text-xs font-bold text-[#0a0a0a]/50">{s.label}</div>
          </div>
        ))}
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 83: VISI PENDIDIKAN DIGITAL -------------------------------------
function Ch83() {
  return (
    <PanelBab id="ch83" chNum="CHAPTER 83" judul="VISI PENDIDIKAN DIGITAL INDONESIA" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">
            📚 Indonesia punya 270 juta jiwa -- bayangkan potensinya jika semua punya akses pendidikan digital berkualitas!
          </div>
          <div className="space-y-3">
            {[
              { masalah: 'Akses pendidikan tidak merata', solusi: 'Platform digital yang bisa diakses dari HP biasa dengan kuota minimal', warna: '#1a5cff' },
              { masalah: 'Kurikulum tidak relevan industri', solusi: 'Kurikulum real-time yang diperbarui bersama perusahaan mitra aktif', warna: '#22c55e' },
              { masalah: 'Guru/mentor terbatas', solusi: 'AI Tutor + mentor dari komunitas yang terlatih dan tersertifikasi', warna: '#f59e0b' },
              { masalah: 'Biaya pendidikan mahal', solusi: 'Model freemium: konten dasar gratis, premium terjangkau dengan beasiswa', warna: '#8b5cf6' },
              { masalah: 'Gap skill industri vs lulusan', solusi: 'Project-based learning dengan studi kasus dari industri nyata', warna: '#e63329' },
            ].map((item, i) => (
              <motion.div key={item.masalah}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-3"
                style={{ border: `2px solid ${item.warna}`, boxShadow: `3px 3px 0 ${item.warna}`, background: 'white' }}>
                <div className="text-[10px] font-bold text-[#0a0a0a]/40 mb-0.5">❌ MASALAH</div>
                <div className="font-bold text-xs text-[#0a0a0a] mb-1">{item.masalah}</div>
                <div className="text-[10px] font-bold mb-0.5" style={{ color: item.warna }}>✅ SOLUSI KVT.KOM</div>
                <div className="text-xs font-bold text-[#0a0a0a]/70">{item.solusi}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="comic-panel-dark p-6">
          <div className="font-comic text-xl text-white mb-4">🎯 TARGET DAMPAK 2030</div>
          <div className="space-y-4">
            {[
              { angka: '100.000', unit: 'Developer Terlatih', icon: '👨💻', warna: '#ffd700' },
              { angka: '1.000', unit: 'Desa Punya Web', icon: '🏘️', warna: '#22c55e' },
              { angka: '50.000', unit: 'Lapangan Kerja Baru', icon: '💼', warna: '#1a5cff' },
              { angka: '500', unit: 'Startup Lahir dari KVT', icon: '🚀', warna: '#f59e0b' },
            ].map(t => (
              <div key={t.unit} className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: t.warna, border: '2px solid #0a0a0a' }}>{t.icon}</div>
                <div>
                  <div className="font-comic text-xl" style={{ color: t.warna }}>{t.angka}+</div>
                  <div className="text-xs text-white/60 font-bold">{t.unit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 84: PENELITIAN & JURNAL -----------------------------------------
function Ch84() {
  const topikRiset = [
    { topik: 'Optimasi Query Database dengan AI', status: 'IN PROGRESS', warna: '#1a5cff', icon: '🗄️' },
    { topik: 'Sistem Rekomendasi Kurikulum Adaptif', status: 'PLANNING', warna: '#8b5cf6', icon: '🤖' },
    { topik: 'Analisis Sentimen Komunitas Developer Indonesia', status: 'IDEA', warna: '#22c55e', icon: '💬' },
    { topik: 'IoT untuk Smart Campus Management', status: 'PROTOTYPE', warna: '#f59e0b', icon: '🏫' },
    { topik: 'Security Audit Otomatis via Machine Learning', status: 'IDEA', warna: '#e63329', icon: '🔐' },
  ]
  return (
    <PanelBab id="ch84" chNum="CHAPTER 84" judul="PENELITIAN & DUNIA AKADEMIK" warna="#0891b2" latarBelakang="#ecfeff">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">
            🔬 Penelitian yang baik bukan hanya untuk nilai -- tapi untuk mengubah dunia!
          </div>
          <PanelGrid items={[
            { icon: '📄', judul: 'Publikasi Jurnal', teks: 'Target publikasi di jurnal nasional terakreditasi Sinta 2-3 tentang web engineering', warna: '#0891b2', bg: '#ecfeff' },
            { icon: '🏆', judul: 'Konferensi Nasional', teks: 'Presentasi paper di seminar nasional informatika 2026-2027', warna: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🤝', judul: 'Kolaborasi Riset', teks: 'Terbuka untuk kolaborasi penelitian lintas kampus dan institusi', warna: '#22c55e', bg: '#f0fdf4' },
          ]} cols={3} />
        </div>
        <div>
          <div className="font-comic text-lg text-[#0a0a0a] mb-3">🔭 TOPIK RISET AKTIF & RENCANA</div>
          <div className="space-y-2.5">
            {topikRiset.map((t, i) => (
              <motion.div key={t.topik}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3"
                style={{ border: `2px solid ${t.warna}`, boxShadow: `3px 3px 0 ${t.warna}`, background: 'white' }}>
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-xs text-[#0a0a0a] leading-snug">{t.topik}</div>
                </div>
                <span className="font-comic text-[9px] text-white px-1.5 py-0.5 flex-shrink-0"
                  style={{ background: t.warna }}>{t.status}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 85: KEUANGAN MAHASISWA ------------------------------------------
function Ch85() {
  const tips = [
    { icon: '📊', judul: 'Budgeting Sederhana', teks: '50% kebutuhan pokok, 30% pendidikan & skill, 20% tabungan. Disiplin dari sekarang!', warna: '#22c55e', bg: '#f0fdf4' },
    { icon: '💻', judul: 'Freelance Coding', teks: 'Skill coding bisa menghasilkan uang dari sekarang. Fiverr, Upwork, dan komunitas lokal tersedia!', warna: '#1a5cff', bg: '#e8f0ff' },
    { icon: '🎓', judul: 'Beasiswa Aktif', teks: 'Selalu cari dan daftar beasiswa. Digital Talent, LPDP, Bidikmisi, dan program internasional', warna: '#f59e0b', bg: '#fffbeb' },
    { icon: '📱', judul: 'Aset Digital', teks: 'Mulai bangun portofolio digital sekarang -- portfolio yang kuat = investasi jangka panjang', warna: '#8b5cf6', bg: '#f5f0ff' },
    { icon: '🛒', judul: 'Smart Spending', teks: 'Beli tool/course yang benar-benar digunakan. Freemium dulu, premium kalau sudah yakin', warna: '#e63329', bg: '#fef2f2' },
    { icon: '🌱', judul: 'Investasi Ilmu', teks: 'Ilmu adalah aset terbaik mahasiswa. Satu kursus gratis bisa buka pintu rezeki tak terduga', warna: '#0891b2', bg: '#ecfeff' },
  ]
  return (
    <PanelBab id="ch85" chNum="CHAPTER 85" judul="KEUANGAN MAHASISWA -- CERDAS FINANSIAL" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        💰 Mahasiswa miskin bukan alasan -- tapi modal kreativitas selalu ada!
      </div>
      <PanelGrid items={tips} />
      <div className="mt-6 comic-panel-dark p-5">
        <div className="font-comic text-xl text-white mb-3">💡 PENGHASILAN SAMPINGAN DEVELOPER</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { cara: 'Jasa Pembuatan Website', range: 'Rp 500K - 5JT', icon: '🌐' },
            { cara: 'Freelance Design', range: 'Rp 100K - 500K', icon: '🎨' },
            { cara: 'Tutor Coding', range: 'Rp 50K - 200K/jam', icon: '📚' },
            { cara: 'Content Creator Tech', range: 'Passive Income', icon: '📱' },
          ].map(p => (
            <div key={p.cara} className="text-center p-3 bg-white/10 border border-white/20">
              <div className="text-2xl mb-1">{p.icon}</div>
              <div className="font-bold text-xs text-white">{p.cara}</div>
              <div className="font-comic text-[10px] text-yellow-400">{p.range}</div>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 86: PRODUKTIVITAS & WORKFLOW ------------------------------------
function Ch86() {
  const tools = [
    { nama: 'Notion', fungsi: 'Manajemen catatan, to-do list, dan database proyek', icon: '📓', warna: '#0a0a0a', bg: '#f0f0eb' },
    { nama: 'VS Code', fungsi: 'IDE utama dengan ekstensi lengkap untuk web dev', icon: '💻', warna: '#007ACC', bg: '#e8f4ff' },
    { nama: 'Figma', fungsi: 'Desain UI/UX wireframe dan prototype sebelum coding', icon: '🎭', warna: '#F24E1E', bg: '#fef2ef' },
    { nama: 'Git & GitHub', fungsi: 'Version control dan kolaborasi kode -- wajib developer', icon: '🐙', warna: '#0a0a0a', bg: '#f0f0eb' },
    { nama: 'Postman', fungsi: 'Testing API endpoint sebelum diintegrasikan ke frontend', icon: '📮', warna: '#ef5b25', bg: '#fef2ee' },
    { nama: 'ChatGPT / AI', fungsi: 'Partner diskusi, review kode, dan generate boilerplate', icon: '🤖', warna: '#10a37f', bg: '#edfaf5' },
    { nama: 'Trello', fungsi: 'Kanban board untuk tracking progress proyek dan sprint', icon: '📋', warna: '#0052cc', bg: '#eef3ff' },
    { nama: 'Laragon', fungsi: 'Local development environment terbaik untuk PHP/Laravel', icon: '🖥️', warna: '#f59e0b', bg: '#fffbeb' },
  ]
  return (
    <PanelBab id="ch86" chNum="CHAPTER 86" judul="WORKFLOW DEVELOPER -- SETUP PRODUKTIF" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">
        ⚡ Setup yang tepat = produktivitas 3x lipat tanpa kerja 3x lebih keras!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {tools.map((t, i) => (
          <motion.div key={t.nama}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="p-3"
            style={{ border: `2px solid ${t.warna}`, boxShadow: `3px 3px 0 ${t.warna}`, background: t.bg }}>
            <div className="text-2xl mb-1.5">{t.icon}</div>
            <div className="font-comic text-xs mb-1" style={{ color: t.warna }}>{t.nama}</div>
            <p className="text-[10px] font-bold text-[#0a0a0a]/60 leading-snug">{t.fungsi}</p>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-blue p-5">
        <div className="font-comic text-lg text-[#0a0a0a] mb-3">🕐 RUTINITAS HARIAN DEVELOPER</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { waktu: '07.00', aktivitas: 'Review todo list & prioritas hari ini di Notion', icon: '☀️' },
            { waktu: '08.00', aktivitas: 'Coding session 1 -- fitur baru atau bug fix', icon: '💻' },
            { waktu: '12.00', aktivitas: 'Istirahat, makan, scrolling news tech', icon: '🍽️' },
            { waktu: '13.00', aktivitas: 'Coding session 2 -- review PR / dokumentasi', icon: '⚙️' },
            { waktu: '17.00', aktivitas: 'Belajar hal baru: tutorial, artikel, atau kursus', icon: '📚' },
            { waktu: '21.00', aktivitas: 'Side project / KVT.kom -- waktu paling produktif!', icon: '🌙' },
          ].map(r => (
            <div key={r.waktu} className="flex items-center gap-2">
              <span className="font-comic text-sm text-[#1a5cff] flex-shrink-0 w-12">{r.waktu}</span>
              <span className="text-base flex-shrink-0">{r.icon}</span>
              <span className="text-xs font-bold text-[#0a0a0a]/70">{r.aktivitas}</span>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 87: PENGALAMAN ORGANISASI ---------------------------------------
function Ch87() {
  const orgs = [
    { nama: 'Himpunan Mahasiswa Informatika', peran: 'Anggota Aktif', tahun: '2023-2025', kontribusi: 'Bantu organise event seminar teknologi dan workshop coding untuk junior', icon: '🏛️', warna: '#1a5cff' },
    { nama: 'Tim Pengembang Web Kampus', peran: 'Frontend Developer', tahun: '2024', kontribusi: 'Develop dan maintain website kampus dengan Next.js dan Tailwind CSS', icon: '🌐', warna: '#22c55e' },
    { nama: 'Komunitas Developer Jember', peran: 'Member', tahun: '2024-2026', kontribusi: 'Aktif sharing knowledge di meetup bulanan dan online forum', icon: '👥', warna: '#8b5cf6' },
    { nama: 'Digital Talent Scholarship', peran: 'Peserta Aktif', tahun: '2025', kontribusi: 'Selesaikan 75+ modul dan jadi salah satu peserta dengan nilai tertinggi', icon: '🎓', warna: '#f59e0b' },
  ]
  return (
    <PanelBab id="ch87" chNum="CHAPTER 87" judul="ORGANISASI & PENGALAMAN NYATA" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">
        🏛️ Organisasi adalah laboratorium kepemimpinan -- tempat skill nyata diasah!
      </div>
      <div className="space-y-4 mb-8">
        {orgs.map((o, i) => (
          <motion.div key={o.nama}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, type: 'spring', stiffness: 130 }}
            viewport={{ once: true }}
            className="flex gap-4 p-4"
            style={{ border: `3px solid ${o.warna}`, boxShadow: `5px 5px 0 ${o.warna}`, background: 'white' }}>
            <div className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: o.warna, border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}>{o.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <div>
                  <div className="font-comic text-base text-[#0a0a0a]">{o.nama}</div>
                  <div className="font-bold text-xs" style={{ color: o.warna }}>{o.peran}  {o.tahun}</div>
                </div>
              </div>
              <p className="text-xs font-bold text-[#0a0a0a]/60 mt-1 leading-relaxed">{o.kontribusi}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <PanelGrid items={[
        { icon: '🗣️', judul: 'Public Speaking', teks: 'Terbiasa presentasi di depan puluhan orang sejak aktif di organisasi kampus', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '📋', judul: 'Event Management', teks: 'Pernah jadi panitia inti seminar teknologi dengan 200+ peserta', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🤝', judul: 'Networking', teks: 'Jaringan luas dengan mahasiswa, dosen, dan profesional di bidang IT Jember', warna: '#8b5cf6', bg: '#f5f0ff' },
      ]} />
    </PanelBab>
  )
}

// --- CHAPTER 88: CERITA AWAL CODING ------------------------------------------
function Ch88() {
  const momen = [
    { tahun: '2020', judul: 'Kenalan HTML', cerita: 'Pertama kali buka Notepad, ketik <h1>Hello World</h1>, buka di browser... AJAIB! Teks muncul besar. Itu momen yang mengubah segalanya.', warna: '#e63329', icon: '🌐' },
    { tahun: '2021', judul: 'PHP Pertama', cerita: 'PHP terasa seperti sihir -- kode bisa ngobrol sama database! echo "Hello" dari PHP terasa lebih keren dari HTML biasa.', warna: '#8b5cf6', icon: '🐘' },
    { tahun: '2022', judul: 'Kenal Laravel', cerita: 'Laravel mengubah cara pandang tentang web development. MVC, Eloquent, Artisan -- dunia baru yang terasa impossible tapi menarik banget!', warna: '#FF2D20', icon: '🔴' },
    { tahun: '2023', judul: 'Proyek Pertama', cerita: 'Client pertama: sistem inventaris sederhana. Dibayar Rp 500K. Uang pertama dari coding -- rasanya 10x lebih berharga dari gaji manapun!', warna: '#22c55e', icon: '💰' },
    { tahun: '2024', judul: 'Next.js & Full Stack', cerita: 'Eksplorasi React, Next.js, TypeScript. Dunia frontend modern ternyata lebih dalam dari yang dibayangkan. Down the rabbit hole!', warna: '#1a5cff', icon: '⚛️' },
    { tahun: '2025', judul: 'BNSP & 75+ Sertifikat', cerita: 'Sertifikasi BNSP resmi. Buktikan kemampuan secara nasional. Plus 75+ pelatihan yang memperluas wawasan ke AI, Cloud, Security.', warna: '#ffd700', icon: '🏆' },
  ]
  return (
    <PanelBab id="ch88" chNum="CHAPTER 88" judul="ASAL MULA -- KISAH PERTAMA CODING" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-6">
        💻 Semua developer hebat pernah bingung dengan Hello World. Ini cerita saya!
      </div>
      <div className="relative">
        <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5"
          style={{ background: 'repeating-linear-gradient(180deg,#e63329 0,#e63329 6px,transparent 6px,transparent 12px)' }} />
        <div className="space-y-4 pl-14 sm:pl-16">
          {momen.map((m, i) => (
            <motion.div key={m.tahun}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              viewport={{ once: true }}
              className="relative">
              <div className="absolute -left-10 sm:-left-12 top-2 w-8 h-8 flex items-center justify-center font-comic text-xs text-white"
                style={{ background: m.warna, border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}>
                {m.icon}
              </div>
              <div className="p-4"
                style={{ border: `3px solid ${m.warna}`, boxShadow: `4px 4px 0 ${m.warna}`, background: 'white' }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-comic text-sm" style={{ color: m.warna }}>{m.tahun}</span>
                  <span className="font-comic text-base text-[#0a0a0a]">{m.judul}</span>
                </div>
                <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed italic">&ldquo;{m.cerita}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 89: MENTOR & ROLE MODEL -----------------------------------------
function Ch89() {
  const mentors = [
    { nama: 'Taylor Otwell', peran: 'Kreator Laravel', pelajaran: 'Kesederhanaan adalah kekuatan. Laravel membuat yang kompleks terasa mudah -- itulah seni engineering.', icon: '🔴', warna: '#FF2D20' },
    { nama: 'Linus Torvalds', peran: 'Kreator Linux & Git', pelajaran: 'Talk is cheap, show me the code. Kontribusi nyata lebih berbicara dari seribu kata-kata.', icon: '🐧', warna: '#0a0a0a' },
    { nama: 'Vercel Team', peran: 'Kreator Next.js', pelajaran: 'Developer experience adalah segalanya. Alat yang baik membuat developer bisa fokus pada hal yang penting.', icon: '▲', warna: '#1a1a1a' },
    { nama: 'Dosen Pembimbing', peran: 'Mentor Akademik', pelajaran: 'Riset yang baik dimulai dari pertanyaan yang tepat, bukan jawaban yang ingin dibuktikan.', icon: '👨🏫', warna: '#1a5cff' },
    { nama: 'Komunitas Laravel ID', peran: 'Komunitas Online', pelajaran: 'Berbagi pengetahuan bukan melemahkan posisi kita -- justru memperkuat seluruh ekosistem.', icon: '🤝', warna: '#22c55e' },
  ]
  return (
    <PanelBab id="ch89" chNum="CHAPTER 89" judul="MENTOR & INSPIRASI -- YANG MEMBENTUK SAYA" warna="#1a5cff" latarBelakang="#e8f0ff">
      <motion.div
        className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 150 }}
        viewport={{ once: true, amount: 0.3 }}>
        🌟 Tidak harus kenal langsung untuk terinspirasi -- karya mereka adalah guru terbaik!
      </motion.div>
      <div className="space-y-4">
        {mentors.map((m, i) => (
          <motion.div key={m.nama}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: i * 0.12, type: 'spring', stiffness: 120, damping: 14 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ x: 8, scale: 1.02 }}
            className="flex gap-4 p-4"
            style={{ border: `3px solid ${m.warna}`, boxShadow: `5px 5px 0 ${m.warna}`, background: 'white' }}>
            <motion.div
              className="w-12 h-12 flex items-center justify-center text-2xl font-comic text-white flex-shrink-0"
              style={{ background: m.warna, border: '2px solid #0a0a0a' }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}>
              {m.icon}
            </motion.div>
            <div>
              <div className="font-comic text-base text-[#0a0a0a]">{m.nama}</div>
              <div className="text-[10px] font-bold text-[#0a0a0a]/50 mb-1">{m.peran}</div>
              <p className="text-xs font-bold text-[#0a0a0a]/70 italic leading-relaxed">&ldquo;{m.pelajaran}&rdquo;</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// --- CHAPTER 90: KELUARGA & DUKUNGAN -----------------------------------------
function Ch90() {
  return (
    <PanelBab id="ch90" chNum="CHAPTER 90" judul="KELUARGA -- KEKUATAN DI BALIK SEMUA" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="thought-bubble inline-block text-sm mb-4 text-[#0a0a0a]">
            💛 Di balik setiap baris kode, ada keluarga yang mendoakan dan mendukung
          </div>
          <div className="space-y-4">
            {[
              { peran: 'Orang Tua', kontribusi: 'Pengorbanan tanpa syarat -- membiayai pendidikan, mendoakan setiap saat, dan tidak pernah berhenti percaya', icon: '👨👩👦', warna: '#ffd700' },
              { peran: 'Keluarga Besar', kontribusi: 'Dukungan moral yang membuat semangat tidak pernah padam, meski jalan terasa berat', icon: '🏠', warna: '#22c55e' },
              { peran: 'Sahabat Dekat', kontribusi: 'Teman diskusi, teman begadang ngoding, dan teman yang selalu ada saat butuh semangat ekstra', icon: '🤝', warna: '#1a5cff' },
              { peran: 'Komunitas Online', kontribusi: 'Ribuan developer di seluruh dunia yang tidak pernah pelit berbagi pengetahuan secara gratis', icon: '🌐', warna: '#8b5cf6' },
            ].map((k, i) => (
              <motion.div key={k.peran}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 p-3"
                style={{ border: `2px solid ${k.warna}`, boxShadow: `3px 3px 0 ${k.warna}`, background: '#1a1a1a' }}>
                <span className="text-2xl flex-shrink-0">{k.icon}</span>
                <div>
                  <div className="font-comic text-sm" style={{ color: k.warna }}>{k.peran}</div>
                  <p className="text-xs text-white/60 font-bold leading-relaxed">{k.kontribusi}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
            className="p-6 text-center"
            style={{ border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd700', background: '#111', borderRadius: 16 }}>
            <div className="text-5xl mb-4">💛</div>
            <div className="font-comic text-2xl text-yellow-400 mb-3">UNTUK KELUARGAKU</div>
            <p className="text-sm text-white/80 font-bold leading-relaxed italic">
              &ldquo;Semua chapter dalam portofolio ini -- setiap baris kode, setiap sertifikat, setiap malam begadang -- saya persembahkan untuk orang tua yang tidak pernah berhenti berjuang untuk saya.
              Gelar S.Kom. yang akan datang adalah hadiah terbaik yang bisa saya berikan.&rdquo;
            </p>
            <div className="mt-4 font-comic text-yellow-400">-- Rizki Habibi, 2026</div>
          </motion.div>
        </div>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup8() {
  return (
    <>
      <div className="comic-divider" />
      <Ch81 /><div className="comic-divider" />
      <Ch82 /><div className="comic-divider" />
      <Ch83 /><div className="comic-divider" />
      <Ch84 /><div className="comic-divider" />
      <Ch85 /><div className="comic-divider" />
      <Ch86 /><div className="comic-divider" />
      <Ch87 /><div className="comic-divider" />
      <Ch88 /><div className="comic-divider" />
      <Ch89 /><div className="comic-divider" />
      <Ch90 />
    </>
  )
}
