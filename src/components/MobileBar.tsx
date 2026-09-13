import { site, waLink } from '../site.config'
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from './icons'

/** One-thumb actions for parents on a phone. */
export function MobileBar() {
  const item = 'flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold'
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a href={`tel:${site.phoneTel}`} className={`${item} text-ink`}>
        <PhoneIcon width={22} height={22} className="text-cobalt-700" />
        Call
      </a>
      <a
        href={waLink('Hello Gudmerc, I would like to ask about admissions.')}
        target="_blank"
        rel="noopener"
        className={`${item} bg-whatsapp text-ink`}
      >
        <WhatsAppIcon width={22} height={22} />
        WhatsApp
      </a>
      <a href="#visit" className={`${item} bg-gold-500 text-ink`}>
        <CalendarIcon width={22} height={22} />
        Book a visit
      </a>
    </nav>
  )
}
