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

/* --- Ch185: FINTECH & EKONOMI DIGITAL (101-125) --- */
function Ch185() {
  const inovasi = [
    { no:101, judul:'Dompet Digital Warung',      tag:'FinTech  MSME',    status:'KONSEP',    warna:'#f59e0b', icon:'👛', deskripsi:'Aplikasi dompet digital khusus warung dan toko kecil: terima QRIS, pisah keuangan pribadi-bisnis otomatis, dan laporan arus kas harian sederhana.' },
    { no:102, judul:'Tabungan Otomatis Petani',   tag:'FinTech  Agri',    status:'RISET',     warna:'#22c55e', icon:'🌾', deskripsi:'Fitur tabungan yang otomatis menyisihkan persentase dari setiap penjualan hasil panen. Dengan target terkunci untuk pembelian bibit musim berikutnya.' },
    { no:103, judul:'Pinjaman Mikro Berbasis Data',tag:'FinTech  Credit',  status:'RISET',     warna:'#1a5cff', icon:'💳', deskripsi:'Scoring kredit alternatif menggunakan data perilaku digital: konsistensi penjualan, riwayat pembayaran utilitas, aktivitas platform. Tanpa jaminan fisik.' },
    { no:104, judul:'Asuransi Mikro Panen',       tag:'InsurTech  Agri',  status:'KONSEP',    warna:'#e63329', icon:'🛡️', deskripsi:'Asuransi gagal panen berbasis data cuaca dan satelit. Klaim otomatis tanpa perlu survei lapangan — jika curah hujan di bawah threshold, klaim langsung cair.' },
    { no:105, judul:'Investasi Reksa Dana Mini',  tag:'FinTech  Invest',  status:'AKTIF',     warna:'#8b5cf6', icon:'📈', deskripsi:'Mulai investasi reksa dana dari Rp 10.000 dengan antarmuka yang menjelaskan risiko dalam bahasa sederhana. Cocok untuk pertama kali investasi.' },
    { no:106, judul:'Sistem Bagi Hasil Digital',  tag:'FinTech  Syariah', status:'KONSEP',    warna:'#0891b2', icon:'🤝', deskripsi:'Platform bagi hasil usaha kecil yang sesuai prinsip syariah. Investor kecil bisa ikut modal usaha lokal dengan akad yang jelas dan transparan.' },
    { no:107, judul:'Pembayaran Kolektif Arisan',  tag:'FinTech  Social',  status:'PROTOTYPE', warna:'#f59e0b', icon:'💰', deskripsi:'Digitalisasi arisan: kelola anggota, jadwal putaran, pembayaran digital, dan rekap otomatis. Notifikasi pengingat bayar dan pengumuman pemenang.' },
    { no:108, judul:'Laporan Pajak UMKM Otomatis',tag:'FinTech  GovTech', status:'KONSEP',    warna:'#22c55e', icon:'📋', deskripsi:'Dari data transaksi kasir digital, otomatis generate laporan pajak UMKM sesuai format DJP. Submit e-Filing langsung dari dalam aplikasi.' },
    { no:109, judul:'Manajemen Hutang Piutang',   tag:'FinTech  MSME',    status:'AKTIF',     warna:'#1a5cff', icon:'📒', deskripsi:'Catat hutang-piutang pelanggan warung dengan digital. Reminder otomatis ke pelanggan saat jatuh tempo. Rekap berapa yang sudah lunas dan yang belum.' },
    { no:110, judul:'Crowdinvesting Properti Daerah',tag:'PropTech  FinTech',status:'MIMPI',  warna:'#e63329', icon:'🏘️', deskripsi:'Investasi properti kolektif mulai Rp 100.000 di kota-kota kecil. Keuntungan dari sewa dibagi proporsional ke semua investor secara otomatis.' },
    { no:111, judul:'Keuangan Keluarga Tracker',  tag:'FinTech  Personal', status:'KONSEP',   warna:'#8b5cf6', icon:'👨👩👧', deskripsi:'App pengelolaan keuangan keluarga bersama: anggaran bersama, split tagihan, target tabungan keluarga, dan edukasi keuangan untuk anak-anak.' },
    { no:112, judul:'Remitansi TKI Digital',      tag:'FinTech  Cross-border',status:'RISET', warna:'#0891b2', icon:'✈️', deskripsi:'Transfer uang dari TKI di luar negeri ke keluarga di daerah terpencil Indonesia dengan biaya minimal dan bisa dicairkan via agen lokal terdekat.' },
    { no:113, judul:'QRIS Generator untuk PKL',   tag:'FinTech  Micro',   status:'AKTIF',     warna:'#f59e0b', icon:'📱', deskripsi:'Pembuatan QRIS instan untuk pedagang kaki lima. Daftar online dalam 5 menit, QRIS langsung aktif, dashboard laporan penerimaan real-time.' },
    { no:114, judul:'Lelang Obligasi Daerah Mini',tag:'FinTech  GovBond', status:'MIMPI',     warna:'#22c55e', icon:'🏛️', deskripsi:'Platform untuk masyarakat berinvestasi di obligasi daerah mulai nominal kecil. Daerah dapat dana pembangunan, masyarakat dapat imbal hasil.' },
    { no:115, judul:'Sistem Tabungan Emas Desa',  tag:'FinTech  Asset',   status:'KONSEP',    warna:'#1a5cff', icon:'🥇', deskripsi:'Program tabungan emas digital berbasis gram yang bisa diambil fisik atau dijual kapan saja. Khusus untuk masyarakat desa yang lebih percaya emas.' },
    { no:116, judul:'Analitik Belanja Keluarga',  tag:'FinTech  Analytics',status:'KONSEP',  warna:'#e63329', icon:'🛒', deskripsi:'Kategorisasi otomatis pengeluaran dari riwayat transaksi digital. Insight: mana kategori yang over-budget dan saran penghematan realistis.' },
    { no:117, judul:'Jaminan Sosial Digital Desa',tag:'GovTech  Social',  status:'RISET',     warna:'#8b5cf6', icon:'🤲', deskripsi:'Platform distribusi bantuan sosial langsung ke rekening digital warga. Transparan, tepat sasaran, dan bebas dari kebocoran anggaran.' },
    { no:118, judul:'Koperasi Simpan Pinjam Digital',tag:'FinTech  Coop', status:'PROTOTYPE', warna:'#0891b2', icon:'🤝', deskripsi:'Modernisasi KSP tradisional: pengajuan pinjaman online, approval digital, cicilan via transfer/QRIS, laporan keuangan real-time untuk pengurus.' },
    { no:119, judul:'Tracking Pengeluaran Mahasiswa',tag:'FinTech  Student',status:'AKTIF',  warna:'#f59e0b', icon:'🎒', deskripsi:'App keuangan khusus mahasiswa: budget per kategori, notifikasi mendekati limit, split tagihan bareng teman, dan goal tabungan liburan.' },
    { no:120, judul:'Platform Waqaf Digital',     tag:'FinTech  Syariah', status:'KONSEP',    warna:'#22c55e', icon:'🕌', deskripsi:'Waqaf produktif digital: pilih objek waqaf (tanah, mesin usaha), pantau penggunaan, dan lihat dampak sosial dari donasi waqaf yang diberikan.' },
    { no:121, judul:'Bayar SPP Sekolah Digital',  tag:'EduFinTech',        status:'AKTIF',     warna:'#1a5cff', icon:'🏫', deskripsi:'Pembayaran SPP dan biaya sekolah via transfer, QRIS, atau marketplace. Orang tua terima kwitansi digital otomatis. Bendahara tidak perlu catat manual.' },
    { no:122, judul:'Analisis Kredit Skor Petani',tag:'FinTech  Agri',    status:'RISET',     warna:'#e63329', icon:'🌱', deskripsi:'Model kredit skor khusus petani menggunakan data: luas lahan, riwayat panen, data cuaca, dan komunitas. Membuka akses kredit yang selama ini tertutup.' },
    { no:123, judul:'Platform Bayar Zakat Online', tag:'FinTech  Syariah',status:'AKTIF',     warna:'#8b5cf6', icon:'🌙', deskripsi:'Hitung dan bayar zakat maal/fitrah online. Terhubung ke LAZ terverifikasi. Bukti pembayaran digital dan laporan distribusi yang transparan.' },
    { no:124, judul:'Dompet Pelajar SD-SMP',      tag:'EduFinTech  Kids', status:'KONSEP',    warna:'#0891b2', icon:'🎓', deskripsi:'Uang saku digital untuk anak dengan kontrol orang tua: limit harian, notifikasi penggunaan, dan edukasi menabung melalui game sederhana.' },
    { no:125, judul:'Tokenisasi Aset UMKM',       tag:'Web3  FinTech',    status:'MIMPI',     warna:'#f59e0b', icon:'🪙', deskripsi:'UMKM menerbitkan token aset untuk menarik investasi kecil-kecilan dari komunitas lokal. Transparansi via smart contract, dividen otomatis.' },
  ]
  return (
    <PanelBab id="ch185" num="185" judul="200 INOVASI — BAB 5: FINTECH & EKONOMI DIGITAL" warna="#f59e0b" bg="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">
        💸 25 inovasi keuangan digital yang bikin dompet rakyat lebih tebal dan aman!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {inovasi.map(item => <KartuInovasi key={item.no} {...item} />)}
      </div>
    </PanelBab>
  )
}

