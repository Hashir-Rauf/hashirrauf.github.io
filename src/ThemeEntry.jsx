import { useState, useEffect, useRef } from 'react'
import './entry.css'

function EntryParticles() {
  const canvasRef = useRef()
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    const particles = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 160; i++) {
      particles.push({
        x:    Math.random() * canvas.width,
        y:    Math.random() * canvas.height,
        r:    Math.random() * 1.6 + 0.3,
        a:    Math.random(),
        da:   (Math.random() - 0.5) * 0.006,
        dx:   (Math.random() - 0.5) * 0.15,
        dy:   -(Math.random() * 0.1 + 0.03),
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x  += p.dx
        p.y  += p.dy
        p.a  += p.da
        if (p.a <= 0) { p.a = 0; p.da *= -1 }
        if (p.a >= 1) { p.a = 1; p.da *= -1 }
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width }
        if (p.x < -4) p.x = canvas.width + 4
        if (p.x > canvas.width + 4) p.x = -4
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${(p.a * 0.85).toFixed(3)})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="entry-particles" aria-hidden />
}

function EntryOrbs() {
  return (
    <div className="entry-orbs" aria-hidden>
      <div className="entry-orb entry-orb-1" />
      <div className="entry-orb entry-orb-2" />
      <div className="entry-orb entry-orb-3" />
      <div className="entry-orb entry-orb-4" />
    </div>
  )
}

const THEMES = [
  { id: 'dark-space', label: 'Dark Space',      accent: '#3b82f6', sub: 'Deep navy cosmos'   },
  { id: 'aurora',     label: 'Midnight Aurora',  accent: '#00ff88', sub: 'Northern lights'    },
  { id: 'terminal',   label: 'Terminal Hacker',  accent: '#39ff14', sub: 'Green on black'     },
  { id: 'gold',       label: 'Obsidian Gold',    accent: '#d4a853', sub: 'Luxury editorial'   },
  { id: 'synthwave',  label: 'Neon Synthwave',   accent: '#ff006e', sub: '80s retro grid'     },
  { id: 'minimal',    label: 'Frosted Minimal',  accent: '#2563eb', sub: 'Clean & light'      },
]

export default function ThemeEntry({ onSelect }) {
  const [input, setInput]   = useState('')
  const [entered, setEntered] = useState(false)
  const inputRef = useRef()

  useEffect(() => { inputRef.current?.focus() }, [])

  const query = input.trim().toLowerCase()
  const matches = query
    ? THEMES.filter(t => t.label.toLowerCase().includes(query))
    : []

  const handleKey = e => {
    if (e.key === 'Enter' && matches.length > 0) pick(matches[0].id)
  }

  const pick = id => {
    setEntered(true)
    setTimeout(() => onSelect(id), 420)
  }

  return (
    <div className={`entry-root${entered ? ' entry-exit' : ''}`}>
      <EntryOrbs />
      <EntryParticles />
      <div className="entry-grid-bg" aria-hidden />
      <div className="entry-vignette" aria-hidden />

      <div className="entry-center">
        <div className="entry-avatar-wrap" style={{ animationDelay: '0s' }}>
          <img src="/avatar.jpg" alt="Hashir Rauf" className="entry-avatar" />
          <span className="entry-avail-ring" />
        </div>
        <h1 className="entry-title" style={{ animationDelay: '0.15s' }}>Hashir Rauf</h1>
        <p className="entry-tagline" style={{ animationDelay: '0.25s' }}>
          Software Developer &amp; Data Scientist
        </p>

        <div className="entry-divider" style={{ animationDelay: '0.3s' }} />

        <div className="entry-prompt-wrap" style={{ animationDelay: '0.35s' }}>
          <span className="entry-gt">&gt;&nbsp;</span>
          <input
            ref={inputRef}
            className="entry-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="type a theme and press enter..."
            spellCheck={false}
            autoComplete="off"
          />
        </div>

        <div className="entry-chips" style={{ animationDelay: '0.45s' }}>
          {THEMES.map(t => {
            const isMatch = matches.find(m => m.id === t.id)
            return (
              <button
                key={t.id}
                className={`entry-chip${isMatch ? ' matched' : ''}`}
                style={{ '--a': t.accent }}
                onClick={() => pick(t.id)}
              >
                <span className="chip-dot" style={{ background: t.accent }} />
                <span className="chip-label">{t.label}</span>
                <span className="chip-sub">{t.sub}</span>
              </button>
            )
          })}
        </div>

        <p className="entry-hint" style={{ animationDelay: '0.6s' }}>
          type · enter · or click
        </p>
      </div>
    </div>
  )
}
