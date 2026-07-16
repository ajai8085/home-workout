import { useCallback, useEffect, useRef, useState } from 'react'
import type { WorkoutStep } from '@/types/workout'

export type TimerStatus = 'idle' | 'running' | 'paused' | 'complete'

interface Options {
  steps: WorkoutStep[]
  onBeep: (freq: number, durationMs: number) => void
  onTransition: () => void
  onComplete: () => void
}

export function useWorkoutTimer({ steps, onBeep, onTransition, onComplete }: Options) {
  const [stepIndex, setStepIndex] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(steps[0]?.duration ?? 0)
  const [status, setStatus] = useState<TimerStatus>('idle')

  // Mutable refs so the interval callback always sees fresh values
  const stepIndexRef = useRef(0)
  const timeRef = useRef(steps[0]?.duration ?? 0)
  const statusRef = useRef<TimerStatus>('idle')
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Keep callback refs fresh
  const onBeepRef = useRef(onBeep)
  const onTransitionRef = useRef(onTransition)
  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onBeepRef.current = onBeep
  }, [onBeep])
  useEffect(() => {
    onTransitionRef.current = onTransition
  }, [onTransition])
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  const clearTick = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const jumpToStep = useCallback(
    (index: number) => {
      if (index >= steps.length) {
        clearTick()
        statusRef.current = 'complete'
        setStatus('complete')
        onCompleteRef.current()
        return
      }
      stepIndexRef.current = index
      timeRef.current = steps[index].duration
      setStepIndex(index)
      setTimeRemaining(steps[index].duration)
      onTransitionRef.current()
    },
    [steps],
  )

  const startTick = useCallback(() => {
    clearTick()
    intervalRef.current = setInterval(() => {
      if (statusRef.current !== 'running') return
      timeRef.current -= 1
      const t = timeRef.current

      if (t > 0 && t <= 3) {
        onBeepRef.current(900, 80)
      }

      if (t <= 0) {
        jumpToStep(stepIndexRef.current + 1)
      } else {
        setTimeRemaining(t)
      }
    }, 1000)
  }, [jumpToStep])

  const start = useCallback(() => {
    statusRef.current = 'running'
    setStatus('running')
    jumpToStep(0)
    startTick()
  }, [jumpToStep, startTick])

  const pause = useCallback(() => {
    statusRef.current = 'paused'
    setStatus('paused')
    clearTick()
  }, [])

  const resume = useCallback(() => {
    statusRef.current = 'running'
    setStatus('running')
    startTick()
  }, [startTick])

  const skip = useCallback(() => {
    const next = stepIndexRef.current + 1
    jumpToStep(next)
    if (statusRef.current === 'running') startTick()
  }, [jumpToStep, startTick])

  const previous = useCallback(() => {
    // Restart the current step first; go back a step only when already at its start
    const atStepStart = timeRef.current >= steps[stepIndexRef.current].duration
    const target = atStepStart ? Math.max(0, stepIndexRef.current - 1) : stepIndexRef.current
    jumpToStep(target)
    if (statusRef.current === 'running') startTick()
  }, [jumpToStep, startTick, steps])

  const reset = useCallback(() => {
    clearTick()
    stepIndexRef.current = 0
    timeRef.current = steps[0]?.duration ?? 0
    statusRef.current = 'idle'
    setStepIndex(0)
    setTimeRemaining(steps[0]?.duration ?? 0)
    setStatus('idle')
  }, [steps])

  useEffect(() => () => clearTick(), [])

  return { stepIndex, timeRemaining, status, start, pause, resume, skip, previous, reset }
}
