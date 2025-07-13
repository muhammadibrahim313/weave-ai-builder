import React from 'react';

const NetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* SVG Network Lines and Circles */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
        </defs>
        
        {/* Central radial glow */}
        <circle cx="50%" cy="50%" r="300" fill="url(#centerGlow)" />
        
        {/* Concentric circles */}
        <circle cx="50%" cy="50%" r="200" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
        <circle cx="50%" cy="50%" r="300" fill="none" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="1" />
        <circle cx="50%" cy="50%" r="400" fill="none" stroke="rgba(59, 130, 246, 0.06)" strokeWidth="1" />
        
        {/* Network lines radiating from center */}
        <g filter="url(#glow)">
          <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="15%" y2="70%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="85%" y2="75%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="30%" y2="15%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="70%" y2="85%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
        </g>
        
        {/* Connection nodes */}
        <circle cx="20%" cy="30%" r="3" fill="rgba(59, 130, 246, 0.4)" filter="url(#glow)" />
        <circle cx="80%" cy="25%" r="3" fill="rgba(147, 51, 234, 0.4)" filter="url(#glow)" />
        <circle cx="15%" cy="70%" r="3" fill="rgba(59, 130, 246, 0.4)" filter="url(#glow)" />
        <circle cx="85%" cy="75%" r="3" fill="rgba(147, 51, 234, 0.4)" filter="url(#glow)" />
        <circle cx="30%" cy="15%" r="3" fill="rgba(59, 130, 246, 0.4)" filter="url(#glow)" />
        <circle cx="70%" cy="85%" r="3" fill="rgba(147, 51, 234, 0.4)" filter="url(#glow)" />
      </svg>
    </div>
  );
};

export default NetworkBackground;