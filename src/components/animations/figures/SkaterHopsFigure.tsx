/* Front-view: body leans side-to-side, trail leg crosses behind */
interface Props {
  color: string
}

export function SkaterHopsFigure({ color }: Props) {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      <g style={{ animation: 'skater-body-lean 0.9s ease-in-out infinite alternate' }}>
        {/* Head */}
        <circle cx="100" cy="30" r="18" />
        {/* Torso */}
        <line x1="100" y1="48" x2="100" y2="148" />
        {/* Shoulders */}
        <line x1="72" y1="78" x2="128" y2="78" />
        {/* Left arm out for balance */}
        <line x1="72" y1="78" x2="40" y2="118" />
        {/* Right arm in */}
        <line x1="128" y1="78" x2="148" y2="118" />
        {/* Hip bar */}
        <line x1="82" y1="148" x2="118" y2="148" />
        {/* Standing leg (left) */}
        <line x1="82" y1="148" x2="78" y2="205" />
        <line x1="78" y1="205" x2="72" y2="250" />
        {/* Trail leg crosses behind (right) */}
        <line
          x1="118"
          y1="148"
          x2="92"
          y2="200"
          style={{
            transformOrigin: '118px 148px',
            animation: 'skater-trail-leg 0.9s ease-in-out infinite alternate',
          }}
        />
        <line x1="92" y1="200" x2="82" y2="245" />
      </g>
      {/* Floor */}
      <line x1="30" y1="254" x2="170" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
