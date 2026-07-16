import React, { useEffect, useRef, useState } from 'react'
import { AuroraBackground } from '@/components/workout/AuroraBackground'

const COUNTDOWN_SECONDS = 5

interface Props {
  firstExercise: string
  onBeep: () => void
  onAnnounce: (text: string) => void
  onDone: () => void
}

export const GetReadyScreen: React.FC<Props> = ({ firstExercise, onBeep, onAnnounce, onDone }) => {
  const [count, setCount] = useState(COUNTDOWN_SECONDS)
  const startedRef = useRef(false)

  const onBeepRef = useRef(onBeep)
  const onAnnounceRef = useRef(onAnnounce)
  const onDoneRef = useRef(onDone)
  useEffect(() => {
    onBeepRef.current = onBeep
    onAnnounceRef.current = onAnnounce
    onDoneRef.current = onDone
  })

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true

    onAnnounceRef.current(`Get ready. First up: ${firstExercise}`)

    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev - 1
        if (next <= 0) {
          clearInterval(interval)
          onDoneRef.current()
          return 0
        }
        if (next <= 3) onBeepRef.current()
        return next
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [firstExercise])

  return (
    <div
      className="relative flex min-h-dvh w-full flex-col items-center justify-center gap-6 px-6"
      style={{ background: 'var(--color-bg)' }}
    >
      <AuroraBackground colorA="var(--color-accent)" colorB="var(--color-cardio)" />

      <p className="relative font-mono text-sm tracking-widest text-[var(--color-muted)] uppercase">
        Get Ready
      </p>

      <div
        key={count}
        className="text-gradient font-display relative text-[clamp(8rem,42vw,14rem)] leading-none font-bold tabular-nums select-none"
        style={{ animation: 'ready-pop 0.9s ease-out' }}
      >
        {count}
      </div>

      <div className="relative flex flex-col items-center gap-1 text-center">
        <p className="font-mono text-xs tracking-widest text-[var(--color-muted)] uppercase">
          First up
        </p>
        <p className="font-display text-3xl font-bold tracking-wide text-[var(--color-text)] uppercase">
          {firstExercise}
        </p>
      </div>
    </div>
  )
}
