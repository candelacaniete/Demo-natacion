"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const parts = highlight && title.includes(highlight)
    ? title.split(highlight)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-teal">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-ocean-deep md:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {parts ? (
          <>
            {parts[0]}
            <span className="relative inline-block text-ocean">
              {highlight}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-2.5 w-full rounded-full bg-teal/25"
              />
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
