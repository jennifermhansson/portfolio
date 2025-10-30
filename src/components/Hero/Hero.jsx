import { useState } from "react";
import { motion } from "framer-motion";

import profileFront from "../../assets/profilephoto.png";
import profileBack from "../../assets/photojennifer_animated.png";

import "./Hero.css";

function Hero() {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 💫 Animated background blobs */}
      <motion.div
        className="blur-blob blob1"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blur-blob blob2"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 💡 Hero content starts here */}
      <div className="hero-image-section">
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
      </div>

      <div className="hero-content">
        <div className="welcome">
          Portfolio of <br /> Jennifer Hansson
        </div>

        <h2>
          an aspiring <span className="highlight">Fullstack Developer</span>
        </h2>

        <div className="description">
          <p>
            My portfolio is a living project – it grows, changes, and improves
            as I do as a developer.
          </p>
          <p>
            I created this with dedication, curiosity, and plenty of late night
            coding sessions.
          </p>

          <p className="cta">
            Curious about what I’ve done so far? Take a look at{" "}
            <a href="#about" className="link-highlight">
              <br /> my journey
              <br /> ↓
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
