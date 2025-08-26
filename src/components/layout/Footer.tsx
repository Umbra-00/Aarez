import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-neutral-950/60">
      <div className="container py-10 text-sm text-neutral-400 flex items-center justify-between">
        <p>© {new Date().getFullYear()} YourBrand</p>
        <a href="mailto:your.email@example.com" className="hover:text-neutral-200">
          your.email@example.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
