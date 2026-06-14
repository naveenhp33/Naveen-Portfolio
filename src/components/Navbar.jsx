import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'home',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'skills',   label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact' },
];

const Navbar = () => {
  const [activeTab, setActiveTab]   = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Active section & scroll state via IntersectionObserver */
  useEffect(() => {
    const opts = { root: null, rootMargin: '-30% 0px -60% 0px', threshold: 0 };
    const cb   = (entries) => entries.forEach(e => e.isIntersecting && setActiveTab(e.target.id));
    const obs  = new IntersectionObserver(cb, opts);

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${isScrolled ? ' scrolled' : ''}`} aria-label="Primary navigation">
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#home" className="nav-logo" onClick={closeMenu} aria-label="Go to top">
            <span className="nav-logo-dot" aria-hidden="true" />
            Naveen
          </a>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link${activeTab === id ? ' active' : ''}`}
                  aria-current={activeTab === id ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`mobile-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`mobile-nav-link${activeTab === id ? ' active' : ''}`}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
