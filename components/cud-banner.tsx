"use client";

import { motion } from "framer-motion";
import { FileCheck2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CUD_URL } from "@/lib/constants";

export function CudBanner() {
  return (
    <section
      id="cobertura-cud"
      className="relative w-full max-w-full overflow-x-hidden bg-aqua-pale py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -5, scale: 1.01 }}
          className="liquid-drop relative mx-auto w-full max-w-full overflow-hidden border border-teal/30 bg-[linear-gradient(135deg,#e7f7ff_0%,#f0f8ff_45%,#d8fff8_100%)] p-6 shadow-float will-change-transform sm:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute -right-16 top-0 h-52 w-52 rounded-full bg-teal/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-ocean/10 blur-3xl"
          />

          <div className="relative grid w-full max-w-full items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-8">
            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[42%_58%_50%_50%/55%_40%_60%_45%] bg-teal/20 text-sky-950 shadow-inner">
                <FileCheck2 className="h-7 w-7" />
              </span>
              <div className="min-w-0">
                <h2 className="break-words font-display text-2xl font-bold tracking-tight text-sky-950 sm:text-3xl lg:text-4xl">
                  ¿Tenés Certificado Único de Discapacidad (CUD)?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                  Te acompañamos en todo el proceso de gestión para la cobertura a
                  través de tu obra social o prepaga en Hidroterapia y
                  Estimulación Acuática.
                </p>
              </div>
            </div>

            <Button
              asChild
              variant="whatsapp"
              className="h-auto w-full px-4 py-3 text-sm sm:text-base lg:w-auto"
            >
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
