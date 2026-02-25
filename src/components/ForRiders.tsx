import React from "react";
import { motion } from "framer-motion";
import { Smartphone, UserCheck, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Easy App Booking",
    description:
      "Book your daily ride with just a few taps. Real-time tracking and updates.",
  },
  {
    icon: UserCheck,
    title: "Verified Co-Passengers",
    description:
      "All riders are verified professionals. Know who you&apos;re sharing your ride with.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Emergency support, ride tracking, and driver verification for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Fixed Schedule",
    description:
      "No more waiting. Your cab arrives at the same time every morning.",
  },
];

export default function ForRiders() {
  return (
    <section id="for-riders" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-4 block">
              For Riders
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Daily Commuting, <span className="text-cyan-400">Reimagined</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Forget the stress of unpredictable transport, expensive cabs, and
              uncomfortable public buses. Flow gives you a premium commuting
              experience at a fraction of the cost.
            </p>

            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl" />

            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-400 text-sm">Your Flow Ride</span>
                  <span className="text-cyan-400 text-sm font-mono">
                    ON TIME
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Pickup</p>
                      <p className="font-medium">Home • 8:00 AM</p>
                    </div>
                  </div>

                  <div className="ml-5 pl-5 border-l-2 border-dashed border-gray-700">
                    <div className="h-8" />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Drop-off</p>
                      <p className="font-medium">Office • 8:45 AM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div>
                    <p className="text-xs text-gray-500">Monthly Plan</p>
                    <p className="text-xl font-bold text-cyan-400">₹2,499/mo</p>
                  </div>
                  <div className="px-4 py-2 bg-cyan-500/20 rounded-lg">
                    <p className="text-xs text-cyan-400">Save 40%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
