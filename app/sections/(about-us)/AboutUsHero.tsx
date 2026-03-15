/* eslint-disable @next/next/no-img-element */
"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const AboutUsHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Balanced parallax for text
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[80vh] md:h-[80vh] overflow-hidden flex items-end pb-12 md:pb-20 px-4 md:px-12 2xl:px-24"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1700474568247-2bf81611b293?q=80&w=2874&auto=format&fit=crop"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        {/* Subtle bottom fade to transition into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/40 to-transparent z-10" />
      </div>

      {/* Text */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 text-white w-full max-w-4xl"
      >
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight uppercase"
        >
          Thoughtful Design,
          <br />
          <span className="opacity-80">Timeless Spaces</span>
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default AboutUsHero;
