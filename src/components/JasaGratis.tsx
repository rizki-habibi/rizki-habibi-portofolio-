'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHeart, FiGlobe, FiUsers, FiShare2, FiMessageCircle, FiCheck, FiChevronDown } from 'react-icons/fi'
import { SiWhatsapp, SiInstagram, SiDiscord, SiTelegram } from 'react-icons/si'

// ── Konten multi-bahasa ────────────────────────────────────
const teks = {
  id: {
    badgeLabel: 'GRATIS — SYARAT: BAGIKAN KE TEMAN',
    judul: '🎁 JASA GRATIS',
    subjudul: 'Tidak perlu bayar — cukup bagikan portofolio ini ke teman-temanmu!',
    syaratJudul: '📋 SYARAT MENDAPAT JASA',
    syaratList: [
      'Bagikan link portofolio ini ke minimal 3 teman (WA, IG, Discord, atau media lain)',
      'Sebutkan nama & kontakmu saat menghubungi',
      'Semua jasa dilakukan dengan senang hati — tidak ada biaya apapun',
    ],
    layananJudul: '✨ PILIHAN JASA',
    hubungiLabel: 'Hubungi via',
    badgeGratis: '100% GRATIS',
    langLabel: 'EN',
  },
  en: {
    badgeLabel: 'FREE — CONDITION: SHARE WITH FRIENDS',
    judul: '🎁 FREE SERVICES',
    subjudul: 'No payment needed — just share this portfolio with your friends!',
    syaratJudul: '📋 HOW TO GET THE SERVICE',
    syaratList: [
      'Share this portfolio link to at least 3 friends (WA, IG, Discord, or any platform)',
      'Mention your name & contact when reaching out',
      'All services are done happily — absolutely free of charge',
    ],
    layananJudul: '✨ SERVICE OPTIONS',
    hubungiLabel: 'Contact via',
    badgeGratis: '100% FREE',
    langLabel: 'ID',
  },
}

// ── Data layanan ────────────────────────────────────────────
const layanan = [
  {
    id: 'curhat',
    icon: '💬',
    warna: '#8b5cf6',
    bg: '#f5f0ff',
    judul: { id: 'Jasa Curhat & Konsultasi', en: 'Chat & Consultation' },
    deskripsi: {
      id: 'Butuh teman ngobrol, curhat, atau minta saran seputar teknologi, karir, kuliah, atau kehidupan? Saya siap dengerin dan kasih masukan yang jujur.',
      en: 'Need someone to talk to, vent, or get advice about tech, career, college, or life? I am here to listen and give honest feedback.',
    },
    detail: {
      id: ['Chat via WA/Discord/Telegram', 'Diskusi santai, bebas topik', 'Konsultasi teknologi & web dev', 'Gratis, tanpa batas waktu'],
      en: ['Chat via WA/Discord/Telegram', 'Casual discussion, any topic', 'Tech & web dev consultation', 'Free, no time limit'],
    },
    kontak: [
      { platform: 'WhatsApp', icon: SiWhatsapp, href: 'https://wa.me/62882009725053', warna: '#25d366' },
      { platform: 'Discord', icon: SiDiscord, href: 'https://discord.com', warna: '#5865f2' },
      { platform: 'Telegram', icon: SiTelegram, href: 'https://t.me/rizkihabibi', warna: '#229ed9' },
    ],
  },
  {
    id: 'website-vtuber',
    icon: '🌐',
    warna: '#1a5cff',
    bg: '#e8f0ff',
    judul: { id: 'Website Gratis untuk Vtuber & Instansi', en: 'Free Website for Vtubers & Organizations' },
    deskripsi: {
      id: 'Kamu Vtuber, komunitas, atau instansi yang berdampak? Saya buatkan website gratis — personal portfolio, halaman komunitas, atau website instansi sederhana.',
      en: 'Are you a Vtuber, community, or impactful organization? I will build a free website — personal portfolio, community page, or simple org website.',
    },
    detail: {
      id: [
        'Website personal Vtuber (portfolio, bio, sosial media)',
        'Website komunitas / grup digital',
        'Website instansi berdampak (LSM, komunitas sosial, sekolah)',
        'Desain komik / modern sesuai karakter',
        'Hosting & domain gratis (sub-domain gelar.id tersedia)',
      ],
      en: [
        'Vtuber personal website (portfolio, bio, social media)',
        'Community / digital group website',
        'Impactful org website (NGO, social community, school)',
        'Comic / modern design to match your character',
        'Free hosting & domain (gelar.id subdomain available)',
      ],
    },
    kontak: [
      { platform: 'WhatsApp', icon: SiWhatsapp, href: 'https://wa.me/62882009725053', warna: '#25d366' },
      { platform: 'Instagram', icon: SiInstagram, href: 'https://instagram.com/rizkihabibi', warna: '#e1306c' },
    ],
  },
  {
    id: 'kerjasama-grup',
    icon: '🤝',
    warna: '#22c55e',
    bg: '#f0fdf4',
    judul: { id: 'Kerjasama Antar Grup & Komunitas', en: 'Group & Community Collaboration' },
    deskripsi: {
      id: 'Punya grup Discord, WA, atau Telegram yang ingin kolaborasi? Saya buka jasa kerjasama antar komunitas — dari event bareng, proyek digital bersama, sampai curhat grup.',
      en: 'Have a Discord, WA, or Telegram group looking to collaborate? I offer community partnership services — from joint events, digital projects, to group discussions.',
    },
    detail: {
      id: [
        'Kerjasama event / workshop bersama',
        'Proyek digital kolaboratif (web, konten, desain)',
        'Sesi curhat / diskusi untuk anggota grup',
        'Terbuka untuk semua komunitas positif',
        'Komunikasi via Discord / WA / Telegram',
      ],
      en: [
        'Joint events / workshops',
        'Collaborative digital projects (web, content, design)',
        'Group discussion / consultation sessions',
        'Open to all positive communities',
        'Communication via Discord / WA / Telegram',
      ],
    },
    kontak: [
      { platform: 'Discord', icon: SiDiscord, href: 'https://discord.com', warna: '#5865f2' },
      { platform: 'WhatsApp', icon: SiWhatsapp, href: 'https://wa.me/62882009725053', warna: '#25d366' },
      { platform: 'Telegram', icon: SiTelegram, href: 'https://t.me/rizkihabibi', warna: '#229ed9' },
    ],
  },
]

