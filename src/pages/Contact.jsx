import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section animate-fade">
      <h2 className="section-title">Get In Touch</h2>
      <div className="card contact-card">
        <Mail size={48} className="card-icon contact-icon" />
        <h3 className="card-title">Let's Work Together</h3>
        <p className="card-desc">
          I am currently available for full-time roles and freelance opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:naveenkumarsubramani2603@gmail.com" 
          className="btn contact-btn"
        >
          Send Message <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
