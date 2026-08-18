'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiDownload, FiMail, FiPhone, FiMapPin, FiCode, FiTool, FiUsers, FiTarget, FiBook, FiBookOpen, FiCalendar, FiMonitor } from 'react-icons/fi'
import { HiAcademicCap, HiLibrary } from 'react-icons/hi'

const toolsUsed = ['VS Code', 'Laragon', 'PG Admin 4', 'Canva', 'Affinity', 'CapCut', 'CorelDraw', 'Photoshop', 'Vegas Pro']
const toolsUnderstood = ['Premier Pro', 'Microsoft Excel', 'CorelDRAW', 'Project IDX', 'Firebase', 'Acode (Mobile)']
const toolsWebsite = ['Visual Paradigm', 'Figma', 'Draw.io', 'ChatGPT', 'Gemini AI', 'DeepSeek', 'GitHub', 'Codedex']
const learningMedia = ['YouTube (Otodidak)', 'Mesin Pencarian', 'Jurnal & Artikel Ilmiah', 'Dokumentasi Resmi', 'Forum Developer']
const mainSkills = ['Leadership', 'Analisis Sistem', 'Web Programming', 'Desain UI/UX', 'Bikin Aplikasi', 'Analisis Kebutuhan Client', 'Modifikasi Fitur']
const techSkills = ['Laravel', 'PHP', 'MySQL', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS']

const toolGroups = [
  { label: '💻 Tools Installed', items: toolsUsed, color: '#22c55e', bg: '#f0fdf4' },
  { label: '📚 Tools Dipahami', items: toolsUnderstood, color: '#f59e0b', bg: '#fffbeb' },
  { label: '🌐 Tools Web & AI', items: toolsWebsite, color: '#8b5cf6', bg: '#f5f0ff' },
  { label: '📖 Media Belajar', items: learningMedia, color: '#1a5cff', bg: '#e8f0ff' },
]

const education = [
  { level: 'Perguruan Tinggi', name: 'Institut Teknologi dan Sains Mandala', detail: 'Sistem dan Teknologi Informasi (Sedang Penelitian Skripsi)', icon: HiAcademicCap, color: '#8b5cf6' },
  { level: 'SMA', name: 'SMA Negeri 2 Jember', detail: '', icon: HiLibrary, color: '#1a5cff' },
  { level: 'SMP', name: 'SMP Al-Baitul Amien', detail: '', icon: FiBookOpen, color: '#22c55e' },
  { level: 'SD', name: 'SDN Sumbersari 3 Jember', detail: '', icon: FiBook, color: '#f59e0b' },
]

const experiences = [
  { year: '2026', title: 'Penelitian Skripsi', desc: 'Menjalankan penelitian skripsi bidang Teknologi Informasi sambil mengembangkan platform KVT.kom.' },
  { year: '2024–2025', title: 'Web Developer & System Analyst', desc: 'Mengembangkan sistem informasi dengan Laravel dan Next.js. Analisis kebutuhan client dan modifikasi fitur.' },
  { year: '2025', title: 'Digital Talent Scholarship', desc: 'Menyelesaikan 75+ program pelatihan: AI, Web Dev, Cyber Security, Cloud, Digital Marketing.' },
  { year: '2025', title: 'Sertifikasi BNSP', desc: 'Junior Web Developer — Lembaga Sertifikasi Profesi Teknologi Digital, Yogyakarta.' },
  { year: '2023', title: 'Mahasiswa STI', desc: 'Memulai perjalanan di Institut Teknologi dan Sains Mandala, jurusan Sistem & Teknologi Informasi.' },
]

export default function CV() {
  return (
    <section id="cv" className="py-20 px-4 relative" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <div className="chapter-label mb-3">CURRICULUM VITAE</div>
          <h2 className="section-title">MY PROFILE</h2>
          <div className="speech-bubble inline-block text-sm mt-4">📄 Unduh CV lengkap saya di sini!</div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-4">
              {/* Profile card */}
              <div className="comic-panel p-6 text-center">
                <div
                  className="w-24 h-24 mx-auto overflow-hidden mb-4"
                  style={{ border: '3px solid #0a0a0a', boxShadow: '4px 4px 0 #0a0a0a' }}
                >
                  <Image src="/foto/komik-profil.png" alt="Rizki Habibi" width={96} height={96} className="object-cover w-full h-full" />
                </div>
                <div className="font-comic text-xl text-comic-black mb-1">Rizki Habibi</div>
                <div className="text-xs font-bold text-comic-blue mb-1">Web Developer &amp; System Analyst</div>
                <div className="text-xs text-comic-black/50 font-bold">Institut Teknologi &amp; Sains Mandala</div>
              </div>

              {/* Contact */}
              <div className="comic-panel p-4 space-y-3">
                <div className="font-comic text-sm text-comic-black mb-2">📬 KONTAK</div>
                {[
                  { icon: FiMail, val: 'rizkihabibi2432@gmail.com' },
                  { icon: FiPhone, val: '+62 882-009-725-053' },
                  { icon: FiMapPin, val: 'Jember, Indonesia' },
                ].map(({ icon: Icon, val }) => (
                  <div key={val} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-comic-blue flex-shrink-0" />
                    <span className="text-xs font-bold text-comic-black break-all">{val}</span>
                  </div>
                ))}
              </div>

              {/* Keahlian utama */}
              <div className="comic-panel p-4">
                <div className="font-comic text-sm text-comic-black mb-3 flex items-center gap-2">
                  <FiTarget className="w-4 h-4 text-comic-blue" /> KEAHLIAN UTAMA
                </div>
                <div className="flex flex-wrap gap-2">
                  {mainSkills.map(skill => (
                    <span key={skill} className="text-[10px] font-bold px-2 py-1 text-comic-black"
                      style={{ background: '#e8f0ff', border: '2px solid #1a5cff', boxShadow: '2px 2px 0 #1a5cff' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download */}
              <a href="/cv/CV_Rizki_Habibi.pdf" download className="btn-comic-blue w-full flex items-center justify-center gap-2">
                <FiDownload className="w-5 h-5" /> DOWNLOAD CV
              </a>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Profil Singkat */}
            <div className="comic-panel p-6">
              <div className="font-comic text-lg text-comic-black mb-3 flex items-center gap-2">
                <FiUsers className="text-comic-blue w-5 h-5" /> PROFIL SINGKAT
              </div>
              <p className="text-sm text-comic-black leading-relaxed">
                Mahasiswa Program Studi Sistem dan Teknologi Informasi di Institut Teknologi dan Sains Mandala.
                Memiliki minat di bidang analisis sistem, web programming, dan inovasi teknologi.
                Terbiasa belajar mandiri, bertanggung jawab, dan siap berkontribusi di dunia profesional.
                Mampu menganalisis kebutuhan client dan memodifikasi fitur sesuai kebutuhan.
              </p>
            </div>

            {/* Tech Skills */}
            <div className="comic-panel p-6">
              <div className="font-comic text-lg text-comic-black mb-3 flex items-center gap-2">
                <FiCode className="text-comic-blue w-5 h-5" /> KEAHLIAN TEKNIS
              </div>
              <div className="flex flex-wrap gap-2">
                {techSkills.map(skill => (
                  <span key={skill} className="font-bold text-xs px-3 py-1.5 text-comic-black"
                    style={{ background: '#e8f0ff', border: '2px solid #1a5cff', boxShadow: '2px 2px 0 #1a5cff' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="comic-panel p-6">
              <div className="font-comic text-lg text-comic-black mb-4 flex items-center gap-2">
                <FiTool className="text-comic-blue w-5 h-5" /> TOOLS &amp; SOFTWARE
              </div>
              <div className="space-y-4">
                {toolGroups.map(group => (
                  <div key={group.label}>
                    <div className="font-bold text-xs text-comic-black mb-2" style={{ color: group.color }}>{group.label}</div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(tool => (
                        <span key={tool} className="text-xs font-bold px-2 py-1 text-comic-black"
                          style={{ background: group.bg, border: `2px solid ${group.color}`, boxShadow: `2px 2px 0 ${group.color}` }}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pendidikan */}
            <div className="comic-panel p-6">
              <div className="font-comic text-lg text-comic-black mb-4 flex items-center gap-2">
                <FiCalendar className="text-comic-blue w-5 h-5" /> RIWAYAT PENDIDIKAN
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: false }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                        style={{ background: edu.color, border: '2px solid #0a0a0a', boxShadow: '2px 2px 0 #0a0a0a' }}>
                        <edu.icon className="w-4 h-4 text-white" />
                      </div>
                      {i < education.length - 1 && (
                        <div className="w-0.5 flex-1 mt-1" style={{ background: 'repeating-linear-gradient(180deg,#0a0a0a 0px,#0a0a0a 4px,transparent 4px,transparent 8px)' }} />
                      )}
                    </div>
                    <div className="pb-4">
                      <span className="font-comic text-xs" style={{ color: edu.color }}>{edu.level}</span>
                      <div className="font-bold text-sm text-comic-black">{edu.name}</div>
                      {edu.detail && <div className="text-xs text-comic-black/60 mt-0.5">{edu.detail}</div>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pengalaman */}
            <div className="comic-panel p-6">
              <div className="font-comic text-lg text-comic-black mb-4 flex items-center gap-2">
                <FiMonitor className="text-comic-blue w-5 h-5" /> PENGALAMAN &amp; PENCAPAIAN
              </div>
              <div className="space-y-4">
                {experiences.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: false }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 flex-shrink-0 mt-1" style={{ background: '#1a5cff', border: '2px solid #0a0a0a' }} />
                      {i < experiences.length - 1 && <div className="w-0.5 flex-1 mt-1" style={{ background: '#0a0a0a20' }} />}
                    </div>
                    <div className="pb-4">
                      <span className="font-comic text-xs text-comic-blue">{item.year}</span>
                      <div className="font-bold text-sm text-comic-black">{item.title}</div>
                      <div className="text-xs text-comic-black/60 mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
