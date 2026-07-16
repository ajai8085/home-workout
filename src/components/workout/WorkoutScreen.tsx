import React, { useEffect, useRef } from 'react'
import { ExerciseAnimation } from '@/components/animations/ExerciseAnimation'
import { TOTAL_DURATION, WORKOUT_STEPS } from '@/data/workoutData'
import type { AudioControls } from '@/hooks/useAudio'
import type { WorkoutSettings } from '@/hooks/useSettings'
import { useWakeLock } from '@/hooks/useWakeLock'
import { useWorkoutTimer } from '@/hooks/useWorkoutTimer'
import { PHASE_COLORS, REST_COLOR } from '@/types/workout'
import { speak, stopSpeaking } from '@/utils/speech'
import { vibrate } from '@/utils/haptics'
import { CountdownClock } from '@/components/workout/CountdownClock'
import { ExerciseName } from '@/components/workout/ExerciseName'
import { FormHint } from '@/components/workout/FormHint'
import { PhaseTag } from '@/components/workout/PhaseTag'
import { ProgressRing } from '@/components/workout/ProgressRing'
import { SegmentedProgressBar } from '@/components/workout/SegmentedProgressBar'
import type { ProgressSegment } from '@/components/workout/SegmentedProgressBar'
import { SequenceList } from '@/components/workout/SequenceList'
import { StepCounter } from '@/components/workout/StepCounter'
import { UpNext } from '@/components/workout/UpNext'
import { WorkoutControls } from '@/components/workout/WorkoutControls'

interface Props {
  audio: AudioControls
  settings: WorkoutSettings
  onComplete: () => void
  onReset: () => void
}

const formatTime = (seconds: number): string => {
  const clamped = Math.max(0, Math.floor(seconds))
  const m = Math.floor(clamped / 60)
  const s = clamped % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

// One progress segment per contiguous phase block (mobility, strength ×2, cardio ×2, cooldown)
const PROGRESS_SEGMENTS: ProgressSegment[] = WORKOUT_STEPS.reduce<ProgressSegment[]>(
  (segments, step, i) => {
    if (i === 0 || step.phase !== WORKOUT_STEPS[i - 1].phase) {
      segments.push({ color: PHASE_COLORS[step.phase], duration: step.duration })
    } else {
      segments[segments.length - 1].duration += step.duration
    }
    return segments
  },
  [],
)

export const WorkoutScreen: React.FC<Props> = ({ audio, settings, onComplete, onReset }) => {
  const wakeLock = useWakeLock()
  const hasStarted = useRef(false)

  const settingsRef = useRef(settings)
  useEffect(() => {
    settingsRef.current = settings
  }, [settings])

  const timer = useWorkoutTimer({
    steps: WORKOUT_STEPS,
    onBeep: (freq, durationMs) => {
      if (settingsRef.current.sound) audio.playBeep(freq, durationMs)
      if (settingsRef.current.vibration) vibrate(45)
    },
    onTransition: () => {
      if (settingsRef.current.sound) audio.playTransition()
      if (settingsRef.current.vibration) vibrate([90, 40, 90])
    },
    onComplete,
  })

  useEffect(() => {
    if (hasStarted.current) return
    hasStarted.current = true
    wakeLock.request()
    timer.start()
    return () => {
      wakeLock.release()
      stopSpeaking()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Voice coach: announce each new step (skip the first — the get-ready screen covered it)
  const lastAnnouncedRef = useRef(0)
  useEffect(() => {
    if (timer.stepIndex === lastAnnouncedRef.current) return
    lastAnnouncedRef.current = timer.stepIndex
    if (settingsRef.current.voice) speak(WORKOUT_STEPS[timer.stepIndex].exercise)
  }, [timer.stepIndex])

  const currentStep = WORKOUT_STEPS[timer.stepIndex]
  const nextStep = WORKOUT_STEPS[timer.stepIndex + 1]
  const isRest = currentStep.type === 'rest'
  const isPaused = timer.status === 'paused'
  const isWarning = !isRest && !isPaused && timer.timeRemaining <= 3 && timer.timeRemaining > 0
  const phaseColor = isRest ? REST_COLOR : PHASE_COLORS[currentStep.phase]

  const elapsed =
    WORKOUT_STEPS.slice(0, timer.stepIndex).reduce((s, st) => s + st.duration, 0) +
    (currentStep.duration - timer.timeRemaining)
  const stepProgress = (currentStep.duration - timer.timeRemaining) / currentStep.duration

  return (
    <div
      className="mx-auto flex min-h-dvh w-full max-w-[30rem] flex-col md:max-w-xl"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="pointer-events-none fixed inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 80% 45% at 50% 18%, color-mix(in srgb, ${phaseColor} 12%, transparent) 0%, transparent 72%)`,
        }}
      />

      <div className="relative flex flex-col gap-3 px-4 pt-[max(4rem,env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))] sm:gap-5 sm:px-6">
        <div className="flex flex-col gap-1.5">
          <SegmentedProgressBar segments={PROGRESS_SEGMENTS} elapsed={elapsed} />
          <div className="flex items-center justify-between font-mono text-xs text-[var(--color-muted)] tabular-nums">
            <span style={{ color: phaseColor }}>{formatTime(elapsed)}</span>
            <span>{formatTime(TOTAL_DURATION - elapsed)} left</span>
            <span>{formatTime(TOTAL_DURATION)}</span>
          </div>
        </div>

        <div className="flex justify-center">
          <PhaseTag label={currentStep.phaseLabel} color={phaseColor} />
        </div>

        <div key={currentStep.id} style={{ animation: 'step-in 0.35s ease-out' }}>
          <ExerciseAnimation animationKey={currentStep.animation} color={phaseColor} />
          <div className="mt-2 flex flex-col gap-2">
            <ExerciseName name={currentStep.exercise} color={phaseColor} />
            <div className="flex justify-center">
              <FormHint hint={currentStep.hint} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <ProgressRing progress={stepProgress} color={phaseColor}>
            <CountdownClock
              seconds={timer.timeRemaining}
              isWarning={isWarning}
              isRest={isRest}
              phaseColor={phaseColor}
            />
            {isPaused && (
              <span className="font-mono text-xs tracking-widest text-[var(--color-warn)] uppercase">
                Paused
              </span>
            )}
          </ProgressRing>
          <StepCounter current={timer.stepIndex + 1} total={WORKOUT_STEPS.length} />
        </div>

        <div className="flex justify-center">
          <UpNext step={nextStep} />
        </div>

        <div className="mt-1 flex justify-center">
          <WorkoutControls
            status={timer.status}
            phaseColor={phaseColor}
            onPause={timer.pause}
            onResume={timer.resume}
            onSkip={timer.skip}
            onPrevious={timer.previous}
            onReset={onReset}
          />
        </div>

        <SequenceList steps={WORKOUT_STEPS} currentIndex={timer.stepIndex} />
      </div>
    </div>
  )
}
