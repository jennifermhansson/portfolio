import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import "./Projects.css";

// 🔧 Hämtar pinned repos via GitHub GraphQL API
async function fetchPinnedRepos() {
  const query = `
  {
    user(login: "jennifermhansson") {
      pinnedItems(first: 4, types: [REPOSITORY]) {  
        nodes {
          ... on Repository {
            id
            name
            description
            url
            homepageUrl
            stargazerCount
            forkCount
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }`;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  return json.data?.user?.pinnedItems?.nodes || [];
}

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

function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const hasLoaded = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // ⭐ REPLACED your previous selectedProjects logic.
  // Lazy load pinned repos when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting && !hasLoaded.current) {
          hasLoaded.current = true;
          setLoading(true);

          fetchPinnedRepos()
            .then((data) => {
              const formatted: Repo[] = data.map((r: any) => ({
                id: r.id,
                name: r.name,
                description: r.description || "No description provided.",
                html_url: r.url,
                homepage: r.homepageUrl,
                stargazers_count: r.stargazerCount,
                forks_count: r.forkCount,
                language: r.primaryLanguage?.name || "Unknown",
              }));

              setRepos(formatted);
            })
            .catch((err) => {
              console.error("Failed to load pinned repos:", err);
            })
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
          I believe in learning by doing and every line of code is a step forward
          in mastering my craft. Here are a few of my projects, both school work
          and private open source projects.
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
