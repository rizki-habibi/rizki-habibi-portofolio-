'use client'

import { motion } from 'framer-motion'
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

function KartuInovasi({ no, judul, tag, deskripsi, status, warna, icon }: {
  no: number; judul: string; tag: string; deskripsi: string; status: string; warna: string; icon: string
}) {
  const [buka, setBuka] = useState(false)
  const sw: Record<string, string> = { 'KONSEP':'#8b5cf6','RISET':'#1a5cff','PROTOTYPE':'#f59e0b','AKTIF':'#22c55e','ROADMAP':'#0891b2','MIMPI':'#e63329' }
  return (
    <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
      transition={{ delay:(no%10)*0.04, type:'spring' }} viewport={{ once:false, amount:0.1 }}
      whileHover={{ y:-4 }} onClick={() => setBuka(!buka)} className="cursor-pointer p-4"
      style={{ border:`3px solid ${warna}`, boxShadow:`4px 4px 0 ${warna}`, background:'white' }}>
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="flex items-center gap-2">
          <motion.span className="text-xl" animate={{ rotate:buka?15:0 }} transition={{ type:'spring' }}>{icon}</motion.span>
          <span className="font-comic text-sm" style={{ color:warna }}>#{String(no).padStart(3,'0')} {judul}</span>
        </div>
        <span className="font-bold text-[8px] px-1.5 py-0.5 text-white flex-shrink-0"
          style={{ background:sw[status]??warna }}>{status}</span>
      </div>
      <span className="font-mono text-[8px] px-1.5 py-0.5"
        style={{ background:`${warna}18`, color:warna, border:`1px solid ${warna}40` }}>{tag}</span>
      <motion.div initial={false} animate={{ height:buka?'auto':0, opacity:buka?1:0 }}
        transition={{ duration:0.25 }} style={{ overflow:'hidden' }}>
        <p className="text-xs font-bold text-[#0a0a0a]/65 leading-relaxed mt-2">{deskripsi}</p>
      </motion.div>
      <p className="text-[9px] text-[#0a0a0a]/30 mt-1 font-bold">{buka?'▲ tutup':'▼ detail'}</p>
    </motion.div>
  )
}

