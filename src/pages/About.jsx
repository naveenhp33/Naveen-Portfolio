import React from 'react';
import { BookOpen, Award, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section animate-fade">
      <h2 className="section-title">About Me</h2>
      
      <div className="card" style={{ maxWidth: '900px', margin: '0 auto 3rem auto' }}>
        <h3 className="card-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
          Passionate <span className="text-gradient">Fullstack Web Developer</span>
        </h3>
        <p className="card-desc" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Results-driven full stack developer with hands-on experience building responsive web pages using HTML, CSS, and Python, and actively exploring AI agents for smarter applications and using Vibe Coding tools to quickly prototype and ship clean, user-focused interfaces. 
        </p>
        <p className="card-desc" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem' }}>
          Eager to learn new technologies, collaborate with cross-functional teams, and contribute to impactful solutions that help the organization grow.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <GraduationCap className="card-icon" />
          <h3 className="card-title">Education</h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>BACHELOR OF TECHNOLOGY</h4>
            <p style={{ color: 'var(--text-muted)' }}>Dhanalakshmi Srinivasan University</p>
            <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>Trichy, India | 2023 - 2027</p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>SECONDARY SCHOOL</h4>
            <p style={{ color: 'var(--text-muted)' }}>Mount Giris High School</p>
            <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>Kulithalai Karur | 2023</p>
          </div>
        </div>

        <div className="card">
          <Award className="card-icon" />
          <h3 className="card-title">Achievements & Activities</h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Cloud computing - NPTEL</h4>
            <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Jul-Oct 2025</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Successfully completed a 12-week NPTEL course on Cloud Computing, covering cloud architecture, virtualization, and service models.</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>MongoDB Basics for students</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Earned a MongoDB certification demonstrating proficiency in NoSQL database concepts, document-based data models, and CRUD operations.</p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Frontend Development Training - React.js (GUVI)</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Certified in React.js from GUVI (HCL Initiative & Google for Education Partner), with hands-on training in building modern, component-based web applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
