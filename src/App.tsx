import React, { useState } from 'react'
import { CompletionScreen } from '@/components/workout/CompletionScreen'
import { GetReadyScreen } from '@/components/workout/GetReadyScreen'
import { SettingsSheet } from '@/components/workout/SettingsSheet'
import { StartOverlay } from '@/components/workout/StartOverlay'
import { ThemeToggle } from '@/components/workout/ThemeToggle'
import { WorkoutScreen } from '@/components/workout/WorkoutScreen'
import { PALETTES } from '@/data/themes'
import { TOTAL_DURATION, WORKOUT_STEPS } from '@/data/workoutData'
import { useAudio } from '@/hooks/useAudio'
import { useSettings } from '@/hooks/useSettings'
import { useTheme } from '@/hooks/useTheme'
import { useWorkoutHistory } from '@/hooks/useWorkoutHistory'
import { speak } from '@/utils/speech'
import { vibrate } from '@/utils/haptics'
import './App.css'

type AppScreen = 'start' | 'ready' | 'workout' | 'complete'

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>('start')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const audio = useAudio()
  const { mode, palette, toggleMode, setPalette } = useTheme()
  const { settings, toggleSetting } = useSettings()
  const { stats, recordSession } = useWorkoutHistory()

  const handleStart = () => {
    audio.initAudio()
    setScreen('ready')
  }

  const handleReadyDone = () => setScreen('workout')

  const handleComplete = () => {
    if (settings.sound) audio.playCompletion()
    if (settings.vibration) vibrate([120, 60, 120, 60, 240])
    recordSession(TOTAL_DURATION)
    setScreen('complete')
  }

  const handleReset = () => setScreen('start')

  const handleShare = async () => {
    const streakLine = stats.currentStreak > 1 ? ` That's a ${stats.currentStreak}-day streak!` : ''
    const text = `Just finished a 20-minute home workout — mobility, strength, cardio and cool-down, no equipment. 💪${streakLine}`
    try {
      if (navigator.share) {
        await navigator.share({ text })
      } else {
        await navigator.clipboard.writeText(text)
      }
    } catch {
      /* user cancelled or share unavailable — nothing to do */
    }
  }

  return (
    <>
      <ThemeToggle mode={mode} onToggle={toggleMode} onOpenSettings={() => setSettingsOpen(true)} />
      <SettingsSheet
        open={settingsOpen}
        palettes={PALETTES}
        activePalette={palette}
        mode={mode}
        settings={settings}
        onSelectPalette={setPalette}
        onToggleMode={toggleMode}
        onToggleSetting={toggleSetting}
        onClose={() => setSettingsOpen(false)}
      />

      {screen === 'start' && <StartOverlay stats={stats} onStart={handleStart} />}
      {screen === 'ready' && (
        <GetReadyScreen
          firstExercise={WORKOUT_STEPS[0].exercise}
          onBeep={() => {
            if (settings.sound) audio.playBeep(900, 80)
            if (settings.vibration) vibrate(45)
          }}
          onAnnounce={(text) => {
            if (settings.voice) speak(text)
          }}
          onDone={handleReadyDone}
        />
      )}
      {screen === 'workout' && (
        <WorkoutScreen
          audio={audio}
          settings={settings}
          onComplete={handleComplete}
          onReset={handleReset}
        />
      )}
      {screen === 'complete' && (
        <CompletionScreen
          stats={stats}
          totalSteps={WORKOUT_STEPS.length}
          onReset={handleReset}
          onShare={handleShare}
        />
      )}
    </>
  )
}

export default App
