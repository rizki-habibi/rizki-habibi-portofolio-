'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sky, Stars, Text, Billboard, Plane, Box, Sphere, Cylinder } from '@react-three/drei'
import { Physics, usePlane, useBox, useSphere, useRaycastVehicle } from '@react-three/cannon'
import { Suspense, useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'
import Link from 'next/link'

// ── Tipe ──────────────────────────────────────────────────────────────
interface Achievement {
  id: string
  judul: string
  deskripsi: string
  icon: string
  unlocked: boolean
}

interface KotaData {
  nama: string
  pos: [number, number, number]
  warna: string
  info: string
  achievement: string
  emoji: string
}

// ── Peta kota Indonesia ────────────────────────────────────────────────
const KOTA_INDONESIA: KotaData[] = [
  { nama: 'JEMBER', pos: [0, 0, 0], warna: '#ffd700', info: 'Kota asal Rizki Habibi — tempat semua dimulai', achievement: 'asal', emoji: '🏠' },
  { nama: 'SURABAYA', pos: [15, 0, -10], warna: '#1a5cff', info: 'Kota pahlawan — pusat bisnis & teknologi Jawa Timur', achievement: 'surabaya', emoji: '🦈' },
  { nama: 'JAKARTA', pos: [-30, 0, -40], warna: '#e63329', info: 'Ibukota Indonesia — pusat startup & tech hub', achievement: 'jakarta', emoji: '🏙️' },
  { nama: 'BANDUNG', pos: [-35, 0, -25], warna: '#22c55e', info: 'Kota kembang — surganya developer & kreatif', achievement: 'bandung', emoji: '🌸' },
  { nama: 'YOGYAKARTA', pos: [-10, 0, -20], warna: '#8b5cf6', info: 'Kota budaya — pusat pendidikan & seni', achievement: 'jogja', emoji: '🎭' },
  { nama: 'BALI', pos: [5, 0, 25], warna: '#f59e0b', info: 'Pulau dewata — inspirasi & keindahan alam', achievement: 'bali', emoji: '🌺' },
  { nama: 'MAKASSAR', pos: [50, 0, 20], warna: '#0891b2', info: 'Kota angin — gerbang Indonesia Timur', achievement: 'makassar', emoji: '⛵' },
  { nama: 'MEDAN', pos: [-60, 0, -60], warna: '#ec4899', info: 'Kota beringin — kota terbesar Sumatera', achievement: 'medan', emoji: '🌴' },
  { nama: 'GELAR.ID', pos: [0, 8, -15], warna: '#ffd700', info: 'Platform mimpi Rizki — Kampus Virtual Teknologi', achievement: 'gelarid', emoji: '🚀' },
]

// ── Daftar achievement ─────────────────────────────────────────────────
const ACHIEVEMENTS_DEF: Achievement[] = [
  { id: 'start',    judul: 'Selamat Datang!',      deskripsi: 'Mulai menjelajahi dunia Rizki',         icon: '🎮', unlocked: false },
  { id: 'asal',     judul: 'Kampung Halaman',       deskripsi: 'Kunjungi Jember — kota asal Rizki',     icon: '🏠', unlocked: false },
  { id: 'surabaya', judul: 'Kota Pahlawan',         deskripsi: 'Jelajahi Surabaya',                     icon: '🦈', unlocked: false },
  { id: 'jakarta',  judul: 'Ibu Kota Tech',         deskripsi: 'Tiba di Jakarta',                       icon: '🏙️', unlocked: false },
  { id: 'bandung',  judul: 'Paris van Java',        deskripsi: 'Jelajahi Bandung',                      icon: '🌸', unlocked: false },
  { id: 'jogja',    judul: 'Spirit Pendidikan',     deskripsi: 'Kunjungi Yogyakarta',                   icon: '🎭', unlocked: false },
  { id: 'bali',     judul: 'Pulau Dewata',          deskripsi: 'Tiba di Bali',                          icon: '🌺', unlocked: false },
  { id: 'makassar', judul: 'Timur Indonesia',       deskripsi: 'Jelajahi Makassar',                     icon: '⛵', unlocked: false },
  { id: 'medan',    judul: 'Sumatera Utara',        deskripsi: 'Tiba di Medan',                         icon: '🌴', unlocked: false },
  { id: 'gelarid',  judul: 'Mimpi Terbesar',        deskripsi: 'Temukan Gelar.id di langit',            icon: '🚀', unlocked: false },
  { id: 'explorer', judul: 'Penjelajah Sejati',     deskripsi: 'Kunjungi 5 kota berbeda',               icon: '🗺️', unlocked: false },
  { id: 'speed',    judul: 'Need for Speed',        deskripsi: 'Kendarai pesawat!',                     icon: '✈️', unlocked: false },
]

// ── Tanah / Peta ───────────────────────────────────────────────────────
function Tanah() {
  const [ref] = usePlane<THREE.Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[300, 300]} />
      <meshLambertMaterial color="#2d5016" />
    </mesh>
  )
}

