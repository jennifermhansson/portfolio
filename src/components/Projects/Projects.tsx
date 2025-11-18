import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import "./Projects.css";
import "../../App.css"

// 🔧 Pinned repos via lokal JSON
import pinned from "../../data/pinned.json";

// Samma interface du redan använder
interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

// 🔧 Fake fetch (lätt att byta senare mot Riktig API via serverless)
async function fetchPinnedRepos(): Promise<Repo[]> {
  return pinned;
}

function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const hasLoaded = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Lazy load när sektionen kommer in i viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting && !hasLoaded.current) {
          hasLoaded.current = true;
          setLoading(true);

          fetchPinnedRepos()
            .then((data) => setRepos(data))
            .finally(() => setLoading(false));
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
          forward in mastering my craft. Here are some of my highlighted
          projects, from both school work and private development.
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
