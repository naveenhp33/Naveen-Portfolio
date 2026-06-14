import React from 'react';
import { Code2, MonitorPlay, Database, Bot, Wrench } from 'lucide-react';

const SKILLS = [
  {
    icon: <Code2 size={20} />,
    title: 'Programming Languages',
    desc:  'Core languages for building logic and developing robust applications.',
    tags:  ['Python', 'JavaScript', 'HTML', 'CSS', 'Java'],
  },
  {
    icon: <MonitorPlay size={20} />,
    title: 'Frontend Development',
    desc:  'Building beautiful, interactive UIs with modern frameworks.',
    tags:  ['React.js', 'Bootstrap', 'Responsive Design'],
  },
  {
    icon: <Database size={20} />,
    title: 'Database Management',
    desc:  'Working with document-based data models and CRUD operations.',
    tags:  ['MongoDB', 'REST APIs', 'Express.js', 'Node.js'],
  },
  {
    icon: <Bot size={20} />,
    title: 'AI & Emerging Tech',
    desc:  'Continuously learning and incorporating AI into modern workflows.',
    tags:  ['AI Agents', 'Automation Workflows', 'Vibe Coding Tools'],
  },
  {
    icon: <Wrench size={20} />,
    title: 'Tools & Platforms',
    desc:  'Developer tooling, version control, and deployment platforms.',
    tags:  ['Git', 'GitHub', 'Vite', 'Cloudinary', 'Render', 'Firebase'],
  },
];

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      {/* Section header */}
      <div className="section-header">
        <span className="section-tag">Tech Stack</span>
        <h2 className="section-title">My Toolkit</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life — from design to deployment.
        </p>
      </div>

      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <div className="skill-icon" aria-hidden="true">{skill.icon}</div>
            <div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
            <div className="skill-tags">
              {skill.tags.map(t => (
                <span className="tag tag-blue" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
