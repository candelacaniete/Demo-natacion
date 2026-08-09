import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-3.5 py-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors shape-pill-soft",
  {
    variants: {
      variant: {
        default: "border-transparent bg-ocean text-white",
        secondary: "border-ocean/10 bg-foam text-sky-950",
        teal: "border-teal/30 bg-teal/15 text-sky-950",
        warm: "border-warm/25 bg-warm/12 text-warm-deep",
        outline: "border-ocean/15 bg-white/70 text-sky-950",
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
