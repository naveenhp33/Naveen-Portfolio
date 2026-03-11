import React from 'react';
import { Code2, MonitorPlay, Database, Bot } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="section animate-fade">
      <h2 className="section-title">My Tech Stack</h2>
      <div className="grid">
        <div className="card">
          <Code2 className="card-icon" />
          <h3 className="card-title">Programming Languages</h3>
          <p className="card-desc">Core languages used for building logic and developing applications.</p>
          <div className="tech-stack">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">HTML</span>
            <span className="tech-badge">CSS</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">Java</span>
          </div>
        </div>
        
        <div className="card">
          <MonitorPlay className="card-icon" />
          <h3 className="card-title">Frontend Development</h3>
          <p className="card-desc">Building beautiful, interactive user interfaces with modern frameworks.</p>
          <div className="tech-stack">
            <span className="tech-badge">React.js</span>
            <span className="tech-badge">Bootstrap</span>
          </div>
        </div>
        
        <div className="card">
          <Database className="card-icon" />
          <h3 className="card-title">Database Management</h3>
          <p className="card-desc">Working with document-based data models and CRUD operations.</p>
          <div className="tech-stack">
            <span className="tech-badge">MongoDB</span>
          </div>
        </div>

        <div className="card">
          <Bot className="card-icon" />
          <h3 className="card-title">AI & Emerging Tech</h3>
          <p className="card-desc">Continuously learning and incorporating AI into workflows.</p>
          <div className="tech-stack">
            <span className="tech-badge">Learning AI Agents</span>
            <span className="tech-badge">Automation-based Workflows</span>
            <span className="tech-badge">Vibe Coding Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
