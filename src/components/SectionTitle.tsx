import React from 'react'
import Reveal from './Reveal'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
}

const SectionTitle: React.FC<Props> = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <Reveal>
          <div className="text-brand-400 font-semibold uppercase tracking-wider text-xs">{eyebrow}</div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-3 text-neutral-300">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}

export default SectionTitle
