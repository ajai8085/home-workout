import React from 'react'

interface Props {
  label: string
  color: string
}

export const PhaseTag: React.FC<Props> = ({ label, color }) => {
  return (
    <div
      className="inline-flex items-center rounded-full px-4 py-1.5 font-mono text-sm font-semibold tracking-widest uppercase"
      style={{
        color,
        background: `color-mix(in srgb, ${color} 20%, transparent)`,
        border: `1px solid color-mix(in srgb, ${color} 45%, transparent)`,
      }}
    >
      {label}
    </div>
  )
}
