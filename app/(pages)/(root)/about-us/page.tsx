import AboutUsHero from "@/app/sections/(about-us)/AboutUsHero";
import { ProcessSection } from "@/app/sections/(about-us)/Process";
import { TeamSection } from "@/app/sections/(about-us)/Team";

const page = () => {
  return (
    <main>
      <AboutUsHero />
      <ProcessSection />
      <TeamSection />
    </main>
  );
};

export default page;
