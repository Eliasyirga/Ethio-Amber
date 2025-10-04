import React, { useState, useEffect } from "react";

import NavBar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import LoadingScreen from "./pages/LoadingScreen";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <LoadingScreen loading={loading} />

      {/* Main content appears only when loading is false */}
      {!loading && (
        <div>
          <NavBar />
          <HeroSection />
          <Products />
          <Services />
          <CallToAction />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
