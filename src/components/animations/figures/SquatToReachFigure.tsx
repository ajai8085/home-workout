import React from 'react'

interface Props {
  color: string
}

export const SquatToReachFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 280" fill="none" {...s}>
      {/* Head + torso + arms drop together as one unit */}
      <g style={{ animation: 'str-body 1.8s ease-in-out infinite' }}>
        <circle cx="100" cy="30" r="18" />
        <line x1="100" y1="48" x2="100" y2="148" />
        <line x1="82" y1="148" x2="118" y2="148" />
        <g
          style={{ transformOrigin: '72px 78px', animation: 'str-arms 1.8s ease-in-out infinite' }}
        >
          <line x1="72" y1="78" x2="50" y2="32" />
        </g>
        <g
          style={{ transformOrigin: '128px 78px', animation: 'str-arms 1.8s ease-in-out infinite' }}
        >
          <line x1="128" y1="78" x2="150" y2="32" />
        </g>
        <line x1="72" y1="78" x2="128" y2="78" />
      </g>

      {/* Legs — hips drop, knees bow out, feet stay planted (single paths) */}
      <path
        d="M 82 148 L 70 205 L 68 258"
        fill="none"
        style={{ animation: 'str-left-leg 1.8s ease-in-out infinite' }}
      />
      <path
        d="M 118 148 L 130 205 L 132 258"
        fill="none"
        style={{ animation: 'str-right-leg 1.8s ease-in-out infinite' }}
      />

      {/* Planted feet */}
      <line x1="56" y1="258" x2="80" y2="258" />
      <line x1="120" y1="258" x2="144" y2="258" />

      <line x1="30" y1="262" x2="170" y2="262" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
