'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'

// ─── Tipe ────────────────────────────────────────────────────────────
interface Achievement { id: string; judul: string; deskripsi: string; icon: string; unlocked: boolean }
interface Kota { nama: string; x: number; y: number; warna: string; info: string; achievement: string; emoji: string; r: number }
type Kendaraan = 'mobil' | 'sepeda' | 'pesawat'

// ─── Data Kota Indonesia ──────────────────────────────────────────────
const KOTA: Kota[] = [
  { nama: 'JEMBER', x: 500, y: 380, warna: '#ffd700', info: 'Kota asal Rizki — tempat semua dimulai!', achievement: 'asal', emoji: '🏠', r: 55 },
  { nama: 'SURABAYA', x: 580, y: 300, warna: '#1a5cff', info: 'Kota Pahlawan — pusat bisnis Jawa Timur', achievement: 'surabaya', emoji: '🦈', r: 65 },
  { nama: 'JAKARTA', x: 220, y: 340, warna: '#e63329', info: 'Ibukota Indonesia — pusat startup & tech hub', achievement: 'jakarta', emoji: '🏙️', r: 70 },
  { nama: 'BANDUNG', x: 260, y: 390, warna: '#22c55e', info: 'Kota Kembang — surganya developer & kreatif', achievement: 'bandung', emoji: '🌸', r: 55 },
  { nama: 'YOGYAKARTA', x: 420, y: 360, warna: '#8b5cf6', info: 'Kota Budaya — pusat pendidikan & seni', achievement: 'jogja', emoji: '🎭', r: 55 },
  { nama: 'BALI', x: 640, y: 410, warna: '#f59e0b', info: 'Pulau Dewata — inspirasi & keindahan alam', achievement: 'bali', emoji: '🌺', r: 50 },
  { nama: 'MAKASSAR', x: 780, y: 330, warna: '#0891b2', info: 'Kota Angin — gerbang Indonesia Timur', achievement: 'makassar', emoji: '⛵', r: 55 },
  { nama: 'MEDAN', x: 160, y: 160, warna: '#ec4899', info: 'Kota Beringin — kota terbesar Sumatera', achievement: 'medan', emoji: '🌴', r: 60 },
  { nama: 'GELAR.ID', x: 500, y: 180, warna: '#ffd700', info: 'Platform mimpi Rizki — Kampus Virtual Teknologi 🚀', achievement: 'gelarid', emoji: '🚀', r: 50 },
]

const ACHIEVEMENTS_DEF: Achievement[] = [
  { id: 'start', judul: 'Selamat Datang!', deskripsi: 'Mulai menjelajahi dunia Rizki', icon: '🎮', unlocked: false },
  { id: 'asal', judul: 'Kampung Halaman', deskripsi: 'Kunjungi Jember — kota asal Rizki', icon: '🏠', unlocked: false },
  { id: 'surabaya', judul: 'Kota Pahlawan', deskripsi: 'Jelajahi Surabaya', icon: '🦈', unlocked: false },
  { id: 'jakarta', judul: 'Ibu Kota Tech', deskripsi: 'Tiba di Jakarta', icon: '🏙️', unlocked: false },
  { id: 'bandung', judul: 'Paris van Java', deskripsi: 'Jelajahi Bandung', icon: '🌸', unlocked: false },
  { id: 'jogja', judul: 'Spirit Pendidikan', deskripsi: 'Kunjungi Yogyakarta', icon: '🎭', unlocked: false },
  { id: 'bali', judul: 'Pulau Dewata', deskripsi: 'Tiba di Bali', icon: '🌺', unlocked: false },
  { id: 'makassar', judul: 'Timur Indonesia', deskripsi: 'Jelajahi Makassar', icon: '⛵', unlocked: false },
  { id: 'medan', judul: 'Sumatera Utara', deskripsi: 'Tiba di Medan', icon: '🌴', unlocked: false },
  { id: 'gelarid', judul: 'Mimpi Terbesar', deskripsi: 'Temukan Gelar.id — platform mimpi', icon: '🚀', unlocked: false },
  { id: 'explorer', judul: 'Penjelajah Sejati', deskripsi: 'Kunjungi 5 kota berbeda', icon: '🗺️', unlocked: false },
  { id: 'speed', judul: 'Need for Speed', deskripsi: 'Kendarai pesawat!', icon: '✈️', unlocked: false },
]

