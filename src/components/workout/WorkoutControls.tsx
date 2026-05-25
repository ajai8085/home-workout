import React from 'react'
import type { TimerStatus } from '../../hooks/useWorkoutTimer'

interface Props {
  status: TimerStatus
  phaseColor: string
  onPause: () => void
  onResume: () => void
  onSkip: () => void
  onReset: () => void
}

export const WorkoutControls: React.FC<Props> = ({
  status,
  phaseColor,
  onPause,
  onResume,
  onSkip,
  onReset,
}) => {
  const isPaused = status === 'paused'

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onReset}
        className="flex h-10 w-10 items-center justify-center rounded-none border border-[var(--color-border)] font-mono text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-text)]"
        aria-label="Reset workout"
      >
        ↺
      </button>

      <button
        onClick={isPaused ? onResume : onPause}
        className="font-display flex h-16 w-16 items-center justify-center rounded-none text-xl font-bold transition-all active:scale-95"
        style={{
          background: phaseColor,
          color: '#0a0e0d',
          boxShadow: `0 0 24px ${phaseColor}50`,
        }}
        aria-label={isPaused ? 'Resume' : 'Pause'}
      >
        {isPaused ? '▶' : '⏸'}
      </button>

      <button
        onClick={onSkip}
        className="flex h-10 w-10 items-center justify-center rounded-none border border-[var(--color-border)] font-mono text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-text)]"
        aria-label="Skip to next"
      >
        ▶▶
      </button>
    </div>
  )
}
