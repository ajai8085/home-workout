import React from 'react'

interface Props {
  color: string
}

export const KneelingHipFlexorFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 240" fill="none" {...s}>
      {/* Rear leg — knee down on the floor, shin flat along the ground */}
      <line x1="95" y1="150" x2="72" y2="216" />
      <line x1="72" y1="216" x2="42" y2="216" />
      <circle cx="72" cy="216" r="4" strokeWidth={2} />

      {/* Front leg — foot planted, knee bent ~90° */}
      <line x1="95" y1="150" x2="140" y2="166" />
      <line x1="140" y1="166" x2="140" y2="216" />
      <line x1="140" y1="216" x2="164" y2="216" />

      {/* Upper body — sinks forward into the stretch */}
      <g
        style={{
          transformOrigin: '95px 150px',
          animation: 'khf-sink 2.4s ease-in-out infinite',
        }}
      >
        <line x1="95" y1="150" x2="92" y2="82" />
        <circle cx="90" cy="64" r="16" />
        <line x1="93" y1="98" x2="135" y2="160" />
      </g>

      <line x1="25" y1="220" x2="180" y2="220" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
