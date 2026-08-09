import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Natación Inclusiva Pilar | Natación Adaptada e Hidroterapia",
  description:
    "Centro especializado en natación adaptada, estimulación e hidroterapia para niños y adultos en Pilar, Argentina. Cobertura con CUD y obras sociales.",
  keywords: [
    "natación inclusiva",
    "hidroterapia Pilar",
    "natación adaptada",
    "CUD",
    "estimulación acuática",
    "Pilar",
  ],
  openGraph: {
    title: "Natación Inclusiva Pilar",
    description:
      "Un espacio de natación e hidroterapia donde todos podemos nadar.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${dmSans.variable} h-full overflow-x-hidden w-full max-w-full`}
    >
      <body className="min-h-full w-full max-w-full overflow-x-hidden font-sans antialiased text-sky-950">
        {children}
      </body>
    </html>
  );
}
