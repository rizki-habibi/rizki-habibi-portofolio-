'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import HeaderBab from '@/components/HeaderBab'

function PanelBab({ id, num, judul, warna, bg, gelap = false, children }: {
  id: string; num: string; judul: string; warna: string; bg: string; gelap?: boolean; children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden"
      style={{ background: gelap ? '#0a0a0a' : bg }}>
      {gelap ? <div className="halftone-yellow" /> : <div className="halftone-bg" />}
      <div className="max-w-6xl mx-auto relative z-10">
        <HeaderBab nomor={num} judul={judul} warna={gelap ? '#ffd700' : warna} gelap={gelap} />
        {children}
      </div>
    </section>
  )
}

/* Ch301 — PERSONAL BRANDING DEVELOPER */
function Ch301() {
  const pilar = [
    { pilar: 'GitHub Activity', detail: 'Contribution graph yang hijau konsisten lebih bicara dari 1000 kata di CV. Commit setiap hari — sekecil apapun.', icon: '🐙', warna: '#333' },
    { pilar: 'Blog & Tulisan', detail: 'Artikel teknis yang datang dari pengalaman nyata membuktikan kamu bisa berpikir dan berkomunikasi — bukan hanya coding.', icon: '📝', warna: '#1a5cff' },
    { pilar: 'Portofolio Web', detail: 'Satu website yang menunjukkan skill, proyek, dan kepribadian kamu. Ini adalah kartu nama digital yang bekerja 24/7.', icon: '🌐', warna: '#22c55e' },
    { pilar: 'LinkedIn Aktif', detail: 'Update milestone, share pembelajaran, engage dengan komunitas. Recruiter aktif mencari di sini setiap hari.', icon: '💼', warna: '#0077b5' },
    { pilar: 'Talk & Sharing', detail: 'Presentasi di meetup, webinar, atau bahkan YouTube channel. Suara publik membangun authority yang tidak bisa dibeli.', icon: '🎤', warna: '#8b5cf6' },
    { pilar: 'Open Source', detail: 'Kontribusi ke proyek open source = endorsement dari komunitas global. Ini CV yang tidak bisa dipalsukan.', icon: '🔓', warna: '#f59e0b' },
  ]
  return (
    <PanelBab id="ch301" num="301" judul="PERSONAL BRANDING DEVELOPER — BANGUN NAMA SEBELUM BUTUH" warna="#1a5cff" bg="#e8f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">
        🏷️ Personal brand bukan tentang pamer — ini tentang menjadi mudah ditemukan oleh orang yang tepat di waktu yang tepat!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {pilar.map((p, i) => (
          <motion.div key={p.pilar}
            initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-4"
            style={{ border: `3px solid ${p.warna}`, boxShadow: `4px 4px 0 ${p.warna}`, background: 'white' }}>
            <motion.div className="text-3xl mb-2" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}>{p.icon}</motion.div>
            <div className="font-comic text-sm mb-1" style={{ color: p.warna }}>{p.pilar}</div>
            <p className="text-[9px] font-bold text-[#0a0a0a]/60 leading-relaxed">{p.detail}</p>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel p-5">
        <div className="font-comic text-lg text-[#0a0a0a] mb-3">📐 FORMULA PERSONAL BRAND DEVELOPER</div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Niche yang Jelas', desc: 'Full-stack + IoT + Social Impact. Spesifik lebih mudah diingat dari "bisa semua"', icon: '🎯' },
            { label: 'Konsistensi Output', desc: 'Satu artikel per 2 minggu + daily GitHub commit + weekly LinkedIn post', icon: '📅' },
            { label: 'Nilai yang Dibawa', desc: 'Developer yang membangun untuk dampak nyata — bukan hanya untuk uang', icon: '💎' },
          ].map((f, i) => (
            <div key={f.label} className="text-center p-3" style={{ background: '#f8f8f5', border: '2px dashed #0a0a0a30' }}>
              <div className="text-2xl mb-1">{f.icon}</div>
              <div className="font-comic text-xs text-[#1a5cff] mb-1">{f.label}</div>
              <p className="text-[9px] font-bold text-[#0a0a0a]/55 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* Ch302 — WAWANCARA KERJA DEVELOPER */
function Ch302() {
  const [aktif, setAktif] = useState(0)
  const tipe = [
    {
      tipe: 'HR Screen', icon: '📞', warna: '#22c55e',
      pertanyaan: ['Ceritakan tentang diri kamu dalam 2 menit', 'Kenapa tertarik dengan posisi ini?', 'Ekspektasi gaji?', 'Bisa mulai kapan?'],
      tips: 'Jawab dengan STAR method: Situation, Task, Action, Result. Latih sampai terasa natural, bukan hafalan.'
    },
    {
      tipe: 'Technical Test', icon: '💻', warna: '#1a5cff',
      pertanyaan: ['Coding challenge di HackerRank/LeetCode', 'Take-home project dalam 3-7 hari', 'System design whiteboard', 'Code review sampel kode kamu'],
      tips: 'Jelaskan proses berpikirmu sambil mengerjakan. Interviewer lebih tertarik pada cara kamu berpikir, bukan hanya jawaban akhir.'
    },
    {
      tipe: 'Technical Interview', icon: '🔬', warna: '#8b5cf6',
      pertanyaan: ['Jelaskan arsitektur proyek terbesar kamu', 'Bagaimana kamu handle bug di production?', 'Trade-off antara pendekatan A vs B', 'Pernah tidak setuju dengan tim soal teknis?'],
      tips: 'Jujur tentang apa yang tidak kamu tahu. "Saya belum familiar tapi cara saya approach-nya adalah..." jauh lebih baik dari bluffing.'
    },
    {
      tipe: 'Culture Fit', icon: '🤝', warna: '#f59e0b',
      pertanyaan: ['Ceritakan konflik dengan rekan kerja dan cara mengatasinya', 'Bagaimana kamu belajar teknologi baru?', 'Apa yang kamu cari dari perusahaan ini?', 'Bagaimana kamu handle feedback negatif?'],
      tips: 'Autentik adalah kunci. Jika culture tidak cocok, itu bukan kegagalan — itu informasi berharga tentang tempat yang bukan untukmu.'
    },
  ]
  return (
    <PanelBab id="ch302" num="302" judul="WAWANCARA KERJA — PANDUAN LENGKAP DEVELOPER" warna="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🎯 Interview adalah conversation, bukan interrogasi. Kamu juga sedang menilai apakah perusahaan ini cocok untukmu!
      </div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {tipe.map((t, i) => (
          <motion.button key={t.tipe}
            className="flex items-center gap-2 px-3 py-2 font-comic text-xs"
            style={{
              background: aktif === i ? t.warna : 'white',
              color: aktif === i ? 'white' : '#0a0a0a80',
              border: `3px solid ${aktif === i ? '#0a0a0a' : t.warna + '50'}`,
              boxShadow: aktif === i ? `3px 3px 0 #0a0a0a` : 'none',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setAktif(i)}>
            <span>{t.icon}</span> {t.tipe}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={aktif}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="grid lg:grid-cols-2 gap-5">
          <div className="p-4" style={{ border: `3px solid ${tipe[aktif].warna}`, boxShadow: `5px 5px 0 ${tipe[aktif].warna}`, background: 'white' }}>
            <div className="font-comic text-base mb-3" style={{ color: tipe[aktif].warna }}>
              {tipe[aktif].icon} {tipe[aktif].tipe}
            </div>
            <div className="font-bold text-[9px] text-[#0a0a0a]/40 mb-2 uppercase tracking-wide">Pertanyaan Umum:</div>
            {tipe[aktif].pertanyaan.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-2 mb-2">
                <span style={{ color: tipe[aktif].warna }} className="flex-shrink-0">▶</span>
                <p className="text-xs font-bold text-[#0a0a0a]/70">{p}</p>
              </motion.div>
            ))}
          </div>
          <div className="comic-panel-dark p-4">
            <div className="font-comic text-base text-yellow-400 mb-2">💡 PRO TIPS</div>
            <p className="text-sm text-white/75 font-bold leading-relaxed">{tipe[aktif].tips}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </PanelBab>
  )
}

/* Ch303 — NEGOSIASI GAJI DEVELOPER */
function Ch303() {
  return (
    <PanelBab id="ch303" num="303" judul="NEGOSIASI GAJI — SENI YANG WAJIB DIKUASAI DEVELOPER" warna="#f59e0b" bg="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">
        💰 Negosiasi gaji yang baik bukan tentang rakus — ini tentang tahu nilai dirimu dan berani memintanya dengan data!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="font-comic text-lg text-[#f59e0b] mb-3">📊 RISET SEBELUM NEGOSIASI</div>
          {[
            { sumber: 'Glassdoor & LinkedIn Salary', desc: 'Data rata-rata gaji posisi serupa di kota yang sama. Filter berdasar pengalaman dan stack teknologi.' },
            { sumber: 'ITSalary.id & Gaji.info', desc: 'Data lokal Indonesia yang lebih relevan dengan kondisi pasar teknologi domestik.' },
            { sumber: 'Network Teman Developer', desc: 'Tanya langsung di komunitas — ini sumber paling akurat dan kontekstual yang bisa kamu dapat.' },
            { sumber: 'Job Posting Pesaing', desc: 'Perusahaan kompetitor yang post range gaji di iklan = benchmark yang sangat berguna.' },
          ].map((s, i) => (
            <motion.div key={s.sumber}
              initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.09, type: 'spring' }} viewport={{ once: true }}
              className="flex gap-3 p-3"
              style={{ border: '2px solid #f59e0b', background: 'white', boxShadow: '2px 2px 0 #f59e0b40' }}>
              <span className="text-yellow-500 flex-shrink-0 font-bold">{i + 1}.</span>
              <div>
                <div className="font-comic text-xs text-[#f59e0b]">{s.sumber}</div>
                <p className="text-[9px] font-bold text-[#0a0a0a]/60">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="font-comic text-lg text-[#22c55e] mb-3">🗣️ SCRIPT NEGOSIASI</div>
          {[
            {
              situasi: 'Saat ditanya ekspektasi gaji',
              script: '"Berdasarkan riset pasar dan pengalaman saya, range yang saya harapkan adalah X-Y juta. Apakah ini sesuai dengan budget posisi ini?"',
              warna: '#22c55e'
            },
            {
              situasi: 'Saat offer di bawah ekspektasi',
              script: '"Saya sangat excited dengan kesempatan ini. Namun berdasarkan pengalaman dan kontribusi yang bisa saya bawa, apakah ada ruang untuk mendiskusikan angka X juta?"',
              warna: '#1a5cff'
            },
            {
              situasi: 'Saat meminta waktu pertimbangan',
              script: '"Terima kasih atas tawaran ini. Boleh saya minta waktu 48 jam untuk review secara menyeluruh sebelum memberikan jawaban pasti?"',
              warna: '#8b5cf6'
            },
          ].map((s, i) => (
            <motion.div key={s.situasi}
              initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }} viewport={{ once: true }}
              style={{ border: `2px solid ${s.warna}`, background: 'white', overflow: 'hidden' }}>
              <div className="px-3 py-1.5 font-bold text-[9px] text-white uppercase tracking-wide" style={{ background: s.warna }}>{s.situasi}</div>
              <p className="p-3 text-xs font-bold text-[#0a0a0a]/70 italic leading-relaxed">{s.script}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* Ch304 — FREELANCE DEVELOPER: DARI SAMPINGAN KE FULL-TIME */
function Ch304() {
  const fase = [
    { fase: 'Moonlighting', deskripsi: 'Mulai freelance sambil masih kerja tetap. 1-2 klien kecil per bulan. Bangun portofolio dan testimoni nyata.', pendapatan: 'Rp 1-5JT/bulan', resiko: 'Rendah', icon: '🌙', warna: '#1a5cff' },
    { fase: 'Part-time Freelance', deskripsi: '3-5 klien aktif. Revenue freelance sudah 30-50% dari gaji tetap. Mulai punya proses onboarding klien.', pendapatan: 'Rp 5-15JT/bulan', resiko: 'Sedang', icon: '⚡', warna: '#22c55e' },
    { fase: 'Full-time Freelance', deskripsi: 'Revenue freelance > gaji tetap selama 3+ bulan berturut-turut. Sudah punya pipeline klien yang stabil.', pendapatan: 'Rp 15-40JT/bulan', resiko: 'Tinggi', icon: '🚀', warna: '#f59e0b' },
    { fase: 'Boutique Agency', deskripsi: 'Punya tim kecil 2-4 orang. Ambil proyek lebih besar, delegasi pekerjaan, fokus pada sales dan delivery.', pendapatan: 'Rp 50-200JT/bulan', resiko: 'Sangat Tinggi', icon: '🏢', warna: '#8b5cf6' },
  ]
  return (
    <PanelBab id="ch304" num="304" judul="FREELANCE DEVELOPER — ROADMAP DARI SAMPINGAN KE EMPIRE" warna="#8b5cf6" bg="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        💼 Freelance bukan hanya soal kebebasan waktu — ini tentang kebebasan memilih masalah apa yang mau kamu selesaikan!
      </div>
      <div className="space-y-4 mb-8">
        {fase.map((f, i) => (
          <motion.div key={f.fase}
            initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }} viewport={{ once: true }}
            whileHover={{ x: 5 }}
            style={{ border: `3px solid ${f.warna}`, boxShadow: `5px 5px 0 ${f.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center justify-between px-4 py-2" style={{ background: f.warna }}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{f.icon}</span>
                <span className="font-comic text-sm text-white">{f.fase}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-[9px] bg-white/30 text-white px-2 py-0.5">{f.pendapatan}</span>
                <span className="font-bold text-[9px] bg-black/20 text-white px-2 py-0.5">Risiko: {f.resiko}</span>
              </div>
            </div>
            <p className="p-3 text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{f.deskripsi}</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

/* Ch305 — SERTIFIKASI YANG WORTH IT */
function Ch305() {
  const sertifikasi = [
    { nama: 'BNSP Teknisi Komputer', provider: 'BNSP Indonesia', nilai: 'Diakui pemerintah RI', level: 'NASIONAL', icon: '🏛️', warna: '#e63329' },
    { nama: 'AWS Certified Developer', provider: 'Amazon Web Services', nilai: 'Paling dicari di industri cloud', level: 'GLOBAL', icon: '☁️', warna: '#f59e0b' },
    { nama: 'Google Professional Developer', provider: 'Google Cloud', nilai: 'Relevan untuk cloud-native apps', level: 'GLOBAL', icon: '🔵', warna: '#1a5cff' },
    { nama: 'Meta/React Certification', provider: 'Coursera + Meta', nilai: 'Validasi skill React di dunia kerja', level: 'GLOBAL', icon: '⚛️', warna: '#0081fb' },
    { nama: 'Laravel Certified Developer', provider: 'Laravel/Laracasts', nilai: 'Satu-satunya sertifikasi resmi Laravel', level: 'SPESIALISASI', icon: '🐘', warna: '#ff2d20' },
    { nama: 'Certified Kubernetes (CKA)', provider: 'CNCF', nilai: 'Standard untuk DevOps/Platform Engineer', level: 'ADVANCED', icon: '🐳', warna: '#326ce5' },
    { nama: 'PMI Project Management', provider: 'PMI', nilai: 'Untuk developer yang menuju leadership', level: 'MANAJEMEN', icon: '📊', warna: '#22c55e' },
    { nama: 'Digital Talent Scholarship', provider: 'Kominfo RI', nilai: 'Gratis dan diakui pemerintah Indonesia', level: 'NASIONAL', icon: '🎓', warna: '#8b5cf6' },
  ]
  return (
    <PanelBab id="ch305" num="305" judul="SERTIFIKASI YANG WORTH IT — MANA YANG DIPILIH?" warna="#e63329" bg="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-6">
        🏆 Sertifikasi bukan pengganti pengalaman — tapi bisa jadi tanda baca yang mempercepat kepercayaan recruiter dan klien!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {sertifikasi.map((s, i) => (
          <motion.div key={s.nama}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06, type: 'spring' }} viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            style={{ border: `3px solid ${s.warna}`, boxShadow: `3px 3px 0 ${s.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="px-3 py-2" style={{ background: s.warna }}>
              <div className="flex items-center gap-1">
                <span className="text-xl">{s.icon}</span>
                <span className="font-bold text-[8px] text-white">{s.level}</span>
              </div>
            </div>
            <div className="p-3">
              <div className="font-comic text-[10px] mb-0.5" style={{ color: s.warna }}>{s.nama}</div>
              <div className="font-bold text-[8px] text-[#0a0a0a]/40 mb-1">{s.provider}</div>
              <p className="text-[8px] font-bold text-[#0a0a0a]/60 leading-relaxed">{s.nilai}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

/* Ch306-310 — IMPIAN, WARISAN & SALAM AKHIR */
function Ch306to310() {
  const impian = [
    { impian: 'Membangun startup yang IPO di Bursa Efek Indonesia pada 2035', timeline: '2035', icon: '🚀', warna: '#ffd700' },
    { impian: 'Menulis buku "Developer Indonesia untuk Dunia" yang dicetak 100.000 eksemplar', timeline: '2030', icon: '📚', warna: '#1a5cff' },
    { impian: 'Gelar.id menjadi platform edukasi teknologi terbesar di Asia Tenggara', timeline: '2030', icon: '🌏', warna: '#22c55e' },
    { impian: 'Membangun 100 website desa gratis untuk desa-desa terpencil di Indonesia', timeline: '2028', icon: '🏘️', warna: '#e63329' },
    { impian: 'Berbicara di TEDx tentang "Teknologi untuk Keadilan Sosial Indonesia"', timeline: '2027', icon: '🎤', warna: '#8b5cf6' },
    { impian: 'Menciptakan beasiswa coding untuk 1.000 anak tidak mampu dari Jember dan sekitarnya', timeline: '2029', icon: '🎓', warna: '#f59e0b' },
    { impian: 'Memiliki kantor Gelar.id di Jember yang jadi hub teknologi untuk Jawa Timur', timeline: '2028', icon: '🏢', warna: '#0891b2' },
    { impian: 'Merilis 10 package open source yang dipakai 10.000+ developer Indonesia', timeline: '2027', icon: '📦', warna: '#22c55e' },
    { impian: 'Mewakili Indonesia dalam forum teknologi internasional sebagai Developer Ambassador', timeline: '2029', icon: '🌍', warna: '#1a5cff' },
    { impian: 'Pensiun muda di usia 40, tapi tetap coding karena cinta — bukan karena terpaksa', timeline: '2040', icon: '💎', warna: '#ffd700' },
  ]
  return (
    <PanelBab id="ch306" num="306-310" judul="10 IMPIAN BESAR — DAFTAR YANG BELUM SELESAI" warna="#ffd700" bg="#fffbeb" gelap>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        ✨ Impian yang dituliskan adalah impian yang sudah setengah jadi. Ini bukan bucket list — ini komitmen publik!
      </div>
      <div className="space-y-3 mb-10">
        {impian.map((imp, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="flex gap-3 items-center p-3"
            style={{ border: `2px solid ${imp.warna}30`, background: `${imp.warna}12` }}>
            <motion.span className="text-2xl flex-shrink-0"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}>
              {imp.icon}
            </motion.span>
            <p className="flex-1 text-sm font-bold text-white/80 leading-relaxed">{imp.impian}</p>
            <span className="font-bold text-[9px] text-white px-2 py-0.5 flex-shrink-0"
              style={{ background: imp.warna }}>{imp.timeline}</span>
          </motion.div>
        ))}
      </div>

      {/* SALAM PENUTUP CHAPTER 310 */}
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className="mb-6">
          <motion.div className="text-7xl mb-3"
            animate={{ scale: [1, 1.1, 1], rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}>
            🌟
          </motion.div>
          <div className="font-comic text-4xl text-yellow-400 mb-2"
            style={{ textShadow: '4px 4px 0 rgba(255,215,0,0.3)' }}>
            CHAPTER 310
          </div>
          <div className="font-comic text-lg text-white/50">-- TAPI PERJALANAN INI TIDAK BERHENTI DI SINI --</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="p-6 mb-6"
          style={{ border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd70055', background: '#111', borderRadius: 16 }}>
          <div className="font-comic text-xl text-yellow-400 mb-3">📖 TENTANG PORTFOLIO INI</div>
          <p className="text-sm font-bold text-white/75 leading-loose">
            310 chapter ini bukan angka yang direncanakan — ini adalah hasil dari menulis jujur
            tentang perjalanan seorang developer dari Jember yang percaya bahwa kode bisa mengubah dunia.
          </p>
          <p className="text-sm font-bold text-white/75 leading-loose mt-3">
            Setiap chapter adalah undangan untuk mengenal{' '}
            <span className="text-yellow-400">siapa Rizki Habibi sesungguhnya</span>{' '}
            — bukan hanya list skill dan sertifikat.
          </p>
          <div className="mt-4 font-comic text-sm text-yellow-400">-- Rizki Habibi, Jember, 2026</div>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <a href="#contact" className="btn-comic text-sm block text-center">🤝 KOLABORASI SEKARANG</a>
          <a href="#cv" className="btn-comic-blue text-sm block text-center">📄 LIHAT CV LENGKAP</a>
        </div>
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="font-comic text-xl text-yellow-400 mb-1">⚡ TO BE CONTINUED... CHAPTER 311 →</div>
          <div className="font-comic text-xs text-white/20 tracking-widest">
            --- RIZKI HABIBI  JEMBER  2026  310 CHAPTERS & COUNTING ---
          </div>
        </motion.div>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup30() {
  return (
    <>
      <div className="comic-divider" />
      <Ch301 />
      <div className="comic-divider" />
      <Ch302 />
      <div className="comic-divider" />
      <Ch303 />
      <div className="comic-divider" />
      <Ch304 />
      <div className="comic-divider" />
      <Ch305 />
      <div className="comic-divider" />
      <Ch306to310 />
    </>
  )
}
