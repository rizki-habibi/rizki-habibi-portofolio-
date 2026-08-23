'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BannerGame() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#0a1628' }}>
      {/* Bintang latar */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: (i % 3) + 1,
            height: (i % 3) + 1,
            left: `${(i * 37 + 11) % 98}%`,
            top: `${(i * 53 + 7) % 90}%`,
            opacity: 0.15 + (i % 4) * 0.1,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10 relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">

          {/* Teks kiri */}
          <div className="flex-1 text-center sm:text-left">
            <div
              className="inline-block font-bold text-[9px] tracking-[0.3em] px-3 py-1 mb-3"
              style={{ background: '#ffd700', color: '#0a0a0a', border: '2px solid #0a0a0a' }}
            >
              FITUR EKSKLUSIF
            </div>

            <h2 className="font-comic text-3xl sm:text-4xl text-white mb-2 leading-tight">
              🎮 JELAJAHI PORTOFOLIO<br />
              <span style={{ color: '#ffd700' }}>SEBAGAI GAME 3D</span>
            </h2>

            <p className="text-white/50 text-sm font-bold mb-5 leading-relaxed max-w-sm">
              Kendarai mobil, sepeda, atau pesawat melintasi peta Indonesia virtual.
              Kunjungi Jember, Jakarta, Bali dan temukan cerita Rizki di setiap kota.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-2 mb-6 max-w-sm mx-auto sm:mx-0">
              {[
                { icon: '🚗', teks: 'Mobil, Sepeda, Pesawat' },
                { icon: '🗺️', teks: '9 Kota Indonesia' },
                { icon: '🏆', teks: '12 Achievement' },
                { icon: '👁️', teks: 'Ganti View Kamera' },
              ].map(f => (
                <div key={f.teks} className="flex items-center gap-2 text-xs text-white/60 font-bold">
                  <span className="text-base">{f.icon}</span>
                  <span>{f.teks}</span>
                </div>
              ))}
            </div>

            <Link href="/game">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 font-comic text-base px-8 py-4 text-[#0a0a0a] cursor-pointer"
                style={{
                  background: '#ffd700',
                  border: '3px solid #0a0a0a',
                  boxShadow: '5px 5px 0 #ffd700',
                }}
              >
                <span className="text-2xl">🎮</span>
                MULAI BERMAIN
                <span className="text-sm opacity-60">→</span>
              </motion.div>
            </Link>

            <div className="mt-3 text-white/20 text-[10px] font-bold">
              WASD / Arrow keys untuk bergerak · ESC untuk pause
            </div>
          </div>

          {/* Preview visual kanan */}
          <div className="flex-shrink-0">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
              style={{
                width: 260,
                height: 180,
                border: '3px solid rgba(255,215,0,0.4)',
                boxShadow: '0 0 40px rgba(255,215,0,0.15)',
                background: 'linear-gradient(135deg, #0d1f3c 0%, #1a0a2e 100%)',
                overflow: 'hidden',
              }}
            >
              {/* Simulasi tampilan game */}
              {/* Tanah hijau */}
              <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: '#1a4a0a' }} />
              {/* Jalan */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-20" style={{ background: '#444' }} />
              {/* Bangunan kota */}
              {[
                { l: '15%', w: 20, h: 55, c: '#ffd70066' },
                { l: '25%', w: 16, h: 40, c: '#1a5cff66' },
                { l: '60%', w: 22, h: 65, c: '#e6332966' },
                { l: '72%', w: 15, h: 45, c: '#22c55e66' },
              ].map((b, i) => (
                <div
                  key={i}
                  className="absolute bottom-16"
                  style={{ left: b.l, width: b.w, height: b.h, background: b.c, border: '1px solid rgba(255,255,255,0.1)' }}
                />
              ))}
              {/* Karakter / kendaraan */}
              <motion.div
                animate={{ x: [-60, 60, -60] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute font-comic text-xl"
                style={{ bottom: 62, left: '50%' }}
              >
                🚗
              </motion.div>
              {/* Pesawat terbang */}
              <motion.div
                animate={{ x: [80, -80], y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute text-base"
                style={{ top: 20, left: '70%' }}
              >
                ✈️
              </motion.div>
              {/* Label kota */}
              <div
                className="absolute top-2 left-2 font-comic text-[9px] px-2 py-0.5"
                style={{ background: '#ffd700', color: '#0a0a0a' }}
              >
                🏠 JEMBER
              </div>
              {/* Bintang */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: 1.5, height: 1.5,
                    left: `${(i * 41 + 5) % 95}%`,
                    top: `${(i * 23 + 3) % 40}%`,
                    opacity: 0.4,
                  }}
                />
              ))}
              {/* Overlay komik border */}
              <div className="absolute inset-0 pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.05)' }} />
            </motion.div>

            {/* Badge di bawah preview */}
            <div className="flex gap-2 mt-2 justify-center">
              {['🚗 MOBIL', '🚲 SEPEDA', '✈️ PESAWAT'].map(k => (
                <div
                  key={k}
                  className="font-bold text-[9px] px-2 py-0.5 text-white/40"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {k}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
