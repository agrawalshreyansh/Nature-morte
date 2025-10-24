"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Evolution from "@/components/park/Evolution.jsx";
import Founding from "@/components/park/Founding.jsx";
import Impact from "@/components/park/Impact.jsx";
import Support from "@/components/park/Support.jsx";

export default function Park() {
  const [activeTab, setActiveTab] = useState("founding");

  const tabs = ["founding", "evolution", "impact", "support"];
  const tabElements = {
    founding: <Founding />,
    evolution: <Evolution />,
    impact: <Impact />,
    support: <Support />,
  };
  return (
    <section
      id="sculpture-park"
      className="pt-24 pb-20 lg:py-32 bg-gray-50 relative z-10 container mx-auto px-4"
    >
      <motion.div
        className="container mx-auto px-4 lg:px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-6xl mb-6">The Sculpture Park</h2>
            <p className="text-xl text-gray-700 max-w-3xl">
              A landmark public-private partnership creating unique dialogue
              between contemporary art and historic architecture in Rajasthan's
              heritage sites.
            </p>
          </div>

          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl mb-16">
            <img
              src="https://images.unsplash.com/photo-1651569411954-b843950d0c1e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWlwdXIlMjBmb3J0JTIwcmFqYXN0aGFufGVufDF8fHx8MTc2MDg4NTMyMnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              alt="Jaipur Fort Rajasthan"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tabs */}
          <div
            dir="ltr"
            data-orientation="horizontal"
            data-slot="tabs"
            className="flex flex-col gap-2 mb-16"
          >
            <div
              role="tablist"
              aria-orientation="horizontal"
              data-slot="tabs-list"
              className="bg-muted text-muted-foreground h-9 items-center justify-center rounded-xl p-[3px] grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-gray-100"
              tabIndex={0}
              data-orientation="horizontal"
              style={{ outline: "none" }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  data-state={activeTab === tab ? "active" : "inactive"}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow,background-color]
                    ${
                      activeTab === tab
                        ? "bg-white text-black shadow-sm"
                        : "text-black hover:bg-gray-100"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {tabElements[activeTab]}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
