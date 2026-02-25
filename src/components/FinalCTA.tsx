import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="join" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />

          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Change Your Commute?
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                  Join thousands of professionals who&apos;ve already switched
                  to smarter, stress-free daily commuting. Sign up for early
                  access now.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
                  >
                    Join Flow
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <PlayCircle className="w-4 h-4" />
                    <span>Coming Soon on Play Store</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
