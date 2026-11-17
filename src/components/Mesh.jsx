import { useEffect, useRef } from 'react'

/* A fixed grid of lines that bends around the pointer and ripples slowly on its own. */
export default function Mesh() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, raf
    const m = { x: -999, y: -999, tx: -999, ty: -999 }
    const GAP = 56
    const STEP = 28
    const gold = getComputedStyle(document.documentElement).getPropertyValue('--blue').trim() || '#0ea5e9'

    const size = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      w = c.clientWidth; h = c.clientHeight
      c.width = w * dpr; c.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const warp = (x, y, t) => {
      const dx = x - m.x
      const dy = y - m.y
      const d2 = dx * dx + dy * dy
      const f = Math.exp(-d2 / 26000)
      const k = d2 > 1 ? (34 * f) / Math.sqrt(d2) : 0
      const wave = reduce ? 0 : Math.sin(x * 0.006 + t * 0.0006) * Math.cos(y * 0.005 + t * 0.0005) * 5
      return [x + dx * k + wave, y + dy * k + wave]
    }
    const draw = (t) => {
      m.x += (m.tx - m.x) * 0.12
      m.y += (m.ty - m.y) * 0.12
      ctx.clearRect(0, 0, w, h)
      const sy = (window.scrollY * 0.15) % GAP
      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(11,18,32,0.09)'
      ctx.beginPath()
      for (let x = 0; x <= w + GAP; x += GAP) {
        for (let y = -GAP; y <= h + GAP; y += STEP) {
          const [px, py] = warp(x, y - sy, t)
          if (y === -GAP) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
      }
      for (let y = -GAP; y <= h + GAP; y += GAP) {
        for (let x = 0; x <= w + GAP; x += STEP) {
          const [px, py] = warp(x, y - sy, t)
          if (x === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
      }
      ctx.stroke()
      ctx.fillStyle = gold
      for (let x = 0; x <= w + GAP; x += GAP) {
        for (let y = -GAP; y <= h + GAP; y += GAP) {
          const [px, py] = warp(x, y - sy, t)
          const d = Math.hypot(px - m.x, py - m.y)
          if (d < 170) {
            ctx.globalAlpha = (1 - d / 170) * 0.9
            ctx.fillRect(px - 1.5, py - 1.5, 3, 3)
          }
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }
    const move = (e) => { m.tx = e.clientX; m.ty = e.clientY }
    const leave = () => { m.tx = -999; m.ty = -999 }
    size()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', size)
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [])
  return <canvas ref={ref} className="mesh" aria-hidden="true" />
}
