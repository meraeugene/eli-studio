"use client";

import { ArrowRight } from "lucide-react";
import { faqs } from "../../data";
import { FaqItem } from "../../components/FaqItem";
import { useState } from "react";
import Link from "next/link";

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-12 2xl:px-24 flex flex-col lg:flex-row gap-12 lg:gap-16 font-inter">
      {/* Left Text & Button */}
      <div className="w-full lg:w-1/2">
        <div className="inline-flex items-center gap-3 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">
          <span className="bg-black text-white rounded-full p-1">
            <ArrowRight size={12} className="-rotate-45" />
          </span>
          FAQ&apos;S
        </div>

        <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium tracking-tight uppercase leading-[1.1] mb-6">
          Your questions, <br className="hidden md:block" /> answered
        </h2>

        <p className="text-gray-500 md:text-xl mb-10 max-w-sm leading-relaxed">
          Helpful information designed to guide you through our services and
          design approach.
        </p>

        <div>
          <Link
            href="/about-us#process"
            className="group flex items-center gap-3 bg-black text-white pl-5 pr-2 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:bg-neutral-800 w-max"
          >
            Our Process
            <span className="bg-white text-black rounded-full p-2 ">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <FaqItem
              question={faq.q}
              answer={faq.a}
              isOpen={activeIndex === idx}
              onToggle={() => setActiveIndex(activeIndex === idx ? null : idx)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
