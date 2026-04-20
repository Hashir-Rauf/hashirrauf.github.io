import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark-space')

  useEffect(() => {
    if (theme === 'dark-space') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const cursor = document.createElement('div')
    const ring = document.createElement('div')
    cursor.id = 'cursor'
    ring.id = 'cursor-ring'
    document.body.appendChild(cursor)
    document.body.appendChild(ring)

    let mx = 0, my = 0, rx = 0, ry = 0, raf

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    const animate = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      cursor.style.left = mx + 'px'
      cursor.style.top  = my + 'px'
      ring.style.left   = rx + 'px'
      ring.style.top    = ry + 'px'
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      cursor.remove()
      ring.remove()
    }
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
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
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </>
  )
}
