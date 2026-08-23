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

function Ch151() {
  const tipe = [
    { tipe: 'Technical Lead', tanggung: 'Arsitektur sistem, code review, dan mentoring tim developer junior', skill: ['System Design', 'Code Review', 'Mentoring'], warna: '#1a5cff' },
    { tipe: 'Engineering Manager', tanggung: 'Karir tim, hiring, dan bridge antara tech dan bisnis. Lebih manusia, lebih sedikit kode', skill: ['People Management', '1:1 Meeting', 'Hiring'], warna: '#22c55e' },
    { tipe: 'CTO', tanggung: 'Visi teknologi jangka panjang, stack selection, dan memastikan tech mendukung tujuan bisnis', skill: ['Strategy', 'Architecture', 'Stakeholder Mgmt'], warna: '#8b5cf6' },
    { tipe: 'Product Manager', tanggung: 'Jembatan antara user needs, bisnis, dan tim engineering. No-code tapi butuh paham teknis', skill: ['Product Strategy', 'Data Analysis', 'Roadmap'], warna: '#f59e0b' },
  ]
  return (
    <PanelBab id="ch151" num="151" judul="KEPEMIMPINAN TECH — DARI DEVELOPER KE LEADER" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">🏆 Jadi leader bukan berarti berhenti koding — ini tentang melipatgandakan impact lewat orang lain!</div>
      <div className="space-y-4 mb-6">
        {tipe.map((t, i) => (
          <motion.div key={t.tipe}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            style={{ border: `3px solid ${t.warna}`, boxShadow: `4px 4px 0 ${t.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: t.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="font-comic text-sm text-white">{t.tipe}</span>
            </div>
            <div className="p-3 grid sm:grid-cols-2 gap-3">
              <p className="text-xs font-bold text-[#0a0a0a]/70">{t.tanggung}</p>
              <div className="flex flex-wrap gap-1.5">
                {t.skill.map(s => <span key={s} className="font-bold text-[9px] px-2 py-0.5 text-white" style={{ background: t.warna }}>{s}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-yellow p-5">
        <div className="font-comic text-base text-[#0a0a0a] mb-2">👑 CARA RIZKI MEMIMPIN KVT.KOM</div>
        <p className="text-sm font-bold text-[#0a0a0a]/70 leading-relaxed">
          Lead by example: kode sendiri, pelajari sendiri, dan tunjukkan prosesnya. Transparansi penuh dalam keputusan.
          Focus on growth semua anggota tim — sukses tim adalah sukses pribadi.
        </p>
      </div>
    </PanelBab>
  )
}

function Ch152() {
  return (
    <PanelBab id="ch152" num="152" judul="GENERASI BANGSA — TONGKAT ESTAFET DIGITAL" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🇮🇩🌱 Generasi kita adalah yang pertama punya akses penuh ke internet dan AI — tanggung jawab besar!
      </div>
      <GridTiga items={[
        { icon: '📚', judul: 'Literasi Digital', teks: '90 juta anak muda Indonesia perlu literasi digital yang benar: coding, critical thinking, dan keamanan online', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🏘️', judul: 'Desa Digital', teks: 'Bawa teknologi ke desa bukan cuma sinyal — tapi skill dan mindset digital untuk warga desa', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '👩💻', judul: 'Perempuan di Tech', teks: 'Gap gender di teknologi masih besar di Indonesia — butuh lebih banyak program untuk dorong developer perempuan', warna: '#e1306c', bg: '#fff0f5' },
        { icon: '♿', judul: 'Disabilitas & Tech', teks: 'Accessibility bukan opsional — developer Indonesia harus build produk yang bisa digunakan semua orang', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🌍', judul: 'Diaspora Tech', teks: 'Ribuan developer Indonesia bekerja di luar negeri. Bagaimana memastikan ilmu mereka balik ke Indonesia?', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🤝', judul: 'Mentoring Chain', teks: 'Developer yang sudah maju wajib mentori yang di bawah — chain of knowledge ini membangun ekosistem kuat', warna: '#e63329', bg: '#fef2f2' },
      ]} />
    </PanelBab>
  )
}

function Ch153() {
  const filsafat = [
    { filsuf: 'Stoicism', relevan: 'Kendalikan yang bisa dikontrol (kode sendiri), terima yang tidak (requirement berubah di menit terakhir)', icon: '🧠', warna: '#8b5cf6' },
    { filsuf: 'Kaizen (改善)', relevan: 'Filosofi Jepang: perbaikan kecil setiap hari lebih powerful dari perubahan besar sesekali. 1% sehari!', icon: '🌱', warna: '#22c55e' },
    { filsuf: 'First Principles', relevan: "Elon Musk's approach: bongkar asumsi, mulai dari dasar. Jangan tanya 'bagaimana' dulu, tapi 'mengapa'", icon: '💡', warna: '#1a5cff' },
    { filsuf: 'Wabi-Sabi (侘寂)', relevan: 'Keindahan dalam ketidaksempurnaan. Shipped imperfect > never shipped perfect. MVP adalah seni!', icon: '🎨', warna: '#f59e0b' },
    { filsuf: 'Ubuntu Philosophy', relevan: '"Saya ada karena kita ada" — filosofi Afrika yang relevan untuk open source dan komunitas developer', icon: '👥', warna: '#e63329' },
    { filsuf: 'Growth Mindset', relevan: 'Carol Dweck: talent adalah awal, bukan akhir. Kemampuan bisa dikembangkan — intelligence is not fixed!', icon: '🚀', warna: '#0891b2' },
  ]
  return (
    <PanelBab id="ch153" num="153" judul="FILOSOFI DEVELOPER — HIKMAH DALAM KODE" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">💭 Developer terbaik bukan yang paling pintar — tapi yang punya prinsip hidup yang benar!</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filsafat.map((f, i) => (
          <motion.div key={f.filsuf}
            initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.09, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${f.warna}`, boxShadow: `4px 4px 0 ${f.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-3 py-2" style={{ background: f.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-lg">{f.icon}</span>
              <span className="font-comic text-sm text-white">{f.filsuf}</span>
            </div>
            <p className="p-3 text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{f.relevan}</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

function Ch154() {
  return (
    <PanelBab id="ch154" num="154" judul="DIVERSITY — TEKNOLOGI UNTUK SEMUA MANUSIA" warna="#e1306c" latarBelakang="#fff0f5">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🌍 Teknologi yang dibangun hanya oleh satu jenis orang akan melayani hanya satu jenis orang!
      </div>
      <GridTiga items={[
        { icon: '👩💻', judul: 'Women in Tech', teks: 'Hanya 22% developer di dunia adalah perempuan. Program khusus dan mentoring aktif sangat dibutuhkan', warna: '#e1306c', bg: '#fff0f5' },
        { icon: '🌏', judul: 'Geographic Diversity', teks: 'Silicon Valley bukan satu-satunya pusat inovasi. Developer dari Jakarta, Jember, Lombok punya ide yang sama valid', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '♿', judul: 'Accessibility First', teks: 'WCAG guidelines bukan option — build produk yang accessible dari hari pertama, bukan tambahan di akhir', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🎓', judul: 'Age Inclusivity', teks: 'Senior developer dengan 20 tahun pengalaman punya wisdom yang tidak bisa diganti AI atau developer muda', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🧠', judul: 'Neurodiversity', teks: 'Autisme, ADHD, disleksia — banyak developer berbakat dengan profile neurological berbeda. Embrace it!', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🌐', judul: 'Language Diversity', teks: 'Dokumentasi hanya dalam English mengeksklusi miliaran orang. Kontribusi ke terjemahan = dampak besar!', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
    </PanelBab>
  )
}

function Ch155() {
  return (
    <PanelBab id="ch155" num="155" judul="DIGITAL CITIZENSHIP — WARGA DIGITAL YANG BAIK" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">🛡️ Di dunia digital, setiap klik adalah tindakan — jadilah warga digital yang bertanggung jawab!</div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          {[
            { aspek: 'Privasi Online', desc: 'Pahami data apa yang dikumpulkan tentangmu. Gunakan password manager, 2FA, dan VPN saat di WiFi publik', icon: '🔐', warna: '#1a5cff' },
            { aspek: 'Informasi Digital', desc: 'Verifikasi sebelum share. Cek sumber, tanggal, dan konteks. Hoaks menyebar 6x lebih cepat dari fakta!', icon: '🔍', warna: '#22c55e' },
            { aspek: 'Digital Footprint', desc: 'Yang kamu post online bisa tetap ada selamanya. Think before you post — terutama di masa muda', icon: '👣', warna: '#8b5cf6' },
            { aspek: 'Screen Time', desc: 'Notifikasi, doomscrolling, dan filter bubble adalah fitur yang sengaja dirancang. Sadar dan batasi!', icon: '⏰', warna: '#f59e0b' },
            { aspek: 'Online Kindness', desc: 'Di balik setiap akun ada manusia nyata. Treat others online as you would offline. No cyberbullying!', icon: '❤️', warna: '#e1306c' },
          ].map((a, i) => (
            <motion.div key={a.aspek}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-3 p-3"
              style={{ border: `2px solid ${a.warna}`, boxShadow: `3px 3px 0 ${a.warna}`, background: 'white' }}>
              <span className="text-2xl flex-shrink-0">{a.icon}</span>
              <div>
                <div className="font-comic text-sm" style={{ color: a.warna }}>{a.aspek}</div>
                <p className="text-xs font-bold text-[#0a0a0a]/60 leading-snug">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="comic-panel-dark p-5">
          <div className="font-comic text-xl text-white mb-3">💻 DEVELOPER SEBAGAI ROLE MODEL</div>
          <p className="text-sm text-white/70 font-bold leading-relaxed mb-4">
            Developer membangun alat yang digunakan jutaan orang. Tanggung jawab kita lebih besar dari rata-rata
            warganet biasa. Desain produk yang mendorong kebiasaan digital yang sehat, bukan addictive.
          </p>
          <div className="space-y-2">
            {[
              'Pasang daily usage reminder di app yang kamu buat',
              'Hindari dark patterns yang manipulasi pengguna',
              'Default privacy settings harus paling protektif',
              'Desain untuk digital wellbeing, bukan engagement saja',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-white/60 font-bold">
                <span className="text-yellow-400 flex-shrink-0">✅</span> {tip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

function Ch156() {
  return (
    <PanelBab id="ch156" num="156" judul="INOVASI LOKAL — SOLUSI UNTUK MASALAH INDONESIA" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🇮🇩💡 Solusi terbaik untuk masalah Indonesia harus datang dari orang Indonesia yang paham konteksnya!
      </div>
      <GridTiga items={[
        { icon: '🏝️', judul: 'Konektivitas Kepulauan', teks: '17.000 pulau dengan akses internet tidak merata. Solusi mesh network dan offline-first app sangat dibutuhkan', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '🌾', judul: 'Pertanian Rakyat', teks: 'Petani kecil butuh informasi harga pasar real-time, prakiraan cuaca lokal, dan akses kredit digital yang mudah', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🏥', judul: 'Kesehatan Perdesaan', teks: 'Posyandu digital, rekam medis elektronik desa, dan telemedicine yang bisa jalan di HP Android murah', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🗣️', judul: 'Bahasa Daerah', teks: 'NLP untuk 300+ bahasa daerah Indonesia — Google Translate belum cover semua. Ini research opportunity!', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '💳', judul: 'Inklusi Keuangan', teks: '51 juta UMKM Indonesia butuh solusi keuangan digital yang sederhana, murah, dan bisa jalan tanpa internet', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '⚠️', judul: 'Bencana Alam', teks: 'Sistem peringatan dini bencana berbasis IoT dan SMS (karena internet tidak selalu ada saat bencana)', warna: '#f59e0b', bg: '#fffbeb' },
      ]} />
    </PanelBab>
  )
}

function Ch157() {
  return (
    <PanelBab id="ch157" num="157" judul="GENERASI ALPHA — ANAK-ANAK DI ERA AI" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">🧒 Generasi yang lahir setelah 2010 akan tumbuh bersama AI seperti kita tumbuh bersama internet!</div>
      <GridTiga items={[
        { icon: '🤖', judul: 'AI Native', teks: 'Mereka akan menggunakan AI alami seperti kita menggunakan Google. Pertanyaannya: diajari berpikir kritis?', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '📚', judul: 'Kurikulum Baru', teks: 'Coding literacy, AI literacy, dan critical thinking harus jadi kurikulum wajib SD — bukan pilihan', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🎮', judul: 'Gaming & Learning', teks: 'Untuk Gen Alpha, game adalah medium belajar paling alami. Gamified education bukan gimmick — ini masa depan', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '⚠️', judul: 'Screen Concern', teks: 'Screen time di usia dini berpengaruh ke perkembangan otak. Balance antara digital dan offline sangat penting', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🌱', judul: 'Climate-First', teks: 'Mereka akan hidup dengan dampak perubahan iklim lebih lama dari kita — env consciousness akan tinggi', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '🎯', judul: 'Pekerjaan Mereka', teks: '65% pekerjaan Gen Alpha belum ada sekarang. Fleksibilitas dan adaptabilitas adalah skill paling berharga', warna: '#f59e0b', bg: '#fffbeb' },
      ]} />
    </PanelBab>
  )
}

function Ch158() {
  return (
    <PanelBab id="ch158" num="158" judul="TEKNOLOGI & SPIRITUALITAS — HARMONI HIDUP" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🕌 Teknologi yang baik seharusnya mendukung nilai-nilai kemanusiaan dan spiritualitas, bukan menggantikannya!
      </div>
      <GridTiga items={[
        { icon: '📖', judul: 'Al-Quran Digital', teks: 'App Quran dengan tajwid interaktif, tafsir lengkap, dan audio dari qori terbaik dunia. Teknologi melayani ibadah', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🧭', judul: 'Qibla & Ibadah', teks: 'AR compass Kiblat, jadwal shalat berbasis GPS presisi, dan reminder berbasis geofencing masjid', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '💙', judul: 'Donasi Digital', teks: 'QRIS zakat, infaq, dan sedekah yang transparan — pengguna bisa track penggunaan dana secara real-time', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '🙏', judul: 'Mindfulness Apps', teks: 'Dzikir counter digital, doa harian, dan reminder spiritual yang terintegrasi dalam kehidupan modern', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '⚖️', judul: 'Etika Islam & AI', teks: 'Bagaimana prinsip Islam (amanah, adil, maslahat) bisa jadi panduan dalam pengembangan teknologi AI', warna: '#e63329', bg: '#fef2f2' },
        { icon: '✨', judul: 'Halal Tech', teks: 'Sertifikasi halal digital untuk produk makanan, kosmetik, dan farmasi berbasis blockchain yang terpercaya', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
    </PanelBab>
  )
}

function Ch159() {
  return (
    <PanelBab id="ch159" num="159" judul="KEARIFAN LOKAL — DIGITALISASI BUDAYA" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">🎭 Kearifan lokal Indonesia yang kaya adalah harta yang butuh digitalisasi sebelum hilang!</div>
      <GridTiga items={[
        { icon: '🎨', judul: 'Seni Tradisional', teks: 'Wayang, batik, angklung, gamelan — digitalisasi 3D, NFT, dan platform pembelajaran untuk kenalkan ke dunia', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '✏️', judul: 'Aksara Daerah', teks: 'Font digital aksara Jawa, Sunda, Bugis — keyboard input dan OCR untuk lestarikan tulisan tradisional', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '🌺', judul: 'Etnobotani Digital', teks: 'Database tanaman obat tradisional Indonesia berbasis AI — knowledge healing plants yang terancam hilang', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🎵', judul: 'Musik Daerah AI', teks: 'Digitalisasi ratusan lagu daerah dengan metadata lengkap dan bisa diakses semua orang via platform streaming', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '👘', judul: 'Fashion Heritage', teks: 'AR try-on pakaian adat dari seluruh nusantara — kenalkan kekayaan budaya tanpa harus keliling Indonesia', warna: '#e63329', bg: '#fef2f2' },
        { icon: '🏛️', judul: 'Heritage 3D', teks: 'Scan dan model 3D candi, situs bersejarah, dan artefak museum untuk akses virtual global', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
    </PanelBab>
  )
}

function Ch160() {
  const timeline = [
    { tahun: '1936', event: 'Alan Turing papers — fondasi teoritis komputer modern dan konsep "Mesin Turing"', icon: '💡', warna: '#1a5cff' },
    { tahun: '1969', event: 'ARPANET lahir — cikal bakal internet. 4 komputer terhubung untuk pertama kali', icon: '🌐', warna: '#22c55e' },
    { tahun: '1991', event: 'World Wide Web oleh Tim Berners-Lee. Internet jadi bisa diakses publik!', icon: '🕸️', warna: '#8b5cf6' },
    { tahun: '1995', event: 'PHP lahir oleh Rasmus Lerdorf — bahasa yang jadi fondasi 80% web sampai sekarang', icon: '🐘', warna: '#f59e0b' },
    { tahun: '2007', event: 'iPhone pertama. Smartphone mengubah cara manusia berinteraksi dengan dunia selamanya', icon: '📱', warna: '#e63329' },
    { tahun: '2011', event: 'Laravel framework lahir. PHP menjadi modern dan elegan. Game changer untuk web dev!', icon: '🔧', warna: '#FF2D20' },
    { tahun: '2016', event: 'AlphaGo mengalahkan juara Go dunia. AI modern memasuki era baru yang berbeda', icon: '🤖', warna: '#0891b2' },
    { tahun: '2022', event: 'ChatGPT diluncurkan. AI generatif mengubah cara manusia berinteraksi dengan komputer', icon: '✨', warna: '#10a37f' },
    { tahun: '2026', event: 'Rizki Habibi membangun Gelar.id — platform edukasi developer dari Jember untuk Indonesia! 🚀', icon: '⭐', warna: '#ffd700' },
  ]
  return (
    <PanelBab id="ch160" num="160" judul="SEJARAH COMPUTING — BAHU DI MANA KITA BERDIRI" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        📅 Memahami sejarah computing membantu kita menghargai betapa jauhnya perjalanan ini dan ke mana arahnya!
      </div>
      <div className="relative">
        <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5"
          style={{ background: 'repeating-linear-gradient(180deg,#1a5cff 0,#1a5cff 6px,transparent 6px,transparent 12px)' }} />
        <div className="space-y-3 pl-14 sm:pl-16">
          {timeline.map((t, i) => (
            <motion.div key={t.tahun}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, type: 'spring' }}
              viewport={{ once: true }}
              className="relative">
              <div className="absolute -left-10 sm:-left-12 top-2 w-8 h-8 flex items-center justify-center text-base"
                style={{ background: t.warna, border: '2px solid #0a0a0a', boxShadow: '1px 1px 0 #0a0a0a' }}>{t.icon}</div>
              <div className="p-3" style={{ border: `2px solid ${t.warna}`, boxShadow: `3px 3px 0 ${t.warna}`, background: 'white' }}>
                <span className="font-comic text-sm" style={{ color: t.warna }}>{t.tahun} — </span>
                <span className="font-bold text-xs text-[#0a0a0a]">{t.event}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup15() {
  return (
    <>
      <div className="comic-divider" />
      <Ch151 /><div className="comic-divider" />
      <Ch152 /><div className="comic-divider" />
      <Ch153 /><div className="comic-divider" />
      <Ch154 /><div className="comic-divider" />
      <Ch155 /><div className="comic-divider" />
      <Ch156 /><div className="comic-divider" />
      <Ch157 /><div className="comic-divider" />
      <Ch158 /><div className="comic-divider" />
      <Ch159 /><div className="comic-divider" />
      <Ch160 />
    </>
  )
}
