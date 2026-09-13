# Gudmerc Schools, demonstration website

A single-page website built for Gudmerc Kiddies Academy and Gudmerc High School, Kurudu, Abuja. It is a demonstration built on public information and realistic placeholders, to be corrected with the proprietor before launch.

## Run it

```bash
npm install
npm run dev        # local preview at http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

Stack: React 19, Vite, Tailwind CSS 4, Motion. No backend. The visit form opens WhatsApp with a pre-filled message.

## Change the facts in one place

Everything about the school lives in `src/site.config.ts`: names, phone and WhatsApp numbers, address and landmark directions, hours, admissions dates and steps, the three school sections, fee ranges, results, the school day, safety points, term dates, people, and gallery captions. Items marked `PLACEHOLDER` are invented and must be confirmed.

Confirmed from public sources (September 2026): the two school names, the Kurudu location on the Orozo–Karshi road, the founding date and founder, day school with the Nigerian curriculum, WAEC exam centre, the tagline "A place for future giants", participation in the 2025 FCT Inter-Private Schools Debate, and the blue gingham uniform. Everything else is a placeholder written to look realistic, including every phone number, fee, result, date, and staff name other than the founder.

## Design notes

- Colour comes from the uniform: cobalt for structure, gold for actions, white surfaces, and the gingham check as a pattern behind the hero board.
- Type: Libre Caslon Display for headings, Schibsted Grotesk for everything else, both from Google Fonts.
- The hero keeps text off photographs. Copy sits on white; the campus is a composed board with floating fact cards that move at their own speed on scroll.
- Section reveals are CSS scroll-driven animations with a visible fallback. Motion handles the hero choreography, the menu, the fee toggle, the results bars, the school-day horizontal scroll on large screens, and the gallery lightbox. Everything respects reduced motion.

## Photos

Stock photos from Pexels, credited in `IMAGE-CREDITS.md`. Replace them with photos of the real compound, classrooms, and children in the gingham uniform. Files in `public/images/` are named by where they appear.

## Before launch

- Remove the `noindex` meta tag in `index.html` and set the real phone number in the JSON-LD block.
- Set `isDemo` to `false` in `src/site.config.ts`.
- Point gudmercacademy.com, which the school already owns, at the host.
- Create the Google Business Profile so the school appears in Maps.
