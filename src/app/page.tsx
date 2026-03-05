import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsCounter from '@/components/StatsCounter'
import GitHubHeatmap from '@/components/GitHubHeatmap'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import CV from '@/components/CV'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import SpotlightCursor from '@/components/SpotlightCursor'
import CommandPalette from '@/components/CommandPalette'

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      <ScrollProgress />
      <SpotlightCursor />
      <CommandPalette />
      <Navbar />
      <Hero />
      <StatsCounter />
      <GitHubHeatmap />
      <Projects />
      <Certificates />
      <CV />
      <Footer />
    </main>
  )
}
