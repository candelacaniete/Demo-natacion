"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroTurtleProps = {
  className?: string;
};

/** Soft illustrated sea turtle — watercolor washes + ink line */
export function HeroTurtle({ className }: HeroTurtleProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
      initial={{ opacity: 0, x: 36, y: 20 }}
      animate={{
        opacity: 1,
        x: [0, -8, 4, 0],
        y: [0, -10, -4, 0],
        rotate: [-2, 1.5, -1, -2],
      }}
      transition={{
        opacity: { duration: 0.9, delay: 0.15 },
        x: { duration: 11, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 13, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <svg
        viewBox="0 0 420 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="shellWash" x1="80" y1="40" x2="320" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1a7a6d" />
            <stop offset="0.45" stopColor="#2d9b8a" />
            <stop offset="1" stopColor="#0f5c6e" />
          </linearGradient>
          <linearGradient id="shellLight" x1="140" y1="70" x2="280" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7ef0e4" stopOpacity="0.55" />
            <stop offset="1" stopColor="#2d9b8a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flipperWash" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3d8f7e" />
            <stop offset="1" stopColor="#1f6b62" />
          </linearGradient>
          <radialGradient id="bellyGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#fff6eb" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f0d9b0" stopOpacity="0.35" />
          </radialGradient>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
        </defs>

        {/* Soft watercolor bloom behind turtle */}
        <ellipse
          cx="220"
          cy="170"
          rx="150"
          ry="110"
          fill="#7ef0e4"
          opacity="0.18"
          filter="url(#softBlur)"
        />

        {/* Rear flippers */}
        <path
          d="M268 210 C300 232, 328 248, 348 262 C332 268, 304 258, 278 236 C270 226, 266 216, 268 210Z"
          fill="url(#flipperWash)"
          opacity="0.9"
        />
        <path
          d="M248 228 C262 252, 274 278, 278 298 C258 292, 238 268, 228 242 C226 232, 238 224, 248 228Z"
          fill="url(#flipperWash)"
          opacity="0.85"
        />

        {/* Front flippers */}
        <path
          d="M118 148 C70 118, 36 108, 14 112 C28 128, 52 152, 88 176 C104 186, 122 176, 128 162 C130 154, 126 148, 118 148Z"
          fill="url(#flipperWash)"
        />
        <path
          d="M168 210 C142 236, 108 268, 92 292 C118 286, 152 258, 178 228 C186 218, 180 206, 168 210Z"
          fill="url(#flipperWash)"
          opacity="0.92"
        />

        {/* Shell base */}
        <ellipse cx="210" cy="168" rx="108" ry="88" fill="url(#shellWash)" />
        <ellipse cx="210" cy="168" rx="108" ry="88" fill="url(#shellLight)" />

        {/* Shell scutes — organic mosaic */}
        <path
          d="M210 92 C246 96, 278 118, 292 150 C268 142, 236 132, 210 132 C184 132, 152 142, 128 150 C142 118, 174 96, 210 92Z"
          fill="#0d5c58"
          opacity="0.35"
        />
        <path
          d="M210 132 C236 132, 268 142, 292 150 C300 172, 296 198, 278 220 C252 204, 228 196, 210 196 C192 196, 168 204, 142 220 C124 198, 120 172, 128 150 C152 142, 184 132, 210 132Z"
          fill="#145f5a"
          opacity="0.28"
        />
        <path
          d="M142 220 C168 204, 192 196, 210 196 C228 196, 252 204, 278 220 C262 244, 236 258, 210 258 C184 258, 158 244, 142 220Z"
          fill="#0a4a4f"
          opacity="0.32"
        />
        {/* Scute seams */}
        <g stroke="#083f44" strokeWidth="2.2" strokeLinecap="round" opacity="0.45">
          <path d="M210 98 L210 250" />
          <path d="M148 140 C176 156, 244 156, 272 140" />
          <path d="M138 188 C170 206, 250 206, 282 188" />
          <path d="M160 120 C180 148, 180 210, 168 240" />
          <path d="M260 120 C240 148, 240 210, 252 240" />
        </g>

        {/* Head */}
        <path
          d="M118 128 C88 112, 64 108, 48 118 C36 128, 38 148, 54 160 C72 174, 98 170, 122 158 C132 152, 132 138, 118 128Z"
          fill="#2f8f7c"
        />
        <ellipse cx="62" cy="128" rx="5.5" ry="6" fill="#082f49" />
        <circle cx="63.5" cy="126.5" r="1.6" fill="#e8f5ff" opacity="0.85" />
        {/* gentle smile */}
        <path
          d="M44 142 C50 148, 58 150, 66 146"
          stroke="#0a4a4f"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />

        {/* Belly peek */}
        <ellipse cx="206" cy="214" rx="62" ry="28" fill="url(#bellyGlow)" opacity="0.55" />

        {/* Ink outline — hand-drawn feel */}
        <g
          stroke="#083842"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.72"
        >
          <path d="M118 148 C70 118, 36 108, 14 112 C28 128, 52 152, 88 176 C104 186, 122 176, 128 162" />
          <path d="M168 210 C142 236, 108 268, 92 292" />
          <path d="M268 210 C300 232, 328 248, 348 262" />
          <path d="M248 228 C262 252, 274 278, 278 298" />
          <ellipse cx="210" cy="168" rx="108" ry="88" />
          <path d="M118 128 C88 112, 64 108, 48 118 C36 128, 38 148, 54 160 C72 174, 98 170, 122 158" />
        </g>

        {/* Trail bubbles from flipper */}
        <g fill="#ffffff">
          <circle cx="24" cy="96" r="4" opacity="0.35" />
          <circle cx="40" cy="78" r="2.5" opacity="0.28" />
          <circle cx="58" cy="88" r="3.2" opacity="0.22" />
          <circle cx="330" cy="240" r="3" opacity="0.25" />
          <circle cx="348" cy="228" r="2" opacity="0.2" />
        </g>
      </svg>
    </motion.div>
  );
}
