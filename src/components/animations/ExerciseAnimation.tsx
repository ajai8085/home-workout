import React from 'react'
import type { AnimationKey } from '@/types/workout'
import { ArmCirclesFigure } from '@/components/animations/figures/ArmCirclesFigure'
import { BirdDogFigure } from '@/components/animations/figures/BirdDogFigure'
import { CatCowFigure } from '@/components/animations/figures/CatCowFigure'
import { DeepBreathingFigure } from '@/components/animations/figures/DeepBreathingFigure'
import { GluteBridgeFigure } from '@/components/animations/figures/GluteBridgeFigure'
import { HighKneeMarchFigure } from '@/components/animations/figures/HighKneeMarchFigure'
import { HipCirclesFigure } from '@/components/animations/figures/HipCirclesFigure'
import { KneelingHipFlexorFigure } from '@/components/animations/figures/KneelingHipFlexorFigure'
import { MarchFigure } from '@/components/animations/figures/MarchFigure'
import { RestFigure } from '@/components/animations/figures/RestFigure'
import { ReverseLungeFigure } from '@/components/animations/figures/ReverseLungeFigure'
import { SkaterHopsFigure } from '@/components/animations/figures/SkaterHopsFigure'
import { SquatFigure } from '@/components/animations/figures/SquatFigure'
import { SquatToReachFigure } from '@/components/animations/figures/SquatToReachFigure'
import { StandingForwardFoldFigure } from '@/components/animations/figures/StandingForwardFoldFigure'
import { StepJacksFigure } from '@/components/animations/figures/StepJacksFigure'
import { WallMountainClimbersFigure } from '@/components/animations/figures/WallMountainClimbersFigure'
import { WallPushUpFigure } from '@/components/animations/figures/WallPushUpFigure'
import { WorldsGreatestStretchFigure } from '@/components/animations/figures/WorldsGreatestStretchFigure'

interface Props {
  animationKey: AnimationKey
  color: string
}

const FIGURE_MAP: Record<AnimationKey, React.FC<{ color: string }>> = {
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

export const ExerciseAnimation: React.FC<Props> = ({ animationKey, color }) => {
  const Figure = FIGURE_MAP[animationKey] ?? RestFigure

  return (
    <div className="flex w-full items-center justify-center" style={{ height: 180 }}>
      <div style={{ height: 180, width: 180 }}>
        <Figure color={color} />
      </div>
    </div>
  )
}
