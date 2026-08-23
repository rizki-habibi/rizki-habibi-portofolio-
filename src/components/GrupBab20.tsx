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

/* --- Ch183: IoT & SMART TECHNOLOGY (51-75) --- */
function Ch183() {
  const inovasi = [
    { no:51,  judul:'Smart Kandang Ternak',      tag:'AgriTech  IoT',     status:'PROTOTYPE', warna:'#22c55e', icon:'🐄', deskripsi:'Sensor suhu, kelembaban, dan gerak di kandang sapi/ayam. Notifikasi otomatis ke peternak jika kondisi tidak normal. Dashboard monitoring dari HP.' },
    { no:52,  judul:'Irigasi Sawah Otomatis',    tag:'AgriTech  IoT',     status:'RISET',     warna:'#1a5cff', icon:'💧', deskripsi:'Sistem buka-tutup pintu air otomatis berdasarkan sensor kelembaban tanah. Hemat air 40%, petani tidak perlu keliling sawah setiap pagi.' },
    { no:53,  judul:'Smart Streetlight Desa',    tag:'SmartCity  IoT',    status:'KONSEP',    warna:'#f59e0b', icon:'💡', deskripsi:'Lampu jalan yang otomatis menyala saat gelap dan meredup saat tidak ada aktivitas. Panel surya + baterai untuk daerah yang belum stabil listrik.' },
    { no:54,  judul:'Sensor Banjir Early Warning',tag:'DisasterTech  IoT', status:'PROTOTYPE', warna:'#e63329', icon:'🌊', deskripsi:'Sensor ketinggian air di sungai yang mengirim peringatan ke warga sekitar via WhatsApp dan sirine lokal otomatis saat level bahaya terlampaui.' },
    { no:55,  judul:'Smart Tempat Sampah',       tag:'SmartCity  IoT',    status:'KONSEP',    warna:'#8b5cf6', icon:'🗑️', deskripsi:'Tempat sampah dengan sensor kapasitas yang otomatis kirim notifikasi ke petugas kebersihan saat penuh. Data rute pengangkutan optimal.' },
    { no:56,  judul:'Pemantau Kualitas Air Sungai',tag:'EnviroTech  IoT',  status:'RISET',     warna:'#0891b2', icon:'🏞️', deskripsi:'Sensor pH, turbidity, dan kandungan logam berat di sungai dengan data real-time publik. Dashboard untuk pemerintah dan komunitas lingkungan.' },
    { no:57,  judul:'Smart Parkir',              tag:'SmartCity  IoT',    status:'KONSEP',    warna:'#22c55e', icon:'🚗', deskripsi:'Sensor di setiap slot parkir menampilkan ketersediaan di papan digital. Pengguna bisa cek slot kosong dari aplikasi sebelum tiba di lokasi.' },
    { no:58,  judul:'Monitoring Gizi Balita IoT',tag:'HealthTech  IoT',   status:'RISET',     warna:'#f59e0b', icon:'👶', deskripsi:'Timbangan pintar di posyandu yang otomatis catat berat-tinggi balita, hitung Z-score, dan kirim laporan ke sistem Puskesmas tanpa input manual.' },
    { no:59,  judul:'Smart Greenhouse Mini',     tag:'AgriTech  IoT',     status:'PROTOTYPE', warna:'#1a5cff', icon:'🌱', deskripsi:'Greenhouse urban dengan kontrol otomatis: lampu grow, kipas, penyiraman. Cocok untuk sekolah pertanian atau petani urban di lahan sempit.' },
    { no:60,  judul:'Sistem Presensi IoT Sekolah',tag:'EdTech  IoT',      status:'AKTIF',     warna:'#e63329', icon:'📲', deskripsi:'Presensi siswa via RFID kartu pelajar atau fingerprint. Data masuk otomatis ke sistem sekolah dan notifikasi orang tua via WhatsApp.' },
    { no:61,  judul:'Pemantau Panel Surya',      tag:'EnergyTech  IoT',   status:'RISET',     warna:'#8b5cf6', icon:'☀️', deskripsi:'Sensor output daya panel surya real-time dengan deteksi anomali. Prediksi kapan panel perlu dibersihkan atau diganti berdasarkan tren data.' },
    { no:62,  judul:'Smart Mesin Absensi Warung',tag:'BizTech  IoT',      status:'KONSEP',    warna:'#0891b2', icon:'🏬', deskripsi:'Alat absensi murah untuk warung dan toko kecil: fingerprint atau PIN, rekap otomatis, dan laporan ke pemilik meski sedang tidak di tempat.' },
    { no:63,  judul:'Sensor Gempa Lokal',        tag:'DisasterTech  IoT', status:'RISET',     warna:'#e63329', icon:'🌋', deskripsi:'Jaringan sensor seismik murah di sekolah dan kantor desa untuk early warning lokal, sebelum notifikasi BMKG sampai ke daerah terpencil.' },
    { no:64,  judul:'Smart Kunci Masjid/Mushola',tag:'SmartCity  IoT',    status:'KONSEP',    warna:'#22c55e', icon:'🕌', deskripsi:'Sistem kunci digital untuk masjid: jadwal otomatis buka-kunci sesuai waktu sholat, log akses, dan kontrol dari HP takmir kapan saja.' },
    { no:65,  judul:'Alat Ukur Kualitas Udara',  tag:'EnviroTech  IoT',   status:'PROTOTYPE', warna:'#f59e0b', icon:'🌬️', deskripsi:'Sensor PM2.5, CO2, dan VOC murah untuk dipasang di sekolah dan posyandu. Data real-time ditampilkan di papan digital dan dashboard publik.' },
    { no:66,  judul:'Pemantau Kondisi Jembatan', tag:'InfraTech  IoT',    status:'RISET',     warna:'#1a5cff', icon:'🌉', deskripsi:'Sensor getaran dan regangan di jembatan desa untuk deteksi dini kerusakan struktural. Alert ke dinas PU sebelum terjadi kecelakaan.' },
    { no:67,  judul:'Smart Kolam Ikan',          tag:'AgriTech  IoT',     status:'PROTOTYPE', warna:'#8b5cf6', icon:'🐟', deskripsi:'Monitoring pH, suhu, oksigen terlarut, dan kejernihan air kolam ikan. Otomatis aktifkan aerator atau heater saat kondisi kritis.' },
    { no:68,  judul:'Sistem Tracking Aset Sekolah',tag:'EdTech  IoT',     status:'KONSEP',    warna:'#0891b2', icon:'🏫', deskripsi:'Tag RFID atau BLE pada komputer, proyektor, dan alat lab sekolah. Notifikasi jika aset dibawa keluar area sekolah tanpa izin.' },
    { no:69,  judul:'Smart Penerangan Jalan Otonom',tag:'SmartCity  AI',  status:'KONSEP',    warna:'#22c55e', icon:'🛣️', deskripsi:'Lampu jalan yang berkoordinasi: redup 30% saat tidak ada kendaraan, terang penuh saat ada. Hemat listrik 60% dibanding sistem konvensional.' },
    { no:70,  judul:'IoT Pengering Hasil Panen', tag:'AgriTech  IoT',     status:'KONSEP',    warna:'#f59e0b', icon:'🌾', deskripsi:'Mesin pengering padi/kopi/kakao dengan kontrol suhu otomatis. Sensor kelembaban mengoptimalkan waktu pengeringan untuk kualitas terbaik.' },
    { no:71,  judul:'Smart Meter Air Desa',      tag:'SmartCity  IoT',    status:'RISET',     warna:'#e63329', icon:'💦', deskripsi:'Meter air digital yang kirim data ke operator PDAM otomatis. Deteksi kebocoran pipa dari anomali data tanpa perlu cek fisik tiap bulan.' },
    { no:72,  judul:'Pemantau Stres Hewan Ternak',tag:'AgriTech  AI',     status:'MIMPI',     warna:'#8b5cf6', icon:'🐓', deskripsi:'Akselerometer dan sensor suara pada ternak untuk deteksi tanda-tanda penyakit atau stres sebelum terlihat secara visual oleh peternak.' },
    { no:73,  judul:'Smart Pintu Bendungan',     tag:'AgriTech  IoT',     status:'KONSEP',    warna:'#0891b2', icon:'🏗️', deskripsi:'Aktuator otomatis pada pintu air irigasi yang dikontrol dari pusat. Distribusi air yang adil antar petani berdasarkan jadwal yang disepakati.' },
    { no:74,  judul:'Sistem Keamanan Rumah IoT', tag:'SecurityTech  IoT', status:'PROTOTYPE', warna:'#22c55e', icon:'🔐', deskripsi:'Kamera, sensor gerak, dan kunci pintu terintegrasi dalam satu app. Notifikasi real-time ke HP pemilik dengan snapshot otomatis saat terdeteksi.' },
    { no:75,  judul:'Alat Bantu Difabel IoT',    tag:'AssistiveTech  IoT',status:'RISET',     warna:'#f59e0b', icon:'♿', deskripsi:'Tongkat pintar untuk tunanetra dengan sensor ultrasound untuk deteksi rintangan, GPS untuk navigasi, dan tombol darurat kirim lokasi ke keluarga.' },
  ]
  return (
    <PanelBab id="ch183" num="183" judul="200 INOVASI — BAB 3: IoT & TEKNOLOGI CERDAS" warna="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">
        🔌 25 inovasi IoT yang menghubungkan dunia fisik dengan digital — dari sawah hingga kota!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {inovasi.map(item => <KartuInovasi key={item.no} {...item} />)}
      </div>
    </PanelBab>
  )
}