// ── Jalan ──────────────────────────────────────────────────────────────
function Jalan({ dari, ke }: { dari: [number, number]; ke: [number, number] }) {
  const dx = ke[0] - dari[0], dz = ke[1] - dari[1]
  const len = Math.sqrt(dx * dx + dz * dz)
  const cx = (dari[0] + ke[0]) / 2, cz = (dari[1] + ke[1]) / 2
  const angle = Math.atan2(dz, dx)
  return (
    <mesh position={[cx, -0.45, cz]} rotation={[-Math.PI / 2, 0, angle]} receiveShadow>
      <planeGeometry args={[len, 2.5]} />
      <meshLambertMaterial color="#555" />
    </mesh>
  )
}

// ── Bangunan kota ──────────────────────────────────────────────────────
function Bangunan({ pos, tinggi, warna, lebar = 3 }: {
  pos: [number, number, number]; tinggi: number; warna: string; lebar?: number
}) {
  const [ref] = useBox<THREE.Mesh>(() => ({
    type: 'Static',
    position: [pos[0], pos[1] + tinggi / 2 - 0.5, pos[2]],
    args: [lebar, tinggi, lebar],
  }))
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[lebar, tinggi, lebar]} />
      <meshLambertMaterial color={warna} />
    </mesh>
  )
}

// ── Kota di peta ──────────────────────────────────────────────────────
function KotaBlok({ kota, onMasuk }: { kota: KotaData; onMasuk: (id: string) => void }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { camera } = useThree()
  const terdeteksi = useRef(false)

  useFrame(() => {
    if (!meshRef.current) return
    const dist = camera.position.distanceTo(
      new THREE.Vector3(kota.pos[0], kota.pos[1], kota.pos[2])
    )
    if (dist < 12 && !terdeteksi.current) {
      terdeteksi.current = true
      onMasuk(kota.achievement)
    } else if (dist > 14) {
      terdeteksi.current = false
    }
    // Animasi hover
    meshRef.current.rotation.y += 0.01
  })

  const gedungData = [
    { x: -2.5, z: -2.5, h: 6 + Math.random() * 8, w: 2 },
    { x: 0,   z: -3,   h: 8 + Math.random() * 10, w: 2.5 },
    { x: 2.5, z: -2.5, h: 5 + Math.random() * 6, w: 2 },
    { x: -2.5, z: 2.5, h: 4 + Math.random() * 5, w: 2 },
    { x: 2.5,  z: 2.5, h: 7 + Math.random() * 7, w: 2 },
  ]

  return (
    <group position={kota.pos}>
      {/* Platform */}
      <mesh ref={meshRef} position={[0, -0.3, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[6, 6, 0.4, 8]} />
        <meshLambertMaterial color={kota.warna + '44'} />
      </mesh>

      {/* Gedung-gedung */}
      {gedungData.map((g, i) => (
        <mesh key={i} position={[g.x, g.h / 2 - 0.3, g.z]} castShadow>
          <boxGeometry args={[g.w, g.h, g.w]} />
          <meshLambertMaterial color={kota.warna + 'cc'} />
        </mesh>
      ))}

      {/* Label nama kota */}
      <Billboard position={[0, 12, 0]}>
        <Text
          fontSize={1.8}
          color={kota.warna}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.08}
          outlineColor="#000000"
        >
          {kota.emoji} {kota.nama}
        </Text>
      </Billboard>

      {/* Cahaya */}
      <pointLight position={[0, 8, 0]} color={kota.warna} intensity={30} distance={20} />
    </group>
  )
}

