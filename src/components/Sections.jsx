import Counter from './Counter'
import { BIO, CERTS, COMPANY, EXPERIENCE, HONORS, LINKS, PROJECTS, SPEC, STACK, TOOLKIT } from '../data'

const AVATAR = import.meta.env.BASE_URL + 'avatar.jpg'

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M3 11L11 3M5 3h6v6" />
  </svg>
)

const Split = ({ text }) => {
  const words = text.split(' ')
  return words.map((w, i) => (
    <span className="w" key={i} style={{ '--s': ((i / words.length) * 0.82).toFixed(3) }}>{w} </span>
  ))
}

const Head = ({ index, title, accent }) => (
  <header className="sec-head" data-reveal>
    <span className="mono sec-index">{index}</span>
    <h2>{title} <span>{accent}</span></h2>
  </header>
)

export function Nav() {
  const items = [['about', 'About'], ['honors', 'Honors'], ['experience', 'Experience'], ['work', 'Work'], ['toolkit', 'Toolkit'], ['contact', 'Contact']]
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo" aria-label="Home"><i />HR</a>
      <ul className="nav-links mono">
        {items.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
      </ul>
      <a href={`mailto:${LINKS.email}`} className="nav-cta mono">Get in touch</a>
      <div className="progress" aria-hidden="true"><i /></div>
    </nav>
  )
}

export function Hero() {
  return (
    <section id="top" className="hero" data-p="out">
      <div className="hero-inner">
        <div className="hero-meta mono rise" style={{ '--i': 0 }}>
          <span>Portfolio {new Date().getFullYear()}</span>
          <span>Lahore, Pakistan</span>
        </div>
        <div className="hero-grid">
          <div>
            <h1 className="hero-name" aria-label="Hashir Rauf">
              <span className="mask"><span className="rise-up" style={{ '--i': 1 }}>Hashir</span></span>
              <span className="mask"><span className="rise-up" style={{ '--i': 2 }}>Rauf<b>.</b></span></span>
            </h1>
            <p className="hero-lede rise" style={{ '--i': 3 }}>
              Founder of <a href={LINKS.exaverse} target="_blank" rel="noreferrer">Exaverse Softwares</a>.
              I build AI powered software, from data and models to shipped apps.
            </p>
          </div>
          <aside className="spec rise" style={{ '--i': 4 }} aria-label="Profile summary">
            <div className="spec-bar mono"><span>hashir_rauf.spec</span><span><i /><i /><i /></span></div>
            <div className="spec-body">
              <img src={AVATAR} alt="Portrait of Hashir Rauf" width="64" height="64" />
              <dl>
                {SPEC.map(([k, v]) => (
                  <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function Ticker() {
  const row = [...STACK, ...STACK]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track mono">
        {row.map((s, i) => <span key={i}>{s}</span>)}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="sec about">
      <Head index="01" title="About" accent="me" />
      <p className="about-text" data-p="in"><Split text={BIO} /></p>
      <dl className="facts" data-reveal>
        <div><dt className="mono">Company</dt><dd>{COMPANY}</dd></div>
        <div><dt className="mono">Studying</dt><dd>BS Data Science, FAST-NUCES, 2023 to 2027</dd></div>
        <div><dt className="mono">Goal</dt><dd>Become the tech billionaire of Pakistan through software products</dd></div>
      </dl>
    </section>
  )
}

const Medal = ({ kind }) => (
  <svg className={`medal ${kind}`} viewBox="0 0 80 100" aria-hidden="true">
    <path className="rib" d="M22 0h14l8 30H30zM58 0H44l-8 30h14z" />
    <circle className="disc" cx="40" cy="64" r="30" />
    <circle className="ring" cx="40" cy="64" r="23" />
    <path className="star" d="M40 49l4.4 9 9.9 1.4-7.2 7 1.7 9.8L40 71.4l-8.8 4.8 1.7-9.8-7.2-7 9.9-1.4z" />
  </svg>
)

export function Honors() {
  return (
    <section id="honors" className="dark honors">
      <div className="sec">
        <Head index="02" title="Academic" accent="honors" />
        <div className="honors-grid">
          <div className="cgpa" data-reveal>
            <span className="mono label">Cumulative GPA</span>
            <div className="cgpa-num"><Counter to={3.71} decimals={2} /></div>
            <span className="mono label">BS Data Science, FAST-NUCES</span>
          </div>
          {HONORS.map((h, i) => (
            <article className={`honor ${h.kind}`} key={h.kind} data-reveal style={{ '--i': i + 1 }}>
              <Medal kind={h.kind} />
              <div className="honor-count"><Counter to={h.count} /><span>x</span></div>
              <h3>{h.label}</h3>
              <p className="mono">{h.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="sec experience">
      <Head index="03" title="Experience" accent="so far" />
      <div className="stack">
        {EXPERIENCE.map((e, i) => (
          <article className="xp" key={e.org} style={{ '--k': i }}>
            <div className={`xp-card ${e.dark ? 'dark' : ''}`} data-reveal>
              <div className="xp-top mono"><span>{e.date}</span><span className="tag">{e.tag}</span></div>
              <h3>{e.role}</h3>
              <p className="xp-org">{e.org}</p>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Work() {
  return (
    <section id="work" className="work" data-p="pin" style={{ '--n': PROJECTS.length }}>
      <div className="work-sticky">
        <header className="work-head">
          <span className="mono sec-index">04</span>
          <h2>Selected <span>work</span></h2>
          <span className="mono work-count">{PROJECTS.length} projects</span>
          <div className="work-bar" aria-hidden="true"><i /></div>
        </header>
        <div className="work-track" data-track>
          {PROJECTS.map((p) => (
            <article className="proj" key={p.id}>
              <div className="proj-top mono"><span>{p.id}</span><span>{p.kind}</span></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="chips mono">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              <div className="proj-links mono">
                {p.gh && <a href={p.gh} target="_blank" rel="noreferrer">Code <Arrow /></a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer">Visit <Arrow /></a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Toolkit() {
  return (
    <section id="toolkit" className="sec toolkit">
      <Head index="05" title="The" accent="toolkit" />
      <div className="kit">
        {TOOLKIT.map(([group, items], i) => (
          <div className="kit-col" key={group} data-reveal style={{ '--i': i }}>
            <h3 className="mono">{group}</h3>
            <ul>{items.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        ))}
      </div>
      <h3 className="sub mono" data-reveal>Certifications</h3>
      <ul className="certs" data-reveal>
        {CERTS.map(([name, by]) => (
          <li key={name}><span>{name}</span><span className="mono">{by}</span></li>
        ))}
      </ul>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="dark contact">
      <div className="sec">
        <Head index="06" title="Let us" accent="talk" />
        <a className="contact-mail" href={`mailto:${LINKS.email}`} data-reveal>
          {LINKS.email}<Arrow />
        </a>
        <p className="contact-work mono" data-reveal>
          Work: <a href={`mailto:${LINKS.workEmail}`}>{LINKS.workEmail}</a>
        </p>
        <ul className="contact-links mono" data-reveal>
          <li><a href={LINKS.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a></li>
          <li><a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></li>
          <li><a href={LINKS.exaverse} target="_blank" rel="noreferrer">Exaverse <Arrow /></a></li>
          <li><a href={LINKS.exaverseLinkedin} target="_blank" rel="noreferrer">Exaverse LinkedIn <Arrow /></a></li>
        </ul>
      </div>
      <footer className="foot mono">
        <span>{new Date().getFullYear()} Hashir Rauf</span>
        <span>Founder, {COMPANY}</span>
        <a href="#top">Back to top</a>
      </footer>
    </section>
  )
}
