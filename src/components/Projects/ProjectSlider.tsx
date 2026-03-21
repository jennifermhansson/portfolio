import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import './ProjectSlider.css';
import recipeAppImage from '../../assets/recipeapp.png';
import chatAppImage from '../../assets/chatapp.png';
import coffeeBgImage from '../../assets/coffeebg.png';
import christmasimage from '../../assets/christmasapp.png';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number | string;
  forks_count: number;
  language: string;
  technologies?: string[];
  imageKey?: string;
}

type Props = {
  repos: Repo[];
  autoplay?: boolean;
  autoplaySpeed?: number;
};

const localImageMap: Record<string, string> = {
  recipeapp: recipeAppImage,
  chatapp: chatAppImage,
  coffeebg: coffeeBgImage,
  christmasapp: christmasimage,
};

function getProjectImage(repo: Repo) {
  if (!repo.imageKey) {
    return '';
  }

  return localImageMap[repo.imageKey] ?? '';
}

function getLanguages(repo: Repo) {
  if (repo.technologies && repo.technologies.length > 0) {
    return repo.technologies;
  }
  if (repo.language && repo.language.length > 0) {
    return [repo.language];
  }
  return ['Unknown'];
}

function getSlidesToShow(width: number) {
  if (width <= 480) return 1;
  if (width <= 600) return 1;
  if (width <= 900) return 2;
  return 3;
}

function ProjectSlider({
  repos,
  autoplay = true,
  autoplaySpeed = 6000,
}: Props) {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(() =>
    typeof window !== 'undefined' ? getSlidesToShow(window.innerWidth) : 3,
  );
  const pausedRef = useRef(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    function onResize() {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const maxIndex = Math.max(0, repos.length - slidesToShow);

  const cloneCount = slidesToShow;
  const shouldClone = repos.length > slidesToShow && cloneCount > 0;

  const slides = shouldClone
    ? [...repos.slice(-cloneCount), ...repos, ...repos.slice(0, cloneCount)]
    : repos;
  const offset = shouldClone ? cloneCount : 0;

  useEffect(() => {
    setTransitionEnabled(false);
    setCurrent(offset);

    const t = setTimeout(() => setTransitionEnabled(true), 30);
    return () => clearTimeout(t);
  }, [slidesToShow, repos.length]);

  useEffect(() => {
    if (!autoplay) return;
    if (repos.length <= slidesToShow) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setTransitionEnabled(true);
      setCurrent((prev) => prev + 1);
    }, autoplaySpeed);
    return () => clearInterval(id);
  }, [autoplay, autoplaySpeed, repos.length, slidesToShow]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || !shouldClone) return;
    const onEnd = () => {
      if (current >= offset + repos.length) {
        setTransitionEnabled(false);
        setCurrent(offset);
        setTimeout(() => setTransitionEnabled(true), 30);
      } else if (current < offset) {
        setTransitionEnabled(false);
        setCurrent(offset + repos.length - 1);
        setTimeout(() => setTransitionEnabled(true), 30);
      }
    };
    el.addEventListener('transitionend', onEnd);
    return () => el.removeEventListener('transitionend', onEnd);
  }, [current, offset, repos.length, shouldClone]);

  if (!repos || repos.length === 0) return null;

  const handlePrev = () => {
    setTransitionEnabled(true);
    setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    setTransitionEnabled(true);
    setCurrent((prev) => prev + 1);
  };

  const pages = Math.max(1, maxIndex + 1);

  const transformPercent = -(current * (100 / slidesToShow));

  return (
    <div
      className="slider-container"
      data-debug="project-slider"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      style={{ ['--slides-to-show' as any]: slidesToShow }}
    >
      <div className="slider-viewport">
        <div
          className="slider-track"
          ref={trackRef}
          style={{
            transform: `translateX(${transformPercent}%)`,
            transition: transitionEnabled ? undefined : 'none',
          }}
        >
          {slides.map((repo, idx) => {
            const projectImage = getProjectImage(repo);

            return (
              <div
                className="slider-slide"
                key={'s-' + idx + '-' + (repo as any).id}
              >
                <div className="project-card">
                  <div className="project-image-wrap">
                    {projectImage ? (
                      <img
                        className="project-image"
                        src={projectImage}
                        alt={`${repo.name} preview`}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="project-image project-image-fallback"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3>{repo.name}</h3>
                    </div>

                    <p className="project-desc">{repo.description}</p>

                    <div className="project-languages">
                      {getLanguages(repo).map((language) => (
                        <span
                          className="lang"
                          key={`${repo.id}-${language}`}
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-footer">
                    <div className="stats">
                      <span>
                        <Star size={12} /> {repo.stargazers_count}
                      </span>
                      <span>
                        <GitFork size={12} /> {repo.forks_count}
                      </span>
                    </div>
                    <div className="links">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${repo.name} on GitHub`}
                      >
                        <Github size={14} />
                      </a>
                      {repo.homepage && repo.homepage.length > 0 && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${repo.name} demo`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        className="slider-arrow prev"
        onClick={handlePrev}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        className="slider-arrow next"
        onClick={handleNext}
        aria-label="Next"
      >
        ›
      </button>

      <div className="slider-dots">
        {Array.from({ length: pages }).map((_, idx) => {
          const target = offset + idx;
          const activeIndex = (((current - offset) % pages) + pages) % pages;
          return (
            <button
              key={idx}
              className={'dot ' + (idx === activeIndex ? 'active' : '')}
              onClick={() => {
                setTransitionEnabled(true);
                setCurrent(target);
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSlider;