// ── Kendaraan ─────────────────────────────────────────────────────────
type TipeKendaraan = 'mobil' | 'sepeda' | 'pesawat'

function Kendaraan({
  tipe,
  input,
  onPosisi,
}: {
  tipe: TipeKendaraan
  input: { maju: boolean; mundur: boolean; kiri: boolean; kanan: boolean; naik: boolean }
  onPosisi: (pos: THREE.Vector3) => void
}) {
  const chassisBody = useRef<THREE.Object3D>(null!)
  const kecepatan = tipe === 'pesawat' ? 28 : tipe === 'sepeda' ? 10 : 18
  const warnaBadan = tipe === 'pesawat' ? '#c0c0c0' : tipe === 'sepeda' ? '#e63329' : '#ffd700'

  const [ref, api] = useBox<THREE.Mesh>(() => ({
    mass: tipe === 'pesawat' ? 1 : tipe === 'sepeda' ? 1 : 1,
    position: [0, 2, 0],
    args: tipe === 'pesawat' ? [4, 0.8, 8] : tipe === 'sepeda' ? [0.4, 1.2, 2] : [2.5, 1, 4.5],
    linearDamping: tipe === 'pesawat' ? 0.1 : 0.6,
    angularDamping: 0.95,
  }))

  const vel = useRef([0, 0, 0])
  const pos = useRef([0, 0, 0])
  const rot = useRef([0, 0, 0, 1])

  useEffect(() => {
    api.velocity.subscribe(v => { vel.current = v })
    api.position.subscribe(p => {
      pos.current = p
      onPosisi(new THREE.Vector3(p[0], p[1], p[2]))
    })
    api.quaternion.subscribe(q => { rot.current = q })
  }, [api, onPosisi])

  useFrame(() => {
    const q = new THREE.Quaternion(rot.current[0], rot.current[1], rot.current[2], rot.current[3])
    const arah = new THREE.Vector3(0, 0, -1).applyQuaternion(q)
    const samping = new THREE.Vector3(1, 0, 0).applyQuaternion(q)

    if (input.maju) api.applyImpulse([arah.x * kecepatan, arah.y * kecepatan, arah.z * kecepatan], [0, 0, 0])
    if (input.mundur) api.applyImpulse([-arah.x * kecepatan * 0.6, 0, -arah.z * kecepatan * 0.6], [0, 0, 0])
    if (input.kiri) api.applyTorque([0, 6, 0])
    if (input.kanan) api.applyTorque([0, -6, 0])
    if (tipe === 'pesawat' && input.naik) api.applyImpulse([0, 20, 0], [0, 0, 0])
    if (tipe === 'pesawat' && !input.naik) api.applyForce([0, -5, 0], [0, 0, 0])

    // Cegah jatuh terlalu jauh
    if (pos.current[1] < -5) api.position.set(pos.current[0], 2, pos.current[2])
  })

  return (
    <mesh ref={ref} castShadow>
      {tipe === 'pesawat' ? (
        <>
          <boxGeometry args={[4, 0.8, 8]} />
          <meshLambertMaterial color={warnaBadan} />
          {/* Sayap */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[14, 0.3, 2.5]} />
            <meshLambertMaterial color="#ddd" />
          </mesh>
        </>
      ) : tipe === 'sepeda' ? (
        <>
          <boxGeometry args={[0.5, 1, 2]} />
          <meshLambertMaterial color={warnaBadan} />
        </>
      ) : (
        <>
          <boxGeometry args={[2.5, 1, 4.5]} />
          <meshLambertMaterial color={warnaBadan} />
          {/* Kaca */}
          <mesh position={[0, 0.7, -0.5]}>
            <boxGeometry args={[2.2, 0.7, 2]} />
            <meshLambertMaterial color="#88ccff" transparent opacity={0.7} />
          </mesh>
        </>
      )}
    </mesh>
  )
}

