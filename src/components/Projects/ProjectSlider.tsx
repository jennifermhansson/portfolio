import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import "./ProjectSlider.css";

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

type Props = {
  repos: Repo[];
};

function ProjectSlider({ repos }: Props) {
  console.log("ProjectSlider mounted, repos:", repos?.length);
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: Math.min(3, repos.length || 1),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      // At widths <= 900px show 2 slides
      { breakpoint: 900, settings: { slidesToShow: Math.min(2, repos.length) } },
      // At widths <= 600px show 1 slide
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      // Extra small screens
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  if (!repos || repos.length === 0) return null;

  return (
    <div className="slider-container" data-debug="project-slider">
      <Slider {...sliderSettings}>
        {repos.map((repo) => (
          <div key={repo.id}>
            <div className="project-card">
              <div className="project-header">
                <h3>
                  <Github size={16} /> {repo.name}
                </h3>
                <span className="lang">{repo.language}</span>
              </div>
              <p className="project-desc">{repo.description}</p>
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
                  <a href={repo.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} on GitHub`}>
                    <Github size={14} />
                  </a>
                  {repo.homepage && repo.homepage.length > 0 && (
                    <a href={repo.homepage} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} demo`}>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
