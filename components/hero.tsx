"use client";

import { motion } from "framer-motion";
import { ArrowDown, HeartHandshake, MapPin, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CONSULTA_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-[#e8f4ff] via-[#f7fbff] to-[#dff7f3]"
    >
      {/* Atmospheric water plane */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-ocean/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
        <svg
          className="absolute inset-x-0 bottom-0 h-[45%] w-full opacity-40"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#heroWave)"
            d="M0,220 C240,160 360,300 600,240 C840,180 960,80 1200,140 C1320,170 1380,210 1440,190 L1440,400 L0,400 Z"
          />
          <defs>
            <linearGradient id="heroWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00a896" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0f4c81" stopOpacity="0.12" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="teal" className="mb-5 px-4 py-1.5 text-[0.8rem]">
                Admisiones Abiertas — Temporada 2026
              </Badge>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mb-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-ocean"
            >
              Natación Inclusiva Pilar
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl font-display text-[2.15rem] font-bold leading-[1.12] tracking-tight text-ocean-deep sm:text-5xl lg:text-[3.35rem]"
            >
              Un espacio de natación e hidroterapia donde{" "}
              <span className="relative inline-block text-teal-deep">
                todos podemos nadar
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-warm/25"
                />
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Clases adaptadas, estimulación y terapias acuáticas con atención
              personalizada para niños, jóvenes y adultos en Pilar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/75 px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-md shadow-sky-900/5 ring-1 ring-ocean/8">
                <span className="h-2.5 w-2.5 rounded-full bg-teal" aria-hidden="true" />
                Particulares y Obra Social con CUD
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/75 px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-md shadow-sky-900/5 ring-1 ring-ocean/8">
                <MapPin className="h-4 w-4 text-warm" />
                Sedes en Club Sportivo Pilar y Acuasport
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild variant="whatsapp" size="xl">
                <a
                  href={WHATSAPP_CONSULTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Escribinos por WhatsApp
                </a>
              </Button>
              <Button asChild variant="secondary" size="xl">
                <a href="#servicios">
                  Ver Servicios y Cobertura
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ocean via-[#136a8a] to-teal p-1 shadow-2xl shadow-ocean/20">
              <div className="relative overflow-hidden rounded-[2.3rem] bg-gradient-to-br from-[#0f4c81] to-[#087f8c] px-6 py-8 text-white sm:px-8 sm:py-10">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-16 left-8 h-44 w-44 rounded-full bg-teal/30 blur-2xl"
                />

                <p className="relative font-display text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  En el agua
                </p>
                <p className="relative mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                  Seguridad, empatía y progreso a tu ritmo.
                </p>
                <p className="relative mt-4 max-w-sm text-sm leading-relaxed text-cyan-50/90 sm:text-base">
                  Acompañamos a cada familia con profesionales de la salud y
                  educación física, en un entorno accesible y cálido.
                </p>

                <div className="relative mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/15">
                    <p className="font-display text-2xl font-bold">+100</p>
                    <p className="mt-1 text-xs text-cyan-50/90">
                      familias acompañadas
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/15">
                    <p className="font-display text-2xl font-bold">2</p>
                    <p className="mt-1 text-xs text-cyan-50/90">
                      sedes en Pilar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.aside
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 left-4 right-4 rounded-[1.75rem] border border-white/80 bg-[#fffdf8] p-4 shadow-xl shadow-sky-900/10 sm:-left-6 sm:right-auto sm:max-w-[17.5rem]"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-warm/15 text-warm-deep">
                  <HeartHandshake className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-ocean-deep">
                    “Por fin encontramos un lugar donde se siente incluida.”
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Mamá de alumna · Pilar
                  </p>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