// ── Kamera mengikuti kendaraan ─────────────────────────────────────────
function IkutKamera({ target, view }: { target: THREE.Vector3; view: 'third' | 'first' | 'top' }) {
  const { camera } = useThree()

  useFrame(() => {
    const offset = view === 'top'
      ? new THREE.Vector3(0, 40, 0)
      : view === 'first'
        ? new THREE.Vector3(0, 1.5, 2)
        : new THREE.Vector3(0, 8, 18)

    const targetPos = target.clone().add(offset)
    camera.position.lerp(targetPos, 0.08)
    camera.lookAt(target.clone().add(new THREE.Vector3(0, 2, 0)))
  })
  return null
}

// ── Dekorasi alam ──────────────────────────────────────────────────────
function Pohon({ pos }: { pos: [number, number, number] }) {
  return (
    <group position={pos}>
      <mesh position={[0, 2, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 4, 6]} />
        <meshLambertMaterial color="#6b4226" />
      </mesh>
      <mesh position={[0, 5, 0]} castShadow>
        <coneGeometry args={[2.5, 5, 8]} />
        <meshLambertMaterial color="#1a5c1a" />
      </mesh>
      <mesh position={[0, 7.5, 0]} castShadow>
        <coneGeometry args={[1.8, 4, 8]} />
        <meshLambertMaterial color="#22c55e" />
      </mesh>
    </group>
  )
}

function Laut() {
  return (
    <mesh position={[0, -1.5, 80]} receiveShadow>
      <planeGeometry args={[300, 60]} />
      <meshLambertMaterial color="#0a66c2" transparent opacity={0.8} />
    </mesh>
  )
}

