'use client'

import dynamic from 'next/dynamic'

// Semua komponen yang butuh ssr:false diletakkan di sini (Client Component)
const ModeRahasia = dynamic(() => import('@/components/ModeRahasia'), { ssr: false })
const PaletPerintah = dynamic(() => import('@/components/PaletPerintah'), { ssr: false })
const PesanSelamatDatang = dynamic(() => import('@/components/PesanSelamatDatang'), { ssr: false })
const SertifikatDigital = dynamic(() => import('@/components/SertifikatDigital'), { ssr: false })
const PemutarMusik = dynamic(() => import('@/components/PemutarMusik'), { ssr: false })
const StatusSedangAktif = dynamic(() => import('@/components/StatusSedangAktif'), { ssr: false })
const EfekHujanKode = dynamic(() => import('@/components/EfekHujanKode'), { ssr: false })

export { SertifikatDigital }

export default function LayerGlobal() {
  return (
    <>
      <ModeRahasia />
      <PaletPerintah />
      <PesanSelamatDatang />
      <PemutarMusik />
      <StatusSedangAktif />
      <EfekHujanKode />
    </>
  )
}
