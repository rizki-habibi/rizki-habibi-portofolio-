'use client'

import { motion } from 'framer-motion'
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

function GridTiga({ items }: { items: { icon: string; judul: string; teks: string; warna: string; bg: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it, i) => (
        <motion.div key={it.judul}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, type: 'spring' }}
          viewport={{ once: true, amount: 0.1 }}
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

// -- Ch111 ---------------------------------------------------------------------
function Ch111() {
  return (
    <PanelBab id="ch111" chNum="CHAPTER 111" judul="WARISAN DIGITAL  APA YANG KUTINGGALKAN" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">
        ?? Apa yang akan diingat orang dari kode yang kamu tulis? Dari platform yang kamu bangun?
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[
            { warisan: 'KVT.kom Platform', dampak: 'Ribuan developer yang belajar dan mendapat pekerjaan lewat platform ini', icon: '??', warna: '#8b5cf6' },
            { warisan: 'Website Desa Digital', dampak: 'Puluhan desa yang kini punya kehadiran digital dan bisa bersaing di era modern', icon: '???', warna: '#22c55e' },
            { warisan: 'Open Source Contributions', dampak: 'Kode yang dipakai developer lain di seluruh Indonesia dan mungkin dunia', icon: '??', warna: '#0a0a0a' },
            { warisan: 'Mentor & Inspirasi', dampak: 'Mahasiswa yang terinsipirasi mulai coding karena melihat perjalanan saya', icon: '??', warna: '#f59e0b' },
            { warisan: 'Inovasi IoT Daur Ulang', dampak: 'Membuktikan bahwa inovasi tidak butuh modal besar  kreativitas adalah modal utama', icon: '??', warna: '#e63329' },
          ].map((w, i) => (
            <motion.div key={w.warisan}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="flex gap-3 p-3"
              style={{ border: `2px solid ${w.warna}`, boxShadow: `3px 3px 0 ${w.warna}`, background: 'white' }}>
              <div className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: w.warna, border: '1.5px solid #0a0a0a' }}>{w.icon}</div>
              <div>
                <div className="font-comic text-sm text-[#0a0a0a]">{w.warisan}</div>
                <p className="text-xs font-bold text-[#0a0a0a]/60 mt-0.5">{w.dampak}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring' }}
          viewport={{ once: true }}
          className="comic-panel-dark p-6 flex flex-col justify-center">
          <div className="font-comic text-xl text-white mb-4">?? PERTANYAAN BESAR</div>
          <div className="space-y-4">
            {[
              'Apakah kode yang saya tulis hari ini masih berguna 10 tahun lagi?',
              'Apakah platform yang saya bangun benar-benar membantu orang, bukan sekadar proyek keren?',
              'Apakah saya sudah berbagi cukup ilmu kepada orang lain yang butuh?',
            ].map((q, i) => (
              <div key={i} className="flex gap-3 p-3 bg-white/10 border border-white/20">
                <span className="font-comic text-yellow-400 text-lg flex-shrink-0">{i + 1}.</span>
                <p className="text-xs text-white/80 font-bold italic leading-relaxed">&ldquo;{q}&rdquo;</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PanelBab>
  )
}

// -- Ch112 ---------------------------------------------------------------------
function Ch112() {
  return (
    <PanelBab id="ch112" chNum="CHAPTER 112" judul="SOSIAL & DAMPAK NYATA TEKNOLOGI" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ?? Teknologi terbaik bukan yang paling canggih  tapi yang paling banyak membantu manusia!
      </div>
      <GridTiga items={[
        { icon: '???', judul: 'Digitalisasi Desa', teks: '75.000+ desa Indonesia belum punya website layak. Satu developer bisa bantu 100 desa!', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '??', judul: 'Akses Pendidikan', teks: 'Anak di pelosok dengan HP biasa bisa akses pendidikan berkualitas yang sama dengan kota besar', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '??', judul: 'Lapangan Kerja', teks: 'Setiap developer yang terlatih bisa buka usaha, hire orang, dan ciptakan lapangan kerja baru', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '??', judul: 'Kesehatan Digital', teks: 'Telemedicine, reminder obat, dan monitoring kesehatan jarak jauh untuk daerah terpencil', warna: '#e63329', bg: '#fef2f2' },
        { icon: '??', judul: 'Lingkungan Hidup', teks: 'IoT monitoring lingkungan, smart farming, dan optimasi energi untuk masa depan yang lebih hijau', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '??', judul: 'Inklusi Digital', teks: 'Membuat teknologi aksesibel untuk semua: lansia, disabilitas, dan masyarakat yang belum melek digital', warna: '#8b5cf6', bg: '#f5f0ff' },
      ]} />
    </PanelBab>
  )
}

// -- Ch113 ---------------------------------------------------------------------
function Ch113() {
  const nilai = [
    { nilai: 'KEJUJURAN', desc: 'Jujur dalam estimasi waktu, jujur tentang kemampuan, jujur saat ada bug di production. Trust adalah modal utama!', icon: '??', warna: '#1a5cff' },
    { nilai: 'TANGGUNG JAWAB', desc: 'Kode yang ditulis adalah tanggung jawab yang diambil. Tidak ada "bukan urusan saya" untuk bug di kode yang kamu tulis', icon: '??', warna: '#22c55e' },
    { nilai: 'KERENDAHAN HATI', desc: 'Senior yang terbaik adalah yang masih mau belajar dari junior. Selalu ada yang lebih tahu dari kita di bidang tertentu', icon: '??', warna: '#8b5cf6' },
    { nilai: 'DAMPAK SOSIAL', desc: 'Teknologi yang kita buat punya dampak ke manusia nyata. Gunakan kemampuan untuk hal yang membangun, bukan merusak', icon: '??', warna: '#22c55e' },
    { nilai: 'KOLABORASI', desc: 'Developer terbaik bukan yang paling pintar sendiri, tapi yang paling bisa membuat tim bekerja dengan baik bersama', icon: '??', warna: '#f59e0b' },
    { nilai: 'INOVASI LOKAL', desc: 'Solusi Indonesia belum tentu ada di Silicon Valley. Bangun untuk kebutuhan lokal dengan pemahaman konteks lokal', icon: '????', warna: '#e63329' },
  ]
  return (
    <PanelBab id="ch113" chNum="CHAPTER 113" judul="NILAI & PRINSIP HIDUP DEVELOPER" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">
        ?? Skill bisa dipelajari, tapi karakter adalah yang membedakan developer biasa dari developer yang luar biasa!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nilai.map((n, i) => (
          <motion.div key={n.nilai}
            initial={{ opacity: 0, rotate: i % 2 === 0 ? -2 : 2, y: 20 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-4 relative"
            style={{ border: `3px solid ${n.warna}`, boxShadow: `5px 5px 0 ${n.warna}`, background: 'white' }}>
            <div className="text-3xl mb-2">{n.icon}</div>
            <div className="font-comic text-sm mb-2" style={{ color: n.warna }}>{n.nilai}</div>
            <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{n.desc}</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch114 ---------------------------------------------------------------------
function Ch114() {
  const pesan = [
    { kepada: 'Diri Sendiri di Masa Depan', pesan: 'Semoga semua yang diperjuangkan sekarang terbayar. Jangan lupa dari mana asalmu, dan selalu bantu yang membutuhkan.', icon: '??', warna: '#8b5cf6' },
    { kepada: 'Adik-Adik Mahasiswa IT', pesan: 'Mulai dari sekarang. Satu project kecil lebih berharga dari seribu rencana besar. Buat, gagal, pelajari, ulangi!', icon: '??', warna: '#1a5cff' },
    { kepada: 'Developer Indonesia', pesan: 'Kita punya potensi yang sama dengan Silicon Valley. Bedanya cuma konteks dan kepercayaan diri. Yakinkan dirimu!', icon: '????', warna: '#e63329' },
    { kepada: 'Client & Pengguna', pesan: 'Terima kasih sudah mempercayai saya untuk membangun sistem yang mereka gunakan. Kepercayaan itu saya jaga sepenuh hati.', icon: '??', warna: '#22c55e' },
    { kepada: 'Open Source Community', pesan: 'Terima kasih atas semua alat, library, dan framework yang membuat pekerjaan saya jauh lebih mudah. Saya berjanji untuk berkontribusi balik.', icon: '??', warna: '#f59e0b' },
  ]
  return (
    <PanelBab id="ch114" chNum="CHAPTER 114" judul="SURAT  PESAN UNTUK MEREKA" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ?? Ada beberapa hal yang perlu disampaikan  kepada mereka yang ada dalam perjalanan ini
      </div>
      <div className="space-y-4">
        {pesan.map((p, i) => (
          <motion.div key={p.kepada}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            className="p-4"
            style={{ border: `3px solid ${p.warna}`, boxShadow: `5px 5px 0 ${p.warna}`, background: 'white' }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{p.icon}</span>
              <div>
                <div className="text-[9px] font-bold text-[#0a0a0a]/40">KEPADA:</div>
                <div className="font-comic text-base" style={{ color: p.warna }}>{p.kepada}</div>
              </div>
            </div>
            <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed italic pl-8">&ldquo;{p.pesan}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch115 ---------------------------------------------------------------------
function Ch115() {
  return (
    <PanelBab id="ch115" chNum="CHAPTER 115" judul="MIMPI YANG BELUM TERWUJUD  BUCKET LIST" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">
        ?? Mimpi yang ditulis adalah mimpi yang memiliki kesempatan untuk menjadi nyata!
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { mimpi: 'Berbicara di Konferensi Tech Nasional', status: 'TARGET 2027', icon: '??', warna: '#1a5cff', tipe: 'KARIR' },
          { mimpi: 'Publikasi Buku Tech Bahasa Indonesia', status: 'SOMEDAY', icon: '??', warna: '#22c55e', tipe: 'KREASI' },
          { mimpi: 'Kunjungi Silicon Valley & Tokyo', status: 'DREAM', icon: '??', warna: '#8b5cf6', tipe: 'PERJALANAN' },
          { mimpi: 'KVT.kom Go International', status: '2030+', icon: '??', warna: '#f59e0b', tipe: 'BISNIS' },
          { mimpi: 'Buat Aplikasi yang Dipakai 1 Juta Orang', status: 'TARGET', icon: '??', warna: '#e63329', tipe: 'PRODUK' },
          { mimpi: 'Bantu 1000 Developer Lokal Dapat Kerja', status: 'DALAM PROSES', icon: '??', warna: '#0891b2', tipe: 'DAMPAK' },
          { mimpi: 'Hidup Nyaman dari Passion Teknologi', status: 'IN PROGRESS', icon: '??', warna: '#22c55e', tipe: 'HIDUP' },
          { mimpi: 'Membahagiakan Orang Tua Sepenuhnya', status: 'PRIORITAS #1', icon: '??', warna: '#ffd700', tipe: 'KELUARGA' },
        ].map((m, i) => (
          <motion.div key={m.mimpi}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="flex items-start gap-3 p-3"
            style={{ border: `2px solid ${m.warna}`, boxShadow: `3px 3px 0 ${m.warna}`, background: 'white' }}>
            <div className="w-9 h-9 flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: m.warna, border: '1.5px solid #0a0a0a' }}>{m.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-bold text-xs text-[#0a0a0a]">{m.mimpi}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="font-comic text-[8px] text-white px-1 py-0.5" style={{ background: m.warna }}>{m.tipe}</span>
                <span className="font-comic text-[9px]" style={{ color: m.warna }}>{m.status}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch116 ---------------------------------------------------------------------
function Ch116() {
  return (
    <PanelBab id="ch116" chNum="CHAPTER 116" judul="REFLEKSI  CERMIN PERJALANAN INI" warna="#0891b2" latarBelakang="#ecfeff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ?? Sesekali berhenti dan lihat ke belakang  bukan untuk menyesal, tapi untuk bersyukur sudah sejauh ini!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="comic-panel p-5">
            <div className="font-comic text-lg text-[#0a0a0a] mb-3">?? PERTANYAAN REFLEKSI TAHUNAN</div>
            {[
              'Apa skill terbesar yang berhasil dikuasai tahun ini?',
              'Proyek mana yang paling berdampak dan paling banyak belajar?',
              'Siapa yang paling membantu dan sudah berterima kasih belum?',
              'Hal apa yang seharusnya dilakukan tapi terus ditunda?',
              'Apakah sudah lebih dekat ke tujuan 5 tahun ke depan?',
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-2 mb-2">
                <span className="font-comic text-[#0891b2] text-sm flex-shrink-0">{i + 1}.</span>
                <p className="text-xs font-bold text-[#0a0a0a]/70 italic">{q}</p>
              </div>
            ))}
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-sm text-[#0a0a0a] mb-2">?? RASA SYUKUR HARI INI</div>
            <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed italic">
              &ldquo;Bersyukur bisa belajar di era di mana semua informasi tersedia gratis. Bersyukur ada komunitas yang mau berbagi.
              Bersyukur masih sehat dan bisa terus coding. Bersyukur keluarga mendukung penuh perjalanan ini.&rdquo;
            </p>
          </div>
        </div>
        <div className="comic-panel-dark p-6">
          <div className="font-comic text-xl text-white mb-4">?? PROGRESS TAHUNAN</div>
          {[
            { tahun: '2023', highlight: 'Mulai coding serius + project pertama + masuk ITSM', level: 20, warna: '#22c55e' },
            { tahun: '2024', highlight: 'Laravel master + 2 sistem selesai + kenalan Next.js', level: 45, warna: '#1a5cff' },
            { tahun: '2025', highlight: 'BNSP certified + 75 sertifikat + IoT innovation', level: 70, warna: '#f59e0b' },
            { tahun: '2026', highlight: 'Skripsi + KVT.kom beta + portfolio epic ini!', level: 85, warna: '#8b5cf6' },
          ].map((p, i) => (
            <div key={p.tahun} className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="font-comic text-sm" style={{ color: p.warna }}>{p.tahun}</span>
                <span className="font-comic text-sm text-white">Lv.{p.level}</span>
              </div>
              <div className="h-3 mb-1" style={{ border: '2px solid #ffd700', background: '#1a1a1a' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${p.level}%` }}
                  transition={{ duration: 1.2, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  style={{ height: '100%', background: `repeating-linear-gradient(-45deg,${p.warna} 0,${p.warna} 5px,${p.warna}66 5px,${p.warna}66 10px)` }}
                />
              </div>
              <div className="text-[9px] text-white/50 font-bold">{p.highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// -- Ch117 ---------------------------------------------------------------------
function Ch117() {
  return (
    <PanelBab id="ch117" chNum="CHAPTER 117" judul="INDONESIA DIGITAL  PERAN KITA" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-6">
        ???? Indonesia punya 270 juta manusia berbakat  kita hanya perlu infrastruktur digital yang merata!
      </div>
      <GridTiga items={[
        { icon: '??', judul: 'Ekonomi Digital 2030', teks: 'Indonesia ditargetkan jadi ekonomi digital terbesar di Asia Tenggara  Rp 4.500 triliun market size!', warna: '#e63329', bg: '#fef2f2' },
        { icon: '??', judul: 'Agritech Lokal', teks: 'Petani Indonesia butuh teknologi. Smart farming, marketplace hasil pertanian, dan supply chain digital', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '??', judul: 'Healthtech Indonesia', teks: 'Telemedicine dan rekam medis digital bisa menyelamatkan nyawa di daerah terpencil tanpa dokter', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '??', judul: 'Edtech Nusantara', teks: 'Platform pendidikan yang memahami konteks budaya dan bahasa daerah Indonesia  bukan copy paste barat', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '??', judul: 'Fintech Inklusif', teks: 'QRIS telah merevolusi pembayaran. Berikutnya: akses kredit dan investasi untuk UMKM di seluruh Indonesia', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '??', judul: 'Startup Lokal', teks: 'Gojek, Tokopedia, Traveloka lahir dari Indonesia. Siapa startup unicorn Indonesia berikutnya?', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
    </PanelBab>
  )
}

// -- Ch118 ---------------------------------------------------------------------
function Ch118() {
  const quote2030 = [
    { tahun: '2026', aksi: 'Lulus S.Kom. + Launch KVT.kom v1.0', icon: '??', warna: '#1a5cff' },
    { tahun: '2027', aksi: 'KVT.kom 1.000 pengguna aktif + Tim pertama terbentuk', icon: '??', warna: '#22c55e' },
    { tahun: '2028', aksi: 'Expand ke 5 kota + Dapat pendanaan seed', icon: '??', warna: '#f59e0b' },
    { tahun: '2029', aksi: 'KVT.kom 10.000 pengguna + Kelas offline pertama', icon: '??', warna: '#8b5cf6' },
    { tahun: '2030', aksi: 'KVT.kom 100.000 pengguna + Series A + Go International', icon: '??', warna: '#e63329' },
  ]
  return (
    <PanelBab id="ch118" chNum="CHAPTER 118" judul="ROADMAP 2026-2030  PETA JALAN BESAR" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ??? Tanpa peta, semua jalan terasa sama. Ini peta perjalanan saya  dan saya siap jalan!
      </div>
      <div className="relative mb-8">
        <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5"
          style={{ background: 'repeating-linear-gradient(180deg,#1a5cff 0,#1a5cff 6px,transparent 6px,transparent 12px)' }} />
        <div className="space-y-4 pl-14 sm:pl-16">
          {quote2030.map((r, i) => (
            <motion.div key={r.tahun}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, type: 'spring' }}
              viewport={{ once: true }}
              className="relative">
              <div className="absolute -left-10 sm:-left-12 top-2 w-9 h-9 flex items-center justify-center text-lg font-comic text-white"
                style={{ background: r.warna, border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}>{r.icon}</div>
              <div className="p-4"
                style={{ border: `3px solid ${r.warna}`, boxShadow: `4px 4px 0 ${r.warna}`, background: 'white' }}>
                <span className="font-comic text-base" style={{ color: r.warna }}>{r.tahun}  </span>
                <span className="font-bold text-sm text-[#0a0a0a]">{r.aksi}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="comic-panel-yellow p-5 text-center">
        <div className="font-comic text-xl text-[#0a0a0a] mb-2">?? NORTH STAR METRIC</div>
        <div className="font-comic text-3xl sm:text-4xl text-[#1a5cff] mb-2">1.000.000</div>
        <p className="text-sm font-bold text-[#0a0a0a]/70">
          Developer dan pelajar Indonesia yang terbantu oleh KVT.kom dan ekosistem yang saya bangun hingga 2035
        </p>
      </div>
    </PanelBab>
  )
}

// -- Ch119 ---------------------------------------------------------------------
function Ch119() {
  return (
    <PanelBab id="ch119" chNum="CHAPTER 119" judul="EPILOG AGUNG  SEBELUM CHAPTER TERAKHIR" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}>
          <div className="font-comic text-4xl sm:text-5xl text-yellow-400 mb-4">SATU HALAMAN LAGI...</div>
          <p className="text-sm font-bold text-white/70 leading-relaxed mb-8">
            Kita sudah melewati 119 chapter bersama. Mulai dari cover komik Hero Section,
            perjalanan belajar coding, game-game favori, visi KVT.kom, refleksi hidup, dan mimpi besar.
            <br /><br />
            Sebelum chapter terakhir, saya ingin berhenti sejenak dan berkata:
            <span className="text-yellow-400"> terima kasih sudah membaca sampai sejauh ini.</span>
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { label: 'Chapter Dibaca', val: '119/120', icon: '??', warna: '#ffd700' },
            { label: 'Cerita yang Dibagikan', val: '8 tak terhitung', icon: '??', warna: '#e63329' },
            { label: 'Mimpi yang Ditulis', val: '100+', icon: '?', warna: '#22c55e' },
            { label: 'Developer yang Menginspirasi', val: 'KAMU', icon: '??', warna: '#1a5cff' },
          ].map(s => (
            <div key={s.label} className="text-center p-4"
              style={{ border: `2px solid ${s.warna}`, boxShadow: `3px 3px 0 ${s.warna}`, background: '#111' }}>
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="font-comic text-xl" style={{ color: s.warna }}>{s.val}</div>
              <div className="text-xs text-white/40 font-bold">{s.label}</div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="p-5"
          style={{ border: '3px solid #ffd700', boxShadow: '5px 5px 0 #ffd700', background: '#111', borderRadius: 12 }}>
          <p className="text-sm font-bold text-white/80 leading-relaxed">
            Portofolio ini bukan resume biasa. Ini adalah perjalanan seorang developer muda yang percaya bahwa
            kode bukan sekadar pekerjaan  ini adalah cara untuk <span className="text-yellow-400">mengubah dunia, satu baris kode dalam satu waktu.</span>
          </p>
        </motion.div>
      </div>
    </PanelBab>
  )
}

// -- Ch120 FINAL ---------------------------------------------------------------
function Ch120() {
  return (
    <PanelBab id="ch120" chNum="CHAPTER 120" judul="BERSAMBUNG...  THE END IS THE BEGINNING" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-10">
          <div className="text-6xl sm:text-8xl mb-4">??</div>
          <div className="font-comic text-5xl sm:text-7xl text-yellow-400 mb-2" style={{ textShadow: '5px 5px 0 rgba(255,215,0,0.3)' }}>
            BERSAMBUNG...
          </div>
          <div className="font-comic text-xl text-white/60">CHAPTER 121 AKAN SEGERA HADIR</div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { angka: '120', label: 'Chapter Selesai', icon: '??', warna: '#ffd700' },
            { angka: '8', label: 'Semangat Tersisa', icon: '??', warna: '#e63329' },
            { angka: '1', label: 'Perjalanan Epik', icon: '??', warna: '#1a5cff' },
          ].map(s => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring' }}
              viewport={{ once: true }}
              className="text-center p-5"
              style={{ border: `3px solid ${s.warna}`, boxShadow: `5px 5px 0 ${s.warna}`, background: '#111' }}>
              <div className="text-4xl mb-2">{s.icon}</div>
              <div className="font-comic text-4xl" style={{ color: s.warna }}>{s.angka}</div>
              <div className="text-xs text-white/50 font-bold mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="p-6 mb-8 text-center"
          style={{ border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd700', background: '#111', borderRadius: 20 }}>
          <div className="font-comic text-2xl text-yellow-400 mb-3">?? PESAN TERAKHIR</div>
          <p className="text-sm font-bold text-white/80 leading-relaxed max-w-2xl mx-auto">
            Kamu sudah membaca 120 chapter tentang seorang developer muda dari Jember yang bermimpi besar.
            Cerita ini belum berakhir  ini baru babak pertama dari perjalanan panjang yang akan terus berlanjut.
            <br /><br />
            Jika ada satu hal yang ingin saya sampaikan setelah 120 chapter ini:
            <br />
            <span className="text-yellow-400 text-base">
              &ldquo;Mulailah dari sekarang. Persis di sini, persis seperti ini, dengan apa yang kamu punya sekarang.&rdquo;
            </span>
            <br /><br />
            <span className="text-white/50"> Rizki Habibi, Jember, 2026</span>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4 text-center"
            style={{ border: '3px solid #22c55e', boxShadow: '4px 4px 0 #22c55e', background: '#111' }}>
            <div className="font-comic text-lg text-green-400 mb-2">?? KERJA SAMA?</div>
            <p className="text-xs text-white/60 font-bold mb-3">Punya proyek menarik? Mari diskusikan!</p>
            <a href="#contact" className="btn-comic text-sm">HUBUNGI SAYA ?</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4 text-center"
            style={{ border: '3px solid #1a5cff', boxShadow: '4px 4px 0 #1a5cff', background: '#111' }}>
            <div className="font-comic text-lg text-blue-400 mb-2">?? LIHAT CV LENGKAP</div>
            <p className="text-xs text-white/60 font-bold mb-3">Semua detail pengalaman dan skill ada di sini</p>
            <a href="#cv" className="btn-comic-blue text-sm">LIHAT CV ?</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center">
          <div className="font-comic text-xl text-yellow-400 mb-2">? THE STORY CONTINUES...</div>
          <div className="font-comic text-sm text-white/40 tracking-widest">
            --- RIZKI HABIBI PORTFOLIO  2026 ---
          </div>
        </motion.div>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup11() {
  return (
    <>
      <div className="comic-divider" />
      <Ch111 /><div className="comic-divider" />
      <Ch112 /><div className="comic-divider" />
      <Ch113 /><div className="comic-divider" />
      <Ch114 /><div className="comic-divider" />
      <Ch115 /><div className="comic-divider" />
      <Ch116 /><div className="comic-divider" />
      <Ch117 /><div className="comic-divider" />
      <Ch118 /><div className="comic-divider" />
      <Ch119 /><div className="comic-divider" />
      <Ch120 />
    </>
  )
}
