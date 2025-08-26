import React, { useEffect, useMemo, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../animations/gsapSetup'
import { usePrefersReducedMotion } from '../../animations/usePrefersReducedMotion'

// Global background controller that crossfades backgrounds based on the
// current section in view. Sections declare data-bg="<index>".
// Sources can be a mix of videos or images; videos will autoplay inline.

type Source = { kind: 'video' | 'image'; src: string; poster?: string }

const BackgroundController: React.FC = () => {
  const prefersReduced = usePrefersReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  // Abstract still backgrounds to avoid heavy video playback and keep things crisp.
  // Swap these with final brand visuals when ready.
  const sources = useMemo<Source[]>(
    () => [
      // 0 - DNA research macro
      { kind: 'image', src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2400&auto=format&fit=crop' },
      // 1 - Laboratory environment
      { kind: 'image', src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2400&auto=format&fit=crop' },
      // 2 - Manufacturing facility
      { kind: 'image', src: 'https://images.unsplash.com/photo-1581092334501-4c0f6988a517?q=80&w=2400&auto=format&fit=crop' },
      // 3 - Research pipette
      { kind: 'image', src: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2400&auto=format&fit=crop' },
      // 4 - Microscope
      { kind: 'image', src: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=2400&auto=format&fit=crop' },
      // 5 - Cleanroom lab
      { kind: 'image', src: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2400&auto=format&fit=crop' },
    ],
    [],
  )

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const layers = Array.from(root.querySelectorAll<HTMLDivElement>('[data-bg-layer]'))
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-bg]'))

    const ctx = gsap.context(() => {
      // Initialize all layers hidden; show only when a section requests it.
      gsap.set(layers, { autoAlpha: 0 })

      // Hide all backgrounds while the Hero section is in view
      const hero = document.querySelector<HTMLElement>('#home')
      if (hero) {
        ScrollTrigger.create({
          trigger: hero,
          start: 'top bottom',
          end: 'bottom top',
          onToggle: (self) => {
            const dur = prefersReduced ? 0 : 0.25
            gsap.to(root, { autoAlpha: self.isActive ? 0 : 1, duration: dur, ease: 'power2.out' })
          },
        })
      }

      const show = (i: number) => {
        if (!layers.length) return
        const idx = ((i % layers.length) + layers.length) % layers.length
        const dur = prefersReduced ? 0 : 1
        gsap.to(layers, { autoAlpha: 0, duration: dur, ease: 'power2.out' })
        gsap.to(layers[idx], { autoAlpha: 1, duration: dur, ease: 'power2.out' })
      }

      // Build triggers per section (excluding Hero)
      sections.forEach((sec) => {
        const bgAttr = sec.dataset.bg
        if (!bgAttr || bgAttr === 'none') return
        const n = Number(bgAttr)
        if (Number.isNaN(n)) return
        ScrollTrigger.create({
          trigger: sec,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => show(n),
          onEnterBack: () => show(n),
          onToggle: (self) => { if (self.isActive) show(n) },
        })
      })
    })

    return () => ctx.revert()
  }, [prefersReduced, sources.length])

  return (
    <div ref={containerRef} aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {sources.map((s, i) => (
        <div key={i} data-bg-layer className="absolute inset-0">
          <img className="absolute inset-0 w-full h-full object-cover" src={s.src} alt="" loading="lazy" />
          {/* Global readability gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/50 to-neutral-950/80" />
        </div>
      ))}
    </div>
  )
}

export default BackgroundController
