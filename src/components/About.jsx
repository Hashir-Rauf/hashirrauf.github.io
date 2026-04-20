const cards = [
  {
    num: '01',
    color: 'blue',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'AI & Data Science',
    desc: 'Building ML models with PyTorch and scikit-learn. NLP pipelines, computer vision, and data-driven insights from raw datasets to production.',
  },
  {
    num: '02',
    color: 'cyan',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Full-Stack Development',
    desc: 'Designing REST APIs with Node.js and .NET, mobile apps with Flutter and Kotlin, and clean web interfaces from concept to deployment.',
  },
  {
    num: '03',
    color: 'purple',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Startup Building',
    desc: 'Co-founded ExaVerse in 2025. Shipped Pockit (AI finance app) and FacilityFirst from zero to production with real users.',
  },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-header" data-reveal>
        <div className="section-label">About Me</div>
        <h2 className="section-title">
          Crafting <span className="grad">Intelligent</span> Software
        </h2>
      </div>

      <div className="about-body">
        <div data-reveal data-reveal-delay="1">
          <p className="about-bio">
            I'm a Software Developer and Data Scientist from Lahore, Pakistan, currently
            pursuing a BS in Data Science at FAST-NUCES (2023-2027) with a 3.72 CGPA and
            two Gold Medals. I've built everything from ML models to mobile apps and enterprise
            automation tools.
            <br /><br />
            As co-founder of ExaVerse, I lead product development for AI-powered software that
            solves real problems. Previously, I worked as an Automation Software Developer at
            KPMG. Currently exploring Computer Vision, NLP, and Game Development while pursuing
            postgraduate studies in Artificial Intelligence.
          </p>

          <div className="about-contacts">
            <div className="about-contact-item">
              <div className="about-contact-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              Lahore, Pakistan
            </div>
            <div className="about-contact-item">
              <div className="about-contact-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              hashirrauf0321@outlook.com
            </div>
          </div>
        </div>

        <div className="about-cards" data-reveal data-reveal-delay="2">
          {cards.map(c => (
            <div key={c.num} className="about-card">
              <div className={`about-card-icon ${c.color}`}>{c.icon}</div>
              <div>
                <div className="about-card-title">{c.title}</div>
                <div className="about-card-desc">{c.desc}</div>
              </div>
              <span className="about-card-num">{c.num}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
