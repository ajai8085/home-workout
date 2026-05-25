/* Front-view: arms and legs open/close like jumping jacks (stepping) */
interface Props {
  color: string
}

export function StepJacksFigure({ color }: Props) {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      {/* Head + torso */}
      <circle cx="100" cy="30" r="18" />
      <line x1="100" y1="48" x2="100" y2="148" />
      {/* Shoulder bar */}
      <line x1="72" y1="78" x2="128" y2="78" />
      {/* Left arm swings up */}
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
      {/* Right arm swings up */}
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
      {/* Hip bar */}
      <line x1="82" y1="148" x2="118" y2="148" />
      {/* Left leg steps out */}
      <g
        style={{
          transformOrigin: '82px 148px',
          animation: 'stepjack-left-leg 0.8s ease-in-out infinite alternate',
        }}
      >
        <line x1="82" y1="148" x2="70" y2="205" />
        <line x1="70" y1="205" x2="65" y2="250" />
      </g>
      {/* Right leg steps out */}
      <g
        style={{
          transformOrigin: '118px 148px',
          animation: 'stepjack-right-leg 0.8s ease-in-out infinite alternate',
        }}
      >
        <line x1="118" y1="148" x2="130" y2="205" />
        <line x1="130" y1="205" x2="135" y2="250" />
      </g>
      {/* Floor */}
      <line x1="30" y1="254" x2="170" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
