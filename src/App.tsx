import { LazyMotion, domAnimation } from 'motion/react'
import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Reasons } from './components/Reasons'
import { Schools } from './components/Schools'
import { Admissions } from './components/Admissions'
import { Fees } from './components/Fees'
import { Results } from './components/Results'
import { SchoolDay } from './components/SchoolDay'
import { Safety } from './components/Safety'
import { TermDates } from './components/TermDates'
import { People } from './components/People'
import { Gallery } from './components/Gallery'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'
import { MobileBar } from './components/MobileBar'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <Reasons />
        <Schools />
        <Admissions />
        <Fees />
        <Results />
        <SchoolDay />
        <Safety />
        <TermDates />
        <People />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </LazyMotion>
  )
}
