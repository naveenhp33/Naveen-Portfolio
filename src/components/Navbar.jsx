import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar-magic ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="nav-logo-premium">
          <span className="logo-dot"></span>
          Naveen
        </a>
        
        <div className="nav-pill">
          <ul className="nav-links-magic">
            <li>
              <a href="#home" className={`nav-link-magic ${activeTab === 'home' || activeTab === '' ? 'active' : ''}`}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={`nav-link-magic ${activeTab === 'about' ? 'active' : ''}`}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={`nav-link-magic ${activeTab === 'skills' ? 'active' : ''}`}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={`nav-link-magic ${activeTab === 'projects' ? 'active' : ''}`}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link-magic ${activeTab === 'contact' ? 'active' : ''}`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
