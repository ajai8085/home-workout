import React, { useEffect, useRef } from 'react'
import { ExerciseAnimation } from '@/components/animations/ExerciseAnimation'
import { TOTAL_DURATION, WORKOUT_STEPS } from '@/data/workoutData'
import type { AudioControls } from '@/hooks/useAudio'
import { useWakeLock } from '@/hooks/useWakeLock'
import { useWorkoutTimer } from '@/hooks/useWorkoutTimer'
import { PHASE_COLORS, REST_COLOR } from '@/types/workout'
import { CountdownClock } from '@/components/workout/CountdownClock'
import { ExerciseName } from '@/components/workout/ExerciseName'
import { FormHint } from '@/components/workout/FormHint'
import { PhaseTag } from '@/components/workout/PhaseTag'
import { ProgressBar } from '@/components/workout/ProgressBar'
import { SequenceList } from '@/components/workout/SequenceList'
import { StepCounter } from '@/components/workout/StepCounter'
import { UpNext } from '@/components/workout/UpNext'
import { WorkoutControls } from '@/components/workout/WorkoutControls'

interface Props {
  audio: AudioControls
  onComplete: () => void
  onReset: () => void
}

const formatTime = (seconds: number): string => {
  const clamped = Math.max(0, Math.floor(seconds))
  const m = Math.floor(clamped / 60)
  const s = clamped % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

export const WorkoutScreen: React.FC<Props> = ({ audio, onComplete, onReset }) => {
  const wakeLock = useWakeLock()
  const hasStarted = useRef(false)

  const timer = useWorkoutTimer({
    steps: WORKOUT_STEPS,
    onBeep: audio.playBeep,
    onTransition: audio.playTransition,
    onComplete,
  })

  useEffect(() => {
    if (hasStarted.current) return
    hasStarted.current = true
    wakeLock.request()
    timer.start()
    return () => {
      wakeLock.release()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const currentStep = WORKOUT_STEPS[timer.stepIndex]
  const nextStep = WORKOUT_STEPS[timer.stepIndex + 1]
  const isRest = currentStep.type === 'rest'
  const isWarning = !isRest && timer.timeRemaining <= 3 && timer.timeRemaining > 0
  const phaseColor = isRest ? REST_COLOR : PHASE_COLORS[currentStep.phase]

  const elapsed =
    WORKOUT_STEPS.slice(0, timer.stepIndex).reduce((s, st) => s + st.duration, 0) +
    (currentStep.duration - timer.timeRemaining)
  const progressPct = (elapsed / TOTAL_DURATION) * 100

  return (
    <div
      className="mx-auto flex min-h-dvh w-full max-w-[30rem] flex-col md:max-w-xl"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="pointer-events-none fixed inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 80% 45% at 50% 18%, color-mix(in srgb, ${phaseColor} 11%, transparent) 0%, transparent 72%)`,
        }}
      />

      <div className="relative flex flex-col gap-4 px-4 pt-4 pb-8 sm:gap-5 sm:px-6 sm:pt-6">
        <div className="flex flex-col gap-1.5">
          <ProgressBar progress={progressPct} color={phaseColor} />
          <div className="flex items-center justify-between font-mono text-xs text-[var(--color-muted)] tabular-nums">
            <span style={{ color: phaseColor }}>{formatTime(elapsed)}</span>
            <span>{formatTime(TOTAL_DURATION - elapsed)} left</span>
            <span>{formatTime(TOTAL_DURATION)}</span>
          </div>
        </div>

        <div className="flex justify-center">
          <PhaseTag label={currentStep.phaseLabel} color={phaseColor} />
        </div>

        <ExerciseAnimation animationKey={currentStep.animation} color={phaseColor} />

        <ExerciseName name={currentStep.exercise} color={phaseColor} />

        <FormHint hint={currentStep.hint} />

        <div className="flex flex-col items-center gap-1">
          <CountdownClock
            seconds={timer.timeRemaining}
            isWarning={isWarning}
            isRest={isRest}
            phaseColor={phaseColor}
          />
          <StepCounter current={timer.stepIndex + 1} total={WORKOUT_STEPS.length} />
        </div>

        <div className="flex justify-center">
          <UpNext step={nextStep} />
        </div>

        <div className="mt-2 flex justify-center">
          <WorkoutControls
            status={timer.status}
            phaseColor={phaseColor}
            onPause={timer.pause}
            onResume={timer.resume}
            onSkip={timer.skip}
            onReset={onReset}
          />
        </div>

        <SequenceList steps={WORKOUT_STEPS} currentIndex={timer.stepIndex} />
      </div>
    </div>
  )
}
