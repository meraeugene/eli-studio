"use client";

import { ArrowRight } from "lucide-react";
import { footer_links } from "../data";
import { motion, easeOut } from "framer-motion";
import Link from "next/link";

export function Footer() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <footer className="bg-black  px-4 md:px-12 py-10 md:pb-0 font-inter text-white lg:pt-24 2xl:px-54 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-16 mb-12">
          {/* Left */}
          <motion.div className="max-w-md" variants={container}>
            <motion.h2
              variants={item}
              className="text-4xl md:text-6xl mb-6  tracking-tight"
            >
              Begin Your <br />
              <span className="font-playfair italic ">Design</span> Journey
            </motion.h2>

            <motion.p
              variants={item}
              className="text-gray-300  text-sm max-w-[75%] md:text-base  mb-10 "
            >
              Get in touch to discuss your project and explore how our design
              approach can bring your vision to life.
            </motion.p>

            <motion.div className="flex items-center gap-3" variants={item}>
              <input
                type="email"
                placeholder="elistudio@gmail.com"
                className="bg-transparent border border-dashed  rounded-full px-4 py-3  text-sm focus:outline-none focus:border-white focus:border-solid transition w-full"
              />
              <button className="flex cursor-pointer items-center gap-2 bg-white text-black pr-4 pl-3 py-3  rounded-full  w-fit text-sm font-semibold hover:bg-gray-200 transition">
                <span className="bg-black text-white rounded-full p-1">
                  <ArrowRight size={14} />
                </span>
                Submit
              </button>
            </motion.div>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-wrap gap-12 md:flex-row flex-col md:gap-24 lg:justify-end"
            variants={container}
          >
            {footer_links.map(({ title, links }) => (
              <motion.div key={title} variants={item}>
                {/* Section title */}
                <h4 className="text-gray-400  font-medium mb-2">{title}</h4>

                {/* Links */}
                <div className="flex flex-col gap-3 mt-4">
                  {links.map((link) => (
                    <Link
                      prefetch
                      key={link.label}
                      href={link.link}
                      className="relative inline-block w-fit group pb-1"
                    >
                      <span className="relative z-10">{link.label}</span>

                      <span
                        className="
                absolute left-0 -bottom-0.5
                h-px w-full
                bg-current
                scale-x-0
                origin-right
                group-hover:origin-left
                group-hover:scale-x-100
                transition-transform duration-300 ease-in-out
              "
                      />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Brand */}
        <motion.div
          className="w-full flex justify-center lg:mt-32"
          variants={item}
        >
          <h1 className="text-[28vw]  md:text-[24vw] lg:text-[18vw] font-mona leading-none font-bold tracking-tighter text-white flex items-baseline">
            eli{" "}
            <span className="italic  font-extralight font-playfair">
              studio
            </span>
          </h1>
        </motion.div>
      </motion.div>
    </footer>
  );
}
