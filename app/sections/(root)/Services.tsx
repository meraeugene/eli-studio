/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { services } from "../../data";
import Link from "next/link";

export function ServicesSection() {
  // Variants for staggered animation
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section className="py-12 px-4 md:px-12 xl:px-54 lg:py-24 flex flex-col lg:flex-row gap-16">
      {/* Left text & services */}
      <motion.div
        className="lg:w-1/2 flex flex-col justify-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full text-sm mb-8 w-max"
        >
          <span className="bg-black text-white rounded-full p-1">
            <ArrowRight size={12} className="-rotate-45" />
          </span>
          Our Services
        </motion.div>

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl xl:text-5xl font-medium tracking-tight uppercase mb-8"
        >
          Design services for <br /> refined interior spaces
        </motion.h2>

        <motion.div variants={item} whileHover={{ opacity: 0.8 }}>
          <Link
            href="/about-us"
            className="flex items-center gap-3 bg-black text-white p-3 rounded-full text-sm font-medium cursor-pointer transition-colors w-max mb-12"
          >
            <span className="bg-white text-black rounded-full p-1">
              {" "}
              <ArrowRight size={16} />{" "}
            </span>
            More About Us
          </Link>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2  gap-4"
          variants={container}
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-gray-100 hover:shadow-lg transition-shadow ease-in p-4 rounded-lg"
            >
              <div className="bg-white text-black text-sm w-10 h-10 flex items-center justify-center rounded-full mb-6">
                {svc.num}
              </div>
              <h3 className="text-lg font-medium xl:text-xl mb-2">
                {svc.title}
              </h3>
              <p className="text-sm xl:text-base    text-gray-500 leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right image */}
      <motion.div
        className="lg:w-1/2 relative min-h-150 rounded-lg overflow-hidden"
        variants={item}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop"
            alt="Services Interior"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
