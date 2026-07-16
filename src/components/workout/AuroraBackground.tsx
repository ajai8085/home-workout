import React from 'react'

interface Props {
  colorA: string
  colorB: string
}

export const AuroraBackground: React.FC<Props> = ({ colorA, colorB }) => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
    <div
      className="aurora-blob absolute -top-[15%] -left-[20%] h-[55vh] w-[75vw] rounded-full blur-3xl"
      style={{
        background: `color-mix(in srgb, ${colorA} 16%, transparent)`,
        animation: 'aurora-a 14s ease-in-out infinite',
      }}
    />
    <div
      className="aurora-blob absolute -right-[20%] -bottom-[12%] h-[50vh] w-[70vw] rounded-full blur-3xl"
      style={{
        background: `color-mix(in srgb, ${colorB} 13%, transparent)`,
        animation: 'aurora-b 17s ease-in-out infinite',
      }}
    />
  </div>
)
