'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiSettings, FiZap, FiEye, FiEyeOff, FiSun, FiMoon, FiMousePointer, FiVolume2, FiVolumeX } from 'react-icons/fi'

// ─── Tipe cursor effect ───────────────────────────────────────────────
type CursorEffect = 'default' | 'star' | 'trail' | 'none'

export default function PanelFitur() {
  const [buka, setBuka] = useState(false)
  const [cursorEffect, setCursorEffect] = useState<CursorEffect>('default')
  const [darkMode, setDarkMode] = useState(false)
  const [suara, setSuara] = useState(false)
  const [animasi, setAnimasi] = useState(true)

  // Sync dark mode dengan Navbar
  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved === 'true') setDarkMode(true)
    const saved2 = localStorage.getItem('cursorEffect') as CursorEffect | null
    if (saved2) setCursorEffect(saved2)
  }, [])

  const toggleDark = () => {
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

  const setCursor = (type: CursorEffect) => {
    setCursorEffect(type)
    localStorage.setItem('cursorEffect', type)
    // Efek kursor
    if (type === 'none') {
      document.body.style.cursor = 'none'
    } else if (type === 'default') {
      document.body.style.cursor = ''
    } else if (type === 'star') {
      document.body.style.cursor = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Ctext y=\'24\' font-size=\'24\'%3E⭐%3C/text%3E%3C/svg%3E") 16 16, auto'
    } else if (type === 'trail') {
      document.body.style.cursor = ''
    }
  }

  const toggleAnimasi = () => {
    const next = !animasi
    setAnimasi(next)
    // Disable CSS animations
    if (!next) {
      document.documentElement.style.setProperty('--animation-duration', '0s')
    } else {
      document.documentElement.style.removeProperty('--animation-duration')
    }
  }

  const fiturList = [
    {
      group: 'TAMPILAN',
      items: [
        {
          icon: darkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />,
          label: darkMode ? 'Mode Terang' : 'Mode Gelap',
          aktif: darkMode,
          onClick: toggleDark,
          warna: '#ffd700',
        },
        {
          icon: animasi ? <FiEye className="w-4 h-4" /> : <FiEyeOff className="w-4 h-4" />,
          label: animasi ? 'Animasi ON' : 'Animasi OFF',
          aktif: animasi,
          onClick: toggleAnimasi,
          warna: '#22c55e',
        },
      ],
    },
    {
      group: 'KURSOR',
      items: [
        {
          icon: <FiMousePointer className="w-4 h-4" />,
          label: 'Default',
          aktif: cursorEffect === 'default',
          onClick: () => setCursor('default'),
          warna: '#0a0a0a',
        },
        {
          icon: <span className="text-sm">⭐</span>,
          label: 'Bintang',
          aktif: cursorEffect === 'star',
          onClick: () => setCursor('star'),
          warna: '#f59e0b',
        },
        {
          icon: <FiZap className="w-4 h-4" />,
          label: 'Trail',
          aktif: cursorEffect === 'trail',
          onClick: () => setCursor('trail'),
          warna: '#8b5cf6',
        },
        {
          icon: <FiEyeOff className="w-4 h-4" />,
          label: 'Sembunyi',
          aktif: cursorEffect === 'none',
          onClick: () => setCursor('none'),
          warna: '#e63329',
        },
      ],
    },
    {
      group: 'SUARA',
      items: [
        {
          icon: suara ? <FiVolume2 className="w-4 h-4" /> : <FiVolumeX className="w-4 h-4" />,
          label: suara ? 'Suara ON' : 'Suara OFF',
          aktif: suara,
          onClick: () => setSuara(v => !v),
          warna: '#1a5cff',
        },
      ],
    },
  ]

  return (
    <>
      {/* Tombol trigger — kanan tengah */}
      <motion.button
        onClick={() => setBuka(v => !v)}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, duration: 0.4 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center justify-center gap-0.5"
        style={{
          background: buka ? '#1a5cff' : '#0a0a0a',
          borderRadius: '8px 0 0 8px',
          padding: '10px 6px',
          border: `2px solid ${buka ? '#1a5cff' : '#333'}`,
          borderRight: 'none',
          boxShadow: '-3px 3px 0 rgba(0,0,0,0.3)',
          writingMode: 'vertical-rl',
        }}
        title="Fitur Unggulan"
      >
        <FiSettings className="w-4 h-4 text-white mb-1" style={{ writingMode: 'horizontal-tb' }} />
        <span className="font-comic text-[9px] text-white/70 tracking-widest">FITUR</span>
      </motion.button>

      {/* Panel sidebar kanan */}
      <AnimatePresence>
        {buka && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 z-40 hidden lg:flex flex-col"
            style={{
              width: 220,
              background: '#0a0a0a',
              borderLeft: '3px solid #1a5cff',
              boxShadow: '-8px 0 30px rgba(0,0,0,0.5)',
            }}
          >
            {/* Header panel */}
            <div className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: '2px solid #222' }}>
              <div className="flex items-center gap-2">
                <FiSettings className="w-4 h-4 text-[#1a5cff]" />
                <span className="font-comic text-sm text-white">FITUR UNGGULAN</span>
              </div>
              <button onClick={() => setBuka(false)} className="text-white/40 hover:text-white transition-colors">
                <FiX className="w-4 h-4" />
              </button>
            </div>

            {/* Konten */}
            <div className="flex-1 overflow-y-auto p-3 space-y-4">
              {fiturList.map(group => (
                <div key={group.group}>
                  <div className="font-bold text-[9px] text-white/30 tracking-widest mb-2">{group.group}</div>
                  <div className="space-y-1.5">
                    {group.items.map(item => (
                      <button
                        key={item.label}
                        onClick={item.onClick}
                        className="w-full flex items-center gap-2.5 px-3 py-2.5 font-bold text-xs transition-all hover:opacity-90"
                        style={{
                          background: item.aktif ? item.warna + '22' : 'rgba(255,255,255,0.05)',
                          border: `1.5px solid ${item.aktif ? item.warna : 'rgba(255,255,255,0.1)'}`,
                          color: item.aktif ? item.warna : 'rgba(255,255,255,0.6)',
                          borderRadius: 4,
                        }}
                      >
                        <span style={{ color: item.aktif ? item.warna : 'rgba(255,255,255,0.4)' }}>
                          {item.icon}
                        </span>
                        {item.label}
                        {item.aktif && (
                          <span className="ml-auto text-[10px]" style={{ color: item.warna }}>●</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-3" style={{ borderTop: '1px solid #222' }}>
              <div className="text-[10px] text-white/20 font-bold text-center">
                Pengaturan tersimpan otomatis
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
