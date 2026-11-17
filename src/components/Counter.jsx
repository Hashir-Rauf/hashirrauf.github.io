import { useEffect, useRef, useState } from 'react'

export default function Counter({ to, decimals = 0, duration = 1600 }) {
  const ref = useRef(null)
  const [v, setV] = useState(0)
  useEffect(() => {
    const el = ref.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      if (reduce) return setV(to)
      const t0 = performance.now()
      const step = (t) => {
        const k = Math.min(1, (t - t0) / duration)
        setV(to * (1 - Math.pow(1 - k, 4)))
        if (k < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])
  return <span ref={ref}>{v.toFixed(decimals)}</span>
}
