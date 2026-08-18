import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import CeritaPerjalanan from '@/components/CeritaPerjalanan'
import VisiKVT from '@/components/VisiKVT'
import Innovation from '@/components/Innovation'
import Certificates from '@/components/Certificates'
import CV from '@/components/CV'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  return (
    <main style={{ background: '#fafaf7' }}>
      {/* UI Utils */}
      <LoadingScreen />
      <ScrollProgress />
      <BackToTop />

      {/* Navigation */}
      <Navbar />

      {/* CHAPTER 00: HERO — The Origin */}
      <Hero />

      {/* CHAPTER 01: MY STORY — Cerita Perjalanan */}
      <CeritaPerjalanan />

      {/* Comic divider */}
      <div className="comic-divider" />

      {/* CHAPTER 02: MY POWERS — Skills */}
      <Skills />

      {/* Comic divider */}
      <div className="comic-divider" />

      {/* CHAPTER 03: THE MISSIONS — Projects */}
      <Projects />

      {/* Comic divider */}
      <div className="comic-divider" />

      {/* CHAPTER 04: MY JOURNEY — Timeline */}
      <ExperienceTimeline />

      {/* Comic divider */}
      <div className="comic-divider" />

      {/* CHAPTER 05: POWER CARDS — Certificates */}
      <Certificates />

      {/* Comic divider */}
      <div className="comic-divider" />

      {/* CHAPTER 06: THE BIG DREAM — Visi KVT */}
      <VisiKVT />

      {/* Comic divider */}
      <div className="comic-divider" />

      {/* CHAPTER 07: INNOVATION — Rekayasa & Inovasi */}
      <Innovation />

      {/* Comic divider */}
      <div className="comic-divider" />

      {/* CV Download */}
      <CV />

      {/* FINAL CHAPTER: Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
