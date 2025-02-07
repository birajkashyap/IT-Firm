import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Steps } from "@/components/Steps";

import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import Spreadsheet from "@/components/Spreadsheet";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <Steps />
      <Testimonials />
      <Contact />
      <Spreadsheet />
    </main>
  );
}
