'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Titik {
  x: number
  y: number
  umur: number
  ukuran: number
  warna: string
  bentuk: 'bintang' | 'kotak' | 'lingkaran'
}

interface KlikEfek {
  id: number
  x: number
  y: number
  teks: string
  warna: string
}

const warnaTrail = ['#ffd700', '#1a5cff', '#e63329', '#22c55e', '#8b5cf6', '#ffd700', '#FF2D20']
const efekKlik = ['POW!', 'ZAP!', 'BOOM!', 'NICE!', 'WOW!', 'YES!', 'GO!', 'CLICK!', '★', '⚡']

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const titikRef = useRef<Titik[]>([])
  const animRef = useRef<number>(0)
  const warnaIdxRef = useRef(0)
  const frameRef = useRef(0)

  // Posisi kursor untuk elemen HTML custom
  const [posisi, setPosisi] = useState({ x: -999, y: -999 })
  const [isKlik, setIsKlik] = useState(false)
  const [klikEfek, setKlikEfek] = useState<KlikEfek[]>([])
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Sembunyikan kursor asli
    document.body.style.cursor = 'none'

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent) => {
      setPosisi({ x: e.clientX, y: e.clientY })
      frameRef.current++
      if (frameRef.current % 2 !== 0) return

      warnaIdxRef.current = (warnaIdxRef.current + 1) % warnaTrail.length
      const bentukPilihan: Titik['bentuk'][] = ['bintang', 'kotak', 'lingkaran']
      titikRef.current.push({
        x: e.clientX + (Math.random() - 0.5) * 8,
        y: e.clientY + (Math.random() - 0.5) * 8,
        umur: 1,
        ukuran: 3 + Math.random() * 5,
        warna: warnaTrail[warnaIdxRef.current],
        bentuk: bentukPilihan[Math.floor(Math.random() * 3)],
      })
      if (titikRef.current.length > 50) titikRef.current.shift()
    }

    const onKlik = (e: MouseEvent) => {
      setIsKlik(true)
      setTimeout(() => setIsKlik(false), 150)

      // Tambah beberapa titik burst di posisi klik
      for (let i = 0; i < 8; i++) {
        warnaIdxRef.current = (warnaIdxRef.current + 1) % warnaTrail.length
        titikRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          umur: 1,
          ukuran: 4 + Math.random() * 8,
          warna: warnaTrail[warnaIdxRef.current],
          bentuk: 'bintang',
        })
      }

      // Tambah efek teks komik
      const teks = efekKlik[Math.floor(Math.random() * efekKlik.length)]
      const warna = warnaTrail[Math.floor(Math.random() * warnaTrail.length)]
      const efekBaru: KlikEfek = {
        id: Date.now() + Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 40,
        y: e.clientY - 20 + (Math.random() - 0.5) * 20,
        teks,
        warna,
      }
      setKlikEfek(prev => [...prev, efekBaru])
      setTimeout(() => {
        setKlikEfek(prev => prev.filter(ef => ef.id !== efekBaru.id))
      }, 800)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('click', onKlik)

    // Gambar canvas trail
    const gambar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      titikRef.current = titikRef.current.filter(t => t.umur > 0)

      titikRef.current.forEach(t => {
        const alpha = t.umur * 0.85
        const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0')
        ctx.fillStyle = t.warna + alphaHex

        if (t.bentuk === 'bintang') {
          ctx.save()
          ctx.translate(t.x, t.y)
          ctx.rotate((1 - t.umur) * 6)
          const r1 = t.ukuran * t.umur
          const r2 = r1 / 2.2
          ctx.beginPath()
          for (let j = 0; j < 5; j++) {
            const a1 = (j * 4 * Math.PI) / 5 - Math.PI / 2
            const a2 = ((j * 4 + 2) * Math.PI) / 5 - Math.PI / 2
            if (j === 0) ctx.moveTo(r1 * Math.cos(a1), r1 * Math.sin(a1))
            else ctx.lineTo(r1 * Math.cos(a1), r1 * Math.sin(a1))
            ctx.lineTo(r2 * Math.cos(a2), r2 * Math.sin(a2))
          }
          ctx.closePath()
          ctx.fill()
          ctx.restore()
        } else if (t.bentuk === 'kotak') {
          const s = t.ukuran * t.umur
          ctx.save()
          ctx.translate(t.x, t.y)
          ctx.rotate((1 - t.umur) * 4)
          ctx.fillRect(-s / 2, -s / 2, s, s)
          ctx.restore()
        } else {
          ctx.beginPath()
          ctx.arc(t.x, t.y, t.ukuran * t.umur, 0, Math.PI * 2)
          ctx.fill()
        }

        t.umur -= 0.04
      })

      animRef.current = requestAnimationFrame(gambar)
    }
    gambar()

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click', onKlik)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  if (isTouchDevice) return null

  return (
    <>
      {/* Canvas trail */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Kursor custom komik */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: posisi.x,
          top: posisi.y,
          transform: 'translate(-4px, -4px)',
        }}
        animate={{ scale: isKlik ? 0.7 : 1, rotate: isKlik ? 15 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        {/* Kursor bentuk cross/panah komik */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ filter: 'drop-shadow(1px 1px 0 #0a0a0a)' }}
        >
          {/* Anak panah */}
          <path
            d="M3 3 L3 18 L8 13 L11 20 L13.5 19 L10.5 12 L17 12 Z"
            fill={isKlik ? '#ffd700' : 'white'}
            stroke="#0a0a0a"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        {/* Ring efek saat klik */}
        <AnimatePresence>
          {isKlik && (
            <motion.div
              initial={{ scale: 0.3, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: '2px solid #ffd700',
                width: 24,
                height: 24,
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Efek teks komik saat klik */}
      <AnimatePresence>
        {klikEfek.map(ef => (
          <motion.div
            key={ef.id}
            className="fixed pointer-events-none z-[9999] font-comic text-sm font-bold select-none"
            style={{
              left: ef.x,
              top: ef.y,
              color: ef.warna,
              WebkitTextStroke: '1px #0a0a0a',
              paintOrder: 'stroke fill',
              textShadow: '2px 2px 0 #0a0a0a',
            }}
            initial={{ scale: 0, opacity: 1, rotate: -15 }}
            animate={{ scale: 1.4, opacity: 1, y: -30, rotate: 10 }}
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {ef.teks}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}
