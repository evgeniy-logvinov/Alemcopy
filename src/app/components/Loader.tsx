import { motion } from "motion/react";

export function Loader() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
      <svg width="200" height="180" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="grayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4B5563', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#6B7280', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        <g>
          <circle 
              cx="100" 
              cy="90" 
              r="45" 
              fill="url(#grayGradient)" 
              filter="url(#glow)"
            />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.1;1"
            dur="1.5s"
            repeatCount="indefinite"
            additive="sum"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
          />
        </g>
      </svg>
    </div>
  );
}