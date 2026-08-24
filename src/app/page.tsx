import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PanelKomik from '@/components/PanelKomik'
import KuesionerKerjasama from '@/components/KuesionerKerjasama'
import CeritaPerjalanan from '@/components/CeritaPerjalanan'
import Keahlian from '@/components/Keahlian'
import Proyek from '@/components/Proyek'
import GariswaktuPengalaman from '@/components/GariswaktuPengalaman'
import Sertifikat from '@/components/Sertifikat'
import VisiKVT from '@/components/VisiKVT'
import Inovasi from '@/components/Inovasi'
import StatistikKomik from '@/components/StatistikKomik'
import ToolsKomik from '@/components/ToolsKomik'
import PencapaianKomik from '@/components/PencapaianKomik'
import KutipanKomik from '@/components/KutipanKomik'
import PendidikanKomik from '@/components/PendidikanKomik'
import AkademikKomik from '@/components/AkademikKomik'
import InfoKarirKomik from '@/components/InfoKarirKomik'
import HobiKomik from '@/components/HobiKomik'
import KomunikasiKomik from '@/components/KomunikasiKomik'
import EpilogKomik from '@/components/EpilogKomik'
import CV from '@/components/CV'
import SeksiKontak from '@/components/SeksiKontak'
import Footer from '@/components/Footer'
import ProgressScroll from '@/components/ProgressScroll'
import KembaliKeAtas from '@/components/KembaliKeAtas'
import LayarMemuat from '@/components/LayarMemuat'
import EfekKlikMouse from '@/components/EfekKlikMouse'
import TautanSosialMelayang from '@/components/TautanSosialMelayang'
import MarqueTeknologi from '@/components/MarqueTeknologi'
import PenghitungPengunjung from '@/components/PenghitungPengunjung'
import HeatmapGitHub from '@/components/HeatmapGitHub'
import JejakKursor from '@/components/JejakKursor'
import PenghitungUmur from '@/components/PenghitungUmur'
import RadarKeahlian from '@/components/RadarKeahlian'
import GariswaktuTeknologi from '@/components/GariswaktuTeknologi'
import TesimoniKomik from '@/components/TesimoniKomik'
import FaqKomik from '@/components/FaqKomik'
import ProgressKeahlian from '@/components/ProgressKeahlian'
import ChapterBrowser from '@/components/ChapterBrowser'
import LayerGlobal from '@/components/LayerGlobal'
import JasaGratis from '@/components/JasaGratis'
import KepribadianKomik from '@/components/KepribadianKomik'
import TujuanKarir from '@/components/TujuanKarir'
import Prediksi2030 from '@/components/Prediksi2030'
import TawaranLowongan from '@/components/TawaranLowongan'
import dynamic from 'next/dynamic'

// SertifikatDigital pakai Canvas API — harus client-only
const SertifikatDigital = dynamic(() => import('@/components/SertifikatDigital'), { ssr: false })

export default function Home() {
  return (
    <main style={{ background: '#fafaf7', color: '#0a0a0a' }}>
      {/* Layer floating client-only (ssr:false aman karena Client Component) */}
      <LayerGlobal />
      <EfekKlikMouse />
      <TautanSosialMelayang />
      <JejakKursor />
      <LayarMemuat />
      <ProgressScroll />
      <KembaliKeAtas />
      <KuesionerKerjasama />
      <Navbar />

      {/* CHAPTER 00 — THE ORIGIN */}
      <Hero />
      <div className="comic-divider" />

      {/* TUJUAN KARIR — kerja remote & kuliah gratis */}
      <TujuanKarir />
      <div className="comic-divider" />

      {/* TECH MARQUEE */}
      <MarqueTeknologi />

      {/* CHAPTER 01 — MY STORY */}
      <CeritaPerjalanan />
      <div className="comic-divider" />

      {/* CHAPTER 02 — MY POWERS */}
      <Keahlian />
      <div className="comic-divider" />

      {/* KEPRIBADIAN — kemampuan unik, minat, kekurangan */}
      <KepribadianKomik />
      <div className="comic-divider" />

      {/* SKILL PROGRESS BARS */}
      <ProgressKeahlian />
      <div className="comic-divider" />

      {/* SKILL RADAR CHART */}
      <RadarKeahlian />
      <div className="comic-divider" />

      {/* CHAPTER 03 — THE MISSIONS */}
      <Proyek />
      <div className="comic-divider" />

      {/* PANEL KOMIK GALLERY */}
      <PanelKomik />
      <div className="comic-divider" />

      {/* CHAPTER 04 — MY JOURNEY */}
      <GariswaktuPengalaman />
      <div className="comic-divider" />

      {/* TECH TIMELINE */}
      <GariswaktuTeknologi />
      <div className="comic-divider" />

      {/* CHAPTER 05 — POWER CARDS */}
      <Sertifikat />
      <div className="comic-divider" />

      {/* CHAPTER 06 — THE BIG DREAM */}
      <VisiKVT />
      <div className="comic-divider" />

      {/* CHAPTER 07 — REKAYASA & INOVASI */}
      <Inovasi />
      <div className="comic-divider" />

      {/* CHAPTER 08 — BY THE NUMBERS */}
      <StatistikKomik />
      <div className="comic-divider" />

      {/* AGE COUNTER */}
      <PenghitungUmur />
      <div className="comic-divider" />

      {/* CHAPTER 09 — MY ARSENAL */}
      <ToolsKomik />
      <div className="comic-divider" />

      {/* CHAPTER 10 — ACHIEVEMENT UNLOCKED */}
      <PencapaianKomik />
      <div className="comic-divider" />

      {/* TESTIMONI */}
      <TesimoniKomik />
      <div className="comic-divider" />

      {/* CHAPTER 11 — WORDS OF POWER */}
      <KutipanKomik />
      <div className="comic-divider" />

      {/* CHAPTER 12 — TRAINING ARC */}
      <PendidikanKomik />
      <div className="comic-divider" />

      {/* REKAP AKADEMIK */}
      <AkademikKomik />
      <div className="comic-divider" />

      {/* INFO KARIR */}
      <InfoKarirKomik />
      <div className="comic-divider" />

      {/* CHAPTER 13 — OFF-DUTY LIFE */}
      <HobiKomik />
      <div className="comic-divider" />

      {/* CHAPTER 14 — NETWORK & COMMUNITY */}
      <KomunikasiKomik />
      <div className="comic-divider" />

      {/* CHAPTER 15 — WHAT COMES NEXT */}
      <EpilogKomik />
      <div className="comic-divider" />

      {/* JASA GRATIS */}
      <JasaGratis />
      <div className="comic-divider" />

      {/* TAWARAN LOWONGAN — kuliah gratis, kerja, kolaborasi */}
      <TawaranLowongan />
      <div className="comic-divider" />

      {/* PREDIKSI 2030 */}
      <Prediksi2030 />
      <div className="comic-divider" />

      {/* SERTIFIKAT DIGITAL */}
      <SertifikatDigital />
      <div className="comic-divider" />

      {/* CHAPTER BROWSER — 320 chapter */}
      <ChapterBrowser />

      {/* CV */}
      <div className="comic-divider" />
      <CV />
      <div className="comic-divider" />

      {/* GITHUB ACTIVITY */}
      <HeatmapGitHub />
      <div className="comic-divider" />

      {/* VISITOR STATS */}
      <PenghitungPengunjung />
      <div className="comic-divider" />

      {/* FAQ */}
      <FaqKomik />
      <div className="comic-divider" />

      {/* CONTACT */}
      <SeksiKontak />

      {/* FOOTER */}
      <Footer />
    </main>
  )
}
