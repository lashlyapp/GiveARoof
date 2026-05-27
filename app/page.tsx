import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { VideoFeature } from "@/components/VideoFeature";
import { Plan } from "@/components/Plan";
import { News } from "@/components/News";
import { Podcast } from "@/components/Podcast";
import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <VideoFeature />
      <Plan />
      <News />
      <Podcast />
      <About />
      <CtaBand />
    </>
  );
}
