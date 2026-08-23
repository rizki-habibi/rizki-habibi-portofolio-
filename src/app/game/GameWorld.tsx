'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sky, Stars, Text, Billboard } from '@react-three/drei'
import { Physics, usePlane, useBox } from '@react-three/cannon'
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

// ─── Peta Indonesia ───────────────────────────────────────────────────
const KOTA_INDONESIA: KotaData[] = [
  { nama: 'JEMBER', pos: [0, 0, 0], warna: '#ffd700', info: 'Kota asal Rizki Habibi — tempat semua dimulai', achievement: 'asal', emoji: '🏠' },
  { nama: 'SURABAYA', pos: [15, 0, -10], warna: '#1a5cff', info: 'Kota pahlawan — pusat bisnis & teknologi Jatim', achievement: 'surabaya', emoji: '🦈' },
  { nama: 'JAKARTA', pos: [-30, 0, -40], warna: '#e63329', info: 'Ibukota Indonesia — pusat startup & tech hub', achievement: 'jakarta', emoji: '🏙️' },
  { nama: 'BANDUNG', pos: [-35, 0, -25], warna: '#22c55e', info: 'Kota kembang — surganya developer & kreatif', achievement: 'bandung', emoji: '🌸' },
  { nama: 'YOGYAKARTA', pos: [-10, 0, -20], warna: '#8b5cf6', info: 'Kota budaya — pusat pendidikan & seni', achievement: 'jogja', emoji: '🎭' },
  { nama: 'BALI', pos: [5, 0, 25], warna: '#f59e0b', info: 'Pulau dewata — inspirasi & keindahan alam', achievement: 'bali', emoji: '🌺' },
  { nama: 'MAKASSAR', pos: [50, 0, 20], warna: '#0891b2', info: 'Kota angin — gerbang Indonesia Timur', achievement: 'makassar', emoji: '⛵' },
  { nama: 'MEDAN', pos: [-60, 0, -60], warna: '#ec4899', info: 'Kota beringin — kota terbesar Sumatera', achievement: 'medan', emoji: '🌴' },
  { nama: 'GELAR.ID', pos: [0, 8, -15], warna: '#ffd700', info: 'Platform mimpi Rizki — Kampus Virtual Teknologi', achievement: 'gelarid', emoji: '🚀' },
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
  const [ref] = usePlane<THREE.Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0],
  }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[300, 300]} />
      <meshLambertMaterial color="#2d5016" />
    </mesh>
  )
}

// ─── Jalan ────────────────────────────────────────────────────────────
function Jalan({ dari, ke }: { dari: [number, number]; ke: [number, number] }) {
  const dx = ke[0] - dari[0], dz = ke[1] - dari[1]
  const len = Math.sqrt(dx * dx + dz * dz)
  const cx = (dari[0] + ke[0]) / 2, cz = (dari[1] + ke[1]) / 2
  return (
    <mesh position={[cx, -0.45, cz]} rotation={[-Math.PI / 2, 0, Math.atan2(dz, dx)]} receiveShadow>
      <planeGeometry args={[len, 2.5]} />
      <meshLambertMaterial color="#555" />
    </mesh>
  )
}

// ─── Kota ─────────────────────────────────────────────────────────────
function KotaBlok({ kota, onMasuk }: { kota: KotaData; onMasuk: (id: string) => void }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { camera } = useThree()
  const terdeteksi = useRef(false)

  // Data gedung statis (tidak pakai Math.random saat render)
  const gedungData = useRef([
    { x: -2.5, z: -2.5, h: 10, w: 2 },
    { x: 0, z: -3, h: 14, w: 2.5 },
    { x: 2.5, z: -2.5, h: 8, w: 2 },
    { x: -2.5, z: 2.5, h: 7, w: 2 },
    { x: 2.5, z: 2.5, h: 11, w: 2 },
  ])

  useFrame(() => {
    if (!meshRef.current) return
    const dist = camera.position.distanceTo(new THREE.Vector3(...kota.pos))
    if (dist < 12 && !terdeteksi.current) { terdeteksi.current = true; onMasuk(kota.achievement) }
    else if (dist > 14) { terdeteksi.current = false }
    meshRef.current.rotation.y += 0.008
  })

  return (
    <group position={kota.pos}>
      <mesh ref={meshRef} position={[0, -0.3, 0]}>
        <cylinderGeometry args={[6, 6, 0.4, 8]} />
        <meshLambertMaterial color={kota.warna + '44'} />
      </mesh>
      {gedungData.current.map((g, i) => (
        <mesh key={i} position={[g.x, g.h / 2 - 0.3, g.z]} castShadow>
          <boxGeometry args={[g.w, g.h, g.w]} />
          <meshLambertMaterial color={kota.warna + 'cc'} />
        </mesh>
      ))}
      <Billboard position={[0, 14, 0]}>
        <Text fontSize={1.8} color={kota.warna} anchorX="center" anchorY="middle" outlineWidth={0.08} outlineColor="#000">
          {kota.emoji} {kota.nama}
        </Text>
      </Billboard>
      <pointLight position={[0, 8, 0]} color={kota.warna} intensity={30} distance={20} />
    </group>
  )
}

