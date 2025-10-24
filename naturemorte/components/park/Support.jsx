import { motion } from "framer-motion";
import { Building } from "lucide-react";

export default function Support() {
  return (
    <motion.div
      data-state="active"
      data-orientation="horizontal"
      role="tabpanel"
      aria-labelledby="radix-:r0:-trigger-support"
      id="radix-:r0:-content-support"
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
          <Building size={24} />
          <div>
            <h3 className="text-2xl mb-4">Support and Funding</h3>
            <p className="text-gray-700 mb-6">
              The park's continued growth and success are made possible by its
              unique and robust public-private partnership model.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl mb-3">Government Support</h4>
            <p className="text-gray-700">
              The Government of Rajasthan provides the heritage venues and
              logistical support.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl mb-3">Corporate and Private Funding</h4>
            <p className="text-gray-700">
              Generous donations and partnerships with corporate sponsors (such
              as INOX and Borosil for the 5th edition) and private individuals
              are crucial for its operation.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl mb-3">Gallery Partnerships</h4>
            <p className="text-gray-700">
              Leading national and international galleries support the
              participation of their artists, contributing to the high caliber
              of the exhibitions.
            </p>
          </div>
        </div>
        <p className="text-gray-700 mt-6 italic">
          This collaborative funding structure ensures the foundation can
          continue its mission of nurturing artistic innovation in a public,
          non-commercial space.
        </p>
      </div>
    </motion.div>
  );
}
