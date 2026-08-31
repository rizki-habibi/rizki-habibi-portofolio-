'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Karakter yang dipakai — campuran kode, kanji, simbol
const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789</>{}[]#@!?=+-*&%$rizki habibi camora ai vtuber'

function HujanCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const fontSize = 14
    let cols: number
    let drops: number[]

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
      cols = Math.floor(canvas!.width / fontSize)
      drops = Array(cols).fill(1)
    }

    resize()
    window.addEventListener('resize', resize)

    function draw() {
      // Overlay gelap semi-transparan — efek trail
      ctx!.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height)

      ctx!.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]

        // Warna bergradasi — ujung bawah terang (putih), sisanya hijau/kuning komik
        const bright = drops[i] * fontSize > canvas!.height * 0.8
        if (bright) {
          ctx!.fillStyle = '#ffffff'
        } else if (Math.random() > 0.9) {
          ctx!.fillStyle = '#ffd700' // aksen kuning komik
        } else {
          ctx!.fillStyle = '#22c55e' // hijau matrix
        }

        ctx!.fillText(char, i * fontSize, drops[i] * fontSize)

        // Reset kolom ke atas secara acak
        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 35,
        pointerEvents: 'none',
        opacity: 0.85,
      }}
    />
  )
}

// Toggle button — pojok kanan atas
export default function EfekHujanKode() {
  const [aktif, setAktif] = useState(false)
  const [visible, setVisible] = useState(false)

  // Muncul setelah 3 detik
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(t)
  }, [])

  // Shortcut keyboard: Ctrl + Shift + M
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        setAktif(v => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!visible) return null

  return (
    <>
      <AnimatePresence>
        {aktif && (
          <motion.div
            key="hujan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HujanCanvas />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        onClick={() => setAktif(v => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Matrix Rain — Ctrl+Shift+M"
        aria-label="Toggle efek hujan kode"
        className="fixed top-[72px] right-2 z-50 hidden lg:flex flex-col items-center justify-center w-9 h-9"
        style={{
          background: aktif ? '#22c55e' : '#0a0a0a',
          border: `2px solid ${aktif ? '#22c55e' : '#333'}`,
          boxShadow: aktif ? '0 0 12px #22c55e88, 2px 2px 0 #0a0a0a' : '2px 2px 0 #333',
          transition: 'all 0.2s',
        }}
      >
        <span className="text-sm leading-none">
          {aktif ? '🟩' : '💻'}
        </span>
      </motion.button>
    </>
  )
}
