/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data";
import Link from "next/link";

export function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const intervalTime = 5000; // 5 seconds per slide

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  // Auto-loop
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  // Variants for staggered animation
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <section className="relative h-screen bg-[#1a1a1a] text-white overflow-hidden py-8 px-4 md:px-12 xl:px-54 lg:py-24 flex flex-col justify-between font-inter">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.cover}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <img
            src={project.cover}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0),rgba(0,0,0,0.5))]" />

      {/* Top Card */}
      <div className="relative z-10 flex justify-between flex-wrap gap-6 items-start mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id + "-featured-text"}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            className="text-xl font-medium"
          >
            Featured Projects
          </motion.div>
        </AnimatePresence>

        {/* Preview Card */}
        <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl flex gap-4 w-64 border border-white/20">
          <div className="relative w-24 h-20 rounded overflow-hidden shrink-0">
            <img
              src={project.cover}
              alt="preview"
              className="object-cover w-full h-full"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={project.id + "-card-text"}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                y: -20,
                transition: { duration: 0.4, ease: "easeIn" },
              }}
              className="flex flex-col  "
            >
              <p className="text-base text-gray-400">
                / {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-sm font-medium mt-1 leading-tight">
                {project.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Project Info */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <motion.h2
              variants={item}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-14 md:leading-18 text-white drop-shadow-lg"
            >
              {project.title.split(" ")[0]} <br />
              {project.title.split(" ").slice(1).join(" ")}
            </motion.h2>

            {/* Stats */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-10 border-t border-white/10 pt-4"
            >
              {[
                { label: "Bedrooms", value: project.bedrooms },
                { label: "Bathrooms", value: project.bathrooms },
                { label: "Size (sq ft)", value: project.size },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <p className="text-xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm  uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Button */}
            <motion.div variants={item} whileHover={{ opacity: 0.8 }}>
              <Link
                href={`/projects/${project.slug}`}
                className="flex items-center gap-3 my-16 bg-white text-black px-3 py-2 rounded-full text-sm font-semibold cursor-pointer transition-shadow shadow-md hover:shadow-lg w-max"
              >
                <span className=" p-1 bg-black text-white rounded-full">
                  <ArrowRight size={16} />
                </span>
                See Project
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Centered Controls + Smooth Progress */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        {/* Controls */}
        <div className="flex gap-4">
          {[prev, next].map((fn, i) => (
            <button
              key={i}
              onClick={fn}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition shadow-lg hover:shadow-xl cursor-pointer"
            >
              {i === 0 ? <ArrowLeft size={28} /> : <ArrowRight size={28} />}
            </button>
          ))}
        </div>

        {/* Smooth progress bar */}
        <div className="w-40 h-1 bg-white/20 rounded-full overflow-hidden mt-2">
          <motion.div
            className="h-full bg-white rounded-full origin-left"
            key={index} // restart animation on slide change
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: intervalTime / 1000, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
