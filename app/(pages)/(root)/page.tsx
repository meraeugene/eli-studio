import { HeroSection } from "../../sections/(root)/Hero";
import { StatsSection } from "../../sections/(root)/Stats";
import { ProjectsSection } from "../../sections/(root)/Projects";
import { ServicesSection } from "../../sections/(root)/Services";
import { ArticlesSection } from "../../sections/(root)/Articles";
import { FaqSection } from "../../sections/(common)/Faq";
import { CtaSection } from "../../sections/(root)/Cta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <ServicesSection />
      <ArticlesSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
