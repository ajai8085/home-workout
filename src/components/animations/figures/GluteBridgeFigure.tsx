/* Side-view lying on back: hips rise off the floor */
interface Props {
  color: string
}

export function GluteBridgeFigure({ color }: Props) {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 180" fill="none" {...s}>
      {/* Head (left side, lying down) */}
      <circle cx="28" cy="105" r="16" />
      {/* Torso — rotates up from shoulder */}
      <g
        style={{
          transformOrigin: '50px 118px',
          animation: 'glute-bridge-torso 1.4s ease-in-out infinite alternate',
        }}
      >
        <line x1="50" y1="118" x2="108" y2="118" />
      </g>
      {/* Upper arms on floor */}
      <line x1="50" y1="118" x2="50" y2="140" />
      {/* Hips + legs — pivot at feet */}
      <g
        style={{
          transformOrigin: '155px 140px',
          animation: 'glute-bridge-hips 1.4s ease-in-out infinite alternate',
        }}
      >
        <line x1="108" y1="118" x2="155" y2="118" />
        {/* Shins vertical from knees */}
        <line x1="130" y1="118" x2="130" y2="145" />
        <line x1="155" y1="118" x2="155" y2="145" />
      </g>
      {/* Feet flat on floor */}
      <line x1="120" y1="145" x2="165" y2="145" />
      {/* Floor */}
      <line x1="20" y1="150" x2="185" y2="150" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
