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
      className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-[#dff3ff] via-[#f0f8ff] to-[#d8fff8]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-[22rem] w-[22rem] rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-0 h-[28rem] w-[28rem] rounded-full bg-ocean/15 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-[28rem] rounded-full bg-warm/10 blur-3xl" />
        <svg
          className="absolute inset-x-0 bottom-0 h-[42%] w-full"
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#heroFlow)"
            d="M0,210 C220,140 360,300 580,230 C800,160 960,70 1180,140 C1300,175 1380,220 1440,190 L1440,420 L0,420 Z"
          />
          <defs>
            <linearGradient id="heroFlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00CED1" stopOpacity="0.28" />
              <stop offset="55%" stopColor="#0f4c81" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#f08a4b" stopOpacity="0.12" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-28 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="teal" className="mb-5 normal-case tracking-[0.08em]">
                Admisiones Abiertas — Temporada 2026
              </Badge>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mb-3 font-display text-sm font-bold uppercase tracking-[0.22em] text-ocean"
            >
              Natación Inclusiva Pilar
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="max-w-xl font-display text-[2.2rem] font-bold leading-[1.1] tracking-tight text-sky-ink sm:text-5xl lg:text-[3.4rem]"
            >
              Un espacio de natación e hidroterapia donde{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-sky-ink">todos</span>
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-3 w-full"
                  viewBox="0 0 160 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 10 C28 3, 55 13, 82 7 C108 2, 132 11, 157 6"
                    stroke="#00CED1"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              podemos nadar.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Clases adaptadas, estimulación y terapias acuáticas con atención
              personalizada para niños, jóvenes y adultos en Pilar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <div className="inline-flex items-center gap-2 rounded-[1.4rem_0.65rem_1.4rem_0.65rem] bg-white/80 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-soft ring-1 ring-ocean/8">
                <span className="h-2.5 w-2.5 rounded-full bg-teal" aria-hidden="true" />
                Particulares y Obra Social con CUD
              </div>
              <div className="inline-flex items-center gap-2 rounded-[1.4rem_0.65rem_1.4rem_0.65rem] bg-white/80 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-soft ring-1 ring-ocean/8">
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
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end"
          >
            <div className="relative overflow-hidden rounded-[3.4rem_1.2rem_2.8rem_2.2rem] bg-gradient-to-br from-ocean via-[#136a8a] to-teal p-[3px] shadow-float sm:rounded-[4rem_1.4rem_3.2rem_2.6rem]">
              <div className="relative overflow-hidden rounded-[3.25rem_1.1rem_2.65rem_2.05rem] bg-gradient-to-br from-[#0f4c81] via-[#0d5f7c] to-[#087f8c] px-7 py-9 text-white sm:rounded-[3.85rem_1.3rem_3.05rem_2.45rem] sm:px-8 sm:py-10">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-teal/25 blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-16 left-4 h-48 w-48 rounded-full bg-warm/20 blur-2xl"
                />

                <p className="relative font-display text-xs font-semibold uppercase tracking-[0.2em] text-teal">
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
                  <div className="rounded-[1.6rem_0.7rem_1.6rem_0.7rem] bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/15">
                    <p className="font-display text-2xl font-bold">+100</p>
                    <p className="mt-1 text-xs text-cyan-50/90">
                      familias acompañadas
                    </p>
                  </div>
                  <div className="rounded-[0.7rem_1.6rem_0.7rem_1.6rem] bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/15">
                    <p className="font-display text-2xl font-bold">2</p>
                    <p className="mt-1 text-xs text-cyan-50/90">
                      sedes en Pilar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.aside
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-7 left-3 right-3 rounded-[2.6rem_1.1rem_2.1rem_2.4rem] border border-white/90 bg-sand p-4 shadow-float sm:-left-8 sm:right-auto sm:max-w-[18rem]"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[1.25rem_0.5rem_1.25rem_0.5rem] bg-warm/15 text-warm-deep">
                  <HeartHandshake className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-sans text-[0.95rem] font-semibold leading-snug text-sky-ink">
                    “Por fin encontramos un lugar donde se siente incluida.”
                  </p>
                  <p className="mt-1.5 font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
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
