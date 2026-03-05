'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiTerminal, FiMinimize2, FiMaximize2, FiX } from 'react-icons/fi'

const commands: Record<string, string> = {
  help: `Perintah yang tersedia:
  help       - Tampilkan bantuan
  about      - Tentang Rizki Habibi
  skills     - Keahlian teknis
  projects   - Daftar proyek
  contact    - Info kontak
  cert       - Jumlah sertifikat
  bnsp       - Info sertifikasi BNSP
  social     - Link media sosial
  secret     - ???
  clear      - Bersihkan terminal
  exit       - Tutup terminal`,
  about: `╔══════════════════════════════╗
║      RIZKI HABIBI           ║
║  Mahasiswa STI Semester 6   ║
║  Web Developer & Learner    ║
║  ITSM - Jember, Indonesia   ║
╚══════════════════════════════╝`,
  skills: `Tech Stack:
  ├── Laravel ████████████████████ 90%
  ├── PHP    █████████████████░░░ 85%
  ├── Next.js ███████████████░░░░ 75%
  ├── JS/TS  ████████████████░░░░ 80%
  ├── Tailwind████████████████████ 90%
  ├── MySQL  ████████████████░░░░ 80%
  └── HTML/CSS███████████████████ 95%`,
  projects: `Proyek:
  [1] Sistem Integrasi KVT - Laravel, MySQL
  [2] Sistem K-Amu All in One - Laravel, Livewire
  [3] Laravel Inventory System - CRUD, Chart.js
  [4] REST API Service - JWT, Swagger`,
  contact: `Email   : rizkihabibi2432@gmail.com
Phone   : +62 882-009-725-053
GitHub  : github.com/kikiproject
Location: Jember, Indonesia`,
  cert: `Total Sertifikat: 65+
Kategori:
  AI & Data       : 10 sertifikat
  Cyber Security  : 11 sertifikat
  Digital Marketing: 11 sertifikat
  Programming     : 4 sertifikat
  Soft Skills     : 15+ sertifikat
  + 1 Sertifikasi BNSP Profesional`,
  bnsp: `╔═══════════════════════════════════════╗
║  SERTIFIKAT KOMPETENSI BNSP          ║
║  No. 62090 2513 3 0156814 2025       ║
║                                       ║
║  Pengembang Web Pratama              ║
║  Junior Web Developer                ║
║                                       ║
║  Bidang: Pengembangan Website        ║
║  Berlaku: 3 Tahun (Nov 2025)        ║
║  LSP: Teknologi Digital             ║
║  Status: ✅ VERIFIED                 ║
╚═══════════════════════════════════════╝`,
  social: `GitHub    → github.com/kikiproject
LinkedIn  → linkedin.com/in/rizkihabibi
Instagram → instagram.com/rizkihabibi
Email     → rizkihabibi2432@gmail.com`,
  secret: `🔮 Kamu menemukan easter egg!
Coba tekan Konami Code: ↑↑↓↓←→←→BA
di halaman utama untuk membuka Secret Mode!`,
}

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [history, setHistory] = useState<{ type: 'input' | 'output'; text: string }[]>([
    { type: 'output', text: 'Selamat datang di RH Terminal v1.0.0\nKetik "help" untuk melihat perintah yang tersedia.\n' },
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.trim().toLowerCase()
    setHistory((prev) => [...prev, { type: 'input', text: `$ ${input}` }])

    if (cmd === 'clear') {
      setHistory([])
    } else if (cmd === 'exit') {
      setIsOpen(false)
    } else if (commands[cmd]) {
      setHistory((prev) => [...prev, { type: 'output', text: commands[cmd] }])
    } else {
      setHistory((prev) => [...prev, { type: 'output', text: `bash: ${cmd}: command not found\nKetik "help" untuk bantuan.` }])
    }
    setInput('')
  }

  return (
    <>
      {/* Toggle button */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-20 z-50 w-11 h-11 rounded-xl bg-charcoal-900/90 backdrop-blur-sm border border-charcoal-700 hover:border-green-500/50 shadow-lg flex items-center justify-center text-soft-gray-400 hover:text-green-400 transition-all group"
          title="Open Terminal"
        >
          <FiTerminal className="w-5 h-5" />
        </motion.button>
      )}

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{
              opacity: isMinimized ? 0.7 : 1,
              y: 0,
              scale: 1,
              height: isMinimized ? 40 : 380,
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed bottom-6 left-6 z-50 w-[420px] max-w-[calc(100vw-48px)] bg-charcoal-950 border border-charcoal-700 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-charcoal-900 border-b border-charcoal-800 cursor-move">
              <div className="flex items-center gap-2">
                <FiTerminal className="w-3.5 h-3.5 text-green-400" />
                <span className="text-xs font-mono text-soft-gray-400">rh@portfolio:~</span>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:bg-charcoal-800 rounded text-soft-gray-500 hover:text-yellow-400 transition-colors">
                  {isMinimized ? <FiMaximize2 className="w-3 h-3" /> : <FiMinimize2 className="w-3 h-3" />}
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-charcoal-800 rounded text-soft-gray-500 hover:text-red-400 transition-colors">
                  <FiX className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Content */}
            {!isMinimized && (
              <div className="h-[340px] flex flex-col">
                <div className="flex-1 overflow-y-auto p-3 font-mono text-xs">
                  {history.map((entry, i) => (
                    <div key={i} className={`whitespace-pre-wrap mb-1 ${entry.type === 'input' ? 'text-green-400' : 'text-soft-gray-400'}`}>
                      {entry.text}
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-2 border-t border-charcoal-800">
                  <span className="text-green-400 text-xs font-mono">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent text-green-300 text-xs font-mono outline-none placeholder:text-charcoal-600"
                    placeholder="ketik perintah..."
                    autoComplete="off"
                    spellCheck={false}
                  />
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
