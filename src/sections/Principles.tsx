import React, { useEffect, useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { gsap, ScrollTrigger } from '../animations/gsapSetup'
const cards = [
  {
    title: 'Scientific Rigor',
    desc: 'Every discovery anchored in validated research and peer-reviewed methodology.',
  },
  {
    title: 'Regulatory Excellence',
    desc: 'Maintaining highest standards of compliance and quality assurance.',
  },
  {
    title: 'Patient-Centric Innovation',
    desc: 'Developing therapies focused on real patient needs and outcomes.',
  },
  {
    title: 'Ethical Leadership',
    desc: 'Upholding integrity in research, data privacy, and global health equity.',
  },
]

const Principles: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const items = el.querySelectorAll('.principle-card')
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(items, {
        start: 'top 85%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1 }),
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="principles" ref={sectionRef} data-bg="2" className="section relative overflow-hidden">
      <div className="container relative z-10">
        <SectionTitle eyebrow="Principles" title="Our Core Values" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="principle-card opacity-0 translate-y-6 rounded-2xl border border-white/10 p-6 bg-neutral-900/40 backdrop-blur-sm hover:border-brand-500/50 transition-colors transform-gpu will-change-transform hover:-translate-y-1"
            >
              <Reveal>
                <h3 className="font-semibold text-lg">{c.title}</h3>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-2 text-neutral-300 text-sm">{c.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Principles
