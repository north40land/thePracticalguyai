import type { CSSProperties } from 'react'

/** Stagger helper for the hero entrance. */
const d = (ms: number): CSSProperties => ({ '--line-delay': `${ms}ms` } as CSSProperties)
const fd = (ms: number): CSSProperties => ({ '--fade-delay': `${ms}ms` } as CSSProperties)

export function Hero() {
  return (
    <section
      id="top"
      className="hero-anim relative scroll-mt-24 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="shell">
        <p className="eyebrow hero-fade" style={fd(80)}>
          <span className="dot" aria-hidden="true" />
          Practitioner · Not a guru
        </p>

        <h1 className="mt-7 max-w-[18ch] text-[clamp(2.6rem,7vw,4.7rem)] sm:max-w-[20ch]">
          <span className="hero-line" style={d(180)}>
            <span>I build AI tools</span>
          </span>
          <span className="hero-line" style={d(300)}>
            <span>in the field. Then I teach</span>
          </span>
          <span className="hero-line" style={d(420)}>
            <span className="text-accent">what actually works.</span>
          </span>
        </h1>

        <p
          className="prose-serif hero-fade mt-8 max-w-[46ch] text-[1.15rem] sm:text-[1.25rem]"
          style={fd(620)}
        >
          Active North Texas real estate broker. I ship production tools in the
          middle of live transactions, document the wins and the failures, and
          teach agents the parts that hold up.
        </p>

        <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" style={fd(760)}>
          <a href="#contact" className="btn btn-primary">
            Work with me <span className="arrow" aria-hidden="true">→</span>
          </a>
          <a href="#builds" className="btn btn-ghost">
            See the builds
          </a>
        </div>
      </div>
    </section>
  )
}
