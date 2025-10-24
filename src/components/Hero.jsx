import Tsparticles from "./Tsparticles";
import TypedString from "./TypedString";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      {/* <Tsparticles />  */}

      <p className="welcome">
        <TypedString />{" "}
      </p>
      <div className="profile-wrapper">
        <img id="profile-image" src="\profilephoto.png" alt="pic" />
      </div>

      <h3> *** Work in progress ***</h3>
      <p className="description">
        <h2>
          An aspiring <span className="highlight">Fullstack Developer</span>
        </h2>
        My goal is to craft beautiful, functional web experiences with modern
        technologies. I'm a YES-sayer and a DOER with a passion for problem
        solving, creative solutions, and continuous learning.
        <p className="cta">
          Curious about me?{" "}
          <Link to="/about" className="link-highlight">
            Read more here
          </Link>
        </p>
      </p>
      {/* <div className="buttons">
        <button className="btn primary">View My Work</button> 
        <button className="btn secondary">Get In Touch</button>
      </div> */}
      <div className="icons">
        <a
          href="https://github.com/jennifermhansson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jennifer-hansson-aa19b0a3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:jennifermhansson@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
