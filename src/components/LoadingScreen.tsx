'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 300)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-charcoal-950"
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Glow orbs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-64 h-64 bg-navy-500/20 rounded-full blur-3xl"
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="relative mb-8"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center shadow-2xl shadow-navy-500/30">
              <span className="text-white font-bold text-4xl">RH</span>
            </div>
            {/* Orbiting dots */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-navy-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'linear' }}
                style={{
                  top: '50%', left: '50%',
                  transformOrigin: `${40 + i * 8}px 0px`,
                }}
              />
            ))}
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <h2 className="text-xl font-bold text-white mb-1">Rizki Habibi</h2>
            <p className="text-soft-gray-500 text-sm">Memuat portofolio...</p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-charcoal-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-navy-500 via-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-soft-gray-600 mt-2 font-mono"
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
