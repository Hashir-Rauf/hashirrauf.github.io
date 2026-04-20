import { useState, useEffect, useRef } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { useCursor } from '../../hooks/useCursor'
import { BIO, STATS, EXPERIENCE, PROJECTS, LINKS } from '../../data'
import './terminal.css'

const BOOT_LINES = [
  'hashir@portfolio:~$ sudo boot --theme terminal',
  '[  0.001] Loading kernel modules...',
  '[  0.042] Initializing data science stack...',
  '[  0.119] Mounting projects filesystem...',
  '[  0.247] Starting AI/ML services...',
  '[  0.381] ExaVerse daemon started.',
  '[  0.512] All systems operational.',
  'hashir@portfolio:~$ cat profile.txt',
]

function useTypeSequence(lines, speed = 28) {
  const [output, setOutput] = useState([])
  const [done, setDone]     = useState(false)
  useEffect(() => {
    let li = 0, ci = 0
    const tick = setInterval(() => {
      if (li >= lines.length) { setDone(true); clearInterval(tick); return }
      const line = lines[li]
      if (ci < line.length) {
        setOutput(prev => {
          const next = [...prev]
          if (!next[li]) next[li] = ''
          next[li] = line.slice(0, ci + 1)
          return next
        })
        ci++
      } else {
        li++; ci = 0
      }
    }, speed)
    return () => clearInterval(tick)
  }, [])
  return { output, done }
}

function TerminalNav({ onBack }) {
  return (
    <header className="tm-nav">
      <div className="tm-nav-inner">
        <span className="tm-nav-path">hashir@portfolio:~$</span>
        <div className="tm-nav-links">
          {['about','experience','projects','contact'].map(s => (
            <button key={s} onClick={() => document.getElementById(`tm-${s}`)?.scrollIntoView({ behavior: 'smooth' })}>
              /{s}
            </button>
          ))}
        </div>
        <button className="tm-back" onClick={onBack}>[← themes]</button>
      </div>
    </header>
  )
}

function TerminalHero() {
  const { output, done } = useTypeSequence(BOOT_LINES)
  return (
    <section id="tm-hero" className="tm-hero">
      <div className="tm-window">
        <div className="tm-titlebar">
          <div className="tm-dots"><span/><span/><span/></div>
          <span className="tm-wintitle">terminal — hashir@portfolio — 80×24</span>
        </div>
        <div className="tm-screen">
          {output.map((line, i) => (
            <div key={i} className={`tm-line ${line?.startsWith('hashir') ? 'tm-cmd' : line?.startsWith('[') ? 'tm-sys' : ''}`}>
              {line}
            </div>
          ))}
          {done && (
            <div className="tm-profile-block">
              <div className="tm-profile-art">
{`  _   _           _     _
 | | | | __ _ ___| |__ (_)_ __
 | |_| |/ _\` / __| '_ \\| | '__|
 |  _  | (_| \\__ \\ | | | | |
 |_| |_|\\__,_|___/_| |_|_|_|   `}
              </div>
              <div className="tm-profile-info">
                <div><span className="tm-key">OS</span><span className="tm-val">FAST-NUCES Linux 4.0</span></div>
                <div><span className="tm-key">Role</span><span className="tm-val">Data Scientist & Developer</span></div>
                <div><span className="tm-key">CGPA</span><span className="tm-val">3.72 / 4.0</span></div>
                <div><span className="tm-key">Status</span><span className="tm-val tm-green">open to work ●</span></div>
                <div><span className="tm-key">GitHub</span><span className="tm-val"><a href={LINKS.github} target="_blank" rel="noreferrer">{LINKS.github}</a></span></div>
                <div className="tm-stats-row">
                  {STATS.map(s => (
                    <span key={s.label} className="tm-stat-chip">{s.num} {s.label}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {done && (
            <div className="tm-prompt-row">
              <span className="tm-ps1">hashir@portfolio:~$</span>
              <span className="tm-blink-cursor">█</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function TerminalSection({ id, cmd, children }) {
  return (
    <section id={id} className="tm-section" data-reveal>
      <div className="tm-section-cmd">
        <span className="tm-ps1-small">hashir@portfolio:~$</span>
        <span className="tm-section-title">{cmd}</span>
      </div>
      <div className="tm-section-body">{children}</div>
    </section>
  )
}

export default function TerminalPortfolio({ onBack }) {
  useReveal()
  useCursor('#39ff14')
  return (
    <div className="terminal-theme">
      <div className="tm-scanlines" aria-hidden />
      <TerminalNav onBack={onBack} />
      <main>
        <TerminalHero />

        <TerminalSection id="tm-about" cmd="cat about.txt">
          <div className="tm-text-block">{BIO}</div>
          <div className="tm-skills-block">
            <div className="tm-sub-cmd">$ ls skills/</div>
            <div className="tm-skill-list">
              {['Python','JavaScript','Flutter','React','PyTorch','scikit-learn','C#','.NET','SQL','Firebase','Docker','Power BI'].map(s => (
                <span key={s} className="tm-skill-item">{s}/</span>
              ))}
            </div>
          </div>
        </TerminalSection>

        <TerminalSection id="tm-experience" cmd="cat experience.txt">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="tm-exp-block">
              <div className="tm-exp-header">
                <span className="tm-exp-role">{exp.role}</span>
                <span className="tm-exp-date"># {exp.date}</span>
              </div>
              <div className="tm-exp-company">{exp.company} [{exp.badge}]</div>
              {exp.bullets.map((b, j) => (
                <div key={j} className="tm-exp-bullet">  → {b}</div>
              ))}
            </div>
          ))}
        </TerminalSection>

        <TerminalSection id="tm-projects" cmd="ls -la projects/">
          <div className="tm-ls-header">total {PROJECTS.length}</div>
          {PROJECTS.map(p => (
            <div key={p.id} className="tm-ls-row">
              <span className="tm-ls-perms">-rwxr-xr-x</span>
              <span className="tm-ls-num">{p.id}</span>
              <span className="tm-ls-name tm-green">{p.title}/</span>
              <span className="tm-ls-tech">[{p.tech.join(', ')}]</span>
              <a href={p.gh} target="_blank" rel="noreferrer" className="tm-ls-link">↗</a>
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="tm-ls-link">⬡ live</a>}
            </div>
          ))}
          {PROJECTS.map(p => (
            <div key={`d-${p.id}`} className="tm-ls-desc"># {p.title}: {p.desc}</div>
          ))}
        </TerminalSection>

        <TerminalSection id="tm-contact" cmd="cat contact.json">
          <div className="tm-json-block">
            {'{\n'}
            {`  "email":    "${LINKS.email}",\n`}
            {`  "github":   "${LINKS.github}",\n`}
            {`  "linkedin": "${LINKS.linkedin}",\n`}
            {`  "company":  "${LINKS.exaverse}",\n`}
            {`  "location": "Lahore, Pakistan",\n`}
            {`  "status":   "open to work"\n`}
            {'}'}
          </div>
          <div className="tm-contact-btns">
            <a href={`mailto:${LINKS.email}`} className="tm-contact-btn">$ send --email</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="tm-contact-btn">$ open --github</a>
          </div>
        </TerminalSection>
      </main>

      <footer className="tm-footer">
        <span>hashir@portfolio:~$ <span className="tm-green">exit</span></span>
        <button onClick={onBack} className="tm-footer-back">[← themes]</button>
      </footer>
    </div>
  )
}
