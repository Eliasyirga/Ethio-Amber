import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-t from-[#1B1B1B] via-[#2C1A14] to-[#3E2723] py-16 sm:py-20 px-4 sm:px-10 md:px-16 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-16 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-14 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[0_8px_25px_rgba(0,0,0,0.2)]">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-500 mb-3 sm:mb-4 tracking-wide">
            Ethio Amber
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Delivering Ethiopia’s finest agricultural and natural products to
            global markets — sustainably and ethically.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-amber-400 mb-3 sm:mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            {[
              { label: "Home", id: "home" },
              { label: "Products", id: "products" },
              { label: "About", id: "about" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <li
                key={link.id}
                className="hover:text-amber-400 cursor-pointer transition-colors duration-300"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-amber-400 mb-3 sm:mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            <li className="flex items-center gap-2 sm:gap-3">
              <MapPin className="w-4 h-4 text-amber-400" />
              Addis Ababa, Ethiopia
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Phone className="w-4 h-4 text-amber-400" /> +251 911 572 382
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Mail className="w-4 h-4 text-amber-400" />
              <a
                href="mailto:netsanetyrg@gmail.com"
                className="hover:text-amber-400 transition-colors"
              >
                netsanetyrg@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-amber-400 mb-3 sm:mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center sm:justify-start gap-4 sm:gap-5">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="relative group text-gray-300 hover:text-amber-400 transition transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-amber-400/10 scale-0 group-hover:scale-100 rounded-full blur-md transition-all duration-300" />
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 sm:mt-12 text-center border-t border-white/10 pt-4 sm:pt-6 text-gray-400 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-amber-400 font-medium">Ethio Amber Trading</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
