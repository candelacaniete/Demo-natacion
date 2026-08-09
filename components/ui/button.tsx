import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-ocean text-white shadow-float hover:bg-ocean-deep hover:-translate-y-0.5",
        secondary:
          "bg-foam/90 text-sky-ink shadow-soft ring-1 ring-ocean/10 hover:bg-white hover:-translate-y-0.5",
        whatsapp:
          "bg-whatsapp text-white shadow-[0_16px_36px_-12px_rgba(37,211,102,0.55)] hover:bg-[#1ebe57] hover:-translate-y-0.5",
        accent:
          "bg-warm text-white shadow-[0_16px_36px_-12px_rgba(240,138,75,0.45)] hover:bg-warm-deep",
        ghost: "text-sky-ink hover:bg-white/50",
        outline:
          "border-2 border-ocean/20 bg-transparent text-sky-ink hover:border-teal hover:bg-aqua-mist/60",
        soft: "bg-teal/15 text-sky-ink hover:bg-teal/25",
      },
      size: {
        default: "h-11 rounded-[1.4rem_0.7rem_1.4rem_0.7rem] px-5 py-2",
        sm: "h-9 rounded-[1.1rem_0.55rem_1.1rem_0.55rem] px-3.5 text-xs",
        lg: "h-12 rounded-[1.55rem_0.75rem_1.55rem_0.75rem] px-6 text-base",
        xl: "h-14 rounded-[1.8rem_0.85rem_1.8rem_0.85rem] px-7 text-base",
        icon: "h-11 w-11 rounded-[1.25rem_0.65rem_1.25rem_0.65rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
