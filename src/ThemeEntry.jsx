import { useState, useEffect, useRef } from 'react'
import './entry.css'

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
      <div className="entry-grid-bg" aria-hidden />

      <div className="entry-center">
        <div className="entry-logo" style={{ animationDelay: '0s' }}>HR.</div>
        <h1 className="entry-title" style={{ animationDelay: '0.1s' }}>Hashir Rauf</h1>
        <p className="entry-tagline" style={{ animationDelay: '0.2s' }}>
          Software Developer &amp; Data Scientist
        </p>

        <div className="entry-divider" style={{ animationDelay: '0.25s' }} />

        <div className="entry-prompt-wrap" style={{ animationDelay: '0.3s' }}>
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

        <div className="entry-chips" style={{ animationDelay: '0.4s' }}>
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

        <p className="entry-hint" style={{ animationDelay: '0.55s' }}>
          type · enter · or click
        </p>
      </div>
    </div>
  )
}
