interface Props {
  current: number
  total: number
}

export function StepCounter({ current, total }: Props) {
  return (
    <div className="font-mono text-xs tracking-wider text-[var(--color-muted)]">
      {current} / {total}
    </div>
  )
}
