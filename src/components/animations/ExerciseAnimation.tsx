import type { AnimationKey } from '../../types/workout'
import { ArmCirclesFigure } from './figures/ArmCirclesFigure'
import { BirdDogFigure } from './figures/BirdDogFigure'
import { CatCowFigure } from './figures/CatCowFigure'
import { DeepBreathingFigure } from './figures/DeepBreathingFigure'
import { GluteBridgeFigure } from './figures/GluteBridgeFigure'
import { HighKneeMarchFigure } from './figures/HighKneeMarchFigure'
import { HipCirclesFigure } from './figures/HipCirclesFigure'
import { KneelingHipFlexorFigure } from './figures/KneelingHipFlexorFigure'
import { MarchFigure } from './figures/MarchFigure'
import { RestFigure } from './figures/RestFigure'
import { ReverseLungeFigure } from './figures/ReverseLungeFigure'
import { SkaterHopsFigure } from './figures/SkaterHopsFigure'
import { SquatFigure } from './figures/SquatFigure'
import { SquatToReachFigure } from './figures/SquatToReachFigure'
import { StandingForwardFoldFigure } from './figures/StandingForwardFoldFigure'
import { StepJacksFigure } from './figures/StepJacksFigure'
import { WallMountainClimbersFigure } from './figures/WallMountainClimbersFigure'
import { WallPushUpFigure } from './figures/WallPushUpFigure'
import { WorldsGreatestStretchFigure } from './figures/WorldsGreatestStretchFigure'

interface Props {
  animationKey: AnimationKey
  color: string
}

const FIGURE_MAP: Record<AnimationKey, React.ComponentType<{ color: string }>> = {
  march: MarchFigure,
  'cat-cow': CatCowFigure,
  'hip-circles': HipCirclesFigure,
  'glute-bridge': GluteBridgeFigure,
  'worlds-greatest-stretch': WorldsGreatestStretchFigure,
  'arm-circles': ArmCirclesFigure,
  squat: SquatFigure,
  'wall-push-up': WallPushUpFigure,
  'reverse-lunge': ReverseLungeFigure,
  'bird-dog': BirdDogFigure,
  'high-knee-march': HighKneeMarchFigure,
  'wall-mountain-climbers': WallMountainClimbersFigure,
  'skater-hops': SkaterHopsFigure,
  'squat-to-reach': SquatToReachFigure,
  'step-jacks': StepJacksFigure,
  'standing-forward-fold': StandingForwardFoldFigure,
  'kneeling-hip-flexor': KneelingHipFlexorFigure,
  'deep-breathing': DeepBreathingFigure,
  rest: RestFigure,
}

export function ExerciseAnimation({ animationKey, color }: Props) {
  const Figure = FIGURE_MAP[animationKey] ?? RestFigure

  return (
    <div className="flex w-full items-center justify-center" style={{ height: 180 }}>
      <div style={{ height: 180, width: 180 }}>
        <Figure color={color} />
      </div>
    </div>
  )
}
