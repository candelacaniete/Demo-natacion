"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, HeartHandshake, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroTurtle } from "@/components/hero-turtle";
import { WHATSAPP_CONSULTA_URL } from "@/lib/constants";

const sceneBubbles = [
  { size: 10, left: "8%", bottom: "22%", delay: 0, duration: 7 },
  { size: 16, left: "18%", bottom: "12%", delay: 1.2, duration: 9 },
  { size: 8, left: "72%", bottom: "30%", delay: 0.6, duration: 6.5 },
  { size: 12, left: "84%", bottom: "18%", delay: 1.8, duration: 8 },
  { size: 7, left: "55%", bottom: "8%", delay: 0.3, duration: 7.5 },
];

function OrganicUnderline() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-1 left-0 right-0 z-0 h-2.5 w-full overflow-visible md:-bottom-1.5 md:h-3"
      viewBox="0 0 120 14"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M1.5 9.5 C16 2.5, 28 12.5, 42 7 C56 1.5, 68 12, 82 6.5 C96 1, 108 11.5, 118.5 5.5"
        stroke="#00CED1"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.15, delay: 0.55, ease: "easeOut" }}
      />
    </svg>
  );
}

export function Hero() {
  return (
    <>
      {/* ── Scene: first viewport ── */}
      <section
        id="inicio"
        className="relative flex min-h-[100svh] w-full max-w-full flex-col overflow-x-clip"
      >
        {/* Water photo */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-water.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
          {/* Soft illustrated wash so type stays readable */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(232,245,255,0.78)_0%,rgba(212,239,255,0.55)_38%,rgba(184,232,239,0.42)_68%,rgba(14,90,110,0.35)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_25%,rgba(255,255,255,0.45)_0%,transparent_55%),radial-gradient(ellipse_50%_40%_at_85%_70%,rgba(0,206,209,0.18)_0%,transparent_60%)]" />
        </div>

        {/* Rising bubbles */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {sceneBubbles.map((b, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full border border-white/40 bg-white/25"
              style={{
                width: b.size,
                height: b.size,
                left: b.left,
                bottom: b.bottom,
              }}
              animate={{ y: [0, -90, -160], opacity: [0, 0.55, 0] }}
              transition={{
                duration: b.duration,
                delay: b.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Turtle overlay — mobile: bottom-right scene; desktop: right stage */}
        <HeroTurtle className="absolute -right-6 bottom-[6%] z-[1] w-[min(88vw,22rem)] opacity-95 sm:-right-4 sm:w-[min(70vw,26rem)] md:bottom-[8%] md:w-[28rem] lg:right-[2%] lg:bottom-[10%] lg:w-[min(42vw,34rem)] xl:w-[36rem]" />

        {/* Copy — slim first fold */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-36 pt-24 sm:px-6 sm:pb-40 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 font-display text-[0.7rem] font-bold uppercase tracking-[0.22em] text-ocean sm:text-xs"
            >
              Natación Inclusiva Pilar
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="font-display text-[2rem] font-bold leading-[1.2] tracking-tight text-sky-950 sm:text-4xl md:text-5xl lg:text-[3.6rem] lg:leading-[1.08]"
            >
              Un espacio donde{" "}
              <span className="relative inline-block whitespace-nowrap pb-1">
                todos
                <OrganicUnderline />
              </span>{" "}
              podemos nadar.
            </motion.h1>

            {/* Desktop supporting line only */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 hidden max-w-md text-base leading-relaxed text-sky-950/75 md:block md:text-lg"
            >
              Natación adaptada, estimulación e hidroterapia con atención
              personalizada para niños, jóvenes y adultos en Pilar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-10 flex w-full max-w-full flex-col items-stretch gap-3 sm:mt-12 md:mt-9 md:flex-row md:items-center"
            >
              <Button
                asChild
                variant="whatsapp"
                size="xl"
                className="w-full justify-center shadow-[0_18px_40px_-14px_rgba(37,211,102,0.65)] md:w-auto"
              >
                <a
                  href={WHATSAPP_CONSULTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Escribinos por WhatsApp
                </a>
              </Button>

              {/* Secondary only from md — keeps mobile fold clean */}
              <Button
                asChild
                variant="secondary"
                size="xl"
                className="hidden bg-white/80 backdrop-blur-sm md:inline-flex"
              >
                <a href="#servicios">
                  Ver Servicios y Cobertura
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Quiet admissions note — not a loud badge pill */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-6 hidden text-sm font-medium text-sky-950/60 md:block"
            >
              Admisiones abiertas · Temporada 2026 · CUD y obras sociales
            </motion.p>
          </div>
        </div>

        {/* Soft fade into next band */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-[#e8f5ff] to-transparent"
        />
      </section>

      {/* ── Below fold: trust strip (stats + testimonial) ── */}
      <section
        aria-label="Confianza de familias"
        className="relative w-full max-w-full overflow-x-clip bg-[#e8f5ff] px-4 pb-10 pt-2 sm:px-6 sm:pb-14 lg:px-8"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-2 md:gap-8">
          <div className="liquid-drop relative overflow-hidden bg-sky-950 p-6 text-white shadow-deep sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-950 via-[#0d5f7c] to-[#087f8c]"
            />
            <div className="relative">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                En el agua
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-[1.85rem]">
                Seguridad, empatía y progreso a tu ritmo.
              </h2>
              <div className="mt-5 flex flex-wrap gap-8">
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

          <aside className="liquid-drop flex items-start gap-3 border border-white/90 bg-sand p-5 shadow-float sm:p-7">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[30px_15px_30px_15px] bg-warm/15 text-warm-deep">
              <HeartHandshake className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="font-sans text-base font-semibold leading-snug text-sky-950 sm:text-lg">
                “Por fin encontramos un lugar donde se siente incluida.”
              </p>
              <p className="mt-2 font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Mamá de alumna · Pilar
              </p>
              <a
                href="#servicios"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-950 transition hover:text-ocean md:hidden"
              >
                Ver Servicios y Cobertura
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
