interface Props {
  label: string
  color: string
}

export function PhaseTag({ label, color }: Props) {
  return (
    <div
      className="inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium tracking-widest uppercase"
      style={{
        color,
        background: `${color}18`,
        border: `1px solid ${color}40`,
      }}
    >
      {label}
    </div>
  )
}
