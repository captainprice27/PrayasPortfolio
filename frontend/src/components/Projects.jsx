/**
 * =====================================================
 * PROJECTS SECTION COMPONENT
 * Large project cards (2 per row) with images and links
 * =====================================================
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import './Projects.css';

// =====================================================
// PROJECTS CONFIGURATION
// Update with your actual project information
// Large cards - only 2 per row for detailed view
// =====================================================
const PROJECTS_DATA = [
  {
    id: 1,
    // REPLACE: Your project title
    PROJECT_TITLE: "Project One Title",
    // REPLACE: Detailed description of your project
    PROJECT_DESCRIPTION: `A comprehensive description of your first project. Explain what problem 
    it solves, the key features, and what you learned building it. This card is large so you 
    can include meaningful details about your work.`,
    // REPLACE: Path to project screenshot in /public/assets/projects/
    PROJECT_IMAGE: "/assets/projects/project-1.png",
    // REPLACE: Technologies used
    TECHNOLOGIES: ["React", "Node.js", "MongoDB", "Express"],
    // REPLACE: Your GitHub repo URL
    GITHUB_URL: "https://github.com/YOUR_USERNAME/project-1",
    // REPLACE: Live demo URL (or null if none)
    DEMO_URL: "https://your-project-1-demo.com",
    PROJECT_YEAR: "2024",
    isFeatured: true,
  },
  {
    id: 2,
    PROJECT_TITLE: "Project Two Title",
    PROJECT_DESCRIPTION: `Description of your second project. What challenges did you overcome? 
    What was the impact or result? Include enough detail for recruiters to understand 
    the scope and complexity of your work.`,
    PROJECT_IMAGE: "/assets/projects/project-2.png",
    TECHNOLOGIES: ["Python", "Django", "PostgreSQL", "Docker"],
    GITHUB_URL: "https://github.com/YOUR_USERNAME/project-2",
    DEMO_URL: "https://your-project-2-demo.com",
    PROJECT_YEAR: "2024",
    isFeatured: true,
  },
  {
    id: 3,
    PROJECT_TITLE: "Project Three Title",
    PROJECT_DESCRIPTION: `Description of your third project. Highlight the unique aspects 
    of this project and what you learned while building it. What makes this project stand 
    out from your other work?`,
    PROJECT_IMAGE: "/assets/projects/project-3.png",
    TECHNOLOGIES: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    GITHUB_URL: "https://github.com/YOUR_USERNAME/project-3",
    DEMO_URL: "https://your-project-3-demo.com",
    PROJECT_YEAR: "2023",
    isFeatured: true,
  },
  {
    id: 4,
    PROJECT_TITLE: "Project Four Title",
    PROJECT_DESCRIPTION: `Description of your fourth project. This could be a personal project, 
    hackathon submission, or academic project that showcases specific skills you want 
    to highlight to potential employers.`,
    PROJECT_IMAGE: "/assets/projects/project-4.png",
    TECHNOLOGIES: ["React Native", "Firebase", "Redux"],
    GITHUB_URL: "https://github.com/YOUR_USERNAME/project-4",
    DEMO_URL: "https://www.example.com", // Live Demo Link
    PROJECT_YEAR: "2023",
    isFeatured: false,
  },
];

// Individual Project Card Component
function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.article
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Project Image */}
      <div className="project-image-wrapper">
        <motion.div 
          className="project-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={project.PROJECT_IMAGE} 
            alt={project.PROJECT_TITLE}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback placeholder */}
          <div className="image-placeholder" style={{display: 'none'}}>
            <FiFolder />
            <span>Project Image</span>
          </div>
        </motion.div>
        
        {/* Overlay with links on hover */}
        <div className="project-overlay">
          <a 
            href={project.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="overlay-link"
            aria-label="View GitHub Repository"
          >
            <FiGithub />
            <span>GitHub</span>
          </a>
          {project.DEMO_URL && (
            <a 
              href={project.DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="overlay-link"
              aria-label="View Live Demo"
            >
              <FiExternalLink />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* Year Badge */}
        <span className="project-year-badge">{project.PROJECT_YEAR}</span>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{project.PROJECT_TITLE}</h3>
        
        <p className="project-description">{project.PROJECT_DESCRIPTION}</p>
        
        {/* Technologies */}
        <div className="project-tech-stack">
          {project.TECHNOLOGIES.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>

        {/* Action Links */}
        <div className="project-links">
          <a 
            href={project.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FiGithub />
            View Code
          </a>
          {project.DEMO_URL && (
            <a 
              href={project.DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link primary"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const [headerRef, headerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="projects section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some things I've built</p>
        </motion.div>

        {/* Projects Grid - 2 columns for large cards */}
        <div className="projects-grid">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
