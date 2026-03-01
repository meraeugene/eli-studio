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
  size: number; // square feet
  bedrooms: number;
  bathrooms: number;
  cover: string;
  gallery: string[]; // array of image URLs
}

// Card Variants for scroll animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-lg h-225"
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link prefetch href={`/projects/${project.slug}`}>
        {/* Hoverable image + overlay */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* Bottom-only Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.9 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-20 h-full w-full p-8 flex flex-col justify-end text-white">
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-widest mb-4 border border-white/10">
                {project.subtitle}
              </span>
              <h3 className="text-5xl max-w-xs font-semibold tracking-tight leading-none">
                {project.title}
              </h3>
            </div>

            <motion.div
              className="flex items-center gap-3 px-3 py-2 bg-black/40 backdrop-blur-xl border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium uppercase tracking-tight">
                View Project
              </span>
              <div className="p-1 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-colors">
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
    <section className="bg-white py-20 px-8 md:px-54">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
