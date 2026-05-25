import React from 'react'
import { REST_COLOR, WARNING_COLOR } from '@/types/workout'

interface Props {
  seconds: number
  isWarning: boolean
  isRest: boolean
  phaseColor: string
}

export const CountdownClock: React.FC<Props> = ({ seconds, isWarning, isRest, phaseColor }) => {
  const display = String(seconds).padStart(2, '0')
  const color = isWarning ? WARNING_COLOR : isRest ? REST_COLOR : phaseColor

  return (
    <div
      className="font-display text-[96px] leading-none font-bold tabular-nums select-none"
      style={{
        color,
        animation: isWarning ? 'clock-pulse 0.8s ease-in-out infinite' : undefined,
        textShadow: `0 0 40px ${color}50`,
      }}
    >
      {display}
    </div>
  )
}
