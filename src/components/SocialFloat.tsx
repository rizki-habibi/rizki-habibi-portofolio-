'use client'

import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'

const socials = [
  { icon: FiGithub, href: 'https://github.com/kikiproject', color: 'hover:text-white', label: 'GitHub' },
  { icon: SiInstagram, href: 'https://instagram.com/', color: 'hover:text-pink-400', label: 'Instagram' },
  { icon: SiLinkedin, href: 'https://linkedin.com/in/', color: 'hover:text-blue-400', label: 'LinkedIn' },
  { icon: SiWhatsapp, href: 'https://wa.me/62', color: 'hover:text-green-400', label: 'WhatsApp' },
]

export default function SocialFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3"
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
          whileHover={{ scale: 1.2, x: 4 }}
          className={`w-10 h-10 rounded-full bg-charcoal-800/80 border border-charcoal-700/50 flex items-center justify-center text-soft-gray-500 ${social.color} transition-all backdrop-blur-sm`}
          title={social.label}
        >
          <social.icon className="w-4 h-4" />
        </motion.a>
      ))}
      <div className="w-px h-16 bg-charcoal-700/50 mx-auto" />
    </motion.div>
  )
}
