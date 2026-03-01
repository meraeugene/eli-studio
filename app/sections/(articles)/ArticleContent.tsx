"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
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
  // Animation variants for staggered entry
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] selection:bg-black selection:text-white px-54 py-36  ">
      {/* Header Section */}
      <header className="  mb-16 flex flex-col md:flex-row justify-between items-start gap-8">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-5xl  font-medium leading-[1.1] max-w-132"
        >
          {article.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3  pt-4"
        >
          <span className="px-5 py-2 bg-[#f4f4f4] rounded-full  font-medium">
            {article.category}
          </span>
          <span className="px-5 py-2 bg-[#f4f4f4] rounded-full  font-medium">
            {article.date}
          </span>
        </motion.div>
      </header>

      {/* Hero Image Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="  mb-20"
      >
        <div className="relative aspect-21/9 w-full overflow-hidden rounded-lg">
          <Image
            src={article.heroImage}
            alt={`Hero Interior for ${article.title}`}
            fill
            priority
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </motion.section>

      {/* Content Section */}
      <article className="max-w-4xl mx-auto ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Paragraph 1 */}
          <motion.p
            variants={fadeInUp}
            className="text-xl leading-relaxed text-justify "
          >
            {article.paragraph1}
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={fadeInUp}
            className="text-xl leading-relaxed text-justify"
          >
            {article.paragraph2}
          </motion.p>

          {/* Image Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 "
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-lg group">
              <Image
                src={article.image1}
                alt={`Content Image 1 for ${article.title}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="relative aspect-4/5 overflow-hidden rounded-lg group">
              <Image
                src={article.image2}
                alt={`Content Image 2 for ${article.title}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Paragraph 3 */}
          <motion.div
            variants={fadeInUp}
            className="space-y-8 text-xl text-justify"
          >
            <p>{article.paragraph3}</p>
          </motion.div>

          {/* Next Article Button */}
          <motion.div variants={fadeInUp} className="flex justify-end ">
            <NextArticleButton currentSlug={article.slug} />
          </motion.div>
        </motion.div>
      </article>
    </main>
  );
};

export default ArticleDetails;
