import React, { useState, useEffect } from "react";
import { FaGlobeAfrica, FaSeedling, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  const diamondImages = [
    "/SesameSeeds.jpg",
    "/Chickpeas.webp",
    "/Lentils.webp",
    "/nuts.jpg",
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calcOffset = (factor) => ({
    x: (mousePos.x - window.innerWidth / 2) * factor,
    y: (mousePos.y - window.innerHeight / 2) * factor,
  });

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-center overflow-hidden px-6 sm:px-10 py-20 lg:py-28 min-h-screen"
      style={{
        backgroundImage: `url('/back.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3E2723]/90 via-[#5D4037]/70 to-[#1B1B1B]/90 z-0" />

      {/* Particle Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-full bg-[url('/particles.png')] bg-repeat opacity-30 animate-[spin_120s_linear_infinite]" />
      </div>

      {/* Left Content */}
      <div className="relative z-20 max-w-3xl lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-12">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-snug drop-shadow-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          Empowering{" "}
          <span className="text-amber-500 drop-shadow-lg">Ethiopian Trade</span>{" "}
          with
          <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">
            Integrity, Quality & Global Reach
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-200 mb-10 max-w-xl drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Ethio Amber Trading bridges Ethiopian agriculture with the global
          market delivering grains, pulses, and oil-bearing seeds with
          excellence, sustainability, and trust.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {/* Scroll to Products Section */}
          <button
            onClick={() => {
              const productsSection = document.getElementById("products");
              productsSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-[0_0_50px_rgba(245,158,11,0.8)] transition-all duration-300"
          >
            Explore Products
          </button>
        </motion.div>
      </div>

      {/* Right Side - Floating Diamonds */}
      <div className="hidden lg:flex w-1/2 justify-center items-center mt-12 lg:mt-0 relative z-20">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 rotate-45">
          {diamondImages.map((img, i) => {
            const offset = calcOffset((i + 1) * 0.002);
            return (
              <motion.div
                key={i}
                className="w-52 h-52 bg-cover bg-center shadow-[0_0_25px_rgba(245,158,11,0.6)] rounded-2xl border-2 border-amber-400 backdrop-blur-md transition-all hover:shadow-[0_0_50px_rgba(245,158,11,0.8)] hover:scale-110 hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${img})`,
                  x: offset.x,
                  y: offset.y - scrollY * 0.05,
                }}
                initial={{ scale: 0.8, opacity: 0, y: -30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.12, rotate: 5, translateY: -10 }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Feature row component
export const FeatureRow = () => (
  <motion.div
    className="flex flex-wrap justify-center gap-6 mt-12 text-amber-500 px-6 sm:px-10"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    }}
  >
    <Feature icon={FaGlobeAfrica} label="Global Export Reach" />
    <Feature icon={FaHandshake} label="Trusted Partnerships" />
    <Feature icon={FaSeedling} label="Sustainable Sourcing" />
  </motion.div>
);

const Feature = ({ icon: Icon, label }) => (
  <motion.div
    className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:shadow-amber-500/50 hover:bg-white/20 transition-all duration-300"
    whileHover={{ scale: 1.15, y: -8 }}
  >
    <Icon className="text-4xl mb-2 drop-shadow-md" />
    <p className="text-sm sm:text-base font-semibold text-gray-100 text-center">
      {label}
    </p>
  </motion.div>
);

export default HeroSection;
