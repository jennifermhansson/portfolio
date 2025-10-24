import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import "./About.css";

function About() {
  return (
    <>
      <Navbar />
      <section className="about-section">
        <div className="about-container">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I’m <span className="highlight">Jennifer Hansson</span>, a
              passionate <strong>front-end and full-stack developer</strong> in
              the making. After more than a decade working in HR and payroll, I
              discovered that my true fascination lies in building digital
              experiences — from sleek user interfaces to the logic that powers
              them.
            </p>
            <p>
              I enjoy transforming ideas into functional, visually engaging
              solutions using modern technologies like{" "}
              <strong>React, JavaScript, HTML, and CSS</strong>. My background
              in people-focused roles taught me to listen, analyze, and solve
              problems — skills I now apply daily in code.
            </p>
            <p>
              I’m driven by curiosity, clean design, and the joy of learning
              something new every day. When I’m not coding, you’ll probably find
              me sketching ideas for my next project, hitting the gym, or
              spending time with my family.
            </p>
            <p className="cta">
              Curious about what I’ve built?{" "}
              <Link to="/#projects" className="link-highlight">
                View my projects
              </Link>
            </p>
            <p>
              <em>
                Let’s connect — I’m always open to exciting collaborations and
                creative challenges!
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
