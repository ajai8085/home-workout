import { useEffect, useRef } from 'react'

export function useWakeLock() {
  const lockRef = useRef<WakeLockSentinel | null>(null)

  const request = async () => {
    if (!('wakeLock' in navigator)) return
    try {
      lockRef.current = await navigator.wakeLock.request('screen')
    } catch {
      // denied or not supported — non-fatal
    }
  }

  const release = async () => {
    if (lockRef.current) {
      await lockRef.current.release().catch(() => {})
      lockRef.current = null
    }
  }

  // Re-acquire if page becomes visible again
  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === 'visible' && lockRef.current === null) {
        request()
      }
    }
    document.addEventListener('visibilitychange', onVisible)
    return () => document.removeEventListener('visibilitychange', onVisible)
  }, [])

  useEffect(
    () => () => {
      release()
    },
    [],
  )

  return { request, release }
}
