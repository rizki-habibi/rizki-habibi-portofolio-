'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

type KategoriKey = 'Frontend' | 'Backend' | 'Tools' | 'Soft Skill'

const skillData: Record<KategoriKey, {
  nama: string; level: number; icon: string; warna: string; deskripsi: string
}[]> = {
  Frontend: [
    { nama: 'HTML5', level: 95, icon: '🌐', warna: '#E34F26', deskripsi: 'Struktur web semantik & aksesibel' },
    { nama: 'CSS3 / Tailwind', level: 90, icon: '🎨', warna: '#1572B6', deskripsi: 'Styling modern & responsif' },
    { nama: 'JavaScript', level: 80, icon: '⚡', warna: '#F7DF1E', deskripsi: 'Logic, DOM, async, event handling' },
    { nama: 'TypeScript', level: 70, icon: '🔷', warna: '#3178C6', deskripsi: 'Type safety & developer experience' },
    { nama: 'React / Next.js', level: 75, icon: '⚛️', warna: '#61DAFB', deskripsi: 'SSR, CSR, routing, state management' },
    { nama: 'Bootstrap', level: 85, icon: '🅱️', warna: '#7952B3', deskripsi: 'Rapid UI prototyping' },
  ],
  Backend: [
    { nama: 'PHP', level: 85, icon: '🐘', warna: '#777BB4', deskripsi: 'Server-side scripting & OOP' },
    { nama: 'Laravel', level: 90, icon: '🔴', warna: '#FF2D20', deskripsi: 'MVC, Eloquent ORM, Artisan CLI' },
    { nama: 'MySQL', level: 80, icon: '🗄️', warna: '#4479A1', deskripsi: 'Query, relation, indexing, optimization' },
    { nama: 'REST API', level: 82, icon: '🔗', warna: '#22c55e', deskripsi: 'JWT, Sanctum, Swagger docs' },
    { nama: 'Livewire', level: 72, icon: '🔥', warna: '#e63329', deskripsi: 'Reactive fullstack di Laravel' },
  ],
  Tools: [
    { nama: 'Git & GitHub', level: 78, icon: '🐙', warna: '#F05032', deskripsi: 'Version control & collaboration' },
    { nama: 'VS Code', level: 95, icon: '💻', warna: '#007ACC', deskripsi: 'IDE utama dengan ekstensi lengkap' },
    { nama: 'Figma', level: 70, icon: '🎭', warna: '#F24E1E', deskripsi: 'Prototyping & UI design' },
    { nama: 'IoT / ESP32', level: 65, icon: '🔌', warna: '#f59e0b', deskripsi: 'Sensor integration & firmware' },
    { nama: 'Linux', level: 65, icon: '🐧', warna: '#FCC624', deskripsi: 'CLI, server management, bash' },
    { nama: 'Canva', level: 88, icon: '🖼️', warna: '#00C4CC', deskripsi: 'Desain konten & presentasi' },
  ],
  'Soft Skill': [
    { nama: 'Problem Solving', level: 88, icon: '🧩', warna: '#8b5cf6', deskripsi: 'Analisis akar masalah & solusi tepat' },
    { nama: 'Team Leadership', level: 85, icon: '👥', warna: '#1a5cff', deskripsi: 'Koordinasi tim & pengambilan keputusan' },
    { nama: 'Komunikasi', level: 82, icon: '💬', warna: '#22c55e', deskripsi: 'Presentasi, negosiasi, dokumentasi' },
    { nama: 'Manajemen Waktu', level: 78, icon: '⏰', warna: '#f59e0b', deskripsi: 'Prioritas tugas & deadline management' },
    { nama: 'Belajar Mandiri', level: 95, icon: '📚', warna: '#e63329', deskripsi: 'Otodidak & adaptif terhadap teknologi baru' },
    { nama: 'Kreativitas', level: 85, icon: '✨', warna: '#0891b2', deskripsi: 'Inovasi solusi & pendekatan unik' },
  ],
}

const kategoriList: KategoriKey[] = ['Frontend', 'Backend', 'Tools', 'Soft Skill']

const warnaMeta: Record<KategoriKey, { warna: string; bg: string; ikon: string }> = {
  Frontend: { warna: '#1a5cff', bg: '#e8f0ff', ikon: '🌐' },
  Backend: { warna: '#e63329', bg: '#fef2f2', ikon: '⚙️' },
  Tools: { warna: '#f59e0b', bg: '#fffbeb', ikon: '🛠️' },
  'Soft Skill': { warna: '#8b5cf6', bg: '#f5f0ff', ikon: '🧠' },
}

