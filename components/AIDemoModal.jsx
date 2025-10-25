import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, X } from "lucide-react";

export default function AIDemoModal({ showModal, setShowModal }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const demoCategories = {
    Gym: { name: "FitLife Gym", number: "+1 (555) 123-4567" },
    Dentist: { name: "SmileCare Dental", number: "+1 (555) 456-7890" },
    Barber: { name: "Classic Cuts Barbershop", number: "+1 (555) 789-0123" }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-6 sm:p-8 max-w-md w-full border-2 border-[#00FFFF]/30"
            style={{ boxShadow: "0 0 50px rgba(0, 255, 255, 0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[#00FFFF] to-[#00FF99] bg-clip-text text-transparent">
                  AI Demo
                </span>
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                You can call these numbers to check demo
              </p>
            </div>

            {/* Demo Categories */}
            <div className="space-y-6">
              {/* Category Selection */}
              <div>
                <label className="block text-white/80 mb-3 text-sm font-medium">
                  Choose Category
                </label>
                <div className="flex gap-2 flex-wrap">
                  {Object.keys(demoCategories).map((category) => (
                    <button
                      type="button"
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? "bg-[#00FFFF] text-black border-[#00FFFF]"
                          : "bg-[#2a2a2a] text-white/80 border-[#00FFFF]/30 hover:border-[#00FFFF]/50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone Number Display */}
              {selectedCategory && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <h4 className="text-white font-semibold text-lg mb-4">
                    {selectedCategory} Demo Number
                  </h4>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#2a2a2a] border border-[#00FFFF]/30 rounded-lg p-4 hover:border-[#00FFFF]/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-white font-medium text-sm">
                          {demoCategories[selectedCategory].name}
                        </h5>
                        <p className="text-[#00FFFF] font-mono text-sm">
                          {demoCategories[selectedCategory].number}
                        </p>
                      </div>
                      <motion.a
                        href={`tel:${demoCategories[selectedCategory].number.replace(/\D/g, '')}`}
                        className="bg-[#00FFFF] text-black p-2 rounded-full hover:bg-[#00FF99] transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Phone size={16} />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>


            {/* Close Button */}
            <motion.button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
