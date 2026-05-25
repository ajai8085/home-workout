import React, { useState } from 'react'
import { CompletionScreen } from './components/workout/CompletionScreen'
import { StartOverlay } from './components/workout/StartOverlay'
import { WorkoutScreen } from './components/workout/WorkoutScreen'
import { useAudio } from './hooks/useAudio'
import './App.css'

type AppScreen = 'start' | 'workout' | 'complete'

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>('start')
  const audio = useAudio()

  const handleStart = () => {
    audio.initAudio()
    setScreen('workout')
  }

  const handleComplete = () => {
    audio.playCompletion()
    setScreen('complete')
  }

  const handleReset = () => setScreen('start')

  return (
    <>
      {screen === 'start' && <StartOverlay onStart={handleStart} />}
      {screen === 'workout' && (
        <WorkoutScreen audio={audio} onComplete={handleComplete} onReset={handleReset} />
      )}
      {screen === 'complete' && <CompletionScreen onReset={handleReset} />}
    </>
  )
}

export default App
