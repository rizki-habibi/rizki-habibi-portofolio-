import dynamic from 'next/dynamic'
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

// ── Komponen floating client-only — dimuat setelah halaman selesai render ──
const ModeRahasia = dynamic(() => import('@/components/ModeRahasia'), { ssr: false })
const PaletPerintah = dynamic(() => import('@/components/PaletPerintah'), { ssr: false })
const PesanSelamatDatang = dynamic(() => import('@/components/PesanSelamatDatang'), { ssr: false })
const PemutarMusik = dynamic(() => import('@/components/PemutarMusik'), { ssr: false })

// ── GrupBab: dimuat lazy saat mendekati viewport (di bawah fold jauh) ──
const GrupBab1 = dynamic(() => import('@/components/GrupBab1'), { ssr: false })
const GrupBab2 = dynamic(() => import('@/components/GrupBab2'), { ssr: false })
const GrupBab3 = dynamic(() => import('@/components/GrupBab3'), { ssr: false })
const GrupBab4 = dynamic(() => import('@/components/GrupBab4'), { ssr: false })
const GrupBab5 = dynamic(() => import('@/components/GrupBab5'), { ssr: false })
const GrupBab6 = dynamic(() => import('@/components/GrupBab6'), { ssr: false })
const GrupBab7 = dynamic(() => import('@/components/GrupBab7'), { ssr: false })
const GrupBab8 = dynamic(() => import('@/components/GrupBab8'), { ssr: false })
const GrupBab9 = dynamic(() => import('@/components/GrupBab9'), { ssr: false })
const GrupBab10 = dynamic(() => import('@/components/GrupBab10'), { ssr: false })
const GrupBab11 = dynamic(() => import('@/components/GrupBab11'), { ssr: false })
const GrupBab12 = dynamic(() => import('@/components/GrupBab12'), { ssr: false })
const GrupBab13 = dynamic(() => import('@/components/GrupBab13'), { ssr: false })
const GrupBab14 = dynamic(() => import('@/components/GrupBab14'), { ssr: false })
const GrupBab15 = dynamic(() => import('@/components/GrupBab15'), { ssr: false })
const GrupBab16 = dynamic(() => import('@/components/GrupBab16'), { ssr: false })
const GrupBab17 = dynamic(() => import('@/components/GrupBab17'), { ssr: false })
const GrupBab18 = dynamic(() => import('@/components/GrupBab18'), { ssr: false })
const GrupBab19 = dynamic(() => import('@/components/GrupBab19'), { ssr: false })
const GrupBab20 = dynamic(() => import('@/components/GrupBab20'), { ssr: false })
const GrupBab21 = dynamic(() => import('@/components/GrupBab21'), { ssr: false })
const GrupBab22 = dynamic(() => import('@/components/GrupBab22'), { ssr: false })
const GrupBab23 = dynamic(() => import('@/components/GrupBab23'), { ssr: false })
const GrupBab24 = dynamic(() => import('@/components/GrupBab24'), { ssr: false })
const GrupBab25 = dynamic(() => import('@/components/GrupBab25'), { ssr: false })
const GrupBab26 = dynamic(() => import('@/components/GrupBab26'), { ssr: false })
const GrupBab27 = dynamic(() => import('@/components/GrupBab27'), { ssr: false })
const GrupBab28 = dynamic(() => import('@/components/GrupBab28'), { ssr: false })
const GrupBab29 = dynamic(() => import('@/components/GrupBab29'), { ssr: false })
const GrupBab30 = dynamic(() => import('@/components/GrupBab30'), { ssr: false })

