import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
const items = [
  { k: 'Precise', v: 'Targeted therapies designed for specific conditions.' },
  { k: 'Preventive', v: 'Interventions that stop disease before it starts.' },
  { k: 'Accessible', v: 'Life-saving treatments available to all who need them.' },
  { k: 'Personalized', v: 'Medicine tailored to individual genetic profiles.' },
  { k: 'Transformative', v: 'Breakthrough discoveries that change lives forever.' },
]

const WhatIf: React.FC = () => {
  return (
    <section id="what-if" data-bg="4" className="section relative overflow-hidden">
      <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-start">
        <div className="md:sticky md:top-24">
          <SectionTitle eyebrow="Vision" title="What If Medicine Was…" />
        </div>
        <div className="space-y-6">
          {items.map((it, i) => (
            <div
              key={it.k}
              className="rounded-2xl border border-white/10 p-6 bg-neutral-900/40 backdrop-blur-sm transform-gpu will-change-transform hover:-translate-y-1 transition"
            >
              <Reveal>
                <div className="text-sm text-brand-400 font-semibold">{String(i + 1).padStart(2, '0')}</div>
              </Reveal>
              <Reveal delay={0.05}>
                <h3 className="mt-1 text-xl font-semibold">{it.k}</h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-2 text-neutral-300 text-sm">{it.v}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIf
