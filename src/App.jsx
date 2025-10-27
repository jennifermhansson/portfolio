import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./App.css";

function App() {
  const [showContact, setShowContact] = useState(false);

  // ---- Smooth scroll till sektion via hash-länk ----
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <Navbar onContactClick={() => setShowContact(true)} />
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </>
  );
}

export default App;
