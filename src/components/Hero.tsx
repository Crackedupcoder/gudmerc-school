import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { site, waLink } from '../site.config'
import { WhatsAppIcon } from './icons'

const headline = 'A place for future giants.'

const cards = [
  { label: 'Entrance assessment', value: site.admissions.examDateShort },
  { label: 'WAEC and NECO centre', value: `Since ${site.founded}` },
  { label: 'One campus', value: 'Creche to SS3' },
]

export function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -130])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40])
  const yBg = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])
  const ys = [y1, y2, y3]

  const words = headline.split(' ')
  const tile = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 40, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 1, ease, delay: 0.5 + i * 0.12 },
  })

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* Copy stands alone on white. */}
      <div className="container-x pt-12 sm:pt-16 lg:pt-24">
        <m.p
          className="eyebrow-line"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          Admissions open for {site.admissions.session}. Entrance assessment {site.admissions.examDate}.
        </m.p>

        <h1 className="mt-4 max-w-4xl text-[clamp(2.9rem,7.4vw,6rem)]">
          {words.map((w, i) => (
            <span key={i} className="mr-[0.24em] inline-block overflow-hidden pb-[0.1em] align-bottom">
              <m.span
                className="inline-block"
                initial={reduce ? false : { y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.07 }}
              >
                {w}
              </m.span>
            </span>
          ))}
        </h1>

        <m.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.45 }}
        >
          Gudmerc has taught Kurudu’s children from creche to SS3 since {site.founded}. One campus,
          small classes, and results you can check before you enrol.
        </m.p>

        <m.div
          className="mt-8 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
        >
          <a href="#visit" className="btn-gold px-7 text-base">
            Book a visit
          </a>
          <a
            href={waLink('Hello Gudmerc, I would like to ask about admissions.')}
            target="_blank"
            rel="noopener"
            className="btn-whatsapp px-7 text-base"
          >
            <WhatsAppIcon /> Ask admissions on WhatsApp
          </a>
        </m.div>
      </div>

      {/* The campus as a composed board. Cards sit on white, never on a photo. */}
      <div ref={ref} className="container-x relative mt-12 pb-16 sm:mt-16 lg:mt-20 lg:pb-28">
        <m.div
          aria-hidden="true"
          style={{ y: yBg }}
          className="gingham pointer-events-none absolute -inset-x-10 -top-10 -bottom-6 -z-10 [mask-image:radial-gradient(70%_70%_at_60%_40%,black,transparent)]"
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6 lg:grid-rows-2">
          <m.figure {...tile(0)} className="col-span-2 aspect-[4/3] overflow-hidden rounded-3xl bg-cobalt-100 sm:aspect-[16/10] lg:col-span-4 lg:row-span-2 lg:aspect-auto">
            <img
              src="/images/hero-main.jpg"
              alt="Gudmerc students in their blue gingham uniforms, laughing together in class"
              width={1600}
              height={1000}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </m.figure>
          <m.figure {...tile(1)} className="aspect-[4/3] overflow-hidden rounded-3xl bg-cobalt-100 lg:col-span-2 lg:aspect-auto">
            <img src="/images/hero-a.jpg" alt="A nursery pupil deep in a colouring activity" width={800} height={600} decoding="async" className="h-full w-full object-cover" />
          </m.figure>
          <m.figure {...tile(2)} className="aspect-[4/3] overflow-hidden rounded-3xl bg-cobalt-100 lg:col-span-2 lg:aspect-auto">
            <img src="/images/hero-b.jpg" alt="A teacher working through a problem with two students" width={800} height={600} decoding="async" className="h-full w-full object-cover" />
          </m.figure>
        </div>

        {/* Floating cards on large screens */}
        <ul className="hidden lg:block" aria-label="Key facts">
          {cards.map((c, i) => (
            <m.li
              key={c.label}
              style={{ y: ys[i] }}
              className={`absolute w-60 rounded-2xl border border-line bg-white p-4 shadow-[0_30px_60px_-30px_oklch(0.22_0.06_262/0.45)] ${
                i === 0 ? 'bottom-20 left-2' : i === 1 ? 'right-2 top-[-1.25rem]' : 'right-14 bottom-24'
              }`}
            >
              <m.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 1 + i * 0.15 }}
              >
                <p className="text-sm text-muted">{c.label}</p>
                <p className="mt-1 font-display text-2xl leading-none text-ink">{c.value}</p>
              </m.div>
            </m.li>
          ))}
        </ul>

        {/* Same facts as a snap strip on small screens */}
        <ul className="-mx-5 mt-4 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:hidden" aria-label="Key facts">
          {cards.map((c) => (
            <li key={c.label} className="min-w-[70%] snap-start rounded-2xl border border-line bg-white p-4 sm:min-w-[40%]">
              <p className="text-sm text-muted">{c.label}</p>
              <p className="mt-1 font-display text-2xl leading-none text-ink">{c.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
