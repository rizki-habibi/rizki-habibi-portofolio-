'use client'

import { motion } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

const toolCategories = [
  {
    title: 'CODE EDITOR & DEV',
    icon: '💻',
    color: '#1a5cff',
    bg: '#e8f0ff',
    tools: [
      { name: 'VS Code', icon: '🆚', level: 'DAILY' },
      { name: 'Laragon', icon: '🐘', level: 'DAILY' },
      { name: 'PG Admin 4', icon: '🗄️', level: 'DAILY' },
      { name: 'Project IDX', icon: '☁️', level: 'EXPLORE' },
      { name: 'Acode', icon: '📱', level: 'MOBILE' },
      { name: 'GitHub', icon: '🐙', level: 'DAILY' },
    ],
  },
  {
    title: 'DESIGN & MEDIA',
    icon: '🎨',
    color: '#e63329',
    bg: '#fef2f2',
    tools: [
      { name: 'Canva', icon: '🎨', level: 'DAILY' },
      { name: 'Figma', icon: '✏️', level: 'DAILY' },
      { name: 'CorelDraw', icon: '🖊️', level: 'SKILLED' },
      { name: 'Photoshop', icon: '🖼️', level: 'SKILLED' },
      { name: 'Affinity', icon: '📐', level: 'EXPLORE' },
      { name: 'CapCut', icon: '🎬', level: 'DAILY' },
      { name: 'Vegas Pro', icon: '🎞️', level: 'SKILLED' },
      { name: 'Premier Pro', icon: '🎥', level: 'FAMILIAR' },
    ],
  },
  {
    title: 'AI & KOLABORASI',
    icon: '🤖',
    color: '#8b5cf6',
    bg: '#f5f0ff',
    tools: [
      { name: 'ChatGPT', icon: '🤖', level: 'DAILY' },
      { name: 'Gemini AI', icon: '♊', level: 'DAILY' },
      { name: 'DeepSeek', icon: '🔍', level: 'EXPLORE' },
      { name: 'Codedex', icon: '🎮', level: 'LEARN' },
    ],
  },
  {
    title: 'ANALISIS & DIAGRAM',
    icon: '📊',
    color: '#22c55e',
    bg: '#f0fdf4',
    tools: [
      { name: 'Visual Paradigm', icon: '📊', level: 'SKILLED' },
      { name: 'Draw.io', icon: '📋', level: 'SKILLED' },
      { name: 'Microsoft Excel', icon: '📈', level: 'FAMILIAR' },
      { name: 'Firebase', icon: '🔥', level: 'EXPLORE' },
    ],
  },
]

const levelColor: Record<string, string> = {
  DAILY: '#22c55e',
  SKILLED: '#1a5cff',
  EXPLORE: '#f59e0b',
  MOBILE: '#8b5cf6',
  LEARN: '#e63329',
  FAMILIAR: '#0a0a0a',
}

export default function ToolsComic() {
  return (
    <section id="tools" className="py-20 px-4 relative" style={{ background: '#f0f0eb' }}>
      <div className="halftone-blue" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <HeaderBab nomor="09" judul="MY ARSENAL" warna="#f59e0b" subtitle="🛠️ Senjata-senjata dalam arsenalku!" />

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {Object.entries(levelColor).map(([level, color]) => (
            <div key={level} className="flex items-center gap-1.5 text-[11px] font-bold">
              <div className="w-3 h-3" style={{ background: color, border: '1px solid #0a0a0a' }} />
              <span className="text-comic-black">{level}</span>
            </div>
          ))}
        </motion.div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {toolCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40, rotate: catIdx % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
              className="overflow-hidden"
              style={{ border: `3px solid ${cat.color}`, boxShadow: `5px 5px 0 ${cat.color}`, background: 'white' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-3" style={{ background: cat.color, borderBottom: '3px solid #0a0a0a' }}>
                <span className="text-2xl">{cat.icon}</span>
                <span className="font-comic text-white text-lg">{cat.title}</span>
              </div>

              {/* Tools */}
              <div className="p-4 flex flex-wrap gap-2" style={{ background: cat.bg }}>
                {cat.tools.map((tool, ti) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: catIdx * 0.05 + ti * 0.04 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2 bg-white"
                    style={{ border: `2px solid ${levelColor[tool.level]}`, boxShadow: `3px 3px 0 ${levelColor[tool.level]}` }}
                  >
                    <span className="text-base">{tool.icon}</span>
                    <div>
                      <div className="font-bold text-xs text-comic-black">{tool.name}</div>
                      <div className="font-comic text-[9px]" style={{ color: levelColor[tool.level] }}>{tool.level}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media belajar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 comic-panel-yellow p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="font-comic text-xl text-comic-black mb-4 text-center"
          >
            📖 MEDIA BELAJAR
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {['YouTube (Otodidak)', 'Mesin Pencarian', 'Jurnal & Artikel Ilmiah', 'Dokumentasi Resmi', 'Forum Developer'].map((m, i) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="font-bold text-xs text-comic-black px-4 py-2 bg-white"
                style={{ border: '2px solid #f59e0b', boxShadow: '3px 3px 0 #f59e0b' }}
              >
                {m}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
