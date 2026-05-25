/* Side-view: on all fours, opposite arm + leg extend */
interface Props {
  color: string
}

export function BirdDogFigure({ color }: Props) {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 220 200" fill="none" {...s}>
      {/* Head */}
      <circle cx="162" cy="88" r="16" />
      <line x1="155" y1="104" x2="148" y2="115" />
      {/* Spine (horizontal) */}
      <line x1="60" y1="115" x2="148" y2="115" />
      {/* Supporting rear arm */}
      <line x1="148" y1="115" x2="148" y2="158" />
      <line x1="138" y1="158" x2="162" y2="158" />
      {/* Extended front arm — animates forward */}
      <line
        x1="60"
        y1="115"
        x2="28"
        y2="110"
        style={{
          transformOrigin: '60px 115px',
          animation: 'bird-dog-arm 1.6s ease-in-out infinite alternate',
        }}
      />
      {/* Supporting front leg */}
      <line x1="80" y1="115" x2="80" y2="158" />
      <line x1="70" y1="158" x2="95" y2="158" />
      {/* Extended rear leg — animates back */}
      <line x1="110" y1="115" x2="145" y2="115" style={{ display: 'none' }} />
      <line
        x1="110"
        y1="115"
        x2="148"
        y2="110"
        style={{
          transformOrigin: '110px 115px',
          animation: 'bird-dog-leg 1.6s ease-in-out infinite alternate',
        }}
      />
      {/* Floor */}
      <line x1="25" y1="163" x2="195" y2="163" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