// ─── Kendaraan ────────────────────────────────────────────────────────
function Kendaraan({ tipe, input, onPosisi }: {
  tipe: TipeKendaraan
  input: InputState
  onPosisi: (pos: THREE.Vector3) => void
}) {
  const kecepatan = tipe === 'pesawat' ? 28 : tipe === 'sepeda' ? 10 : 18
  const warna = tipe === 'pesawat' ? '#c0c0c0' : tipe === 'sepeda' ? '#e63329' : '#ffd700'
  const args: [number, number, number] = tipe === 'pesawat' ? [4, 0.8, 8] : tipe === 'sepeda' ? [0.5, 1.2, 2] : [2.5, 1, 4.5]

  const [ref, api] = useBox<THREE.Mesh>(() => ({
    mass: 1,
    position: [0, 2, 0],
    args,
    linearDamping: tipe === 'pesawat' ? 0.15 : 0.65,
    angularDamping: 0.95,
  }))

  const pos = useRef([0, 2, 0])
  const rot = useRef([0, 0, 0, 1])
  const inputRef = useRef(input)
  inputRef.current = input

  useEffect(() => {
    const unsubPos = api.position.subscribe(p => {
      pos.current = p
      onPosisi(new THREE.Vector3(p[0], p[1], p[2]))
    })
    const unsubRot = api.quaternion.subscribe(q => { rot.current = q })
    return () => { unsubPos(); unsubRot() }
  }, [api, onPosisi])

  useFrame(() => {
    const inp = inputRef.current
    const q = new THREE.Quaternion(rot.current[0], rot.current[1], rot.current[2], rot.current[3])
    const arah = new THREE.Vector3(0, 0, -1).applyQuaternion(q)

    if (inp.maju) api.applyImpulse([arah.x * kecepatan, arah.y * kecepatan * (tipe === 'pesawat' ? 1 : 0), arah.z * kecepatan], [0, 0, 0])
    if (inp.mundur) api.applyImpulse([-arah.x * kecepatan * 0.6, 0, -arah.z * kecepatan * 0.6], [0, 0, 0])
    if (inp.kiri) api.applyTorque([0, 6, 0])
    if (inp.kanan) api.applyTorque([0, -6, 0])
    if (tipe === 'pesawat') {
      if (inp.naik) api.applyImpulse([0, 22, 0], [0, 0, 0])
      else api.applyForce([0, -6, 0], [0, 0, 0])
    }
    if (pos.current[1] < -5) api.position.set(pos.current[0], 2, pos.current[2])
  })

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={args} />
      <meshLambertMaterial color={warna} />
      {tipe === 'pesawat' && (
        <mesh>
          <boxGeometry args={[14, 0.2, 2.5]} />
          <meshLambertMaterial color="#ddd" />
        </mesh>
      )}
    </mesh>
  )
}

// ─── Kamera ───────────────────────────────────────────────────────────
function IkutKamera({ target, view }: { target: THREE.Vector3; view: 'third' | 'top' }) {
  const { camera } = useThree()
  useFrame(() => {
    const offset = view === 'top' ? new THREE.Vector3(0, 45, 0) : new THREE.Vector3(0, 8, 20)
    camera.position.lerp(target.clone().add(offset), 0.08)
    camera.lookAt(target.clone().add(new THREE.Vector3(0, 2, 0)))
  })
  return null
}

// ─── Pohon ────────────────────────────────────────────────────────────
function Pohon({ pos }: { pos: [number, number, number] }) {
  return (
    <group position={pos}>
      <mesh position={[0, 2, 0]}><cylinderGeometry args={[0.2, 0.3, 4, 5]} /><meshLambertMaterial color="#6b4226" /></mesh>
      <mesh position={[0, 5.5, 0]}><coneGeometry args={[2.5, 6, 6]} /><meshLambertMaterial color="#1a5c1a" /></mesh>
    </group>
  )
}

