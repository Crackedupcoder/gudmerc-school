import { m, useReducedMotion } from 'motion/react'
import { Reveal } from './Reveal'
import { site, waLink } from '../site.config'
import { ArrowIcon, WhatsAppIcon } from './icons'

export function Schools() {
  const reduce = useReducedMotion()
  return (
    <section id="schools" className="scroll-mt-20 bg-cobalt-50" aria-labelledby="schools-heading">
      <div className="container-x py-20 lg:py-28">
        <Reveal className="max-w-2xl">
          <h2 id="schools-heading" className="text-3xl sm:text-4xl lg:text-5xl">
            Three schools, one campus
          </h2>
          <p className="mt-4 text-lg text-muted">
            A child can start in the creche at one and leave for university at seventeen without changing school.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {site.schools.map((s, i) => (
            <m.article
              key={s.id}
              id={s.id}
              className={`grid scroll-mt-24 items-center gap-8 lg:grid-cols-12 lg:gap-14 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              initial={reduce ? 'show' : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* The unclipped article drives the in-view trigger; the figure only follows the variant. */}
              <m.figure
                className="overflow-hidden rounded-3xl bg-cobalt-100 lg:col-span-6"
                variants={{
                  hidden: { clipPath: i % 2 ? 'inset(0% 0% 0% 100% round 24px)' : 'inset(0% 100% 0% 0% round 24px)' },
                  show: { clipPath: 'inset(0% 0% 0% 0% round 24px)' },
                }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </m.figure>
              <Reveal className="lg:col-span-6">
                <p className="eyebrow-line">{s.ages}</p>
                <h3 className="mt-2 text-3xl sm:text-4xl">{s.name}</h3>
                <p className="mt-4 text-lg text-muted">{s.day}</p>
                <dl className="mt-6 grid gap-x-8 gap-y-3 text-[0.95rem] sm:grid-cols-2">
                  {[
                    ['Classes', s.classes],
                    ['Hours', s.hours],
                    ['Exams', s.exams],
                    ['Class size', s.ratio],
                  ].map(([k, v]) => (
                    <div key={k} className="border-t border-line pt-3">
                      <dt className="text-muted">{k}</dt>
                      <dd className="font-semibold text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={waLink(`Hello Gudmerc, I would like to ask about a place in ${s.name}.`)}
                  target="_blank"
                  rel="noopener"
                  className="link-arrow mt-6"
                >
                  <WhatsAppIcon width={16} height={16} /> Ask about {s.name} <ArrowIcon width={16} height={16} />
                </a>
              </Reveal>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  )
}
