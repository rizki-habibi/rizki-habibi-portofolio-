'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiDownload, FiFileText, FiMail, FiPhone, FiMapPin, FiCalendar, FiTool, FiMonitor, FiCode, FiUsers, FiTarget, FiAward, FiBook, FiBookOpen } from 'react-icons/fi'
import { HiAcademicCap, HiOfficeBuilding, HiLibrary } from 'react-icons/hi'
import { IoSchoolOutline } from 'react-icons/io5'

// Tools yang dipakai
const toolsUsed = ['VS Code', 'Laragon', 'PG Admin 4', 'Canva', 'Affinity', 'CapCut', 'CorelDraw', 'Photoshop', 'Vegas Pro']

// Tools yang dipahami
const toolsUnderstood = ['Premier Pro', 'Microsoft Excel', 'CorelDRAW', 'Project IDX', 'Firebase', 'Acode (Mobile)']

// Tools Website/Online
const toolsWebsite = ['Visual Paradigm', 'Figma', 'Draw.io', 'ChatGPT', 'Gemini AI', 'DeepSeek', 'GitHub', 'Codedex']

// Media Belajar
const learningMedia = ['YouTube (Otodidak)', 'Mesin Pencarian', 'Jurnal & Artikel Ilmiah', 'Dokumentasi Resmi', 'Forum Developer']

// Keahlian utama
const mainSkills = ['Leadership', 'Analisis Sistem', 'Web Programming', 'Desain UI/UX', 'Bikin Aplikasi', 'Analisis Kebutuhan Client', 'Modifikasi Fitur']

