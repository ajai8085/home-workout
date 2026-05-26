import React from 'react'
import type { PhaseType, WorkoutStep } from '@/types/workout'
import { PHASE_COLORS, REST_COLOR } from '@/types/workout'

interface Props {
  steps: WorkoutStep[]
  currentIndex: number
}

interface PhaseGroup {
  phase: PhaseType
  label: string
  start: number
}

const buildPhaseGroups = (steps: WorkoutStep[]): PhaseGroup[] => {
  const groups: PhaseGroup[] = []
  steps.forEach((step, i) => {
    if (i === 0 || step.phase !== steps[i - 1].phase) {
      groups.push({ phase: step.phase, label: step.phaseLabel, start: i })
    }
  })
  return groups
}

export const SequenceList: React.FC<Props> = ({ steps, currentIndex }) => {
  const groups = buildPhaseGroups(steps)

  return (
    <div className="w-full space-y-1 border-t border-[var(--color-border)] pt-4 pb-2">
      <p className="mb-3 px-1 font-mono text-[10px] tracking-widest text-[var(--color-muted)] uppercase">
        Full Sequence
      </p>
      {groups.map((group) => {
        const groupSteps = steps.filter((s) => s.phase === group.phase)
        const groupComplete = groupSteps.every((s) => s.id < currentIndex)
        const groupActive = groupSteps.some((s) => s.id === currentIndex)
        const color = PHASE_COLORS[group.phase]

        return (
          <div key={group.phase}>
            <div
              className="mb-0.5 flex items-center gap-1 px-1 font-mono text-[10px] tracking-widest uppercase"
              style={{
                color: groupComplete
                  ? 'var(--color-muted)'
                  : groupActive
                    ? color
                    : 'var(--color-muted)',
                opacity: groupComplete ? 0.5 : 1,
              }}
            >
              {groupComplete && <span className="opacity-60">✓</span>}
              {group.label}
            </div>

            {groupSteps.map((step) => {
              const isDone = step.id < currentIndex
              const isCurrent = step.id === currentIndex
              const stepColor = step.type === 'rest' ? REST_COLOR : color

              return (
                <div
                  key={step.id}
                  className="flex items-center gap-2 rounded px-2 py-0.5 font-mono text-xs"
                  style={{
                    opacity: isDone ? 0.3 : 1,
                    background: isCurrent
                      ? `color-mix(in srgb, ${stepColor} 13%, transparent)`
                      : 'transparent',
                    color: isCurrent ? stepColor : 'var(--color-muted)',
                    textDecoration: isDone ? 'line-through' : 'none',
                  }}
                >
                  {isCurrent ? (
                    <span className="text-[8px]" style={{ color: stepColor }}>
                      ●
                    </span>
                  ) : (
                    <span className="w-2" />
                  )}
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
