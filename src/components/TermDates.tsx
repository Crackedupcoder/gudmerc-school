import { Reveal } from './Reveal'
import { site } from '../site.config'

export function TermDates() {
  return (
    <section id="calendar" className="scroll-mt-20 bg-white" aria-labelledby="calendar-heading">
      <div className="container-x grid gap-10 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <Reveal className="lg:col-span-4">
          <h2 id="calendar-heading" className="text-3xl sm:text-4xl">
            Term dates, 2026/27
          </h2>
          <p className="mt-4 text-muted">Mid-term breaks are a full week. Public holidays follow the FCT calendar.</p>
        </Reveal>
        <div className="grid gap-10 lg:col-span-8 lg:grid-cols-2">
          <Reveal>
            <dl className="divide-y divide-line">
              {site.terms.map((t) => (
                <div key={t.name} className="py-4 first:pt-0">
                  <dt className="font-display text-2xl text-ink">{t.name}</dt>
                  <dd className="mt-1 font-semibold">{t.dates}</dd>
                  <dd className="text-sm text-muted">Mid-term: {t.midterm}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-xl">Key dates</h3>
            <dl className="mt-3 divide-y divide-line">
              {site.keyDates.map((k) => (
                <div key={k.label} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-muted">{k.label}</dt>
                  <dd className="shrink-0 text-right font-semibold">{k.date}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
