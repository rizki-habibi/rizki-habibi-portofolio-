import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CeritaPerjalanan from '@/components/CeritaPerjalanan'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import Certificates from '@/components/Certificates'
import VisiKVT from '@/components/VisiKVT'
import Innovation from '@/components/Innovation'
import StatsComic from '@/components/StatsComic'
import ToolsComic from '@/components/ToolsComic'
import AchievementsComic from '@/components/AchievementsComic'
import QuoteComic from '@/components/QuoteComic'
import EducationComic from '@/components/EducationComic'
import HobbiesComic from '@/components/HobbiesComic'
import KomunikasiComic from '@/components/KomunikasiComic'
import EpilogComic from '@/components/EpilogComic'
import ChaptersGroup1 from '@/components/ChaptersGroup1'
import ChaptersGroup2 from '@/components/ChaptersGroup2'
import ChaptersGroup3 from '@/components/ChaptersGroup3'
import ChaptersGroup4 from '@/components/ChaptersGroup4'
import ChaptersGroup5 from '@/components/ChaptersGroup5'
import CV from '@/components/CV'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import LoadingScreen from '@/components/LoadingScreen'
import SecretMode from '@/components/SecretMode'
import MouseSparkle from '@/components/MouseSparkle'
import CommandPalette from '@/components/CommandPalette'
import WelcomeToast from '@/components/WelcomeToast'
import SocialFloat from '@/components/SocialFloat'
import TechMarquee from '@/components/TechMarquee'
import SideNavDots from '@/components/SideNavDots'
import VisitorCounter from '@/components/VisitorCounter'
import GitHubHeatmap from '@/components/GitHubHeatmap'
import CursorTrail from '@/components/CursorTrail'
import ComicNowPlaying from '@/components/ComicNowPlaying'
import AgeCounter from '@/components/AgeCounter'
import SkillRadar from '@/components/SkillRadar'
import TechTimeline from '@/components/TechTimeline'

export default function Home() {
  return (
    <main style={{ background: '#fafaf7', color: '#0a0a0a' }}>
      {/* ── LAYER GLOBAL (tidak tampak di layout scroll) ── */}
      <SecretMode />
      <MouseSparkle />
      <CommandPalette />
      <WelcomeToast />
      <SocialFloat />
      <SideNavDots />
      <CursorTrail />
      <ComicNowPlaying />

      <LoadingScreen />
      <ScrollProgress />
      <BackToTop />
      <Navbar />

      {/* CHAPTER 00 — THE ORIGIN */}
      <Hero />
      <div className="comic-divider" />

      {/* TECH MARQUEE — scrolling ticker teknologi */}
      <TechMarquee />

      {/* CHAPTER 01 — MY STORY */}
      <CeritaPerjalanan />
      <div className="comic-divider" />

      {/* CHAPTER 02 — MY POWERS */}
      <Skills />
      <div className="comic-divider" />

      {/* SKILL RADAR CHART — analisis visual kemampuan */}
      <SkillRadar />
      <div className="comic-divider" />

      {/* CHAPTER 03 — THE MISSIONS */}
      <Projects />
      <div className="comic-divider" />

      {/* CHAPTER 04 — MY JOURNEY */}
      <ExperienceTimeline />
      <div className="comic-divider" />

      {/* TECH TIMELINE — perjalanan adopsi teknologi 2020-2026 */}
      <TechTimeline />
      <div className="comic-divider" />

      {/* CHAPTER 05 — POWER CARDS */}
      <Certificates />
      <div className="comic-divider" />

      {/* CHAPTER 06 — THE BIG DREAM */}
      <VisiKVT />
      <div className="comic-divider" />

      {/* CHAPTER 07 — REKAYASA & INOVASI */}
      <Innovation />
      <div className="comic-divider" />

      {/* CHAPTER 08 — BY THE NUMBERS */}
      <StatsComic />
      <div className="comic-divider" />

      {/* AGE COUNTER — umur real-time */}
      <AgeCounter />
      <div className="comic-divider" />

      {/* CHAPTER 09 — MY ARSENAL */}
      <ToolsComic />
      <div className="comic-divider" />

      {/* CHAPTER 10 — ACHIEVEMENT UNLOCKED */}
      <AchievementsComic />
      <div className="comic-divider" />

      {/* CHAPTER 11 — WORDS OF POWER */}
      <QuoteComic />
      <div className="comic-divider" />

      {/* CHAPTER 12 — TRAINING ARC */}
      <EducationComic />
      <div className="comic-divider" />

      {/* CHAPTER 13 — OFF-DUTY LIFE */}
      <HobbiesComic />
      <div className="comic-divider" />

      {/* CHAPTER 14 — NETWORK & COMMUNITY */}
      <KomunikasiComic />
      <div className="comic-divider" />

      {/* CHAPTER 15 — WHAT COMES NEXT */}
      <EpilogComic />

      {/* CHAPTERS 16–25: Website Desa, QRIS, Global Map, Karir, Komersial, Gov, Edukasi, Startup, Sosial, Kolaborasi */}
      <ChaptersGroup1 />

      {/* CHAPTERS 26–35: AI Journey, Tech Stack, Open Source, CyberSec, Cloud, Database, UI/UX, AI Deep, IoT, Marketing */}
      <ChaptersGroup2 />

      {/* CHAPTERS 36–45: Kesehatan, Lingkungan, Dampak Sosial, Growth, Leadership, Problem Solving, Soft Skills, Logika, Kreativitas, Dream Big */}
      <ChaptersGroup3 />

      {/* CHAPTERS 46–55: Motivasi, Kegagalan, Global, Future Tech, Milestone 50, Syukur, UMKM, Smart City, Keluarga, Identitas */}
      <ChaptersGroup4 />

      {/* CHAPTERS 56–61 + FINAL CHAPTER */}
      <ChaptersGroup5 />

      <div className="comic-divider" />

      {/* MY PROFILE — CV */}
      <CV />
      <div className="comic-divider" />

      {/* GITHUB ACTIVITY */}
      <GitHubHeatmap />
      <div className="comic-divider" />

      {/* VISITOR STATS */}
      <VisitorCounter />
      <div className="comic-divider" />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </main>
  )
}
