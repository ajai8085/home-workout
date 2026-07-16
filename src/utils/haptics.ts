/** Trigger device vibration. Silently no-ops where unsupported (desktop, iOS Safari). */
export const vibrate = (pattern: number | number[]): void => {
  try {
    navigator.vibrate?.(pattern)
  } catch {
    /* haptics are non-essential */
  }
}
