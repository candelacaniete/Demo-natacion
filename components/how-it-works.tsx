"use client";

import { motion } from "framer-motion";
import { ClipboardList, MessageSquareHeart, Waves } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

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
    <section className="relative bg-slate-50 py-20 md:py-24">
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
            className="absolute left-[8%] right-[8%] top-10 hidden h-px bg-gradient-to-r from-transparent via-teal/35 to-transparent md:block"
          />

          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative rounded-[2rem] bg-[#f0f7ff] p-6 shadow-xl shadow-sky-900/5 ring-1 ring-ocean/5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-ocean shadow-md shadow-sky-900/5">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-bold text-teal/40">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-ocean-deep">
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
