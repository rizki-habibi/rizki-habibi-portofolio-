'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sky, Stars, Text, Billboard } from '@react-three/drei'
import { Suspense, useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'
import Link from 'next/link'

// ─── Tipe ────────────────────────────────────────────────────────────
interface Achievement {
  id: string; judul: string; deskripsi: string; icon: string; unlocked: boolean
}
interface KotaData {
  nama: string; pos: [number, number, number]; warna: string
  info: string; achievement: string; emoji: string
}
type TipeKendaraan = 'mobil' | 'sepeda' | 'pesawat'
interface InputState { maju: boolean; mundur: boolean; kiri: boolean; kanan: boolean; naik: boolean }

// ─── Data kota Indonesia ──────────────────────────────────────────────
const KOTA: KotaData[] = [
  { nama: 'JEMBER', pos: [0, 0, 0], warna: '#ffd700', info: 'Kota asal Rizki — tempat semua dimulai', achievement: 'asal', emoji: '🏠' },
  { nama: 'SURABAYA', pos: [18, 0, -12], warna: '#1a5cff', info: 'Kota Pahlawan — pusat bisnis Jawa Timur', achievement: 'surabaya', emoji: '🦈' },
  { nama: 'JAKARTA', pos: [-32, 0, -42], warna: '#e63329', info: 'Ibukota — pusat startup & tech hub Indonesia', achievement: 'jakarta', emoji: '🏙️' },
  { nama: 'BANDUNG', pos: [-38, 0, -26], warna: '#22c55e', info: 'Kota Kembang — surganya developer & kreatif', achievement: 'bandung', emoji: '🌸' },
  { nama: 'YOGYAKARTA', pos: [-12, 0, -22], warna: '#8b5cf6', info: 'Kota Budaya — pusat pendidikan & seni', achievement: 'jogja', emoji: '🎭' },
  { nama: 'BALI', pos: [6, 0, 26], warna: '#f59e0b', info: 'Pulau Dewata — inspirasi & keindahan alam', achievement: 'bali', emoji: '🌺' },
  { nama: 'MAKASSAR', pos: [52, 0, 18], warna: '#0891b2', info: 'Kota Angin — gerbang Indonesia Timur', achievement: 'makassar', emoji: '⛵' },
  { nama: 'MEDAN', pos: [-62, 0, -62], warna: '#ec4899', info: 'Kota Beringin — kota terbesar Sumatera', achievement: 'medan', emoji: '🌴' },
  { nama: 'GELAR.ID', pos: [0, 10, -18], warna: '#ffd700', info: 'Platform mimpi Rizki — Kampus Virtual Teknologi', achievement: 'gelarid', emoji: '🚀' },
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
  { id: 'gelarid', judul: 'Mimpi Terbesar', deskripsi: 'Temukan Gelar.id di langit', icon: '🚀', unlocked: false },
  { id: 'explorer', judul: 'Penjelajah Sejati', deskripsi: 'Kunjungi 5 kota berbeda', icon: '🗺️', unlocked: false },
  { id: 'speed', judul: 'Need for Speed', deskripsi: 'Kendarai pesawat!', icon: '✈️', unlocked: false },
]

// ─── Tanah ────────────────────────────────────────────────────────────
function Tanah() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[400, 400]} />
      <meshLambertMaterial color="#2d5016" />
    </mesh>
  )
}

// ─── Jalan ────────────────────────────────────────────────────────────
function Jalan({ dari, ke }: { dari: [number, number]; ke: [number, number] }) {
  const dx = ke[0] - dari[0], dz = ke[1] - dari[1]
  const len = Math.sqrt(dx * dx + dz * dz)
  return (
    <mesh
      position={[(dari[0] + ke[0]) / 2, -0.45, (dari[1] + ke[1]) / 2]}
      rotation={[-Math.PI / 2, 0, Math.atan2(dz, dx)]}
    >
      <planeGeometry args={[len, 3]} />
      <meshLambertMaterial color="#555" />
    </mesh>
  )
}

