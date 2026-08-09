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
      <main className="relative w-full max-w-full overflow-x-hidden">
        <Hero />
        <WaveDivider variant="soft" animated className="-mt-1" />
        <CudBanner />
        <WaveDivider variant="deep" to="#082f49" animated />
        <Services />
        <WaveDivider flip variant="soft" animated />
        <HowItWorks />
        <WaveDivider variant="deep" to="#082f49" animated />
        <Locations />
        <WaveDivider flip variant="soft" to="#F0F8FF" animated />
        <Faq />
        <WaveDivider variant="deep" to="#082f49" animated />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
