import React from 'react'

interface Props {
  hint: string
}

export const FormHint: React.FC<Props> = ({ hint }) => {
  return (
    <p className="max-w-xs px-6 text-center font-mono text-xs leading-relaxed text-[var(--color-muted)]">
      {hint}
    </p>
  )
}
