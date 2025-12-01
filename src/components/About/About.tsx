import { motion } from "framer-motion";
import { CodeXml, Database, Puzzle, Heart } from "lucide-react";
import "./About.css";
import "../../App.css"
import type { JSX } from "react";
import profileFront from "../../assets/profilephoto.webp";
import profileBack from "../../assets/photojennifer_animated.webp";

interface Skill {
  icon: JSX.Element;
  title: string;
  desc: string | JSX.Element;
  color: string;
}

function About() {

  const scrollToProjects = () => {
    const element = document.getElementById("my-projects")
    if(element) {
      element.scrollIntoView({ behavior: "smooth"})
    }
  }

  const skills: Skill[] = [
    {
      icon: <CodeXml size={28} />,
      title: "Current Tech stack",
      desc: "React, Javascript, TypeScript, Git/GitHub, Firebase, API integrations, TailwindCSS, Testing",
      color: "cyan",
    },
    {
      icon: <Database size={28} />,
      title: "Up next",
      desc: (
        <>
          Node.js, PHP, Express, MongoDB, PostgreSQL, Docker, Next.js, CI/CD,
          {" "}
          <strong>Looking for LIA opportunities from September 2026!</strong>
        </>
      ),
      color: "lime",
    },
    {
      icon: <Heart size={28} />,
      title: "About me",
desc: (
  <>
    From people problems to code problems — over a decade in HR turned into a{" "}
    <span style={{ 
      fontWeight: "bold",
      background: "linear-gradient(to left, #45c1a0, #f92672)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}>
      passion for tech
    </span>
  </>
),
      color: "pink",
    },
    {
      icon: <Puzzle size={28} />,
      title: "Agile Methodology",
      desc: "Structured problem solving meets collaborative Agile methodology, combining clear thinking with adaptive teamwork to move projects forward with focus and momentum",
      color: "orange",
    },
    
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <div className="about-content-row">
          <div className="about-profile">
            <div className="flip-card">
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

          <div className="about-text">
            <h2>My Journey</h2>
            <p>
              I’m currently in my first year of Fullstack Development (Open Source). I began with frontend, and now I’m eager to explore backend and learn how modern web applications are built from the ground up.
            </p>
            <br />
            <p>
              When I'm not writing code, you'll find me playing hide & seek with
              my kids, sneaking off to the gym (hiding from the kids😉) or playing
              video games preparing for a digital apocalypse.
            </p>
            <div className="scroll-prompt">
              <p>Take a look at my journey so far and what i've about to explore next!</p>
              <div className="svg-arrow" onClick={scrollToProjects} style={{ cursor: "pointer" }}>
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

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              className="skill-card"
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className={`skill-icon ${skill.color}`}>{skill.icon}</div>
              <div className="skill-text">
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
