import { cn } from "@/lib/utils";

type WaveDividerProps = {
  className?: string;
  fill?: string;
  flip?: boolean;
};

export function WaveDivider({
  className,
  fill = "#f0f7ff",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none w-full overflow-hidden leading-none", className)}
    >
      <svg
        className={cn("block h-12 w-full md:h-16", flip && "rotate-180")}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={fill}
          d="M0,48 C180,80 360,8 540,28 C720,48 900,88 1080,64 C1260,40 1350,16 1440,28 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}
