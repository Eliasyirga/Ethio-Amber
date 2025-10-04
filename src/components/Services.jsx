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
      className="py-16 sm:py-20 bg-gradient-to-b from-[#3E2723] via-[#2C1C1C] to-[#1B1B1B] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-amber-500 mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-[#3E2723]/80 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-amber-500/40 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 80 }}
            >
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center mb-4 rounded-full bg-gradient-to-tr from-amber-500/60 to-amber-400/40 shadow-md">
                <service.icon className="text-3xl sm:text-4xl text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 text-sm sm:text-base">
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
