/** Speak a short cue via the Web Speech API. Silently no-ops if unsupported. */
export const speak = (text: string): void => {
  try {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1.05
    utterance.pitch = 1
    window.speechSynthesis.speak(utterance)
  } catch {
    /* voice cues are non-essential */
  }
}

export const stopSpeaking = (): void => {
  try {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
  } catch {
    /* ignore */
  }
}
