import React from 'react'

interface Props {
  onStart: () => void
}

export const StartOverlay: React.FC<Props> = ({ onStart }) => {
  return (
    <div
      className="flex min-h-dvh w-full flex-col items-center justify-center px-6"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, color-mix(in srgb, var(--color-lime) 8%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="relative flex w-full max-w-sm flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-2">
          <p
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: 'var(--color-lime)', opacity: 0.8 }}
          >
            20-Min Home Workout
          </p>
          <h1
            className="font-display text-5xl leading-none font-bold uppercase"
            style={{ color: 'var(--color-lime)' }}
          >
            Ready to
            <br />
            Move?
          </h1>
        </div>

        <div
          className="w-full space-y-2 rounded-2xl p-5 text-left"
          style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
        >
          {(
            [
              ['Mobility', '4 min', 'var(--color-lime)'],
              ['Strength × 2', '6 min', 'var(--color-orange)'],
              ['Cardio × 2', '8 min', 'var(--color-pink)'],
              ['Cool Down', '2 min', 'var(--color-purple)'],
            ] as [string, string, string][]
          ).map(([label, time, col]) => (
            <div key={label} className="flex items-center justify-between font-mono text-sm">
              <span style={{ color: col }}>{label}</span>
              <span style={{ color: 'var(--color-muted)' }}>{time}</span>
            </div>
          ))}
        </div>

        <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          Back-safe · No equipment · Beginner-friendly
        </p>

        <button
          onClick={onStart}
          className="font-display w-full rounded-2xl py-5 text-2xl font-bold tracking-wider uppercase transition-all active:scale-95"
          style={{
            background: 'var(--color-lime)',
            color: 'var(--color-on-accent)',
            boxShadow: '0 0 40px color-mix(in srgb, var(--color-lime) 30%, transparent)',
          }}
        >
          Start Workout
        </button>
      </div>
    </div>
  )
}
