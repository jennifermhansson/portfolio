function Hero() {
  return (
    <section className="hero">
      <p className="welcome">Hi, I'm Jennifer👋</p>
      <img id="profile-image" src="\profilephoto.png" alt="pic" />
      <h2>
        An aspiring <span className="highlight">Fullstack Developer</span>
      </h2>
      <h3> *** Portfolio under construction ***</h3>
      <p className="description">
        My goal is to craft beautiful, functional web experiences with modern
        technologies. I'm a YES-sayer and a DOER and passionate for problem
        solving, creative solutions, and continuous learning.
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
