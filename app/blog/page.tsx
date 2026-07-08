'use client'

import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Research from '@/components/sections/Research'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/common/ScrollProgress'
import BackToTop from '@/components/common/BackToTop'
import LoadingScreen from '@/components/common/LoadingScreen'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <LoadingScreen />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}