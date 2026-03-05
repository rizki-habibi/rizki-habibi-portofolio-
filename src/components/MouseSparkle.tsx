'use client'

import { useEffect, useState } from 'react'

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  color: string
}

const colors = ['#60a5fa', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981']

export default function MouseSparkle() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const count = 6 + Math.floor(Math.random() * 4)
      const newSparkles: Sparkle[] = Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX + (Math.random() - 0.5) * 40,
        y: e.clientY + (Math.random() - 0.5) * 40,
        size: 3 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
      setSparkles((prev) => [...prev, ...newSparkles])
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => !newSparkles.find((n) => n.id === s.id)))
      }, 700)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[70]">
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="absolute animate-sparkle-pop rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
          }}
        />
      ))}
    </div>
  )
}
