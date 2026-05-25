import React from 'react'

interface Props {
  color: string
}

export const StandingForwardFoldFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      <line x1="100" y1="148" x2="88" y2="205" />
      <line x1="88" y1="205" x2="82" y2="250" />
      <line x1="100" y1="148" x2="112" y2="205" />
      <line x1="112" y1="205" x2="118" y2="250" />
      <line x1="72" y1="250" x2="100" y2="250" />
      <line x1="110" y1="250" x2="132" y2="250" />
      <g
        style={{
          transformOrigin: '100px 148px',
          animation: 'sff-torso 2s ease-in-out infinite alternate',
        }}
      >
        <line x1="100" y1="148" x2="100" y2="58" />
        <line
          x1="100"
          y1="88"
          x2="82"
          y2="132"
          style={{
            transformOrigin: '100px 88px',
            animation: 'sff-arms 2s ease-in-out infinite alternate',
          }}
        />
        <line
          x1="100"
          y1="88"
          x2="118"
          y2="132"
          style={{
            transformOrigin: '100px 88px',
            animation: 'sff-arms 2s ease-in-out infinite alternate',
          }}
        />
      </g>
      <circle
        cx="100"
        cy="42"
        r="16"
        style={{ animation: 'sff-head 2s ease-in-out infinite alternate' }}
      />
      <line x1="30" y1="254" x2="170" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
