/* Front-view: hips translate in a slow circle */
interface Props {
  color: string
}

export function HipCirclesFigure({ color }: Props) {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      {/* Static upper body */}
      <circle cx="100" cy="30" r="18" />
      <line x1="100" y1="48" x2="100" y2="95" />
      {/* Shoulders */}
      <line x1="72" y1="78" x2="128" y2="78" />
      <line x1="72" y1="78" x2="55" y2="132" />
      <line x1="128" y1="78" x2="145" y2="132" />

      {/* Animated hip section + legs */}
      <g style={{ animation: 'hip-circles-hips 1.4s ease-in-out infinite' }}>
        <line x1="100" y1="95" x2="100" y2="148" />
        <line x1="82" y1="148" x2="118" y2="148" />
        {/* Left leg */}
        <line x1="82" y1="148" x2="75" y2="205" />
        <line x1="75" y1="205" x2="70" y2="250" />
        {/* Right leg */}
        <line x1="118" y1="148" x2="125" y2="205" />
        <line x1="125" y1="205" x2="130" y2="250" />
      </g>
      {/* Floor */}
      <line x1="30" y1="254" x2="170" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
