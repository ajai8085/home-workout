import React from 'react'

interface Props {
  label: string
  color: string
}

export const PhaseTag: React.FC<Props> = ({ label, color }) => {
  return (
    <div
      className="inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium tracking-widest uppercase"
      style={{
        color,
        background: `color-mix(in srgb, ${color} 12%, transparent)`,
        border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`,
      }}
    >
      {label}
    </div>
  )
}
