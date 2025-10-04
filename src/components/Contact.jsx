import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-[#3E2723] to-[#1B1B1B] py-20 px-6 sm:px-12"
    >
      {/* Section Heading */}
      {isDesktop ? (
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-amber-500 mb-12 sm:mb-16 tracking-wider drop-shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
      ) : (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-amber-500 mb-12 sm:mb-16 tracking-wider drop-shadow-lg">
          Get in Touch
        </h2>
      )}

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Info Side */}
        {isDesktop ? (
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-gray-200"
          >
            <ContactInfo />
          </motion.div>
        ) : (
          <div className="space-y-6 text-gray-200">
            <ContactInfo />
          </div>
        )}

        {/* Contact Form */}
        {isDesktop ? (
          <motion.form
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col space-y-4"
          >
            <ContactForm />
          </motion.form>
        ) : (
          <form className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col space-y-4">
            <ContactForm />
          </form>
        )}
      </div>
    </section>
  );
};

// Info section
const ContactInfo = () => (
  <>
    <h3 className="text-2xl sm:text-3xl font-bold text-white">
      We’d love to hear from you
    </h3>
    <p className="leading-relaxed text-gray-300">
      Whether you’re interested in our products, want to collaborate, or just
      have a question — feel free to reach out. We’ll respond as quickly as
      possible.
    </p>
    <div className="space-y-3 text-sm sm:text-base">
      <p>
        <span className="font-semibold">Address:</span> Addis Ababa, Ethiopia
      </p>
      <p>
        <span className="font-semibold">Phone:</span> +251 900 123 456
      </p>
      <p>
        <span className="font-semibold">Email:</span> contact@company.com
      </p>
    </div>
  </>
);

// Form fields
const ContactForm = () => (
  <>
    <div>
      <label className="block text-sm font-semibold text-gray-200 mb-2">
        Name
      </label>
      <input
        type="text"
        placeholder="Your name"
        className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/20 focus:outline-none focus:border-amber-500 transition"
      />
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-200 mb-2">
        Email
      </label>
      <input
        type="email"
        placeholder="Your email"
        className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/20 focus:outline-none focus:border-amber-500 transition"
      />
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-200 mb-2">
        Message
      </label>
      <textarea
        rows="4"
        placeholder="Write your message..."
        className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/20 focus:outline-none focus:border-amber-500 transition"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-amber-500 text-black font-bold py-3 rounded-lg shadow-md hover:bg-amber-400 transition"
    >
      Send Message
    </button>
  </>
);

export default Contact;
