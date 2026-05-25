import React from 'react'

interface Props {
  color: string
}

export const CatCowFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 200" fill="none" {...s}>
      <circle
        cx="158"
        cy="95"
        r="16"
        style={{ transformOrigin: '150px 115px', animation: 'cat-cow-head 2s ease-in-out infinite' }}
      />
      <path
        d="M 55 115 C 85 90 120 90 150 115"
        fill="none"
        style={{ animation: 'cat-cow-spine 2s ease-in-out infinite' }}
      />
      <line x1="150" y1="115" x2="150" y2="158" />
      <line x1="55" y1="115" x2="55" y2="158" />
      <line x1="140" y1="158" x2="165" y2="158" />
      <line x1="45" y1="158" x2="70" y2="158" />
      <line x1="75" y1="115" x2="75" y2="158" />
      <line x1="68" y1="158" x2="85" y2="158" />
      <line
        x1="55"
        y1="115"
        x2="42"
        y2="100"
        style={{ transformOrigin: '55px 115px', animation: 'cat-cow-tail 2s ease-in-out infinite' }}
      />
      <line x1="30" y1="165" x2="175" y2="165" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
