'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import HeaderBab from '@/components/HeaderBab'

/* ─────────────────────────────────────────────
   ATOM ANIMASI LOKAL
───────────────────────────────────────────── */

/** Kursor berkedip terminal */
function KursorKedip({ warna = '#4ade80' }: { warna?: string }) {
  return (
    <motion.span
      className="inline-block w-[5px] h-[12px] align-middle ml-0.5"
      style={{ background: warna }}
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.85, repeat: Infinity }}
    />
  )
}

/** Teks mengetik loop */
function TeksKetik({ daftar, warna = '#4ade80' }: { daftar: string[]; warna?: string }) {
  const [idx, setIdx] = useState(0)
  const [chars, setChars] = useState(0)
  const [hapus, setHapus] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => {
      if (!hapus) {
        if (chars < daftar[idx].length) setChars(c => c + 1)
        else setTimeout(() => setHapus(true), 1000)
      } else {
        if (chars > 0) setChars(c => c - 1)
        else { setHapus(false); setIdx(i => (i + 1) % daftar.length) }
      }
    }, hapus ? 30 : 65)
    return () => clearTimeout(t)
  }, [chars, hapus, idx, daftar])
  return (
    <span className="font-mono text-sm" style={{ color: warna }}>
      {daftar[idx].slice(0, chars)}<KursorKedip warna={warna} />
    </span>
  )
}

/** Angka naik animasi */
function HitungNaik({ target, sufiks = '', warna = '#ffd700' }: { target: number; sufiks?: string; warna?: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let v = 0
    const step = Math.max(1, target / 80)
    const t = setInterval(() => {
      v += step
      if (v >= target) { setVal(target); clearInterval(t) } else setVal(Math.floor(v))
    }, 20)
    return () => clearInterval(t)
  }, [target])
  return <span style={{ color: warna }} className="font-comic">{val.toLocaleString()}{sufiks}</span>
}

/** Partikel mengambang */
function PartikelAmbang({ jumlah = 6, warna = '#ffd700' }: { jumlah?: number; warna?: string }) {
  return (
    <>
      {Array.from({ length: jumlah }).map((_, i) => (
        <motion.div key={i}
          className="absolute select-none pointer-events-none text-xs"
          style={{ left: `${8 + i * 15}%`, top: `${10 + (i % 3) * 28}%`, color: warna, zIndex: 2 }}
          animate={{ y: [-5, 5, -5], rotate: [0, 25, -25, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2 + i * 0.35, repeat: Infinity, delay: i * 0.25 }}>
          {['★', '✦', '◆', '●', '▲', '✸', '⚡', '💫'][i % 8]}
        </motion.div>
      ))}
    </>
  )
}

/** Efek kilat latar */
function EfekKilat({ warna = '#ffd700' }: { warna?: string }) {
  return (
    <motion.div className="absolute inset-0 pointer-events-none z-[1]"
      style={{ background: warna }}
      animate={{ opacity: [0, 0.08, 0, 0.05, 0] }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5 }} />
  )
}

