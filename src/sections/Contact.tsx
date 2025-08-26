import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    // Placeholder: wire to backend or service later
    setSubmitted(true)
  }

  return (
    <section id="contact" data-bg="2" className="section relative overflow-hidden">
      <div className="container max-w-3xl relative z-10">
        <SectionTitle eyebrow="Contact" title="Partner With Us" />
        <div className="mt-8 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm p-6">
          {!submitted ? (
            <form onSubmit={onSubmit} className="grid gap-4">
              <Reveal>
                <label className="grid gap-2">
                  <span className="text-sm text-neutral-300">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="rounded-lg bg-neutral-900/60 border border-white/10 px-4 py-2 outline-none focus:border-brand-500"
                    aria-required
                  />
                </label>
              </Reveal>
              <Reveal delay={0.05}>
                <label className="grid gap-2">
                  <span className="text-sm text-neutral-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="rounded-lg bg-neutral-900/60 border border-white/10 px-4 py-2 outline-none focus:border-brand-500"
                    aria-required
                  />
                </label>
              </Reveal>
              <Reveal delay={0.1}>
                <label className="grid gap-2">
                  <span className="text-sm text-neutral-300">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="rounded-lg bg-neutral-900/60 border border-white/10 px-4 py-2 outline-none focus:border-brand-500 resize-y"
                    aria-required
                  />
                </label>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold px-6 py-3 transition-colors transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                  >
                    Send Message
                  </button>
                </div>
              </Reveal>
            </form>
          ) : (
            <Reveal>
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold">Thanks! We'll get back to you shortly.</h3>
                <p className="mt-2 text-neutral-300 text-sm">
                  Your message has been received and we'll respond as soon as possible.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
