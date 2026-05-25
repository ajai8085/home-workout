import React from 'react'

interface Props {
  color: string
}

export const WorldsGreatestStretchFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 220 270" fill="none" {...s}>
      <circle cx="138" cy="48" r="17" />
      <line x1="128" y1="65" x2="105" y2="130" />
      <line x1="118" y1="85" x2="88" y2="155" />
      <line
        x1="118"
        y1="85"
        x2="145"
        y2="120"
        style={{
          transformOrigin: '118px 85px',
          animation: 'wgs-arm 2s ease-in-out infinite alternate',
        }}
      />
      <line x1="105" y1="130" x2="88" y2="155" />
      <line x1="88" y1="155" x2="88" y2="250" />
      <line x1="78" y1="250" x2="105" y2="250" />
      <line x1="105" y1="130" x2="148" y2="185" />
      <line x1="148" y1="185" x2="155" y2="250" />
      <circle cx="148" cy="190" r="4" strokeWidth={2} />
      <line x1="30" y1="254" x2="195" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
