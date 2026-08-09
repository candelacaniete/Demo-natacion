import Link from "next/link";
import { AtSign, Mail, Phone, Waves } from "lucide-react";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_LINKS,
  WHATSAPP_CONSULTA_URL,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export function Footer() {
  const phoneDisplay = "+54 9 11 5801-9827";

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-sky-ink via-ocean-deep to-[#0a3d4f] text-cyan-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
      >
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-teal/25 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-warm/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-[1.4rem_0.55rem_1.4rem_0.55rem] bg-white/10 text-white ring-1 ring-white/15">
                <Waves className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-white">
                  Natación Inclusiva Pilar
                </p>
                <p className="text-sm text-cyan-100/80">
                  Coordinación · Profe Dany
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cyan-100/85">
              Un espacio de natación adaptada, estimulación e hidroterapia para
              niños y adultos en Pilar. Empatía, seguridad y profesionalismo en
              cada clase.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-teal">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display text-sm text-cyan-50/85 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-teal">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_CONSULTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-50/90 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-whatsapp" />
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-50/90 transition hover:text-white"
                >
                  <AtSign className="h-4 w-4 text-warm" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-cyan-50/80">
                <Mail className="mt-0.5 h-4 w-4 text-teal" />
                Consultas preferentemente por WhatsApp
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cyan-100/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Natación Inclusiva Pilar. Todos los
            derechos reservados.
          </p>
          <p>WhatsApp: {WHATSAPP_NUMBER}</p>
        </div>
      </div>
    </footer>
  );
}
