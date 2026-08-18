'use client'

import { motion } from 'framer-motion'
import { FiBookOpen, FiCode, FiAward, FiBriefcase } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'

const timelineItems = [
  {
    year: '2023',
    title: 'Masuk Program Studi STI',
    subtitle: 'Institut Teknologi dan Sains Mandala',
    description: 'Memulai perjalanan di bidang Sistem dan Teknologi Informasi.',
    icon: HiAcademicCap,
    color: 'from-blue-500 to-cyan-500',
    type: 'education',
  },
  {
    year: '2023',
    title: 'Proyek Laravel Pertama',
    subtitle: 'Inventory System & REST API',
    description: 'Membangun sistem inventaris dan RESTful API sebagai proyek awal pengembangan web.',
    icon: FiCode,
    color: 'from-green-500 to-teal-500',
    type: 'project',
  },
  {
    year: '2024',
    title: 'Sistem Integrasi KVT',
    subtitle: 'Tim Developer',
    description: 'Mengerjakan sistem integrasi manajemen KVT yang komprehensif sebagai anggota tim.',
    icon: FiBriefcase,
    color: 'from-purple-500 to-pink-500',
    type: 'project',
  },
  {
    year: '2024',
    title: 'Sistem K-Amu All in One',
    subtitle: 'Full Stack Developer',
    description: 'Membangun sistem informasi sekolah berbasis Laravel dengan fitur lengkap.',
    icon: FiCode,
    color: 'from-orange-500 to-red-500',
    type: 'project',
  },
  {
    year: '2025',
    title: 'Seminar & Workshop Nasional',
    subtitle: 'Berbagai Penyelenggara',
    description: 'Aktif mengikuti seminar, workshop, dan pelatihan bertema teknologi, AI, keamanan siber, dan pengembangan diri.',
    icon: FiAward,
    color: 'from-fuchsia-500 to-purple-600',
    type: 'seminar',
  },
  {
    year: '2025',
    title: '75+ Sertifikat Digital',
    subtitle: 'Digital Talent Scholarship, Microsoft, & lainnya',
    description: 'Menyelesaikan berbagai pelatihan AI, Web Dev, Cyber Security, Cloud, Digital Marketing, dan Soft Skills.',
    icon: FiAward,
    color: 'from-amber-400 to-yellow-500',
    type: 'achievement',
  },
  {
    year: '2025',
    title: 'Sertifikasi BNSP - LSP Teknologi Digital',
    subtitle: 'Junior Web Developer (Pengembang Web Pratama)',
    description: 'Lulus uji kompetensi dan mendapatkan sertifikat profesi nasional dari BNSP melalui LSP Teknologi Digital, Yogyakarta. No. 62090 2513 3 0156814 2025.',
    icon: FiAward,
    color: 'from-amber-500 to-amber-700',
    type: 'certification',
  },
  {
    year: '2025-Sekarang',
    title: 'Semester 6 - Penelitian Skripsi',
    subtitle: 'Institut Teknologi dan Sains Mandala',
    description: 'Menjalankan penelitian skripsi di bidang teknologi informasi, sekaligus terus mengembangkan skill web development untuk siap memasuki dunia profesional.',
    icon: FiBookOpen,
    color: 'from-navy-400 to-navy-600',
    type: 'education',
  },
]

export default function ExperienceTimeline() {
  return (
    <section id="timeline" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">Perjalanan & Pengalaman</h2>
          <p className="text-soft-gray-400">Milestone penting dalam karir dan pendidikan saya.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-navy-500/50 via-purple-500/50 to-navy-500/50 md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-charcoal-900/80 backdrop-blur-sm border border-charcoal-700/50 hover:border-navy-500/30 rounded-2xl p-5 transition-all duration-300"
                  >
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white mb-3`}>
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-navy-400 text-sm mb-2">{item.subtitle}</p>
                    <p className="text-soft-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex-shrink-0 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg border-4 border-charcoal-950`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for opposite side (desktop) */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
