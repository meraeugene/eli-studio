/* eslint-disable @next/next/no-img-element */
"use client";

import { projects } from "@/app/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  description: string;
  location: string;
  category: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  cover: string;
  gallery: string[];
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-2xl aspect-4/5 md:aspect-3/4 lg:aspect-4/5 ${
        index % 2 !== 0 ? "md:translate-y-20" : ""
      }`}
    >
      <Link prefetch href={`/projects/${project.slug}`}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="relative z-20 h-full w-full p-6 text-white">
          <div className="flex flex-col justify-between lg:justify-end h-full">
            <div>
              <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest mb-4 border border-white/20">
                {project.subtitle}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-3xl lg:text-4xl 2xl:text-5xl max-w-xs font-medium tracking-tighter lg:leading-12">
                {project.title}
              </h3>

              <div className="flex items-center gap-3 pl-4 pr-1.5 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-500 w-max">
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Explore
                </span>
                <div className="p-2 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function PortfolioGridSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 2xl:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:pb-32">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
