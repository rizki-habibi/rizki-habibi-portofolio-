import type { Metadata } from 'next'
import { Inter, Bangers } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/context/LangContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const bangers = Bangers({ subsets: ['latin'], weight: '400', variable: '--font-bangers', display: 'swap' })

export const metadata: Metadata = {
  title: 'Rizki Habibi | Portfolio',
  description: 'Web Developer · Creator · Problem Solver',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${bangers.variable}`}>
      <head>
        {/* Google Translate — aktifkan terjemahan otomatis */}
        <meta name="google" content="notranslate" />
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
