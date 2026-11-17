import { useCallback, useEffect, useState } from 'react'
import Loader from './components/Loader'
import Mesh from './components/Mesh'
import { Nav, Hero, Ticker, About, Honors, Experience, Work, Toolkit, Contact } from './components/Sections'
import useScrollEffects from './hooks/useScrollEffects'

export default function App() {
  const [ready, setReady] = useState(false)
  const onDone = useCallback(() => setReady(true), [])

  useScrollEffects(true)

  useEffect(() => {
    document.documentElement.classList.toggle('locked', !ready)
    document.documentElement.classList.toggle('ready', ready)
    if (!ready) window.scrollTo(0, 0)
  }, [ready])

  return (
    <>
      <Loader onDone={onDone} />
      <Mesh />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Honors />
        <Experience />
        <Work />
        <Toolkit />
        <Contact />
      </main>
    </>
  )
}
