import { useEffect, useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import { Reveal } from './Reveal'
import { site } from '../site.config'
import { ChevronLeft, ChevronRight, CloseIcon } from './icons'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const reduce = useReducedMotion()
  const items = site.gallery

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((a) => (a === null ? a : (a + 1) % items.length))
      if (e.key === 'ArrowLeft') setActive((a) => (a === null ? a : (a - 1 + items.length) % items.length))
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, items.length])

  return (
    <section className="bg-white" aria-labelledby="gallery-heading">
      <div className="container-x py-20 lg:py-28">
        <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl">
            An ordinary week
          </h2>
          <p className="text-muted">Tap a photo to see it larger.</p>
        </Reveal>
        <ul className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>li]:mb-4 [&>li]:break-inside-avoid">
          {items.map((g, i) => (
            <li key={g.src}>
              <Reveal delay={(i % 4) * 0.05}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="group block w-full overflow-hidden rounded-2xl bg-cobalt-100"
                  aria-label={`Open photo: ${g.alt}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={600}
                    height={i % 3 === 0 ? 800 : 450}
                    loading="lazy"
                    decoding="async"
                    className={`w-full object-cover transition-transform duration-700 ease-(--ease-out-quart) group-hover:scale-[1.04] ${
                      i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    }`}
                  />
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {active !== null && (
          <m.div
            role="dialog"
            aria-modal="true"
            aria-label={items[active].alt}
            className="fixed inset-0 z-50 flex items-center justify-center bg-cobalt-950/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActive(null)}
          >
            <m.figure
              key={active}
              className="relative max-h-full max-w-5xl"
              initial={reduce ? false : { scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={items[active].src} alt={items[active].alt} className="max-h-[80vh] w-auto rounded-2xl object-contain" />
              <figcaption className="mt-3 text-center text-cobalt-200">{items[active].alt}</figcaption>
            </m.figure>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActive((a) => (a === null ? a : (a - 1 + items.length) % items.length))
              }}
              className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:inline-flex"
              aria-label="Previous photo"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActive((a) => (a === null ? a : (a + 1) % items.length))
              }}
              className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:inline-flex"
              aria-label="Next photo"
            >
              <ChevronRight />
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  )
}
