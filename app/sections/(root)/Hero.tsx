/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax movement
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Variants for text
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section ref={ref} className="relative  h-screen w-full  ">
      {/* Fade-in wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div
          style={{ y: backgroundY, scale: backgroundScale }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop"
            alt="Modern Interior"
            className="object-cover h-full w-full"
          />

          {/* 🔹 Mobile full dark overlay */}
          <div className="md:hidden absolute inset-0 bg-black/60" />

          {/* Left-to-right gradient overlay */}
          <div className="hidden md:block absolute inset-0 bg-linear-to-r from-black/70 to-transparent" />

          {/* Top-to-bottom gradient overlay */}
          <div className="hidden md:block absolute inset-0 bg-linear-to-b from-black/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative md:px-12 xl:px-54 z-10 flex h-full flex-col  justify-end p-4 md:p-16 md:pb-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={item}
          className="max-w-xs md:max-w-100  mb-44 md:mb-18 text-white"
        >
          <motion.p
            variants={item}
            className="text-lg font-inter md:text-xl lg:text-2xl lg:leading-8  mb-8 "
          >
            Designing interiors that balance clarity, comfort, and elegance,
            transforming everyday spaces into considered living environments.
          </motion.p>

          <motion.div
            variants={item}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/contact"
              className="flex font-inter items-center gap-3 bg-white text-black px-3 py-2 rounded-full text-sm font-medium w-max shadow-sm cursor-pointer"
            >
              <span className="flex items-center justify-center w-7 h-7 bg-black text-white rounded-full">
                <ArrowRight size={16} />
              </span>
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-[28vw] md:text-[24vw]  xl:text-[18vw] leading-none font-extrabold tracking-tighter text-white font-mona flex items-baseline "
        >
          eli{" "}
          <span className="font-playfair  font-extralight italic">studio</span>
        </motion.h1>
      </motion.div>
    </section>
  );
}
