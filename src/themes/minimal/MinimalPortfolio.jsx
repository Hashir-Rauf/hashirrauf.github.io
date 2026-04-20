import { useState, useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { useCursor } from '../../hooks/useCursor'
import { ROLES, BIO, STATS, EXPERIENCE, PROJECTS, LINKS } from '../../data'
import './minimal.css'

function MinimalNav({ onBack }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <header className={`mn-nav${scrolled ? ' scrolled' : ''}`}>
      <button className="mn-back" onClick={onBack}>← Themes</button>
      <a href="#mn-hero" className="mn-logo">Hashir Rauf</a>
      <nav className="mn-links">
        {['about','experience','projects','contact'].map(s => (
          <button key={s} onClick={() => go(`mn-${s}`)}>{s.charAt(0).toUpperCase() + s.slice(1)}</button>
        ))}
      </nav>
      <a href={`mailto:${LINKS.email}`} className="mn-hire">Hire Me</a>
    </header>
  )
}

function MinimalHero() {
  const [typed, setTyped] = useState('')
  const [pi, setPi] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const phrase = ROLES[pi]
    let t
    if (!del) {
      if (typed.length < phrase.length) t = setTimeout(() => setTyped(phrase.slice(0, typed.length + 1)), 65)
      else t = setTimeout(() => setDel(true), 2200)
    } else {
      if (typed.length > 0) t = setTimeout(() => setTyped(typed.slice(0, -1)), 35)
      else { setDel(false); setPi((pi + 1) % ROLES.length) }
    }
    return () => clearTimeout(t)
  }, [typed, pi, del])

  return (
    <section id="mn-hero" className="mn-hero">
      <div className="mn-hero-inner" data-reveal>
        <div className="mn-available">
          <span className="mn-avail-dot" />
          Available for Opportunities
        </div>
        <h1 className="mn-hero-title">
          Hi, I'm <span className="mn-blue">Hashir Rauf.</span>
        </h1>
        <p className="mn-hero-sub">{typed}<span className="mn-blink">|</span></p>
        <p className="mn-hero-bio">{BIO}</p>
        <div className="mn-hero-btns">
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="mn-btn mn-btn-outline">GitHub</a>
          <a href="#mn-contact" className="mn-btn mn-btn-solid">Get in Touch</a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="mn-btn mn-btn-outline">LinkedIn</a>
        </div>
        <div className="mn-stats">
          {STATS.map(s => (
            <div key={s.label} className="mn-stat">
              <span className="mn-stat-num">{s.num}</span>
              <span className="mn-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MnSection({ id, label, title, accent, children }) {
  return (
    <section id={id} className="mn-section">
      <div className="mn-section-head" data-reveal>
        <span className="mn-section-tag">{label}</span>
        <h2 className="mn-section-title">{title}{accent && <> <span className="mn-blue">{accent}</span></>}</h2>
      </div>
      {children}
    </section>
  )
}

export default function MinimalPortfolio({ onBack }) {
  useReveal()
  useCursor('#2563eb')
  return (
    <div className="minimal-theme">
      <MinimalNav onBack={onBack} />
      <main>
        <MinimalHero />

        <MnSection id="mn-about" label="About" title="Crafting" accent="Intelligent Software">
          <p className="mn-bio-text" data-reveal>{BIO}</p>
          <div className="mn-about-cards">
            {[
              { n: '01', title: 'AI & Data Science',  desc: 'ML models with PyTorch and scikit-learn. NLP pipelines, computer vision, and data-driven insights from raw datasets to production.' },
              { n: '02', title: 'Full-Stack Dev',      desc: 'REST APIs with Node.js and .NET, mobile apps with Flutter/Kotlin, clean web interfaces from concept to deployment.' },
              { n: '03', title: 'Startup Building',    desc: 'Co-founded ExaVerse 2025. Shipped Pockit and FacilityFirst from zero to production with real users.' },
            ].map((c, i) => (
              <div key={c.n} className="mn-about-card" data-reveal style={{ '--d': `${i * 0.1}s` }}>
                <span className="mn-card-num">{c.n}</span>
                <h3 className="mn-card-title">{c.title}</h3>
                <p className="mn-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </MnSection>

        <MnSection id="mn-experience" label="Experience" title="Work" accent="History">
          <div className="mn-exp-list">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="mn-exp-item" data-reveal>
                <div className="mn-exp-left">
                  <span className="mn-exp-badge">{exp.badge}</span>
                  <span className="mn-exp-date">{exp.date}</span>
                </div>
                <div className="mn-exp-right">
                  <h3 className="mn-exp-role">{exp.role}</h3>
                  <p className="mn-exp-company">{exp.company}</p>
                  <ul className="mn-exp-bullets">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </MnSection>

        <MnSection id="mn-projects" label="Projects" title="Things I've" accent="Built">
          <div className="mn-projects-grid">
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="mn-project-card" data-reveal style={{ '--d': `${(i % 3) * 0.08}s` }}>
                <span className="mn-project-num">{p.id}</span>
                <h3 className="mn-project-title">{p.title}</h3>
                <p className="mn-project-desc">{p.desc}</p>
                <div className="mn-project-tech">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="mn-project-links">
                  <a href={p.gh} target="_blank" rel="noreferrer">GitHub →</a>
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live →</a>}
                </div>
              </div>
            ))}
          </div>
        </MnSection>

        <MnSection id="mn-contact" label="Contact" title="Let's" accent="Connect">
          <div className="mn-contact-grid" data-reveal>
            {[
              { l: 'Email',    v: LINKS.email,    h: `mailto:${LINKS.email}` },
              { l: 'GitHub',   v: 'Hashir-Rauf',  h: LINKS.github },
              { l: 'LinkedIn', v: 'hrm05',        h: LINKS.linkedin },
              { l: 'ExaVerse', v: 'exaverse.site', h: LINKS.exaverse },
            ].map(c => (
              <a key={c.l} href={c.h} target={c.h.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="mn-contact-card">
                <span className="mn-cc-label">{c.l}</span>
                <span className="mn-cc-val">{c.v}</span>
                <span className="mn-cc-arr">→</span>
              </a>
            ))}
          </div>
        </MnSection>
      </main>

      <footer className="mn-footer">
        <span className="mn-footer-logo">HR.</span>
        <span className="mn-footer-copy">© 2025 Hashir Rauf</span>
        <button className="mn-footer-back" onClick={onBack}>← All Themes</button>
      </footer>
    </div>
  )
}
