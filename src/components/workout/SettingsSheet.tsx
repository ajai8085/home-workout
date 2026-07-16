import React from 'react'
import type { Palette, PaletteId } from '@/data/themes'
import type { ThemeMode } from '@/hooks/useTheme'
import type { WorkoutSettings } from '@/hooks/useSettings'

interface Props {
  open: boolean
  palettes: Palette[]
  activePalette: PaletteId
  mode: ThemeMode
  settings: WorkoutSettings
  onSelectPalette: (palette: PaletteId) => void
  onToggleMode: () => void
  onToggleSetting: (key: keyof WorkoutSettings) => void
  onClose: () => void
}

interface SwitchRowProps {
  label: string
  description: string
  checked: boolean
  onToggle: () => void
}

const SwitchRow: React.FC<SwitchRowProps> = ({ label, description, checked, onToggle }) => (
  <button
    role="switch"
    aria-checked={checked}
    onClick={onToggle}
    className="flex w-full items-center justify-between gap-4 rounded-xl px-3 py-3 text-left transition-colors hover:bg-[var(--color-surface)]"
  >
    <span className="flex flex-col gap-0.5">
      <span className="font-mono text-sm font-medium text-[var(--color-text)]">{label}</span>
      <span className="font-mono text-xs text-[var(--color-muted)]">{description}</span>
    </span>
    <span
      className="relative h-7 w-12 shrink-0 rounded-full transition-colors"
      style={{
        background: checked ? 'var(--color-accent)' : 'var(--color-border)',
      }}
    >
      <span
        className="absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform"
        style={{ transform: checked ? 'translateX(1.25rem)' : 'translateX(0)' }}
      />
    </span>
  </button>
)

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="px-3 pt-2 pb-1 font-mono text-xs tracking-widest text-[var(--color-muted)] uppercase">
    {children}
  </p>
)

export const SettingsSheet: React.FC<Props> = ({
  open,
  palettes,
  activePalette,
  mode,
  settings,
  onSelectPalette,
  onToggleMode,
  onToggleSetting,
  onClose,
}) => {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Settings"
    >
      <div
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div
        className="glass-card relative w-full max-w-md rounded-t-3xl p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:rounded-3xl"
        style={{ animation: 'sheet-in 0.25s ease-out' }}
      >
        <div className="mb-2 flex items-center justify-between px-3">
          <h2 className="font-display text-xl font-bold tracking-wide text-[var(--color-text)] uppercase">
            Settings
          </h2>
          <button
            onClick={onClose}
            aria-label="Close settings"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <SectionLabel>Theme</SectionLabel>
        <div className="grid grid-cols-2 gap-2 px-3 pb-2">
          {palettes.map((palette) => {
            const isActive = palette.id === activePalette
            return (
              <button
                key={palette.id}
                onClick={() => onSelectPalette(palette.id)}
                aria-pressed={isActive}
                className="flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-all active:scale-95"
                style={{
                  borderColor: isActive ? 'var(--color-accent)' : 'var(--color-border)',
                  background: isActive
                    ? 'color-mix(in srgb, var(--color-accent) 10%, transparent)'
                    : 'var(--color-card)',
                }}
              >
                <span className="flex -space-x-1">
                  {palette.preview.map((hex) => (
                    <span
                      key={hex}
                      className="h-4 w-4 rounded-full border border-black/20"
                      style={{ background: hex }}
                    />
                  ))}
                </span>
                <span className="font-mono text-sm font-medium text-[var(--color-text)]">
                  {palette.label}
                </span>
              </button>
            )
          })}
        </div>

        <SwitchRow
          label="Dark mode"
          description="Easier on the eyes in low light"
          checked={mode === 'dark'}
          onToggle={onToggleMode}
        />

        <SectionLabel>Workout cues</SectionLabel>
        <SwitchRow
          label="Sound"
          description="Countdown beeps and transition chimes"
          checked={settings.sound}
          onToggle={() => onToggleSetting('sound')}
        />
        <SwitchRow
          label="Vibration"
          description="Haptic buzz on step changes (mobile)"
          checked={settings.vibration}
          onToggle={() => onToggleSetting('vibration')}
        />
        <SwitchRow
          label="Voice coach"
          description="Announces each exercise out loud"
          checked={settings.voice}
          onToggle={() => onToggleSetting('voice')}
        />
      </div>
    </div>
  )
}
