import React, { useEffect, useRef } from 'react'
import { gsap } from '../animations/gsapSetup'
import SplitType from 'split-type'
import { usePrefersReducedMotion } from '../animations/usePrefersReducedMotion'
import { useSmoothScroll } from '../animations/SmoothScrollProvider'
import LightRays from '../components/effects/LightRays'

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const prefersReduced = usePrefersReducedMotion()
  const { scrollTo } = useSmoothScroll()

  useEffect(() => {
    if (prefersReduced) return
    let split: SplitType | null = null
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        split = new SplitType(headingRef.current, { types: 'lines,words' })
        gsap.set(split.lines, { overflow: 'hidden' })
        gsap.fromTo(
          split.words,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: 'power4.out', duration: 1.2, stagger: 0.04, delay: 0.1 },
        )
      }
      if (subRef.current) {
        gsap.fromTo(
          subRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.9, delay: 0.6 },
        )
      }
    })
    return () => {
      ctx.revert()
      split?.revert()
    }
  }, [prefersReduced])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <LightRays
        className="absolute inset-0 z-0"
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
      <div className="container relative z-10 pt-24">
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-extrabold leading-[1.1] max-w-5xl">
          AAREZ HEALTHCARE
        </h1>
        <p ref={subRef} className="mt-6 text-lg md:text-xl max-w-2xl text-neutral-300">
          Where scientific rigor meets therapeutic potential.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo('#about')}
            className="rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold px-6 py-3 transition-colors transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            Explore
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="rounded-full border border-brand-500 text-brand-400 hover:bg-brand-500 hover:text-white font-semibold px-6 py-3 transition-colors transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
