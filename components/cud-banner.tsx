"use client";

import { motion } from "framer-motion";
import { FileCheck2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CUD_URL } from "@/lib/constants";

export function CudBanner() {
  return (
    <section id="cobertura-cud" className="relative bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2.25rem] border border-teal/25 bg-gradient-to-br from-[#e8fff9] via-white to-[#eef6ff] p-6 shadow-xl shadow-teal/10 sm:p-8 md:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-teal/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-ocean/10 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="flex gap-4 sm:gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-teal/15 text-teal-deep shadow-inner">
                <FileCheck2 className="h-7 w-7" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ocean-deep md:text-3xl">
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
