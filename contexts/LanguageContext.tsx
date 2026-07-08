'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'th'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (en: string, th: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: (en: string, th: string) => en,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') as Language | null
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'th' : 'en'
    setLanguage(newLang)
    if (mounted) {
      localStorage.setItem('language', newLang)
    }
  }

  const t = (en: string, th: string) => {
    return language === 'en' ? en : th
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  return context
}