// Tech Skills
const techSkills = ['Laravel', 'PHP', 'MySQL', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS']

export default function CV() {
  return (
    <section id="cv" className="py-20 px-4 relative" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <div className="chapter-label mb-3">CURRICULUM VITAE</div>
          <h2 className="section-title">MY PROFILE</h2>
          <div className="speech-bubble inline-block text-sm mt-4">
            📄 Unduh CV lengkap saya di sini!
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* CV Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="glass-card p-6 sticky top-24">
              {/* Profile Summary */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-navy-500/30 mb-4">
                  <Image
                    src="/foto/profil.jpeg"
                    alt="Rizki Habibi"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Rizki Habibi</h3>
                <p className="text-navy-400">Web Developer & System Analyst</p>
                <p className="text-soft-gray-500 text-xs mt-1">Mahasiswa Semester 6</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-soft-gray-400">
                  <FiMail className="w-4 h-4 text-navy-400 flex-shrink-0" />
                  <span className="text-sm break-all">rizkihabibi2432@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-soft-gray-400">
                  <FiPhone className="w-4 h-4 text-navy-400 flex-shrink-0" />
                  <span className="text-sm">+62 882-009-725-053</span>
                </div>
                <div className="flex items-center gap-3 text-soft-gray-400">
                  <FiMapPin className="w-4 h-4 text-navy-400 flex-shrink-0" />
                  <span className="text-sm">Jember, Indonesia</span>
                </div>
              </div>

              {/* Main Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <FiTarget className="w-4 h-4 text-navy-400" />
                  Keahlian Utama
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mainSkills.map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs rounded-full bg-navy-600/20 text-navy-300 border border-navy-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download Button */}
              <motion.a
                href="/cv/CV_Rizki_Habibi.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* CV Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Profil Singkat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="glass-card p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FiUsers className="text-navy-400" />
                Profil Singkat
              </h4>
              <p className="text-soft-gray-400 leading-relaxed">
                Mahasiswa Program Studi Sistem dan Teknologi Informasi di Institut Teknologi dan Sains Mandala yang memiliki minat dan kemampuan di bidang analisis sistem, web programming, dan leadership. Terbiasa belajar hal baru, bertanggung jawab, dan siap mengembangkan keterampilan di dunia profesional. Mampu menganalisis kebutuhan client dan memodifikasi fitur sesuai kebutuhan.
              </p>
            </motion.div>

            {/* Tech Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
              className="glass-card p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FiCode className="text-navy-400" />
                Keahlian Teknis
              </h4>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="glass-card p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FiTool className="text-navy-400" />
                Tools & Software
              </h4>

              <div className="space-y-4">
                {/* Tools Dipakai */}
                <div>
                  <h5 className="text-sm font-medium text-navy-400 mb-2">💻 Tools yang Dipakai (Installed)</h5>
                  <div className="flex flex-wrap gap-2">
                    {toolsUsed.map((tool) => (
                      <span key={tool} className="px-3 py-1 text-xs rounded-lg bg-green-500/10 text-green-400 border border-green-500/30">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools Dipahami */}
                <div>
                  <h5 className="text-sm font-medium text-navy-400 mb-2">📚 Tools yang Dipahami</h5>
                  <div className="flex flex-wrap gap-2">
                    {toolsUnderstood.map((tool) => (
                      <span key={tool} className="px-3 py-1 text-xs rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools Website */}
                <div>
                  <h5 className="text-sm font-medium text-navy-400 mb-2">🌐 Tools Website & AI</h5>
                  <div className="flex flex-wrap gap-2">
                    {toolsWebsite.map((tool) => (
                      <span key={tool} className="px-3 py-1 text-xs rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Media Belajar */}
                <div>
                  <h5 className="text-sm font-medium text-navy-400 mb-2">📖 Media Belajar</h5>
                  <div className="flex flex-wrap gap-2">
                    {learningMedia.map((media) => (
                      <span key={media} className="px-3 py-1 text-xs rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30">
                        {media}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: false, amount: 0.2 }}
              className="glass-card p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FiCalendar className="text-navy-400" />
                Riwayat Pendidikan
              </h4>

              <div className="space-y-4">
                {[
                  {
                    level: 'Perguruan Tinggi',
                    name: 'Institut Teknologi dan Sains Mandala',
                    detail: 'Sistem dan Teknologi Informasi - Semester 6 (Saat ini)',
                    icon: HiAcademicCap,
                    iconColor: 'text-purple-400'
                  },
                  {
                    level: 'SMA',
                    name: 'SMA Negeri 2 Jember',
                    detail: '',
                    icon: HiLibrary,
                    iconColor: 'text-blue-400'
                  },
                  {
                    level: 'SMP',
                    name: 'SMP Al-Baitul Amien',
                    detail: '',
                    icon: FiBookOpen,
                    iconColor: 'text-green-400'
                  },
                  {
                    level: 'SD',
                    name: 'SDN Sumbersari 3 Jember',
                    detail: '',
                    icon: FiBook,
                    iconColor: 'text-orange-400'
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full bg-navy-600/30 flex items-center justify-center ${edu.iconColor}`}>
                        <edu.icon className="w-4 h-4" />
                      </div>
                      {index !== 3 && <div className="w-0.5 h-full bg-charcoal-700 mt-2" />}
                    </div>
                    <div className="pb-4">
                      <span className="text-xs text-navy-400 font-medium">{edu.level}</span>
                      <h5 className="text-white font-medium mt-1">{edu.name}</h5>
                      {edu.detail && <p className="text-soft-gray-400 text-sm mt-1">{edu.detail}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
              className="glass-card p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <FiMonitor className="text-navy-400" />
                Pengalaman & Pencapaian
              </h4>

              <div className="space-y-6">
                {[
                  {
                    year: '2024-2025',
                    title: 'Web Developer & System Analyst',
                    description: 'Mengembangkan berbagai sistem informasi menggunakan Laravel dan Next.js. Melakukan analisis kebutuhan client dan memodifikasi fitur sesuai permintaan.',
                  },
                  {
                    year: '2024',
                    title: 'Digital Talent Scholarship',
                    description: 'Menyelesaikan 65+ program pelatihan di bidang AI, Web Development, Cyber Security, Cloud Computing, dan Digital Marketing.',
                  },
                  {
                    year: '2023',
                    title: 'Mahasiswa STI',
                    description: 'Memulai perjalanan di bidang Sistem dan Teknologi Informasi di Institut Teknologi dan Sains Mandala.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-navy-500" />
                      {index !== 2 && <div className="w-0.5 h-full bg-charcoal-700 mt-2" />}
                    </div>
                    <div className="pb-6">
                      <span className="text-xs text-navy-400 font-medium">{item.year}</span>
                      <h5 className="text-white font-medium mt-1">{item.title}</h5>
                      <p className="text-soft-gray-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
