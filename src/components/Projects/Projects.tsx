import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import './Projects.css';
import '../../App.css';

import pinned from '../../data/pinned.json';
import ProjectSlider from './ProjectSlider';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number | string;
  forks_count: number;
  language: string;
}

async function fetchPinnedRepos(): Promise<Repo[]> {
  return pinned;
}

function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const hasLoaded = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchPinnedRepos()
      .then((data) => setRepos(data))
      .finally(() => setLoading(false));
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
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Projects</h2>
        <p id="my-projects">
          I believe in learning by doing and every line of code is a step
          forward in mastering my craft. Here are some of my highlighted
          projects, from both school work and private development.
        </p>
      </motion.div>

      <div className="projects-grid">
        {loading ? (
          <p style={{ textAlign: 'center', color: '#45c1a0' }}>
            Loading projects...
          </p>
        ) : (
          <ProjectSlider repos={repos} />
        )}
      </div>

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
