'use client'

import { motion } from 'framer-motion'
import ChapterHeader from '@/components/ChapterHeader'

function CP({ id, chNum, title, color, bg, dark, children }: {
  id: string; chNum: string; title: string; color: string; bg: string; dark?: boolean; children: React.ReactNode
}) {
  const num = (chNum.match(/\d+/) || [chNum])[0]
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

function Grid3({ items }: { items: { icon: string; judul: string; teks: string; warna: string; bg: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it, i) => (
        <motion.div key={it.judul}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, type: 'spring' }}
          viewport={{ once: false, amount: 0.1 }}
          whileHover={{ y: -5 }}
          className="p-4" style={{ border: `3px solid ${it.warna}`, boxShadow: `4px 4px 0 ${it.warna}`, background: it.bg }}>
          <div className="text-3xl mb-2">{it.icon}</div>
          <div className="font-comic text-sm mb-1" style={{ color: it.warna }}>{it.judul}</div>
          <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{it.teks}</p>
        </motion.div>
      ))}
    </div>
  )
}

// ── Ch101 ─────────────────────────────────────────────────────────────────────
function Ch101() {
  const aiTools = [
    { nama: 'ChatGPT / GPT-4o', kegunaan: 'Debug, explain code, generate boilerplate, draft artikel teknis dan dokumentasi', icon: '🤖', warna: '#10a37f' },
    { nama: 'GitHub Copilot', kegunaan: 'Autocomplete kode cerdas — seperti pair programmer yang tidak pernah lelah dan selalu tersedia', icon: '🐙', warna: '#0a0a0a' },
    { nama: 'Claude (Anthropic)', kegunaan: 'Analisis kode kompleks, refactoring, dan diskusi arsitektur sistem yang mendalam', icon: '🧠', warna: '#e8623a' },
    { nama: 'Gemini AI', kegunaan: 'Research, summarize dokumen panjang, dan bantu membuat konten teknis yang terstruktur', icon: '✨', warna: '#4285f4' },
    { nama: 'Midjourney / DALL-E', kegunaan: 'Generate ilustrasi untuk presentasi, blog post, dan konten visual proyek', icon: '🎨', warna: '#8b5cf6' },
    { nama: 'Whisper / ElevenLabs', kegunaan: 'Transkripsi audio & text-to-speech untuk aksesibilitas di platform KVT.kom', icon: '🎙️', warna: '#f59e0b' },
  ]
  return (
    <CP id="ch101" chNum="CHAPTER 101" title="AI TOOLS — SENJATA DEVELOPER MODERN" color="#10a37f" bg="#edfaf5">
      <div className="speech-bubble inline-block text-sm mb-6">
        🤖 AI bukan pengganti developer — AI adalah power-up yang membuat developer 10x lebih produktif!
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {aiTools.map((t, i) => (
          <motion.div key={t.nama}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
            className="flex gap-3 p-4"
            style={{ border: `3px solid ${t.warna}`, boxShadow: `4px 4px 0 ${t.warna}`, background: 'white' }}>
            <div className="w-10 h-10 flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: t.warna, border: '2px solid #0a0a0a' }}>{t.icon}</div>
            <div>
              <div className="font-comic text-sm text-[#0a0a0a]">{t.nama}</div>
              <p className="text-xs font-bold text-[#0a0a0a]/60 mt-0.5 leading-relaxed">{t.kegunaan}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-dark p-5">
        <div className="font-comic text-xl text-white mb-3">⚖️ AI ETHICS — PAKAI DENGAN BIJAK</div>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { rule: 'Verifikasi Output AI', desc: 'AI bisa salah. Selalu review dan test kode yang dihasilkan AI sebelum digunakan di produksi', icon: '🔍' },
            { rule: 'Jaga Data Sensitif', desc: 'Jangan paste data client atau credential ke AI publik. Privasi adalah tanggung jawab utama', icon: '🔐' },
            { rule: 'Tetap Belajar Manual', desc: 'AI adalah alat bantu, bukan pengganti pemahaman. Pahami konsep dasar sebelum pakai AI', icon: '📚' },
          ].map(r => (
            <div key={r.rule} className="text-center p-3 bg-white/10 border border-white/20">
              <div className="text-2xl mb-1">{r.icon}</div>
              <div className="font-comic text-xs text-yellow-400 mb-1">{r.rule}</div>
              <p className="text-[10px] text-white/60 font-bold">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </CP>
  )
}

// ── Ch102 ─────────────────────────────────────────────────────────────────────
function Ch102() {
  const skills = [
    { skill: 'Supervised Learning', deskripsi: 'Regresi linear, klasifikasi, dan decision tree — fondasi ML yang wajib dipahami setiap developer AI', level: 65, warna: '#1a5cff' },
    { skill: 'Neural Networks Dasar', deskripsi: 'Feedforward network, backpropagation, dan activation functions dengan Python & TensorFlow', level: 55, warna: '#8b5cf6' },
    { skill: 'NLP (Text Processing)', deskripsi: 'Tokenisasi, sentiment analysis, dan text classification untuk fitur AI di KVT.kom', level: 60, warna: '#22c55e' },
    { skill: 'Data Preprocessing', deskripsi: 'Cleaning data, feature engineering, dan normalisasi — 80% waktu ML ada di sini!', level: 70, warna: '#f59e0b' },
    { skill: 'Model Deployment', deskripsi: 'Integrasi model ML ke REST API dengan Flask/FastAPI dan deploy ke cloud server', level: 58, warna: '#e63329' },
  ]
  return (
    <CP id="ch102" chNum="CHAPTER 102" title="MACHINE LEARNING — BELAJAR DARI DATA" color="#8b5cf6" bg="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🧠 ML bukan sihir — ini statistik yang bekerja sangat keras!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          {skills.map((s, i) => (
            <motion.div key={s.skill}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className="p-3"
              style={{ border: `2px solid ${s.warna}`, boxShadow: `3px 3px 0 ${s.warna}`, background: 'white' }}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-comic text-sm text-[#0a0a0a]">{s.skill}</span>
                <span className="font-comic text-sm" style={{ color: s.warna }}>{s.level}%</span>
              </div>
              <div className="h-2.5 mb-2" style={{ border: '1.5px solid #0a0a0a', background: '#f0f0eb' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 1.2, delay: i * 0.1 }}
                  viewport={{ once: false }}
                  style={{ height: '100%', background: `repeating-linear-gradient(-45deg,${s.warna} 0,${s.warna} 5px,${s.warna}88 5px,${s.warna}88 10px)` }}
                />
              </div>
              <p className="text-[10px] font-bold text-[#0a0a0a]/60">{s.deskripsi}</p>
            </motion.div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="comic-panel p-5">
            <div className="font-comic text-lg text-[#0a0a0a] mb-3">🎯 APLIKASI ML DI KVT.KOM</div>
            <div className="space-y-2.5">
              {[
                { app: 'Rekomendasi Kurikulum', desc: 'AI merekomendasikan jalur belajar berdasarkan skill level dan tujuan karir pengguna', icon: '🎓' },
                { app: 'Deteksi Plagiarisme', desc: 'Scan otomatis tugas dan kode untuk deteksi kemiripan yang tidak wajar', icon: '🔍' },
                { app: 'Personalisasi Konten', desc: 'Setiap pengguna mendapat feed konten yang disesuaikan dengan progress belajarnya', icon: '📱' },
                { app: 'Chatbot Akademik', desc: 'AI menjawab pertanyaan umum mahasiswa 24/7 tanpa perlu menunggu mentor', icon: '🤖' },
              ].map(a => (
                <div key={a.app} className="flex items-start gap-2">
                  <span className="text-lg flex-shrink-0">{a.icon}</span>
                  <div>
                    <div className="font-bold text-xs text-[#0a0a0a]">{a.app}</div>
                    <p className="text-[10px] text-[#0a0a0a]/60 font-bold">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-sm text-[#0a0a0a] mb-1">🛣️ LEARNING PATH ML</div>
            <div className="flex flex-col gap-1">
              {['Python Dasar → NumPy/Pandas → Matplotlib', 'Scikit-learn → ML Algorithms', 'TensorFlow/PyTorch → Deep Learning', 'Deploy dengan FastAPI → Cloud'].map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-bold text-[#0a0a0a]">
                  <span className="font-comic text-[#1a5cff]">{i + 1}.</span> {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CP>
  )
}

// ── Ch103 ─────────────────────────────────────────────────────────────────────
function Ch103() {
  return (
    <CP id="ch103" chNum="CHAPTER 103" title="CLOUD COMPUTING — SKALAKAN SEGALANYA" color="#0891b2" bg="#ecfeff">
      <div className="speech-bubble inline-block text-sm mb-6">
        ☁️ Cloud bukan masa depan — cloud adalah sekarang. Developer yang tidak pakai cloud ketinggalan!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Grid3 items={[
          { icon: '🚀', judul: 'Vercel (Favorit!)', teks: 'Deploy Next.js dalam hitungan detik. Auto-SSL, CDN global, dan preview URL setiap PR — gratis!', warna: '#0a0a0a', bg: '#f0f0eb' },
          { icon: '🔥', judul: 'Firebase', teks: 'Realtime database, authentication, dan hosting. Sempurna untuk prototype cepat dan MVP', warna: '#f59e0b', bg: '#fffbeb' },
          { icon: '🌊', judul: 'DigitalOcean', teks: 'VPS terjangkau untuk hosting Laravel. Droplet $6/bulan sudah cukup untuk project skala kecil-menengah', warna: '#0080ff', bg: '#e8f4ff' },
          { icon: '📦', judul: 'AWS S3', teks: 'Object storage untuk file upload, backup, dan static assets. Pay-as-you-go yang sangat hemat biaya', warna: '#ff9900', bg: '#fff8ee' },
          { icon: '🐳', judul: 'Docker', teks: 'Containerisasi aplikasi agar bisa jalan di mana saja. "Works on my machine" jadi tidak berlaku lagi!', warna: '#0db7ed', bg: '#eef9fd' },
          { icon: '🔧', judul: 'GitHub Actions', teks: 'CI/CD pipeline otomatis. Test, build, dan deploy setiap push ke main branch tanpa manual intervensi', warna: '#24292f', bg: '#f0f0eb' },
        ]} />
        <div className="comic-panel-dark p-5">
          <div className="font-comic text-xl text-white mb-4">📐 ARSITEKTUR KVT.KOM CLOUD</div>
          <div className="space-y-3">
            {[
              { layer: 'Frontend', tech: 'Next.js → Vercel (Global CDN)', icon: '🌐', warna: '#1a5cff' },
              { layer: 'Backend API', tech: 'Laravel → DigitalOcean Droplet', icon: '⚙️', warna: '#FF2D20' },
              { layer: 'Database', tech: 'MySQL (Managed) + Redis Cache', icon: '🗄️', warna: '#f59e0b' },
              { layer: 'File Storage', tech: 'AWS S3 / Cloudflare R2', icon: '📁', warna: '#ff9900' },
              { layer: 'AI Services', tech: 'Python FastAPI → AWS Lambda', icon: '🤖', warna: '#22c55e' },
              { layer: 'Monitoring', tech: 'Grafana + Uptime Robot', icon: '📊', warna: '#0891b2' },
            ].map(l => (
              <div key={l.layer} className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: l.warna, border: '1.5px solid #ffd700' }}>{l.icon}</div>
                <div>
                  <div className="font-comic text-[10px] tracking-wider" style={{ color: l.warna }}>{l.layer.toUpperCase()}</div>
                  <div className="text-xs text-white/70 font-bold">{l.tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CP>
  )
}

// ── Ch104 ─────────────────────────────────────────────────────────────────────
function Ch104() {
  const ancaman = [
    { nama: 'SQL Injection', pencegahan: 'Gunakan Eloquent ORM atau prepared statements. JANGAN concatenate user input ke query SQL langsung!', icon: '💉', warna: '#e63329', level: 'KRITIS' },
    { nama: 'XSS (Cross-Site Scripting)', pencegahan: 'Escape semua output ke HTML. Blade templating Laravel sudah auto-escape dengan {{ }} syntax', icon: '🕷️', warna: '#8b5cf6', level: 'TINGGI' },
    { nama: 'CSRF Attack', pencegahan: 'Laravel auto-generate CSRF token. Pastikan @csrf ada di semua form dan validasi di middleware', icon: '🔄', warna: '#f59e0b', level: 'TINGGI' },
    { nama: 'Insecure Direct Object Reference', pencegahan: 'Selalu validasi ownership sebelum akses resource. User A tidak boleh akses data User B', icon: '🔓', warna: '#1a5cff', level: 'SEDANG' },
    { nama: 'Exposed Credentials', pencegahan: 'Gunakan .env file dan secret manager. JANGAN commit API key atau password ke repository!', icon: '🗝️', warna: '#22c55e', level: 'KRITIS' },
  ]
  return (
    <CP id="ch104" chNum="CHAPTER 104" title="CYBER SECURITY — KODE YANG AMAN" color="#e63329" bg="#fef2f2">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🔐 Keamanan bukan fitur tambahan — ini fondasi dari setiap baris kode yang ditulis!
      </div>
      <div className="space-y-3 mb-8">
        {ancaman.map((a, i) => (
          <motion.div key={a.nama}
            initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.09, type: 'spring' }}
            viewport={{ once: false }}
            className="overflow-hidden"
            style={{ border: `3px solid ${a.warna}`, boxShadow: `4px 4px 0 ${a.warna}`, background: 'white' }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: a.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-lg">{a.icon}</span>
              <span className="font-comic text-sm text-white">{a.nama}</span>
              <span className="ml-auto font-comic text-[9px] bg-white text-[#0a0a0a] px-2 py-0.5">{a.level}</span>
            </div>
            <div className="p-3">
              <div className="text-[10px] font-bold text-[#0a0a0a]/40 mb-0.5">✅ PENCEGAHAN</div>
              <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{a.pencegahan}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-blue p-5">
        <div className="font-comic text-lg text-[#0a0a0a] mb-3">🛡️ SECURITY CHECKLIST SETIAP PROYEK</div>
        <div className="grid sm:grid-cols-2 gap-2">
          {['✅ Semua input divalidasi dan disanitasi', '✅ HTTPS diaktifkan di production', '✅ Password di-hash dengan bcrypt', '✅ Rate limiting di semua endpoint API', '✅ Error message tidak expose info sensitif', '✅ Dependency diupdate secara rutin', '✅ Backup database otomatis setiap hari', '✅ Audit log untuk aksi penting user'].map(c => (
            <div key={c} className="text-xs font-bold text-[#0a0a0a]">{c}</div>
          ))}
        </div>
      </div>
    </CP>
  )
}

// ── Ch105 ─────────────────────────────────────────────────────────────────────
function Ch105() {
  return (
    <CP id="ch105" chNum="CHAPTER 105" title="DATABASE MASTERY — SENI MENGELOLA DATA" color="#4479A1" bg="#eef4fb">
      <div className="speech-bubble inline-block text-sm mb-6">
        🗄️ Database yang buruk bisa menghancurkan aplikasi yang sempurna. Design it right!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Grid3 items={[
            { icon: '🐬', judul: 'MySQL', teks: 'RDBMS favorit. Relational database untuk mayoritas proyek web yang butuh konsistensi data', warna: '#4479A1', bg: '#eef4fb' },
            { icon: '🐘', judul: 'PostgreSQL', teks: 'Advanced SQL dengan support JSON, full-text search, dan extensibility yang jauh lebih powerful', warna: '#336791', bg: '#eef3f8' },
            { icon: '🍃', judul: 'MongoDB', teks: 'Document database untuk data tidak terstruktur. Fleksibel tapi butuh discipline yang kuat', warna: '#22c55e', bg: '#f0fdf4' },
            { icon: '⚡', judul: 'Redis', teks: 'In-memory cache yang bikin aplikasi 100x lebih cepat. Queue, session, dan rate limiting', warna: '#e63329', bg: '#fef2f2' },
            { icon: '🔥', judul: 'Firebase Firestore', teks: 'Realtime database untuk prototype cepat dan aplikasi yang butuh sync data live', warna: '#f59e0b', bg: '#fffbeb' },
            { icon: '📊', judul: 'Query Optimization', teks: 'EXPLAIN query, proper indexing, dan avoid N+1 problem — ilmu yang membedakan junior dari senior', warna: '#8b5cf6', bg: '#f5f0ff' },
          ]} />
        </div>
        <div className="space-y-4">
          <div className="comic-panel-dark p-5">
            <div className="font-comic text-xl text-white mb-3">📐 TIPS DATABASE DESIGN</div>
            {[
              { tip: 'Normalisasi sampai 3NF minimal untuk menghindari data redundancy', icon: '📋' },
              { tip: 'Index foreign key dan kolom yang sering di-WHERE atau ORDER BY', icon: '🔍' },
              { tip: 'Gunakan soft delete (deleted_at) daripada hard delete untuk audit trail', icon: '🗑️' },
              { tip: 'Pisahkan database read dan write untuk aplikasi traffic tinggi', icon: '⚖️' },
              { tip: 'Gunakan migration untuk semua perubahan schema — jangan edit manual!', icon: '🔄' },
            ].map(t => (
              <div key={t.tip} className="flex items-start gap-2 mb-2">
                <span className="text-base flex-shrink-0">{t.icon}</span>
                <p className="text-xs text-white/70 font-bold">{t.tip}</p>
              </div>
            ))}
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-sm text-[#0a0a0a] mb-2">💡 ANTI-PATTERN YANG WAJIB DIHINDARI</div>
            {['❌ SELECT * tanpa limit di tabel besar', '❌ Query di dalam loop (N+1 problem)', '❌ Tidak pakai prepared statements', '❌ Simpan password as plain text'].map(a => (
              <div key={a} className="text-xs font-bold text-[#0a0a0a]/70 mb-1">{a}</div>
            ))}
          </div>
        </div>
      </div>
    </CP>
  )
}

// ── Ch106 ─────────────────────────────────────────────────────────────────────
function Ch106() {
  const prinsip = [
    { nama: 'Single Responsibility', singkat: 'SRP', desc: 'Satu class/function hanya punya satu tanggung jawab. Jika ada "dan" dalam deskripsinya — pisahkan!', warna: '#1a5cff', icon: '🎯' },
    { nama: 'Open/Closed', singkat: 'OCP', desc: 'Terbuka untuk extension, tertutup untuk modification. Tambah fitur tanpa ubah kode yang sudah ada', warna: '#22c55e', icon: '🔒' },
    { nama: "Don't Repeat Yourself", singkat: 'DRY', desc: 'Setiap pengetahuan harus punya satu representasi. Duplikasi kode = technical debt yang terus membengkak', warna: '#e63329', icon: '🔄' },
    { nama: 'KISS (Keep It Simple)', singkat: 'KISS', desc: 'Simple solution yang bekerja > complex solution yang brilliant. Kode dibaca lebih sering dari ditulis!', warna: '#f59e0b', icon: '💡' },
    { nama: 'YAGNI', singkat: 'YAGNI', desc: "You Aren't Gonna Need It — jangan implement fitur yang belum dibutuhkan sekarang. Build for today!", warna: '#8b5cf6', icon: '✂️' },
    { nama: 'Separation of Concerns', singkat: 'SoC', desc: 'Logic bisnis terpisah dari presentation layer. MVC pattern adalah implementasi dari prinsip ini', warna: '#0891b2', icon: '🗂️' },
  ]
  return (
    <CP id="ch106" chNum="CHAPTER 106" title="CLEAN CODE — SENI MENULIS KODE YANG INDAH" color="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ✨ Clean code bukan tentang perfeksionisme — ini tentang komunikasi antar developer!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {prinsip.map((p, i) => (
          <motion.div key={p.nama}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${p.warna}`, boxShadow: `4px 4px 0 ${p.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-3 py-2" style={{ background: p.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span>{p.icon}</span>
              <span className="font-comic text-sm text-white">{p.singkat}</span>
            </div>
            <div className="p-3">
              <div className="font-bold text-xs text-[#0a0a0a] mb-1">{p.nama}</div>
              <p className="text-[10px] font-bold text-[#0a0a0a]/60 leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-dark p-5">
        <div className="font-comic text-xl text-white mb-3">📖 BUKU CLEAN CODE YANG WAJIB DIBACA</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { buku: 'Clean Code', penulis: 'Robert C. Martin', desc: 'Bibel clean code. Wajib baca minimum 2x dalam karir developer' },
            { buku: 'The Pragmatic Programmer', penulis: 'Hunt & Thomas', desc: 'Filosofi dan praktik developer profesional yang tetap relevan sampai sekarang' },
            { buku: 'Refactoring', penulis: 'Martin Fowler', desc: 'Cara improve kode yang sudah ada tanpa mengubah behavior-nya' },
            { buku: 'Design Patterns', penulis: 'Gang of Four', desc: '23 pattern solusi untuk masalah umum dalam software design' },
          ].map(b => (
            <div key={b.buku} className="p-3 bg-white/10 border border-white/20">
              <div className="font-comic text-xs text-yellow-400">{b.buku}</div>
              <div className="text-[9px] text-white/40 font-bold">{b.penulis}</div>
              <p className="text-[10px] text-white/60 font-bold mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </CP>
  )
}

// ── Ch107 ─────────────────────────────────────────────────────────────────────
function Ch107() {
  return (
    <CP id="ch107" chNum="CHAPTER 107" title="API DESIGN — BAHASA ANTAR SISTEM" color="#f59e0b" bg="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">
        🔗 API yang baik adalah produk tersendiri — developer yang menggunakannya adalah pelanggannya!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="comic-panel p-5">
            <div className="font-comic text-lg text-[#0a0a0a] mb-3">📐 REST API BEST PRACTICES</div>
            {[
              { rule: 'Gunakan HTTP verb yang tepat: GET read, POST create, PUT/PATCH update, DELETE remove', icon: '🔧' },
              { rule: 'Naming resources pakai noun, bukan verb: /users bukan /getUsers', icon: '📝' },
              { rule: 'Selalu return proper HTTP status code: 200, 201, 400, 401, 403, 404, 500', icon: '🔢' },
              { rule: 'Versioning API: /api/v1/users untuk backward compatibility', icon: '📌' },
              { rule: 'Dokumentasi dengan Swagger/OpenAPI agar mudah digunakan team lain', icon: '📚' },
              { rule: 'Rate limiting dan authentication di setiap endpoint yang membutuhkan', icon: '🛡️' },
            ].map(r => (
              <div key={r.rule} className="flex items-start gap-2 mb-2">
                <span className="flex-shrink-0">{r.icon}</span>
                <p className="text-xs font-bold text-[#0a0a0a]/70 leading-snug">{r.rule}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-base text-[#0a0a0a] mb-2">🆚 REST vs GraphQL</div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="font-comic text-xs text-[#1a5cff] mb-1">REST API</div>
                {['Multiple endpoints', 'Fixed response shape', 'Mudah dipahami', 'Laravel built-in support'].map(r => (
                  <div key={r} className="text-[10px] font-bold text-[#0a0a0a]/70">• {r}</div>
                ))}
              </div>
              <div>
                <div className="font-comic text-xs text-[#e63329] mb-1">GraphQL</div>
                {['Single endpoint', 'Flexible queries', 'Butuh setup lebih', 'Cocok untuk complex apps'].map(r => (
                  <div key={r} className="text-[10px] font-bold text-[#0a0a0a]/70">• {r}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="comic-panel-blue p-4">
            <div className="font-comic text-base text-[#0a0a0a] mb-2">🔒 AUTHENTICATION METHODS</div>
            {[
              { metode: 'Laravel Sanctum', cocok: 'SPA & mobile app, token-based, ringan' },
              { metode: 'JWT Token', cocok: 'Stateless API, cocok untuk microservices' },
              { metode: 'OAuth 2.0', cocok: 'Third-party login (Google, GitHub, dll)' },
            ].map(a => (
              <div key={a.metode} className="mb-2">
                <span className="font-comic text-xs text-[#1a5cff]">{a.metode}</span>
                <p className="text-[10px] text-[#0a0a0a]/60 font-bold">{a.cocok}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CP>
  )
}

// ── Ch108 ─────────────────────────────────────────────────────────────────────
function Ch108() {
  return (
    <CP id="ch108" chNum="CHAPTER 108" title="OPEN SOURCE — KODE UNTUK DUNIA" color="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🌍 Open source adalah fondasi internet modern. Kita semua adalah penerima manfaatnya — waktunya berkontribusi!
      </div>
      <Grid3 items={[
        { icon: '🐙', judul: 'GitHub Contribution', teks: 'Aktif di GitHub: buka issue, submit PR kecil, review kode. Mulai dari proyek yang kamu gunakan sehari-hari', warna: '#0a0a0a', bg: '#f0f0eb' },
        { icon: '📦', judul: 'Laravel Ecosystem', teks: 'Kontribusi ke Laravel dan package ekosistemnya. Bug fix kecil pun sangat dihargai komunitas', warna: '#FF2D20', bg: '#fef2f2' },
        { icon: '📝', judul: 'Dokumentasi', teks: 'Improve dokumentasi proyek open source. Terjemahkan ke Bahasa Indonesia — berkontribusi nyata!', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🐛', judul: 'Bug Reporting', teks: 'Report bug dengan detail yang jelas: steps to reproduce, expected vs actual. Sangat membantu maintainer!', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🏫', judul: 'Buat & Share', teks: 'Publish package/library sendiri di npm atau Packagist. Solusi yang kamu buat mungkin dibutuhkan ribuan developer lain', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '❤️', judul: 'Support Project', teks: 'Star, sponsor, atau donasi ke project yang kamu gunakan. Maintainer butuh dukungan untuk terus berkarya', warna: '#e63329', bg: '#fef2f2' },
      ]} />
      <div className="mt-6 comic-panel-dark p-5 text-center">
        <div className="font-comic text-xl text-white mb-2">💭 FILOSOFI OPEN SOURCE</div>
        <p className="text-sm font-bold text-white/70 max-w-2xl mx-auto">
          &ldquo;Standing on the shoulders of giants.&rdquo; — Semua yang kita build sekarang berdiri di atas ribuan kontribusi
          open source dari developer di seluruh dunia. Kita berkewajiban untuk menambahkan bahu kita juga ke tumpukan itu.
        </p>
      </div>
    </CP>
  )
}

// ── Ch109 ─────────────────────────────────────────────────────────────────────
function Ch109() {
  return (
    <CP id="ch109" chNum="CHAPTER 109" title="UI/UX — DESAIN YANG MANUSIAWI" color="#e1306c" bg="#fff0f5">
      <div className="speech-bubble inline-block text-sm mb-6">
        🎨 Code yang bagus tanpa UI yang baik = mobil mewah tanpa setir!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Grid3 items={[
            { icon: '👁️', judul: 'Visual Hierarchy', teks: 'Atur elemen berdasarkan kepentingan. Mata pengguna harus tahu harus ke mana pertama!', warna: '#e1306c', bg: '#fff0f5' },
            { icon: '🎨', judul: 'Color System', teks: 'Pilih maksimal 3 warna utama. Konsistensi lebih penting dari keindahan yang beragam', warna: '#8b5cf6', bg: '#f5f0ff' },
            { icon: '📐', judul: 'Spacing & Grid', teks: '8px grid system untuk konsistensi. Whitespace adalah desain — jangan takut ruang kosong!', warna: '#1a5cff', bg: '#e8f0ff' },
            { icon: '📱', judul: 'Mobile First', teks: 'Desain untuk layar kecil dulu, lalu scale up. 70%+ traffic sekarang datang dari mobile!', warna: '#22c55e', bg: '#f0fdf4' },
            { icon: '♿', judul: 'Aksesibilitas', teks: 'Alt text, keyboard navigation, dan kontras warna yang cukup. Desain untuk semua orang!', warna: '#f59e0b', bg: '#fffbeb' },
            { icon: '🔄', judul: 'Iterasi Terus', teks: 'Desain pertama tidak akan sempurna — dan tidak perlu sempurna. Test dengan user nyata dan iterate!', warna: '#0891b2', bg: '#ecfeff' },
          ]} />
        </div>
        <div className="space-y-4">
          <div className="comic-panel p-5">
            <div className="font-comic text-lg text-[#0a0a0a] mb-3">🛠️ TOOLS UI/UX FAVORIT</div>
            {[
              { tool: 'Figma', use: 'Wireframe, prototype, dan handoff ke developer', icon: '🎭' },
              { tool: 'Draw.io', use: 'Flowchart, ERD, dan arsitektur sistem diagram', icon: '📊' },
              { tool: 'Tailwind CSS', use: 'Utility-first CSS yang membuat implementasi desain sangat cepat', icon: '💨' },
              { tool: 'Framer Motion', use: 'Animasi yang smooth dan performant untuk web app', icon: '✨' },
            ].map(t => (
              <div key={t.tool} className="flex items-center gap-3 mb-3">
                <span className="text-xl flex-shrink-0">{t.icon}</span>
                <div>
                  <div className="font-comic text-sm text-[#0a0a0a]">{t.tool}</div>
                  <div className="text-xs font-bold text-[#0a0a0a]/50">{t.use}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-sm text-[#0a0a0a] mb-2">🎯 5 DETIK RULE</div>
            <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">
              Pengguna baru punya 5 detik untuk memutuskan: tetap atau pergi. Pastikan value proposition jelas,
              navigasi intuitif, dan loading cepat. <span className="text-[#e1306c]">First impression adalah segalanya!</span>
            </p>
          </div>
        </div>
      </div>
    </CP>
  )
}

// ── Ch110 ─────────────────────────────────────────────────────────────────────
function Ch110() {
  return (
    <CP id="ch110" chNum="CHAPTER 110" title="WEB3 & BLOCKCHAIN — MASA DEPAN INTERNET" color="#f59e0b" bg="#fffbeb">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🔗 Web3 bukan hype kosong — tapi juga bukan solusi untuk semua masalah. Pahami dulu sebelum adopt!
      </div>
      <Grid3 items={[
        { icon: '🔗', judul: 'Blockchain Basics', teks: 'Distributed ledger yang immutable dan transparan. Cocok untuk use case yang butuh trust tanpa pihak ketiga', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '📜', judul: 'Smart Contract', teks: 'Kode yang berjalan otomatis di blockchain saat kondisi terpenuhi. Ethereum, Solidity — fondasi DeFi', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🎨', judul: 'NFT & Digital Assets', teks: 'Kepemilikan digital yang verifiable. Potensi untuk sertifikat akademik KVT.kom yang tidak bisa dipalsukan!', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🏦', judul: 'DeFi', teks: 'Layanan keuangan tanpa bank. QRIS donasi masa depan bisa pakai blockchain untuk transparansi total!', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🌐', judul: 'Decentralized Apps', teks: 'dApps berjalan tanpa server terpusat. Tahan sensor dan lebih demokratis dari web tradisional', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '⚡', judul: 'Layer 2 Solutions', teks: 'Solana, Polygon, Lightning Network — solusi untuk masalah skalabilitas blockchain generasi pertama', warna: '#e63329', bg: '#fef2f2' },
      ]} />
      <div className="mt-6 comic-panel-dark p-5">
        <div className="font-comic text-xl text-white mb-3">🤔 KAPAN PAKAI BLOCKCHAIN?</div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <div className="font-comic text-sm text-green-400 mb-2">✅ COCOK UNTUK</div>
            {['Sertifikat digital yang tidak bisa dipalsukan', 'Sistem donasi transparan tanpa perantara', 'Supply chain tracking dari produsen ke konsumen', 'Voting system yang audit-proof'].map(c => (
              <div key={c} className="text-xs text-white/70 font-bold mb-1">• {c}</div>
            ))}
          </div>
          <div>
            <div className="font-comic text-sm text-red-400 mb-2">❌ TIDAK COCOK UNTUK</div>
            {['Aplikasi yang butuh update data sangat cepat', 'Data yang bersifat privat dan sensitif', 'Sistem yang butuh rollback/undo data', 'Proyek dengan budget dan tim kecil'].map(c => (
              <div key={c} className="text-xs text-white/70 font-bold mb-1">• {c}</div>
            ))}
          </div>
        </div>
      </div>
    </CP>
  )
}

export default function ChaptersGroup10() {
  return (
    <>
      <div className="comic-divider" />
      <Ch101 /><div className="comic-divider" />
      <Ch102 /><div className="comic-divider" />
      <Ch103 /><div className="comic-divider" />
      <Ch104 /><div className="comic-divider" />
      <Ch105 /><div className="comic-divider" />
      <Ch106 /><div className="comic-divider" />
      <Ch107 /><div className="comic-divider" />
      <Ch108 /><div className="comic-divider" />
      <Ch109 /><div className="comic-divider" />
      <Ch110 />
    </>
  )
}
