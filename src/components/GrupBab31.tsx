'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import HeaderBab from '@/components/HeaderBab'

// Wrapper panel
function PanelBab({ id, num, judul, warna, bg, gelap = false, children }: {
  id: string; num: string; judul: string; warna: string; bg: string; gelap?: boolean; children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden" style={{ background: gelap ? '#0a0a0a' : bg }}>
      {gelap ? <div className="halftone-yellow" /> : <div className="halftone-bg" />}
      <div className="max-w-6xl mx-auto relative z-10">
        <HeaderBab nomor={num} judul={judul} warna={gelap ? '#ffd700' : warna} gelap={gelap} />
        {children}
      </div>
    </section>
  )
}

// Card reusable
function KartuInfo({ icon, judul, teks, warna, bg }: { icon: string; judul: string; teks: string; warna: string; bg: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: 'spring', stiffness: 120 }}
      whileHover={{ y: -5 }}
      className="overflow-hidden"
      style={{ border: `3px solid ${warna}`, boxShadow: `4px 4px 0 ${warna}`, background: bg }}
    >
      <div className="h-1.5" style={{ background: warna }} />
      <div className="p-4">
        <div className="text-3xl mb-2">{icon}</div>
        <div className="font-comic text-sm mb-1" style={{ color: warna }}>{judul}</div>
        <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{teks}</p>
      </div>
    </motion.div>
  )
}

