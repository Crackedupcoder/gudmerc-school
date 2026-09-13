import { mapsLink, site } from '../site.config'
import { Mark } from './icons'

export function Footer() {
  const a = site.address
  return (
    <footer className="bg-cobalt-950 pb-24 text-cobalt-200 md:pb-0">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#top" className="flex items-center gap-3 text-cobalt-500">
            <Mark className="h-9 w-9" />
            <span className="font-display text-2xl leading-none text-white">
              {site.shortName} <span className="font-sans text-base font-semibold text-cobalt-300">Schools</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs leading-relaxed">
            Gudmerc Kiddies Academy and Gudmerc High School. {site.tagline} Since {site.founded}.
          </p>
        </div>
        <div>
          <h3 className="font-sans text-lg font-semibold text-white">Contact</h3>
          <address className="mt-3 space-y-2 not-italic">
            <p>
              <a href={mapsLink} target="_blank" rel="noopener" className="hover:text-white">
                {a.line1}, {a.line2}
              </a>
            </p>
            <p>
              <a href={`tel:${site.phoneTel}`} className="font-semibold text-white">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
          </address>
        </div>
        <div>
          <h3 className="font-sans text-lg font-semibold text-white">Hours</h3>
          <ul className="mt-3 space-y-2">
            {site.hours.slice(0, 3).map((h) => (
              <li key={h.label}>
                <span className="block text-sm text-cobalt-300">{h.label}</span>
                <span className="text-white">{h.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-lg font-semibold text-white">Quick links</h3>
          <ul className="mt-3 space-y-2">
            {[
              ['#schools', 'Schools'],
              ['#admissions', 'Admissions'],
              ['#fees', 'Fees'],
              ['#results', 'Results'],
              ['#calendar', 'Term dates'],
              ['#visit', 'Book a visit'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Website by{' '}
            <a href={site.developer.url} className="font-semibold text-white">
              {site.developer.name}
            </a>
            {site.isDemo && <span className="text-cobalt-300">. Demonstration site, details to be confirmed with the school.</span>}
          </p>
        </div>
      </div>
    </footer>
  )
}
