"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿A partir de qué edad pueden asistir?",
    answer:
      "Trabajamos con niños, jóvenes y adultos. La propuesta se adapta según la etapa y las necesidades de cada persona: desde estimulación temprana hasta natación adaptada e hidroterapia.",
  },
  {
    question: "¿Cómo funciona la cobertura con CUD y obra social?",
    answer:
      "Si tenés Certificado Único de Discapacidad (CUD), te acompañamos en la gestión ante tu obra social o prepaga para la cobertura de Hidroterapia y Estimulación Acuática. Escribinos por WhatsApp y te contamos los requisitos según tu caso.",
  },
  {
    question: "¿Hay una entrevista previa antes de empezar?",
    answer:
      "Sí. Realizamos una entrevista de evaluación para conocer a la persona, sus objetivos y necesidades. Así podemos asignar el grupo o el profesional más adecuado y empezar con tranquilidad.",
  },
  {
    question: "¿Qué hay que llevar a la primera clase?",
    answer:
      "Traé traje de baño, toalla, gorra (si la usan), antiparras opcionales y todo lo que ayude a la comodidad de la persona. Si hay alguna particularidad o apoyo específico, lo coordinamos en la entrevista previa.",
  },
  {
    question: "¿Puedo elegir la sede?",
    answer:
      "Sí. Tenemos sedes en Acuasport Pilar y Club Sportivo Pilar. Te ayudamos a elegir la que mejor te quede por ubicación, horarios y disponibilidad.",
  },
];

export function Faq() {
  return (
    <section
      id="preguntas-frecuentes"
      className="relative bg-aqua-pale py-20 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resolvemos dudas"
          title="Preguntas Frecuentes"
          highlight="Frecuentes"
          description="Lo esencial para dar el primer paso con claridad."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-10"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
