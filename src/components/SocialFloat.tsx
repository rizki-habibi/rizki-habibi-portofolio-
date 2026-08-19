'use client'

import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'

const socials = [
  { icon: FiGithub, href: 'https://github.com/kikiproject', label: 'GitHub', warna: '#0a0a0a', bg: '#f0f0eb' },
  { icon: SiInstagram, href: 'https://instagram.com/', label: 'Instagram', warna: '#e1306c', bg: '#fff0f5' },
  { icon: SiLinkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn', warna: '#0a66c2', bg: '#e8f2ff' },
  { icon: SiWhatsapp, href: 'https://wa.me/62882009725053', label: 'WhatsApp', warna: '#25d366', bg: '#f0fff4' },
]

export default function SocialFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed left-3 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-2"
    >
      {socials.map((social, i) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2 + i * 0.1 }}
          whileHover={{ scale: 1.15, x: 5 }}
          className="w-9 h-9 flex items-center justify-center transition-all"
          style={{
            background: social.bg,
            border: `2px solid ${social.warna}`,
            boxShadow: `3px 3px 0 ${social.warna}`,
          }}
          title={social.label}
        >
          <social.icon className="w-4 h-4" style={{ color: social.warna }} />
        </motion.a>
      ))}
      <div className="w-0.5 h-12 mx-auto mt-1" style={{ background: '#0a0a0a', opacity: 0.2 }} />
    </motion.div>
  )
}
