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

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative z-10 -mb-px w-full max-w-full overflow-hidden leading-none",
        className
      )}
    >
      <div
        className={cn(
          "relative h-16 w-[130%] max-w-none md:h-24",
          flip && "rotate-180",
          animated && "animate-wave-tide"
        )}
        style={{ marginLeft: "-15%" }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={fill}
            opacity="0.4"
            d="M0,72 C160,30 300,110 470,78 C640,46 780,10 960,48 C1120,82 1280,110 1440,70 L1440,120 L0,120 Z"
          />
        </svg>
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
            fill={fill}
            d="M0,84 C180,48 320,118 500,86 C680,54 820,18 1000,56 C1160,88 1300,112 1440,82 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </div>
  );
}
