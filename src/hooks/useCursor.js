import { useEffect } from 'react'

export function useCursor(color = '#22d3ee') {
  useEffect(() => {
    const dot  = document.createElement('div')
    const ring = document.createElement('div')
    dot.id  = 'cursor'
    ring.id = 'cursor-ring'
    dot.style.cssText  = `width:8px;height:8px;background:${color};border-radius:50%;position:fixed;top:0;left:0;z-index:9999;pointer-events:none;transform:translate(-50%,-50%);mix-blend-mode:screen;`
    ring.style.cssText = `width:32px;height:32px;border:1.5px solid ${color.replace(')', ',0.35)').replace('rgb', 'rgba')};border-radius:50%;position:fixed;top:0;left:0;z-index:9998;pointer-events:none;transform:translate(-50%,-50%);transition:all 0.15s ease-out;`
    document.body.appendChild(dot)
    document.body.appendChild(ring)

    let mx = 0, my = 0, rx = 0, ry = 0, raf
    const onMove = e => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)
    const tick = () => {
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15
      dot.style.left  = mx + 'px'; dot.style.top  = my + 'px'
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); dot.remove(); ring.remove() }
  }, [])
}
