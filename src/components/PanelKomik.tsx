'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { FiX } from 'react-icons/fi'

/* ---------------------------------------------
   TIPE DATA
--------------------------------------------- */
interface DataPanel {
  num: string
  judul: string
  warnaBg: string
  warnaAksent: string
  konten: React.ReactNode
  cerita: { judul: string; subjudul: string; isi: string[] }
}

/* ---------------------------------------------
   DEKORASI STATIK (CSS murni, tanpa animasi JS)
--------------------------------------------- */
function SpeedLines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[5]"
      style={{ background: 'repeating-linear-gradient(115deg,transparent 0,transparent 18px,rgba(255,255,255,0.12) 19px,transparent 21px)' }}
    />
  )
}

function Halftone() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[5]"
      style={{
        backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.18) 1.5px,transparent 1.5px)',
        backgroundSize: '9px 9px',
      }}
    />
  )
}

/* ---------------------------------------------
   PANEL 01 — HERO PROFILE (satu-satunya panel)
--------------------------------------------- */
const KontenP01 = () => (
  <div className="absolute inset-0 flex overflow-hidden" style={{ background: '#1769ff' }}>
    <SpeedLines />
    {/* Foto */}
    <div className="relative w-[42%] h-full flex-shrink-0">
      <Image src="/foto/komik-profil.png" alt="Rizki Habibi" fill className="object-cover object-top" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,transparent 50%,#1769ff)' }} />
    </div>

    {/* Teks */}
    <div className="flex-1 flex flex-col justify-center px-3 z-10 relative">
      <Halftone />
      <div className="font-comic text-yellow-300 text-[8px] tracking-widest mb-1 relative z-10">
        ★ THE HERO ★
      </div>
      <div
        className="font-comic text-white leading-none mb-1 relative z-10"
        style={{ fontSize: 22, textShadow: '3px 3px 0 #0a0a0a', WebkitTextStroke: '1px #0a0a0a' }}
      >
        RIZKI<br />HABIBI
      </div>
      <div className="text-white/70 text-[7px] font-bold mb-1.5 leading-tight relative z-10">
        Full-Stack Dev  IoT  AI/ML<br />
        <span className="text-yellow-300">BNSP Certified ✓</span>
      </div>
      <div className="flex flex-wrap gap-1 mb-1.5 relative z-10">
        {['Laravel', 'Next.js', 'IoT', 'AI'].map(t => (
          <span key={t} className="font-bold text-[7px] px-1.5 py-0.5 bg-yellow-300 text-black">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-1 relative z-10">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-green-300 text-[7px] font-bold">AVAILABLE FOR WORK</span>
      </div>
    </div>
  </div>
)

/* ---------------------------------------------
   DATA — hanya panel 01
--------------------------------------------- */
const dataPanels: DataPanel[] = [
  {
    num: '01',
    judul: 'THE HERO',
    warnaBg: '#1769ff',
    warnaAksent: '#ffd21c',
    konten: <KontenP01 />,
    cerita: {
      judul: 'RIZKI HABIBI',
      subjudul: 'Full-Stack Developer',
      isi: ['BNSP Certified', 'Laravel  Next.js  IoT  AI/ML', 'Based in Jember, Indonesia', 'Available for Work 🟢'],
    },
  },
]

/* ---------------------------------------------
   MODAL CERITA
--------------------------------------------- */
function ModalCerita({ panel, tutup }: { panel: DataPanel; tutup: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.85)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={tutup}
      >
        <motion.div
          className="relative w-full max-w-md"
          style={{
            border: `4px solid ${panel.warnaAksent}`,
            boxShadow: `8px 8px 0 ${panel.warnaAksent}`,
            background: '#0a0a0a',
          }}
          initial={{ scale: 0.8, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-2"
            style={{ background: panel.warnaAksent, borderBottom: `3px solid ${panel.warnaAksent}` }}
          >
            <div className="flex items-center gap-2">
              <span className="font-comic text-2xl text-black">#{panel.num}</span>
              <span className="font-comic text-sm text-black">{panel.judul}</span>
            </div>
            <button onClick={tutup} className="p-1 hover:scale-125 transition-transform" aria-label="Tutup">
              <FiX className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Konten */}
          <div className="p-5">
            <div className="font-comic text-2xl mb-1" style={{ color: panel.warnaAksent }}>
              {panel.cerita.judul}
            </div>
            <div className="font-bold text-sm text-white/50 mb-3">{panel.cerita.subjudul}</div>
            <div className="space-y-2">
              {panel.cerita.isi.map((baris, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span style={{ color: panel.warnaAksent }}>▶</span>
                  <span className="text-sm font-bold text-white/80">{baris}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-2 px-4 pb-4">
            <motion.button
              onClick={tutup}
              className="flex-1 py-2 font-comic text-sm text-black"
              style={{ background: panel.warnaAksent, border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
              whileHover={{ y: -2 }}
              whileTap={{ y: 2 }}
            >
              CLOSE ✕
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ---------------------------------------------
   PANEL TUNGGAL
--------------------------------------------- */
function PanelTunggal({ panel, onKlik }: { panel: DataPanel; onKlik: () => void }) {
  const [hover, setHover] = useState(false)
  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer select-none"
      style={{
        border: '3px solid #0a0a0a',
        boxShadow: hover ? `6px 6px 0 ${panel.warnaAksent}` : '4px 4px 0 #0a0a0a',
        minHeight: 240,
        background: panel.warnaBg,
        transition: 'box-shadow 0.15s ease',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 180 }}
      whileHover={{ scale: 1.01 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onClick={onKlik}
    >
      {panel.konten}

      {/* Nomor panel */}
      <div
        className="absolute top-1 left-1 z-20 font-comic text-[8px] px-1"
        style={{ background: panel.warnaAksent, color: '#0a0a0a', lineHeight: 1.4 }}
      >
        {panel.num}
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        style={{ background: `${panel.warnaAksent}dd` }}
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-center">
          <div className="font-comic text-[#0a0a0a] text-base mb-1">{panel.judul}</div>
          <div className="font-bold text-[10px] text-[#0a0a0a]/60">TAP TO READ ▶</div>
        </div>
      </motion.div>

      {/* Sound effect saat hover */}
      <AnimatePresence>
        {hover && (
          <motion.div
            className="absolute top-2 right-2 z-30 font-comic text-[9px]"
            style={{ color: panel.warnaAksent === '#ffd21c' ? '#0a0a0a' : panel.warnaAksent }}
            initial={{ opacity: 0, scale: 0, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            POW!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ---------------------------------------------
   KOMPONEN UTAMA
--------------------------------------------- */
export default function PanelKomik() {
  const [panelAktif, setPanelAktif] = useState<DataPanel | null>(null)

  return (
    <section id="panel-komik" className="py-16 px-3 sm:px-4 relative overflow-hidden" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg absolute inset-0" />
      <div className="max-w-lg mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="font-comic text-4xl sm:text-5xl text-[#0a0a0a] mb-2" style={{ WebkitTextStroke: '2px #0a0a0a' }}>
            COMIC PROFILE
          </div>
          <div className="speech-bubble inline-block text-sm">
            Klik panel untuk baca cerita! 🎬
          </div>
        </motion.div>

        {/* Satu panel */}
        <PanelTunggal panel={dataPanels[0]} onKlik={() => setPanelAktif(dataPanels[0])} />
      </div>

      {panelAktif && <ModalCerita panel={panelAktif} tutup={() => setPanelAktif(null)} />}
    </section>
  )
}
