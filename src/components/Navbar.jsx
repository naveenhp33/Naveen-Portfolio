import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar-magic ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="nav-logo-premium" onClick={closeMenu}>
          <span className="logo-dot"></span>
          Naveen
        </a>
        
        <button className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-pill ${isMenuOpen ? 'mobile-active' : ''}`}>
          <ul className="nav-links-magic">
            <li>
              <a href="#home" className={`nav-link-magic ${activeTab === 'home' || activeTab === '' ? 'active' : ''}`} onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={`nav-link-magic ${activeTab === 'about' ? 'active' : ''}`} onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={`nav-link-magic ${activeTab === 'skills' ? 'active' : ''}`} onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={`nav-link-magic ${activeTab === 'projects' ? 'active' : ''}`} onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link-magic ${activeTab === 'contact' ? 'active' : ''}`} onClick={closeMenu}>
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
