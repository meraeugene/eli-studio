"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { nav_links } from "@/app/data";

export function WhiteHeader() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, show]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-2 px-54 font-inter
      transition-colors duration-300 bg-white text-black shadow-md"
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-3xl font-extrabold tracking-tighter cursor-pointer"
      >
        eli
      </Link>

      {/* Links */}
      <div className="hidden md:flex gap-6 ">
        {nav_links.map(({ label, href }) => (
          <Link
            prefetch
            key={label}
            href={href}
            className="relative group inline-block w-fit"
          >
            <span className="relative z-10">{label}</span>

            <span
              className="
        absolute left-0 bottom-0 h-px w-full
        bg-current
        scale-x-0
        origin-right
        group-hover:origin-left
        group-hover:scale-x-100
        transition-transform duration-300 ease-in-out
      "
            />
          </Link>
        ))}
      </div>

      {/* Contact */}
      <Link prefetch href="/contact" className="relative  cursor-pointer group">
        <span className="relative z-10">Contact Us</span>
        <span
          className={`
            absolute left-0 bottom-0 h-px w-full
            bg-current
            scale-x-0
            origin-right
            group-hover:origin-left
            group-hover:scale-x-100
            transition-transform duration-300 ease-in-out
          `}
        />
      </Link>
    </motion.header>
  );
}
