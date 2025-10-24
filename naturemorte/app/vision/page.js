"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section id="vision" className="py-20 lg:py-32 bg-black text-white">
      <motion.div
        className="container mx-auto px-4 lg:px-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl mb-12">India 2025</h2>
          <p className="text-3xl lg:text-5xl mb-8 text-white/90">
            To create the India we believe in.
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </motion.div>
    </section>
  );
}
