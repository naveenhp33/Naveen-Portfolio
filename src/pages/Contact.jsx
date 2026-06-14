import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">

      {/* Section header */}
      <div className="section-header section-header-center">
        <span className="section-tag">Contact</span>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">
          Open to full-time roles, freelance projects, and interesting collaborations.
        </p>
      </div>

      {/* Contact card */}
      <div className="contact-card">
        <div className="contact-icon" aria-hidden="true">
          <Mail size={28} />
        </div>

        <h3 className="contact-title">Get In Touch</h3>

        <p className="contact-body">
          I'm currently available for new opportunities. Whether you have a project in mind,
          want to collaborate, or just want to say hello — I'd love to hear from you!
        </p>

        {/* Primary CTA */}
        <div className="contact-ctas">
          <a
            href="mailto:naveenkumarsubramani2603@gmail.com"
            className="btn btn-primary btn-lg"
            aria-label="Send Naveen an email"
          >
            Send an Email <ArrowRight size={18} />
          </a>
        </div>

        {/* Social links */}
        <div className="contact-socials">
          <a
            href="https://github.com/naveenhp33"
            target="_blank"
            rel="noreferrer"
            className="social-pill"
            aria-label="GitHub profile"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/NaveenKumarS2603"
            target="_blank"
            rel="noreferrer"
            className="social-pill"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>

    </div>
  </section>
);

export default Contact;
