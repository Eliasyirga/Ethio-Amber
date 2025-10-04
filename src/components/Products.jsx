import React from "react";
import { motion } from "framer-motion";

const products = [
  { name: "Sesame Seeds", image: "/selit.jpg", category: "Oilseeds" },
  { name: "Niger Seed", image: "/NigerSeed.jpg", category: "Oilseeds" },
  { name: "Linseed", image: "/Linseed.jpg", category: "Oilseeds" },
  { name: "Groundnut", image: "/Peanuts.jpg", category: "Oilseeds" },
  { name: "Sunflower Seed", image: "/SunflowerSeed.jpg", category: "Oilseeds" },
  { name: "Rapeseed", image: "/Rapeseed.jpg", category: "Oilseeds" },
  { name: "Castor Seed", image: "/CastorSeed.jpg", category: "Oilseeds" },
  { name: "Chickpeas", image: "/Chickpeas.jpg", category: "Pulses" },
  {
    name: "Green Mung Beans",
    image: "/GreenMungBeans.jpg",
    category: "Pulses",
  },
  {
    name: "Red Kidney Beans",
    image: "/RedKidneyBeans.jpg",
    category: "Pulses",
  },
  { name: "Haricot Beans", image: "/HaricotBeans.jpg", category: "Pulses" },
  { name: "Pigeon Peas", image: "/PigeonPeas.jpg", category: "Pulses" },
  { name: "Lentils", image: "/Lentils2.jpg", category: "Pulses" },
  { name: "Faba Beans", image: "/FabaBeans.jpg", category: "Pulses" },
  { name: "Soybeans", image: "/Soybeans.jpg", category: "Pulses" },
];

const Products = () => {
  const half = Math.ceil(products.length / 2);
  const firstRow = products.slice(0, half);
  const secondRow = products.slice(half);

  const loopLeftToRight = {
    x: ["-50%", "0%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 80, ease: "linear" },
    },
  };

  const loopRightToLeft = {
    x: ["0%", "-50%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 80, ease: "linear" },
    },
  };

  return (
    <section
      id="products"
      className="bg-gradient-to-b from-[#3E2723] to-[#1B1B1B] py-16 px-2 sm:px-10 overflow-hidden"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-500 text-center mb-14 drop-shadow-xl">
        Our Products
      </h2>

      {/* Two Continuous Rows for All Screens */}
      <div className="space-y-6">
        {/* Row 1: Left → Right */}
        <motion.div className="flex gap-4 w-max" animate={loopLeftToRight}>
          {firstRow.concat(firstRow).map((product, idx) => (
            <Card key={`r1-${idx}`} product={product} />
          ))}
        </motion.div>

        {/* Row 2: Right → Left */}
        <motion.div className="flex gap-4 w-max" animate={loopRightToLeft}>
          {secondRow.concat(secondRow).map((product, idx) => (
            <Card key={`r2-${idx}`} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ product }) => (
  <div
    className="flex-shrink-0 rounded-2xl relative cursor-pointer overflow-hidden w-[160px] sm:w-[220px] md:w-[260px] h-44 sm:h-52 md:h-60"
    style={{
      backgroundImage: `url(${product.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 rounded-2xl" />
    <div className="relative z-10 text-center px-2 py-3 flex flex-col justify-end h-full">
      <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-1">
        {product.name}
      </h3>
      <span className="text-[10px] sm:text-xs font-semibold bg-amber-500/90 text-black px-2 py-0.5 rounded-full self-center">
        {product.category}
      </span>
    </div>
  </div>
);

export default Products;
