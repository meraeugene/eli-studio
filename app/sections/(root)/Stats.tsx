"use client";

import { motion, easeOut } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { stats } from "../../data";

export function StatsSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 font-inter px-4 md:px-12  2xl:px-54">
      {/* Text Section */}
      <motion.div
        className="flex flex-col xl:flex-row justify-between items-start gap-8 xl:gap-20 mb-12 md:mb-16 lg:mb-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left text */}
        <motion.div variants={item} className="w-full xl:w-[45%]">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8"
          >
            <span className="bg-black text-white rounded-full p-1">
              <ArrowRight size={12} className="-rotate-45" />
            </span>
            About Us
          </motion.div>

          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase leading-tight"
          >
            Shaping refined spaces through considered design
          </motion.h2>
        </motion.div>

        {/* Right paragraph */}
        <motion.div variants={item} className="w-full xl:w-[45%] xl:pt-28">
          <p className="text-lg md:text-xl lg:text-2xl leading-snug">
            Through a thoughtful and collaborative process, we translate design
            concepts into environments that respond to both the space and the
            people who inhabit it, delivering interiors that are calm, enduring,
            and carefully composed.
          </p>
        </motion.div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-100"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className={`
              py-8 md:py-12 
              border-b md:border-b-0
              border-gray-100 
              ${idx % 2 === 0 ? "md:border-r" : "md:border-r-0"} 
              lg:border-r lg:last:border-r-0
              md:px-6 lg:px-8 xl:px-10
              first:pl-0
            `}
          >
            <h3 className="text-4xl md:text-5xl font-semibold mb-4 md:mb-6">
              {stat.value}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
