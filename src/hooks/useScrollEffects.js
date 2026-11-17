import { useEffect } from 'react'

const clamp = (v) => Math.min(1, Math.max(0, v))

/*
  Elements with data-p get a --p custom property (0 to 1) updated on scroll.
    data-p="in"   0 when the top enters the viewport, 1 when it reaches 40% of the viewport
    data-p="view" 0 when the top enters, 1 when the bottom leaves
    data-p="out"  0 at the top of the page position, 1 once fully scrolled past
    data-p="pin"  progress through a tall section that holds a sticky child
  Elements with data-reveal get the class "in" once visible.
  Elements with data-track (inside a pin section) set --dist on their parent, the horizontal travel in px.
*/
export default function useScrollEffects(enabled) {
  useEffect(() => {
    if (!enabled) return
    const els = [...document.querySelectorAll('[data-p]')]
    const tracks = [...document.querySelectorAll('[data-track]')]
    let raf = 0

    const measure = () => {
      tracks.forEach((t) => {
        t.parentElement.style.setProperty('--dist', Math.max(0, t.scrollWidth - t.parentElement.clientWidth) + 'px')
      })
    }

    const update = () => {
      raf = 0
      const vh = window.innerHeight
      els.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.bottom < -vh || r.top > vh * 2) return
        let p
        switch (el.dataset.p) {
          case 'in': p = (vh - r.top) / (vh * 0.6); break
          case 'view': p = (vh - r.top) / (vh + r.height); break
          case 'out': p = -r.top / r.height; break
          case 'pin': p = -r.top / Math.max(1, r.height - vh); break
          default: p = 0
        }
        el.style.setProperty('--p', clamp(p).toFixed(4))
      })
      const h = document.documentElement
      h.style.setProperty('--page', clamp(window.scrollY / Math.max(1, h.scrollHeight - vh)).toFixed(4))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    const onResize = () => { measure(); onScroll() }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
    )
    document.querySelectorAll('[data-reveal]').forEach((n) => io.observe(n))

    measure(); update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    if (document.fonts) document.fonts.ready.then(onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [enabled])
}
