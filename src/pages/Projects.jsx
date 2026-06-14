import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section animate-fade">
      <h2 className="section-title">Featured Projects</h2>
      <div className="grid">
        
        {/* Project 1 */}
        <div className="card">
          <h3 className="card-title">Smart Bus</h3>
          <p className="card-desc">
            A smart transportation system designed to help students track their college buses in real time using GPS. It allows students and parents to check bus locations, receive delay notifications, and manage bus fee information easily, improving safety, transparency, and convenience in daily campus transportation.
          </p>
          <div className="tech-stack" style={{ marginBottom: '1.5rem' }}>
            <span className="tech-badge">Python</span>
            <span className="tech-badge">Automation</span>
            <span className="tech-badge">IoT</span>
          </div>
          <div className="project-actions">
            <a href="https://smart-bus-s6yl.onrender.com" target="_blank" rel="noreferrer" className="btn btn-outline">
              Live Demo <ExternalLink size={18} />
            </a>
            <a href="https://github.com/naveenhp33/Smart-bus.git" target="_blank" rel="noreferrer" className="btn btn-outline">
              Code <Github size={18} />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card">
          <h3 className="card-title">Sri &amp; Sai Fashion – E-Commerce</h3>
          <p className="card-desc">
            Built and deployed a responsive e-commerce website for Sri &amp; Sai Fashion, a boutique in Thiruthuraipoondi, Tamil Nadu, featuring product listings, beauty services, and a training academy section with WhatsApp integration and Cloudinary-powered image delivery.
          </p>
          <div className="tech-stack" style={{ marginBottom: '1.5rem' }}>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">REST APIs</span>
            <span className="tech-badge">HTML</span>
            <span className="tech-badge">CSS</span>
            <span className="tech-badge">Cloudinary</span>
          </div>
          <div className="project-actions">
            <a href="https://www.srisaifashion.shop/" target="_blank" rel="noreferrer" className="btn btn-outline">
              Live Demo <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card">
          <h3 className="card-title">VDart Ticket Booking System</h3>
          <p className="card-desc">
            Built an internal ticket booking system for VDart as part of the internship, enabling employees to raise, track, and manage support tickets. Integrated Gmail API for automated email notifications on ticket creation, updates, and resolution.
          </p>
          <div className="tech-stack" style={{ marginBottom: '1.5rem' }}>
            <span className="tech-badge">MongoDB</span>
            <span className="tech-badge">Express.js</span>
            <span className="tech-badge">React.js</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Gmail API</span>
          </div>
        </div>

        {/* Project 4 */}
        <div className="card">
          <h3 className="card-title">MediMart</h3>
          <p className="card-desc">
            A web-based medical e-commerce application allowing users to browse medicines, view details, manage their cart/wishlist, and securely place orders. Features full-stack REST API integration and an order tracking system backed by a database.
          </p>
          <div className="tech-stack" style={{ marginBottom: '1.5rem' }}>
            <span className="tech-badge">React.js</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">MongoDB</span>
            <span className="tech-badge">REST API</span>
          </div>
          <div className="project-actions">
            <a href="https://medimart-te8x.onrender.com" target="_blank" rel="noreferrer" className="btn btn-outline">
              Live Demo <ExternalLink size={18} />
            </a>
            <a href="https://github.com/naveenhp33/MediMart.git" target="_blank" rel="noreferrer" className="btn btn-outline">
              Code <Github size={18} />
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="card">
          <h3 className="card-title">Netflix Clone</h3>
          <p className="card-desc">
            Built a Netflix Clone using React.js, TMDB Movie API, and Firebase to display real-time movie data with user authentication. Users can browse movies by categories and watch trailers instantly.
          </p>
          <div className="tech-stack" style={{ marginBottom: '1.5rem' }}>
            <span className="tech-badge">React.js</span>
            <span className="tech-badge">TMDB API</span>
            <span className="tech-badge">Firebase</span>
          </div>
          <div className="project-actions">
            <a href="https://netflix-clone-v2.onrender.com" target="_blank" rel="noreferrer" className="btn btn-outline">
              Live Demo <ExternalLink size={18} />
            </a>
            <a href="https://github.com/naveenhp33/Netflix-clone-V2.git" target="_blank" rel="noreferrer" className="btn btn-outline">
              Code <Github size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
