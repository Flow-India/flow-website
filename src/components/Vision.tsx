import React from "react";
import { motion } from "framer-motion";
import { Leaf, Globe, Zap } from "lucide-react";

export default function Vision() {
  return (
    <section id="vision" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            Our Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Urban Mobility
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Flow aims to revolutionize how millions of professionals commute
            daily. We believe in creating a sustainable, efficient, and
            stress-free transportation ecosystem that benefits everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: "Reduce Traffic",
              description:
                "Every shared ride takes cars off the road. Together, we can significantly reduce urban congestion.",
              stat: "30%",
              statLabel: "Traffic Reduction Target",
            },
            {
              icon: Globe,
              title: "Sustainable Future",
              description:
                "Shared mobility is the key to reducing carbon emissions and creating greener cities.",
              stat: "50K+",
              statLabel: "Trees Equivalent Saved",
            },
            {
              icon: Zap,
              title: "Smart Cities",
              description:
                "We're building the infrastructure for tomorrow's intelligent transportation networks.",
              stat: "100+",
              statLabel: "Routes Planned",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative p-8 bg-white/5 border border-white/10 rounded-3xl h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-cyan-400">
                      {item.stat}
                    </p>
                    <p className="text-xs text-gray-500">{item.statLabel}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
