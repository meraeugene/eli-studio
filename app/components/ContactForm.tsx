"use client";

import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { contactInfo } from "../data";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ContactForm = () => {
  return (
    <section className="w-full px-4 md:px-12 2xl:px-54 py-20 md:py-32 bg-white font-inter">
      {/* Top Tag */}
      <motion.div
        className="inline-flex items-center gap-3 bg-neutral-100 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <span className="bg-black text-white rounded-full p-1">
          <ArrowRight size={12} className="-rotate-45" />
        </span>
        Get In Touch
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Left Column: Info */}
        <motion.div
          className="lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={fadeUp}
            className=" text-3xl md:text-4xl lg:text-5xl  font-medium tracking-tighter uppercase mb-8 "
          >
            Let&apos;s start a <br /> conversation
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-neutral-500 text-lg md:text-xl max-w-md mb-16 leading-relaxed"
          >
            Reach out to discuss your project, collaborations, or general
            enquiries. We respond to all messages within 24 hours.
          </motion.p>

          <div className="space-y-10">
            {contactInfo.map((item) => (
              <motion.div key={item.label} variants={fadeUp}>
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-3">
                  {item.label}
                </p>
                {item.type === "link" ? (
                  <Link
                    href={item.href}
                    className="text-xl md:text-2xl font-normal hover:opacity-60 transition-opacity underline underline-offset-8 decoration-neutral-200"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="text-xl md:text-2xl font-normal whitespace-pre-line leading-tight">
                    {item.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["First Name", "Last Name"].map((label) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col gap-3"
              >
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  {label}
                </label>
                <input
                  className="w-full bg-neutral-50 p-4 rounded-xl outline-none focus:ring-1 ring-black transition-all border border-transparent focus:bg-white"
                  placeholder={
                    label === "First Name" ? "e.g. Elena" : "e.g. Rossi"
                  }
                />
              </motion.div>
            ))}
          </div>

          {["Email", "Message"].map((label) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex flex-col gap-3"
            >
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                {label}
              </label>
              {label === "Message" ? (
                <textarea
                  className="w-full bg-neutral-50 p-4 rounded-xl h-40 outline-none focus:ring-1 ring-black transition-all border border-transparent focus:bg-white resize-none"
                  placeholder="Tell us about your project..."
                />
              ) : (
                <input
                  className="w-full bg-neutral-50 p-4 rounded-xl outline-none focus:ring-1 ring-black transition-all border border-transparent focus:bg-white"
                  placeholder="hello@studio.com"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            variants={fadeUp}
            className="group cursor-pointer flex items-center justify-between bg-black text-white pl-8 pr-2 py-2 rounded-full hover:bg-neutral-800 transition-all  gap-4 w-max "
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Send Message
            </span>
            <div className="bg-white text-black p-2 rounded-full ">
              <ArrowRight size={18} />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
