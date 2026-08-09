import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-3.5 py-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "rounded-[1.2rem_0.55rem_1.2rem_0.55rem] border-transparent bg-ocean text-white",
        secondary:
          "rounded-[1.2rem_0.55rem_1.2rem_0.55rem] border-ocean/10 bg-foam text-sky-ink",
        teal:
          "rounded-[1.2rem_0.55rem_1.2rem_0.55rem] border-teal/30 bg-teal/15 text-sky-ink",
        warm:
          "rounded-[1.2rem_0.55rem_1.2rem_0.55rem] border-warm/25 bg-warm/12 text-warm-deep",
        outline:
          "rounded-[1.2rem_0.55rem_1.2rem_0.55rem] border-ocean/15 bg-white/70 text-sky-ink",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
