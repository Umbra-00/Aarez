import React, { useEffect, useRef } from 'react'
import { gsap } from '../animations/gsapSetup'
import { usePrefersReducedMotion } from '../animations/usePrefersReducedMotion'

type Props = {
  children: React.ReactNode
  y?: number
  delay?: number
  className?: string
}

const Reveal: React.FC<Props> = ({ children, y = 24, delay = 0, className }) => {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = usePrefersReducedMotion()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [y, delay, prefersReduced])
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default Reveal
