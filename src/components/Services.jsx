import React from "react";
import { FaShippingFast, FaLeaf, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: FaShippingFast,
    title: "Fast & Reliable Shipping",
    description:
      "Delivering Ethiopian products across the globe with speed and reliability.",
  },
  {
    id: 2,
    icon: FaLeaf,
    title: "Sustainable Farming",
    description:
      "Supporting eco-friendly farming practices for quality and sustainability.",
  },
  {
    id: 3,
    icon: FaHandshake,
    title: "Trusted Partnerships",
    description:
      "Building long-lasting relationships with local farmers and international clients.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-[#3E2723] via-[#2C1C1C] to-[#1B1B1B] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        {/* Section Header */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-10 sm:mb-12 text-center text-amber-500 drop-shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative bg-[#3E2723]/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xl sm:shadow-2xl transition-all duration-500 hover:shadow-amber-500/60"
              whileHover={{ scale: 1.05, y: -3 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg bg-gradient-to-tr from-amber-500/70 to-amber-400/40 backdrop-blur-sm">
                <service.icon className="text-3xl sm:text-4xl text-white drop-shadow-[0_0_12px_rgba(245,158,11,0.7)]" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white drop-shadow-md">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
