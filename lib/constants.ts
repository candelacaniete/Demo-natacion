export const WHATSAPP_NUMBER = "5491158019827";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_CONSULTA_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hola! Quiero consultar por Natación Inclusiva Pilar 👋"
)}`;
export const WHATSAPP_CUD_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hola! Tengo CUD y quiero consultar requisitos de cobertura 🩺"
)}`;
export const INSTAGRAM_URL = "https://www.instagram.com/natacioninclusivapilar/";
export const INSTAGRAM_HANDLE = "@natacioninclusivapilar";

export const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#cobertura-cud", label: "Cobertura CUD" },
  { href: "#sedes", label: "Sedes" },
  { href: "#preguntas-frecuentes", label: "Preguntas Frecuentes" },
] as const;

export const LOCATIONS = [
  {
    name: "Acuasport Pilar",
    address: "Av. Tomás Márquez 1125, Pilar",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Tom%C3%A1s+M%C3%A1rquez+1125,+Pilar",
  },
  {
    name: "Club Sportivo Pilar",
    address: "Tomás Márquez 1111, Pilar",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Tom%C3%A1s+M%C3%A1rquez+1111,+Pilar",
  },
] as const;
