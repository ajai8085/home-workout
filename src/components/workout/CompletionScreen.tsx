import React from 'react'

interface Props {
  onReset: () => void
}

export const CompletionScreen: React.FC<Props> = ({ onReset }) => {
  return (
    <div
      className="flex min-h-dvh w-full flex-col items-center justify-center px-6"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 45%, color-mix(in srgb, var(--color-purple) 12%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="relative flex w-full max-w-sm flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-3">
          <div className="font-display text-7xl" style={{ color: 'var(--color-purple)' }}>
            🎉
          </div>
          <h1
            className="font-display text-5xl leading-none font-bold uppercase"
            style={{ color: 'var(--color-purple)' }}
          >
            Workout
            <br />
            Complete!
          </h1>
          <p className="font-mono text-sm" style={{ color: 'var(--color-muted)' }}>
            20 minutes · 37 steps · All done
          </p>
        </div>

        <div
          className="w-full rounded-2xl p-5 text-left"
          style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
        >
          <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--color-text)' }}>
            Great session! You worked through mobility, two strength rounds, two cardio rounds, and
            a full cool-down. Hydrate, rest, and do this again tomorrow.
          </p>
        </div>

        <button
          onClick={onReset}
          className="font-display w-full rounded-2xl py-5 text-2xl font-bold tracking-wider uppercase transition-all active:scale-95"
          style={{
            background: 'var(--color-purple)',
            color: 'var(--color-on-accent)',
            boxShadow: '0 0 40px color-mix(in srgb, var(--color-purple) 30%, transparent)',
          }}
        >
          Go Again
        </button>
      </div>
    </div>
  )
}
