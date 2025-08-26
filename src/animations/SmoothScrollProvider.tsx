import React, { createContext, useContext, useEffect, useMemo, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'
import { ScrollTrigger } from './gsapSetup'

type Ctx = { scrollTo: (target: string | number | HTMLElement) => void }
const SmoothScrollContext = createContext<Ctx>({ scrollTo: () => {} })
export const useSmoothScroll = () => useContext(SmoothScrollContext)

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const lenis = new Lenis({
      // Optimized lerp for smoother, more responsive scrolling
      lerp: 0.12,
      smoothWheel: true,
      // Optimized wheel multiplier for better control
      wheelMultiplier: 1.2,
      // Improved touch behavior
      syncTouch: false,
      touchMultiplier: 1.5,
      // Prevent inertia on direction change for more predictable scrolling
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      // Improved performance settings
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenisRef.current = lenis

    // Optimized ScrollTrigger sync with throttling
    let ticking = false
    const onLenisScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ScrollTrigger.update()
          ticking = false
        })
        ticking = true
      }
    }
    lenis.on('scroll', onLenisScroll)

    let rafId: number
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Improved ScrollTrigger refresh timing
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh()
      // Additional refresh for complex layouts
      setTimeout(() => ScrollTrigger.refresh(), 100)
    }, 100)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(refreshTimeout)
      lenis.off('scroll', onLenisScroll)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [prefersReducedMotion])

  const value = useMemo(
    () => ({
      scrollTo: (target: string | number | HTMLElement) => {
        if (prefersReducedMotion || !lenisRef.current) {
          if (typeof target === 'string') {
            const el = document.querySelector(target)
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          } else if (typeof target === 'number') {
            window.scrollTo({ top: target, behavior: 'smooth' })
          } else {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          return
        }
        lenisRef.current.scrollTo(target, { offset: -80 })
      },
    }),
    [prefersReducedMotion],
  )

  return <SmoothScrollContext.Provider value={value}>{children}</SmoothScrollContext.Provider>
}
