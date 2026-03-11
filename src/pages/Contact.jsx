import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section animate-fade">
      <h2 className="section-title">Get In Touch</h2>
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Mail size={48} className="card-icon" style={{ margin: '0 auto 1.5rem auto', color: 'var(--accent-primary)' }} />
        <h3 className="card-title">Let's Work Together</h3>
        <p className="card-desc" style={{ marginBottom: '2rem' }}>
          I am currently available for full-time roles and freelance opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:naveenkumarsubramani2603@gmail.com" 
          className="btn" 
          style={{ display: 'inline-flex', padding: '1rem 2rem', fontSize: '1.1rem' }}
        >
          Send Message <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
