import React from 'react'

interface Props {
  name: string
  color: string
}

export const ExerciseName: React.FC<Props> = ({ name, color }) => {
  return (
    <h1
      className="font-display px-4 text-center text-[clamp(1.75rem,7.5vw,3.25rem)] leading-none font-bold tracking-tight text-balance uppercase"
      style={{ color }}
    >
      {name}
    </h1>
  )
}
