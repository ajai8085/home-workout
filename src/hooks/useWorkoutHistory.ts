import { useCallback, useState } from 'react'

interface WorkoutRecord {
  completedAt: string // ISO timestamp
  durationSec: number
}

export interface WorkoutStats {
  totalSessions: number
  totalMinutes: number
  currentStreak: number
  completedToday: boolean
}

const STORAGE_KEY = 'workout-history'
const DAY_MS = 86_400_000

const loadRecords = (): WorkoutRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (r): r is WorkoutRecord =>
        typeof r === 'object' &&
        r !== null &&
        typeof (r as WorkoutRecord).completedAt === 'string' &&
        typeof (r as WorkoutRecord).durationSec === 'number',
    )
  } catch {
    return []
  }
}

const dayKey = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

const computeStats = (records: WorkoutRecord[]): WorkoutStats => {
  const days = new Set(records.map((r) => dayKey(new Date(r.completedAt))))
  const today = new Date()
  const completedToday = days.has(dayKey(today))

  // Streak counts consecutive days ending today (or yesterday if today is still open)
  let streak = 0
  let cursor = completedToday ? today : new Date(today.getTime() - DAY_MS)
  while (days.has(dayKey(cursor))) {
    streak += 1
    cursor = new Date(cursor.getTime() - DAY_MS)
  }

  return {
    totalSessions: records.length,
    totalMinutes: Math.round(records.reduce((s, r) => s + r.durationSec, 0) / 60),
    currentStreak: streak,
    completedToday,
  }
}

export interface WorkoutHistoryControls {
  stats: WorkoutStats
  recordSession: (durationSec: number) => void
}

export const useWorkoutHistory = (): WorkoutHistoryControls => {
  const [records, setRecords] = useState<WorkoutRecord[]>(loadRecords)

  const recordSession = useCallback((durationSec: number) => {
    setRecords((prev) => {
      const next = [...prev, { completedAt: new Date().toISOString(), durationSec }]
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        /* ignore unavailable storage */
      }
      return next
    })
  }, [])

  return { stats: computeStats(records), recordSession }
}
