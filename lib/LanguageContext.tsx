'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Lang } from './translations'

type LanguageContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations[Lang]
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'nl',
  setLang: () => {},
  t: translations.nl,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('nl')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored && stored in translations) setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
