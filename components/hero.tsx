"use client";

import { motion } from "framer-motion";
import { ArrowDown, HeartHandshake, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CONSULTA_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-[#e8f5ff]"
    >
      {/* Full-bleed water atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_20%,#9fe8ff_0%,transparent_55%),radial-gradient(ellipse_70%_50%_at_85%_10%,#7ef0e4_0%,transparent_50%),linear-gradient(180deg,#e8f5ff_0%,#d4efff_45%,#b8e8ef_100%)]" />
        <svg
          className="animate-wave-drift absolute -bottom-8 left-[-8%] h-[55%] w-[120%] opacity-90"
          viewBox="0 0 1440 520"
          preserveAspectRatio="none"
        >
          <path
            fill="#0f4c81"
            fillOpacity="0.12"
            d="M0,260 C180,180 320,340 520,250 C720,160 900,80 1120,170 C1280,235 1360,290 1440,250 L1440,520 L0,520 Z"
          />
          <path
            fill="#00CED1"
            fillOpacity="0.22"
            d="M0,310 C220,240 380,380 600,300 C820,220 980,140 1200,230 C1320,280 1390,320 1440,300 L1440,520 L0,520 Z"
          />
          <path
            fill="#0f4c81"
            fillOpacity="0.18"
            d="M0,360 C200,300 360,420 580,350 C800,280 980,220 1180,300 C1300,345 1380,380 1440,360 L1440,520 L0,520 Z"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-32 pt-32 sm:px-6 lg:px-8 lg:pb-36 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 shape-pill-soft bg-white/75 px-4 py-2 text-xs font-display font-semibold uppercase tracking-[0.14em] text-sky-950 shadow-soft ring-1 ring-teal/25"
            >
              <span className="h-2 w-2 rounded-full bg-teal" />
              Admisiones Abiertas — Temporada 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="font-display text-[2.55rem] font-bold leading-[0.98] tracking-tight text-sky-950 sm:text-5xl lg:text-[3.75rem]"
            >
              <span className="block text-[0.38em] font-semibold uppercase tracking-[0.22em] text-ocean">
                Natación Inclusiva Pilar
              </span>
              <span className="mt-3 block">
                Un espacio donde{" "}
                <span className="relative inline-block">
                  todos
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-1 left-[-4%] h-3 w-[108%]"
                    viewBox="0 0 180 14"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 10 C35 2, 70 13, 105 6 C135 1, 155 11, 177 5"
                      stroke="#00CED1"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                podemos nadar.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Natación adaptada, estimulación e hidroterapia con atención
              personalizada para niños, jóvenes y adultos en Pilar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap"
            >
              <span className="inline-flex items-center gap-2 shape-note bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-soft">
                <span className="h-2.5 w-2.5 rounded-full bg-teal" />
                Particulares y Obra Social con CUD
              </span>
              <span className="inline-flex items-center gap-2 shape-note bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-soft">
                <MapPin className="h-4 w-4 text-warm" />
                Club Sportivo Pilar y Acuasport
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
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

          {/* Organic visual plane + drop testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[26rem] lg:max-w-none"
          >
            <div
              className="relative mx-auto aspect-[4/5] max-w-[24rem] overflow-hidden shadow-deep lg:ml-auto lg:max-w-[26rem]"
              style={{
                borderRadius: "63% 37% 54% 46% / 48% 52% 48% 52%",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f4c81] via-[#0d6a7a] to-[#00a8a8]" />
              <div
                aria-hidden="true"
                className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-teal/35 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-10 left-4 h-44 w-44 rounded-full bg-warm/25 blur-2xl"
              />

              {/* Decorative ripples */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-30"
                viewBox="0 0 400 500"
              >
                <ellipse
                  cx="200"
                  cy="280"
                  rx="140"
                  ry="40"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <ellipse
                  cx="200"
                  cy="300"
                  rx="100"
                  ry="28"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <ellipse
                  cx="200"
                  cy="318"
                  rx="65"
                  ry="18"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.2"
                />
              </svg>

              <div className="relative flex h-full flex-col justify-end p-8 pb-14 text-white sm:p-10 sm:pb-16">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                  En el agua
                </p>
                <p className="mt-3 font-display text-3xl font-bold leading-tight sm:text-[2.1rem]">
                  Seguridad, empatía y progreso a tu ritmo.
                </p>
                <div className="mt-6 flex gap-6">
                  <div>
                    <p className="font-display text-3xl font-bold">+100</p>
                    <p className="mt-1 text-xs text-cyan-50/90">familias</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold">2</p>
                    <p className="mt-1 text-xs text-cyan-50/90">sedes en Pilar</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.aside
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-0 right-0 mx-auto max-w-[17.5rem] border border-white/90 bg-sand p-4 shadow-float sm:-bottom-2 sm:-left-4 sm:right-auto sm:mx-0 sm:max-w-[18.5rem]"
              style={{
                borderRadius: "48% 52% 42% 58% / 55% 40% 60% 45%",
              }}
            >
              <div className="flex items-start gap-3 px-1 py-1">
                <span
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center bg-warm/15 text-warm-deep"
                  style={{ borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%" }}
                >
                  <HeartHandshake className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-sans text-[0.95rem] font-semibold leading-snug text-sky-950">
                    “Por fin encontramos un lugar donde se siente incluida.”
                  </p>
                  <p className="mt-1.5 font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
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