/* --- Ch186: KESEHATAN & LINGKUNGAN (126-150) --- */
function Ch186() {
  const inovasi = [
    { no:126, judul:'Rekam Medis Digital Desa',   tag:'HealthTech  Gov',  status:'PROTOTYPE', warna:'#e63329', icon:'📋', deskripsi:'Sistem rekam medis ringan untuk Puskesmas pembantu dan polindes. Akses riwayat pasien dari HP, resep digital, dan laporan epidemiologi otomatis ke Dinkes.' },
    { no:127, judul:'Telemedicine Daerah Terpencil',tag:'HealthTech  Tele',status:'RISET',    warna:'#1a5cff', icon:'📡', deskripsi:'Konsultasi dokter via video call dengan bandwidth rendah. Dokter di kota bisa periksa pasien di daerah terpencil. Resep digital dikirim ke apotek terdekat.' },
    { no:128, judul:'Pemantau Kesehatan Wearable Murah',tag:'HealthTech  IoT',status:'RISET',warna:'#22c55e', icon:'⌚', deskripsi:'Gelang sensor murah (di bawah Rp 100rb) untuk pantau detak jantung, SpO2, dan langkah kaki. Data ke app keluarga dan Puskesmas untuk pantau lansia.' },
    { no:129, judul:'Peta Sebaran Penyakit Real-time',tag:'HealthTech  GIS',status:'KONSEP', warna:'#8b5cf6', icon:'🗺️', deskripsi:'Visualisasi peta penyebaran penyakit menular di level kelurahan/desa real-time. Data dari laporan puskesmas dan self-report warga yang terverifikasi.' },
    { no:130, judul:'Sistem Rujukan Pasien Digital',tag:'HealthTech  Gov', status:'PROTOTYPE',warna:'#0891b2', icon:'🏥', deskripsi:'Proses rujukan BPJS dari puskesmas ke RS yang sepenuhnya digital. Tidak perlu antre lagi untuk buat surat rujukan. Konfirmasi ketersediaan dokter real-time.' },
    { no:131, judul:'Pengingat Minum Obat AI',     tag:'HealthTech  AI',   status:'AKTIF',    warna:'#f59e0b', icon:'💊', deskripsi:'App pengingat minum obat dengan jadwal dari foto resep. AI kenali nama obat, frekuensi, dan dosis. Notifikasi tidak mengganggu, mudah dikonfirmasi.' },
    { no:132, judul:'Database Tanaman Obat Indonesia',tag:'HealthTech  Data',status:'AKTIF', warna:'#22c55e', icon:'🌿', deskripsi:'Ensiklopedia digital 2000+ tanaman obat Indonesia: khasiat, cara pengolahan, efek samping, dan interaksi dengan obat kimia. Gratis, terverifikasi ahli.' },
    { no:133, judul:'Deteksi TBC dari Rontgen AI', tag:'HealthTech  CV',   status:'RISET',    warna:'#e63329', icon:'🫁', deskripsi:'Model computer vision untuk analisis rontgen dada dan deteksi TBC. Bantu radiolog di daerah yang kekurangan tenaga ahli dengan second opinion digital.' },
    { no:134, judul:'Monitoring Ibu Hamil Digital',tag:'HealthTech  Maternal',status:'PROTOTYPE',warna:'#8b5cf6',icon:'🤰',deskripsi:'App monitoring kehamilan terintegrasi dengan buku KIA digital. Pengingat kunjungan ANC, tracking berat badan dan TD, dan koneksi langsung ke bidan desa.' },
    { no:135, judul:'Kalkulator Gizi Makanan Lokal',tag:'HealthTech  Nutrition',status:'AKTIF',warna:'#0891b2',icon:'🍚',deskripsi:'Database gizi 5000+ makanan Indonesia termasuk makanan daerah. Hitung kalori dan nutrisi dari foto makanan menggunakan CV. Rekomendasi menu seimbang.' },
    { no:136, judul:'Platform Donor Darah Digital', tag:'HealthTech  Community',status:'AKTIF',warna:'#e63329',icon:'🩸',deskripsi:'Sistem pencocokan donor darah real-time. Pendonor dapat notifikasi jika ada pasien butuh golongan darahnya di RS terdekat. Jangkauan nasional.' },
    { no:137, judul:'Pemantau Polusi Udara Kota',  tag:'EnviroTech  IoT',  status:'RISET',    warna:'#1a5cff', icon:'🏙️', deskripsi:'Jaringan sensor PM2.5 murah di tiap kelurahan kota dengan data real-time di web publik. Alert ke warga saat kualitas udara tidak sehat.' },
    { no:138, judul:'Bank Sampah Digital',         tag:'EnviroTech  Social',status:'PROTOTYPE',warna:'#22c55e',icon:'♻️',deskripsi:'Digitalisasi bank sampah: setoran via foto, poin otomatis, tukarkan ke hadiah atau uang elektronik. Gamifikasi untuk tingkatkan partisipasi warga.' },
    { no:139, judul:'Jejak Karbon Kalkulator Personal',tag:'EnviroTech',    status:'KONSEP',   warna:'#8b5cf6', icon:'🌍', deskripsi:'Hitung emisi karbon dari aktivitas harian: transportasi, makanan, belanja, energi rumah. Saran tindakan konkret untuk kurangi jejak karbon secara bertahap.' },
    { no:140, judul:'Platform Adopsi Pohon',       tag:'EnviroTech  Social',status:'KONSEP', warna:'#0891b2', icon:'🌳', deskripsi:'Adopsi pohon di hutan Indonesia secara digital. Pantau pertumbuhan via foto satelit berkala. Dapat sertifikat digital dan kredit karbon.' },
    { no:141, judul:'Sistem Kelola Sampah Elektronik',tag:'EnviroTech',    status:'RISET',    warna:'#f59e0b', icon:'💻', deskripsi:'Platform untuk mengumpulkan dan mendaur ulang e-waste: HP rusak, charger mati, baterai bekas. Pickup terjadwal, beri voucher sebagai insentif.' },
    { no:142, judul:'Monitoring Kesehatan Hutan',  tag:'EnviroTech  Satellite',status:'MIMPI',warna:'#22c55e',icon:'🌲',deskripsi:'Analisis citra satelit periodik untuk deteksi deforestasi, kebakaran hutan kecil, dan perubahan tutupan lahan. Alert ke KLHK dan pemerintah daerah.' },
    { no:143, judul:'App Berkebun Urban',           tag:'AgriTech  Urban', status:'AKTIF',    warna:'#e63329', icon:'🪴', deskripsi:'Panduan berkebun di rumah: kalender tanam, pengingat siram, diagnosis penyakit tanaman dari foto, dan komunitas berkebun urban Indonesia.' },
    { no:144, judul:'Platform Voluntary Carbon Market',tag:'EnviroTech  Finance',status:'MIMPI',warna:'#8b5cf6',icon:'💨',deskripsi:'Marketplace untuk perusahaan beli carbon credit dari petani/komunitas yang menanam pohon. Verifikasi via IoT dan satelit, pembayaran otomatis.' },
    { no:145, judul:'Peta Ekosistem Mangrove',     tag:'EnviroTech  GIS',  status:'RISET',    warna:'#0891b2', icon:'🦀', deskripsi:'Pemetaan kondisi hutan mangrove Indonesia via citra satelit dan laporan komunitas nelayan. Data untuk kebijakan konservasi yang berbasis fakta.' },
    { no:146, judul:'App Ramalan Cuaca Pertanian', tag:'AgriTech  Weather',status:'PROTOTYPE',warna:'#1a5cff', icon:'🌤️', deskripsi:'Prediksi cuaca hiperlokal dalam radius 5km untuk petani. Saran waktu tanam, panen, dan aplikasi pestisida berdasarkan kondisi cuaca 7 hari ke depan.' },
    { no:147, judul:'Sistem Pengelolaan Air Bersih Desa',tag:'WaterTech',   status:'KONSEP',   warna:'#f59e0b', icon:'🚰', deskripsi:'Platform manajemen PAMSIMAS: monitoring debit air, tagihan digital, jadwal perawatan, dan laporan ke Kemendes untuk monitoring nasional.' },
    { no:148, judul:'Edukasi Perubahan Iklim Interaktif',tag:'EnviroTech  EdTech',status:'KONSEP',warna:'#22c55e',icon:'🌡️',deskripsi:'Web interaktif yang menvisualisasikan dampak perubahan iklim di Indonesia dalam 10-50 tahun ke depan. Berbasis skenario, untuk semua usia.' },
    { no:149, judul:'Alert Cuaca Ekstrem Lokal',   tag:'SafetyTech  Weather',status:'AKTIF', warna:'#e63329', icon:'⛈️', deskripsi:'Notifikasi push dan SMS untuk peringatan cuaca ekstrem (hujan lebat, angin kencang) di level kecamatan. Lebih cepat dan spesifik dari BMKG nasional.' },
    { no:150, judul:'Daur Ulang Plastik Komunitas',tag:'EnviroTech  Community',status:'PROTOTYPE',warna:'#8b5cf6',icon:'🧴',deskripsi:'Platform untuk koordinasi pengumpulan dan penjualan plastik bekas ke pengepul. Komunitas dapat penghasilan tambahan, sampah plastik berkurang.' },
  ]
  return (
    <PanelBab id="ch186" num="186" judul="200 INOVASI — BAB 6: KESEHATAN & LINGKUNGAN" warna="#e63329" bg="#fef2f2" gelap>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        🌿 25 inovasi untuk bumi yang lebih sehat dan masyarakat yang lebih sejahtera!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {inovasi.map(item => <KartuInovasi key={item.no} {...item} />)}
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup21() {
  return (
    <>
      <div className="comic-divider" />
      <Ch185 />
      <div className="comic-divider" />
      <Ch186 />
    </>
  )
}
