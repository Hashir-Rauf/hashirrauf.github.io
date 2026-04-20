import { useState, useEffect } from 'react'

const phrases = [
  'Software Developer & Data Scientist',
  'Co-founder @ ExaVerse',
  'Two-time Gold Medalist',
  'Building with AI & ML',
  'From Data to Deployment',
]

const stats = [
  { num: '3.72', label: 'CGPA' },
  { num: '8+',   label: 'Projects Built' },
  { num: '2x',   label: 'Gold Medalist' },
  { num: '2024', label: 'ExaVerse Founded' },
]

const files = [
  { name: 'ml/model.py',       active: false },
  { name: 'api/flask.py',      active: false },
  { name: 'flutter/app.dart',  active: true  },
  { name: 'data/analysis.ipynb', active: false },
]

function GithubIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function IdeWidget() {
  return (
    <div className="ide">
      <div className="ide-titlebar">
        <div className="ide-dots">
          <span className="ide-dot red"/>
          <span className="ide-dot yellow"/>
          <span className="ide-dot green"/>
        </div>
        <div className="ide-tabs">
          <span className="ide-tab active">PORTFOLIO.TSX</span>
          <span className="ide-tab green-tab">LIVE BUILD</span>
          <span className="ide-tab gray-tab">
            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 3 20 12 6 21V3z"/></svg>
            MAIN
          </span>
        </div>
      </div>

      <div className="ide-body">
        <div className="ide-sidebar">
          <div className="ide-workspace">
            <span className="ws-label">Workspace</span>
            <span className="ws-name">hashir.dev</span>
          </div>
          {files.map(f => (
            <div key={f.name} className={`ide-file${f.active ? ' active' : ''}`}>
              <span className="ide-file-icon">&lt;/&gt;</span>
              <span>{f.name}</span>
            </div>
          ))}
        </div>

        <div className="ide-editor">
          <div className="ide-editor-header">
            <span className="editor-title">Engineer Profile</span>
            <span className="editor-status">ready</span>
          </div>
          <div className="ide-code">
            <div className="code-line"><span className="ln">01</span><span className="kw">const</span><span className="plain"> engineer =</span></div>
            <div className="code-line"><span className="ln">  </span><span className="plain">  </span><span className="fn">createProfile</span><span className="plain">({'({'}</span></div>
            <div className="code-line"><span className="ln">02</span><span className="plain">  role: </span><span className="str">'Data Scientist'</span><span className="plain">,</span></div>
            <div className="code-line"><span className="ln">03</span><span className="plain">  focus: [</span><span className="str">'AI/ML'</span><span className="plain">, </span><span className="str">'Full-Stack'</span><span className="plain">,</span></div>
            <div className="code-line"><span className="ln">  </span><span className="plain">         </span><span className="str">'Data Science'</span><span className="plain">],</span></div>
            <div className="code-line"><span className="ln">04</span><span className="plain">  builds: </span><span className="str">'intelligent software'</span><span className="plain">,</span></div>
            <div className="code-line"><span className="ln">05</span><span className="plain">  status: </span><span className="str">'open to work'</span><span className="plain">,</span></div>
            <div className="code-line"><span className="ln">06</span><span className="plain">  shipping: </span><span className="bool">true</span></div>
            <div className="code-line"><span className="ln">07</span><span className="plain">{'}'}) </span><span className="cursor-blink">|</span></div>
          </div>
        </div>
      </div>

      <div className="ide-cards">
        <div className="ide-card">
          <div className="ide-card-icon blue">AI</div>
          <div>
            <div className="ide-card-title">AI & ML</div>
            <div className="ide-card-sub">models + pipelines</div>
          </div>
        </div>
        <div className="ide-card">
          <div className="ide-card-icon cyan">DS</div>
          <div>
            <div className="ide-card-title">Data Science</div>
            <div className="ide-card-sub">analytics + insights</div>
          </div>
        </div>
        <div className="ide-card">
          <div className="ide-card-icon purple">FS</div>
          <div>
            <div className="ide-card-title">Full-Stack</div>
            <div className="ide-card-sub">web + mobile</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [pi, setPi]       = useState(0)
  const [del, setDel]     = useState(false)

  useEffect(() => {
    const phrase = phrases[pi]
    let t
    if (!del) {
      if (typed.length < phrase.length) t = setTimeout(() => setTyped(phrase.slice(0, typed.length + 1)), 65)
      else t = setTimeout(() => setDel(true), 2200)
    } else {
      if (typed.length > 0) t = setTimeout(() => setTyped(typed.slice(0, -1)), 35)
      else { setDel(false); setPi((pi + 1) % phrases.length) }
    }
    return () => clearTimeout(t)
  }, [typed, pi, del])

  return (
    <section id="hero" className="hero" style={{ position: 'relative' }}>
      <div className="hero-left" data-reveal>
        <div className="hero-badge">
          <span className="hero-badge-dot"/>
          Available for Opportunities
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="hero-name-blue">Hashir</span>{' '}
          <span className="hero-name-purple">Rauf</span>
        </h1>

        <p className="hero-subtitle">
          {typed}<span className="cursor-blink">|</span>
        </p>

        <p className="hero-desc">
          Results-driven engineer building <strong>intelligent software</strong> —
          from <strong>ML pipelines</strong> and data science to production-grade
          apps. Two-time Gold Medalist at FAST-NUCES and co-founder of <strong>ExaVerse</strong>.
        </p>

        <div className="hero-buttons">
          <a href="https://github.com/Hashir-Rauf" target="_blank" rel="noreferrer" className="btn btn-outline">
            <GithubIcon /> GitHub
          </a>
          <a href="#contact" className="btn btn-primary">
            <MailIcon /> Contact Me
          </a>
          <a href="https://www.linkedin.com/in/hrm05/" target="_blank" rel="noreferrer" className="btn btn-outline">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="mailto:hashirrauf0321@outlook.com" className="btn btn-outline">
            <MailIcon /> Email
          </a>
        </div>

        <div className="hero-stats">
          {stats.map(s => (
            <div key={s.label}>
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right" data-reveal data-reveal-delay="2">
        <IdeWidget />
      </div>

      <div className="scroll-hint">
        <div className="scroll-line"/>
        <span>SCROLL</span>
      </div>
    </section>
  )
}
