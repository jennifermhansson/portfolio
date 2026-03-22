import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  CodeXml,
  Database,
  Heart,
} from 'lucide-react';
import './About.css';
import '../../App.css';
import type { JSX } from 'react';
import profileFront from '../../assets/profilephoto.webp';

interface HighlightCard {
  icon: JSX.Element;
  title: string;
  desc: string;
  color: string;
}

function About() {
  const scrollToProjects = () => {
    const element = document.getElementById('my-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlightCards: HighlightCard[] = [
    {
      icon: <CodeXml size={24} />,
      title: 'Tech Stack',
      desc: 'React, JavaScript, TypeScript, Git/GitHub, Firebase, API integrations, TailwindCSS and testing.',
      color: 'cyan',
    },
    {
      icon: <Database size={24} />,
      title: 'Currently Learning',
      desc: 'Node.js, Bun, PHP, Fastify, Express, MongoDB, PostgreSQL, Docker and CI/CD.',
      color: 'lime',
    },
    {
      icon: <Heart size={24} />,
      title: 'Beyond Code',
      desc: 'A former HR professional turned developer, bringing structure, collaboration and curiosity into every build.',
      color: 'pink',
    },
  ];

  return (
    <section
      className="about-section"
      id="about"
    >
      <div className="about-container">
        <motion.div
          className="about-hero-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="about-hero-grid">
            <div className="about-image-column">
              <div className="about-image-frame">
                <img
                  src={profileFront}
                  alt="Jennifer Hansson"
                />
              </div>

              <div className="about-mini-card">
                {/* <BriefcaseBusiness size={18} /> */}
                <div>
                  <span className="mini-card-label">Next step</span>
                  <p>LIA • September 2026</p>
                </div>
              </div>
            </div>

            <div className="about-copy-column">
              {/*  <span className="about-kicker">Fullstack Developer Student</span> */}

              <h2>From HR to Fullstack</h2>

              <p className="about-lead">
                I’m a Fullstack Development student with a frontend foundation
                and a growing passion for backend development. I enjoy building
                clean, modern interfaces while learning how applications work
                from end to end.
              </p>

              <p className="about-body">
                Before tech, I spent over a decade in HR. That experience shaped
                how I work today — structured, collaborative and focused on real
                people and real problems.
              </p>

              <p className="about-body">
                When I’m not coding, I’m usually with my kids, sneaking off to
                the gym, or gaming my way through the digital apocalypse.
              </p>

              <div className="about-tags">
                <span>Agile mindset</span>
                <span>Problem solving</span>
                <span>Frontend + Backend</span>
                <span>User-focused</span>
              </div>

              <div className="about-actions">
                <button
                  type="button"
                  className="about-primary-btn"
                  onClick={scrollToProjects}
                >
                  View Projects
                  <ArrowDownRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="about-cards-grid">
          {highlightCards.map((card, index) => (
            <motion.article
              key={index}
              className="about-info-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className={`about-card-icon ${card.color}`}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
