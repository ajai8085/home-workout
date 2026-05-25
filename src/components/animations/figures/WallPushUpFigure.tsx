import React from 'react'

interface Props {
  color: string
}

export const WallPushUpFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 220 270" fill="none" {...s}>
      <line x1="185" y1="20" x2="185" y2="255" stroke={color} strokeOpacity={0.35} strokeWidth={5} />
      <g style={{ animation: 'wall-push-body 1s ease-in-out infinite alternate' }}>
        <circle cx="58" cy="62" r="16" />
        <line x1="58" y1="78" x2="80" y2="158" />
        <line x1="68" y1="100" x2="155" y2="118" />
        <circle cx="155" cy="118" r="5" strokeWidth={2} />
        <line x1="80" y1="158" x2="90" y2="192" />
        <line x1="90" y1="192" x2="92" y2="250" />
        <line x1="80" y1="175" x2="82" y2="250" />
      </g>
      <line x1="30" y1="254" x2="185" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
