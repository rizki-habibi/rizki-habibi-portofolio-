'use client'

import { motion } from 'framer-motion'
import { FiAward, FiCode, FiShield, FiGlobe, FiCpu, FiZap, FiStar, FiTrendingUp } from 'react-icons/fi'
import { HiBadgeCheck } from 'react-icons/hi'

const badges = [
  { icon: HiBadgeCheck, label: 'BNSP Certified', desc: 'Sertifikasi Profesional', color: 'from-amber-400 to-amber-600', unlocked: true },
  { icon: FiAward, label: 'Cert Collector', desc: '65+ Sertifikat Digital', color: 'from-purple-400 to-purple-600', unlocked: true },
  { icon: FiCode, label: 'Code Warrior', desc: '10,000+ Baris Kode', color: 'from-blue-400 to-blue-600', unlocked: true },
  { icon: FiShield, label: 'Cyber Aware', desc: '11 Sertifikat Security', color: 'from-red-400 to-red-600', unlocked: true },
  { icon: FiCpu, label: 'AI Explorer', desc: '10 Sertifikat AI & Data', color: 'from-green-400 to-green-600', unlocked: true },
  { icon: FiGlobe, label: 'Web Master', desc: 'Full Stack Capable', color: 'from-cyan-400 to-cyan-600', unlocked: true },
  { icon: FiTrendingUp, label: 'Digital Marketer', desc: '11 Sertifikat Marketing', color: 'from-pink-400 to-pink-600', unlocked: true },
  { icon: FiZap, label: 'Fast Learner', desc: '65 Sertifikat dalam 1 Tahun', color: 'from-yellow-400 to-orange-500', unlocked: true },
  { icon: FiStar, label: 'Secret Hunter', desc: 'Temukan Secret Mode!', color: 'from-gray-500 to-gray-700', unlocked: false },
]

export default function AchievementBadges() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="section-title">Achievement Badges</h2>
          <p className="text-soft-gray-400">Pencapaian yang sudah saya raih — level up terus!</p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06, type: 'spring' }}
              viewport={{ once: false, amount: 0.1 }}
              whileHover={badge.unlocked ? { scale: 1.15, y: -5 } : {}}
              className="group flex flex-col items-center"
            >
              {/* Badge circle */}
              <div
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 shadow-lg transition-all duration-300 ${
                  badge.unlocked
                    ? `bg-gradient-to-br ${badge.color} group-hover:shadow-xl`
                    : 'bg-charcoal-800 border-2 border-dashed border-charcoal-600'
                }`}
              >
                {badge.unlocked ? (
                  <badge.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                ) : (
                  <span className="text-2xl">🔒</span>
                )}

                {/* Shine effect */}
                {badge.unlocked && (
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-45 translate-x-full group-hover:translate-x-[-100%]" style={{ transition: 'transform 0.6s ease' }} />
                  </div>
                )}
              </div>

              {/* Label */}
              <span className={`text-[10px] md:text-xs font-medium text-center leading-tight ${badge.unlocked ? 'text-soft-gray-300' : 'text-soft-gray-600'}`}>
                {badge.label}
              </span>
              <span className={`text-[8px] md:text-[10px] text-center ${badge.unlocked ? 'text-soft-gray-500' : 'text-soft-gray-700'}`}>
                {badge.unlocked ? badge.desc : '???'}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
