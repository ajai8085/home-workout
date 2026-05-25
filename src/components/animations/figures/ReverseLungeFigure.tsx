/* Side-view: rear leg steps back into lunge */
interface Props {
  color: string
}

export function ReverseLungeFigure({ color }: Props) {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      {/* Head */}
      <circle cx="108" cy="50" r="17" />
      {/* Torso (upright) */}
      <line x1="102" y1="67" x2="100" y2="148" />
      {/* Arms relaxed at sides */}
      <line x1="100" y1="85" x2="82" y2="132" />
      <line x1="100" y1="85" x2="118" y2="132" />
      {/* Front leg (static, bent at knee — front in lunge) */}
      <line x1="100" y1="148" x2="85" y2="205" />
      <line x1="85" y1="205" x2="80" y2="250" />
      {/* Front foot */}
      <line x1="70" y1="250" x2="95" y2="250" />
      {/* Rear leg — steps back and knee drops */}
      <g
        style={{
          transformOrigin: '100px 148px',
          animation: 'reverse-lunge-back-leg 1.4s ease-in-out infinite alternate',
        }}
      >
        <line x1="100" y1="148" x2="118" y2="198" />
        <line
          x1="118"
          y1="198"
          x2="122"
          y2="248"
          style={{
            transformOrigin: '118px 198px',
            animation: 'reverse-lunge-back-shin 1.4s ease-in-out infinite alternate',
          }}
        />
      </g>
      {/* Floor */}
      <line x1="30" y1="254" x2="175" y2="254" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
