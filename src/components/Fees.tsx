import { useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import { Reveal } from './Reveal'
import { naira, site } from '../site.config'
import { CheckIcon } from './icons'

type Mode = 'term' | 'session'

export function Fees() {
  const [mode, setMode] = useState<Mode>('term')
  const reduce = useReducedMotion()
  const mult = mode === 'term' ? 1 : 3

  return (
    <section id="fees" className="scroll-mt-20 bg-cobalt-50" aria-labelledby="fees-heading">
      <div className="container-x py-20 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <h2 id="fees-heading" className="text-3xl sm:text-4xl lg:text-5xl">
              What it costs
            </h2>
            <p className="mt-4 text-lg text-muted">
              Fees for the 2026/27 session, shown as a range because the exact figure depends on the class.
              No hidden levies. The bursary confirms the amount in writing before you pay.
            </p>
          </Reveal>
          <Reveal>
            <div role="radiogroup" aria-label="Show fees per" className="relative inline-flex rounded-full border border-cobalt-200 bg-white p-1">
              {(['term', 'session'] as Mode[]).map((mo) => (
                <button
                  key={mo}
                  type="button"
                  role="radio"
                  aria-checked={mode === mo}
                  onClick={() => setMode(mo)}
                  className={`relative z-10 min-h-11 rounded-full px-5 font-semibold transition-colors duration-300 ${
                    mode === mo ? 'text-white' : 'text-cobalt-700 hover:text-cobalt-500'
                  }`}
                >
                  {mo === 'term' ? 'Per term' : 'Per session'}
                </button>
              ))}
              <span
                aria-hidden="true"
                className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-cobalt-700 transition-transform duration-400 ease-(--ease-out-expo) ${
                  mode === 'term' ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ left: 4 }}
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 overflow-hidden rounded-3xl border border-cobalt-200 bg-white">
          <table className="w-full text-left">
            <thead className="hidden sm:table-header-group">
              <tr className="border-b border-line text-sm text-muted">
                <th scope="col" className="px-6 py-4 font-semibold">Level</th>
                <th scope="col" className="px-6 py-4 font-semibold">{mode === 'term' ? 'Per term' : 'Per session, three terms'}</th>
                <th scope="col" className="px-6 py-4 font-semibold">Classes</th>
              </tr>
            </thead>
            <tbody>
              {site.fees.map((f, i) => {
                const school = site.schools[i]
                return (
                  <tr key={f.level} className="grid grid-cols-1 gap-1 border-b border-line px-6 py-5 last:border-0 sm:table-row sm:p-0">
                    <th scope="row" className="font-display text-2xl text-ink sm:px-6 sm:py-5 sm:text-xl">
                      {f.level}
                    </th>
                    <td className="sm:px-6 sm:py-5">
                      <AnimatePresence mode="wait" initial={false}>
                        <m.span
                          key={mode}
                          className="inline-block text-lg font-semibold text-cobalt-700"
                          initial={reduce ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {naira.format(f.perTerm[0] * mult)} to {naira.format(f.perTerm[1] * mult)}
                        </m.span>
                      </AnimatePresence>
                    </td>
                    <td className="text-muted sm:px-6 sm:py-5">{school.classes}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="text-xl">Included in the fee</h3>
            <ul className="mt-4 space-y-2">
              {site.feesInclude.map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <CheckIcon width={18} height={18} className="mt-1 shrink-0 text-cobalt-700" /> {x}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-xl">Paid separately</h3>
            <ul className="mt-4 space-y-2 text-muted">
              {site.feesExclude.map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt-300" /> {x}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.95rem] text-muted">
              Bank transfer, POS, or cash at the bursary. Payment in two instalments is possible by arrangement.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