/* --- Ch184: AI & MACHINE LEARNING (76-100) --- */
function Ch184() {
  const inovasi = [
    { no:76,  judul:'Deteksi Penyakit Tanaman AI',tag:'AgriTech  AI',    status:'RISET',     warna:'#22c55e', icon:'🌿', deskripsi:'Upload foto daun tanaman, AI langsung identifikasi penyakit dan rekomendasikan solusi. Model dilatih dari dataset tanaman tropis Indonesia.' },
    { no:77,  judul:'Prediksi Harga Panen',       tag:'AgriTech  ML',    status:'RISET',     warna:'#1a5cff', icon:'📈', deskripsi:'Model ML yang prediksi harga komoditas pertanian 2-4 minggu ke depan berdasarkan data historis, cuaca, dan supply-demand dari pasar lokal.' },
    { no:78,  judul:'AI Dokter Tanya Jawab',      tag:'HealthTech  AI',  status:'KONSEP',    warna:'#e63329', icon:'🩺', deskripsi:'Chatbot AI sebagai first-line consultation kesehatan. Analisis gejala, rekomendasikan obat bebas, atau arahkan ke dokter jika perlu. Bukan pengganti dokter.' },
    { no:79,  judul:'Penerjemah Bahasa Daerah AI',tag:'LangTech  AI',    status:'RISET',     warna:'#f59e0b', icon:'🗣️', deskripsi:'Model NLP untuk menerjemahkan bahasa daerah (Jawa, Sunda, Bugis, Madura) ke Indonesia dan sebaliknya. Bantu pelestarian bahasa lokal.' },
    { no:80,  judul:'AI Deteksi Hoaks Lokal',     tag:'InfoTech  AI',    status:'AKTIF',     warna:'#8b5cf6', icon:'🚫', deskripsi:'Model klasifikasi berita hoaks yang dilatih pada konteks Indonesia. Plugin browser dan bot WhatsApp untuk cek fakta instan sebelum share.' },
    { no:81,  judul:'Rekomendasi Tanaman Berdasar Kondisi Lahan',tag:'AgriTech  ML',status:'PROTOTYPE',warna:'#0891b2',icon:'🌾',deskripsi:'Input: jenis tanah, curah hujan, ketinggian, budget. Output: 5 tanaman paling cocok dengan proyeksi keuntungan dan risiko.' },
    { no:82,  judul:'AI Koreksi Ejaan Bahasa Daerah',tag:'LangTech  NLP',status:'RISET',    warna:'#22c55e', icon:'✏️', deskripsi:'Spell checker untuk teks bahasa Jawa dan Sunda. Membantu guru dan penulis dalam membuat konten pendidikan berbahasa daerah yang benar.' },
    { no:83,  judul:'Computer Vision Sortir Buah',tag:'AgriTech  CV',    status:'PROTOTYPE', warna:'#f59e0b', icon:'🍎', deskripsi:'Kamera + AI untuk menyortir buah berdasarkan ukuran, warna, dan tingkat kematangan di jalur produksi. Akurasi 95%, jauh lebih cepat dari manual.' },
    { no:84,  judul:'Prediksi Banjir Berbasis Data',tag:'DisasterTech  ML',status:'RISET',  warna:'#1a5cff', icon:'🌧️', deskripsi:'Model prediksi banjir 6-12 jam ke depan berdasarkan data curah hujan, ketinggian sungai, dan kondisi tanah dari sensor terdistribusi.' },
    { no:85,  judul:'AI Pembuat Soal Ujian Otomatis',tag:'EdTech  AI',   status:'KONSEP',    warna:'#e63329', icon:'📝', deskripsi:'Dari materi pelajaran yang diinput guru, AI generate soal pilihan ganda dan isian dengan tingkat kesulitan yang bisa disesuaikan.' },
    { no:86,  judul:'Deteksi Stunting dari Foto',  tag:'HealthTech  CV', status:'RISET',     warna:'#8b5cf6', icon:'📸', deskripsi:'Analisis proporsi tubuh balita dari foto untuk skrining awal stunting. Divalidasi dokter, digunakan sebagai alat bantu kader posyandu.' },
    { no:87,  judul:'AI Pendamping Lansia',        tag:'HealthTech  AI', status:'KONSEP',    warna:'#0891b2', icon:'👴', deskripsi:'Asisten AI dengan suara yang menemani lansia: pengingat minum obat, deteksi jika tidak bergerak terlalu lama, dan koneksi video ke keluarga.' },
    { no:88,  judul:'Analitik Sentimen Pasar Lokal',tag:'BizTech  NLP',  status:'RISET',     warna:'#22c55e', icon:'💬', deskripsi:'Analisis sentimen dari review Google Maps dan media sosial untuk UMKM lokal. Dashboard insight tentang apa yang disukai dan tidak oleh pelanggan.' },
    { no:89,  judul:'OCR KTP dan Dokumen',        tag:'GovTech  CV',     status:'AKTIF',     warna:'#f59e0b', icon:'🪪', deskripsi:'Ekstrak data KTP, ijazah, dan dokumen resmi secara otomatis. Integrasi ke form pendaftaran untuk mengurangi input manual dan human error.' },
    { no:90,  judul:'Rekognisi Wajah Absensi',    tag:'SecTech  CV',     status:'PROTOTYPE', warna:'#1a5cff', icon:'😀', deskripsi:'Sistem absensi face recognition yang berjalan di edge device tanpa internet. Akurat dalam kondisi pencahayaan berbeda dan wajah bermasker.' },
    { no:91,  judul:'AI Penyuluh Pertanian',       tag:'AgriTech  AI',   status:'KONSEP',    warna:'#e63329', icon:'👨🌾', deskripsi:'Chatbot AI sebagai penyuluh pertanian digital. Tanya soal hama, pupuk, jadwal tanam — dapat jawaban instan dalam bahasa yang mudah dipahami petani.' },
    { no:92,  judul:'Prediksi Dropout Siswa',      tag:'EdTech  ML',     status:'RISET',     warna:'#8b5cf6', icon:'🎓', deskripsi:'Model prediksi siswa yang berisiko dropout berdasarkan pola absensi, nilai, dan aktivitas. Intervensi dini dari guru BK sebelum terlambat.' },
    { no:93,  judul:'AI Desain Logo UMKM',         tag:'DesignTech  AI', status:'KONSEP',    warna:'#0891b2', icon:'🎨', deskripsi:'Generate logo profesional untuk UMKM dari input nama dan jenis usaha. 10 pilihan desain instan, edit online, download gratis dalam format SVG/PNG.' },
    { no:94,  judul:'Rekomendasi Obat Herbal',     tag:'HealthTech  AI', status:'RISET',     warna:'#22c55e', icon:'🌿', deskripsi:'AI yang merekomendasikan tanaman obat tradisional berdasarkan keluhan. Divalidasi apoteker, dilengkapi cara pengolahan dan peringatan interaksi.' },
    { no:95,  judul:'AI Narasi Laporan Keuangan',  tag:'FinTech  AI',    status:'KONSEP',    warna:'#f59e0b', icon:'📊', deskripsi:'Dari data angka keuangan UMKM, AI generate narasi laporan yang mudah dipahami pemilik non-akuntan. Highlight tren positif dan peringatan risiko.' },
    { no:96,  judul:'Chatbot Layanan Desa',        tag:'GovTech  NLP',   status:'ROADMAP',   warna:'#1a5cff', icon:'🏛️', deskripsi:'Bot WhatsApp untuk kantor desa: cek persyaratan surat, jadwal pelayanan, status pengajuan. 24/7 tanpa perlu operator manusia.' },
    { no:97,  judul:'AI Detector Kekerasan Audio', tag:'SafetyTech  AI', status:'RISET',     warna:'#e63329', icon:'🔊', deskripsi:'Model yang mendeteksi suara kekerasan (teriakan, bantingan, tangisan) dari mikrofon ambient di ruang publik. Alert ke petugas keamanan.' },
    { no:98,  judul:'Translasi Real-time Meeting', tag:'ProdTech  AI',   status:'KONSEP',    warna:'#8b5cf6', icon:'🎙️', deskripsi:'Sistem subtitle real-time dalam meeting online yang menerjemahkan ucapan ke bahasa daerah pilihan peserta. Inklusif untuk peserta non-Indonesia.' },
    { no:99,  judul:'AI Kurator Konten Anak',      tag:'EdTech  AI',     status:'KONSEP',    warna:'#0891b2', icon:'🧒', deskripsi:'Sistem yang otomatis filter dan kurasi konten YouTube/TikTok yang aman dan edukatif untuk anak berdasarkan usia. Orang tua bisa set preferensi.' },
    { no:100, judul:'Diagnosis Kerusakan Motor AI',tag:'AutoTech  AI',   status:'RISET',     warna:'#22c55e', icon:'🏍️', deskripsi:'Analisis suara mesin kendaraan bermotor menggunakan ML. Deteksi awal 20+ jenis kerusakan sebelum menjadi masalah besar dan mahal.' },
  ]
  return (
    <PanelBab id="ch184" num="184" judul="200 INOVASI — BAB 4: AI & MACHINE LEARNING" warna="#8b5cf6" bg="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🤖 25 inovasi AI/ML yang bisa langsung berdampak untuk masyarakat Indonesia — dari sawah sampai kota!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {inovasi.map(item => <KartuInovasi key={item.no} {...item} />)}
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup20() {
  return (
    <>
      <div className="comic-divider" />
      <Ch183 />
      <div className="comic-divider" />
      <Ch184 />
    </>
  )
}
