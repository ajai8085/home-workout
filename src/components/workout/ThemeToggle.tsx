import React from 'react'
import type { ThemeMode } from '@/hooks/useTheme'

interface Props {
  mode: ThemeMode
  onToggle: () => void
  onOpenSettings: () => void
}

const IconSun: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)

const IconMoon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const IconGear: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
  </svg>
)

export const ThemeToggle: React.FC<Props> = ({ mode, onToggle, onOpenSettings }) => {
  const isDark = mode === 'dark'

  const btn =
    'glass-card flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)] active:scale-95'

  return (
    <div className="fixed top-[max(1rem,env(safe-area-inset-top))] right-4 z-50 flex gap-2">
      <button
        onClick={onToggle}
        className={btn}
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        {isDark ? <IconSun /> : <IconMoon />}
      </button>
      <button onClick={onOpenSettings} className={btn} aria-label="Open settings">
        <IconGear />
      </button>
    </div>
  )
}
