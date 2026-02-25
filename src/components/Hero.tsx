import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Car, Shield, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            Coming Soon
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
            Your Daily Office Commute,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500">
              Simplified.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Affordable, reliable shared cab rides for working professionals.
            Subscribe to your route, ride daily, save money.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.a
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-cyan-500 text-black font-semibold text-lg rounded-xl flex items-center gap-2 hover:bg-cyan-400 transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#for-drivers"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-gray-700 text-white font-semibold text-lg rounded-xl hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-200"
            >
              Become a Driver Partner
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Car, label: "Shared Cab Pooling", value: "Route-based" },
            {
              icon: Shield,
              label: "Verified Co-passengers",
              value: "100% Safe",
            },
            { icon: Clock, label: "Fixed Pickup Times", value: "On Time" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
            >
              <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
