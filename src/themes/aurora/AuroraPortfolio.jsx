import { useState, useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { useCursor } from '../../hooks/useCursor'
import { ROLES, BIO, STATS, EXPERIENCE, PROJECTS, LINKS } from '../../data'
import './aurora.css'

function AuroraBg() {
  return (
    <div className="au-bg" aria-hidden>
      <div className="au-orb au-orb-1" />
      <div className="au-orb au-orb-2" />
      <div className="au-orb au-orb-3" />
    </div>
  )
}

function AuroraNav({ onBack }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <header className="au-nav">
      <nav className={`au-nav-pill${scrolled ? ' scrolled' : ''}`}>
        <button className="au-back" onClick={onBack} title="Back to themes">← themes</button>
        <a href="#au-hero" className="au-nav-logo">&lt;HR/&gt;</a>
        <div className="au-nav-links">
          {['about','experience','projects','contact'].map(s => (
            <button key={s} onClick={() => go(`au-${s}`)}>{s}</button>
          ))}
        </div>
        <a href={`mailto:${LINKS.email}`} className="au-nav-cta">hire me</a>
      </nav>
    </header>
  )
}

function AuroraHero() {
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
      if (typed.length > 0) t = setTimeout(() => setTyped(typed.slice(0, -1)), 30)
      else { setDel(false); setPi((pi + 1) % ROLES.length) }
    }
    return () => clearTimeout(t)
  }, [typed, pi, del])

  return (
    <section id="au-hero" className="au-hero">
      <div className="au-hero-content" data-reveal>
        <div className="au-badge">
          <span className="au-badge-dot" />
          Available for Opportunities
        </div>
        <h1 className="au-hero-title">
          Hi, I'm <span className="au-grad">Hashir Rauf</span>
        </h1>
        <p className="au-typewriter">{typed}<span className="au-cursor">|</span></p>
        <p className="au-hero-bio">{BIO}</p>
        <div className="au-hero-btns">
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="au-btn au-btn-glass">GitHub →</a>
          <a href={`#au-contact`} className="au-btn au-btn-solid">Contact Me</a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="au-btn au-btn-glass">LinkedIn →</a>
        </div>
        <div className="au-stats">
          {STATS.map(s => (
            <div key={s.label} className="au-stat">
              <span className="au-stat-num">{s.num}</span>
              <span className="au-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="au-hero-glass" data-reveal>
        <div className="au-glass-header">
          <span className="au-glass-dot g" /><span className="au-glass-dot y" /><span className="au-glass-dot r" />
          <span className="au-glass-title">profile.json</span>
        </div>
        <div className="au-glass-body">
          {[
            ['role',     '"Data Scientist"'],
            ['focus',    '["AI/ML", "Full-Stack"]'],
            ['status',   '"open to work"'],
            ['medals',   '2'],
            ['cgpa',     '3.72'],
            ['shipping', 'true'],
          ].map(([k, v]) => (
            <div key={k} className="au-json-line">
              <span className="au-jk">"{k}"</span>
              <span className="au-jcolon">: </span>
              <span className={v === 'true' ? 'au-jbool' : v.startsWith('"') ? 'au-jstr' : 'au-jnum'}>{v}</span>
            </div>
          ))}
        </div>
        <div className="au-glass-footer">
          <div className="au-skill-chip">AI / ML</div>
          <div className="au-skill-chip">Full-Stack</div>
          <div className="au-skill-chip">Data Science</div>
        </div>
      </div>
    </section>
  )
}

function AuroraAbout() {
  const cards = [
    { icon: '⬡', title: 'AI & Data Science', desc: 'ML models with PyTorch and scikit-learn. NLP pipelines, computer vision, and data-driven insights.' },
    { icon: '◈', title: 'Full-Stack Dev',     desc: 'REST APIs with Node.js and .NET, mobile apps with Flutter/Kotlin, clean web interfaces.' },
    { icon: '◎', title: 'Startup Building',   desc: 'Co-founded ExaVerse 2025. Shipped Pockit and FacilityFirst from zero to production.' },
  ]
  return (
    <section id="au-about" className="au-section">
      <div className="au-section-label" data-reveal>About Me</div>
      <h2 className="au-section-title" data-reveal>Crafting <span className="au-grad">Intelligent</span> Software</h2>
      <p className="au-bio-text" data-reveal>{BIO}</p>
      <div className="au-cards-row">
        {cards.map((c, i) => (
          <div key={c.title} className="au-card" data-reveal style={{ '--d': `${i * 0.1}s` }}>
            <span className="au-card-icon">{c.icon}</span>
            <h3 className="au-card-title">{c.title}</h3>
            <p className="au-card-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AuroraExperience() {
  return (
    <section id="au-experience" className="au-section">
      <div className="au-section-label" data-reveal>Work History</div>
      <h2 className="au-section-title" data-reveal>Professional <span className="au-grad">Experience</span></h2>
      <div className="au-timeline">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="au-timeline-item" data-reveal>
            <div className="au-tl-dot" />
            <div className="au-tl-card">
              <div className="au-tl-top">
                <div>
                  <div className="au-tl-role">{exp.role}</div>
                  <div className="au-tl-company">{exp.company} <span className="au-tl-badge">{exp.badge}</span></div>
                </div>
                <div className="au-tl-date">{exp.date}</div>
              </div>
              <ul className="au-tl-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function AuroraProjects() {
  return (
    <section id="au-projects" className="au-section">
      <div className="au-section-label" data-reveal>Selected Work</div>
      <h2 className="au-section-title" data-reveal>Things I've <span className="au-grad">Built</span></h2>
      <div className="au-projects-grid">
        {PROJECTS.map((p, i) => (
          <div key={p.id} className="au-project-card" data-reveal style={{ '--d': `${(i % 3) * 0.08}s` }}>
            <span className="au-project-num">{p.id}</span>
            <h3 className="au-project-title">{p.title}</h3>
            <p className="au-project-desc">{p.desc}</p>
            <div className="au-project-tech">
              {p.tech.map(t => <span key={t} className="au-tech-tag">{t}</span>)}
            </div>
            <div className="au-project-links">
              <a href={p.gh} target="_blank" rel="noreferrer">GitHub →</a>
              {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live →</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function AuroraContact() {
  return (
    <section id="au-contact" className="au-section au-contact">
      <div className="au-section-label" data-reveal>Let's Connect</div>
      <h2 className="au-section-title" data-reveal>Got a project? <span className="au-grad">Let's build it.</span></h2>
      <div className="au-contact-grid" data-reveal>
        {[
          { label: 'Email',    value: LINKS.email,    href: `mailto:${LINKS.email}` },
          { label: 'GitHub',   value: 'Hashir-Rauf',  href: LINKS.github },
          { label: 'LinkedIn', value: 'hrm05',        href: LINKS.linkedin },
          { label: 'ExaVerse', value: 'exaverse.site', href: LINKS.exaverse },
        ].map(c => (
          <a key={c.label} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="au-contact-card">
            <span className="au-cc-label">{c.label}</span>
            <span className="au-cc-value">{c.value}</span>
            <span className="au-cc-arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default function AuroraPortfolio({ onBack }) {
  useReveal()
  useCursor('#00ff88')
  return (
    <div className="aurora-theme">
      <AuroraBg />
      <AuroraNav onBack={onBack} />
      <main>
        <AuroraHero />
        <AuroraAbout />
        <AuroraExperience />
        <AuroraProjects />
        <AuroraContact />
      </main>
      <footer className="au-footer">
        <span className="au-footer-logo">HR.</span>
        <span className="au-footer-copy">© 2025 Hashir Rauf</span>
        <button className="au-footer-back" onClick={onBack}>← all themes</button>
      </footer>
    </div>
  )
}
