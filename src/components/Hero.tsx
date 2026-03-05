'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiArrowDown, FiDownload, FiFolder, FiMail, FiPhone, FiCode, FiGithub } from 'react-icons/fi'
import { SiLaravel, SiNextdotjs, SiTailwindcss, SiPhp, SiMysql, SiFigma } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'
import { BiRocket } from 'react-icons/bi'

const typingTexts = [
  'Web Developer',
  'Laravel Enthusiast',
  'Next.js Developer',
  'UI/UX Explorer',
  'BNSP Certified',
]

function TypingText() {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = typingTexts[textIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  return (
    <span className="text-navy-300">
      {typingTexts[textIndex].slice(0, charIndex)}
      <span className="typing-cursor">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-700/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-navy-400/40 rounded-full"
          style={{
            top: `${15 + i * 15}%`,
            left: `${10 + i * 16}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting with Waving Hand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center justify-center lg:justify-start gap-2"
            >
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                style={{ transformOrigin: '70% 70%', display: 'inline-block' }}
                className="text-3xl"
              >
                👋
              </motion.span>
              <span className="text-soft-gray-400 text-lg">Hai, saya</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">Rizki Habibi</span>
            </motion.h1>

            {/* Subtitle with Typing Animation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-soft-gray-300 mb-4"
            >
              <span className="text-navy-400">Mahasiswa STI Semester 6</span> |{' '}
              <TypingText />
            </motion.p>

            {/* Institution */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-soft-gray-400 text-md mb-6"
            >
              Institut Teknologi dan Sains Mandala
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-soft-gray-400 text-base max-w-xl mx-auto lg:mx-0 mb-6"
            >
              Mahasiswa Program Studi Sistem dan Teknologi Informasi yang memiliki minat dan kemampuan di bidang analisis sistem, web programming, dan leadership. Terbiasa belajar hal baru, bertanggung jawab, dan siap mengembangkan keterampilan di dunia profesional.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 text-soft-gray-400"
            >
              <a href="tel:+62882009725053" className="flex items-center gap-2 hover:text-navy-400 transition-colors">
                <FiPhone className="w-4 h-4" />
                <span className="text-sm">+62 882-009-725-053</span>
              </a>
              <a href="mailto:rizkihabibi2432@gmail.com" className="flex items-center gap-2 hover:text-navy-400 transition-colors">
                <FiMail className="w-4 h-4" />
                <span className="text-sm">rizkihabibi2432@gmail.com</span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <FiFolder className="w-5 h-5" />
                Lihat Proyek
              </motion.a>
              <motion.a
                href="/cv/CV_Rizki_Habibi.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Tech Stack with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {[
                { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
                { name: 'PHP', icon: SiPhp, color: 'text-indigo-400' },
                { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
                { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
                { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
                { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
                { name: 'VS Code', icon: VscCode, color: 'text-blue-500' },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-charcoal-800/80 border border-charcoal-700 hover:border-navy-500/50 transition-all cursor-default group"
                >
                  <tech.icon className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm text-soft-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* GitHub Profile Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8"
            >
              <motion.a
                href="https://github.com/kikiproject"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-charcoal-800/80 border border-charcoal-700 hover:border-navy-500/50 hover:bg-charcoal-700/80 transition-all group"
              >
                <FiGithub className="w-6 h-6 text-white group-hover:text-navy-400 transition-colors" />
                <div className="text-left">
                  <div className="text-sm font-medium text-white group-hover:text-navy-400 transition-colors">@kikiproject</div>
                  <div className="text-xs text-soft-gray-500">github.com/kikiproject</div>
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Profile Image - Full Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-purple-500 to-navy-700 rounded-2xl blur-3xl opacity-40 scale-110 animate-pulse" />
              
              {/* Image Container - Full Body */}
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-2xl overflow-hidden border-2 border-navy-500/30 shadow-2xl bg-gradient-to-b from-navy-900/50 to-charcoal-950"
              >
                <Image
                  src="/foto/profil.jpeg"
                  alt="Rizki Habibi"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-60" />
              </motion.div>

              {/* Floating Elements with Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-navy-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30"
              >
                <FiCode className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 -left-6 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/30"
              >
                <BiRocket className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [-5, 15, -5], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-20 -right-6 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30"
              >
                <HiLightningBolt className="w-7 h-7 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [5, -15, 5], x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 -left-10 w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/30"
              >
                <HiSparkles className="w-5 h-5 text-white" />
              </motion.div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-5 py-2.5 bg-charcoal-900/95 backdrop-blur-md rounded-xl border border-navy-500/40 shadow-xl"
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                  <span className="text-white">Available for Work</span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-soft-gray-400"
          >
            <FiArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
