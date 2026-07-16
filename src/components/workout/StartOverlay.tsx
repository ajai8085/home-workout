import React from 'react'
import { AuroraBackground } from '@/components/workout/AuroraBackground'
import { StatsBar } from '@/components/workout/StatsBar'
import type { WorkoutStats } from '@/hooks/useWorkoutHistory'

interface Props {
  stats: WorkoutStats
  onStart: () => void
}

const PHASE_BREAKDOWN: [string, string, string][] = [
  ['Mobility', '4 min', 'var(--color-mobility)'],
  ['Strength × 2', '6 min', 'var(--color-strength)'],
  ['Cardio × 2', '8 min', 'var(--color-cardio)'],
  ['Cool Down', '2 min', 'var(--color-cooldown)'],
]

export const StartOverlay: React.FC<Props> = ({ stats, onStart }) => {
  return (
    <div
      className="relative flex min-h-dvh w-full flex-col items-center justify-center px-6 py-16"
      style={{ background: 'var(--color-bg)' }}
    >
      <AuroraBackground colorA="var(--color-accent)" colorB="var(--color-cardio)" />

      <div className="relative flex w-full max-w-sm flex-col items-center gap-7 text-center md:max-w-md md:gap-9">
        <div className="flex flex-col gap-2">
          <p
            className="font-mono text-sm tracking-widest uppercase"
            style={{ color: 'var(--color-accent)' }}
          >
            20-Min Home Workout
          </p>
          <h1 className="text-gradient font-display text-[clamp(2.75rem,11vw,4.5rem)] leading-none font-bold uppercase">
            Ready to
            <br />
            Move?
          </h1>
        </div>

        <StatsBar stats={stats} />

        <div className="glass-card w-full space-y-2 rounded-2xl p-5 text-left">
          {PHASE_BREAKDOWN.map(([label, time, col]) => (
            <div key={label} className="flex items-center justify-between font-mono text-base">
              <span className="flex items-center gap-2.5" style={{ color: col }}>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: col,
                    boxShadow: `0 0 8px color-mix(in srgb, ${col} 70%, transparent)`,
                  }}
                />
                {label}
              </span>
              <span style={{ color: 'var(--color-muted)' }}>{time}</span>
            </div>
          ))}
        </div>

        <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          Back-safe · No equipment · Beginner-friendly
        </p>

        <button
          onClick={onStart}
          className="font-display w-full rounded-2xl py-5 text-2xl font-bold tracking-wider uppercase transition-all active:scale-95 md:py-6 md:text-3xl"
          style={{
            background: 'var(--color-accent)',
            color: 'var(--color-on-accent)',
            boxShadow: '0 0 40px color-mix(in srgb, var(--color-accent) 35%, transparent)',
          }}
        >
          {stats.completedToday ? 'Go Again' : 'Start Workout'}
        </button>
      </div>
    </div>
  )
}
