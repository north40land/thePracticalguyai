import { Reveal } from '../lib/Reveal'

const stats = [
  { value: '60+', label: 'Active listings' },
  { value: '5', label: 'Sites shipped' },
  { value: '20+', label: 'Years in the field' },
]

export function Tuesday() {
  return (
    <section className="border-t border-line py-20 sm:py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" />
            The day job
          </p>
        </Reveal>

        <div className="mt-7 grid gap-x-16 gap-y-8 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <Reveal as="h2" className="max-w-[18ch] text-[clamp(1.9rem,3.4vw,2.7rem)]">
            This isn&rsquo;t a side hobby. It&rsquo;s my Tuesday.
          </Reveal>

          <Reveal delay={90} className="prose-serif max-w-[58ch] text-[1.15rem]">
            <p>
              I run an active real estate practice across McKinney and the
              surrounding North Texas counties. North Realty Group on the
              residential side, North 40 Land Group on land. 60+ active
              listings, a lean team, real closings. The AI tools above exist
              because I needed them to do the actual job. That is the whole
              pitch: I am not teaching from a playbook I read. I am teaching from
              the deals I am closing this month.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <dl className="mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-baseline gap-4 py-6 sm:flex-col sm:items-start sm:gap-2 sm:py-8 ${
                  i > 0 ? 'border-t border-line sm:border-t-0 sm:border-l sm:pl-8' : ''
                }`}
              >
                <dt className="label order-2 text-muted">{stat.label}</dt>
                <dd className="order-1 font-display text-[2.4rem] font-medium leading-none tracking-tight text-ink sm:text-[2.8rem]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
