'use client'

import { motion } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

const babList = [
  {
    nomor: 'BAB I',
    judul: 'Siapa Saya Sebenarnya',
    ikon: '🪞',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    isi: [
      {
        subjudul: 'Penyendiri yang Bisa Bicara',
        teks:
          'Saya adalah orang yang secara alami memilih kesendirian. Bukan karena membenci orang lain — tapi karena keheningan adalah tempat saya berpikir paling jernih. Ironisnya, ketika saya benar-benar mau berbicara, saya bisa melakukannya dengan sangat baik. Saya memahami nuansa percakapan, tahu kapan harus diam, kapan harus bertanya, dan kapan harus langsung ke inti.',
      },
      {
        subjudul: 'Mudah Tersakiti, Sulit Membuka Hati',
        teks:
          'Saya tidak mudah jatuh hati pada seseorang. Tapi ketika sudah menaruh rasa, saya merasakannya secara mendalam — dan luka yang datang dari sana pun tidak mudah hilang. Itu sebabnya saya memilih untuk tidak membuka perasaan kecuali kepada seseorang yang benar-benar memahami cara saya merasakan dan berpikir. Bukan sekadar kecocokan fisik atau ketertarikan sementara, tapi kecocokan sifat — seseorang yang bisa membuat saya merasa lebih nyaman dari kesendirian itu sendiri.',
      },
    ],
  },
  {
    nomor: 'BAB II',
    judul: 'Proyek Camora — Karakter AI yang Hidup',
    ikon: '🤖',
    warna: '#1a5cff',
    bg: '#e8f0ff',
    isi: [
      {
        subjudul: 'Apa Itu Camora?',
        teks:
          'Camora adalah proyek yang sedang saya kembangkan — sebuah karakter AI yang bisa diajak berinteraksi secara nyata. Bukan sekadar chatbot biasa, tapi karakter dengan kepribadian yang terdefinisi, mampu merespons secara kontekstual, dan dirancang untuk pengalaman interaksi yang terasa hidup dan personal.',
      },
      {
        subjudul: 'Teknologi & Visi',
        teks:
          'Proyek ini berfokus pada pengembangan karakter virtual berbasis AI yang bisa digunakan dalam berbagai konteks — mulai dari companion digital, karakter interaktif untuk konten, hingga fondasi untuk ekosistem virtual yang lebih besar. Repository-nya tersedia secara publik di GitHub untuk siapapun yang ingin melihat perkembangannya.',
        tautan: {
          label: '→ Lihat Repository: VirtualKarakter',
          url: 'https://github.com/rizki-habibi/VirtualKarakter',
        },
      },
    ],
  },
  {
    nomor: 'BAB III',
    judul: 'Rencana Komunitas — Kampus Virtual VTuber',
    ikon: '🎓',
    warna: '#e63329',
    bg: '#fef2f2',
    isi: [
      {
        subjudul: 'Konsep Komunitas',
        teks:
          'Saya memiliki rancangan komunitas di mana VTuber baru maupun veteran bisa bergabung ke dalam sebuah sistem perkuliahan kampus virtual. Bukan sekadar komunitas biasa — tapi ekosistem belajar berbasis karakter virtual yang terstruktur, di mana siapapun bisa berkembang, berkolaborasi, dan menciptakan konten sambil terus belajar.',
      },
      {
        subjudul: 'Tujuan Jangka Panjang',
        teks:
          'Komunitas ini dirancang sebagai ruang yang inklusif — tanpa pandang latar belakang, tanpa biaya yang menghalangi, dan dengan jalur pendidikan yang jelas. VTuber bukan hanya entertainer, tapi juga bisa menjadi agen edukasi digital yang berdampak nyata.',
      },
    ],
  },
  {
    nomor: 'BAB IV',
    judul: 'Perjalanan yang Membentuk Saya',
    ikon: '📖',
    warna: '#0891b2',
    bg: '#ecfeff',
    isi: [
      {
        subjudul: 'Mimpi yang Tertunda',
        teks:
          'Semasa SMA, saya punya dua tujuan kampus: UNEJ dan Polije. Keduanya tidak terwujud. Kegagalan itu bukan sesuatu yang mudah saya terima — saya merasakannya secara fisik dan emosional dengan cara yang sulit dijelaskan. Tapi dari titik itu, saya belajar bahwa jalur yang terlihat tertutup belum tentu berarti akhir dari perjalanan.',
      },
      {
        subjudul: 'Keahlian yang Saya Miliki tapi Tidak Selalu Saya Gunakan',
        teks:
          'Saya memiliki kemampuan membaca pola — baik dari masa lalu maupun memperkirakan arah masa depan. Ini bukan sesuatu yang saya klaim sembarangan, dan justru karena saya memahami bobotnya, saya memilih untuk tidak menggunakannya kecuali benar-benar perlu. Kemampuan ini tetap ada, tapi kendalinya ada di tangan saya.',
      },
    ],
  },
  {
    nomor: 'BAB V',
    judul: 'Harapan Masa Depan',
    ikon: '🌅',
    warna: '#22c55e',
    bg: '#f0fdf4',
    isi: [
      {
        subjudul: 'Setelah Lulus',
        teks:
          'Ketika lulus, keinginan saya sederhana: bertemu kembali dengan seseorang yang pernah saya sayangi — bukan dengan beban atau ekspektasi yang berat, tapi dengan ketulusan. Sudah lama tidak bersapa, dan saya hanya ingin kembali sebagai teman terlebih dahulu.',
      },
      {
        subjudul: 'Arah Hidup yang Saya Pilih',
        teks:
          'Saya ingin fokus di dunia digital dan content creation. Bekerja secara freelance, memberikan edukasi gratis dengan sertifikat yang bermakna, dan tetap memiliki penghasilan yang stabil. Bukan mengejar kemewahan — tapi kebebasan untuk bekerja dengan cara saya sendiri, dari tempat yang saya pilih.',
      },
      {
        subjudul: 'Tempat yang Saya Impikan',
        teks:
          'Saya ingin pergi ke tempat yang tenang. Bukan destinasi mewah — cukup tempat yang damai, jauh dari kebisingan politik dan dinamika yang melelahkan. Hanya berjalan, menikmati udara, dan hadir sepenuhnya di momen itu.',
      },
      {
        subjudul: 'Jika Ada Kesempatan Lanjut S2',
        teks:
          'Jika ada bidang M.Kom yang benar-benar sesuai — terutama di UNEJ atau institusi independen yang tidak dikendalikan oleh kepentingan korup — saya ingin melanjutkan. Bukan karena gengsi gelar, tapi karena saya percaya ilmu yang benar harus diteruskan dengan cara yang benar.',
      },
    ],
  },
]

