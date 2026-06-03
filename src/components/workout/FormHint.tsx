import React from 'react'

interface Props {
  hint: string
}

export const FormHint: React.FC<Props> = ({ hint }) => {
  return (
    <p className="max-w-sm px-6 text-center font-mono text-sm leading-relaxed text-[var(--color-muted)]">
      {hint}
    </p>
  )
}
