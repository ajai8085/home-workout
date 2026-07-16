import React from 'react'
import type { TimerStatus } from '@/hooks/useWorkoutTimer'

interface Props {
  status: TimerStatus
  phaseColor: string
  onPause: () => void
  onResume: () => void
  onSkip: () => void
  onPrevious: () => void
  onReset: () => void
}

const IconReset: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
)

const IconPlay: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="6,3 20,12 6,21" />
  </svg>
)

const IconPause: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <rect x="5" y="4" width="4" height="16" rx="1" />
    <rect x="15" y="4" width="4" height="16" rx="1" />
  </svg>
)

const IconSkip: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,4 15,12 5,20" />
    <rect x="18" y="4" width="2.5" height="16" rx="1" />
  </svg>
)

const IconPrevious: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="19,4 9,12 19,20" />
    <rect x="3.5" y="4" width="2.5" height="16" rx="1" />
  </svg>
)

export const WorkoutControls: React.FC<Props> = ({
  status,
  phaseColor,
  onPause,
  onResume,
  onSkip,
  onPrevious,
  onReset,
}) => {
  const isPaused = status === 'paused'

  const secondaryBtn =
    'glass-card flex h-14 w-14 items-center justify-center rounded-2xl text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)] active:scale-95 sm:h-16 sm:w-16'

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <button onClick={onReset} className={secondaryBtn} aria-label="End workout">
        <IconReset />
      </button>

      <button onClick={onPrevious} className={secondaryBtn} aria-label="Previous step">
        <IconPrevious />
      </button>

      <button
        onClick={isPaused ? onResume : onPause}
        className="flex h-16 w-16 items-center justify-center rounded-2xl transition-all active:scale-95 sm:h-[4.5rem] sm:w-[4.5rem]"
        style={{
          background: phaseColor,
          color: 'var(--color-on-accent)',
          boxShadow: `0 0 28px color-mix(in srgb, ${phaseColor} 45%, transparent)`,
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
