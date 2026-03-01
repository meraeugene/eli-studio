"use client";

import { steps } from "@/app/data";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ProcessSection = () => {
  // Variants for all text elements
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="process" className="py-24 pb-0 px-54 bg-white">
      {/* Section header */}
      <motion.div
        className="flex items-center gap-2 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <div className="p-2 bg-black rounded-full text-white">
          <ArrowUpRight size={14} />
        </div>
        <span className="text-sm font-medium uppercase tracking-widest">
          Our Process
        </span>
      </motion.div>

      {/* Headings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 mb-24">
        <motion.h2
          className="text-3xl  font-light leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          Our studio approaches each project with clarity, intention, and a deep
          understanding of space. We take time to understand context, lifestyle,
          and architectural character before shaping ideas into refined,
          cohesive interiors.
        </motion.h2>
        <motion.p
          className="text-gray-500 text-2xl self-end leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          Through a thoughtful design process that places emphasis on
          proportion, material selection, light, and spatial flow, we create
          calm and cohesive environments tailored to contemporary living.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`p-10 bg-[#F4F4F4] rounded-sm min-h-75 flex flex-col gap-6 h-fit
              ${index === 1 ? "mt-10 md:mt-16" : ""}
              ${index === 2 ? "mt-20 md:mt-32" : ""}`}
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-mono">{step.id}</span>
                <div className="h-px grow bg-black/20" />
              </div>
              <motion.h3
                className="text-2xl mb-4 font-light"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariants}
                transition={{ delay: 0.1 + index * 0.2 }}
              >
                {step.title}
              </motion.h3>
            </div>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
              transition={{ delay: 0.15 + index * 0.2 }}
            >
              {step.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
