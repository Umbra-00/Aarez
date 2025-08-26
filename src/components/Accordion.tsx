import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

type Item = { q: string; a: string }

type Props = {
  items: Item[]
}

const Accordion: React.FC<Props> = ({ items }) => {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={clsx('bg-neutral-900/30 backdrop-blur-sm', isOpen && 'bg-neutral-900/50')}>
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold">{it.q}</span>
              <svg
                className={clsx('size-5 text-neutral-300 transition-transform', isOpen && 'rotate-180')}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                >
                  <div className="px-5 pb-4 text-neutral-300 text-sm leading-relaxed">{it.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
