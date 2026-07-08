'use client'

import { SITE_CONFIG } from '@/lib/constants'
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Github size={24} />
            </a>
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.links.email}`}
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Mail size={24} />
            </a>
            <a
              href={SITE_CONFIG.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Twitter size={24} />
            </a>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-center">
            <span className="flex items-center gap-1">
              {t('Made with', 'สร้างด้วย')} <Heart size={16} className="text-red-500" fill="currentColor" /> {t('by', 'โดย')} Your Name
            </span>
          </p>
          
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            © {currentYear} {t('All rights reserved', 'สงวนลิขสิทธิ์')}
          </p>
        </div>
      </div>
    </footer>
  )
}
