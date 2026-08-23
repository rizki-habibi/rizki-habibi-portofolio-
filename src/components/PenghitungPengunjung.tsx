'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { FiEye, FiClock, FiUsers, FiHeart, FiTrendingUp, FiRefreshCw, FiWifi, FiWifiOff } from 'react-icons/fi'

// ============================================================
// HELPER — buat atau ambil ID sesi pengunjung
// ============================================================
function ambilIdPengunjung(): string {
  if (typeof window === 'undefined') return ''
  let id = sessionStorage.getItem('visitor_id')
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36)
    sessionStorage.setItem('visitor_id', id)
  }
  return id
}

// ============================================================
// HELPER — simpan & ambil cache localStorage
// ============================================================
interface DataPengunjung {
  pageViews: number
  uniqueVisitors: number
  likes: number
  timestamp: number
}

const KUNCI_CACHE = 'pengunjung_cache'
const KUNCI_LIKE = 'pengunjung_sudah_like'
const TTL_CACHE = 60_000 // 1 menit

function simpanCache(data: DataPengunjung) {
  try { localStorage.setItem(KUNCI_CACHE, JSON.stringify(data)) } catch (_) { /* abaikan */ }
}

function ambilCache(): DataPengunjung | null {
  try {
    const raw = localStorage.getItem(KUNCI_CACHE)
    if (!raw) return null
    const data: DataPengunjung = JSON.parse(raw)
    if (Date.now() - data.timestamp > TTL_CACHE) return null
    return data
  } catch (_) { return null }
}

