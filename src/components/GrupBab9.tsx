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

function GridTiga({ items, cols = 3 }: { items: { icon: string; judul: string; teks: string; warna: string; bg: string }[]; cols?: number }) {
  const cls = cols === 2 ? 'grid sm:grid-cols-2 gap-4' : cols === 4 ? 'grid sm:grid-cols-2 lg:grid-cols-4 gap-3' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4'
  return (
    <div className={cls}>
      {items.map((it, i) => (
        <motion.div key={it.judul}
          initial={{ opacity: 0, y: 22, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: i * 0.07, type: 'spring', stiffness: 140 }}
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

// -- Ch91 ----------------------------------------------------------------------
function Ch91() {
  return (
    <PanelBab id="ch91" chNum="CHAPTER 91" judul="KEHIDUPAN KAMPUS  ANTARA TUGAS DAN MIMPI" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">
            ?? Kampus bukan hanya tempat belajar  ini arena pembentukan karakter!
          </div>
          <GridTiga items={[
            { icon: '??', judul: 'Jadwal Kuliah', teks: 'Senin-Jumat dengan mata kuliah wajib + praktikum. Tapi side project tetap jalan di sela-sela kelas!', warna: '#22c55e', bg: '#f0fdf4' },
            { icon: '??', judul: 'Tugas & UAS', teks: 'Deadline tugas jadi motivasi terkuat. Pernah ngerjain tugas 12 jam non-stop dan berhasil!', warna: '#1a5cff', bg: '#e8f0ff' },
            { icon: '??', judul: 'Aktivitas Kampus', teks: 'Ikut seminar, workshop, lomba hackathon, dan kegiatan mahasiswa untuk perluas jaringan', warna: '#f59e0b', bg: '#fffbeb' },
            { icon: '??', judul: 'Begadang Produktif', teks: 'Malam hari adalah golden hour  tenang, fokus, dan ide mengalir lebih deras dari siang hari', warna: '#8b5cf6', bg: '#f5f0ff' },
            { icon: '?', judul: 'Kopi & Coding', teks: 'Ritual wajib: kopi hitam + headphone + Spotify lofi = siap coding marathon sampai subuh!', warna: '#e63329', bg: '#fef2f2' },
            { icon: '??', judul: 'Teman Seperjuangan', teks: 'Teman kampus yang saling support adalah aset paling berharga  lebih dari nilai sempurna', warna: '#0891b2', bg: '#ecfeff' },
          ]} />
        </div>
        <div className="comic-panel-dark p-5">
          <div className="font-comic text-xl text-white mb-4">?? STATISTIK KEHIDUPAN KAMPUS</div>
          {[
            { label: 'IPK Terakhir', val: '3.7/4.0', warna: '#22c55e' },
            { label: 'Mata Kuliah Favorit', val: 'Pemrograman Web & Basis Data', warna: '#1a5cff' },
            { label: 'Mata Kuliah Paling Menantang', val: 'Aljabar Linear & Kalkulus', warna: '#e63329' },
            { label: 'Jam Belajar/Minggu', val: '40+ jam (kuliah + mandiri)', warna: '#f59e0b' },
            { label: 'Proyek Dikerjakan', val: '5+ proyek nyata', warna: '#8b5cf6' },
            { label: 'Sertifikat Diraih', val: '75+ sertifikat', warna: '#ffd700' },
          ].map(s => (
            <div key={s.label} className="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0">
              <span className="text-xs font-bold text-white/60">{s.label}</span>
              <span className="font-comic text-sm" style={{ color: s.warna }}>{s.val}</span>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

// -- Ch92 ----------------------------------------------------------------------
function Ch92() {
  const kota = [
    { nama: 'Jember', desc: 'Kota kelahiran dan kampus. Kota tembakau yang penuh kenangan dan potensi digital yang belum tergali', icon: '???', warna: '#22c55e' },
    { nama: 'Surabaya', desc: 'Kota metropolitan Jawa Timur. Sering kunjungi untuk event tech dan seminar nasional', icon: '??', warna: '#1a5cff' },
    { nama: 'Yogyakarta', desc: 'Kota pelajar. Venue sertifikasi BNSP. Kota yang memberi gelar profesional pertama', icon: '???', warna: '#f59e0b' },
    { nama: 'Jakarta (Target)', desc: 'Pusat tech startup Indonesia. Target networking dan karir setelah lulus S.Kom.', icon: '??', warna: '#8b5cf6' },
  ]
  return (
    <PanelBab id="ch92" chNum="CHAPTER 92" judul="JEMBER & KOTA-KOTA DALAM PERJALANAN" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">
        ??? Setiap kota punya cerita  dan setiap perjalanan membawa pelajaran baru!
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {kota.map((k, i) => (
          <motion.div key={k.nama}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${k.warna}`, boxShadow: `5px 5px 0 ${k.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: k.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-xl">{k.icon}</span>
              <span className="font-comic text-base text-white">{k.nama}</span>
            </div>
            <p className="p-4 text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{k.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-yellow p-5">
        <div className="font-comic text-lg text-[#0a0a0a] mb-2">?? KENAPA TETAP DI JEMBER?</div>
        <p className="text-sm font-bold text-[#0a0a0a]/70 leading-relaxed">
          Jember punya potensi besar yang belum digarap maksimal di bidang digital. Daripada pergi ke kota besar dan bersaing ketat,
          lebih bermakna membangun ekosistem digital dari kota sendiri. <span className="text-[#22c55e]">Jadi besar di kampung halaman</span> lebih memorable!
        </p>
      </div>
    </PanelBab>
  )
}

// -- Ch93 ----------------------------------------------------------------------
function Ch93() {
  const budaya = [
    { icon: '??', judul: 'TikTok Generation', teks: 'Konten pendek, informasi cepat. Tantangan: filter informasi hoaks vs fakta. Skill critical thinking makin penting!', warna: '#1a5cff', bg: '#e8f0ff' },
    { icon: '??', judul: 'Gamer Culture', teks: 'Esports jadi profesi, streamer jadi selebriti. Industri gaming Indonesia tumbuh 20%+ per tahun!', warna: '#8b5cf6', bg: '#f5f0ff' },
    { icon: '??', judul: 'AI Everywhere', teks: 'Generasi ini tumbuh dengan AI. ChatGPT untuk tugas, Midjourney untuk karya, Copilot untuk coding', warna: '#22c55e', bg: '#f0fdf4' },
    { icon: '??', judul: 'Side Hustle', teks: 'Gen Z tidak mau kerja satu tempat. Freelance, content creator, dropship  multiple income streams!', warna: '#f59e0b', bg: '#fffbeb' },
    { icon: '??', judul: 'Global Mindset', teks: 'Belajar dari YouTube global, network di LinkedIn, bekerja remote untuk klien luar negeri. Batas negara makin kabur!', warna: '#0891b2', bg: '#ecfeff' },
    { icon: '??', judul: 'Mental Health Awareness', teks: 'Burnout developer nyata adanya. Generasi ini lebih terbuka soal kesehatan mental  self-care bukan egois!', warna: '#e63329', bg: '#fef2f2' },
  ]
  return (
    <PanelBab id="ch93" chNum="CHAPTER 93" judul="BUDAYA DIGITAL GEN Z DEVELOPER" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ?? Kami adalah generasi yang tumbuh bersama internet  tapi tetap punya mimpi yang nyata!
      </div>
      <GridTiga items={budaya} />
    </PanelBab>
  )
}

// -- Ch94 ----------------------------------------------------------------------
function Ch94() {
  const tips = [
    { icon: '??', judul: 'Kenali Gejalanya', teks: 'Hilang motivasi, susah fokus, merasa semua sia-sia  itu sinyal burnout. Jangan diabaikan!', warna: '#e63329', bg: '#fef2f2' },
    { icon: '??', judul: 'Berani Pause', teks: 'Stop coding 1-2 hari bukan kekalahan. Otak yang istirahat akan lebih produktif 10x saat kembali', warna: '#1a5cff', bg: '#e8f0ff' },
    { icon: '??', judul: 'Offline Time', teks: 'Jalan-jalan tanpa HP, baca buku fisik, masak, olahraga  aktivitas offline mengisi ulang energi mental', warna: '#22c55e', bg: '#f0fdf4' },
    { icon: '??', judul: 'Cerita ke Orang', teks: 'Jangan simpan semua sendiri. Teman, keluarga, atau komunitas bisa jadi support system terbaik', warna: '#8b5cf6', bg: '#f5f0ff' },
    { icon: '??', judul: 'Reset Ekspektasi', teks: 'Tidak harus selalu produktif. Beberapa hari "biasa saja" adalah normal dan wajar bagi siapapun', warna: '#f59e0b', bg: '#fffbeb' },
    { icon: '??', judul: 'Kembali Pelan-Pelan', teks: 'Setelah istirahat, mulai dari task kecil dulu. Momentum dibangun perlahan, bukan langsung 100%', warna: '#0891b2', bg: '#ecfeff' },
  ]
  return (
    <PanelBab id="ch94" chNum="CHAPTER 94" judul="BURNOUT & CARA BANGKIT KEMBALI" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-6">
        ?? Burnout bukan tanda kelemahan  itu tanda kamu sudah berusaha keras. Sekarang giliran recharge!
      </div>
      <GridTiga items={tips} />
      <div className="mt-6 comic-panel-dark p-5 text-center">
        <div className="font-comic text-xl text-white mb-2">?? INGAT SELALU</div>
        <p className="text-sm font-bold text-white/70 max-w-xl mx-auto">
          Tidak ada kode yang worth it jika harganya adalah kesehatan mental kamu. Server bisa di-restart, kode bisa ditulis ulang 
          tapi kamu hanya ada satu. <span className="text-yellow-400">Jaga dirimu sebaik kamu menjaga produksimu.</span>
        </p>
      </div>
    </PanelBab>
  )
}

// -- Ch95 ----------------------------------------------------------------------
function Ch95() {
  const makanan = [
    { nama: 'Indomie Goreng', waktu: '2am coding session', alasan: 'Ritual wajib developer  mudah, cepat, murah, dan somehow selalu enak di tengah malam', icon: '??', warna: '#f59e0b' },
    { nama: 'Kopi Hitam', waktu: 'Setiap hari', alasan: 'Bahan bakar utama. Tanpa kopi, kode error semua. Dengan kopi, dunia terasa lebih logis', icon: '?', warna: '#0a0a0a' },
    { nama: 'Nasi Goreng', waktu: 'Late night food', alasan: 'Portofolio berkembang seiring nasi goreng yang habis. Korelasi? Mungkin iya!', icon: '??', warna: '#22c55e' },
    { nama: 'Snack Ringan', waktu: 'Focus mode', alasan: 'Tangan harus ada kerjaan selain ngetik. Snack ringan = teman setia saat debug maraton', icon: '??', warna: '#8b5cf6' },
  ]
  return (
    <PanelBab id="ch95" chNum="CHAPTER 95" judul="KULINER & CERITA MAKAN MAHASISWA" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">
        ?? Anggaran makan pas-pasan, tapi kreativitas menu tidak pernah habis!
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {makanan.map((m, i) => (
          <motion.div key={m.nama}
            initial={{ opacity: 0, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5, rotate: i % 2 === 0 ? -1 : 1 }}
            className="flex gap-3 p-4"
            style={{ border: `3px solid ${m.warna}`, boxShadow: `5px 5px 0 ${m.warna}`, background: 'white' }}>
            <span className="text-3xl flex-shrink-0">{m.icon}</span>
            <div>
              <div className="font-comic text-base text-[#0a0a0a]">{m.nama}</div>
              <div className="text-[10px] font-bold text-[#0a0a0a]/40 mb-1">{m.waktu}</div>
              <p className="text-xs font-bold text-[#0a0a0a]/70 italic">&ldquo;{m.alasan}&rdquo;</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-yellow p-4 text-center">
        <div className="font-comic text-base text-[#0a0a0a] mb-2">?? WARUNG LANGGANAN MAHASISWA</div>
        <p className="text-xs font-bold text-[#0a0a0a]/70">
          Warung dekat kos yang buka 24 jam adalah penyelamat. Nasi + lauk Rp 10K = bisa lanjut coding sampai pagi tanpa khawatir lapar!
        </p>
      </div>
    </PanelBab>
  )
}

// -- Ch96 ----------------------------------------------------------------------
function Ch96() {
  const media = [
    { platform: 'GitHub', konten: 'Repository proyek, open source contributions, dan portfolio kode publik', followers: ' (Growing)', warna: '#0a0a0a', icon: '??' },
    { platform: 'LinkedIn', konten: 'Professional profile, artikel tech, dan networking dengan developer & HRD', followers: '500+ koneksi', warna: '#0a66c2', icon: '??' },
    { platform: 'Instagram', konten: 'Behind the scenes coding, tips singkat, dan update perjalanan developer', followers: 'Personal', warna: '#e1306c', icon: '??' },
    { platform: 'WhatsApp/Telegram', konten: 'Grup developer lokal, diskusi teknis, dan berbagi resource belajar', followers: 'Multiple Groups', warna: '#25d366', icon: '??' },
  ]
  return (
    <PanelBab id="ch96" chNum="CHAPTER 96" judul="JEJAK DIGITAL  PERSONAL BRANDING" warna="#0a66c2" latarBelakang="#e8f2ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ?? Personal brand yang kuat = CV yang tidak perlu dilamar, tapi dicari!
      </div>
      <div className="space-y-3 mb-8">
        {media.map((m, i) => (
          <motion.div key={m.platform}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="flex gap-4 p-4"
            style={{ border: `3px solid ${m.warna}`, boxShadow: `4px 4px 0 ${m.warna}`, background: 'white' }}>
            <div className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: m.warna, border: '2px solid #0a0a0a' }}>{m.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="font-comic text-base text-[#0a0a0a]">{m.platform}</div>
              <p className="text-xs font-bold text-[#0a0a0a]/60 mt-0.5 leading-relaxed">{m.konten}</p>
            </div>
            <span className="font-comic text-xs flex-shrink-0" style={{ color: m.warna }}>{m.followers}</span>
          </motion.div>
        ))}
      </div>
      <GridTiga items={[
        { icon: '??', judul: 'Konsistensi', teks: 'Lebih baik posting 1x seminggu secara konsisten daripada 10x sebulan lalu hilang 3 bulan', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '??', judul: 'Niche Clear', teks: 'Fokus ke web development dan tech  jangan campur terlalu banyak topik agar audiens tertarget', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '??', judul: 'Engagement', teks: 'Balas komentar, bantu orang lain, dan aktif di komunitas. Networking itu investasi jangka panjang!', warna: '#8b5cf6', bg: '#f5f0ff' },
      ]} />
    </PanelBab>
  )
}

// -- Ch97 ----------------------------------------------------------------------
function Ch97() {
  const film = [
    { judul: 'The Social Network', pelajaran: 'Startup bisa lahir dari kamar kos. Tapi etika dan friendship harus dijaga  jangan sampai sukses mengorbankan hubungan', genre: 'Drama/Tech', warna: '#1a5cff', icon: '??' },
    { judul: 'Steve Jobs (2015)', pelajaran: 'Visi kuat dan passion yang konsisten bisa mengubah industri. Tapi perfeksionisme yang ekstrem bisa menyakiti orang sekitar', genre: 'Biopic', warna: '#0a0a0a', icon: '??' },
    { judul: 'Ex Machina', pelajaran: 'AI yang terlalu canggih tanpa etika = bahaya. Teknologi harus selalu dalam kendali nilai-nilai kemanusiaan', genre: 'Sci-Fi', warna: '#8b5cf6', icon: '??' },
    { judul: 'Ready Player One', pelajaran: 'Dunia virtual punya nilai nyata. Tapi jangan lupakan dunia fisik  realita tetap lebih penting dari semua metaverse', genre: 'Sci-Fi', warna: '#e63329', icon: '??' },
    { judul: 'Hackers (1995)', pelajaran: 'Kulture hacker sejati adalah tentang kebebasan informasi dan kreativitas  bukan merusak. Be an ethical hacker!', genre: 'Tech Thriller', warna: '#22c55e', icon: '??' },
    { judul: 'Silicon Valley (Series)', pelajaran: 'Startup itu penuh drama, pivot, dan kegagalan. Tapi tetap lucu dan layak diperjuangkan!', genre: 'Komedi', warna: '#f59e0b', icon: '??' },
  ]
  return (
    <PanelBab id="ch97" chNum="CHAPTER 97" judul="FILM & SERIES FAVORIT DEVELOPER" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">
        ?? Film tech bukan hiburan biasa  sering jadi inspirasi dan pelajaran hidup!
      </div>
      <div className="space-y-3">
        {film.map((f, i) => (
          <motion.div key={f.judul}
            initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="flex gap-3 p-3"
            style={{ border: `2px solid ${f.warna}`, boxShadow: `3px 3px 0 ${f.warna}`, background: 'white' }}>
            <div className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: f.warna, border: '2px solid #0a0a0a' }}>{f.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-comic text-sm text-[#0a0a0a]">{f.judul}</span>
                <span className="font-bold text-[9px] text-white px-1.5 py-0.5" style={{ background: f.warna }}>{f.genre}</span>
              </div>
              <p className="text-xs font-bold text-[#0a0a0a]/60 mt-0.5 italic">&ldquo;{f.pelajaran}&rdquo;</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch98 ----------------------------------------------------------------------
function Ch98() {
  const anime = [
    { judul: 'Sword Art Online', relevan: 'Virtual reality yang immersive  inspirasi untuk membangun KVT.kom sebagai "kampus virtual" yang engaging', icon: '??', warna: '#1a5cff' },
    { judul: 'My Hero Academia', relevan: 'Semua orang punya kekuatan unik. Developer dengan skill masing-masing bisa jadi hero di bidangnya sendiri', icon: '??', warna: '#22c55e' },
    { judul: 'Steins;Gate', relevan: 'Time manipulation & butterfly effect dalam coding: satu perubahan kecil di kode bisa berdampak besar ke seluruh sistem', icon: '?', warna: '#e63329' },
    { judul: 'Overlord', relevan: 'Strategi dan guild management  menginspirasi cara membangun dan mengelola komunitas KVT.kom', icon: '??', warna: '#8b5cf6' },
    { judul: 'No Game No Life', relevan: 'Setiap masalah adalah permainan yang bisa dipecahkan dengan logika yang tepat  mindset yang sempurna untuk developer!', icon: '??', warna: '#f59e0b' },
    { judul: 'Dr. Stone', relevan: 'Membangun kembali peradaban dengan sains dan teknologi dari nol. Inspirasi untuk inovasi IoT dari bahan bekas!', icon: '??', warna: '#0891b2' },
  ]
  return (
    <PanelBab id="ch98" chNum="CHAPTER 98" judul="ANIME & INSPIRASI DEVELOPER" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ?? Anime bukan cuma tontonan  ini sumber motivasi dan analogi coding terbaik!
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {anime.map((a, i) => (
          <motion.div key={a.judul}
            initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.09, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${a.warna}`, boxShadow: `4px 4px 0 ${a.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-3 py-2" style={{ background: a.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-lg">{a.icon}</span>
              <span className="font-comic text-sm text-white">{a.judul}</span>
            </div>
            <p className="p-3 text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{a.relevan}</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch99 ----------------------------------------------------------------------
function Ch99() {
  const fail = [
    { kejadian: 'Deploy ke Production Tanpa Testing', dampak: 'Website client down 2 jam. Pelanggan komplain, reputasi taruhan!', pelajaran: 'Selalu test di staging dulu. CI/CD pipeline itu bukan opsional  wajib!', warna: '#e63329' },
    { kejadian: 'Lupa Backup Database', dampak: 'Data 3 bulan hilang karena hard disk rusak saat pengerjaan proyek', pelajaran: 'Backup otomatis setiap hari. Data adalah nyawa sebuah sistem  jaga seperti harta terpenting', warna: '#f59e0b' },
    { kejadian: 'Commit Password ke GitHub', dampak: 'Repository publik dengan kredensial database langsung terpampang!', pelajaran: 'Selalu pakai .env file dan pastikan masuk .gitignore. Secret tidak boleh ada di kode sama sekali', warna: '#8b5cf6' },
    { kejadian: 'Estimate Waktu Proyek Salah', dampak: 'Estimasi 1 minggu, realita 3 minggu. Client kecewa dengan keterlambatan', pelajaran: 'Selalu kalikan estimasi dengan 2-3x. Murphy Law berlaku double di software development!', warna: '#1a5cff' },
    { kejadian: 'Tidak Dokumentasi Kode', dampak: 'Kembali ke proyek lama 6 bulan kemudian  tidak ingat satu pun logikanya!', pelajaran: 'Kode yang tidak terdokumentasi adalah legacy nightmare. Tulis komentar bahkan untuk diri sendiri', warna: '#22c55e' },
  ]
  return (
    <PanelBab id="ch99" chNum="CHAPTER 99" judul="KEGAGALAN YANG MENGAJARKAN  LESSONS HARD LEARNED" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-6">
        ?? Kegagalan bukan akhir  itu biaya pendidikan terbaik yang pernah ada!
      </div>
      <div className="space-y-4">
        {fail.map((f, i) => (
          <motion.div key={f.kejadian}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            className="overflow-hidden"
            style={{ border: `3px solid ${f.warna}`, boxShadow: `4px 4px 0 ${f.warna}`, background: 'white' }}>
            <div className="px-4 py-2" style={{ background: f.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="font-comic text-sm text-white">?? {f.kejadian}</span>
            </div>
            <div className="p-4 grid sm:grid-cols-2 gap-3">
              <div>
                <div className="text-[10px] font-bold text-[#0a0a0a]/40 mb-1">? DAMPAK</div>
                <p className="text-xs font-bold text-[#0a0a0a]/70">{f.dampak}</p>
              </div>
              <div>
                <div className="text-[10px] font-bold mb-1" style={{ color: f.warna }}>? PELAJARAN</div>
                <p className="text-xs font-bold text-[#0a0a0a]/70">{f.pelajaran}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch100 ---------------------------------------------------------------------
function Ch100() {
  return (
    <PanelBab id="ch100" chNum="CHAPTER 100" judul="MILESTONE 100  CHAPTER SPESIAL!" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.1 }}
          viewport={{ once: true }}>
          <div className="text-7xl sm:text-9xl mb-4">??</div>
          <div className="font-comic text-5xl sm:text-7xl text-yellow-400 mb-2" style={{ textShadow: '4px 4px 0 #fff' }}>
            CHAPTER 100!
          </div>
          <div className="font-comic text-2xl text-white mb-6">MILESTONE SPESIAL  TERIMA KASIH!</div>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { angka: '100', label: 'Chapter Terlewati', icon: '??', warna: '#ffd700' },
            { angka: '8', label: 'Cerita Tersisa', icon: '?', warna: '#22c55e' },
            { angka: '1', label: 'Developer Unik', icon: '?', warna: '#1a5cff' },
          ].map(s => (
            <div key={s.label} className="text-center p-4"
              style={{ border: `3px solid ${s.warna}`, boxShadow: `4px 4px 0 ${s.warna}`, background: '#111' }}>
              <div className="text-3xl mb-1">{s.icon}</div>
              <div className="font-comic text-3xl" style={{ color: s.warna }}>{s.angka}</div>
              <div className="text-xs text-white/50 font-bold">{s.label}</div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="p-6 mb-6"
          style={{ border: '4px solid #ffd700', boxShadow: '6px 6px 0 #ffd700', background: '#111', borderRadius: 16 }}>
          <p className="text-sm font-bold text-white/80 leading-relaxed">
            100 chapter bukan tentang jumlah halaman  ini tentang <span className="text-yellow-400">100 versi diri saya</span>
            yang terus bertumbuh. Setiap chapter adalah cermin perjalanan, perjuangan, dan passion seorang developer muda
            dari Jember yang bermimpi besar.
            <br /><br />
            Dan perjalanan ini belum selesai. <span className="text-yellow-400">Masih ada 20 chapter lagi...</span>
          </p>
        </motion.div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-comic text-base">?? HUBUNGI SAYA</a>
          <a href="#home" className="btn-comic-outline text-base" style={{ color: '#ffd700', borderColor: '#ffd700', boxShadow: '4px 4px 0 #ffd700' }}>
            ?? BACA DARI AWAL
          </a>
        </div>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup9() {
  return (
    <>
      <div className="comic-divider" />
      <Ch91 /><div className="comic-divider" />
      <Ch92 /><div className="comic-divider" />
      <Ch93 /><div className="comic-divider" />
      <Ch94 /><div className="comic-divider" />
      <Ch95 /><div className="comic-divider" />
      <Ch96 /><div className="comic-divider" />
      <Ch97 /><div className="comic-divider" />
      <Ch98 /><div className="comic-divider" />
      <Ch99 /><div className="comic-divider" />
      <Ch100 />
    </>
  )
}
