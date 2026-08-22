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
  const statusWarna: Record<string, string> = {
    'KONSEP': '#8b5cf6', 'RISET': '#1a5cff', 'PROTOTYPE': '#f59e0b',
    'AKTIF': '#22c55e', 'ROADMAP': '#0891b2', 'MIMPI': '#e63329',
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (no % 10) * 0.04, type: 'spring' }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -4 }}
      onClick={() => setBuka(!buka)}
      className="cursor-pointer p-4"
      style={{ border: `3px solid ${warna}`, boxShadow: `4px 4px 0 ${warna}`, background: 'white' }}>
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="flex items-center gap-2">
          <motion.span className="text-xl" animate={{ rotate: buka ? 15 : 0 }} transition={{ type: 'spring' }}>{icon}</motion.span>
          <span className="font-comic text-sm" style={{ color: warna }}>#{String(no).padStart(3,'0')} {judul}</span>
        </div>
        <span className="font-bold text-[8px] px-1.5 py-0.5 text-white flex-shrink-0"
          style={{ background: statusWarna[status] ?? warna }}>{status}</span>
      </div>
      <span className="font-mono text-[8px] px-1.5 py-0.5 mr-1"
        style={{ background: `${warna}18`, color: warna, border: `1px solid ${warna}40` }}>{tag}</span>
      <motion.div initial={false} animate={{ height: buka ? 'auto' : 0, opacity: buka ? 1 : 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
        <p className="text-xs font-bold text-[#0a0a0a]/65 leading-relaxed mt-2">{deskripsi}</p>
      </motion.div>
      <p className="text-[9px] text-[#0a0a0a]/30 mt-1 font-bold">{buka ? '▲ tutup' : '▼ baca selengkapnya'}</p>
    </motion.div>
  )
}

