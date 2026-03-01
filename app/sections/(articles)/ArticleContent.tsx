"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { NextArticleButton } from "@/app/components/NextArticleButton";

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  heroImage: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  image1: string;
  image2: string;
};

const ArticleDetails = ({ article }: { article: Article }) => {
  // Sophisticated "Editorial" easing
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <main className="w-full px-4 md:px-12 2xl:px-54 py-24 md:py-32 bg-white font-inter text-[#1a1a1a] selection:bg-black selection:text-white">
      {/* Header: Title and Metadata */}
      <header className="mb-12 md:mb-20 flex flex-col lg:flex-row justify-between lg:items-center gap-8">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl  xl:text-5xl  tracking-tight leading-[1.05] max-w-5xl"
        >
          {article.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col  text-sm font-light uppercase tracking-widest text-gray-500"
        >
          <span>{article.category}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{article.date}</span>
        </motion.div>
      </header>

      {/* Hero: Large scale cinematic image */}
      <motion.section
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 "
      >
        <div className="relative aspect-video md:aspect-21/9 w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            priority
            className="object-cover transition-transform duration-[2s] hover:scale-105"
          />
        </div>
      </motion.section>

      {/* Content: Single column focused reading */}
      <article className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Paragraphs with enhanced readability */}
          <motion.p
            variants={fadeInUp}
            className="text-xl leading-[1.6]  font-light"
          >
            {article.paragraph1}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl leading-[1.7] font-light"
          >
            {article.paragraph2}
          </motion.p>

          {/* Grid: Supporting visuals */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 py-4"
          >
            <div className="group relative aspect-3/4 overflow-hidden rounded-xl bg-gray-50">
              <Image
                src={article.image1}
                alt="Detail view 1"
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-3/4 overflow-hidden rounded-xl bg-gray-50">
              <Image
                src={article.image2}
                alt="Detail view 2"
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl leading-[1.7] font-light"
          >
            {article.paragraph3}
          </motion.p>

          {/* Footer: Contextual Navigation */}
          <motion.footer
            variants={fadeInUp}
            className="pt-20 mt-20 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-widest mb-2 ">Up Next</p>
              <h4 className="text-xl  italic">Discover more stories</h4>
            </div>
            <NextArticleButton currentSlug={article.slug} />
          </motion.footer>
        </motion.div>
      </article>
    </main>
  );
};

export default ArticleDetails;
