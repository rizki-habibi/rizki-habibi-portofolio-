'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiX, FiSettings, FiZap, FiEye, FiEyeOff,
  FiSun, FiMoon, FiMousePointer, FiCamera, FiEdit3, FiCpu,
  FiSend, FiTrash2, FiDownload, FiRefreshCw,
} from 'react-icons/fi'

type CursorEffect = 'default' | 'star' | 'trail'
type Tab = 'settings' | 'draw' | 'photo' | 'ai'

// ─── AI Chat mini ─────────────────────────────────────────────────────
interface Pesan { dari: 'user' | 'ai'; teks: string }

const JAWABAN_AI: Record<string, string> = {
  default: 'Halo! Saya adalah AI asisten mini di portofolio Rizki Habibi. Tanya apa saja tentang Rizki — skill, proyek, visi, atau kontak.',
  rizki: 'Rizki Habibi adalah Full Stack Developer dari Jember, Indonesia. Spesialisasi: Laravel, Next.js, MySQL. BNSP Certified Junior Web Developer 2025.',
  skill: 'Skill utama: Laravel (90%), PHP (85%), Next.js (75%), Tailwind CSS (90%), MySQL (80%), IoT/ESP32. Juga familiar dengan TypeScript dan AI/ML dasar.',
  proyek: 'Proyek aktif: SIMPEG SMAN 2 Jember (live!), Gelar.id (dalam pengembangan). Sebelumnya: sistem K-AMU, Laravel Inventory System.',
  kontak: 'Hubungi Rizki: WA +62 882-009-725-053 | Email rizkihub7@gmail.com | LinkedIn: rizki-habibi | GitHub: rizki-habibi',
  kuliah: 'Rizki sedang mencari beasiswa S2/D1 gratis, dalam atau luar negeri. Bidang: Sistem Informasi, CS, atau Tech related.',
  kerja: 'Rizki terbuka untuk kerja remote/hybrid sebagai Full Stack Developer. Juga open untuk freelance dan part-time sambil mengembangkan Gelar.id.',
  gelar: 'Gelar.id adalah platform pendidikan digital berbasis Vtuber — ekosistem kampus virtual pertama Indonesia. Saat ini dalam tahap beta, target launch 2026.',
}

function cariJawaban(input: string): string {
  const q = input.toLowerCase()
  if (q.includes('rizki') || q.includes('siapa') || q.includes('profil')) return JAWABAN_AI.rizki
  if (q.includes('skill') || q.includes('kemampuan') || q.includes('bisa apa') || q.includes('keahlian')) return JAWABAN_AI.skill
  if (q.includes('proyek') || q.includes('project') || q.includes('simpeg') || q.includes('karya')) return JAWABAN_AI.proyek
  if (q.includes('kontak') || q.includes('hubungi') || q.includes('wa') || q.includes('email')) return JAWABAN_AI.kontak
  if (q.includes('kuliah') || q.includes('beasiswa') || q.includes('s2') || q.includes('pendidikan')) return JAWABAN_AI.kuliah
  if (q.includes('kerja') || q.includes('lowongan') || q.includes('remote') || q.includes('hiring')) return JAWABAN_AI.kerja
  if (q.includes('gelar') || q.includes('kvt') || q.includes('vtuber') || q.includes('platform')) return JAWABAN_AI.gelar
  return JAWABAN_AI.default
}

