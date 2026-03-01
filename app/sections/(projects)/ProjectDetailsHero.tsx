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

  // Move text down and disappear
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden flex items-end pb-14 px-54"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 text-white max-w-2xl"
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-8xl font-medium"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-xl max-w-md"
        >
          {project.intro}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ProjectDetailsHero;
