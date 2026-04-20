import { useState, useRef, useEffect } from 'react'

const themes = [
  { id: 'dark-space', name: 'Dark Space',     dots: ['#07091a', '#3b82f6', '#22d3ee'] },
  { id: 'aurora',     name: 'Midnight Aurora', dots: ['#030507', '#00ff88', '#06b6d4'] },
  { id: 'terminal',   name: 'Terminal Hacker', dots: ['#0a0a0a', '#39ff14', '#1a1a1a'] },
  { id: 'gold',       name: 'Obsidian Gold',   dots: ['#0c0c0c', '#d4a853', '#f5f0e8'] },
  { id: 'synthwave',  name: 'Neon Synthwave',  dots: ['#0d001a', '#ff006e', '#bf00ff'] },
  { id: 'minimal',    name: 'Frosted Minimal', dots: ['#f8f9fb', '#2563eb', '#0ea5e9'] },
]

export default function ThemeSwitcher({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    if (!open) return
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [open])

  return (
    <div className="theme-switcher" ref={ref}>
      {open && (
        <div className="theme-panel">
          <div className="theme-panel-title">Theme</div>
          {themes.map(t => (
            <button
              key={t.id}
              className={`theme-option${theme === t.id ? ' active' : ''}`}
              onClick={() => { setTheme(t.id); setOpen(false) }}
            >
              <span className="theme-swatch">
                {t.dots.map((c, i) => (
                  <span key={i} className="theme-swatch-dot" style={{ background: c }} />
                ))}
              </span>
              <span className="theme-option-name">{t.name}</span>
              {theme === t.id && (
                <svg className="theme-check" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      <button
        className="theme-toggle-btn"
        onClick={() => setOpen(o => !o)}
        aria-label="Switch theme"
      >
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      </button>
    </div>
  )
}
