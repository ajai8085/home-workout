/* More exaggerated knee lift than regular march */
interface Props {
  color: string
}

export function HighKneeMarchFigure({ color }: Props) {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      {/* Head */}
      <circle cx="122" cy="30" r="17" />
      {/* Neck + torso */}
      <line x1="115" y1="47" x2="100" y2="148" />
      {/* Back arm (pumping hard) */}
      <line
        x1="100"
        y1="80"
        x2="72"
        y2="115"
        style={{
          transformOrigin: '100px 80px',
          animation: 'march-back-arm 0.5s ease-in-out infinite alternate',
        }}
      />
      {/* Front arm (pumping forward) */}
      <line
        x1="100"
        y1="80"
        x2="128"
        y2="112"
        style={{
          transformOrigin: '100px 80px',
          animation: 'march-front-arm 0.5s ease-in-out infinite alternate',
        }}
      />
      {/* Back leg */}
      <g
        style={{
          transformOrigin: '100px 148px',
          animation: 'march-back-thigh 0.5s ease-in-out infinite alternate',
        }}
      >
        <line x1="100" y1="148" x2="78" y2="205" />
        <line
          x1="78"
          y1="205"
          x2="66"
          y2="250"
          style={{
            transformOrigin: '78px 205px',
            animation: 'march-back-shin 0.5s ease-in-out infinite alternate',
          }}
        />
      </g>
      {/* Front leg — deep knee drive (faster, higher) */}
      <g
        style={{
          transformOrigin: '100px 148px',
          animation: 'march-front-thigh 0.5s ease-in-out infinite alternate',
        }}
      >
        <line x1="100" y1="148" x2="120" y2="195" />
        <line
          x1="120"
          y1="195"
          x2="128"
          y2="240"
          style={{
            transformOrigin: '120px 195px',
            animation: 'march-front-shin 0.5s ease-in-out infinite alternate',
          }}
        />
      </g>
      {/* Floor */}
      <line x1="30" y1="254" x2="175" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
