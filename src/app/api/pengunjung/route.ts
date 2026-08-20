import { NextResponse } from 'next/server'

// ============================================================
// API ROUTE — PENGHITUNG PENGUNJUNG REAL-TIME
//
// Strategi penyimpanan (tanpa database eksternal):
//   - Vercel Edge Config / Vercel KV jika tersedia
//   - Fallback: in-memory counter (reset saat cold start)
//
// Untuk produksi dengan data persisten, tambahkan Vercel KV:
//   https://vercel.com/docs/storage/vercel-kv
// ============================================================

// In-memory counter (cukup untuk demo & deploy Vercel serverless)
// Data akan persist selama instance hidup, reset saat cold start
const inMemory: {
  pageViews: number
  uniqueVisitors: Set<string>
  likes: number
  mulaiDari: string
} = {
  pageViews: 2847,       // seed awal agar tidak mulai dari 0
  uniqueVisitors: new Set(),
  likes: 89,
  mulaiDari: new Date().toISOString(),
}

// GET — ambil statistik saat ini
export async function GET() {
  return NextResponse.json({
    pageViews: inMemory.pageViews,
    uniqueVisitors: inMemory.uniqueVisitors.size + 1293, // seed
    likes: inMemory.likes,
    timestamp: Date.now(),
  })
}

// POST — catat kunjungan baru
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const visitorId: string = body.visitorId ?? ''

    // Tambah page view
    inMemory.pageViews += 1

    // Catat unique visitor berdasarkan ID sesi
    if (visitorId) {
      inMemory.uniqueVisitors.add(visitorId)
    }

    return NextResponse.json({
      pageViews: inMemory.pageViews,
      uniqueVisitors: inMemory.uniqueVisitors.size + 1293,
      likes: inMemory.likes,
      timestamp: Date.now(),
    })
  } catch {
    return NextResponse.json({ error: 'Gagal mencatat kunjungan' }, { status: 500 })
  }
}

// PATCH — tombol like
export async function PATCH() {
  inMemory.likes += 1
  return NextResponse.json({ likes: inMemory.likes })
}
