'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const lowongan = [
  { no:1,  perusahaan:'SEVIMA',                 posisi:'Junior Software Engineer',          gaji:'Rp 5–8 jt',  tipe:'Onsite',  kota:'Surabaya',   platform:'Glints/Indeed',    link:'https://id.indeed.com/cmp/Sevima/jobs',         warna:'#1a5cff', cocok:5 },
  { no:2,  perusahaan:'Vascomm',                posisi:'Web / IoT Developer',               gaji:'Rp 5–7 jt',  tipe:'Onsite',  kota:'Surabaya',   platform:'Indeed',           link:'https://id.indeed.com/q-vascomm-lowongan.html', warna:'#22c55e', cocok:5 },
  { no:3,  perusahaan:'PT Hydrax Teknologi',    posisi:'Web Engineer',                      gaji:'Rp 5–7 jt',  tipe:'Remote',  kota:'Remote',     platform:'Glints',           link:'https://glints.com/id/explore/laravel-dev/remote', warna:'#8b5cf6', cocok:5 },
  { no:4,  perusahaan:'Hosho Digital Pte.',     posisi:'Fullstack Laravel Developer',       gaji:'Rp 5–8 jt',  tipe:'Remote',  kota:'Remote',     platform:'Glints',           link:'https://glints.com/id/explore/fullstack-laravel-developer/remote', warna:'#e63329', cocok:5 },
  { no:5,  perusahaan:'GoTo Group',             posisi:'Junior Software Engineer',          gaji:'Rp 8–15 jt', tipe:'Hybrid',  kota:'Jakarta',    platform:'LinkedIn',         link:'https://careers.goto.com',                     warna:'#f59e0b', cocok:4 },
  { no:6,  perusahaan:'eFishery',               posisi:'Junior Full Stack Developer',       gaji:'Rp 7–11 jt', tipe:'Hybrid',  kota:'Bandung',    platform:'Glints/LinkedIn',  link:'https://efishery.com/careers',                  warna:'#22c55e', cocok:5 },
  { no:7,  perusahaan:'Kata.ai',                posisi:'Junior AI/Backend Engineer',        gaji:'Rp 7–12 jt', tipe:'Hybrid',  kota:'Jakarta',    platform:'LinkedIn/Glints',  link:'https://kata.ai/careers',                       warna:'#8b5cf6', cocok:4 },
  { no:8,  perusahaan:'Telkom Indonesia',       posisi:'Junior Developer / IT Engineer',   gaji:'Rp 6–10 jt', tipe:'Onsite',  kota:'Nasional',   platform:'LinkedIn/Indeed',  link:'https://recruitment.telkom.co.id',               warna:'#e63329', cocok:4 },
  { no:9,  perusahaan:'Traveloka',              posisi:'Software Engineer (Fresh Grad)',    gaji:'Rp 8–14 jt', tipe:'Onsite',  kota:'Jakarta',    platform:'LinkedIn',         link:'https://jobs.traveloka.com',                    warna:'#0891b2', cocok:4 },
  { no:10, perusahaan:'PT Javadwipa',           posisi:'IoT Engineer',                      gaji:'Negosiasi',  tipe:'Onsite',  kota:'Surabaya',   platform:'Glints',           link:'https://glints.com/id/explore/internet-of-things/in-surabaya', warna:'#22c55e', cocok:5 },
  { no:11, perusahaan:'Kuryo Technology',       posisi:'Frontend / Backend Programmer',     gaji:'Rp 4–6 jt',  tipe:'Onsite',  kota:'Surabaya',   platform:'Indeed',           link:'https://id.indeed.com',                         warna:'#1a5cff', cocok:4 },
  { no:12, perusahaan:'PT Reka Cipta Solusi',   posisi:'Freelance Full Stack Developer',    gaji:'Rp 5–8 jt',  tipe:'Freelance',kota:'Bandung',   platform:'Glints',           link:'https://glints.com/id',                         warna:'#f59e0b', cocok:4 },
  { no:13, perusahaan:'REVIFY SDN BHD',         posisi:'Laravel Programmer',                gaji:'Rp 6–10 jt', tipe:'Remote',  kota:'Remote',     platform:'Indeed',           link:'https://id.indeed.com',                         warna:'#8b5cf6', cocok:5 },
  { no:14, perusahaan:'Magnus Digital',         posisi:'Full Stack Engineer',               gaji:'Rp 5–7 jt',  tipe:'Hybrid',  kota:'Nasional',   platform:'Glints',           link:'https://glints.com/id',                         warna:'#0891b2', cocok:4 },
  { no:15, perusahaan:'KVT.kom (Self)',         posisi:'Founder / CTO',                     gaji:'Equity',     tipe:'Remote',  kota:'Jember',     platform:'Self',             link:'#ch82',                                         warna:'#ffd700', cocok:5 },
]

