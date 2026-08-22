'use client'

import { motion } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

function ambilNomor(chNum: string): string {
  const m = chNum.match(/\d+/)
  return m ? m[0] : chNum
}

function PanelBab({ id, chNum, judul, warna, latarBelakang, gelap, children }: {
  id: string; chNum: string; judul: string; warna: string; latarBelakang: string; gelap?: boolean; children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden" style={{ background: gelap ? '#0a0a0a' : latarBelakang }}>
      {gelap ? <div className="halftone-yellow" /> : <div className="halftone-bg" />}
      <div className="max-w-6xl mx-auto relative z-10">
        <HeaderBab nomor={ambilNomor(chNum)} judul={judul} warna={gelap ? '#ffd700' : warna} gelap={gelap} />
        {children}
      </div>
    </section>
  )
}

function Grid2({ items }: { items: { icon: string; title: string; text: string; color: string; bg: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((p, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0.85, rotate: i % 2 === 0 ? -2 : 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.08, type: 'spring' }}
          viewport={{ once: false, amount: 0.1 }}
          whileHover={{ y: -5, rotate: i % 2 === 0 ? -1 : 1 }}
          className="overflow-hidden" style={{ border: `3px solid ${p.color}`, boxShadow: `4px 4px 0 ${p.color}`, background: p.bg }}>
          <div className="p-4 text-center">
            <div className="text-3xl mb-2">{p.icon}</div>
            <div className="font-comic text-xs mb-1" style={{ color: p.color }}>{p.title}</div>
            <div className="text-[11px] text-comic-black font-bold leading-tight">{p.text}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Ch46 — Motivasi Harian
function Ch46() {
  const quotes = [
    { q: '"Jika kamu tidak mencoba, kamu sudah gagal."', src: 'Rizki Habibi' },
    { q: '"Kode terbaik adalah yang tidak perlu dibaca berulang karena sudah jelas."', src: 'Programming Wisdom' },
    { q: '"Setiap expert adalah pemula yang tidak menyerah."', src: 'Unknown' },
    { q: '"The best time to start was yesterday. The next best time is now."', src: 'Proverb' },
    { q: '"Consistency beats talent every single time."', src: 'Coaching Wisdom' },
    { q: '"Don\'t wait for perfect conditions — start now, optimize later."', src: 'Startup Mindset' },
  ]
  return (
    <PanelBab id="ch46" chNum="CHAPTER 46" judul="MOTIVASI HARIAN" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">⚡ Motivasi adalah bahan bakar — isi setiap hari!</div>
          <div className="space-y-4">
            {quotes.map((q, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? -1 : 1 }}
                className="p-4 bg-white relative" style={{ border: `3px solid #f59e0b`, boxShadow: `4px 4px 0 #f59e0b` }}>
                <div className="font-comic text-4xl text-comic-black/10 leading-none select-none -mb-3">&ldquo;</div>
                <p className="font-bold text-sm text-comic-black italic leading-relaxed relative z-10">{q.q}</p>
                <div className="text-[11px] text-comic-black/50 mt-2 font-bold">— {q.src}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <Grid2 items={[
            { icon: '🌅', title: 'Pagi', text: 'Review target harian dan set intention yang jelas.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '⚡', title: 'Momentum', text: 'Mulai dengan task kecil untuk membangun momentum.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🎯', title: 'Fokus', text: 'Matikan notifikasi, masuk ke deep work mode.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '🌙', title: 'Malam', text: 'Review apa yang berhasil dan apa yang perlu diperbaiki.', color: '#8b5cf6', bg: '#f5f0ff' },
          ]} />
          <div className="comic-panel-dark p-5 mt-4">
            <div className="font-comic text-xl text-comic-yellow text-center mb-3">🔋 SUMBER MOTIVASI SAYA</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { src: 'Melihat proyek jalan', icon: '🚀' },
                { src: 'Feedback positif user', icon: '😊' },
                { src: 'Bug yang akhirnya fix', icon: '🐛' },
                { src: 'Belajar konsep baru', icon: '💡' },
                { src: 'Komunitas yang suport', icon: '🤝' },
                { src: 'Mimpi KVT terwujud', icon: '🌟' },
              ].map((s, i) => (
                <div key={s.src} className="flex items-center gap-2 p-2 bg-white/10 text-xs text-white font-bold">
                  <span>{s.icon}</span><span>{s.src}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch47 — Keberhasilan dari Kegagalan
function Ch47() {
  return (
    <PanelBab id="ch47" chNum="CHAPTER 47" judul="BELAJAR DARI KEGAGALAN" warna="#e63329" latarBelakang="#fef2f2">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">💪 Setiap kegagalan adalah bab baru yang mengajarkan lebih banyak!</div>
          <div className="space-y-4">
            {[
              { fail: 'Proyek yang tidak selesai', lesson: 'Pelajaran tentang scope management dan pentingnya deadline yang realistis.', icon: '📋', color: '#e63329' },
              { fail: 'Bug yang merusak produksi', lesson: 'Pelajaran tentang pentingnya testing dan staging environment.', icon: '🐛', color: '#1a5cff' },
              { fail: 'Komunikasi yang buruk dengan klien', lesson: 'Pelajaran tentang pentingnya requirement gathering yang detail di awal.', icon: '💬', color: '#f59e0b' },
              { fail: 'Estimasi waktu yang salah', lesson: 'Pelajaran tentang cara memberikan buffer waktu yang realistis.', icon: '⏱️', color: '#8b5cf6' },
              { fail: 'Kode yang tidak bisa dimaintain', lesson: 'Pelajaran tentang clean code dan dokumentasi dari awal.', icon: '🔧', color: '#22c55e' },
            ].map((f, i) => (
              <motion.div key={f.fail} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: false }}
                className="p-4 bg-white" style={{ border: `3px solid ${f.color}`, boxShadow: `4px 4px 0 ${f.color}` }}>
                <div className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-bold text-xs text-comic-black mb-1">❌ {f.fail}</div>
                    <div className="text-[11px] text-comic-black/70">✓ {f.lesson}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🧠 CARA SAYA MENGHADAPI KEGAGALAN</div>
            <div className="space-y-3">
              {[
                { step: '1. Akui', desc: 'Jangan denial — akui bahwa sesuatu tidak berjalan sesuai rencana.' },
                { step: '2. Analisis', desc: 'Cari tahu apa yang salah tanpa menyalahkan diri berlebihan.' },
                { step: '3. Dokumentasi', desc: 'Catat pelajaran yang didapat agar tidak mengulangi kesalahan yang sama.' },
                { step: '4. Restart', desc: 'Bangkit lebih cepat dari sebelumnya — dengan bekal pelajaran baru.' },
              ].map((s, i) => (
                <div key={s.step} className="flex gap-3 p-2 border-l-4" style={{ borderColor: '#e63329' }}>
                  <div className="font-comic text-sm" style={{ color: '#e63329' }}>{s.step}</div>
                  <div className="text-xs text-comic-black/70">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="comic-panel-dark p-4 text-center">
            <div className="font-comic text-xl text-comic-yellow">&ldquo;Fall seven times, stand up eight.&rdquo;</div>
            <div className="text-xs text-white/40 mt-2 font-bold">— Japanese Proverb</div>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch48 — Kolaborasi Global
function Ch48() {
  return (
    <PanelBab id="ch48" chNum="CHAPTER 48" judul="KOLABORASI GLOBAL — EKSPANSI PROYEK KE DUNIA" warna="#0891b2" latarBelakang="#ecfeff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🌐 Internet menghapus batas — dunia adalah canvas kita!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🗺️ MIMPI KOLABORASI GLOBAL</div>
            <p className="text-sm text-comic-black leading-relaxed mb-3">
              Teknologi yang saya bangun tidak harus berhenti di Indonesia. QRIS donasi bisa diadaptasi untuk sistem
              pembayaran global, Website Desa bisa menjadi template internasional untuk komunitas terpinggirkan di seluruh dunia.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { region: 'ASEAN', plan: 'Ekspansi Website Desa Digital ke desa-desa di Vietnam, Thailand, dan Filipina.', icon: '🌏', color: '#0891b2' },
              { region: 'GLOBAL', plan: 'Open source template website komunitas yang bisa digunakan oleh NGO dunia.', icon: '🌍', color: '#1a5cff' },
              { region: 'UN SDGs', plan: 'Berkontribusi pada Sustainable Development Goals melalui teknologi inklusif.', icon: '🎯', color: '#22c55e' },
            ].map((r, i) => (
              <motion.div key={r.region} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: false }}
                className="p-4 bg-white" style={{ border: `3px solid ${r.color}`, boxShadow: `4px 4px 0 ${r.color}` }}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{r.icon}</span>
                  <div>
                    <div className="font-comic text-sm" style={{ color: r.color }}>{r.region}</div>
                    <div className="text-xs text-comic-black/70 mt-0.5">{r.plan}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <Grid2 items={[
            { icon: '🌐', title: 'Open Source', text: 'Kode yang dibagikan secara global bisa digunakan ribuan orang.', color: '#0891b2', bg: '#ecfeff' },
            { icon: '🤝', title: 'Cross-Culture', text: 'Belajar dari cara orang berbeda budaya memecahkan masalah yang sama.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '📡', title: 'Remote Work', text: 'Bekerja dengan tim dari seluruh dunia tanpa batasan geografis.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '💱', title: 'Global Impact', text: 'Satu solusi lokal bisa menjadi inspirasi solusi global.', color: '#f59e0b', bg: '#fffbeb' },
          ]} />
          <div className="comic-panel-yellow p-4 mt-4 text-center">
            <div className="font-comic text-base text-comic-black">🎯 BAHASA YANG SAYA PELAJARI</div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {['🇮🇩 Indonesia', '🇬🇧 English (Aktif)', '🇯🇵 Japan (Dasar)'].map(l => (
                <span key={l} className="font-bold text-xs px-3 py-1 bg-white text-comic-black" style={{ border: '2px solid #0891b2' }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch49 — Masa Depan Teknologi
function Ch49() {
  return (
    <PanelBab id="ch49" chNum="CHAPTER 49" judul="MASA DEPAN TEKNOLOGI" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🔮 Hari ini sci-fi, besok kenyataan!</div>
          <div className="space-y-3">
            {[
              { tech: 'Web3 & Blockchain', outlook: 'Transparansi dan desentralisasi sistem digital — relevan untuk QRIS donasi yang anti-fraud.', icon: '⛓️', color: '#8b5cf6' },
              { tech: 'Edge Computing', outlook: 'Komputasi di perangkat akhir — kunci untuk IoT di daerah dengan internet terbatas.', icon: '📡', color: '#1a5cff' },
              { tech: 'Augmented Reality', outlook: 'AR bisa mengubah cara orang berinteraksi dengan peta digital dan website desa.', icon: '🥽', color: '#22c55e' },
              { tech: 'Quantum Computing', outlook: 'Revolusi keamanan siber dan optimasi algoritma yang akan mengubah segalanya.', icon: '⚛️', color: '#f59e0b' },
              { tech: 'AI Agent', outlook: 'Agen AI otonom yang bisa menjalankan task kompleks tanpa intervensi manusia.', icon: '🤖', color: '#e63329' },
            ].map((t, i) => (
              <motion.div key={t.tech} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: false }}
                className="p-4 bg-white" style={{ border: `3px solid ${t.color}`, boxShadow: `4px 4px 0 ${t.color}` }}>
                <div className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{t.icon}</span>
                  <div>
                    <div className="font-bold text-sm text-comic-black">{t.tech}</div>
                    <div className="text-xs text-comic-black/60 mt-0.5">{t.outlook}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="comic-panel-dark p-6">
            <div className="font-comic text-xl text-white mb-4">🚀 TECH YANG INGIN DIPELAJARI BERIKUTNYA</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { tech: 'Rust', reason: 'Performance & Safety', icon: '🦀', color: '#f59e0b' },
                { tech: 'Go (Golang)', reason: 'Microservices', icon: '🐹', color: '#1a5cff' },
                { tech: 'React Native', reason: 'Mobile Dev', icon: '📱', color: '#22c55e' },
                { tech: 'Python ML', reason: 'AI/ML', icon: '🐍', color: '#3776ab' },
                { tech: 'GraphQL', reason: 'API Modern', icon: '🔷', color: '#e535ab' },
                { tech: 'Docker/K8s', reason: 'DevOps', icon: '🐳', color: '#0db7ed' },
              ].map((t, i) => (
                <div key={t.tech} className="p-3 bg-white/10 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{t.icon}</span>
                    <span className="font-comic text-sm" style={{ color: t.color }}>{t.tech}</span>
                  </div>
                  <div className="text-[10px] text-white/50">{t.reason}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch50 — Milestone 50
function Ch50() {
  return (
    <PanelBab id="ch50" chNum="CHAPTER 50 — MILESTONE" judul="SETENGAH JALAN — REFLEKSI" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -3 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.6, type: 'spring' }} viewport={{ once: false }}>
            <div className="p-8 text-center" style={{ border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd700', background: 'white' }}>
              <div className="font-comic text-6xl text-comic-blue mb-4">50</div>
              <div className="font-comic text-2xl text-comic-black mb-4">CHAPTER DILALUI</div>
              <p className="text-sm text-comic-black/70 leading-relaxed mb-4">
                Dari Chapter 00 hingga sini, ini bukan sekadar kumpulan halaman — ini adalah cerita nyata tentang
                seorang developer muda dari Jember yang bermimpi membangun ekosistem digital Indonesia.
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { num: '75+', label: 'Sertifikat', color: '#1a5cff' },
                  { num: '5+', label: 'Proyek', color: '#22c55e' },
                  { num: '3+', label: 'Tahun', color: '#f59e0b' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="font-comic text-2xl" style={{ color: s.color }}>{s.num}</div>
                    <div className="text-xs font-bold text-comic-black/60">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <div className="space-y-3">
            {[
              { reflection: 'Perjalanan ini baru dimulai', desc: '50 chapter hanya pembuka — cerita terbaik belum ditulis.', icon: '🌅' },
              { reflection: 'Setiap bab membentuk karakter', desc: 'Baik senang maupun susah, semua membentuk siapa aku sekarang.', icon: '💪' },
              { reflection: 'Konsistensi adalah segalanya', desc: 'Bukan bakat, tapi kedisiplinan harian yang membawa sampai sini.', icon: '🔄' },
              { reflection: 'Terima kasih kepada semua', desc: 'Keluarga, dosen, teman, dan komunitas yang selalu mendukung.', icon: '❤️' },
              { reflection: 'Next arc dimulai sekarang', desc: 'Dengan semua yang sudah dipelajari, chapter berikutnya akan lebih epik!', icon: '🚀' },
            ].map((r, i) => (
              <motion.div key={r.reflection} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: false }}
                className="flex gap-3 p-4 bg-white" style={{ border: '3px solid #ffd700', boxShadow: '4px 4px 0 #ffd700' }}>
                <span className="text-2xl flex-shrink-0">{r.icon}</span>
                <div>
                  <div className="font-comic text-base text-comic-blue">{r.reflection}</div>
                  <div className="text-xs text-comic-black/60 mt-0.5">{r.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch51 — Bersyukur
function Ch51() {
  return (
    <PanelBab id="ch51" chNum="CHAPTER 51" judul="RASA SYUKUR — TERIMA KASIH KEPADA MEREKA" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🙏 Gratitude is the foundation of abundance!</div>
          <div className="space-y-3">
            {[
              { thanks: 'Orang Tua & Keluarga', desc: 'Yang mendukung perjalanan pendidikan dan mimpi-mimpi besar tanpa syarat.', icon: '❤️', color: '#e63329' },
              { thanks: 'Dosen & Institusi', desc: 'Institut Teknologi dan Sains Mandala yang memberi ruang untuk berkembang.', icon: '🎓', color: '#8b5cf6' },
              { thanks: 'Teman & Rekan', desc: 'Mereka yang ada di sisi baik maupun saat sulit — support sistem terbaik.', icon: '🤝', color: '#1a5cff' },
              { thanks: 'Komunitas Digital', desc: 'Developer, kreator, dan inovator yang menginspirasi setiap harinya.', icon: '🌐', color: '#0891b2' },
              { thanks: 'Pengguna & Klien', desc: 'Mereka yang mempercayakan proyek dan memberikan feedback nyata.', icon: '⭐', color: '#f59e0b' },
              { thanks: 'Tuhan YME', desc: 'Atas segala karunia kesehatan, kemampuan, dan kesempatan untuk berkarya.', icon: '🌟', color: '#22c55e' },
            ].map((t, i) => (
              <motion.div key={t.thanks} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: false }}
                className="flex gap-3 p-3 bg-white" style={{ border: `2px solid ${t.color}`, boxShadow: `3px 3px 0 ${t.color}` }}>
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <div>
                  <div className="font-bold text-sm text-comic-black">{t.thanks}</div>
                  <div className="text-xs text-comic-black/60 mt-0.5">{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="comic-panel-dark p-6 mb-4">
            <div className="font-comic text-xl text-comic-yellow text-center mb-4">💌 PESAN UNTUK YANG MEMBACA</div>
            <div className="space-y-3">
              {[
                'Terima kasih sudah meluangkan waktu membaca cerita ini.',
                'Setiap baris yang kamu baca adalah kepercayaan yang saya hargai.',
                'Semoga perjalanan saya bisa menginspirasi perjalananmu sendiri.',
                'Kita semua punya cerita unik yang layak untuk diceritakan.',
                'Dan yang terpenting — mulailah menulis chapter-mu sendiri hari ini.',
              ].map((msg, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-white font-bold">
                  <span className="text-comic-yellow flex-shrink-0">{i + 1}.</span>{msg}
                </div>
              ))}
            </div>
          </div>
          <div className="comic-panel-yellow p-5 text-center">
            <div className="font-comic text-2xl text-comic-black mb-2">🎉 TERIMA KASIH!</div>
            <p className="text-sm text-comic-black/70">Dari seseorang yang masih terus belajar, tumbuh, dan bermimpi.</p>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch52 — UMKM Digital
function Ch52() {
  return (
    <PanelBab id="ch52" chNum="CHAPTER 52" judul="UMKM GOES DIGITAL" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🏪 UMKM digital = UMKM yang bertahan!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">📊 REALITA UMKM INDONESIA</div>
            <div className="space-y-2">
              {[
                { fact: '65 Juta', desc: 'UMKM di Indonesia', color: '#f59e0b' },
                { fact: '70%', desc: 'Belum punya website', color: '#e63329' },
                { fact: '45%', desc: 'Belum terima pembayaran digital', color: '#1a5cff' },
                { fact: '3x', desc: 'Pertumbuhan UMKM dengan kehadiran digital', color: '#22c55e' },
              ].map((f, i) => (
                <div key={f.fact} className="flex items-center gap-3 p-2 border-b border-comic-black/10">
                  <div className="font-comic text-xl" style={{ color: f.color }}>{f.fact}</div>
                  <div className="text-xs font-bold text-comic-black/70">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-sm text-comic-black mb-2">🎯 SOLUSI YANG SAYA TAWARKAN</div>
            <div className="space-y-1">
              {['Website toko online sederhana + hemat', 'Integrasi QRIS untuk pembayaran digital', 'Google My Business setup & optimasi', 'Social media template & konten strategi', 'Pelatihan penggunaan tools digital'].map((s, i) => (
                <div key={i} className="text-xs font-bold text-comic-black flex items-center gap-2">
                  <span className="text-comic-blue">→</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Grid2 items={[
            { icon: '🛒', title: 'Toko Online', text: 'Website toko yang bisa menerima order 24 jam tanpa perlu toko fisik.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '💳', title: 'Digital Payment', text: 'QRIS dan berbagai metode pembayaran dalam satu platform.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '📊', title: 'Analytics', text: 'Data penjualan untuk keputusan bisnis yang lebih baik.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '📣', title: 'Marketing', text: 'Tools untuk promosi digital yang efektif dan terukur.', color: '#e63329', bg: '#fef2f2' },
            { icon: '📦', title: 'Inventory', text: 'Manajemen stok digital agar tidak ada kehabisan barang.', color: '#8b5cf6', bg: '#f5f0ff' },
            { icon: '🤝', title: 'Support', text: 'Training dan dukungan teknis untuk owner UMKM.', color: '#0891b2', bg: '#ecfeff' },
            { icon: '🔍', title: 'SEO Local', text: 'Optimasi pencarian lokal agar mudah ditemukan warga sekitar.', color: '#ec4899', bg: '#fdf2f8' },
            { icon: '📱', title: 'Mobile App', text: 'Rencana aplikasi mobile untuk mempermudah management.', color: '#f59e0b', bg: '#fffbeb' },
          ]} />
        </div>
      </div>
    </PanelBab>
  )
}

// Ch53 — Smart City
function Ch53() {
  return (
    <PanelBab id="ch53" chNum="CHAPTER 53" judul="SMART CITY — KONTRIBUSI NYATA UNTUK JEMBER" warna="#0891b2" latarBelakang="#ecfeff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🏙️ Kota yang cerdas dimulai dari warga yang sadar teknologi!</div>
          <div className="space-y-3">
            {[
              { aspect: 'Smart Traffic', desc: 'Sistem manajemen lalu lintas berbasis sensor dan AI untuk mengurangi kemacetan.', icon: '🚗', color: '#0891b2' },
              { aspect: 'Smart Waste', desc: 'Sensor di tempat sampah yang memberitahu truk sampah kapan perlu diangkut.', icon: '🗑️', color: '#22c55e' },
              { aspect: 'Smart Energy', desc: 'Grid listrik cerdas yang mengoptimalkan distribusi energi terbarukan.', icon: '⚡', color: '#f59e0b' },
              { aspect: 'E-Government', desc: 'Semua layanan pemerintah bisa diakses online tanpa antrian panjang.', icon: '🏛️', color: '#1a5cff' },
              { aspect: 'Smart Health', desc: 'Jaringan klinik dan rumah sakit yang terhubung untuk data kesehatan terpadu.', icon: '🏥', color: '#e63329' },
            ].map((s, i) => (
              <motion.div key={s.aspect} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: false }}
                className="flex gap-3 p-3 bg-white" style={{ border: `2px solid ${s.color}`, boxShadow: `3px 3px 0 ${s.color}` }}>
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <div className="font-bold text-sm text-comic-black">{s.aspect}</div>
                  <div className="text-xs text-comic-black/60 mt-0.5">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="comic-panel-dark p-6 mb-4">
            <div className="font-comic text-xl text-white mb-4">🌆 KONTRIBUSI NYATA</div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Dengan keahlian web development dan IoT, saya dapat berkontribusi pada inisiatif Smart City melalui
              dashboard monitoring, sistem pelaporan warga, dan integrasi sensor kota dengan platform digital.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { contrib: 'Dashboard Monitoring', icon: '📊' },
                { contrib: 'Citizen Reporting', icon: '📢' },
                { contrib: 'IoT Integration', icon: '📡' },
                { contrib: 'Open Data Portal', icon: '🔓' },
              ].map((c, i) => (
                <div key={c.contrib} className="flex items-center gap-2 p-2 bg-white/10 border border-white/20">
                  <span className="text-xl">{c.icon}</span>
                  <span className="text-xs text-white font-bold">{c.contrib}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="comic-panel-yellow p-4 text-center">
            <div className="font-comic text-base text-comic-black">🎯 JEMBER SMART CITY</div>
            <p className="text-xs text-comic-black/70 mt-1">Kota kelahiran yang ingin saya bantu transformasi digitalnya sebagai langkah awal.</p>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch54 — Keluarga & Inspirasi
function Ch54() {
  return (
    <PanelBab id="ch54" chNum="CHAPTER 54" judul="KELUARGA — FONDASI SEGALANYA" warna="#e63329" latarBelakang="#fef2f2">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">❤️ Di balik setiap developer hebat, ada keluarga yang mendukung!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🏠 INSPIRASI TERBESAR</div>
            <p className="text-sm text-comic-black leading-relaxed mb-3">
              Keluarga bukan hanya tempat pulang — mereka adalah alasan mengapa saya bangun setiap pagi dengan
              semangat. Setiap baris kode yang saya tulis adalah investasi untuk masa depan keluarga.
            </p>
            <div className="space-y-2">
              {[
                'Orang tua yang selalu percaya pada mimpi-mimpi besar',
                'Keluarga yang tidak pernah berhenti mendoakan',
                'Lingkungan rumah yang mendukung belajar mandiri',
                'Nilai-nilai keluarga yang menjadi kompas moral',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-bold text-comic-black">
                  <span className="text-comic-blue flex-shrink-0">❤️</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-base text-comic-black text-center mb-2">🎯 MISI UNTUK KELUARGA</div>
            <p className="text-sm text-comic-black/70 text-center">
              Setiap pencapaian adalah persembahan untuk mereka yang telah merelakan banyak hal demi perjalanan ini.
            </p>
          </div>
        </div>
        <div>
          <Grid2 items={[
            { icon: '🏠', title: 'Rumah Pertama', text: 'Mimpi pertama: membangun rumah impian untuk orang tua.', color: '#e63329', bg: '#fef2f2' },
            { icon: '💰', title: 'Mandiri Finansial', text: 'Menciptakan pendapatan dari teknologi yang dibangun sendiri.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '🎓', title: 'Lanjut S2', text: 'Rencana melanjutkan pendidikan setelah bekerja dan stabil.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🌟', title: 'Jadi Teladan', text: 'Menjadi contoh bahwa anak dari kota kecil bisa berdampak besar.', color: '#f59e0b', bg: '#fffbeb' },
          ]} />
          <div className="comic-panel-dark p-5 mt-4 text-center">
            <div className="text-4xl mb-3">❤️</div>
            <div className="font-comic text-xl text-white mb-2">UNTUK KELUARGAKU</div>
            <p className="text-sm text-white/70 italic">&ldquo;Semua ini untuk kalian — yang percaya bahkan sebelum saya percaya pada diri sendiri.&rdquo;</p>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

// Ch55 — Refleksi & Identitas
function Ch55() {
  return (
    <PanelBab id="ch55" chNum="CHAPTER 55" judul="IDENTITAS — SIAPA RIZKI HABIBI?" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🪞 Mengenal diri sendiri adalah perjalanan seumur hidup!</div>
          <div className="space-y-3">
            {[
              { trait: 'Asal', value: 'Jember, Jawa Timur, Indonesia', icon: '📍', color: '#8b5cf6' },
              { trait: 'Kampus', value: 'Institut Teknologi dan Sains Mandala', icon: '🎓', color: '#1a5cff' },
              { trait: 'Prodi', value: 'Sistem dan Teknologi Informasi', icon: '💻', color: '#22c55e' },
              { trait: 'Passion', value: 'Web Dev, IoT, Digital Innovation', icon: '❤️', color: '#e63329' },
              { trait: 'Visi', value: 'Membangun ekosistem digital inklusif Indonesia', icon: '🌟', color: '#f59e0b' },
              { trait: 'MBTI', value: 'INTJ — The Architect', icon: '🧠', color: '#0891b2' },
              { trait: 'Motto', value: '"Code with purpose, build with heart."', icon: '💡', color: '#8b5cf6' },
            ].map((t, i) => (
              <motion.div key={t.trait} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: false }}
                className="flex items-center gap-3 p-3 bg-white" style={{ border: `2px solid ${t.color}`, boxShadow: `3px 3px 0 ${t.color}` }}>
                <span className="text-xl flex-shrink-0">{t.icon}</span>
                <div className="flex-1 flex items-center justify-between gap-2">
                  <span className="font-bold text-xs text-comic-black/60 flex-shrink-0">{t.trait}:</span>
                  <span className="font-bold text-xs text-comic-black text-right">{t.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🌟 APA YANG MEMBUAT SAYA UNIK</div>
            <div className="space-y-2">
              {[
                'Developer yang bisa merakit hardware dari bahan bekas',
                'Coder yang peduli dampak sosial dari setiap baris kode',
                'Mahasiswa yang sudah punya visi membangun institusi pendidikan',
                'Inovator yang tidak menunggu resources sempurna untuk memulai',
                'Kreator yang menggabungkan estetika komik dengan profesionalisme',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-bold text-comic-black py-1 border-b border-comic-black/10">
                  <span className="text-comic-blue flex-shrink-0">⭐</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="comic-panel-dark p-5 text-center">
            <div className="font-comic text-2xl text-comic-yellow mb-2">🎭 THE FINAL IDENTITY</div>
            <p className="font-bold text-white leading-relaxed">
              Saya adalah <span className="text-comic-yellow">Rizki Habibi</span> — web developer, innovator,
              calon founder KVT.kom, dan seseorang yang percaya bahwa{' '}
              <span className="text-comic-yellow">teknologi + empati = perubahan nyata</span>.
            </p>
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup4() {
  return (
    <>
      <div className="comic-divider" /><Ch46 />
      <div className="comic-divider" /><Ch47 />
      <div className="comic-divider" /><Ch48 />
      <div className="comic-divider" /><Ch49 />
      <div className="comic-divider" /><Ch50 />
      <div className="comic-divider" /><Ch51 />
      <div className="comic-divider" /><Ch52 />
      <div className="comic-divider" /><Ch53 />
      <div className="comic-divider" /><Ch54 />
      <div className="comic-divider" /><Ch55 />
    </>
  )
}
