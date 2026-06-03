import React from 'react'

interface Props {
  color: string
}

export const SquatFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      {/* Upper body drops straight down with the hips */}
      <g style={{ animation: 'squat-body-down 1.3s ease-in-out infinite' }}>
        <circle cx="100" cy="30" r="18" />
        <line x1="100" y1="48" x2="100" y2="150" />
        <line x1="74" y1="80" x2="126" y2="80" />
        <line x1="74" y1="80" x2="58" y2="126" />
        <line x1="126" y1="80" x2="142" y2="126" />
        <line x1="84" y1="150" x2="116" y2="150" />
      </g>

      {/* Legs — hip drops, knees bow out, feet stay planted (single paths, no detach) */}
      <path
        d="M 84 150 L 80 202 L 79 250"
        fill="none"
        style={{ animation: 'squat-left-leg 1.3s ease-in-out infinite' }}
      />
      <path
        d="M 116 150 L 120 202 L 121 250"
        fill="none"
        style={{ animation: 'squat-right-leg 1.3s ease-in-out infinite' }}
      />

      {/* Planted feet */}
      <line x1="66" y1="250" x2="92" y2="250" />
      <line x1="108" y1="250" x2="134" y2="250" />

      <line x1="30" y1="254" x2="170" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
