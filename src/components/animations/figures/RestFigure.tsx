/* Front-view: relaxed standing with a gentle sway */
interface Props {
  color: string
}

export function RestFigure({ color }: Props) {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const, strokeOpacity: 0.7 }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      <g
        style={{
          transformOrigin: '100px 148px',
          animation: 'rest-sway 3s ease-in-out infinite alternate',
        }}
      >
        {/* Head */}
        <circle cx="100" cy="30" r="18" />
        {/* Torso */}
        <line x1="100" y1="48" x2="100" y2="148" />
        {/* Shoulders */}
        <line x1="72" y1="78" x2="128" y2="78" />
        {/* Arms relaxed at sides */}
        <line x1="72" y1="78" x2="62" y2="138" />
        <line x1="128" y1="78" x2="138" y2="138" />
        {/* Hip bar */}
        <line x1="82" y1="148" x2="118" y2="148" />
        {/* Left leg */}
        <line x1="82" y1="148" x2="77" y2="205" />
        <line x1="77" y1="205" x2="72" y2="250" />
        {/* Right leg */}
        <line x1="118" y1="148" x2="123" y2="205" />
        <line x1="123" y1="205" x2="128" y2="250" />
      </g>
      {/* Floor */}
      <line x1="30" y1="254" x2="170" y2="254" strokeDasharray="4 4" strokeOpacity={0.2} />
    </svg>
  )
}
