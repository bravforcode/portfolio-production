import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Portfolio | Computer Science Student',
  description: 'Innovative solutions through cutting-edge technology',
  keywords: 'portfolio, computer science, web development, AI, machine learning',
  openGraph: {
    title: 'Portfolio | Computer Science Student',
    description: 'Innovative solutions through cutting-edge technology',
    url: 'http://localhost:3000',
    siteName: 'Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}