// ── Ch311 ──────────────────────────────────────────────────────────────
function Ch311() {
  const topik = [
    { icon: '🧘', judul: 'Keseimbangan Kerja-Hidup', teks: 'Produktivitas tinggi bukan berarti kerja terus. Developer yang baik tahu kapan harus berhenti, istirahat, dan kembali segar.', warna: '#22c55e', bg: '#f0fdf4' },
    { icon: '🏃', judul: 'Olahraga sebagai Investasi', teks: 'Tubuh sehat = pikiran jernih = kode lebih baik. Olahraga rutin bukan kemewahan, tapi kebutuhan profesional developer.', warna: '#1a5cff', bg: '#e8f0ff' },
    { icon: '🍱', judul: 'Nutrisi untuk Produktivitas', teks: 'Makanan mempengaruhi fokus dan energi. Junk food marathon coding session = short term gain, long term pain.', warna: '#f59e0b', bg: '#fffbeb' },
    { icon: '😴', judul: 'Tidur adalah Fitur, Bukan Bug', teks: 'Sleep deprivation adalah bug paling mahal. 7-8 jam tidur lebih valuable dari 2 jam coding tambahan dalam kondisi mengantuk.', warna: '#8b5cf6', bg: '#f5f0ff' },
    { icon: '🧠', judul: 'Mental Health Developer', teks: 'Burnout nyata dan serius. Kenali tanda-tandanya: kehilangan minat, kelelahan kronis, produktivitas anjlok. Minta bantuan itu kuat, bukan lemah.', warna: '#e63329', bg: '#fef2f2' },
    { icon: '🌿', judul: 'Digital Detox Berkala', teks: 'Lepas dari layar secara rutin. Alam, buku fisik, atau sekadar jalan kaki — semua ini recharge otak dengan cara yang screen tidak bisa.', warna: '#0891b2', bg: '#ecfeff' },
  ]
  return (
    <PanelBab id="ch311" num="311" judul="DEVELOPER SEHAT — TUBUH & PIKIRAN SEBAGAI ASET UTAMA" warna="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-8">
        💪 Kode terbaik lahir dari developer yang sehat — fisik, mental, dan spiritual seimbang!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {topik.map((t, i) => <KartuInfo key={i} {...t} />)}
      </div>
      <div className="comic-panel-dark p-6 text-center">
        <div className="font-comic text-xl text-white mb-3">📊 FORMULA DEVELOPER PRODUKTIF</div>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: 'Tidur Cukup', val: '8 jam', w: '#22c55e' },
            { label: 'Olahraga', val: '30 mnt/hari', w: '#1a5cff' },
            { label: 'Deep Work', val: '4-6 jam', w: '#ffd700' },
            { label: 'Istirahat', val: 'Pomodoro 25/5', w: '#e63329' },
          ].map(f => (
            <div key={f.label} className="text-center p-3" style={{ border: `2px solid ${f.w}`, background: `${f.w}15`, minWidth: 100 }}>
              <div className="font-comic text-xl" style={{ color: f.w }}>{f.val}</div>
              <div className="text-[10px] text-white/60 font-bold">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// ── Ch312 ──────────────────────────────────────────────────────────────
function Ch312() {
  const tips = [
    { no: '01', judul: 'Mulai dengan "Mengapa"', teks: 'Setiap proyek dimulai dengan pertanyaan: mengapa ini perlu ada? Solusi yang lahir dari pemahaman masalah yang dalam selalu lebih kuat dari yang lahir dari asumsi.', icon: '❓', warna: '#1a5cff' },
    { no: '02', judul: 'Prototype Cepat, Iterasi Sering', teks: 'Jangan sempurnakan di kepala terlalu lama. Buat MVP, test, dapat feedback, perbaiki. Siklus cepat lebih baik dari perencanaan panjang.', icon: '🔄', warna: '#22c55e' },
    { no: '03', judul: 'Dokumentasi sebagai Penghormatan', teks: 'Kode tanpa dokumentasi adalah kode yang egois. Developer masa depan — termasuk dirimu sendiri 6 bulan lagi — akan berterima kasih.', icon: '📝', warna: '#8b5cf6' },
    { no: '04', judul: 'Test Sebelum Ship', teks: 'Testing bukan overhead, tapi investasi. Unit test, integration test, dan UAT memastikan produk yang dikirim tidak merusak kepercayaan user.', icon: '🧪', warna: '#f59e0b' },
    { no: '05', judul: 'Review Kode dengan Empati', teks: 'Code review bukan ajang kritik personal. Fokus pada kode, bukan orangnya. Tujuannya adalah produk yang lebih baik, bukan "menang debat".', icon: '👁️', warna: '#e63329' },
    { no: '06', judul: 'Ship, Learn, Improve', teks: 'Perfectionisme adalah musuh terbesar developer. Kirim, pelajari dari pengguna nyata, perbaiki berdasarkan data — bukan asumsi.', icon: '🚀', warna: '#0891b2' },
  ]
  return (
    <PanelBab id="ch312" num="312" judul="ENGINEERING MINDSET — CARA BERPIKIR DEVELOPER PROFESIONAL" warna="#1a5cff" bg="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-8 text-[#0a0a0a]">
        🧠 Skill teknis bisa dipelajari, tapi mindset yang benar adalah yang membedakan developer biasa dari developer luar biasa.
      </div>
      <div className="space-y-4">
        {tips.map((t, i) => (
          <motion.div
            key={t.no}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            className="flex gap-4 p-4"
            style={{ border: `2px solid ${t.warna}`, background: `${t.warna}0d` }}
          >
            <div className="font-comic text-3xl flex-shrink-0">{t.icon}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-comic text-xs px-2 py-0.5 text-white" style={{ background: t.warna }}>{t.no}</span>
                <span className="font-comic text-sm" style={{ color: t.warna }}>{t.judul}</span>
              </div>
              <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{t.teks}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// ── Ch313 ──────────────────────────────────────────────────────────────
function Ch313() {
  const [buka, setBuka] = useState<number | null>(null)
  const pertanyaan = [
    { q: 'Gelar.id sudah bisa diakses?', a: 'Gelar.id sedang dalam pengembangan aktif. Website sudah ada tapi belum dipublish secara umum. Target launch di 2026 setelah skripsi selesai.' },
    { q: 'Apakah Rizki menerima magang?', a: 'Ya! Rizki terbuka untuk kolaborasi riset, kerja sama pengembangan, dan mentoring. Hubungi via WA atau email untuk diskusi lebih lanjut.' },
    { q: 'Teknologi apa yang paling dikuasai?', a: 'Laravel + PHP untuk backend (90%), Tailwind CSS + Next.js untuk frontend (85%), MySQL untuk database (80%). Juga berpengalaman dengan IoT dan dasar AI/ML.' },
    { q: 'Apakah tersedia untuk full-time?', a: 'Saat ini masih fokus skripsi S1. Namun terbuka untuk part-time remote, freelance project, dan diskusi karir post-graduation di 2027.' },
    { q: 'Bagaimana cara dapat website gratis?', a: 'Bagikan portofolio ini ke minimal 3 teman, lalu hubungi Rizki via WA. Website gratis untuk Vtuber, komunitas, dan instansi berdampak — tanpa biaya apapun.' },
    { q: 'Apa proyek terbesar saat ini?', a: 'SIMPEG SMAN 2 Jember (live di simpeg.sman2jember.sch.id), pengembangan Gelar.id, dan skripsi berbasis Sistem Informasi Kepegawaian dengan metode hybrid.' },
  ]
  return (
    <PanelBab id="ch313" num="313" judul="FAQ LANJUTAN — PERTANYAAN YANG SERING MASUK" warna="#f59e0b" bg="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-8">
        🤔 Pertanyaan-pertanyaan ini sering masuk lewat WA, DM, dan email — jawaban lengkap ada di sini!
      </div>
      <div className="space-y-3">
        {pertanyaan.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.06 }}
            className="overflow-hidden"
            style={{ border: '3px solid #f59e0b', boxShadow: buka === i ? '5px 5px 0 #f59e0b' : '3px 3px 0 #f59e0b' }}
          >
            <button
              onClick={() => setBuka(buka === i ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left font-bold text-sm text-[#0a0a0a]"
              style={{ background: buka === i ? '#f59e0b22' : 'white' }}
            >
              <span>{p.q}</span>
              <motion.span animate={{ rotate: buka === i ? 45 : 0 }} className="text-xl font-comic text-[#f59e0b]">+</motion.span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: buka === i ? 'auto' : 0, opacity: buka === i ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden', background: '#fffbeb' }}
            >
              <p className="px-4 py-3 text-sm text-[#0a0a0a]/70 font-bold leading-relaxed">{p.a}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// ── Ch314 ──────────────────────────────────────────────────────────────
function Ch314() {
  const tools = [
    { kategori: 'Code Editor', items: ['VS Code + Extensions', 'Vim (dasar)', 'GitHub Codespaces'], icon: '💻', warna: '#007ACC' },
    { kategori: 'Version Control', items: ['Git + GitHub', 'GitKraken (GUI)', 'Conventional Commits'], icon: '🔀', warna: '#F05032' },
    { kategori: 'Backend Tools', items: ['Laravel Artisan', 'Postman API Testing', 'TablePlus (DB GUI)'], icon: '⚙️', warna: '#FF2D20' },
    { kategori: 'Frontend Tools', items: ['Figma (Design)', 'Chrome DevTools', 'Tailwind CSS IntelliJ'], icon: '🎨', warna: '#06B6D4' },
    { kategori: 'Deployment', items: ['Vercel (Frontend)', 'Laragon (Local Dev)', 'cPanel / VPS'], icon: '☁️', warna: '#0078d4' },
    { kategori: 'Productivity', items: ['Notion (Notes)', 'Trello (Tasks)', 'Obsidian (PKM)'], icon: '📋', warna: '#22c55e' },
    { kategori: 'AI Assistance', items: ['ChatGPT / Gemini', 'GitHub Copilot', 'Azure OpenAI'], icon: '🤖', warna: '#10a37f' },
    { kategori: 'Communication', items: ['WhatsApp Business', 'Discord Server', 'Telegram Bot'], icon: '💬', warna: '#8b5cf6' },
  ]
  return (
    <PanelBab id="ch314" num="314" judul="ARSENAL LENGKAP — SEMUA TOOLS YANG SAYA PAKAI SEHARI-HARI" warna="#0891b2" bg="#ecfeff">
      <div className="speech-bubble-right inline-block text-sm mb-8 text-[#0a0a0a]">
        🔧 Developer yang baik tahu tools-nya. Developer yang hebat tahu kapan harus pakai dan kapan tidak!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((t, i) => (
          <motion.div
            key={t.kategori}
            initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -5 }}
            className="p-4"
            style={{ border: `3px solid ${t.warna}`, boxShadow: `4px 4px 0 ${t.warna}`, background: 'white' }}
          >
            <div className="text-2xl mb-2">{t.icon}</div>
            <div className="font-comic text-xs mb-2" style={{ color: t.warna }}>{t.kategori}</div>
            <ul className="space-y-1">
              {t.items.map(item => (
                <li key={item} className="text-[11px] text-[#0a0a0a]/70 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: t.warna }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// ── Ch315 ──────────────────────────────────────────────────────────────
function Ch315() {
  const milestones = [
    { tahun: '2020', judul: 'Bab Pertama Dimulai', detail: 'HTML pertama di Notepad. Tidak ada tutorial, tidak ada mentor — hanya rasa ingin tahu yang tidak bisa dihentikan.', icon: '📝', warna: '#1a5cff', done: true },
    { tahun: '2021', judul: 'JavaScript & PHP', detail: 'Mulai belajar logika programming yang sesungguhnya. Form validasi, DOM manipulation, dan PHP native yang raw.', icon: '⚡', warna: '#f59e0b', done: true },
    { tahun: '2022', judul: 'Laravel & Framework', detail: 'Menemukan Laravel — dan jatuh cinta. MVC, Eloquent, Artisan. Mulai membangun proyek nyata yang bisa dipakai orang lain.', icon: '🔥', warna: '#FF2D20', done: true },
    { tahun: '2023', judul: 'Kuliah & Komunitas', detail: 'Masuk S1 Sistem & Teknologi Informasi. Bergabung komunitas developer, ikut seminar, mulai networking yang serius.', icon: '🎓', warna: '#22c55e', done: true },
    { tahun: '2024', judul: 'Next.js & Full Stack', detail: 'Lompat ke ekosistem modern. Next.js, TypeScript, Tailwind. Bangun sistem K-AMU dan portofolio pertama yang proper.', icon: '🚀', warna: '#0a0a0a', done: true },
    { tahun: '2025', judul: 'BNSP & 75+ Sertifikat', detail: 'Sertifikasi BNSP Junior Web Developer. 75+ sertifikat digital. IoT dengan ESP32. SIMPEG SMAN 2 Jember live.', icon: '🏆', warna: '#ffd700', done: true },
    { tahun: '2026', judul: 'Skripsi & Gelar.id', detail: 'Menyelesaikan skripsi berbasis sistem informasi. Launch Gelar.id beta. 310+ chapter portofolio — lebih dari 10 bab novel!', icon: '🌟', warna: '#8b5cf6', done: false },
    { tahun: '2027', judul: 'Wisuda & Karir', detail: 'Target lulus S.Kom. Berkarir sebagai Full Stack Developer atau Tech Entrepreneur. Gelar.id 1.000 pengguna pertama.', icon: '🎉', warna: '#e63329', done: false },
  ]
  return (
    <PanelBab id="ch315" num="315" judul="TIMELINE LENGKAP — PERJALANAN 6 TAHUN CODING" warna="#8b5cf6" bg="#f5f0ff">
      <div className="speech-bubble inline-block text-sm mb-8">
        🗓️ Setiap tahun adalah chapter baru. Setiap baris kode adalah kata dalam cerita yang terus ditulis.
      </div>
      <div className="relative">
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8b5cf6] to-[#e63329]" />
        <div className="space-y-6 pl-12 sm:pl-20">
          {milestones.map((m, i) => (
            <motion.div
              key={m.tahun}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08, type: 'spring' }}
              className="relative"
            >
              <div className="absolute -left-9 sm:-left-13 top-1 flex items-center justify-center w-8 h-8 rounded-full font-comic text-xs text-white"
                style={{ background: m.warna, border: '3px solid white', boxShadow: `0 0 0 2px ${m.warna}` }}>
                {m.done ? '✓' : '→'}
              </div>
              <div className="p-4" style={{ border: `2px solid ${m.warna}`, background: m.done ? `${m.warna}0d` : 'white' }}>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-comic text-xs px-2 py-0.5 text-white" style={{ background: m.warna }}>{m.tahun}</span>
                  <span className="font-comic text-sm" style={{ color: m.warna }}>{m.icon} {m.judul}</span>
                  {!m.done && <span className="text-[9px] font-bold text-white px-1.5 py-0.5 bg-[#e63329]">UPCOMING</span>}
                </div>
                <p className="text-xs font-bold text-[#0a0a0a]/65 leading-relaxed">{m.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// ── Ch316 ──────────────────────────────────────────────────────────────
function Ch316() {
  const prinsip = [
    { p: 'Kode adalah komunikasi — tulis untuk manusia dulu, mesin kemudian.', icon: '💬', w: '#1a5cff' },
    { p: 'Masalah yang tidak dipahami dengan benar tidak akan pernah selesai dengan benar.', icon: '🎯', w: '#e63329' },
    { p: 'Kesederhanaan adalah kecanggihan tertinggi. Kompleksitas yang tidak perlu adalah utang.', icon: '✨', w: '#22c55e' },
    { p: 'Gagal cepat, belajar cepat, bangkit lebih cepat. Kegagalan adalah data, bukan hukuman.', icon: '💪', w: '#f59e0b' },
    { p: 'Teknologi terbaik adalah yang paling tepat untuk masalahnya — bukan yang paling baru.', icon: '🔧', w: '#8b5cf6' },
    { p: 'Keadilan berbasis bukti dan fakta, bukan status dan jabatan.', icon: '⚖️', w: '#0891b2' },
    { p: 'Belajar cara belajar adalah skill paling penting di era AI.', icon: '🧠', w: '#ec4899' },
    { p: 'Bangun hal yang berdampak, bukan hanya yang terlihat keren di portfolio.', icon: '🌍', w: '#ffd700' },
  ]
  return (
    <PanelBab id="ch316" num="316" judul="PRINSIP HIDUP — 8 KEYAKINAN YANG MEMANDU SETIAP KEPUTUSAN" warna="#0891b2" bg="#ecfeff">
      <div className="speech-bubble-right inline-block text-sm mb-8 text-[#0a0a0a]">
        🌟 Prinsip bukan slogan — ini adalah panduan yang diuji oleh pengalaman nyata, bukan dibuat untuk terlihat bijak.
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {prinsip.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ scale: 1.02 }}
            className="flex gap-3 p-4"
            style={{ border: `2px solid ${p.w}`, background: `${p.w}0d` }}
          >
            <span className="text-2xl flex-shrink-0">{p.icon}</span>
            <p className="text-sm font-bold text-[#0a0a0a] leading-relaxed italic">&ldquo;{p.p}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// ── Ch317 ──────────────────────────────────────────────────────────────
function Ch317() {
  return (
    <PanelBab id="ch317" num="317" judul="INDONESIA DIGITAL 2030 — PREDIKSI & PERAN SAYA" warna="#e63329" bg="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-8">
        🔮 Ini bukan sekadar mimpi — ini analisis berbasis tren yang sedang terjadi, dan di mana saya ingin berada.
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="font-comic text-lg text-[#e63329] mb-4">📊 PROYEKSI INDONESIA 2030</div>
          <div className="space-y-3">
            {[
              { label: 'Ekonomi Digital', nilai: '$360 Miliar', detail: 'Terbesar di Asia Tenggara', warna: '#1a5cff' },
              { label: 'Developer Dibutuhkan', nilai: '9 Juta+', detail: 'Gap talenta digital masif', warna: '#22c55e' },
              { label: 'Penetrasi Internet', nilai: '95%', detail: '290 juta pengguna', warna: '#f59e0b' },
              { label: 'UMKM Digital', nilai: '65 Juta', detail: 'Semua butuh digitalisasi', warna: '#8b5cf6' },
            ].map(item => (
              <motion.div key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3"
                style={{ border: `2px solid ${item.warna}`, background: `${item.warna}0d` }}>
                <div>
                  <div className="font-comic text-xl" style={{ color: item.warna }}>{item.nilai}</div>
                  <div className="font-bold text-xs text-[#0a0a0a]/60">{item.label}</div>
                </div>
                <div className="ml-auto text-xs text-[#0a0a0a]/40 italic">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="font-comic text-lg text-[#e63329] mb-4">🎯 PERAN YANG INGIN SAYA AMBIL</div>
          <div className="space-y-3">
            {[
              { peran: 'Founder Gelar.id', target: '2026-2027', desc: 'Platform pendidikan digital yang membuka lapangan kerja kreator Indonesia.', icon: '🌐' },
              { peran: 'Kontributor Open Source', target: '2026+', desc: 'Kode yang dipakai developer lain. Mulai dari tools Laravel dan Next.js.', icon: '🔓' },
              { peran: 'Speaker Tech Indonesia', target: '2027+', desc: 'Berbagi pengalaman di komunitas developer, kampus, dan conference.', icon: '🎤' },
              { peran: 'Mentor Developer Muda', target: '2027+', desc: 'Mempersingkat learning curve generasi berikutnya yang baru mulai coding.', icon: '👨‍🏫' },
            ].map((r, i) => (
              <motion.div key={r.peran}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-3 p-3 bg-white"
                style={{ border: '2px solid #e63329', boxShadow: '2px 2px 0 #e63329' }}>
                <span className="text-2xl">{r.icon}</span>
                <div>
                  <div className="font-comic text-sm text-[#e63329]">{r.peran} <span className="text-[9px] text-[#0a0a0a]/40">({r.target})</span></div>
                  <p className="text-xs text-[#0a0a0a]/60">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// ── Ch318 ──────────────────────────────────────────────────────────────
function Ch318() {
  return (
    <PanelBab id="ch318" num="318" judul="SURAT TERBUKA — KEPADA SIAPAPUN YANG MEMBACA INI" warna="#22c55e" bg="#f0fdf4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="comic-panel-dark p-8"
        >
          <div className="font-comic text-yellow-400 text-lg mb-6">📮 UNTUK KAMU YANG SEDANG MEMBACA INI...</div>
          <div className="space-y-4 font-bold text-sm text-white/80 leading-relaxed">
            <p>Hai. Kamu sudah sampai di sini — di chapter 318 dari portofolio yang terus bertumbuh. Itu bukan hal kecil.</p>
            <p>Mungkin kamu recruiter yang sedang menilai apakah saya cocok untuk timmu. Mungkin sesama developer yang penasaran dengan journey saya. Mungkin mahasiswa yang sedang cari inspirasi. Atau mungkin teman yang sengaja dikirimkan link ini.</p>
            <p>Apapun alasanmu di sini — <span className="text-yellow-400">terima kasih sudah meluangkan waktu.</span></p>
            <p>Portofolio ini bukan hanya CV digital. Ini adalah dokumentasi perjalanan belajar yang jujur — termasuk kegagalan, keraguan, dan momen-momen di mana saya hampir menyerah tapi tidak jadi.</p>
            <p>Kalau ada hal yang bisa saya bantu, kolaborasikan, atau diskusikan — pintunya selalu terbuka. Hubungi saya.</p>
            <p className="text-yellow-400">Dan kalau kamu juga sedang belajar coding — jangan berhenti. Setiap error adalah pelajaran. Setiap bug yang berhasil di-debug adalah kemenangan kecil yang layak dirayakan.</p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="font-comic text-yellow-400 text-sm">— Rizki Habibi</div>
            <div className="text-white/40 text-xs">Jember, 2026 | Chapter 318 of ???</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-wrap gap-3 justify-center"
        >
          <a href="https://wa.me/62882009725053" target="_blank" rel="noopener noreferrer"
            className="font-comic text-sm px-5 py-2.5 text-white transition-all hover:scale-105"
            style={{ background: '#25d366', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}>
            💬 Hubungi via WA
          </a>
          <a href="mailto:rizkihub7@gmail.com"
            className="font-comic text-sm px-5 py-2.5 text-white transition-all hover:scale-105"
            style={{ background: '#1a5cff', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}>
            📧 Kirim Email
          </a>
        </motion.div>
      </div>
    </PanelBab>
  )
}

// ── Ch319 ──────────────────────────────────────────────────────────────
function Ch319() {
  const rencana = [
    { fase: 'Q3 2026', items: ['Selesaikan Skripsi & Sidang', 'Launch Gelar.id Beta v0.1', 'Kontribusi open source pertama'], icon: '🎓', warna: '#1a5cff' },
    { fase: 'Q4 2026', items: ['Wisuda & Gelar S.Kom', 'Gelar.id v1.0 Public Launch', 'Mulai AI Alliance VTA-VTO prototype'], icon: '🎉', warna: '#22c55e' },
    { fase: '2027', items: ['Gelar.id 1.000 pengguna aktif', 'Full-time Tech Entrepreneur', 'SINTAS 2 Alun-Alun Jember selesai'], icon: '🚀', warna: '#f59e0b' },
    { fase: '2028+', items: ['Gelar.id Series A funding target', 'Expand ke 5 kota Indonesia', 'Platform Konten AI Recycle live'], icon: '🌟', warna: '#e63329' },
  ]
  return (
    <PanelBab id="ch319" num="319" judul="ROADMAP — RENCANA BESAR YANG SEDANG DIEKSEKUSI" warna="#f59e0b" bg="#fffbeb">
      <div className="speech-bubble-right inline-block text-sm mb-8 text-[#0a0a0a]">
        🗺️ Roadmap bukan kontrak — tapi komitmen. Setiap langkah kecil hari ini adalah fondasi mimpi besar esok hari!
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {rencana.map((r, i) => (
          <motion.div
            key={r.fase}
            initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            whileHover={{ y: -6 }}
            className="overflow-hidden"
            style={{ border: `3px solid ${r.warna}`, boxShadow: `5px 5px 0 ${r.warna}` }}
          >
            <div className="px-4 py-2 flex items-center gap-2" style={{ background: r.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-xl">{r.icon}</span>
              <span className="font-comic text-sm text-white">{r.fase}</span>
            </div>
            <div className="p-4 bg-white space-y-2">
              {r.items.map(item => (
                <div key={item} className="flex items-start gap-2 text-sm font-bold text-[#0a0a0a]">
                  <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: r.warna }} />
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

// ── Ch320 ──────────────────────────────────────────────────────────────
function Ch320() {
  return (
    <PanelBab id="ch320" num="320" judul="TO BE CONTINUED — KISAH INI BELUM SELESAI" warna="#ffd700" bg="#fffbeb" gelap>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.1 }}
          className="font-comic text-6xl sm:text-7xl text-white mb-4"
          style={{ textShadow: '6px 6px 0 #ffd700' }}
        >
          320
        </motion.div>
        <div className="font-comic text-xl text-yellow-400 mb-6 tracking-widest">CHAPTER 320 — DAN MASIH TERUS BERLANJUT...</div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="comic-panel p-6 mb-8 text-left"
        >
          <p className="font-bold text-sm text-[#0a0a0a] leading-relaxed mb-3">
            Kamu baru saja melewati 320 chapter dari perjalanan seorang developer muda dari Jember yang bermimpi besar.
          </p>
          <p className="font-bold text-sm text-[#0a0a0a]/70 leading-relaxed mb-3">
            Setiap chapter adalah pengalaman nyata. Setiap kode adalah keringat asli. Setiap kegagalan adalah pelajaran yang mahal tapi berharga.
          </p>
          <p className="font-bold text-sm text-[#1a5cff] leading-relaxed">
            Dan ini baru awal. Chapter 321, 322, 400, 500 — semuanya masih akan ditulis. Bersama tim yang sedang dibangun, platform yang sedang dikembangkan, dan impian yang tidak pernah padam.
          </p>
        </motion.div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-comic text-2xl text-yellow-400 mb-2"
        >
          ⚡ CHAPTER 321 DALAM PENGERJAAN...
        </motion.div>
        <div className="font-comic text-xs text-white/20 tracking-widest">
          --- RIZKI HABIBI · JEMBER · 2026 · 320 CHAPTERS & COUNTING ---
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-3 justify-center"
        >
          <a href="/" className="font-comic text-sm px-5 py-2.5 text-[#0a0a0a]"
            style={{ background: '#ffd700', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}>
            🏠 Kembali ke Beranda
          </a>
          <a href="/#chapter-browser" className="font-comic text-sm px-5 py-2.5 text-white"
            style={{ background: '#0a0a0a', border: '2px solid #ffd700', boxShadow: '3px 3px 0 #ffd700' }}>
            📚 Baca Semua Chapter
          </a>
        </motion.div>
      </div>
    </PanelBab>
  )
}

// ── Export ─────────────────────────────────────────────────────────────
export default function ChaptersGroup31() {
  return (
    <>
      <div className="comic-divider" /><Ch311 />
      <div className="comic-divider" /><Ch312 />
      <div className="comic-divider" /><Ch313 />
      <div className="comic-divider" /><Ch314 />
      <div className="comic-divider" /><Ch315 />
      <div className="comic-divider" /><Ch316 />
      <div className="comic-divider" /><Ch317 />
      <div className="comic-divider" /><Ch318 />
      <div className="comic-divider" /><Ch319 />
      <div className="comic-divider" /><Ch320 />
    </>
  )
}
