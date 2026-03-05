'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiX, FiCommand, FiArrowUp } from 'react-icons/fi'

const shortcuts = [
  { keys: ['Ctrl', 'K'], action: 'Command Palette' },
  { keys: ['↑','↑','↓','↓','←','→','←','→','B','A'], action: 'Secret Mode 🎮' },
]

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

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 8000)
      return () => clearTimeout(timer)
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: 50 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="glass-card p-5 shadow-2xl shadow-navy-500/10 border border-charcoal-700/50">
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 text-soft-gray-500 hover:text-white transition-colors"
            >
              <FiX className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">👋</span>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Selamat Datang!</h4>
                <p className="text-soft-gray-400 text-xs leading-relaxed mb-3">
                  Portfolio ini punya beberapa fitur tersembunyi. Coba shortcut berikut:
                </p>
                <div className="space-y-1.5">
                  {shortcuts.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <div className="flex gap-1">
                        {s.keys.map((key, j) => (
                          <kbd
                            key={j}
                            className="px-1.5 py-0.5 bg-charcoal-800 rounded text-soft-gray-300 text-[10px] border border-charcoal-700 font-mono"
                          >
                            {key}
                          </kbd>
                        ))}
                      </div>
                      <span className="text-soft-gray-500">→</span>
                      <span className="text-soft-gray-300">{s.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