// ── Komponen kartu layanan ─────────────────────────────────
function KartuLayanan({
  item,
  lang,
  terbuka,
  onToggle,
}: {
  item: typeof layanan[0]
  lang: 'id' | 'en'
  terbuka: boolean
  onToggle: () => void
}) {
  const t = teks[lang]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: 'spring', stiffness: 140 }}
      className="overflow-hidden"
      style={{ border: `3px solid ${item.warna}`, boxShadow: `5px 5px 0 ${item.warna}`, background: item.bg }}
    >
      {/* Header kartu */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 text-left"
        style={{ background: item.warna }}
      >
        <span className="text-3xl">{item.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="font-comic text-white text-base sm:text-lg leading-tight">
            {item.judul[lang]}
          </div>
          <div className="font-bold text-[10px] text-white/70 mt-0.5">
            {t.badgeGratis}
          </div>
        </div>
        <motion.div
          animate={{ rotate: terbuka ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {terbuka && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {/* Deskripsi */}
              <p className="text-sm text-[#0a0a0a] leading-relaxed font-medium">
                {item.deskripsi[lang]}
              </p>

              {/* Detail list */}
              <div className="space-y-1.5">
                {item.detail[lang].map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-[13px] font-bold text-[#0a0a0a]">
                    <FiCheck className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: item.warna }} />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              {/* Tombol kontak */}
              <div className="pt-2 border-t border-[#0a0a0a]/10">
                <div className="text-[10px] font-bold text-[#0a0a0a]/50 mb-2 tracking-widest">
                  {t.hubungiLabel}:
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.kontak.map(k => (
                    <a
                      key={k.platform}
                      href={k.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-comic text-xs px-3 py-1.5 text-white transition-opacity hover:opacity-80"
                      style={{
                        background: k.warna,
                        border: '2px solid #0a0a0a',
                        boxShadow: '2px 2px 0 #0a0a0a',
                      }}
                    >
                      <k.icon className="w-3.5 h-3.5" />
                      {k.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Komponen utama ─────────────────────────────────────────
export default function JasaGratis() {
  const [lang, setLang] = useState<'id' | 'en'>('id')
  const [terbuka, setTerbuka] = useState<string | null>('curhat')
  const t = teks[lang]

  return (
    <section
      id="jasa-gratis"
      className="py-16 px-3 sm:px-4 relative overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Halftone dekoratif */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle,#fff 1.5px,transparent 1.5px)', backgroundSize: '14px 14px' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header + toggle bahasa */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          {/* Toggle ID / EN */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setLang(l => l === 'id' ? 'en' : 'id')}
              className="flex items-center gap-1.5 font-bold text-[11px] px-3 py-1.5 transition-all hover:scale-105"
              style={{
                background: '#ffd700',
                color: '#0a0a0a',
                border: '2px solid #0a0a0a',
                boxShadow: '2px 2px 0 #0a0a0a',
              }}
            >
              <FiGlobe className="w-3.5 h-3.5" />
              {t.langLabel}
            </button>
          </div>

          {/* Badge */}
          <div
            className="inline-block font-bold text-[10px] tracking-[0.3em] px-4 py-1 mb-4"
            style={{ background: '#ffd700', color: '#0a0a0a', border: '2px solid #0a0a0a' }}
          >
            {t.badgeLabel}
          </div>

          <h2
            className="font-comic text-4xl sm:text-5xl text-white mb-3"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
          >
            {t.judul}
          </h2>
          <p className="text-white/50 text-sm font-bold max-w-xl mx-auto leading-relaxed">
            {t.subjudul}
          </p>
        </motion.div>

        {/* Syarat */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-5"
          style={{ border: '3px solid #ffd700', background: 'rgba(255,215,0,0.06)', boxShadow: '4px 4px 0 #ffd700' }}
        >
          <div className="font-comic text-ffd700 text-base text-white mb-3 flex items-center gap-2">
            <FiShare2 className="w-4 h-4 text-yellow-400" />
            <span style={{ color: '#ffd700' }}>{t.syaratJudul}</span>
          </div>
          <div className="space-y-2">
            {t.syaratList.map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-sm font-bold text-white/80">
                <span className="font-comic text-yellow-400 flex-shrink-0">{i + 1}.</span>
                <span>{s}</span>
              </div>
            ))}
          </div>

          {/* Tombol share langsung */}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
            <a
              href={`https://wa.me/?text=${encodeURIComponent('Hai! Cek portofolio keren ini → https://rizki-habibi-portofolio.vercel.app')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-bold text-xs px-3 py-2 text-white transition-opacity hover:opacity-80"
              style={{ background: '#25d366', border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
            >
              <SiWhatsapp className="w-3.5 h-3.5" /> Share WA
            </a>
            <a
              href="https://www.instagram.com/rizkihabibi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-bold text-xs px-3 py-2 text-white transition-opacity hover:opacity-80"
              style={{ background: '#e1306c', border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
            >
              <SiInstagram className="w-3.5 h-3.5" /> Share IG
            </a>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText('https://rizki-habibi-portofolio.vercel.app')
                  alert(lang === 'id' ? 'Link disalin! 📋' : 'Link copied! 📋')
                } catch {
                  alert('https://rizki-habibi-portofolio.vercel.app')
                }
              }}
              className="flex items-center gap-1.5 font-bold text-xs px-3 py-2 text-[#0a0a0a] transition-opacity hover:opacity-80"
              style={{ background: '#ffd700', border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
            >
              <FiShare2 className="w-3.5 h-3.5" /> {lang === 'id' ? 'Salin Link' : 'Copy Link'}
            </button>
          </div>
        </motion.div>

        {/* Judul layanan */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-comic text-white text-xl mb-4 flex items-center gap-2"
        >
          <FiHeart className="w-5 h-5 text-yellow-400" />
          {t.layananJudul}
        </motion.div>

        {/* Kartu layanan */}
        <div className="space-y-3">
          {layanan.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08 }}
            >
              <KartuLayanan
                item={item}
                lang={lang}
                terbuka={terbuka === item.id}
                onToggle={() => setTerbuka(terbuka === item.id ? null : item.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* Note bawah */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-white/30 text-[11px] font-bold tracking-widest">
            {lang === 'id'
              ? '✦ SEMUA JASA DILAKUKAN DENGAN IKHLAS — TIDAK ADA PAKSAAN, TIDAK ADA BIAYA ✦'
              : '✦ ALL SERVICES ARE DONE WITH SINCERITY — NO OBLIGATION, NO HIDDEN COST ✦'}
          </p>
          <p className="text-white/20 text-[10px] mt-1">
            {lang === 'id' ? 'by Rizki Habibi · Jember, Indonesia' : 'by Rizki Habibi · Jember, Indonesia'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
