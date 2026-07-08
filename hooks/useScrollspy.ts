import { useEffect, useState } from 'react'

export function useScrollspy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY
      
      const position = ids.find((id) => {
        const element = document.getElementById(id)
        if (!element) return false
        
        // ใช้ scroll + offset แทน getBoundingClientRect
        const { offsetTop } = element as HTMLElement
        const elementTop = offsetTop
        const elementBottom = elementTop + element.offsetHeight
        
        return scroll >= elementTop - offset && 
               scroll < elementBottom - offset
      })

      setActiveId(position || '')
    }

    listener()
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [ids, offset])

  return activeId
}