import { useState } from "react";
import "./About.css";
import profileFront from "../../assets/profilephoto.png";
import profileBack from "../../assets/photojennifer_animated.png";

import Navbar from "../Navbar/Navbar";
import profilephoto from "../../assets/profilephoto.png";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";

function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <Navbar />
      <section className="about">
        <div
          className={`flip-card ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="flip-inner">
            <div className="flip-front">
              <img src={profileFront} alt="Jennifer Hansson" />
            </div>
            <div className="flip-back">
              <img src={profileBack} alt="Animated Jennifer" />
            </div>
          </div>
        </div>
        {/* Split-section */}
        <div className="about-split">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1>Hi, I'm Jennifer 👋</h1>
            <p>
              I'm a creative developer with a background in HR — combining
              structure, empathy, and design thinking to build digital
              experiences that make sense.
            </p>
            <p>
              My focus lies in crafting clean, accessible, and interactive
              interfaces while always learning more about the full stack behind
              them.
            </p>
            <p>
              Coding has become my new language for creativity — where design
              and logic meet to build something meaningful.
            </p>
          </motion.div>
        </div>

        {/* Cards Section */}
        <div className="about-cards">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>🧠 What I Love</h2>
            <p>
              Solving problems, designing beautiful UIs, and making web apps
              feel alive.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2>⚙️ Tools & Tech</h2>
            <p>
              React, JavaScript, HTML, CSS, Node.js, Git, and a growing love for
              UX/UI.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2>🌿 Fun Fact</h2>
            <p>
              I’ve probably refactored this page three times already — and I
              loved every second of it.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
