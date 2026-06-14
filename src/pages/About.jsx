import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const About = () => (
  <section id="about" className="section section-alt">
    <div className="container">
      {/* Section header */}
      <div className="section-header">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">Passionate About Crafting the Web</h2>
        <p className="section-subtitle">
          A quick overview of my background, education, and what drives me to build.
        </p>
      </div>

      <div className="about-layout">

        {/* Intro bio — full width */}
        <div className="about-intro-card">
          <p>
            Results-driven full-stack developer with hands-on experience building responsive web
            applications using HTML, CSS, JavaScript, React, and Python. I actively explore AI
            agents for smarter products and use modern vibe-coding tools to quickly prototype and
            ship clean, user-focused interfaces.
          </p>
          <p>
            Eager to learn new technologies, collaborate with cross-functional teams, and
            contribute to impactful solutions that help organisations grow. Currently pursuing a
            B.Tech at Dhanalakshmi Srinivasan University (2023–2027).
          </p>
        </div>

        {/* Education card */}
        <div className="card">
          <div className="about-card-head">
            <div className="about-card-icon" aria-hidden="true">
              <GraduationCap size={20} />
            </div>
            <h3 className="about-card-icon-title">Education</h3>
          </div>

          <div className="info-entry">
            <p className="info-entry-title">Bachelor of Technology</p>
            <p className="info-entry-sub">Dhanalakshmi Srinivasan University</p>
            <p className="info-entry-detail">Trichy, India · 2023 – 2027</p>
          </div>

          <div className="info-entry">
            <p className="info-entry-title">Secondary School</p>
            <p className="info-entry-sub">Mount Giris High School</p>
            <p className="info-entry-detail">Kulithalai, Karur · 2023</p>
          </div>
        </div>

        {/* Achievements card */}
        <div className="card">
          <div className="about-card-head">
            <div className="about-card-icon" aria-hidden="true">
              <Award size={20} />
            </div>
            <h3 className="about-card-icon-title">Certifications &amp; Achievements</h3>
          </div>

          <div className="info-entry">
            <p className="info-entry-title">Cloud Computing – NPTEL</p>
            <p className="info-entry-detail" style={{ marginBottom: '0.3rem' }}>Jul – Oct 2025</p>
            <p className="info-entry-sub" style={{ fontSize: '0.82rem' }}>
              12-week course covering cloud architecture, virtualisation, and service models.
            </p>
          </div>

          <div className="info-entry">
            <p className="info-entry-title">MongoDB Basics for Students</p>
            <p className="info-entry-sub" style={{ fontSize: '0.82rem' }}>
              Proficiency in NoSQL concepts, document-based data models, and CRUD operations.
            </p>
          </div>

          <div className="info-entry">
            <p className="info-entry-title">Frontend Dev – React.js (GUVI)</p>
            <p className="info-entry-sub" style={{ fontSize: '0.82rem' }}>
              Certified by GUVI (HCL Initiative &amp; Google for Education Partner) in
              component-based React development.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;
