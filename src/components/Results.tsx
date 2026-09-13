import { m, useReducedMotion } from 'motion/react'
import { Reveal } from './Reveal'
import { site } from '../site.config'

export function Results() {
  const reduce = useReducedMotion()
  const r = site.results
  const unis = [...r.universities, ...r.universities]
  return (
    <section id="results" className="scroll-mt-20 bg-cobalt-950 text-white" aria-labelledby="results-heading">
      <div className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 id="results-heading" className="text-3xl text-white sm:text-4xl lg:text-5xl">
              Results parents can check
            </h2>
            <p className="mt-4 text-lg text-cobalt-200">
              Share of SS3 candidates with five credits including English and Mathematics at WAEC.
            </p>
            <ul className="mt-8 space-y-5" aria-label="WAEC results by year">
              {r.waec.map((row, i) => (
                <li key={row.year}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-2xl">{row.year}</span>
                    <span className="text-lg font-semibold tabular-nums text-gold-300">{row.fiveCredits}%</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
                    <m.div
                      className="h-full rounded-full bg-gold-500"
                      initial={reduce ? { width: `${row.fiveCredits}%` } : { width: 0 }}
                      whileInView={{ width: `${row.fiveCredits}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-white/10">
              {r.proofs.map((p, i) => (
                <li key={p.title}>
                  <Reveal delay={i * 0.08} className="py-6 first:pt-0">
                    <h3 className="text-2xl text-white">{p.title}</h3>
                    <p className="mt-2 text-cobalt-200">{p.body}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-8">
        <p className="container-x text-sm text-cobalt-300">Where our graduates have gone on to study</p>
        <div className="marquee mt-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <ul className="marquee-track flex w-max gap-10 px-5 font-display text-2xl text-white/90">
            {unis.map((u, i) => (
              <li key={i} className="whitespace-nowrap" aria-hidden={i >= r.universities.length}>
                {u}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
