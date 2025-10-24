"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const pages = [
    "About",
    "Sculpture Park",
    "Visit",
    "Curatorial Grant",
    "Vision",
  ];
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Main bar */}
      <div className="flex justify-between items-center px-8 h-20">
        <h1 className="text-lg font-medium tracking-wide">SAAT SAATH ARTS</h1>

        <button
          onClick={() => setOpen(true)}
          className="p-3 rounded-xl hover:bg-gray-200 transition-all md:hidden"
        >
          <Menu className="w-5 h-5 text-gray-800" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() =>
                scrollToSection(page.split(" ").at(-1).toLowerCase())
              }
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              {page}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute pb-10 top-0 left-0 right-0 bg-white z-50 flex flex-col border-b"
          >
            <div className="flex justify-between items-center px-8 h-20">
              <h1 className="text-lg font-medium tracking-wide">
                SAAT SAATH ARTS
              </h1>
              <button
                onClick={() => setOpen(false)}
                className="p-3 rounded-xl hover:bg-gray-200 transition-all"
              >
                <X className="w-5 h-5 text-gray-800" />
              </button>
            </div>
            <hr className="border-gray-200 mx-8" />

            <nav className="flex flex-col gap-8 px-8 pt-8">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() =>
                    scrollToSection(page.split(" ").at(-1).toLowerCase())
                  }
                  className="text-lg font-semibold text-gray-900 text-left hover:text-gray-600 transition-colors"
                >
                  {page}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