// ─── Kota ─────────────────────────────────────────────────────────────
function KotaBlok({ kota, onMasuk }: { kota: KotaData; onMasuk: (id: string) => void }) {
  const groupRef = useRef<THREE.Group>(null!)
  const { camera } = useThree()
  const terdeteksi = useRef(false)
  const gedung = [
    { x: -2.5, z: -2.5, h: 10, w: 2 }, { x: 0, z: -3, h: 14, w: 2.5 },
    { x: 2.5, z: -2.5, h: 8, w: 2 }, { x: -2.5, z: 2.5, h: 7, w: 2 },
    { x: 2.5, z: 2.5, h: 11, w: 2 },
  ]

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += 0.005
    const dist = camera.position.distanceTo(new THREE.Vector3(...kota.pos))
    if (dist < 14 && !terdeteksi.current) { terdeteksi.current = true; onMasuk(kota.achievement) }
    else if (dist > 16) terdeteksi.current = false
  })

  return (
    <group ref={groupRef} position={kota.pos}>
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[6, 6, 0.4, 8]} />
        <meshLambertMaterial color={kota.warna + '44'} />
      </mesh>
      {gedung.map((g, i) => (
        <mesh key={i} position={[g.x, g.h / 2 - 0.3, g.z]} castShadow>
          <boxGeometry args={[g.w, g.h, g.w]} />
          <meshLambertMaterial color={kota.warna + 'bb'} />
        </mesh>
      ))}
      <Billboard position={[0, 15, 0]}>
        <Text fontSize={1.8} color={kota.warna} anchorX="center" outlineWidth={0.08} outlineColor="#000">
          {kota.emoji} {kota.nama}
        </Text>
      </Billboard>
      <pointLight position={[0, 8, 0]} color={kota.warna} intensity={25} distance={18} />
    </group>
  )
}

// ─── Kendaraan (movement manual tanpa physics library) ────────────────
function Kendaraan({ tipe, inputRef, onPosisi }: {
  tipe: TipeKendaraan
  inputRef: React.MutableRefObject<InputState>
  onPosisi: (p: THREE.Vector3) => void
}) {
  const meshRef = useRef<THREE.Group>(null!)
  const vel = useRef(new THREE.Vector3())
  const rot = useRef(0) // Y rotation
  const speed = tipe === 'pesawat' ? 0.35 : tipe === 'sepeda' ? 0.12 : 0.22
  const warna = tipe === 'pesawat' ? '#c0c0c0' : tipe === 'sepeda' ? '#e63329' : '#ffd700'

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const inp = inputRef.current
    const dt = Math.min(delta, 0.05)

    if (inp.kiri) rot.current += 1.8 * dt
    if (inp.kanan) rot.current -= 1.8 * dt

    const dir = new THREE.Vector3(-Math.sin(rot.current), 0, -Math.cos(rot.current))
    if (inp.maju) vel.current.addScaledVector(dir, speed)
    if (inp.mundur) vel.current.addScaledVector(dir, -speed * 0.6)

    // Pesawat terbang
    if (tipe === 'pesawat') {
      if (inp.naik) vel.current.y += 0.3 * dt * 10
      else vel.current.y -= 0.15 * dt * 10
    }

    // Damping
    vel.current.multiplyScalar(0.82)
    meshRef.current.position.add(vel.current)
    meshRef.current.rotation.y = rot.current

    // Batas ketinggian
    if (tipe !== 'pesawat' && meshRef.current.position.y < 0) meshRef.current.position.y = 0
    if (tipe === 'pesawat' && meshRef.current.position.y < 0.5) meshRef.current.position.y = 0.5
    if (meshRef.current.position.y > 80) meshRef.current.position.y = 80

    onPosisi(meshRef.current.position.clone())
  })

  return (
    <group ref={meshRef} position={[0, 1, 0]}>
      {/* Badan */}
      <mesh castShadow>
        <boxGeometry args={tipe === 'pesawat' ? [4, 0.8, 8] : tipe === 'sepeda' ? [0.5, 1.2, 2.2] : [2.5, 1, 4.5]} />
        <meshLambertMaterial color={warna} />
      </mesh>
      {/* Detail */}
      {tipe === 'mobil' && (
        <mesh position={[0, 0.8, -0.3]}>
          <boxGeometry args={[2.2, 0.7, 2.2]} />
          <meshLambertMaterial color="#88ccff" transparent opacity={0.7} />
        </mesh>
      )}
      {tipe === 'pesawat' && (
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[14, 0.25, 2.5]} />
          <meshLambertMaterial color="#ddd" />
        </mesh>
      )}
    </group>
  )
}

