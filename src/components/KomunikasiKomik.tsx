'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiPhone } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'
import HeaderBab from '@/components/HeaderBab'

const networkNodes = [
  {
    label: 'DEVELOPER COMMUNITY',
    desc: 'Tergabung dalam komunitas developer lokal dan online untuk berbagi ilmu dan kolaborasi.',
    icon: '👨‍💻', color: '#1a5cff', bg: '#e8f0ff', members: '100+',
  },
  {
    label: 'DIGITAL CREATOR CIRCLE',
    desc: 'Jaringan kreator konten digital yang fokus pada teknologi, desain, dan inovasi.',
    icon: '🎨', color: '#e63329', bg: '#fef2f2', members: '50+',
  },
  {
    label: 'KVT COMMUNITY',
    desc: 'Komunitas yang sedang dibangun bersama platform KVT.kom — kreator digital muda Indonesia.',
    icon: '🌐', color: '#8b5cf6', bg: '#f5f0ff', members: 'Growing',
  },
  {
    label: 'KAMPUS ITSM',
    desc: 'Aktif di lingkungan kampus Institut Teknologi dan Sains Mandala bersama rekan mahasiswa STI.',
    icon: '🎓', color: '#22c55e', bg: '#f0fdf4', members: 'Aktif',
  },
]

const collaborationValues = [
  { icon: '🤝', title: 'OPEN COLLABORATION', desc: 'Terbuka untuk proyek kolaborasi dengan developer, desainer, dan kreator lain.' },
  { icon: '💡', title: 'KNOWLEDGE SHARING', desc: 'Senang berbagi ilmu, tutorial, dan pengalaman ke sesama.' },
  { icon: '🚀', title: 'STARTUP MINDED', desc: 'Berpikir seperti co-founder — solusi nyata untuk masalah nyata.' },
  { icon: '🌱', title: 'GROW TOGETHER', desc: 'Percaya bahwa pertumbuhan bersama lebih bermakna dari sukses sendiri.' },
]

const socialLinks = [
  { icon: FiGithub, label: 'GitHub', val: '@rizki-habibi', href: 'https://github.com/rizki-habibi', color: '#0a0a0a' },
  { icon: SiLinkedin, label: 'LinkedIn', val: 'Rizki Habibi', href: 'https://linkedin.com/in/rizki-habibi', color: '#0a66c2' },
  { icon: SiInstagram, label: 'Instagram', val: '@rizkihabibi', href: 'https://instagram.com/rizkihabibi', color: '#e1306c' },
  { icon: SiWhatsapp, label: 'WhatsApp', val: '+62 882-009-725-053', href: 'https://wa.me/62882009725053', color: '#25d366' },
  { icon: FiMail, label: 'Email', val: 'rizkihabibi2432@gmail.com', href: 'mailto:rizkihabibi2432@gmail.com', color: '#1a5cff' },
]

export default function KomunikasiComic() {
  return (
    <section id="komunitas" className="py-20 px-4 relative overflow-hidden" style={{ background: '#f0f0eb' }}>
      <div className="halftone-blue" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <HeaderBab nomor="14" judul="NETWORK &amp; COMMUNITY" warna="#8b5cf6" subtitle="👥 Bersama kita lebih kuat!" />

        {/* Network cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {networkNodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -5, rotate: i % 2 === 0 ? -1 : 1 }}
              className="overflow-hidden"
              style={{ border: `3px solid ${node.color}`, boxShadow: `5px 5px 0 ${node.color}`, background: 'white' }}
            >
              <div className="flex items-center gap-3 px-5 py-3" style={{ background: node.color, borderBottom: '2px solid #0a0a0a' }}>
                <span className="text-2xl">{node.icon}</span>
                <span className="font-comic text-white text-base">{node.label}</span>
              </div>
              <div className="p-5" style={{ background: node.bg }}>
                <p className="text-sm text-comic-black leading-relaxed mb-3">{node.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-comic-black/50">ANGGOTA:</span>
                  <span className="font-comic text-sm" style={{ color: node.color }}>{node.members}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaboration values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-12 comic-panel-dark p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: false }}
            className="font-comic text-2xl text-white text-center mb-8"
          >
            💫 NILAI KOLABORASI
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {collaborationValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 150 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="p-4 text-center bg-white"
                style={{ border: '2px solid #ffd700', boxShadow: '4px 4px 0 #ffd700' }}
              >
                <div className="text-3xl mb-2">{v.icon}</div>
                <div className="font-comic text-sm text-comic-blue mb-2">{v.title}</div>
                <div className="text-xs text-comic-black/70 leading-snug">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: false }}
            className="font-comic text-2xl text-comic-black text-center mb-6"
          >
            📡 TEMUKAN SAYA DI
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: false }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-4 bg-white text-center"
                style={{ border: `3px solid ${s.color}`, boxShadow: `4px 4px 0 ${s.color}`, textDecoration: 'none' }}
              >
                <div className="w-10 h-10 flex items-center justify-center" style={{ background: s.color, border: '2px solid #0a0a0a' }}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-comic text-sm" style={{ color: s.color }}>{s.label}</div>
                <div className="text-[10px] font-bold text-comic-black/60 truncate w-full text-center">{s.val}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
