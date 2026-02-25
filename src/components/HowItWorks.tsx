import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Car } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Choose Your Route",
    description:
      "Select your home-to-office route from our available networks.",
    number: "01",
  },
  {
    icon: Calendar,
    title: "Subscribe Monthly",
    description: "Pick a fixed monthly commuting plan that fits your schedule.",
    number: "02",
  },
  {
    icon: Car,
    title: "Ride Daily",
    description:
      "Travel comfortably with verified co-passengers heading your way.",
    number: "03",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three Steps to Better Commuting
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Simple, predictable, and affordable. Flow makes your daily commute
            something you no longer dread.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

              <div className="relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all duration-300 h-full">
                <span className="font-mono text-6xl text-cyan-500/20 absolute top-4 right-6">
                  {step.number}
                </span>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
