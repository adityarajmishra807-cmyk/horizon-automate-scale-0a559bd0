import { motion } from "motion/react";

/**
 * HORIZON WORKS — technical blueprint hero graphic.
 * Architectural drafting aesthetic: nested frames, fine grid, gold hairlines,
 * a central H/W monogram and five annotated system nodes.
 */

const NODES = [
  { label: "BUILD", x: 400, y: 190, anchor: "middle" as const, lx: 400, ly: 158 },
  { label: "DESIGN", x: 168, y: 300, anchor: "start" as const, lx: 96, ly: 268 },
  { label: "SYSTEM", x: 632, y: 300, anchor: "end" as const, lx: 704, ly: 268 },
  { label: "AUTOMATE", x: 168, y: 700, anchor: "start" as const, lx: 96, ly: 742 },
  { label: "SCALE", x: 632, y: 700, anchor: "end" as const, lx: 704, ly: 742 },
];

export function BlueprintHero() {
  return (
    <svg
      viewBox="0 0 800 1000"
      className="block w-full h-full"
      role="img"
      aria-label="Horizon Works technical blueprint diagram: H/W monogram linked to design, build, system, automate and scale nodes"
    >
      <defs>
        <pattern id="hw-grid" width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M25 0H0V25" fill="none" stroke="var(--primary)" strokeOpacity="0.07" strokeWidth="1" />
        </pattern>
        <pattern id="hw-grid-lg" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M100 0H0V100" fill="none" stroke="var(--primary)" strokeOpacity="0.11" strokeWidth="1" />
        </pattern>
        <clipPath id="hw-clip">
          <rect x="0" y="0" width="800" height="1000" />
        </clipPath>
      </defs>

      <g clipPath="url(#hw-clip)">
        <rect width="800" height="1000" fill="var(--surface)" />
        <rect width="800" height="1000" fill="url(#hw-grid)" />
        <rect width="800" height="1000" fill="url(#hw-grid-lg)" />

        {/* header / footer annotations */}
        <g
          fill="var(--primary)"
          fontSize="13"
          letterSpacing="3.2"
          fontFamily="var(--font-sans)"
          fontWeight="600"
        >
          <text x="36" y="44">HORIZON WORKS</text>
          <text x="764" y="44" textAnchor="end">[ HW — 001 ]</text>
          <text x="36" y="972">N 40°42′</text>
          <text x="764" y="972" textAnchor="end">W 74°00′</text>
        </g>

        {/* nested blueprint frames — slight parallax drift */}
        <motion.g
          animate={{ x: [0, 5, 0, -5, 0], y: [0, -4, 0, 4, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="36" y="62" width="728" height="880" fill="none" stroke="var(--primary)" strokeOpacity="0.9" strokeWidth="1.5" />
          <rect x="60" y="88" width="680" height="828" fill="none" stroke="var(--primary)" strokeOpacity="0.45" strokeWidth="1" />
          <rect x="96" y="128" width="608" height="748" fill="none" stroke="var(--primary)" strokeOpacity="0.28" strokeWidth="1" />
          {/* frame corner blocks */}
          {[
            [36, 62],
            [750, 62],
            [36, 928],
            [750, 928],
          ].map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="14" height="14" fill="var(--primary)" />
          ))}
        </motion.g>

        {/* full-bleed crosshair axes */}
        <g stroke="var(--primary)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 10">
          <line x1="0" y1="500" x2="800" y2="500" />
          <line x1="400" y1="0" x2="400" y2="1000" />
        </g>
        <g stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.8">
          {[
            [140, 500],
            [660, 500],
            [400, 200],
            [400, 800],
          ].map(([x, y]) => (
            <g key={`ch-${x}-${y}`}>
              <line x1={x - 8} y1={y} x2={x + 8} y2={y} />
              <line x1={x} y1={y - 8} x2={x} y2={y + 8} />
            </g>
          ))}
        </g>

        {/* measurement ticks along inner frame */}
        <g stroke="var(--primary)" strokeOpacity="0.45" strokeWidth="1">
          {Array.from({ length: 25 }).map((_, i) => (
            <line key={`tx-${i}`} x1={96 + i * 25} y1={128} x2={96 + i * 25} y2={i % 4 === 0 ? 142 : 135} />
          ))}
          {Array.from({ length: 31 }).map((_, i) => (
            <line key={`ty-${i}`} x1={96} y1={128 + i * 25} x2={i % 4 === 0 ? 110 : 103} y2={128 + i * 25} />
          ))}
        </g>

        {/* orbit rings */}
        <circle cx="400" cy="500" r="205" fill="none" stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="1" />
        <motion.circle
          cx="400"
          cy="500"
          r="160"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.55"
          strokeWidth="1"
          strokeDasharray="4 9"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "400px 500px" }}
        />

        {/* connection lines drawing outward from the core */}
        <g stroke="var(--primary)" strokeWidth="1.25" strokeOpacity="0.75" fill="none">
          {NODES.map((n, i) => (
            <motion.line
              key={n.label}
              x1="400"
              y1="500"
              x2={n.x}
              y2={n.y}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.35 + i * 0.14, ease: "easeOut" }}
            />
          ))}
        </g>

        {/* nodes + annotations */}
        {NODES.map((n, i) => (
          <g key={`node-${n.label}`}>
            <motion.rect
              x={n.x - 8}
              y={n.y - 8}
              width="16"
              height="16"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1.5"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
            />
            <rect x={n.x - 3} y={n.y - 3} width="6" height="6" fill="var(--primary)" />
            <text
              x={n.lx}
              y={n.ly}
              textAnchor={n.anchor}
              fill="var(--primary)"
              fontSize="12"
              letterSpacing="2.8"
              fontFamily="var(--font-sans)"
              fontWeight="600"
            >
              {n.label}
            </text>
            <line
              x1={n.anchor === "end" ? n.lx - 76 : n.lx}
              y1={n.ly + 8}
              x2={n.anchor === "end" ? n.lx : n.lx + 76}
              y2={n.ly + 8}
              stroke="var(--primary)"
              strokeOpacity="0.6"
              strokeWidth="1"
            />
          </g>
        ))}

        {/* core bracket marks */}
        <g stroke="var(--primary)" strokeWidth="1.5" fill="none" strokeOpacity="0.8">
          <path d="M292 418v-18h18" />
          <path d="M508 418v-18h-18" />
          <path d="M292 582v18h18" />
          <path d="M508 582v18h-18" />
        </g>

        {/* central H/W monogram */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "400px 500px" }}
        >
          <g transform="translate(310 430)">
            {/* H */}
            <rect x="0" y="0" width="26" height="140" fill="var(--primary)" />
            <rect x="0" y="58" width="74" height="24" fill="var(--primary)" />
            {/* W */}
            <path
              d="M62 0 L86 140 L112 62 L138 140 L162 0"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="25"
              strokeLinejoin="miter"
            />
            {/* negative-space cut through the joint */}
            <rect x="56" y="52" width="12" height="96" fill="var(--surface)" />
          </g>
        </motion.g>

        {/* scale bar */}
        <g stroke="var(--primary)" strokeOpacity="0.7" strokeWidth="1">
          <line x1="300" y1="880" x2="500" y2="880" />
          <line x1="300" y1="874" x2="300" y2="886" />
          <line x1="400" y1="876" x2="400" y2="884" />
          <line x1="500" y1="874" x2="500" y2="886" />
        </g>
        <text
          x="400"
          y="904"
          textAnchor="middle"
          fill="var(--primary)"
          fontSize="11"
          letterSpacing="2.6"
          fontFamily="var(--font-sans)"
          fontWeight="600"
          opacity="0.75"
        >
          SCALE 1:1
        </text>
      </g>
    </svg>
  );
}
