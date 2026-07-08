'use client'

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'

// Theme types
type Theme = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  isLoading: boolean
}

// Default context value
const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  resolvedTheme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
  isLoading: true,
})

// Script to inject before hydration to prevent flash
const THEME_SCRIPT = `
  (function() {
    function getTheme() {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      if (stored === 'system' || !stored) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return 'dark';
    }
    
    const theme = getTheme();
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  })();
`

// Helper to get system theme
const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Helper to resolve theme
const resolveTheme = (theme: Theme): ResolvedTheme => {
  if (theme === 'system') {
    return getSystemTheme()
  }
  return theme
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark')
  const [isLoading, setIsLoading] = useState(true)

  // Update DOM classes and styles
  const applyTheme = useCallback((resolvedTheme: ResolvedTheme) => {
    const root = document.documentElement
    root.classList.toggle('dark', resolvedTheme === 'dark')
    root.style.colorScheme = resolvedTheme
    
    // Optional: Add transition class for smooth theme switching
    root.classList.add('theme-transition')
    setTimeout(() => {
      root.classList.remove('theme-transition')
    }, 300)
  }, [])

  // Set theme with persistence
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    const resolved = resolveTheme(newTheme)
    setResolvedTheme(resolved)
    
    // Persist to localStorage
    try {
      localStorage.setItem('theme', newTheme)
    } catch (e) {
      console.warn('Failed to save theme preference:', e)
    }
    
    // Apply to DOM
    applyTheme(resolved)
  }, [applyTheme])

  // Toggle between light and dark (ignoring system)
  const toggleTheme = useCallback(() => {
    const newTheme: Theme = resolvedTheme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }, [resolvedTheme, setTheme])

  // Initialize theme on mount
  useEffect(() => {
    try {
      // Get saved theme from localStorage
      const savedTheme = localStorage.getItem('theme') as Theme | null
      const initialTheme = savedTheme || 'system'
      const resolved = resolveTheme(initialTheme)
      
      setThemeState(initialTheme)
      setResolvedTheme(resolved)
      applyTheme(resolved)
    } catch (e) {
      console.warn('Failed to load theme preference:', e)
    } finally {
      setIsLoading(false)
    }
  }, [applyTheme])

  // Listen to system theme changes
  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const newResolvedTheme = e.matches ? 'dark' : 'light'
      setResolvedTheme(newResolvedTheme)
      applyTheme(newResolvedTheme)
    }

    // Check current state
    handleChange(mediaQuery)

    // Listen for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [theme, applyTheme])

  // Listen to storage changes (sync across tabs)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme' && e.newValue) {
        const newTheme = e.newValue as Theme
        setThemeState(newTheme)
        const resolved = resolveTheme(newTheme)
        setResolvedTheme(resolved)
        applyTheme(resolved)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [applyTheme])

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
      isLoading,
    }),
    [theme, resolvedTheme, setTheme, toggleTheme, isLoading]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook with better error handling
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Additional utility hooks
export const useIsDark = () => {
  const { resolvedTheme } = useTheme()
  return resolvedTheme === 'dark'
}

export const useIsLight = () => {
  const { resolvedTheme } = useTheme()
  return resolvedTheme === 'light'
}

// Component to inject theme script (prevents flash)
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
      suppressHydrationWarning
    />
  )
}

// Re-export for convenience
export { ThemeContext }
export type { Theme, ResolvedTheme }