/* --- Ch187: INFRASTRUKTUR & DEVELOPER TOOLS (151-175) --- */
function Ch187() {
  const inovasi = [
    { no:151, judul:'Deploy Platform untuk Developer Indonesia',tag:'DevTool  Cloud',status:'ROADMAP',warna:'#1a5cff',icon:'🚀',deskripsi:'Platform deployment seperti Vercel tapi dengan server di Indonesia. Latency lebih rendah, harga dalam Rupiah, support Bahasa Indonesia, dan billing yang lebih transparan.' },
    { no:152, judul:'Package Manager Lokal',       tag:'DevTool  Registry', status:'KONSEP',   warna:'#22c55e', icon:'📦', deskripsi:'Registry npm/composer mirror lokal Indonesia dengan CDN edge server di Jawa, Sumatra, Sulawesi. Download package 10x lebih cepat dari koneksi lokal.' },
    { no:153, judul:'IDE Online Ringan',           tag:'DevTool  IDE',      status:'RISET',    warna:'#8b5cf6', icon:'💻', deskripsi:'Code editor online yang bisa jalan di HP Android entry-level dengan RAM 2GB. Tidak butuh VS Code atau laptop mahal untuk belajar coding.' },
    { no:154, judul:'Testing Automation Framework Lokal',tag:'DevTool  Testing',status:'KONSEP',warna:'#f59e0b',icon:'🧪',deskripsi:'Framework testing dengan dokumentasi full Bahasa Indonesia, template untuk Laravel dan Next.js, dan integrasi CI/CD yang mudah dikonfigurasi.' },
    { no:155, judul:'Database as a Service Murah',  tag:'Cloud  Database',   status:'KONSEP',   warna:'#e63329', icon:'🗄️', deskripsi:'MySQL/PostgreSQL managed di cloud Indonesia mulai Rp 20rb/bulan. Backup otomatis, monitoring, failover, tanpa perlu sysadmin untuk startup kecil.' },
    { no:156, judul:'Open Source Component Library',tag:'DevTool  UI',      status:'AKTIF',    warna:'#0891b2', icon:'🎨', deskripsi:'Library komponen UI dengan desain komik/manga khas Indonesia. Bisa pakai di React, Vue, Angular. Lisensi MIT, gratis selamanya untuk semua.' },
    { no:157, judul:'API Aggregator Layanan Pemerintah',tag:'GovTech  API',  status:'RISET',    warna:'#1a5cff', icon:'🔌', deskripsi:'Satu API key untuk akses: data kependudukan, NIK validation, data desa, dan layanan pemerintah lainnya. Developer tidak perlu daftar satu per satu.' },
    { no:158, judul:'Log Monitor & Alerting Gratis',tag:'DevTool  Observability',status:'KONSEP',warna:'#22c55e',icon:'📊',deskripsi:'Platform monitoring log aplikasi gratis untuk indie developer dan startup kecil. Alert ke Telegram/WhatsApp saat ada error, auto-group error serupa.' },
    { no:159, judul:'Bahasa Indonesia NLP Toolkit',tag:'NLP  OpenSource',   status:'RISET',    warna:'#8b5cf6', icon:'🔤', deskripsi:'Library NLP open source untuk Bahasa Indonesia: tokenizer, POS tagger, named entity recognition, sentiment analysis. Lebih akurat dari model generik.' },
    { no:160, judul:'Generator Boilerplate Proyek',tag:'DevTool  Scaffold', status:'AKTIF',    warna:'#f59e0b', icon:'⚡', deskripsi:'CLI tool untuk generate project starter: Laravel API + Next.js, dengan auth, CRUD, testing, CI/CD, dan Docker siap pakai dalam 30 detik.' },
    { no:161, judul:'Platform Review Kode Open Source',tag:'DevTool  Community',status:'KONSEP',warna:'#e63329',icon:'👁️',deskripsi:'Submit kode project kamu untuk direview komunitas. Reviewer dapat kredit dan badge. Proyek dapat feedback dari multiple expert secara asinkron.' },
    { no:162, judul:'Server Status Page Generator',tag:'DevTool  Ops',     status:'PROTOTYPE', warna:'#0891b2', icon:'🟢', deskripsi:'Generate status page profesional untuk layanan kamu dalam 2 menit. Monitoring otomatis, history uptime, dan notifikasi subscriber saat ada gangguan.' },
    { no:163, judul:'Dokumentasi Auto-Generator',  tag:'DevTool  Docs',     status:'KONSEP',   warna:'#1a5cff', icon:'📝', deskripsi:'Dari komentar kode dan type annotations, otomatis generate dokumentasi API yang cantik. Export ke format Swagger, Postman, atau website statis.' },
    { no:164, judul:'WhatsApp Business API Wrapper',tag:'DevTool  Integration',status:'AKTIF', warna:'#22c55e', icon:'💬', deskripsi:'Library Laravel/Node.js untuk integrasi WhatsApp Business API yang mudah. Template pesan, bulk send, webhook handler, dan media upload abstraction.' },
    { no:165, judul:'Permission & Role Manager UI',tag:'DevTool  Auth',     status:'AKTIF',    warna:'#8b5cf6', icon:'🔐', deskripsi:'Package UI untuk kelola role dan permission di aplikasi Laravel/Next.js. Drag-drop permission assignment, visual role hierarchy, dan audit log.' },
    { no:166, judul:'Multi-Tenant Starter Kit',    tag:'DevTool  SaaS',     status:'PROTOTYPE', warna:'#f59e0b', icon:'🏢', deskripsi:'Starter kit lengkap untuk build aplikasi SaaS multi-tenant: subdomain per tenant, isolasi data, billing Stripe/Midtrans, dan onboarding flow.' },
    { no:167, judul:'Edge Function Platform Lokal',tag:'Cloud  Edge',       status:'MIMPI',    warna:'#e63329', icon:'⚡', deskripsi:'Platform serverless edge function dengan PoP di Jakarta, Surabaya, Makassar. Eksekusi fungsi dengan latency <5ms untuk pengguna Indonesia.' },
    { no:168, judul:'Visual Database Designer',    tag:'DevTool  Database', status:'AKTIF',    warna:'#0891b2', icon:'🗃️', deskripsi:'Tool visual untuk design schema database MySQL/PostgreSQL. Drag-drop tabel, set relasi, export SQL migration, dan sync ke database yang sudah ada.' },
    { no:169, judul:'Rate Limiter as a Service',   tag:'DevTool  API',      status:'KONSEP',   warna:'#1a5cff', icon:'⏱️', deskripsi:'SaaS rate limiting yang pluggable ke API manapun. Konfigurasi via dashboard, strategi sliding window atau token bucket, dan bypass list untuk trusted IP.' },
    { no:170, judul:'Notifikasi Multi-Channel SDK',tag:'DevTool  Notification',status:'PROTOTYPE',warna:'#22c55e',icon:'🔔',deskripsi:'Satu SDK untuk kirim notifikasi ke: Email, WhatsApp, SMS, Push Notification, Telegram. Fallback otomatis jika satu channel gagal. Tracking delivery rate.' },
    { no:171, judul:'Laravel Audit Trail Package',  tag:'DevTool  Laravel',  status:'AKTIF',    warna:'#8b5cf6', icon:'📜', deskripsi:'Package untuk catat semua perubahan data di aplikasi Laravel: siapa, kapan, apa yang berubah. Tamper-proof log dengan signature digital.' },
    { no:172, judul:'Next.js SEO Toolkit Indonesia',tag:'DevTool  SEO',     status:'KONSEP',   warna:'#f59e0b', icon:'🔍', deskripsi:'Komponen dan utilities untuk optimasi SEO di Next.js khusus pasar Indonesia: structured data Bahasa Indonesia, integrasi Google My Business, sitemap generator.' },
    { no:173, judul:'Payment Gateway Aggregator',  tag:'DevTool  Payment',  status:'AKTIF',    warna:'#e63329', icon:'💳', deskripsi:'Satu SDK untuk semua payment gateway Indonesia: Midtrans, Xendit, DOKU, Espay. Switch gateway tanpa ganti kode. Sandbox terpadu untuk testing.' },
    { no:174, judul:'Feature Flag Service',        tag:'DevTool  DevOps',   status:'KONSEP',   warna:'#0891b2', icon:'🎌', deskripsi:'Toggle fitur aplikasi tanpa deploy ulang. Rollout bertahap, A/B testing, dan kill switch darurat. Dashboard sederhana, SDK untuk Laravel dan Next.js.' },
    { no:175, judul:'Cron Job Monitor & Manager',  tag:'DevTool  Ops',      status:'PROTOTYPE', warna:'#1a5cff', icon:'⏰', deskripsi:'Dashboard untuk pantau semua scheduled task. Alert jika job gagal atau terlalu lama. History eksekusi, manual trigger, dan delay monitoring.' },
  ]
  return (
    <PanelBab id="ch187" num="187" judul="200 INOVASI — BAB 7: DEVELOPER TOOLS & INFRASTRUKTUR" warna="#1a5cff" bg="#e8f0ff" gelap>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        🔧 25 tools dan infrastruktur yang bikin developer Indonesia makin produktif dan powerful!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {inovasi.map(item => <KartuInovasi key={item.no} {...item} />)}
      </div>
    </PanelBab>
  )
}

