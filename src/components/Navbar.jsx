import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  const sections = ["home", "products", "services", "about", "contact"];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#3E2723]/80 border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Text */}
          <div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="/logo.webp"
              alt="Ethio Amber Logo"
              className="w-12 sm:w-16 md:w-20 lg:w-24 object-contain transition-transform duration-500 hover:scale-110"
            />
            <span className="text-white font-bold text-sm sm:text-base md:text-xl lg:text-2xl hover:text-amber-400 transition-colors duration-300 whitespace-nowrap">
              Ethio Amber Trading
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {sections.map((section) => (
              <NavItem
                key={section}
                label={section.charAt(0).toUpperCase() + section.slice(1)}
                onClick={() => scrollToSection(section)}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 hover:text-amber-400 transition-all duration-300 p-2 rounded-full hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#3E2723]/95 backdrop-blur-xl border-t border-white/10 rounded-b-2xl"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col px-6 py-6 space-y-4 text-center">
              {sections.map((section) => (
                <NavItem
                  key={section}
                  label={section.charAt(0).toUpperCase() + section.slice(1)}
                  onClick={() => scrollToSection(section)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// NavItem with animated underline & hover effect
const NavItem = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="relative font-semibold tracking-wide px-3 py-1 text-white hover:text-amber-400 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-400 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
  >
    {label}
  </button>
);

export default NavBar;
