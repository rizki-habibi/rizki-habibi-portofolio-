'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiMail } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'

const socials = [
  { Icon: FiGithub,    href: 'https://github.com/rizki-habibi',         label: 'GitHub',    warna: '#0a0a0a', bg: '#fafaf7' },
  { Icon: SiInstagram, href: 'https://instagram.com/rizkihabibi',       label: 'Instagram', warna: '#e1306c', bg: '#fff0f5' },
  { Icon: SiLinkedin,  href: 'https://linkedin.com/in/rizki-habibi',    label: 'LinkedIn',  warna: '#0a66c2', bg: '#e8f2ff' },
  { Icon: SiWhatsapp,  href: 'https://wa.me/62882009725053',            label: 'WhatsApp',  warna: '#25d366', bg: '#f0fff4' },
  { Icon: FiMail,      href: 'mailto:rizkihabibi2432@gmail.com',        label: 'Email',     warna: '#1a5cff', bg: '#e8f0ff' },
]

export default function SocialFloat() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-start"
    >
      {socials.map(({ Icon, href, label, warna, bg }, i) => {
        const isHover = hoverIdx === i
        return (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -48 }}
            animate={{ x: isHover ? 0 : -36 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onHoverStart={() => setHoverIdx(i)}
            onHoverEnd={() => setHoverIdx(null)}
            className="flex items-center mb-1 overflow-hidden group"
            style={{
              background: isHover ? warna : '#0a0a0a',
              border: `2px solid ${isHover ? warna : '#0a0a0a'}`,
              borderLeft: 'none',
              boxShadow: isHover ? `3px 3px 0 ${warna}66` : '2px 2px 0 #0a0a0a44',
              height: 36,
              borderRadius: '0 4px 4px 0',
              textDecoration: 'none',
              minWidth: isHover ? 110 : 36,
              transition: 'background 0.2s, min-width 0.2s',
            }}
            title={label}
          >
            {/* Ikon */}
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <Icon
                className="w-4 h-4 transition-colors"
                style={{ color: isHover ? 'white' : '#aaa' }}
              />
            </div>
            {/* Label — slide in */}
            <AnimatePresence>
              {isHover && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.15 }}
                  className="font-comic text-[10px] text-white tracking-widest pr-3 whitespace-nowrap overflow-hidden"
                >
                  {label.toUpperCase()}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        )
      })}

      {/* Garis dekoratif bawah */}
      <div
        className="ml-2 mt-1"
        style={{
          width: 2,
          height: 20,
          background: 'repeating-linear-gradient(180deg,#0a0a0a 0,#0a0a0a 3px,transparent 3px,transparent 7px)',
          opacity: 0.25,
        }}
      />
    </motion.div>
  )
}
