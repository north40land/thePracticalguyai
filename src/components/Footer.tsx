export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <span className="label text-ink/70">#PracticalAIGuy</span>
        <a
          href="https://aifromthefield.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 label text-ink/75 transition-colors hover:text-ink"
        >
          AI From The Field
          <span className="arrow transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </footer>
  )
}
