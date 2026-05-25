import React from 'react'
import type { WorkoutStep } from '../../types/workout'

interface Props {
  step: WorkoutStep | undefined
}

export const UpNext: React.FC<Props> = ({ step }) => {
  if (!step) return null
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-muted)]">
      <span className="opacity-50">▸</span>
      <span className="uppercase tracking-wider opacity-60">Up Next</span>
      <span className="opacity-80 text-[var(--color-text)]">{step.exercise}</span>
    </div>
  )
}
