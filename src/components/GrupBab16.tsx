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
          viewport={{ once: false, amount: 0.1 }}
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

// -- Ch161: 100 HARI PRODUKTIF -------------------------------------------------
function Ch161() {
  const target = [
    { hari: '1-10', fokus: 'Foundation', target: 'Setup workspace sempurna + habit tracking + clear goals 2026', warna: '#1a5cff' },
    { hari: '11-30', fokus: 'Deep Work', target: 'Selesaikan BAB IV-V skripsi + launch KVT.kom landing page', warna: '#22c55e' },
    { hari: '31-50', fokus: 'Launch', target: 'KVT.kom beta launch + onboard 100 user pertama + validasi konsep', warna: '#f59e0b' },
    { hari: '51-70', fokus: 'Growth', target: 'Iterasi berdasar feedback + tambah 3 kursus baru + reach 500 user', warna: '#8b5cf6' },
    { hari: '71-90', fokus: 'Expand', target: 'Cari co-founder + pitch ke seed investor + partnership dengan kampus', warna: '#e63329' },
    { hari: '91-100', fokus: 'Reflect', target: 'Review semua pencapaian + set target 100 hari berikutnya', warna: '#0891b2' },
  ]
  return (
    <PanelBab id="ch161" num="161" judul="100 HARI PRODUKTIF — CHALLENGE HIDUP" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">?? 100 hari adalah waktu yang cukup untuk mengubah hidup secara signifikan — jika dijalani dengan intention!</div>
      <div className="space-y-3">
        {target.map((t, i) => (
          <motion.div key={t.hari}
            initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.09, type: 'spring' }}
            viewport={{ once: false }}
            className="flex gap-3 p-3"
            style={{ border: `3px solid ${t.warna}`, boxShadow: `4px 4px 0 ${t.warna}`, background: 'white' }}>
            <div className="flex-shrink-0 text-center" style={{ minWidth: 60 }}>
              <div className="font-comic text-lg" style={{ color: t.warna }}>H{t.hari}</div>
              <div className="font-bold text-[9px] text-white px-1.5 py-0.5" style={{ background: t.warna }}>{t.fokus}</div>
            </div>
            <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{t.target}</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch162: PROYEK IMPIAN 2027 -------------------------------------------------
function Ch162() {
  const proyek = [
    { nama: 'KVT.kom v2.0', desc: 'Platform edukasi full-featured: live coding, AI tutor, job board, dan komunitas aktif 10.000+ member', status: 'AKTIF DEVELOP', icon: '??', warna: '#8b5cf6' },
    { nama: 'Sistem Donasi Transparan', desc: 'QRIS-based donation platform dengan blockchain transparency. Setiap rupiah bisa dilacak penggunaannya', status: 'PLANNING', icon: '??', warna: '#e63329' },
    { nama: 'Website Desa Platform', desc: 'SaaS khusus untuk website desa: template, CMS mudah, hosting murah, training untuk operator desa', status: 'PLANNING', icon: '???', warna: '#22c55e' },
    { nama: 'Developer Portfolio AI', desc: 'AI yang membantu developer junior membuat portfolio yang menarik dan ATS-friendly secara otomatis', status: 'IDEA', icon: '??', warna: '#1a5cff' },
    { nama: 'Smart Farming App', desc: 'App untuk petani lokal: harga pasar, cuaca, tips budidaya, dan marketplace langsung ke konsumen', status: 'IDEA', icon: '??', warna: '#f59e0b' },
  ]
  return (
    <PanelBab id="ch162" num="162" judul="PROYEK IMPIAN 2027 — VISI YANG MENANTI" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ?? Setiap proyek besar bermula dari satu baris kode dan satu keyakinan: &ldquo;ini bisa dilakukan!&rdquo;
      </div>
      <div className="space-y-4">
        {proyek.map((p, i) => (
          <motion.div key={p.nama}
            initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ x: 5 }}
            style={{ border: `3px solid ${p.warna}`, boxShadow: `5px 5px 0 ${p.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center justify-between px-4 py-2" style={{ background: p.warna, borderBottom: '2px solid #0a0a0a' }}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{p.icon}</span>
                <span className="font-comic text-sm text-white">{p.nama}</span>
              </div>
              <span className="font-comic text-[9px] bg-white text-[#0a0a0a] px-2 py-0.5">{p.status}</span>
            </div>
            <p className="p-3 text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch163: SATU TAHUN KVT.KOM -------------------------------------------------
function Ch163() {
  return (
    <PanelBab id="ch163" num="163" judul="SATU TAHUN KVT.KOM — PROYEKSI & HARAPAN" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">?? Apa yang diharapkan setelah satu tahun KVT.kom berjalan?</div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[
            { metric: 'Pengguna Terdaftar', target: '5.000+', icon: '??', warna: '#22c55e' },
            { metric: 'Kursus Tersedia', target: '20+ kursus', icon: '??', warna: '#1a5cff' },
            { metric: 'Mentor Aktif', target: '15 mentor', icon: '??', warna: '#8b5cf6' },
            { metric: 'Developer Dapat Kerja', target: '200+ alumni', icon: '??', warna: '#f59e0b' },
            { metric: 'Kota Terjangkau', target: '5 kota', icon: '???', warna: '#e63329' },
            { metric: 'Revenue Bulanan', target: 'Rp 50JT+', icon: '??', warna: '#0891b2' },
          ].map(m => (
            <div key={m.metric} className="flex items-center justify-between p-3"
              style={{ border: `2px solid ${m.warna}`, boxShadow: `2px 2px 0 ${m.warna}`, background: 'white' }}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{m.icon}</span>
                <span className="font-bold text-xs text-[#0a0a0a]">{m.metric}</span>
              </div>
              <span className="font-comic text-base" style={{ color: m.warna }}>{m.target}</span>
            </div>
          ))}
        </div>
        <div className="comic-panel-dark p-5">
          <div className="font-comic text-xl text-white mb-3">?? HARAPAN TERBESAR</div>
          <p className="text-sm text-white/70 font-bold leading-relaxed mb-4">
            Bukan tentang angka revenue atau jumlah user. Harapan terbesarnya sederhana:
          </p>
          <div className="space-y-3">
            {[
              'Satu anak dari pelosok yang bisa belajar coding gratis via KVT.kom',
              'Satu UMKM yang websitenya dibuat oleh alumni KVT.kom',
              'Satu developer yang dapat kerja pertamanya karena portfolio dari KVT.kom',
              'Satu desa yang punya website berkat program website desa KVT.kom',
            ].map((h, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">??</span>
                <p className="text-xs text-white/70 font-bold italic">&ldquo;{h}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// -- Ch164: PESAN UNTUK GENERASI BERIKUTNYA ------------------------------------
function Ch164() {
  const pesan = [
    { kepada: 'Developer 2030', teks: 'Teknologi yang kalian pakai sekarang dibangun oleh developer seperti kami yang percaya bahwa kode bisa mengubah dunia. Jaga kepercayaan itu!', icon: '??', warna: '#1a5cff' },
    { kepada: 'Pengusaha Tech Muda', teks: 'Bangun bisnis yang benar-benar memecahkan masalah manusia. Valuasi tinggi tidak ada artinya jika tidak ada dampak nyata di masyarakat', icon: '??', warna: '#22c55e' },
    { kepada: 'Peneliti & Akademisi', teks: 'Jembatani gap antara penelitian di jurnal dan implementasi nyata. Temukan cara membawa risetmu keluar dari paper ke dunia', icon: '??', warna: '#8b5cf6' },
    { kepada: 'Pendidik Digital', teks: 'Cara terbaik belajar berubah setiap dekade. Jadilah pendidik yang terus belajar dan beradaptasi bersama siswamu', icon: '??', warna: '#f59e0b' },
    { kepada: 'Pembuat Kebijakan', teks: 'Regulasi teknologi yang bijak butuh pemahaman teknis. Dengarkan developer, libatkan mereka dalam proses pembuatan kebijakan digital', icon: '???', warna: '#e63329' },
  ]
  return (
    <PanelBab id="ch164" num="164" judul="PESAN UNTUK GENERASI BERIKUTNYA" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        ?? Surat terbuka untuk mereka yang akan meneruskan perjalanan ini...
      </div>
      <div className="space-y-4">
        {pesan.map((p, i) => (
          <motion.div key={p.kepada}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: false }}
            className="p-4"
            style={{ border: `3px solid ${p.warna}`, boxShadow: `5px 5px 0 ${p.warna}`, background: '#111' }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{p.icon}</span>
              <div className="text-[9px] font-bold text-white/40">KEPADA:</div>
              <span className="font-comic text-sm" style={{ color: p.warna }}>{p.kepada}</span>
            </div>
            <p className="text-xs text-white/70 font-bold italic leading-relaxed pl-8">&ldquo;{p.teks}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch165: GRATITUDE & SYUKUR -------------------------------------------------
function Ch165() {
  return (
    <PanelBab id="ch165" num="165" judul="SYUKUR — BERSYUKUR ATAS SETIAP PERJALANAN" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ?? Gratitude is the foundation of abundance — mulai setiap hari dengan syukur!
      </div>
      <GridTiga items={[
        { icon: '??', judul: 'Syukur: Internet Gratis', teks: 'Bisa belajar coding dari YouTube, dokumentasi, dan blog gratis. Generasi sebelumnya tidak punya privilege ini!', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '??', judul: 'Syukur: Komunitas', teks: 'Open source developer yang berbagi kode gratis. Tanpa mereka, tidak ada Laravel, Next.js, atau tools yang kita pakai', warna: '#22c55e', bg: '#f0fdf4' },
        { icon: '??', judul: 'Syukur: Kesempatan Belajar', teks: 'Digital Talent Scholarship dan program beasiswa lainnya yang membuka akses pendidikan berkualitas secara luas', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '??', judul: 'Syukur: Keluarga', teks: 'Orang tua yang mendukung tanpa bertanya "kapan kerja" saat kita masih belajar dan membangun sesuatu', warna: '#f59e0b', bg: '#fffbeb' },
        { icon: '??', judul: 'Syukur: Sertifikasi', teks: 'BNSP dan 75+ pelatihan yang membuka mata tentang luasnya dunia teknologi dan betapa banyak yang masih bisa dipelajari', warna: '#e63329', bg: '#fef2f2' },
        { icon: '??', judul: 'Syukur: Setiap Error', teks: 'Setiap bug yang bikin frustasi, setiap error yang tidak ketemu solusinya berjam-jam — itulah yang membuat kita tumbuh!', warna: '#0891b2', bg: '#ecfeff' },
      ]} />
    </PanelBab>
  )
}

// -- Ch166: PELAJARAN TERBESAR HIDUP ------------------------------------------
function Ch166() {
  const pelajaran = [
    { no: 1, pelajaran: 'Konsistensi mengalahkan intensitas. 30 menit sehari selama setahun > marathon coding 24 jam lalu berhenti sebulan', warna: '#1a5cff' },
    { no: 2, pelajaran: 'Pilih proyek yang memecahkan masalah nyata yang kamu alami sendiri. Itu passion yang tidak mudah padam', warna: '#22c55e' },
    { no: 3, pelajaran: 'Komunitas bukan optional — ini multiplier. Satu koneksi yang tepat bisa mengubah segalanya dalam semalam', warna: '#8b5cf6' },
    { no: 4, pelajaran: 'Belajar cara belajar lebih penting dari menghafal syntax. Teknologi berubah, kemampuan adaptasi abadi', warna: '#f59e0b' },
    { no: 5, pelajaran: 'Done adalah lebih baik dari perfect. Ship produk yang 70% selesai dan improve berdasar feedback nyata', warna: '#e63329' },
    { no: 6, pelajaran: 'Kesehatan fisik dan mental adalah prerequisite untuk produktivitas. Jaga tubuh dan pikiran sama seperti menjaga server', warna: '#0891b2' },
    { no: 7, pelajaran: 'Berbagi tidak mengurangi. Setiap ilmu yang dibagikan justru semakin dalam tertancap di kepalamu sendiri', warna: '#22c55e' },
    { no: 8, pelajaran: 'Humble dengan prestasi, tapi jangan meragukan kemampuan. Imposter syndrome itu nyata, tapi bisa dikalahkan', warna: '#1a5cff' },
  ]
  return (
    <PanelBab id="ch166" num="166" judul="8 PELAJARAN TERBESAR HIDUP" warna="#e63329" latarBelakang="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-6">?? Tidak perlu bayar mahal untuk dapat wisdom ini — biarkan pengalaman orang lain jadi pelajaran gratis kamu!</div>
      <div className="grid sm:grid-cols-2 gap-4">
        {pelajaran.map((p, i) => (
          <motion.div key={p.no}
            initial={{ opacity: 0, rotate: i % 2 === 0 ? -2 : 2, y: 20 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -4 }}
            className="flex gap-3 p-4"
            style={{ border: `3px solid ${p.warna}`, boxShadow: `4px 4px 0 ${p.warna}`, background: 'white' }}>
            <div className="font-comic text-2xl flex-shrink-0" style={{ color: p.warna }}>{String(p.no).padStart(2, '0')}</div>
            <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed italic">&ldquo;{p.pelajaran}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch167: SALAM DARI JEMBER --------------------------------------------------
function Ch167() {
  return (
    <PanelBab id="ch167" num="167" judul="SALAM DARI JEMBER — KOTA YANG MEMBESARKAN" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ??? Jember bukan kota besar, tapi melahirkan mimpi-mimpi yang tidak kalah besar!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="comic-panel p-5">
            <div className="font-comic text-lg text-[#0a0a0a] mb-3">?? JEMBER YANG KAMI KENAL</div>
            {[
              { aspek: 'Kota Tembakau', desc: 'Jember terkenal sebagai produsen tembakau berkualitas tinggi dan sentra industri kreatif Jember Fashion Carnival' },
              { aspek: 'Kampus Berkualitas', desc: 'UNEJ, ITSM, STIKI — ekosistem akademik yang semakin berkembang dengan mahasiswa dari berbagai daerah' },
              { aspek: 'Kuliner Unik', desc: 'Suwar-suwir, tape bondowoso, bakso legendaris — cita rasa Jember yang tidak akan ketemu di kota lain' },
              { aspek: 'Digital Potential', desc: 'Banyak talenta digital muda yang belum tersalurkan ke ekosistem yang mendukung mereka berkembang' },
            ].map(j => (
              <div key={j.aspek} className="mb-3">
                <div className="font-comic text-xs text-[#22c55e] mb-0.5">{j.aspek}</div>
                <p className="text-xs font-bold text-[#0a0a0a]/60">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="comic-panel-dark p-5">
          <div className="font-comic text-xl text-white mb-3">?? KENAPA BANGGA DARI JEMBER</div>
          <div className="space-y-3">
            {[
              'Membuktikan bahwa developer hebat tidak harus dari Jakarta atau Bandung',
              'Jember punya WiFi yang cukup untuk build startup berkelas nasional',
              'Cost of living rendah = runway startup lebih panjang dengan budget sama',
              'Komunitas lokal yang solid dan saling support tanpa persaingan toxic',
              'Dari Jember untuk Indonesia — dan suatu hari, untuk dunia',
            ].map((alasan, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-green-400 flex-shrink-0">??</span>
                <p className="text-xs text-white/70 font-bold">{alasan}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// -- Ch168: KATA-KATA PAMUNGKAS ------------------------------------------------
function Ch168() {
  const quotes = [
    { quote: 'Kode adalah bahasa yang paling demokratis — siapapun bisa belajar dan siapapun bisa build sesuatu yang mengubah dunia.', nama: 'Rizki Habibi' },
    { quote: 'The best time to start was yesterday. The second best time is now.', nama: 'Unknown Developer' },
    { quote: 'Setiap expert pernah menjadi beginner. Setiap pro pernah menjadi pemula yang bingung dengan Hello World.', nama: 'Dari komunitas developer' },
    { quote: 'Build something people want. Ship early. Learn fast. Repeat.', nama: 'Prinsip Lean Startup' },
    { quote: 'Jangan takut gagal — takutlah tidak pernah mencoba.', nama: 'Keluarga & Mentor' },
  ]
  return (
    <PanelBab id="ch168" num="168" judul="KATA-KATA PAMUNGKAS — SEBELUM EPILOG" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        ? Kata-kata yang menemani perjalanan ini dari awal hingga akhir...
      </div>
      <div className="space-y-4">
        {quotes.map((q, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.95, rotate: i % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.12, type: 'spring' }}
            viewport={{ once: false }}
            className="p-5"
            style={{ border: '2px solid #ffd700', boxShadow: '4px 4px 0 #ffd70044', background: '#111', borderRadius: 8 }}>
            <p className="text-sm font-bold text-white/80 leading-relaxed italic mb-2">&ldquo;{q.quote}&rdquo;</p>
            <div className="font-comic text-xs text-yellow-400">— {q.nama}</div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch169: APRESIASI MENDALAM -------------------------------------------------
function Ch169() {
  return (
    <PanelBab id="ch169" num="169" judul="APRESIASI — TERIMA KASIH YANG TULUS" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ?? Ada banyak sekali yang harus disyukuri dan banyak orang yang harus diapresiasi dalam perjalanan ini!
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {[
          { kepada: 'Orang Tua', isi: 'Yang tidak pernah berhenti percaya, mendoakan, dan berkorban tanpa pamrih. Semua ini untuk kalian.', icon: '??', warna: '#f59e0b' },
          { kepada: 'Dosen & Pembimbing', isi: 'Yang mengarahkan penelitian dengan sabar dan memberi ruang untuk bereksperimen dan berkembang.', icon: '??', warna: '#1a5cff' },
          { kepada: 'Komunitas Developer', isi: 'Ribuan developer yang berbagi ilmu gratis di blog, YouTube, forum. Kalian adalah guru tanpa jabatan.', icon: '??', warna: '#22c55e' },
          { kepada: 'Kamu yang Membaca', isi: 'Yang sudah meluangkan waktu membaca 170 chapter ini. Kesabaran dan antusiasmu adalah motivasi terbesar!', icon: '??', warna: '#8b5cf6' },
        ].map((a, i) => (
          <motion.div key={a.kepada}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
            style={{ border: `3px solid ${a.warna}`, boxShadow: `5px 5px 0 ${a.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: a.warna, borderBottom: '2px solid #0a0a0a' }}>
              <span className="text-xl">{a.icon}</span>
              <span className="font-comic text-sm text-white">{a.kepada}</span>
            </div>
            <p className="p-3 text-xs font-bold text-[#0a0a0a]/70 leading-relaxed italic">&ldquo;{a.isi}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

// -- Ch170: THE GRAND FINALE ---------------------------------------------------
function Ch170() {
  return (
    <PanelBab id="ch170" num="170" judul="THE GRAND FINALE — SAMPAI BERJUMPA LAGI!" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: false }}
          className="mb-8">
          <div className="text-7xl sm:text-9xl mb-4">??</div>
          <div className="font-comic text-5xl sm:text-7xl text-yellow-400 mb-2" style={{ textShadow: '5px 5px 0 rgba(255,215,0,0.3)' }}>
            THE END...?
          </div>
          <div className="font-comic text-xl text-white/60">UNTUK SEKARANG</div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { angka: '170', label: 'Chapter Epik', icon: '??', warna: '#ffd700' },
            { angka: '8', label: 'Kisah Tersisa', icon: '?', warna: '#e63329' },
            { angka: '??', label: 'Menuju Bintang', icon: '??', warna: '#1a5cff' },
          ].map(s => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring' }}
              viewport={{ once: false }}
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
          viewport={{ once: false }}
          className="p-6 mb-8"
          style={{ border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd700', background: '#111', borderRadius: 20 }}>
          <div className="font-comic text-2xl text-yellow-400 mb-3">?? TENTANG PORTFOLIO INI</div>
          <p className="text-sm font-bold text-white/80 leading-relaxed">
            Portfolio ini lahir dari keyakinan bahwa perjalanan seorang developer bukan hanya soal skill teknis —
            tapi tentang karakter, filosofi, passion, dan dampak yang ditinggalkan.
            <br /><br />
            170 chapter bukan tentang pamer — ini adalah undangan untuk <span className="text-yellow-400">mengenal siapa Rizki Habibi</span>
            sesungguhnya, bukan hanya list teknologi dan proyek.
            <br /><br />
            <span className="text-yellow-400">Jika ada satu hal yang ingin diingat setelah membaca ini:</span>
            <br />
            <span className="text-white italic">&ldquo;Jadilah developer yang meninggalkan dunia lebih baik dari saat kamu menemukannya.&rdquo;</span>
          </p>
          <div className="mt-4 font-comic text-sm text-yellow-400">— Rizki Habibi, Jember, 2026</div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="p-4 text-center"
            style={{ border: '3px solid #22c55e', boxShadow: '4px 4px 0 #22c55e', background: '#111' }}>
            <div className="font-comic text-base text-green-400 mb-2">?? KERJA SAMA?</div>
            <p className="text-xs text-white/60 font-bold mb-3">Punya proyek menarik? Mari ciptakan sesuatu yang bermakna!</p>
            <a href="#contact" className="btn-comic text-sm">HUBUNGI SAYA ?</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="p-4 text-center"
            style={{ border: '3px solid #1a5cff', boxShadow: '4px 4px 0 #1a5cff', background: '#111' }}>
            <div className="font-comic text-base text-blue-400 mb-2">?? LIHAT CV LENGKAP</div>
            <p className="text-xs text-white/60 font-bold mb-3">Semua detail pengalaman tersedia di sini</p>
            <a href="#cv" className="btn-comic-blue text-sm">LIHAT CV ?</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: false }}>
          <div className="font-comic text-2xl text-yellow-400 mb-2">? SAMPAI BERJUMPA DI CHAPTER 171!</div>
          <div className="font-comic text-sm text-white/30 tracking-widest">
            --- RIZKI HABIBI PORTFOLIO · JEMBER · 2026 ---
          </div>
          <div className="font-comic text-xs text-white/20 mt-1 tracking-wider">
            Made with ? using Next.js · Tailwind CSS · Framer Motion
          </div>
        </motion.div>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup16() {
  return (
    <>
      <div className="comic-divider" />
      <Ch161 /><div className="comic-divider" />
      <Ch162 /><div className="comic-divider" />
      <Ch163 /><div className="comic-divider" />
      <Ch164 /><div className="comic-divider" />
      <Ch165 /><div className="comic-divider" />
      <Ch166 /><div className="comic-divider" />
      <Ch167 /><div className="comic-divider" />
      <Ch168 /><div className="comic-divider" />
      <Ch169 /><div className="comic-divider" />
      <Ch170 />
    </>
  )
}
