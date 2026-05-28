# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev            # Vite dev server
npm run build          # tsc -b && vite build (typecheck must pass)
npm run lint           # ESLint over .ts/.tsx
npm run format         # Prettier write
npm run format:check   # Prettier check (no write)
npm run preview        # Preview built bundle
npm run deploy         # gh-pages -d dist (manual deploy; predeploy runs build)
```

No test runner is configured.

## Deploy

Two paths exist:
- **Auto:** push to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes `./dist` to the `gh-pages` branch via `peaceiris/actions-gh-pages@v4`.
- **Manual:** `npm run deploy` uses the `gh-pages` CLI.

Vite `base` is `/home-workout/` (vite.config.ts) — required because the site is served from `https://ajai8085.github.io/home-workout`. Do not change this without updating the GitHub Pages URL.

## Architecture

Single-page React 19 + TS + Vite app driving a fixed 20-minute (1200 s) bodyweight workout. Tailwind v4 via `@tailwindcss/vite`; no UI library.

### Screen state machine (`src/App.tsx`)
`AppScreen` = `'start' | 'workout' | 'complete'`. `App` owns the screen state and the shared `useAudio` + `useTheme` instances; `WorkoutScreen` receives `audio` as a prop so the `AudioContext` is created once (browsers require a user gesture — `initAudio` runs from the Start tap).

### Smart vs dumb split
- `src/components/workout/WorkoutScreen.tsx` is the only smart workout component — it wires `useWorkoutTimer`, `useWakeLock`, and the audio prop, and computes derived values (`isWarning`, `elapsed`, `progressPct`).
- All siblings in `src/components/workout/` are presentational, taking primitives + a `phaseColor` string.
- `src/components/animations/ExerciseAnimation.tsx` is a `Record<AnimationKey, FC>` dispatcher — adding an exercise animation means adding a key to `AnimationKey` (`src/types/workout.ts`), creating the figure in `src/components/animations/figures/`, registering it in `FIGURE_MAP`, and adding the keyframes to `src/index.css`.

### Workout data
`src/data/workoutData.ts` exports `WORKOUT_STEPS: WorkoutStep[]` (37 steps) and `TOTAL_DURATION` (sum of durations, must stay = 1200). Structure: Mobility 6×40s, Strength1 + Strength2 (with rest interleaving), Cardio1 + Cardio2, Cooldown. Each step's `phase` maps to a color via `PHASE_COLORS` in `src/types/workout.ts`; `type: 'rest'` overrides to `REST_COLOR`.

### Timer (`src/hooks/useWorkoutTimer.ts`)
1 Hz `setInterval` with parallel state + ref pairs (`stepIndex`/`stepIndexRef`, etc.) so the interval callback always reads fresh values without re-creating the interval. Callbacks (`onBeep`, `onTransition`, `onComplete`) are held in refs and refreshed via effects so the timer logic depends only on `steps`. Beeps fire at t ∈ {3,2,1}. `start()` jumps to step 0 and begins ticking; `skip()` advances without resetting the run state.

### Side-effect hooks
- `useAudio` lazily creates one `AudioContext` and exposes `initAudio` (resume on user gesture), `playBeep`, `playTransition`, `playCompletion`. All errors are swallowed — audio is non-essential.
- `useWakeLock` requests `navigator.wakeLock` and re-acquires on `visibilitychange`. Released on unmount. Non-fatal if unsupported.
- `useTheme` toggles `.dark` on `<html>` and persists to `localStorage`. Initial theme is read from the existing class (set by inline boot script in `index.html`) to avoid FOUC.

### Theming
All colors are CSS variables defined in `src/index.css` under `:root` (light) and `.dark` (dark). Components reference them as `var(--color-*)` — never hardcode hex values. Phase colors come through `PHASE_COLORS` in `src/types/workout.ts`, which itself uses `var(--color-*)`.

### Animations
Stick-figure SVGs in `src/components/animations/figures/` use named CSS keyframes defined in `src/index.css`. Keyframes are **prefixed per exercise** (e.g. `march-front-thigh`, `cat-cow-spine`) to avoid collisions — keep this convention when adding new ones.

## Conventions

- **Path alias:** import from `@/...` (configured in `tsconfig.app.json` + `vite.config.ts`). Do not use long relative paths.
- **Components:** every component is `export const Name: React.FC<Props> = (...) => ...`. Named `function` declarations are not used in this codebase.
- **TS strictness:** `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly` are on — use `import type` for type-only imports.
- **Prettier:** no semicolons, single quotes, trailing commas, width 100, `prettier-plugin-tailwindcss` sorts class names.
- **No new dependencies** unless required — the app intentionally has zero UI libraries.
