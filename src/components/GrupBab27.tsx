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

/* Ch271 — DUNIA OPEN SOURCE */
function Ch271() {
  const langkah = [
    { no: 1, langkah: 'Temukan repo yang kamu gunakan sendiri', detail: 'Mulai dari tools yang kamu pakai sehari-hari. Passion untuk produk = motivasi untuk kontribusi.', icon: '🔍' },
    { no: 2, langkah: 'Baca CONTRIBUTING.md dan kode yang ada', detail: 'Pahami convention, stack, dan cara kerja project sebelum sentuh satu baris pun.', icon: '📖' },
    { no: 3, langkah: 'Mulai dari issue berlabel "good first issue"', detail: 'Label ini sengaja dibuat untuk newcomer. Jangan langsung ambil feature besar di PR pertama.', icon: '🏷️' },
    { no: 4, langkah: 'Fork, buat branch, dan kerjakan perubahanmu', detail: 'Nama branch yang deskriptif: `fix/login-redirect-bug`, bukan `my-changes`.', icon: '🍴' },
    { no: 5, langkah: 'Tulis PR description yang jelas dan detail', detail: 'Jelaskan masalah yang diselesaikan, bagaimana solusinya, dan screenshot jika ada perubahan UI.', icon: '📝' },
    { no: 6, langkah: 'Respond review dengan cepat dan terbuka', detail: 'Maintainer volunteer. Hargai waktu mereka. Feedback bukan serangan pribadi — ini adalah mentoring gratis.', icon: '💬' },
    { no: 7, langkah: 'Kontribusi non-kode juga sama berharganya', detail: 'Perbaiki dokumentasi, translate, report bug dengan detail, atau jawab pertanyaan di Discussions.', icon: '🤝' },
  ]
  return (
    <PanelBab id="ch271" num="271" judul="OPEN SOURCE — CARA TERBAIK BELAJAR DAN BERKONTRIBUSI" warna="#22c55e" bg="#f0fdf4">
      <div className="speech-bubble inline-block text-sm mb-6">
        🔓 Kontribusi open source adalah portofolio yang tidak bisa dipalsukan — kodenya ada, reviewnya ada, dan siapapun bisa lihat kualitas kerjamu!
      </div>
      <div className="space-y-3 mb-8">
        {langkah.map((l, i) => (
          <motion.div key={l.no}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ x: 4 }}
            className="flex gap-3 p-3"
            style={{ border: `2px solid #22c55e`, boxShadow: `3px 3px 0 #22c55e30`, background: 'white' }}>
            <div className="flex-shrink-0 flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-full flex items-center justify-center font-comic text-sm text-white" style={{ background: '#22c55e' }}>{l.no}</div>
              <span className="text-lg">{l.icon}</span>
            </div>
            <div>
              <div className="font-comic text-xs text-[#22c55e] mb-0.5">{l.langkah}</div>
              <p className="text-[9px] font-bold text-[#0a0a0a]/60 leading-relaxed">{l.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel-dark p-5">
        <div className="font-comic text-xl text-white mb-3">🌟 OPEN SOURCE YANG PERNAH DISENTUH</div>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { repo: 'Laravel ecosystem', aksi: 'Membaca kode core, membuat package', icon: '🐘' },
            { repo: 'Tailwind CSS', aksi: 'Config extension dan plugin custom', icon: '🎨' },
            { repo: 'Next.js examples', aksi: 'Adaptasi dan kontribusi ke komunitas', icon: '⚡' },
            { repo: 'Community packages', aksi: 'Publish package lokal di NPM/Packagist', icon: '📦' },
          ].map((r, i) => (
            <div key={r.repo} className="flex gap-2 items-center">
              <span className="text-xl">{r.icon}</span>
              <div>
                <div className="font-comic text-xs text-yellow-400">{r.repo}</div>
                <div className="text-[9px] text-white/50 font-bold">{r.aksi}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* Ch272 — KOMUNITAS DEVELOPER INDONESIA */
function Ch272() {
  const komunitas = [
    { nama: 'PHP Indonesia', platform: 'Facebook Group', anggota: '45K+', topik: 'PHP, Laravel, web backend', warna: '#8892BF', icon: '🐘' },
    { nama: 'React Indonesia', platform: 'Telegram + GitHub', anggota: '12K+', topik: 'React, Next.js, ekosistem JS', warna: '#61DAFB', icon: '⚛️' },
    { nama: 'Programmer Zaman Now', platform: 'YouTube + Discord', anggota: '500K+', topik: 'Semua stack, tutorial mendalam', warna: '#e63329', icon: '📺' },
    { nama: 'WPU Channel', platform: 'YouTube', anggota: '400K+', topik: 'Web dev, PHP, framework', warna: '#22c55e', icon: '🎓' },
    { nama: 'Developer Kece', platform: 'Telegram', anggota: '20K+', topik: 'Tips, tools, job sharing', warna: '#1a5cff', icon: '💎' },
    { nama: 'GDG Indonesia', platform: 'Meetup + Online', anggota: 'Regional', topik: 'Google tech, Android, Cloud', warna: '#f59e0b', icon: '🔵' },
    { nama: 'PHPID Online', platform: 'Telegram', anggota: '10K+', topik: 'PHP, diskusi teknis, lowongan', warna: '#8b5cf6', icon: '💬' },
    { nama: 'Dicoding Community', platform: 'Forum + Discord', anggota: '600K+', topik: 'Learning path, certification', warna: '#0891b2', icon: '🏫' },
  ]
  return (
    <PanelBab id="ch272" num="272" judul="KOMUNITAS DEVELOPER INDONESIA — PETA EKOSISTEM" warna="#1a5cff" bg="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🌐 Ekosistem komunitas developer Indonesia semakin kuat. Bergabung ke minimal satu komunitas aktif adalah game-changer untuk karir!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {komunitas.map((k, i) => (
          <motion.div key={k.nama}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-3 text-center"
            style={{ border: `3px solid ${k.warna}`, boxShadow: `3px 3px 0 ${k.warna}`, background: 'white' }}>
            <motion.div className="text-3xl mb-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}>
              {k.icon}
            </motion.div>
            <div className="font-comic text-xs mb-0.5" style={{ color: k.warna }}>{k.nama}</div>
            <div className="font-bold text-[8px] text-[#0a0a0a]/40 mb-1">{k.platform}</div>
            <div className="font-bold text-[8px] text-white px-1.5 py-0.5 inline-block" style={{ background: k.warna }}>{k.anggota}</div>
            <div className="text-[8px] text-[#0a0a0a]/50 font-bold mt-1">{k.topik}</div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel p-5">
        <div className="font-comic text-lg text-[#0a0a0a] mb-3">🚀 CARA AKTIF DI KOMUNITAS</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { cara: 'Jawab pertanyaan, bukan hanya tanya', icon: '💬', warna: '#22c55e' },
            { cara: 'Share learning secara reguler', icon: '📝', warna: '#1a5cff' },
            { cara: 'Hadir di offline meetup minimal sekali', icon: '🤝', warna: '#8b5cf6' },
            { cara: 'Bantu organize event atau webinar', icon: '📅', warna: '#f59e0b' },
          ].map((c, i) => (
            <motion.div key={c.cara}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className="flex gap-2 items-center p-2"
              style={{ background: `${c.warna}10`, border: `1px solid ${c.warna}30` }}>
              <span className="text-xl">{c.icon}</span>
              <span className="text-xs font-bold text-[#0a0a0a]/70">{c.cara}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* Ch273 — MEMBANGUN NETWORKING YANG AUTENTIK */
function Ch273() {
  return (
    <PanelBab id="ch273" num="273" judul="NETWORKING AUTENTIK — BUKAN SEKEDAR COLLECT KONTAK" warna="#8b5cf6" bg="#f5f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">
        🤝 Networking terbaik bukan dari kartu nama yang dibagi-bagi — tapi dari nilai yang kamu berikan kepada orang lain terlebih dahulu!
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="font-comic text-lg text-[#8b5cf6] mb-4">❌ NETWORKING YANG SALAH</div>
          <div className="space-y-3">
            {[
              'DM orang baru langsung minta referral kerja',
              'Add koneksi LinkedIn tanpa pesan apapun',
              'Datang ke event hanya untuk ambil swag dan pulang',
              'Hanya aktif di komunitas saat butuh sesuatu',
              'Posting pencapaian tanpa pernah bantu orang lain',
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: false }}
                className="flex gap-2 items-start p-2"
                style={{ background: '#fef2f2', border: '1px solid #e6332930' }}>
                <span className="text-red-400 flex-shrink-0">✗</span>
                <p className="text-xs font-bold text-[#0a0a0a]/70">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="font-comic text-lg text-[#22c55e] mb-4">✅ NETWORKING YANG BENAR</div>
          <div className="space-y-3">
            {[
              'Bantu orang lain dulu — jawab pertanyaan, share resources',
              'Koneksi LinkedIn dengan pesan personal kenapa ingin terhubung',
              'Follow up setelah event dengan sesuatu yang spesifik dan bermakna',
              'Konsisten memberikan nilai — artikel, tutorial, tools gratis',
              'Celebrate pencapaian orang lain dengan tulus tanpa mengharap balasan',
            ].map((b, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: false }}
                className="flex gap-2 items-start p-2"
                style={{ background: '#f0fdf4', border: '1px solid #22c55e30' }}>
                <span className="text-green-500 flex-shrink-0">✓</span>
                <p className="text-xs font-bold text-[#0a0a0a]/70">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

/* Ch274 — MENULIS SEBAGAI DEVELOPER */
function Ch274() {
  const format = [
    { format: 'Blog Post Tutorial', platform: 'Dev.to / Medium / Personal Blog', manfaat: 'Memperdalam pemahaman sendiri, visible di Google, dapat followers organik', icon: '📝', warna: '#1a5cff' },
    { format: 'Thread Twitter/X', platform: 'Twitter/X', manfaat: 'Quick reach, mudah viral, build audience cepat untuk insight singkat', icon: '🐦', warna: '#1da1f2' },
    { format: 'Newsletter Mingguan', platform: 'Substack / Beehiiv', manfaat: 'Direct access ke inbox subscriber, loyal audience, monetizable', icon: '📧', warna: '#f59e0b' },
    { format: 'Video Tutorial', platform: 'YouTube / TikTok', manfaat: 'Reach paling luas, demonstrasi coding lebih mudah dipahami', icon: '📺', warna: '#e63329' },
    { format: 'GitHub README', platform: 'GitHub', manfaat: 'Portfolio langsung, menunjukkan technical writing skill ke calon employer', icon: '📄', warna: '#333' },
    { format: 'LinkedIn Article', platform: 'LinkedIn', manfaat: 'Professional audience, boost credibility, potential recruiter visibility', icon: '💼', warna: '#0077b5' },
  ]
  return (
    <PanelBab id="ch274" num="274" judul="MENULIS SEBAGAI DEVELOPER — AMPLIFIER KARIR" warna="#f59e0b" bg="#fffbeb">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ✍️ Developer yang bisa menulis dengan baik tidak hanya punya skill coding — mereka punya leverage. Tulisan bekerja saat kamu tidur!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {format.map((f, i) => (
          <motion.div key={f.format}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -4 }}
            style={{ border: `3px solid ${f.warna}`, boxShadow: `4px 4px 0 ${f.warna}`, background: 'white', overflow: 'hidden' }}>
            <div className="px-4 py-2" style={{ background: f.warna }}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{f.icon}</span>
                <span className="font-comic text-xs text-white">{f.format}</span>
              </div>
            </div>
            <div className="p-3">
              <div className="font-bold text-[9px] text-[#0a0a0a]/40 mb-1">{f.platform}</div>
              <p className="text-[9px] font-bold text-[#0a0a0a]/65 leading-relaxed">{f.manfaat}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="comic-panel p-5">
        <div className="font-comic text-lg text-[#0a0a0a] mb-2">💡 FORMULA ARTIKEL DEVELOPER YANG BAGUS</div>
        <div className="space-y-2">
          {[
            { bagian: 'Hook (1 paragraf)', desc: 'Masalah atau momen relatable yang langsung dirasakan pembaca' },
            { bagian: 'Konteks (2-3 paragraf)', desc: 'Mengapa masalah ini penting dan apa yang sudah dicoba sebelumnya' },
            { bagian: 'Solusi (inti artikel)', desc: 'Step-by-step dengan kode, screenshot, atau diagram yang jelas' },
            { bagian: 'Pitfall & Gotchas', desc: 'Hal-hal yang bisa salah — ini yang membuat artikel kamu unik dan jujur' },
            { bagian: 'Takeaway (1 paragraf)', desc: 'Satu kalimat yang bisa diambil pembaca setelah selesai baca' },
          ].map((b, i) => (
            <div key={b.bagian} className="flex gap-3 items-start">
              <span className="font-comic text-xs text-[#f59e0b] flex-shrink-0">0{i + 1}</span>
              <div>
                <span className="font-bold text-xs text-[#0a0a0a]">{b.bagian}</span>
                <span className="text-[9px] text-[#0a0a0a]/55 ml-2">{b.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* Ch275-280: Timeline komunitas */
function Ch275to280() {
  const milestone = [
    { tahun: '2021', event: 'Bergabung komunitas pertama', dampak: 'Menemukan bahwa tidak sendirian dalam struggle belajar coding', icon: '🌱', warna: '#22c55e' },
    { tahun: '2022', event: 'Pertama kali menjawab pertanyaan orang lain', dampak: 'Sadar bahwa mengajari orang lain adalah cara belajar terbaik untuk diri sendiri', icon: '💬', warna: '#1a5cff' },
    { tahun: '2023', event: 'Presentasi pertama di meetup lokal', dampak: 'Overcome public speaking anxiety. Feedback positif dari komunitas membuka peluang baru', icon: '🎤', warna: '#8b5cf6' },
    { tahun: '2024', event: 'Mulai mentoring developer junior', dampak: 'Melihat progress orang lain karena bantuanmu = salah satu kepuasan terbesar dalam karir', icon: '🧙', warna: '#f59e0b' },
    { tahun: '2025', event: 'Publish artikel yang viral di komunitas', dampak: 'Ratusan developer membaca dan mengimplementasikan sesuatu yang kamu tulis. Dampak berlipat!', icon: '📖', warna: '#e63329' },
    { tahun: '2026', event: 'Build komunitas sendiri via KVT.kom', dampak: 'Dari yang belajar dari komunitas, kini membangun komunitas sendiri untuk orang lain', icon: '🚀', warna: '#0891b2' },
  ]
  return (
    <PanelBab id="ch275" num="275-280" judul="PERJALANAN DI KOMUNITAS — DARI LURKER KE BUILDER" warna="#0891b2" bg="#ecfeff" gelap>
      <div className="speech-bubble inline-block text-sm mb-8 text-[#0a0a0a]">
        📅 Setiap developer punya perjalanannya sendiri di komunitas. Ini perjalanan dari lurker yang hanya baca, menjadi builder yang menciptakan komunitas baru!
      </div>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-1"
          style={{ background: 'linear-gradient(to bottom, #22c55e, #1a5cff, #8b5cf6, #f59e0b, #e63329, #0891b2)' }} />
        <div className="space-y-8">
          {milestone.map((m, i) => (
            <motion.div key={m.tahun}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 120 }}
              viewport={{ once: false }}
              className="flex gap-5 pl-14 relative">
              <motion.div
                className="absolute left-3 top-3 w-8 h-8 flex items-center justify-center text-lg"
                style={{ background: m.warna, border: '3px solid #0a0a0a', zIndex: 2 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}>
                {m.icon}
              </motion.div>
              <div className="flex-1 p-4"
                style={{ border: `3px solid ${m.warna}`, boxShadow: `5px 5px 0 ${m.warna}`, background: '#111' }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-[10px] text-white px-2 py-0.5" style={{ background: m.warna }}>{m.tahun}</span>
                  <span className="font-comic text-sm" style={{ color: m.warna }}>{m.event}</span>
                </div>
                <p className="text-xs text-white/65 font-bold leading-relaxed">{m.dampak}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

export default function ChaptersGroup27() {
  return (
    <>
      <div className="comic-divider" />
      <Ch271 />
      <div className="comic-divider" />
      <Ch272 />
      <div className="comic-divider" />
      <Ch273 />
      <div className="comic-divider" />
      <Ch274 />
      <div className="comic-divider" />
      <Ch275to280 />
    </>
  )
}
