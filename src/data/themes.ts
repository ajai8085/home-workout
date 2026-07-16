export type PaletteId = 'forest' | 'ocean' | 'sunset' | 'neon'

export interface Palette {
  id: PaletteId
  label: string
  /** Swatch preview colors (dark-mode accents) shown in the theme picker */
  preview: [string, string, string]
}

export const PALETTES: Palette[] = [
  { id: 'forest', label: 'Forest', preview: ['#cbf73e', '#ff5081', '#ab8dff'] },
  { id: 'ocean', label: 'Ocean', preview: ['#2ee6c8', '#45c4ff', '#b39dff'] },
  { id: 'sunset', label: 'Sunset', preview: ['#ff8a3d', '#ff4fd8', '#b78cff'] },
  { id: 'neon', label: 'Neon', preview: ['#52ff5e', '#ff2ec4', '#00e5ff'] },
]

export const DEFAULT_PALETTE: PaletteId = 'forest'

export const isPaletteId = (value: string | null): value is PaletteId =>
  PALETTES.some((p) => p.id === value)
