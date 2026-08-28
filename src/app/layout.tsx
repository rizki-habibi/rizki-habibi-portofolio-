import type { Metadata } from 'next'
import { Inter, Bangers } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/context/LangContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const bangers = Bangers({ subsets: ['latin'], weight: '400', variable: '--font-bangers', display: 'swap' })

const siteUrl = 'https://rizki-habibi-portofolio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Rizki Habibi | Web Developer & AI Creator',
    template: '%s | Rizki Habibi',
  },
  description:
    'Portofolio Rizki Habibi — Web Developer, AI Creator, dan pengembang proyek Camora (karakter AI interaktif). Tersedia untuk freelance, kolaborasi konten, dan edukasi digital gratis.',
  keywords: [
    'Rizki Habibi',
    'portofolio',
    'web developer',
    'AI developer',
    'Camora AI',
    'VTuber Indonesia',
    'freelance developer',
    'karakter virtual AI',
    'Next.js developer',
    'content creator',
    'edukasi digital gratis',
    'S.Kom',
    'Mandala',
    'developer Indonesia',
  ],
  authors: [{ name: 'Rizki Habibi', url: siteUrl }],
  creator: 'Rizki Habibi',
  publisher: 'Rizki Habibi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: 'Rizki Habibi Portfolio',
    title: 'Rizki Habibi | Web Developer & AI Creator',
    description:
      'Web Developer, AI Creator, dan pengembang proyek Camora. Tersedia untuk freelance dan kolaborasi digital.',
    images: [
      {
        url: '/foto/profil.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rizki Habibi — Web Developer & AI Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rizki Habibi | Web Developer & AI Creator',
    description:
      'Web Developer, AI Creator, dan pengembang proyek Camora. Tersedia untuk freelance dan kolaborasi digital.',
    images: ['/foto/profil.jpeg'],
    creator: '@rizki_habibi',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  verification: {
    google: '0ApfiFSdZ6Lp3PW9aA0BxEbaOXt2dqylGf1Kl8Vw4KQ',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema 1 — Person (semua mesin pencari: Google, Bing, Yahoo, DuckDuckGo)
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rizki Habibi',
    url: siteUrl,
    image: `${siteUrl}/foto/profil.jpeg`,
    jobTitle: 'Web Developer & AI Creator',
    description:
      'Web Developer, AI Creator, dan pengembang proyek Camora (karakter AI interaktif). Tersedia untuk freelance dan kolaborasi digital.',
    email: 'mailto:rizkihabibi@email.com',
    sameAs: [
      'https://github.com/rizki-habibi',
      'https://github.com/rizki-habibi/VirtualKarakter',
    ],
    knowsAbout: [
      'Web Development',
      'Artificial Intelligence',
      'Virtual Character',
      'VTuber',
      'Next.js',
      'TypeScript',
      'Content Creation',
      'Freelance',
    ],
  }

  // Schema 2 — WebSite (supaya kotak pencarian muncul di Google/Bing)
  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rizki Habibi Portfolio',
    url: siteUrl,
    description: 'Portofolio Rizki Habibi — Web Developer, AI Creator, pengembang Camora AI.',
    inLanguage: 'id-ID',
    author: {
      '@type': 'Person',
      name: 'Rizki Habibi',
    },
  }

  // Schema 3 — SoftwareApplication untuk proyek Camora
  const camoraLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Camora — Virtual AI Character',
    url: 'https://github.com/rizki-habibi/VirtualKarakter',
    description:
      'Karakter AI interaktif yang bisa diajak bicara, dengan kepribadian terdefinisi dan skeleton yang bergerak secara real-time.',
    applicationCategory: 'ArtificialIntelligenceApplication',
    operatingSystem: 'Web',
    author: {
      '@type': 'Person',
      name: 'Rizki Habibi',
    },
  }

  return (
    <html lang="id" className={`${inter.variable} ${bangers.variable}`}>
      <head>
        {/* Google Translate — aktifkan terjemahan otomatis */}
        <meta name="google" content="notranslate" />

        {/* ── Bing Webmaster Tools ─────────────────────────── */}
        <meta name="msvalidate.01" content="" />

        {/* ── Pinterest verifikasi ─────────────────────────── */}
        <meta name="p:domain_verify" content="" />

        {/* ── Extra meta untuk semua mesin pencari ─────────── */}
        <meta name="author" content="Rizki Habibi" />
        <meta name="copyright" content="Rizki Habibi" />
        <meta name="language" content="Indonesian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />

        {/* ── JSON-LD: Person ──────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        {/* ── JSON-LD: WebSite ─────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {/* ── JSON-LD: SoftwareApplication (Camora) ────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(camoraLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LangProvider>
          {children}
        </LangProvider>
        {/* Google Translate script */}
        <div id="google_translate_element" style={{ display: 'none' }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'id',
                  includedLanguages: 'id,en,ja,ar,zh-CN,ko,fr,de,es,pt',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
              window.googleTranslateInit = googleTranslateElementInit;
            `
          }}
        />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async />
      </body>
    </html>
  )
}
