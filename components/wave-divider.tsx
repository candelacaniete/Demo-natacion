import { cn } from "@/lib/utils";

type WaveDividerProps = {
  className?: string;
  from?: string;
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
  from,
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
        from,
        className
      )}
    >
      <svg
        className={cn("block h-14 w-full md:h-20", flip && "rotate-180")}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={fill}
          d="M0,54 C120,90 240,10 390,38 C540,66 660,96 810,70 C960,44 1080,8 1230,28 C1320,40 1385,62 1440,48 L1440,100 L0,100 Z"
        />
        <path
          fill={fill}
          opacity="0.45"
          d="M0,68 C160,40 280,88 430,72 C580,56 700,18 860,42 C1020,66 1160,92 1440,60 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  );
}
