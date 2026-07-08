'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          {t("Hi, I'm", 'สวัสดี ฉันคือ')} <span className="text-gradient">Your Name</span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Computer Science Student
        </p>
        
        <div className="flex justify-center gap-4">
          <a 
            href="#projects"
            className="px-8 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600"
          >
            {t('View My Work', 'ดูผลงาน')}
          </a>
        </div>
      </div>
    </section>
  )
}