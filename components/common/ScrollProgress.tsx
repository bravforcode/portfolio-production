'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / scrollHeight) * 100
      setProgress(progress)
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-gray-200 dark:bg-gray-800">
      <div
        className="h-full bg-gradient-to-r from-primary-400 to-purple-600 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
