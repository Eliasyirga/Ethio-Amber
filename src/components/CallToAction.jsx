import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#2C1E1B] via-[#3E2723] to-[#1B1B1B] text-white">
      {/* Decorative Ambient Blobs */}
      <div className="absolute -top-24 -left-24 w-56 h-56 sm:w-72 sm:h-72 bg-amber-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-amber-600/20 blur-3xl rounded-full animate-pulse" />

      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/action.jpg"
          alt="Ethio Amber Export"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#1B1B1B]/90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl sm:max-w-5xl mx-auto text-center px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-400 mb-4 sm:mb-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Expanding Global Presence
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ethio Amber Trading exports to Asia, the Middle East, Europe, and
          Africa — proudly representing the richness of Ethiopian-origin
          commodities worldwide. Our reputation is built on authenticity,
          consistent quality, and sustainable trade partnerships.
        </motion.p>

        {/* Call To Action Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <button
            onClick={scrollToContact}
            className="relative group bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-black font-bold px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full shadow-lg transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 text-sm sm:text-base md:text-lg">
              Get in Touch
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-300/0 via-white/20 to-amber-300/0 blur-md opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Floating Sparkle Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full blur-sm"
          animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-amber-300 rounded-full blur-md"
          animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default CallToAction;
