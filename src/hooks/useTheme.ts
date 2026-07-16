import { useCallback, useState } from 'react'
import type { PaletteId } from '@/data/themes'
import { DEFAULT_PALETTE, isPaletteId } from '@/data/themes'

export type ThemeMode = 'light' | 'dark'

const getInitialMode = (): ThemeMode =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'

const getInitialPalette = (): PaletteId => {
  const attr = document.documentElement.getAttribute('data-theme')
  return isPaletteId(attr) ? attr : DEFAULT_PALETTE
}

const persist = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* ignore unavailable storage */
  }
}

export interface ThemeControls {
  mode: ThemeMode
  palette: PaletteId
  toggleMode: () => void
  setPalette: (palette: PaletteId) => void
}

export const useTheme = (): ThemeControls => {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode)
  const [palette, setPaletteState] = useState<PaletteId>(getInitialPalette)

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next: ThemeMode = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('dark', next === 'dark')
      persist('theme', next)
      return next
    })
  }, [])

  const setPalette = useCallback((next: PaletteId) => {
    document.documentElement.setAttribute('data-theme', next)
    persist('palette', next)
    setPaletteState(next)
  }, [])

  return { mode, palette, toggleMode, setPalette }
}
