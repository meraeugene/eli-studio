import Link from "next/link";
import { projects } from "../data";
import { ArrowRight } from "lucide-react";

export const NextProjectButton = ({ currentSlug }: { currentSlug: string }) => {
  // Find current index
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  // Get next project (wrap around if last)
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <Link
      prefetch
      href={`/projects/${nextProject.slug}`}
      className="flex items-center gap-3 mt-3  w-fit bg-black text-white p-3   pr-4 rounded-full hover:bg-gray-800 cursor-pointer transition-all"
    >
      <ArrowRight className="bg-white p-1  rounded-full text-black  " />
      <span className="text-sm  tracking-widest"> Next Project</span>
    </Link>
  );
};
