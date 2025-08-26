import React, { useEffect, useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { gsap } from '../animations/gsapSetup'
const items = [
  {
    title: 'Drug Discovery',
    desc: 'Advanced molecular research and compound optimization for targeted therapies.',
    img: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Clinical Development',
    desc: 'Rigorous trial design and regulatory compliance for safe, effective treatments.',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Biomarker Analysis',
    desc: 'Precision diagnostics and personalized medicine through advanced analytics.',
    img: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Quality Assurance',
    desc: 'Comprehensive testing protocols ensuring product safety and efficacy.',
    img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1600&auto=format&fit=crop',
  },
]

const Expertise: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const cards = el.querySelectorAll('.exp-card')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: 'top 75%', once: true },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="expertise" ref={sectionRef} data-bg="3" className="section relative overflow-hidden">
      <div className="container relative z-10">
        <SectionTitle eyebrow="Expertise" title="Our Capabilities" />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="exp-card group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm hover:border-brand-500/50 transition-colors transform-gpu will-change-transform hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-6">
                  <Reveal>
                    <h3 className="font-semibold text-lg">{it.title}</h3>
                  </Reveal>
                  <Reveal delay={0.06}>
                    <p className="mt-2 text-neutral-300 text-sm leading-relaxed">{it.desc}</p>
                  </Reveal>
                </div>
                <div className="relative h-48 sm:h-full">
                  <img
                    src={it.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
