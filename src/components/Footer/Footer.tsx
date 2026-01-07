import { motion } from "framer-motion";
import "./Footer.css";
import "../../App.css"

interface FooterProps {
  onContactClick: () => void;
}

function Footer({ onContactClick }: FooterProps) {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <div className="footer-icons">
          <a
            href="https://github.com/jennifermhansson"
            target="_blank"
            aria-label="Visit my GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <button
            className="footer-btn"
            onClick={onContactClick}
            aria-label="Open contact form"
          >
            <i className="fa-solid fa-envelope"></i>
          </button>

          <a
            href="https://www.linkedin.com/in/jennifer-hansson-aa19b0a3/"
            target="_blank"
            aria-label="Visit my LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className="footer-copy">
          © 2025 <span>Jennifer Hansson</span> – All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