function BarSkill({ skill, index }: {
  skill: { nama: string; level: number; icon: string; warna: string; deskripsi: string }
  index: number
  warnaUtama?: string
}) {
  const [hover, setHover] = useState(false)

  const labelLevel = skill.level >= 90 ? 'MASTER' : skill.level >= 80 ? 'EXPERT' : skill.level >= 70 ? 'SKILLED' : 'LEARNER'
  const warnaLabel: Record<string, string> = { MASTER: '#ffd700', EXPERT: '#1a5cff', SKILLED: '#22c55e', LEARNER: '#ccc' }

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: false, amount: 0.2 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="relative group"
      style={{ background: hover ? skill.warna + '08' : 'white', border: `2px solid ${hover ? skill.warna : '#e5e7eb'}`, transition: 'all 0.2s', padding: '10px 12px', marginBottom: 8 }}
    >
      <div className="flex items-center gap-3 mb-2">
        {/* Ikon */}
        <motion.div
          animate={{ rotate: hover ? [0, -10, 10, 0] : 0 }}
          transition={{ duration: 0.4 }}
          className="w-8 h-8 flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: skill.warna + '15', border: `2px solid ${skill.warna}` }}
        >
          {skill.icon}
        </motion.div>

        {/* Nama + deskripsi */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-xs sm:text-sm text-comic-black">{skill.nama}</span>
            <span
              className="font-comic text-[8px] px-1.5 py-0.5 text-white leading-none"
              style={{ background: warnaLabel[labelLevel] || '#ccc', color: labelLevel === 'MASTER' ? '#0a0a0a' : 'white' }}
            >
              {labelLevel}
            </span>
          </div>
          <AnimatePresence>
            {hover && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-[10px] text-comic-black/60 font-bold mt-0.5"
              >
                {skill.deskripsi}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Persentase */}
        <motion.div
          animate={{ scale: hover ? 1.15 : 1 }}
          className="font-comic text-base sm:text-lg flex-shrink-0"
          style={{ color: skill.warna }}
        >
          {skill.level}%
        </motion.div>
      </div>

      {/* Progress bar bergaya komik */}
      <div
        className="relative overflow-hidden"
        style={{ height: 14, border: '2px solid #0a0a0a', background: '#f0f0eb' }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, delay: index * 0.07 + 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          viewport={{ once: false }}
          className="h-full relative overflow-hidden"
          style={{
            background: `repeating-linear-gradient(-45deg, ${skill.warna} 0px, ${skill.warna} 8px, ${skill.warna}88 8px, ${skill.warna}88 16px)`,
          }}
        >
          {/* Shimmer efek */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: index * 0.15 }}
            className="absolute inset-0 w-1/3"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
          />
        </motion.div>

        {/* Milestone marks */}
        {[25, 50, 75].map(mark => (
          <div
            key={mark}
            className="absolute top-0 bottom-0 w-px"
            style={{ left: `${mark}%`, background: '#0a0a0a', opacity: 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function ProgressSkillsComic() {
  const [aktifKat, setAktifKat] = useState<KategoriKey>('Frontend')

  return (
    <section id="progress-skills" className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <HeaderBab nomor="★" judul="LEVEL PROGRESS" warna="#8b5cf6" subtitle="📊 Detail kemampuan per kategori" />

        {/* Tab kategori */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8 sm:mb-10">
          {kategoriList.map((kat) => {
            const meta = warnaMeta[kat]
            return (
              <motion.button
                key={kat}
                onClick={() => setAktifKat(kat)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-1 p-2.5 sm:p-3 transition-all"
                style={{
                  background: aktifKat === kat ? meta.warna : 'white',
                  border: `3px solid ${meta.warna}`,
                  boxShadow: aktifKat === kat ? `5px 5px 0 #0a0a0a` : `3px 3px 0 ${meta.warna}`,
                  color: aktifKat === kat ? 'white' : '#0a0a0a',
                }}
              >
                <span className="text-xl sm:text-2xl">{meta.ikon}</span>
                <span className="font-comic text-[10px] sm:text-xs tracking-wide">{kat.toUpperCase()}</span>
                <span className="text-[9px] font-bold opacity-60">{skillData[kat].length} SKILLS</span>
              </motion.button>
            )
          })}
        </div>

        {/* Konten skill */}
        <AnimatePresence mode="wait">
          <motion.div
            key={aktifKat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="comic-panel p-4 sm:p-6"
            style={{ background: warnaMeta[aktifKat].bg }}
          >
            {/* Judul kategori */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0"
                style={{ background: warnaMeta[aktifKat].warna, border: '2px solid #0a0a0a', boxShadow: '3px 3px 0 #0a0a0a' }}
              >
                {warnaMeta[aktifKat].ikon}
              </div>
              <div>
                <div className="font-comic text-lg sm:text-xl text-comic-black">{aktifKat.toUpperCase()} SKILLS</div>
                <div className="text-[10px] sm:text-xs font-bold text-comic-black/50">
                  {skillData[aktifKat].length} kemampuan tercatat · Rata-rata{' '}
                  {Math.round(skillData[aktifKat].reduce((a, s) => a + s.level, 0) / skillData[aktifKat].length)}%
                </div>
              </div>

              {/* Rata-rata badge */}
              <div
                className="ml-auto font-comic text-xl sm:text-2xl flex-shrink-0"
                style={{ color: warnaMeta[aktifKat].warna }}
              >
                {Math.round(skillData[aktifKat].reduce((a, s) => a + s.level, 0) / skillData[aktifKat].length)}%
              </div>
            </div>

            {/* Legend level */}
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { label: 'MASTER', warna: '#ffd700', min: 90 },
                { label: 'EXPERT', warna: '#1a5cff', min: 80 },
                { label: 'SKILLED', warna: '#22c55e', min: 70 },
                { label: 'LEARNER', warna: '#ccc', min: 0 },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-1">
                  <div className="w-3 h-3" style={{ background: l.warna, border: '1px solid #0a0a0a' }} />
                  <span className="font-bold text-[9px] text-comic-black/60">{l.label} ≥{l.min}%</span>
                </div>
              ))}
            </div>

            {/* Bar skills */}
            <div>
              {skillData[aktifKat].map((skill, i) => (
                <BarSkill key={skill.nama} skill={skill} index={i} warnaUtama={warnaMeta[aktifKat].warna} />
              ))}
            </div>

            {/* Hover hint */}
            <p className="text-[9px] sm:text-[10px] text-comic-black/40 font-bold text-center mt-3">
              💡 Hover / sentuh kartu untuk melihat deskripsi detail
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
