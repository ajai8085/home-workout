import React, { useMemo } from 'react'

const PIECE_COLORS = [
  'var(--color-mobility)',
  'var(--color-strength)',
  'var(--color-cardio)',
  'var(--color-cooldown)',
  'var(--color-rest)',
]

const PIECE_COUNT = 44

interface Piece {
  left: number
  size: number
  delay: number
  duration: number
  color: string
  round: boolean
}

const buildPieces = (): Piece[] =>
  Array.from({ length: PIECE_COUNT }, (_, i) => ({
    left: Math.random() * 100,
    size: 6 + Math.random() * 7,
    delay: Math.random() * 2.2,
    duration: 2.6 + Math.random() * 2.4,
    color: PIECE_COLORS[i % PIECE_COLORS.length],
    round: i % 3 === 0,
  }))

export const Confetti: React.FC = () => {
  const pieces = useMemo(() => buildPieces(), [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {pieces.map((piece, i) => (
        <span
          key={i}
          className="confetti-piece absolute top-0"
          style={{
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.round ? piece.size : piece.size * 1.7,
            borderRadius: piece.round ? '50%' : '2px',
            background: piece.color,
            animation: `confetti-fall ${piece.duration}s ${piece.delay}s ease-in forwards`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  )
}
