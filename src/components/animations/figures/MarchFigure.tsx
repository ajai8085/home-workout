import React from 'react'

interface Props {
  color: string
}

export const MarchFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      <circle cx="122" cy="30" r="17" />
      <line x1="115" y1="47" x2="100" y2="148" />
      <line
        x1="100"
        y1="80"
        x2="78"
        y2="128"
        style={{
          transformOrigin: '100px 80px',
          animation: 'march-back-arm 0.7s ease-in-out infinite alternate',
        }}
      />
      <line
        x1="100"
        y1="80"
        x2="125"
        y2="120"
        style={{
          transformOrigin: '100px 80px',
          animation: 'march-front-arm 0.7s ease-in-out infinite alternate',
        }}
      />
      <g
        style={{
          transformOrigin: '100px 148px',
          animation: 'march-back-thigh 0.7s ease-in-out infinite alternate',
        }}
      >
        <line x1="100" y1="148" x2="80" y2="205" />
        <line
          x1="80"
          y1="205"
          x2="68"
          y2="250"
          style={{
            transformOrigin: '80px 205px',
            animation: 'march-back-shin 0.7s ease-in-out infinite alternate',
          }}
        />
      </g>
      <g
        style={{
          transformOrigin: '100px 148px',
          animation: 'march-front-thigh 0.7s ease-in-out infinite alternate',
        }}
      >
        <line x1="100" y1="148" x2="118" y2="200" />
        <line
          x1="118"
          y1="200"
          x2="132"
          y2="248"
          style={{
            transformOrigin: '118px 200px',
            animation: 'march-front-shin 0.7s ease-in-out infinite alternate',
          }}
        />
      </g>
      <line x1="30" y1="254" x2="175" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
