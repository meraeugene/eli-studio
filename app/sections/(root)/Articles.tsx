/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { articles } from "../../data";
import Link from "next/link";

export function ArticlesSection() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 font-inter px-4 md:px-12 2xl:px-24">
      {/* Heading & Button */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={item} className="max-w-2xl">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8"
          >
            <span className="bg-black text-white rounded-full p-1">
              <ArrowRight size={12} className="-rotate-45" />
            </span>
            Recent Articles
          </motion.div>

          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight uppercase mb-6 leading-[1.1]"
          >
            Design stories & <br className="hidden md:block" /> studio journal
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-500  md:text-xl max-w-lg leading-relaxed"
          >
            Insights and reflections on interior design, architecture, and the
            evolving relationship between space and everyday life.
          </motion.p>
        </motion.div>

        <motion.div variants={item} className="shrink-0">
          <Link
            href="/articles"
            className="group flex items-center gap-3 bg-black text-white pl-5 pr-2 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:bg-neutral-800 w-max"
          >
            See All Articles
            <span className="bg-white text-black rounded-full p-2 ">
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {articles.map((art) => (
          <Link
            href={`/articles/${art.slug}`}
            key={art.slug}
            className="block group"
          >
            <motion.div
              variants={item}
              className="relative aspect-4/5 md:aspect-3/4 rounded-2xl overflow-hidden cursor-pointer bg-gray-100"
            >
              {/* Image with scale animation */}
              <motion.div className="absolute inset-0">
                <img
                  src={art.heroImage}
                  alt={art.title}
                  className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110"
                />
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Category */}
              <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
                {art.category}
              </div>

              {/* Title & Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end gap-6">
                <div className="flex-1">
                  <p className="text-xs text-white/60 mb-3 font-mono">
                    {art.date}
                  </p>
                  <h3 className="text-xl xl:text-2xl font-medium leading-[1.2] tracking-tight">
                    {art.title}
                  </h3>
                </div>
                <div className=" bg-white/10 backdrop-blur-md text-white p-3 rounded-full ">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
