import React from 'react'
import type { TimerStatus } from '@/hooks/useWorkoutTimer'

interface Props {
  status: TimerStatus
  phaseColor: string
  onPause: () => void
  onResume: () => void
  onSkip: () => void
  onReset: () => void
}

const IconReset: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
)

const IconPlay: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="6,3 20,12 6,21" />
  </svg>
)

const IconPause: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <rect x="5" y="4" width="4" height="16" rx="1" />
    <rect x="15" y="4" width="4" height="16" rx="1" />
  </svg>
)

const IconSkip: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,4 15,12 5,20" />
    <rect x="18" y="4" width="2.5" height="16" rx="1" />
  </svg>
)

export const WorkoutControls: React.FC<Props> = ({
  status,
  phaseColor,
  onPause,
  onResume,
  onSkip,
  onReset,
}) => {
  const isPaused = status === 'paused'

  const secondaryBtn =
    'flex h-12 w-12 items-center justify-center border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-text)] active:scale-95'

  return (
    <div className="flex items-center gap-3">
      <button onClick={onReset} className={secondaryBtn} aria-label="Reset workout">
        <IconReset />
      </button>

      <button
        onClick={isPaused ? onResume : onPause}
        className="flex h-12 w-12 items-center justify-center transition-all active:scale-95"
        style={{
          background: phaseColor,
          color: '#0a0e0d',
          boxShadow: `0 0 20px ${phaseColor}40`,
        }}
        aria-label={isPaused ? 'Resume' : 'Pause'}
      >
        {isPaused ? <IconPlay /> : <IconPause />}
      </button>

      <button onClick={onSkip} className={secondaryBtn} aria-label="Skip to next">
        <IconSkip />
      </button>
    </div>
  )
}
