/* eslint-disable @next/next/no-img-element */
"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smoother parallax exit: 80% feels more "attached" to the scroll than 150%
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[70vh] md:h-[80vh] overflow-hidden flex items-end pb-12 md:pb-20 px-4 md:px-12 lg:px-24 xl:px-32 font-inter"
    >
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2874&auto=format&fit=crop"
          alt="Luxury Interior"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Deep gradient for text protection */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 text-white w-full max-w-5xl"
      >
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium leading-[0.9] tracking-tighter uppercase"
        >
          All Projects
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg md:text-xl lg:text-2xl max-w-xl leading-relaxed text-white/90 font-light"
        >
          Selected works showcasing our approach to thoughtful planning,
          material sensitivity, and refined spatial design.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
