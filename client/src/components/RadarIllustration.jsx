export default function RadarIllustration() {
  const nodes = [
    [60, 100],
    [292, 138],
    [122, 352],
    [300, 268],
    [111,222]
  ];

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          {/* Background Fade */}
          <radialGradient id="radarFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--purple)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--purple)" stopOpacity="0" />
          </radialGradient>

          {/* Gradient for rotating sweep */}
          <linearGradient id="sweepGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--purple)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--pink)" stopOpacity="0.05" />
          </linearGradient>

          {/* Glow filter for nodes */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Range rings */}
        <g style={{ color: "var(--purple)" }}>
          <circle cx="200" cy="200" r="180" fill="url(#radarFade)" />
          {[68, 122, 176].map((r) => (
            <circle
              key={r}
              cx="200"
              cy="200"
              r={r}
              fill="none"
              stroke="var(--border2)"
              strokeOpacity="0.6"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Rotating sweep with smooth spin */}
        <g
          className="animate-spin"
          style={{
            transformOrigin: "200px 200px",
            animationDuration: "7s",
            animationTimingFunction: "linear",
          }}
        >
          <path
            d="M200 200 L200 20 A180 180 0 0 1 356 110 Z"
            fill="url(#sweepGradient)"
          />
        </g>

        {/* Connection lines to nodes */}
        <g
          stroke="var(--purple)"
          strokeOpacity="0.3"
          strokeWidth="1"
          strokeDasharray="4 6"
        >
          {nodes.map(([x, y], i) => (
            <line key={i} x1="200" y1="200" x2={x} y2={y} />
          ))}
        </g>

        {/* Freelancer / Client nodes with cyan & pink accent */}
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="10"
              fill="var(--cyan)"
              fillOpacity="0.4"
              className="animate-ping"
              style={{
                transformOrigin: `${x}px ${y}px`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: "2.5s",
              }}
            />
            <circle cx={x} cy={y} r="6" fill="var(--cyan)" filter="url(#glow)" />
          </g>
        ))}

        {/* Center node (Vidya / Main Hub) */}
        <g>
          <circle
            cx="200"
            cy="200"
            r="28"
            fill="var(--pink)"
            fillOpacity="0.15"
            className="animate-pulse"
          />
          <circle cx="200" cy="200" r="14" fill="var(--purple)" />
          <circle cx="200" cy="200" r="7" fill="var(--pink)" filter="url(#glow)" />
        </g>
      </svg>
    </div>
  );
}