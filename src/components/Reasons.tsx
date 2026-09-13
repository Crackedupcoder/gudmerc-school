import { Reveal } from './Reveal'

const reasons = [
  {
    title: 'Results you can check.',
    body: 'We publish our WAEC and NECO outcomes every year and we are our own exam centre. Ask any parent at the gate.',
  },
  {
    title: 'One campus, creche to SS3.',
    body: 'Your children grow up in one school with teachers who already know them. One drop-off, one PTA, one bus.',
  },
  {
    title: 'Safe from the gate to the classroom.',
    body: 'A guarded gate, pick-up cards, CCTV, a nurse on duty, and a fire drill every term. Boring, on purpose.',
  },
]

export function Reasons() {
  return (
    <section className="bg-white" aria-labelledby="reasons-heading">
      <div className="container-x grid gap-10 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <Reveal className="lg:col-span-5">
          <h2 id="reasons-heading" className="text-3xl sm:text-4xl">
            Why parents in Kurudu choose Gudmerc
          </h2>
          <p className="mt-4 text-muted">
            Twenty-three years on the Orozo–Karshi road, and most new families still come by word of mouth.
          </p>
          <figure className="mt-8 overflow-hidden rounded-3xl bg-cobalt-100">
            <img
              src="/images/reasons.jpg"
              alt="A full classroom of pupils with hands raised"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </Reveal>
        <ol className="divide-y divide-line lg:col-span-7">
          {reasons.map((r, i) => (
            <li key={r.title}>
              <Reveal delay={i * 0.08} className="grid gap-3 py-8 first:pt-0 sm:grid-cols-12 sm:gap-8">
                <h3 className="text-3xl leading-tight sm:col-span-5 sm:text-[2rem]">{r.title}</h3>
                <p className="text-lg text-muted sm:col-span-7">{r.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
