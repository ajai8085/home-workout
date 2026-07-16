import React from 'react'
import { AuroraBackground } from '@/components/workout/AuroraBackground'
import { Confetti } from '@/components/workout/Confetti'
import { StatsBar } from '@/components/workout/StatsBar'
import type { WorkoutStats } from '@/hooks/useWorkoutHistory'

interface Props {
  stats: WorkoutStats
  totalSteps: number
  onReset: () => void
  onShare: () => void
}

export const CompletionScreen: React.FC<Props> = ({ stats, totalSteps, onReset, onShare }) => {
  return (
    <div
      className="relative flex min-h-dvh w-full flex-col items-center justify-center px-6 py-16"
      style={{ background: 'var(--color-bg)' }}
    >
      <AuroraBackground colorA="var(--color-cooldown)" colorB="var(--color-cardio)" />
      <Confetti />

      <div className="relative flex w-full max-w-sm flex-col items-center gap-7 text-center md:max-w-md md:gap-9">
        <div className="flex flex-col gap-3">
          <div className="font-display text-7xl">🎉</div>
          <h1 className="text-gradient font-display text-[clamp(2.75rem,11vw,4.5rem)] leading-none font-bold uppercase">
            Workout
            <br />
            Complete!
          </h1>
          <p className="font-mono text-base" style={{ color: 'var(--color-muted)' }}>
            20 minutes · {totalSteps} steps · All done
          </p>
        </div>

        <StatsBar stats={stats} />

        <div className="glass-card w-full rounded-2xl p-5 text-left">
          <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
            {stats.currentStreak > 1
              ? `That's ${stats.currentStreak} days in a row — the streak is alive! `
              : 'Great session! '}
            You worked through mobility, two strength rounds, two cardio rounds, and a full
            cool-down. Hydrate, rest, and come back tomorrow.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          <button
            onClick={onReset}
            className="font-display w-full rounded-2xl py-5 text-2xl font-bold tracking-wider uppercase transition-all active:scale-95 md:py-6 md:text-3xl"
            style={{
              background: 'var(--color-cooldown)',
              color: 'var(--color-on-accent)',
              boxShadow: '0 0 40px color-mix(in srgb, var(--color-cooldown) 35%, transparent)',
            }}
          >
            Go Again
          </button>
          <button
            onClick={onShare}
            className="glass-card w-full rounded-2xl py-3.5 font-mono text-sm font-medium tracking-widest text-[var(--color-text)] uppercase transition-all active:scale-95"
          >
            Share the win
          </button>
        </div>
      </div>
    </div>
  )
}
