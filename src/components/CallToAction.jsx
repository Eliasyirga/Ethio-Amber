import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-r from-[#3E2723] to-[#1B1B1B] py-20 sm:py-28 px-4 sm:px-10 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-60 h-60 sm:w-72 sm:h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 sm:w-96 sm:h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />

      {/* Background overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-2 sm:px-0">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-amber-400 drop-shadow-[0_0_15px_rgba(255,193,7,0.6)]"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ready to Source Premium Ethiopian Products?
        </motion.h2>

        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Partner with us to bring high-quality oilseeds, pulses, grains, and
          nuts to your markets worldwide. Let’s grow together.
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-black font-bold px-6 sm:px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