// ─── Konversi emoji ke text untuk canvas ────────────────────────────
const EMOJI_MAP: Record<string, string> = {
  '🏠': '⌂', '🦈': '~', '🏙️': '◼', '🌸': '*', '🎭': '♠', '🌺': '✿',
  '⛵': '▲', '🌴': '♣', '🚀': '◆', '🗺️': '◉', '✈️': '↗', '🎮': '▣',
}

const toText = (emoji: string) => EMOJI_MAP[emoji] || '●'

// ─── State kendaraan ──────────────────────────────────────────────────
interface PlayerState {
  x: number; y: number; angle: number
  vx: number; vy: number
  tipe: Kendaraan
}

// ─── Joystick Hook ───────────────────────────────────────────────────
function useJoystick(onInput: (dx: number, dy: number) => void) {
  const baseRef = useRef<HTMLDivElement>(null)
  const knobRef = useRef<HTMLDivElement>(null)
  const active = useRef(false)
  const origin = useRef({ x: 0, y: 0 })
  const MAX = 36

  const move = useCallback((cx: number, cy: number) => {
    const dx = Math.max(-MAX, Math.min(MAX, cx - origin.current.x))
    const dy = Math.max(-MAX, Math.min(MAX, cy - origin.current.y))
    if (knobRef.current) knobRef.current.style.transform = `translate(${dx}px,${dy}px)`
    onInput(dx / MAX, dy / MAX)
  }, [onInput])

  const end = useCallback(() => {
    active.current = false
    if (knobRef.current) knobRef.current.style.transform = 'translate(0,0)'
    onInput(0, 0)
  }, [onInput])

  useEffect(() => {
    const el = baseRef.current
    if (!el) return
    const ts = (e: TouchEvent) => {
      e.preventDefault()
      active.current = true
      const t = e.touches[0]
      origin.current = { x: t.clientX, y: t.clientY }
    }
    const tm = (e: TouchEvent) => {
      e.preventDefault()
      if (active.current) move(e.touches[0].clientX, e.touches[0].clientY)
    }
    const te = (e: TouchEvent) => { e.preventDefault(); end() }
    el.addEventListener('touchstart', ts, { passive: false })
    el.addEventListener('touchmove', tm, { passive: false })
    el.addEventListener('touchend', te, { passive: false })
    return () => {
      el.removeEventListener('touchstart', ts)
      el.removeEventListener('touchmove', tm)
      el.removeEventListener('touchend', te)
    }
  }, [move, end])

  return { baseRef, knobRef }
}

