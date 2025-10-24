import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Founding() {
  return (
    <motion.div
      data-state="active"
      data-orientation="horizontal"
      role="tabpanel"
      aria-labelledby="radix-:r0:-trigger-founding"
      id="radix-:r0:-content-founding"
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
        <div className="flex items-start gap-4 mb-4">
          <Calendar size={48} />
          <div>
            <h3 className="text-2xl mb-3">Founding</h3>
            <p className="text-gray-700 mb-4">
              The Sculpture Park was founded on{" "}
              <strong>December 10, 2017</strong>, through a landmark
              public-private partnership between the Saat Saath Arts Foundation
              and the Government of Rajasthan.
            </p>
            <p className="text-gray-700">
              Its mission is to create a unique dialogue between contemporary
              art and historic architecture, making art accessible to a wider
              public and promoting India's rich heritage. By placing
              cutting-edge sculptures within a historical palace, the park aims
              to boost cultural tourism and foster a deeper appreciation for
              artistic innovation.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
