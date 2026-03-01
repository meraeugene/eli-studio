/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { services } from "../../data";
import Link from "next/link";

export function ServicesSection() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-12 2xl:px-54 flex flex-col lg:flex-row gap-12 lg:gap-16">
      {/* Left Content Area */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 w-max"
        >
          <span className="bg-black text-white rounded-full p-1">
            <ArrowRight size={12} className="-rotate-45" />
          </span>
          Our Services
        </motion.div>

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl xl:text-5xl font-medium tracking-tight uppercase mb-8 leading-[1.1]"
        >
          Design services for <br className="hidden md:block" /> refined
          interior spaces
        </motion.h2>

        <motion.div variants={item} className="mb-12">
          <Link
            href="/about-us"
            className="group flex items-center gap-3 bg-black text-white pl-5 pr-2 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:bg-neutral-800 w-max"
          >
            More About Us
            <span className="bg-white text-black rounded-full p-2 ">
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          variants={container}
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-gray-50 border border-transparent  transition-all duration-300 p-6 rounded-2xl"
            >
              <div className="bg-white border border-gray-100 text-black text-xs font-bold w-10 h-10 flex items-center justify-center rounded-full mb-6 shadow-sm">
                {svc.num}
              </div>
              <h3 className="text-lg font-medium xl:text-xl mb-3 uppercase tracking-wide">
                {svc.title}
              </h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Image Area */}
      <motion.div
        className="w-full lg:w-1/2 relative min-h-100 md:min-h-125 lg:min-h-150 rounded-3xl overflow-hidden order-first lg:order-last"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOut }}
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
