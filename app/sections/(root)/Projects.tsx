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
  const intervalTime = 5000;

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, intervalTime);
    return () => clearInterval(interval);
  }, [index]); // Added index to dependency to ensure sync

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <section className="relative h-screen bg-[#1a1a1a] text-white overflow-hidden py-6 px-4 md:px-12 2xl:px-54 flex flex-col justify-between font-inter">
      {/* Background Image - Smooth Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.cover}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={project.cover}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/70" />

      {/* Top Header Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-6 pt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id + "-featured-text"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="text-lg md:text-xl font-medium tracking-tight"
          >
            Featured Projects
          </motion.div>
        </AnimatePresence>

        {/* Preview Card - Hidden on very small mobile if needed, but here optimized for small width */}
        <div className="bg-white/5 backdrop-blur-xl p-2 rounded-2xl flex gap-3 w-full max-w-70 border border-white/10">
          <div className="relative w-20 h-16 md:w-24 md:h-20 rounded-xl overflow-hidden shrink-0">
            <img
              src={project.cover}
              alt="preview"
              className="object-cover w-full h-full"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={project.id + "-card-text"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col justify-center"
            >
              <p className="text-xs text-white/50 font-mono">
                / {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-sm font-medium mt-0.5 leading-tight">
                {project.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col justify-center grow max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="space-y-6 md:space-y-10"
          >
            <p className="text-xs mb-4 font-semibold uppercase  text-white/70">
              {project.category} — {project.location}
            </p>

            <motion.h2
              variants={item}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white drop-shadow-2xl"
            >
              {project.title.split(" ")[0]} <br className="hidden sm:block" />
              <span className="text-white/80">
                {project.title.split(" ").slice(1).join(" ")}
              </span>
            </motion.h2>

            {/* Responsive Stats Grid */}
            <motion.div
              variants={item}
              className="grid grid-cols-3 md:grid-cols-2 sm:flex flex-wrap gap-6 md:gap-12 border-t border-white/10 pt-6"
            >
              {[
                { label: "Beds", value: project.bedrooms },
                { label: "Baths", value: project.bathrooms },
                { label: "Sq Ft", value: project.size },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <p className="text-xl md:text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Action Button */}
            <motion.div variants={item} className="pt-2">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-center gap-3 bg-white text-black pl-5 pr-2 py-2 rounded-full text-sm font-medium transition-all hover:bg-neutral-200 w-fit"
              >
                See Project
                <span className="p-2 bg-black text-white rounded-full ">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls - Positioned relative to bottom on mobile */}
      <div className="relative z-10 flex flex-col items-center gap-4 pb-4">
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="p-3 cursor-pointer rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all backdrop-blur-sm active:scale-90"
          >
            <ArrowLeft size={24} className="md:w-7 md:h-7" />
          </button>
          <button
            onClick={next}
            className="p-3 cursor-pointer  rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all backdrop-blur-sm active:scale-90"
          >
            <ArrowRight size={24} className="md:w-7 md:h-7" />
          </button>
        </div>

        {/* Progress Bar Container */}
        <div className="w-32 md:w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            key={index}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: intervalTime / 1000, ease: "linear" }}
            className="h-full bg-white origin-left"
          />
        </div>
      </div>
    </section>
  );
}