export default function KeinginanLanjutan() {
  return (
    <section
      id="keinginan-lanjutan"
      className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden"
      style={{ background: '#fafaf7' }}
    >
      <div className="halftone-bg" />
      <div className="max-w-4xl mx-auto relative z-10">

        <HeaderBab
          nomor="CHAPTER"
          judul="KEINGINAN LANJUTAN"
          warna="#8b5cf6"
          subtitle="Kepribadian, proyek, harapan, dan hal-hal yang belum sempat terucapkan"
        />

        {/* Speech bubble intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="speech-bubble inline-block text-sm max-w-2xl">
            📖 Ini bukan CV tambahan. Ini catatan jujur tentang siapa saya, ke mana saya pergi, dan apa yang saya bawa dalam perjalanan ini.
          </div>
        </motion.div>

        {/* Bab-bab */}
        <div className="flex flex-col gap-10">
          {babList.map((bab, bi) => (
            <motion.div
              key={bab.nomor}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: bi * 0.08, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Header bab */}
              <div
                className="flex items-center gap-3 px-5 py-3 mb-0"
                style={{
                  background: bab.warna,
                  border: `3px solid #0a0a0a`,
                  borderBottom: 'none',
                  boxShadow: `4px 0 0 #0a0a0a`,
                }}
              >
                <span className="text-2xl">{bab.ikon}</span>
                <div>
                  <div className="font-comic text-[10px] text-white/70 tracking-widest">
                    {bab.nomor}
                  </div>
                  <div className="font-comic text-base text-white leading-tight">
                    {bab.judul}
                  </div>
                </div>
              </div>

              {/* Isi bab */}
              <div
                className="px-5 py-6 flex flex-col gap-6"
                style={{
                  background: bab.bg,
                  border: `3px solid #0a0a0a`,
                  boxShadow: `4px 4px 0 #0a0a0a`,
                }}
              >
                {bab.isi.map((paragraf, pi) => (
                  <motion.div
                    key={pi}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: bi * 0.05 + pi * 0.07 }}
                    viewport={{ once: true }}
                  >
                    {/* Subjudul bergaya label */}
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-1 h-5 flex-shrink-0"
                        style={{ background: bab.warna }}
                      />
                      <span
                        className="font-comic text-sm"
                        style={{ color: bab.warna }}
                      >
                        {paragraf.subjudul}
                      </span>
                    </div>

                    {/* Teks bergaya textbook */}
                    <p
                      className="text-sm leading-relaxed font-bold text-[#0a0a0a]/75 pl-3"
                      style={{ borderLeft: `2px solid ${bab.warna}33` }}
                    >
                      {paragraf.teks}
                    </p>

                    {/* Tautan jika ada */}
                    {'tautan' in paragraf && paragraf.tautan && (
                      <a
                        href={paragraf.tautan.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 ml-3 text-xs font-comic px-3 py-1.5 transition-transform hover:-translate-y-0.5"
                        style={{
                          background: bab.warna,
                          color: '#fff',
                          border: `2px solid #0a0a0a`,
                          boxShadow: `2px 2px 0 #0a0a0a`,
                        }}
                      >
                        {paragraf.tautan.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Penutup — dark panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className="mt-12 comic-panel-dark p-7"
        >
          <div className="font-comic text-xl text-[#ffd700] mb-4 flex items-center gap-2">
            ✍️ CATATAN PENUTUP
          </div>
          <p className="text-white/70 text-sm leading-relaxed font-bold mb-4">
            Saya tidak menulis ini untuk mendapat simpati. Saya menulisnya karena percaya bahwa siapapun yang benar-benar ingin mengenal saya — sebagai rekan kerja, kolaborator, atau apapun itu — berhak tahu dengan siapa sebenarnya mereka berhadapan.
          </p>
          <p className="text-white/70 text-sm leading-relaxed font-bold mb-4">
            Saya bukan orang yang sempurna. Saya pernah gagal, pernah terluka, dan pernah diam terlalu lama di saat yang salah. Tapi semua itu membentuk cara saya bekerja, cara saya berpikir, dan cara saya menjaga orang-orang yang saya anggap penting.
          </p>
          <p className="text-white/50 text-xs leading-relaxed font-bold">
            — Rizki Habibi, masih dalam perjalanan.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
