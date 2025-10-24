import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Evolution() {
  return (
    <motion.div
      data-state="active"
      data-orientation="horizontal"
      role="tabpanel"
      aria-labelledby="radix-:r0:-trigger-evolution"
      id="radix-:r0:-content-evolution"
      tabIndex="0"
      data-slot="tabs-content"
      className="flex-1 outline-none space-y-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: -10 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-start gap-4 mb-6">
          <MapPin size={24} />
          <div>
            <h3 className="text-2xl mb-4">Historical Development</h3>
            <p className="text-gray-700 mb-6">
              Since its inception, The Sculpture Park has evolved significantly,
              establishing itself as a cornerstone of contemporary art in
              Rajasthan.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl mb-2">2017-2024: Madhavendra Palace</h4>
            <p className="text-gray-700">
              The park hosted its first four editions at the Madhavendra Palace,
              Nahargarh Fort, establishing its reputation as a dynamic platform
              for contemporary sculpture.
            </p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl mb-2">January 2025: Jaigarh Fort</h4>
            <p className="text-gray-700">
              Marked a major evolution by moving to the iconic Jaigarh Fort for
              its fifth edition, expanding its scope in collaboration with the
              Jaipur Centre for Art (JCA).
            </p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl mb-2">Exhibitions &amp; Programs</h4>
            <p className="text-gray-700">
              Five major annual exhibitions, each curated by Peter Nagy,
              featuring a diverse roster of leading Indian and international
              artists.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
