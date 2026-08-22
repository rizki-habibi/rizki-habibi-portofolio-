import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { daftarChapter, cariChapterBySlug } from '@/data/daftarChapter'
import ChapterRenderer from '@/components/ChapterRenderer'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JejakKursor from '@/components/JejakKursor'
import KembaliKeAtas from '@/components/KembaliKeAtas'
import ProgressScroll from '@/components/ProgressScroll'

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
    openGraph: {
      title: `Ch.${chapter.nomor} ${chapter.judul}`,
      description: chapter.subjudul,
      siteName: 'Rizki Habibi Portfolio',
    },
  }
}

// ── Halaman chapter (Server Component) ─────────────────────────────────
export default async function HalamanChapter(
  { params }: { params: Promise<{ nomor: string }> }
) {
  const { nomor } = await params
  const chapter = cariChapterBySlug(nomor)
  if (!chapter) notFound()

  const idx = daftarChapter.findIndex(c => c.slug === nomor)
  const prev = idx > 0 ? daftarChapter[idx - 1] : null
  const next = idx < daftarChapter.length - 1 ? daftarChapter[idx + 1] : null

  return (
    <div style={{ background: '#fafaf7', minHeight: '100vh' }}>
      {/* Komponen floating */}
      <ProgressScroll />
      <KembaliKeAtas />
      <JejakKursor />

      {/* Navbar sama seperti halaman utama */}
      <Navbar />

      {/* Banner chapter — di bawah navbar */}
      <div
        className="border-b-4 border-[#0a0a0a] pt-14"
        style={{ background: chapter.warna }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
          <Link
            href="/#chapter-browser"
            className="flex items-center gap-1.5 font-comic text-[11px] text-white hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <span>&#8592;</span>
            <span>SEMUA CHAPTER</span>
          </Link>

          <div className="flex items-center gap-2 overflow-hidden">
            <span
              className="font-comic text-[10px] px-1.5 py-0.5 flex-shrink-0"
              style={{ background: 'rgba(0,0,0,0.25)', color: 'white' }}
            >
              CH.{chapter.nomor}
            </span>
            <span className="font-comic text-white text-sm sm:text-base truncate" style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.4)' }}>
              {chapter.emoji} {chapter.judul}
            </span>
          </div>

          <span
            className="font-bold text-[9px] px-2 py-1 flex-shrink-0"
            style={{ background: 'rgba(0,0,0,0.3)', color: 'white', border: '1px solid rgba(255,255,255,0.4)' }}
          >
            {chapter.kategori}
          </span>
        </div>
      </div>

      {/* Konten chapter — Client Component */}
      <ChapterRenderer grupBab={chapter.grupBab} />

      {/* Navigasi prev/next */}
      <div className="border-t-4 border-[#0a0a0a] py-8 px-4" style={{ background: '#0a0a0a' }}>
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-3 sm:gap-4 mb-5">
          <div>
            {prev ? (
              <Link
                href={`/chapter/${prev.slug}`}
                className="flex flex-col gap-1.5 p-3 sm:p-4 block transition-all hover:scale-[1.02]"
                style={{ border: `2px solid ${prev.warna}`, boxShadow: `3px 3px 0 ${prev.warna}`, background: '#111' }}
              >
                <span className="font-bold text-[9px] text-white/30 tracking-widest">&#8592; SEBELUMNYA</span>
                <span className="text-xl">{prev.emoji}</span>
                <span className="font-comic text-[11px] sm:text-xs leading-tight" style={{ color: prev.warna }}>
                  Ch.{prev.nomor} {prev.judul}
                </span>
                <span className="text-[9px] text-white/30">{prev.kategori}</span>
              </Link>
            ) : (
              <Link href="/" className="flex flex-col gap-1.5 p-3 sm:p-4 hover:opacity-80" style={{ border: '2px solid #333', background: '#111' }}>
                <span className="font-bold text-[9px] text-white/30 tracking-widest">&#8592; KEMBALI</span>
                <span className="font-comic text-xs text-white/40">Halaman Utama</span>
              </Link>
            )}
          </div>

          <div>
            {next ? (
              <Link
                href={`/chapter/${next.slug}`}
                className="flex flex-col gap-1.5 p-3 sm:p-4 text-right block transition-all hover:scale-[1.02]"
                style={{ border: `2px solid ${next.warna}`, boxShadow: `3px 3px 0 ${next.warna}`, background: '#111' }}
              >
                <span className="font-bold text-[9px] text-white/30 tracking-widest text-right">BERIKUTNYA &#8594;</span>
                <span className="text-xl text-right">{next.emoji}</span>
                <span className="font-comic text-[11px] sm:text-xs leading-tight text-right" style={{ color: next.warna }}>
                  Ch.{next.nomor} {next.judul}
                </span>
                <span className="text-[9px] text-white/30 text-right">{next.kategori}</span>
              </Link>
            ) : (
              <Link href="/" className="flex flex-col gap-1.5 p-3 sm:p-4 text-right hover:opacity-80" style={{ border: '2px solid #333', background: '#111' }}>
                <span className="font-bold text-[9px] text-white/30 tracking-widest text-right">SELESAI &#8594;</span>
                <span className="font-comic text-xs text-white/40 text-right">Kembali ke Portofolio</span>
              </Link>
            )}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/#chapter-browser"
            className="inline-flex items-center gap-2 font-comic text-xs px-5 py-2.5 text-[#0a0a0a] hover:opacity-90 transition-opacity"
            style={{ background: '#ffd700', border: '2px solid #ffd700', boxShadow: '3px 3px 0 #ffd700' }}
          >
            📚 LIHAT SEMUA CHAPTER
          </Link>
        </div>
      </div>

      {/* Footer sama seperti halaman utama */}
      <Footer />
    </div>
  )
}