export default function Home() {
  return (
    <main style={{ background: '#fafaf7', color: '#0a0a0a' }}>
      {/* ── LAYER GLOBAL — tidak tampak di layout scroll ── */}
      <ModeRahasia />
      <EfekKlikMouse />
      <PaletPerintah />
      <PesanSelamatDatang />
      <TautanSosialMelayang />
      <JejakKursor />
      <PemutarMusik />

      <LayarMemuat />
      <ProgressScroll />
      <KembaliKeAtas />
      <KuesionerKerjasama />
      <Navbar />

      {/* CHAPTER 00 — THE ORIGIN */}
      <Hero />
      <div className="comic-divider" />

      {/* TECH MARQUEE */}
      <MarqueTeknologi />

      {/* CHAPTER 01 — MY STORY */}
      <CeritaPerjalanan />
      <div className="comic-divider" />

      {/* CHAPTER 02 — MY POWERS */}
      <Keahlian />
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

      {/* REKAP AKADEMIK S1-7 + SKRIPSI */}
      <AkademikKomik />
      <div className="comic-divider" />

      {/* INFO KARIR & LOWONGAN KERJA */}
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

      {/* CHAPTERS 16–25 */}
      <GrupBab1 />

      {/* CHAPTERS 26–35 */}
      <GrupBab2 />

      {/* CHAPTERS 36–45 */}
      <GrupBab3 />

      {/* CHAPTERS 46–55 */}
      <GrupBab4 />

      {/* CHAPTERS 56–61 + FINAL */}
      <GrupBab5 />

      {/* CHAPTERS 62–70 — GAME LIFE */}
      <GrupBab6 />

      {/* CHAPTERS 71–80 — INOVASI, KOMUNITAS, MASA DEPAN */}
      <GrupBab7 />

      {/* CHAPTERS 81–90 — SKRIPSI, KVT, PENELITIAN, AKADEMIK */}
      <GrupBab8 />

      {/* CHAPTERS 91–100 — KEHIDUPAN, BUDAYA, MILESTONE */}
      <GrupBab9 />

      {/* CHAPTERS 101–110 — AI, ML, CLOUD, SECURITY, TEKNOLOGI */}
      <GrupBab10 />

      {/* CHAPTERS 111–120 — WARISAN, NILAI, FINAL CHAPTER */}
      <GrupBab11 />

      {/* CHAPTERS 121–130 — SMART HOME, ROBOTIK, AR/VR, QUANTUM, SPACE */}
      <GrupBab12 />

      {/* CHAPTERS 131–140 — WIRAUSAHA SOSIAL, KOLABORASI GLOBAL, HEALTHTECH */}
      <GrupBab13 />

      {/* CHAPTERS 141–150 — SENI DIGITAL, MUSIK, CONTENT CREATOR, PEKERJAAN */}
      <GrupBab14 />

      {/* CHAPTERS 151–160 — KEPEMIMPINAN, GENERASI, FILOSOFI, SEJARAH */}
      <GrupBab15 />

      {/* CHAPTERS 161–170 — GRAND FINALE, PROYEK IMPIAN, SALAM PERPISAHAN */}
      <GrupBab16 />

      {/* CHAPTERS 171–180 — ANIMASI, MICRO-INTERACTION, PERFORMA, KEAMANAN, KARIR */}
      <GrupBab17 />

      {/* 200 INOVASI — BAB 1: EDUKASI DIGITAL (inovasi 1-25) */}
      <GrupBab18 />

      {/* 200 INOVASI — BAB 2: PLATFORM & PRODUK (inovasi 26-50) */}
      <GrupBab19 />

      {/* 200 INOVASI — BAB 3: IoT (51-75) + BAB 4: AI/ML (76-100) */}
      <GrupBab20 />

      {/* 200 INOVASI — BAB 5: FINTECH (101-125) + BAB 6: KESEHATAN/LINGKUNGAN (126-150) */}
      <GrupBab21 />

      {/* 200 INOVASI — BAB 7: DEVELOPER TOOLS (151-175) + BAB 8: KREATIF/SENI (176-200) */}
      <GrupBab22 />

      {/* 200 INOVASI — REKAP STATISTIK + DAMPAK */}
      <GrupBab23 />

      {/* 200 INOVASI — ROADMAP EKSEKUSI + KOLABORASI */}
      <GrupBab24 />

      {/* 200 INOVASI — FILOSOFI + TANTANGAN + GRAND FINALE */}
      <GrupBab25 />

      {/* CHAPTERS 261–270 — PRODUKTIVITAS & KEHIDUPAN DEVELOPER */}
      <GrupBab26 />

      {/* CHAPTERS 271–280 — OPEN SOURCE, KOMUNITAS, NETWORKING */}
      <GrupBab27 />

      {/* CHAPTERS 281–290 — STARTUP, BISNIS, REVENUE MODEL */}
      <GrupBab28 />

      {/* CHAPTERS 291–300 — WEB3, AR/VR, QUANTUM, AGI, PREDIKSI */}
      <GrupBab29 />

      {/* CHAPTERS 301–310 — PERSONAL BRANDING, KARIR, IMPIAN BESAR */}
      <GrupBab30 />

      <div className="comic-divider" />

      {/* CV */}
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
