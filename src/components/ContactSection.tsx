'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiMail, FiSend, FiMapPin, FiPhone, FiGithub } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'

const contactMethods = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'rizkihabibi@example.com',
    href: 'mailto:rizkihabibi@example.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    value: '+62 xxx xxxx xxxx',
    href: 'https://wa.me/62',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: '@kikiproject',
    href: 'https://github.com/kikiproject',
    color: 'from-gray-500 to-gray-700',
  },
  {
    icon: SiLinkedin,
    label: 'LinkedIn',
    value: 'Rizki Habibi',
    href: 'https://linkedin.com/in/',
    color: 'from-blue-600 to-blue-800',
  },
]

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Hubungi Saya</h2>
          <p className="text-soft-gray-400">Tertarik untuk berkolaborasi? Mari terhubung!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="flex items-center gap-4 p-4 glass-card group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <method.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-soft-gray-500 uppercase tracking-wider">{method.label}</div>
                  <div className="text-white font-medium group-hover:text-navy-400 transition-colors">{method.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: false }}
              className="flex items-center gap-4 p-4 glass-card"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg">
                <FiMapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-soft-gray-500 uppercase tracking-wider">Lokasi</div>
                <div className="text-white font-medium">Jawa Timur, Indonesia</div>
              </div>
            </motion.div>
          </div>

          {/* Quick Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Kirim Pesan Cepat</h3>
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                    setTimeout(() => setSent(false), 3000)
                  }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    required
                    className="w-full px-4 py-3 bg-charcoal-800/50 border border-charcoal-700/50 rounded-xl text-white placeholder-soft-gray-500 focus:outline-none focus:border-navy-500 transition-colors text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email Anda"
                    required
                    className="w-full px-4 py-3 bg-charcoal-800/50 border border-charcoal-700/50 rounded-xl text-white placeholder-soft-gray-500 focus:outline-none focus:border-navy-500 transition-colors text-sm"
                  />
                  <textarea
                    placeholder="Pesan..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-charcoal-800/50 border border-charcoal-700/50 rounded-xl text-white placeholder-soft-gray-500 focus:outline-none focus:border-navy-500 transition-colors text-sm resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-500 hover:to-navy-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all"
                  >
                    <FiSend className="w-4 h-4" />
                    Kirim Pesan
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <FiSend className="w-8 h-8 text-green-400" />
                    </motion.div>
                  </div>
                  <p className="text-white font-medium">Terima kasih!</p>
                  <p className="text-soft-gray-500 text-sm">Pesan Anda telah terkirim.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
