'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import HeaderBab from '@/components/HeaderBab'

const kategori = [
  {
    label: 'PETUALANGAN & ALAM',
    ikon: '🌊',
    warna: '#0891b2',
    bg: '#ecfeff',
    list: [
      'Jalan-jalan ke pantai — duduk diam, dengarkan ombak',
      'Naik gunung dan lihat matahari terbit dari puncak',
      'Berenang di laut lepas tanpa tujuan',
      'Berkemah di tepi danau tanpa sinyal',
      'Jalan kaki keliling kota tua sendirian',
      'Melihat bintang di tempat yang benar-benar gelap',
      'Naik perahu kecil di sungai yang tenang',
      'Menjelajahi hutan tanpa peta',
      'Duduk di tepi tebing dan menulis sesuatu',
      'Menyaksikan hujan deras dari dalam warung kecil di pinggir jalan',
      'Menemukan air terjun tersembunyi',
      'Bermain pasir di pantai saat tidak ada orang lain',
      'Jalan-jalan sore di sawah saat matahari senja',
      'Tidur di bawah langit terbuka',
      'Menyeberangi jembatan gantung di atas jurang',
    ],
  },
  {
    label: 'BAHASA & PENGETAHUAN',
    ikon: '🗣️',
    warna: '#7c3aed',
    bg: '#f3e8ff',
    list: [
      'Menguasai bahasa Inggris sampai bisa bercanda di dalamnya',
      'Belajar bahasa Jepang sampai bisa nonton anime tanpa subtitle',
      'Menguasai bahasa Korea minimal percakapan sehari-hari',
      'Bisa membaca tulisan Arab dengan lancar',
      'Belajar bahasa Mandarin dasar',
      'Memahami bahasa isyarat Indonesia (BISINDO)',
      'Menyelesaikan satu buku filsafat yang berat sampai habis',
      'Membaca 50 buku non-fiksi dalam setahun',
      'Belajar astronomi sampai bisa menjelaskan teori relativitas',
      'Memahami hukum digital dan HAKI secara mendalam',
      'Mempelajari satu instrumen musik minimal sampai bisa satu lagu',
      'Belajar dasar-dasar psikologi dan bisa mengaplikasikannya',
      'Menguasai satu bahasa pemrograman baru yang belum pernah dipelajari',
      'Menulis jurnal ilmiah atau artikel yang dipublikasikan',
      'Menghafal 100 kata dalam 5 bahasa berbeda',
    ],
  },
  {
    label: 'DIGITAL & TEKNOLOGI',
    ikon: '💻',
    warna: '#1a5cff',
    bg: '#e8f0ff',
    list: [
      'Meluncurkan Camora sebagai produk yang bisa dipakai publik',
      'Membangun komunitas VTuber kampus virtual dari nol',
      'Membuat game pertama yang bisa dimainkan orang lain',
      'Punya channel YouTube dengan konten story-telling komik sendiri',
      'Membuat konten serial dengan 100 episode',
      'Memiliki website portofolio yang muncul di halaman 1 Google',
      'Meluncurkan aplikasi mobile pertama ke Play Store',
      'Membuat AI yang benar-benar berguna untuk satu bidang spesifik',
      'Kontribusi ke proyek open source yang dipakai ribuan orang',
      'Membangun startup digital kecil dengan satu produk nyata',
      'Mengajarkan programming gratis ke 100 orang',
      'Membuat sistem keamanan digital untuk melindungi orang dari penipuan',
      'Punya passive income dari produk digital',
      'Melakukan live coding di depan publik',
      'Diundang sebagai pembicara di acara teknologi',
    ],
  },
  {
    label: 'KARIR & FINANSIAL',
    ikon: '💼',
    warna: '#059669',
    bg: '#ecfdf5',
    list: [
      'Mendapatkan pekerjaan freelance pertama yang dibayar layak',
      'Punya penghasilan tetap dari kerja remote',
      'Menyelesaikan S1 dengan hasil yang membanggakan',
      'Diterima di program S2 M.Kom yang sesuai',
      'Punya tabungan darurat yang cukup untuk 6 bulan',
      'Membeli laptop impian dengan uang sendiri',
      'Kerja sama dengan klien dari luar negeri',
      'Mendapatkan sertifikasi internasional yang diakui',
      'Memiliki studio kerja sendiri — kecil tapi nyaman',
      'Tidak perlu meminta uang dari siapapun',
      'Membayar tagihan keluarga untuk pertama kali',
      'Donasi ke pendidikan anak yang tidak mampu',
      'Punya investasi kecil yang berjalan otomatis',
      'Diakui sebagai developer yang dipercaya di komunitas',
      'Memiliki nama di industri digital Indonesia',
    ],
  },
  {
    label: 'KONEKSI & HUBUNGAN',
    ikon: '🤝',
    warna: '#e63329',
    bg: '#fff1f0',
    list: [
      'Bertemu kembali dengan seseorang yang lama tidak disapa',
      'Makan siang berdua di tempat yang tenang tanpa membicarakan masalah',
      'Pergi ke pantai berdua tanpa rencana',
      'Duduk bareng nonton film sampai malam',
      'Jalan-jalan ke pasar tradisional berdua pagi-pagi',
      'Menemukan teman yang benar-benar memahami cara berpikir saya',
      'Punya satu sahabat yang bisa dihubungi kapanpun tanpa basa-basi',
      'Dikenal sebagai orang yang bisa diandalkan oleh orang terdekat',
      'Membantu seseorang tanpa mereka tahu itu saya',
      'Mengirim surat atau pesan panjang ke seseorang yang berarti',
      'Masak bersama seseorang untuk pertama kali',
      'Tertawa lepas bersama tanpa memikirkan apapun',
      'Pergi ke konser atau pertunjukan seni bersama',
      'Membuat kenangan yang tidak perlu difoto supaya diingat',
      'Menjadi seseorang yang layak untuk menemani hingga akhir',
    ],
  },
  {
    label: 'KESEHATAN & GAYA HIDUP',
    ikon: '🏃',
    warna: '#f59e0b',
    bg: '#fffbeb',
    list: [
      'Bisa lari 10 km tanpa berhenti',
      'Rutin meditasi 10 menit setiap pagi selama sebulan penuh',
      'Belajar memasak minimal 10 resep yang enak',
      'Tidur teratur dan bangun segar selama sebulan berturut-turut',
      'Mengurangi screen time di luar pekerjaan secara konsisten',
      'Punya rutinitas pagi yang tidak melibatkan gadget',
      'Berjalan kaki 10.000 langkah sehari selama seminggu',
      'Belajar teknik pernapasan untuk mengelola stres',
      'Tidak makan junk food selama satu bulan penuh',
      'Berdiri di depan cermin dan benar-benar menerima diri sendiri',
    ],
  },
  {
    label: 'KREATIVITAS & SENI',
    ikon: '🎨',
    warna: '#ec4899',
    bg: '#fdf2f8',
    list: [
      'Menyelesaikan satu komik pendek dari awal sampai akhir',
      'Merekam dan mengedit video pendek yang layak ditonton',
      'Menulis cerita fiksi minimal 10.000 kata',
      'Membuat musik latar untuk proyek sendiri',
      'Mendesain karakter visual yang dipakai banyak orang',
      'Mengambil foto yang benar-benar bagus tanpa filter berlebihan',
      'Membuat animasi pendek meski sederhana',
      'Punya karya yang dishare dan diapresiasi orang asing',
      'Membuat zine atau buku digital yang bisa diunduh gratis',
      'Meninggalkan sesuatu yang kreatif untuk dikenang',
    ],
  },
]

