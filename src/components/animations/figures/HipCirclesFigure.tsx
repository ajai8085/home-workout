import React from 'react'

interface Props {
  color: string
}

export const HipCirclesFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      {/* Head, shoulders and arms stay still up top */}
      <circle cx="100" cy="32" r="18" />
      <line x1="100" y1="50" x2="100" y2="80" />
      <line x1="74" y1="80" x2="126" y2="80" />
      <line x1="74" y1="80" x2="60" y2="138" />
      <line x1="126" y1="80" x2="140" y2="138" />

      {/* Spine follows the circling pelvis (neck stays fixed) */}
      <path
        d="M 100 80 L 114 150"
        fill="none"
        style={{ animation: 'hip-circles-spine 1.6s linear infinite' }}
      />

      {/* Pelvis + legs as one connected path — pelvis circles, knees & feet planted */}
      <path
        d="M 100 150 L 128 150 M 100 150 L 66 206 L 64 250 M 128 150 L 134 206 L 136 250"
        fill="none"
        style={{ animation: 'hip-circles-lower 1.6s linear infinite' }}
      />

      <line x1="30" y1="254" x2="170" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
