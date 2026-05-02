const SlantedDivider = ({ flip = false }) => {
  return (
    <div style={{
      width: '100%',
      height: '80px',
      overflow: 'hidden',
      lineHeight: 0,
      transform: flip ? 'rotate(180deg)' : 'none',
      backgroundColor: '#000000',
      position: 'relative',
      zIndex: 10
    }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          position: 'relative',
          display: 'block',
          width: '100%',
          height: '100%'
        }}
      >
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background shape */}
        <path
          d="M1200 120L0 120 1200 0z"
          style={{ fill: '#050505' }}
        ></path>

        {/* Laser Line */}
        <path
          d="M0 120 L1200 0"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          filter="url(#glow)"
          style={{ 
            opacity: 0.8,
            strokeDasharray: '2000',
            strokeDashoffset: '0'
          }}
        />
        
        {/* Extra Glow layer */}
        <path
          d="M0 120 L1200 0"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="4"
          style={{ 
            opacity: 0.2,
            filter: 'blur(8px)'
          }}
        />
      </svg>
    </div>
  );
};

export default SlantedDivider;

