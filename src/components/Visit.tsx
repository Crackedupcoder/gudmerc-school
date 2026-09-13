import { useState, type FormEvent } from 'react'
import { Reveal } from './Reveal'
import { mapsEmbed, mapsLink, site, waLink } from '../site.config'
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './icons'

const days = ['Any weekday morning', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Open day, 6 March 2027']

export function Visit() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const a = site.address

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') ?? '').trim()
    const phone = String(f.get('phone') ?? '').trim()
    const level = String(f.get('level') ?? '')
    const day = String(f.get('day') ?? '')
    const note = String(f.get('note') ?? '').trim()
    const msg =
      `Hello Gudmerc, my name is ${name}. I would like to visit the school. ` +
      `Class of entry: ${level}. Preferred day: ${day}. You can reach me on ${phone}.` +
      (note ? ` Note: ${note}` : '')
    window.open(waLink(msg), '_blank', 'noopener')
    setStatus('sent')
  }

  const field =
    'mt-1.5 block w-full rounded-xl border border-cobalt-200 bg-white px-4 py-3 text-body placeholder:text-muted focus:border-cobalt-500 focus:outline-none focus:ring-3 focus:ring-gold-300'

  return (
    <section id="visit" className="scroll-mt-20 bg-cobalt-50" aria-labelledby="visit-heading">
      <div className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 id="visit-heading" className="text-3xl sm:text-4xl lg:text-5xl">
              Come and see an ordinary day
            </h2>
            <p className="mt-4 text-lg text-muted">
              The best time to visit is a weekday morning while lessons are on. Fill this in and we will
              open WhatsApp with your details ready to send. The admissions office replies the same day.
            </p>

            <address className="mt-8 not-italic">
              <div className="flex items-start gap-3">
                <PinIcon className="mt-1 shrink-0 text-cobalt-700" />
                <p className="text-lg leading-snug">
                  {a.line1}
                  <br />
                  {a.line2}
                </p>
              </div>
            </address>
            <h3 className="mt-6 text-xl">Getting here</h3>
            <ol className="mt-3 space-y-2 text-muted">
              {a.landmarks.map((l, i) => (
                <li key={l} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cobalt-100 text-sm font-bold text-cobalt-700">
                    {i + 1}
                  </span>
                  <span>{l}</span>
                </li>
              ))}
            </ol>
            <h3 className="mt-6 flex items-center gap-2 text-xl">
              <ClockIcon className="text-cobalt-700" /> Hours
            </h3>
            <dl className="mt-3 divide-y divide-line">
              {site.hours.map((h) => (
                <div key={h.label} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:justify-between sm:gap-6">
                  <dt className="text-muted">{h.label}</dt>
                  <dd className="font-semibold sm:text-right">{h.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={mapsLink} target="_blank" rel="noopener" className="btn-outline">
                <PinIcon /> Get directions
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-outline">
                <PhoneIcon /> {site.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-cobalt-200 bg-white p-6 shadow-[0_24px_60px_-40px_oklch(0.42_0.19_262)] sm:p-8"
                aria-describedby="form-help"
              >
                <h3 className="text-2xl">Book a visit</h3>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-semibold">Your name</span>
                    <input name="name" required autoComplete="name" className={field} placeholder="Mrs. Amina Bello" />
                  </label>
                  <label className="block">
                    <span className="font-semibold">Phone number</span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9+ ]{10,16}"
                      title="Enter a Nigerian phone number, for example 0803 123 4567"
                      className={field}
                      placeholder="0803 123 4567"
                    />
                  </label>
                  <label className="block">
                    <span className="font-semibold">Class your child would join</span>
                    <select name="level" className={field} defaultValue="Primary 1">
                      {['Creche', 'Nursery 1', 'Nursery 2', 'Reception', 'Primary 1', 'Primary 2 to 6', 'JSS1', 'JSS2 or JSS3', 'SS1', 'SS2 or SS3'].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="font-semibold">When would you like to come?</span>
                    <select name="day" className={field} defaultValue={days[0]}>
                      {days.map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="font-semibold">
                      Anything we should know? <span className="font-normal text-muted">(optional)</span>
                    </span>
                    <textarea name="note" rows={3} className={field} placeholder="For example: we are moving to Kurudu in January and need a bus route from Jikwoyi." />
                  </label>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button type="submit" className="btn-whatsapp px-7">
                    <WhatsAppIcon /> Send on WhatsApp
                  </button>
                  <p id="form-help" className="text-sm text-muted" aria-live="polite">
                    {status === 'sent'
                      ? `Opening WhatsApp. If nothing happened, call ${site.phoneDisplay}.`
                      : 'Nothing is sent until you press send inside WhatsApp.'}
                  </p>
                </div>
              </form>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-cobalt-100">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                  <PinIcon width={36} height={36} className="text-cobalt-700" />
                  <p className="font-display text-xl text-ink">{a.line1}, {a.line2}</p>
                  <a href={mapsLink} target="_blank" rel="noopener" className="link-arrow">
                    Open in Google Maps <ArrowIcon />
                  </a>
                </div>
                <iframe
                  title="Map showing Kurudu, Abuja"
                  src={mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative aspect-[16/9] w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
