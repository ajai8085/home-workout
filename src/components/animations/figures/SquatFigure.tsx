/* Front-view: body lowers and knees splay */
interface Props {
  color: string
}

export function SquatFigure({ color }: Props) {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      {/* Static head */}
      <circle cx="100" cy="30" r="18" />

      {/* Body group that translates down */}
      <g style={{ animation: 'squat-body-down 1.2s ease-in-out infinite alternate' }}>
        {/* Torso */}
        <line x1="100" y1="48" x2="100" y2="148" />
        {/* Shoulders + arms out wide */}
        <line x1="72" y1="78" x2="128" y2="78" />
        <line x1="72" y1="78" x2="52" y2="125" />
        <line x1="128" y1="78" x2="148" y2="125" />
        {/* Hip bar */}
        <line x1="82" y1="148" x2="118" y2="148" />
        {/* Left thigh animates out */}
        <line
          x1="82"
          y1="148"
          x2="62"
          y2="208"
          style={{
            transformOrigin: '82px 148px',
            animation: 'squat-left-thigh 1.2s ease-in-out infinite alternate',
          }}
        />
        {/* Left shin + foot */}
        <line x1="62" y1="208" x2="70" y2="250" />
        {/* Right thigh animates out */}
        <line
          x1="118"
          y1="148"
          x2="138"
          y2="208"
          style={{
            transformOrigin: '118px 148px',
            animation: 'squat-right-thigh 1.2s ease-in-out infinite alternate',
          }}
        />
        {/* Right shin + foot */}
        <line x1="138" y1="208" x2="130" y2="250" />
      </g>

      {/* Floor */}
      <line x1="30" y1="254" x2="170" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
