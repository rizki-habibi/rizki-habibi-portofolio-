'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrameId: number
    const dots: { x: number; y: number; baseAlpha: number; phase: number }[] = []
    const spacing = 40
    let mouseX = -1000
    let mouseY = -1000

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      dots.length = 0
      for (let x = spacing / 2; x < canvas.width; x += spacing) {
        for (let y = spacing / 2; y < canvas.height; y += spacing) {
          dots.push({
            x,
            y,
            baseAlpha: 0.08 + Math.random() * 0.07,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const time = Date.now() * 0.001

      for (const dot of dots) {
        const dx = mouseX - dot.x
        const dy = mouseY - dot.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const proximity = Math.max(0, 1 - dist / 150)
        const pulse = Math.sin(time * 1.5 + dot.phase) * 0.03
        const alpha = dot.baseAlpha + pulse + proximity * 0.4
        const size = 1.5 + proximity * 2

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${Math.min(alpha, 0.8)})`
        ctx.fill()
      }

      animFrameId = requestAnimationFrame(draw)
    }

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', handleMouse)
    canvas.addEventListener('mouseleave', handleLeave)

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouse)
      canvas.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