// ─── Komponen utama ───────────────────────────────────────────────────
export default function GameWorld({ kualitas }: { kualitas: 'low' | 'medium' | 'high' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [achievements, setAchievements] = useState<Achievement[]>(ACHIEVEMENTS_DEF)
  const [notif, setNotif] = useState<Achievement | null>(null)
  const [infoKota, setInfoKota] = useState<Kota | null>(null)
  const [menu, setMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // State game — pakai ref agar tidak trigger re-render di gameloop
  const player = useRef<PlayerState>({ x: 500, y: 380, angle: 0, vx: 0, vy: 0, tipe: 'mobil' })
  const tipe = useRef<Kendaraan>('mobil')
  const [tipeState, setTipeState] = useState<Kendaraan>('mobil')
  const keys = useRef({ up: false, down: false, left: false, right: false, space: false })
  const joyInput = useRef({ dx: 0, dy: 0 })
  const animRef = useRef(0)
  const visitedKota = useRef(new Set<string>())
  const cameraRef = useRef({ x: 500, y: 380 })
  const notifTimeout = useRef<ReturnType<typeof setTimeout>>()
  const infoTimeout = useRef<ReturnType<typeof setTimeout>>()
  const [unlocked, setUnlocked] = useState(0)

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)
  }, [])

  const unlockAch = useCallback((id: string) => {
    setAchievements(prev => {
      const a = prev.find(x => x.id === id)
      if (!a || a.unlocked) return prev
      const upd = prev.map(x => x.id === id ? { ...x, unlocked: true } : x)
      setNotif({ ...a, unlocked: true })
      clearTimeout(notifTimeout.current)
      notifTimeout.current = setTimeout(() => setNotif(null), 3000)
      setUnlocked(upd.filter(x => x.unlocked).length)
      const n = upd.filter(x => ['asal', 'surabaya', 'jakarta', 'bandung', 'jogja', 'bali', 'makassar', 'medan'].includes(x.id) && x.unlocked).length
      if (n >= 5) setTimeout(() => unlockAch('explorer'), 400)
      return upd
    })
  }, [])

  // Keyboard
  useEffect(() => {
    unlockAch('start')
    const kd = (e: KeyboardEvent) => {
      if (['w', 'W', 'ArrowUp'].includes(e.key)) keys.current.up = true
      if (['s', 'S', 'ArrowDown'].includes(e.key)) keys.current.down = true
      if (['a', 'A', 'ArrowLeft'].includes(e.key)) keys.current.left = true
      if (['d', 'D', 'ArrowRight'].includes(e.key)) keys.current.right = true
      if (e.key === ' ') keys.current.space = true
      if (e.key === 'Escape') setMenu(m => !m)
    }
    const ku = (e: KeyboardEvent) => {
      if (['w', 'W', 'ArrowUp'].includes(e.key)) keys.current.up = false
      if (['s', 'S', 'ArrowDown'].includes(e.key)) keys.current.down = false
      if (['a', 'A', 'ArrowLeft'].includes(e.key)) keys.current.left = false
      if (['d', 'D', 'ArrowRight'].includes(e.key)) keys.current.right = false
      if (e.key === ' ') keys.current.space = false
    }
    window.addEventListener('keydown', kd)
    window.addEventListener('keyup', ku)
    return () => { window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku) }
  }, [unlockAch])

  const gantiTipe = useCallback((t: Kendaraan) => {
    tipe.current = t
    player.current.tipe = t
    player.current.vx = 0
    player.current.vy = 0
    setTipeState(t)
    if (t === 'pesawat') unlockAch('speed')
  }, [unlockAch])

  // Joystick
  const handleJoy = useCallback((dx: number, dy: number) => {
    joyInput.current = { dx, dy }
  }, [])
  const { baseRef: joyBase, knobRef: joyKnob } = useJoystick(handleJoy)

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const W = () => canvas.width
    const H = () => canvas.height

    // Jalan antar kota
    const JALAN = [
      [500, 380, 580, 300], [500, 380, 420, 360], [500, 380, 640, 410],
      [580, 300, 220, 340], [420, 360, 220, 340], [220, 340, 260, 390],
      [500, 380, 160, 160], [580, 300, 780, 330], [500, 380, 500, 180],
    ]

    let last = 0
    const loop = (ts: number) => {
      const dt = Math.min((ts - last) / 16, 3)
      last = ts
      const p = player.current
      const k = keys.current
      const j = joyInput.current
      const spd = p.tipe === 'pesawat' ? 4.5 : p.tipe === 'sepeda' ? 1.8 : 3.2

      // Input
      const maju = k.up || j.dy < -0.3
      const mundur = k.down || j.dy > 0.3
      const kiri = k.left || j.dx < -0.3
      const kanan = k.right || j.dx > 0.3

      if (kiri) p.angle -= 0.05 * dt
      if (kanan) p.angle += 0.05 * dt
      if (maju) { p.vx += Math.sin(p.angle) * spd * 0.15 * dt; p.vy -= Math.cos(p.angle) * spd * 0.15 * dt }
      if (mundur) { p.vx -= Math.sin(p.angle) * spd * 0.09 * dt; p.vy += Math.cos(p.angle) * spd * 0.09 * dt }

      const damp = 0.88
      p.vx *= damp; p.vy *= damp
      p.x += p.vx; p.y += p.vy

      // Batas peta
      p.x = Math.max(20, Math.min(980, p.x))
      p.y = Math.max(20, Math.min(580, p.y))

      // Kamera smooth
      const cam = cameraRef.current
      cam.x += (p.x - cam.x) * 0.1
      cam.y += (p.y - cam.y) * 0.1

      // Cek kota
      KOTA.forEach(k => {
        const dx = p.x - k.x, dy = p.y - k.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < k.r + 20 && !visitedKota.current.has(k.achievement)) {
          visitedKota.current.add(k.achievement)
          unlockAch(k.achievement)
          setInfoKota(k)
          clearTimeout(infoTimeout.current)
          infoTimeout.current = setTimeout(() => setInfoKota(null), 3500)
        }
      })

      // ─── RENDER ───────────────────────────────────────────────────
      const cw = W(), ch = H()
      // Offset kamera — center
      const ox = cw / 2 - cam.x
      const oy = ch / 2 - cam.y

      // Background
      ctx.fillStyle = '#1a3a0a'
      ctx.fillRect(0, 0, cw, ch)

      // Grid rumput
      ctx.strokeStyle = 'rgba(255,255,255,0.04)'
      ctx.lineWidth = 1
      for (let gx = (ox % 40); gx < cw; gx += 40) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, ch); ctx.stroke() }
      for (let gy = (oy % 40); gy < ch; gy += 40) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(cw, gy); ctx.stroke() }

      // Jalan
      ctx.strokeStyle = '#666'
      ctx.lineWidth = 14
      JALAN.forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath()
        ctx.moveTo(x1 + ox, y1 + oy)
        ctx.lineTo(x2 + ox, y2 + oy)
        ctx.stroke()
      })
      // Garis tengah jalan
      ctx.strokeStyle = 'rgba(255,255,0,0.3)'
      ctx.lineWidth = 2
      ctx.setLineDash([15, 15])
      JALAN.forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath(); ctx.moveTo(x1 + ox, y1 + oy); ctx.lineTo(x2 + ox, y2 + oy); ctx.stroke()
      })
      ctx.setLineDash([])

      // Kota
      KOTA.forEach(kota => {
        const kx = kota.x + ox, ky = kota.y + oy
        const visited = visitedKota.current.has(kota.achievement)

        // Lingkaran kota
        ctx.beginPath()
        ctx.arc(kx, ky, kota.r, 0, Math.PI * 2)
        ctx.fillStyle = kota.warna + (visited ? '55' : '33')
        ctx.fill()
        ctx.strokeStyle = kota.warna
        ctx.lineWidth = visited ? 3 : 2
        ctx.stroke()

        // Bangunan-bangunan kecil
        ctx.fillStyle = kota.warna + 'aa'
          ;[[-20, -15, 10, 18], [-5, -20, 12, 20], [12, -12, 10, 16], [-18, 5, 8, 12], [8, 8, 10, 14]].forEach(([bx, by, bw, bh]) => {
            ctx.fillRect(kx + bx, ky + by, bw, bh)
          })

        // Label
        ctx.fillStyle = kota.warna
        ctx.font = `bold ${Math.max(10, 13 - kota.nama.length * 0.3)}px monospace`
        ctx.textAlign = 'center'
        ctx.fillText(kota.nama, kx, ky + kota.r + 16)

        // Emoji as text
        ctx.font = 'bold 18px serif'
        ctx.fillText(kota.emoji, kx, ky + 7)

        // Tanda dikunjungi
        if (visited) {
          ctx.fillStyle = '#22c55e'
          ctx.beginPath(); ctx.arc(kx + kota.r - 6, ky - kota.r + 6, 8, 0, Math.PI * 2); ctx.fill()
          ctx.fillStyle = 'white'
          ctx.font = 'bold 10px sans-serif'
          ctx.fillText('✓', kx + kota.r - 6, ky - kota.r + 10)
        }
      })

      // Kendaraan (player)
      ctx.save()
      ctx.translate(p.x + ox, p.y + oy)
      ctx.rotate(p.angle)

      const warnaKendaraan = p.tipe === 'pesawat' ? '#c0c0c0' : p.tipe === 'sepeda' ? '#e63329' : '#ffd700'

      if (p.tipe === 'pesawat') {
        // Badan pesawat
        ctx.fillStyle = '#c0c0c0'
        ctx.beginPath(); ctx.ellipse(0, 0, 20, 8, 0, 0, Math.PI * 2); ctx.fill()
        // Sayap
        ctx.fillStyle = '#999'
        ctx.fillRect(-18, -2, 36, 4)
        // Ekor
        ctx.fillStyle = '#aaa'
        ctx.fillRect(-20, -5, 6, 4)
      } else if (p.tipe === 'sepeda') {
        ctx.fillStyle = '#e63329'
        // Roda
        ctx.beginPath(); ctx.arc(-6, 0, 6, 0, Math.PI * 2); ctx.strokeStyle = '#e63329'; ctx.lineWidth = 2; ctx.stroke()
        ctx.beginPath(); ctx.arc(6, 0, 6, 0, Math.PI * 2); ctx.stroke()
        // Frame
        ctx.fillStyle = '#ff6644'; ctx.fillRect(-6, -4, 12, 3)
      } else {
        // Mobil
        ctx.fillStyle = warnaKendaraan
        ctx.fillRect(-12, -7, 24, 14)
        ctx.fillStyle = '#88ccff'
        ctx.fillRect(-8, -6, 10, 5)
        // Roda
        ctx.fillStyle = '#222'
          ;[[-9, -8], [7, -8], [-9, 5], [7, 5]].forEach(([wx, wy]) => {
            ctx.fillRect(wx, wy, 5, 3)
          })
      }

      // Indikator arah
      ctx.fillStyle = warnaKendaraan
      ctx.beginPath(); ctx.moveTo(0, -18); ctx.lineTo(-5, -12); ctx.lineTo(5, -12); ctx.closePath(); ctx.fill()

      ctx.restore()

      // Shadow kendaraan
      ctx.beginPath()
      ctx.ellipse(p.x + ox, p.y + oy + 2, 14, 5, 0, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fill()

      // Mini-map
      if (kualitas !== 'low') {
        const mm = { x: cw - 130, y: 10, w: 120, h: 90, scale: 0.12 }
        ctx.fillStyle = 'rgba(0,0,0,0.7)'
        ctx.fillRect(mm.x, mm.y, mm.w, mm.h)
        ctx.strokeStyle = '#ffd700'; ctx.lineWidth = 1.5
        ctx.strokeRect(mm.x, mm.y, mm.w, mm.h)
        KOTA.forEach(k => {
          const mx = mm.x + k.x * mm.scale + 2, my = mm.y + k.y * mm.scale + 2
          ctx.beginPath(); ctx.arc(mx, my, 4, 0, Math.PI * 2)
          ctx.fillStyle = visitedKota.current.has(k.achievement) ? k.warna : k.warna + '55'; ctx.fill()
        })
        // Player di minimap
        const px = mm.x + p.x * mm.scale + 2, py2 = mm.y + p.y * mm.scale + 2
        ctx.beginPath(); ctx.arc(px, py2, 3, 0, Math.PI * 2)
        ctx.fillStyle = '#fff'; ctx.fill()
        ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = '8px monospace'; ctx.textAlign = 'left'
        ctx.fillText('MAP', mm.x + 3, mm.y + mm.h - 3)
      }

      animRef.current = requestAnimationFrame(loop)
    }

    animRef.current = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [unlockAch])

  const totalUnlocked = achievements.filter(a => a.unlocked).length

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: '#1a3a0a', touchAction: 'none' }}>
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" style={{ touchAction: 'none' }} />

      {/* ── HUD ── */}
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-2 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom,rgba(0,0,0,0.8),transparent)' }}>
        <div className="font-comic text-[#ffd700] text-base">🎮 RIZKI WORLD</div>
        <div className="flex gap-3 text-white/70 text-[10px] font-bold">
          <span>🏆 {totalUnlocked}/{achievements.length}</span>
          <span className="uppercase">{tipeState}</span>
        </div>
      </div>

      {/* Achievement notif */}
      {notif && (
        <div className="absolute top-14 right-3 font-comic pointer-events-none"
          style={{ background: '#0a0a0a', border: '3px solid #ffd700', boxShadow: '4px 4px 0 #ffd700', padding: '10px 14px', maxWidth: 220, zIndex: 30 }}>
          <div className="text-[#ffd700] text-[9px] tracking-widest mb-1">🏆 ACHIEVEMENT UNLOCKED!</div>
          <div className="text-xl mb-0.5">{notif.icon}</div>
          <div className="text-white font-bold text-xs">{notif.judul}</div>
          <div className="text-white/50 text-[10px]">{notif.deskripsi}</div>
        </div>
      )}

      {/* Info kota */}
      {infoKota && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-comic pointer-events-none"
          style={{ background: 'rgba(10,10,10,0.93)', border: `3px solid ${infoKota.warna}`, boxShadow: `6px 6px 0 ${infoKota.warna}`, padding: '14px 20px', maxWidth: 280, zIndex: 25 }}>
          <div className="text-3xl mb-1">{infoKota.emoji}</div>
          <div className="text-lg mb-1" style={{ color: infoKota.warna }}>{infoKota.nama}</div>
          <div className="text-white/80 text-xs leading-relaxed">{infoKota.info}</div>
        </div>
      )}

      {/* ── MOBILE CONTROLS ── */}
      {isMobile && !menu && (
        <>
          {/* Joystick kiri */}
          <div className="absolute pointer-events-auto" style={{ bottom: 24, left: 16 }}>
            <div ref={joyBase} className="relative flex items-center justify-center rounded-full"
              style={{ width: 90, height: 90, background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.3)' }}>
              <div ref={joyKnob} className="absolute rounded-full pointer-events-none"
                style={{ width: 38, height: 38, background: 'rgba(255,215,0,0.8)', border: '2px solid #ffd700' }} />
            </div>
          </div>

          {/* Tombol kanan */}
          <div className="absolute pointer-events-auto flex flex-col gap-2" style={{ bottom: 24, right: 12 }}>
            <button onClick={() => setMenu(true)}
              className="font-comic text-lg rounded flex items-center justify-center"
              style={{ width: 48, height: 48, background: 'rgba(10,10,10,0.8)', border: '1.5px solid rgba(255,255,255,0.3)', color: 'white' }}>
              ☰
            </button>
          </div>

          {/* Pilih kendaraan */}
          <div className="absolute pointer-events-auto flex gap-2" style={{ bottom: 28, left: '50%', transform: 'translateX(-50%)' }}>
            {(['mobil', 'sepeda', 'pesawat'] as const).map(k => (
              <button key={k}
                className="text-2xl rounded flex items-center justify-center"
                style={{ width: 46, height: 46, background: tipeState === k ? '#ffd700' : 'rgba(10,10,10,0.8)', border: `2px solid ${tipeState === k ? '#ffd700' : 'rgba(255,255,255,0.2)'}` }}
                onClick={() => gantiTipe(k)}>
                {k === 'mobil' ? '🚗' : k === 'sepeda' ? '🚲' : '✈️'}
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── DESKTOP CONTROLS ── */}
      {!isMobile && (
        <>
          {/* Indikator WASD */}
          <div className="absolute bottom-4 left-4 pointer-events-none"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,34px)', gridTemplateRows: 'repeat(2,34px)', gap: 3 }}>
            {[{ l: '↑', r: 1, c: 2 }, { l: '←', r: 2, c: 1 }, { l: '↓', r: 2, c: 2 }, { l: '→', r: 2, c: 3 }].map(k => (
              <div key={k.l} className="flex items-center justify-center font-bold text-sm"
                style={{ gridRow: k.r, gridColumn: k.c, background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: 4 }}>
                {k.l}
              </div>
            ))}
          </div>

          {/* Kendaraan desktop */}
          <div className="absolute bottom-4 right-4 flex gap-1.5 pointer-events-auto">
            {(['mobil', 'sepeda', 'pesawat'] as const).map(k => (
              <button key={k} onClick={() => gantiTipe(k)}
                className="flex flex-col items-center gap-0.5 px-2.5 py-2 font-bold text-[10px]"
                style={{ background: tipeState === k ? '#ffd700' : 'rgba(10,10,10,0.8)', color: tipeState === k ? '#0a0a0a' : 'rgba(255,255,255,0.5)', border: `2px solid ${tipeState === k ? '#ffd700' : 'rgba(255,255,255,0.15)'}` }}>
                <span className="text-xl">{k === 'mobil' ? '🚗' : k === 'sepeda' ? '🚲' : '✈️'}</span>
                {k.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="absolute bottom-20 right-4 pointer-events-none text-right opacity-40">
            <div className="text-white/50 text-[9px] font-bold leading-loose">WASD/↑↓←→ Gerak · ESC Menu</div>
          </div>
        </>
      )}

      {/* Achievement dots */}
      <div className="absolute pointer-events-none"
        style={{ bottom: isMobile ? 88 : 16, left: '50%', transform: 'translateX(-50%)' }}>
        <div className="flex gap-1">
          {achievements.map(a => (
            <div key={a.id} title={a.judul}
              style={{ width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, background: a.unlocked ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.4)', border: `1.5px solid ${a.unlocked ? '#ffd700' : 'rgba(255,255,255,0.1)'}`, opacity: a.unlocked ? 1 : 0.3, filter: a.unlocked ? 'none' : 'grayscale(1)', borderRadius: 4 }}>
              {a.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      {menu && (
        <div className="absolute inset-0 flex items-center justify-center z-50"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMenu(false)}>
          <div className="text-center" style={{ background: '#0a0a0a', border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd700', padding: '28px 36px', minWidth: 260 }}
            onClick={e => e.stopPropagation()}>
            <div className="font-comic text-[#ffd700] text-2xl mb-5">⏸ PAUSE</div>
            <div className="space-y-2 mb-5">
              <button onClick={() => setMenu(false)} className="w-full font-comic text-sm py-3 text-[#0a0a0a]"
                style={{ background: '#ffd700', border: '2px solid #0a0a0a' }}>▶ LANJUT</button>
              <Link href="/" className="block w-full font-comic text-sm py-3 text-white/60 hover:text-white text-center"
                style={{ border: '2px solid rgba(255,255,255,0.2)' }}>🏠 Kembali ke Portofolio</Link>
            </div>
            <div className="text-left">
              <div className="font-comic text-white/30 text-[9px] tracking-widest mb-2">ACHIEVEMENT ({totalUnlocked}/{achievements.length})</div>
              <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
                {achievements.map(a => (
                  <div key={a.id} className="flex items-center gap-2 text-[11px]" style={{ opacity: a.unlocked ? 1 : 0.3 }}>
                    <span>{a.icon}</span>
                    <div>
                      <div className={`font-bold ${a.unlocked ? 'text-[#ffd700]' : 'text-white/40'}`}>{a.judul}</div>
                      <div className="text-white/30 text-[9px]">{a.deskripsi}</div>
                    </div>
                    {a.unlocked && <span className="ml-auto text-[#22c55e] text-xs">✓</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-12 left-3 pointer-events-auto">
        <button onClick={() => setMenu(true)} className="font-comic text-[11px] px-2.5 py-1.5 text-white/50 hover:text-white"
          style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>☰</button>
      </div>
    </div>
  )
}
