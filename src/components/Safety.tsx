import { Reveal } from './Reveal'
import { site } from '../site.config'
import { BusIcon, CameraIcon, CardIcon, FireIcon, HeartIcon, ShieldIcon } from './icons'

const icons = { shield: ShieldIcon, camera: CameraIcon, heart: HeartIcon, card: CardIcon, bus: BusIcon, fire: FireIcon }

export function Safety() {
  return (
    <section id="safety" className="scroll-mt-20 bg-cobalt-50" aria-labelledby="safety-heading">
      <div className="container-x grid gap-10 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <Reveal className="lg:col-span-5">
          <figure className="overflow-hidden rounded-3xl bg-cobalt-100">
            <img
              src="/images/safety.jpg"
              alt="A teacher walking a line of pupils across the compound"
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <h2 id="safety-heading" className="text-3xl sm:text-4xl lg:text-5xl">
              Safe, from the gate to the classroom
            </h2>
            <p className="mt-4 text-lg text-muted">
              The things you would want to ask about on a visit, answered before you ask.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {site.safety.map((s, i) => {
              const Icon = icons[s.icon as keyof typeof icons]
              return (
                <li key={s.title}>
                  <Reveal delay={(i % 2) * 0.08} className="flex gap-4">
                    <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-cobalt-700 ring-1 ring-cobalt-200">
                      <Icon />
                    </span>
                    <div>
                      <h3 className="font-sans text-lg font-semibold text-ink">{s.title}</h3>
                      <p className="mt-1 text-muted">{s.body}</p>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
