import { Reveal } from '../lib/Reveal'
import { ContactForm } from './ContactForm'

const offers = [
  {
    title: 'Cohort coaching',
    body: 'A guided group track that takes you from AI-curious to actually shipping. Built around real estate workflows, not generic prompt tricks.',
  },
  {
    title: '1:1 coaching',
    body: 'One or two focused sessions a month. We work on your stack, your pipeline, your real problems. Bring a transaction, leave with a tool.',
  },
  {
    title: 'Speaking & workshops',
    body: 'I speak to brokerages, teams, and industry groups on practical AI for real estate. No hype, no theater, just what works in the field.',
  },
]

export function WorkWithMe() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-line py-20 sm:py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow eyebrow--accent">
            <span className="dot" aria-hidden="true" />
            Work with me
          </p>
          <h2 className="mt-4 max-w-[20ch] text-[clamp(1.9rem,3.4vw,2.6rem)]">
            Three ways to get the field-tested version.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-3">
          {offers.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 90} className="h-full">
              <div className="rule-card flex h-full flex-col p-6 pt-7 sm:p-7 sm:pt-8">
                <h3 className="text-[1.3rem] text-ink">{offer.title}</h3>
                <p className="prose-serif mt-3 flex-1 text-[1.04rem]">{offer.body}</p>
                <a
                  href="#contact"
                  className="group mt-6 inline-flex items-center gap-2 font-display text-[0.95rem] font-medium text-ink"
                >
                  Get in touch
                  <span
                    className="arrow text-accent transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div id="contact" className="mt-16 scroll-mt-24 sm:mt-20">
          <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Reveal>
              <p className="eyebrow">
                <span className="dot" aria-hidden="true" />
                Get in touch
              </p>
              <h2 className="mt-4 max-w-[14ch] text-[clamp(1.7rem,3vw,2.3rem)]">
                Bring a transaction. Leave with a plan.
              </h2>
              <p className="prose-serif mt-4 max-w-[42ch] text-[1.08rem]">
                Tell me what you are working on. Whether it is coaching, a
                cohort seat, or a talk for your team, I read every one.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
