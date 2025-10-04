import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#3E2723] to-[#1B1B1B] py-16 sm:py-24 px-4 sm:px-12 overflow-hidden">
      {/* Decorative glowing background circles */}
      <div className="absolute -top-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-amber-600/10 blur-3xl rounded-full" />

      {/* --- Competitive Advantage Section --- */}
      <motion.div
        className="max-w-6xl mx-auto text-gray-200 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14 relative z-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-400 tracking-wide relative inline-block">
            Why Choose Ethio Amber Trading?
            {/* Animated gradient underline */}
            <motion.div
              className="absolute left-1/2 -bottom-3 w-24 sm:w-32 h-[3px] bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full -translate-x-1/2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </h3>
        </div>

        {/* Timeline line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-[6rem] bottom-0 w-[2px] bg-gradient-to-b from-amber-400/40 to-transparent"></div>

        {/* Timeline Cards */}
        <div className="flex flex-col gap-6 sm:gap-8 relative">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              className={`relative flex flex-col md:flex-row items-start md:items-start ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Connector dot (desktop only) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                <div className="relative">
                  <FaCheckCircle className="text-amber-400 text-2xl bg-[#1B1B1B] rounded-full p-1 shadow-[0_0_15px_rgba(251,191,36,0.4)]" />
                  <span className="absolute inset-0 animate-ping bg-amber-500/30 rounded-full" />
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className={`relative group bg-gradient-to-br from-[#4a2c24]/60 to-[#2e1b16]/60 border border-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-amber-500/20 transition-all duration-300 w-full md:w-[45%] ${
                  i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0 md:hidden" />
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100">
                    {adv}
                  </p>
                </div>
                {/* Subtle inner glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-amber-500/5 to-transparent blur-md" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Advantage points
const advantages = [
  "Direct sourcing from farmers and cooperatives ensuring traceability and fair trade.",
  "Strict quality control and grading that guarantees international compliance.",
  "Competitive pricing driven by efficient supply chains and strong sourcing networks.",
  "Sustainable and ethical sourcing practices that empower farmers and protect the environment.",
  "Reliable logistics and documentation support to ensure smooth international trade operations.",
  "Experience and expertise in navigating global commodity trade standards and certifications.",
];

export default Contact;
