import React from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaHandshake,
  FaLeaf,
  FaShippingFast,
  FaEye,
  FaBullseye,
} from "react-icons/fa";

const About = () => {
  const features = [
    {
      title: "Premium Products",
      description:
        "High-quality grains, pulses, and oil-bearing seeds from Ethiopia.",
      bgImage: "/about3.jpg",
    },
    {
      title: "Global Reach",
      description:
        "Connecting Ethiopian farmers to international markets reliably.",
      bgImage: "/about4.jpg",
    },
    {
      title: "Trusted Partnerships",
      description:
        "Building long-lasting relationships with farmers and clients.",
      bgImage: "/about5.jpg",
    },
  ];

  const visionMission = [
    {
      title: "Vision",
      description:
        "To become a globally recognized Ethiopian agribusiness brand known for excellence, sustainability, and reliability.",
      icon: FaEye,
    },
    {
      title: "Mission",
      description:
        "To connect Ethiopia’s agricultural resources with global markets through high-quality standards and long-term partnerships.",
      icon: FaBullseye,
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#3E2723] via-[#4B2E2E] to-[#6B4226] text-white px-4 sm:px-6 py-12 sm:py-20 relative overflow-hidden"
    >
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mb-16 sm:mb-20 gap-8 md:gap-12 relative z-10">
        <motion.div
          className="w-full md:w-1/2 h-60 sm:h-80 overflow-hidden rounded-tl-[120px] rounded-br-[120px] shadow-2xl"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/about.jpg"
            alt="About Ethio Amber"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center px-2 sm:px-4 text-center md:text-left"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 drop-shadow-lg mb-4 sm:mb-6">
            About Ethio Amber
          </h1>
          <p className="text-[#F5EDE1] text-sm sm:text-base md:text-lg leading-relaxed mb-3">
            <strong>Ethio Amber Trading</strong> is a privately owned
            agribusiness company in Ethiopia, exporting premium-quality
            agricultural commodities globally, specializing in oilseeds and
            pulses.
          </p>
          <p className="text-[#F5EDE1] text-sm sm:text-base md:text-lg leading-relaxed mb-3">
            We collaborate with farmers and cooperatives to ensure a reliable
            supply chain while maintaining long-term partnerships.
          </p>
          <p className="text-[#F5EDE1] text-sm sm:text-base md:text-lg leading-relaxed">
            Our approach combines sustainable sourcing, advanced handling, and
            strict quality assurance to consistently deliver excellence.
          </p>
        </motion.div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 relative z-10">
        {visionMission.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg bg-gradient-to-br from-[#5c452e] to-[#432f20] backdrop-blur-sm hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <item.icon className="text-3xl sm:text-4xl text-amber-300 mb-3 sm:mb-4 drop-shadow-md" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-amber-200">
              {item.title}
            </h2>
            <p className="text-[#E5DDD5] text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Core Values */}
      <div className="relative z-10 max-w-6xl mx-auto mb-16 sm:mb-20">
        <SectionDivider />
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-amber-400 mb-10 sm:mb-12 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Core Values
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {[
            [
              "Quality First",
              "Ensuring international standards from farm to final export.",
              FaStar,
            ],
            [
              "Integrity",
              "Conducting business with transparency, fairness, and accountability.",
              FaHandshake,
            ],
            [
              "Sustainability",
              "Supporting farmers, communities, and eco-friendly practices.",
              FaLeaf,
            ],
            [
              "Reliability",
              "Guaranteeing consistency, competitive pricing, and timely delivery.",
              FaShippingFast,
            ],
          ].map(([title, desc, Icon], idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center bg-[#3E2723]/40 backdrop-blur-lg p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 shadow-lg hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105"
              whileHover={{ y: -3 }}
            >
              <Icon className="text-3xl sm:text-4xl text-amber-400 mb-2 sm:mb-4 drop-shadow-md" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-400 mb-1 sm:mb-2">
                {title}
              </h3>
              <p className="text-[#E5DDD5] text-xs sm:text-sm md:text-base leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Feature Highlights */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-[#3E2723]/30 backdrop-blur-lg border border-white/10 rounded-t-full rounded-b-2xl overflow-hidden transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <img
              src={feature.bgImage}
              alt={feature.title}
              className="w-full h-44 sm:h-52 object-cover rounded-t-full"
            />
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400 mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-[#F5EDE1] text-xs sm:text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Elegant divider line
const SectionDivider = () => (
  <div className="w-20 sm:w-24 h-[2px] bg-amber-400/70 mx-auto mb-6 sm:mb-8 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
);

export default About;
