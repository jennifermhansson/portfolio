import { motion } from "framer-motion";
import "./Hero.css";
import HaloBackground from "./HaloBackground";
import "../../App.css"

export default function Hero() {

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if(element) {
      element.scrollIntoView({ behavior: "smooth"})
    }
  }

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <HaloBackground />

      <div className="hero-content">
        <p id="hello">Hello!</p>
        <h2>
          I'm Jennifer Hansson <br />– a future{" "}
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
Ready to see the full journey? Scroll down to dive in!</p>

          <br />
          <div className="scroll-prompt">
          <div className="svg-arrow" onClick={scrollToAbout} style={{ cursor: "pointer"}}>
            <svg width="40" height="40" viewBox="0 0 24 24">
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="#45c1a0"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
              />
            </svg>
        </div>
        </div>
      </div>
      </div>
    </motion.section>
  );
}
