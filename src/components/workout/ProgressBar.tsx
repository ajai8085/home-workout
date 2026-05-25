interface Props {
  progress: number
  color: string
}

export function ProgressBar({ progress, color }: Props) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-linear"
        style={{ width: `${Math.min(100, progress)}%`, background: color }}
      />
    </div>
  )
}
