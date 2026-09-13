import { site, waLink } from '../site.config'
import { WhatsAppIcon } from './icons'

export function TopBar() {
  const a = site.admissions
  return (
    <div className="bg-cobalt-950 text-sm text-cobalt-200">
      <div className="container-x flex min-h-10 items-center justify-between gap-4">
        <p className="truncate">
          <span className="font-semibold text-white">Admissions open for {a.session}.</span>{' '}
          <span className="hidden sm:inline">Entrance assessment {a.examDate}.</span>
        </p>
        <a
          href={waLink('Hello Gudmerc, I would like to ask about admissions.')}
          target="_blank"
          rel="noopener"
          className="inline-flex min-h-10 shrink-0 items-center gap-2 font-semibold text-white hover:text-gold-300"
        >
          <WhatsAppIcon width={16} height={16} /> Ask admissions
        </a>
      </div>
    </div>
  )
}
