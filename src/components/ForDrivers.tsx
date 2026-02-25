import React from "react";
import { motion } from "framer-motion";
import { Wallet, MapPin, Shield, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Stable Income",
    description: "Fixed daily routes mean predictable earnings every month.",
  },
  {
    icon: MapPin,
    title: "Fixed Routes",
    description: "No more wandering. Know your pickup points in advance.",
  },
  {
    icon: Shield,
    title: "Verified Passengers",
    description: "Only work with verified professionals, reducing risks.",
  },
  {
    icon: TrendingUp,
    title: "Growing Demand",
    description: "Be part of a growing network with consistent booking demand.",
  },
];

export default function ForDrivers() {
  return (
    <section id="for-drivers" className="relative py-24 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />

              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400 text-sm">
                      Driver Partner
                    </span>
                    <span className="text-green-400 text-sm font-mono">
                      ACTIVE
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">
                        Today&apos;s Rides
                      </p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Earnings</p>
                      <p className="text-2xl font-bold text-green-400">
                        ₹2,450
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Route</span>
                      <span className="font-medium">Koramangala → MG Road</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Next Pickup</span>
                      <span className="font-medium">8:15 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-4 block">
              For Drivers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Earn With <span className="text-cyan-400">Fixed Routes</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Join Flow as a driver partner and enjoy stable income with fixed
              routes and predictable daily demand. No more chasing passengers or
              uncertain earnings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                    <benefit.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
