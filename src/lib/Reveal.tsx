import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

interface RevealProps {
  children: ReactNode
  /** Element to render. Defaults to a div. */
  as?: ElementType
  className?: string
  /** Stagger delay in ms. */
  delay?: number
  id?: string
}

/**
 * Fades and lifts its children into view once, when scrolled into the viewport.
 * Honors prefers-reduced-motion by rendering visible immediately.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches) {
      setVisible(true)
      return
    }
    // threshold 0 so even a section taller than the viewport reveals on first entry.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    // If the user turns reduce-motion on mid-session, show content immediately.
    const onMotionChange = () => {
      if (motion.matches) setVisible(true)
    }
    motion.addEventListener('change', onMotionChange)
    return () => {
      observer.disconnect()
      motion.removeEventListener('change', onMotionChange)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
