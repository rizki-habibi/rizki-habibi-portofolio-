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
      <body suppressHydrationWarning>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
