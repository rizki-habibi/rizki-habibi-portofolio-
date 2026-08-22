import dynamic from 'next/dynamic'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { daftarChapter, cariChapterBySlug } from '@/data/daftarChapter'

// ── Dynamic import semua GrupBab (ssr:false karena semua 'use client') ──
const GrupBab: Record<number, React.ComponentType> = {
  1:  dynamic(() => import('@/components/GrupBab1'),  { ssr: false }),
  2:  dynamic(() => import('@/components/GrupBab2'),  { ssr: false }),
  3:  dynamic(() => import('@/components/GrupBab3'),  { ssr: false }),
  4:  dynamic(() => import('@/components/GrupBab4'),  { ssr: false }),
  5:  dynamic(() => import('@/components/GrupBab5'),  { ssr: false }),
  6:  dynamic(() => import('@/components/GrupBab6'),  { ssr: false }),
  7:  dynamic(() => import('@/components/GrupBab7'),  { ssr: false }),
  8:  dynamic(() => import('@/components/GrupBab8'),  { ssr: false }),
  9:  dynamic(() => import('@/components/GrupBab9'),  { ssr: false }),
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
}

// ── Generate semua static params ──────────────────────────────────────────
export function generateStaticParams() {
  return daftarChapter.map(c => ({ nomor: c.slug }))
}

// ── Metadata dinamis ────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ nomor: string }> }
): Promise<Metadata> {
  const { nomor } = await params
  const chapter = cariChapterBySlug(nomor)
  if (!chapter) return { title: 'Chapter Tidak Ditemukan' }
  return {
    title: `Ch.${chapter.nomor} ${chapter.judul} | Rizki Habibi`,
    description: chapter.subjudul,
  }
}

// ── Halaman chapter ─────────────────────────────────────────────────────
export default async function HalamanChapter(
  { params }: { params: Promise<{ nomor: string }> }
) {
  const { nomor } = await params
  const chapter = cariChapterBySlug(nomor)
  if (!chapter) notFound()

  const Komponen = GrupBab[chapter.grupBab]

  // Chapter sebelum dan sesudah untuk navigasi
  const idx = daftarChapter.findIndex(c => c.slug === nomor)
  const prev = idx > 0 ? daftarChapter[idx - 1] : null
  const next = idx < daftarChapter.length - 1 ? daftarChapter[idx + 1] : null

  return (
    <div style={{ background: '#fafaf7', minHeight: '100vh' }}>
      {/* Header navigasi */}
      <div
        className="sticky top-0 z-50 border-b-4 border-[#0a0a0a]"
        style={{ background: chapter.warna }}
      >
        <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between gap-3">
          {/* Kembali ke daftar */}
          <Link
            href="/#chapter-browser"
            className="flex items-center gap-1.5 font-comic text-[11px] text-white hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <span>←</span>
            <span className="hidden sm:inline">SEMUA CHAPTER</span>
          </Link>

          {/* Judul chapter */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="font-comic text-white/60 text-[10px] flex-shrink-0">CH.{chapter.nomor}</span>
            <span
              className="font-comic text-white text-[11px] sm:text-sm truncate"
              style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}
            >
              {chapter.judul}
            </span>
          </div>

          {/* Badge kategori */}
          <span
            className="font-bold text-[9px] px-2 py-0.5 flex-shrink-0"
            style={{ background: 'rgba(0,0,0,0.25)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            {chapter.kategori}
          </span>
        </div>
      </div>

      {/* Konten chapter — render seluruh GrupBab */}
      <Komponen />

      {/* Navigasi prev/next */}
      <div
        className="border-t-4 border-[#0a0a0a] py-8 px-4"
        style={{ background: '#0a0a0a' }}
      >
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-3 sm:gap-4">
          {/* Prev */}
          <div>
            {prev ? (
              <Link
                href={`/chapter/${prev.slug}`}
                className="flex flex-col gap-1 p-3 sm:p-4 group transition-all"
                style={{
                  border: `2px solid ${prev.warna}`,
                  boxShadow: `3px 3px 0 ${prev.warna}`,
                  background: '#111',
                }}
              >
                <span className="font-bold text-[9px] text-white/30 tracking-widest">← SEBELUMNYA</span>
                <span className="text-lg">{prev.emoji}</span>
                <span className="font-comic text-[11px] sm:text-xs leading-tight" style={{ color: prev.warna }}>
                  Ch.{prev.nomor} {prev.judul}
                </span>
              </Link>
            ) : (
              <Link
                href="/"
                className="flex flex-col gap-1 p-3 sm:p-4"
                style={{ border: '2px solid #333', background: '#111' }}
              >
                <span className="font-bold text-[9px] text-white/30 tracking-widest">← KEMBALI</span>
                <span className="font-comic text-xs text-white/40">Halaman Utama</span>
              </Link>
            )}
          </div>

          {/* Next */}
          <div>
            {next ? (
              <Link
                href={`/chapter/${next.slug}`}
                className="flex flex-col gap-1 p-3 sm:p-4 text-right group transition-all"
                style={{
                  border: `2px solid ${next.warna}`,
                  boxShadow: `3px 3px 0 ${next.warna}`,
                  background: '#111',
                }}
              >
                <span className="font-bold text-[9px] text-white/30 tracking-widest text-right">BERIKUTNYA →</span>
                <span className="text-lg text-right">{next.emoji}</span>
                <span className="font-comic text-[11px] sm:text-xs leading-tight text-right" style={{ color: next.warna }}>
                  Ch.{next.nomor} {next.judul}
                </span>
              </Link>
            ) : (
              <Link
                href="/"
                className="flex flex-col gap-1 p-3 sm:p-4 text-right"
                style={{ border: '2px solid #333', background: '#111' }}
              >
                <span className="font-bold text-[9px] text-white/30 tracking-widest text-right">SELESAI →</span>
                <span className="font-comic text-xs text-white/40 text-right">Kembali ke Portofolio</span>
              </Link>
            )}
          </div>
        </div>

        {/* Kembali ke daftar */}
        <div className="text-center mt-4">
          <Link
            href="/#chapter-browser"
            className="inline-flex items-center gap-2 font-comic text-xs px-5 py-2.5 text-[#0a0a0a]"
            style={{ background: '#ffd700', border: '2px solid #ffd700', boxShadow: '3px 3px 0 #ffd700' }}
          >
            📚 LIHAT SEMUA CHAPTER
          </Link>
        </div>
      </div>
    </div>
  )
}
