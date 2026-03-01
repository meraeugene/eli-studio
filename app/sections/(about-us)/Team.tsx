/* eslint-disable @next/next/no-img-element */
"use client";

import { team } from "@/app/data";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const TeamSection = () => {
  // Text animation variant for premium scroll effect
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-16 px-54 bg-white">
      {/* Section header */}
      <motion.div
        className="flex items-center gap-2 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <div className="p-2 bg-black rounded-full text-white">
          <ArrowUpRight size={14} />
        </div>
        <span className="text-sm font-medium uppercase tracking-widest">
          The Team
        </span>
      </motion.div>

      {/* Headings */}
      <motion.h2
        className="text-5xl font-light mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        Designers of the Studio
      </motion.h2>
      <motion.p
        className="text-gray-500 max-w-xl mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        A dedicated group of professionals working collaboratively to shape
        interior environments with clarity, purpose, and lasting quality.
      </motion.p>

      {/* Team cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-md mb-6">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.h4
              className="text-xl font-medium"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
              transition={{ delay: 0.05 + i * 0.2 }}
            >
              {member.name}
            </motion.h4>
            <motion.p
              className="text-sm text-gray-500 uppercase tracking-tighter mt-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
              transition={{ delay: 0.1 + i * 0.2 }}
            >
              {member.role}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
