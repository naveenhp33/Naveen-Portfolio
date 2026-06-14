import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
        <a href="https://github.com/naveenhp33" target="_blank" rel="noreferrer" className="nav-item">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/NaveenKumarS2603" target="_blank" rel="noreferrer" className="nav-item">
          <Linkedin size={24} />
        </a>
        <a href="mailto:naveenkumarsubramani2603@gmail.com" className="nav-item">
          <Mail size={24} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Naveen Kumar. Built with beautiful Code.</p>
    </footer>
  );
};

export default Footer;