// ─── Joystick touch (mobile) ─────────────────────────────────────────
function Joystick({ onInput }: { onInput: (dx: number, dy: number) => void }) {
  const baseRef = useRef<HTMLDivElement>(null)
  const knobRef = useRef<HTMLDivElement>(null)
  const active = useRef(false)
  const startPos = useRef({ x: 0, y: 0 })
  const SIZE = 80, KNOB = 32, MAX = 32

  const move = (cx: number, cy: number) => {
    const dx = Math.max(-MAX, Math.min(MAX, cx - startPos.current.x))
    const dy = Math.max(-MAX, Math.min(MAX, cy - startPos.current.y))
    if (knobRef.current) {
      knobRef.current.style.transform = `translate(${dx}px, ${dy}px)`
    }
    onInput(dx / MAX, dy / MAX)
  }

  const start = (cx: number, cy: number) => {
    active.current = true
    startPos.current = { x: cx, y: cy }
  }

  const end = () => {
    active.current = false
    if (knobRef.current) knobRef.current.style.transform = 'translate(0,0)'
    onInput(0, 0)
  }

  return (
    <div
      ref={baseRef}
      className="relative flex items-center justify-center rounded-full select-none touch-none"
      style={{ width: SIZE, height: SIZE, background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)' }}
      onTouchStart={e => { e.preventDefault(); const t = e.touches[0]; start(t.clientX, t.clientY) }}
      onTouchMove={e => { e.preventDefault(); if (active.current) { const t = e.touches[0]; move(t.clientX, t.clientY) } }}
      onTouchEnd={() => end()}
    >
      <div
        ref={knobRef}
        className="absolute rounded-full"
        style={{ width: KNOB, height: KNOB, background: 'rgba(255,215,0,0.7)', border: '2px solid #ffd700', transition: active.current ? 'none' : 'transform 0.15s' }}
      />
    </div>
  )
}

// ─── Tombol touch ─────────────────────────────────────────────────────
function TombolTouch({ label, aktif, onPress, onRelease, warna = '#ffd700' }: {
  label: string; aktif?: boolean; onPress: () => void; onRelease: () => void; warna?: string
}) {
  return (
    <button
      className="flex items-center justify-center font-bold text-lg select-none touch-none"
      style={{
        width: 52, height: 52,
        background: aktif ? warna : 'rgba(255,255,255,0.1)',
        color: aktif ? '#0a0a0a' : 'rgba(255,255,255,0.7)',
        border: `2px solid ${aktif ? warna : 'rgba(255,255,255,0.3)'}`,
        borderRadius: 8,
      }}
      onTouchStart={e => { e.preventDefault(); onPress() }}
      onTouchEnd={e => { e.preventDefault(); onRelease() }}
      onMouseDown={onPress}
      onMouseUp={onRelease}
      onMouseLeave={onRelease}
    >
      {label}
    </button>
  )
}

// ─── GameWorld utama ──────────────────────────────────────────────────
export default function GameWorld({ kualitas }: { kualitas: 'low' | 'medium' | 'high' }) {
  const [achievements, setAchievements] = useState<Achievement[]>(ACHIEVEMENTS_DEF)
  const [notifAch, setNotifAch] = useState<Achievement | null>(null)
  const [tipeKendaraan, setTipeKendaraan] = useState<TipeKendaraan>('mobil')
  const [posKendaraan, setPosKendaraan] = useState(() => new THREE.Vector3())
  const [view, setView] = useState<'third' | 'top'>('third')
  const [infoKota, setInfoKota] = useState<KotaData | null>(null)
  const [menuTerbuka, setMenuTerbuka] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const inputRef = useRef<InputState>({ maju: false, mundur: false, kiri: false, kanan: false, naik: false })
  const [inputState, setInputState] = useState<InputState>({ maju: false, mundur: false, kiri: false, kanan: false, naik: false })

  // Deteksi mobile
  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)
  }, [])

  // Keyboard (desktop)
  useEffect(() => {
    unlockAch('start')
    const setKey = (key: string, val: boolean) => {
      const baru = { ...inputRef.current }
      if (['w', 'W', 'ArrowUp'].includes(key)) baru.maju = val
      if (['s', 'S', 'ArrowDown'].includes(key)) baru.mundur = val
      if (['a', 'A', 'ArrowLeft'].includes(key)) baru.kiri = val
      if (['d', 'D', 'ArrowRight'].includes(key)) baru.kanan = val
      if (key === ' ') baru.naik = val
      inputRef.current = baru
      setInputState({ ...baru })
    }
    const down = (e: KeyboardEvent) => {
      if (e.key === 'v' || e.key === 'V') setView(v => v === 'third' ? 'top' : 'third')
      if (e.key === 'Escape') setMenuTerbuka(m => !m)
      setKey(e.key, true)
    }
    const up = (e: KeyboardEvent) => setKey(e.key, false)
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up) }
  }, []) // eslint-disable-line

  const unlockAch = useCallback((id: string) => {
    setAchievements(prev => {
      const ach = prev.find(a => a.id === id)
      if (!ach || ach.unlocked) return prev
      const updated = prev.map(a => a.id === id ? { ...a, unlocked: true } : a)
      setNotifAch({ ...ach, unlocked: true })
      setTimeout(() => setNotifAch(null), 3000)
      const kotaCount = updated.filter(a => ['asal', 'surabaya', 'jakarta', 'bandung', 'jogja', 'bali', 'makassar', 'medan'].includes(a.id) && a.unlocked).length
      if (kotaCount >= 5) setTimeout(() => unlockAch('explorer'), 400)
      return updated
    })
  }, [])

  const handleKotaMasuk = useCallback((id: string) => {
    unlockAch(id)
    const kota = KOTA_INDONESIA.find(k => k.achievement === id)
    if (kota) { setInfoKota(kota); setTimeout(() => setInfoKota(null), 4000) }
  }, [unlockAch])

  // Joystick input → InputState
  const handleJoystick = useCallback((dx: number, dy: number) => {
    const baru: InputState = {
      maju: dy < -0.3,
      mundur: dy > 0.3,
      kiri: dx < -0.3,
      kanan: dx > 0.3,
      naik: inputRef.current.naik,
    }
    inputRef.current = baru
    setInputState({ ...baru })
  }, [])

  const setNaik = useCallback((v: boolean) => {
    inputRef.current = { ...inputRef.current, naik: v }
    setInputState(s => ({ ...s, naik: v }))
  }, [])

  const jumlahUnlocked = achievements.filter(a => a.unlocked).length

  const POHON_POS: [number, number, number][] = [
    [-20, -0.5, 10], [20, -0.5, 10], [-15, -0.5, 30], [25, -0.5, -15],
    [-25, -0.5, -20], [35, -0.5, 5], [10, -0.5, 40], [-10, -0.5, -35],
  ]

  return (
    <div className="fixed inset-0" style={{ background: '#0a1628', touchAction: 'none' }}>
      {/* Canvas */}
      <Canvas
        shadows={kualitas === 'high'}
        camera={{ position: [0, 8, 20], fov: 65 }}
        gl={{ antialias: kualitas !== 'low', powerPreference: 'high-performance' }}
        style={{ touchAction: 'none' }}
      >
        <Suspense fallback={null}>
          {kualitas !== 'low' && <Stars radius={200} depth={50} count={kualitas === 'high' ? 2000 : 600} factor={4} />}
          <Sky sunPosition={[50, 20, 100]} />
          <ambientLight intensity={0.7} />
          <directionalLight position={[50, 80, 50]} intensity={1.4} castShadow={kualitas === 'high'} />

          <Physics gravity={[0, -20, 0]} broadphase="SAP">
            <Tanah />
            {/* Laut */}
            <mesh position={[0, -1.5, 80]}>
              <planeGeometry args={[300, 60]} />
              <meshLambertMaterial color="#0a66c2" transparent opacity={0.8} />
            </mesh>
            {/* Jalan */}
            <Jalan dari={[0, 0]} ke={[15, -10]} />
            <Jalan dari={[0, 0]} ke={[-10, -20]} />
            <Jalan dari={[0, 0]} ke={[5, 25]} />
            <Jalan dari={[15, -10]} ke={[-30, -40]} />
            <Jalan dari={[-10, -20]} ke={[-30, -40]} />
            <Jalan dari={[-30, -40]} ke={[-35, -25]} />
            {/* Pohon */}
            {POHON_POS.map((p, i) => <Pohon key={i} pos={p} />)}
            {/* Kota */}
            {KOTA_INDONESIA.map(k => <KotaBlok key={k.nama} kota={k} onMasuk={handleKotaMasuk} />)}
            {/* Kendaraan */}
            <Kendaraan tipe={tipeKendaraan} input={inputState} onPosisi={setPosKendaraan} />
          </Physics>

          <IkutKamera target={posKendaraan} view={view} />
        </Suspense>
      </Canvas>

      {/* ── HUD ── */}

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-2 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom,rgba(0,0,0,0.75),transparent)' }}>
        <div className="font-comic text-[#ffd700] text-base">🎮 RIZKI WORLD</div>
        <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold">
          <span>🏆 {jumlahUnlocked}/{achievements.length}</span>
          <span className="capitalize">{tipeKendaraan}</span>
        </div>
      </div>

      {/* Achievement notification */}
      {notifAch && (
        <div className="absolute top-14 right-3 font-comic text-sm pointer-events-none"
          style={{ background: '#0a0a0a', border: '3px solid #ffd700', boxShadow: '4px 4px 0 #ffd700', padding: '10px 14px', maxWidth: 220 }}>
          <div className="text-[#ffd700] text-[9px] tracking-widest mb-1">🏆 ACHIEVEMENT!</div>
          <div className="text-xl mb-0.5">{notifAch.icon}</div>
          <div className="text-white font-bold text-xs">{notifAch.judul}</div>
          <div className="text-white/50 text-[10px]">{notifAch.deskripsi}</div>
        </div>
      )}

      {/* Info kota */}
      {infoKota && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-comic pointer-events-none"
          style={{ background: 'rgba(10,10,10,0.92)', border: `3px solid ${infoKota.warna}`, boxShadow: `6px 6px 0 ${infoKota.warna}`, padding: '16px 20px', maxWidth: 280, zIndex: 20 }}>
          <div className="text-3xl mb-1">{infoKota.emoji}</div>
          <div className="text-lg mb-1" style={{ color: infoKota.warna }}>{infoKota.nama}</div>
          <div className="text-white/70 text-xs leading-relaxed">{infoKota.info}</div>
        </div>
      )}

      {/* ── KONTROL MOBILE (touch) ── */}
      {isMobile && !menuTerbuka && (
        <>
          {/* Joystick kiri bawah */}
          <div className="absolute pointer-events-auto" style={{ bottom: 24, left: 20 }}>
            <Joystick onInput={handleJoystick} />
          </div>

          {/* Tombol aksi kanan bawah */}
          <div className="absolute pointer-events-auto flex flex-col gap-2" style={{ bottom: 24, right: 16 }}>
            {tipeKendaraan === 'pesawat' && (
              <TombolTouch
                label="⬆"
                aktif={inputState.naik}
                onPress={() => setNaik(true)}
                onRelease={() => setNaik(false)}
                warna="#0891b2"
              />
            )}
            <TombolTouch label="👁" aktif={false} onPress={() => setView(v => v === 'third' ? 'top' : 'third')} onRelease={() => { }} />
            <TombolTouch label="☰" aktif={false} onPress={() => setMenuTerbuka(true)} onRelease={() => { }} />
          </div>

          {/* Pilih kendaraan mobile — tengah bawah */}
          <div className="absolute pointer-events-auto flex gap-2" style={{ bottom: 24, left: '50%', transform: 'translateX(-50%)' }}>
            {([
              { tipe: 'mobil', icon: '🚗' },
              { tipe: 'sepeda', icon: '🚲' },
              { tipe: 'pesawat', icon: '✈️' },
            ] as const).map(k => (
              <button
                key={k.tipe}
                onTouchStart={e => { e.preventDefault(); setTipeKendaraan(k.tipe); if (k.tipe === 'pesawat') unlockAch('speed') }}
                onClick={() => { setTipeKendaraan(k.tipe); if (k.tipe === 'pesawat') unlockAch('speed') }}
                className="flex items-center justify-center text-2xl rounded"
                style={{
                  width: 48, height: 48,
                  background: tipeKendaraan === k.tipe ? '#ffd700' : 'rgba(10,10,10,0.7)',
                  border: `2px solid ${tipeKendaraan === k.tipe ? '#ffd700' : 'rgba(255,255,255,0.2)'}`,
                }}
              >
                {k.icon}
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── KONTROL DESKTOP ── */}
      {!isMobile && (
        <>
          {/* Indikator WASD */}
          <div className="absolute bottom-4 left-4 pointer-events-none">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,36px)', gridTemplateRows: 'repeat(2,36px)', gap: 3 }}>
              {[
                { label: '↑', aktif: inputState.maju, r: 1, c: 2 },
                { label: '←', aktif: inputState.kiri, r: 2, c: 1 },
                { label: '↓', aktif: inputState.mundur, r: 2, c: 2 },
                { label: '→', aktif: inputState.kanan, r: 2, c: 3 },
              ].map(k => (
                <div key={k.label}
                  className="flex items-center justify-center font-bold text-sm"
                  style={{
                    gridRow: k.r, gridColumn: k.c,
                    background: k.aktif ? '#ffd700' : 'rgba(255,255,255,0.1)',
                    color: k.aktif ? '#0a0a0a' : 'rgba(255,255,255,0.4)',
                    border: `2px solid ${k.aktif ? '#ffd700' : 'rgba(255,255,255,0.15)'}`,
                    borderRadius: 4,
                  }}
                >
                  {k.label}
                </div>
              ))}
            </div>
          </div>

          {/* Kendaraan desktop */}
          <div className="absolute bottom-4 right-4 flex gap-1.5 pointer-events-auto">
            {([
              { tipe: 'mobil', icon: '🚗', label: 'MOBIL' },
              { tipe: 'sepeda', icon: '🚲', label: 'SEPEDA' },
              { tipe: 'pesawat', icon: '✈️', label: 'PESAWAT' },
            ] as const).map(k => (
              <button
                key={k.tipe}
                onClick={() => { setTipeKendaraan(k.tipe); if (k.tipe === 'pesawat') unlockAch('speed') }}
                className="flex flex-col items-center gap-0.5 px-2.5 py-2 font-bold text-[10px] transition-all"
                style={{
                  background: tipeKendaraan === k.tipe ? '#ffd700' : 'rgba(10,10,10,0.8)',
                  color: tipeKendaraan === k.tipe ? '#0a0a0a' : 'rgba(255,255,255,0.5)',
                  border: `2px solid ${tipeKendaraan === k.tipe ? '#ffd700' : 'rgba(255,255,255,0.15)'}`,
                }}
              >
                <span className="text-xl">{k.icon}</span>
                {k.label}
              </button>
            ))}
          </div>

          {/* Hint */}
          <div className="absolute bottom-20 right-4 text-right pointer-events-none opacity-40">
            <div className="text-white/50 text-[9px] font-bold leading-loose">
              WASD/↑↓←→ Gerak · SPACE Naik · V View · ESC Menu
            </div>
          </div>
        </>
      )}

      {/* Achievement dots */}
      <div className="absolute bottom-4 pointer-events-none"
        style={{ left: '50%', transform: isMobile ? 'translateX(-50%) translateY(-64px)' : 'translateX(-50%)' }}>
        <div className="flex gap-1">
          {achievements.slice(0, 8).map(a => (
            <div key={a.id} className="flex items-center justify-center text-sm"
              style={{
                width: 28, height: 28,
                background: a.unlocked ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.4)',
                border: `1.5px solid ${a.unlocked ? '#ffd700' : 'rgba(255,255,255,0.1)'}`,
                opacity: a.unlocked ? 1 : 0.35,
                filter: a.unlocked ? 'none' : 'grayscale(1)',
                borderRadius: 4,
              }}
            >
              {a.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Menu pause */}
      {menuTerbuka && (
        <div className="absolute inset-0 flex items-center justify-center z-50"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMenuTerbuka(false)}
        >
          <div className="text-center"
            style={{ background: '#0a0a0a', border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd700', padding: '28px 40px', minWidth: 260 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="font-comic text-[#ffd700] text-2xl mb-5">⏸ PAUSE</div>
            <div className="space-y-2 mb-5">
              <button onClick={() => setMenuTerbuka(false)}
                className="w-full font-comic text-sm py-3 text-[#0a0a0a]"
                style={{ background: '#ffd700', border: '2px solid #0a0a0a' }}>
                ▶ LANJUT
              </button>
              <Link href="/" className="block w-full font-comic text-sm py-3 text-white/60 hover:text-white text-center"
                style={{ border: '2px solid rgba(255,255,255,0.2)' }}>
                🏠 Kembali ke Portofolio
              </Link>
            </div>
            <div className="text-left">
              <div className="font-comic text-white/30 text-[9px] tracking-widest mb-2">ACHIEVEMENT ({jumlahUnlocked}/{achievements.length})</div>
              <div className="space-y-1 max-h-40 overflow-y-auto">
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

      {/* Tombol menu selalu terlihat (kiri atas) */}
      <div className="absolute top-12 left-3 pointer-events-auto">
        <button onClick={() => setMenuTerbuka(true)}
          className="font-comic text-[11px] px-2.5 py-1.5 text-white/50 hover:text-white"
          style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
          ☰
        </button>
      </div>
    </div>
  )
}
