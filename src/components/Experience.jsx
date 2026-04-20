const BriefcaseIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>
)
const BoltIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)
const CalIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const experience = [
  {
    role: 'Co-founder & Software Developer',
    company: 'ExaVerse',
    badge: 'STARTUP',
    badgeClass: 'badge-startup',
    date: 'Jan 2024 - Present',
    bullets: [
      'Co-founded ExaVerse, an AI-powered software startup building mobile apps and digital products.',
      'Shipped Pockit — an AI personal finance app with expense tracking, smart budgeting, and multi-language support using Flutter and Firebase.',
      'Built FacilityFirst, a smart facility management platform serving enterprise clients.',
      'Led product development, engineering architecture, and cross-functional team coordination.',
      'Drove the company vision of making intelligent software accessible to businesses.',
    ],
  },
  {
    role: 'Automation Software Developer',
    company: 'KPMG',
    badge: 'INTERNSHIP',
    badgeClass: 'badge-intern',
    date: '2023',
    bullets: [
      'Built Python automation scripts that reduced manual data processing time significantly.',
      'Worked with enterprise-level data pipelines and reporting workflows.',
      'Developed tooling for automated data extraction and transformation at scale.',
      'Collaborated with senior engineers and business analysts to deliver automation solutions.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header" data-reveal>
        <div className="section-label">Work History</div>
        <h2 className="section-title">
          Professional <span className="grad">Experience</span>
        </h2>
      </div>

      <div className="timeline">
        <div className="timeline-line"/>
        {experience.map((exp, i) => (
          <div key={i} className="timeline-item" data-reveal data-reveal-delay={String(i + 1)}>
            <div className="timeline-dot"><BriefcaseIcon /></div>
            <div className="timeline-card">
              <div className="timeline-top">
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-date"><CalIcon /> {exp.date}</div>
              </div>
              <div className="timeline-company">
                <span className="timeline-company-name">{exp.company}</span>
                <span className={`timeline-badge ${exp.badgeClass}`}>{exp.badge}</span>
              </div>
              <div className="timeline-bullets">
                {exp.bullets.map((b, j) => (
                  <div key={j} className="timeline-bullet">
                    <span className="bullet-icon"><BoltIcon /></span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
