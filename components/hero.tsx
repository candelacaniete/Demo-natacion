"use client";

import { motion } from "framer-motion";
import { ArrowDown, HeartHandshake, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CONSULTA_URL } from "@/lib/constants";

const bubbles = [
  { size: 18, left: "12%", delay: 0, duration: 7.5, x: [0, 8, -4, 0], opacity: 0.35 },
  { size: 28, left: "68%", delay: 0.8, duration: 9, x: [0, -10, 6, 0], opacity: 0.28 },
  { size: 14, left: "42%", delay: 1.4, duration: 6.5, x: [0, 6, -8, 0], opacity: 0.4 },
  { size: 22, left: "78%", delay: 0.4, duration: 8.2, x: [0, -6, 10, 0], opacity: 0.25 },
  { size: 12, left: "28%", delay: 1.8, duration: 7, x: [0, 5, -5, 0], opacity: 0.32 },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full max-w-full overflow-x-hidden bg-[#e8f5ff]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_20%,#9fe8ff_0%,transparent_55%),radial-gradient(ellipse_70%_50%_at_85%_10%,#7ef0e4_0%,transparent_50%),linear-gradient(180deg,#e8f5ff_0%,#d4efff_45%,#b8e8ef_100%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col justify-center px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:min-h-[100svh] lg:px-8 lg:pb-28 lg:pt-28">
        <div className="grid w-full max-w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="relative z-10 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex max-w-full items-center gap-2 rounded-[30px_15px_30px_15px] bg-white/75 px-3 py-2 font-display text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-sky-950 shadow-soft ring-1 ring-teal/25 sm:px-4 sm:text-xs"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-teal" />
              <span className="min-w-0 leading-snug">
                Admisiones Abiertas — Temporada 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="font-display text-[2.1rem] font-bold leading-[1.05] tracking-tight text-sky-950 sm:text-5xl lg:text-[3.75rem] lg:leading-[0.98]"
            >
              <span className="block text-[0.42em] font-semibold uppercase tracking-[0.18em] text-ocean">
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
              <span className="inline-flex items-center gap-2 rounded-[30px_15px_30px_15px] bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-soft">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-teal" />
                Particulares y Obra Social con CUD
              </span>
              <span className="inline-flex items-center gap-2 rounded-[30px_15px_30px_15px] bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-soft">
                <MapPin className="h-4 w-4 shrink-0 text-warm" />
                Club Sportivo Pilar y Acuasport
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex w-full max-w-full flex-col gap-3 sm:flex-row"
            >
              <Button asChild variant="whatsapp" size="xl" className="w-full sm:w-auto">
                <a
                  href={WHATSAPP_CONSULTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Escribinos por WhatsApp
                </a>
              </Button>
              <Button asChild variant="secondary" size="xl" className="w-full sm:w-auto">
                <a href="#servicios">
                  Ver Servicios y Cobertura
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Blue card — compact, top-aligned */}
            <div className="liquid-drop relative mx-auto w-full max-w-[24rem] overflow-hidden bg-sky-950 shadow-deep lg:ml-auto lg:max-w-[26rem]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-950 via-[#0d5f7c] to-[#087f8c]"
              />

              {/* Floating bubbles */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
              >
                {bubbles.map((bubble, i) => (
                  <motion.span
                    key={i}
                    className="absolute bottom-[-10%] rounded-full bg-white/10 backdrop-blur-sm will-change-transform"
                    style={{
                      width: bubble.size,
                      height: bubble.size,
                      left: bubble.left,
                      opacity: bubble.opacity,
                      background:
                        i % 2 === 0
                          ? "rgb(255 255 255 / 0.12)"
                          : "rgb(34 211 238 / 0.22)",
                    }}
                    animate={{
                      y: ["0%", "-120%"],
                      x: bubble.x,
                    }}
                    transition={{
                      duration: bubble.duration,
                      delay: bubble.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <div className="relative p-6 text-white sm:p-8">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                  En el agua
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-[2rem]">
                  Seguridad, empatía y progreso a tu ritmo.
                </h2>
                <div className="mt-4 flex flex-wrap gap-6">
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

            {/* Static testimonial — no absolute overlap */}
            <aside className="liquid-drop mb-8 mt-5 w-full border border-white/90 bg-sand p-4 shadow-float sm:p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[30px_15px_30px_15px] bg-warm/15 text-warm-deep">
                  <HeartHandshake className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="font-sans text-sm font-semibold leading-snug text-sky-950 sm:text-[0.95rem]">
                    “Por fin encontramos un lugar donde se siente incluida.”
                  </p>
                  <p className="mt-1.5 font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Mamá de alumna · Pilar
                  </p>
                </div>
              </div>
            </aside>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
