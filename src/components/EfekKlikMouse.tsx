'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Sparkle {
  id: number
  x: number
  y: number
  ukuran: number
  warna: string
  bentuk: 'bintang' | 'kotak' | 'segitiga'
  rotasi: number
  dx: number
  dy: number
}

// Warna tema komik
const warnaKomik = [
  '#ffd700', // kuning
  '#1a5cff', // biru
  '#e63329', // merah
  '#22c55e', // hijau
  '#8b5cf6', // ungu
  '#FF2D20', // oranye merah
  '#f59e0b', // oranye
]

function GambarBintang({ ukuran, warna, rotasi }: { ukuran: number; warna: string; rotasi: number }) {
  const n = ukuran
  const pts = Array.from({ length: 5 }, (_, i) => {
    const a1 = (i * 4 * Math.PI) / 5 - Math.PI / 2
    const a2 = ((i * 4 + 2) * Math.PI) / 5 - Math.PI / 2
    const r1 = n, r2 = n / 2.2
    return `${r1 * Math.cos(a1)},${r1 * Math.sin(a1)} ${r2 * Math.cos(a2)},${r2 * Math.sin(a2)}`
  }).join(' ')

  return (
    <svg width={n * 2 + 4} height={n * 2 + 4} viewBox={`${-n - 2} ${-n - 2} ${n * 2 + 4} ${n * 2 + 4}`}
      style={{ transform: `rotate(${rotasi}deg)` }}>
      <polygon points={pts} fill={warna} stroke="#0a0a0a" strokeWidth="1.2" />
    </svg>
  )
}

export default function MouseSparkle() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true)
      return
    }

    const handleClick = (e: MouseEvent) => {
      const jumlah = 8 + Math.floor(Math.random() * 6)
      const bentukList: Sparkle['bentuk'][] = ['bintang', 'kotak', 'segitiga']

      const baru: Sparkle[] = Array.from({ length: jumlah }, (_, i) => {
        const sudut = (i / jumlah) * Math.PI * 2 + Math.random() * 0.5
        const kec = 2 + Math.random() * 3
        return {
          id: Date.now() + i + Math.random(),
          x: e.clientX,
          y: e.clientY,
          ukuran: 4 + Math.random() * 7,
          warna: warnaKomik[Math.floor(Math.random() * warnaKomik.length)],
          bentuk: bentukList[Math.floor(Math.random() * 3)],
          rotasi: Math.random() * 360,
          dx: Math.cos(sudut) * kec * 20,
          dy: Math.sin(sudut) * kec * 20,
        }
      })

      setSparkles(prev => [...prev, ...baru])
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => !baru.find(b => b.id === s.id)))
      }, 750)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  if (isTouchDevice) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9997]">
      <AnimatePresence>
        {sparkles.map(sp => (
          <motion.div
            key={sp.id}
            className="absolute"
            style={{ left: sp.x, top: sp.y }}
            initial={{ scale: 0, opacity: 1, x: 0, y: 0, rotate: sp.rotasi }}
            animate={{
              scale: [0, 1.4, 0.8],
              opacity: [1, 1, 0],
              x: sp.dx,
              y: sp.dy,
              rotate: sp.rotasi + (Math.random() > 0.5 ? 180 : -180),
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            {sp.bentuk === 'bintang' && (
              <GambarBintang ukuran={sp.ukuran} warna={sp.warna} rotasi={0} />
            )}
            {sp.bentuk === 'kotak' && (
              <div style={{
                width: sp.ukuran * 1.8,
                height: sp.ukuran * 1.8,
                background: sp.warna,
                border: '1.5px solid #0a0a0a',
                boxShadow: '1px 1px 0 #0a0a0a',
                transform: `rotate(${sp.rotasi}deg)`,
              }} />
            )}
            {sp.bentuk === 'segitiga' && (
              <svg
                width={sp.ukuran * 2.5}
                height={sp.ukuran * 2.5}
                viewBox="0 0 20 20"
                style={{ transform: `rotate(${sp.rotasi}deg)` }}
              >
                <polygon
                  points="10,2 18,18 2,18"
                  fill={sp.warna}
                  stroke="#0a0a0a"
                  strokeWidth="1.5"
                />
              </svg>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
