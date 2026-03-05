'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiGithub, FiStar, FiGitBranch, FiGitCommit, FiActivity, FiCalendar } from 'react-icons/fi'
import { HiLightningBolt } from 'react-icons/hi'

const GITHUB_USERNAME = 'kikiproject'

const languageData = [
  { name: 'PHP / Blade', percent: 45, color: '#FF2D20' },
  { name: 'JavaScript', percent: 20, color: '#F7DF1E' },
  { name: 'TypeScript', percent: 15, color: '#3178C6' },
  { name: 'HTML/CSS', percent: 12, color: '#E34F26' },
  { name: 'Other', percent: 8, color: '#6b7280' },
]

const codingStats = [
  { label: 'Total Commits', value: '150+', icon: FiGitCommit },
  { label: 'Repositories', value: '10+', icon: FiGitBranch },
  { label: 'Stars Earned', value: '3', icon: FiStar },
  { label: 'Streak Days', value: '14', icon: FiActivity },
]

export default function GitHubEnhanced() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  // Generate heatmap data
  const [heatmap] = useState(() => {
    const data: number[] = []
    for (let i = 0; i < 52 * 7; i++) {
      const weekIndex = Math.floor(i / 7)
      const rand = Math.random()
      if (weekIndex > 45) {
        // Recent weeks - more activity
        if (rand < 0.4) data.push(0)
        else if (rand < 0.6) data.push(1)
        else if (rand < 0.8) data.push(2)
        else if (rand < 0.95) data.push(3)
        else data.push(4)
      } else if (weekIndex > 35) {
        if (rand < 0.6) data.push(0)
        else if (rand < 0.8) data.push(1)
        else data.push(2)
      } else {
        if (rand < 0.85) data.push(0)
        else data.push(1)
      }
    }
    return data
  })

  const contributionColors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']

  return (
    <section id="github" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="section-title">GitHub Activity</h2>
          <p className="text-soft-gray-400">Kontribusi dan aktivitas coding saya di GitHub.</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {codingStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className="bg-charcoal-900/80 border border-charcoal-700/50 rounded-xl p-4 text-center hover:border-green-500/30 transition-all"
            >
              <stat.icon className="w-5 h-5 text-green-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-[11px] text-soft-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Contribution Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="md:col-span-2 glass-card p-6"
          >
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-green-400" />
              Contribution Heatmap
            </h3>
            <div className="overflow-x-auto">
              <div className="inline-grid grid-flow-col gap-[3px]" style={{ gridTemplateRows: 'repeat(7, 1fr)' }}>
                {heatmap.map((level, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.001, duration: 0.2 }}
                    className="w-[11px] h-[11px] rounded-[2px] hover:ring-1 hover:ring-white/30 transition-all"
                    style={{ backgroundColor: contributionColors[level] }}
                    title={`${level} contributions`}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3 text-[10px] text-soft-gray-500">
              <span>Less</span>
              {contributionColors.map((color, i) => (
                <div key={i} className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: color }} />
              ))}
              <span>More</span>
            </div>
          </motion.div>

          {/* Language Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="glass-card p-6"
          >
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <HiLightningBolt className="w-4 h-4 text-yellow-400" />
              Top Languages
            </h3>

            {/* Pie-like bar */}
            <div className="h-3 rounded-full overflow-hidden flex mb-4">
              {languageData.map((lang) => (
                <motion.div
                  key={lang.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  viewport={{ once: false }}
                  style={{ backgroundColor: lang.color }}
                  className="h-full"
                  title={`${lang.name}: ${lang.percent}%`}
                />
              ))}
            </div>

            <div className="space-y-2">
              {languageData.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                    <span className="text-soft-gray-300">{lang.name}</span>
                  </div>
                  <span className="text-soft-gray-500">{lang.percent}%</span>
                </div>
              ))}
            </div>

            {/* Link */}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-sm text-soft-gray-400 hover:text-white transition-colors pt-3 border-t border-charcoal-800"
            >
              <FiGithub className="w-4 h-4" />
              @{GITHUB_USERNAME}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
