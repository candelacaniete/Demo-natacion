import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CudBanner } from "@/components/cud-banner";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { Locations } from "@/components/locations";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { WaveDivider } from "@/components/wave-divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider fill="#f8fafc" className="-mt-1" />
        <CudBanner />
        <Services />
        <HowItWorks />
        <Locations />
        <Faq />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
