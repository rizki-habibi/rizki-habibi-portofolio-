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
import ChaptersGroup6 from '@/components/ChaptersGroup6'
import ChaptersGroup7 from '@/components/ChaptersGroup7'
import ChaptersGroup8 from '@/components/ChaptersGroup8'
import ChaptersGroup9 from '@/components/ChaptersGroup9'
import ChaptersGroup10 from '@/components/ChaptersGroup10'
import ChaptersGroup11 from '@/components/ChaptersGroup11'
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
import VisitorCounter from '@/components/VisitorCounter'
import GitHubHeatmap from '@/components/GitHubHeatmap'
import CursorTrail from '@/components/CursorTrail'
import ComicNowPlaying from '@/components/ComicNowPlaying'
import AgeCounter from '@/components/AgeCounter'
import SkillRadar from '@/components/SkillRadar'
import TechTimeline from '@/components/TechTimeline'
import TestimonialsComic from '@/components/TestimonialsComic'
import FaqComic from '@/components/FaqComic'
import ProgressSkillsComic from '@/components/ProgressSkillsComic'

export default function Home() {
  return (
    <main style={{ background: '#fafaf7', color: '#0a0a0a' }}>
      {/* ── LAYER GLOBAL — tidak tampak di layout scroll ── */}
      <SecretMode />
      <MouseSparkle />
      <CommandPalette />
      <WelcomeToast />
      <SocialFloat />
      <CursorTrail />
      <ComicNowPlaying />
      {/* SideNavDots dan DarkModeToggle floating dihapus — sudah ada di Navbar */}

      <LoadingScreen />
      <ScrollProgress />
      <BackToTop />
      <Navbar />

      {/* CHAPTER 00 — THE ORIGIN */}
      <Hero />
      <div className="comic-divider" />

      {/* TECH MARQUEE */}
      <TechMarquee />

      {/* CHAPTER 01 — MY STORY */}
      <CeritaPerjalanan />
      <div className="comic-divider" />

      {/* CHAPTER 02 — MY POWERS */}
      <Skills />
      <div className="comic-divider" />

      {/* SKILL PROGRESS BARS */}
      <ProgressSkillsComic />
      <div className="comic-divider" />

      {/* SKILL RADAR CHART */}
      <SkillRadar />
      <div className="comic-divider" />

      {/* CHAPTER 03 — THE MISSIONS */}
      <Projects />
      <div className="comic-divider" />

      {/* CHAPTER 04 — MY JOURNEY */}
      <ExperienceTimeline />
      <div className="comic-divider" />

      {/* TECH TIMELINE */}
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

      {/* AGE COUNTER */}
      <AgeCounter />
      <div className="comic-divider" />

      {/* CHAPTER 09 — MY ARSENAL */}
      <ToolsComic />
      <div className="comic-divider" />

      {/* CHAPTER 10 — ACHIEVEMENT UNLOCKED */}
      <AchievementsComic />
      <div className="comic-divider" />

      {/* TESTIMONI */}
      <TestimonialsComic />
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

      {/* CHAPTERS 16–25 */}
      <ChaptersGroup1 />

      {/* CHAPTERS 26–35 */}
      <ChaptersGroup2 />

      {/* CHAPTERS 36–45 */}
      <ChaptersGroup3 />

      {/* CHAPTERS 46–55 */}
      <ChaptersGroup4 />

      {/* CHAPTERS 56–61 + FINAL */}
      <ChaptersGroup5 />

      {/* CHAPTERS 62–70 — GAME LIFE */}
      <ChaptersGroup6 />

      {/* CHAPTERS 71–80 — INOVASI, KOMUNITAS, MASA DEPAN */}
      <ChaptersGroup7 />

      {/* CHAPTERS 81–90 — SKRIPSI, KVT, PENELITIAN, AKADEMIK */}
      <ChaptersGroup8 />

      {/* CHAPTERS 91–100 — KEHIDUPAN, BUDAYA, MILESTONE */}
      <ChaptersGroup9 />

      {/* CHAPTERS 101–110 — AI, ML, CLOUD, SECURITY, TEKNOLOGI */}
      <ChaptersGroup10 />

      {/* CHAPTERS 111–120 — WARISAN, NILAI, FINAL CHAPTER */}
      <ChaptersGroup11 />

      <div className="comic-divider" />

      {/* CV */}
      <CV />
      <div className="comic-divider" />

      {/* GITHUB ACTIVITY */}
      <GitHubHeatmap />
      <div className="comic-divider" />

      {/* VISITOR STATS */}
      <VisitorCounter />
      <div className="comic-divider" />

      {/* FAQ */}
      <FaqComic />
      <div className="comic-divider" />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </main>
  )
}
