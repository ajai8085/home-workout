import React from 'react'
import type { WorkoutStats } from '@/hooks/useWorkoutHistory'

interface Props {
  stats: WorkoutStats
}

interface StatTileProps {
  value: string
  label: string
  accent?: boolean
}

const StatTile: React.FC<StatTileProps> = ({ value, label, accent = false }) => (
  <div className="glass-card flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-3">
    <span
      className="font-display text-2xl leading-none font-bold tabular-nums"
      style={{ color: accent ? 'var(--color-accent)' : 'var(--color-text)' }}
    >
      {value}
    </span>
    <span className="font-mono text-[0.65rem] tracking-widest text-[var(--color-muted)] uppercase">
      {label}
    </span>
  </div>
)

export const StatsBar: React.FC<Props> = ({ stats }) => {
  if (stats.totalSessions === 0) return null

  return (
    <div className="flex w-full gap-2">
      <StatTile
        value={`${stats.currentStreak > 0 ? '🔥' : ''}${stats.currentStreak}`}
        label="Day streak"
        accent
      />
      <StatTile value={String(stats.totalSessions)} label="Sessions" />
      <StatTile value={String(stats.totalMinutes)} label="Minutes" />
    </div>
  )
}
