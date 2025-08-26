import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsapSetup'

interface BackgroundImageProps {
  src: string
  alt: string
  className?: string
  overlay?: 'dark' | 'light' | 'gradient' | 'none'
  parallax?: boolean
  parallaxSpeed?: number // amount of vertical shift in percent (positive = moves up while scrolling)
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  overlay = 'dark',
  parallax = false,
  parallaxSpeed = 15,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  // Subtle fade on scroll: keep visible by default, brighten when active
  useEffect(() => {
    if (!wrapRef.current) return
    const section = wrapRef.current.closest('section') as HTMLElement | null
    const triggerEl = section ?? wrapRef.current

    const base = 0.35
    const ctx = gsap.context(() => {
      gsap.set(wrapRef.current!, { autoAlpha: 1, opacity: base })
      ScrollTrigger.create({
        trigger: triggerEl,
        start: 'top 80%',
        end: 'bottom top',
        onEnter: () => gsap.to(wrapRef.current!, { opacity: 1, duration: 0.6, ease: 'power2.out' }),
        onEnterBack: () => gsap.to(wrapRef.current!, { opacity: 1, duration: 0.4, ease: 'power2.out' }),
        onLeave: () => gsap.to(wrapRef.current!, { opacity: base, duration: 0.5 }),
        onLeaveBack: () => gsap.to(wrapRef.current!, { opacity: base, duration: 0.5 }),
      })
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  // Optional parallax motion for the image itself
  useEffect(() => {
    if (!parallax || !wrapRef.current || !imgRef.current) return

    const section = wrapRef.current.closest('section') as HTMLElement | null
    const triggerEl = section ?? wrapRef.current

    const ctx = gsap.context(() => {
      gsap.to(imgRef.current!, {
        yPercent: -parallaxSpeed,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, wrapRef)

    return () => ctx.revert()
  }, [parallax, parallaxSpeed])

  return (
    <div ref={wrapRef} className={`absolute inset-0 pointer-events-none ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${parallax ? 'transform-gpu will-change-transform' : ''}`}
        style={parallax ? { transform: 'translate3d(0, 0, 0)' } : {}}
        loading="lazy"
      />
      {overlay === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/90" />
      )}
      {overlay === 'light' && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/30" />
      )}
      {overlay === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/90 via-neutral-800/70 to-brand-900/50" />
      )}
    </div>
  )
}

export default BackgroundImage