// Flatten semua list untuk hitung total
const total = kategori.reduce((acc, k) => acc + k.list.length, 0)

export default function BucketList100() {
  const [bukaKategori, setBukaKategori] = useState<number | null>(0)
  const [checked, setChecked] = useState<Set<string>>(new Set())

  function toggle(key: string) {
    setChecked(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const selesai = checked.size

  return (
    <section
      id="bucket-list"
      className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden"
      style={{ background: '#fafaf7' }}
    >
      <div className="halftone-bg" />
      <div className="max-w-4xl mx-auto relative z-10">

        <HeaderBab
          nomor="100 LIST"
          judul="KEINGINAN SETELAH LULUS"
          warna="#e63329"
          subtitle="Hal-hal yang ingin saya lakukan, rasakan, dan wujudkan setelah selesai dengan tanggung jawab akademik"
        />

        {/* Speech bubble intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="speech-bubble inline-block text-sm max-w-2xl">
            🗒️ Ini bukan wishlist impulsif. Ini daftar yang sudah lama ada di kepala — tinggal menunggu waktunya tiba.
          </div>
        </motion.div>

        {/* Progress bar total */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 p-4"
          style={{
            border: '3px solid #0a0a0a',
            background: '#0a0a0a',
            boxShadow: '4px 4px 0 #e63329',
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-comic text-xs text-white/60 tracking-widest">PROGRESS</span>
            <span className="font-comic text-sm text-[#ffd700]">
              {selesai} / {total} tercapai
            </span>
          </div>
          <div style={{ height: 8, background: '#333', borderRadius: 4 }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(selesai / total) * 100}%` }}
              transition={{ duration: 0.5 }}
              style={{ height: '100%', background: '#ffd700', borderRadius: 4 }}
            />
          </div>
          <p className="text-white/30 text-[10px] font-bold mt-2">
            Klik item untuk tandai sebagai tercapai ✓
          </p>
        </motion.div>

        {/* Kategori */}
        <div className="flex flex-col gap-4">
          {kategori.map((kat, ki) => {
            const buka = bukaKategori === ki
            const selesaiKat = kat.list.filter((_, li) =>
              checked.has(`${ki}-${li}`)
            ).length

            return (
              <motion.div
                key={kat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: ki * 0.06 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Header kategori — klik untuk buka/tutup */}
                <button
                  onClick={() => setBukaKategori(buka ? null : ki)}
                  className="w-full flex items-center justify-between px-5 py-3 text-left transition-all"
                  style={{
                    background: kat.warna,
                    border: '3px solid #0a0a0a',
                    borderBottom: buka ? 'none' : '3px solid #0a0a0a',
                    boxShadow: buka ? `4px 0 0 #0a0a0a` : `4px 4px 0 #0a0a0a`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{kat.ikon}</span>
                    <div>
                      <div className="font-comic text-[10px] text-white/70 tracking-widest">
                        {selesaiKat}/{kat.list.length} selesai
                      </div>
                      <div className="font-comic text-sm text-white">
                        {kat.label}
                      </div>
                    </div>
                  </div>
                  <span className="font-comic text-white text-lg leading-none">
                    {buka ? '▲' : '▼'}
                  </span>
                </button>

                {/* Isi list */}
                {buka && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className="px-4 py-4 grid sm:grid-cols-2 gap-2"
                    style={{
                      background: kat.bg,
                      border: '3px solid #0a0a0a',
                      boxShadow: '4px 4px 0 #0a0a0a',
                    }}
                  >
                    {kat.list.map((item, li) => {
                      const key = `${ki}-${li}`
                      const done = checked.has(key)
                      return (
                        <button
                          key={key}
                          onClick={() => toggle(key)}
                          className="flex items-start gap-2 text-left p-2 transition-all hover:bg-black/5 rounded"
                        >
                          <span
                            className="flex-shrink-0 w-4 h-4 mt-0.5 flex items-center justify-center text-[10px] font-bold"
                            style={{
                              border: `2px solid ${kat.warna}`,
                              background: done ? kat.warna : 'transparent',
                              color: done ? '#fff' : 'transparent',
                              minWidth: 16,
                            }}
                          >
                            ✓
                          </span>
                          <span
                            className="text-xs font-bold leading-relaxed"
                            style={{
                              color: done ? '#0a0a0a55' : '#0a0a0a',
                              textDecoration: done ? 'line-through' : 'none',
                            }}
                          >
                            {li + 1}. {item}
                          </span>
                        </button>
                      )
                    })}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 comic-panel-dark p-6 text-center"
        >
          <div className="font-comic text-base text-[#ffd700] mb-2">
            🎯 {total} hal. Satu per satu.
          </div>
          <p className="text-white/50 text-xs font-bold leading-relaxed">
            Tidak semua harus terjadi sekarang. Tidak semua harus terjadi sendiri. Yang penting — semuanya akhirnya terjadi.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
