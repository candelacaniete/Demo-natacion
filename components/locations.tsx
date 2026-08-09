"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPinned } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { LOCATIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Locations() {
  return (
    <section id="sedes" className="relative overflow-hidden bg-sky-950 py-20 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-16 h-52 w-52 rounded-full bg-teal/15 blur-3xl" />
        <div className="absolute bottom-10 right-8 h-64 w-64 rounded-full bg-ocean/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Cerca tuyo"
          title="Nuestras Sedes en Pilar"
          highlight="Sedes"
          description="Elegí la pileta que te quede más cómoda. Ambas están pensadas para un acompañamiento accesible."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {LOCATIONS.map((location, index) => (
            <motion.article
              key={location.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={cn(
                "group overflow-hidden border border-white/10 bg-gradient-to-br from-white/12 to-white/5 p-6 shadow-float backdrop-blur-sm sm:p-8",
                index % 2 === 0 ? "shape-shell" : "shape-shell-alt"
              )}
            >
              <div className="flex items-start gap-4">
                <span
                  className="relative flex h-14 w-14 shrink-0 items-center justify-center bg-gradient-to-br from-teal to-ocean text-white shadow-lg shadow-teal/20"
                  style={{ borderRadius: "48% 52% 40% 60% / 55% 40% 60% 45%" }}
                >
                  <MapPinned className="h-6 w-6" />
                  <span
                    aria-hidden="true"
                    className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-warm ring-2 ring-sky-950"
                  />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {location.name}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-cyan-50/85">
                    {location.address}
                  </p>
                  <Button asChild variant="light" className="mt-5">
                    <a
                      href={location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cómo llegar
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="mt-7 h-2 rounded-full bg-gradient-to-r from-teal via-ocean to-warm/70 opacity-70 transition group-hover:opacity-100"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
