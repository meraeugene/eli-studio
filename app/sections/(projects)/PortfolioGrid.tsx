/* eslint-disable @next/next/no-img-element */
"use client";

import { projects } from "@/app/data";
import { motion, Variants } from "framer-motion";
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      // Added a staggered vertical offset for desktop (md:) to create a gallery feel
      className={`group relative cursor-pointer overflow-hidden rounded-2xl aspect-4/5 md:aspect-3/4 lg:aspect-4/5 ${
        index % 2 !== 0 ? "md:translate-y-20" : ""
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link prefetch href={`/projects/${project.slug}`}>
        <motion.div
          className="absolute inset-0 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover transition-filter duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </motion.div>

        <div className="relative z-20 h-full w-full p-6  flex flex-col justify-end text-white">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex-1">
              <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest  mb-4 border border-white/20">
                {project.subtitle}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl max-w-xs font-medium tracking-tighter lg:leading-12">
                {project.title}
              </h3>
            </div>

            <motion.div className="flex items-center gap-3 pl-4 pr-1.5 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-500 w-max">
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Explore
              </span>
              <div className="p-2 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowRight size={14} />
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function PortfolioGridSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 xl:px-54">
      {/* Increased gap and bottom padding to account for the staggered md:translate-y */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:pb-32">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </motion.div>
    </section>
  );
}
