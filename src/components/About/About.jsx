import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Code, Database, Palette, CheckCircle } from "lucide-react";
import "./About.css";

function About() {
  const [skill, setSkill] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasLoaded = useRef(false);
  const sectionRef = useRef(null);

  const skills = [
    {
      icon: <Code size={28} />,
      title: "Current Tech stack",
      desc: "React, Javascript, TypeScript, Git, API integration",
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
      icon: <CheckCircle size={28} />,
      title: "Best practices",
      desc: "Git, Testing, Clean Code, Agile Methods",
      color: "pink",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasLoaded.current) {
          hasLoaded.current = true;
          setLoading(true);

          setTimeout(() => {
            setSkill(skills);
            setLoading(false);
          }, 600);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-wrapper">
        {/* ✅ Vänster text */}
        <div className="about-text">
          <h2>My Journey</h2>
          <p>
            When I'm not crafting code, you'll find me playing hide & seek with
            my kids, spending time at the gym (hiding from the kids😉) or
            playing zombie games preparing for a digital apocalypse.
          </p>
          <p>
            I’m currently studying Fullstack Development Open Source and I’m
            eager to explore the backend and understand the full architecture
            that powers modern web applications.
          </p>
        </div>

        <div className="skills-grid">
          {loading ? (
            <p style={{ textAlign: "center", color: "#45c1a0" }}>
              Loading skills...
            </p>
          ) : (
            skills.map((skill, i) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
