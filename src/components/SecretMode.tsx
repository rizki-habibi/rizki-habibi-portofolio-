'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiTerminal, FiEye, FiEyeOff } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

// Konami Code: ↑↑↓↓←→←→BA
const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

const secretFacts = [
  '🎮 Hobi main game strategi di waktu luang',
  '☕ Koding terbaik saya dimulai setelah jam 10 malam',
  '🎵 Selalu coding dengan musik lofi hip hop',
  '🐛 Bug terpanjang yang pernah saya debug: 12 jam untuk 1 titik koma',
  '📚 Membaca dokumentasi adalah hobi tersembunyi saya',
  '🌙 Night owl — productivity peak jam 11 malam - 3 pagi',
  '🎯 Target: menjadi Full Stack Developer sebelum lulus',
  '💡 Proyek pertama: website HTML sederhana di Notepad',
  '🚀 Sudah menulis 10,000+ baris kode Laravel',
  '🏆 Achievement unlocked: menemukan secret mode ini!',
]

function MatrixRain({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[];:='
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#0f0'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillStyle = `rgba(0, ${150 + Math.random() * 105}, 0, ${0.5 + Math.random() * 0.5})`
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 40)
    return () => clearInterval(interval)
  }, [active])

  if (!active) return null
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}

export default function SecretMode() {
  const [isActive, setIsActive] = useState(false)
  const [inputSequence, setInputSequence] = useState<string[]>([])
  const [showHint, setShowHint] = useState(false)
  const [revealedFacts, setRevealedFacts] = useState<number[]>([])

  const checkKonami = useCallback((sequence: string[]) => {
    const recent = sequence.slice(-KONAMI_CODE.length)
    return recent.length === KONAMI_CODE.length && recent.every((key, i) => key === KONAMI_CODE[i])
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger in inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      setInputSequence((prev) => {
        const next = [...prev, e.key].slice(-KONAMI_CODE.length)
        if (checkKonami(next)) {
          setIsActive(true)
        }
        return next
      })
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [checkKonami])

  // Show hint after 30s on page
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 30000)
    return () => clearTimeout(timer)
  }, [])

  const revealFact = (index: number) => {
    if (!revealedFacts.includes(index)) {
      setRevealedFacts((prev) => [...prev, index])
    }
  }

  return (
    <>
      {/* Subtle hint */}
      <AnimatePresence>
        {showHint && !isActive && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-20 right-6 z-40"
          >
            <div className="px-3 py-2 bg-charcoal-900/90 backdrop-blur-sm border border-charcoal-700 rounded-lg text-[10px] text-soft-gray-600 font-mono">
              ↑↑↓↓←→←→BA
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret Mode Overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] overflow-y-auto"
          >
            <MatrixRain active={isActive} />

            <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                className="w-full max-w-2xl bg-charcoal-950/95 backdrop-blur-xl border border-green-500/30 rounded-2xl shadow-2xl shadow-green-500/10 overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-green-500/20 bg-charcoal-900/50">
                  <div className="flex items-center gap-3">
                    <FiTerminal className="w-5 h-5 text-green-400" />
                    <div>
                      <h3 className="text-green-400 font-bold text-sm font-mono">SECRET MODE ACTIVATED</h3>
                      <p className="text-green-400/50 text-[10px] font-mono">Konami Code Detected</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsActive(false)}
                    className="p-2 rounded-lg hover:bg-charcoal-800 transition-colors text-green-400/60 hover:text-green-400"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Secret ASCII */}
                  <pre className="text-green-500/60 text-[8px] md:text-[10px] font-mono text-center mb-6 leading-tight">
{`
  ██████╗ ██╗  ██╗    ███████╗███████╗ ██████╗██████╗ ███████╗████████╗
  ██╔══██╗██║  ██║    ██╔════╝██╔════╝██╔════╝██╔══██╗██╔════╝╚══██╔══╝
  ██████╔╝███████║    ███████╗█████╗  ██║     ██████╔╝█████╗     ██║
  ██╔══██╗██╔══██║    ╚════██║██╔══╝  ██║     ██╔══██╗██╔══╝     ██║
  ██║  ██║██║  ██║    ███████║███████╗╚██████╗██║  ██║███████╗   ██║
  ╚═╝  ╚═╝╚═╝  ╚═╝    ╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝
`}
                  </pre>

                  <p className="text-center text-green-400/80 text-sm mb-6">
                    Selamat! Kamu menemukan ruang rahasia saya. 🎉
                  </p>

                  {/* Secret Facts */}
                  <div className="space-y-2">
                    {secretFacts.map((fact, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <button
                          onClick={() => revealFact(i)}
                          className="w-full text-left p-3 rounded-lg bg-charcoal-800/50 border border-green-500/10 hover:border-green-500/30 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-green-500/40 font-mono text-xs">[{String(i + 1).padStart(2, '0')}]</span>
                            {revealedFacts.includes(i) ? (
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-green-300 text-sm"
                              >
                                {fact}
                              </motion.span>
                            ) : (
                              <span className="text-green-500/30 text-sm flex items-center gap-2">
                                <FiEyeOff className="w-3 h-3" />
                                Klik untuk membuka rahasia...
                              </span>
                            )}
                          </div>
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="mt-6 pt-4 border-t border-green-500/10 flex items-center justify-between">
                    <span className="text-green-500/40 text-xs font-mono">
                      {revealedFacts.length}/{secretFacts.length} secrets revealed
                    </span>
                    <span className="text-green-500/40 text-xs font-mono">
                      Press ESC or click X to exit
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
