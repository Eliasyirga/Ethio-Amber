import NavBar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import About from "./components/About";

function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <NavBar />

      <HeroSection />

      <Products />
      <Services />
      <CallToAction />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
