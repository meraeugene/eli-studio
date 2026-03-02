"use client";

import { steps } from "@/app/data";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ProcessSection = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="process"
      className="pt-16 md:pt-24 px-4 md:px-12 2xl:px-54 bg-white overflow-hidden"
    >
      {/* Section Tag */}
      <motion.div
        className="flex items-center gap-3 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <div className="p-2 bg-black rounded-full text-white">
          <ArrowUpRight size={14} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] ">
          Our Process
        </span>
      </motion.div>

      {/* Headings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-16 md:mb-16">
        <motion.h2
          className="text-lg md:text-3xl lg:text-4xl font-light leading-tight "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          Our studio approaches each project with clarity, intention, and a deep
          understanding of space. We take time to understand context and
          architectural character.
        </motion.h2>
        <motion.p
          className=" md:text-xl lg:text-2xl self-end leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          Through a thoughtful design process, we create calm and cohesive
          environments tailored to contemporary living.
        </motion.p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`
              p-6 md:p-8 bg-gray-100 rounded-2xl flex flex-col gap-4 h-fit transition-shadow hover:shadow-sm
              ${index === 1 ? "md:mt-0 lg:mt-16" : ""}
              ${index === 2 ? "md:mt-0 lg:mt-32" : ""}
            `}
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-mono font-medium ">
                  0{step.id}
                </span>
                <div className="h-px grow bg-neutral-200" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium  tracking-tight">
                {step.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed ">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
