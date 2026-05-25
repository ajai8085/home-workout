import React from 'react'

interface Props {
  color: string
}

export const ArmCirclesFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      <circle cx="100" cy="30" r="18" />
      <line x1="100" y1="48" x2="100" y2="148" />
      <line x1="72" y1="78" x2="128" y2="78" />
      <line
        x1="72"
        y1="78"
        x2="50"
        y2="132"
        style={{ transformOrigin: '72px 78px', animation: 'arm-circles-left 1.2s linear infinite' }}
      />
      <line
        x1="128"
        y1="78"
        x2="150"
        y2="132"
        style={{
          transformOrigin: '128px 78px',
          animation: 'arm-circles-right 1.2s linear infinite',
        }}
      />
      <line x1="82" y1="148" x2="118" y2="148" />
      <line x1="82" y1="148" x2="75" y2="205" />
      <line x1="75" y1="205" x2="70" y2="250" />
      <line x1="118" y1="148" x2="125" y2="205" />
      <line x1="125" y1="205" x2="130" y2="250" />
      <line x1="30" y1="254" x2="170" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
