import React from 'react'

interface Props {
  color: string
}

export const GluteBridgeFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 170" fill="none" {...s}>
      {/* Head resting on the floor */}
      <circle cx="24" cy="129" r="13" />
      <line x1="35" y1="132" x2="48" y2="140" />

      {/* Shoulder → hip → knee chain — hip lifts without ever detaching */}
      <path
        d="M 48 140 L 106 140 L 150 114"
        fill="none"
        style={{ animation: 'glute-bridge-lift 1.6s ease-in-out infinite' }}
      />

      {/* Shin + planted foot (static) */}
      <line x1="150" y1="114" x2="150" y2="150" />
      <line x1="138" y1="150" x2="163" y2="150" />

      <line x1="16" y1="152" x2="186" y2="152" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
