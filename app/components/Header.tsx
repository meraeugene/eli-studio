"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { nav_links } from "../data";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

export function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHero, setIsHero] = useState(true);
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      const heroState = currentScrollY < window.innerHeight / 2;
      if (heroState !== isHero) setIsHero(heroState);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHero]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const menuVariants = {
    initial: {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top",
    },
    animate: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.7,
        ease: cubicBezier(0.19, 1, 0.22, 1),
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      transition: {
        duration: 0.4,
        ease: cubicBezier(0.19, 1, 0.22, 1),
      },
    },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between py-2 px-4 md:px-12 2xl:px-54 font-inter
        transition-colors duration-300
        ${isHero && !isOpen ? "bg-transparent text-white" : "bg-white shadow-sm text-black"}
        `}
      >
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tighter cursor-pointer z-110"
        >
          eli
        </Link>

        {/* Desktop UI */}
        <div className="hidden lg:flex gap-6">
          {nav_links.map(({ label, href }: NavLink) => (
            <Link
              prefetch
              key={label}
              href={href}
              className="relative group inline-block w-fit"
            >
              <span className="relative z-10">{label}</span>
              <span className="absolute left-0 bottom-0 h-px w-full bg-current scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
            </Link>
          ))}
        </div>

        <Link
          prefetch
          href="/contact"
          className="hidden lg:block relative cursor-pointer group"
        >
          <span className="relative z-10">Contact Us</span>
          <span className="absolute left-0 bottom-0 h-px w-full bg-current scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
        </Link>

        {/* Proportional Burger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-end w-10 h-10 z-110 relative"
        >
          <div className="flex flex-col gap-1.5 items-end">
            <motion.span
              animate={{
                width: isOpen ? 28 : 32,
                y: isOpen ? 4 : 0,
              }}
              className="h-0.75 bg-current block rounded-full"
            />
            <motion.span
              animate={{
                width: isOpen ? 0 : 20,
                opacity: isOpen ? 0 : 1,
              }}
              className="h-0.75 bg-current block rounded-full"
            />
          </div>
        </button>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-white z-90 lg:hidden flex flex-col px-4 md:px-12 overflow-hidden"
          >
            {/* Centered Navigation Container */}
            <div className="flex-1 flex flex-col justify-center items-start">
              <nav className="flex flex-col gap-10 w-full">
                {[...nav_links, { label: "Contact", href: "/contact" }].map(
                  ({ label, href }, i) => (
                    <motion.div
                      key={label}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3 + i * 0.1,
                        duration: 0.6,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                    >
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className="text-[12vw] md:text-[8vw] font-medium tracking-tighter text-black leading-[0.9] block"
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ),
                )}
              </nav>
            </div>

            {/* Proportional Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pb-4 pt-4 text-xs uppercase tracking-[0.3em] text-gray-400 font-medium"
            >
              © 2026 Eli Studio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
