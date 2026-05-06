/**
 * Animated React logo — 3 ellipses spinning at different speeds/directions,
 * nucleus pulsing. Pure CSS keyframes injected once via a <style> tag.
 */
export default function ReactLogo({ className }: { className?: string }) {
  return (
    <>
      <style>{`
        @keyframes react-spin-1 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes react-spin-2 {
          from { transform: rotate(60deg); }
          to   { transform: rotate(420deg); }
        }
        @keyframes react-spin-3 {
          from { transform: rotate(120deg); }
          to   { transform: rotate(-240deg); }
        }
        @keyframes react-nucleus {
          0%, 100% { opacity: 1;   r: 2.8; }
          50%       { opacity: 0.6; r: 2.2; }
        }
        .react-orbit-1 {
          transform-origin: 50px 50px;
          animation: react-spin-1 6s linear infinite;
        }
        .react-orbit-2 {
          transform-origin: 50px 50px;
          animation: react-spin-2 9s linear infinite;
        }
        .react-orbit-3 {
          transform-origin: 50px 50px;
          animation: react-spin-3 12s linear infinite reverse;
        }
        .react-nucleus {
          transform-origin: 50px 50px;
          animation: react-nucleus 2.5s ease-in-out infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="React"
      >
        {/* Orbit 1 — horizontal */}
        <ellipse
          className="react-orbit-1"
          cx="50" cy="50"
          rx="46" ry="18"
          stroke="#61DAFB"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Orbit 2 — 60° */}
        <ellipse
          className="react-orbit-2"
          cx="50" cy="50"
          rx="46" ry="18"
          stroke="#61DAFB"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Orbit 3 — 120° */}
        <ellipse
          className="react-orbit-3"
          cx="50" cy="50"
          rx="46" ry="18"
          stroke="#61DAFB"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Nucleus */}
        <circle
          className="react-nucleus"
          cx="50" cy="50"
          r="2.8"
          fill="#61DAFB"
        />
      </svg>
    </>
  )
}
