import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Sesame Seeds (ሰሊጥ)",
    image: "/selit.jpg",
    description: "High-quality Ethiopian sesame seeds for global markets.",
    category: "Oilseeds",
  },
  {
    name: "Chickpeas (ሽምብራ)",
    image: "/Chickpeas.jpg",
    description: "Premium chickpeas sourced sustainably from local farmers.",
    category: "Pulses",
  },
  {
    name: "Lentils (ምስር)",
    image: "/Lentils.jpg",
    description: "Nutritious and organic Ethiopian lentils.",
    category: "Pulses",
  },
  {
    name: "Sorghum (ማሸላ)",
    image: "/Sorghum.jpg",
    description: "Versatile sorghum for food and beverage industries.",
    category: "Grain",
  },
  {
    name: "Maize (በቆሎ)",
    image: "/Maize.jpg",
    description: "High-yield Ethiopian maize for export and local use.",
    category: "Grain",
  },
  {
    name: "Peanuts (ለውዝ)",
    image: "/Peanuts.jpg",
    description: "Rich, organic peanuts with excellent taste and oil content.",
    category: "Nuts",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="min-h-screen bg-gradient-to-b from-[#3E2723] to-[#1B1B1B] py-16 px-2 sm:px-10"
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-center text-amber-500 mb-14 drop-shadow-xl"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our Products
      </motion.h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 w-full max-w-full mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col justify-end items-center rounded-2xl shadow-xl p-4 sm:p-8 h-[220px] sm:h-[360px] lg:h-[380px] w-full cursor-pointer transition-all duration-500 group hover:shadow-amber-500/60 overflow-hidden"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 rounded-2xl" />

            {/* Card Content */}
            <div className="relative z-10 text-center px-1 sm:px-0">
              <h3 className="font-bold text-white mb-1 text-sm sm:text-xl drop-shadow-lg">
                {product.name}
              </h3>
              <p className="text-gray-200 text-xs sm:text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Category Badge */}
            <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-amber-500/90 text-black text-[10px] sm:text-sm font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg z-10">
              {product.category}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
