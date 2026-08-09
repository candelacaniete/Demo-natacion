"use client";

import { motion } from "framer-motion";
import { ClipboardList, MessageSquareHeart, Waves } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: MessageSquareHeart,
    title: "Contacto Inicial",
    description:
      "Nos escribís por WhatsApp para contarnos tu consulta. Respondemos con calidez y sin vueltas.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Entrevista de Evaluación",
    description:
      "Conocemos las necesidades de la persona para asignar el grupo o Profe ideal.",
  },
  {
    number: "03",
    icon: Waves,
    title: "¡A la Pileta!",
    description:
      "Comenzamos las actividades en la sede que mejor te quede, con acompañamiento cercano.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative bg-aqua-pale py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Camino simple"
          title="Cómo Empezar"
          highlight="Empezar"
          description="Tres pasos claros para comenzar con confianza."
        />

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-14 hidden h-[3px] rounded-full bg-gradient-to-r from-transparent via-teal/50 to-transparent md:block"
          />

          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className={cn(
                  "liquid-drop relative bg-foam p-6 shadow-float ring-1 ring-ocean/5 will-change-transform sm:p-7",
                  index === 1 && "md:mt-8"
                )}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-ocean to-teal text-white shadow-md shadow-ocean/20"
                    style={{ borderRadius: "45% 55% 50% 50% / 55% 40% 60% 45%" }}
                  >
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-bold text-teal/45">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-sky-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
