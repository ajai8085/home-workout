import React from 'react'

interface Props {
  color: string
}

export const WallMountainClimbersFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 220 270" fill="none" {...s}>
      <line
        x1="185"
        y1="20"
        x2="185"
        y2="255"
        stroke={color}
        strokeOpacity={0.35}
        strokeWidth={5}
      />
      <circle cx="55" cy="58" r="16" />
      <line x1="55" y1="74" x2="90" y2="175" />
      <line x1="68" y1="98" x2="158" y2="112" />
      <circle cx="158" cy="112" r="5" strokeWidth={2} />
      <line x1="90" y1="175" x2="95" y2="188" />
      <g
        style={{
          transformOrigin: '90px 175px',
          animation: 'wmc-front-knee 0.6s ease-in-out infinite alternate',
        }}
      >
        <line x1="90" y1="175" x2="78" y2="228" />
        <line x1="78" y1="228" x2="72" y2="252" />
      </g>
      <g
        style={{
          transformOrigin: '95px 188px',
          animation: 'wmc-back-knee 0.6s ease-in-out infinite alternate',
        }}
      >
        <line x1="95" y1="188" x2="108" y2="238" />
        <line x1="108" y1="238" x2="112" y2="252" />
      </g>
      <line x1="30" y1="256" x2="185" y2="256" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