// ── Main GameWorld component ───────────────────────────────────────────
export default function GameWorld({ kualitas }: { kualitas: 'low' | 'medium' | 'high' }) {
  const [achievements, setAchievements] = useState<Achievement[]>(ACHIEVEMENTS_DEF)
  const [notifAch, setNotifAch] = useState<Achievement | null>(null)
  const [tipeKendaraan, setTipeKendaraan] = useState<TipeKendaraan>('mobil')
  const [posKendaraan, setPosKendaraan] = useState(new THREE.Vector3())
  const [view, setView] = useState<'third' | 'first' | 'top'>('third')
  const [infoKota, setInfoKota] = useState<KotaData | null>(null)
  const [menuTerbuka, setMenuTerbuka] = useState(false)
  const inputRef = useRef({ maju: false, mundur: false, kiri: false, kanan: false, naik: false })
  const [inputState, setInputState] = useState({ maju: false, mundur: false, kiri: false, kanan: false, naik: false })

  // Keyboard
  useEffect(() => {
    const unlockFirst = () => unlockAch('start')
    unlockFirst()

    const down = (e: KeyboardEvent) => {
      const baru = { ...inputRef.current }
      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp')    baru.maju = true
      if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown')  baru.mundur = true
      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft')  baru.kiri = true
      if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') baru.kanan = true
      if (e.key === ' ')                                             baru.naik = true
      if (e.key === 'v' || e.key === 'V') setView(v => v === 'third' ? 'top' : v === 'top' ? 'first' : 'third')
      if (e.key === 'Escape') setMenuTerbuka(m => !m)
      inputRef.current = baru
      setInputState({ ...baru })
    }
    const up = (e: KeyboardEvent) => {
      const baru = { ...inputRef.current }
      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp')    baru.maju = false
      if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown')  baru.mundur = false
      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft')  baru.kiri = false
      if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') baru.kanan = false
      if (e.key === ' ')                                             baru.naik = false
      inputRef.current = baru
      setInputState({ ...baru })
    }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up) }
  }, [])

  const unlockAch = useCallback((id: string) => {
    setAchievements(prev => {
      const ach = prev.find(a => a.id === id)
      if (!ach || ach.unlocked) return prev
      const updated = prev.map(a => a.id === id ? { ...a, unlocked: true } : a)
      setNotifAch({ ...ach, unlocked: true })
      setTimeout(() => setNotifAch(null), 3500)
      // Cek explorer (5 kota)
      const kotaUnlocked = updated.filter(a =>
        ['asal','surabaya','jakarta','bandung','jogja','bali','makassar','medan'].includes(a.id) && a.unlocked
      ).length
      if (kotaUnlocked >= 5) setTimeout(() => unlockAch('explorer'), 500)
      return updated
    })
  }, [])

  const handleKotaMasuk = useCallback((achievementId: string) => {
    unlockAch(achievementId)
    const kota = KOTA_INDONESIA.find(k => k.achievement === achievementId)
    if (kota) { setInfoKota(kota); setTimeout(() => setInfoKota(null), 4000) }
  }, [unlockAch])

  const gantiKendaraan = (tipe: TipeKendaraan) => {
    setTipeKendaraan(tipe)
    if (tipe === 'pesawat') unlockAch('speed')
  }

  const jumlahUnlocked = achievements.filter(a => a.unlocked).length

  // Pohon-pohon dekorasi
  const daftarPohon: [number, number, number][] = [
    [-20, -0.5, 10], [20, -0.5, 10], [-15, -0.5, 30], [25, -0.5, -15],
    [-25, -0.5, -20], [35, -0.5, 5], [-35, -0.5, 15], [10, -0.5, 40],
    [-10, -0.5, -35], [40, -0.5, -30],
  ]

  return (
    <div className="fixed inset-0" style={{ background: '#0a1628' }}>
      {/* Canvas 3D */}
      <Canvas
        shadows={kualitas !== 'low'}
        camera={{ position: [0, 8, 18], fov: 65 }}
        gl={{ antialias: kualitas === 'high' }}
      >
        <Suspense fallback={null}>
          {/* Langit */}
          {kualitas !== 'low' && <Stars radius={200} depth={60} count={kualitas === 'high' ? 3000 : 1000} factor={4} />}
          <Sky sunPosition={[50, 20, 100]} />

          {/* Cahaya */}
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[50, 80, 50]}
            intensity={1.5}
            castShadow={kualitas !== 'low'}
            shadow-mapSize={[2048, 2048]}
          />

          <Physics
            gravity={[0, -20, 0]}
            broadphase="SAP"
            tolerance={0.001}
          >
            {/* Dunia */}
            <Tanah />
            <Laut />

            {/* Pohon */}
            {daftarPohon.map((p, i) => <Pohon key={i} pos={p} />)}

            {/* Jalan antar kota */}
            <Jalan dari={[0, 0]} ke={[15, -10]} />
            <Jalan dari={[0, 0]} ke={[-10, -20]} />
            <Jalan dari={[0, 0]} ke={[5, 25]} />
            <Jalan dari={[15, -10]} ke={[-30, -40]} />
            <Jalan dari={[-10, -20]} ke={[-30, -40]} />
            <Jalan dari={[-30, -40]} ke={[-35, -25]} />

            {/* Kota-kota */}
            {KOTA_INDONESIA.map(kota => (
              <KotaBlok key={kota.nama} kota={kota} onMasuk={handleKotaMasuk} />
            ))}

            {/* Kendaraan */}
            <Kendaraan
              tipe={tipeKendaraan}
              input={inputState}
              onPosisi={setPosKendaraan}
            />
          </Physics>

          {/* Kamera */}
          <IkutKamera target={posKendaraan} view={view} />
        </Suspense>
      </Canvas>

      {/* ── HUD ─────────────────────────────────────────────────────────── */}

      {/* Header HUD */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)' }}>
        <div className="font-comic text-[#ffd700] text-lg tracking-widest">🎮 RIZKI WORLD</div>
        <div className="flex items-center gap-3 text-white/60 text-xs font-bold">
          <span>🏆 {jumlahUnlocked}/{achievements.length}</span>
          <span>📍 {tipeKendaraan.toUpperCase()}</span>
          <span>👁️ {view === 'third' ? '3RD' : view === 'first' ? '1ST' : 'TOP'}</span>
        </div>
      </div>

      {/* Notifikasi achievement */}
      {notifAch && (
        <div
          className="absolute top-16 right-4 font-comic text-sm animate-bounce"
          style={{ background: '#0a0a0a', border: '3px solid #ffd700', boxShadow: '4px 4px 0 #ffd700', padding: '12px 16px', maxWidth: 240 }}
        >
          <div className="text-[#ffd700] text-xs tracking-widest mb-1">🏆 ACHIEVEMENT UNLOCKED!</div>
          <div className="text-2xl mb-1">{notifAch.icon}</div>
          <div className="text-white font-bold">{notifAch.judul}</div>
          <div className="text-white/50 text-xs mt-0.5">{notifAch.deskripsi}</div>
        </div>
      )}

      {/* Info kota */}
      {infoKota && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-comic pointer-events-none"
          style={{ background: 'rgba(10,10,10,0.9)', border: `3px solid ${infoKota.warna}`, boxShadow: `6px 6px 0 ${infoKota.warna}`, padding: '16px 24px', maxWidth: 320 }}
        >
          <div className="text-3xl mb-1">{infoKota.emoji}</div>
          <div className="text-xl mb-1" style={{ color: infoKota.warna }}>{infoKota.nama}</div>
          <div className="text-white/70 text-sm">{infoKota.info}</div>
        </div>
      )}

      {/* Kontrol kendaraan — kiri bawah */}
      <div className="absolute bottom-4 left-4 pointer-events-none">
        <div className="grid grid-cols-3 gap-1" style={{ width: 120 }}>
          {[
            { label: '↑', aktif: inputState.maju, row: 1, col: 2 },
            { label: '←', aktif: inputState.kiri, row: 2, col: 1 },
            { label: '↓', aktif: inputState.mundur, row: 2, col: 2 },
            { label: '→', aktif: inputState.kanan, row: 2, col: 3 },
          ].map(k => (
            <div
              key={k.label}
              className="flex items-center justify-center font-bold text-lg rounded"
              style={{
                gridRow: k.row, gridColumn: k.col,
                width: 36, height: 36,
                background: k.aktif ? '#ffd700' : 'rgba(255,255,255,0.1)',
                color: k.aktif ? '#0a0a0a' : 'rgba(255,255,255,0.5)',
                border: `2px solid ${k.aktif ? '#ffd700' : 'rgba(255,255,255,0.2)'}`,
              }}
            >
              {k.label}
            </div>
          ))}
        </div>
      </div>

      {/* Pilih kendaraan — kanan bawah */}
      <div className="absolute bottom-4 right-4 flex gap-2 pointer-events-auto">
        {([
          { tipe: 'mobil',   icon: '🚗', label: 'MOBIL' },
          { tipe: 'sepeda',  icon: '🚲', label: 'SEPEDA' },
          { tipe: 'pesawat', icon: '✈️', label: 'PESAWAT' },
        ] as const).map(k => (
          <button
            key={k.tipe}
            onClick={() => gantiKendaraan(k.tipe)}
            className="flex flex-col items-center gap-0.5 px-3 py-2 font-bold text-[10px] transition-all hover:scale-105"
            style={{
              background: tipeKendaraan === k.tipe ? '#ffd700' : 'rgba(10,10,10,0.8)',
              color: tipeKendaraan === k.tipe ? '#0a0a0a' : 'rgba(255,255,255,0.6)',
              border: `2px solid ${tipeKendaraan === k.tipe ? '#ffd700' : 'rgba(255,255,255,0.2)'}`,
              boxShadow: tipeKendaraan === k.tipe ? '3px 3px 0 rgba(0,0,0,0.5)' : 'none',
            }}
          >
            <span className="text-xl">{k.icon}</span>
            {k.label}
          </button>
        ))}
      </div>

      {/* Achievement panel — tengah bawah */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="flex gap-1.5">
          {achievements.slice(0, 8).map(a => (
            <div
              key={a.id}
              title={a.judul}
              className="flex items-center justify-center text-lg rounded transition-all"
              style={{
                width: 36, height: 36,
                background: a.unlocked ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.5)',
                border: `2px solid ${a.unlocked ? '#ffd700' : 'rgba(255,255,255,0.1)'}`,
                opacity: a.unlocked ? 1 : 0.4,
                filter: a.unlocked ? 'none' : 'grayscale(1)',
              }}
            >
              {a.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Menu ESC */}
      {menuTerbuka && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMenuTerbuka(false)}
        >
          <div
            className="text-center"
            style={{ background: '#0a0a0a', border: '4px solid #ffd700', boxShadow: '8px 8px 0 #ffd700', padding: '32px 48px', minWidth: 280 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="font-comic text-[#ffd700] text-2xl mb-6">⏸ PAUSE</div>
            <div className="space-y-3">
              <button
                onClick={() => setMenuTerbuka(false)}
                className="w-full font-comic text-sm py-3 text-[#0a0a0a] hover:scale-105 transition-all"
                style={{ background: '#ffd700', border: '2px solid #0a0a0a' }}
              >
                ▶ LANJUT
              </button>
              <Link
                href="/"
                className="block w-full font-comic text-sm py-3 text-white/60 hover:text-white transition-colors text-center"
                style={{ border: '2px solid rgba(255,255,255,0.2)' }}
              >
                🏠 KEMBALI KE PORTOFOLIO
              </Link>
            </div>

            {/* Daftar achievement di menu */}
            <div className="mt-6 text-left">
              <div className="font-comic text-white/40 text-xs tracking-widest mb-3">ACHIEVEMENT ({jumlahUnlocked}/{achievements.length})</div>
              <div className="space-y-1.5 max-h-48 overflow-y-auto">
                {achievements.map(a => (
                  <div key={a.id} className="flex items-center gap-2 text-xs"
                    style={{ opacity: a.unlocked ? 1 : 0.35 }}>
                    <span className="text-base">{a.icon}</span>
                    <div>
                      <div className={`font-bold ${a.unlocked ? 'text-[#ffd700]' : 'text-white/40'}`}>{a.judul}</div>
                      <div className="text-white/30">{a.deskripsi}</div>
                    </div>
                    {a.unlocked && <span className="ml-auto text-[#22c55e]">✓</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tombol kembali pojok kiri atas (mobile) */}
      <div className="absolute top-12 left-4 pointer-events-auto">
        <button
          onClick={() => setMenuTerbuka(true)}
          className="font-comic text-xs px-3 py-2 text-white/60 hover:text-white transition-colors"
          style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)' }}
        >
          ☰ MENU
        </button>
      </div>

      {/* Instruksi pertama kali */}
      <div
        className="absolute bottom-20 right-4 text-right pointer-events-none"
        style={{ opacity: 0.5 }}
      >
        <div className="text-white/50 text-[10px] font-bold leading-relaxed">
          <div>WASD / ↑↓←→ = Gerak</div>
          <div>SPACE = Naik (Pesawat)</div>
          <div>V = Ganti View</div>
          <div>ESC = Menu</div>
        </div>
      </div>
    </div>
  )
}
