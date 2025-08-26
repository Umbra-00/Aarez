import React from 'react'
import { usePrefersReducedMotion } from '../../animations/usePrefersReducedMotion'

type Props = {
  className?: string
  opacity?: number
}

/**
 * Aurora: abstract animated radial-gradient blobs, lightweight and GPU-friendly.
 * Inspired by modern portfolio sites. Respects reduced-motion.
 */
const Aurora: React.FC<Props> = ({ className = '', opacity = 0.55 }) => {
  const reduced = usePrefersReducedMotion()
  return (
    <div
      aria-hidden
      className={`aurora pointer-events-none absolute inset-0 ${className}`}
      style={{ opacity }}
    >
      <div className="blob" style={{ animation: reduced ? 'none' : 'auroraFloat1 22s ease-in-out infinite' }} />
      <div className="blob" style={{ animation: reduced ? 'none' : 'auroraFloat2 26s ease-in-out infinite' }} />
      <div className="blob" style={{ animation: reduced ? 'none' : 'auroraFloat3 28s ease-in-out infinite' }} />
    </div>
  )
}

export default Aurora
