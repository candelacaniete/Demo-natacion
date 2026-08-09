"use client";

import { motion } from "framer-motion";
import { Activity, HeartPulse, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    icon: Activity,
    title: "Natación Adaptada e Inclusiva",
    description:
      "Aprendizaje, desarrollo motor, seguridad en el agua y actividad física para todas las edades, con propuestas pensadas para cada ritmo.",
    radius: "rounded-[3.5rem_1.1rem_3.5rem_1.1rem]",
    accent: "from-[#dff3ff] via-foam to-[#e8fff9]",
    iconWrap: "bg-ocean/12 text-ocean",
    delay: 0,
  },
  {
    icon: HeartPulse,
    title: "Hidroterapia & Neurodesarrollo",
    description:
      "Terapia especializada en el medio acuático coordinada por profesionales de la salud y educación física, con enfoque integral.",
    radius: "rounded-[1.1rem_3.5rem_1.1rem_3.5rem]",
    accent: "from-[#d8fff8] via-foam to-[#e8f7ff]",
    iconWrap: "bg-teal/20 text-teal-deep",
    delay: 0.08,
  },
  {
    icon: UserRound,
    title: "Clases Personalizadas",
    description:
      "Acompañamiento 1 a 1 para perder el miedo al agua, estimulación temprana y rehabilitación con atención cercana y continua.",
    radius: "rounded-[2.8rem_1.4rem_2.2rem_2.8rem]",
    accent: "from-[#fff3e8] via-sand to-[#eef7ff]",
    iconWrap: "bg-warm/15 text-warm-deep",
    delay: 0.16,
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-ocean py-20 md:py-24">
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

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-7">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: service.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`group relative overflow-hidden bg-gradient-to-br ${service.accent} p-6 shadow-float sm:p-7 ${service.radius}`}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4.5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-[1.5rem_0.6rem_1.5rem_0.6rem] ${service.iconWrap}`}
              >
                <service.icon className="h-6 w-6" />
              </motion.div>

              <h3 className="font-display text-xl font-bold text-sky-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div
                aria-hidden="true"
                className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-teal to-ocean/40 transition-all duration-300 group-hover:w-24"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
