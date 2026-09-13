import { useEffect, useState } from 'react'
import { AnimatePresence, m, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { site, waLink } from '../site.config'
import { CloseIcon, Mark, MenuIcon, PhoneIcon, WhatsAppIcon } from './icons'

const links = [
  { href: '#schools', label: 'Schools' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#fees', label: 'Fees' },
  { href: '#results', label: 'Results' },
  { href: '#day', label: 'School day' },
  { href: '#visit', label: 'Visit' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 12))

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        open ? 'bg-cobalt-700' : 'bg-white'
      } ${
        scrolled && !open ? 'shadow-[0_1px_0_0_var(--color-line),0_12px_30px_-24px_oklch(0.22_0.06_262/0.6)]' : open ? '' : 'shadow-[0_1px_0_0_var(--color-line)]'
      }`}
    >
      <div className="container-x relative z-50 flex h-18 items-center justify-between gap-6">
        <a href="#top" className={`flex items-center gap-3 ${open ? 'text-white' : 'text-cobalt-700'}`} aria-label={`${site.name} home`}>
          <Mark className="h-9 w-9" check={open ? 'oklch(0.42 0.19 262)' : '#fff'} />
          <span className={`font-display text-2xl leading-none ${open ? 'text-white' : 'text-ink'}`}>
            {site.shortName} <span className={`font-sans text-base font-semibold ${open ? 'text-cobalt-200' : 'text-cobalt-700'}`}>Schools</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="py-2 font-semibold text-body hover:text-cobalt-700">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#visit" className="btn-gold hidden sm:inline-flex">
            Book a visit
          </a>
          <button
            type="button"
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full lg:hidden ${open ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-cobalt-50'}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-cobalt-700 text-white lg:hidden"
            initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
            exit={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease }}
          >
            <nav className="container-x flex flex-1 flex-col justify-center gap-1 pb-10 pt-32" aria-label="Mobile">
              {links.map((l, i) => (
                <m.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-4xl leading-none sm:text-5xl"
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.05 }}
                >
                  {l.label}
                </m.a>
              ))}
              <m.div
                className="mt-8 grid grid-cols-2 gap-3"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.5 }}
              >
                <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
                  <PhoneIcon /> Call
                </a>
                <a
                  href={waLink('Hello Gudmerc, I would like to ask about admissions.')}
                  target="_blank"
                  rel="noopener"
                  className="btn-whatsapp"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
              </m.div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