/* --- Ch182: INOVASI PLATFORM & PRODUK (26-50) --- */
function Ch182() {
  const inovasi = [
    { no:26, judul:'Website Desa SaaS',        tag:'GovTech  SaaS',    status:'AKTIF',    warna:'#22c55e', icon:'🏘️', deskripsi:'Platform siap pakai untuk website desa dengan CMS visual, laporan kependudukan otomatis, integrasi QRIS donasi warga, dan pelatihan operator desa.' },
    { no:27, judul:'UMKM Digital Suite',        tag:'BizTech  SaaS',    status:'PROTOTYPE',warna:'#f59e0b', icon:'🏪', deskripsi:'Satu platform untuk UMKM: kasir digital, manajemen stok, laporan keuangan sederhana, dan marketplace terintegrasi. Harga terjangkau, antarmuka ramah awam.' },
    { no:28, judul:'Platform Donasi Transparan',tag:'SocialTech  Blockchain',status:'RISET',warna:'#8b5cf6',icon:'💰',deskripsi:'Platform donasi di mana setiap rupiah bisa dilacak: masuk, dikelola, dan digunakan oleh penerima. Teknologi blockchain untuk transparansi penuh.' },
    { no:29, judul:'Direktori Tenaga Ahli Lokal',tag:'ServiceTech',       status:'KONSEP',   warna:'#e63329', icon:'🔍', deskripsi:'Marketplace untuk menemukan tenaga ahli di kota kecil: tukang, montir, dokter, hingga developer lokal. Rating, portofolio, dan booking online.' },
    { no:30, judul:'Sistem Antrian Digital',    tag:'GovTech  UX',      status:'PROTOTYPE',warna:'#1a5cff', icon:'📋', deskripsi:'Aplikasi antrian digital untuk puskesmas, kantor desa, dan bank daerah. Warga bisa ambil nomor antrian dari rumah via WhatsApp atau web.' },
    { no:31, judul:'Aplikasi Laporan Warga',    tag:'GovTech  Civic',   status:'AKTIF',    warna:'#0891b2', icon:'📣', deskripsi:'Warga bisa lapor masalah infrastruktur (jalan rusak, lampu mati) langsung ke pemerintah daerah dengan bukti foto dan lokasi GPS otomatis.' },
    { no:32, judul:'Manajemen Aset Desa',       tag:'GovTech  ERP',     status:'KONSEP',   warna:'#22c55e', icon:'🏛️', deskripsi:'Sistem inventaris dan manajemen aset untuk pemerintah desa: alat berat, tanah kas desa, kendaraan operasional, dengan depreciation tracking.' },
    { no:33, judul:'E-Musrenbang Digital',      tag:'GovTech  Partisipasi',status:'RISET', warna:'#f59e0b', icon:'🗳️', deskripsi:'Digitalisasi musyawarah perencanaan pembangunan desa. Warga bisa usul, vote prioritas, dan pantau realisasi anggaran via aplikasi.' },
    { no:34, judul:'Platform Sewa Alat Pertanian',tag:'AgriTech',         status:'KONSEP',  warna:'#8b5cf6', icon:'🚜', deskripsi:'Marketplace peer-to-peer untuk sewa alat pertanian di daerah. Petani yang punya traktor bisa sewakan ke petani lain saat tidak digunakan.' },
    { no:35, judul:'Sistem Informasi Posyandu',  tag:'HealthTech  Gov',  status:'PROTOTYPE',warna:'#e63329',icon:'🏥',deskripsi:'Digitalisasi catatan posyandu: tumbuh kembang balita, jadwal imunisasi, deteksi dini stunting, dengan dashboard untuk Puskesmas dan Dinkes.' },
    { no:36, judul:'Marketplace Produk Petani',  tag:'AgriTech  Commerce',status:'AKTIF',  warna:'#1a5cff', icon:'🥬', deskripsi:'Petani langsung jual ke konsumen tanpa tengkulak. Sistem prediksi harga, jadwal panen, dan logistik terintegrasi untuk pengiriman segar.' },
    { no:37, judul:'Platform Beasiswa Digital',  tag:'EdTech  Sosial',   status:'ROADMAP', warna:'#0891b2', icon:'🎓', deskripsi:'Satu portal untuk semua beasiswa Indonesia: cari, daftar, track status, dan komunitas penerima beasiswa untuk sharing tips dan pengalaman.' },
    { no:38, judul:'Sistem PKL/Magang Online',   tag:'EdTech  Karir',    status:'KONSEP',  warna:'#22c55e', icon:'💼', deskripsi:'Platform menghubungkan siswa SMK/mahasiswa dengan perusahaan untuk PKL. Proses dari seleksi, MOU digital, hingga penilaian akhir online.' },
    { no:39, judul:'Arsip Digital Kebudayaan',   tag:'CulturalTech',      status:'RISET',   warna:'#f59e0b', icon:'🎭', deskripsi:'Digitalisasi dan arsip warisan budaya lokal: tari tradisional, lagu daerah, resep makanan khas, bahasa daerah -- tersimpan dan bisa diakses publik.' },
    { no:40, judul:'Platform Freelance Lokal',   tag:'WorkTech  Lokal',  status:'KONSEP',  warna:'#8b5cf6', icon:'💻', deskripsi:'Freelance platform fokus menghubungkan UMKM lokal dengan talent digital di kota yang sama. Bayar lokal, bangun ekosistem ekonomi digital daerah.' },
    { no:41, judul:'Sistem E-Perpustakaan Sekolah',tag:'EdTech  Library',status:'PROTOTYPE',warna:'#e63329',icon:'📚',deskripsi:'Digitalisasi perpustakaan sekolah: katalog digital, peminjaman online, reminder kembali buku, dan rekomendasi buku berdasarkan riwayat baca siswa.' },
    { no:42, judul:'Koperasi Digital',           tag:'FinTech  Koperasi',status:'RISET',   warna:'#1a5cff', icon:'🤝', deskripsi:'Platform koperasi modern: simpan pinjam digital, voting anggota online, laporan keuangan transparan, dan integrasi dengan OJK untuk kepatuhan regulasi.' },
    { no:43, judul:'Platform Sewa Kos-Kosan',    tag:'PropTech',          status:'KONSEP',  warna:'#0891b2', icon:'🏠', deskripsi:'Marketplace kos-kosan khusus daerah dengan verifikasi pemilik, virtual tour 360, pembayaran digital, dan sistem review jujur dari penghuni.' },
    { no:44, judul:'Sistem Logistik UMKM',       tag:'LogTech  UMKM',    status:'KONSEP',  warna:'#22c55e', icon:'📦', deskripsi:'Agregator kurir untuk UMKM kecil: bandingkan harga, pickup terjadwal, tracking real-time, dan asuransi paket otomatis untuk keamanan pengiriman.' },
    { no:45, judul:'Platform Crowdfunding Proyek Sosial',tag:'SocialTech',status:'ROADMAP', warna:'#f59e0b', icon:'❤️', deskripsi:'Crowdfunding khusus proyek sosial: pembangunan sekolah, sumur air bersih, masjid. Dengan sistem milestone agar dana cair sesuai progress nyata.' },
    { no:46, judul:'Event Organizer Platform',   tag:'EventTech',         status:'KONSEP',  warna:'#8b5cf6', icon:'🎉', deskripsi:'Tools lengkap untuk organizer acara lokal: tiket digital, check-in QR, manajemen venue, sponsor management, dan laporan analytics pasca event.' },
    { no:47, judul:'Sistem Absensi Digital Sekolah',tag:'EdTech  Admin', status:'PROTOTYPE',warna:'#e63329',icon:'✅',deskripsi:'Absensi via QR code atau face recognition ringan. Notifikasi WhatsApp otomatis ke orang tua jika anak tidak hadir. Dashboard rekap untuk guru.' },
    { no:48, judul:'Platform Konsultasi Hukum Online',tag:'LegalTech',    status:'RISET',   warna:'#1a5cff', icon:'⚖️', deskripsi:'Konsultasi hukum terjangkau untuk masyarakat umum dan UMKM. Lawyer terverifikasi, sesi terjadwal, dokumen template gratis, dan FAQ hukum lokal.' },
    { no:49, judul:'Komunitas Developer Indonesia',tag:'Community  Dev', status:'AKTIF',   warna:'#0891b2', icon:'🌐', deskripsi:'Hub digital developer Indonesia: job board, event tech, artikel tutorial, open source showcase, dan mentoring program yang terstruktur.' },
    { no:50, judul:'Platform Lelang Online Lokal',tag:'Commerce  Lokal',status:'KONSEP',  warna:'#22c55e', icon:'🔨', deskripsi:'Lelang online terpercaya untuk barang second berkualitas. Verifikasi kondisi barang oleh kurator, escrow pembayaran, dan jaminan keaslian.' },
  ]
  return (
    <PanelBab id="ch182" num="182" judul="200 INOVASI -- BAB 2: PLATFORM & PRODUK DIGITAL" warna="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🚀 25 inovasi produk dan platform digital yang bisa mengubah cara masyarakat Indonesia bekerja dan berinteraksi!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {inovasi.map(item => <KartuInovasi key={item.no} {...item} />)}
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup19() {
  return (
    <>
      <div className="comic-divider" />
      <Ch182 />
    </>
  )
}
