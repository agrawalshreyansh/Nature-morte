"use client";

import { motion } from "framer-motion";
import About from "./about/page";
import Vision from "./vision/page";
import Park from "./park/page";
import Visit from "./visit/page";
import Grant from "./grant/page";
import { ChevronDown } from "lucide-react";
export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1633702737935-ca2740a5a537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoZXJpdGFnZSUyMHBhbGFjZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjA4ODUzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Indian Heritage Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            SAAT SAATH <br /> ARTS FOUNDATION
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
            Fostering International Exchange Through Visual Arts
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80 mb-10">
            Since 2010 | New Delhi, India
          </p>

          {/* bouncing chevron */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-6"
          >
            <ChevronDown
              size={36}
              className="text-white/80"
              onClick={() => {
                scrollToSection("about");
              }}
            />
          </motion.div>
        </motion.div>
      </section>
      <About />
      <Vision />
      <Park />
      <Visit />
      <Grant />
    </>
  );
}
