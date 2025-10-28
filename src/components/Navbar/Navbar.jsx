import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar({ onContactClick }) {
  const handleContactClick = (e) => {
    e.preventDefault(); // hindrar länkens standardbeteende
    onContactClick(); // öppnar popupen
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={handleContactClick}>
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
