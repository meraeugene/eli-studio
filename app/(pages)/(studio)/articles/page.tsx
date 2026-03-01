import { ArticlesGrid } from "@/app/sections/(articles)/ArticlesGrid";
import ArticlesHero from "@/app/sections/(articles)/ArticlesHero";

const page = () => {
  return (
    <main>
      <ArticlesHero />
      <ArticlesGrid />
    </main>
  );
};

export default page;
