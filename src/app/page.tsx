import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsCounter from '@/components/StatsCounter'
import GitHubEnhanced from '@/components/GitHubEnhanced'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import CV from '@/components/CV'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import SpotlightCursor from '@/components/SpotlightCursor'
import CommandPalette from '@/components/CommandPalette'
import LoadingScreen from '@/components/LoadingScreen'
import Skills from '@/components/Skills'
import SecretMode from '@/components/SecretMode'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import TechMarquee from '@/components/TechMarquee'
import BackToTop from '@/components/BackToTop'
import SideNavDots from '@/components/SideNavDots'
import MouseSparkle from '@/components/MouseSparkle'
import InteractiveTerminal from '@/components/InteractiveTerminal'
import AchievementBadges from '@/components/AchievementBadges'
import QuoteSection from '@/components/QuoteSection'
import ContactSection from '@/components/ContactSection'
import VisitorCounter from '@/components/VisitorCounter'
import SocialFloat from '@/components/SocialFloat'
import ToolsUsed from '@/components/ToolsUsed'
import WaveDivider from '@/components/WaveDivider'
import WelcomeToast from '@/components/WelcomeToast'

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      <LoadingScreen />
      <ScrollProgress />
      <SpotlightCursor />
      <CommandPalette />
      <SecretMode />
      <MouseSparkle />
      <SideNavDots />
      <SocialFloat />
      <BackToTop />
      <InteractiveTerminal />
      <WelcomeToast />
      
      <Navbar />
      <Hero />
      <TechMarquee />
      <StatsCounter />
      <WaveDivider color="#0d0d0d" />
      <Skills />
      <ToolsUsed />
      <WaveDivider color="#0d0d0d" flip />
      <GitHubEnhanced />
      <Projects />
      <ExperienceTimeline />
      <WaveDivider color="#0d0d0d" />
      <Certificates />
      <AchievementBadges />
      <QuoteSection />
      <VisitorCounter />
      <ContactSection />
      <CV />
      <Footer />
    </main>
  )
}
