import { useState, useEffect, useRef } from 'react'

const menu = {
  About:   ['Overview', 'Skills', 'Education'],
  Work:    ['Experience', 'Projects', 'GitHub'],
  Connect: ['Email', 'LinkedIn', 'Resume'],
}

const targets = {
  Overview:   'about',
  Skills:     'skills',
  Education:  'education',
  Experience: 'experience',
  Projects:   'projects',
  Email:      'contact',
}

const externals = {
  GitHub:   'https://github.com/Hashir-Rauf',
  LinkedIn: 'https://www.linkedin.com/in/hrm05/',
  Resume:   'mailto:hashirrauf0321@outlook.com',
}

export default function Nav() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (!open) return
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [open])

  const go = (label) => {
    const id = targets[label]
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    else if (externals[label]) window.open(externals[label], '_blank')
    setOpen(false)
  }

  return (
    <header className="nav-header">
      <div className={`nav-pill${scrolled ? ' scrolled' : ''}`} ref={ref}>
        <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? '✕' : '≡'}
        </button>
        <a href="#hero" className="nav-logo">&lt;/&gt;</a>
        <a href="#contact" className="nav-hire">Hire Me</a>

        {open && (
          <div className="nav-mega">
            {Object.entries(menu).map(([section, items]) => (
              <div key={section} className="nav-mega-col">
                <div className="nav-mega-title">{section}</div>
                {items.map(item => (
                  <button key={item} className="nav-mega-item" onClick={() => go(item)}>
                    <span>↗</span>{item}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
