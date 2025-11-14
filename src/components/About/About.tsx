import { motion } from "framer-motion";
import { CodeXml, Database, Palette, Heart } from "lucide-react";
import "./About.css";
import type { JSX } from "react";

interface Skill {
  icon: JSX.Element;
  title: string;
  desc: string;
  color: string;
}

function About() {
  const skills: Skill[] = [
    {
      icon: <CodeXml size={28} />,
      title: "Current Tech stack",
      desc: "React, Javascript, TypeScript, Git/GitHub, Firebase, API integrations",
      color: "cyan",
    },
    {
      icon: <Database size={28} />,
      title: "Up next",
      desc: "Node.js, PHP, Express, MongoDB, PostgreSQL, Docker, Next.js, CI/CD",
      color: "lime",
    },
    {
      icon: <Palette size={28} />,
      title: "UI / UX Design",
      desc: "Figma, Accessibility (WCAG), Responsive Layouts, Motion Design",
      color: "orange",
    },
    {
      icon: <Heart size={28} />,
      title: "About me",
      desc: "From people problems to code problems — over a decade in HR turned into a passion for tech",
      color: "pink",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <div className="about-text">
          <h2>My Journey</h2>
             <p>
          I’m currently in my first year of Fullstack Development (Open Source). I began with frontend, and now I’m eager to explore backend and learn how modern web applications are built from the ground up.
          </p><br />
          <p>
            When I'm not writing code, you'll find me playing hide & seek with
            my kids, sneaking off to the gym (hiding from the kids😉) or playing
            zombie games preparing for a digital apocalypse.
          </p>
       
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
