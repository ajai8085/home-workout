import React from 'react'

interface Props {
  name: string
  color: string
}

export const ExerciseName: React.FC<Props> = ({ name, color }) => {
  return (
    <h1
      className="px-4 text-center font-display text-4xl font-bold uppercase leading-none tracking-tight"
      style={{ color }}
    >
      {name}
    </h1>
  )
}
