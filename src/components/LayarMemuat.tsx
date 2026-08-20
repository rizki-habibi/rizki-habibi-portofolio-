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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#0a0a0a' }}
        >
          <div className="halftone-yellow" />

          {/* Logo comic */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
            className="relative mb-6 z-10"
          >
            <div
              className="w-24 h-24 flex items-center justify-center font-comic text-white text-4xl"
              style={{ background: '#1a5cff', border: '4px solid #ffd700', boxShadow: '6px 6px 0 #ffd700' }}
            >
              RH
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-6 z-10"
          >
            <div className="font-comic text-comic-yellow text-2xl mb-1">RIZKI HABIBI</div>
            <p className="text-white/50 text-xs font-bold tracking-widest uppercase">MEMUAT PORTOFOLIO...</p>
          </motion.div>

          {/* Progress bar comic */}
          <div className="w-48 z-10" style={{ border: '2px solid #ffd700', background: '#0a0a0a' }}>
            <motion.div
              style={{ height: 12, background: 'repeating-linear-gradient(-45deg,#1a5cff 0px,#1a5cff 6px,#ffd700 6px,#ffd700 12px)' }}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-comic text-comic-yellow text-sm mt-2 z-10"
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
