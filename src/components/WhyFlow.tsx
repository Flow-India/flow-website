import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Sofa, Clock, Users, Sparkles, Route } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Lower Cost Than Daily Cabs",
    description:
      "Save up to 40% compared to private cabs with our shared pool model.",
  },
  {
    icon: Sofa,
    title: "More Comfortable Than Public Transport",
    description:
      "Air-conditioned cabs with comfortable seating, no crowds, no stress.",
  },
  {
    icon: Clock,
    title: "Reliable Pickup Times",
    description: "Fixed schedules mean you always know when your ride arrives.",
  },
  {
    icon: Users,
    title: "Community-Based Commuting",
    description: "Connect with like-minded professionals heading the same way.",
  },
  {
    icon: Route,
    title: "Time-Saving & Predictable",
    description:
      "Optimized routes ensure the fastest commute without traffic worries.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description:
      "Well-maintained vehicles, verified drivers, and a seamless app experience.",
  },
];

export default function WhyFlow() {
  return (
    <section id="why-flow" className="relative py-24 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            Why Flow
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Smarter Way to Commute
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We&apos;ve reimagined daily commuting to make it affordable,
            comfortable, and something you actually look forward to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-cyan-400" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
