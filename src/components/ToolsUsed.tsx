'use client'

import { motion } from 'framer-motion'
import { SiLaravel, SiPhp, SiJavascript, SiTailwindcss, SiMysql, SiGit, SiFigma, SiPostman, SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiVercel, SiGithub } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const tools = [
  { name: 'VS Code', icon: VscCode, color: '#007ACC' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
]

export default function ToolsUsed() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="section-title">Tools & Teknologi</h2>
          <p className="text-soft-gray-400">Alat yang saya gunakan setiap hari untuk membangun produk digital.</p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              viewport={{ once: false }}
              whileHover={{ y: -8, scale: 1.1 }}
              className="glass-card p-4 flex flex-col items-center gap-3 group cursor-default"
            >
              <tool.icon
                className="w-8 h-8 transition-colors duration-300"
                style={{ color: tool.color }}
              />
              <span className="text-xs text-soft-gray-400 group-hover:text-white transition-colors font-medium text-center">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
