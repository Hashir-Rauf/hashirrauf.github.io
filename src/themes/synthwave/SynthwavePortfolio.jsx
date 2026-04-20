import { useState, useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { useCursor } from '../../hooks/useCursor'
import { ROLES, BIO, STATS, EXPERIENCE, PROJECTS, LINKS } from '../../data'
import './synthwave.css'

function SynthNav({ onBack }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <header className="sw-nav">
      <nav className={`sw-nav-inner${scrolled ? ' scrolled' : ''}`}>
        <button className="sw-back" onClick={onBack}>◈ Themes</button>
        <a href="#sw-hero" className="sw-nav-logo">HR://</a>
        <div className="sw-nav-links">
          {['about','experience','projects','contact'].map(s => (
            <button key={s} onClick={() => go(`sw-${s}`)}>{s.toUpperCase()}</button>
          ))}
        </div>
        <a href={`mailto:${LINKS.email}`} className="sw-nav-cta">HIRE ME</a>
      </nav>
    </header>
  )
}

function SynthHero() {
  const [typed, setTyped] = useState('')
  const [pi, setPi] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const phrase = ROLES[pi]
    let t
    if (!del) {
      if (typed.length < phrase.length) t = setTimeout(() => setTyped(phrase.slice(0, typed.length + 1)), 60)
      else t = setTimeout(() => setDel(true), 2000)
    } else {
      if (typed.length > 0) t = setTimeout(() => setTyped(typed.slice(0, -1)), 32)
      else { setDel(false); setPi((pi + 1) % ROLES.length) }
    }
    return () => clearTimeout(t)
  }, [typed, pi, del])

  return (
    <section id="sw-hero" className="sw-hero">
      <div className="sw-hero-content" data-reveal>
        <div className="sw-hero-badge">◉ ONLINE — AVAILABLE FOR WORK</div>
        <h1 className="sw-hero-title">
          <span className="sw-neon-pink">HASHIR</span>
          <br />
          <span className="sw-neon-purple">RAUF</span>
        </h1>
        <p className="sw-hero-sub">{typed}<span className="sw-blink">_</span></p>
        <p className="sw-hero-bio">{BIO}</p>
        <div className="sw-hero-btns">
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="sw-btn sw-btn-ghost">[ GITHUB ]</a>
          <a href="#sw-contact" className="sw-btn sw-btn-neon">[ CONTACT ]</a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="sw-btn sw-btn-ghost">[ LINKEDIN ]</a>
        </div>
        <div className="sw-stats">
          {STATS.map(s => (
            <div key={s.label} className="sw-stat">
              <span className="sw-stat-num">{s.num}</span>
              <span className="sw-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sw-hero-screen" data-reveal>
        <div className="sw-screen-frame">
          <div className="sw-screen-top">
            <span className="sw-screen-label">◈ PROFILE_v2.exe</span>
            <span className="sw-screen-status">RUNNING</span>
          </div>
          <div className="sw-screen-body">
            {[
              ['ROLE',    'Data Scientist'],
              ['STACK',   'AI · ML · Full-Stack'],
              ['STATUS',  'OPEN TO WORK'],
              ['MEDALS',  '2× GOLD 🏅'],
              ['CGPA',    '3.72 / 4.0'],
              ['COMPANY', 'ExaVerse (Co-founder)'],
            ].map(([k, v]) => (
              <div key={k} className="sw-screen-row">
                <span className="sw-sk">{k}</span>
                <span className="sw-sv">{v}</span>
              </div>
            ))}
          </div>
          <div className="sw-screen-footer">
            <span className="sw-sf-chip">AI/ML</span>
            <span className="sw-sf-chip">FULL-STACK</span>
            <span className="sw-sf-chip">DATA SCIENCE</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function SwSection({ id, label, title, children }) {
  return (
    <section id={id} className="sw-section">
      <div className="sw-section-header" data-reveal>
        <span className="sw-section-tag">// {label}</span>
        <h2 className="sw-section-title">{title}</h2>
        <div className="sw-section-line" />
      </div>
      {children}
    </section>
  )
}

export default function SynthwavePortfolio({ onBack }) {
  useReveal()
  useCursor('#ff006e')
  return (
    <div className="synthwave-theme">
      <div className="sw-grid-floor" aria-hidden />
      <div className="sw-scanlines" aria-hidden />
      <SynthNav onBack={onBack} />
      <main>
        <SynthHero />

        <SwSection id="sw-about" label="ABOUT" title="WHO AM I">
          <p className="sw-bio" data-reveal>{BIO}</p>
          <div className="sw-about-cards">
            {[
              { icon: '◈', t: 'AI & ML',        d: 'ML models, NLP pipelines, computer vision, data-driven insights from raw datasets to production.' },
              { icon: '◎', t: 'Full-Stack',      d: 'REST APIs, mobile apps with Flutter/Kotlin, clean web interfaces from concept to deployment.' },
              { icon: '⬡', t: 'Startup',         d: 'Co-founded ExaVerse 2025. Shipped Pockit and FacilityFirst from zero to production.' },
            ].map((c, i) => (
              <div key={c.t} className="sw-about-card" data-reveal style={{ '--d': `${i * 0.1}s` }}>
                <span className="sw-card-icon">{c.icon}</span>
                <h3 className="sw-card-title">{c.t}</h3>
                <p className="sw-card-desc">{c.d}</p>
              </div>
            ))}
          </div>
        </SwSection>

        <SwSection id="sw-experience" label="EXPERIENCE" title="WORK HISTORY">
          <div className="sw-exp-list">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="sw-exp-card" data-reveal>
                <div className="sw-exp-badge">{exp.badge}</div>
                <div className="sw-exp-main">
                  <div className="sw-exp-top">
                    <h3 className="sw-exp-role">{exp.role}</h3>
                    <span className="sw-exp-date">{exp.date}</span>
                  </div>
                  <p className="sw-exp-company">{exp.company}</p>
                  <ul className="sw-exp-bullets">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SwSection>

        <SwSection id="sw-projects" label="PROJECTS" title="WHAT I BUILT">
          <div className="sw-projects-grid">
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="sw-project-card" data-reveal style={{ '--d': `${(i % 3) * 0.08}s` }}>
                <div className="sw-project-header">
                  <span className="sw-project-num">{p.id}</span>
                  <div className="sw-project-links">
                    <a href={p.gh} target="_blank" rel="noreferrer">GH</a>
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer">LIVE</a>}
                  </div>
                </div>
                <h3 className="sw-project-title">{p.title}</h3>
                <p className="sw-project-desc">{p.desc}</p>
                <div className="sw-project-tech">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </SwSection>

        <SwSection id="sw-contact" label="CONTACT" title="LET'S CONNECT">
          <div className="sw-contact-grid" data-reveal>
            {[
              { l: 'EMAIL',    v: LINKS.email,    h: `mailto:${LINKS.email}` },
              { l: 'GITHUB',   v: 'Hashir-Rauf',  h: LINKS.github },
              { l: 'LINKEDIN', v: 'hrm05',        h: LINKS.linkedin },
              { l: 'EXAVERSE', v: 'exaverse.site', h: LINKS.exaverse },
            ].map(c => (
              <a key={c.l} href={c.h} target={c.h.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="sw-contact-card">
                <span className="sw-cc-label">{c.l}</span>
                <span className="sw-cc-val">{c.v}</span>
                <span className="sw-cc-arr">→</span>
              </a>
            ))}
          </div>
        </SwSection>
      </main>

      <footer className="sw-footer">
        <span className="sw-footer-logo">HR://</span>
        <span className="sw-footer-copy">© 2025 HASHIR RAUF</span>
        <button className="sw-footer-back" onClick={onBack}>◈ THEMES</button>
      </footer>
    </div>
  )
}
