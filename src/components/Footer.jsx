import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      {/* Brand */}
      <div className="footer-logo">
        <span style={{ width: 7, height: 7, background: 'var(--primary)', borderRadius: '50%', display: 'inline-block' }} aria-hidden="true" />
        Naveen Kumar
      </div>

      {/* Copyright */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Naveen Kumar. Built with React &amp; passion.
      </p>

      {/* Social links */}
      <div className="footer-links">
        <a
          href="https://github.com/naveenhp33"
          target="_blank"
          rel="noreferrer"
          className="footer-icon-link"
          aria-label="GitHub profile"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/NaveenKumarS2603"
          target="_blank"
          rel="noreferrer"
          className="footer-icon-link"
          aria-label="LinkedIn profile"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="mailto:naveenkumarsubramani2603@gmail.com"
          className="footer-icon-link"
          aria-label="Send email"
        >
          <Mail size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
