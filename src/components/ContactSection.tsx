'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiSend } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'

const socials = [
  { icon: FiGithub, label: 'GitHub', value: '@rizki-habibi', href: 'https://github.com/rizki-habibi', color: '#0a0a0a', bg: '#f0f0eb' },
  { icon: SiLinkedin, label: 'LinkedIn', value: 'Rizki Habibi', href: 'https://linkedin.com/in/rizki-habibi', color: '#0a66c2', bg: '#e8f2ff' },
  { icon: SiInstagram, label: 'Instagram', value: '@rizkihabibi', href: 'https://instagram.com/rizkihabibi', color: '#e1306c', bg: '#fff0f5' },
  { icon: SiWhatsapp, label: 'WhatsApp', value: '+62 882-009-725-053', href: 'https://wa.me/62882009725053', color: '#25d366', bg: '#f0fff4' },
  { icon: FiMail, label: 'Email', value: 'rizkihabibi2432@gmail.com', href: 'mailto:rizkihabibi2432@gmail.com', color: '#1a5cff', bg: '#e8f0ff' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="halftone-yellow" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <div className="chapter-label mb-3 inline-block" style={{ color: '#ffd700', borderColor: '#ffd700' }}>
            FINAL CHAPTER
          </div>

          {/* TO BE CONTINUED headline */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            viewport={{ once: false }}
            className="font-comic text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem,8vw,5rem)', textShadow: '4px 4px 0 #ffd700' }}
          >
            TO BE CONTINUED...
          </motion.h2>

          {/* Speech bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 200 }}
            viewport={{ once: false }}
            className="inline-block"
          >
            <div
              className="font-bold text-comic-black text-sm px-6 py-3 relative"
              style={{
                background: 'white',
                border: '3px solid #ffd700',
                boxShadow: '4px 4px 0 #ffd700',
                borderRadius: 16,
              }}
            >
              💬 &quot;What&apos;s the next chapter?&quot;
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            viewport={{ once: false }}
            className="text-white/60 font-bold text-sm mt-4"
          >
            Every great project starts with a conversation.
          </motion.p>
        </motion.div>

        {/* LET'S WORK TOGETHER button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <a
            href="mailto:rizkihabibi2432@gmail.com"
            className="btn-comic inline-flex items-center gap-3 text-lg"
          >
            <FiSend className="w-5 h-5" />
            LET&apos;S WORK TOGETHER
          </a>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: false }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              className="flex items-center gap-4 p-4 relative overflow-hidden"
              style={{
                background: s.bg,
                border: `3px solid ${s.color}`,
                boxShadow: `5px 5px 0 ${s.color}`,
                textDecoration: 'none',
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{ background: s.color, border: '2px solid #0a0a0a' }}
              >
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-comic text-sm" style={{ color: s.color }}>{s.label}</div>
                <div className="font-bold text-xs text-comic-black/70 truncate max-w-[160px]">{s.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact info langsung */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: false }}
          className="mt-10 p-6 text-center"
          style={{ border: '3px solid #ffd700', background: '#fff8cc', boxShadow: '5px 5px 0 #ffd700' }}
        >
          <div className="font-comic text-xl text-comic-black mb-3">📞 HUBUNGI LANGSUNG</div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+62882009725053" className="flex items-center gap-2 font-bold text-sm text-comic-black hover:text-comic-blue transition-colors">
              <FiPhone className="w-4 h-4" /> +62 882-009-725-053
            </a>
            <span className="text-comic-black/30 hidden sm:block">|</span>
            <a href="mailto:rizkihabibi2432@gmail.com" className="flex items-center gap-2 font-bold text-sm text-comic-black hover:text-comic-blue transition-colors">
              <FiMail className="w-4 h-4" /> rizkihabibi2432@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
