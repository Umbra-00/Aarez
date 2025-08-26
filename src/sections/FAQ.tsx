import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Accordion from '../components/Accordion'
const faqs = [
  {
    q: 'Who is this for?',
    a: 'Anyone seeking precise, science-backed insight into their health data—providers and individuals alike.',
  },
  {
    q: 'Is it diagnostic?',
    a: 'No. It interprets data; clinical decisions remain with qualified professionals.',
  },
  {
    q: 'Why trust the results?',
    a: 'Built on validated clinical research and transparent methodology grounded in pharmaceutical standards.',
  },
  {
    q: 'What about data safety?',
    a: 'Fully encrypted, secure, and designed with confidentiality at its core.',
  },
]

const FAQ: React.FC = () => {
  return (
    <section id="faq" data-bg="5" className="section relative overflow-hidden">
      <div className="container relative z-10">
        <SectionTitle eyebrow="FAQ" title="Direct & Essential" />
        <Reveal>
          <div className="mt-8">
            <Accordion items={faqs} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FAQ
