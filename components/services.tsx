"use client";

import { motion } from "framer-motion";
import { Activity, HeartPulse, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Activity,
    title: "Natación Adaptada e Inclusiva",
    description:
      "Aprendizaje, desarrollo motor, seguridad en el agua y actividad física para todas las edades, con propuestas pensadas para cada ritmo.",
    accent: "from-ocean/10 to-water",
    iconColor: "text-ocean bg-ocean/10",
  },
  {
    icon: HeartPulse,
    title: "Hidroterapia & Neurodesarrollo",
    description:
      "Terapia especializada en el medio acuático coordinada por profesionales de la salud y educación física, con enfoque integral.",
    accent: "from-teal/10 to-[#e8fff9]",
    iconColor: "text-teal-deep bg-teal/10",
  },
  {
    icon: UserRound,
    title: "Clases Personalizadas",
    description:
      "Acompañamiento 1 a 1 para perder el miedo al agua, estimulación temprana y rehabilitación con atención cercana y continua.",
    accent: "from-warm/10 to-[#fff7f0]",
    iconColor: "text-warm-deep bg-warm/10",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative bg-water py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lo que ofrecemos"
          title="Nuestras Propuestas y Terapias"
          highlight="Propuestas"
          description="Adaptamos cada clase a las necesidades individuales de cada alumno."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card
                className={`h-full border-none bg-gradient-to-br ${service.accent} shadow-xl shadow-sky-900/5`}
              >
                <CardHeader>
                  <span
                    className={`mb-2 flex h-12 w-12 items-center justify-center rounded-2xl ${service.iconColor}`}
                  >
                    <service.icon className="h-6 w-6" />
                  </span>
                  <CardTitle className="text-ocean-deep">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[0.95rem] leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
