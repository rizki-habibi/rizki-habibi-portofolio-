'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiHome, FiFolder, FiAward, FiFileText, FiMail, FiDownload, FiGithub, FiArrowUp, FiBookOpen, FiCode, FiUser } from 'react-icons/fi'

const commands = [
  { id: 'home', label: 'Beranda', desc: 'Chapter 00 — Origin', icon: FiHome, action: '#home', type: 'navigate' },
  { id: 'about', label: 'Tentang Saya', desc: 'Chapter 01 — My Story', icon: FiUser, action: '#cerita', type: 'navigate' },
  { id: 'skills', label: 'Keahlian / Skills', desc: 'Chapter 02 — My Powers', icon: FiCode, action: '#skills', type: 'navigate' },
  { id: 'projects', label: 'Proyek / Missions', desc: 'Chapter 03 — Missions', icon: FiFolder, action: '#projects', type: 'navigate' },
  { id: 'certificates', label: 'Sertifikat', desc: 'Chapter 05 — Cards', icon: FiAward, action: '#certificates', type: 'navigate' },
  { id: 'cv', label: 'Curriculum Vitae', desc: 'My Profile', icon: FiFileText, action: '#cv', type: 'navigate' },
  { id: 'contact', label: 'Kontak / Hubungi', desc: 'Final Chapter', icon: FiMail, action: '#contact', type: 'navigate' },
  { id: 'story', label: 'Buka Story Book', desc: 'Buku Komik Interaktif', icon: FiBookOpen, action: 'story', type: 'action' },
  { id: 'download-cv', label: 'Download CV', desc: 'Unduh file PDF', icon: FiDownload, action: '/cv/CV_Rizki_Habibi.pdf', type: 'download' },
  { id: 'github', label: 'GitHub Profile', desc: 'github.com/kikiproject', icon: FiGithub, action: 'https://github.com/kikiproject', type: 'link' },
  { id: 'top', label: 'Kembali ke Atas', desc: 'Scroll to top', icon: FiArrowUp, action: 'scroll-top', type: 'action' },
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filtered = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.desc.toLowerCase().includes(search.toLowerCase())
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
        a.href = cmd.action; a.download = ''; a.click()
        break
      }
      case 'link':
        window.open(cmd.action, '_blank', 'noopener,noreferrer')
        break
      case 'action':
        if (cmd.action === 'scroll-top') window.scrollTo({ top: 0, behavior: 'smooth' })
        if (cmd.action === 'story') {
          // Trigger klik tombol MY STORY di Navbar
          const btn = document.querySelector('[data-story-trigger]') as HTMLButtonElement
          btn?.click()
        }
        break
    }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(p => !p); setSearch(''); setSelectedIndex(0)
      }
      if (!isOpen) return
      if (e.key === 'Escape') { setIsOpen(false); setSearch('') }
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIndex(p => (p + 1) % filtered.length) }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIndex(p => (p - 1 + filtered.length) % filtered.length) }
      if (e.key === 'Enter' && filtered[selectedIndex]) executeCommand(filtered[selectedIndex])
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, filtered, selectedIndex, executeCommand])

  useEffect(() => { setSelectedIndex(0) }, [search])

  return (
    <>
      {/* ── Tombol trigger — pojok kanan bawah, di atas NowPlaying & BackToTop ── */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() => { setIsOpen(true); setSearch('') }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 font-comic text-[#0a0a0a] text-xs px-3 py-2"
        style={{ background: '#fff', border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
        title="Command Palette (Ctrl+K)"
      >
        <span className="font-bold tracking-wider">⌘</span>
        <span className="hidden sm:inline">Ctrl + K</span>
      </motion.button>

      {/* ── Modal Palette ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4"
            style={{ background: 'rgba(10,10,10,0.75)', backdropFilter: 'blur(4px)' }}
            onClick={() => { setIsOpen(false); setSearch('') }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -16 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="w-full max-w-lg overflow-hidden"
              style={{ background: '#fafaf7', border: '3px solid #0a0a0a', boxShadow: '8px 8px 0 #0a0a0a' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-3"
                style={{ background: '#0a0a0a', borderBottom: '2px solid #ffd700' }}>
                <FiSearch className="w-4 h-4 text-yellow-400 shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Cari halaman atau aksi..."
                  autoFocus
                  className="flex-1 bg-transparent text-white placeholder-white/30 text-sm outline-none font-comic tracking-wide"
                />
                <kbd className="hidden sm:flex items-center px-2 py-0.5 font-comic text-[10px] text-white/40"
                  style={{ border: '1px solid rgba(255,255,255,0.15)' }}>ESC</kbd>
              </div>

              {/* Hasil */}
              <div className="max-h-72 overflow-y-auto">
                {filtered.length === 0 ? (
                  <div className="px-4 py-8 text-center font-comic text-sm text-[#0a0a0a]/40">
                    Tidak ditemukan — coba kata lain
                  </div>
                ) : (
                  filtered.map((cmd, i) => (
                    <button
                      key={cmd.id}
                      onClick={() => executeCommand(cmd)}
                      onMouseEnter={() => setSelectedIndex(i)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                      style={{
                        background: selectedIndex === i ? '#ffd700' : 'transparent',
                        borderBottom: '1px solid rgba(10,10,10,0.08)',
                      }}
                    >
                      <div className="w-8 h-8 flex items-center justify-center shrink-0"
                        style={{
                          background: selectedIndex === i ? '#0a0a0a' : '#f0f0eb',
                          border: '2px solid #0a0a0a',
                        }}>
                        <cmd.icon className={`w-4 h-4 ${selectedIndex === i ? 'text-yellow-400' : 'text-[#0a0a0a]'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-comic text-sm font-bold truncate ${selectedIndex === i ? 'text-[#0a0a0a]' : 'text-[#0a0a0a]'}`}>
                          {cmd.label}
                        </div>
                        <div className="text-[10px] font-bold tracking-wider truncate"
                          style={{ color: selectedIndex === i ? 'rgba(10,10,10,0.6)' : 'rgba(10,10,10,0.35)' }}>
                          {cmd.desc}
                        </div>
                      </div>
                      {selectedIndex === i && (
                        <span className="font-comic text-[10px] text-[#0a0a0a]/60 shrink-0">Enter ↵</span>
                      )}
                    </button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2"
                style={{ borderTop: '2px solid #0a0a0a', background: '#f0f0eb' }}>
                <span className="font-comic text-[10px] text-[#0a0a0a]/50 tracking-widest">QUICK NAVIGATION</span>
                <div className="flex gap-3 font-comic text-[10px] text-[#0a0a0a]/40">
                  <span>↑↓ pilih</span><span>↵ buka</span><span>ESC tutup</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
