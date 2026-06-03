import React from 'react'

interface Props {
  color: string
}

export const CatCowFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 210 200" fill="none" {...s}>
      {/* Spine arches (cat) and rounds down (cow); endpoints stay fixed */}
      <path
        d="M 50 110 C 85 86 125 86 160 110"
        fill="none"
        style={{ animation: 'cat-cow-spine 2s ease-in-out infinite' }}
      />

      {/* Back leg from the hips (spine's left endpoint) */}
      <line x1="50" y1="110" x2="48" y2="158" />
      <line x1="38" y1="158" x2="60" y2="158" />

      {/* Front leg from the shoulders (spine's right endpoint) */}
      <line x1="160" y1="110" x2="160" y2="158" />
      <line x1="150" y1="158" x2="172" y2="158" />

      {/* Neck + head, nodding from the shoulders */}
      <g
        style={{
          transformOrigin: '160px 110px',
          animation: 'cat-cow-head 2s ease-in-out infinite',
        }}
      >
        <line x1="160" y1="110" x2="174" y2="98" />
        <circle cx="182" cy="92" r="14" />
      </g>

      {/* Tail from the hips */}
      <line
        x1="50"
        y1="110"
        x2="37"
        y2="94"
        style={{ transformOrigin: '50px 110px', animation: 'cat-cow-tail 2s ease-in-out infinite' }}
      />

      <line x1="26" y1="162" x2="186" y2="162" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
