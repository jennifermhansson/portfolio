import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about">
      <h2>About me</h2>
      <p>
        I’m currently studying Fullstack Development Open Source. With each
        project, I’m pushing my boundaries and refining my skills.
      </p>
      <p>
        Fun fact: The color theme on this portfolio is inspired by my favourite
        VS code extension "Monokai Pro" 🎨
      </p>
      <div className="skills-wrapper">
        {/* Tools mastered */}
        <div className="skills-section">
          <h2>Tools I’ve mastered (so far)</h2>
          <div className="skills-container">
            {[
              "Git",
              "GitHub",
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "TypeScript",
              "API Integration",
              "Node.js",
              "Figma",
              "Agile work methods",
            ].map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools learning next */}
        <div className="skills-section">
          <h2>Up next on my learning path</h2>
          <div className="skills-container">
            {[
              "Linux",
              "Express",
              "MySQL",
              "MongoDB",
              "Tailwind",
              "Docker",
              "Next.js",
              "Testing",
              "GraphQL",
              "CI/CD",
              "Fullstack Architecture",
            ].map((skill, index) => (
              <span key={index} className="skill-tag future">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
