'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiArrowUp, FiMail } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'

const links = [
  { icon: FiGithub, href: 'https://github.com/rizki-habibi', label: 'GitHub' },
  { icon: SiLinkedin, href: 'https://linkedin.com/in/rizki-habibi', label: 'LinkedIn' },
  { icon: SiInstagram, href: 'https://instagram.com/rizkihabibi', label: 'Instagram' },
  { icon: SiWhatsapp, href: 'https://wa.me/62882009725053', label: 'WhatsApp' },
  { icon: FiMail, href: 'mailto:rizkihub7@gmail.com', label: 'Email' },
]

const tautanNav = [
  { label: 'BERANDA', href: '#home' },
  { label: 'KEAHLIAN', href: '#skills' },
  { label: 'PROYEK', href: '#projects' },
  { label: 'PERJALANAN', href: '#timeline' },
  { label: 'SERTIFIKAT', href: '#certificates' },
  { label: 'KONTAK', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Komik divider atas */}
      <div className="comic-divider" />

      {/* END OF CHAPTER panel */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">

          {/* "END OF THIS CHAPTER" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div
              className="inline-block font-comic text-3xl md:text-4xl text-comic-black px-8 py-4"
              style={{
                background: '#ffd700',
                border: '4px solid #ffd700',
                boxShadow: '6px 6px 0 rgba(255,215,0,0.3)',
                transform: 'rotate(-1deg)',
              }}
            >
              END OF THIS CHAPTER
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mb-8 flex-wrap"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center transition-all"
                style={{ background: '#fff', border: '2px solid #ffd700', boxShadow: '3px 3px 0 #ffd700' }}
                title={l.label}
              >
                <l.icon className="w-5 h-5 text-comic-black" />
              </motion.a>
            ))}
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-1 mb-8"
          >
            {tautanNav.map((n, i) => (
              <a
                key={n.label}
                href={n.href}
                className="font-comic text-xs px-3 py-1 text-white/60 hover:text-comic-yellow transition-colors"
              >
                {n.label}
                {i < tautanNav.length - 1 && <span className="ml-1 text-white/20"></span>}
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <div className="font-comic text-comic-yellow text-sm"> 2026 RIZKI HABIBI</div>
                <div className="text-white/40 text-xs mt-0.5">Built with Next.js  Tailwind CSS  Framer Motion</div>
              </motion.div>

              {/* THE STORY CONTINUES */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, type: 'spring' }}
                viewport={{ once: true }}
                className="font-comic text-sm text-white/50 tracking-widest text-center"
              >
                THE STORY CONTINUES...
              </motion.div>

              {/* Back to top */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 font-comic text-xs text-comic-black px-4 py-2"
                style={{ background: '#ffd700', border: '2px solid #ffd700', boxShadow: '3px 3px 0 rgba(255,215,0,0.4)' }}
              >
                <FiArrowUp className="w-4 h-4" /> KEMBALI KE ATAS
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
