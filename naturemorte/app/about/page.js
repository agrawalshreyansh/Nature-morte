"use client";

import { motion } from "framer-motion";
import { Building2, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-white">
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
            <h2 className="text-4xl lg:text-6xl mb-8">About the Foundation</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  The Saat Saath Arts Foundation, a non-profit initiative
                  founded by Director <strong>Aparajita Jain</strong> in 2010,
                  is dedicated to fostering international exchange between India
                  and the global community through the visual arts and
                  educational programs.
                </p>
                <p className="text-lg mb-6">
                  Headquartered in New Delhi, the foundation collaborates with
                  museums and galleries worldwide to promote contemporary art
                  and support Indian artists on international platforms.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NjA4MTk5NzF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                  alt="Art Gallery Exhibition"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl mb-3">Museum Collaborations</h3>
              <p className="text-gray-600">
                Partnering with leading institutions worldwide to showcase
                contemporary Indian art
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl mb-3">Artist Support</h3>
              <p className="text-gray-600">
                Providing crucial support for exhibitions featuring Indian
                artists globally
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl mb-3">International Exchange</h3>
              <p className="text-gray-600">
                Bridging cultures through visual arts and educational programs
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-lg">
            <h3 className="text-3xl mb-6">Landmark Projects</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl mb-2">
                  Jitish Kallat's "Covering Letter"
                </h4>
                <p className="text-gray-700">CSMVS, Mumbai</p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Bharti Kher's "Matter"</h4>
                <p className="text-gray-700">Vancouver Art Gallery</p>
              </div>
              <div>
                <h4 className="text-xl mb-2">The Sculpture Park</h4>
                <p className="text-gray-700">
                  A pioneering collaboration with the Government of Rajasthan
                  that brings contemporary sculpture to India's magnificent
                  heritage sites
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
