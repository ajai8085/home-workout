import { useCallback, useState } from 'react'

export interface WorkoutSettings {
  sound: boolean
  vibration: boolean
  voice: boolean
}

const STORAGE_KEY = 'workout-settings'

const DEFAULT_SETTINGS: WorkoutSettings = {
  sound: true,
  vibration: true,
  voice: false,
}

const loadSettings = (): WorkoutSettings => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_SETTINGS
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return DEFAULT_SETTINGS
    const record = parsed as Record<string, unknown>
    return {
      sound: typeof record.sound === 'boolean' ? record.sound : DEFAULT_SETTINGS.sound,
      vibration:
        typeof record.vibration === 'boolean' ? record.vibration : DEFAULT_SETTINGS.vibration,
      voice: typeof record.voice === 'boolean' ? record.voice : DEFAULT_SETTINGS.voice,
    }
  } catch {
    return DEFAULT_SETTINGS
  }
}

export interface SettingsControls {
  settings: WorkoutSettings
  toggleSetting: (key: keyof WorkoutSettings) => void
}

export const useSettings = (): SettingsControls => {
  const [settings, setSettings] = useState<WorkoutSettings>(loadSettings)

  const toggleSetting = useCallback((key: keyof WorkoutSettings) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: !prev[key] }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        /* ignore unavailable storage */
      }
      return next
    })
  }, [])

  return { settings, toggleSetting }
}
