import React from "react";
import {
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-t from-[#3E2723] to-[#1B1B1B] py-16 px-6 sm:px-8 md:px-12 overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-amber-500/10 rounded-full blur-3xl" />

      {/* Glassmorphic content container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-lg">
        {/* Company Info */}
        <div className="space-y-4 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-500">
            Ethio Amber
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Premium Ethiopian products for global markets. We ensure quality,
            sustainability, and reliable export services worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-amber-500 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-300">
            {[
              { label: "Home", id: "home" },
              { label: "Products", id: "products" },
              { label: "About Us", id: "about" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <li
                key={link.id}
                className="hover:text-amber-400 transition cursor-pointer text-sm sm:text-base"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-amber-500 mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center sm:justify-start gap-5 sm:gap-6">
            {[Facebook, Youtube, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-300 hover:text-amber-400 transition transform hover:-translate-y-0.5"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 md:mt-12 pt-4 text-center text-gray-400 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Ethio Amber Import & Export. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
