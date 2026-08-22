'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'

export default function WelcomeToast() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const visited = sessionStorage.getItem('welcomed')
    if (!visited) {
      const timer = setTimeout(() => {
        setShow(true)
        sessionStorage.setItem('welcomed', '1')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  // Auto-tutup setelah 8 detik
  useEffect(() => {
    if (!show) return
    const t = setTimeout(() => setShow(false), 8000)
    return () => clearTimeout(t)
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 160, damping: 18 }}
          // Posisi: pojok kiri bawah agar tidak tabrakan dengan Ctrl+K (kanan bawah)
          className="fixed bottom-20 left-4 z-50 max-w-xs"
        >
          <div
            className="relative p-4"
            style={{
              background: '#fafaf7',
              border: '3px solid #0a0a0a',
              boxShadow: '5px 5px 0 #0a0a0a',
            }}
          >
            {/* Tombol tutup */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-[#0a0a0a]/50 hover:text-[#0a0a0a] transition-colors"
              style={{ border: '1.5px solid #0a0a0a30' }}
            >
              <FiX className="w-3.5 h-3.5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-3 pr-6">
              <div
                className="w-8 h-8 flex items-center justify-center shrink-0 font-comic text-white text-sm"
                style={{ background: '#1a5cff', border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
              >
                👋
              </div>
              <div>
                <div className="font-comic text-sm text-[#0a0a0a] font-bold leading-none">Selamat Datang!</div>
                <div className="text-[10px] text-[#0a0a0a]/50 font-bold tracking-wider mt-0.5">RIZKI HABIBI -- PORTFOLIO</div>
              </div>
            </div>

            {/* Isi */}
            <p className="text-xs text-[#0a0a0a]/70 leading-relaxed mb-3">
              Portfolio ini punya fitur tersembunyi. Coba shortcut berikut:
            </p>

            {/* Shortcut list */}
            <div className="space-y-1.5">
              {[
                { keys: ['Ctrl', 'K'], aksi: 'Command Palette' },
                { keys: ['↑↑↓↓←→←→BA'], aksi: 'Secret Mode 🎮' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <div className="flex gap-1 shrink-0">
                    {s.keys.map((k, j) => (
                      <kbd
                        key={j}
                        className="font-comic text-[10px] px-1.5 py-0.5 text-[#0a0a0a]"
                        style={{ background: '#ffd700', border: '1.5px solid #0a0a0a', boxShadow: '1px 1px 0 #0a0a0a' }}
                      >
                        {k}
                      </kbd>
                    ))}
                  </div>
                  <span className="text-[#0a0a0a]/40">→</span>
                  <span className="font-bold text-[#0a0a0a]/70 text-[11px]">{s.aksi}</span>
                </div>
              ))}
            </div>

            {/* Progress bar auto-close */}
            <div className="mt-3 h-0.5" style={{ background: '#e8e8e4' }}>
              <motion.div
                className="h-full"
                style={{ background: '#1a5cff' }}
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 8, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
