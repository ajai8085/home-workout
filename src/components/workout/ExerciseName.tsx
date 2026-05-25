import React from 'react'

interface Props {
  name: string
  color: string
}

export const ExerciseName: React.FC<Props> = ({ name, color }) => {
  return (
    <h1
      className="font-display px-4 text-center text-4xl leading-none font-bold tracking-tight uppercase"
      style={{ color }}
    >
      {name}
    </h1>
  )
}
