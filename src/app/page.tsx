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
import CV from '@/components/CV'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  return (
    <main style={{ background: '#fafaf7', color: '#0a0a0a' }}>
      <LoadingScreen />
      <ScrollProgress />
      <BackToTop />
      <Navbar />

      {/* CHAPTER 00 — THE ORIGIN */}
      <Hero />

      <div className="comic-divider" />

      {/* CHAPTER 01 — MY STORY */}
      <CeritaPerjalanan />

      <div className="comic-divider" />

      {/* CHAPTER 02 — MY POWERS */}
      <Skills />

      <div className="comic-divider" />

      {/* CHAPTER 03 — THE MISSIONS */}
      <Projects />

      <div className="comic-divider" />

      {/* CHAPTER 04 — MY JOURNEY */}
      <ExperienceTimeline />

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

      {/* CHAPTER 09 — MY ARSENAL */}
      <ToolsComic />

      <div className="comic-divider" />

      {/* CHAPTER 10 — ACHIEVEMENT UNLOCKED */}
      <AchievementsComic />

      <div className="comic-divider" />

      {/* MY PROFILE — CV */}
      <CV />

      <div className="comic-divider" />

      {/* FINAL CHAPTER — CONTACT */}
      <ContactSection />

      {/* END */}
      <Footer />
    </main>
  )
}
