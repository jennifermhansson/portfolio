import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import "./Projects.css";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        description: "My portfolio built with React and Vite.",
        html_url: "https://github.com/jennifermhansson/portfolio",
        homepage: "https://jennifermhansson.github.io/portfolio/",
        stargazers_count: 0,
        forks_count: 0,
        language: "React",
      },
      {
        id: 3,
        name: "Bean Button",
        description: "Upcoming app for coffee lovers",
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

    setRepos(selectedProjects);
    setLoading(false);
  }, []);
  return (
    <section id="projects" className="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="projects-header"
      >
        <h2>Featured Projects</h2>
        <p id="my-projects">
          Here are a few of my projects, both school work and private open
          source projects.
        </p>
      </motion.div>
      <div className="projects-all">
        <a
          href="https://github.com/jennifermhansson"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} /> View All on GitHub
        </a>
      </div>
      <div className="projects-grid">
        {loading ? (
          <p>Loading projects...</p>
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
    </section>
  );
}

export default Projects;
