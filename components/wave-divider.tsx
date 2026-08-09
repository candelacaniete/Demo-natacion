import { cn } from "@/lib/utils";

type WaveDividerProps = {
  className?: string;
  to?: string;
  flip?: boolean;
  variant?: "soft" | "deep" | "foam";
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
}: WaveDividerProps) {
  const fill = to ?? fills[variant];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative z-10 -mb-px w-full overflow-hidden leading-none",
        className
      )}
    >
      <svg
        className={cn("block h-16 w-full md:h-24", flip && "rotate-180")}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={fill}
          opacity="0.45"
          d="M0,72 C160,30 300,110 470,78 C640,46 780,10 960,48 C1120,82 1280,110 1440,70 L1440,120 L0,120 Z"
        />
        <path
          fill={fill}
          d="M0,84 C180,48 320,118 500,86 C680,54 820,18 1000,56 C1160,88 1300,112 1440,82 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
