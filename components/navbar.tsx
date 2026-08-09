"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, WHATSAPP_CONSULTA_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 w-full max-w-full border-b border-sky-100 bg-white/80 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-soft"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link href="#inicio" className="group flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[30px_15px_30px_15px] bg-gradient-to-br from-ocean to-teal text-white shadow-md shadow-ocean/25 transition-all duration-500 ease-in-out group-hover:rounded-[15px_30px_15px_30px] sm:h-10 sm:w-10">
            <Waves className="h-5 w-5" />
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-display text-[0.9rem] font-bold tracking-tight text-sky-950 sm:text-base">
              Natación Inclusiva
            </span>
            <span className="mt-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-teal-deep">
              Pilar
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3.5 py-2 font-display text-sm font-medium text-slate-600 transition hover:bg-aqua-mist hover:text-ocean"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="whatsapp" size="sm" className="hidden md:inline-flex">
            <a
              href={WHATSAPP_CONSULTA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar Consulta
            </a>
          </Button>

          <Sheet modal={false}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menú</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="liquid-drop px-4 py-3 font-display text-base font-semibold text-sky-950 transition hover:bg-white"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto pt-8">
                <Button asChild variant="whatsapp" size="lg" className="w-full">
                  <a
                    href={WHATSAPP_CONSULTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Agendar Consulta
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
