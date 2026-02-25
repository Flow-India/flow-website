import React from "react";
import { motion } from "framer-motion";

export default function OilSlickBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />

      <motion.div
        animate={{
          background: [
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(0, 255, 255, 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse 80% 50% at 80% 30%, rgba(255, 0, 128, 0.12) 0%, transparent 50%)",
            "radial-gradient(ellipse 80% 50% at 50% 80%, rgba(0, 255, 200, 0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(0, 255, 255, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      <motion.div
        animate={{
          background: [
            "radial-gradient(ellipse 60% 40% at 70% 60%, rgba(128, 0, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(0, 255, 255, 0.12) 0%, transparent 50%)",
            "radial-gradient(ellipse 60% 40% at 60% 20%, rgba(255, 0, 128, 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse 60% 40% at 70% 60%, rgba(128, 0, 255, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      <motion.div
        animate={{
          opacity: [0.03, 0.06, 0.03],
          background: [
            "linear-gradient(135deg, rgba(0,255,255,0.03) 0%, rgba(255,0,128,0.02) 50%, rgba(128,0,255,0.03) 100%)",
            "linear-gradient(135deg, rgba(128,0,255,0.03) 0%, rgba(0,255,200,0.02) 50%, rgba(0,255,255,0.03) 100%)",
            "linear-gradient(135deg, rgba(255,0,128,0.03) 0%, rgba(0,255,255,0.02) 50%, rgba(0,255,200,0.03) 100%)",
            "linear-gradient(135deg, rgba(0,255,255,0.03) 0%, rgba(255,0,128,0.02) 50%, rgba(128,0,255,0.03) 100%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
