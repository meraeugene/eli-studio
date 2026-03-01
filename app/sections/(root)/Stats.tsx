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
    <section className="py-12 lg:py-24 font-inter px-4 md:px-12 xl:px-54 ">
      {/* Text Section */}
      <motion.div
        className="flex flex-col xl:flex-row justify-between items-start gap-8  xl:gap-12 mb-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left text */}
        <motion.div variants={item} className="lg:w-[80%] xl:w-[40%] ">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full text-base mb-6 lg:mb-8"
          >
            <span className="bg-black text-white rounded-full p-1">
              <ArrowRight size={16} className="-rotate-45" />
            </span>
            About Us
          </motion.div>
          <motion.h2
            variants={item}
            className="text-3xl lg:text-5xl   font-medium uppercase"
          >
            Shaping refined spaces through considered design
          </motion.h2>
        </motion.div>

        {/* Right paragraph */}
        <motion.div
          variants={item}
          className="md:max-w-130 lg:max-w-160 xl:pt-16"
        >
          <p className=" md:text-lg lg:text-2xl leading-snug">
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
            className={`pl-4 md:pl-6 xl:pl-8 pb-12 ${idx < 3 ? "lg:border-r border-gray-100" : ""}`}
          >
            <h3 className="text-5xl font-semibold my-6 md:my-8">
              {stat.value}
            </h3>
            <p className=" md:text-base  max-w-75 text-gray-600 leading-relaxed">
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
