/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { avatars } from "../../data";
import Link from "next/link";

export function CtaSection() {
  // Animation variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section className="lg:py-24 py-12 font-inter px-4 md:px-12 xl:px-54  flex flex-col lg:flex-row md:gap-16 gap-8 lg:items-center">
      {/* Left Content */}
      <motion.div
        className="lg:w-1/2 flex flex-col items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 bg-gray-100 p-2 rounded-full text-sm mb-8"
        >
          <span className="bg-black text-white rounded-full p-1">
            <ArrowRight size={12} className="-rotate-45" />
          </span>
          Years of Experience, Projects Still Growing
        </motion.div>

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl xl:text-5xl  font-medium tracking-tight uppercase mb-8"
        >
          Start a thoughtful <br /> design process
        </motion.h2>

        <motion.p
          variants={item}
          className="text-base  text-gray-600 mb-8 max-w-md"
        >
          Let&apos;s work together to create an interior that reflects your
          ideas and lifestyle, guided by a design process focused on detail,
          balance, and timeless quality.
        </motion.p>

        <motion.div variants={item}>
          <Link
            href="/contact"
            className="flex items-center gap-3 bg-black text-white p-3 rounded-full text-sm font-medium hover:bg-gray-800 cursor-pointer transition-colors w-max lg:mb-28 mb-8"
          >
            <span className="bg-white text-black rounded-full p-1">
              <ArrowRight size={16} />
            </span>
            Get In Touch With Us
          </Link>
        </motion.div>
        {/* Avatars */}
        <motion.div variants={item}>
          <p className="text-sm text-gray-500 mb-4">
            Partnering with clients to create refined interiors
          </p>

          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <motion.div
                key={i}
                variants={item}
                className="
          w-10 h-10 rounded-full
          border-2 border-white
          overflow-hidden relative
         
        "
              >
                <img
                  src={src}
                  alt={`Avatar ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="lg:w-1/2 w-full h-150 relative rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: easeOut }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940&auto=format&fit=crop"
          alt="Bathroom interior"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  );
}
