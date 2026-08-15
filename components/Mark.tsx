import type { CSSProperties } from 'react'

/** The FinMedia monogram, drawn from the sprite symbol in the root layout. */
export function Mark({
  className,
  width,
  height,
  style,
}: {
  className?: string
  width?: number
  height?: number
  style?: CSSProperties
}) {
  return (
    <svg className={className} width={width} height={height} style={style}>
      <use href="#fmg-mark" />
    </svg>
  )
}
