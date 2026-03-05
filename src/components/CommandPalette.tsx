'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiHome, FiFolder, FiAward, FiFileText, FiMail, FiDownload, FiGithub, FiCommand, FiArrowUp } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

const commands = [
  { id: 'home', label: 'Ke Beranda', icon: FiHome, action: '#home', type: 'navigate' },
  { id: 'projects', label: 'Lihat Proyek', icon: FiFolder, action: '#projects', type: 'navigate' },
  { id: 'certificates', label: 'Sertifikat & Pelatihan', icon: FiAward, action: '#certificates', type: 'navigate' },
  { id: 'cv', label: 'Curriculum Vitae', icon: FiFileText, action: '#cv', type: 'navigate' },
  { id: 'contact', label: 'Hubungi Saya', icon: FiMail, action: '#contact', type: 'navigate' },
  { id: 'download-cv', label: 'Download CV', icon: FiDownload, action: '/cv/CV_Rizki_Habibi.pdf', type: 'download' },
  { id: 'github', label: 'GitHub Profile', icon: FiGithub, action: 'https://github.com/kikiproject', type: 'link' },
  { id: 'top', label: 'Kembali ke Atas', icon: FiArrowUp, action: 'scroll-top', type: 'action' },
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  )

  const executeCommand = useCallback((cmd: typeof commands[0]) => {
    setIsOpen(false)
    setSearch('')
    setSelectedIndex(0)

    switch (cmd.type) {
      case 'navigate': {
        const el = document.querySelector(cmd.action)
        el?.scrollIntoView({ behavior: 'smooth' })
        break
      }
      case 'download': {
        const a = document.createElement('a')
        a.href = cmd.action
        a.download = ''
        a.click()
        break
      }
      case 'link':
        window.open(cmd.action, '_blank', 'noopener,noreferrer')
        break
      case 'action':
        if (cmd.action === 'scroll-top') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        break
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
        setSearch('')
        setSelectedIndex(0)
      }

      if (!isOpen) return

      if (e.key === 'Escape') {
        setIsOpen(false)
        setSearch('')
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filtered.length)
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
      }
      if (e.key === 'Enter' && filtered[selectedIndex]) {
        executeCommand(filtered[selectedIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filtered, selectedIndex, executeCommand])

  useEffect(() => {
    setSelectedIndex(0)
  }, [search])

  return (
    <>
      {/* Floating Hint Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => { setIsOpen(true); setSearch(''); }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-charcoal-900/90 backdrop-blur-md border border-charcoal-700 hover:border-navy-500/50 shadow-xl hover:shadow-navy-500/20 transition-all group"
      >
        <FiCommand className="w-4 h-4 text-soft-gray-400 group-hover:text-navy-400 transition-colors" />
        <span className="text-xs text-soft-gray-500 hidden sm:inline">Ctrl + K</span>
      </motion.button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh] px-4 bg-black/60 backdrop-blur-sm"
            onClick={() => { setIsOpen(false); setSearch(''); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full max-w-lg bg-charcoal-900 border border-charcoal-700 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-charcoal-800">
                <FiSearch className="w-5 h-5 text-soft-gray-500 flex-shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari halaman, aksi..."
                  autoFocus
                  className="flex-1 bg-transparent text-white placeholder:text-soft-gray-500 text-sm outline-none"
                />
                <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-[10px] font-mono text-soft-gray-500 bg-charcoal-800 rounded-md border border-charcoal-700">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[320px] overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="px-4 py-8 text-center text-soft-gray-500 text-sm">
                    Tidak ditemukan
                  </div>
                ) : (
                  filtered.map((cmd, i) => (
                    <button
                      key={cmd.id}
                      onClick={() => executeCommand(cmd)}
                      onMouseEnter={() => setSelectedIndex(i)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        selectedIndex === i
                          ? 'bg-navy-600/20 text-white'
                          : 'text-soft-gray-400 hover:text-white'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        selectedIndex === i ? 'bg-navy-600/40' : 'bg-charcoal-800'
                      }`}>
                        <cmd.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm flex-1">{cmd.label}</span>
                      {selectedIndex === i && (
                        <motion.span
                          initial={{ opacity: 0, x: 5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-xs text-soft-gray-500"
                        >
                          Enter ↵
                        </motion.span>
                      )}
                    </button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 border-t border-charcoal-800 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10px] text-soft-gray-600">
                  <HiSparkles className="w-3 h-3" />
                  <span>Quick Navigation</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-soft-gray-600">
                  <span>↑↓ navigate</span>
                  <span>↵ select</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
