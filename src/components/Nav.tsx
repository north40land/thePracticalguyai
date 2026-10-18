import { useEffect, useState } from 'react'

const links = [
  { label: 'Builds', href: '#builds' },
  { label: 'Coaching', href: '#work' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 8))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-bg/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="label text-ink"
          style={{ letterSpacing: '0.16em' }}
          aria-label="The Practical AI Guy, back to top"
        >
          The Practical AI Guy
        </a>

        <div className="flex items-center gap-6 sm:gap-8">
          <div className="hidden items-center gap-7 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-[0.95rem] font-medium text-ink/80 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn btn-pill">
            Hire
          </a>
        </div>
      </nav>
    </header>
  )
}
