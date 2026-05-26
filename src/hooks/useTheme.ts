import { useCallback, useState } from 'react'

export type Theme = 'light' | 'dark'

const getInitialTheme = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'

export interface ThemeControls {
  theme: Theme
  toggle: () => void
}

export const useTheme = (): ThemeControls => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('dark', next === 'dark')
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* ignore unavailable storage */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
