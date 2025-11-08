import { motion } from "framer-motion";
import { CodeXml, Database, Palette, PersonStanding } from "lucide-react";
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
      desc: "Node.js, Express, MongoDB, PostgreSQL, Docker, Next.js, CI/CD",
      color: "lime",
    },
    {
      icon: <Palette size={28} />,
      title: "UI / UX Design",
      desc: "Figma, Responsive Design, WCAG, Animations",
      color: "orange",
    },
    {
      icon: <PersonStanding size={28} />,
      title: "About me",
      desc: "10+ years XP in HR, solving people problems — now solving code problems",
      color: "pink",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <div className="about-text">
          <h2>My Journey</h2>
          <p>
            When I'm not writing code, you'll find me playing hide & seek with
            my kids, sneaking off to the gym (hiding from the kids😉) or playing
            zombie games preparing for a digital apocalypse.
          </p>
          <p>
            I’m currently studying Fullstack Development Open Source. I started
            with front-end, but I’m eager to dive into backend and understand
            the full architecture behind modern web applications.
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