// ─── Kamera ───────────────────────────────────────────────────────────
function IkutKamera({ targetRef, view }: {
  targetRef: React.MutableRefObject<THREE.Vector3>
  view: 'third' | 'top'
}) {
  const { camera } = useThree()
  useFrame(() => {
    const t = targetRef.current
    const offset = view === 'top' ? new THREE.Vector3(0, 50, 0) : new THREE.Vector3(0, 9, 22)
    camera.position.lerp(t.clone().add(offset), 0.09)
    camera.lookAt(t.clone().add(new THREE.Vector3(0, 2, 0)))
  })
  return null
}

// ─── Pohon ────────────────────────────────────────────────────────────
function Pohon({ pos }: { pos: [number, number, number] }) {
  return (
    <group position={pos}>
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 4, 5]} />
        <meshLambertMaterial color="#6b4226" />
      </mesh>
      <mesh position={[0, 5.5, 0]} castShadow>
        <coneGeometry args={[2.5, 6, 6]} />
        <meshLambertMaterial color="#1a5c1a" />
      </mesh>
    </group>
  )
}

// ─── Joystick (mobile) ────────────────────────────────────────────────
function Joystick({ onInput }: { onInput: (dx: number, dy: number) => void }) {
  const knobRef = useRef<HTMLDivElement>(null)
  const active = useRef(false)
  const startPos = useRef({ x: 0, y: 0 })
  const MAX = 36

  const move = (cx: number, cy: number) => {
    const dx = Math.max(-MAX, Math.min(MAX, cx - startPos.current.x))
    const dy = Math.max(-MAX, Math.min(MAX, cy - startPos.current.y))
    if (knobRef.current) knobRef.current.style.transform = `translate(${dx}px,${dy}px)`
    onInput(dx / MAX, dy / MAX)
  }

  return (
    <div
      className="relative flex items-center justify-center rounded-full select-none touch-none"
      style={{ width: 88, height: 88, background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)' }}
      onTouchStart={e => { e.preventDefault(); active.current = true; const t = e.touches[0]; startPos.current = { x: t.clientX, y: t.clientY } }}
      onTouchMove={e => { e.preventDefault(); if (active.current) move(e.touches[0].clientX, e.touches[0].clientY) }}
      onTouchEnd={() => { active.current = false; if (knobRef.current) knobRef.current.style.transform = 'translate(0,0)'; onInput(0, 0) }}
    >
      <div ref={knobRef} className="absolute rounded-full pointer-events-none"
        style={{ width: 36, height: 36, background: 'rgba(255,215,0,0.8)', border: '2px solid #ffd700', transition: 'transform 0.1s' }} />
    </div>
  )
}

// ─── Tombol touch ─────────────────────────────────────────────────────
function TBtn({ label, color = '#ffd700', onP, onR }: {
  label: string; color?: string; onP: () => void; onR: () => void
}) {
  return (
    <button
      className="flex items-center justify-center font-bold text-xl select-none touch-none rounded"
      style={{ width: 52, height: 52, background: 'rgba(10,10,10,0.7)', border: `2px solid ${color}`, color }}
      onTouchStart={e => { e.preventDefault(); onP() }}
      onTouchEnd={e => { e.preventDefault(); onR() }}
      onMouseDown={onP} onMouseUp={onR} onMouseLeave={onR}
    >{label}</button>
  )
}

// ─── Komponen utama ───────────────────────────────────────────────────
export default function GameWorld({ kualitas }: { kualitas: 'low' | 'medium' | 'high' }) {
  const [achievements, setAchievements] = useState<Achievement[]>(ACHIEVEMENTS_DEF)
  const [notif, setNotif] = useState<Achievement | null>(null)
  const [tipe, setTipe] = useState<TipeKendaraan>('mobil')
  const [view, setView] = useState<'third' | 'top'>('third')
  const [infoKota, setInfoKota] = useState<KotaData | null>(null)
  const [menu, setMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const inputRef = useRef<InputState>({ maju: false, mundur: false, kiri: false, kanan: false, naik: false })
  const [inputVis, setInputVis] = useState<InputState>({ maju: false, mundur: false, kiri: false, kanan: false, naik: false })
  const posRef = useRef(new THREE.Vector3())

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)
    unlockAch('start')

    const set = (k: string, v: boolean) => {
      const n = { ...inputRef.current }
      if (['w', 'W', 'ArrowUp'].includes(k)) n.maju = v
      if (['s', 'S', 'ArrowDown'].includes(k)) n.mundur = v
      if (['a', 'A', 'ArrowLeft'].includes(k)) n.kiri = v
      if (['d', 'D', 'ArrowRight'].includes(k)) n.kanan = v
      if (k === ' ') n.naik = v
      inputRef.current = n
      setInputVis({ ...n })
    }
    const kd = (e: KeyboardEvent) => {
      if (e.key === 'v' || e.key === 'V') setView(v => v === 'third' ? 'top' : 'third')
      if (e.key === 'Escape') setMenu(m => !m)
      set(e.key, true)
    }
    const ku = (e: KeyboardEvent) => set(e.key, false)
    window.addEventListener('keydown', kd)
    window.addEventListener('keyup', ku)
    return () => { window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku) }
  }, []) // eslint-disable-line

  const unlockAch = useCallback((id: string) => {
    setAchievements(prev => {
      const a = prev.find(x => x.id === id)
      if (!a || a.unlocked) return prev
      const upd = prev.map(x => x.id === id ? { ...x, unlocked: true } : x)
      setNotif({ ...a, unlocked: true })
      setTimeout(() => setNotif(null), 3000)
      const n = upd.filter(x => ['asal', 'surabaya', 'jakarta', 'bandung', 'jogja', 'bali', 'makassar', 'medan'].includes(x.id) && x.unlocked).length
      if (n >= 5) setTimeout(() => unlockAch('explorer'), 300)
      return upd
    })
  }, [])

  const handleKota = useCallback((id: string) => {
    unlockAch(id)
    const k = KOTA.find(x => x.achievement === id)
    if (k) { setInfoKota(k); setTimeout(() => setInfoKota(null), 4000) }
  }, [unlockAch])

  const handleJoystick = useCallback((dx: number, dy: number) => {
    const n: InputState = { ...inputRef.current, maju: dy < -0.3, mundur: dy > 0.3, kiri: dx < -0.3, kanan: dx > 0.3 }
    inputRef.current = n
    setInputVis({ ...n })
  }, [])

  const gantiTipe = (t: TipeKendaraan) => {
    setTipe(t)
    if (t === 'pesawat') unlockAch('speed')
  }

  const unlocked = achievements.filter(a => a.unlocked).length

  const POHON_POS: [number, number, number][] = [
    [-20, -0.5, 10], [20, -0.5, 10], [-15, -0.5, 30], [25, -0.5, -15],
    [-25, -0.5, -20], [35, -0.5, 5], [10, -0.5, 40], [-10, -0.5, -35],
  ]

  return (
    <div className="fixed inset-0" style={{ background: '#0a1628', touchAction: 'none' }}>
      <Canvas
        camera={{ position: [0, 9, 22], fov: 65 }}
        gl={{ antialias: kualitas !== 'low', powerPreference: 'high-performance' }}
        style={{ touchAction: 'none' }}
      >
        <Suspense fallback={null}>
          {kualitas !== 'low' && <Stars radius={200} depth={50} count={kualitas === 'high' ? 1500 : 500} factor={4} />}
          <Sky sunPosition={[50, 20, 100]} />
          <ambientLight intensity={0.7} />
          <directionalLight position={[50, 80, 50]} intensity={1.3} />

          <Tanah />
          {/* Laut */}
          <mesh position={[0, -1.5, 90]}>
            <planeGeometry args={[400, 60]} />
            <meshLambertMaterial color="#0a66c2" transparent opacity={0.8} />
          </mesh>
          {/* Jalan */}
          <Jalan dari={[0, 0]} ke={[18, -12]} />
          <Jalan dari={[0, 0]} ke={[-12, -22]} />
          <Jalan dari={[0, 0]} ke={[6, 26]} />
          <Jalan dari={[18, -12]} ke={[-32, -42]} />
          <Jalan dari={[-12, -22]} ke={[-32, -42]} />
          <Jalan dari={[-32, -42]} ke={[-38, -26]} />
          {/* Pohon */}
          {POHON_POS.map((p, i) => <Pohon key={i} pos={p} />)}
          {/* Kota */}
          {KOTA.map(k => <KotaBlok key={k.nama} kota={k} onMasuk={handleKota} />)}
          {/* Kendaraan */}
          <Kendaraan tipe={tipe} inputRef={inputRef} onPosisi={p => { posRef.current = p }} />
          {/* Kamera */}
          <IkutKamera targetRef={posRef} view={view} />
        </Suspense>
      </Canvas>

      {/* ── HUD ── */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-2 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom,rgba(0,0,0,0.75),transparent)' }}>
        <div className="font-comic text-[#ffd700] text-base tracking-wide">🎮 RIZKI WORLD</div>
        <div className="flex gap-3 text-white/60 text-[10px] font-bold">
          <span>🏆 {unlocked}/{achievements.length}</span>
          <span className="capitalize">{tipe}</span>
          <span>{view === 'top' ? 'TOP' : '3RD'}</span>
        </div>
      </div>

      {/* Achievement notif */}
      {notif && (
        <div className="absolute top-14 right-3 font-comic pointer-events-none"
          style={{ background: '#0a0a0a', border: '3px solid #ffd700', boxShadow: '4px 4px 0 #ffd700', padding: '10px 14px', maxWidth: 220, zIndex: 30 }}>
          <div className="text-[#ffd700] text-[9px] tracking-widest mb-1">🏆 ACHIEVEMENT!</div>
          <div className="text-xl mb-0.5">{notif.icon}</div>
          <div className="text-white font-bold text-xs">{notif.judul}</div>
          <div className="text-white/50 text-[10px]">{notif.deskripsi}</div>
        </div>
      )}

      {/* Info kota */}
      {infoKota && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-comic pointer-events-none"
          style={{ background: 'rgba(10,10,10,0.92)', border: `3px solid ${infoKota.warna}`, boxShadow: `6px 6px 0 ${infoKota.warna}`, padding: '14px 20px', maxWidth: 280, zIndex: 25 }}>
          <div className="text-3xl mb-1">{infoKota.emoji}</div>
          <div className="text-lg mb-1" style={{ color: infoKota.warna }}>{infoKota.nama}</div>
          <div className="text-white/70 text-xs">{infoKota.info}</div>
        </div>
      )}

      {/* ── MOBILE CONTROLS ── */}
      {isMobile && !menu && (
        <>
          <div className="absolute pointer-events-auto" style={{ bottom: 20, left: 16 }}>
            <Joystick onInput={handleJoystick} />
          </div>
          <div className="absolute pointer-events-auto flex flex-col gap-2" style={{ bottom: 20, right: 12 }}>
            {tipe === 'pesawat' && (
              <TBtn label="⬆" color="#0891b2"
                onP={() => { inputRef.current = { ...inputRef.current, naik: true }; setInputVis(v => ({ ...v, naik: true })) }}
                onR={() => { inputRef.current = { ...inputRef.current, naik: false }; setInputVis(v => ({ ...v, naik: false })) }}
              />
            )}
            <TBtn label="👁" onP={() => setView(v => v === 'third' ? 'top' : 'third')} onR={() => { }} />
            <TBtn label="☰" onP={() => setMenu(true)} onR={() => { }} />
          </div>
          <div className="absolute pointer-events-auto flex gap-1.5" style={{ bottom: 22, left: '50%', transform: 'translateX(-50%)' }}>
            {(['mobil', 'sepeda', 'pesawat'] as const).map(k => (
              <button key={k} className="text-2xl rounded flex items-center justify-center"
                style={{ width: 46, height: 46, background: tipe === k ? '#ffd700' : 'rgba(10,10,10,0.8)', border: `2px solid ${tipe === k ? '#ffd700' : 'rgba(255,255,255,0.2)'}` }}
                onTouchStart={e => { e.preventDefault(); gantiTipe(k) }}
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
          {/* WASD indicator */}
          <div className="absolute bottom-4 left-4 pointer-events-none"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,34px)', gridTemplateRows: 'repeat(2,34px)', gap: 3 }}>
            {[{ l: '↑', a: inputVis.maju, r: 1, c: 2 }, { l: '←', a: inputVis.kiri, r: 2, c: 1 }, { l: '↓', a: inputVis.mundur, r: 2, c: 2 }, { l: '→', a: inputVis.kanan, r: 2, c: 3 }].map(k => (
              <div key={k.l} className="flex items-center justify-center font-bold text-sm"
                style={{ gridRow: k.r, gridColumn: k.c, background: k.a ? '#ffd700' : 'rgba(255,255,255,0.1)', color: k.a ? '#0a0a0a' : 'rgba(255,255,255,0.4)', border: `2px solid ${k.a ? '#ffd700' : 'rgba(255,255,255,0.15)'}`, borderRadius: 4 }}>
                {k.l}
              </div>
            ))}
          </div>
          {/* Kendaraan */}
          <div className="absolute bottom-4 right-4 flex gap-1.5 pointer-events-auto">
            {(['mobil', 'sepeda', 'pesawat'] as const).map(k => (
              <button key={k} onClick={() => gantiTipe(k)} className="flex flex-col items-center gap-0.5 px-2.5 py-2 font-bold text-[10px]"
                style={{ background: tipe === k ? '#ffd700' : 'rgba(10,10,10,0.8)', color: tipe === k ? '#0a0a0a' : 'rgba(255,255,255,0.5)', border: `2px solid ${tipe === k ? '#ffd700' : 'rgba(255,255,255,0.15)'}` }}>
                <span className="text-xl">{k === 'mobil' ? '🚗' : k === 'sepeda' ? '🚲' : '✈️'}</span>
                {k.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="absolute bottom-20 right-4 text-right pointer-events-none opacity-40">
            <div className="text-white/50 text-[9px] font-bold leading-loose">WASD Gerak · SPACE Naik · V View · ESC Menu</div>
          </div>
        </>
      )}

      {/* Achievement dots */}
      <div className="absolute pointer-events-none"
        style={{ bottom: isMobile ? 88 : 16, left: '50%', transform: 'translateX(-50%)' }}>
        <div className="flex gap-1">
          {achievements.slice(0, 8).map(a => (
            <div key={a.id} className="flex items-center justify-center text-sm"
              style={{ width: 28, height: 28, background: a.unlocked ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.4)', border: `1.5px solid ${a.unlocked ? '#ffd700' : 'rgba(255,255,255,0.1)'}`, opacity: a.unlocked ? 1 : 0.35, filter: a.unlocked ? 'none' : 'grayscale(1)', borderRadius: 4 }}>
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
          <div className="text-center" style={{ background: '#0a0a0a', border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd700', padding: '28px 40px', minWidth: 260 }}
            onClick={e => e.stopPropagation()}>
            <div className="font-comic text-[#ffd700] text-2xl mb-5">⏸ PAUSE</div>
            <div className="space-y-2 mb-5">
              <button onClick={() => setMenu(false)} className="w-full font-comic text-sm py-3 text-[#0a0a0a]"
                style={{ background: '#ffd700', border: '2px solid #0a0a0a' }}>▶ LANJUT</button>
              <Link href="/" className="block w-full font-comic text-sm py-3 text-white/60 hover:text-white text-center"
                style={{ border: '2px solid rgba(255,255,255,0.2)' }}>🏠 Kembali ke Portofolio</Link>
            </div>
            <div className="text-left">
              <div className="font-comic text-white/30 text-[9px] tracking-widest mb-2">ACHIEVEMENT ({unlocked}/{achievements.length})</div>
              <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
                {achievements.map(a => (
                  <div key={a.id} className="flex items-center gap-2 text-[11px]" style={{ opacity: a.unlocked ? 1 : 0.3 }}>
                    <span>{a.icon}</span>
                    <div><div className={`font-bold ${a.unlocked ? 'text-[#ffd700]' : 'text-white/40'}`}>{a.judul}</div>
                      <div className="text-white/30 text-[9px]">{a.deskripsi}</div></div>
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
