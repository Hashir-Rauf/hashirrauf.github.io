import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [n, setN] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const total = reduce ? 300 : 2400
    const t0 = performance.now()
    let raf
    const timers = []
    const step = (t) => {
      const k = Math.min(1, (t - t0) / total)
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2
      setN(Math.round(e * 100))
      if (k < 1) raf = requestAnimationFrame(step)
      else {
        timers.push(setTimeout(() => { setLeaving(true); onDone() }, 250))
        timers.push(setTimeout(() => setGone(true), 1650))
      }
    }
    raf = requestAnimationFrame(step)
    return () => { cancelAnimationFrame(raf); timers.forEach(clearTimeout) }
  }, [onDone])

  if (gone) return null
  return (
    <div className={`loader ${leaving ? 'is-leaving' : ''}`} role="status" aria-label="Loading">
      <div className="loader-panel top" />
      <div className="loader-panel bottom" />
      <div className="loader-grid" aria-hidden="true">
        <i className="lg-v" style={{ left: '12.5%', '--d': '0s' }} />
        <i className="lg-v" style={{ left: '37.5%', '--d': '0.15s' }} />
        <i className="lg-v" style={{ left: '62.5%', '--d': '0.3s' }} />
        <i className="lg-v" style={{ left: '87.5%', '--d': '0.45s' }} />
        <i className="lg-h" style={{ top: '25%', '--d': '0.1s' }} />
        <i className="lg-h" style={{ top: '50%', '--d': '0.25s' }} />
        <i className="lg-h" style={{ top: '75%', '--d': '0.4s' }} />
      </div>
      <div className="loader-ui">
        <div className="loader-top mono">
          <span>HR / Portfolio</span>
          <span>Lahore, PK</span>
        </div>
        <div className="loader-mid">
          <div className="loader-name">
            <span className="mask"><span style={{ '--d': '0.1s' }}>Hashir</span></span>
            <span className="mask"><span style={{ '--d': '0.22s' }}>Rauf<b>.</b></span></span>
          </div>
        </div>
        <div className="loader-bottom">
          <div className="loader-count">{String(n).padStart(3, '0')}</div>
          <div className="loader-bar"><i style={{ transform: `scaleX(${n / 100})` }} /></div>
          <div className="loader-label mono">Exaverse Softwares</div>
        </div>
      </div>
    </div>
  )
}
