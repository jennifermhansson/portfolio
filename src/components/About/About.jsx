import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import profileFront from "../../assets/photojennifer_animated.png";
import profileBack from "../../assets/profilephoto.png";

import "./About.css";

function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <Navbar />

      <section className="about">
        <div className="about-split">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className={`flip-card ${flipped ? "flipped" : ""}`}
              onClick={() => setFlipped(!flipped)}
            >
              <div className="flip-inner">
                <div className="flip-front">
                  <img src={profileFront} alt="Animated Jennifer" />
                </div>
                <div className="flip-back">
                  <img src={profileBack} alt="Jennifer Hansson" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1>Who is Jennifer?</h1>
            <p>
              A former HR professional and Excel nerd turned aspiring full-stack
              developer. After ten years of solving people problems, I’ve
              shifted to solving code problems.
            </p>
            <p>
              I’m a detail-obsessed problem solver. I love figuring out how
              things work behind the scenes and I rarely give up until I do.
            </p>
            <p>
              When I’m not coding, I’m probably playing zombie games or hanging
              out with my family — balancing family life with the occasional
              digital apocalypse.
            </p>
          </motion.div>
        </div>

        <div className="about-cards">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>🧠 3 quick ones:</h2>
            <p>
              <strong>Favourite food:</strong> Lasagna <br />
              <strong>Listening to:</strong> Kite <br />
              <strong>Dream destination:</strong> Japan
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
              UX/UI. Backend skills coming soon!
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2>🎨 Fun Fact</h2>
            <p>
              I used the color theme from my favourite VS Code extension —
              “Monokai Pro”
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
