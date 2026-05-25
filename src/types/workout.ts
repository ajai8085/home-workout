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
  mobility: '#d4ff3a',
  strength1: '#ff8c3a',
  strength2: '#ff8c3a',
  cardio1: '#ff3a6b',
  cardio2: '#ff3a6b',
  cooldown: '#9b7dff',
}

export const REST_COLOR = '#3da5ff'
export const WARNING_COLOR = '#ff8c3a'
