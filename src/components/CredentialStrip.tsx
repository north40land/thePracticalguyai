import { Reveal } from '../lib/Reveal'

const credentials = ['Anthropic Partner', 'TREC CE', 'IBM', 'Google']

export function CredentialStrip() {
  return (
    <Reveal as="section" className="border-y border-line">
      <div className="shell flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:gap-8">
        <span className="label text-muted">Backed by</span>
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4">
          {credentials.map((c, i) => (
            <li key={c} className="flex items-center gap-3 sm:gap-4">
              <span className="label text-ink/75">{c}</span>
              {i < credentials.length - 1 && (
                <span className="text-muted" aria-hidden="true">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
