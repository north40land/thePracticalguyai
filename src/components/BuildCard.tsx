import { useId, useState } from 'react'
import type { Build } from '../data/builds'

const detail = [
  { key: 'problem', label: 'Problem' },
  { key: 'built', label: 'Built' },
  { key: 'result', label: 'Result' },
] as const

export function BuildCard({ build, wide = false }: { build: Build; wide?: boolean }) {
  const [open, setOpen] = useState(false)
  const detailId = useId()
  const dark = build.theme === 'dark'

  // The lighter accent reads better on dark surfaces; it is also the BETA tone.
  const statusTone = dark || build.status === 'BETA' ? 'text-accent-2' : 'text-accent'
  const metaTone = dark ? 'text-creambody' : 'text-muted'
  const bodyTone = dark ? 'text-creambody' : 'text-body'
  // Detail labels stay high-contrast and neutral; accent is reserved for the badge + icon.
  const labelTone = dark ? 'text-creambody' : 'text-ink'

  return (
    <article
      className={`build-card lift flex h-full flex-col rounded-card ${
        wide ? 'p-6 sm:p-8' : 'p-6 sm:p-7'
      } ${dark ? 'is-dark bg-dark text-cream' : 'bg-surface text-ink'}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className="grid h-11 w-11 place-items-center rounded-control bg-accent font-mono text-lg font-semibold text-white"
          aria-hidden="true"
        >
          {build.name.trim()[0]}
        </span>
        <span className={`badge ${statusTone}`}>{build.status}</span>
      </div>

      <div
        className={
          wide
            ? 'mt-6 grid gap-x-10 gap-y-3 md:grid-cols-[1fr_1.1fr] md:items-end'
            : ''
        }
      >
        <div>
          <p className={`label ${wide ? '' : 'mt-6'} ${metaTone}`}>
            {build.num} · {build.stack}
          </p>
          <h3
            className={`mt-2 ${wide ? 'text-[1.5rem]' : 'text-[1.3rem]'} ${
              dark ? 'text-cream' : 'text-ink'
            }`}
          >
            {/* Stretched button: real heading for the a11y outline, whole card clickable. */}
            <button
              type="button"
              className="build-toggle"
              aria-expanded={open}
              aria-controls={detailId}
              onClick={() => setOpen((v) => !v)}
            >
              {build.name}
            </button>
          </h3>
        </div>

        <div>
          <p className={`prose-serif text-[1.02rem] ${wide ? '' : 'mt-2.5'} ${bodyTone}`}>
            {build.tagline}
          </p>
          <span
            className={`label mt-5 flex items-center justify-between ${
              dark ? 'text-creambody/75' : 'text-muted'
            }`}
            aria-hidden="true"
          >
            <span>{open ? 'Hide detail' : 'Problem · Built · Result'}</span>
            <span className={`plus ${open ? 'is-open' : ''}`}>+</span>
          </span>
        </div>
      </div>

      <div
        id={detailId}
        className={`build-detail ${open ? 'is-open' : ''}`}
        role="region"
        aria-label={`${build.name} case study`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="min-h-0">
          <dl
            className={`mt-6 grid gap-x-10 gap-y-4 border-t pt-6 ${
              wide ? 'md:grid-cols-3' : ''
            } ${dark ? 'border-white/10' : 'border-cardline'}`}
          >
            {detail.map((row) => (
              <div key={row.key} className="grid content-start gap-1">
                <dt className={`label ${labelTone}`}>{row.label}</dt>
                <dd className={`prose-serif text-[1.02rem] ${bodyTone}`}>
                  {build[row.key]}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  )
}