function TabAI() {
  const [pesan, setPesan] = useState<Pesan[]>([{ dari: 'ai', teks: JAWABAN_AI.default }])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  const kirim = () => {
    if (!input.trim()) return
    const userMsg: Pesan = { dari: 'user', teks: input }
    const aiMsg: Pesan = { dari: 'ai', teks: cariJawaban(input) }
    setPesan(p => [...p, userMsg, aiMsg])
    setInput('')
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {pesan.map((m, i) => (
          <div key={i} className={`flex ${m.dari === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="max-w-[85%] text-xs font-bold leading-relaxed px-3 py-2 rounded"
              style={{
                background: m.dari === 'user' ? '#1a5cff' : 'rgba(255,255,255,0.08)',
                color: m.dari === 'user' ? 'white' : 'rgba(255,255,255,0.8)',
                borderRadius: m.dari === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
              }}
            >
              {m.teks}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="p-2 flex gap-1.5" style={{ borderTop: '1px solid #222' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && kirim()}
          placeholder="Tanya tentang Rizki..."
          className="flex-1 bg-transparent text-white text-xs font-bold outline-none px-2 py-1.5 rounded"
          style={{ border: '1px solid rgba(255,255,255,0.15)', fontSize: 11 }}
        />
        <button onClick={kirim} className="p-1.5 rounded transition-colors hover:bg-[#1a5cff]"
          style={{ background: 'rgba(26,92,255,0.3)' }}>
          <FiSend className="w-3.5 h-3.5 text-white" />
        </button>
      </div>
    </div>
  )
}

// ─── Draw/Sketsa ──────────────────────────────────────────────────────
function TabDraw() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })
  const [warna, setWarna] = useState('#ffd700')
  const [ukuran, setUkuran] = useState(4)
  const [mode, setMode] = useState<'pen' | 'eraser'>('pen')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = '#111'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  const gambar = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!drawing.current) return
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    let cx = 0, cy = 0
    if ('touches' in e) {
      cx = (e.touches[0].clientX - rect.left) * scaleX
      cy = (e.touches[0].clientY - rect.top) * scaleY
    } else {
      cx = (e.clientX - rect.left) * scaleX
      cy = (e.clientY - rect.top) * scaleY
    }
    ctx.beginPath()
    ctx.moveTo(lastPos.current.x, lastPos.current.y)
    ctx.lineTo(cx, cy)
    ctx.strokeStyle = mode === 'eraser' ? '#111' : warna
    ctx.lineWidth = mode === 'eraser' ? ukuran * 4 : ukuran
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke()
    lastPos.current = { x: cx, y: cy }
  }, [warna, ukuran, mode])

  const mulai = (e: React.MouseEvent | React.TouchEvent) => {
    drawing.current = true
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    if ('touches' in e) {
      lastPos.current = { x: (e.touches[0].clientX - rect.left) * scaleX, y: (e.touches[0].clientY - rect.top) * scaleY }
    } else {
      lastPos.current = { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY }
    }
  }

  const unduh = () => {
    const a = document.createElement('a')
    a.download = 'sketsa-rizki-world.png'
    a.href = canvasRef.current!.toDataURL()
    a.click()
  }

  const hapus = () => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = '#111'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  const WARNA_PALET = ['#ffd700', '#1a5cff', '#e63329', '#22c55e', '#8b5cf6', '#f59e0b', '#ffffff', '#0a0a0a']

  return (
    <div className="flex flex-col h-full gap-2 p-2">
      {/* Toolbar */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {WARNA_PALET.map(w => (
          <button key={w} onClick={() => { setWarna(w); setMode('pen') }}
            className="rounded-full transition-transform hover:scale-110"
            style={{ width: 18, height: 18, background: w, border: warna === w && mode === 'pen' ? '2px solid white' : '1px solid rgba(255,255,255,0.3)' }} />
        ))}
        <button onClick={() => setMode(m => m === 'eraser' ? 'pen' : 'eraser')}
          className="px-1.5 py-0.5 rounded text-[9px] font-bold ml-auto"
          style={{ background: mode === 'eraser' ? '#e63329' : 'rgba(255,255,255,0.1)', color: 'white' }}>
          {mode === 'eraser' ? '✏️ Pen' : '⌫ Hapus'}
        </button>
      </div>
      {/* Size */}
      <div className="flex items-center gap-2">
        <span className="text-[9px] text-white/40 font-bold">UKURAN</span>
        <input type="range" min={1} max={20} value={ukuran} onChange={e => setUkuran(+e.target.value)}
          className="flex-1 h-1 accent-yellow-400" />
        <span className="text-[9px] text-white/60 font-bold w-4">{ukuran}</span>
      </div>
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="flex-1 rounded cursor-crosshair"
        style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', touchAction: 'none' }}
        onMouseDown={mulai}
        onMouseMove={gambar}
        onMouseUp={() => { drawing.current = false }}
        onMouseLeave={() => { drawing.current = false }}
        onTouchStart={mulai}
        onTouchMove={gambar}
        onTouchEnd={() => { drawing.current = false }}
      />
      {/* Actions */}
      <div className="flex gap-1.5">
        <button onClick={hapus} className="flex-1 flex items-center justify-center gap-1 py-1.5 text-[10px] font-bold text-red-400 hover:bg-red-900/20 rounded transition-colors"
          style={{ border: '1px solid rgba(255,0,0,0.2)' }}>
          <FiTrash2 className="w-3 h-3" /> Hapus
        </button>
        <button onClick={unduh} className="flex-1 flex items-center justify-center gap-1 py-1.5 text-[10px] font-bold text-green-400 hover:bg-green-900/20 rounded transition-colors"
          style={{ border: '1px solid rgba(0,255,0,0.2)' }}>
          <FiDownload className="w-3 h-3" /> Unduh
        </button>
      </div>
    </div>
  )
}

// ─── Photobooth ───────────────────────────────────────────────────────
function TabPhoto() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [aktif, setAktif] = useState(false)
  const [foto, setFoto] = useState<string | null>(null)
  const [filter, setFilter] = useState('none')
  const streamRef = useRef<MediaStream | null>(null)

  const mulaiKamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
      setAktif(true)
      setFoto(null)
    } catch {
      alert('Tidak bisa akses kamera. Pastikan izin kamera diaktifkan.')
    }
  }

  const hentiKamera = () => {
    streamRef.current?.getTracks().forEach(t => t.stop())
    setAktif(false)
  }

  const ambilFoto = () => {
    const canvas = canvasRef.current!
    const video = videoRef.current!
    canvas.width = video.videoWidth || 320
    canvas.height = video.videoHeight || 240
    const ctx = canvas.getContext('2d')!
    ctx.filter = filter === 'none' ? 'none' :
      filter === 'grayscale' ? 'grayscale(100%)' :
        filter === 'sepia' ? 'sepia(100%)' :
          filter === 'invert' ? 'invert(100%)' :
            'hue-rotate(90deg)'
    ctx.drawImage(video, 0, 0)
    setFoto(canvas.toDataURL('image/jpeg', 0.9))
    hentiKamera()
  }

  const unduh = () => {
    if (!foto) return
    const a = document.createElement('a')
    a.download = `foto-portofolio-rizki-${Date.now()}.jpg`
    a.href = foto
    a.click()
  }

  useEffect(() => () => { streamRef.current?.getTracks().forEach(t => t.stop()) }, [])

  const FILTER_LIST = [
    { val: 'none', label: 'Normal' },
    { val: 'grayscale', label: 'B&W' },
    { val: 'sepia', label: 'Sepia' },
    { val: 'invert', label: 'Invert' },
    { val: 'hue', label: 'Hue' },
  ]

  return (
    <div className="flex flex-col h-full gap-2 p-2">
      {/* Filter bar */}
      <div className="flex gap-1 flex-wrap">
        {FILTER_LIST.map(f => (
          <button key={f.val} onClick={() => setFilter(f.val)}
            className="px-2 py-0.5 rounded text-[9px] font-bold transition-all"
            style={{ background: filter === f.val ? '#1a5cff' : 'rgba(255,255,255,0.08)', color: filter === f.val ? 'white' : 'rgba(255,255,255,0.5)' }}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Preview area */}
      <div className="flex-1 flex items-center justify-center rounded overflow-hidden relative"
        style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', minHeight: 140 }}>
        {foto ? (
          <img src={foto} alt="Foto" className="max-w-full max-h-full object-contain"
            style={{ filter: 'none' }} />
        ) : aktif ? (
          <video ref={videoRef} className="max-w-full max-h-full object-contain"
            style={{ filter: filter === 'none' ? 'none' : filter === 'grayscale' ? 'grayscale(100%)' : filter === 'sepia' ? 'sepia(100%)' : filter === 'invert' ? 'invert(100%)' : 'hue-rotate(90deg)' }}
            muted playsInline />
        ) : (
          <div className="text-center">
            <FiCamera className="w-10 h-10 text-white/20 mx-auto mb-2" />
            <p className="text-[10px] text-white/30 font-bold">Kamera belum aktif</p>
          </div>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      {/* Tombol aksi */}
      <div className="flex gap-1.5">
        {!aktif && !foto && (
          <button onClick={mulaiKamera} className="flex-1 flex items-center justify-center gap-1 py-2 text-[10px] font-bold text-white rounded transition-colors hover:opacity-90"
            style={{ background: '#1a5cff' }}>
            <FiCamera className="w-3.5 h-3.5" /> Buka Kamera
          </button>
        )}
        {aktif && (
          <>
            <button onClick={ambilFoto} className="flex-1 flex items-center justify-center gap-1 py-2 text-[10px] font-bold text-white rounded"
              style={{ background: '#22c55e' }}>
              📸 Ambil Foto
            </button>
            <button onClick={hentiKamera} className="px-3 py-2 text-[10px] font-bold text-red-400 rounded"
              style={{ border: '1px solid rgba(255,0,0,0.3)' }}>
              ✕
            </button>
          </>
        )}
        {foto && (
          <>
            <button onClick={unduh} className="flex-1 flex items-center justify-center gap-1 py-2 text-[10px] font-bold text-green-400 rounded"
              style={{ border: '1px solid rgba(0,255,0,0.2)' }}>
              <FiDownload className="w-3 h-3" /> Unduh
            </button>
            <button onClick={mulaiKamera} className="flex-1 flex items-center justify-center gap-1 py-2 text-[10px] font-bold text-white/60 rounded"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
              <FiRefreshCw className="w-3 h-3" /> Ulang
            </button>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Settings tab ─────────────────────────────────────────────────────
function TabSettings({
  darkMode, toggleDark, animasi, toggleAnimasi, cursorEffect, setCursor,
}: {
  darkMode: boolean; toggleDark: () => void
  animasi: boolean; toggleAnimasi: () => void
  cursorEffect: CursorEffect; setCursor: (t: CursorEffect) => void
}) {
  const groups = [
    {
      label: 'TAMPILAN',
      items: [
        { icon: darkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />, label: darkMode ? 'Mode Terang' : 'Mode Gelap', aktif: darkMode, onClick: toggleDark, warna: '#ffd700' },
        { icon: animasi ? <FiEye className="w-4 h-4" /> : <FiEyeOff className="w-4 h-4" />, label: animasi ? 'Animasi ON' : 'Animasi OFF', aktif: animasi, onClick: toggleAnimasi, warna: '#22c55e' },
      ],
    },
    {
      label: 'KURSOR',
      items: [
        { icon: <FiMousePointer className="w-4 h-4" />, label: 'Default', aktif: cursorEffect === 'default', onClick: () => setCursor('default'), warna: '#aaa' },
        { icon: <span className="text-sm">⭐</span>, label: 'Bintang', aktif: cursorEffect === 'star', onClick: () => setCursor('star'), warna: '#f59e0b' },
        { icon: <FiZap className="w-4 h-4" />, label: 'Trail', aktif: cursorEffect === 'trail', onClick: () => setCursor('trail'), warna: '#8b5cf6' },
      ],
    },
  ]

  return (
    <div className="p-3 space-y-4 overflow-y-auto">
      {groups.map(g => (
        <div key={g.label}>
          <div className="font-bold text-[9px] text-white/30 tracking-widest mb-2">{g.label}</div>
          <div className="space-y-1.5">
            {g.items.map(item => (
              <button key={item.label} onClick={item.onClick}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 font-bold text-xs transition-all hover:opacity-90"
                style={{ background: item.aktif ? item.warna + '22' : 'rgba(255,255,255,0.05)', border: `1.5px solid ${item.aktif ? item.warna : 'rgba(255,255,255,0.1)'}`, color: item.aktif ? item.warna : 'rgba(255,255,255,0.6)', borderRadius: 4 }}>
                <span style={{ color: item.aktif ? item.warna : 'rgba(255,255,255,0.4)' }}>{item.icon}</span>
                {item.label}
                {item.aktif && <span className="ml-auto text-[10px]" style={{ color: item.warna }}>●</span>}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div className="text-[9px] text-white/20 font-bold text-center pt-2">
        Pengaturan tersimpan otomatis
      </div>
    </div>
  )
}

// ─── Komponen utama ───────────────────────────────────────────────────
export default function PanelFitur() {
  const [buka, setBuka] = useState(false)
  const [tab, setTab] = useState<Tab>('settings')
  const [darkMode, setDarkMode] = useState(false)
  const [animasi, setAnimasi] = useState(true)
  const [cursorEffect, setCursorEffect] = useState<CursorEffect>('default')

  useEffect(() => {
    const d = localStorage.getItem('darkMode')
    if (d === 'true') setDarkMode(true)
    const c = localStorage.getItem('cursorEffect') as CursorEffect | null
    if (c) setCursorEffect(c)
  }, [])

  const toggleDark = () => {
    const next = !darkMode; setDarkMode(next); localStorage.setItem('darkMode', String(next))
    if (next) { document.documentElement.classList.add('dark-mode'); document.body.classList.add('dark-mode') }
    else { document.documentElement.classList.remove('dark-mode'); document.body.classList.remove('dark-mode') }
  }

  const toggleAnimasi = () => {
    const next = !animasi; setAnimasi(next)
    if (!next) document.documentElement.style.setProperty('--animation-duration', '0s')
    else document.documentElement.style.removeProperty('--animation-duration')
  }

  const setCursor = (type: CursorEffect) => {
    setCursorEffect(type); localStorage.setItem('cursorEffect', type)
    document.body.style.cursor = type === 'star'
      ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'%3E%3Ctext y=\'24\' font-size=\'24\'%3E⭐%3C/text%3E%3C/svg%3E") 16 16, auto'
      : ''
  }

  const TABS: { id: Tab; icon: React.ReactNode; label: string }[] = [
    { id: 'settings', icon: <FiSettings className="w-4 h-4" />, label: 'Atur' },
    { id: 'ai', icon: <FiCpu className="w-4 h-4" />, label: 'AI' },
    { id: 'draw', icon: <FiEdit3 className="w-4 h-4" />, label: 'Draw' },
    { id: 'photo', icon: <FiCamera className="w-4 h-4" />, label: 'Foto' },
  ]

  return (
    <>
      {/* ── Tombol toggle — kanan tengah, bergeser saat panel buka ── */}
      <motion.button
        onClick={() => setBuka(v => !v)}
        animate={{ right: buka ? 260 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        initial={false}
        className="fixed top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-center justify-center gap-0.5"
        style={{
          background: buka ? '#1a5cff' : '#0a0a0a',
          borderRadius: '8px 0 0 8px',
          padding: '12px 7px',
          border: `2px solid ${buka ? '#1a5cff' : '#444'}`,
          borderRight: 'none',
          boxShadow: '-3px 3px 0 rgba(0,0,0,0.4)',
          writingMode: 'vertical-rl',
          minHeight: 80,
        }}
        title={buka ? 'Tutup panel' : 'Buka fitur unggulan'}
      >
        {buka
          ? <FiX className="w-4 h-4 text-white" style={{ writingMode: 'horizontal-tb' }} />
          : <FiSettings className="w-4 h-4 text-white" style={{ writingMode: 'horizontal-tb' }} />
        }
        <span className="font-comic text-[8px] text-white/60 tracking-widest mt-1">
          {buka ? 'TUTUP' : 'FITUR'}
        </span>
      </motion.button>

      {/* ── Sidebar panel ── */}
      <AnimatePresence>
        {buka && (
          <motion.div
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 z-50 hidden lg:flex flex-col"
            style={{
              width: 260,
              /* Mulai di bawah navbar (56px) agar tidak tertutup */
              top: 56,
              bottom: 0,
              background: '#0d0d0d',
              borderLeft: '3px solid #1a5cff',
              boxShadow: '-12px 0 40px rgba(0,0,0,0.6)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2.5"
              style={{ borderBottom: '2px solid #1a5cff22', background: '#111' }}>
              <div className="flex items-center gap-2">
                <FiSettings className="w-3.5 h-3.5 text-[#1a5cff]" />
                <span className="font-comic text-xs text-white tracking-wider">FITUR UNGGULAN</span>
              </div>
              <button onClick={() => setBuka(false)}
                className="w-6 h-6 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded transition-all">
                <FiX className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Tab bar */}
            <div className="flex" style={{ borderBottom: '1px solid #222' }}>
              {TABS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className="flex-1 flex flex-col items-center gap-0.5 py-2 text-[9px] font-bold transition-all"
                  style={{
                    color: tab === t.id ? '#1a5cff' : 'rgba(255,255,255,0.35)',
                    borderBottom: tab === t.id ? '2px solid #1a5cff' : '2px solid transparent',
                    background: tab === t.id ? 'rgba(26,92,255,0.08)' : 'transparent',
                  }}
                >
                  {t.icon}
                  {t.label}
                </button>
              ))}
            </div>

            {/* Konten tab */}
            <div className="flex-1 overflow-hidden">
              {tab === 'settings' && (
                <TabSettings
                  darkMode={darkMode} toggleDark={toggleDark}
                  animasi={animasi} toggleAnimasi={toggleAnimasi}
                  cursorEffect={cursorEffect} setCursor={setCursor}
                />
              )}
              {tab === 'ai' && <TabAI />}
              {tab === 'draw' && <TabDraw />}
              {tab === 'photo' && <TabPhoto />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
