/* Front-view: body lowers into squat, then rises with arms overhead */
interface Props {
  color: string
}

export function SquatToReachFigure({ color }: Props) {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 280" fill="none" {...s}>
      {/* Head */}
      <circle cx="100" cy="30" r="18" />

      {/* Body translates down into squat, then up */}
      <g style={{ animation: 'str-body 1.8s ease-in-out infinite' }}>
        {/* Torso */}
        <line x1="100" y1="48" x2="100" y2="148" />
        {/* Hip bar */}
        <line x1="82" y1="148" x2="118" y2="148" />

        {/* Arms — rotate from overhead down-to-sides at squat bottom */}
        <g
          style={{
            transformOrigin: '72px 78px',
            animation: 'str-arms 1.8s ease-in-out infinite',
          }}
        >
          <line x1="72" y1="78" x2="50" y2="32" />
        </g>
        <g
          style={{
            transformOrigin: '128px 78px',
            animation: 'str-arms 1.8s ease-in-out infinite',
          }}
        >
          <line x1="128" y1="78" x2="150" y2="32" />
        </g>
        {/* Shoulder bar */}
        <line x1="72" y1="78" x2="128" y2="78" />

        {/* Left leg */}
        <line x1="82" y1="148" x2="65" y2="208" />
        <line x1="65" y1="208" x2="68" y2="258" />
        {/* Right leg */}
        <line x1="118" y1="148" x2="135" y2="208" />
        <line x1="135" y1="208" x2="132" y2="258" />
      </g>

      {/* Floor */}
      <line x1="30" y1="262" x2="170" y2="262" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
