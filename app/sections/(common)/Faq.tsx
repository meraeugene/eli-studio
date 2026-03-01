"use client";

import { ArrowRight } from "lucide-react";
import { faqs } from "../../data";
import { FaqItem } from "../../components/FaqItem";
import { motion, easeOut } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

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
    <section className="py-12 lg:py-24 px-4 font-inter md:px-12 xl:px-54  flex flex-col lg:flex-row gap-16">
      {/* Left Text & Button */}
      <motion.div
        className="lg:w-1/2"
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
          FAQ&apos;S
        </motion.div>

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl xl:text-5xl  font-medium tracking-tight uppercase leading-tight mb-6"
        >
          Your questions, <br /> answered
        </motion.h2>

        <motion.p variants={item} className="text-gray-600 mb-8 max-w-sm  ">
          Helpful information designed to guide you through our services and
          design approach.
        </motion.p>

        <motion.div variants={item} whileHover={{ opacity: 0.8 }}>
          <Link
            href="/about-us#process"
            className="flex items-center gap-3 bg-black text-white p-3 rounded-full text-sm font-medium cursor-pointer transition-colors w-max"
          >
            <span className="bg-white text-black rounded-full p-1">
              <ArrowRight size={16} />
            </span>
            Learn More About Our Process
          </Link>
        </motion.div>
      </motion.div>

      {/* FAQ Items */}
      <motion.div
        className="lg:w-1/2 space-y-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {faqs.map((faq, idx) => (
          <motion.div key={idx} variants={item}>
            <FaqItem
              question={faq.q}
              answer={faq.a}
              isOpen={activeIndex === idx}
              onToggle={() => setActiveIndex(activeIndex === idx ? null : idx)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
