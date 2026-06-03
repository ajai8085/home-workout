import React from 'react'
import type { WorkoutStep } from '@/types/workout'

interface Props {
  step: WorkoutStep | undefined
}

export const UpNext: React.FC<Props> = ({ step }) => {
  if (!step) return null
  return (
    <div className="flex items-center gap-2 font-mono text-sm text-[var(--color-muted)]">
      <span aria-hidden>▸</span>
      <span className="tracking-wider uppercase">Up Next</span>
      <span className="font-medium text-[var(--color-text)]">{step.exercise}</span>
    </div>
  )
}
