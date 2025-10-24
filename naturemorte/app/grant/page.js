"use client";
import { motion } from "framer-motion";
import { Award, Calendar, CircleCheck } from "lucide-react";

export default function Grant() {
  return (
    <section id="grant" className="py-20 lg:py-32 bg-white">
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
            <h2 className="text-4xl lg:text-6xl mb-6 font-semibold">
              SSA-IAF Curatorial Research Grant
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl font-semibold">
              Fostering deep, long-term engagement between visionary
              international curators and India's contemporary art landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1707578087102-92520fda8f97?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBzY3VscHR1cmV8ZW58MXx8fHwxNzYwODg0NzI2fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                alt="Contemporary Art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 mb-4">
                <Award size={32} />
                <h3 className="text-3xl font-semibold">About the Grant</h3>
              </div>
              <p className="text-gray-700 mb-4 font-semibold">
                First launched in <strong>February 2015</strong>, the Saat Saath
                Curatorial Research Grant is a major initiative designed to
                foster deep, long-term engagement between visionary
                international curators and India's contemporary art landscape.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                Conceived by <strong>Aparajita Jain</strong> and{" "}
                <strong>Diana Campbell Betancourt</strong>, the grant provides
                resources for bespoke research trips, offering unparalleled
                access to artists, private collections, and institutions.
              </p>
            </div>
          </div>
          <div className="bg-black text-white p-8 lg:p-12 rounded-lg mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Calendar size={32} />
              <h3 className="text-3xl">2025-2026 Grant Cycle</h3>
            </div>
            <div className="mb-6">
              <span
                data-slot="badge"
                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0  gap-1  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground mb-4 bg-white text-black"
              >
                Partnership with India Art Fair
              </span>
              <p className="text-lg text-white mb-4">
                In an exciting new chapter, Saat Saath Arts has partnered with
                the India Art Fair (IAF) for the 2025-2026 grant.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CircleCheck size={20} color="grey" />
                <div>
                  <p className="mb-1">Application Deadline</p>
                  <p className="text-white/80">August 31, 2025</p>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground mt-2 border-white/30 text-white"
                  >
                    Closed
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck size={20} color="grey" />
                <div>
                  <p className="mb-1">Interviews</p>
                  <p className="text-white/80">September 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck size={20} color="grey" />
                <div>
                  <p className="mb-1">Announcement</p>
                  <p className="text-white/80">Early October 2025</p>
                </div>
              </div>
            </div>
            <p className="text-white/90 mt-6">
              The grantee will embark on a research trip in{" "}
              <strong>February 2026</strong>.
            </p>
          </div>
          <div className="mb-16">
            <h3 className="text-3xl mb-8 font-semibold">
              Distinguished Jury 2025-2026
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl mb-2 text-black font-semibold">
                  Kamini Sawhney
                </h4>
                <p className="text-gray-600">
                  Independent Curator; Head, Public Arts Projects, BlrHubba
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl mb-2 font-semibold">Sandhini Poddar</h4>
                <p className="text-gray-600">
                  Independent Curator &amp; Art Historian; Adjunct
                  Curator-at-Large, Guggenheim, Abu Dhabi
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl mb-2 font-semibold">Dhyandra Lawson</h4>
                <p className="text-gray-600">
                  Andy Song Associate Curator, Contemporary Art, LACMA
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl mb-2 font-semibold">Nawar Al Qassimi</h4>
                <p className="text-gray-600">
                  Vice President, Sharjah Art Foundation
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl mb-2 font-semibold">Jitish Kallat</h4>
                <p className="text-gray-600">
                  Contemporary Artist; Curator, Kochi-Muziris Biennale
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl mb-8 font-semibold">
              Past Winners (2015-2022)
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-3xl mb-3 font-semibold">2015</p>
                <h4 className="text-lg mb-2 font-semibold">Catherine David</h4>
                <p className="text-sm text-gray-600">
                  Deputy Director, Centre Pompidou, Paris
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-3xl mb-3 font-semibold">2016</p>
                <h4 className="text-lg mb-2 font-semibold">Lauren Cornell</h4>
                <p className="text-sm text-gray-600">
                  Curator, New Museum, New York
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-3xl mb-3 font-semibold">2017</p>
                <h4 className="text-lg mb-2 font-semibold">Rachel Kent</h4>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-3xl mb-3 font-semibold">2018</p>
                <h4 className="text-lg mb-2 font-semibold">
                  Dieter Roelstraete
                </h4>
                <p className="text-sm text-gray-600">
                  Member of dOCUMENTA14 team
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-3xl mb-3 font-semibold">2019</p>
                <h4 className="text-lg mb-2">Helen Pheby</h4>
                <p className="text-sm text-gray-600">
                  Senior Curator, Yorkshire Sculpture Park
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-3xl mb-3 font-semibold">2020</p>
                <h4 className="text-lg mb-2 font-semibold">Laura Raicovich</h4>
                <p className="text-sm text-gray-600">
                  Director of Global Initiatives, Creative Time, NY
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-3xl mb-3 font-semibold">2021</p>
                <h4 className="text-lg mb-2 font-semibold">Diana Freundl</h4>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-3xl mb-3 font-semibold">2022</p>
                <h4 className="text-lg mb-2 font-semibold">Nora Lawrence</h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
