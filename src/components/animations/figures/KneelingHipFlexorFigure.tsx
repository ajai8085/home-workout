import React from 'react'

interface Props {
  color: string
}

export const KneelingHipFlexorFigure: React.FC<Props> = ({ color }) => {
  const s = { stroke: color, strokeWidth: 3.5, strokeLinecap: 'round' as const }

  return (
    <svg viewBox="0 0 200 270" fill="none" {...s}>
      <circle cx="108" cy="52" r="17" />
      <line x1="102" y1="69" x2="100" y2="152" />
      <line x1="100" y1="90" x2="80" y2="135" />
      <line x1="100" y1="90" x2="122" y2="135" />
      <line x1="100" y1="152" x2="75" y2="200" />
      <line x1="75" y1="200" x2="68" y2="252" />
      <line x1="58" y1="252" x2="82" y2="252" />
      <line x1="100" y1="152" x2="120" y2="200" />
      <circle cx="120" cy="200" r="5" strokeWidth={2} />
      <line x1="120" y1="200" x2="120" y2="252" />
      <line x1="110" y1="252" x2="135" y2="252" />
      <line x1="30" y1="256" x2="170" y2="256" strokeDasharray="4 4" strokeOpacity={0.3} />
    </svg>
  )
}
