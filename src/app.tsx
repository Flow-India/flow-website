import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyFlow from "./components/WhyFlow";
import ForRiders from "./components/ForRiders";
import ForDrivers from "./components/ForDrivers";
import Vision from "./components/Vision";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import OilSlickBackground from "./components/OilSlickBackground";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <OilSlickBackground />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyFlow />
        <ForRiders />
        <ForDrivers />
        <Vision />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
