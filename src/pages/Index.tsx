import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";

import { About } from "@/components/About";
import { Events } from "@/components/Events";
import { Staff } from "@/components/Staff";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import MagicBento from "@/components/MagicBento";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <MagicBento
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={430}
  particleCount={12}
  glowColor="125, 160, 202"
  disableAnimations={false}
/>
        <Staff />
        <Gallery />

        {/* Achievements will be enabled later after HOD approval */}
        {/* <Achievements /> */}

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;