"use client";

import { motion } from "framer-motion";
import { FileCheck2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CUD_URL } from "@/lib/constants";

export function CudBanner() {
  return (
    <section id="cobertura-cud" className="relative bg-aqua-pale py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="relative overflow-hidden rounded-[3.2rem_1.2rem_3.2rem_1.2rem] border border-teal/25 bg-gradient-to-br from-[#e8f7ff] via-[#f0f8ff] to-[#dffff8] p-6 shadow-float sm:p-8 md:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-teal/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -left-14 bottom-0 h-44 w-44 rounded-full bg-ocean/10 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="flex gap-4 sm:gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.6rem_0.65rem_1.6rem_0.65rem] bg-teal/20 text-sky-ink shadow-inner">
                <FileCheck2 className="h-7 w-7" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-sky-ink md:text-3xl">
                  ¿Tenés Certificado Único de Discapacidad (CUD)?
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                  Te acompañamos en todo el proceso de gestión para la cobertura a
                  través de tu obra social o prepaga en Hidroterapia y
                  Estimulación Acuática.
                </p>
              </div>
            </div>

            <Button asChild variant="whatsapp" size="lg" className="w-full lg:w-auto">
              <a
                href={WHATSAPP_CUD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Consultar requisitos por WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
