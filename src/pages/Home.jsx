import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import About    from './About';
import Skills   from './Skills';
import Projects from './Projects';
import Contact  from './Contact';
import FAQ      from './FAQ';

const Home = () => (
  <>
    {/* ── HERO ── */}
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-inner">

          {/* Left: Text content */}
          <div className="hero-text">
            <span className="hero-eyebrow">👋 Hi, I'm Naveen Kumar</span>

            <h1 className="hero-title">
              Building <span className="highlight">Digital Experiences</span>{' '}
              That Inspire.
            </h1>

            <p className="hero-subtitle">
              Results-driven Fullstack Web Developer with hands-on experience
              building responsive web applications using React, Node.js, and
              Python — actively exploring AI agents for smarter, faster products.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary btn-lg">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary btn-lg">
                Get In Touch <Mail size={18} />
              </a>
            </div>

            {/* Quick stats */}
            <div className="hero-stats">
              <div>
                <span className="hero-stat-num">5+</span>
                <span className="hero-stat-label">Projects Built</span>
              </div>
              <div>
                <span className="hero-stat-num">3</span>
                <span className="hero-stat-label">Certifications</span>
              </div>
              <div>
                <span className="hero-stat-num">2+</span>
                <span className="hero-stat-label">Years Learning</span>
              </div>
            </div>
          </div>

          {/* Right: Circular animated profile */}
          <div className="hero-image-col">
            <div className="profile-wrapper">
              {/* Counter-rotating outer dashed ring */}
              <div className="profile-spin-ring-2" aria-hidden="true" />
              {/* Primary spinning gradient ring */}
              <div className="profile-spin-ring" aria-hidden="true" />
              {/* White gap between ring and image */}
              <div className="profile-gap-ring" aria-hidden="true" />
              {/* Circular image — sits on top */}
              <div className="profile-img-circle">
                <img
                  src="/profile.jpeg"
                  alt="Naveen Kumar – Fullstack Web Developer"
                  loading="eager"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <div className="divider" />
    <About />
    <div className="divider" />
    <Skills />
    <div className="divider" />
    <Projects />
    <div className="divider" />
    <Contact />
    <div className="divider" />
    <FAQ />
  </>
);

export default Home;
