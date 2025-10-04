import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSeedling } from "react-icons/fa";
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
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
    exit: { opacity: 0, y: -40, transition: { duration: 0.3 } },
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl shadow-xl bg-[#3E2723]/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <FaSeedling className="text-amber-500 text-3xl sm:text-4xl transition-transform duration-500 group-hover:rotate-12 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
            <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
              Ethio Amber
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {["home", "products", "services", "about", "contact"].map(
              (section) => (
                <NavItem
                  key={section}
                  label={section.charAt(0).toUpperCase() + section.slice(1)}
                  onClick={() => scrollToSection(section)}
                />
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 hover:text-amber-500 transition-all duration-300 p-2 rounded-full hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#3E2723]/95 backdrop-blur-xl border-t border-white/10 shadow-xl rounded-b-2xl"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col px-5 py-6 space-y-4 text-center">
              {["home", "about", "products", "services", "contact"].map(
                (section) => (
                  <NavItem
                    key={section}
                    label={section.charAt(0).toUpperCase() + section.slice(1)}
                    onClick={() => scrollToSection(section)}
                  />
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Nav Item with animated underline
const NavItem = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="relative font-semibold tracking-wide px-3 py-1 transition-all duration-300 text-white hover:text-amber-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
  >
    {label}
  </button>
);

export default NavBar;