const platform = [
  { nm:'LinkedIn',    desc:'Jaringan profesional terluas. Direct recruiter contact. Banyak remote job internasional.', link:'https://linkedin.com/jobs', icon:'💼', w:'#0077b5' },
  { nm:'Glints',      desc:'Platform lokal terbaik. Filter skill-based detail. Banyak startup dan remote Indonesia.', link:'https://glints.com/id', icon:'⚡', w:'#ff6b35' },
  { nm:'Jobstreet',   desc:'Volume lowongan terbesar. Cocok untuk perusahaan established dan BUMN.', link:'https://jobstreet.co.id', icon:'🔍', w:'#e74c3c' },
  { nm:'Kalibrr',     desc:'Skill matching system. Banyak perusahaan tech mid-size dan startup Series A+.', link:'https://kalibrr.com', icon:'🎯', w:'#3498db' },
  { nm:'KitaLulus',   desc:'Populer untuk fresh graduate lokal. Banyak perusahaan Jatim & daerah.', link:'https://kitalulus.com', icon:'🎓', w:'#2ecc71' },
  { nm:'Tech in Asia',desc:'Fokus startup Asia Tenggara. Gaji lebih kompetitif dan banyak company global.', link:'https://techinasia.com/jobs', icon:'🌏', w:'#e67e22' },
]

const skillDicari = [
  { skill:'Laravel/PHP', level:95, ket:'Masih dominan di startup & UMKM lokal Indonesia', w:'#FF2D20' },
  { skill:'Next.js/React', level:92, ket:'Standar de facto frontend modern', w:'#0070f3' },
  { skill:'TypeScript', level:88, ket:'Makin wajib di perusahaan tech berkualitas', w:'#3178c6' },
  { skill:'Docker + CI/CD', level:85, ket:'DevOps dasar sudah jadi requirement mid-level', w:'#2496ed' },
  { skill:'AI/LLM Integration', level:90, ket:'Demand naik 148% 2023-2025. Sangat diferensiasi.', w:'#22c55e' },
  { skill:'IoT + Web Dashboard', level:80, ket:'Langka di market — kombinasimu sangat bernilai!', w:'#f59e0b' },
  { skill:'PostgreSQL/MySQL', level:88, ket:'Wajib, pastikan kuasai query optimization', w:'#336791' },
  { skill:'Cloud Basics (AWS/GCP)', level:75, ket:'Satu cloud platform sudah cukup untuk entry-level', w:'#f59e0b' },
]

const tipsCocok = [
  { ikon:'🏆', judul:'Tonjolkan Trifecta Langka', detail:'Laravel + Next.js + IoT adalah kombinasi yang sangat jarang dimiliki fresh grad. Posisikan dirimu sebagai "Full-Stack + IoT Developer", bukan sekadar web developer biasa.' },
  { ikon:'🎖️', judul:'BNSP + IPK 3.81 = Bukti Ganda', detail:'Sertifikasi BNSP memberikan validasi kompetensi dari pemerintah RI. Cantumkan di paling atas CV. IPK 3.81 melampaui threshold kebanyakan perusahaan (min 3.5).' },
  { ikon:'📦', judul:'3 Proyek Live = Portofolio Kuat', detail:'Deploy minimal 3 proyek ke URL nyata (Vercel/Railway). Satu IoT dashboard, satu full-stack Laravel+Next.js, satu dengan AI integration — README profesional di tiap repo.' },
  { ikon:'🎯', judul:'Target Perusahaan Agritech Jatim', detail:'Jember adalah kota pertanian terbesar Jawa Timur. Skill IoT + Laravel sangat relevan untuk perusahaan agritech lokal yang butuh sistem monitoring lahan/ternak.' },
  { ikon:'🌐', judul:'Remote = Gaji Setara Kota Besar', detail:'Dengan koneksi internet yang ada di Jember, kamu bisa bekerja remote untuk perusahaan Jakarta atau Singapura dengan gaji 2-3x lebih tinggi dari pasar lokal.' },
  { ikon:'✍️', judul:'Cover Letter yang Spesifik', detail:'Jangan pakai template. Tulis: "Saya membangun sistem IoT monitoring menggunakan Arduino + Laravel yang relevan langsung dengan kebutuhan [perusahaan X] dalam hal [Y]."' },
]

