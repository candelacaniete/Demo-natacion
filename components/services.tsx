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
    shape: "radius-shell",
    accent: "from-[#dff3ff] via-foam to-[#e8fff9]",
    iconWrap: "bg-ocean/12 text-ocean",
    offset: "md:mt-0",
  },
  {
    icon: HeartPulse,
    title: "Hidroterapia & Neurodesarrollo",
    description:
      "Terapia especializada en el medio acuático coordinada por profesionales de la salud y educación física, con enfoque integral.",
    shape: "radius-shell-alt",
    accent: "from-[#d8fff8] via-foam to-[#e8f7ff]",
    iconWrap: "bg-teal/20 text-teal-deep",
    offset: "md:mt-10",
  },
  {
    icon: UserRound,
    title: "Clases Personalizadas",
    description:
      "Acompañamiento 1 a 1 para perder el miedo al agua, estimulación temprana y rehabilitación con atención cercana y continua.",
    shape: "radius-shell-soft",
    accent: "from-[#fff3e8] via-sand to-[#eef7ff]",
    iconWrap: "bg-warm/15 text-warm-deep",
    offset: "md:mt-4",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-ocean py-20 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-4rem] top-10 h-64 w-64 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-3rem] h-72 w-72 rounded-full bg-warm/15 blur-3xl" />
        <svg
          className="absolute inset-x-0 bottom-0 h-32 w-full opacity-20"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#00CED1"
            d="M0,70 C240,20 480,110 720,60 C960,10 1200,90 1440,40 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Lo que ofrecemos"
          title="Nuestras Propuestas y Terapias"
          highlight="Propuestas"
          description="Adaptamos cada clase a las necesidades individuales de cada alumno."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-3 md:items-start">
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
                "group relative overflow-hidden bg-gradient-to-br p-7 shadow-float sm:p-8",
                service.accent,
                service.shape,
                service.offset
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
                  "mb-5 flex h-14 w-14 items-center justify-center rounded-[1.6rem_0.55rem_1.35rem_0.85rem]",
                  service.iconWrap
                )}
              >
                <service.icon className="h-6 w-6" />
              </motion.div>

              <h3 className="font-display text-xl font-bold text-sky-ink md:text-[1.35rem]">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div
                aria-hidden="true"
                className="mt-7 h-1.5 w-16 rounded-full bg-gradient-to-r from-teal to-ocean/40 transition-all duration-300 group-hover:w-28"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
