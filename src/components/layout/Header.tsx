import React from 'react'
import { useSmoothScroll } from '../../animations/SmoothScrollProvider'
import Logo from '../Logo'

const Header: React.FC = () => {
  const { scrollTo } = useSmoothScroll()
  const nav = [
    { label: 'Home', target: '#home' },
    { label: 'About', target: '#about' },
    { label: 'Expertise', target: '#expertise' },
    { label: 'Contact', target: '#contact' },
  ]
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur border-b border-white/10 bg-neutral-950/60">
      <div className="container flex items-center justify-between h-16">
        <Logo />
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.target}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(item.target)
              }}
              className="relative text-neutral-300 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-brand-500 after:w-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-sm text-neutral-400">
          {/* Email placeholder - to be added later */}
        </div>
      </div>
    </header>
  )
}

export default Header
