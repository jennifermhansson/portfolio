import TypedString from "../TypedString";
import { Link } from "react-router-dom";
import profilephoto from "../../assets/profilephoto.png";
import { motion } from "framer-motion";

import "./Hero.css";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="hero">
        <div className="welcome">
          <TypedString />
        </div>

        <h2>
          An aspiring <span className="highlight">Fullstack Developer</span>
        </h2>

        <div className="profile-wrapper">
          <img
            id="profile-image"
            src={profilephoto}
            alt="Profile photo of Jennifer Hansson"
          />
        </div>

        <p id="intro">
          My portfolio is a living project - it grows, changes, and improves as
          I do as a developer.
        </p>

        <div className="description">
          <p>
            My goal is to craft beautiful, functional web experiences with
            modern technologies. I'm a YES-sayer and a DOER with a passion for
            problem solving, creative solutions, and continuous learning.
          </p>

          <p className="cta">
            Curious about me?{" "}
            <Link to="/about" className="link-highlight">
              Read more here
            </Link>
          </p>
        </div>
      </section>
    </motion.section>
  );
}

export default Hero;
