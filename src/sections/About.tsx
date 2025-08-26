import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
const About: React.FC = () => {
  return (
    <section id="about" data-bg="1" className="section relative overflow-hidden">
      <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <SectionTitle
            eyebrow="About"
            title="Mission & Vision"
            subtitle={
              'We deliver pharmaceutical-grade precision in research and development—combining validated scientific methodology with unwavering commitment to advancing human health.'
            }
          />
          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3 text-neutral-300 list-disc list-inside">
              <li>Built on pharmaceutical research and clinical biochemistry foundations.</li>
              <li>Driven by rigorous regulatory standards and evidence-based practices.</li>
              <li>Designed to address complex therapeutic challenges with innovative solutions.</li>
              <li>Committed to transforming scientific discoveries into meaningful patient outcomes.</li>
            </ul>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 transform-gpu transition will-change-transform hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop"
              alt="Pharmaceutical research and laboratory"
              className="w-full h-[360px] object-cover transition-transform duration-500 will-change-transform hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
