'use client'

import dynamic from 'next/dynamic'

// Semua GrupBab di-dynamic import di sini (Client Component)
// sehingga ssr:false tidak melanggar aturan Server Component
const grupBabMap: Record<number, React.ComponentType> = {
  1: dynamic(() => import('@/components/GrupBab1'), { ssr: false }),
  2: dynamic(() => import('@/components/GrupBab2'), { ssr: false }),
  3: dynamic(() => import('@/components/GrupBab3'), { ssr: false }),
  4: dynamic(() => import('@/components/GrupBab4'), { ssr: false }),
  5: dynamic(() => import('@/components/GrupBab5'), { ssr: false }),
  6: dynamic(() => import('@/components/GrupBab6'), { ssr: false }),
  7: dynamic(() => import('@/components/GrupBab7'), { ssr: false }),
  8: dynamic(() => import('@/components/GrupBab8'), { ssr: false }),
  9: dynamic(() => import('@/components/GrupBab9'), { ssr: false }),
  10: dynamic(() => import('@/components/GrupBab10'), { ssr: false }),
  11: dynamic(() => import('@/components/GrupBab11'), { ssr: false }),
  12: dynamic(() => import('@/components/GrupBab12'), { ssr: false }),
  13: dynamic(() => import('@/components/GrupBab13'), { ssr: false }),
  14: dynamic(() => import('@/components/GrupBab14'), { ssr: false }),
  15: dynamic(() => import('@/components/GrupBab15'), { ssr: false }),
  16: dynamic(() => import('@/components/GrupBab16'), { ssr: false }),
  17: dynamic(() => import('@/components/GrupBab17'), { ssr: false }),
  18: dynamic(() => import('@/components/GrupBab18'), { ssr: false }),
  19: dynamic(() => import('@/components/GrupBab19'), { ssr: false }),
  20: dynamic(() => import('@/components/GrupBab20'), { ssr: false }),
  21: dynamic(() => import('@/components/GrupBab21'), { ssr: false }),
  22: dynamic(() => import('@/components/GrupBab22'), { ssr: false }),
  23: dynamic(() => import('@/components/GrupBab23'), { ssr: false }),
  24: dynamic(() => import('@/components/GrupBab24'), { ssr: false }),
  25: dynamic(() => import('@/components/GrupBab25'), { ssr: false }),
  26: dynamic(() => import('@/components/GrupBab26'), { ssr: false }),
  27: dynamic(() => import('@/components/GrupBab27'), { ssr: false }),
  28: dynamic(() => import('@/components/GrupBab28'), { ssr: false }),
  29: dynamic(() => import('@/components/GrupBab29'), { ssr: false }),
  30: dynamic(() => import('@/components/GrupBab30'), { ssr: false }),
  31: dynamic(() => import('@/components/GrupBab31'), { ssr: false }),
}

export default function ChapterRenderer({ grupBab }: { grupBab: number }) {
  const Komponen = grupBabMap[grupBab]
  if (!Komponen) return (
    <div className="py-20 text-center font-comic text-[#0a0a0a]/40">
      Chapter tidak ditemukan.
    </div>
  )
  return <Komponen />
}
