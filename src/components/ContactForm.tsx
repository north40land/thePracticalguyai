import { useEffect, useRef, useState, type FormEvent } from 'react'

type Status = 'idle' | 'submitting' | 'sent'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const successRef = useRef<HTMLDivElement>(null)

  // Move focus to the confirmation when the form is replaced, so keyboard and
  // screen-reader users are not stranded on the now-unmounted submit button.
  useEffect(() => {
    if (status === 'sent') successRef.current?.focus()
  }, [status])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    // Front-end only for now. Wire this to an email service or endpoint later:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) })
    const payload = { name, email, message }
    void payload

    // Simulate a hand-off so the success state is honest about being a stub.
    window.setTimeout(() => setStatus('sent'), 350)
  }

  if (status === 'sent') {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="rounded-card border border-cardline bg-surface p-6 sm:p-8"
      >
        <p className="eyebrow eyebrow--accent">
          <span className="dot" aria-hidden="true" />
          Message ready
        </p>
        <p className="prose-serif mt-4 text-[1.2rem] text-ink">
          Thanks{name ? `, ${name.split(' ')[0]}` : ''}. Your note is captured on
          this page.
        </p>
        <p className="prose-serif mt-2 max-w-[48ch] text-[1.02rem]">
          This form is front-end only for now, so nothing was emailed yet. Wire
          it to a service and the same submission will land in your inbox.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-cardline bg-surface p-6 sm:p-8"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="cf-name" className="field-label">
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="cf-email" className="field-label">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input"
            placeholder="you@brokerage.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <label htmlFor="cf-message" className="field-label">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          className="input resize-y"
          placeholder="What are you trying to build, or what would you book me for?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}{' '}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </button>
        <p className="label text-muted">No spam. A real reply from me.</p>
      </div>
    </form>
  )
}
