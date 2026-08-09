"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const parts =
    highlight && title.includes(highlight) ? title.split(highlight) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.22em]",
            tone === "dark" ? "text-teal" : "text-teal-deep"
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              tone === "dark" ? "bg-teal" : "bg-teal-deep"
            )}
          />
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.85rem] lg:leading-[1.15]",
          tone === "dark" ? "text-white" : "text-sky-950"
        )}
      >
        {parts ? (
          <>
            {parts[0]}
            <span className="relative inline-block">
              {highlight}
              <svg
                aria-hidden="true"
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 8 C40 2, 80 12, 120 6 C150 2, 175 8, 198 5"
                  stroke="#00CED1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.9"
                />
              </svg>
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            tone === "dark" ? "text-cyan-50/85" : "text-slate-600"
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
