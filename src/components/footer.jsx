import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h3 className="footer-title gradient-heading mb-3">Tashfeen</h3>
        <p className="footer-desc mb-4">Frontend Developer | React | WordPress | Designer</p>
        <div className="footer-icons">
          <a href="https://github.com/tashfeen-khann" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/tashfeen-khan-306488270/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:tashfeenkhan590@gmail.com" aria-label="Email">
            <FaEnvelope size={28} />
          </a>
        </div>
        <div className="footer-bottom mt-4">
          <small>&copy; {new Date().getFullYear()} Tashfeen. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
