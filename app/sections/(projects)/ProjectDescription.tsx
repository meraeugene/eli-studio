/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, cubicBezier } from "framer-motion";
import { MapPin, Home, BedDouble, Bath } from "lucide-react";
import { Project } from "./PortfolioGrid";
import { NextProjectButton } from "@/app/components/NextProjectButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const ProjectDescription = ({ project }: { project: Project }) => {
  const stats = [
    { icon: MapPin, value: project.location, label: "Location" },
    {
      icon: Home,
      value: `${project.size.toLocaleString()} sq ft`,
      label: "Area",
    },
    { icon: BedDouble, value: project.bedrooms, label: "Bedrooms" },
    { icon: Bath, value: project.bathrooms, label: "Bathrooms" },
  ];

  return (
    <section className="px-4 md:px-12 2xl:px-54 py-16 md:py-24 bg-white ">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-28">
        {/* Left Column — Sticky Description & Stats */}
        <motion.div
          className="lg:w-[40%] lg:sticky lg:top-14 h-fit"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-xs  uppercase tracking-[0.2em]  mb-6"
          >
            Project Overview
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className=" md:text-xl leading-relaxed mb-16 font-light "
          >
            {project.description}
          </motion.p>

          <motion.div
            className="divide-y divide-neutral-100 border-t border-b border-neutral-100"
            variants={stagger}
          >
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex justify-between items-center py-5 group"
              >
                <span className="text-xs uppercase tracking-widest  group-hover:text-black transition-colors">
                  {label}
                </span>
                <span className=" font-light">{value}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column — Gallery Images */}
        <div className="lg:w-[60%] flex flex-col gap-6 md:gap-12">
          {project.gallery.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl bg-neutral-50"
            >
              <img
                src={image}
                alt={`${project.title} detail ${i + 1}`}
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-1000"
              />
            </motion.div>
          ))}

          <div className="flex justify-start lg:justify-end ">
            <NextProjectButton currentSlug={project.slug} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
