"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroTurtleProps = {
  className?: string;
};

/** Soft illustrated sea turtle — watercolor washes, light ink */
export function HeroTurtle({ className }: HeroTurtleProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
      initial={{ opacity: 0, x: 40, y: 24 }}
      animate={{
        opacity: 1,
        x: [0, -10, 5, 0],
        y: [0, -12, -5, 0],
        rotate: [-2.5, 1.2, -0.8, -2.5],
      }}
      transition={{
        opacity: { duration: 1, delay: 0.12 },
        x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 14, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <svg
        viewBox="0 0 420 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible drop-shadow-[0_18px_30px_rgba(8,47,73,0.18)]"
      >
        <defs>
          <linearGradient id="shellWash" x1="90" y1="50" x2="310" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2a9d8f" />
            <stop offset="0.5" stopColor="#1f7a72" />
            <stop offset="1" stopColor="#145a62" />
          </linearGradient>
          <radialGradient id="shellShine" cx="38%" cy="32%" r="55%">
            <stop offset="0%" stopColor="#9ff5ea" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#2a9d8f" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#145a62" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="flipperWash" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3da899" />
            <stop offset="1" stopColor="#1b6b66" />
          </linearGradient>
          <radialGradient id="bellyGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fff8ef" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f2d4a8" stopOpacity="0.25" />
          </radialGradient>
          <filter id="washBlur" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
        </defs>

        {/* Ambient watercolor bloom */}
        <ellipse cx="215" cy="175" rx="155" ry="115" fill="#7ef0e4" opacity="0.2" filter="url(#washBlur)" />
        <ellipse cx="120" cy="140" rx="50" ry="36" fill="#b8fff4" opacity="0.22" filter="url(#washBlur)" />

        {/* Flippers — soft organic shapes */}
        <path
          d="M115 150 C68 115, 32 104, 10 110 C22 132, 50 160, 90 182 C108 192, 126 178, 128 162 C129 154, 124 150, 115 150Z"
          fill="url(#flipperWash)"
          opacity="0.95"
        />
        <path
          d="M165 212 C138 242, 102 276, 86 300 C114 292, 152 262, 178 230 C186 220, 178 206, 165 212Z"
          fill="url(#flipperWash)"
          opacity="0.9"
        />
        <path
          d="M270 208 C304 232, 336 250, 356 266 C338 272, 308 260, 280 236 C270 226, 266 214, 270 208Z"
          fill="url(#flipperWash)"
          opacity="0.88"
        />
        <path
          d="M250 230 C266 256, 278 284, 282 304 C260 296, 238 270, 228 244 C226 234, 240 226, 250 230Z"
          fill="url(#flipperWash)"
          opacity="0.82"
        />

        {/* Shell */}
        <ellipse cx="212" cy="170" rx="112" ry="90" fill="url(#shellWash)" />
        <ellipse cx="212" cy="170" rx="112" ry="90" fill="url(#shellShine)" />

        {/* Soft scute patches — no harsh wire grid */}
        <path
          d="M212 95 C250 100, 284 122, 298 154 C270 144, 238 134, 212 134 C186 134, 154 144, 126 154 C140 122, 174 100, 212 95Z"
          fill="#0f5a58"
          opacity="0.22"
        />
        <path
          d="M150 175 C172 158, 198 150, 212 150 C226 150, 252 158, 274 175 C280 198, 268 222, 246 236 C228 224, 212 220, 196 224 C174 232, 152 220, 144 198 C140 188, 144 180, 150 175Z"
          fill="#9ff5ea"
          opacity="0.16"
        />
        <path
          d="M145 218 C172 202, 196 196, 212 196 C228 196, 252 202, 279 218 C262 244, 236 258, 212 258 C188 258, 162 244, 145 218Z"
          fill="#0a454c"
          opacity="0.2"
        />

        {/* Head */}
        <path
          d="M120 130 C88 112, 62 108, 46 118 C34 128, 36 150, 54 162 C74 176, 102 170, 124 158 C134 152, 134 140, 120 130Z"
          fill="#34a897"
        />
        <ellipse cx="60" cy="130" rx="5.8" ry="6.4" fill="#082f49" />
        <circle cx="61.8" cy="128.2" r="1.7" fill="#e8f5ff" opacity="0.9" />
        <path
          d="M42 144 C49 151, 58 152, 67 148"
          stroke="#0a4a4f"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* Belly hint */}
        <ellipse cx="208" cy="216" rx="64" ry="30" fill="url(#bellyGlow)" opacity="0.5" />

        {/* Sparse ink accents — hand-drawn, not a full wireframe */}
        <g
          stroke="#0a3d48"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.55"
        >
          <path d="M115 150 C68 115, 32 104, 10 110 C22 132, 50 160, 90 182" />
          <path d="M165 212 C138 242, 102 276, 86 300" />
          <path d="M270 208 C304 232, 336 250, 356 266" />
          <ellipse cx="212" cy="170" rx="112" ry="90" strokeWidth="3" />
          <path d="M120 130 C88 112, 62 108, 46 118 C34 128, 36 150, 54 162 C74 176, 102 170, 124 158" />
          {/* one soft shell curve only */}
          <path d="M145 150 C175 138, 250 138, 279 150" opacity="0.7" />
          <path d="M140 200 C175 218, 250 218, 284 200" opacity="0.55" />
        </g>

        {/* Trail bubbles */}
        <g fill="#ffffff">
          <circle cx="22" cy="94" r="4.5" opacity="0.4" />
          <circle cx="38" cy="74" r="2.8" opacity="0.3" />
          <circle cx="54" cy="86" r="3.4" opacity="0.24" />
          <circle cx="340" cy="244" r="3.2" opacity="0.28" />
          <circle cx="358" cy="228" r="2.2" opacity="0.22" />
        </g>
      </svg>
    </motion.div>
  );
}
