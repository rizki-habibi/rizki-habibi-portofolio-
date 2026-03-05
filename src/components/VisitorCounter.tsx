'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiEye, FiClock, FiUsers, FiHeart } from 'react-icons/fi'

const counters = [
  { icon: FiEye, label: 'Page Views', end: 2847, suffix: '' },
  { icon: FiUsers, label: 'Unique Visitors', end: 1293, suffix: '' },
  { icon: FiClock, label: 'Avg. Time (sec)', end: 45, suffix: 's' },
  { icon: FiHeart, label: 'Likes', end: 89, suffix: '' },
]

function AnimatedNumber({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setValue(end)
        clearInterval(timer)
      } else {
        setValue(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return <span>{value.toLocaleString()}{suffix}</span>
}

export default function VisitorCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 rounded-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {counters.map((counter, i) => (
              <motion.div
                key={counter.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <counter.icon className="w-5 h-5 text-navy-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  <AnimatedNumber end={counter.end} suffix={counter.suffix} inView={isInView} />
                </div>
                <div className="text-xs text-soft-gray-500">{counter.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
