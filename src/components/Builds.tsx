import { builds } from '../data/builds'
import { BuildCard } from './BuildCard'
import { Reveal } from '../lib/Reveal'

export function Builds() {
  const grid = builds.slice(0, 4)
  const finale = builds[4]

  return (
    <section id="builds" className="scroll-mt-20 py-20 sm:py-24 lg:py-32">
      <div className="shell">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow eyebrow--accent">
              <span className="dot" aria-hidden="true" />
              Selected builds
            </p>
            <h2 className="mt-4 max-w-[16ch] text-[clamp(1.9rem,3.4vw,2.6rem)]">
              Tools I shipped because the job needed them.
            </h2>
          </div>
          <p className="prose-serif max-w-[34ch] text-[1.05rem] sm:text-right">
            Five builds. Tap any card for the problem, the build, and the
            result.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:items-start sm:gap-5">
          {grid.map((build, i) => (
            <Reveal key={build.num} delay={(i % 2) * 90} className="h-full">
              <BuildCard build={build} />
            </Reveal>
          ))}
          {finale && (
            <Reveal className="h-full sm:col-span-2">
              <BuildCard build={finale} wide />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
