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
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // cinematic ease
    },
  },
};

export const ArticlesGrid = () => {
  return (
    <section className="px-54 py-20 bg-white">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {articles.map((post) => (
          <Link key={post.slug} prefetch href={`/articles/${post.slug}`}>
            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.4 }}
              className="group relative aspect-video overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image */}
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

                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/0 to-black/60 transition-all duration-700" />
              </motion.div>

              {/* Header Info */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-3 py-2  text-xs tracking-widest bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white">
                  {post.category}
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute inset-x-6 bottom-6 z-20 flex justify-between items-end text-white">
                <div className="max-w-[40%]">
                  <p className="text-sm mb-2 opacity-80">{post.date}</p>
                  <h4 className="text-2xl font-medium  tracking-tight">
                    {post.title}
                  </h4>
                </div>

                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-black text-white   transition-all duration-300"
                >
                  <ArrowUpRight size={18} />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};
