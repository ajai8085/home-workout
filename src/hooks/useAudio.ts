import { useRef } from 'react'

export function useAudio() {
  const ctxRef = useRef<AudioContext | null>(null)

  const ctx = () => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext()
    }
    return ctxRef.current
  }

  const playTone = (
    freq: number,
    durationMs: number,
    type: OscillatorType = 'sine',
    gain = 0.25,
  ) => {
    try {
      const ac = ctx()
      const osc = ac.createOscillator()
      const g = ac.createGain()
      osc.connect(g)
      g.connect(ac.destination)
      osc.type = type
      osc.frequency.value = freq
      g.gain.setValueAtTime(gain, ac.currentTime)
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + durationMs / 1000)
      osc.start(ac.currentTime)
      osc.stop(ac.currentTime + durationMs / 1000)
    } catch {
      // audio errors are non-fatal
    }
  }

  const initAudio = () => {
    try {
      const ac = ctx()
      if (ac.state === 'suspended') ac.resume()
    } catch {
      // ignore
    }
  }

  const playBeep = (freq: number, durationMs: number) => playTone(freq, durationMs, 'square', 0.15)

  const playTransition = () => {
    playTone(1400, 100, 'square', 0.2)
    setTimeout(() => playTone(1000, 150, 'square', 0.2), 120)
  }

  const playCompletion = () => {
    ;[523, 659, 784].forEach((freq, i) => {
      setTimeout(() => playTone(freq, 500, 'sine', 0.3), i * 150)
    })
  }

  return { initAudio, playBeep, playTransition, playCompletion }
}

export type AudioControls = ReturnType<typeof useAudio>
