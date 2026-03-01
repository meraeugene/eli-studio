/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { avatars } from "../../data";
import Link from "next/link";

export function CtaSection() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 font-inter px-4 md:px-12 2xl:px-54 flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-3 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8"
        >
          <span className="bg-black text-white rounded-full p-1">
            <ArrowRight size={12} className="-rotate-45" />
          </span>
          Years of Experience
        </motion.div>

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl xl:text-5xl font-medium tracking-tight uppercase mb-6 leading-[1.1]"
        >
          Start a thoughtful <br className="hidden md:block" /> design process
        </motion.h2>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-500 mb-10 max-w-md leading-relaxed"
        >
          Let&apos;s work together to create an interior that reflects your
          ideas and lifestyle, guided by detail and timeless quality.
        </motion.p>

        <motion.div variants={item} className="mb-12 lg:mb-20">
          <Link
            href="/contact"
            className="group flex items-center gap-3 bg-black text-white pl-5 pr-2 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:bg-neutral-800 w-max"
          >
            Get In Touch
            <span className="bg-white text-black rounded-full p-2 ">
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>

        {/* Avatars Overlay */}
        <motion.div variants={item} className="flex flex-col gap-4">
          <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">
            Partnering with clients globally
          </p>
          <div className="flex -space-x-3 items-center">
            {avatars.map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden relative shadow-sm"
              >
                <img
                  src={src}
                  alt={`Avatar ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="pl-6 text-sm font-medium text-gray-600">
              + 120 Projects
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full lg:w-1/2 aspect-4/5 md:aspect-square lg:aspect-4/5 relative rounded-2xl overflow-hidden"
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
