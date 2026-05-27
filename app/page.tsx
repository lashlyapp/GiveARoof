import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { Plan } from "@/components/Plan";
import { News } from "@/components/News";
import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Plan />
      <News />
      <About />
      <CtaBand />
    </>
  );
}