// ============================================================
// KOMPONEN ANGKA ANIMASI
// ============================================================
function AngkaAnimasi({ nilai, inView }: { nilai: number; inView: boolean }) {
  const [tampil, setTampil] = useState(0)
  useEffect(() => {
    if (!inView || nilai === 0) return
    let mulai = 0
    const selisih = nilai / (1800 / 16)
    const timer = setInterval(() => {
      mulai += selisih
      if (mulai >= nilai) { setTampil(nilai); clearInterval(timer) }
      else setTampil(Math.floor(mulai))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, nilai])

  return <span>{tampil.toLocaleString('id-ID')}</span>
}

// ============================================================
// DATA KARTU STATISTIK
// ============================================================
const kartuStatistik = (data: DataPengunjung, avgTime: number) => [
  { icon: FiEye, label: 'Page Views', nilai: data.pageViews, suffix: '', warna: '#1a5cff', bg: '#e8f0ff' },
  { icon: FiUsers, label: 'Unique Visitors', nilai: data.uniqueVisitors, suffix: '', warna: '#22c55e', bg: '#f0fdf4' },
  { icon: FiClock, label: 'Avg. Time', nilai: avgTime, suffix: 's', warna: '#f59e0b', bg: '#fffbeb' },
  { icon: FiHeart, label: 'Likes', nilai: data.likes, suffix: '', warna: '#e63329', bg: '#fef2f2' },
  { icon: FiTrendingUp, label: 'GitHub Stars', nilai: 12, suffix: '', warna: '#8b5cf6', bg: '#f5f0ff' },
]

// ============================================================
// KOMPONEN UTAMA
// ============================================================
export default function PenghitungPengunjung() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const [data, setData] = useState<DataPengunjung>({ pageViews: 2847, uniqueVisitors: 1293, likes: 89, timestamp: 0 })
  const [online, setOnline] = useState(true)
  const [memuatLike, setMemuatLike] = useState(false)
  const [sudahLike, setSudahLike] = useState(false)
  const [sedangRefresh, setSedangRefresh] = useState(false)
  const [avgTime] = useState(() => 40 + Math.floor(Math.random() * 20)) // 40-60 detik

  // Cek apakah sudah pernah like
  useEffect(() => {
    try { if (localStorage.getItem(KUNCI_LIKE) === '1') setSudahLike(true) } catch (_) { /* abaikan */ }
  }, [])

  // Fetch data dari API
  const ambilData = useCallback(async (catat = false) => {
    setSedangRefresh(true)
    try {
      // Coba API dulu
      const url = catat ? '/api/pengunjung' : '/api/pengunjung'
      const opsi: RequestInit = catat
        ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ visitorId: ambilIdPengunjung() }) }
        : { method: 'GET' }

      const res = await fetch(url, opsi)
      if (!res.ok) throw new Error('API error')
      const json: DataPengunjung & { timestamp: number } = await res.json()
      const baru: DataPengunjung = { ...json, timestamp: Date.now() }
      setData(baru)
      simpanCache(baru)
      setOnline(true)
    } catch (_) {
      // Fallback ke localStorage cache
      const cache = ambilCache()
      if (cache) setData(cache)
      setOnline(false)
    } finally {
      setSedangRefresh(false)
    }
  }, [])

  // Saat komponen mount — catat kunjungan
  useEffect(() => {
    const cache = ambilCache()
    if (cache) setData(cache) // tampilkan cache dulu agar tidak blank
    ambilData(true)
  }, [ambilData])

  // Auto-refresh setiap 5 menit, pause saat tab di-background
  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden) ambilData(false)
    }, 300_000) // 5 menit
    return () => clearInterval(interval)
  }, [ambilData])

  // Tombol like
  const tanganiLike = async () => {
    if (sudahLike || memuatLike) return
    setMemuatLike(true)
    try {
      const res = await fetch('/api/pengunjung', { method: 'PATCH' })
      if (res.ok) {
        const json = await res.json()
        setData(d => ({ ...d, likes: json.likes }))
        setSudahLike(true)
        try { localStorage.setItem(KUNCI_LIKE, '1') } catch (_) { /* abaikan */ }
      }
    } catch (_) {
      // Fallback optimistik
      setData(d => ({ ...d, likes: d.likes + 1 }))
      setSudahLike(true)
      try { localStorage.setItem(KUNCI_LIKE, '1') } catch (_) { /* abaikan */ }
    } finally {
      setMemuatLike(false)
    }
  }

  const kartu = kartuStatistik(data, avgTime)

  return (
    <section className="py-16 px-4 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Halftone dekoratif */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }} />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="font-comic text-[10px] tracking-[0.3em] text-white/40 border border-white/20 px-4 py-1 inline-block mb-3">
            STATISTIK PORTOFOLIO
          </div>
          <h2 className="font-comic text-3xl md:text-4xl text-white leading-tight"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            BY THE NUMBERS
          </h2>
          <div className="mt-3 font-comic text-white/40 text-xs tracking-widest">
            — DATA REAL-TIME SEJAK PORTOFOLIO DILUNCURKAN --
          </div>

          {/* Indikator status koneksi */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <AnimatePresence mode="wait">
              {online ? (
                <motion.div
                  key="online"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5 px-3 py-1 font-bold text-[10px]"
                  style={{ background: '#022c1d', border: '1px solid #22c55e', color: '#22c55e' }}
                >
                  <FiWifi className="w-3 h-3" />
                  LIVE DATA
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="offline"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5 px-3 py-1 font-bold text-[10px]"
                  style={{ background: '#2d1a00', border: '1px solid #f59e0b', color: '#f59e0b' }}
                >
                  <FiWifiOff className="w-3 h-3" />
                  CACHE DATA
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tombol refresh manual */}
            <motion.button
              onClick={() => ambilData(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5"
              style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)' }}
              title="Refresh data"
            >
              <motion.div
                animate={sedangRefresh ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.8, repeat: sedangRefresh ? Infinity : 0, ease: 'linear' }}
              >
                <FiRefreshCw className="w-3 h-3 text-white/50" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        {/* Grid counter */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {kartu.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 140 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="flex flex-col items-center p-4 text-center relative overflow-hidden"
              style={{ background: c.bg, border: `3px solid ${c.warna}`, boxShadow: `4px 4px 0 ${c.warna}` }}
            >
              {/* Shimmer overlay saat refresh */}
              {sedangRefresh && (
                <div className="absolute inset-0 shimmer opacity-50 pointer-events-none" />
              )}
              <c.icon className="w-5 h-5 mb-2" style={{ color: c.warna }} />
              <div className="font-comic text-2xl font-bold leading-none mb-1" style={{ color: c.warna }}>
                <AngkaAnimasi nilai={c.nilai} inView={inView} />
                {c.suffix}
              </div>
              <div className="font-bold text-[10px] tracking-wider text-[#0a0a0a]/60 uppercase">{c.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tombol like */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 mb-8"
        >
          <p className="text-white/40 text-xs font-bold tracking-widest">SUKA PORTOFOLIO INI?</p>
          <motion.button
            onClick={tanganiLike}
            disabled={sudahLike || memuatLike}
            whileHover={!sudahLike ? { y: -3, scale: 1.06 } : {}}
            whileTap={!sudahLike ? { scale: 0.93 } : {}}
            className="flex items-center gap-2.5 font-comic text-sm px-8 py-3"
            style={{
              background: sudahLike ? '#22c55e' : '#e63329',
              color: 'white',
              border: `3px solid ${sudahLike ? '#16a34a' : '#b91c1c'}`,
              boxShadow: sudahLike ? '4px 4px 0 #16a34a' : '4px 4px 0 #b91c1c',
              cursor: sudahLike ? 'default' : 'pointer',
              opacity: memuatLike ? 0.7 : 1,
            }}
          >
            <AnimatePresence mode="wait">
              {memuatLike ? (
                <motion.div
                  key="muat"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <motion.div
                  key={sudahLike ? 'checked' : 'heart'}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FiHeart className={`w-4 h-4 ${sudahLike ? 'fill-white' : ''}`} />
                </motion.div>
              )}
            </AnimatePresence>
            {sudahLike ? `TERIMA KASIH! (${data.likes.toLocaleString('id-ID')})` : `KASIH LIKE — ${data.likes.toLocaleString('id-ID')}`}
          </motion.button>
          {sudahLike && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#22c55e] text-xs font-bold"
            >
              ✅ Like sudah tercatat, terima kasih!
            </motion.p>
          )}
        </motion.div>

        {/* Quote bawah */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-comic text-white/25 text-xs tracking-widest"
        >
          ✦ TERIMA KASIH SUDAH MENGUNJUNGI PORTOFOLIO INI ✦
        </motion.div>
      </div>
    </section>
  )
}
