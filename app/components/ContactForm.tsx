"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "../data";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ContactForm = () => {
  return (
    <div className="w-full px-54 py-36 bg-white">
      {/* Top Label */}
      <motion.div
        className="inline-flex items-center gap-2 bg-gray-100 p-2 rounded-full text-sm mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
      >
        <span className="bg-black text-white rounded-full p-1">
          <ArrowRight size={12} className="-rotate-45" />
        </span>
        Contact Us
      </motion.div>

      {/* Main Flex Content */}
      <div className="flex flex-col lg:flex-row gap-24">
        {/* Left Column */}
        <motion.div
          className="lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
        >
          <h2 className="text-7xl font-semibold tracking-tighter mb-8">
            Get In Touch
          </h2>
          <p className="text-gray-700 text-xl max-w-md mb-16">
            Get in touch to discuss your project, collaborations, or general
            enquiries.
          </p>

          <div className="space-y-8 text-sm">
            {contactInfo.map((item) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                variants={fadeUp}
              >
                <p className="text-gray-400 mb-2 uppercase tracking-widest">
                  {item.label} :
                </p>
                {item.type === "link" ? (
                  <Link
                    href={item.href}
                    className="text-xl underline underline-offset-8"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="text-xl whitespace-pre-line">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column (Form) */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-2 gap-4">
            {["First Name", "Last Name"].map((label) => (
              <motion.div
                key={label}
                className="space-y-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                variants={fadeUp}
              >
                <label className="text-sm">{label}</label>
                <input
                  className="w-full bg-gray-50 p-4 rounded-md outline-none focus:ring-1 ring-black"
                  placeholder={label === "First Name" ? "Andrew" : "Villalon"}
                />
              </motion.div>
            ))}
          </div>

          {["Email", "Message"].map((label) => (
            <motion.div
              key={label}
              className="space-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeUp}
            >
              <label className="text-sm">{label}</label>
              {label === "Message" ? (
                <textarea
                  className="w-full bg-gray-50 p-4 rounded-md h-32 outline-none focus:ring-1 ring-black"
                  placeholder="Message"
                />
              ) : (
                <input
                  className="w-full bg-gray-50 p-4 rounded-md outline-none focus:ring-1 ring-black"
                  placeholder="andrew@framer.com"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            className="flex items-center gap-3 bg-black text-white p-3  pr-4 rounded-full hover:bg-gray-800 cursor-pointer transition-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ArrowRight className="bg-white text-black p-1 rounded-full" />
            <span className="text-sm  tracking-widest">Submit</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
