import React from 'react';
import { BookOpen, Award, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section animate-fade">
      <h2 className="section-title">About Me</h2>
      
      <div className="card about-header-card">
        <h3 className="about-title-large">
          Passionate <span className="text-gradient">Fullstack Web Developer</span>
        </h3>
        <p className="card-desc">
          Results-driven full stack developer with hands-on experience building responsive web pages using HTML, CSS, and Python, and actively exploring AI agents for smarter applications and using Vibe Coding tools to quickly prototype and ship clean, user-focused interfaces. 
        </p>
        <p className="card-desc" style={{ marginTop: '1rem' }}>
          Eager to learn new technologies, collaborate with cross-functional teams, and contribute to impactful solutions that help the organization grow.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <GraduationCap className="card-icon" />
          <h3 className="card-title">Education</h3>
          
          <div className="info-block">
            <h4 className="info-title">BACHELOR OF TECHNOLOGY</h4>
            <p className="info-subtitle">Dhanalakshmi Srinivasan University</p>
            <p className="info-detail">Trichy, India | 2023 - 2027</p>
          </div>

          <div className="info-block">
            <h4 className="info-title">SECONDARY SCHOOL</h4>
            <p className="info-subtitle">Mount Giris High School</p>
            <p className="info-detail">Kulithalai Karur | 2023</p>
          </div>
        </div>

        <div className="card">
          <Award className="card-icon" />
          <h3 className="card-title">Achievements & Activities</h3>
          
          <div className="info-block">
            <h4 className="info-title">Cloud computing - NPTEL</h4>
            <p className="info-detail" style={{ marginBottom: '0.5rem' }}>Jul-Oct 2025</p>
            <p className="card-desc" style={{ fontSize: '0.95rem' }}>Successfully completed a 12-week NPTEL course on Cloud Computing, covering cloud architecture, virtualization, and service models.</p>
          </div>

          <div className="info-block">
            <h4 className="info-title">MongoDB Basics for students</h4>
            <p className="card-desc" style={{ fontSize: '0.95rem' }}>Earned a MongoDB certification demonstrating proficiency in NoSQL database concepts, document-based data models, and CRUD operations.</p>
          </div>

          <div className="info-block">
            <h4 className="info-title">Frontend Development Training - React.js (GUVI)</h4>
            <p className="card-desc" style={{ fontSize: '0.95rem' }}>Certified in React.js from GUVI (HCL Initiative & Google for Education Partner), with hands-on training in building modern, component-based web applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
