import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-ocean text-white shadow-lg shadow-ocean/20 hover:bg-ocean-deep hover:shadow-xl hover:shadow-ocean/25",
        secondary:
          "bg-white/90 text-ocean border border-ocean/15 shadow-md shadow-sky-900/5 hover:bg-water hover:border-ocean/25",
        whatsapp:
          "bg-whatsapp text-white shadow-lg shadow-whatsapp/30 hover:bg-[#1ebe57] hover:shadow-xl hover:shadow-whatsapp/35",
        accent:
          "bg-warm text-white shadow-lg shadow-warm/25 hover:bg-warm-deep",
        ghost: "text-ocean hover:bg-water",
        outline:
          "border border-ocean/20 bg-transparent text-ocean hover:bg-water",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-xl px-3.5 text-xs",
        lg: "h-12 rounded-2xl px-6 text-base",
        xl: "h-14 rounded-[1.35rem] px-7 text-base",
        icon: "h-11 w-11",
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
