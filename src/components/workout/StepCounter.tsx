import React from 'react'

interface Props {
  current: number
  total: number
}

export const StepCounter: React.FC<Props> = ({ current, total }) => {
  return (
    <div className="font-mono text-sm tracking-wider text-[var(--color-muted)]">
      {current} / {total}
    </div>
  )
}
