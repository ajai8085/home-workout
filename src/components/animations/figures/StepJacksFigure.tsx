import React from 'react'

interface Props {
  color: string
}

export const StepJacksFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      <circle cx="100" cy="30" r="18" />
      <line x1="100" y1="48" x2="100" y2="148" />
      <line x1="72" y1="78" x2="128" y2="78" />
      <line
        x1="72"
        y1="78"
        x2="52"
        y2="132"
        style={{
          transformOrigin: '72px 78px',
          animation: 'stepjack-left-arm 0.8s ease-in-out infinite alternate',
        }}
      />
      <line
        x1="128"
        y1="78"
        x2="148"
        y2="132"
        style={{
          transformOrigin: '128px 78px',
          animation: 'stepjack-right-arm 0.8s ease-in-out infinite alternate',
        }}
      />
      <line x1="82" y1="148" x2="118" y2="148" />
      <g
        style={{
          transformOrigin: '82px 148px',
          animation: 'stepjack-left-leg 0.8s ease-in-out infinite alternate',
        }}
      >
        <line x1="82" y1="148" x2="70" y2="205" />
        <line x1="70" y1="205" x2="65" y2="250" />
      </g>
      <g
        style={{
          transformOrigin: '118px 148px',
          animation: 'stepjack-right-leg 0.8s ease-in-out infinite alternate',
        }}
      >
        <line x1="118" y1="148" x2="130" y2="205" />
        <line x1="130" y1="205" x2="135" y2="250" />
      </g>
      <line x1="30" y1="254" x2="170" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
