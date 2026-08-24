'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'

// Lazy load berat game engine
const GameWorld = dynamic(() => import('./GameWorld'), {
  ssr: false, loading: () => (
    <div className="fixed inset-0 bg-[#0a1628] flex flex-col items-center justify-center gap-4">
      <div className="font-comic text-4xl text-[#ffd700] animate-pulse">MEMUAT DUNIA...</div>
      <div className="w-48 h-2 bg-white/10 rounded overflow-hidden">
        <div className="h-full bg-[#ffd700] w-1/2" />
      </div>
      <div className="text-white/40 text-xs font-bold">Menyiapkan peta Indonesia virtual</div>
    </div>
  )
})

export default function GameClient() {
  const [mulai, setMulai] = useState(false)
  const [kualitas, setKualitas] = useState<'low' | 'medium' | 'high'>('medium')

  if (!mulai) {
    return (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center p-4"
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #1a0a2e 50%, #0a1628 100%)',
          backgroundSize: '400% 400%',
        }}
      >
        {/* Bintang dekoratif */}
        {/* Bintang dekoratif — nilai statis agar tidak hydration mismatch */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: (i % 3) + 1,
              height: (i % 3) + 1,
              left: `${(i * 37 + 11) % 98}%`,
              top: `${(i * 53 + 7) % 91}%`,
              animationDelay: `${(i * 0.3) % 3}s`,
              opacity: 0.15 + (i % 5) * 0.1,
            }}
          />
        ))}

        <div className="relative z-10 text-center max-w-lg w-full">
          {/* Logo game */}
          <div
            className="inline-block mb-6 px-6 py-3"
            style={{ border: '4px solid #ffd700', boxShadow: '6px 6px 0 #ffd700', background: '#0a1628' }}
          >
            <div className="font-comic text-[#ffd700] text-5xl sm:text-6xl tracking-widest">RIZKI</div>
            <div className="font-comic text-white text-2xl sm:text-3xl tracking-[0.5em]">WORLD</div>
            <div className="text-white/40 text-[10px] font-bold tracking-widest mt-1">INDONESIA VIRTUAL</div>
          </div>

          <p className="text-white/60 text-sm font-bold mb-6 leading-relaxed">
            Jelajahi portofolio sebagai game 3D!<br />
            Kendarai kendaraan, kunjungi kota-kota Indonesia,<br />
            dan temukan cerita Rizki Habibi.
          </p>

          {/* Kontrol */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 text-[11px] font-bold text-white/50">
            {[
              { key: 'W / ↑', aksi: 'Maju' },
              { key: 'S / ↓', aksi: 'Mundur' },
              { key: 'A / ←', aksi: 'Kiri' },
              { key: 'D / →', aksi: 'Kanan' },
              { key: 'SPACE', aksi: 'Naik/Turun' },
              { key: 'E', aksi: 'Interaksi' },
              { key: 'V', aksi: 'Ganti View' },
              { key: 'ESC', aksi: 'Menu' },
            ].map(k => (
              <div key={k.key} className="flex flex-col items-center gap-1 p-2" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                <kbd className="bg-white/10 px-2 py-0.5 rounded text-white text-[10px]">{k.key}</kbd>
                <span>{k.aksi}</span>
              </div>
            ))}
          </div>

          {/* Kualitas */}
          <div className="mb-5">
            <div className="text-white/40 text-[10px] tracking-widest mb-2 font-bold">KUALITAS GRAFIS</div>
            <div className="flex gap-2 justify-center">
              {(['low', 'medium', 'high'] as const).map(q => (
                <button
                  key={q}
                  onClick={() => setKualitas(q)}
                  className="font-comic text-xs px-4 py-2 transition-all"
                  style={{
                    background: kualitas === q ? '#ffd700' : 'transparent',
                    color: kualitas === q ? '#0a0a0a' : 'rgba(255,255,255,0.4)',
                    border: `2px solid ${kualitas === q ? '#ffd700' : 'rgba(255,255,255,0.2)'}`,
                  }}
                >
                  {q === 'low' ? 'RINGAN' : q === 'medium' ? 'SEDANG' : 'TINGGI'}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setMulai(true)}
            className="w-full font-comic text-xl py-4 text-[#0a0a0a] transition-all hover:scale-105 active:scale-95 mb-3"
            style={{ background: '#ffd700', border: '4px solid #0a0a0a', boxShadow: '6px 6px 0 #ffd700' }}
          >
            🎮 MULAI BERMAIN
          </button>

          <Link
            href="/"
            className="block text-white/30 text-xs font-bold hover:text-white/60 transition-colors"
          >
            ← Kembali ke Portofolio
          </Link>
        </div>
      </div>
    )
  }

  return <GameWorld kualitas={kualitas} />
}
