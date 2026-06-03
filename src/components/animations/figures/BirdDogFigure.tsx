import React from 'react'

interface Props {
  color: string
}

export const BirdDogFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 220 210" fill="none" {...s}>
      {/* Spine (hips on the left, shoulders on the right) */}
      <line x1="70" y1="112" x2="150" y2="112" />

      {/* Head / neck — facing forward (right) */}
      <line x1="150" y1="112" x2="166" y2="100" />
      <circle cx="174" cy="92" r="15" />

      {/* Supporting arm under the shoulders */}
      <line x1="150" y1="112" x2="150" y2="170" />

      {/* Supporting knee under the hips */}
      <line x1="70" y1="112" x2="82" y2="170" />

      {/* Extended arm — reaches forward, lifts level with the back */}
      <line
        x1="150"
        y1="112"
        x2="200"
        y2="104"
        style={{
          transformOrigin: '150px 112px',
          animation: 'bird-dog-arm 1.6s ease-in-out infinite',
        }}
      />

      {/* Extended leg — reaches back, lifts level with the back */}
      <line
        x1="70"
        y1="112"
        x2="22"
        y2="104"
        style={{
          transformOrigin: '70px 112px',
          animation: 'bird-dog-leg 1.6s ease-in-out infinite',
        }}
      />

      <line x1="25" y1="174" x2="195" y2="174" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
