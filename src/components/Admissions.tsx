import { m, useReducedMotion } from 'motion/react'
import { Reveal } from './Reveal'
import { site, waLink } from '../site.config'
import { CalendarIcon, WhatsAppIcon } from './icons'

export function Admissions() {
  const reduce = useReducedMotion()
  const a = site.admissions
  return (
    <section id="admissions" className="scroll-mt-20 bg-white" aria-labelledby="admissions-heading">
      <div className="container-x py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 id="admissions-heading" className="text-3xl sm:text-4xl lg:text-5xl">
              How to join, and when
            </h2>
            <p className="mt-4 text-lg text-muted">
              Four steps from first message to first day. Places for {a.session} are offered in order of
              assessment, so book early.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink('Hello Gudmerc, I would like to start an admission enquiry.')}
                target="_blank"
                rel="noopener"
                className="btn-whatsapp"
              >
                <WhatsAppIcon /> Start on WhatsApp
              </a>
              <a href="#" className="btn-outline" aria-disabled="true">
                Admission form (PDF)
              </a>
            </div>
          </Reveal>

          <ol className="relative lg:col-span-7" aria-label="Admission steps">
            {/* The line draws as the steps come into view */}
            <m.span
              aria-hidden="true"
              className="absolute left-5 top-6 bottom-6 w-px origin-top bg-cobalt-200"
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
            {a.steps.map((s, i) => (
              <li key={s.title} className="relative pl-16 pb-10 last:pb-0">
                {/* Outside the reveal wrapper: its transform would otherwise become this circle's positioning box. */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-display text-lg text-ink"
                >
                  {i + 1}
                </span>
                <Reveal delay={i * 0.1}>
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cobalt-700">
                    <CalendarIcon width={16} height={16} /> {s.when}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
