import React from 'react'

interface Props {
  color: string
}

export const SkaterHopsFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 220 270" fill="none" {...s}>
      {/* Whole skater bounds side to side with a hop */}
      <g
        style={{
          transformOrigin: '110px 240px',
          animation: 'skater-bound 1.1s ease-in-out infinite',
        }}
      >
        <circle cx="110" cy="32" r="17" />
        <line x1="110" y1="49" x2="106" y2="150" />
        <line x1="86" y1="80" x2="134" y2="80" />
        {/* Lead arm crosses the body, trail arm drives back — speed-skater swing */}
        <line x1="86" y1="80" x2="120" y2="128" />
        <line x1="134" y1="80" x2="158" y2="56" />
        <line x1="92" y1="150" x2="122" y2="150" />

        {/* Support leg — planted, bent, stays connected */}
        <line x1="106" y1="150" x2="101" y2="204" />
        <line x1="101" y1="204" x2="97" y2="250" />

        {/* Trail leg — single path sweeping behind the stance */}
        <path
          d="M 122 150 L 138 196 L 120 228"
          fill="none"
          style={{ animation: 'skater-trail-leg 1.1s ease-in-out infinite' }}
        />
      </g>

      <line x1="20" y1="254" x2="200" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
