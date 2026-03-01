"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

export function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div className="bg-gray-50 font-inter rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full cursor-pointer text-left px-6 py-4 md:px-4 flex justify-between items-center"
      >
        <span className=" md:text-lg font-medium">{question}</span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white p-2 rounded-full shadow-sm text-black"
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </motion.span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-6 md:px-4  overflow-hidden"
          >
            <div className="pb-6 leading-relaxed">
              <div className="bg-white p-4 rounded-xl border border-gray-100 ">
                <p className="max-w-xl ">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
