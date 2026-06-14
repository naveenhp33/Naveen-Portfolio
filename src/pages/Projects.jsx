import React from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';

const PROJECTS = [
  {
    title:   'Smart Bus',
    status:  'Live',
    desc:    'A smart transportation system helping students track college buses in real time using GPS. Students and parents can check bus locations, receive delay notifications, and manage bus fee information — improving safety, transparency, and daily convenience.',
    tags:    ['Python', 'Automation', 'IoT', 'GPS'],
    demo:    'https://smart-bus-s6yl.onrender.com',
    code:    'https://github.com/naveenhp33/Smart-bus.git',
  },
  {
    title:   'Sri & Sai Fashion – E-Commerce',
    status:  'Live',
    desc:    'Built and deployed a responsive e-commerce website for a boutique in Thiruthuraipoondi, Tamil Nadu. Features product listings, beauty services, training academy section, WhatsApp integration, and Cloudinary-powered image delivery.',
    tags:    ['JavaScript', 'HTML', 'CSS', 'REST APIs', 'Cloudinary'],
    demo:    'https://www.srisaifashion.shop/',
    code:    null,
  },
  {
    title:   'MediMart',
    status:  'Live',
    desc:    'A web-based medical e-commerce app allowing users to browse medicines, view details, manage cart and wishlist, and securely place orders. Features full-stack REST API integration and an order-tracking system backed by MongoDB.',
    tags:    ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    demo:    'https://medimart-te8x.onrender.com',
    code:    'https://github.com/naveenhp33/MediMart.git',
  },
  {
    title:   'Netflix Clone',
    status:  'Live',
    desc:    'A Netflix clone built with React.js, TMDB Movie API, and Firebase — displaying real-time movie data with user authentication. Users can browse movies by category and watch trailers instantly.',
    tags:    ['React.js', 'TMDB API', 'Firebase', 'Authentication'],
    demo:    'https://netflix-clone-v2.onrender.com',
    code:    'https://github.com/naveenhp33/Netflix-clone-V2.git',
  },
  {
    title:   'VDart Ticket Booking System',
    status:  'Internal',
    desc:    'Internal support ticket system built during a VDart internship. Enables employees to raise, track, and manage support tickets. Integrated Gmail API for automated email notifications on ticket creation, updates, and resolution.',
    tags:    ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Gmail API'],
    demo:    null,
    code:    null,
  },
];

const Projects = () => (
  <section id="projects" className="section section-alt">
    <div className="container">

      {/* Section header */}
      <div className="section-header">
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects I've built — from real-world client work to full-stack applications.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article className="project-card" key={project.title}>

            {/* Title + status */}
            <div className="project-card-top">
              <h3 className="project-title">{project.title}</h3>
              <span
                className="project-status"
                style={project.status === 'Internal' ? {
                  background: 'rgba(100,116,139,0.08)',
                  color: 'var(--text-muted)',
                  borderColor: 'var(--border)',
                } : {}}
              >
                {project.status === 'Internal' ? '🔒 Internal' : '● ' + project.status}
              </span>
            </div>

            {/* Description */}
            <p className="project-desc">{project.desc}</p>

            {/* Tech tags */}
            <div className="project-tags">
              {project.tags.map(t => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>

            {/* Action links */}
            {(project.demo || project.code) && (
              <div className="project-links">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label={`Source code for ${project.title}`}
                  >
                    Code <Github size={14} />
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

    </div>
  </section>
);

export default Projects;
