import type { CSSProperties, ReactNode } from 'react'

/**
 * Fades a block in as it scrolls into view using a CSS scroll-driven animation.
 * Content is visible by default for browsers without support, reduced-motion
 * users, print, and headless renderers.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const style = delay ? ({ '--stagger': `${Math.round(delay * 400)}px` } as CSSProperties) : undefined
  return (
    <div className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}
