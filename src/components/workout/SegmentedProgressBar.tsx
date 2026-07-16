import React from 'react'

export interface ProgressSegment {
  color: string
  duration: number
}

interface Props {
  segments: ProgressSegment[]
  elapsed: number
}

export const SegmentedProgressBar: React.FC<Props> = ({ segments, elapsed }) => {
  const starts = segments.reduce<number[]>(
    (acc, _, i) => [...acc, i === 0 ? 0 : acc[i - 1] + segments[i - 1].duration],
    [],
  )

  return (
    <div className="flex w-full gap-1">
      {segments.map((segment, i) => {
        const fill = Math.min(1, Math.max(0, (elapsed - starts[i]) / segment.duration))

        return (
          <div
            key={i}
            className="h-1.5 overflow-hidden rounded-full bg-[var(--color-border)]"
            style={{ flexGrow: segment.duration }}
          >
            <div
              className="h-full rounded-full transition-all duration-1000 ease-linear"
              style={{
                width: `${fill * 100}%`,
                background: segment.color,
                boxShadow:
                  fill > 0 && fill < 1
                    ? `0 0 10px color-mix(in srgb, ${segment.color} 55%, transparent)`
                    : undefined,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
