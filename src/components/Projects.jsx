const GhIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)
const ExtIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const projects = [
  {
    num: '01',
    title: 'Pockit',
    desc: 'AI-powered personal finance app with expense tracking, smart budgeting, savings goals, and multi-language support. An ExaVerse flagship product.',
    tech: [{ l: 'Flutter', c: 'tb-blue' }, { l: 'AI', c: 'tb-orange' }, { l: 'Firebase', c: 'tb-green' }],
    gh: 'https://github.com/Hashir-Rauf',
    live: 'https://www.exaverse.site',
  },
  {
    num: '02',
    title: 'SafeNest',
    desc: 'Disguised emergency response Android app. Gesture-based triggers, GPS location sharing via WhatsApp/SMS, silent recording, and fake call feature.',
    tech: [{ l: 'Kotlin', c: 'tb-purple' }, { l: 'Android', c: 'tb-green' }, { l: 'GPS', c: 'tb-cyan' }],
    gh: 'https://github.com/Hashir-Rauf',
  },
  {
    num: '03',
    title: 'VoiceTask',
    desc: 'Voice-first AI task manager for blue-collar workers. Offline-first, low-literacy friendly with voice commands in English and local languages.',
    tech: [{ l: 'AI', c: 'tb-orange' }, { l: 'NLP', c: 'tb-orange' }, { l: 'Mobile', c: 'tb-blue' }],
    gh: 'https://github.com/Hashir-Rauf',
  },
  {
    num: '04',
    title: 'AgileFlow',
    desc: 'Scrum-based project management tool with sprint planning, task boards, and team collaboration. Full-stack with ML-powered velocity insights.',
    tech: [{ l: 'C#', c: 'tb-purple' }, { l: '.NET', c: 'tb-purple' }, { l: 'ML.NET', c: 'tb-orange' }],
    gh: 'https://github.com/Hashir-Rauf/AgileFlow',
  },
  {
    num: '05',
    title: 'Stock Market Predictor',
    desc: 'ML model for stock price forecasting using time series analysis and pattern recognition with scikit-learn and Jupyter Notebook.',
    tech: [{ l: 'Python', c: 'tb-blue' }, { l: 'scikit-learn', c: 'tb-orange' }, { l: 'Pandas', c: 'tb-cyan' }],
    gh: 'https://github.com/Hashir-Rauf/Stock-Market-Price-Prediction-Model',
  },
  {
    num: '06',
    title: 'Financial Risk Dashboard',
    desc: 'Interactive Power BI dashboard for financial risk assessment. Visualizes complex risk metrics into actionable business insights.',
    tech: [{ l: 'Power BI', c: 'tb-orange' }, { l: 'SQL', c: 'tb-blue' }, { l: 'Analytics', c: 'tb-cyan' }],
    gh: 'https://github.com/Hashir-Rauf',
  },
]

export default function Projects() {
  const handleTilt = (e) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const x = e.clientX - r.left, y = e.clientY - r.top
    card.style.setProperty('--mx', (x / r.width * 100) + '%')
    card.style.setProperty('--my', (y / r.height * 100) + '%')
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header" data-reveal>
        <div className="section-label">Selected Work</div>
        <h2 className="section-title">Things I've <span className="grad">Built</span></h2>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={p.num}
            className="project-card"
            data-reveal
            data-reveal-delay={String((i % 3) + 1)}
            onMouseMove={handleTilt}
            onMouseLeave={e => { e.currentTarget.style.setProperty('--mx', '50%'); e.currentTarget.style.setProperty('--my', '50%') }}
          >
            <div className="project-num">{p.num}</div>
            <div className="project-title">{p.title}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map(t => <span key={t.l} className={`tech-badge ${t.c}`}>{t.l}</span>)}
            </div>
            <div className="project-links">
              <a href={p.gh} target="_blank" rel="noreferrer" className="project-link">
                <GhIcon /> GitHub
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="project-link">
                  <ExtIcon /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
