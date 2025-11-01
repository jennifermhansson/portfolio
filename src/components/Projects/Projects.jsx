import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import "./Projects.css";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasLoaded = useRef(false); // Ser till att vi inte hämtar flera gånger
  const sectionRef = useRef(null);

  // DINA UTVALDA PROJEKT – exakt som tidigare
  const selectedProjects = [
    {
      id: 1,
      name: "Examination Project",
      description: "A responsive website built with HTML, CSS & JavaScript",
      html_url: "https://github.com/jennifermhansson/examination",
      homepage: "https://vercel.com/jennifermhanssons-projects/examination",
      stargazers_count: 0,
      forks_count: 0,
      language: "JavaScript",
    },
    {
      id: 2,
      name: "Portfolio",
      description: "My portfolio built with React & Javascript",
      html_url: "https://github.com/jennifermhansson/portfolio",
      homepage: "https://jennifermhansson.github.io/portfolio/",
      stargazers_count: 0,
      forks_count: 0,
      language: "React",
    },
    {
      id: 3,
      name: "Bean Button",
      description: "App for coffee lovers *work in progress*",
      html_url: "https://github.com/jennifermhansson/beanbutton",
      homepage: "",
      stargazers_count: 0,
      forks_count: 0,
      language: "JavaScript",
    },
    {
      id: 4,
      name: "To-Do App",
      description: "Simple to-do list with localStorage built in Javascript.",
      html_url: "https://github.com/jennifermhansson/todo-app",
      homepage: "",
      stargazers_count: 0,
      forks_count: 0,
      language: "JavaScript",
    },
  ];

  // ✅ Lazy load med Intersection Observer (hämtar när sektionen syns)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasLoaded.current) {
          hasLoaded.current = true;
          setLoading(true);

          // Fake fetch delay för att simulera data-hämtning
          setTimeout(() => {
            setRepos(selectedProjects);
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
    <motion.section
      id="projects"
      ref={sectionRef}
      className="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      {/* HEADER */}
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Featured Projects</h2>
        <p id="my-projects">
          I believe in learning by doing and every line of code is a step
          forward in mastering my craft. Here are a few of my projects, both
          school work and private open source projects.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="projects-grid">
        {loading ? (
          <p style={{ textAlign: "center", color: "#45c1a0" }}>
            Loading projects...
          </p>
        ) : (
          repos.map((repo) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="project-card"
            >
              <div className="project-header">
                <h3>
                  <Github size={18} /> {repo.name}
                </h3>
                <span>{repo.language}</span>
              </div>
              <p>{repo.description}</p>
              <div className="project-footer">
                <div className="stats">
                  <span>
                    <Star size={14} /> {repo.stargazers_count}
                  </span>
                  <span>
                    <GitFork size={14} /> {repo.forks_count}
                  </span>
                </div>
                <div className="links">
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    <Github size={16} />
                  </a>
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* SEE ALL BUTTON */}
      <div className="projects-all">
        <a
          href="https://github.com/jennifermhansson"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} /> View my GitHub page
        </a>
      </div>
    </motion.section>
  );
}

export default Projects;
