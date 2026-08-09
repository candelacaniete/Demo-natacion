"use client";

import { cn } from "@/lib/utils";

type WaveDividerProps = {
  className?: string;
  to?: string;
  flip?: boolean;
  variant?: "soft" | "deep" | "foam";
  animated?: boolean;
};

const fills = {
  soft: "#F0F8FF",
  deep: "#0f4c81",
  foam: "#f7fcff",
};

export function WaveDivider({
  className,
  to,
  flip = false,
  variant = "soft",
  animated = true,
}: WaveDividerProps) {
  const fill = to ?? fills[variant];
  const accent = variant === "deep" ? "#00CED1" : "#0f4c81";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative z-10 -mb-px w-full max-w-full overflow-x-clip leading-none",
        className
      )}
    >
      {/* Keep width at 100% — animate via transform so we never expand the page */}
      <div
        className={cn(
          "relative h-14 w-full md:h-20",
          flip && "rotate-180",
          animated && "animate-wave-tide"
        )}
      >
        <svg
          className={cn(
            "absolute inset-0 h-full w-full",
            animated && "animate-wave-tide-alt"
          )}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={accent}
            opacity={variant === "deep" ? 0.35 : 0.12}
            d="M0,60 C180,20 320,100 500,68 C680,36 840,8 1040,48 C1200,78 1320,96 1440,58 L1440,120 L0,120 Z"
          />
        </svg>

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={fill}
            d="M0,84 C180,48 320,118 500,86 C680,54 820,18 1000,56 C1160,88 1300,112 1440,82 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </div>
  );
}
