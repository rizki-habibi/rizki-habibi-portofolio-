'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)
  const [tampil, setTampil] = useState(false)

  // Tampil setelah 2 detik
  useEffect(() => {
    const timer = setTimeout(() => setTampil(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Ambil preferensi dari localStorage
  useEffect(() => {
    const tersimpan = localStorage.getItem('darkMode')
    if (tersimpan === 'true') {
      setDarkMode(true)
      document.documentElement.classList.add('dark-mode')
      document.body.classList.add('dark-mode')
    }
  }, [])

  const toggle = () => {
    const next = !darkMode
    setDarkMode(next)
    localStorage.setItem('darkMode', String(next))

    if (next) {
      document.documentElement.classList.add('dark-mode')
      document.body.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
      document.body.classList.remove('dark-mode')
    }
  }

  return (
    <AnimatePresence>
      {tampil && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0 }}
          className="fixed z-40"
          style={{ bottom: 80, right: 16 }}
        >
          <motion.button
            onClick={toggle}
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.92, rotate: 20 }}
            className="dark-mode-toggle relative group"
            title={darkMode ? 'Mode Terang' : 'Mode Gelap'}
            aria-label={darkMode ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ☀️
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  🌙
                </motion.span>
              )}
            </AnimatePresence>

            {/* Tooltip */}
            <div
              className="absolute right-full mr-2 top-1/2 -translate-y-1/2 font-comic text-[9px] text-comic-black px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ background: '#ffd700', border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
            >
              {darkMode ? 'MODE TERANG' : 'MODE GELAP'}
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
