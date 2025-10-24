import { motion } from "framer-motion";
import { Users } from "lucide-react";
export default function Impact() {
  return (
    <motion.div
      data-state="active"
      data-orientation="horizontal"
      role="tabpanel"
      aria-labelledby="radix-:r0:-trigger-impact"
      id="radix-:r0:-content-impact"
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
        <div className="flex items-start gap-4">
          <Users size={48} />
          <div>
            <h3 className="text-2xl mb-4">Contemporary Impact</h3>
            <p className="text-gray-700 mb-4">
              The Sculpture Park is significantly impacting the contemporary art
              world by democratizing the art experience. By moving art out of
              the conventional "white cube" gallery and into a magnificent
              public heritage site, it has engaged millions of visitors who
              might not otherwise visit a contemporary art museum.
            </p>
            <p className="text-gray-700 mb-4">
              This initiative has successfully positioned Jaipur as a vital hub
              in the global art landscape and has set a precedent for future
              public art projects across India, seamlessly blending the nation's
              past and present.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded">
                <p className="text-3xl mb-2">5</p>
                <p className="text-gray-600">Annual Exhibitions</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded">
                <p className="text-3xl mb-2">Millions</p>
                <p className="text-gray-600">Visitors Engaged</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded">
                <p className="text-3xl mb-2">2</p>
                <p className="text-gray-600">Heritage Sites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
