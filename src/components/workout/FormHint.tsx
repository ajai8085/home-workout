interface Props {
  hint: string
}

export function FormHint({ hint }: Props) {
  return (
    <p className="max-w-xs px-6 text-center font-mono text-xs leading-relaxed text-[var(--color-muted)]">
      {hint}
    </p>
  )
}
