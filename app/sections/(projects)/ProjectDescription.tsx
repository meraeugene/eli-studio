/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, cubicBezier } from "framer-motion";
import { MapPin, Home, BedDouble, Bath } from "lucide-react";
import { Project } from "./PortfolioGrid";
import { NextProjectButton } from "@/app/components/NextProjectButton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const ProjectDescription = ({ project }: { project: Project }) => {
  const stats = [
    { icon: MapPin, value: project.location, label: "Area" },
    { icon: Home, value: project.size.toLocaleString(), label: "Square" },
    { icon: BedDouble, value: project.bedrooms, label: "Bedrooms" },
    { icon: Bath, value: project.bathrooms, label: "Bathrooms" },
  ];

  return (
    <section className="px-6 py-24 md:px-12 lg:px-54 bg-white">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column — Animated */}
        <motion.div
          className="lg:w-1/2 lg:sticky lg:top-32 h-fit"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl mb-6">
            Description
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 leading-relaxed max-w-xl"
          >
            {project.description}
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-12 pt-12"
            variants={stagger}
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-black text-white rounded-full">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-lg">{value}</p>
                  <p className="text-sm text-gray-600 mt-1">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column — Static */}
        <div className="lg:w-1/2 space-y-8">
          {project.gallery.map((image, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`${project.title} detail ${i + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}

          <div className="flex justify-end ">
            <NextProjectButton currentSlug={project.slug} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
