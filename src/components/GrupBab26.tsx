'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
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

function KartuFlip({ judul, depan, belakang, warna, icon }: {
  judul: string; depan: string; belakang: string; warna: string; icon: string
}) {
  const [balik, setBalik] = useState(false)
  return (
    <div className="h-40 cursor-pointer" style={{ perspective: 800 }} onClick={() => setBalik(!balik)}>
      <motion.div className="relative w-full h-full"
        animate={{ rotateY: balik ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        style={{ transformStyle: 'preserve-3d' }}>
        {/* Depan */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
          style={{ backfaceVisibility: 'hidden', border: `3px solid ${warna}`, boxShadow: `4px 4px 0 ${warna}`, background: 'white' }}>
          <div className="text-3xl mb-2">{icon}</div>
          <div className="font-comic text-sm" style={{ color: warna }}>{judul}</div>
          <div className="text-[9px] text-[#0a0a0a]/30 mt-1 font-bold">TAP UNTUK BALIK ↩</div>
        </div>
        {/* Belakang */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', border: `3px solid ${warna}`, boxShadow: `4px 4px 0 ${warna}`, background: warna }}>
          <p className="text-xs font-bold text-white leading-relaxed">{belakang}</p>
          <div className="text-[9px] text-white/50 mt-2 font-bold">TAP UNTUK KEMBALI ↩</div>
        </div>
      </motion.div>
    </div>
  )
}

/* Ch261 — RUTINITAS PAGI DEVELOPER */
function Ch261() {
  const rutinitas = [
    { jam: '05:30', aktivitas: 'Bangun & Sholat Subuh', ikon: '🌅', warna: '#f59e0b', detail: 'Mulai hari dengan ketenangan. Tidak ada notifikasi, tidak ada email — hanya doa dan syukur.' },
    { jam: '06:00', aktivitas: 'Olahraga 20 Menit', ikon: '🏃', warna: '#22c55e', detail: 'Push-up, jalan pagi, atau stretching. Tubuh yang bergerak = otak yang lebih tajam saat coding.' },
    { jam: '06:30', aktivitas: 'Sarapan + Review Goals', ikon: '☕', warna: '#8b5cf6', detail: 'Makan sambil review 3 prioritas hari ini. Tidak lebih dari 3 — fokus adalah kunci produktivitas.' },
    { jam: '07:00', aktivitas: 'Deep Work Block #1', ikon: '💻', warna: '#1a5cff', detail: '2 jam tanpa gangguan untuk task terpenting. Phone silent, tab browser tutup, timer Pomodoro on.' },
    { jam: '09:00', aktivitas: 'Review & Komunikasi', ikon: '💬', warna: '#0891b2', detail: 'Cek email, pesan, dan notifikasi sekaligus. Bukan terus-menerus — ini membunuh fokus.' },
    { jam: '09:30', aktivitas: 'Deep Work Block #2', ikon: '⚡', warna: '#e63329', detail: 'Sesi coding kedua. Biasanya untuk feature baru, bug fix, atau code review.' },
    { jam: '12:00', aktivitas: 'Istirahat & Makan Siang', ikon: '🍜', warna: '#f59e0b', detail: 'Benar-benar istirahat. Tidak coding sambil makan. Recharge untuk sesi siang yang produktif.' },
    { jam: '13:00', aktivitas: 'Learning & Research', ikon: '📚', warna: '#22c55e', detail: 'Baca dokumentasi, tonton tutorial, atau explorasi teknologi baru. Investasi jangka panjang.' },
  ]
  return (
    <PanelBab id="ch261" num="261" judul="RUTINITAS PAGI DEVELOPER — FORMULA PRODUKTIVITAS" warna="#f59e0b" bg="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">
        ⏰ Pagi yang baik menentukan produktivitas sepanjang hari. Ini bukan soal jam berapa bangun — tapi apa yang dilakukan!
      </div>
      <div className="space-y-2 mb-6">
        {rutinitas.map((r, i) => (
          <motion.div key={r.jam}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ x: 4 }}
            className="flex gap-3 items-start p-3"
            style={{ border: `2px solid ${r.warna}`, boxShadow: `3px 3px 0 ${r.warna}`, background: 'white' }}>
            <div className="flex-shrink-0 text-center" style={{ minWidth: 50 }}>
              <div className="font-mono text-[10px] font-bold" style={{ color: r.warna }}>{r.jam}</div>
              <div className="text-lg">{r.ikon}</div>
            </div>
            <div>
              <div className="font-comic text-xs mb-0.5" style={{ color: r.warna }}>{r.aktivitas}</div>
              <p className="text-[9px] font-bold text-[#0a0a0a]/55 leading-relaxed">{r.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel p-4">
        <div className="font-comic text-base text-[#0a0a0a] mb-2">💡 INSIGHT TENTANG RUTINITAS</div>
        <p className="text-sm font-bold text-[#0a0a0a]/70 leading-relaxed">
          Rutinitas yang baik bukan tentang disiplin besi — tapi tentang menghilangkan keputusan kecil
          sehingga energi mental bisa dipakai untuk hal yang penting. Developer terbaik bukan yang
          coding paling lama, tapi yang bisa masuk <span className="text-[#1a5cff]">flow state</span> paling konsisten.
        </p>
      </div>
    </PanelBab>
  )
}

/* Ch262 — SETUP WORKSTATION IDEAL */
function Ch262() {
  const setup = [
    { kategori: 'Monitor', rekomendasi: '27" IPS 1440p, 75Hz+', alasan: 'Lebar layar = lebih banyak konteks kode terlihat sekaligus. QHD untuk teks yang tajam', icon: '🖥️', warna: '#1a5cff' },
    { kategori: 'Keyboard', rekomendasi: 'Mechanical, tactile switch', alasan: 'Ribuan baris kode per hari — keyboard yang nyaman adalah investasi, bukan kemewahan', icon: '⌨️', warna: '#22c55e' },
    { kategori: 'Kursi', rekomendasi: 'Ergonomis, lumbar support', alasan: 'Punggung bawah adalah korban utama developer. Kursi buruk = sakit kronis = produktivitas hilang', icon: '🪑', warna: '#8b5cf6' },
    { kategori: 'Pencahayaan', rekomendasi: 'Bias lighting di belakang monitor', alasan: 'Mengurangi kontras ekstrem yang melelahkan mata saat staring ke layar berjam-jam', icon: '💡', warna: '#f59e0b' },
    { kategori: 'Headphone', rekomendasi: 'Over-ear, noise cancelling', alasan: 'Deep work butuh fokus. ANC memblok distraksi lingkungan tanpa harus pindah tempat', icon: '🎧', warna: '#e63329' },
    { kategori: 'Laptop/PC', rekomendasi: '16GB+ RAM, SSD, 8+ core', alasan: 'Docker, multiple browser tabs, VS Code + extensions — RAM adalah bottleneck paling umum', icon: '💻', warna: '#0891b2' },
  ]
  return (
    <PanelBab id="ch262" num="262" judul="SETUP WORKSTATION IDEAL — INVESTASI PRODUKTIVITAS" warna="#1a5cff" bg="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🖥️ Workstation bukan soal gaya — ini tentang berapa jam kamu bisa coding tanpa sakit, tanpa lag, tanpa frustrasi!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {setup.map((s, i) => (
          <motion.div key={s.kategori}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${s.warna}`, boxShadow: `4px 4px 0 ${s.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="px-4 py-2" style={{ background: s.warna }}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{s.icon}</span>
                <span className="font-comic text-sm text-white">{s.kategori}</span>
              </div>
            </div>
            <div className="p-3">
              <div className="font-bold text-[10px] text-[#0a0a0a] mb-1">{s.rekomendasi}</div>
              <p className="text-[9px] font-bold text-[#0a0a0a]/55 leading-relaxed">{s.alasan}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-dark p-5">
        <div className="font-comic text-xl text-white mb-3">🏠 SETUP RIZKI HABIBI</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { item: 'Laptop utama', spec: 'Dengan RAM cukup untuk Docker + VS Code + browser', icon: '💻' },
            { item: 'Monitor eksternal', spec: '24" sebagai second screen saat development', icon: '🖥️' },
            { item: 'Meja berdiri DIY', spec: 'Pakai kardus tebal — low budget, high impact', icon: '📦' },
            { item: 'Teh manis panas', spec: 'Required. Tidak ada coding session tanpa ini.', icon: '☕' },
          ].map((s, i) => (
            <motion.div key={s.item}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              viewport={{ once: false }}
              className="flex gap-2 items-start">
              <span className="text-xl flex-shrink-0">{s.icon}</span>
              <div>
                <div className="font-comic text-xs text-yellow-400">{s.item}</div>
                <div className="text-[9px] text-white/50 font-bold">{s.spec}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* Ch263 — MANAJEMEN ENERGI, BUKAN WAKTU */
function Ch263() {
  const [aktif, setAktif] = useState(0)
  const zona = [
    { nama: 'Peak Zone', jam: '07:00–11:00', warna: '#22c55e', icon: '⚡', aktivitas: ['Deep work, coding fitur baru', 'Problem solving kompleks', 'Arsitektur dan design'], tips: 'Ini jam emas. Jangan buang untuk meeting atau email.' },
    { nama: 'Trough Zone', jam: '13:00–15:00', warna: '#e63329', icon: '😴', aktivitas: ['Admin & komunikasi', 'Review PR orang lain', 'Update dokumentasi'], tips: 'Energi rendah, jangan paksa kerja kreatif. Lakukan tugas mekanis.' },
    { nama: 'Recovery Zone', jam: '15:00–19:00', warna: '#1a5cff', icon: '🔄', aktivitas: ['Belajar hal baru', 'Side project ringan', 'Mentoring atau berbagi'], tips: 'Energi naik lagi setelah trough. Cocok untuk eksperimen dan learning.' },
  ]
  return (
    <PanelBab id="ch263" num="263" judul="MANAJEMEN ENERGI — LEBIH PENTING DARI MANAJEMEN WAKTU" warna="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">
        ⚡ 24 jam semua orang sama. Yang berbeda adalah bagaimana menggunakan energi di tiap jam itu!
      </div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {zona.map((z, i) => (
          <motion.button key={z.nama}
            className="px-4 py-2 font-comic text-sm flex items-center gap-2"
            style={{
              background: aktif === i ? z.warna : 'white',
              color: aktif === i ? 'white' : '#0a0a0a80',
              border: `3px solid ${aktif === i ? '#0a0a0a' : z.warna + '50'}`,
              boxShadow: aktif === i ? `3px 3px 0 #0a0a0a` : 'none',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setAktif(i)}>
            {z.icon} {z.nama}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={aktif}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ type: 'spring', stiffness: 250 }}
          className="grid lg:grid-cols-2 gap-6">
          <div className="p-5" style={{ border: `3px solid ${zona[aktif].warna}`, boxShadow: `5px 5px 0 ${zona[aktif].warna}`, background: 'white' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">{zona[aktif].icon}</span>
              <div>
                <div className="font-comic text-lg" style={{ color: zona[aktif].warna }}>{zona[aktif].nama}</div>
                <div className="font-mono text-xs text-[#0a0a0a]/40">{zona[aktif].jam}</div>
              </div>
            </div>
            <div className="font-bold text-xs text-[#0a0a0a]/40 mb-2 uppercase tracking-wide">Aktivitas ideal:</div>
            {zona[aktif].aktivitas.map((a, i) => (
              <div key={i} className="flex gap-2 items-center mb-1">
                <span style={{ color: zona[aktif].warna }}>▶</span>
                <span className="text-xs font-bold text-[#0a0a0a]/70">{a}</span>
              </div>
            ))}
          </div>
          <div className="p-5 comic-panel-dark">
            <div className="font-comic text-base text-yellow-400 mb-3">💡 TIPS {zona[aktif].nama.toUpperCase()}</div>
            <p className="text-sm text-white/70 font-bold leading-relaxed">{zona[aktif].tips}</p>
            <div className="mt-4 p-3" style={{ background: `${zona[aktif].warna}20`, border: `1px solid ${zona[aktif].warna}40` }}>
              <p className="text-xs text-white/60 font-bold italic">
                Developer rata-rata hanya punya 4-5 jam energi peak per hari. Gunakan dengan bijak!
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </PanelBab>
  )
}

/* Ch264 — BURNOUT: MENGENALI DAN MENCEGAH */
function Ch264() {
  const tanda = [
    { tanda: 'Membuka VS Code tapi tidak bisa mulai nulis satu baris', level: 'AWAL', warna: '#f59e0b' },
    { tanda: 'Setiap bug terasa seperti bencana personal', level: 'AWAL', warna: '#f59e0b' },
    { tanda: 'Kehilangan minat pada teknologi yang dulu bikin excited', level: 'SEDANG', warna: '#e63329' },
    { tanda: 'Merasa semua kode yang ditulis adalah sampah', level: 'SEDANG', warna: '#e63329' },
    { tanda: 'Tidak bisa lepas dari layar tapi tidak produktif', level: 'PARAH', warna: '#7f1d1d' },
    { tanda: 'Isolasi diri dari komunitas dan teman developer', level: 'PARAH', warna: '#7f1d1d' },
  ]
  return (
    <PanelBab id="ch264" num="264" judul="BURNOUT DEVELOPER — KENALI SEBELUM TERLAMBAT" warna="#e63329" bg="#fef2f2">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🔥 Burnout bukan tanda kelemahan — itu tanda bahwa kamu sudah memberi terlalu banyak tanpa mengisi ulang.
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div>
          <div className="font-comic text-lg text-[#e63329] mb-3">🚦 TANDA-TANDA BURNOUT</div>
          <div className="space-y-2">
            {tanda.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, type: 'spring' }}
                viewport={{ once: false }}
                className="flex items-center gap-2 p-2"
                style={{ border: `2px solid ${t.warna}`, background: `${t.warna}10` }}>
                <span className="font-bold text-[8px] text-white px-1.5 py-0.5 flex-shrink-0" style={{ background: t.warna }}>{t.level}</span>
                <p className="text-xs font-bold text-[#0a0a0a]/70">{t.tanda}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="font-comic text-lg text-[#22c55e] mb-3">💊 CARA PULIH DARI BURNOUT</div>
          {[
            { cara: 'Ambil cuti dari coding selama 3-7 hari', detail: 'Bukan produktif untuk coding lain — benar-benar istirahat dari layar', icon: '🏖️' },
            { cara: 'Kembalikan ke proyek yang paling fun', detail: 'Side project tanpa deadline, tanpa ekspektasi — coding karena cinta, bukan tuntutan', icon: '🎮' },
            { cara: 'Bicara dengan developer lain yang pernah burnout', detail: 'Tahu bahwa kamu tidak sendirian sudah 50% jalan menuju pemulihan', icon: '🤝' },
            { cara: 'Evaluasi ulang beban kerja dan batasan', detail: 'Burnout sering karena tidak bisa bilang "tidak". Belajar set boundary itu skill', icon: '🛡️' },
            { cara: 'Olahraga dan keluar rumah', detail: 'Tubuh perlu bergerak. Otak developer butuh stimulasi di luar layar', icon: '🌳' },
          ].map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              viewport={{ once: false }}
              className="flex gap-3 p-3"
              style={{ border: '2px solid #22c55e', background: '#f0fdf4' }}>
              <span className="text-xl flex-shrink-0">{c.icon}</span>
              <div>
                <div className="font-comic text-xs text-[#22c55e]">{c.cara}</div>
                <p className="text-[9px] font-bold text-[#0a0a0a]/55">{c.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* Ch265 — TEKNIK FOKUS DAN DEEP WORK */
function Ch265() {
  return (
    <PanelBab id="ch265" num="265" judul="TEKNIK FOKUS — DEEP WORK DI ERA DISTRAKSI" warna="#8b5cf6" bg="#f5f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">
        🧠 Deep work adalah kemampuan paling langka dan paling berharga di era digital. Ini bisa dilatih!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          { nama: 'Pomodoro Technique', detail: '25 menit fokus, 5 menit istirahat, repeat 4x lalu break panjang. Simple tapi terbukti efektif untuk coding.', icon: '🍅', warna: '#e63329' },
          { nama: 'Time Blocking', detail: 'Blokir kalender untuk deep work seperti meeting penting. Treat fokus time dengan respek yang sama.', icon: '📅', warna: '#1a5cff' },
          { nama: 'Monk Mode', detail: '2-4 jam total isolasi: phone off, notif mati, pintu tutup. Untuk task yang butuh konsentrasi penuh.', icon: '🧘', warna: '#8b5cf6' },
          { nama: 'Environment Design', detail: 'Desain lingkungan yang memudahkan fokus: meja rapi, app distraksi dihapus, cue visual untuk masuk mode kerja.', icon: '🏠', warna: '#22c55e' },
          { nama: 'Cognitif Loading Minimum', detail: 'Siapkan task list malam sebelumnya. Pagi langsung buka task #1 tanpa harus memutuskan apa yang mau dikerjakan.', icon: '📋', warna: '#f59e0b' },
          { nama: 'Digital Minimalism', detail: 'Hapus app sosmed dari HP kerja. Check sosmed hanya di perangkat tertentu di jam tertentu. Bukan berhenti, tapi on your terms.', icon: '📵', warna: '#0891b2' },
        ].map((t, i) => (
          <motion.div key={t.nama}
            initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.07, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${t.warna}`, boxShadow: `4px 4px 0 ${t.warna}`, background: 'white' }}
            className="p-4">
            <motion.div className="text-3xl mb-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}>
              {t.icon}
            </motion.div>
            <div className="font-comic text-xs mb-1" style={{ color: t.warna }}>{t.nama}</div>
            <p className="text-[9px] font-bold text-[#0a0a0a]/60 leading-relaxed">{t.detail}</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

/* Ch266-270: Flip card section */
function Ch266to270() {
  const kartu = [
    { judul: 'Work-Life Balance itu Mitos?', depan: 'Ada yang bilang work-life balance itu tidak ada buat founder dan developer passionate...', belakang: 'Yang benar: bukan balance tapi integration. Teknologi boleh jadi passion — tapi keluarga, kesehatan, dan hubungan sosial adalah fondasi yang membuat passion itu sustainable.', warna: '#1a5cff', icon: '⚖️' },
    { judul: 'Side Project: Berkah atau Kutukan?', depan: 'Side project bisa jadi portofolio terbaik — atau sumber burnout paling dahsyat...', belakang: 'Kunci: side project harus punya batasan waktu yang jelas (max 2 jam/hari), tidak boleh pakai jam kerja utama, dan tidak harus selalu monetizable. Eksplorasi itu valid.', warna: '#22c55e', icon: '🚀' },
    { judul: 'Remote Work vs Kantor', depan: 'Remote work terasa bebas — tapi ada harga tersembunyi yang jarang dibicarakan...', belakang: 'Isolasi sosial, blur antara kerja dan rumah, kesulitan komunikasi async. Solusi: buat ritual "mulai kerja" dan "selesai kerja", co-working space mingguan, dan investasi pada komunikasi tulisan yang jelas.', warna: '#8b5cf6', icon: '🏠' },
    { judul: 'Tutorial Hell: Jebakan Terbesar', depan: 'Menyelesaikan 50 tutorial tapi tidak bisa build satu project sendiri — ini familiar?', belakang: 'Tutorial hell terjadi karena comfort zone. Solusi: selesaikan tutorial SETENGAH, lalu build sisanya sendiri tanpa lihat. Frustrasi itu adalah belajar yang sebenarnya.', warna: '#f59e0b', icon: '📚' },
    { judul: 'Comparing diri ke Developer Lain', depan: 'LinkedIn penuh developer yang hidupnya sempurna, IPK 4.0, startup unicorn...', belakang: 'Social media adalah highlight reel, bukan daily life. Bandingkan diri kamu hari ini dengan diri kamu 6 bulan lalu — itu satu-satunya perbandingan yang relevan.', warna: '#e63329', icon: '🪞' },
    { judul: 'Imposter Syndrome Developer', depan: 'Merasa tidak cukup pintar, tidak cukup tahu, tidak layak disebut "developer"?', belakang: 'Semua developer senior pernah (dan sering masih) merasakan ini. Perbedaannya: mereka belajar untuk act despite the feeling. Bukti kompetensi ada di code yang shipped, bukan di kepala.', warna: '#0891b2', icon: '🎭' },
    { judul: 'Keyboard vs Meeting Culture', depan: 'Meeting 8 jam sehari vs coding 8 jam sehari — mana yang lebih produktif?', belakang: 'Ideally: maximum 2 jam meeting per hari, selalu ada agenda, dan selalu ada action items. Meeting tanpa output = waktu yang dicuri dari developer. Tidak semua meeting perlu kamu hadir.', warna: '#22c55e', icon: '📅' },
    { judul: 'Belajar Sambil Tidur?', depan: 'Otak memproses dan mengkonsolidasikan memori saat tidur — ini bukan mitos...', belakang: 'Tidur 7-8 jam bukan pemborosan waktu — ini maintenance otak. Developer yang tidur cukup membuat lebih sedikit bug, lebih cepat problem solve, dan lebih kreatif dalam arsitektur.', warna: '#8b5cf6', icon: '😴' },
    { judul: 'Coding di Cafe vs di Rumah', depan: 'Kenapa banyak developer lebih produktif di cafe daripada di rumah?', belakang: 'Background noise pada level tertentu (coffee shop ambient ~70dB) terbukti meningkatkan kreativitas. Tapi efek utamanya: perubahan lingkungan = mental context switch. Coba sesekali untuk unlock state baru.', warna: '#f59e0b', icon: '☕' },
    { judul: 'Nilai Sesungguhnya Developer', depan: 'Apakah nilai developer diukur dari berapa banyak kode yang ditulis?', belakang: 'Tidak. Nilai developer diukur dari masalah apa yang bisa diselesaikan dan dampak apa yang ditinggalkan. Terkadang satu keputusan arsitektur yang tepat lebih berharga dari 10.000 baris kode yang ditulis dengan terburu-buru.', warna: '#1a5cff', icon: '💎' },
  ]
  return (
    <PanelBab id="ch266" num="266-270" judul="10 DILEMA KEHIDUPAN DEVELOPER — FLIP CARD EDITION" warna="#8b5cf6" bg="#f5f0ff" gelap>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        🃏 Klik setiap kartu untuk lihat perspektif yang lebih dalam tentang dilema-dilema yang dirasakan semua developer!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {kartu.map((k, i) => (
          <motion.div key={k.judul}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, type: 'spring' }}
            viewport={{ once: false }}>
            <KartuFlip {...k} />
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup26() {
  return (
    <>
      <div className="comic-divider" />
      <Ch261 />
      <div className="comic-divider" />
      <Ch262 />
      <div className="comic-divider" />
      <Ch263 />
      <div className="comic-divider" />
      <Ch264 />
      <div className="comic-divider" />
      <Ch265 />
      <div className="comic-divider" />
      <Ch266to270 />
    </>
  )
}
