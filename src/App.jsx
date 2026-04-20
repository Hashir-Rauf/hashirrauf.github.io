import { useState, useEffect } from 'react'
import ThemeEntry from './ThemeEntry'

// Existing dark-space components
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import TechMarquee from './components/TechMarquee'
import About      from './components/About'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

// Themed portfolios
import AuroraPortfolio    from './themes/aurora/AuroraPortfolio'
import TerminalPortfolio  from './themes/terminal/TerminalPortfolio'
import GoldPortfolio      from './themes/gold/GoldPortfolio'
import SynthwavePortfolio from './themes/synthwave/SynthwavePortfolio'
import MinimalPortfolio   from './themes/minimal/MinimalPortfolio'

function DarkSpacePortfolio({ onBack }) {
  useEffect(() => {
    const cursor = document.createElement('div')
    const ring   = document.createElement('div')
    cursor.id = 'cursor'; ring.id = 'cursor-ring'
    document.body.appendChild(cursor); document.body.appendChild(ring)
    let mx = 0, my = 0, rx = 0, ry = 0, raf
    const onMove = e => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)
    const tick = () => {
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15
      cursor.style.left = mx + 'px'; cursor.style.top  = my + 'px'
      ring.style.left   = rx + 'px'; ring.style.top    = ry + 'px'
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); cursor.remove(); ring.remove() }
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <button
        onClick={onBack}
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 500,
          background: 'rgba(13,20,38,0.85)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px',
          color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600,
          padding: '0.5rem 1rem', cursor: 'none', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.target.style.color = '#f8fafc'; e.target.style.borderColor = 'rgba(255,255,255,0.22)' }}
        onMouseLeave={e => { e.target.style.color = '#94a3b8'; e.target.style.borderColor = 'rgba(255,255,255,0.12)' }}
      >
        ← themes
      </button>
      <Nav />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

const PORTFOLIOS = {
  'dark-space': DarkSpacePortfolio,
  'aurora':     AuroraPortfolio,
  'terminal':   TerminalPortfolio,
  'gold':       GoldPortfolio,
  'synthwave':  SynthwavePortfolio,
  'minimal':    MinimalPortfolio,
}

export default function App() {
  const [theme, setTheme] = useState(null)

  const pick = id => {
    setTheme(id)
    // scroll to top when switching themes
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const back = () => {
    setTheme(null)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  if (!theme) return <ThemeEntry onSelect={pick} />

  const Portfolio = PORTFOLIOS[theme]
  return Portfolio ? <Portfolio onBack={back} /> : null
}
