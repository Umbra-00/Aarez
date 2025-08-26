import React from 'react'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-brand-500"
        aria-hidden="true"
        focusable="false"
      >
        {/* Circular Crest */}
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" opacity="0.25" />
        
        {/* Stylized 'A' */}
        <path d="M20 9 L29 31 H26.2 L24 26 H16 L13.8 31 H11 L20 9 Z" fill="currentColor" opacity="0.85" />
        {/* Cross in negative space (cut-out effect simulated with lighter overlay) */}
        <rect x="18" y="18" width="4" height="10" fill="white" opacity="0.9" />
        <rect x="16" y="20" width="8" height="2" fill="white" opacity="0.9" />
        
        {/* Orbit ring accents */}
        <path d="M6 18 C12 14, 28 14, 34 18" stroke="currentColor" strokeWidth="1.2" opacity="0.35" fill="none" />
        <path d="M6 22 C12 26, 28 26, 34 22" stroke="currentColor" strokeWidth="1.2" opacity="0.35" fill="none" />
      </svg>
      
      <div className="flex flex-col">
        <span className="font-extrabold text-xl leading-none text-white tracking-wide">
          Aarez
        </span>
        <span className="text-xs text-brand-400 leading-none font-medium tracking-widest">
          Healthcare
        </span>
      </div>
    </div>
  )
}

export default Logo
