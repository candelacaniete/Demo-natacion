"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPinned } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { LOCATIONS } from "@/lib/constants";

export function Locations() {
  return (
    <section id="sedes" className="relative bg-water py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cerca tuyo"
          title="Nuestras Sedes en Pilar"
          highlight="Sedes"
          description="Elegí la pileta que te quede más cómoda. Ambas están pensadas para un acompañamiento accesible."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {LOCATIONS.map((location, index) => (
            <motion.article
              key={location.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl shadow-sky-900/5 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-ocean to-teal text-white shadow-lg shadow-ocean/20">
                  <MapPinned className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-ocean-deep">
                    {location.name}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    {location.address}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-5"
                  >
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
                className="mt-6 h-2 rounded-full bg-gradient-to-r from-ocean/20 via-teal/40 to-warm/30 transition group-hover:from-ocean/40 group-hover:via-teal/60"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
