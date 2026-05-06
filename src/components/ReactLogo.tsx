/**
 * Animated React logo — toàn bộ SVG (3 ellipse cố định) xoay tròn liên tục.
 * Nucleus đứng yên ở giữa bằng cách counter-rotate.
 */
export default function ReactLogo({ className }: { className?: string }) {
  return (
    <>
      <style>{`
        @keyframes react-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes react-counter {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes react-pulse {
          0%, 100% { opacity: 1; transform: rotate(0deg) scale(1); }
          50%       { opacity: 0.6; transform: rotate(0deg) scale(0.75); }
        }
        .react-logo-spin {
          animation: react-spin 8s linear infinite;
          transform-origin: center;
        }
        .react-nucleus-wrap {
          animation: react-counter 8s linear infinite;
          transform-origin: center;
        }
        .react-nucleus-dot {
          animation: react-pulse 2.5s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="React"
        overflow="visible"
      >
        {/* Spinning group — 3 ellipses at 0°, 60°, 120° */}
        <g className="react-logo-spin">
          <ellipse cx="50" cy="50" rx="47" ry="18"
            stroke="#61DAFB" strokeWidth="3.5" fill="none" />
          <ellipse cx="50" cy="50" rx="47" ry="18"
            stroke="#61DAFB" strokeWidth="3.5" fill="none"
            transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="47" ry="18"
            stroke="#61DAFB" strokeWidth="3.5" fill="none"
            transform="rotate(120 50 50)" />
        </g>

        {/* Nucleus — counter-rotates to stay upright, then pulses */}
        <g className="react-nucleus-wrap">
          <circle className="react-nucleus-dot"
            cx="50" cy="50" r="5.5"
            fill="#61DAFB" />
        </g>
      </svg>
    </>
  )
}
