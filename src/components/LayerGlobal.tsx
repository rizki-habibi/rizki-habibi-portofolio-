'use client'

import dynamic from 'next/dynamic'

// Komponen floating client-only — dipisah ke Client Component
// agar ssr:false tidak melanggar aturan Next.js Server Component
const ModeRahasia = dynamic(() => import('@/components/ModeRahasia'), { ssr: false })
const PaletPerintah = dynamic(() => import('@/components/PaletPerintah'), { ssr: false })
const PesanSelamatDatang = dynamic(() => import('@/components/PesanSelamatDatang'), { ssr: false })
// PemutarMusik sudah dipindah ke Navbar header (tombol ♫ di kanan)

export default function LayerGlobal() {
  return (
    <>
      <ModeRahasia />
      <PaletPerintah />
      <PesanSelamatDatang />
    </>
  )
}
