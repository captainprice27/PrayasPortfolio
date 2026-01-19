/**
 * =====================================================
 * PROJECTS SECTION COMPONENT
 * Large project cards (2 per row) with images and links
 * =====================================================
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import './Projects.css';

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
            href={project.GITHUB_REPO_URL || project.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="overlay-link"
            aria-label="View GitHub Repository"
          >
            <FiGithub />
            <span>GitHub</span>
          </a>
          {(project.LIVE_DEMO_URL || project.DEMO_URL) && (
            <a 
              href={project.LIVE_DEMO_URL || project.DEMO_URL}
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
          {(project.TECHNOLOGIES_USED || project.TECHNOLOGIES || []).map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>

        {/* Action Links */}
        <div className="project-links">
          <a 
            href={project.GITHUB_REPO_URL || project.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FiGithub />
            View Code
          </a>
          {(project.LIVE_DEMO_URL || project.DEMO_URL) && (
            <a 
              href={project.LIVE_DEMO_URL || project.DEMO_URL}
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
  const { data } = usePortfolio();
  const [headerRef, headerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const projects = data?.projects || [];

  // Define full fallback list for robustness
  const fallbackProjects = [
    {
      id: 1,
      PROJECT_TITLE: "Ransom Check",
      PROJECT_DESCRIPTION: "Developed an end-to-end security pipeline that identifies Android ransomware across 20+ families by transforming raw APK data into visual RGB feature maps for deep learning analysis. Using Python and TensorFlow, I engineered a Convolutional Neural Network (CNN) that achieved 86% accuracy.",
      PROJECT_IMAGE: "/assets/projects/project-1.png",
      TECHNOLOGIES_USED: ["Python", "TensorFlow", "Flask", "MongoDB", "JavaScript"],
      GITHUB_REPO_URL: "https://github.com/captainprice27/Ransom-Check",
      LIVE_DEMO_URL: "https://ransom-check.netlify.app/",
      PROJECT_YEAR: "2025"
    },
    {
      id: 2,
      PROJECT_TITLE: "Project Two Title",
      PROJECT_DESCRIPTION: "Description of your second project. What technologies did you use? What challenges did you overcome? What was the impact or result of this project?",
      PROJECT_IMAGE: "/assets/projects/project-2.png",
      TECHNOLOGIES_USED: ["Python", "Django", "PostgreSQL", "Docker"],
      GITHUB_REPO_URL: "#",
      LIVE_DEMO_URL: "#",
      PROJECT_YEAR: "2024"
    },
    {
      id: 3,
      PROJECT_TITLE: "Project Three Title",
      PROJECT_DESCRIPTION: "Description of your third project. Highlight the unique aspects of this project and what you learned while building it.",
      PROJECT_IMAGE: "/assets/projects/project-3.png",
      TECHNOLOGIES_USED: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      GITHUB_REPO_URL: "#",
      LIVE_DEMO_URL: "#",
      PROJECT_YEAR: "2023"
    },
    {
      id: 4,
      PROJECT_TITLE: "Project Four Title",
      PROJECT_DESCRIPTION: "Description of your fourth project. This could be a personal project, hackathon submission, or academic project that showcases your skills.",
      PROJECT_IMAGE: "/assets/projects/project-4.png",
      TECHNOLOGIES_USED: ["React Native", "Firebase", "Redux"],
      GITHUB_REPO_URL: "#",
      LIVE_DEMO_URL: "#",
      PROJECT_YEAR: "2023"
    }
  ];

  // Use fallback if API returns less than 4 projects to ensure a full UI
  const displayProjects = projects.length >= 4 ? projects : fallbackProjects;

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
          {displayProjects.map((project, index) => (
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
