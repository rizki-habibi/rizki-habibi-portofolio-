'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiSend } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'

const socials = [
  { icon: FiGithub, label: 'GitHub', value: '@rizki-habibi', href: 'https://github.com/rizki-habibi', color: '#0a0a0a', bg: '#f0f0eb' },
  { icon: SiLinkedin, label: 'LinkedIn', value: 'Rizki Habibi', href: 'https://linkedin.com/in/rizki-habibi', color: '#0a66c2', bg: '#e8f2ff' },
  { icon: SiInstagram, label: 'Instagram', value: '@rizkihabibi', href: 'https://instagram.com/rizkihabibi', color: '#e1306c', bg: '#fff0f5' },
  { icon: SiWhatsapp, label: 'WhatsApp', value: '+62 882-009-725-053', href: 'https://wa.me/62882009725053', color: '#25d366', bg: '#f0fff4' },
  { icon: FiMail, label: 'Email', value: 'rizkihub7@gmail.com', href: 'mailto:rizkihub7@gmail.com', color: '#1a5cff', bg: '#e8f0ff' },
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
          viewport={{ once: true, amount: 0.3 }}
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <a
            href="mailto:rizkihub7@gmail.com"
            className="btn-comic inline-flex items-center gap-3 text-lg"
          >
            <FiSend className="w-5 h-5" />
            LET&apos;S WORK TOGETHER
          </a>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 relative overflow-hidden"
              style={{
                background: s.bg,
                border: `3px solid ${s.color}`,
                boxShadow: `4px 4px 0 ${s.color}`,
                textDecoration: 'none',
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0"
                style={{ background: s.color, border: '2px solid #0a0a0a' }}
              >
                <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-comic text-sm" style={{ color: s.color }}>{s.label}</div>
                <div className="font-bold text-xs text-comic-black/70 truncate max-w-full">{s.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact info langsung */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 p-6 text-center"
          style={{ border: '3px solid #ffd700', background: '#fff8cc', boxShadow: '5px 5px 0 #ffd700' }}
        >
          <div className="font-comic text-xl text-comic-black mb-3">📞 HUBUNGI LANGSUNG</div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+62882009725053" className="flex items-center gap-2 font-bold text-sm text-comic-black hover:text-comic-blue transition-colors">
              <FiPhone className="w-4 h-4" /> +62 882-009-725-053
            </a>
            <span className="text-comic-black/30 hidden sm:block">|</span>
            <a href="mailto:rizkihub7@gmail.com" className="flex items-center gap-2 font-bold text-sm text-comic-black hover:text-comic-blue transition-colors">
              <FiMail className="w-4 h-4" /> rizkihub7@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Lokasi — Peta Jember */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-6"
          style={{ border: '3px solid #1a5cff', boxShadow: '5px 5px 0 #1a5cff', overflow: 'hidden' }}
        >
          {/* Header lokasi */}
          <div className="px-4 py-2 font-comic text-sm text-white flex items-center gap-2" style={{ background: '#1a5cff' }}>
            <span>📍</span>
            <span>Jember, Jawa Timur, Indonesia</span>
          </div>
          {/* Embed Google Maps Jember */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126058.51820097716!2d113.6183!3d-8.1723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629d6d8a6c7ef%3A0x1459543564bb5fd4!2sJember%2C%20Jember%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1698765432100!5m2!1sen!2sid"
            width="100%"
            height="260"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Jember - Lokasi Rizki Habibi"
          />
        </motion.div>
      </div>
    </section>
  )
}
