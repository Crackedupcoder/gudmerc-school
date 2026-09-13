import { useEffect, useRef, useState } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Reveal } from './Reveal'
import { site } from '../site.config'

function useIsLarge() {
  const [large, setLarge] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const on = () => setLarge(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return large
}

/** Desktop: the day scrolls sideways as you scroll down. Phones: a vertical timeline. */
export function SchoolDay() {
  const reduce = useReducedMotion()
  const large = useIsLarge()
  const horizontal = large && !reduce
  return (
    <section id="day" className="scroll-mt-20 bg-white" aria-labelledby="day-heading">
      <div className="container-x pt-20 lg:pt-28">
        <Reveal className="max-w-2xl">
          <h2 id="day-heading" className="text-3xl sm:text-4xl lg:text-5xl">
            A day at Gudmerc
          </h2>
          <p className="mt-4 text-lg text-muted">
            From the first car at the gate to the last child collected. This is an ordinary Tuesday.
          </p>
        </Reveal>
      </div>
      {horizontal ? <HorizontalDay /> : <VerticalDay />}
    </section>
  )
}

function HorizontalDay() {
  const ref = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLOListElement>(null)
  const [dist, setDist] = useState(0)
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return
      setDist(Math.max(0, track.scrollWidth - window.innerWidth + 64))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist])
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="relative mt-10" style={{ height: `calc(${Math.max(dist, 1)}px + 100vh)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <m.ol ref={trackRef} style={{ x }} className="flex w-max gap-6 pl-[max(1.25rem,calc((100vw-72rem)/2+2rem))] pr-8">
          {site.day.map((d, i) => (
            <DayCard key={d.time} d={d} i={i} />
          ))}
        </m.ol>
        <div className="container-x mt-10">
          <div className="h-1 w-full overflow-hidden rounded-full bg-cobalt-100">
            <m.div style={{ width: progress }} className="h-full bg-cobalt-700" />
          </div>
          <p className="mt-3 text-sm text-muted">Keep scrolling to move through the day.</p>
        </div>
      </div>
    </div>
  )
}

function VerticalDay() {
  return (
    <ol className="container-x relative mt-10 pb-20 lg:pb-28">
      <span aria-hidden="true" className="absolute left-[calc(1.25rem+11px)] top-2 bottom-24 w-px bg-cobalt-200 sm:left-[calc(2rem+11px)]" />
      {site.day.map((d, i) => (
        <li key={d.time} className="relative pl-12 pb-10 last:pb-0">
          <span aria-hidden="true" className="absolute left-1.5 top-2 h-3 w-3 rounded-full border-2 border-white bg-cobalt-700 ring-2 ring-cobalt-200" />
          <Reveal delay={i * 0.05} className="grid gap-4 sm:grid-cols-[7rem_1fr_8rem] sm:items-start">
            <p className="font-display text-2xl text-cobalt-700">{d.time}</p>
            <div>
              <h3 className="text-2xl">{d.title}</h3>
              <p className="mt-1 text-muted">{d.body}</p>
            </div>
            <img src={d.img} alt="" width={320} height={240} loading="lazy" decoding="async" className="aspect-[4/3] w-full max-w-[15rem] rounded-2xl object-cover sm:w-32 sm:max-w-none" />
          </Reveal>
        </li>
      ))}
    </ol>
  )
}

function DayCard({ d, i }: { d: (typeof site.day)[number]; i: number }) {
  return (
    <li className="w-[22rem] shrink-0">
      <figure className="overflow-hidden rounded-3xl bg-cobalt-100">
        <img src={d.img} alt="" width={704} height={528} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
      </figure>
      <p className="mt-5 flex items-center gap-3 font-display text-3xl text-cobalt-700">
        <span className="font-sans text-sm font-semibold text-muted">{String(i + 1).padStart(2, '0')}</span>
        {d.time}
      </p>
      <h3 className="mt-1 text-2xl">{d.title}</h3>
      <p className="mt-2 text-muted">{d.body}</p>
    </li>
  )
}
