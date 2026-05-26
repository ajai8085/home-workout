export type PhaseType = 'mobility' | 'strength1' | 'strength2' | 'cardio1' | 'cardio2' | 'cooldown'

export type StepType = 'work' | 'rest'

export type AnimationKey =
  | 'march'
  | 'cat-cow'
  | 'hip-circles'
  | 'glute-bridge'
  | 'worlds-greatest-stretch'
  | 'arm-circles'
  | 'squat'
  | 'wall-push-up'
  | 'reverse-lunge'
  | 'bird-dog'
  | 'high-knee-march'
  | 'wall-mountain-climbers'
  | 'skater-hops'
  | 'squat-to-reach'
  | 'step-jacks'
  | 'standing-forward-fold'
  | 'kneeling-hip-flexor'
  | 'deep-breathing'
  | 'rest'

export interface WorkoutStep {
  id: number
  exercise: string
  hint: string
  duration: number
  phase: PhaseType
  phaseLabel: string
  type: StepType
  animation: AnimationKey
}

export const PHASE_COLORS: Record<PhaseType, string> = {
  mobility: 'var(--color-lime)',
  strength1: 'var(--color-orange)',
  strength2: 'var(--color-orange)',
  cardio1: 'var(--color-pink)',
  cardio2: 'var(--color-pink)',
  cooldown: 'var(--color-purple)',
}

export const REST_COLOR = 'var(--color-blue)'
export const WARNING_COLOR = 'var(--color-warn)'
