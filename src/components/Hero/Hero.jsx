import { useState } from "react";
import { motion } from "framer-motion";

import profileFront from "../../assets/profilephoto.webp";
import profileBack from "../../assets/photojennifer_animated.webp";

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
      {/* 💡 Hero content starts here */}
      <div className="hero-image-section">
        <div
          className={`flip-card ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="flip-inner">
            <div className="flip-front">
              <img
                src={profileFront}
                alt="Jennifer Hansson"
                width="275"
                height="377"
                loading="lazy"
              />
            </div>
            <div className="flip-back">
              <img
                src={profileBack}
                alt="Animated Jennifer"
                width="275"
                height="377"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-content">
        <p id="hello">Hello!</p>
        <h2>
          I'm Jennifer Hansson <br /> an aspiring{" "}
          <span className="highlight">Fullstack Developer</span>
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
            Curious about what I’ve done so far? Read more about me!
          </p>{" "}
          <br />
          <a href="#about" className="svg-arrow">
            <svg width="40" height="40" viewBox="0 0 24 24">
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="#45c1a0"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
