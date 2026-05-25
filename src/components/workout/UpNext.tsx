import type { WorkoutStep } from '../../types/workout'

interface Props {
  step: WorkoutStep | undefined
}

export function UpNext({ step }: Props) {
  if (!step) return null
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-muted)]">
      <span className="opacity-50">▸</span>
      <span className="tracking-wider uppercase opacity-60">Up Next</span>
      <span className="text-[var(--color-text)] opacity-80">{step.exercise}</span>
    </div>
  )
}
