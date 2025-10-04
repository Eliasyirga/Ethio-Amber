import React from "react";
import { motion } from "framer-motion";

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

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#4B2E2E] to-[#6B4226] text-white px-4 sm:px-10 py-8 sm:py-12 relative overflow-hidden"
    >
      {/* Hero Section: left image, right text */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mb-12 sm:mb-20 gap-6 md:gap-10">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 overflow-hidden"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/about.jpg"
            alt="About Ethio Amber"
            className="w-full h-full object-cover rounded-tl-[200px] rounded-br-[200px]"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center px-2 sm:px-4 text-center md:text-left"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#D9B99B] drop-shadow-xl mb-3 sm:mb-4">
            About Ethio Amber
          </h1>
          <p className="text-[#F5EDE1] text-base sm:text-lg md:text-xl leading-relaxed">
            Bridging Ethiopian agriculture with the global market, providing
            premium quality products while supporting sustainable farming.
          </p>
        </motion.div>
      </div>

      {/* Feature Highlights */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-24">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            {/* Card Container */}
            <div className="w-full max-w-sm overflow-hidden flex flex-col items-center">
              {/* Top Circular Image */}
              <div className="w-full overflow-hidden rounded-t-full">
                <img
                  src={feature.bgImage}
                  alt={feature.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="w-full p-6 flex flex-col items-center text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-[#D9B99B] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#F5EDE1] text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
