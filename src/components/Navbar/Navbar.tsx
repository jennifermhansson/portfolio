import { motion } from "framer-motion";
import "./Navbar.css";
import "../../App.css"

type NavbarProps = {
  onContactClick: () => void;
};

function Navbar({ onContactClick }: NavbarProps) {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onContactClick();
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
