import { useState, useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { useCursor } from '../../hooks/useCursor'
import { ROLES, BIO, STATS, EXPERIENCE, PROJECTS, LINKS } from '../../data'
import './gold.css'

function GoldNav({ onBack }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <header className={`go-nav${scrolled ? ' scrolled' : ''}`}>
      <button className="go-back" onClick={onBack}>← Themes</button>
      <a href="#go-hero" className="go-nav-logo">HR.</a>
      <nav className="go-nav-links">
        {['about','experience','projects','contact'].map(s => (
          <button key={s} onClick={() => go(`go-${s}`)}>{s.charAt(0).toUpperCase() + s.slice(1)}</button>
        ))}
      </nav>
      <a href={`mailto:${LINKS.email}`} className="go-nav-hire">Hire Me</a>
    </header>
  )
}

function GoldHero() {
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
    <section id="go-hero" className="go-hero">
      <div className="go-hero-eyebrow" data-reveal>
        <span className="go-eyebrow-line" />
        <span>Available for Opportunities</span>
        <span className="go-eyebrow-line" />
      </div>
      <h1 className="go-hero-title" data-reveal>
        Hashir<br /><span className="go-gold-text">Rauf</span>
      </h1>
      <div className="go-hero-rule" data-reveal />
      <p className="go-hero-sub" data-reveal>{typed}<span className="go-blink">|</span></p>
      <p className="go-hero-bio" data-reveal>{BIO}</p>
      <div className="go-hero-btns" data-reveal>
        <a href={LINKS.github} target="_blank" rel="noreferrer" className="go-btn go-btn-outline">GitHub</a>
        <a href="#go-contact" className="go-btn go-btn-solid">Contact Me</a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="go-btn go-btn-outline">LinkedIn</a>
      </div>
      <div className="go-stats" data-reveal>
        {STATS.map(s => (
          <div key={s.label} className="go-stat">
            <span className="go-stat-num">{s.num}</span>
            <span className="go-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function GoldSection({ id, label, title, accent, children }) {
  return (
    <section id={id} className="go-section">
      <div className="go-section-header" data-reveal>
        <span className="go-section-label">{label}</span>
        <h2 className="go-section-title">
          {title}{accent && <> <span className="go-gold-text">{accent}</span></>}
        </h2>
        <div className="go-section-rule" />
      </div>
      {children}
    </section>
  )
}

export default function GoldPortfolio({ onBack }) {
  useReveal()
  useCursor('#d4a853')
  return (
    <div className="gold-theme">
      <GoldNav onBack={onBack} />
      <main>
        <GoldHero />

        <GoldSection id="go-about" label="About Me" title="Crafting" accent="Intelligent Software">
          <p className="go-bio-para" data-reveal>{BIO}</p>
          <div className="go-about-cards" data-reveal>
            {[
              { n: '01', title: 'AI & Data Science',  desc: 'ML models with PyTorch and scikit-learn. NLP pipelines, computer vision, and data-driven insights from raw datasets to production.' },
              { n: '02', title: 'Full-Stack Dev',      desc: 'REST APIs with Node.js and .NET, mobile apps with Flutter/Kotlin, clean web interfaces from concept to deployment.' },
              { n: '03', title: 'Startup Building',    desc: 'Co-founded ExaVerse 2025. Shipped Pockit and FacilityFirst from zero to production with real users.' },
            ].map(c => (
              <div key={c.n} className="go-about-card">
                <span className="go-card-num">{c.n}</span>
                <div className="go-card-rule" />
                <h3 className="go-card-title">{c.title}</h3>
                <p className="go-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </GoldSection>

        <GoldSection id="go-experience" label="Work History" title="Professional" accent="Experience">
          <div className="go-exp-list">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="go-exp-item" data-reveal>
                <div className="go-exp-meta">
                  <span className="go-exp-badge">{exp.badge}</span>
                  <span className="go-exp-date">{exp.date}</span>
                </div>
                <div className="go-exp-main">
                  <div className="go-exp-rule" />
                  <h3 className="go-exp-role">{exp.role}</h3>
                  <p className="go-exp-company">{exp.company}</p>
                  <ul className="go-exp-bullets">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </GoldSection>

        <GoldSection id="go-projects" label="Selected Work" title="Things I've" accent="Built">
          <div className="go-projects-list">
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="go-project-row" data-reveal>
                <span className="go-project-num">{p.id}</span>
                <div className="go-project-rule" />
                <div className="go-project-content">
                  <div className="go-project-top">
                    <h3 className="go-project-title">{p.title}</h3>
                    <div className="go-project-links">
                      <a href={p.gh} target="_blank" rel="noreferrer">GitHub ↗</a>
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
                    </div>
                  </div>
                  <p className="go-project-desc">{p.desc}</p>
                  <div className="go-project-tech">
                    {p.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GoldSection>

        <GoldSection id="go-contact" label="Let's Connect" title="Got a project?" accent="Let's build it.">
          <div className="go-contact-block" data-reveal>
            {[
              { label: 'Email',    val: LINKS.email,    href: `mailto:${LINKS.email}` },
              { label: 'GitHub',   val: 'Hashir-Rauf',  href: LINKS.github },
              { label: 'LinkedIn', val: 'hrm05',        href: LINKS.linkedin },
              { label: 'Company',  val: 'exaverse.site', href: LINKS.exaverse },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="go-contact-row">
                <span className="go-contact-label">{c.label}</span>
                <span className="go-contact-rule" />
                <span className="go-contact-val">{c.val}</span>
                <span className="go-contact-arrow">↗</span>
              </a>
            ))}
          </div>
        </GoldSection>
      </main>

      <footer className="go-footer">
        <span className="go-footer-logo">HR.</span>
        <span className="go-footer-copy">© 2025 Hashir Rauf</span>
        <button className="go-footer-back" onClick={onBack}>← All Themes</button>
      </footer>
    </div>
  )
}
