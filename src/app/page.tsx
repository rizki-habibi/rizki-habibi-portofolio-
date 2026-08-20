import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
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
import HobiKomik from '@/components/HobiKomik'
import KomunikasiKomik from '@/components/KomunikasiKomik'
import EpilogKomik from '@/components/EpilogKomik'
import GrupBab1 from '@/components/GrupBab1'
import GrupBab2 from '@/components/GrupBab2'
import GrupBab3 from '@/components/GrupBab3'
import GrupBab4 from '@/components/GrupBab4'
import GrupBab5 from '@/components/GrupBab5'
import GrupBab6 from '@/components/GrupBab6'
import GrupBab7 from '@/components/GrupBab7'
import GrupBab8 from '@/components/GrupBab8'
import GrupBab9 from '@/components/GrupBab9'
import GrupBab10 from '@/components/GrupBab10'
import GrupBab11 from '@/components/GrupBab11'
import GrupBab12 from '@/components/GrupBab12'
import GrupBab13 from '@/components/GrupBab13'
import GrupBab14 from '@/components/GrupBab14'
import GrupBab15 from '@/components/GrupBab15'
import GrupBab16 from '@/components/GrupBab16'
import CV from '@/components/CV'
import SeksiKontak from '@/components/SeksiKontak'
import Footer from '@/components/Footer'
import ProgressScroll from '@/components/ProgressScroll'
import KembaliKeAtas from '@/components/KembaliKeAtas'
import LayarMemuat from '@/components/LayarMemuat'
import ModeRahasia from '@/components/ModeRahasia'
import EfekKlikMouse from '@/components/EfekKlikMouse'
import PaletPerintah from '@/components/PaletPerintah'
import PesanSelamatDatang from '@/components/PesanSelamatDatang'
import TautanSosialMelayang from '@/components/TautanSosialMelayang'
import MarqueTeknologi from '@/components/MarqueTeknologi'
import PenghitungPengunjung from '@/components/PenghitungPengunjung'
import HeatmapGitHub from '@/components/HeatmapGitHub'
import JejakKursor from '@/components/JejakKursor'
import PemutarMusik from '@/components/PemutarMusik'
import PenghitungUmur from '@/components/PenghitungUmur'
import RadarKeahlian from '@/components/RadarKeahlian'
import GariswaktuTeknologi from '@/components/GariswaktuTeknologi'
import TesimoniKomik from '@/components/TesimoniKomik'
import FaqKomik from '@/components/FaqKomik'
import ProgressKeahlian from '@/components/ProgressKeahlian'

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
      {/* SideNavDots dan DarkModeToggle floating dihapus — sudah ada di Navbar */}

      <LayarMemuat />
      <ProgressScroll />
      <KembaliKeAtas />
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
