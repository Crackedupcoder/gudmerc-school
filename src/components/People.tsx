import { Reveal } from './Reveal'
import { site } from '../site.config'

export function People() {
  const [proprietor, ...staff] = site.people
  return (
    <section className="bg-cobalt-50" aria-labelledby="people-heading">
      <div className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 id="people-heading" className="sr-only">
              From the proprietor
            </h2>
            <blockquote className="font-display text-[1.6rem] leading-snug text-ink sm:text-3xl lg:text-[2.1rem]">
              “{site.proprietorNote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-cobalt-700 font-display text-lg text-white">
                {proprietor.initials}
              </span>
              <span>
                <span className="block font-semibold text-ink">{proprietor.name}</span>
                <span className="text-muted">{proprietor.role}, since {site.founded}</span>
              </span>
            </figcaption>
          </Reveal>
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="text-xl">Who you will meet on a visit</h3>
            </Reveal>
            <ul className="mt-4 divide-y divide-line">
              {staff.map((p, i) => (
                <li key={p.name}>
                  <Reveal delay={i * 0.07} className="flex items-center gap-4 py-4">
                    <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-display text-cobalt-700 ring-1 ring-cobalt-200">
                      {p.initials}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{p.name}</span>
                      <span className="text-muted">{p.role}</span>
                    </span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
