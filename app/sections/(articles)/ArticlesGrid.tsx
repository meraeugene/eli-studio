/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { articles } from "@/app/data";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ArticlesGrid = () => {
  return (
    <section className="px-4 md:px-12 2xl:px-24 pt-16 bg-white">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {articles.map((post) => (
          <Link key={post.slug} prefetch href={`/articles/${post.slug}`}>
            <motion.div
              variants={cardVariants}
              className="group relative aspect-4/3 md:aspect-video overflow-hidden rounded-2xl cursor-pointer bg-neutral-100"
            >
              {/* Image & Overlay */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
                {/* Unified Gradient for legibility */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/40 transition-opacity group-hover:opacity-90" />
              </motion.div>

              {/* Category Tag */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                <span className="px-3 py-1.5 text-[10px] md:text-xs  uppercase tracking-widest bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white">
                  {post.category}
                </span>
              </div>

              {/* Content Info */}
              <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6 z-20 flex justify-between items-end text-white">
                <div className="max-w-[80%] md:max-w-[70%]">
                  <p className="text-[10px] md:text-xs uppercase tracking-widest mb-2 opacity-70 font-medium">
                    {post.date}
                  </p>
                  <h4 className="text-xl md:text-2xl xl:text-3xl font-medium tracking-tight leading-tight">
                    {post.title}
                  </h4>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 md:p-3 rounded-full  transition-transform duration-300 hidden sm:flex bg-white/10 backdrop-blur-md text-white"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};
