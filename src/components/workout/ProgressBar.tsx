import React from 'react'

interface Props {
  progress: number
  color: string
}

export const ProgressBar: React.FC<Props> = ({ progress, color }) => {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-linear"
        style={{
          width: `${Math.min(100, progress)}%`,
          background: color,
          boxShadow: `0 0 10px color-mix(in srgb, ${color} 55%, transparent)`,
        }}
      />
    </div>
  )
}
