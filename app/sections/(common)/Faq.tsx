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
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-12 2xl:px-24 flex flex-col lg:flex-row gap-12 lg:gap-16 font-inter">
      {/* Left Text & Button */}
      <motion.div
        className="w-full lg:w-1/2"
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
          FAQ&apos;S
        </motion.div>

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl xl:text-5xl font-medium tracking-tight uppercase leading-[1.1] mb-6"
        >
          Your questions, <br className="hidden md:block" /> answered
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-500 md:text-xl mb-10 max-w-sm leading-relaxed"
        >
          Helpful information designed to guide you through our services and
          design approach.
        </motion.p>

        <motion.div variants={item}>
          <Link
            href="/about-us#process"
            className="group flex items-center gap-3 bg-black text-white pl-5 pr-2 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:bg-neutral-800 w-max"
          >
            Our Process
            <span className="bg-white text-black rounded-full p-2 ">
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* FAQ Items */}
      <motion.div
        className="w-full lg:w-1/2 space-y-4 md:space-y-6"
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
