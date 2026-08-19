'use client'

import { useEffect, useRef } from 'react'

interface Titik {
  x: number
  y: number
  umur: number
  ukuran: number
  warna: string
}

const daftarWarna = ['#ffd700', '#1a5cff', '#e63329', '#22c55e', '#8b5cf6', '#ffd700']

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const titikRef = useRef<Titik[]>([])
  const mouseRef = useRef({ x: -999, y: -999 })
  const animRef = useRef<number>(0)
  const warnaIdxRef = useRef(0)

  useEffect(() => {
    // Hanya aktif di desktop (bukan touch)
    if (window.matchMedia('(pointer: coarse)').matches) return

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

    let frameCount = 0
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      frameCount++
      if (frameCount % 2 !== 0) return // Saring setiap 2 frame supaya tidak terlalu padat

      warnaIdxRef.current = (warnaIdxRef.current + 1) % daftarWarna.length
      titikRef.current.push({
        x: e.clientX + (Math.random() - 0.5) * 6,
        y: e.clientY + (Math.random() - 0.5) * 6,
        umur: 1,
        ukuran: 3 + Math.random() * 4,
        warna: daftarWarna[warnaIdxRef.current],
      })

      // Batasi jumlah titik
      if (titikRef.current.length > 60) titikRef.current.shift()
    }
    window.addEventListener('mousemove', onMove)

    const gambar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      titikRef.current = titikRef.current.filter(t => t.umur > 0)

      titikRef.current.forEach((t, i) => {
        const alpha = t.umur * 0.8
        ctx.beginPath()

        // Bentuk bintang kecil untuk beberapa titik, lingkaran untuk sisanya
        if (i % 5 === 0) {
          // Bintang kecil
          ctx.save()
          ctx.translate(t.x, t.y)
          ctx.rotate(t.umur * 3)
          const r1 = t.ukuran, r2 = t.ukuran / 2
          for (let j = 0; j < 5; j++) {
            const angle1 = (j * 4 * Math.PI) / 5 - Math.PI / 2
            const angle2 = ((j * 4 + 2) * Math.PI) / 5 - Math.PI / 2
            if (j === 0) ctx.moveTo(r1 * Math.cos(angle1), r1 * Math.sin(angle1))
            else ctx.lineTo(r1 * Math.cos(angle1), r1 * Math.sin(angle1))
            ctx.lineTo(r2 * Math.cos(angle2), r2 * Math.sin(angle2))
          }
          ctx.closePath()
          ctx.fillStyle = t.warna + Math.round(alpha * 255).toString(16).padStart(2, '0')
          ctx.fill()
          ctx.restore()
        } else {
          // Lingkaran biasa
          ctx.arc(t.x, t.y, t.ukuran * t.umur, 0, Math.PI * 2)
          ctx.fillStyle = t.warna + Math.round(alpha * 255).toString(16).padStart(2, '0')
          ctx.fill()
        }

        t.umur -= 0.035
      })

      animRef.current = requestAnimationFrame(gambar)
    }
    gambar()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[999]"
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}
