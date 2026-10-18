import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { CredentialStrip } from './components/CredentialStrip'
import { Builds } from './components/Builds'
import { Tuesday } from './components/Tuesday'
import { WorkWithMe } from './components/WorkWithMe'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-control focus:bg-ink focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <CredentialStrip />
        <Builds />
        <Tuesday />
        <WorkWithMe />
      </main>
      <Footer />
    </>
  )
}
