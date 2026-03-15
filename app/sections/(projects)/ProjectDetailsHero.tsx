/* eslint-disable @next/next/no-img-element */
"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Project } from "./PortfolioGrid";

const ProjectDetailsHero = ({ project }: { project: Project }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Balanced parallax for a "sinking" effect
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[70vh] md:h-screen overflow-hidden flex items-end pb-12 md:pb-24 px-4 md:px-12 2xl:px-24 font-inter"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Protection gradient for text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
      </div>

      {/* Text Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 text-white w-full max-w-5xl"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          {/* Subtitle/Category Tag */}
          <span className="text-xs font-semibold uppercase  text-white/70">
            {project.category} — {project.location}
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tighter  uppercase">
            {project.title}
          </h1>

          <p className=" md:text-xl lg:text-2xl max-w-lg leading-relaxed text-white/80 font-light">
            {project.intro}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectDetailsHero;
