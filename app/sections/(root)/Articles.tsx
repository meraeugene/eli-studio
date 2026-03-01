/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { articles } from "../../data";
import Link from "next/link";

export function ArticlesSection() {
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
    <section className="py-12 lg:py-24 font-inter px-4 md:px-12 xl:px-54">
      {/* Heading & Button */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={item}>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 bg-gray-100 p-2 rounded-full text-sm mb-8"
          >
            <span className="bg-black text-white rounded-full p-1">
              <ArrowRight size={12} className="-rotate-45" />
            </span>
            Recent Articles
          </motion.div>

          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight uppercase mb-6"
          >
            Design stories & <br /> studio journal
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-600 lg:text-lg max-w-lg"
          >
            Insights and reflections on interior design, architecture, and the
            evolving relationship between space and everyday life.
          </motion.p>
        </motion.div>

        <motion.div variants={item}>
          <Link
            href="/articles"
            className="flex items-center gap-2 bg-black text-white  p-3 rounded-full text-sm font-medium cursor-pointer hover:bg-gray-800 transition-colors w-max shrink-0"
          >
            <span className="bg-white text-black rounded-full p-1">
              <ArrowRight size={16} />
            </span>
            See All Articles
          </Link>
        </motion.div>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {articles.map((art) => (
          <Link href={`/articles/${art.slug}`} key={art.slug}>
            <motion.div
              variants={item}
              className="relative h-112.5 rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Image with fade + subtle scale animation */}
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: easeOut }}
                className="absolute inset-0"
              >
                <img
                  src={art.heroImage}
                  alt={art.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.40),rgba(0,0,0,0),rgba(0,0,0,0.80))]" />

              {/* Category */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
                {art.category}
              </div>

              {/* Title & arrow */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end gap-10">
                <div>
                  <p className="text-sm text-gray-300 mb-2">{art.date}</p>
                  <h3 className="text-xl md:text-lg lg:text-2xl max-w-xs md:max-w-full font-medium leading-snug ">
                    {art.title}
                  </h3>
                </div>
                <div className="bg-black text-white p-3 rounded-full mb-1 shrink-0">
                  <ArrowRight size={16} className="-rotate-45" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
