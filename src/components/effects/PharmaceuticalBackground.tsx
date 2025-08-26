import React from 'react'
import './PharmaceuticalBackground.css'

interface PharmaceuticalBackgroundProps {
  className?: string
  variant?: 'molecules' | 'dna' | 'medical'
}

const PharmaceuticalBackground: React.FC<PharmaceuticalBackgroundProps> = ({ 
  className = "", 
  variant = 'molecules' 
}) => {
  return (
    <div className={`pharmaceutical-bg pharmaceutical-bg--${variant} ${className}`}>
      {/* Floating Molecules */}
      <div className="pharmaceutical-bg__molecules">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`molecule molecule--${i + 1}`}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="20" r="4" fill="currentColor" opacity="0.6" />
              <circle cx="20" cy="35" r="3" fill="currentColor" opacity="0.4" />
              <circle cx="40" cy="35" r="3" fill="currentColor" opacity="0.4" />
              <circle cx="30" cy="45" r="2" fill="currentColor" opacity="0.3" />
              <line x1="30" y1="24" x2="22" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <line x1="30" y1="24" x2="38" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <line x1="23" y1="38" x2="30" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <line x1="37" y1="38" x2="30" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
        ))}
      </div>

      {/* DNA Strands */}
      <div className="pharmaceutical-bg__dna">
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`dna-strand dna-strand--${i + 1}`}>
            <svg width="40" height="200" viewBox="0 0 40 200" fill="none">
              <path 
                d="M10 0Q30 25 10 50Q30 75 10 100Q30 125 10 150Q30 175 10 200" 
                stroke="currentColor" 
                strokeWidth="2" 
                opacity="0.4" 
                fill="none"
              />
              <path 
                d="M30 0Q10 25 30 50Q10 75 30 100Q10 125 30 150Q10 175 30 200" 
                stroke="currentColor" 
                strokeWidth="2" 
                opacity="0.4" 
                fill="none"
              />
              {[...Array(8)].map((_, j) => (
                <line 
                  key={j}
                  x1="10" 
                  y1={j * 25 + 12.5} 
                  x2="30" 
                  y2={j * 25 + 12.5} 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  opacity="0.2"
                />
              ))}
            </svg>
          </div>
        ))}
      </div>

      {/* Medical Icons */}
      <div className="pharmaceutical-bg__medical">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`medical-icon medical-icon--${i + 1}`}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="15" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
              <path d="M13 9H17V21H13V9Z" fill="currentColor" opacity="0.4" />
              <path d="M9 13H21V17H9V13Z" fill="currentColor" opacity="0.4" />
            </svg>
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="pharmaceutical-bg__gradients">
        <div className="gradient-overlay gradient-overlay--1"></div>
        <div className="gradient-overlay gradient-overlay--2"></div>
        <div className="gradient-overlay gradient-overlay--3"></div>
      </div>
    </div>
  )
}

export default PharmaceuticalBackground
