import { useState } from "react";
import { motion } from "framer-motion";
import TypedString from "../TypedString";

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
          <TypedString />
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
            I created this with dedication, curiosity, and plenty of late-night
            coding sessions. The code is written by me, supported by research,
            tutorials, and the occasional guidance from AI.
          </p>{" "}
          <p>
            I believe in learning by doing and every line of code is a step
            forward in mastering my craft.
          </p>
          <p className="cta">
            Curious about what i've done so far? Take a look at{" "}
            <a href="#projects" className="link-highlight">
              my projects →
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