/** Bar progress animasi */
function BarProgress({ label, pct, warna }: { label: string; pct: number; warna: string }) {
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-0.5">
        <span className="font-bold text-xs text-[#0a0a0a]/80">{label}</span>
        <span className="font-comic text-xs" style={{ color: warna }}>{pct}%</span>
      </div>
      <div className="h-2 bg-black/10 overflow-hidden" style={{ border: '1px solid #0a0a0a20' }}>
        <motion.div className="h-full"
          style={{ background: `linear-gradient(90deg, ${warna}, ${warna}bb)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.15 }} />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   WRAPPER PANEL BAB
───────────────────────────────────────────── */
function PanelBab({
  id, num, judul, warna, latarBelakang, gelap = false, children,
}: {
  id: string; num: string; judul: string; warna: string
  latarBelakang: string; gelap?: boolean; children: React.ReactNode
}) {
  return (
    <section id={id}
      className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden"
      style={{ background: gelap ? '#0a0a0a' : latarBelakang }}>
      {gelap ? <div className="halftone-yellow" /> : <div className="halftone-bg" />}
      <div className="max-w-6xl mx-auto relative z-10">
        <HeaderBab nomor={num} judul={judul} warna={gelap ? '#ffd700' : warna} gelap={gelap} />
        {children}
      </div>
    </section>
  )
}

/* Grid 3 kolom generik */
function GridTiga({ items }: { items: { icon: string; judul: string; teks: string; warna: string; bg: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((butir, i) => (
        <motion.div key={butir.judul}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, type: 'spring' }}
          viewport={{ once: false, amount: 0.1 }}
          whileHover={{ y: -5 }}
          className="p-4"
          style={{ border: `3px solid ${butir.warna}`, boxShadow: `4px 4px 0 ${butir.warna}`, background: butir.bg }}>
          <motion.div className="text-3xl mb-2"
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}>
            {butir.icon}
          </motion.div>
          <div className="font-comic text-sm mb-1" style={{ color: butir.warna }}>{butir.judul}</div>
          <p className="text-xs font-bold text-[#0a0a0a]/70 leading-relaxed">{butir.teks}</p>
        </motion.div>
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════════
   Ch171 — ANIMASI & GERAK: JIWA DARI WEB MODERN
══════════════════════════════════════════════ */
function Ch171() {
  const teknik = [
    { judul: 'CSS Keyframes', teks: 'Animasi dasar: fade, slide, spin. Ringan, tidak butuh library tambahan', warna: '#1a5cff', bg: '#e8f0ff', icon: '🎨' },
    { judul: 'Framer Motion', teks: 'Animasi React level dewa: spring physics, gestures, layoutId, AnimatePresence', warna: '#8b5cf6', bg: '#f5f0ff', icon: '⚡' },
    { judul: 'GSAP', teks: 'Timeline kompleks, scroll-triggered animation, morph SVG. Pilihan para pro web agency', warna: '#88ce02', bg: '#f0ffe0', icon: '🏎️' },
    { judul: 'Lottie / SVG', teks: 'Animasi vektor dari After Effects. Format JSON ringan, infinite loop, full kontrol', warna: '#f59e0b', bg: '#fffbeb', icon: '🎬' },
    { judul: 'CSS Variables', teks: 'Animasi dinamis via custom properties. Kombinasi JS + CSS untuk efek interaktif', warna: '#e63329', bg: '#fef2f2', icon: '🎭' },
    { judul: 'Sprite Sheets', teks: 'Teknik klasik game dev: frame-by-frame animation di web seperti karakter GIF bergerak', warna: '#0891b2', bg: '#ecfeff', icon: '🕹️' },
  ]

  return (
    <PanelBab id="ch171" num="171" judul="ANIMASI & GERAK — JIWA DARI WEB MODERN" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble inline-block text-sm mb-6">
        🎬 Web tanpa animasi seperti komik tanpa panel — ada, tapi kurang hidup! Gerak adalah bahasa emosi antara UI dan pengguna.
      </div>
      <GridTiga items={teknik} />
      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="comic-panel p-5">
          <div className="font-comic text-lg text-[#0a0a0a] mb-3">⚡ PRINSIP ANIMASI WEB</div>
          {[
            { prinsip: 'Purpose over decoration', desc: 'Animasi harus punya fungsi — guide user, beri feedback, atau sampaikan hierarki informasi' },
            { prinsip: 'Performance first', desc: 'Gunakan transform & opacity saja untuk animasi — 60fps adalah standar minimum yang harus dijaga' },
            { prinsip: 'Respect user settings', desc: 'Selalu check prefers-reduced-motion. Tidak semua orang nyaman dengan gerakan berlebihan' },
            { prinsip: 'Timing is everything', desc: 'Ease-out untuk item masuk, ease-in untuk item keluar. Spring physics untuk feel natural' },
          ].map((p, i) => (
            <motion.div key={p.prinsip}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              viewport={{ once: false }}
              className="mb-3">
              <div className="font-comic text-sm text-[#8b5cf6]">{p.prinsip}</div>
              <p className="text-xs font-bold text-[#0a0a0a]/60 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="comic-panel-dark p-5 relative overflow-hidden">
          <PartikelAmbang jumlah={8} warna="#a78bfa" />
          <EfekKilat warna="#8b5cf6" />
          <div className="font-comic text-xl text-white mb-3 relative z-10">🎮 ANIMASI DI PORTFOLIO INI</div>
          <div className="space-y-2 relative z-10">
            {[
              { fitur: 'Sprite character berlari', tech: 'Framer Motion + interval', w: '#a78bfa' },
              { fitur: 'Matrix hujan kode', tech: 'CSS + animation loop', w: '#4ade80' },
              { fitur: 'Typing loop auto', tech: 'useState + setTimeout', w: '#38bdf8' },
              { fitur: 'Partikel meledak', tech: 'keyframes radial', w: '#fbbf24' },
              { fitur: 'CountUp angka', tech: 'setInterval lerp', w: '#f87171' },
              { fitur: 'Spring physics hover', tech: 'Framer whileHover', w: '#c084fc' },
            ].map((f, i) => (
              <motion.div key={f.fitur}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, type: 'spring' }}
                viewport={{ once: false }}>
                <span className="text-xs font-bold text-white/70">{f.fitur}</span>
                <span className="font-mono text-[9px] px-1.5 py-0.5" style={{ background: `${f.w}30`, color: f.w, border: `1px solid ${f.w}50` }}>{f.tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

/* ══════════════════════════════════════════════
   Ch172 — MICRO-INTERACTIONS: DETAIL YANG BICARA
══════════════════════════════════════════════ */
function Ch172() {
  const [likedCount, setLikedCount] = useState(42)
  const [liked, setLiked] = useState(false)
  const [copied, setCopied] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setProgress(p => p >= 100 ? 0 : p + 1), 50)
    return () => clearInterval(t)
  }, [])

  return (
    <PanelBab id="ch172" num="172" judul="MICRO-INTERACTIONS — DETAIL YANG BICARA" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        💬 Micro-interactions adalah ciuman kecil dari UI ke pengguna — terasa kecil tapi hilangnya terasa besar!
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Demo Like Button */}
        <div className="comic-panel p-5 flex flex-col items-center gap-3">
          <div className="font-comic text-sm text-[#1a5cff] mb-1">❤️ Like Button</div>
          <motion.button
            className="relative px-6 py-3 font-comic text-sm"
            style={{
              background: liked ? '#e63329' : 'white',
              color: liked ? 'white' : '#0a0a0a',
              border: '3px solid #0a0a0a',
              boxShadow: '4px 4px 0 #0a0a0a',
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.92, y: 2 }}
            onClick={() => { setLiked(!liked); setLikedCount(c => liked ? c - 1 : c + 1) }}>
            <AnimatePresence mode="wait">
              <motion.span key={liked ? 'liked' : 'not'}
                initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 400 }}>
                {liked ? '❤️' : '🤍'} {likedCount}
              </motion.span>
            </AnimatePresence>
          </motion.button>
          <p className="text-[10px] text-[#0a0a0a]/50 font-bold text-center">Spring bounce + color transition</p>
        </div>

        {/* Demo Copy Button */}
        <div className="comic-panel p-5 flex flex-col items-center gap-3">
          <div className="font-comic text-sm text-[#22c55e] mb-1">📋 Copy Button</div>
          <motion.button
            className="px-5 py-2.5 font-comic text-sm"
            style={{
              background: copied ? '#22c55e' : '#0a0a0a',
              color: 'white',
              border: '3px solid #0a0a0a',
              boxShadow: '4px 4px 0 #0a0a0a',
            }}
            whileTap={{ scale: 0.93 }}
            onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000) }}>
            <AnimatePresence mode="wait">
              <motion.span key={copied ? 'ok' : 'copy'}
                initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }}>
                {copied ? '✓ COPIED!' : '📋 COPY CODE'}
              </motion.span>
            </AnimatePresence>
          </motion.button>
          <p className="text-[10px] text-[#0a0a0a]/50 font-bold text-center">State swap + exit animation</p>
        </div>

        {/* Demo Progress */}
        <div className="comic-panel p-5 flex flex-col items-center gap-3">
          <div className="font-comic text-sm text-[#8b5cf6] mb-1">📊 Progress Loop</div>
          <div className="w-full">
            <div className="flex justify-between mb-1">
              <span className="font-bold text-xs">Uploading...</span>
              <span className="font-comic text-xs text-[#8b5cf6]">{progress}%</span>
            </div>
            <div className="h-3 bg-gray-200 overflow-hidden" style={{ border: '2px solid #0a0a0a' }}>
              <motion.div className="h-full"
                style={{ width: `${progress}%`, background: '#8b5cf6' }}
                transition={{ duration: 0.05 }} />
            </div>
            <div className="text-center mt-2">
              {progress === 100
                ? <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="font-comic text-sm text-green-500">✓ DONE!</motion.span>
                : <span className="font-bold text-[10px] text-[#0a0a0a]/40">realtime progress bar</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="comic-panel-dark p-5">
        <div className="font-comic text-xl text-white mb-4">🎯 CHECKLIST MICRO-INTERACTION</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { item: 'Button hover state', status: true },
            { item: 'Loading skeleton', status: true },
            { item: 'Form validation real-time', status: true },
            { item: 'Toast notification', status: true },
            { item: 'Drag & drop feedback', status: false },
            { item: 'Haptic-style bounce', status: true },
            { item: 'Tooltip on hover', status: true },
            { item: 'Empty state illustration', status: false },
          ].map((c, i) => (
            <motion.div key={c.item}
              className="flex items-center gap-2"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.06 }} viewport={{ once: false }}>
              <motion.span
                style={{ color: c.status ? '#4ade80' : '#6b7280' }}
                animate={c.status ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}>
                {c.status ? '✓' : '○'}
              </motion.span>
              <span className={`text-xs font-bold ${c.status ? 'text-white/80' : 'text-white/30'}`}>{c.item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* ══════════════════════════════════════════════
   Ch173 — DARK MODE & TEMA: ESTETIKA YANG INKLUSIF
══════════════════════════════════════════════ */
function Ch173() {
  const [isDark, setIsDark] = useState(false)
  return (
    <PanelBab id="ch173" num="173" judul="DARK MODE & TEMA — ESTETIKA YANG INKLUSIF" warna="#0891b2" latarBelakang="#ecfeff">
      <div className="speech-bubble inline-block text-sm mb-6">
        🌙 Dark mode bukan sekadar tren — ini adalah kebutuhan aksesibilitas. 82% developer lebih suka dark mode saat coding malam!
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Demo toggle dark/light */}
        <div className="space-y-4">
          <motion.div
            className="p-5 transition-colors duration-500"
            style={{
              background: isDark ? '#0a0a0a' : '#ffffff',
              border: `3px solid ${isDark ? '#ffd700' : '#0a0a0a'}`,
              boxShadow: `5px 5px 0 ${isDark ? '#ffd700' : '#0a0a0a'}`,
            }}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-comic text-sm" style={{ color: isDark ? '#ffd700' : '#0a0a0a' }}>
                {isDark ? '🌙 DARK MODE' : '☀️ LIGHT MODE'}
              </span>
              <motion.button
                className="px-3 py-1 font-bold text-xs"
                style={{
                  background: isDark ? '#ffd700' : '#0a0a0a',
                  color: isDark ? '#0a0a0a' : '#fafaf7',
                  border: `2px solid ${isDark ? '#0a0a0a' : '#fafaf7'}`,
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}>
                TOGGLE
              </motion.button>
            </div>
            <div className="space-y-2">
              {['Navigation', 'Hero Section', 'Card Component', 'Footer'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ background: isDark ? '#ffd70040' : '#0a0a0a20', border: `1px solid ${isDark ? '#ffd700' : '#0a0a0a'}` }} />
                  <span className="text-xs font-bold" style={{ color: isDark ? '#ffffff80' : '#0a0a0a80' }}>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[9px] mt-3" style={{ color: isDark ? '#ffffff40' : '#0a0a0a40' }}>
              Klik TOGGLE untuk preview tema
            </p>
          </motion.div>
        </div>

        <div className="space-y-3">
          <div className="font-comic text-lg text-[#0891b2] mb-2">🎨 SISTEM WARNA PORTFOLIO INI</div>
          {[
            { nama: 'Comic Black', hex: '#0a0a0a', desc: 'Outline utama, teks heading' },
            { nama: 'Comic White', hex: '#fafaf7', desc: 'Background page, card light' },
            { nama: 'Hero Blue', hex: '#1a5cff', desc: 'Aksen utama, link, badge' },
            { nama: 'Komik Kuning', hex: '#ffd700', desc: 'Highlight, hover, CTA penting' },
            { nama: 'Danger Red', hex: '#e63329', desc: 'Warning, error, aksi destruktif' },
            { nama: 'Success Green', hex: '#22c55e', desc: 'Konfirmasi, status aktif' },
          ].map((w, i) => (
            <motion.div key={w.nama}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, type: 'spring' }}
              viewport={{ once: false }}>
              <motion.div
                className="w-8 h-8 flex-shrink-0"
                style={{ background: w.hex, border: '2px solid #0a0a0a' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }} />
              <div>
                <div className="font-comic text-xs text-[#0891b2]">{w.nama} <span className="font-mono text-[9px] text-[#0a0a0a]/40">{w.hex}</span></div>
                <div className="font-bold text-[9px] text-[#0a0a0a]/50">{w.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <GridTiga items={[
        { icon: '♿', judul: 'WCAG Contrast', teks: 'Rasio kontras minimum 4.5:1 untuk teks normal, 3:1 untuk heading besar dan elemen UI', warna: '#0891b2', bg: '#ecfeff' },
        { icon: '👁️', judul: 'Color Blindness', teks: 'Tidak mengandalkan warna saja untuk menyampaikan informasi. Gunakan icon + label + pattern', warna: '#8b5cf6', bg: '#f5f0ff' },
        { icon: '🔆', judul: 'High Contrast Mode', teks: 'Dukung forced-colors media query untuk pengguna yang butuh kontras ekstrem di sistem mereka', warna: '#f59e0b', bg: '#fffbeb' },
      ]} />
    </PanelBab>
  )
}

/* ══════════════════════════════════════════════
   Ch174 — PERFORMA WEB: DARI LAMBAT KE KILAT
══════════════════════════════════════════════ */
function Ch174() {
  return (
    <PanelBab id="ch174" num="174" judul="PERFORMA WEB — DARI LAMBAT KE KILAT ⚡" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        ⚡ 100ms delay = 1% conversion drop. Performa bukan luxury — ini survival untuk bisnis online!
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'LCP Target', val: '&lt; 2.5s', desc: 'Largest Contentful Paint — kapan konten utama muncul', warna: '#22c55e', icon: '🖼️' },
          { label: 'FID Target', val: '&lt; 100ms', desc: 'First Input Delay — seberapa cepat halaman merespons klik pertama', warna: '#1a5cff', icon: '👆' },
          { label: 'CLS Target', val: '&lt; 0.1', desc: 'Cumulative Layout Shift — konten tidak lompat-lompat saat loading', warna: '#f59e0b', icon: '📐' },
        ].map((m, i) => (
          <motion.div key={m.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
            className="p-4 text-center"
            style={{ border: `3px solid ${m.warna}`, boxShadow: `5px 5px 0 ${m.warna}`, background: 'white' }}>
            <motion.div className="text-3xl mb-2"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}>
              {m.icon}
            </motion.div>
            <div className="font-bold text-xs text-[#0a0a0a]/50 mb-1">{m.label}</div>
            <div className="font-comic text-2xl mb-1" style={{ color: m.warna }}
              dangerouslySetInnerHTML={{ __html: m.val }} />
            <p className="text-[9px] font-bold text-[#0a0a0a]/50 leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="comic-panel p-5">
          <div className="font-comic text-lg text-[#0a0a0a] mb-3">🛠️ TEKNIK OPTIMASI</div>
          <div className="space-y-3">
            {[
              { tek: 'Image Optimization', detail: 'WebP/AVIF format, responsive srcset, lazy loading, blur placeholder', persen: 35 },
              { tek: 'Code Splitting', detail: 'Dynamic import, route-based splitting, tree shaking dead code', persen: 25 },
              { tek: 'Caching Strategy', detail: 'CDN edge cache, HTTP cache headers, SWR/React Query stale-while-revalidate', persen: 20 },
              { tek: 'Bundle Size', detail: 'Analyze dengan Bundle Analyzer, ganti lodash ke lodash-es, remove unused deps', persen: 15 },
            ].map((t, i) => (
              <div key={t.tek}>
                <div className="flex justify-between mb-0.5">
                  <span className="font-comic text-xs text-[#22c55e]">{t.tek}</span>
                  <span className="font-bold text-[9px] text-[#0a0a0a]/40">-{t.persen}% size</span>
                </div>
                <p className="text-[9px] font-bold text-[#0a0a0a]/50 mb-1">{t.detail}</p>
                <BarProgress label="" pct={t.persen * 2.5} warna="#22c55e" />
              </div>
            ))}
          </div>
        </div>

        <div className="comic-panel-dark p-5 relative overflow-hidden">
          <PartikelAmbang jumlah={6} warna="#4ade80" />
          <div className="font-comic text-xl text-white mb-3 relative z-10">🏆 NEXT.JS ADVANTAGE</div>
          <div className="space-y-2 relative z-10">
            {[
              { fitur: 'Server Components', desc: 'Zero JS ke client, data fetch di server langsung' },
              { fitur: 'Image Component', desc: 'Auto-optimize, lazy load, blur placeholder built-in' },
              { fitur: 'Font Optimization', desc: 'Self-host Google Fonts, zero layout shift' },
              { fitur: 'Partial Prerendering', desc: 'Static shell + streaming dynamic content' },
              { fitur: 'Edge Runtime', desc: 'API routes jalan di edge CDN, latency <10ms global' },
              { fitur: 'Turbopack', desc: 'Dev server 700x lebih cepat dari webpack' },
            ].map((f, i) => (
              <motion.div key={f.fitur}
                className="flex gap-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, type: 'spring' }}
                viewport={{ once: false }}>
                <motion.span className="text-green-400 flex-shrink-0 text-sm"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}>▶</motion.span>
                <div>
                  <span className="font-comic text-xs text-green-400">{f.fitur}</span>
                  <span className="text-white/50 text-[9px] font-bold ml-1">— {f.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PanelBab>
  )
}

/* ══════════════════════════════════════════════
   Ch175 — API & INTEGRASI: JEMBATAN ANTAR SISTEM
══════════════════════════════════════════════ */
function Ch175() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ['REST API', 'GraphQL', 'WebSocket', 'Webhook']
  const konten = [
    {
      teks: 'REST API adalah standar emas integrasi web. Stateless, cache-friendly, mudah dipahami semua tim. Laravel + Sanctum + Postman adalah trio sempurna.',
      kode: 'GET /api/users?page=1\nAuthorization: Bearer {token}\n→ 200 OK { data: [...] }',
    },
    {
      teks: 'GraphQL satu endpoint, query apa yang dibutuhkan. Cocok untuk aplikasi dengan relasi data kompleks dan multiple client (web, mobile, third-party).',
      kode: 'query {\n  user(id: 1) {\n    nama, email\n    proyek { judul }\n  }\n}',
    },
    {
      teks: 'WebSocket untuk real-time: chat, notifikasi live, dashboard update. Laravel Echo + Pusher atau Socket.io adalah pilihan paling mudah.',
      kode: 'socket.on("notif", (data) => {\n  updateUI(data)\n  playSound()\n})',
    },
    {
      teks: 'Webhook: sistem eksternal notify sistem kita saat event terjadi. Payment gateway, GitHub Actions, Stripe — semua pakai pola ini.',
      kode: 'POST /webhook/payment\nX-Signature: sha256=...\n→ Verifikasi → Proses → 200',
    },
  ]

  return (
    <PanelBab id="ch175" num="175" judul="API & INTEGRASI — JEMBATAN ANTAR SISTEM" warna="#f59e0b" latarBelakang="#fffbeb">
      <div className="speech-bubble inline-block text-sm mb-6">
        🔌 Tidak ada aplikasi yang berdiri sendiri. Semakin banyak integrasi yang bisa kamu bangun, semakin bernilai kamu sebagai developer!
      </div>

      {/* Tab pilihan */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {tabs.map((tab, i) => (
          <motion.button key={tab}
            className="px-3 py-1.5 font-comic text-sm"
            style={{
              background: activeTab === i ? '#f59e0b' : 'white',
              color: activeTab === i ? '#0a0a0a' : '#0a0a0a80',
              border: `3px solid ${activeTab === i ? '#0a0a0a' : '#0a0a0a30'}`,
              boxShadow: activeTab === i ? '3px 3px 0 #0a0a0a' : 'none',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(i)}>
            {tab}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ type: 'spring', stiffness: 250 }}
          className="grid lg:grid-cols-2 gap-4 mb-6">
          <div className="comic-panel p-4">
            <div className="font-comic text-sm text-[#f59e0b] mb-2">{tabs[activeTab]}</div>
            <p className="text-sm font-bold text-[#0a0a0a]/70 leading-relaxed">{konten[activeTab].teks}</p>
          </div>
          <div className="p-4" style={{ background: '#0d1117', border: '2px solid #30363d' }}>
            <div className="flex gap-1 mb-2">
              {['#ff5f57', '#ffbd2e', '#28c840'].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
            </div>
            <pre className="font-mono text-[9px] text-[#7ee787] leading-relaxed whitespace-pre-wrap">{konten[activeTab].kode}</pre>
            <TeksKetik daftar={['Fetching data...', 'Processing...', 'Done! ✓']} warna="#4ade80" />
          </div>
        </motion.div>
      </AnimatePresence>

      <GridTiga items={[
        { icon: '🔐', judul: 'Auth: JWT vs Session', teks: 'JWT stateless cocok untuk API + mobile. Session lebih aman untuk web-only. Pilih sesuai arsitektur!', warna: '#e63329', bg: '#fef2f2' },
        { icon: '📄', judul: 'API Documentation', teks: 'Swagger/OpenAPI adalah standar. Postman Collections untuk tim. Dokumentasi = act of love ke future-self', warna: '#1a5cff', bg: '#e8f0ff' },
        { icon: '🔄', judul: 'Rate Limiting', teks: 'Proteksi API dari abuse. Laravel Throttle, Nginx limit_req, atau API Gateway untuk skala enterprise', warna: '#22c55e', bg: '#f0fdf4' },
      ]} />
    </PanelBab>
  )
}

/* ══════════════════════════════════════════════
   Ch176 — TIPS MENJADI DEVELOPER PRODUKTIF
══════════════════════════════════════════════ */
function Ch176() {
  const tips = [
    { no: '01', tip: 'Deep Work 90 menit tanpa distraksi', detail: 'Matikan notifikasi. Gunakan Pomodoro atau time-blocking. Otak butuh 20 menit untuk masuk flow state — jangan rusak itu!', icon: '🧠', warna: '#1a5cff' },
    { no: '02', tip: 'Baca error message sampai habis', detail: 'Stack trace adalah peta menuju solusi. 90% developer skip bagian tengah — padahal di sana root cause-nya ada', icon: '🔍', warna: '#e63329' },
    { no: '03', tip: 'Commit kecil, commit sering', detail: '"git commit -m fix" bukan commit yang baik. Tulis pesan yang menjelaskan WHY, bukan WHAT. Future self akan berterima kasih', icon: '📝', warna: '#22c55e' },
    { no: '04', tip: 'Rubber duck debugging', detail: 'Jelaskan masalahmu ke bebek karet (atau kolega, atau Kiro). Proses verbalisasi memaksa otak melihat angle berbeda', icon: '🦆', warna: '#f59e0b' },
    { no: '05', tip: 'Build, don\'t just watch tutorials', detail: 'Tutorial completion rate ≠ learning. Hands-on adalah satu-satunya cara ilmu menjadi otot. Build something, break it, fix it', icon: '⚒️', warna: '#8b5cf6' },
    { no: '06', tip: 'Review kode orang lain aktif', detail: 'Open source contribution adalah gym untuk coding skill. Baca kode Laravel, Next.js internals — itu masterclass gratis', icon: '👀', warna: '#0891b2' },
    { no: '07', tip: 'Dokumentasikan saat fresh', detail: 'Tulis README, inline comment, dan changelog SEKARANG. Besok sudah lupa — dan documentation debt jauh lebih mahal', icon: '📚', warna: '#e63329' },
    { no: '08', tip: 'Rest adalah bagian dari kerja', detail: 'Burnout = productivity minus. Schedule istirahat seperti schedule meeting. Otak yang segar lebih produktif dari yang dipaksa', icon: '😴', warna: '#22c55e' },
  ]

  return (
    <PanelBab id="ch176" num="176" judul="8 TIPS DEVELOPER PRODUKTIF — DARI PENGALAMAN NYATA" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        💡 Tips ini bukan dari buku teori — ini dari jam-jam debug tengah malam, deadline mepet, dan proyek yang akhirnya selesai!
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {tips.map((t, i) => (
          <motion.div key={t.no}
            initial={{ opacity: 0, rotate: i % 2 === 0 ? -1.5 : 1.5, y: 20 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ delay: i * 0.07, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="flex gap-3 p-4"
            style={{ border: `3px solid ${t.warna}`, boxShadow: `4px 4px 0 ${t.warna}`, background: 'white' }}>
            <div className="flex-shrink-0 text-center" style={{ minWidth: 44 }}>
              <motion.div className="text-2xl mb-0.5"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}>
                {t.icon}
              </motion.div>
              <div className="font-comic text-sm" style={{ color: t.warna }}>{t.no}</div>
            </div>
            <div>
              <div className="font-comic text-xs mb-1" style={{ color: t.warna }}>{t.tip}</div>
              <p className="text-[9px] font-bold text-[#0a0a0a]/60 leading-relaxed">{t.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PanelBab>
  )
}

/* ══════════════════════════════════════════════
   Ch177 — DATABASE: FONDASI YANG SERING DIREMEHKAN
══════════════════════════════════════════════ */
function Ch177() {
  return (
    <PanelBab id="ch177" num="177" judul="DATABASE — FONDASI YANG SERING DIREMEHKAN" warna="#e63329" latarBelakang="#fef2f2" gelap>
      <div className="speech-bubble inline-block text-sm mb-6 text-[#0a0a0a]">
        🗄️ Aplikasi boleh error — data tidak boleh hilang. Database adalah jantung sistem, dan schema yang baik adalah segalanya!
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="font-comic text-xl text-yellow-400 mb-3">📊 SQL vs NoSQL</div>
          {[
            {
              nm: 'MySQL / PostgreSQL', tipe: 'SQL Relational',
              cocok: 'E-commerce, ERP, sistem keuangan, apapun yang butuh ACID transaction',
              warna: '#4ade80',
            },
            {
              nm: 'MongoDB', tipe: 'Document NoSQL',
              cocok: 'CMS, katalog produk, data yang struktur-nya sering berubah',
              warna: '#22d3ee',
            },
            {
              nm: 'Redis', tipe: 'In-Memory Cache',
              cocok: 'Session, queue, rate limiting, leaderboard real-time',
              warna: '#f87171',
            },
            {
              nm: 'SQLite', tipe: 'Embedded SQL',
              cocok: 'Mobile app, IoT device, prototyping cepat tanpa setup server',
              warna: '#a78bfa',
            },
          ].map((db, i) => (
            <motion.div key={db.nm}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              viewport={{ once: false }}
              className="p-3"
              style={{ border: `2px solid ${db.warna}`, background: `${db.warna}15` }}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-comic text-sm" style={{ color: db.warna }}>{db.nm}</span>
                <span className="font-mono text-[8px] px-1.5 py-0.5" style={{ background: `${db.warna}30`, color: db.warna }}>{db.tipe}</span>
              </div>
              <p className="text-[9px] text-white/60 font-bold">{db.cocok}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="font-comic text-xl text-yellow-400 mb-3">⚡ TIPS OPTIMASI QUERY</div>
          {[
            { tip: 'Gunakan index pada kolom yang sering di-WHERE/JOIN', level: 'WAJIB', w: '#4ade80' },
            { tip: 'EXPLAIN ANALYZE sebelum deploy query baru ke production', level: 'WAJIB', w: '#4ade80' },
            { tip: 'Hindari N+1 query — gunakan eager loading (with()) di Laravel', level: 'KRITIS', w: '#f87171' },
            { tip: 'Pagination untuk semua endpoint yang return list data', level: 'WAJIB', w: '#4ade80' },
            { tip: 'Jangan SELECT * — pilih kolom yang dibutuhkan saja', level: 'BEST PRACTICE', w: '#fbbf24' },
            { tip: 'Migration versioning — jangan edit migration yang sudah jalan', level: 'KRITIS', w: '#f87171' },
            { tip: 'Backup otomatis terjadwal — tested restore procedure', level: 'SURVIVAL', w: '#f43f5e' },
          ].map((t, i) => (
            <motion.div key={i}
              className="flex gap-2 items-start"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, type: 'spring' }}
              viewport={{ once: false }}>
              <span className="font-comic text-[9px] px-1 flex-shrink-0 mt-0.5"
                style={{ background: `${t.w}30`, color: t.w, border: `1px solid ${t.w}50` }}>
                {t.level}
              </span>
              <p className="text-xs text-white/70 font-bold">{t.tip}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* ══════════════════════════════════════════════
   Ch178 — KEAMANAN APLIKASI WEB: JANGAN DIANGGAP REMEH
══════════════════════════════════════════════ */
function Ch178() {
  const ancaman = [
    { kode: 'SQL Injection', simbol: '💉', solusi: 'Gunakan prepared statements / ORM (Eloquent, Prisma). JANGAN PERNAH string concat untuk query', status: 'KRITIS', w: '#f43f5e' },
    { kode: 'XSS Attack', simbol: '🕷️', solusi: 'Escape output HTML. Content Security Policy header. Sanitize input dengan strip_tags atau DOMPurify', status: 'KRITIS', w: '#f43f5e' },
    { kode: 'CSRF Token', simbol: '🎭', solusi: 'Laravel csrf_token() otomatis. Verifikasi origin header untuk API. SameSite cookie attribute', status: 'WAJIB', w: '#fb923c' },
    { kode: 'Rate Limiting', simbol: '⏱️', solusi: 'Throttle login attempts, API calls. Implementasi di middleware sebelum controller logic', status: 'WAJIB', w: '#fb923c' },
    { kode: 'Exposed Secrets', simbol: '🔑', solusi: 'Gunakan .env, JANGAN commit ke git. Rotate credentials berkala. Audit dengan git-secrets', status: 'KRITIS', w: '#f43f5e' },
    { kode: 'Insecure Direct Object', simbol: '🚪', solusi: 'Validasi kepemilikan resource sebelum akses. Policy-based authorization (Laravel Policy)', status: 'PENTING', w: '#facc15' },
  ]

  return (
    <PanelBab id="ch178" num="178" judul="KEAMANAN APLIKASI WEB — JANGAN PERNAH KOMPROMI" warna="#f43f5e" latarBelakang="#fff1f2">
      <div className="speech-bubble inline-block text-sm mb-6">
        🛡️ Security bukan fitur tambahan — ini adalah layer yang harus ada di setiap baris kode dari hari pertama. Satu celah bisa meruntuhkan kepercayaan yang dibangun bertahun-tahun.
      </div>
      <div className="space-y-3 mb-8">
        {ancaman.map((a, i) => (
          <motion.div key={a.kode}
            initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.09, type: 'spring' }}
            viewport={{ once: false }}
            whileHover={{ x: 4 }}
            className="flex gap-3 p-3"
            style={{ border: `3px solid ${a.w}`, boxShadow: `4px 4px 0 ${a.w}`, background: 'white' }}>
            <motion.div className="text-2xl flex-shrink-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}>
              {a.simbol}
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-comic text-sm" style={{ color: a.w }}>{a.kode}</span>
                <span className="font-bold text-[8px] px-1.5 py-0.5 text-white" style={{ background: a.w }}>{a.status}</span>
              </div>
              <p className="text-xs font-bold text-[#0a0a0a]/65 leading-relaxed">{a.solusi}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="comic-panel-dark p-5 relative overflow-hidden">
        <EfekKilat warna="#f43f5e" />
        <div className="font-comic text-xl text-white mb-3 relative z-10">🔒 SECURITY CHECKLIST DEPLOYMENT</div>
        <div className="grid sm:grid-cols-2 gap-2 relative z-10">
          {[
            'HTTPS everywhere (force redirect)',
            'Environment variables di server, bukan code',
            'Dependency audit (npm audit / composer audit)',
            'Disable debug mode di production',
            'Security headers (Helmet.js / Laravel middleware)',
            'Database user dengan minimum privilege',
            'Log monitoring + alert anomali',
            'Penetration test sebelum go-live besar',
          ].map((c, i) => (
            <motion.div key={i}
              className="flex items-start gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: false }}>
              <motion.span className="text-green-400 flex-shrink-0"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}>✓</motion.span>
              <span className="text-xs font-bold text-white/70">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* ══════════════════════════════════════════════
   Ch179 — KARIR DEVELOPER: ROADMAP MENUJU EXPERT
══════════════════════════════════════════════ */
function Ch179() {
  const fase = [
    {
      level: 'JUNIOR', range: '0–2 thn', warna: '#22c55e', icon: '🌱',
      focus: 'Solid foundation: 1 bahasa, 1 framework, version control, basic deployment',
      skill: ['HTML/CSS/JS basics', 'Framework dasar (Laravel/React)', 'Git workflow', 'Baca dokumentasi'],
    },
    {
      level: 'MID', range: '2–5 thn', warna: '#1a5cff', icon: '⚡',
      focus: 'Sistem thinking: arsitektur, testing, performa, kolaborasi tim',
      skill: ['Design patterns', 'Unit & integration testing', 'CI/CD pipeline', 'Code review skills'],
    },
    {
      level: 'SENIOR', range: '5+ thn', warna: '#f59e0b', icon: '🏆',
      focus: 'Leadership + impact: mentoring, sistem design, cross-team influence',
      skill: ['System design', 'Mentoring junior', 'Tech debt management', 'Estimasi akurat'],
    },
    {
      level: 'STAFF+', range: '8+ thn', warna: '#8b5cf6', icon: '🌟',
      focus: 'Organisasi: platform thinking, principal engineering, tech strategy',
      skill: ['Cross-org impact', 'Platform engineering', 'Tech vision', 'Build sistem, build people'],
    },
  ]

  return (
    <PanelBab id="ch179" num="179" judul="KARIR DEVELOPER — ROADMAP MENUJU EXPERT" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="speech-bubble-right inline-block text-sm mb-6 text-[#0a0a0a]">
        🗺️ Tidak ada satu jalur karir yang benar. Tapi ada level kompetensi yang bisa dijadikan peta perjalanan!
      </div>
      <div className="relative mb-8">
        {/* Garis timeline vertikal */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-500 via-yellow-400 to-purple-500" />
        <div className="space-y-6">
          {fase.map((f, i) => (
            <motion.div key={f.level}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, type: 'spring' }}
              viewport={{ once: false }}
              className="flex gap-4 pl-14 relative">
              {/* Node titik */}
              <motion.div
                className="absolute left-3 top-3 w-7 h-7 flex items-center justify-center text-sm"
                style={{ background: f.warna, border: '3px solid #0a0a0a', zIndex: 2 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}>
                {f.icon}
              </motion.div>
              <div className="flex-1 p-4"
                style={{ border: `3px solid ${f.warna}`, boxShadow: `4px 4px 0 ${f.warna}`, background: 'white' }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-comic text-lg" style={{ color: f.warna }}>{f.level}</span>
                  <span className="font-bold text-[9px] text-white px-1.5 py-0.5" style={{ background: f.warna }}>{f.range}</span>
                </div>
                <p className="text-xs font-bold text-[#0a0a0a]/60 mb-2 leading-relaxed">{f.focus}</p>
                <div className="flex flex-wrap gap-1">
                  {f.skill.map(s => (
                    <span key={s} className="font-bold text-[8px] px-1.5 py-0.5"
                      style={{ background: `${f.warna}18`, border: `1px solid ${f.warna}50`, color: f.warna }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="comic-panel p-5">
        <div className="font-comic text-lg text-[#0a0a0a] mb-3">💡 INSIGHT KARIR YANG JARANG DIAJARKAN</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            '"Technical skill yang bagus membawamu ke pintu. Soft skill yang menentukan kamu masuk atau tidak"',
            '"Gaji developer Indonesia terus naik — tapi skill gap-nya juga makin lebar. Pilih berada di sisi yang benar"',
            '"Specialization pays better than generalization — tapi generalization lebih mudah pivot saat industri berubah"',
            '"Contribution ke open source adalah portfolio yang tidak bisa dipalsukan"',
          ].map((q, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className="p-3"
              style={{ background: '#f8f8f5', border: '2px dashed #0a0a0a30' }}>
              <p className="text-xs font-bold text-[#0a0a0a]/65 italic leading-relaxed">{q}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelBab>
  )
}

/* ══════════════════════════════════════════════
   Ch180 — BERSAMBUNG: CHAPTER TERAKHIR? BELUM!
══════════════════════════════════════════════ */
function Ch180() {
  const [angka, setAngka] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setAngka(n => (n + 1) % 1000), 80)
    return () => clearInterval(t)
  }, [])

  return (
    <PanelBab id="ch180" num="180" judul="BERSAMBUNG — MASIH BANYAK CERITA MENANTI" warna="#ffd700" latarBelakang="#fffbeb" gelap>
      <div className="max-w-3xl mx-auto">
        {/* Animasi counter utama */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120 }}
          viewport={{ once: false }}>
          <motion.div
            className="font-mono text-6xl sm:text-8xl text-yellow-400 mb-2 tabular-nums"
            style={{ textShadow: '4px 4px 0 rgba(255,215,0,0.3)' }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 0.5, repeat: Infinity }}>
            {String(angka).padStart(3, '0')}
          </motion.div>
          <div className="font-comic text-2xl text-white/40">ideas per second</div>
          <div className="font-bold text-sm text-white/30 mt-1">di kepala developer yang tidak pernah berhenti berpikir</div>
        </motion.div>

        {/* Stats chapter */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { n: 180, suf: '', label: 'Chapter Selesai', w: '#ffd700', icon: '📖' },
            { n: 17, suf: '', label: 'GrupBab Dibuat', w: '#4ade80', icon: '📦' },
            { n: 99, suf: '+', label: 'Halaman Cerita', w: '#38bdf8', icon: '📄' },
          ].map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, type: 'spring' }}
              viewport={{ once: false }}
              className="text-center p-4"
              style={{ border: `3px solid ${s.w}`, boxShadow: `4px 4px 0 ${s.w}`, background: '#111' }}>
              <motion.div className="text-2xl mb-1"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}>
                {s.icon}
              </motion.div>
              <div className="font-comic text-3xl" style={{ color: s.w }}>
                <HitungNaik target={s.n} sufiks={s.suf} warna={s.w} />
              </div>
              <div className="text-xs text-white/40 font-bold mt-0.5">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Pesan ke depan */}
        <motion.div
          className="p-6 mb-8 text-center"
          style={{ border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd70055', background: '#111', borderRadius: 12 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}>
          <div className="font-comic text-xl text-yellow-400 mb-3">✍️ TENTANG PERJALANAN INI</div>
          <p className="text-sm font-bold text-white/75 leading-relaxed">
            180 chapter bukan angka yang direncanakan dari awal. Ini adalah bukti bahwa ketika kamu mulai mendokumentasikan
            perjalanan dengan jujur, ceritanya tidak ada habisnya.
          </p>
          <p className="text-sm font-bold text-white/75 leading-relaxed mt-3">
            Setiap chapter adalah satu sisi dari developer yang terus belajar, gagal, bangkit, dan{' '}
            <span className="text-yellow-400">tidak pernah berhenti membangun</span>.
          </p>
          <div className="mt-4 font-comic text-sm text-yellow-400">— Rizki Habibi, Jember, 2026</div>
        </motion.div>

        {/* CTA */}
        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="p-4 text-center"
            style={{ border: '3px solid #22c55e', boxShadow: '4px 4px 0 #22c55e', background: '#111' }}>
            <div className="font-comic text-base text-green-400 mb-2">🤝 KOLABORASI?</div>
            <p className="text-xs text-white/55 font-bold mb-3">Punya ide proyek keren? Mari build bareng!</p>
            <a href="#contact" className="btn-comic text-sm">HUBUNGI SAYA →</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="p-4 text-center"
            style={{ border: '3px solid #1a5cff', boxShadow: '4px 4px 0 #1a5cff', background: '#111' }}>
            <div className="font-comic text-base text-blue-400 mb-2">📄 LIHAT CV</div>
            <p className="text-xs text-white/55 font-bold mb-3">Semua detail pengalaman & pendidikan ada di sini</p>
            <a href="#cv" className="btn-comic-blue text-sm">LIHAT CV →</a>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }} viewport={{ once: false }}>
          <div className="font-comic text-lg text-yellow-400 mb-1">⚡ TO BE CONTINUED...</div>
          <div className="font-comic text-xs text-white/20 tracking-widest">
            --- RIZKI HABIBI · JEMBER · 2026 · CHAPTER 181 COMING SOON ---
          </div>
          <div className="font-comic text-[10px] text-white/15 mt-1">
            Made with ❤️ using Next.js · Tailwind · Framer Motion
          </div>
        </motion.div>
      </div>
    </PanelBab>
  )
}

/* ─────────────────────────────────────────────
   EXPORT UTAMA
───────────────────────────────────────────── */
export default function ChaptersGroup17() {
  return (
    <>
      <div className="comic-divider" />
      <Ch171 /><div className="comic-divider" />
      <Ch172 /><div className="comic-divider" />
      <Ch173 /><div className="comic-divider" />
      <Ch174 /><div className="comic-divider" />
      <Ch175 /><div className="comic-divider" />
      <Ch176 /><div className="comic-divider" />
      <Ch177 /><div className="comic-divider" />
      <Ch178 /><div className="comic-divider" />
      <Ch179 /><div className="comic-divider" />
      <Ch180 />
    </>
  )
}
