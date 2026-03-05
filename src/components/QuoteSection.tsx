'use client'

import { motion } from 'framer-motion'

const quotes = [
  { text: 'Belajar itu investasi terbaik untuk diri sendiri.', author: 'Rizki Habibi' },
  { text: 'Code is like humor. When you have to explain it, it\'s bad.', author: 'Cory House' },
  { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
]

export default function QuoteSection() {
  const quote = quotes[Math.floor(Date.now() / 86400000) % quotes.length]

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/30 via-purple-950/20 to-navy-950/30 pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center"
        >
          <span className="text-5xl md:text-7xl text-navy-500/30 font-serif leading-none">&ldquo;</span>
          <p className="text-xl md:text-2xl text-white font-light italic -mt-6 mb-4 px-4">
            {quote.text}
          </p>
          <span className="text-soft-gray-400 text-sm">— {quote.author}</span>
        </motion.div>
      </div>
    </section>
  )
}
