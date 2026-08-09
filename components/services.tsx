"use client";

import { motion } from "framer-motion";
import { Activity, HeartPulse, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Activity,
    title: "Natación Adaptada e Inclusiva",
    description:
      "Aprendizaje, desarrollo motor, seguridad en el agua y actividad física para todas las edades, con propuestas pensadas para cada ritmo.",
    accent: "bg-[linear-gradient(160deg,#dff3ff_0%,#f7fcff_50%,#e8fff9_100%)]",
    iconWrap: "bg-ocean/12 text-ocean",
    className: "md:col-span-2 md:min-h-[17rem]",
  },
  {
    icon: HeartPulse,
    title: "Hidroterapia & Neurodesarrollo",
    description:
      "Terapia especializada en el medio acuático coordinada por profesionales de la salud y educación física.",
    accent: "bg-[linear-gradient(160deg,#d8fff8_0%,#f7fcff_55%,#e8f7ff_100%)]",
    iconWrap: "bg-teal/20 text-teal-deep",
    className: "md:row-span-2 md:min-h-[22rem]",
  },
  {
    icon: UserRound,
    title: "Clases Personalizadas",
    description:
      "Acompañamiento 1 a 1 para perder el miedo al agua, estimulación temprana y rehabilitación.",
    accent: "bg-[linear-gradient(160deg,#fff3e8_0%,#fff8f1_50%,#eef7ff_100%)]",
    iconWrap: "bg-warm/15 text-warm-deep",
    className: "md:col-span-2",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative w-full max-w-full overflow-x-hidden bg-sky-950 py-20 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-4rem] top-10 h-64 w-64 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-3rem] h-72 w-72 rounded-full bg-warm/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Lo que ofrecemos"
          title="Nuestras Propuestas y Terapias"
          highlight="Propuestas"
          description="Adaptamos cada clase a las necesidades individuales de cada alumno."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={cn(
                "group relative flex min-w-0 flex-col overflow-hidden liquid-drop p-6 shadow-float will-change-transform sm:p-8",
                service.accent,
                service.className
              )}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.8 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={cn(
                  "mb-5 flex h-14 w-14 items-center justify-center",
                  service.iconWrap
                )}
                style={{ borderRadius: "48% 52% 45% 55% / 55% 40% 60% 45%" }}
              >
                <service.icon className="h-6 w-6" />
              </motion.div>

              <h3 className="font-display text-xl font-bold text-sky-950 md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-slate-600 md:text-base">
                {service.description}
              </p>

              <div
                aria-hidden="true"
                className="mt-auto pt-7"
              >
                <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-teal to-ocean/40 transition-all duration-300 group-hover:w-28" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
