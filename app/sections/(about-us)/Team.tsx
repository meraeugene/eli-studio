/* eslint-disable @next/next/no-img-element */
"use client";

import { team } from "@/app/data";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const TeamSection = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="pt-16 md:pt-24 px-4 md:px-12 2xl:px-54 bg-white font-inter">
      {/* Section header */}
      <motion.div
        className="flex items-center gap-3 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <div className="p-2 bg-black rounded-full text-white">
          <ArrowUpRight size={14} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] ">
          The Team
        </span>
      </motion.div>

      {/* Headings */}
      <div className="max-w-3xl mb-16 md:mb-20">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight uppercase mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Designers of the Studio
        </motion.h2>
        <motion.p
          className="text-neutral-500  md:text-xl leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          A dedicated group of professionals working collaboratively to shape
          interior environments with clarity, purpose, and lasting quality.
        </motion.p>
      </div>

      {/* Team cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {team.map((member, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col group cursor-default"
          >
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl mb-6 bg-neutral-100">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover  transition-all duration-700 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-medium text-neutral-900 tracking-tight">
                {member.name}
              </h4>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