/* --- Ch188: KREATIF, SENI & KONTEN (176-200) --- */
function Ch188() {
  const inovasi = [
    { no:176, judul:'Platform Komik Digital Indonesia',tag:'CreativeTech  Comic',status:'AKTIF',warna:'#e63329',icon:'📖',deskripsi:'Webtoon platform khusus komikus Indonesia dengan monetisasi langsung: koin dari reader, merchandise digital, dan program residensi kreator berbayar.' },
    { no:177, judul:'Generator Musik Gamelan AI',  tag:'CreativeTech  Music',status:'RISET',   warna:'#f59e0b', icon:'🥁', deskripsi:'AI yang generate melodi gamelan Jawa/Bali dari input mood dan tempo. Output berupa MIDI dan audio siap pakai untuk konten kreator dan film.' },
    { no:178, judul:'Animasi Wayang Digital',      tag:'CreativeTech  Culture',status:'PROTOTYPE',warna:'#8b5cf6',icon:'🎭',deskripsi:'Tool 2D animation berbasis karakter wayang dengan rig otomatis. Kreator bisa animasikan wayang digital dengan mudah tanpa skill animasi tinggi.' },
    { no:179, judul:'Platform Puisi & Sastra Digital',tag:'CreativeTech  Literature',status:'KONSEP',warna:'#0891b2',icon:'📜',deskripsi:'Platform untuk sastrawan Indonesia: publish puisi/cerpen, dapat royalti dari reader, lomba sastra berkala, dan program menuju penerbitan buku fisik.' },
    { no:180, judul:'Generator Cover Buku AI',     tag:'DesignTech  AI',    status:'KONSEP',   warna:'#22c55e', icon:'📚', deskripsi:'Upload synopsis buku → AI generate 10 pilihan cover yang profesional. Editable online, download dalam resolusi cetak. Hemat biaya desainer untuk penulis indie.' },
    { no:181, judul:'Studio Rekaman Virtual',      tag:'MusicTech  Virtual',status:'RISET',    warna:'#1a5cff', icon:'🎵', deskripsi:'Platform kolaborasi musik online: rekam, mix, dan master lagu bareng musisi dari kota berbeda. Real-time session dengan latency minimal dan auto-sync.' },
    { no:182, judul:'Font Aksara Nusantara Digital',tag:'DesignTech  Culture',status:'RISET',  warna:'#e63329', icon:'🔡', deskripsi:'Library font aksara daerah (Jawa kuno, Sunda, Batak, Lontara) dalam format OpenType modern. Gratis untuk digunakan di semua OS dan aplikasi desain.' },
    { no:183, judul:'AI Dubbing Bahasa Daerah',    tag:'MediaTech  AI',     status:'RISET',    warna:'#f59e0b', icon:'🎙️', deskripsi:'Teknologi voice cloning untuk dubbing konten video ke bahasa daerah Indonesia. Suara natural, sinkron bibir, untuk konten edukasi dan hiburan.' },
    { no:184, judul:'Platform NFT Karya Seni Lokal',tag:'Web3  Art',        status:'KONSEP',   warna:'#8b5cf6', icon:'🖼️', deskripsi:'Marketplace NFT khusus seniman Indonesia dengan biaya gas rendah, dukungan Rupiah, dan program kurasi untuk seniman dari daerah yang underrepresented.' },
    { no:185, judul:'Video Mapping Festival Tool', tag:'CreativeTech  Event',status:'PROTOTYPE',warna:'#0891b2',icon:'✨',deskripsi:'Software projection mapping terjangkau untuk festival seni lokal. Template untuk motif batik dan ornamen daerah. Export ke berbagai format proyektor.' },
    { no:186, judul:'Podcast Platform Lokal',      tag:'MediaTech  Audio',  status:'AKTIF',    warna:'#22c55e', icon:'🎧', deskripsi:'Platform podcast Indonesia dengan distribusi ke Spotify/Apple otomatis, monetisasi via langganan dan donasi, dan analytics pendengar yang detail.' },
    { no:187, judul:'AR Filter Batik dan Budaya',  tag:'ARTech  Culture',   status:'PROTOTYPE', warna:'#1a5cff', icon:'🥽', deskripsi:'Filter augmented reality dengan motif batik, pakaian adat, dan aksesori tradisional untuk Instagram dan TikTok. Promosi budaya lewat konten viral.' },
    { no:188, judul:'Marketplace Kerajinan Tangan',tag:'CommerceTech  Craft',status:'AKTIF',  warna:'#e63329', icon:'🧶', deskripsi:'Marketplace khusus pengrajin lokal Indonesia: kurasi ketat, fotografi produk yang terstandar, packaging premium, dan ekspor ke pasar internasional.' },
    { no:189, judul:'Platform Kelas Online Seni',  tag:'EdTech  Art',       status:'ROADMAP',  warna:'#f59e0b', icon:'🎨', deskripsi:'Kelas online melukis, kaligrafi, keramik, batik tulis dari pengajar bersertifikat. Live session, komunitas, dan pameran virtual karya siswa.' },
    { no:190, judul:'Generator Cerita Anak AI',    tag:'EdTech  AI  Culture',status:'KONSEP', warna:'#8b5cf6', icon:'📖', deskripsi:'AI yang generate cerita dongeng anak dengan karakter dan latar lokal Indonesia. Lengkap dengan ilustrasi otomatis dan bisa dicetak sebagai buku.' },
    { no:191, judul:'Virtual Museum Nusantara',    tag:'CulturalTech  VR',  status:'RISET',    warna:'#0891b2', icon:'🏛️', deskripsi:'Museum digital 3D artefak budaya Indonesia yang bisa dijelajahi di browser. Kolaborasi dengan museum daerah untuk digitalisasi koleksi yang tidak bisa dikunjungi.' },
    { no:192, judul:'Platform Lomba Kreatif Online',tag:'CreativeTech  Event',status:'AKTIF', warna:'#22c55e', icon:'🏆', deskripsi:'Platform lomba desain, ilustrasi, fotografi, dan video secara online. Juling dari perusahaan besar, penilaian transparan, dan portfolio showcase otomatis.' },
    { no:193, judul:'Soundtrack Generator untuk Game Lokal',tag:'GameTech  Music',status:'RISET',warna:'#1a5cff',icon:'🎮',deskripsi:'AI yang generate musik latar game dengan nuansa gamelan, keroncong, atau dangdut. Tanpa royalti, terinspirasi budaya lokal untuk game developer Indonesia.' },
    { no:194, judul:'Platform Kolaborasi Penulis',  tag:'CreativeTech  Writing',status:'KONSEP',warna:'#e63329',icon:'✍️',deskripsi:'Tools menulis kolaboratif real-time dengan fitur khas fiksi: world-building wiki, character tracker, timeline plot, dan export ke format penerbit.' },
    { no:195, judul:'AI Restorasi Foto Lama',      tag:'AITech  Culture',   status:'RISET',    warna:'#f59e0b', icon:'📷', deskripsi:'Upload foto hitam-putih atau rusak dari masa penjajahan, AI restore dan colorize secara otomatis. Gratis untuk dokumen sejarah, premium untuk personal.' },
    { no:196, judul:'Desain Batik Generatif AI',   tag:'AITech  Culture',   status:'PROTOTYPE', warna:'#8b5cf6', icon:'🌺', deskripsi:'Generate motif batik baru yang terinspirasi dari batik daerah tertentu menggunakan AI generatif. Output SVG untuk cetak langsung atau eksplorasi desainer.' },
    { no:197, judul:'Karaoke Online Platform Lokal',tag:'EntertainTech',     status:'KONSEP',   warna:'#0891b2', icon:'🎤', deskripsi:'Platform karaoke online dengan lirik real-time, scoring suara, dan duet mode. Library lagu Indonesia dan daerah terlengkap. Bisa host karaoke party virtual.' },
    { no:198, judul:'3D Scan Artefak Budaya',      tag:'CulturalTech  3D', status:'RISET',    warna:'#22c55e', icon:'🏺', deskripsi:'Layanan scan 3D artefak museum dan situs bersejarah Indonesia. Model 3D bisa diakses publik, diunduh untuk pendidikan, dan dicetak dengan 3D printer.' },
    { no:199, judul:'Platform Mentoring Seniman Muda',tag:'CreativeTech  Community',status:'KONSEP',warna:'#1a5cff',icon:'🎭',deskripsi:'Matching seniman muda dengan seniman senior Indonesia untuk program mentoring 3 bulan. Sesi virtual, project kolaborasi, dan showcase hasil mentoring.' },
    { no:200, judul:'Gelar.id — Inovasi #200',      tag:'EdTech  Vision',    status:'AKTIF',    warna:'#ffd700', icon:'🌟', deskripsi:'Inovasi ke-200 adalah Gelar.id itu sendiri — platform yang menjadi wadah semua inovasi di atas. Tempat belajar, berkolaborasi, dan mewujudkan semua ide menjadi nyata untuk Indonesia.' },
  ]
  return (
    <PanelBab id="ch188" num="188" judul="200 INOVASI — BAB 8: KREATIF, SENI & KONTEN" warna="#e63329" bg="#fef2f2">
      <div className="speech-bubble inline-block text-sm mb-6">
        🎨 25 inovasi di bidang kreatif, seni, dan konten — termasuk inovasi spesial #200!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {inovasi.map(item => <KartuInovasi key={item.no} {...item} />)}
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup22() {
  return (
    <>
      <div className="comic-divider" />
      <Ch187 />
      <div className="comic-divider" />
      <Ch188 />
    </>
  )
}
