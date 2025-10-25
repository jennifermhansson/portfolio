import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
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
          <a href="https://github.com/jennifermhansson" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jennifer-hansson-aa19b0a3/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:jennifermhansson@gmail.com">
            <i className="fa-solid fa-envelope"></i>
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
