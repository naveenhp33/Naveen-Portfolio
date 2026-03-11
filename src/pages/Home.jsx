import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

// Import all sections directly
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <section id="home" className="hero animate-fade" style={{ animationDelay: '0.2s' }}>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting">Hi, I'm Naveen Kumar</span>
            <h1 className="hero-title">
              Building <span className="text-gradient">Digital Experiences</span> That Inspire.
            </h1>
            <p className="hero-subtitle">
              I'm a Results-driven Fullstack Web Developer with hands-on experience building responsive web pages using modern technologies, actively exploring AI agents for smarter applications, and eager to build clean, user-focused interfaces.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">
                View My Work <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img
              src="/profile.jpeg"
              alt="Naveen Kumar"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Render all other pages consecutively on Home */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
