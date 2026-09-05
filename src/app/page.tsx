import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { IntroQuote } from "@/components/IntroQuote";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Stack } from "@/components/Stack";
import { NowBuilding } from "@/components/NowBuilding";
import { About } from "@/components/About";
import { ClientReady } from "@/components/ClientReady";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Sticky Minimal Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Real Stats Counters */}
        <Stats />

        {/* 3. Statement / Intro Quote */}
        <IntroQuote />

        {/* 4. Selected Work: Editorial Creative Studio Showcase */}
        <SelectedWork />

        {/* 5. Professional Services (4 cards with checklist) */}
        <Services />

        {/* 6. Pricing / Investment References */}
        <Pricing />

        {/* 7. Work Process (5 steps with progressive scroll reveal) */}
        <Process />

        {/* 8. Tech Stack (4 clean categories without percentage bars, only real tech) */}
        <Stack />

        {/* 9. Currently / Now Building Status */}
        <NowBuilding />

        {/* 10. About Me (Philosophy + stylized code card) */}
        <About />

        {/* 11. Client-Ready hiring guide */}
        <ClientReady />

        {/* 12. Contact & Project Inquiry Form */}
        <Contact />
      </main>

      {/* 12. Minimalist Footer */}
      <Footer />
    </div>
  );
}
