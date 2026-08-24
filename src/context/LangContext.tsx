'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Bahasa yang didukung
export type Lang = 'id' | 'en' | 'ja' | 'ar' | 'zh'

export const namaLang: Record<Lang, string> = {
  id: '🇮🇩 ID',
  en: '🇬🇧 EN',
  ja: '🇯🇵 JP',
  ar: '🇸🇦 AR',
  zh: '🇨🇳 ZH',
}

// Terjemahan navbar
export const tNavbar: Record<Lang, { beranda: string; tentang: string; keahlian: string; proyek: string; perjalanan: string; kontak: string }> = {
  id: { beranda: 'BERANDA', tentang: 'TENTANG', keahlian: 'KEAHLIAN', proyek: 'PROYEK', perjalanan: 'PERJALANAN', kontak: 'KONTAK' },
  en: { beranda: 'HOME', tentang: 'ABOUT', keahlian: 'SKILLS', proyek: 'PROJECTS', perjalanan: 'JOURNEY', kontak: 'CONTACT' },
  ja: { beranda: 'ホーム', tentang: '自己紹介', keahlian: 'スキル', proyek: 'プロジェクト', perjalanan: '経歴', kontak: 'お問合せ' },
  ar: { beranda: 'الرئيسية', tentang: 'عني', keahlian: 'مهارات', proyek: 'مشاريع', perjalanan: 'مسيرتي', kontak: 'تواصل' },
  zh: { beranda: '首页', tentang: '关于', keahlian: '技能', proyek: '项目', perjalanan: '经历', kontak: '联系' },
}

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof tNavbar[Lang]
}

const LangContext = createContext<LangContextType>({
  lang: 'id',
  setLang: () => {},
  t: tNavbar['id'],
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('id')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved && tNavbar[saved]) setLangState(saved)
    // Listen event dari Navbar
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as Lang
      if (tNavbar[detail]) setLangState(detail)
    }
    window.addEventListener('lang-change', handler)
    return () => window.removeEventListener('lang-change', handler)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
    window.dispatchEvent(new CustomEvent('lang-change', { detail: l }))
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: tNavbar[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
