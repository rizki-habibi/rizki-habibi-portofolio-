'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'BERANDA', href: '#home' },
  { name: 'TENTANG', href: '#about' },
  { name: 'KEAHLIAN', href: '#skills' },
  { name: 'PROYEK', href: '#projects' },
  { name: 'PERJALANAN', href: '#timeline' },
  { name: 'KONTAK', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 120 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-comic-white border-b-4 border-comic-black shadow-[0_4px_0_#0a0a0a]'
          : 'bg-comic-white/95 border-b-2 border-comic-black/30'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="flex items-center gap-2"
          >
            <div
              className="w-10 h-10 flex items-center justify-center font-comic text-white text-base"
              style={{
                background: '#1a5cff',
                border: '3px solid #0a0a0a',
                boxShadow: '3px 3px 0 #0a0a0a',
              }}
            >
              RH
            </div>
            <div className="hidden sm:block">
              <span className="font-comic text-comic-black text-lg tracking-wide">RIZKI</span>
              <span className="font-comic text-comic-blue text-lg tracking-wide ml-1">HABIBI</span>
              <div className="text-[9px] font-bold text-comic-black/40 tracking-widest uppercase -mt-1">PORTOFOLIO</div>
            </div>
          </motion.a>

          {/* Desktop Navigation — comic strip style */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center border-2 border-comic-black" style={{ boxShadow: '3px 3px 0 #0a0a0a' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ backgroundColor: '#ffd700', y: -2 }}
                  transition={{ duration: 0.1 }}
                  className={`font-comic text-sm px-4 py-2 text-comic-black hover:text-comic-black transition-colors ${i < navLinks.length - 1 ? 'border-r-2 border-comic-black' : ''
                    }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="https://github.com/rizki-habibi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ backgroundColor: '#0a0a0a', color: '#ffd700' }}
                className="flex items-center gap-1 px-4 py-2 border-l-2 border-comic-black font-bold text-sm bg-comic-black text-white transition-colors"
              >
                <FiGithub className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 font-bold"
            style={{ border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}
          >
            {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-comic-white border-t-2 border-comic-black"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-3 font-comic text-comic-black hover:bg-comic-yellow transition-colors border border-comic-black/20 mb-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://github.com/rizki-habibi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-3 font-bold text-sm bg-comic-black text-white"
              >
                <FiGithub className="w-4 h-4" />
                <span>@rizki-habibi</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