function KartuLowongan({ item, i }: { item: typeof lowongan[0]; i: number }) {
  const [buka, setBuka] = useState(false)
  const tipeWarna: Record<string, string> = { Remote:'#22c55e', Onsite:'#1a5cff', Hybrid:'#8b5cf6', Freelance:'#f59e0b' }
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, rotate: i % 2 === 0 ? -1 : 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: i * 0.05, type: 'spring', stiffness: 180 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -4 }}
      onClick={() => setBuka(!buka)}
      className="cursor-pointer overflow-hidden"
      style={{ border: `3px solid ${item.warna}`, boxShadow: `4px 4px 0 ${item.warna}`, background: 'white' }}>
      <div className="flex items-center justify-between px-3 py-2" style={{ background: item.warna }}>
        <div className="flex items-center gap-2">
          <span className="font-comic text-[10px] text-white/70">#{String(item.no).padStart(2,'0')}</span>
          <span className="font-comic text-sm text-white">{item.perusahaan}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold text-[8px] px-1.5 py-0.5 text-white"
            style={{ background: tipeWarna[item.tipe] ?? '#6b7280' }}>{item.tipe}</span>
          <span className="text-white/60 text-sm">{buka ? '▲' : '▼'}</span>
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start gap-2 mb-1">
          <div className="font-bold text-xs text-[#0a0a0a]">{item.posisi}</div>
          <div className="font-comic text-xs flex-shrink-0" style={{ color: item.warna }}>{item.gaji}</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="font-bold text-[8px] text-[#0a0a0a]/50">📍 {item.kota}</span>
          <span className="font-bold text-[8px] text-[#0a0a0a]/50">via {item.platform}</span>
          <span className="font-bold text-[8px]" style={{ color: item.cocok === 5 ? '#22c55e' : '#f59e0b' }}>
            {'⭐'.repeat(item.cocok)} Kecocokan
          </span>
        </div>
        <AnimatePresence>
          {buka && (
            <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }}
              exit={{ height:0, opacity:0 }} transition={{ duration:0.2 }}
              style={{ overflow:'hidden' }}>
              <div className="pt-2 mt-2 border-t border-black/10">
                <a href={item.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[10px] px-2 py-1 text-white"
                  style={{ background: item.warna }}
                  onClick={e => e.stopPropagation()}>
                  🔗 Lihat Lowongan / Platform
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function InfoKarirKomik() {
  const [tabAktif, setTabAktif] = useState<'lowongan'|'skill'|'tips'|'platform'>('lowongan')
  const tabs: Array<{ id: typeof tabAktif; label: string; icon: string }> = [
    { id:'lowongan', label:'Lowongan Kerja', icon:'💼' },
    { id:'skill',    label:'Skill Dicari',   icon:'⚡' },
    { id:'tips',     label:'Tips Lamar',     icon:'🎯' },
    { id:'platform', label:'Platform',       icon:'🌐' },
  ]

  return (
    <section id="info-karir" className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden"
      style={{ background: '#0a0a0a' }}>
      <div className="halftone-yellow absolute inset-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div className="text-center mb-8"
          initial={{ opacity:0, y:-30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ type:'spring', stiffness:150 }}
          viewport={{ once:false }}>
          <div className="font-comic text-4xl sm:text-5xl text-yellow-400 mb-2"
            style={{ textShadow:'4px 4px 0 rgba(255,215,0,0.3)' }}>
            🚀 INFO KARIR & PELUANG KERJA
          </div>
          <div className="speech-bubble inline-block text-sm text-[#0a0a0a]">
            Berdasarkan profil skill dan IPK 3.81 — rekomendasi nyata dari pasar kerja Indonesia 2025–2026!
          </div>
        </motion.div>

        {/* Tab navigasi */}
        <div className="flex gap-2 mb-6 flex-wrap justify-center">
          {tabs.map(t => (
            <motion.button key={t.id}
              className="flex items-center gap-2 px-4 py-2 font-comic text-sm"
              style={{
                background: tabAktif === t.id ? '#ffd700' : '#111',
                color: tabAktif === t.id ? '#0a0a0a' : 'rgba(255,255,255,0.5)',
                border: `3px solid ${tabAktif === t.id ? '#0a0a0a' : '#333'}`,
                boxShadow: tabAktif === t.id ? '4px 4px 0 #0a0a0a' : 'none',
              }}
              whileTap={{ scale:0.95 }}
              onClick={() => setTabAktif(t.id)}>
              {t.icon} {t.label}
            </motion.button>
          ))}
        </div>

        {/* Konten tab */}
        <AnimatePresence mode="wait">
          <motion.div key={tabAktif}
            initial={{ opacity:0, y:15 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-15 }}
            transition={{ type:'spring', stiffness:250 }}>

            {/* Tab: Lowongan */}
            {tabAktif === 'lowongan' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="font-comic text-yellow-400">💼 15 Lowongan Relevan (2025–2026)</div>
                  <span className="font-bold text-[9px] text-white/40">klik kartu untuk buka link</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {lowongan.map((item, i) => <KartuLowongan key={item.no} item={item} i={i} />)}
                </div>
                <motion.div className="mt-6 p-4"
                  initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:false }}
                  style={{ border:'2px solid #ffd70050', background:'#111' }}>
                  <div className="font-comic text-sm text-yellow-400 mb-2">💡 INSIGHT GAJI FRESH GRAD IT 2025</div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      { zona:'Jawa Timur (non-Sby)', range:'Rp 4–6 jt/bln', icon:'🏘️', w:'#f59e0b' },
                      { zona:'Surabaya / Jawa Besar', range:'Rp 5–9 jt/bln', icon:'🏙️', w:'#1a5cff' },
                      { zona:'Jakarta / Remote', range:'Rp 7–15 jt/bln', icon:'🚀', w:'#22c55e' },
                    ].map((z, i) => (
                      <motion.div key={z.zona}
                        initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }}
                        transition={{ delay:i*0.1 }} viewport={{ once:false }}
                        className="text-center p-3"
                        style={{ border:`2px solid ${z.w}40`, background:`${z.w}15` }}>
                        <div className="text-2xl mb-1">{z.icon}</div>
                        <div className="font-bold text-[9px] text-white/50">{z.zona}</div>
                        <div className="font-comic text-sm" style={{ color:z.w }}>{z.range}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {/* Tab: Skill Dicari */}
            {tabAktif === 'skill' && (
              <div className="space-y-3">
                <div className="font-comic text-yellow-400 mb-4">⚡ Skill Paling Dicari Developer Indonesia 2025–2026</div>
                {skillDicari.map((s, i) => (
                  <motion.div key={s.skill}
                    initial={{ opacity:0, x:-30 }}
                    whileInView={{ opacity:1, x:0 }}
                    transition={{ delay:i*0.06, type:'spring', stiffness:180 }}
                    viewport={{ once:false, amount:0.1 }}
                    className="p-3"
                    style={{ border:`2px solid ${s.w}40`, background:`${s.w}12` }}>
                    <div className="flex justify-between mb-1">
                      <span className="font-comic text-sm" style={{ color:s.w }}>{s.skill}</span>
                      <span className="font-bold text-xs text-white/60">{s.level}% demand</span>
                    </div>
                    <div className="h-2 bg-white/10 overflow-hidden mb-1">
                      <motion.div className="h-full" style={{ background:s.w }}
                        initial={{ width:0 }}
                        whileInView={{ width:`${s.level}%` }}
                        transition={{ duration:1.2, ease:'easeOut', delay:i*0.06+0.2 }}
                        viewport={{ once:false }} />
                    </div>
                    <p className="text-[9px] text-white/50 font-bold">{s.ket}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Tab: Tips */}
            {tabAktif === 'tips' && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="font-comic text-yellow-400 mb-2 sm:col-span-2">🎯 Tips Spesifik untuk Profil Rizki Habibi</div>
                {tipsCocok.map((t, i) => (
                  <motion.div key={t.judul}
                    initial={{ opacity:0, y:20, rotate:i%2===0?-1:1 }}
                    whileInView={{ opacity:1, y:0, rotate:0 }}
                    transition={{ delay:i*0.08, type:'spring' }}
                    viewport={{ once:false, amount:0.1 }}
                    whileHover={{ y:-4 }}
                    style={{ border:'2px solid #ffd70050', boxShadow:'4px 4px 0 #ffd70030', background:'#111' }}>
                    <div className="flex items-center gap-2 px-4 py-2"
                      style={{ background:'#ffd70015', borderBottom:'1px solid #ffd70030' }}>
                      <span className="text-xl">{t.ikon}</span>
                      <span className="font-comic text-sm text-yellow-400">{t.judul}</span>
                    </div>
                    <p className="p-3 text-xs text-white/65 font-bold leading-relaxed">{t.detail}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Tab: Platform */}
            {tabAktif === 'platform' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="font-comic text-yellow-400 mb-2 sm:col-span-2 lg:col-span-3">🌐 Platform Job Hunting Terbaik untuk Developer Indonesia</div>
                {platform.map((p, i) => (
                  <motion.a key={p.nm}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity:0, scale:0.9 }}
                    whileInView={{ opacity:1, scale:1 }}
                    transition={{ delay:i*0.08, type:'spring' }}
                    viewport={{ once:false, amount:0.1 }}
                    whileHover={{ y:-5, scale:1.02 }}
                    className="block overflow-hidden"
                    style={{ border:`3px solid ${p.w}`, boxShadow:`4px 4px 0 ${p.w}`, background:'#111' }}>
                    <div className="px-4 py-2 flex items-center gap-2" style={{ background:p.w }}>
                      <span className="text-xl">{p.icon}</span>
                      <span className="font-comic text-sm text-white">{p.nm}</span>
                      <span className="ml-auto text-white/70 text-xs">↗</span>
                    </div>
                    <p className="p-3 text-xs text-white/65 font-bold leading-relaxed">{p.desc}</p>
                  </motion.a>
                ))}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
