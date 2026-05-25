import type { PhaseType, WorkoutStep } from '../../types/workout'
import { PHASE_COLORS, REST_COLOR } from '../../types/workout'

interface Props {
  steps: WorkoutStep[]
  currentIndex: number
}

function phaseHeadings(steps: WorkoutStep[]) {
  const phases: { phase: PhaseType; label: string; start: number }[] = []
  steps.forEach((step, i) => {
    if (i === 0 || step.phase !== steps[i - 1].phase) {
      phases.push({ phase: step.phase, label: step.phaseLabel, start: i })
    }
  })
  return phases
}

export function SequenceList({ steps, currentIndex }: Props) {
  const phases = phaseHeadings(steps)

  return (
    <div className="w-full space-y-1 border-t border-[var(--color-border)] pt-4 pb-2">
      <p className="mb-3 px-1 font-mono text-[10px] tracking-widest text-[var(--color-muted)] uppercase">
        Full Sequence
      </p>
      {phases.map((ph) => {
        const phaseSteps = steps.filter((s) => s.phase === ph.phase)
        const phaseComplete = phaseSteps.every((s) => s.id < currentIndex)
        const phaseActive = phaseSteps.some((s) => s.id === currentIndex)
        const color = PHASE_COLORS[ph.phase]

        return (
          <div key={ph.phase}>
            <div
              className="mb-0.5 flex items-center gap-1 px-1 font-mono text-[10px] tracking-widest uppercase"
              style={{
                color: phaseComplete
                  ? 'var(--color-muted)'
                  : phaseActive
                    ? color
                    : 'var(--color-muted)',
                opacity: phaseComplete ? 0.5 : 1,
              }}
            >
              {phaseComplete && <span className="opacity-60">✓</span>}
              {ph.label}
            </div>
            {phaseSteps.map((step) => {
              const isDone = step.id < currentIndex
              const isCurrent = step.id === currentIndex
              const stepColor = step.type === 'rest' ? REST_COLOR : color

              return (
                <div
                  key={step.id}
                  className="flex items-center gap-2 rounded px-2 py-0.5 font-mono text-xs"
                  style={{
                    opacity: isDone ? 0.3 : 1,
                    background: isCurrent ? `${stepColor}15` : 'transparent',
                    color: isCurrent ? stepColor : 'var(--color-muted)',
                    textDecoration: isDone ? 'line-through' : 'none',
                  }}
                >
                  {isCurrent && (
                    <span className="text-[8px]" style={{ color: stepColor }}>
                      ●
                    </span>
                  )}
                  {!isCurrent && <span className="w-2" />}
                  <span className={step.type === 'rest' ? 'italic opacity-60' : ''}>
                    {step.exercise}
                  </span>
                  <span className="ml-auto text-[10px] opacity-50">{step.duration}s</span>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
